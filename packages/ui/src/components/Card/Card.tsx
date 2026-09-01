import { createContext, useContext, type HTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { cornerRadiusClass, type CornerRadius } from '../../lib/cornerRadius';
import { uiColorSoftStyle, type UiColor, type UiSize } from '../../lib/uiScale';
import { Heading, type HeadingLevel } from '../Heading/Heading';
import { Text } from '../Text/Text';

export type CardRadius = CornerRadius;
export type CardOrientation = 'vertical' | 'horizontal';
export type CardElement = 'article' | 'div' | 'button';
export type CardSize = UiSize;
export type CardColor = UiColor;

type CardContextValue = { orientation: CardOrientation; size: CardSize };

const CardContext = createContext<CardContextValue>({
  orientation: 'vertical',
  size: 'm',
});

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
  /** Densité des slots. `m` par défaut. */
  size?: CardSize;
  /** Teinte de surface. `neutral` = fond par défaut. */
  color?: CardColor;
  children?: ReactNode;
};

const interactiveClass =
  'transition-colors hover:border-border hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

const headerPad: Record<CardSize, string> = {
  xxs: 'gap-0.5 px-2 pt-2 pb-1',
  xs: 'gap-0.5 px-2.5 pt-2.5 pb-1',
  s: 'gap-1 px-3 pt-3 pb-1.5',
  m: 'gap-1 px-4 pt-4 pb-2',
  l: 'gap-1.5 px-5 pt-5 pb-2.5',
  xl: 'gap-1.5 px-6 pt-6 pb-3',
  xxl: 'gap-2 px-8 pt-8 pb-4',
};

const bodyPad: Record<CardSize, string> = {
  xxs: 'px-2 py-1',
  xs: 'px-2.5 py-1.5',
  s: 'px-3 py-1.5',
  m: 'px-4 py-2',
  l: 'px-5 py-2.5',
  xl: 'px-6 py-3',
  xxl: 'px-8 py-4',
};

const footerPad: Record<CardSize, string> = {
  xxs: 'gap-1 px-2 pt-1.5 pb-2',
  xs: 'gap-1.5 px-2.5 pt-2 pb-2.5',
  s: 'gap-2 px-3 pt-2.5 pb-3',
  m: 'gap-2 px-4 pt-3 pb-4',
  l: 'gap-2.5 px-5 pt-3.5 pb-5',
  xl: 'gap-2.5 px-6 pt-4 pb-6',
  xxl: 'gap-3 px-8 pt-5 pb-8',
};

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
  size = 'm',
  color = 'neutral',
  className,
  style,
  children,
  ...rest
}: CardProps) {
  const interactive = Boolean(href) || as === 'button';
  const buttonDisabled = as === 'button' && disabled;
  const tint = color === 'neutral' ? undefined : uiColorSoftStyle(color);
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
    <CardContext.Provider value={{ orientation, size }}>{children}</CardContext.Provider>
  );

  const surfaceStyle = tint || style ? { ...tint, ...style } : style;

  if (href) {
    return (
      <a {...rest} href={href} className={classNames} style={surfaceStyle}>
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
        style={surfaceStyle}
      >
        {content}
      </button>
    );
  }

  const Component = as;
  return (
    <Component {...rest} className={classNames} style={surfaceStyle}>
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
  const { size } = useCardContext();
  return <header {...rest} className={cx('flex flex-col', headerPad[size], className)} />;
}

export type CardBodyProps = HTMLAttributes<HTMLDivElement>;

export function CardBody({ className, ...rest }: CardBodyProps) {
  const { size } = useCardContext();
  return <div {...rest} className={cx('min-w-0 flex-1', bodyPad[size], className)} />;
}

export type CardFooterProps = HTMLAttributes<HTMLElement>;

export function CardFooter({ className, ...rest }: CardFooterProps) {
  const { size } = useCardContext();
  return (
    <footer
      {...rest}
      className={cx(
        'mt-auto flex flex-wrap items-center border-t border-border-subtle',
        footerPad[size],
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
