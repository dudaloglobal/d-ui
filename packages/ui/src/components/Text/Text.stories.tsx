import type { Meta, StoryObj } from '@storybook/react-vite';
import { textArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { colorCopy, docsLocale, typographyCopy } from '../../../.storybook/docs-locale';
import { TEXT_COLORS, TEXT_COLOR_VARIANTS, Text } from './Text';

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
<Text tone="muted">hiérarchie, ≥ 4.5:1</Text>
<Text tone="danger">message d’erreur</Text>`,
  ),
  render: (_, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex max-w-prose flex-col gap-3">
        <Text tone="default">{copy.toneDefault}</Text>
        <Text tone="muted">{copy.toneMuted}</Text>
        <Text tone="danger">{copy.toneDanger}</Text>
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
  render: (_, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex max-w-prose flex-col gap-3">
        <Text weight="regular">{copy.weightRegular}</Text>
        <Text weight="medium">{copy.weightMedium}</Text>
        <Text weight="semibold">{copy.weightSemibold}</Text>
      </div>
    );
  },
};

export const Colors: Story = {
  name: 'Couleurs',
  parameters: componentSource(
    "import { Text } from 'd-ui';",
    `<Text>
    Voici un mot <Text as="span" color="brand">coloré</Text> dans la phrase.
</Text>
<Text color="danger">Danger</Text>
<div className="bg-fg rounded-md px-3 py-2">
    <Text color="light">Clair</Text>
</div>`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = typographyCopy(locale);
    const colors = colorCopy(locale);
    return (
      <div className="flex max-w-prose flex-col gap-3">
        <Text>
          {copy.colorBefore}{' '}
          <Text as="span" color="brand">
            {copy.colorEmphasis}
          </Text>{' '}
          {copy.colorAfter}
        </Text>
        {TEXT_COLORS.map((color) => {
          const sample = (
            <Text as="span" color={color}>
              {colors[color]}
            </Text>
          );
          if (color === 'light') {
            return (
              <div key={color} className="bg-fg rounded-md px-3 py-2">
                {sample}
              </div>
            );
          }
          return <div key={color}>{sample}</div>;
        })}
      </div>
    );
  },
};

export const ColorVariants: Story = {
  name: 'Variantes de couleur',
  parameters: componentSource(
    "import { Text } from 'd-ui';",
    `<Text color="brand" colorVariant="D2">D2</Text>
<Text color="brand">N</Text>
<Text color="brand" colorVariant="L2">L2</Text>`,
  ),
  render: () => (
    <div className="flex max-w-prose flex-wrap items-baseline gap-x-4 gap-y-2">
      {TEXT_COLOR_VARIANTS.map((variant) => (
        <Text key={variant} as="span" color="brand" colorVariant={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
};

export const WrapAndOverflow: Story = {
  name: 'Retour à la ligne et débordement',
  parameters: componentSource(
    "import { Text } from 'd-ui';",
    `<div className="max-w-[180px] overflow-hidden">
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
</div>
<div className="max-w-[180px] overflow-hidden">
    <Text noWrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
</div>
<div className="max-w-[180px] overflow-hidden">
    <Text truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
</div>
<div className="max-w-[180px] overflow-hidden">
    <Text truncate={{ lines: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
</div>`,
  ),
  render: (_, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    const samples = [
      { key: 'default', label: copy.wrapDefault, props: {} },
      { key: 'nowrap', label: copy.wrapNoWrap, props: { noWrap: true as const } },
      { key: 'truncate', label: copy.wrapTruncate, props: { truncate: true as const } },
      {
        key: 'multiline',
        label: copy.wrapTruncateMultiline,
        props: { truncate: { lines: 2 } },
      },
    ];
    return (
      <div className="flex flex-wrap gap-8">
        {samples.map(({ key, label, props }) => (
          <div key={key} className="max-w-[180px] overflow-hidden">
            <Text as="span" size="caption" tone="muted" className="mb-1 block">
              {label}
            </Text>
            <Text {...props}>{copy.wrapSample}</Text>
          </div>
        ))}
      </div>
    );
  },
};
