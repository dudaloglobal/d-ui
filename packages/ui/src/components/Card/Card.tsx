import { createContext, useContext, type HTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { cornerRadiusClass, type CornerRadius } from '../../lib/cornerRadius';
import { Heading, type HeadingLevel } from '../Heading/Heading';
import { Text } from '../Text/Text';

export type CardRadius = CornerRadius;
export type CardOrientation = 'vertical' | 'horizontal';
export type CardElement = 'article' | 'div' | 'button';

type CardContextValue = { orientation: CardOrientation };

const CardContext = createContext<CardContextValue>({ orientation: 'vertical' });

function useCardContext(): CardContextValue {
  return useContext(CardContext);
}

export type CardProps = HTMLAttributes<HTMLElement> & {
  /**
   * Rend un vrai `<a>`. Toute la carte est la cible : pas de bouton ni de
   * lien à l’intérieur (HTML + WCAG 4.1.2).
   */
  href?: string;
  /**
   * Élément racine si `href` est absent. `"article"` par défaut.
   * `"button"` : carte-action, `type="button"`.
   */
  as?: CardElement;
  radius?: CardRadius;
  /** `"horizontal"` : média à gauche dès `sm` (Tailwind Plus media object). */
  orientation?: CardOrientation;
  /** Désactive la carte-bouton (`as="button"`). Ignoré sinon. */
  disabled?: boolean;
  children?: ReactNode;
};

const interactiveClass =
  'transition-colors hover:border-border hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

/**
 * Surface de composition (Tailwind Plus Card) : média, en-tête, corps, pied.
 *
 * Statique (`article`) ou interactive (`href` → lien, `as="button"` → bouton).
 * Pas de domaine LMS : une Course Card compose ces slots dans l’app.
 */
export function Card({
  href,
  as = 'article',
  radius = 'lg',
  orientation = 'vertical',
  disabled = false,
  className,
  children,
  ...rest
}: CardProps) {
  const interactive = Boolean(href) || as === 'button';
  const buttonDisabled = as === 'button' && disabled;
  const classNames = cx(
    'flex overflow-hidden border border-border-subtle bg-bg text-start text-fg no-underline',
    orientation === 'horizontal' ? 'flex-col sm:flex-row sm:items-stretch' : 'flex-col',
    cornerRadiusClass[radius],
    interactive && interactiveClass,
    as === 'button' && !buttonDisabled && 'cursor-pointer',
    buttonDisabled && 'cursor-not-allowed opacity-50',
    className,
  );

  const content = (
    <CardContext.Provider value={{ orientation }}>{children}</CardContext.Provider>
  );

  if (href) {
    return (
      <a {...rest} href={href} className={classNames}>
        {content}
      </a>
    );
  }

  if (as === 'button') {
    const { type = 'button', ...buttonRest } = rest as typeof rest & {
      type?: 'button' | 'submit' | 'reset';
    };
    return (
      <button
        {...buttonRest}
        type={type}
        disabled={buttonDisabled}
        className={classNames}
      >
        {content}
      </button>
    );
  }

  const Component = as;
  return (
    <Component {...rest} className={classNames}>
      {content}
    </Component>
  );
}

export type CardMediaProps = HTMLAttributes<HTMLDivElement>;

/** Zone média (image, illustration). Les `img` filles couvrent la zone. */
export function CardMedia({ className, ...rest }: CardMediaProps) {
  const { orientation } = useCardContext();
  return (
    <div
      {...rest}
      className={cx(
        'relative overflow-hidden bg-surface-muted [&_img]:size-full [&_img]:object-cover',
        orientation === 'horizontal'
          ? 'aspect-video sm:aspect-auto sm:w-44 sm:shrink-0'
          : 'aspect-video w-full',
        className,
      )}
    />
  );
}

export type CardHeaderProps = HTMLAttributes<HTMLElement>;

export function CardHeader({ className, ...rest }: CardHeaderProps) {
  return (
    <header {...rest} className={cx('flex flex-col gap-1 px-4 pt-4 pb-2', className)} />
  );
}

export type CardBodyProps = HTMLAttributes<HTMLDivElement>;

export function CardBody({ className, ...rest }: CardBodyProps) {
  return <div {...rest} className={cx('min-w-0 flex-1 px-4 py-2', className)} />;
}

export type CardFooterProps = HTMLAttributes<HTMLElement>;

export function CardFooter({ className, ...rest }: CardFooterProps) {
  return (
    <footer
      {...rest}
      className={cx(
        'mt-auto flex flex-wrap items-center gap-2 border-t border-border-subtle px-4 pt-3 pb-4',
        className,
      )}
    />
  );
}

export type CardTitleProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> & {
  level?: HeadingLevel;
};

/** Titre de la carte. `h3` par défaut : la carte vit sous le titre de page. */
export function CardTitle({ level = 3, className, ...rest }: CardTitleProps) {
  return <Heading {...rest} level={level} size="body" bold className={className} />;
}

export type CardDescriptionProps = Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>;

export function CardDescription({ className, ...rest }: CardDescriptionProps) {
  return (
    <Text {...rest} size="body-sm" tone="muted" className={cx('mt-0.5', className)} />
  );
}
