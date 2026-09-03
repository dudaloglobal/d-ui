import type { HTMLAttributes, ReactNode } from 'react';
import { createContext, useContext } from 'react';
import { cx } from '../../lib/cx';
import { Text } from '../Text/Text';

export type ListSize = 'sm' | 'md' | 'lg';
export type ListElement = 'ul' | 'ol';

type ListContextValue = { size: ListSize; divided: boolean };

const ListContext = createContext<ListContextValue>({ size: 'md', divided: false });

function useListContext(): ListContextValue {
  return useContext(ListContext);
}

export type ListProps = HTMLAttributes<HTMLElement> & {
  /** `"ul"` (défaut) ou `"ol"` : vrai élément de liste. */
  as?: ListElement;
  /** Filet entre les items. */
  divided?: boolean;
  size?: ListSize;
  children?: ReactNode;
};

const itemSizeClass: Record<ListSize, string> = {
  sm: 'min-h-10 gap-2 px-3 py-2 text-sm',
  md: 'min-h-12 gap-3 px-4 py-3 text-base',
  lg: 'min-h-14 gap-3 px-5 py-4 text-lg',
};

/**
 * Liste sémantique (`ul` / `ol`) avec items à emplacements leading / trailing.
 *
 * Une ligne cliquable est un vrai `<a href>`. Pas de virtualisation ni d’arbre.
 */
export function List({
  as = 'ul',
  divided = false,
  size = 'md',
  className,
  children,
  ...rest
}: ListProps) {
  const Component = as;

  return (
    <ListContext.Provider value={{ size, divided }}>
      <Component
        {...rest}
        className={cx(
          'm-0 font-sans text-fg',
          as === 'ol' ? 'list-decimal ps-6' : 'list-none p-0',
          className,
        )}
      >
        {children}
      </Component>
    </ListContext.Provider>
  );
}

export type ListItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'children'> & {
  /** Slot avant le titre (icône décorative). */
  leading?: ReactNode;
  /** Slot après le titre (action `Button`, chevron). Pas de bouton si `href`. */
  trailing?: ReactNode;
  /**
   * Rend un vrai `<a>`. Toute la ligne est la cible : pas de bouton dans
   * `trailing` (HTML + WCAG 4.1.2).
   */
  href?: string;
  description?: ReactNode;
  /** Ligne indisponible : plus de lien, plus d’action. */
  disabled?: boolean;
  children: ReactNode;
};

export function ListItem({
  leading,
  trailing,
  href,
  description,
  disabled = false,
  className,
  children,
  ...rest
}: ListItemProps) {
  const { size, divided } = useListContext();
  const linked = Boolean(href) && !disabled;
  const rowClass = cx(
    'flex w-full min-w-0 items-center text-start text-fg no-underline',
    itemSizeClass[size],
    linked &&
      'hover:bg-surface-muted focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
    disabled && 'cursor-not-allowed opacity-50',
  );

  const content = (
    <>
      {leading ? (
        <span className="inline-flex shrink-0 [&_svg]:block" aria-hidden="true">
          {leading}
        </span>
      ) : null}
      <span className="min-w-0 flex-1">
        <span className="block font-medium">{children}</span>
        {description ? (
          <Text as="span" size="body-sm" tone="muted" className="mt-0.5 block">
            {description}
          </Text>
        ) : null}
      </span>
      {trailing ? (
        <span className="inline-flex shrink-0 items-center">{trailing}</span>
      ) : null}
    </>
  );

  return (
    <li
      {...rest}
      className={cx(
        divided && 'border-b border-border-subtle last:border-b-0',
        className,
      )}
    >
      {linked ? (
        <a href={href} className={rowClass}>
          {content}
        </a>
      ) : (
        <div className={rowClass}>{content}</div>
      )}
    </li>
  );
}
