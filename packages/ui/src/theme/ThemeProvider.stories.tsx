import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button/Button';
import { ThemeProvider, type ThemePreference } from './ThemeProvider';

const meta = {
  title: 'Foundations/Theme',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function toolbarMode(theme: unknown): ThemePreference {
  if (theme === 'dark' || theme === 'system') {
    return theme;
  }
  return 'light';
}

export const BrandOverride: Story = {
  render: (_args, { globals }) => (
    <ThemeProvider
      mode={toolbarMode(globals.theme)}
      tokens={{
        brand: '#7c3aed',
        brandHover: '#6d28d9',
        onBrand: '#ffffff',
        focus: '#7c3aed',
      }}
    >
      <Button>Brand override</Button>
    </ThemeProvider>
  ),
};
