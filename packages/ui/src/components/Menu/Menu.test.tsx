import { createRef } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  ContextMenu as ContextMenuFromEntry,
  Menu as MenuFromEntry,
  MenuItem as MenuItemFromEntry,
  MenuSeparator as MenuSeparatorFromEntry,
  MenuSub as MenuSubFromEntry,
} from '../../index';
import { ContextMenu, Menu, MenuItem, MenuSeparator, MenuSub } from './Menu';

describe('Menu', () => {
  it('is exported from the package entrypoint', () => {
    expect(MenuFromEntry).toBe(Menu);
    expect(MenuItemFromEntry).toBe(MenuItem);
    expect(MenuSeparatorFromEntry).toBe(MenuSeparator);
    expect(MenuSubFromEntry).toBe(MenuSub);
    expect(ContextMenuFromEntry).toBe(ContextMenu);
  });

  it('opens from the trigger and follows the WAI-ARIA menu pattern', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <Menu label="Actions du devoir" trigger={<button type="button">Actions</button>}>
        <MenuItem onSelect={onSelect}>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
      </Menu>,
    );
    const trigger = screen.getByRole('button', { name: 'Actions' });
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    const menu = screen.getByRole('menu', { name: 'Actions du devoir' });
    expect(menu).toBeVisible();
    expect(screen.getByRole('menuitem', { name: 'Renommer' })).toBeVisible();
    await user.click(screen.getByRole('menuitem', { name: 'Renommer' }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('moves between items with arrows, Home, and End', async () => {
    const user = userEvent.setup();
    render(
      <Menu label="Actions" defaultOpen trigger={<button type="button">Actions</button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
        <MenuItem>Supprimer</MenuItem>
      </Menu>,
    );
    await waitFor(() => {
      expect(screen.getByRole('menu', { name: 'Actions' })).toBeVisible();
    });
    await waitFor(() => {
      expect(screen.getByRole('menuitem', { name: 'Renommer' })).toHaveFocus();
    });
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('menuitem', { name: 'Dupliquer' })).toHaveFocus();
    await user.keyboard('{End}');
    expect(screen.getByRole('menuitem', { name: 'Supprimer' })).toHaveFocus();
    await user.keyboard('{Home}');
    expect(screen.getByRole('menuitem', { name: 'Renommer' })).toHaveFocus();
  });

  it('closes on Escape and restores focus to the trigger', async () => {
    const user = userEvent.setup();
    render(
      <Menu label="Actions" trigger={<button type="button">Actions</button>}>
        <MenuItem>Renommer</MenuItem>
      </Menu>,
    );
    const trigger = screen.getByRole('button', { name: 'Actions' });
    await user.click(trigger);
    expect(screen.getByRole('menu')).toBeVisible();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('skips a disabled item and does not call onSelect', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <Menu label="Actions" defaultOpen trigger={<button type="button">Actions</button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem disabled onSelect={onSelect}>
          Archiver
        </MenuItem>
        <MenuItem>Supprimer</MenuItem>
      </Menu>,
    );
    await waitFor(() => {
      expect(screen.getByRole('menuitem', { name: 'Renommer' })).toHaveFocus();
    });
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('menuitem', { name: 'Supprimer' })).toHaveFocus();
    await user.click(screen.getByRole('menuitem', { name: 'Archiver' }));
    expect(onSelect).not.toHaveBeenCalled();
    expect(screen.getByRole('menu')).toBeVisible();
  });

  it('matches items by typeahead', async () => {
    const user = userEvent.setup();
    render(
      <Menu label="Actions" defaultOpen trigger={<button type="button">Actions</button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
        <MenuItem>Supprimer</MenuItem>
      </Menu>,
    );
    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
    await waitFor(() => {
      expect(screen.getByRole('menuitem', { name: 'Renommer' })).toHaveFocus();
    });
    await user.keyboard('d');
    expect(screen.getByRole('menuitem', { name: 'Dupliquer' })).toHaveFocus();
  });

  it('opens a nested submenu with ArrowRight and closes it with ArrowLeft', async () => {
    const user = userEvent.setup();
    render(
      <Menu label="Actions" defaultOpen trigger={<button type="button">Actions</button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuSub label="Partager">
          <MenuItem>Copier le lien</MenuItem>
          <MenuItem>E-mail</MenuItem>
        </MenuSub>
      </Menu>,
    );
    await waitFor(() => {
      expect(screen.getByRole('menuitem', { name: 'Renommer' })).toHaveFocus();
    });
    await user.keyboard('{End}');
    expect(screen.getByRole('menuitem', { name: 'Partager' })).toHaveFocus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('menu', { name: 'Partager' })).toBeVisible();
    expect(screen.getByRole('menuitem', { name: 'Copier le lien' })).toBeVisible();
    await waitFor(() => {
      expect(screen.getByRole('menuitem', { name: 'Copier le lien' })).toHaveFocus();
    });
    await user.keyboard('{ArrowLeft}');
    await waitFor(() => {
      expect(screen.queryByRole('menu', { name: 'Partager' })).not.toBeInTheDocument();
    });
    expect(screen.getByRole('menuitem', { name: 'Partager' })).toHaveFocus();
  });

  it('renders a separator between items', () => {
    render(
      <Menu label="Actions" defaultOpen trigger={<button type="button">Actions</button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
      </Menu>,
    );
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('does not open when the menu is disabled', async () => {
    const user = userEvent.setup();
    render(
      <Menu disabled label="Actions" trigger={<button type="button">Actions</button>}>
        <MenuItem>Renommer</MenuItem>
      </Menu>,
    );
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});

describe('ContextMenu', () => {
  it('opens on the context menu event', async () => {
    const onSelect = vi.fn();
    render(
      <ContextMenu
        label="Actions du fichier"
        trigger={
          <button type="button" aria-label="Fiche devoir">
            Fiche
          </button>
        }
      >
        <MenuItem onSelect={onSelect}>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByRole('button', { name: 'Fiche devoir' }));
    expect(screen.getByRole('menu', { name: 'Actions du fichier' })).toBeVisible();
    fireEvent.click(screen.getByRole('menuitem', { name: 'Ouvrir' }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('opens with Shift+F10 as the keyboard alternative', async () => {
    const user = userEvent.setup();
    render(
      <ContextMenu
        label="Actions du fichier"
        trigger={
          <button type="button" aria-label="Fiche devoir">
            Fiche
          </button>
        }
      >
        <MenuItem>Ouvrir</MenuItem>
      </ContextMenu>,
    );
    screen.getByRole('button', { name: 'Fiche devoir' }).focus();
    await user.keyboard('{Shift>}{F10}{/Shift}');
    expect(screen.getByRole('menu', { name: 'Actions du fichier' })).toBeVisible();
  });

  it('forwards a ref on MenuItem', () => {
    const ref = createRef<HTMLButtonElement>();
    render(
      <Menu label="Actions" defaultOpen trigger={<button type="button">Actions</button>}>
        <MenuItem ref={ref}>Renommer</MenuItem>
      </Menu>,
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveAttribute('role', 'menuitem');
  });
});
