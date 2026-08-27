import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import type { Preview } from '@storybook/react-vite';
import { useEffect, useLayoutEffect, useState, type ReactNode } from 'react';
import { ThemeProvider } from '../src/theme/ThemeProvider';
import { DocsLocaleProvider } from './docs-i18n';
import { docsLocale, localeFromSearch } from './docs-locale';
import { applyRenamedStoryUrl } from './renamed-stories';
import { darkTheme, docsThemeMode, lightTheme, themeModeFromSearch } from './themes';

applyRenamedStoryUrl();
import '../src/styles/index.css';
import './preview.css';

function applyPreviewDocumentTheme(mode: 'light' | 'dark') {
  const root = document.documentElement;
  root.setAttribute('data-d-ui-theme', mode);
  root.classList.add('d-ui-root');
  document.body.setAttribute('data-d-ui-theme', mode);
  document.body.classList.add('d-ui-root');
}

function DuiDocsContainer({ children, context }: DocsContainerProps) {
  const [mode, setMode] = useState<'light' | 'dark'>(themeModeFromSearch);
  const [locale, setLocale] = useState(localeFromSearch);

  useLayoutEffect(() => {
    applyPreviewDocumentTheme(mode);
  }, [mode]);

  useEffect(() => {
    const channel = context.channel;
    if (!channel) return undefined;
    const onUpdate = ({
      globals,
    }: {
      globals?: { theme?: string; locale?: unknown };
    }) => {
      setMode(docsThemeMode(globals?.theme));
      setLocale(docsLocale(globals?.locale));
    };
    channel.on('globalsUpdated', onUpdate);
    return () => {
      channel.off('globalsUpdated', onUpdate);
    };
  }, [context.channel]);

  return (
    <DocsLocaleProvider value={locale}>
      <ThemeProvider mode={mode} className="d-ui-docs-page">
        <div lang={locale}>
          <DocsContainer
            key={locale}
            context={context}
            theme={mode === 'dark' ? darkTheme : lightTheme}
          >
            {children}
          </DocsContainer>
        </div>
      </ThemeProvider>
    </DocsLocaleProvider>
  );
}

function WithDuiTheme(
  Story: () => ReactNode,
  context: { globals: { theme?: string; locale?: unknown } },
) {
  const mode = docsThemeMode(context.globals.theme);
  useLayoutEffect(() => {
    applyPreviewDocumentTheme(mode);
  }, [mode]);

  return (
    <ThemeProvider mode={mode}>
      <div lang={docsLocale(context.globals.locale)} className="d-ui-docs">
        <Story />
      </div>
    </ThemeProvider>
  );
}

const preview: Preview = {
  initialGlobals: {
    theme: 'light',
    locale: 'fr',
  },
  globalTypes: {
    theme: {
      description: 'Thème',
      toolbar: {
        title: 'Thème',
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Clair' },
          { value: 'dark', title: 'Sombre' },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      description: 'Langue de la documentation',
      toolbar: {
        title: 'Langue',
        icon: 'globe',
        items: [
          { value: 'fr', title: 'Français', right: 'FR' },
          { value: 'en', title: 'English', right: 'EN' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [WithDuiTheme],
  parameters: {
    options: {
      // Must be inline (Storybook indexes this AST). Keep in sync with story-sort.ts.
      storySort: (a, b) => {
        const aRoot = a.title.split('/')[0] ?? '';
        const bRoot = b.title.split('/')[0] ?? '';
        if (aRoot !== bRoot) {
          if (aRoot === 'Introduction') return -1;
          if (bRoot === 'Introduction') return 1;
          return aRoot.localeCompare(bRoot, 'en');
        }
        const aComponent = a.title.split('/').slice(1).join('/');
        const bComponent = b.title.split('/').slice(1).join('/');
        if (aComponent !== bComponent) {
          return aComponent.localeCompare(bComponent, 'en', {
            numeric: true,
            sensitivity: 'base',
          });
        }
        return 0;
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      disabled: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: DuiDocsContainer,
      canvas: {
        sourceState: 'hidden',
      },
      source: {
        state: 'closed',
      },
    },
  },
};

export default preview;
