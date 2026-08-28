import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from 'react';
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { cx } from '../../lib/cx';

export type TabsActivation = 'automatic' | 'manual';
export type TabsOrientation = 'horizontal' | 'vertical';
export type TabsSize = 'sm' | 'md' | 'lg';
/** `"line"` : filet bas (LumApps). `"detached"` : pastilles séparées, hors du panneau. */
export type TabsVariant = 'line' | 'detached';
/** `"stretch"` : les onglets se partagent la largeur. `"cluster"` : collés à gauche. */
export type TabsLayout = 'stretch' | 'cluster';

type TabsContextValue = {
  value: string;
  setValue: (next: string) => void;
  activation: TabsActivation;
  orientation: TabsOrientation;
  size: TabsSize;
  variant: TabsVariant;
  layout: TabsLayout;
  disabled: boolean;
  label: string;
  baseId: string;
  ensureDefault: (tabValue: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(component: string): TabsContextValue {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(`${component} must be used within Tabs`);
  }
  return context;
}

export type TabsProps = {
  /** Nom accessible de la `tablist`. Fallback anglais si omis. */
  label?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /**
   * `"automatic"` (défaut) : flèches sélectionnent l’onglet.
   * `"manual"` : flèches déplacent le focus ; Entrée / Espace activent.
   */
  activation?: TabsActivation;
  orientation?: TabsOrientation;
  size?: TabsSize;
  /** `"line"` (défaut) : filet 2px. `"detached"` : pastilles séparées au-dessus du panneau. */
  variant?: TabsVariant;
  /** `"stretch"` (défaut, `line` horizontal) : largeur égale. `"cluster"` : à gauche. */
  layout?: TabsLayout;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

const lineSizeClass: Record<TabsSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
};

const detachedSizeClass: Record<TabsSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
};

export function Tabs({
  label = 'Tabs',
  value: valueProp,
  defaultValue = '',
  onValueChange,
  activation = 'automatic',
  orientation = 'horizontal',
  size = 'md',
  variant = 'line',
  layout = 'stretch',
  disabled = false,
  className,
  children,
}: TabsProps) {
  const generatedId = useId();
  const isControlled = valueProp !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? valueProp : uncontrolled;
  const defaultLocked = useRef(Boolean(defaultValue) || isControlled);

  const setValue = useCallback(
    (next: string) => {
      if (!isControlled) setUncontrolled(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const ensureDefault = useCallback(
    (tabValue: string) => {
      if (defaultLocked.current) return;
      defaultLocked.current = true;
      if (!isControlled) setUncontrolled(tabValue);
    },
    [isControlled],
  );

  return (
    <TabsContext.Provider
      value={{
        value,
        setValue,
        activation,
        orientation,
        size,
        variant,
        layout,
        disabled,
        label,
        baseId: generatedId,
        ensureDefault,
      }}
    >
      <div
        className={cx(
          orientation === 'vertical'
            ? 'flex items-start gap-4'
            : variant === 'detached'
              ? 'flex flex-col gap-3'
              : undefined,
          className,
        )}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export type TabListProps = HTMLAttributes<HTMLDivElement>;

export const TabList = forwardRef<HTMLDivElement, TabListProps>(function TabList(
  { className, onKeyDown, children, ...rest },
  ref,
) {
  const context = useTabsContext('TabList');
  const listRef = useRef<HTMLDivElement | null>(null);

  function enabledTabs(): HTMLElement[] {
    const root = listRef.current;
    if (!root) return [];
    return [...root.querySelectorAll<HTMLElement>('[role="tab"]')].filter(
      (tab) => tab.getAttribute('aria-disabled') !== 'true',
    );
  }

  function activate(tab: HTMLElement, select: boolean) {
    tab.focus();
    if (select) {
      const next = tab.dataset.value;
      if (next) context.setValue(next);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    onKeyDown?.(event);
    if (event.defaultPrevented || context.disabled) return;

    const tabs = enabledTabs();
    if (tabs.length === 0) return;
    const currentIndex = tabs.findIndex((tab) => tab === document.activeElement);
    if (currentIndex < 0) return;

    const rtl =
      (listRef.current?.closest('[dir="rtl"]') ?? document.documentElement).getAttribute(
        'dir',
      ) === 'rtl';
    const key = event.key;
    const isHorizontal = context.orientation === 'horizontal';
    const nextKey = isHorizontal ? (rtl ? 'ArrowLeft' : 'ArrowRight') : 'ArrowDown';
    const prevKey = isHorizontal ? (rtl ? 'ArrowRight' : 'ArrowLeft') : 'ArrowUp';

    let nextIndex: number | null = null;
    if (key === nextKey) nextIndex = (currentIndex + 1) % tabs.length;
    if (key === prevKey) nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (key === 'Home') nextIndex = 0;
    if (key === 'End') nextIndex = tabs.length - 1;

    if (nextIndex === null) return;
    event.preventDefault();
    const tab = tabs[nextIndex];
    if (tab) activate(tab, context.activation === 'automatic');
  }

  return (
    <div
      {...rest}
      ref={(node) => {
        listRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      role="tablist"
      aria-label={context.label}
      aria-orientation={context.orientation}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className={cx(
        'flex',
        context.variant === 'detached'
          ? cx(
              'w-fit gap-2',
              context.orientation === 'vertical' ? 'min-w-36 flex-col' : 'flex-row',
            )
          : context.orientation === 'vertical'
            ? 'min-w-36 flex-col'
            : 'w-full flex-row',
        className,
      )}
    >
      {children}
    </div>
  );
});

export type TabProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'value'> & {
  /** Identifiant de l’onglet, aligné sur `TabPanel value`. */
  value: string;
  /** Icône décorative. Ne remplace pas le nom accessible. */
  icon?: ReactNode;
};

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { value, disabled, className, onClick, onKeyDown, icon, children, ...rest },
  ref,
) {
  const context = useTabsContext('Tab');
  const {
    value: selectedValue,
    setValue,
    activation,
    orientation,
    size,
    variant,
    layout,
    disabled: groupDisabled,
    baseId,
    ensureDefault,
  } = context;
  const isDisabled = Boolean(disabled || groupDisabled);
  const selected = selectedValue === value;
  const tabId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  useEffect(() => {
    if (!isDisabled) ensureDefault(value);
  }, [ensureDefault, isDisabled, value]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    onKeyDown?.(event);
    if (event.defaultPrevented || isDisabled) return;
    if (activation === 'manual' && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      setValue(value);
    }
  }

  return (
    <button
      {...rest}
      ref={ref}
      type="button"
      role="tab"
      id={tabId}
      data-value={value}
      aria-selected={selected}
      aria-controls={panelId}
      aria-disabled={isDisabled || undefined}
      tabIndex={selected && !isDisabled ? 0 : -1}
      disabled={isDisabled}
      onClick={(event) => {
        if (!isDisabled) setValue(value);
        onClick?.(event);
      }}
      onKeyDown={handleKeyDown}
      className={cx(
        'relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-sans',
        'focus-visible:ring-focus focus-visible:z-1 focus-visible:ring-2 focus-visible:outline-none',
        variant === 'detached' ? detachedSizeClass[size] : lineSizeClass[size],
        variant === 'detached'
          ? cx(
              'rounded-lg border',
              selected
                ? 'border-fg bg-bg font-semibold text-fg'
                : 'border-border-subtle bg-transparent font-medium text-fg-muted hover:bg-field hover:text-fg',
              orientation === 'vertical' && 'w-full',
            )
          : cx(
              'bg-transparent font-medium text-fg hover:bg-field',
              orientation === 'vertical'
                ? 'w-full justify-start border-s-2'
                : 'border-b-2',
              selected ? 'border-brand' : 'border-border-subtle',
              layout === 'stretch' && orientation === 'horizontal' && 'flex-1',
            ),
        isDisabled && 'opacity-50',
        className,
      )}
    >
      {icon ? (
        <span className="inline-flex shrink-0 [&_svg]:block" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
    </button>
  );
});

export type TabPanelProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(function TabPanel(
  { value, className, children, ...rest },
  ref,
) {
  const context = useTabsContext('TabPanel');
  const selected = context.value === value;
  const tabId = `${context.baseId}-tab-${value}`;
  const panelId = `${context.baseId}-panel-${value}`;

  return (
    <div
      {...rest}
      ref={ref}
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      hidden={!selected}
      tabIndex={selected ? 0 : undefined}
      className={cx(
        'min-w-0 flex-1 font-sans text-fg',
        context.variant === 'line' && 'pt-4',
        className,
      )}
    >
      {selected ? children : null}
    </div>
  );
});
