import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from 'react';
import { createContext, useCallback, useContext, useId, useState } from 'react';
import { cx } from '../../lib/cx';
import { Heading } from '../Heading/Heading';

export type AccordionType = 'single' | 'multiple';
export type AccordionSize = 'sm' | 'md' | 'lg';

type AccordionContextValue = {
  type: AccordionType;
  open: string[];
  toggle: (itemValue: string) => void;
  size: AccordionSize;
};

type AccordionItemContextValue = {
  value: string;
  open: boolean;
  disabled: boolean;
  triggerId: string;
  panelId: string;
  size: AccordionSize;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);
const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

function useAccordionContext(component: string): AccordionContextValue {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(`${component} must be used within Accordion`);
  }
  return context;
}

function useAccordionItemContext(component: string): AccordionItemContextValue {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(`${component} must be used within AccordionItem`);
  }
  return context;
}

function toOpenList(value: string | string[] | undefined): string[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : value === '' ? [] : [value];
}

export type AccordionProps = {
  /**
   * `"single"` (défaut) : une section ouverte à la fois, refermable.
   * `"multiple"` : plusieurs sections peuvent rester ouvertes.
   */
  type?: AccordionType;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  size?: AccordionSize;
  className?: string;
  children: ReactNode;
};

const triggerSizeClass: Record<AccordionSize, string> = {
  sm: 'min-h-10 gap-2 px-3 py-2 text-sm',
  md: 'min-h-12 gap-3 px-4 py-3 text-base',
  lg: 'min-h-14 gap-3 px-5 py-4 text-lg',
};

const panelSizeClass: Record<AccordionSize, string> = {
  sm: 'px-3 pb-3 text-sm',
  md: 'px-4 pb-4 text-base',
  lg: 'px-5 pb-5 text-lg',
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cx('shrink-0', open && 'rotate-180')}
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function emitValue(
  type: AccordionType,
  open: string[],
  onValueChange?: (value: string | string[]) => void,
) {
  if (!onValueChange) return;
  if (type === 'single') onValueChange(open[0] ?? '');
  else onValueChange(open);
}

/**
 * Sections dépliables (FAQ, chapitres). Pattern WAI-ARIA accordion :
 * bouton natif, `aria-expanded` / `aria-controls`, panneau `region`.
 *
 * Pas de domaine LMS : une liste de chapitres compose `Accordion` + `List`
 * dans l’app.
 */
export function Accordion({
  type = 'single',
  value: valueProp,
  defaultValue,
  onValueChange,
  size = 'md',
  className,
  children,
}: AccordionProps) {
  const isControlled = valueProp !== undefined;
  const [uncontrolled, setUncontrolled] = useState(() => toOpenList(defaultValue));
  const open = isControlled ? toOpenList(valueProp) : uncontrolled;

  const toggle = useCallback(
    (itemValue: string) => {
      const next = open.includes(itemValue)
        ? open.filter((entry) => entry !== itemValue)
        : type === 'single'
          ? [itemValue]
          : [...open, itemValue];
      if (!isControlled) setUncontrolled(next);
      emitValue(type, next, onValueChange);
    },
    [isControlled, onValueChange, open, type],
  );

  return (
    <AccordionContext.Provider value={{ type, open, toggle, size }}>
      <div
        data-d-ui-accordion=""
        className={cx(
          'rounded-lg border border-border-subtle bg-bg font-sans text-fg',
          className,
        )}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export type AccordionItemProps = {
  value: string;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

export function AccordionItem({
  value,
  disabled = false,
  className,
  children,
}: AccordionItemProps) {
  const accordion = useAccordionContext('AccordionItem');
  const itemId = useId();
  const open = accordion.open.includes(value);

  return (
    <AccordionItemContext.Provider
      value={{
        value,
        open,
        disabled,
        triggerId: `${itemId}-trigger`,
        panelId: `${itemId}-panel`,
        size: accordion.size,
      }}
    >
      <div className={cx('border-b border-border-subtle last:border-b-0', className)}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export type AccordionTriggerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'children'
> & {
  children: ReactNode;
};

export function AccordionTrigger({
  className,
  onClick,
  onKeyDown,
  children,
  ...rest
}: AccordionTriggerProps) {
  const accordion = useAccordionContext('AccordionTrigger');
  const item = useAccordionItemContext('AccordionTrigger');

  function enabledTriggers(from: HTMLElement): HTMLButtonElement[] {
    const root = from.closest('[data-d-ui-accordion]');
    if (!root) return [];
    return [
      ...root.querySelectorAll<HTMLButtonElement>('[data-d-ui-accordion-trigger]'),
    ].filter((trigger) => !trigger.disabled);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    onKeyDown?.(event);
    if (event.defaultPrevented || item.disabled) return;

    const triggers = enabledTriggers(event.currentTarget);
    const currentIndex = triggers.indexOf(event.currentTarget);
    if (currentIndex < 0 || triggers.length === 0) return;

    let nextIndex: number | null = null;
    if (event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % triggers.length;
    if (event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
    }
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = triggers.length - 1;

    if (nextIndex === null) return;
    event.preventDefault();
    triggers[nextIndex]?.focus();
  }

  return (
    <Heading level={3} size="body" className="m-0">
      <button
        {...rest}
        type="button"
        id={item.triggerId}
        data-d-ui-accordion-trigger=""
        aria-expanded={item.open}
        aria-controls={item.panelId}
        disabled={item.disabled}
        onClick={(event) => {
          if (!item.disabled) accordion.toggle(item.value);
          onClick?.(event);
        }}
        onKeyDown={handleKeyDown}
        className={cx(
          'flex w-full items-center justify-between text-start font-medium text-fg',
          'focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          triggerSizeClass[item.size],
          item.disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-surface-muted',
          className,
        )}
      >
        <span className="min-w-0 flex-1">{children}</span>
        <Chevron open={item.open} />
      </button>
    </Heading>
  );
}

export type AccordionPanelProps = HTMLAttributes<HTMLDivElement>;

export function AccordionPanel({ className, children, ...rest }: AccordionPanelProps) {
  const item = useAccordionItemContext('AccordionPanel');

  return (
    <div
      {...rest}
      id={item.panelId}
      role="region"
      aria-labelledby={item.triggerId}
      hidden={!item.open}
      className={cx('text-fg', panelSizeClass[item.size], className)}
    >
      {children}
    </div>
  );
}
