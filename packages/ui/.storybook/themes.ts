import { create, type ThemeVars } from '@storybook/theming';

const brand = {
  brandTitle: 'd-ui',
  brandUrl: './',
  brandImage: './favicon.svg',
  brandTarget: '_self' as const,
};

export type DocsThemeMode = 'light' | 'dark';

export function docsThemeMode(value: unknown): DocsThemeMode {
  return value === 'dark' ? 'dark' : 'light';
}

export function themeModeFromSearch(search = window.location.search): DocsThemeMode {
  const globals = new URLSearchParams(search).get('globals') ?? '';
  if (globals.split(/[;,&]/).includes('theme:dark')) return 'dark';
  return 'light';
}

export const lightTheme: ThemeVars = create({
  base: 'light',
  ...brand,
  colorPrimary: '#0f5c4c',
  colorSecondary: '#0f5c4c',
  appBg: '#f1f5f9',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#cbd5e1',
  appBorderRadius: 6,
  textColor: '#0f172a',
  textMutedColor: '#475569',
  barTextColor: '#475569',
  barSelectedColor: '#0f5c4c',
  barHoverColor: '#0c4a3e',
  barBg: '#ffffff',
  inputBg: '#ffffff',
  inputBorder: '#cbd5e1',
  inputTextColor: '#0f172a',
  inputBorderRadius: 6,
});

export const darkTheme: ThemeVars = create({
  base: 'dark',
  ...brand,
  colorPrimary: '#5eead4',
  colorSecondary: '#5eead4',
  appBg: '#0b1220',
  appContentBg: '#0b1220',
  appPreviewBg: '#0b1220',
  appBorderColor: '#475569',
  appBorderRadius: 6,
  textColor: '#f1f5f9',
  textMutedColor: '#94a3b8',
  barTextColor: '#cbd5e1',
  barSelectedColor: '#5eead4',
  barHoverColor: '#2dd4bf',
  barBg: '#1e293b',
  inputBg: '#1e293b',
  inputBorder: '#475569',
  inputTextColor: '#f1f5f9',
  inputBorderRadius: 6,
});
