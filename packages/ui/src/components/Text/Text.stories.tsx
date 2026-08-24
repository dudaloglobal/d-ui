import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Le design system fournit les primitives typographiques pour que les écrans n’inventent pas leurs propres tailles.',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex max-w-prose flex-col gap-3">
      <Text size="body">body — texte courant</Text>
      <Text size="body-sm">body-sm — texte secondaire, aides de saisie</Text>
      <Text size="caption">caption — légendes, métadonnées</Text>
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div className="flex max-w-prose flex-col gap-3">
      <Text tone="default">tone=&quot;default&quot; — contraste maximal</Text>
      <Text tone="muted">tone=&quot;muted&quot; — reste au-dessus de 4.5:1</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex max-w-prose flex-col gap-3">
      <Text weight="regular">regular</Text>
      <Text weight="medium">medium</Text>
      <Text weight="semibold">semibold</Text>
    </div>
  ),
};
