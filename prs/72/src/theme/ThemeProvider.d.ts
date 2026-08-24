import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
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
export declare function ThemeProvider({ mode, children, className, }: ThemeProviderProps): import("react").JSX.Element;
