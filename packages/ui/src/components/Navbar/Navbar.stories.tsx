import type { Meta, StoryObj } from '@storybook/react-vite';
import { BellIcon } from '@heroicons/react/24/outline';
import { docsLocale, navbarCopy, sidebarCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { navbarArgTypes } from '../../../.storybook/arg-types';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';
import { Icon } from '../Icon/Icon';
import { Navbar } from './Navbar';

const importNavbar = "import { Button, Icon, IconButton, Navbar } from 'd-ui';";

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: navbarArgTypes,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importNavbar,
    `<Navbar
    brand={<a href="/">Dudalo</a>}
    actions={
        <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
    }
    user={<Button variant="secondary">Profil</Button>}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = navbarCopy(docsLocale(globals.locale));
    return (
      <Navbar
        {...args}
        brand={<a href="/">{copy.brand}</a>}
        actions={
          <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
        }
        user={<Button variant="secondary">{copy.profile}</Button>}
      />
    );
  },
};

export const MenuButton: Story = {
  name: 'Bouton menu',
  parameters: componentSource(
    importNavbar,
    `<Navbar
    brand={<a href="/">Dudalo</a>}
    menuLabel="Ouvrir la navigation"
    menuControls="nav-mobile"
    onMenuOpenChange={() => {}}
    user={<Button variant="secondary">Profil</Button>}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = navbarCopy(docsLocale(globals.locale));
    const side = sidebarCopy(docsLocale(globals.locale));
    return (
      <Navbar
        {...args}
        brand={<a href="/">{copy.brand}</a>}
        menuLabel={side.openNav}
        menuControls="nav-mobile"
        onMenuOpenChange={() => undefined}
        user={<Button variant="secondary">{copy.profile}</Button>}
      />
    );
  },
};

export const Fixed: Story = {
  name: 'Position fixe',
  args: { fixed: true },
  parameters: componentSource(
    importNavbar,
    `<Navbar
    fixed
    brand={<a href="/">Dudalo</a>}
    actions={
        <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
    }
    user={<Button variant="secondary">Profil</Button>}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = navbarCopy(docsLocale(globals.locale));
    return (
      <div className="relative h-72 overflow-auto rounded-md border border-border [transform:translateZ(0)]">
        <Navbar
          {...args}
          brand={<a href="/">{copy.brand}</a>}
          actions={
            <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
          }
          user={<Button variant="secondary">{copy.profile}</Button>}
        />
        <div className="space-y-3 p-4 pt-16 text-sm text-fg">
          <p>{copy.scrollHint}</p>
          <p>{copy.scrollBody}</p>
          <p>{copy.scrollBody}</p>
          <p>{copy.scrollBody}</p>
        </div>
      </div>
    );
  },
};

export const Transparent: Story = {
  name: 'Fond transparent',
  args: { transparent: true },
  parameters: componentSource(
    importNavbar,
    `<Navbar
    transparent
    brand={<a href="/">Dudalo</a>}
    actions={
        <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
    }
    user={<Button variant="secondary">Profil</Button>}
/>`,
  ),
  render: (args, { globals }) => {
    const copy = navbarCopy(docsLocale(globals.locale));
    return (
      <div
        className="overflow-hidden rounded-md"
        style={{
          background:
            'linear-gradient(160deg, var(--d-ui-color-surface-muted), color-mix(in srgb, var(--d-ui-color-brand) 28%, var(--d-ui-color-surface-muted)))',
        }}
      >
        <Navbar
          {...args}
          brand={<a href="/">{copy.brand}</a>}
          actions={
            <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
          }
          user={<Button variant="secondary">{copy.profile}</Button>}
        />
        <p className="px-4 pb-10 pt-2 text-sm text-fg">{copy.scrollHint}</p>
      </div>
    );
  },
};
