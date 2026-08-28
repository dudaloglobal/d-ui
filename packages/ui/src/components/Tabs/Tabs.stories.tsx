import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import {
  ArrowRightIcon,
  DevicePhoneMobileIcon,
  MegaphoneIcon,
  PaperClipIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { tabsArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, tabsCopy, type TabsDocsCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Tab, TabList, TabPanel, Tabs } from './Tabs';

const importTabs = "import { Tab, TabList, TabPanel, Tabs } from 'd-ui';";

const importDetachedTabs = `import {
    DevicePhoneMobileIcon,
    MegaphoneIcon,
    Squares2X2Icon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import { Icon, Tab, TabList, TabPanel, Tabs } from 'd-ui';`;

function DetachedPanel({
  copy,
  value,
  children,
}: {
  copy: TabsDocsCopy;
  value: string;
  children: ReactNode;
}) {
  return (
    <TabPanel value={value} className="rounded-xl border border-border-subtle bg-bg p-4">
      <div className="flex min-h-28 flex-col justify-between gap-6">
        <p>{children}</p>
        <div className="flex items-center justify-between border-t border-border-subtle pt-3">
          <Button variant="ghost" size="sm" icon={<Icon as={PaperClipIcon} size="sm" />}>
            {copy.attachImage}
          </Button>
          <Button
            size="sm"
            icon={<Icon as={ArrowRightIcon} size="sm" />}
            iconPosition="end"
          >
            {copy.buildIt}
          </Button>
        </div>
      </div>
    </TabPanel>
  );
}

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

export const Cluster: Story = {
  name: 'Alignés à gauche',
  parameters: componentSource(
    importTabs,
    `<Tabs label="Section du cours" defaultValue="overview" layout="cluster">
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
      <Tabs {...args} label={copy.label} defaultValue="overview" layout="cluster">
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

export const Detached: Story = {
  name: 'Détachés',
  parameters: componentSource(
    importDetachedTabs,
    `<Tabs label="Type de produit" defaultValue="internal" variant="detached">
    <TabList>
        <Tab value="internal" icon={<Icon as={Squares2X2Icon} size="sm" />}>
            Logiciel interne
        </Tab>
        <Tab value="customer" icon={<Icon as={UserGroupIcon} size="sm" />}>
            Logiciel client
        </Tab>
        <Tab value="marketing" icon={<Icon as={MegaphoneIcon} size="sm" />}>
            Marketing & SEO
        </Tab>
        <Tab value="mobile" icon={<Icon as={DevicePhoneMobileIcon} size="sm" />}>
            Applis mobiles
        </Tab>
    </TabList>
    <TabPanel value="internal" className="rounded-xl border border-border-subtle bg-bg p-4">
        Construire un CRM pour mon équipe commerciale de 12 personnes…
    </TabPanel>
    <TabPanel value="customer" className="rounded-xl border border-border-subtle bg-bg p-4">
        Portail client pour suivre les commandes et les tickets.
    </TabPanel>
    <TabPanel value="marketing" className="rounded-xl border border-border-subtle bg-bg p-4">
        Site vitrine et pages de campagne, référencement inclus.
    </TabPanel>
    <TabPanel value="mobile" className="rounded-xl border border-border-subtle bg-bg p-4">
        Application iOS et Android pour l’équipe terrain.
    </TabPanel>
</Tabs>`,
  ),
  render: (args, { globals }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return (
      <Tabs
        {...args}
        label={copy.productLabel}
        defaultValue="internal"
        variant="detached"
      >
        <TabList>
          <Tab value="internal" icon={<Icon as={Squares2X2Icon} size="sm" />}>
            {copy.internal}
          </Tab>
          <Tab value="customer" icon={<Icon as={UserGroupIcon} size="sm" />}>
            {copy.customer}
          </Tab>
          <Tab value="marketing" icon={<Icon as={MegaphoneIcon} size="sm" />}>
            {copy.marketing}
          </Tab>
          <Tab value="mobile" icon={<Icon as={DevicePhoneMobileIcon} size="sm" />}>
            {copy.mobile}
          </Tab>
        </TabList>
        <DetachedPanel copy={copy} value="internal">
          {copy.internalPanel}
        </DetachedPanel>
        <DetachedPanel copy={copy} value="customer">
          {copy.customerPanel}
        </DetachedPanel>
        <DetachedPanel copy={copy} value="marketing">
          {copy.marketingPanel}
        </DetachedPanel>
        <DetachedPanel copy={copy} value="mobile">
          {copy.mobilePanel}
        </DetachedPanel>
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
