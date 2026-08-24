import type { CSSProperties, ReactNode } from 'react';
import { useSyncExternalStore } from 'react';
import { cx } from '../lib/cx';
import { brandTokensToStyle, type BrandTokens } from '../tokens/names';

export type ThemeMode = 'light' | 'dark';
export type ThemePreference = ThemeMode | 'system';

export type ThemeProviderProps = {
  mode?: ThemePreference;
  tokens?: BrandTokens;
  children: ReactNode;
  className?: string;
};

function subscribeSystem(onStoreChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', onStoreChange);
  return () => media.removeEventListener('change', onStoreChange);
}

function systemMode(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function useSystemMode(enabled: boolean): ThemeMode {
  return useSyncExternalStore(
    enabled ? subscribeSystem : () => () => undefined,
    enabled ? systemMode : () => 'light',
    () => 'light',
  );
}

/** Sets `data-d-ui-theme` on a wrapper. Does not touch `document.documentElement`. */
export function ThemeProvider({
  mode = 'light',
  tokens,
  children,
  className,
}: ThemeProviderProps) {
  const system = useSystemMode(mode === 'system');
  const resolved: ThemeMode = mode === 'system' ? system : mode;
  const style = brandTokensToStyle(tokens) as CSSProperties | undefined;

  return (
    <div data-d-ui-theme={resolved} className={cx('d-ui-root', className)} style={style}>
      {children}
    </div>
  );
}
