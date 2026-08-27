import type { Meta, StoryObj } from '@storybook/react-vite';
import { skipLinkArgTypes } from '../../.storybook/arg-types';
import { componentSource } from '../../.storybook/docs-source';
import { docsLocale, skipLinkCopy } from '../../.storybook/docs-locale';
import { SkipLink } from './SkipLink';

const meta = {
  title: 'Accessibility/SkipLink',
  component: SkipLink,
  argTypes: skipLinkArgTypes,
  parameters: {
    controls: {
      include: ['href', 'children', 'className'],
    },
  },
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Keyboard: Story = {
  name: 'Clavier',
  parameters: componentSource(
    "import { SkipLink } from 'd-ui';",
    `<SkipLink>Aller au contenu principal</SkipLink>
<main id="main" tabIndex={-1}>
  Contenu principal
</main>`,
  ),
  render: (args, { globals }) => {
    const copy = skipLinkCopy(docsLocale(globals.locale));
    return (
      <div className="text-fg">
        <SkipLink {...args}>{args.children ?? copy.label}</SkipLink>
        <p className="m-0 text-sm opacity-80">{copy.hint}</p>
        <main
          id="main"
          tabIndex={-1}
          className="mt-4 rounded-md border border-border p-4"
        >
          {copy.main}
        </main>
      </div>
    );
  },
};

export const CustomHref: Story = {
  name: 'Cible personnalisée',
  args: { href: '#content' },
  parameters: componentSource(
    "import { SkipLink } from 'd-ui';",
    `<SkipLink href="#content">Aller au contenu</SkipLink>
<main id="content" tabIndex={-1}>
  Zone de contenu
</main>`,
  ),
  render: (args, { globals }) => {
    const copy = skipLinkCopy(docsLocale(globals.locale));
    return (
      <div className="text-fg">
        <SkipLink {...args}>{args.children ?? copy.customLabel}</SkipLink>
        <p className="m-0 text-sm opacity-80">{copy.customHint}</p>
        <main
          id="content"
          tabIndex={-1}
          className="mt-4 rounded-md border border-border p-4"
        >
          {copy.customTarget}
        </main>
      </div>
    );
  },
};
