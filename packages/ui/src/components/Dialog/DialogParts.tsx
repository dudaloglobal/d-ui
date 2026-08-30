import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { cx } from '../../lib/cx';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { useDialogContext } from './DialogContext';

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
      className={cx('pe-8', className)}
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
    <header
      {...rest}
      className={cx('border-border shrink-0 border-b pb-4', className)}
    />
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
   * Pied de page teinté, filant jusqu'aux bords du panneau.
   *
   * Les marges négatives annulent la gouttière du `Dialog` (`p-6`) : la bande
   * ne peut donc pas être réutilisée hors d'un `Dialog`.
   */
  surface?: boolean;
  children: ReactNode;
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
  const { registerFirstAction } = dialog;
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
        'mt-6 flex gap-3',
        alignClass[align],
        surface ? 'bg-surface-muted -mx-6 -mb-6 shrink-0 rounded-b-lg px-6 py-4' : 'shrink-0',
        className,
      )}
    >
      {children}
    </div>
  );
}
