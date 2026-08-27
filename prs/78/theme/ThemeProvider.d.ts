import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { BrandTokens } from '../tokens/names';
export type ThemeMode = 'light' | 'dark';
export type ThemePreference = ThemeMode | 'system';
export type ThemeProviderProps = {
    mode?: ThemePreference;
    tokens?: BrandTokens;
    children: ReactNode;
    className?: string;
};
/** Sets `data-d-ui-theme` on a wrapper. Does not touch `document.documentElement`. */
export declare function ThemeProvider({ mode, tokens, children, className, }: ThemeProviderProps): import("react").JSX.Element;
