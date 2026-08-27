import type { Meta, StoryObj } from '@storybook/react-vite';
import { textArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, typographyCopy } from '../../../.storybook/docs-locale';
import { Text } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  argTypes: textArgTypes,
  args: {
    children:
      'Le design system fournit les primitives typographiques pour que les écrans n’inventent pas leurs propres tailles.',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    "import { Text } from 'd-ui';",
    '<Text>Le design system fournit les primitives typographiques.</Text>',
  ),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Text {...args}>{copy.sample}</Text>;
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    "import { Text } from 'd-ui';",
    `<Text size="body">texte courant</Text>
<Text size="body-sm">texte secondaire</Text>
<Text size="caption">légende</Text>`,
  ),
  render: (_, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex max-w-prose flex-col gap-3">
        <Text size="body">{copy.body}</Text>
        <Text size="body-sm">{copy.bodySm}</Text>
        <Text size="caption">{copy.caption}</Text>
      </div>
    );
  },
};

export const Tones: Story = {
  name: 'Tons',
  parameters: componentSource(
    "import { Text } from 'd-ui';",
    `<Text>contraste maximal</Text>
<Text tone="muted">hiérarchie, ≥ 4.5:1</Text>`,
  ),
  render: (_, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex max-w-prose flex-col gap-3">
        <Text tone="default">{copy.toneDefault}</Text>
        <Text tone="muted">{copy.toneMuted}</Text>
      </div>
    );
  },
};

export const Weights: Story = {
  name: 'Graisses',
  parameters: componentSource(
    "import { Text } from 'd-ui';",
    `<Text weight="regular">regular</Text>
<Text weight="medium">medium</Text>
<Text weight="semibold">semibold</Text>`,
  ),
  render: () => (
    <div className="flex max-w-prose flex-col gap-3">
      <Text weight="regular">regular</Text>
      <Text weight="medium">medium</Text>
      <Text weight="semibold">semibold</Text>
    </div>
  ),
};
