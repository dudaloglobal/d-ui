import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/theme/ThemeProvider';
import { docsLocale } from './docs-locale';
import '../src/styles/index.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Thème',
      defaultValue: 'light',
      toolbar: {
        title: 'Thème',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
    locale: {
      description: 'Langue des exemples',
      defaultValue: 'fr',
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
  decorators: [
    (Story, context) => (
      <ThemeProvider mode={context.globals.theme === 'dark' ? 'dark' : 'light'}>
        <div lang={docsLocale(context.globals.locale)} className="d-ui-docs">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    a11y: {
      test: 'todo',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
