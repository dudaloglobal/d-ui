import type { CSSProperties } from 'react';
import type { TextColor } from '../Text/Text';

export type FeedbackVariant = 'info' | 'success' | 'warning' | 'danger';

const TOKEN: Record<FeedbackVariant, string> = {
  info: '--d-ui-color-info',
  success: '--d-ui-color-success',
  warning: '--d-ui-color-warning',
  danger: '--d-ui-color-danger',
};

const ICON_CLASS: Record<FeedbackVariant, string> = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
};

export function feedbackVariantColor(variant: FeedbackVariant): TextColor {
  return variant;
}

export function feedbackIconClass(variant: FeedbackVariant): string {
  return ICON_CLASS[variant];
}

export function feedbackSurfaceStyle(variant: FeedbackVariant): CSSProperties {
  const token = TOKEN[variant];
  return {
    backgroundColor: `color-mix(in srgb, var(${token}) 10%, var(--d-ui-color-bg))`,
    borderColor: `color-mix(in srgb, var(${token}) 35%, var(--d-ui-color-border-subtle))`,
  };
}

export function feedbackLiveRole(variant: FeedbackVariant): 'alert' | 'status' {
  return variant === 'danger' || variant === 'warning' ? 'alert' : 'status';
}

const ON_TOKEN: Record<FeedbackVariant, string> = {
  info: '--d-ui-color-on-info',
  success: '--d-ui-color-on-success',
  warning: '--d-ui-color-fg',
  danger: '--d-ui-color-on-danger',
};

/** LumApps Notification : fond blanc + ombre (pas de fond teinté Message). */
export function feedbackNotificationShellStyle(): CSSProperties {
  return {
    backgroundColor: 'var(--d-ui-color-bg)',
    boxShadow: '0 4px 16px rgb(0 0 0 / 0.2)',
  };
}

/** Bandeau icône carré 52×52, couleur pleine par variante. */
export function feedbackNotificationIconStyle(variant: FeedbackVariant): CSSProperties {
  return {
    backgroundColor: `var(${TOKEN[variant]})`,
    color: `var(${ON_TOKEN[variant]})`,
  };
}
