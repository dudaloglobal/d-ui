import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
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
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cx } from '../../lib/cx';
import { cornerRadiusClass, type CornerRadius } from '../../lib/cornerRadius';
import {
  OVERLAY_ARROW_HEIGHT,
  OVERLAY_ARROW_WIDTH,
  OVERLAY_PADDING,
  overlayPortalProps,
  useInheritedTheme,
  type OverlayPlacement,
} from '../floating';

export type PopoverPlacement = OverlayPlacement;
export type PopoverRadius = CornerRadius;

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
  /** Flèche vers le déclencheur. Défaut : `true`. */
  arrow?: boolean;
  /**
   * Sans chrome (fond, bordure, padding). Le style vient de `className`.
   */
  unstyled?: boolean;
  /** Arrondi des coins du panneau. Défaut : `md`. */
  radius?: PopoverRadius;
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
  arrow: arrowEnabled = true,
  unstyled = false,
  radius = 'md',
  className,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
}: PopoverProps) {
  const panelId = useId();
  const arrowRef = useRef<SVGSVGElement>(null);
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
      offset(arrowEnabled ? OVERLAY_ARROW_HEIGHT + 4 : OVERLAY_PADDING),
      flip({ padding: OVERLAY_PADDING, fallbackAxisSideDirection: 'start' }),
      shift({ padding: OVERLAY_PADDING }),
      ...(arrowEnabled ? [arrow({ element: arrowRef, padding: 6 })] : []),
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
        !unstyled && 'max-w-sm border border-border bg-bg px-3 py-3 text-fg shadow-lg',
        cornerRadiusClass[radius],
        'outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
        className,
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {content}
      {arrowEnabled ? (
        <FloatingArrow
          ref={arrowRef}
          context={context}
          width={OVERLAY_ARROW_WIDTH}
          height={OVERLAY_ARROW_HEIGHT}
          strokeWidth={1}
          className="d-ui-popover-arrow"
          data-d-ui-popover-arrow=""
          aria-hidden
        />
      ) : null}
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
