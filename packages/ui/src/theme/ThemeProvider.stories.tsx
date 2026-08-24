import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button/Button';
import { ThemeProvider } from './ThemeProvider';

const meta = {
  title: 'Foundations/Theme',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandOverride: Story = {
  render: () => (
    <ThemeProvider
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
