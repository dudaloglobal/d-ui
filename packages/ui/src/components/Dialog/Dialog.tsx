import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import {
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from 'react';
import { cx } from '../../lib/cx';
import {
  overlayPortalProps,
  useInheritedTheme,
  usePrefersReducedMotion,
} from '../floating';
import { DialogContext, type DialogContextValue } from './DialogContext';

export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Largeur maximale. Toutes les tailles retombent pleine largeur sur petit écran. */
  size?: DialogSize;
  /**
   * Rôle `alertdialog` : décision destructive ou irréversible.
   *
   * Le clic sur l'arrière-plan et la croix de fermeture sont retirés — on ne
   * sort que par une action explicite. `Escape` reste actif : WCAG 2.1.2
   * interdit de piéger le clavier.
   */
  alert?: boolean;
  /** Croix de fermeture en haut à droite. Ignorée si `alert`. */
  dismissible?: boolean;
  /** Nom accessible de la croix. */
  dismissLabel?: string;
  /** Élément qui prend le focus à l'ouverture. Par défaut, le premier focusable. */
  initialFocus?: MutableRefObject<HTMLElement | null>;
  children: ReactNode;
  className?: string;
  /** Requis si aucun `DialogTitle` n'est rendu. */
  'aria-label'?: string;
};

/** Largeurs maximales. En dessous de `sm`, toutes retombent sur la même. */
const sizeClass: Record<DialogSize, string> = {
  xs: 'sm:max-w-xs',
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-lg',
  lg: 'sm:max-w-2xl',
  xl: 'sm:max-w-4xl',
  '2xl': 'sm:max-w-6xl',
};

/**
 * Overlay modal : `Dialog` et, avec `alert`, `alertdialog`.
 *
 * Le piège de focus, la restitution du focus, le verrouillage du défilement et
 * l'inertie du reste de la page viennent de `@floating-ui/react`, déjà utilisé
 * par `Popover` et `Menu` — les overlays du design system partagent la même
 * mécanique plutôt que chacun la sienne.
 *
 * L'empilement n'est pas supporté : un `Dialog` n'en ouvre pas un second.
 */
export function Dialog({
  open,
  onOpenChange,
  size = 'md',
  alert = false,
  dismissible = false,
  dismissLabel = 'Fermer',
  initialFocus,
  children,
  className,
  'aria-label': ariaLabel,
}: DialogProps) {
  const baseId = useId();
  const [anchor, setAnchor] = useState<Element | null>(null);
  const [hasTitle, setHasTitle] = useState(false);
  const [hasDescription, setHasDescription] = useState(false);
  const firstActionRef = useRef<HTMLElement | null>(null);

  const { refs, context } = useFloating({ open, onOpenChange });

  /*
   * `alert` retire le clic extérieur, pas `Escape` : un dialogue dont on ne
   * peut pas sortir au clavier serait un piège (WCAG 2.1.2).
   */
  const dismiss = useDismiss(context, { outsidePress: !alert, escapeKey: true });
  const role = useRole(context, { role: alert ? 'alertdialog' : 'dialog' });
  const { getFloatingProps } = useInteractions([dismiss, role]);

  const theme = useInheritedTheme(anchor);
  const portal = overlayPortalProps(theme);
  const reducedMotion = usePrefersReducedMotion();

  const close = useCallback(() => onOpenChange(false), [onOpenChange]);
  const registerFirstAction = useCallback((element: HTMLElement | null) => {
    firstActionRef.current = element;
  }, []);

  const value = useMemo<DialogContextValue>(
    () => ({
      titleId: `${baseId}-title`,
      descriptionId: `${baseId}-description`,
      alert,
      close,
      setHasTitle,
      setHasDescription,
      registerFirstAction,
    }),
    [baseId, alert, close, registerFirstAction],
  );

  /*
   * Sur un `alertdialog`, le focus va sur la première action — l'issue non
   * destructive — plutôt que sur le premier focusable du dialogue.
   */
  const resolvedInitialFocus = initialFocus ?? (alert ? firstActionRef : undefined);

  const showDismiss = dismissible && !alert;

  return (
    <>
      <span ref={setAnchor} hidden aria-hidden="true" />
      {open ? (
        <FloatingPortal>
          <FloatingOverlay
            lockScroll
            data-d-ui-theme={portal['data-d-ui-theme']}
            className={cx(
              portal.className,
              'grid place-items-center overflow-y-auto p-4',
              'bg-fg/40',
              reducedMotion ? null : 'd-ui-dialog-overlay',
            )}
          >
            <FloatingFocusManager
              context={context}
              modal
              returnFocus
              initialFocus={resolvedInitialFocus}
            >
              <div
                ref={refs.setFloating}
                {...getFloatingProps()}
                aria-label={hasTitle ? undefined : ariaLabel}
                aria-labelledby={hasTitle ? value.titleId : undefined}
                aria-describedby={hasDescription ? value.descriptionId : undefined}
                className={cx(
                  'bg-bg text-fg border-border relative w-full rounded-lg border shadow-xl',
                  'p-6 outline-none',
                  sizeClass[size],
                  reducedMotion ? null : 'd-ui-dialog-panel',
                  className,
                )}
              >
                <DialogContext.Provider value={value}>
                  {showDismiss ? (
                    <button
                      type="button"
                      onClick={close}
                      aria-label={dismissLabel}
                      className={cx(
                        'text-fg-muted hover:text-fg absolute end-4 top-4 rounded-md p-1',
                        'focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                      )}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        className="size-5"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M5 5l10 10M15 5L5 15" />
                      </svg>
                    </button>
                  ) : null}
                  {children}
                </DialogContext.Provider>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      ) : null}
    </>
  );
}
