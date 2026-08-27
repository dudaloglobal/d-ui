import { addons } from '@storybook/manager-api';
import { GLOBALS_UPDATED } from 'storybook/internal/core-events';
import { applyRenamedStoryUrl } from './renamed-stories';
import { darkTheme, docsThemeMode, lightTheme, themeModeFromSearch } from './themes';

applyRenamedStoryUrl();

let applied: 'light' | 'dark' | undefined;

function applyManagerTheme(
  value: unknown,
  api?: { setOptions: (options: { theme: typeof darkTheme }) => void },
) {
  const mode = docsThemeMode(value);
  const dark = mode === 'dark';
  const theme = dark ? darkTheme : lightTheme;
  document.body.classList.toggle('d-ui-manager-dark', dark);
  document.documentElement.classList.toggle('d-ui-manager-dark', dark);
  document.documentElement.setAttribute('data-d-ui-theme', mode);
  if (applied === mode) return;
  applied = mode;
  addons.setConfig({ theme });
  api?.setOptions({ theme });
}

applyManagerTheme(themeModeFromSearch());

addons.register('d-ui/manager-theme', (api) => {
  applyManagerTheme(api.getGlobals()?.theme ?? themeModeFromSearch(), api);
  api.on(GLOBALS_UPDATED, ({ globals }: { globals?: { theme?: string } }) => {
    applyManagerTheme(globals?.theme, api);
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
