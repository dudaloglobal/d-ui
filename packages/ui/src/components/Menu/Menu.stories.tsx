import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { docsLocale, menuCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { menuArgTypes } from '../../../.storybook/arg-types';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';
import { Icon } from '../Icon/Icon';
import { Link } from '../Link/Link';
import { ContextMenu, Menu, MenuItem, MenuSeparator, MenuSub } from './Menu';

const importMenu =
  "import { Button, Menu, MenuItem, MenuSeparator, MenuSub } from 'd-ui';";
const importTriggers = `import { ChevronDownIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton, Link, Menu, MenuItem } from 'd-ui';`;
const importItems = `import {
    ArrowTopRightOnSquareIcon,
    DocumentDuplicateIcon,
    PencilSquareIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';
import { Button, Icon, Menu, MenuItem, MenuSeparator } from 'd-ui';`;
const importContext =
  "import { Button, ContextMenu, Menu, MenuItem, MenuSeparator } from 'd-ui';";

const meta = {
  title: 'Components/Menu',
  component: Menu,
  argTypes: menuArgTypes,
  args: {
    trigger: <span />,
    children: <span />,
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importMenu,
    `<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem>Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>`,
  ),
  render: (args, { globals }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return (
      <Menu
        {...args}
        label={copy.label}
        trigger={<Button variant="secondary">{copy.actions}</Button>}
      >
        <MenuItem>{copy.rename}</MenuItem>
        <MenuItem>{copy.duplicate}</MenuItem>
        <MenuSeparator />
        <MenuItem>{copy.delete}</MenuItem>
      </Menu>
    );
  },
};

export const TriggerVariants: Story = {
  name: 'Variantes de déclencheur',
  parameters: componentSource(
    importTriggers,
    `<>
    <Menu
        label="Actions du devoir"
        trigger={
            <Button variant="secondary" icon={<Icon as={ChevronDownIcon} />} iconPosition="end">
                Actions
            </Button>
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu
        label="Actions du devoir"
        trigger={
            <IconButton icon={<Icon as={EllipsisVerticalIcon} />} aria-label="Plus d’actions" />
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu label="Actions du devoir" trigger={<Link href="#actions">Actions</Link>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu
        label="Actions du devoir"
        trigger={
            <Button variant="secondary" size="sm" className="rounded-full">
                Actions
            </Button>
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>`,
  ),
  render: (args, { globals }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    const items = (
      <>
        <MenuItem>{copy.rename}</MenuItem>
        <MenuItem>{copy.duplicate}</MenuItem>
      </>
    );
    return (
      <div className="flex flex-wrap items-center gap-4">
        <Menu
          {...args}
          label={copy.label}
          trigger={
            <Button
              variant="secondary"
              icon={<Icon as={ChevronDownIcon} />}
              iconPosition="end"
            >
              {copy.actions}
            </Button>
          }
        >
          {items}
        </Menu>
        <Menu
          label={copy.label}
          trigger={
            <IconButton
              icon={<Icon as={EllipsisVerticalIcon} />}
              aria-label={copy.moreActions}
            />
          }
        >
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu label={copy.label} trigger={<Link href="#actions">{copy.actions}</Link>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu
          label={copy.label}
          trigger={
            <Button variant="secondary" size="sm" className="rounded-full">
              {copy.actions}
            </Button>
          }
        >
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
      </div>
    );
  },
};

export const Items: Story = {
  name: 'Éléments du menu',
  parameters: componentSource(
    importItems,
    `<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem icon={<Icon as={PencilSquareIcon} />}>Renommer</MenuItem>
    <MenuItem icon={<Icon as={DocumentDuplicateIcon} />} shortcut="⌘⇧D">
        Dupliquer
    </MenuItem>
    <MenuItem
        href="/devoirs/12"
        iconEnd={<Icon as={ArrowTopRightOnSquareIcon} />}
    >
        Ouvrir le devoir
    </MenuItem>
    <MenuSeparator />
    <MenuItem icon={<Icon as={TrashIcon} />}>Supprimer</MenuItem>
</Menu>`,
  ),
  render: (args, { globals }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return (
      <Menu
        {...args}
        label={copy.label}
        trigger={<Button variant="secondary">{copy.actions}</Button>}
      >
        <MenuItem icon={<Icon as={PencilSquareIcon} />}>{copy.rename}</MenuItem>
        <MenuItem
          icon={<Icon as={DocumentDuplicateIcon} />}
          shortcut={copy.duplicateShortcut}
        >
          {copy.duplicate}
        </MenuItem>
        <MenuItem href="/devoirs/12" iconEnd={<Icon as={ArrowTopRightOnSquareIcon} />}>
          {copy.openAssignment}
        </MenuItem>
        <MenuSeparator />
        <MenuItem icon={<Icon as={TrashIcon} />}>{copy.delete}</MenuItem>
      </Menu>
    );
  },
};

export const Shortcuts: Story = {
  name: 'Raccourcis',
  parameters: componentSource(
    importMenu,
    `<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem shortcut="⌘S">Enregistrer</MenuItem>
    <MenuItem shortcut="⌘⇧D">Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem shortcut="⌘⌫">Supprimer</MenuItem>
</Menu>`,
  ),
  render: (args, { globals }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return (
      <Menu
        {...args}
        label={copy.label}
        trigger={<Button variant="secondary">{copy.actions}</Button>}
      >
        <MenuItem shortcut={copy.saveShortcut}>{copy.save}</MenuItem>
        <MenuItem shortcut={copy.duplicateShortcut}>{copy.duplicate}</MenuItem>
        <MenuSeparator />
        <MenuItem shortcut={copy.deleteShortcut}>{copy.delete}</MenuItem>
      </Menu>
    );
  },
};

export const DisabledItems: Story = {
  name: 'Éléments désactivés',
  parameters: componentSource(
    importMenu,
    `<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem disabled>Archiver</MenuItem>
    <MenuItem>Supprimer</MenuItem>
</Menu>`,
  ),
  render: (args, { globals }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return (
      <Menu
        {...args}
        label={copy.label}
        trigger={<Button variant="secondary">{copy.actions}</Button>}
      >
        <MenuItem>{copy.rename}</MenuItem>
        <MenuItem disabled>{copy.archive}</MenuItem>
        <MenuItem>{copy.delete}</MenuItem>
      </Menu>
    );
  },
};

export const Submenu: Story = {
  name: 'Sous-menu',
  parameters: componentSource(
    importMenu,
    `<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuSub label="Partager">
        <MenuItem>Copier le lien</MenuItem>
        <MenuItem>E-mail</MenuItem>
    </MenuSub>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>`,
  ),
  render: (args, { globals }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return (
      <Menu
        {...args}
        label={copy.label}
        trigger={<Button variant="secondary">{copy.actions}</Button>}
      >
        <MenuItem>{copy.rename}</MenuItem>
        <MenuSub label={copy.share}>
          <MenuItem>{copy.copyLink}</MenuItem>
          <MenuItem>{copy.email}</MenuItem>
        </MenuSub>
        <MenuSeparator />
        <MenuItem>{copy.delete}</MenuItem>
      </Menu>
    );
  },
};

export const Context: Story = {
  name: 'Menu contextuel',
  parameters: componentSource(
    importContext,
    `<>
    <Menu label="Actions du fichier" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
    </Menu>
    <ContextMenu
        label="Actions du fichier"
        trigger={
            <button type="button" className="rounded-md border border-border px-4 py-8">
                Fiche devoir
            </button>
        }
    >
        <MenuItem>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
    </ContextMenu>
</>`,
  ),
  render: (args, { globals }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col items-start gap-4">
        <Menu
          {...args}
          label={copy.fileLabel}
          trigger={<Button variant="secondary">{copy.actions}</Button>}
        >
          <MenuItem>{copy.open}</MenuItem>
          <MenuItem>{copy.download}</MenuItem>
          <MenuSeparator />
          <MenuItem>{copy.delete}</MenuItem>
        </Menu>
        <ContextMenu
          label={copy.fileLabel}
          trigger={
            <button
              type="button"
              className="rounded-md border border-border bg-bg px-4 py-8 text-start text-fg"
            >
              {copy.card}
            </button>
          }
        >
          <MenuItem>{copy.open}</MenuItem>
          <MenuItem>{copy.download}</MenuItem>
          <MenuSeparator />
          <MenuItem>{copy.delete}</MenuItem>
        </ContextMenu>
      </div>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importMenu,
    `<>
    <Menu size="sm" label="Actions du devoir" trigger={<Button size="sm" variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu size="md" label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>`,
  ),
  render: (args, { globals }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-center gap-4">
        <Menu
          {...args}
          size="sm"
          label={`${copy.label} (${copy.small})`}
          trigger={
            <Button size="sm" variant="secondary">
              {copy.actions}
            </Button>
          }
        >
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu
          {...args}
          size="md"
          label={`${copy.label} (${copy.medium})`}
          trigger={<Button variant="secondary">{copy.actions}</Button>}
        >
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu
          {...args}
          size="lg"
          label={`${copy.label} (${copy.large})`}
          trigger={
            <Button size="lg" variant="secondary">
              {copy.actions}
            </Button>
          }
        >
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    importMenu,
    `<Menu disabled label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
</Menu>`,
  ),
  render: (args, { globals }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return (
      <Menu
        {...args}
        disabled
        label={copy.label}
        trigger={<Button variant="secondary">{copy.actions}</Button>}
      >
        <MenuItem>{copy.rename}</MenuItem>
      </Menu>
    );
  },
};
