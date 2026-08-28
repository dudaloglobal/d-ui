import type { Meta, StoryObj } from '@storybook/react-vite';
import { tabsArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, tabsCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { Tab, TabList, TabPanel, Tabs } from './Tabs';

const importTabs = "import { Tab, TabList, TabPanel, Tabs } from 'd-ui';";

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  args: { children: <span /> },
  argTypes: tabsArgTypes,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importTabs,
    `<Tabs label="Section du cours" defaultValue="overview">
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
        <Tab value="files">Fichiers</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
    <TabPanel value="files">Documents du cours.</TabPanel>
</Tabs>`,
  ),
  render: (args, { globals }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return (
      <Tabs {...args} label={copy.label} defaultValue="overview">
        <TabList>
          <Tab value="overview">{copy.overview}</Tab>
          <Tab value="homework">{copy.homework}</Tab>
          <Tab value="files">{copy.files}</Tab>
        </TabList>
        <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
        <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        <TabPanel value="files">{copy.filesPanel}</TabPanel>
      </Tabs>
    );
  },
};

export const Manual: Story = {
  name: 'Activation manuelle',
  parameters: componentSource(
    importTabs,
    `<Tabs label="Section du cours" defaultValue="overview" activation="manual">
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
        <Tab value="files">Fichiers</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
    <TabPanel value="files">Documents du cours.</TabPanel>
</Tabs>`,
  ),
  render: (args, { globals }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return (
      <Tabs {...args} label={copy.label} defaultValue="overview" activation="manual">
        <TabList>
          <Tab value="overview">{copy.overview}</Tab>
          <Tab value="homework">{copy.homework}</Tab>
          <Tab value="files">{copy.files}</Tab>
        </TabList>
        <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
        <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        <TabPanel value="files">{copy.filesPanel}</TabPanel>
      </Tabs>
    );
  },
};

export const Vertical: Story = {
  name: 'Onglets verticaux',
  parameters: componentSource(
    importTabs,
    `<Tabs label="Section du cours" defaultValue="overview" orientation="vertical">
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
        <Tab value="files">Fichiers</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
    <TabPanel value="files">Documents du cours.</TabPanel>
</Tabs>`,
  ),
  render: (args, { globals }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return (
      <Tabs {...args} label={copy.label} defaultValue="overview" orientation="vertical">
        <TabList>
          <Tab value="overview">{copy.overview}</Tab>
          <Tab value="homework">{copy.homework}</Tab>
          <Tab value="files">{copy.files}</Tab>
        </TabList>
        <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
        <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        <TabPanel value="files">{copy.filesPanel}</TabPanel>
      </Tabs>
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    importTabs,
    `<Tabs label="Section du cours" defaultValue="overview" disabled>
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
</Tabs>`,
  ),
  render: (args, { globals }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return (
      <Tabs {...args} label={copy.label} defaultValue="overview" disabled>
        <TabList>
          <Tab value="overview">{copy.overview}</Tab>
          <Tab value="homework">{copy.homework}</Tab>
        </TabList>
        <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
        <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
      </Tabs>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importTabs,
    `<>
    <Tabs size="sm" label="Section du cours" defaultValue="overview">
        <TabList>
            <Tab value="overview">Aperçu</Tab>
            <Tab value="homework">Devoirs</Tab>
        </TabList>
        <TabPanel value="overview">Présentation du cours.</TabPanel>
        <TabPanel value="homework">Liste des devoirs.</TabPanel>
    </Tabs>
    <Tabs size="md" label="Section du cours" defaultValue="overview">
        <TabList>
            <Tab value="overview">Aperçu</Tab>
            <Tab value="homework">Devoirs</Tab>
        </TabList>
        <TabPanel value="overview">Présentation du cours.</TabPanel>
        <TabPanel value="homework">Liste des devoirs.</TabPanel>
    </Tabs>
</>`,
  ),
  render: (args, { globals }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-8">
        <Tabs
          {...args}
          size="sm"
          label={`${copy.label} (${copy.small})`}
          defaultValue="overview"
        >
          <TabList>
            <Tab value="overview">{copy.overview}</Tab>
            <Tab value="homework">{copy.homework}</Tab>
          </TabList>
          <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
          <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        </Tabs>
        <Tabs
          {...args}
          size="md"
          label={`${copy.label} (${copy.medium})`}
          defaultValue="overview"
        >
          <TabList>
            <Tab value="overview">{copy.overview}</Tab>
            <Tab value="homework">{copy.homework}</Tab>
          </TabList>
          <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
          <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        </Tabs>
        <Tabs
          {...args}
          size="lg"
          label={`${copy.label} (${copy.large})`}
          defaultValue="overview"
        >
          <TabList>
            <Tab value="overview">{copy.overview}</Tab>
            <Tab value="homework">{copy.homework}</Tab>
          </TabList>
          <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
          <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        </Tabs>
      </div>
    );
  },
};
