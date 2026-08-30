import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { cx } from '../../lib/cx';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { IconButton } from '../Button/IconButton';
import { CloseGlyph } from '../feedback/FeedbackIcons';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { useDialogContext, dialogRadiusBottomClass } from './DialogContext';

export type DialogTitleProps = Omit<
  HTMLAttributes<HTMLHeadingElement>,
  'color' | 'id'
> & {
  /** Niveau sémantique. `2` par défaut : le dialogue vit sous le titre de la page. */
  level?: 2 | 3;
};

/**
 * Titre du dialogue.
 *
 * S'enregistre auprès du `Dialog`, qui pose alors `aria-labelledby` : le nom
 * accessible vient du titre visible plutôt que d'un `aria-label` à maintenir
 * en double.
 */
export function DialogTitle({ level = 2, className, ...rest }: DialogTitleProps) {
  const dialog = useDialogContext('DialogTitle');
  const { setHasTitle } = dialog;

  useIsomorphicLayoutEffect(() => {
    setHasTitle(true);
    return () => setHasTitle(false);
  }, [setHasTitle]);

  return (
    <Heading
      {...rest}
      id={dialog.titleId}
      level={level}
      size="subtitle"
      className={className}
    />
  );
}

export type DialogDescriptionProps = Omit<
  HTMLAttributes<HTMLParagraphElement>,
  'color' | 'id'
>;

/**
 * Texte d'accompagnement, relié par `aria-describedby`.
 *
 * Sur un `alertdialog`, c'est cette description qui est annoncée d'emblée avec
 * le titre : elle doit dire la conséquence, pas répéter le titre.
 */
export function DialogDescription({ className, ...rest }: DialogDescriptionProps) {
  const dialog = useDialogContext('DialogDescription');
  const { setHasDescription } = dialog;

  useIsomorphicLayoutEffect(() => {
    setHasDescription(true);
    return () => setHasDescription(false);
  }, [setHasDescription]);

  return (
    <Text
      {...rest}
      id={dialog.descriptionId}
      size="body-sm"
      tone="muted"
      className={cx('mt-2', className)}
    />
  );
}

export type DialogHeaderProps = HTMLAttributes<HTMLElement>;

/**
 * En-tête fixe en haut du panneau (LumApps Toolbar).
 *
 * Au défilement du corps, l'en-tête reste visible : le panneau est une colonne
 * flex et seul le `DialogBody` défile.
 */
export function DialogHeader({ className, ...rest }: DialogHeaderProps) {
  return (
    <header {...rest} className={cx('border-border shrink-0 border-b pb-4', className)} />
  );
}

export type DialogBodyProps = HTMLAttributes<HTMLDivElement>;

/** Contenu principal — formulaire, liste, texte long. Défile si le panneau dépasse. */
export function DialogBody({ className, ...rest }: DialogBodyProps) {
  return (
    <div {...rest} className={cx('mt-4 min-h-0 flex-1 overflow-y-auto', className)} />
  );
}

export type DialogActionsAlign = 'end' | 'start' | 'stacked';

export type DialogActionsProps = HTMLAttributes<HTMLDivElement> & {
  align?: DialogActionsAlign;
  /**
   * Pied de page teinté sur toute la largeur du panneau.
   *
   * Rendu dans la zone footer du `Dialog` : la bande file jusqu'aux bords sans
   * marges négatives.
   */
  surface?: boolean;
  children?: ReactNode;
};

const alignClass: Record<DialogActionsAlign, string> = {
  end: 'flex-row justify-end',
  start: 'flex-row justify-start',
  stacked: 'flex-col [&>*]:w-full',
};

/**
 * Zone d'actions.
 *
 * L'action de confirmation est **le dernier enfant**, dans le DOM comme à
 * l'écran. Aucune variante n'inverse l'ordre visuel : `flex-row-reverse` ou
 * `flex-col-reverse` feraient diverger l'ordre de lecture de l'ordre de
 * tabulation (WCAG 2.4.3). `stacked` empile donc de haut en bas.
 *
 * Le premier contrôle est signalé au `Dialog` : sur un `alertdialog`, c'est lui
 * qui prend le focus à l'ouverture.
 */
export function DialogActions({
  align = 'end',
  surface = false,
  className,
  children,
  ...rest
}: DialogActionsProps) {
  const dialog = useDialogContext('DialogActions');
  const { registerFirstAction, radius, showDismiss, dismissLabel, close } = dialog;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const first = containerRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    registerFirstAction(first ?? null);
    return () => registerFirstAction(null);
  }, [registerFirstAction, children]);

  return (
    <div
      {...rest}
      ref={containerRef}
      className={cx(
        'flex shrink-0 gap-3 px-6',
        alignClass[align],
        surface
          ? cx(
              'bg-surface-muted border-border border-t py-4',
              dialogRadiusBottomClass[radius],
            )
          : 'pb-6 pt-4',
        className,
      )}
    >
      {showDismiss ? (
        <IconButton
          type="button"
          size="sm"
          variant="ghost"
          icon={<CloseGlyph />}
          aria-label={dismissLabel}
          onClick={close}
          className={align === 'end' ? 'me-auto' : undefined}
        />
      ) : null}
      {children}
    </div>
  );
}
