import { ThemeMode } from '../theme/ThemeProvider';
export type OverlayPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
export declare const OVERLAY_PADDING = 8;
export declare const OVERLAY_ARROW_WIDTH = 12;
export declare const OVERLAY_ARROW_HEIGHT = 6;
export declare function usePrefersReducedMotion(): boolean;
/** Theme on the closest ancestor, then the document — so a portal still paints tokens. */
export declare function useInheritedTheme(reference: Element | null): ThemeMode;
export declare function overlayPortalProps(theme: ThemeMode): {
    readonly className: "d-ui-overlay";
    readonly 'data-d-ui-theme': ThemeMode;
};
