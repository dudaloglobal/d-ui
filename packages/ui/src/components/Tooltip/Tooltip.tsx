import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
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
  usePrefersReducedMotion,
  type OverlayPlacement,
} from '../floating';

export type TooltipPlacement = OverlayPlacement;
export type TooltipRadius = CornerRadius;

export type TooltipProps = {
  /** Contenu non interactif. Ne pas y placer de bouton, lien ou champ. */
  content: ReactNode;
  /** Déclencheur unique (focusable). `Button` n’expose pas de ref : un wrapper sert de référence. */
  children: ReactElement;
  /** Côté préféré. Flip/shift recadrent près des bords du viewport. */
  placement?: TooltipPlacement;
  /** Ouvert contrôlé. Sinon `defaultOpen`. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Délai d’ouverture au survol (ms). `0` si `prefers-reduced-motion`. */
  delayMs?: number;
  /** Empêche l’ouverture. */
  disabled?: boolean;
  /** Arrondi des coins du panneau. Défaut : `md`. */
  radius?: TooltipRadius;
  className?: string;
};

const DEFAULT_DELAY_MS = 200;

export function Tooltip({
  content,
  children,
  placement = 'top',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  delayMs = DEFAULT_DELAY_MS,
  disabled = false,
  radius = 'md',
  className,
}: TooltipProps) {
  const tooltipId = useId();
  const arrowRef = useRef<SVGSVGElement>(null);
  const reducedMotion = usePrefersReducedMotion();
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
      offset(OVERLAY_ARROW_HEIGHT + 4),
      flip({ padding: OVERLAY_PADDING, fallbackAxisSideDirection: 'start' }),
      shift({ padding: OVERLAY_PADDING }),
      arrow({ element: arrowRef, padding: 6 }),
    ],
    whileElementsMounted: autoUpdate,
  });
  const theme = useInheritedTheme(referenceEl);
  const portal = overlayPortalProps(theme);
  const hoverDelay = reducedMotion ? 0 : delayMs;

  const hover = useHover(context, {
    enabled: !disabled,
    move: false,
    delay: { open: hoverDelay, close: 0 },
  });
  const focus = useFocus(context, { enabled: !disabled });
  const dismiss = useDismiss(context, { ancestorScroll: true });
  const role = useRole(context, { role: 'tooltip' });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const trigger = isValidElement(children)
    ? cloneElement(
        children,
        getReferenceProps({
          'aria-describedby': open ? tooltipId : undefined,
        }) as Partial<typeof children.props>,
      )
    : children;

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
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            {...portal}
            id={tooltipId}
            className={cx(
              portal.className,
              'pointer-events-none max-w-xs bg-fg px-2 py-1 text-sm text-bg shadow-md',
              cornerRadiusClass[radius],
              className,
            )}
          >
            {content}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              width={OVERLAY_ARROW_WIDTH}
              height={OVERLAY_ARROW_HEIGHT}
              className="d-ui-tooltip-arrow"
              data-d-ui-tooltip-arrow=""
              aria-hidden
            />
          </div>
        </FloatingPortal>
      ) : null}
    </>
  );
}
