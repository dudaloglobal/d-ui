import { addons } from '@storybook/manager-api';
import {
  CURRENT_STORY_WAS_SET,
  DOCS_RENDERED,
  GLOBALS_UPDATED,
  STORY_CHANGED,
} from 'storybook/internal/core-events';
import { docsLocale, localeFromSearch, storyLabel, toolbarLabel } from './docs-locale';
import { dudaloDocumentTitle } from './page-title';
import { applyRenamedStoryUrl } from './renamed-stories';
import { darkTheme, docsThemeMode, lightTheme, themeModeFromSearch } from './themes';

applyRenamedStoryUrl();

const BRAND_LOGO_PX = '32px';

function applyBrandLogoSize() {
  document.querySelectorAll<HTMLImageElement>('img[alt="d-ui"]').forEach((img) => {
    img.width = 32;
    img.height = 32;
    img.style.setProperty('width', BRAND_LOGO_PX, 'important');
    img.style.setProperty('height', BRAND_LOGO_PX, 'important');
    img.style.setProperty('max-width', BRAND_LOGO_PX, 'important');
    img.style.setProperty('max-height', BRAND_LOGO_PX, 'important');
  });
}

applyBrandLogoSize();
new MutationObserver(applyBrandLogoSize).observe(document.documentElement, {
  childList: true,
  subtree: true,
});

let applied: 'light' | 'dark' | undefined;

let currentDocsLocale = docsLocale(localeFromSearch());

function visibleText(raw: string): string {
  return raw.replace(/\u00a0/g, ' ').trim();
}

function replaceText(node: Node, next: string) {
  const raw = node.nodeValue ?? '';
  const trimmed = visibleText(raw);
  if (trimmed && next !== trimmed) node.nodeValue = raw.replace(trimmed, next);
}

function relabelSidebar(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-nodetype="story"]').forEach((item) => {
    const link = item.querySelector('a') ?? item;
    for (const node of Array.from(link.childNodes)) {
      if (node.nodeType !== Node.TEXT_NODE) continue;
      replaceText(node, storyLabel(visibleText(node.nodeValue ?? ''), currentDocsLocale));
    }
  });
}

function relabelToolbar(root: ParentNode = document) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || parent.closest('[data-nodetype="story"]')) continue;
    const trimmed = visibleText(node.nodeValue ?? '');
    if (!trimmed) continue;
    replaceText(node, toolbarLabel(trimmed, currentDocsLocale));
  }
  root
    .querySelectorAll<HTMLElement>('button[title], button[aria-label]')
    .forEach((el) => {
      for (const attr of ['title', 'aria-label'] as const) {
        const value = el.getAttribute(attr);
        if (!value) continue;
        const next = toolbarLabel(visibleText(value), currentDocsLocale);
        if (next !== value) el.setAttribute(attr, next);
      }
    });
}

function relabelManager() {
  relabelSidebar();
  relabelToolbar();
}

let relabelTimer = 0;
function scheduleRelabel() {
  window.clearTimeout(relabelTimer);
  relabelTimer = window.setTimeout(relabelManager, 0);
}

new MutationObserver(scheduleRelabel).observe(document.documentElement, {
  childList: true,
  subtree: true,
  characterData: true,
});

function applySidebarLocale(locale: ReturnType<typeof docsLocale>) {
  currentDocsLocale = locale;
  addons.setConfig({
    sidebar: {
      renderLabel: (item: { name: string }) => storyLabel(item.name, currentDocsLocale),
    },
  });
  relabelManager();
}

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
  applySidebarLocale(currentDocsLocale);
}

applyManagerTheme(themeModeFromSearch());
applySidebarLocale(currentDocsLocale);

addons.register('d-ui/manager-theme', (api) => {
  applyManagerTheme(api.getGlobals()?.theme ?? themeModeFromSearch(), api);
  api.on(GLOBALS_UPDATED, ({ globals }: { globals?: { theme?: string } }) => {
    applyManagerTheme(globals?.theme, api);
  });
});

addons.register('d-ui/locale', (api) => {
  applySidebarLocale(docsLocale(api.getGlobals()?.locale ?? localeFromSearch()));
  api.on(GLOBALS_UPDATED, ({ globals }: { globals?: { locale?: unknown } }) => {
    applySidebarLocale(docsLocale(globals?.locale));
  });
});

type StorybookApi = { getCurrentStoryData: () => unknown };

function kindFromApi(api?: StorybookApi): string | undefined {
  const data = api?.getCurrentStoryData();
  if (data && typeof data === 'object' && 'title' in data) {
    const title = (data as { title?: unknown }).title;
    if (typeof title === 'string') return title;
  }
  return undefined;
}

function applyPageTitle(api?: StorybookApi) {
  const next = dudaloDocumentTitle(kindFromApi(api), document.title);
  if (document.title !== next) document.title = next;
}

let titleApi: StorybookApi | undefined;

addons.register('d-ui/page-title', (api) => {
  titleApi = api;
  const apply = () => applyPageTitle(api);
  apply();
  api.on(STORY_CHANGED, apply);
  api.on(DOCS_RENDERED, apply);
  api.on(CURRENT_STORY_WAS_SET, apply);
});

applyPageTitle();

const titleEl = document.querySelector('title');
if (titleEl) {
  new MutationObserver(() => applyPageTitle(titleApi)).observe(titleEl, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}
