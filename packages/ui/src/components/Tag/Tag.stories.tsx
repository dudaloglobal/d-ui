import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckIcon } from '@heroicons/react/24/outline';
import { tagArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, tagCopy } from '../../../.storybook/docs-locale';
import { UI_COLORS, UI_SIZES } from '../../lib/uiScale';
import { Icon } from '../Icon/Icon';
import { Tag, TagGroup, type TagAppearance, type TagVariant } from './Tag';

const importTag = "import { Icon, Tag, TagGroup } from 'd-ui';";

const VARIANTS: TagVariant[] = [
  'default',
  'success',
  'warning',
  'danger',
  'info',
  'neutral',
];

const meta = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: tagArgTypes,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  args: { variant: 'default' },
  parameters: componentSource(importTag, '<Tag>Nouveau</Tag>'),
  render: (args, { globals }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    return <Tag {...args}>{copy.defaultLabel}</Tag>;
  },
};

export const Variants: Story = {
  name: 'Variantes',
  parameters: componentSource(
    importTag,
    `<Tag variant="default">Nouveau</Tag>
<Tag variant="success">Publié</Tag>
<Tag variant="warning">Brouillon</Tag>
<Tag variant="danger">Archivé</Tag>
<Tag variant="info">Info</Tag>
<Tag variant="neutral">Neutre</Tag>`,
  ),
  render: (args, { globals }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    const labels: Record<TagVariant, string> = {
      default: copy.defaultLabel,
      success: copy.success,
      warning: copy.warning,
      danger: copy.danger,
      info: copy.info,
      neutral: copy.neutral,
    };
    return (
      <div className="flex flex-wrap items-center gap-2">
        {VARIANTS.map((variant) => (
          <Tag {...args} key={variant} variant={variant}>
            {labels[variant]}
          </Tag>
        ))}
      </div>
    );
  },
};

export const Appearances: Story = {
  name: 'Apparences',
  parameters: componentSource(
    importTag,
    `<Tag appearance="soft">Nouveau</Tag>
<Tag appearance="solid">Nouveau</Tag>
<Tag appearance="outline">Nouveau</Tag>`,
  ),
  render: (args, { globals }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    const appearances: TagAppearance[] = ['soft', 'solid', 'outline'];
    const labels: Record<TagAppearance, string> = {
      soft: copy.soft,
      solid: copy.solid,
      outline: copy.outline,
    };
    return (
      <div className="flex flex-col gap-3">
        {appearances.map((appearance) => (
          <div key={appearance} className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((variant) => (
              <Tag {...args} key={variant} appearance={appearance} variant={variant}>
                {labels[appearance]}
              </Tag>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importTag,
    `<Tag size="xxs">Nouveau</Tag>
<Tag size="s">Nouveau</Tag>
<Tag size="m">Nouveau</Tag>
<Tag size="xl">Nouveau</Tag>`,
  ),
  render: (args, { globals }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-center gap-2">
        {UI_SIZES.map((size) => (
          <Tag {...args} key={size} size={size}>
            {copy.defaultLabel}
          </Tag>
        ))}
      </div>
    );
  },
};

export const Colors: Story = {
  name: 'Couleurs',
  parameters: componentSource(
    importTag,
    `<Tag color="brand">Nouveau</Tag>
<Tag color="success">Nouveau</Tag>
<Tag color="warning">Nouveau</Tag>`,
  ),
  render: (args, { globals }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-center gap-2">
        {UI_COLORS.map((color) => (
          <Tag {...args} key={color} color={color}>
            {copy.defaultLabel}
          </Tag>
        ))}
      </div>
    );
  },
};

export const WithIcon: Story = {
  name: 'Avec icône',
  parameters: componentSource(
    importTag,
    `<Tag variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
    Publié
</Tag>`,
  ),
  render: (args, { globals }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    return (
      <Tag {...args} variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
        {copy.success}
      </Tag>
    );
  },
};

export const WithDot: Story = {
  name: 'Avec point',
  parameters: componentSource(
    importTag,
    `<Tag variant="success" dot>
    Publié
</Tag>`,
  ),
  render: (args, { globals }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Tag {...args} variant="success" dot>
          {copy.success}
        </Tag>
        <Tag {...args} variant="warning" dot>
          {copy.warning}
        </Tag>
        <Tag {...args} variant="danger" dot>
          {copy.danger}
        </Tag>
      </div>
    );
  },
};

export const Dismissible: Story = {
  name: 'Fermable',
  parameters: componentSource(
    importTag,
    `<Tag dismissible dismissLabel="Retirer" onDismiss={() => {}}>
    Nouveau
</Tag>`,
  ),
  render: (args, { globals }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    const [open, setOpen] = useState(true);
    if (!open) return <span />;
    return (
      <Tag
        {...args}
        dismissible
        dismissLabel={copy.dismiss}
        variant="neutral"
        onDismiss={() => setOpen(false)}
      >
        {copy.defaultLabel}
      </Tag>
    );
  },
};

export const Group: Story = {
  name: 'Groupe',
  parameters: componentSource(
    importTag,
    `<TagGroup max={3} label="Filtres">
    <Tag>Algèbre</Tag>
    <Tag>Géométrie</Tag>
    <Tag>Analyse</Tag>
    <Tag>Probabilités</Tag>
</TagGroup>`,
  ),
  render: (args, { globals }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    const { children: _children, ...rest } = args;
    return (
      <TagGroup {...rest} max={3} label={copy.groupLabel}>
        <Tag key="algebra">{copy.algebra}</Tag>
        <Tag key="geometry">{copy.geometry}</Tag>
        <Tag key="analysis">{copy.analysis}</Tag>
        <Tag key="probability">{copy.probability}</Tag>
      </TagGroup>
    );
  },
};
