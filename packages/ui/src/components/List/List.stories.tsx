import type { Meta, StoryObj } from '@storybook/react-vite';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { listArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, listCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { List, ListItem } from './List';

const importList = "import { List, ListItem } from 'd-ui';";
const importSlots = `import { BookOpenIcon } from '@heroicons/react/24/outline';
import { Button, Icon, List, ListItem } from 'd-ui';`;

const meta = {
  title: 'Components/List',
  component: List,
  args: { children: <span /> },
  argTypes: listArgTypes,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importList,
    `<List>
    <ListItem>Algèbre</ListItem>
    <ListItem>Géométrie</ListItem>
    <ListItem>Analyse</ListItem>
</List>`,
  ),
  render: (args, { globals }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return (
      <List {...args}>
        <ListItem>{copy.algebra}</ListItem>
        <ListItem>{copy.geometry}</ListItem>
        <ListItem>{copy.analysis}</ListItem>
      </List>
    );
  },
};

export const Ordered: Story = {
  name: 'Ordonnée',
  parameters: componentSource(
    importList,
    `<List as="ol">
    <ListItem>Lire l’énoncé</ListItem>
    <ListItem>Rédiger la preuve</ListItem>
</List>`,
  ),
  render: (args, { globals }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return (
      <List {...args} as="ol">
        <ListItem>{copy.stepOne}</ListItem>
        <ListItem>{copy.stepTwo}</ListItem>
        <ListItem>{copy.stepThree}</ListItem>
      </List>
    );
  },
};

export const Divided: Story = {
  name: 'Filets',
  parameters: componentSource(
    importList,
    `<List divided>
    <ListItem>Algèbre</ListItem>
    <ListItem>Géométrie</ListItem>
    <ListItem>Analyse</ListItem>
</List>`,
  ),
  render: (args, { globals }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return (
      <List {...args} divided>
        <ListItem>{copy.algebra}</ListItem>
        <ListItem>{copy.geometry}</ListItem>
        <ListItem>{copy.analysis}</ListItem>
      </List>
    );
  },
};

export const WithSlots: Story = {
  name: 'Emplacements',
  parameters: componentSource(
    importSlots,
    `<List>
    <ListItem leading={<Icon as={BookOpenIcon} />} trailing={<Button size="sm">Ouvrir</Button>}>
        Algèbre
    </ListItem>
</List>`,
  ),
  render: (args, { globals }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return (
      <List {...args}>
        <ListItem
          leading={<Icon as={BookOpenIcon} />}
          trailing={
            <Button size="sm" variant="secondary">
              {copy.open}
            </Button>
          }
        >
          {copy.algebra}
        </ListItem>
        <ListItem
          leading={<Icon as={BookOpenIcon} />}
          trailing={
            <Button size="sm" variant="secondary">
              {copy.open}
            </Button>
          }
        >
          {copy.geometry}
        </ListItem>
      </List>
    );
  },
};

export const WithDescription: Story = {
  name: 'Avec description',
  parameters: componentSource(
    importList,
    `<List>
    <ListItem description="Chapitre 2 — espaces vectoriels">Algèbre</ListItem>
    <ListItem description="Chapitre 3 — figures du plan">Géométrie</ListItem>
</List>`,
  ),
  render: (args, { globals }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return (
      <List {...args}>
        <ListItem description={copy.algebraDesc}>{copy.algebra}</ListItem>
        <ListItem description={copy.geometryDesc}>{copy.geometry}</ListItem>
      </List>
    );
  },
};

export const AsLink: Story = {
  name: 'Lien',
  parameters: componentSource(
    importList,
    `<List>
    <ListItem href="/cours/algebre">Algèbre</ListItem>
    <ListItem href="/cours/geometrie">Géométrie</ListItem>
</List>`,
  ),
  render: (args, { globals }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return (
      <List {...args}>
        <ListItem href="/cours/algebre">{copy.algebra}</ListItem>
        <ListItem href="/cours/geometrie">{copy.geometry}</ListItem>
      </List>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importList,
    `<>
    <List size="sm">
        <ListItem>Algèbre</ListItem>
    </List>
    <List size="lg">
        <ListItem>Algèbre</ListItem>
    </List>
</>`,
  ),
  render: (args, { globals }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-6">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <List key={size} {...args} size={size} divided>
            <ListItem>{copy.algebra}</ListItem>
            <ListItem>{copy.geometry}</ListItem>
          </List>
        ))}
      </div>
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    importList,
    `<List>
    <ListItem href="/cours/algebre">Algèbre</ListItem>
    <ListItem href="/cours/geometrie" disabled>
        Géométrie
    </ListItem>
</List>`,
  ),
  render: (args, { globals }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return (
      <List {...args}>
        <ListItem href="/cours/algebre">{copy.algebra}</ListItem>
        <ListItem href="/cours/geometrie" disabled>
          {copy.geometry}
        </ListItem>
      </List>
    );
  },
};
