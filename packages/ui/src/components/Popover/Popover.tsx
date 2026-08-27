import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import {
  cloneElement,
  isValidElement,
  useId,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cx } from '../../lib/cx';
import {
  OVERLAY_OFFSET,
  OVERLAY_PADDING,
  overlayPortalProps,
  useInheritedTheme,
  type OverlayPlacement,
} from '../floating';

export type PopoverPlacement = OverlayPlacement;

export type PopoverProps = {
  /** Contenu du panneau. */
  content: ReactNode;
  /** Déclencheur unique (focusable). */
  children: ReactElement;
  /** Côté préféré. Flip/shift recadrent près des bords du viewport. */
  placement?: PopoverPlacement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /**
   * Piège le focus dans le panneau (rôle `dialog`).
   * À passer lorsque le contenu est interactif (boutons, champs).
   */
  trapFocus?: boolean;
  /** Empêche l’ouverture. */
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
};

export function Popover({
  content,
  children,
  placement = 'bottom',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  trapFocus = false,
  disabled = false,
  className,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: PopoverProps) {
  const panelId = useId();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [referenceEl, setReferenceEl] = useState<Element | null>(null);
  const isControlled = openProp !== undefined;
  const open = disabled ? false : (openProp ?? uncontrolledOpen);

  const setOpen = (next: boolean) => {
    if (disabled && next) return;
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [
      offset(OVERLAY_OFFSET),
      flip({ padding: OVERLAY_PADDING, fallbackAxisSideDirection: 'start' }),
      shift({ padding: OVERLAY_PADDING }),
    ],
    whileElementsMounted: autoUpdate,
  });
  const theme = useInheritedTheme(referenceEl);
  const portal = overlayPortalProps(theme);

  const click = useClick(context, { enabled: !disabled });
  const dismiss = useDismiss(context, { ancestorScroll: true });
  const role = useRole(context, { role: 'dialog' });
  const { getReferenceProps, getFloatingProps } = useInteractions(
    trapFocus ? [click, dismiss, role] : [click, dismiss],
  );

  const trigger = isValidElement(children)
    ? cloneElement(
        children,
        getReferenceProps({
          'aria-expanded': open,
          'aria-haspopup': trapFocus ? 'dialog' : true,
          'aria-controls': panelId,
        }) as Partial<typeof children.props>,
      )
    : children;

  const panel = (
    <div
      ref={refs.setFloating}
      style={floatingStyles}
      {...getFloatingProps()}
      {...portal}
      {...(!trapFocus && (ariaLabel || ariaLabelledBy)
        ? { role: 'region' as const }
        : {})}
      id={panelId}
      className={cx(
        portal.className,
        'max-w-sm rounded-md border border-border bg-bg px-3 py-3 text-fg shadow-lg',
        'outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        className,
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {content}
    </div>
  );

  return (
    <>
      <span
        ref={(node) => {
          refs.setReference(node);
          setReferenceEl(node);
        }}
        className="inline-flex max-w-full"
      >
        {trigger}
      </span>
      {open ? (
        <FloatingPortal>
          {trapFocus ? (
            <FloatingFocusManager context={context} modal returnFocus initialFocus={0}>
              {panel}
            </FloatingFocusManager>
          ) : (
            panel
          )}
        </FloatingPortal>
      ) : null}
    </>
  );
}
