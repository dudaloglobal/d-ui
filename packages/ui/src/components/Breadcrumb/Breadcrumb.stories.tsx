import type { Meta, StoryObj } from '@storybook/react-vite';
import { breadcrumbArgTypes } from '../../../.storybook/arg-types';
import { breadcrumbCopy, docsLocale } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

const importBreadcrumb = "import { Breadcrumb, BreadcrumbItem } from 'd-ui';";

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  args: { children: <span /> },
  argTypes: breadcrumbArgTypes,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importBreadcrumb,
    `<Breadcrumb label="Fil d’Ariane">
    <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
    <BreadcrumbItem href="/cours">Cours</BreadcrumbItem>
    <BreadcrumbItem>Mathématiques</BreadcrumbItem>
</Breadcrumb>`,
  ),
  render: (args, { globals }) => {
    const copy = breadcrumbCopy(docsLocale(globals.locale));
    return (
      <Breadcrumb {...args} label={copy.label}>
        <BreadcrumbItem href="/">{copy.home}</BreadcrumbItem>
        <BreadcrumbItem href="/cours">{copy.courses}</BreadcrumbItem>
        <BreadcrumbItem>{copy.math}</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importBreadcrumb,
    `<>
    <Breadcrumb size="sm" label="Fil d’Ariane">
        <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
        <BreadcrumbItem>Mathématiques</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb size="md" label="Fil d’Ariane">
        <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
        <BreadcrumbItem>Mathématiques</BreadcrumbItem>
    </Breadcrumb>
</>`,
  ),
  render: (args, { globals }) => {
    const copy = breadcrumbCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-4">
        <Breadcrumb {...args} size="sm" label={`${copy.label} (${copy.small})`}>
          <BreadcrumbItem href="/">{copy.home}</BreadcrumbItem>
          <BreadcrumbItem>{copy.math}</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb {...args} size="md" label={`${copy.label} (${copy.medium})`}>
          <BreadcrumbItem href="/">{copy.home}</BreadcrumbItem>
          <BreadcrumbItem>{copy.math}</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb {...args} size="lg" label={`${copy.label} (${copy.large})`}>
          <BreadcrumbItem href="/">{copy.home}</BreadcrumbItem>
          <BreadcrumbItem>{copy.math}</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  },
};
