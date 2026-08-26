import { addons } from '@storybook/manager-api';
import { darkTheme, docsThemeMode, lightTheme, themeModeFromSearch } from './themes';

function applyManagerTheme(value: unknown) {
  const mode = docsThemeMode(value);
  const dark = mode === 'dark';
  addons.setConfig({ theme: dark ? darkTheme : lightTheme });
  document.body.classList.toggle('d-ui-manager-dark', dark);
  document.documentElement.classList.toggle('d-ui-manager-dark', dark);
}

applyManagerTheme(themeModeFromSearch());

addons.register('d-ui/manager-theme', (api) => {
  applyManagerTheme(api.getGlobals()?.theme ?? themeModeFromSearch());
  api.on('globalsUpdated', ({ globals }: { globals?: { theme?: string } }) => {
    applyManagerTheme(globals?.theme);
  });
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
