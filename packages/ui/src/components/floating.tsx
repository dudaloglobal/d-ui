import { useLayoutEffect, useState } from 'react';
import type { ThemeMode } from '../theme/ThemeProvider';

export type OverlayPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export const OVERLAY_OFFSET = 8;
export const OVERLAY_PADDING = 8;

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return reduced;
}

/** Theme on the closest ancestor, then the document — so a portal still paints tokens. */
export function useInheritedTheme(reference: Element | null): ThemeMode {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useLayoutEffect(() => {
    const host =
      reference?.closest('[data-d-ui-theme]') ??
      document.documentElement.closest('[data-d-ui-theme]') ??
      document.documentElement;
    const value = host.getAttribute('data-d-ui-theme');
    setTheme(value === 'dark' ? 'dark' : 'light');
  }, [reference]);

  return theme;
}

export function overlayPortalProps(theme: ThemeMode) {
  return {
    className: 'd-ui-overlay',
    'data-d-ui-theme': theme,
  } as const;
}
