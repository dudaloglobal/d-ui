import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { sidebarArgTypes } from '../../../.storybook/arg-types';
import {
  docsLocale,
  navbarCopy,
  sidebarCopy,
  skipLinkCopy,
} from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { SkipLink } from '../../a11y/SkipLink';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar, SidebarGroup, SidebarItem } from './Sidebar';

const importSidebar = "import { Icon, Sidebar, SidebarGroup, SidebarItem } from 'd-ui';";
const importOverlay = `import { useState } from 'react';
import { Icon, Navbar, Sidebar, SidebarItem, SkipLink } from 'd-ui';`;

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  argTypes: sidebarArgTypes,
  args: { children: <span /> },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importSidebar,
    `<Sidebar label="Navigation principale">
    <SidebarItem href="/accueil" current>
        Accueil
    </SidebarItem>
    <SidebarItem href="/cours">Cours</SidebarItem>
    <SidebarItem href="/devoirs">Devoirs</SidebarItem>
</Sidebar>`,
  ),
  render: (args, { globals }) => {
    const copy = sidebarCopy(docsLocale(globals.locale));
    return (
      <div className="h-72">
        <Sidebar {...args} label={copy.label}>
          <SidebarItem href="#accueil" current>
            {copy.home}
          </SidebarItem>
          <SidebarItem href="#cours">{copy.courses}</SidebarItem>
          <SidebarItem href="#devoirs">{copy.homework}</SidebarItem>
        </Sidebar>
      </div>
    );
  },
};

export const Icons: Story = {
  name: 'Avec icônes',
  parameters: componentSource(
    importSidebar,
    `<Sidebar label="Navigation principale">
    <SidebarItem href="/accueil" icon={<Icon as={HomeIcon} />} current>
        Accueil
    </SidebarItem>
    <SidebarItem href="/cours" icon={<Icon as={BookOpenIcon} />}>
        Cours
    </SidebarItem>
</Sidebar>`,
  ),
  render: (args, { globals }) => {
    const copy = sidebarCopy(docsLocale(globals.locale));
    return (
      <div className="h-72">
        <Sidebar {...args} label={copy.label}>
          <SidebarItem href="#accueil" icon={<Icon as={HomeIcon} />} current>
            {copy.home}
          </SidebarItem>
          <SidebarItem href="#cours" icon={<Icon as={BookOpenIcon} />}>
            {copy.courses}
          </SidebarItem>
          <SidebarItem href="#devoirs" icon={<Icon as={ClipboardDocumentListIcon} />}>
            {copy.homework}
          </SidebarItem>
        </Sidebar>
      </div>
    );
  },
};

export const Collapsed: Story = {
  name: 'Replié',
  parameters: componentSource(
    importSidebar,
    `<Sidebar label="Navigation principale" collapsed collapsible>
    <SidebarItem href="/accueil" icon={<Icon as={HomeIcon} />} current>
        Accueil
    </SidebarItem>
    <SidebarItem href="/cours" icon={<Icon as={BookOpenIcon} />}>
        Cours
    </SidebarItem>
</Sidebar>`,
  ),
  render: (args, { globals }) => {
    const copy = sidebarCopy(docsLocale(globals.locale));
    return (
      <div className="h-72">
        <Sidebar
          {...args}
          label={copy.label}
          defaultCollapsed
          collapsible
          collapseLabel={copy.collapse}
          expandLabel={copy.expand}
        >
          <SidebarItem href="#accueil" icon={<Icon as={HomeIcon} />} current>
            {copy.home}
          </SidebarItem>
          <SidebarItem href="#cours" icon={<Icon as={BookOpenIcon} />}>
            {copy.courses}
          </SidebarItem>
          <SidebarItem href="#devoirs" icon={<Icon as={ClipboardDocumentListIcon} />}>
            {copy.homework}
          </SidebarItem>
        </Sidebar>
      </div>
    );
  },
};

export const Nested: Story = {
  name: 'Imbriqués',
  parameters: componentSource(
    importSidebar,
    `<Sidebar label="Navigation principale">
    <SidebarItem href="/accueil" current>
        Accueil
    </SidebarItem>
    <SidebarGroup label="Cours" defaultOpen>
        <SidebarItem href="/maths">Maths</SidebarItem>
        <SidebarItem href="/histoire">Histoire</SidebarItem>
    </SidebarGroup>
</Sidebar>`,
  ),
  render: (args, { globals }) => {
    const copy = sidebarCopy(docsLocale(globals.locale));
    return (
      <div className="h-72">
        <Sidebar {...args} label={copy.label}>
          <SidebarItem href="#accueil" current>
            {copy.home}
          </SidebarItem>
          <SidebarGroup
            label={copy.courses}
            icon={<Icon as={AcademicCapIcon} />}
            defaultOpen
          >
            <SidebarItem href="#maths">{copy.maths}</SidebarItem>
            <SidebarItem href="#histoire">{copy.history}</SidebarItem>
          </SidebarGroup>
        </Sidebar>
      </div>
    );
  },
};

export const Overlay: Story = {
  name: 'Superposition',
  parameters: componentSourceFn(
    importOverlay,
    `const [open, setOpen] = useState(false);
return (
    <>
        <SkipLink>Aller au contenu principal</SkipLink>
        <Navbar
            brand={<a href="/">Dudalo</a>}
            menuLabel="Ouvrir la navigation"
            menuOpen={open}
            menuControls="nav-mobile"
            onMenuOpenChange={setOpen}
            user={<Button variant="secondary">Profil</Button>}
        />
        <Sidebar
            id="nav-mobile"
            label="Navigation principale"
            overlay
            open={open}
            onOpenChange={setOpen}
            closeLabel="Fermer la navigation"
        >
            <SidebarItem href="/accueil" current>
                Accueil
            </SidebarItem>
            <SidebarItem href="/cours">Cours</SidebarItem>
        </Sidebar>
        <main id="main" tabIndex={-1}>
            Contenu du cours
        </main>
    </>
);`,
  ),
  render: (args, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = sidebarCopy(locale);
    const nav = navbarCopy(locale);
    const skip = skipLinkCopy(locale);
    function Shell() {
      const [open, setOpen] = useState(false);
      return (
        <div className="overflow-hidden rounded-md border border-border">
          <SkipLink>{skip.label}</SkipLink>
          <Navbar
            brand={<a href="/">{nav.brand}</a>}
            menuLabel={copy.openNav}
            menuOpen={open}
            menuControls="nav-mobile"
            onMenuOpenChange={setOpen}
            user={<Button variant="secondary">{nav.profile}</Button>}
          />
          <Sidebar
            {...args}
            id="nav-mobile"
            label={copy.label}
            overlay
            open={open}
            onOpenChange={setOpen}
            closeLabel={copy.closeNav}
          >
            <SidebarItem href="#accueil" current>
              {copy.home}
            </SidebarItem>
            <SidebarItem href="#cours">{copy.courses}</SidebarItem>
            <SidebarItem href="#devoirs">{copy.homework}</SidebarItem>
          </Sidebar>
          <main id="main" tabIndex={-1} className="bg-bg p-4 text-fg">
            {copy.main}
          </main>
        </div>
      );
    }
    return <Shell />;
  },
};
