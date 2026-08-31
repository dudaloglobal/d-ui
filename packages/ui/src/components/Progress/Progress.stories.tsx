import type { Meta, StoryObj } from '@storybook/react-vite';
import { progressArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, loadingCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { Text } from '../Text/Text';
import { Progress } from './Progress';

const importProgress = "import { Progress } from 'd-ui';";

const meta = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: progressArgTypes,
  parameters: {
    controls: { include: ['variant', 'value', 'showValue', 'size'] },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  args: { label: 'Téléversement du fichier', value: 62 },
  parameters: componentSource(
    importProgress,
    `<Progress value={62} label="Téléversement du fichier" />`,
  ),
  render: (args, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="mx-auto w-80 p-6">
        <Progress {...args} label={copy.upload} />
      </div>
    );
  },
};

export const Indeterminate: Story = {
  name: 'Indéterminée',
  args: { label: 'Chargement…' },
  parameters: componentSource(importProgress, `<Progress label="Chargement…" />`),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="mx-auto w-80 p-6">
        <Progress label={copy.loading} />
      </div>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  args: { label: 'Téléversement', value: 45 },
  parameters: componentSource(
    importProgress,
    `<>
    <Progress size="sm" value={45} label="Téléversement" />
    <Progress size="md" value={45} label="Téléversement" />
    <Progress size="lg" value={45} label="Téléversement" />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="mx-auto flex w-80 flex-col gap-6 p-6">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <div key={size} className="flex flex-col gap-2">
            <Text size="body-sm" tone="muted">
              {size}
            </Text>
            <Progress size={size} value={45} label={`${copy.upload} (${size})`} />
          </div>
        ))}
      </div>
    );
  },
};

export const WithValue: Story = {
  name: 'Avec la valeur',
  args: { label: 'Stockage utilisé', value: 78, showValue: true },
  parameters: componentSource(
    importProgress,
    `<Progress value={78} showValue label="Stockage utilisé" />`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="mx-auto w-80 p-6">
        <Progress value={78} showValue label={copy.storage} />
      </div>
    );
  },
};

export const AnnouncedText: Story = {
  name: 'Texte annoncé',
  args: { label: 'Téléversement du fichier', value: 30 },
  parameters: componentSource(
    importProgress,
    `<Progress
    value={30}
    showValue
    label="Téléversement du fichier"
    valueText="12 Mo sur 40"
/>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="mx-auto w-80 p-6">
        <Progress value={30} showValue label={copy.upload} valueText={copy.uploadValue} />
      </div>
    );
  },
};

export const Circular: Story = {
  name: 'Circulaire',
  args: { label: 'Quota de stockage', value: 68, variant: 'circular' },
  parameters: componentSource(
    importProgress,
    `<>
    <Progress variant="circular" size="sm" value={68} label="Quota" />
    <Progress variant="circular" value={68} showValue label="Quota" />
    <Progress variant="circular" size="lg" value={68} showValue label="Quota" />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="flex items-center justify-center gap-8 p-6">
        <Progress variant="circular" size="sm" value={68} label={copy.quota} />
        <Progress variant="circular" value={68} showValue label={copy.quota} />
        <Progress variant="circular" size="lg" value={68} showValue label={copy.quota} />
      </div>
    );
  },
};
