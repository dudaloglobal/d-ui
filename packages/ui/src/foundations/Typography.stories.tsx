import type { Meta, StoryObj } from '@storybook/react-vite';
import { componentSource } from '../../.storybook/docs-source';
import { docsLocale, typographyCopy } from '../../.storybook/docs-locale';
import { Heading } from '../components/Heading/Heading';
import { Text } from '../components/Text/Text';

const meta = {
  title: 'Foundations/Typography',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const BasicStyles: Story = {
  name: 'Styles de base',
  parameters: componentSource(
    "import { Heading, Text } from 'd-ui';",
    `<Heading level={1} size="display">
  Display
</Heading>
<Heading level={2} size="title">
  Title
</Heading>
<Heading level={3} size="subtitle">
  Subtitle
</Heading>
<Text>Texte courant.</Text>
<Text size="body-sm">Texte secondaire.</Text>
<Text size="caption">Caption</Text>`,
  ),
  render: (_, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex max-w-3xl flex-col gap-3">
        <Heading level={1} size="display">
          {copy.styleDisplay}
        </Heading>
        <Heading level={2} size="title">
          {copy.styleTitle}
        </Heading>
        <Heading level={3} size="subtitle">
          {copy.styleSubtitle}
        </Heading>
        <Text>{copy.styleBody}</Text>
        <Text size="body-sm">{copy.styleBodySm}</Text>
        <Text size="caption">{copy.styleCaption}</Text>
      </div>
    );
  },
};

export const CustomStyles: Story = {
  name: 'Styles personnalisés',
  parameters: componentSource(
    "import { Heading, Text } from 'd-ui';",
    `<Heading level={1} size="display">
  Title1
</Heading>
<Heading level={2} size="title">
  Title2
</Heading>
<Heading level={3} size="subtitle">
  Title3
</Heading>
<Heading level={4} size="body">
  Title4
</Heading>
<Text weight="medium">Intro</Text>
<Text>Body</Text>
<Text size="body-sm">Citation.</Text>
<Text size="caption" tone="muted">
  Publié le 12 mars 2026
</Text>`,
  ),
  render: (_, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="flex max-w-3xl flex-col gap-3">
        <Heading level={1} size="display">
          {copy.customTitle1}
        </Heading>
        <Heading level={2} size="title">
          {copy.customTitle2}
        </Heading>
        <Heading level={3} size="subtitle">
          {copy.customTitle3}
        </Heading>
        <Heading level={4} size="body">
          {copy.customTitle4}
        </Heading>
        <Text weight="medium">{copy.customIntro}</Text>
        <Text size="body">{copy.customBodyLarge}</Text>
        <Text>{copy.customBody}</Text>
        <Text size="body-sm">{copy.customQuote}</Text>
        <Text size="caption" tone="muted">
          {copy.stylePublish}
        </Text>
      </div>
    );
  },
};
