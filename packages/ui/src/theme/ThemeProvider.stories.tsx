import type { Meta, StoryObj } from '@storybook/react';
import { themeArgTypes } from '../../.storybook/arg-types';
import { componentSource } from '../../.storybook/docs-source';
import { docsLocale, themeCopy } from '../../.storybook/docs-locale';
import { Button } from '../components/Button/Button';
import { ThemeProvider } from './ThemeProvider';

const meta = {
  title: 'Foundations/ThemeProvider',
  component: ThemeProvider,
  args: {
    children: null,
  },
  argTypes: themeArgTypes,
  parameters: {
    controls: {
      include: ['mode', 'className'],
    },
  },
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandOverride: Story = {
  name: 'Surcharge de marque',
  parameters: componentSource(
    "import { Button, ThemeProvider } from 'd-ui';",
    `<ThemeProvider
  tokens={{
    brand: '#7c3aed',
    brandHover: '#6d28d9',
    onBrand: '#ffffff',
    focus: '#7c3aed',
  }}
>
  <Button>Continuer</Button>
</ThemeProvider>`,
  ),
  render: (_, { globals }) => {
    const copy = themeCopy(docsLocale(globals.locale));
    return (
      <ThemeProvider
        tokens={{
          brand: '#7c3aed',
          brandHover: '#6d28d9',
          onBrand: '#ffffff',
          focus: '#7c3aed',
        }}
      >
        <Button>{copy.brand}</Button>
      </ThemeProvider>
    );
  },
};

export const System: Story = {
  name: 'Système',
  parameters: componentSource(
    "import { Button, ThemeProvider } from 'd-ui';",
    `<ThemeProvider mode="system">
  <Button>Continuer</Button>
</ThemeProvider>`,
  ),
  render: (_, { globals }) => {
    const copy = themeCopy(docsLocale(globals.locale));
    return (
      <ThemeProvider mode="system">
        <div className="flex flex-col gap-2">
          <p className="m-0 text-sm opacity-80">{copy.systemHint}</p>
          <Button>{copy.system}</Button>
        </div>
      </ThemeProvider>
    );
  },
};
