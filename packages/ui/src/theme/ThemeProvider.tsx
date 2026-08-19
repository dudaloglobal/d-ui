import type { ReactNode } from 'react';
import { cx } from '../lib/cx';

export type ThemeMode = 'light' | 'dark';

export type ThemeProviderProps = {
  mode?: ThemeMode;
  children: ReactNode;
  className?: string;
};

/**
 * Applique le thème d-ui via `data-d-ui-theme`.
 * Ne touche pas à `document.documentElement` : le consommateur reste maître de la page.
 */
export function ThemeProvider({
  mode = 'light',
  children,
  className,
}: ThemeProviderProps) {
  return (
    <div data-d-ui-theme={mode} className={cx('d-ui-root', className)}>
      {children}
    </div>
  );
}
