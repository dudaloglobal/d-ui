import type { Meta, StoryObj } from '@storybook/react';
import { dividerArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, typographyCopy } from '../../../.storybook/docs-locale';
import { Text } from '../Text/Text';
import { Divider } from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  argTypes: dividerArgTypes,
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Horizontal',
  parameters: componentSource("import { Divider } from 'd-ui';", '<Divider />'),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex w-full flex-col gap-4">
        <Text>{copy.previous}</Text>
        <Divider {...args} />
        <Text>{copy.next}</Text>
      </div>
    );
  },
};

export const Vertical: Story = {
  name: 'Vertical',
  args: { orientation: 'vertical' },
  parameters: componentSource(
    "import { Divider } from 'd-ui';",
    '<Divider orientation="vertical" />',
  ),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex h-8 items-center gap-4">
        <Text as="span">{copy.drafts}</Text>
        <Divider {...args} />
        <Text as="span">{copy.published}</Text>
      </div>
    );
  },
};

export const Labelled: Story = {
  name: 'Labellisé',
  args: { label: 'Fin des résultats pertinents' },
  parameters: componentSource(
    "import { Divider } from 'd-ui';",
    '<Divider label="Fin des résultats pertinents" />',
  ),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex w-full flex-col gap-4">
        <Text>{copy.relevant}</Text>
        <Divider {...args} label={copy.labelled} />
        <Text tone="muted">{copy.other}</Text>
      </div>
    );
  },
};
