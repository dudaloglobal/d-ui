import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  offset,
  safePolygon,
  shift,
  useClick,
  useClientPoint,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react';
import {
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cx } from '../../lib/cx';
import {
  OVERLAY_PADDING,
  overlayPortalProps,
  useInheritedTheme,
  type OverlayPlacement,
} from '../floating';

export type MenuSize = 'sm' | 'md' | 'lg';
export type MenuPlacement = OverlayPlacement;

type MenuSurfaceContextValue = {
  size: MenuSize;
  activeIndex: number | null;
  nextIndex: () => number;
  listRef: React.MutableRefObject<Array<HTMLElement | null>>;
  labelsRef: React.MutableRefObject<Array<string | null>>;
  getItemProps: (
    userProps?: HTMLAttributes<HTMLElement> & {
      ref?: (node: HTMLElement | null) => void;
    },
  ) => Record<string, unknown>;
  closeTree: () => void;
};

const MenuSurfaceContext = createContext<MenuSurfaceContextValue | null>(null);

function useMenuSurface(component: string): MenuSurfaceContextValue {
  const context = useContext(MenuSurfaceContext);
  if (!context) {
    throw new Error(`${component} must be used within Menu or ContextMenu`);
  }
  return context;
}

export type MenuProps = {
  /** Nom accessible du `menu`. Fallback anglais si omis. */
  label?: string;
  /** Déclencheur unique (focusable), typiquement un `Button`. */
  trigger: ReactElement;
  children: ReactNode;
  size?: MenuSize;
  placement?: MenuPlacement;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

export type ContextMenuProps = Omit<MenuProps, 'placement'> & {
  placement?: MenuPlacement;
};

export type MenuItemProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'onSelect'
> & {
  onSelect?: () => void;
  shortcut?: string;
  icon?: ReactNode;
  /** Texte pour le typeahead si `children` n’est pas une chaîne. */
  textValue?: string;
};

export type MenuSubProps = {
  label: string;
  disabled?: boolean;
  children: ReactNode;
};

export type MenuSeparatorProps = HTMLAttributes<HTMLDivElement>;

const itemSizeClass: Record<MenuSize, string> = {
  sm: 'min-h-8 px-2 text-sm',
  md: 'min-h-9 px-3 text-sm',
  lg: 'min-h-10 px-3 text-base',
};

function itemText(children: ReactNode, textValue?: string): string {
  if (textValue) return textValue;
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children);
  }
  return '';
}

function ChevronIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type MenuViewMode = 'menu' | 'submenu' | 'context';

function MenuView({
  mode,
  label = 'Menu',
  trigger,
  triggerLabel,
  children,
  size = 'md',
  placement,
  disabled = false,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  className,
  parentSurface,
  parentIndex,
}: {
  mode: MenuViewMode;
  label?: string;
  trigger?: ReactElement;
  triggerLabel?: string;
  children: ReactNode;
  size?: MenuSize;
  placement?: MenuPlacement;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  parentSurface?: MenuSurfaceContextValue;
  parentIndex?: number;
}) {
  const generatedId = useId();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const isNested = mode === 'submenu';
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [referenceEl, setReferenceEl] = useState<Element | null>(null);
  const [contextPoint, setContextPoint] = useState<{ x: number; y: number } | null>(null);
  const isControlled = openProp !== undefined;
  const open = disabled ? false : (openProp ?? uncontrolledOpen);

  const setOpen = useCallback(
    (next: boolean) => {
      if (disabled && next) return;
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
      if (!next) setContextPoint(null);
    },
    [disabled, isControlled, onOpenChange],
  );

  const listRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);
  const itemIndexRef = useRef(0);
  itemIndexRef.current = 0;

  const preferredPlacement: MenuPlacement =
    placement ??
    (isNested ? 'right-start' : mode === 'context' ? 'right-start' : 'bottom-start');

  const { refs, floatingStyles, context } = useFloating({
    nodeId,
    open,
    onOpenChange: setOpen,
    placement: preferredPlacement,
    middleware: [
      offset(isNested ? { mainAxis: 0, alignmentAxis: -4 } : 4),
      flip({ padding: OVERLAY_PADDING, fallbackAxisSideDirection: 'start' }),
      shift({ padding: OVERLAY_PADDING }),
    ],
    whileElementsMounted: autoUpdate,
  });
  const theme = useInheritedTheme(referenceEl);
  const portal = overlayPortalProps(theme);

  const hover = useHover(context, {
    enabled: isNested && !disabled,
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
  });
  const click = useClick(context, {
    enabled: mode === 'menu' && !disabled,
    event: 'mousedown',
    toggle: !isNested,
    ignoreMouse: isNested,
  });
  const clientPoint = useClientPoint(context, {
    enabled: mode === 'context' && open && contextPoint !== null,
    x: contextPoint?.x,
    y: contextPoint?.y,
  });
  const dismiss = useDismiss(context, {
    bubbles: isNested,
    ancestorScroll: true,
  });
  const role = useRole(context, { role: 'menu' });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    nested: isNested,
    loop: true,
    focusItemOnOpen: true,
    onNavigate: setActiveIndex,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: open ? setActiveIndex : undefined,
  });
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    hover,
    click,
    clientPoint,
    dismiss,
    role,
    listNav,
    typeahead,
  ]);

  useEffect(() => {
    if (!tree) return undefined;
    function handleTreeClick() {
      setOpen(false);
    }
    function onSubMenuOpen(event: { nodeId: string; parentId: string | null }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setOpen(false);
      }
    }
    tree.events.on('click', handleTreeClick);
    tree.events.on('menuopen', onSubMenuOpen);
    return () => {
      tree.events.off('click', handleTreeClick);
      tree.events.off('menuopen', onSubMenuOpen);
    };
  }, [nodeId, parentId, setOpen, tree]);

  useEffect(() => {
    if (open && tree) {
      tree.events.emit('menuopen', { parentId, nodeId });
    }
  }, [open, tree, nodeId, parentId]);

  function closeTree() {
    tree?.events.emit('click');
    setOpen(false);
  }

  const surface: MenuSurfaceContextValue = {
    size,
    activeIndex,
    nextIndex: () => itemIndexRef.current++,
    listRef,
    labelsRef,
    getItemProps,
    closeTree,
  };

  const menuId = `${generatedId}-menu`;

  useLayoutEffect(() => {
    if (!parentSurface || parentIndex === undefined || !triggerLabel) return;
    parentSurface.labelsRef.current[parentIndex] = disabled ? null : triggerLabel;
  });

  const nestedTriggerProps = isNested
    ? parentSurface?.getItemProps(
        getReferenceProps({
          ref(node: HTMLButtonElement | null) {
            refs.setReference(node);
            setReferenceEl(node);
            if (parentSurface && parentIndex !== undefined) {
              parentSurface.listRef.current[parentIndex] = node;
            }
          },
        }),
      )
    : undefined;

  const triggerNode = isNested ? (
    <button
      type="button"
      role="menuitem"
      aria-haspopup="menu"
      aria-expanded={open}
      aria-controls={open ? menuId : undefined}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      {...nestedTriggerProps}
      className={cx(
        'flex w-full items-center justify-between gap-6 rounded-sm font-sans font-medium text-fg',
        itemSizeClass[size],
        'bg-transparent text-start',
        'focus-visible:bg-surface-muted focus-visible:outline-none',
        open && 'bg-surface-muted',
        disabled && 'opacity-50',
      )}
    >
      <span>{triggerLabel}</span>
      <span className="inline-flex shrink-0 text-fg-muted" aria-hidden="true">
        <ChevronIcon />
      </span>
    </button>
  ) : isValidElement(trigger) ? (
    <span
      ref={(node) => {
        refs.setReference(node);
        setReferenceEl(node);
      }}
      className="inline-flex max-w-full"
    >
      {cloneElement(
        trigger,
        getReferenceProps({
          'aria-haspopup': 'menu',
          'aria-expanded': open,
          'aria-controls': open ? menuId : undefined,
          disabled:
            disabled || Boolean((trigger.props as { disabled?: boolean }).disabled),
          ...(mode === 'context'
            ? {
                tabIndex: (trigger.props as { tabIndex?: number }).tabIndex ?? 0,
                onContextMenu(event: MouseEvent) {
                  if (disabled) return;
                  event.preventDefault();
                  setContextPoint({ x: event.clientX, y: event.clientY });
                  setOpen(true);
                },
                onKeyDown(event: KeyboardEvent) {
                  (
                    trigger.props as { onKeyDown?: (event: KeyboardEvent) => void }
                  ).onKeyDown?.(event);
                  if (event.defaultPrevented || disabled) return;
                  const contextKey =
                    event.key === 'ContextMenu' ||
                    (event.key === 'F10' && event.shiftKey);
                  if (!contextKey) return;
                  event.preventDefault();
                  const rect = (
                    event.currentTarget as HTMLElement
                  ).getBoundingClientRect();
                  setContextPoint({ x: rect.left, y: rect.bottom });
                  setOpen(true);
                },
              }
            : {}),
        }) as Partial<typeof trigger.props>,
      )}
    </span>
  ) : (
    trigger
  );

  const panel = (
    <div
      ref={refs.setFloating}
      id={menuId}
      style={floatingStyles}
      {...getFloatingProps()}
      {...portal}
      aria-label={label}
      aria-labelledby={undefined}
      className={cx(
        portal.className,
        'min-w-44 rounded-md border border-border bg-bg py-1 text-fg shadow-lg outline-none',
        className,
      )}
    >
      <MenuSurfaceContext.Provider value={surface}>
        {children}
      </MenuSurfaceContext.Provider>
    </div>
  );

  return (
    <FloatingNode id={nodeId}>
      {triggerNode}
      {open ? (
        <FloatingPortal>
          <FloatingFocusManager
            context={context}
            modal={false}
            initialFocus={isNested ? -1 : 0}
            returnFocus={!isNested}
            guards={false}
          >
            {panel}
          </FloatingFocusManager>
        </FloatingPortal>
      ) : null}
    </FloatingNode>
  );
}

function MenuTree({ children }: { children: ReactNode }) {
  const parentId = useFloatingParentNodeId();
  if (parentId === null) {
    return <FloatingTree>{children}</FloatingTree>;
  }
  return children;
}

export function Menu(props: MenuProps) {
  return (
    <MenuTree>
      <MenuView mode="menu" {...props} />
    </MenuTree>
  );
}

export function ContextMenu(props: ContextMenuProps) {
  return (
    <MenuTree>
      <MenuView mode="context" {...props} />
    </MenuTree>
  );
}

export function MenuSub({ label, disabled, children }: MenuSubProps) {
  const parent = useMenuSurface('MenuSub');
  const parentIndex = parent.nextIndex();
  return (
    <MenuView
      mode="submenu"
      label={label}
      triggerLabel={label}
      disabled={disabled}
      size={parent.size}
      parentSurface={parent}
      parentIndex={parentIndex}
    >
      {children}
    </MenuView>
  );
}

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(function MenuItem(
  {
    children,
    onSelect,
    disabled,
    shortcut,
    icon,
    textValue,
    className,
    onClick,
    ...rest
  },
  forwardedRef,
) {
  const surface = useMenuSurface('MenuItem');
  const index = surface.nextIndex();
  const selected = surface.activeIndex === index;
  const label = itemText(children, textValue);

  useLayoutEffect(() => {
    surface.labelsRef.current[index] = disabled ? null : label;
  });

  useLayoutEffect(() => {
    if (!selected || disabled) return;
    surface.listRef.current[index]?.focus({ preventScroll: true });
  }, [disabled, index, selected, surface.listRef]);

  return (
    <button
      {...rest}
      type="button"
      role="menuitem"
      disabled={disabled}
      aria-disabled={disabled || undefined}
      {...surface.getItemProps({
        ref(node: HTMLElement | null) {
          surface.listRef.current[index] = node;
          if (typeof forwardedRef === 'function') forwardedRef(node as HTMLButtonElement);
          else if (forwardedRef) forwardedRef.current = node as HTMLButtonElement;
        },
        onClick(event) {
          onClick?.(event as unknown as MouseEvent<HTMLButtonElement>);
          if (disabled || event.defaultPrevented) return;
          onSelect?.();
          surface.closeTree();
        },
      })}
      className={cx(
        'flex w-full items-center gap-2 rounded-sm font-sans font-medium text-fg',
        itemSizeClass[surface.size],
        'bg-transparent text-start',
        'focus-visible:bg-surface-muted focus-visible:outline-none',
        selected && 'bg-surface-muted',
        disabled && 'opacity-50',
        className,
      )}
    >
      {icon ? (
        <span className="inline-flex shrink-0 [&_svg]:block" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 flex-1">{children}</span>
      {shortcut ? (
        <kbd className="text-fg-muted ms-4 font-sans text-xs font-normal">{shortcut}</kbd>
      ) : null}
    </button>
  );
});

export function MenuSeparator({ className, ...rest }: MenuSeparatorProps) {
  return (
    <div
      {...rest}
      role="separator"
      className={cx('bg-border-subtle my-1 h-px w-full', className)}
    />
  );
}
