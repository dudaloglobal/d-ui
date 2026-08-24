import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/theme/ThemeProvider';
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
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider mode={context.globals.theme === 'dark' ? 'dark' : 'light'}>
        <Story />
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
