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
  Children,
  isValidElement,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from 'react';
import { cx } from '../../lib/cx';
import { IconButton } from '../Button/IconButton';
import { CloseGlyph } from '../feedback/FeedbackIcons';
import {
  overlayPortalProps,
  useInheritedTheme,
  usePrefersReducedMotion,
} from '../floating';
import {
  DialogContext,
  dialogRadiusClass,
  type DialogContextValue,
  type DialogRadius,
} from './DialogContext';
import { DialogActions, DialogBody } from './DialogParts';

function partitionDialogChildren(children: ReactNode) {
  const content: ReactNode[] = [];
  const actions: ReactNode[] = [];
  let hasBody = false;

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === DialogActions) {
      actions.push(child);
    } else if (isValidElement(child) && child.type === DialogBody) {
      hasBody = true;
      content.push(child);
    } else if (child != null && child !== false) {
      content.push(child);
    }
  });

  return { content, actions, hasBody };
}

/** Tailles LumApps : tiny (400dp), regular (600dp), big (800dp), huge (plein écran). */
export type DialogSize = 'tiny' | 'regular' | 'big' | 'huge';

export type { DialogRadius } from './DialogContext';

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
  /**
   * État de traitement : calque semi-opaque et spinner au-dessus du panneau.
   *
   * Les interactions sont bloquées tant que la soumission est en cours
   * (LumApps `isLoading`).
   */
  processing?: boolean;
  /** Bordure `border-border` autour du panneau. Défaut : sans bordure (LumApps). */
  bordered?: boolean;
  /** Arrondi des coins du panneau. Défaut : `lg`. */
  radius?: DialogRadius;
  /** Élément qui prend le focus à l'ouverture. Par défaut, le premier focusable. */
  initialFocus?: MutableRefObject<HTMLElement | null>;
  children: ReactNode;
  className?: string;
  /** Requis si aucun `DialogTitle` n'est rendu. */
  'aria-label'?: string;
};

const sizeClass: Record<DialogSize, string> = {
  tiny: 'sm:max-w-[400px]',
  regular: 'sm:max-w-[600px]',
  big: 'sm:max-w-[800px]',
  huge: 'sm:max-h-[calc(100dvh-2rem)] sm:min-h-[calc(100dvh-2rem)] sm:max-w-[calc(100vw-2rem)] sm:min-w-[calc(100vw-2rem)]',
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
  size = 'regular',
  alert = false,
  dismissible = false,
  dismissLabel = 'Fermer',
  processing = false,
  bordered = false,
  radius = 'lg',
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
  const dismiss = useDismiss(context, {
    outsidePress: !alert && !processing,
    escapeKey: !processing,
  });
  const role = useRole(context, { role: alert ? 'alertdialog' : 'dialog' });
  const { getFloatingProps } = useInteractions([dismiss, role]);

  const theme = useInheritedTheme(anchor);
  const portal = overlayPortalProps(theme);
  const reducedMotion = usePrefersReducedMotion();

  const close = useCallback(() => onOpenChange(false), [onOpenChange]);
  const registerFirstAction = useCallback((element: HTMLElement | null) => {
    firstActionRef.current = element;
  }, []);
  const showDismiss = dismissible && !alert && !processing;
  const { content, actions, hasBody } = useMemo(
    () => partitionDialogChildren(children),
    [children],
  );
  const footer = actions.length > 0 ? actions : [];

  const value = useMemo<DialogContextValue>(
    () => ({
      titleId: `${baseId}-title`,
      descriptionId: `${baseId}-description`,
      alert,
      radius,
      showDismiss,
      dismissLabel,
      close,
      setHasTitle,
      setHasDescription,
      registerFirstAction,
    }),
    [baseId, alert, radius, showDismiss, dismissLabel, close, registerFirstAction],
  );

  /*
   * Sur un `alertdialog`, le focus va sur la première action — l'issue non
   * destructive — plutôt que sur le premier focusable du dialogue.
   */
  const resolvedInitialFocus = initialFocus ?? (alert ? firstActionRef : undefined);

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
              'bg-black/70',
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
                aria-busy={processing || undefined}
                className={cx(
                  'bg-bg text-fg relative flex w-full flex-col shadow-[0_8px_32px_rgb(0_0_0/0.2)]',
                  'max-h-[calc(100dvh-2rem)] outline-none',
                  dialogRadiusClass[radius],
                  bordered ? 'border border-border' : null,
                  sizeClass[size],
                  reducedMotion ? null : 'd-ui-dialog-panel',
                  className,
                )}
              >
                <DialogContext.Provider value={value}>
                  <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                    <div
                      className={cx(
                        'flex min-h-0 flex-1 flex-col px-6 pt-6',
                        hasBody ? 'overflow-hidden' : 'overflow-y-auto',
                        footer.length > 0 ? 'pb-0' : 'pb-6',
                      )}
                    >
                      {content}
                    </div>
                    {footer}
                  </div>
                  {showDismiss ? (
                    <IconButton
                      type="button"
                      size="sm"
                      variant="ghost"
                      icon={<CloseGlyph />}
                      aria-label={dismissLabel}
                      onClick={close}
                      className="absolute end-4 top-4 z-10 shrink-0"
                    />
                  ) : null}
                  {processing ? (
                    <div
                      className={cx(
                        'bg-bg/70 absolute inset-0 grid place-items-center backdrop-blur-[1px]',
                        dialogRadiusClass[radius],
                      )}
                      aria-hidden="true"
                    >
                      <span className="d-ui-button-spinner text-brand size-8" />
                    </div>
                  ) : null}
                </DialogContext.Provider>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      ) : null}
    </>
  );
}
