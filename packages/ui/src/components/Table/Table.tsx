import {
  createContext,
  useContext,
  useId,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from 'react';
import { cx } from '../../lib/cx';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

export type TableSize = 'sm' | 'md' | 'lg';
export type TableAlign = 'start' | 'center' | 'end';

type TableSection = 'table' | 'head' | 'body' | 'foot';

type TableContextValue = {
  size: TableSize;
  stickyHeader: boolean;
  captionId: string;
  section: TableSection;
  setHasCaption: (present: boolean) => void;
};

const TableContext = createContext<TableContextValue | null>(null);

function useTableContext(component: string): TableContextValue {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error(`<${component}> doit être rendu à l’intérieur de <Table>.`);
  }
  return context;
}

const cellSizeClass: Record<TableSize, string> = {
  sm: 'px-2 py-1.5 text-sm',
  md: 'px-3 py-2.5 text-base',
  lg: 'px-4 py-3 text-lg',
};

const alignClass: Record<TableAlign, string> = {
  start: 'text-start',
  center: 'text-center',
  end: 'text-end',
};

function cellAlign(align: TableAlign | undefined, numeric: boolean): TableAlign {
  return align ?? (numeric ? 'end' : 'start');
}

function elementOverflows(node: HTMLElement): boolean {
  return (
    node.scrollWidth > node.clientWidth + 1 || node.scrollHeight > node.clientHeight + 1
  );
}

export type TableProps = HTMLAttributes<HTMLTableElement> & {
  /**
   * Légende visible (`<caption>`). Nomme le tableau et, en cas de débordement,
   * la région défilable (clavier).
   */
  caption?: ReactNode;
  /** Garde l’en-tête visible au défilement vertical du conteneur. */
  stickyHeader?: boolean;
  size?: TableSize;
};

/**
 * Tableau sémantique (`<table>`) pour des données simples.
 *
 * Les parties (`TableHeader`, `TableBody`, `TableRow`, `TableHead`,
 * `TableCell`, …) partagent densité, alignement numérique et en-tête collant.
 * Un débordement réel rend le conteneur tabulable (flèches), nommé par la
 * légende. Tri, filtre et sélection : `DataTable` (DS-042).
 */
export function Table({
  caption,
  stickyHeader = false,
  size = 'md',
  className,
  children,
  'aria-label': ariaLabel,
  ...rest
}: TableProps) {
  const captionId = useId();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [hasCaption, setHasCaption] = useState(Boolean(caption));
  const [overflows, setOverflows] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const update = () => {
      setOverflows(elementOverflows(node));
    };

    update();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }

    const observer = new ResizeObserver(update);
    observer.observe(node);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [children, caption, size, stickyHeader]);

  const named = hasCaption || Boolean(ariaLabel);

  return (
    <TableContext.Provider
      value={{ size, stickyHeader, captionId, section: 'table', setHasCaption }}
    >
      <div
        ref={scrollerRef}
        className={cx(
          'w-full max-w-full overflow-auto',
          overflows &&
            'focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          className,
        )}
        {...(overflows
          ? {
              tabIndex: 0,
              ...(named
                ? {
                    role: 'region' as const,
                    'aria-labelledby': hasCaption ? captionId : undefined,
                    'aria-label': hasCaption ? undefined : ariaLabel,
                  }
                : {}),
            }
          : {})}
      >
        <table
          {...rest}
          aria-label={hasCaption ? undefined : ariaLabel}
          className="w-full min-w-full border-collapse font-sans text-fg"
        >
          {caption ? <TableCaption>{caption}</TableCaption> : null}
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
}

export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;

/** Légende native. Premier enfant du `<table>` ; porte le nom accessible. */
export function TableCaption({ className, id, children, ...rest }: TableCaptionProps) {
  const table = useTableContext('TableCaption');
  const { setHasCaption, captionId } = table;

  useIsomorphicLayoutEffect(() => {
    setHasCaption(true);
    return () => setHasCaption(false);
  }, [setHasCaption]);

  return (
    <caption
      {...rest}
      id={id ?? captionId}
      className={cx('caption-top mb-2 text-start text-sm font-medium text-fg', className)}
    >
      {children}
    </caption>
  );
}

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export function TableHeader({ className, children, ...rest }: TableHeaderProps) {
  const table = useTableContext('TableHeader');
  return (
    <TableContext.Provider value={{ ...table, section: 'head' }}>
      <thead {...rest} className={cx(className)}>
        {children}
      </thead>
    </TableContext.Provider>
  );
}

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export function TableBody({ className, children, ...rest }: TableBodyProps) {
  const table = useTableContext('TableBody');
  return (
    <TableContext.Provider value={{ ...table, section: 'body' }}>
      <tbody {...rest} className={className}>
        {children}
      </tbody>
    </TableContext.Provider>
  );
}

export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;

export function TableFooter({ className, children, ...rest }: TableFooterProps) {
  const table = useTableContext('TableFooter');
  return (
    <TableContext.Provider value={{ ...table, section: 'foot' }}>
      <tfoot {...rest} className={cx('border-border border-t font-medium', className)}>
        {children}
      </tfoot>
    </TableContext.Provider>
  );
}

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export function TableRow({ className, ...rest }: TableRowProps) {
  const { section } = useTableContext('TableRow');
  return (
    <tr
      {...rest}
      className={cx(section === 'body' && 'hover:bg-surface-muted', className)}
    />
  );
}

export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement> & {
  /** Alignement. `numeric` aligne à `end` s’il est omis. */
  align?: TableAlign;
  /** Chiffres tabulaires, sans retour à la ligne, alignés à la fin par défaut. */
  numeric?: boolean;
};

export function TableHead({
  align,
  numeric = false,
  scope,
  className,
  ...rest
}: TableHeadProps) {
  const { size, stickyHeader, section } = useTableContext('TableHead');
  const resolvedAlign = cellAlign(align, numeric);
  const inHead = section === 'head';

  return (
    <th
      {...rest}
      scope={scope ?? (inHead ? 'col' : 'row')}
      className={cx(
        'border-border text-fg',
        inHead ? 'border-b font-medium' : 'border-border-subtle border-b',
        cellSizeClass[size],
        alignClass[resolvedAlign],
        numeric && 'tabular-nums whitespace-nowrap',
        inHead && 'whitespace-nowrap',
        stickyHeader && inHead && 'bg-bg sticky top-0 z-10',
        className,
      )}
    />
  );
}

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
  align?: TableAlign;
  numeric?: boolean;
};

export function TableCell({
  align,
  numeric = false,
  className,
  ...rest
}: TableCellProps) {
  const { size } = useTableContext('TableCell');
  const resolvedAlign = cellAlign(align, numeric);

  return (
    <td
      {...rest}
      className={cx(
        'border-border-subtle border-b text-fg',
        cellSizeClass[size],
        alignClass[resolvedAlign],
        numeric && 'tabular-nums whitespace-nowrap',
        className,
      )}
    />
  );
}

export type TableEmptyProps = TdHTMLAttributes<HTMLTableCellElement> & {
  /** Nombre de colonnes à couvrir. Obligatoire : le slot n’invente pas la grille. */
  colSpan: number;
  children: ReactNode;
};

/**
 * Ligne unique pour un état vide. Composer `EmptyState` (ou `ErrorState`)
 * en enfant : `Table` ne couple pas le métier du vide.
 */
export function TableEmpty({ colSpan, className, children, ...rest }: TableEmptyProps) {
  useTableContext('TableEmpty');
  return (
    <tr>
      <td
        {...rest}
        colSpan={colSpan}
        className={cx('border-border-subtle p-0', className)}
      >
        {children}
      </td>
    </tr>
  );
}
