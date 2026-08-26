import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'd-ui',
    brandUrl: './',
    brandImage: './favicon.svg',
    brandTarget: '_self',
    colorPrimary: '#0f5c4c',
    colorSecondary: '#0f5c4c',
    appBg: '#ffffff',
    appBorderRadius: 6,
    barSelectedColor: '#0f5c4c',
  }),
});

const applyDuiTitle = () => {
  const next = document.title
    .replace(/\s*[⋅·]\s*Storybook\s*$/, ' ⋅ d-ui')
    .replace(/ - Storybook$/, '')
    .replaceAll('Storybook', 'd-ui');
  if (next !== document.title) {
    document.title = next;
  }
};

applyDuiTitle();

const titleEl = document.querySelector('title');
if (titleEl) {
  new MutationObserver(applyDuiTitle).observe(titleEl, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}
