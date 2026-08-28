import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { linkArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, typographyCopy } from '../../../.storybook/docs-locale';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Link } from './Link';

const importLink = "import { Link } from 'd-ui';";
const importIconLink = `import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Icon, Link } from 'd-ui';`;

const meta = {
  title: 'Components/Link',
  component: Link,
  argTypes: linkArgTypes,
  args: {
    href: '#',
    children: 'Consulter le catalogue',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importLink,
    '<Link href="/catalogue">Consulter le catalogue</Link>',
  ),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <Link {...args} href="/catalogue">
        {copy.catalogue}
      </Link>
    );
  },
};

export const WithIcon: Story = {
  name: 'Avec icône',
  parameters: componentSource(
    importIconLink,
    `<Link
    href="/catalogue"
    icon={<Icon as={ArrowTopRightOnSquareIcon} size="sm" />}
    iconPosition="end"
>
    Consulter le catalogue
</Link>`,
  ),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <Link
        {...args}
        href="/catalogue"
        icon={<Icon as={ArrowTopRightOnSquareIcon} size="sm" />}
        iconPosition="end"
      >
        {copy.catalogue}
      </Link>
    );
  },
};

export const Dark: Story = {
  name: 'Couleur sombre',
  parameters: componentSource(
    importLink,
    '<Link href="/catalogue" color="dark">Lien sombre</Link>',
  ),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <Link {...args} href="/catalogue" color="dark">
        {copy.darkLink}
      </Link>
    );
  },
};

export const Light: Story = {
  name: 'Couleur claire',
  parameters: componentSource(
    importLink,
    '<Link href="/catalogue" color="light">Lien clair</Link>',
  ),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <div className="bg-fg rounded-md px-4 py-3">
        <Link {...args} href="/catalogue" color="light">
          {copy.lightLink}
        </Link>
      </div>
    );
  },
};

export const External: Story = {
  name: 'Externe',
  args: {
    href: 'https://example.org',
    external: true,
  },
  parameters: componentSource(
    importLink,
    `<Link href="https://example.org" external externalLabel="(ouvre dans un nouvel onglet)">
  Documentation Dudalo
</Link>`,
  ),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    const locale = docsLocale(globals.locale);
    return (
      <Link
        {...args}
        externalLabel={
          locale === 'en' ? '(opens in a new tab)' : '(ouvre dans un nouvel onglet)'
        }
      >
        {copy.docs}
      </Link>
    );
  },
};

export const InRunningText: Story = {
  name: 'Dans un paragraphe',
  parameters: componentSource(
    "import { Link, Text } from 'd-ui';",
    `<Text>
    Consultez le <Link href="/catalogue">catalogue</Link> pour choisir un module.
</Text>`,
  ),
  render: (args, { globals }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return (
      <Text className="max-w-prose">
        {copy.inTextBefore}{' '}
        <Link {...args} href="/catalogue">
          {copy.inTextLink}
        </Link>{' '}
        {copy.inTextAfter}
      </Text>
    );
  },
};
