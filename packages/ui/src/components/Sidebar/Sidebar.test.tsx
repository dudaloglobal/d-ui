import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SkipLink } from '../../a11y/SkipLink';
import {
  Sidebar as SidebarFromEntry,
  SidebarGroup as SidebarGroupFromEntry,
  SidebarItem as SidebarItemFromEntry,
} from '../../index';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar, SidebarGroup, SidebarItem } from './Sidebar';

describe('Sidebar', () => {
  it('is exported from the package entrypoint', () => {
    expect(SidebarFromEntry).toBe(Sidebar);
    expect(SidebarItemFromEntry).toBe(SidebarItem);
    expect(SidebarGroupFromEntry).toBe(SidebarGroup);
  });

  it('renders a named navigation list of links', () => {
    render(
      <Sidebar label="Navigation principale">
        <SidebarItem href="/cours" current>
          Cours
        </SidebarItem>
        <SidebarItem href="/devoirs">Devoirs</SidebarItem>
      </Sidebar>,
    );
    expect(
      screen.getByRole('navigation', { name: 'Navigation principale' }),
    ).toBeVisible();
    const current = screen.getByRole('link', { name: 'Cours' });
    expect(current).toHaveAttribute('aria-current', 'page');
    expect(current).toHaveAttribute('href', '/cours');
    expect(screen.getByRole('link', { name: 'Devoirs' })).toHaveAttribute(
      'href',
      '/devoirs',
    );
  });

  it('keeps accessible names on collapsed icon-only items', () => {
    render(
      <Sidebar label="Navigation" collapsed>
        <SidebarItem href="/cours" icon={<span data-testid="icon-cours" />}>
          Cours
        </SidebarItem>
      </Sidebar>,
    );
    expect(screen.getByRole('link', { name: 'Cours' })).toBeVisible();
    expect(screen.getByTestId('icon-cours')).toBeInTheDocument();
  });

  it('shows a tooltip with the item name when collapsed', async () => {
    const user = userEvent.setup();
    render(
      <Sidebar label="Navigation" collapsed>
        <SidebarItem href="/cours" icon={<span data-testid="icon-cours" />}>
          Cours
        </SidebarItem>
      </Sidebar>,
    );
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    await user.hover(screen.getByRole('link', { name: 'Cours' }));
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Cours');
  });

  it('shows a tooltip with the group name when collapsed', async () => {
    const user = userEvent.setup();
    render(
      <Sidebar label="Navigation" collapsed>
        <SidebarGroup label="Cours" icon={<span data-testid="icon-group" />}>
          <SidebarItem href="/maths">Maths</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    await user.hover(screen.getByRole('button', { name: 'Cours' }));
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Cours');
  });

  it('toggles collapsed when collapsible', async () => {
    const user = userEvent.setup();
    const onCollapsedChange = vi.fn();
    render(
      <Sidebar
        label="Navigation"
        collapsible
        collapsed={false}
        collapseLabel="Replier le menu"
        onCollapsedChange={onCollapsedChange}
      >
        <SidebarItem href="/cours">Cours</SidebarItem>
      </Sidebar>,
    );
    await user.click(screen.getByRole('button', { name: 'Replier le menu' }));
    expect(onCollapsedChange).toHaveBeenCalledWith(true);
  });

  it('expands a nested group with a disclosure', async () => {
    const user = userEvent.setup();
    render(
      <Sidebar label="Navigation">
        <SidebarGroup label="Cours">
          <SidebarItem href="/maths">Maths</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    const group = screen.getByRole('button', { name: 'Cours' });
    expect(group).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('link', { name: 'Maths' })).not.toBeInTheDocument();
    await user.click(group);
    expect(group).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('link', { name: 'Maths' })).toBeVisible();
  });

  it('opens as a dialog overlay, closes on Escape, and returns focus', async () => {
    const user = userEvent.setup();
    function Shell() {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Navbar
            brand="Dudalo"
            menuLabel="Ouvrir la navigation"
            menuOpen={open}
            menuControls="nav-mobile"
            onMenuOpenChange={setOpen}
          />
          <Sidebar
            id="nav-mobile"
            label="Navigation principale"
            overlay
            open={open}
            onOpenChange={setOpen}
            closeLabel="Fermer la navigation"
          >
            <SidebarItem href="/cours">Cours</SidebarItem>
          </Sidebar>
        </>
      );
    }
    render(<Shell />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Ouvrir la navigation' }));
    const dialog = screen.getByRole('dialog', { name: 'Navigation principale' });
    expect(dialog).toBeVisible();
    expect(screen.getByRole('link', { name: 'Cours' })).toBeVisible();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ouvrir la navigation' })).toHaveFocus();
  });

  it('closes the overlay from the close button and the backdrop', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <Sidebar
        label="Navigation"
        overlay
        open
        onOpenChange={onOpenChange}
        closeLabel="Fermer la navigation"
      >
        <SidebarItem href="/cours">Cours</SidebarItem>
      </Sidebar>,
    );
    await user.click(screen.getByRole('button', { name: 'Fermer la navigation' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    onOpenChange.mockClear();
    rerender(
      <Sidebar
        label="Navigation"
        overlay
        open
        onOpenChange={onOpenChange}
        closeLabel="Fermer la navigation"
      >
        <SidebarItem href="/cours">Cours</SidebarItem>
      </Sidebar>,
    );
    fireEvent.click(screen.getByTestId('sidebar-backdrop'));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('lets SkipLink move focus to main beside the shell', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <SkipLink>Aller au contenu principal</SkipLink>
        <Navbar brand="Dudalo" />
        <Sidebar label="Navigation">
          <SidebarItem href="/cours">Cours</SidebarItem>
        </Sidebar>
        <main id="main" tabIndex={-1}>
          Contenu
        </main>
      </div>,
    );
    await user.click(screen.getByRole('link', { name: 'Aller au contenu principal' }));
    expect(document.getElementById('main')).toHaveFocus();
  });
});
