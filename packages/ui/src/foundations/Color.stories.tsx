import type { Meta, StoryObj } from '@storybook/react-vite';
import { DocsLocaleProvider } from '../../.storybook/docs-i18n';
import { docsLocale } from '../../.storybook/docs-locale';
import { PrimaryPalettes, SecondaryPalettes } from './ColorSwatches';

const meta = {
  title: 'Foundations/Color',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const PrimaryPalette: Story = {
  name: 'Palette principale',
  render: (_, { globals }) => (
    <DocsLocaleProvider value={docsLocale(globals.locale)}>
      <PrimaryPalettes />
    </DocsLocaleProvider>
  ),
};

export const SecondaryPalette: Story = {
  name: 'Palette secondaire',
  render: (_, { globals }) => (
    <DocsLocaleProvider value={docsLocale(globals.locale)}>
      <SecondaryPalettes />
    </DocsLocaleProvider>
  ),
};
