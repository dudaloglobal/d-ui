import type { Meta, StoryObj } from '@storybook/react-vite';
import { headingArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, typographyCopy } from '../../../.storybook/docs-locale';
import { Heading } from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  argTypes: headingArgTypes,
  args: {
    level: 2,
    children: 'Parcours d’apprentissage',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    "import { Heading } from 'd-ui';",
    '<Heading level={2}>Parcours d’apprentissage</Heading>',
  ),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Heading {...args}>{copy.heading}</Heading>;
  },
};

export const Levels: Story = {
  name: 'Niveaux',
  parameters: componentSource(
    "import { Heading } from 'd-ui';",
    `<Heading level={1}>Niveau 1</Heading>
<Heading level={2}>Niveau 2</Heading>
<Heading level={3}>Niveau 3</Heading>`,
  ),
  render: (_, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-3">
        <Heading level={1}>{copy.level1}</Heading>
        <Heading level={2}>{copy.level2}</Heading>
        <Heading level={3}>{copy.level3}</Heading>
        <Heading level={4}>{copy.level4}</Heading>
      </div>
    );
  },
};

export const SizeDecoupledFromLevel: Story = {
  name: 'Taille découplée',
  parameters: componentSource(
    "import { Heading } from 'd-ui';",
    `<Heading level={2} size="display">
  Titre visuellement large
</Heading>`,
  ),
  render: (_, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-3">
        <Heading level={2} size="display">
          {copy.sizeDecoupledDisplay}
        </Heading>
        <Heading level={1} size="subtitle">
          {copy.sizeDecoupledSubtitle}
        </Heading>
      </div>
    );
  },
};

export const Bold: Story = {
  name: 'Gras',
  parameters: componentSource(
    "import { Heading } from 'd-ui';",
    '<Heading level={2} bold>Parcours d’apprentissage</Heading>',
  ),
  render: (_, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <Heading level={2} bold>
        {copy.heading}
      </Heading>
    );
  },
};
