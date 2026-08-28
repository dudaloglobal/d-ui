import type { Meta, StoryObj } from '@storybook/react-vite';
import { fileUploadArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { docsLocale, fileUploadCopy } from '../../../.storybook/docs-locale';
import { Text } from '../Text/Text';
import { FileUpload } from './FileUpload';

const importFileUpload = "import { FileUpload } from 'd-ui';";

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  argTypes: fileUploadArgTypes,
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importFileUpload,
    `<FileUpload
    label="Devoir"
    helper="PDF, jusqu’à 5 Mo."
    accept=".pdf,application/pdf"
    maxSize={5 * 1024 * 1024}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return (
      <FileUpload
        {...args}
        label={copy.label}
        helper={copy.helper}
        dropLabel={copy.drop}
        browseLabel={copy.browse}
        accept=".pdf,application/pdf"
        maxSize={5 * 1024 * 1024}
      />
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importFileUpload,
    `<FileUpload size="sm" label="Devoir" />
<FileUpload size="md" label="Devoir" />
<FileUpload size="lg" label="Devoir" />`,
  ),
  render: (args, { globals }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-4">
        <FileUpload
          {...args}
          size="sm"
          label={`${copy.label} (${copy.small})`}
          dropLabel={copy.drop}
          browseLabel={copy.browse}
        />
        <FileUpload
          {...args}
          size="md"
          label={`${copy.label} (${copy.medium})`}
          dropLabel={copy.drop}
          browseLabel={copy.browse}
        />
        <FileUpload
          {...args}
          size="lg"
          label={`${copy.label} (${copy.large})`}
          dropLabel={copy.drop}
          browseLabel={copy.browse}
        />
      </div>
    );
  },
};

export const ClickOnly: Story = {
  name: 'Clic seul',
  parameters: componentSource(
    importFileUpload,
    '<FileUpload label="Devoir" dropzone={false} />',
  ),
  render: (args, { globals }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return (
      <FileUpload
        {...args}
        label={copy.label}
        dropzone={false}
        browseLabel={copy.browse}
      />
    );
  },
};

export const Multiple: Story = {
  name: 'Plusieurs fichiers',
  parameters: componentSource(importFileUpload, '<FileUpload label="Devoir" multiple />'),
  render: (args, { globals }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return (
      <FileUpload
        {...args}
        label={copy.label}
        dropLabel={copy.drop}
        browseLabel={copy.browse}
        multiple
      />
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(importFileUpload, '<FileUpload label="Devoir" disabled />'),
  render: (args, { globals }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return (
      <FileUpload
        {...args}
        label={copy.label}
        dropLabel={copy.drop}
        browseLabel={copy.browse}
        disabled
      />
    );
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  parameters: componentSource(
    importFileUpload,
    '<FileUpload label="Devoir" invalid error="Ce champ est requis." />',
  ),
  render: (args, { globals }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return (
      <FileUpload
        {...args}
        label={copy.label}
        dropLabel={copy.drop}
        browseLabel={copy.browse}
        invalid
        error={copy.error}
      />
    );
  },
};

export const MaxSize: Story = {
  name: 'Accept et taille max',
  parameters: componentSource(
    importFileUpload,
    `<FileUpload
    label="Devoir"
    accept=".pdf,application/pdf"
    maxSize={5 * 1024 * 1024}
    helper="PDF, jusqu’à 5 Mo."
/>`,
  ),
  render: (args, { globals }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return (
      <FileUpload
        {...args}
        label={copy.label}
        helper={copy.helper}
        dropLabel={copy.drop}
        browseLabel={copy.browse}
        accept=".pdf,application/pdf"
        maxSize={5 * 1024 * 1024}
      />
    );
  },
};

export const Progress: Story = {
  name: 'Progression',
  parameters: componentSource(
    importFileUpload,
    `<FileUpload
    label="Devoir"
    progress={<p>Envoi : 40 %</p>}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return (
      <FileUpload
        {...args}
        label={copy.label}
        dropLabel={copy.drop}
        browseLabel={copy.browse}
        defaultFiles={[new File(['x'], 'devoir.pdf', { type: 'application/pdf' })]}
        progress={
          <Text as="span" size="body-sm" tone="muted">
            {copy.progress}
          </Text>
        }
      />
    );
  },
};
