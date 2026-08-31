import type { Meta, StoryObj } from '@storybook/react-vite';
import { spinnerArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, loadingCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';
import { Spinner } from './Spinner';

const importSpinner = "import { Spinner } from 'd-ui';";

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: spinnerArgTypes,
  parameters: { controls: { include: ['size', 'label'] } },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(importSpinner, `<Spinner label="Chargement…" />`),
  render: (args, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="flex justify-center p-6">
        <Spinner {...args} label={copy.loading} />
      </div>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importSpinner,
    `<>
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="flex items-center justify-center gap-8 p-6">
        {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
          <div key={size} className="flex flex-col items-center gap-2">
            <Spinner size={size} label={`${copy.loading} (${size})`} />
            <Text size="body-sm" tone="muted">
              {size}
            </Text>
          </div>
        ))}
      </div>
    );
  },
};

export const Colors: Story = {
  name: 'Couleurs',
  parameters: componentSource(
    importSpinner,
    `<>
    <Spinner className="text-brand" />
    <Spinner className="text-fg-muted" />
    <Spinner className="text-danger" />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="flex items-center justify-center gap-8 p-6">
        {['text-brand', 'text-fg', 'text-fg-muted', 'text-danger'].map((tone) => (
          <Spinner key={tone} className={tone} label={`${copy.loading} — ${tone}`} />
        ))}
      </div>
    );
  },
};

export const Alignment: Story = {
  name: 'Alignement',
  parameters: componentSource(
    importSpinner,
    `<div className="flex items-center gap-2">
    <Spinner size="xs" />
    <span>Chargement…</span>
</div>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col items-center gap-6 p-6">
        <div className="flex items-center gap-2">
          <Spinner size="xs" />
          <Text>{copy.loading}</Text>
        </div>
        <div className="border-border grid h-32 w-64 place-items-center rounded-md border">
          <Spinner label={copy.loading} />
        </div>
      </div>
    );
  },
};

export const WithCard: Story = {
  name: 'Dans une carte',
  parameters: componentSource(
    importSpinner,
    `<div className="rounded-lg border p-6" aria-busy="true">
    <Spinner label="Chargement du rapport" />
</div>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="flex justify-center p-6">
        <div
          className="border-border w-80 rounded-lg border p-6"
          aria-busy="true"
          aria-live="polite"
        >
          <Heading level={3} size="subtitle">
            {copy.cardTitle}
          </Heading>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Spinner />
            <Text tone="muted">{copy.loading}</Text>
          </div>
        </div>
      </div>
    );
  },
};

export const InButtons: Story = {
  name: 'Dans un bouton',
  parameters: componentSource(
    "import { Button } from 'd-ui';",
    `<>
    <Button loading>Enregistrer</Button>
    <Button loading loadingIndicator="bounce">Enregistrer</Button>
</>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="flex items-center justify-center gap-4 p-6">
        <Button loading>{copy.save}</Button>
        <Button variant="secondary" loading loadingIndicator="bounce">
          {copy.save}
        </Button>
      </div>
    );
  },
};
