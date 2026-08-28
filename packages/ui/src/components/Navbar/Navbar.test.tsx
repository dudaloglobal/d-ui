import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Navbar as NavbarFromEntry } from '../../index';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('is exported from the package entrypoint', () => {
    expect(NavbarFromEntry).toBe(Navbar);
  });

  it('renders brand, actions, and user slots in a banner', () => {
    render(
      <Navbar
        brand={<a href="/">Dudalo</a>}
        actions={<button type="button">Notifier</button>}
        user={<button type="button">Profil</button>}
      />,
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Dudalo' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Notifier' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Profil' })).toBeVisible();
  });

  it('does not show a menu button without onMenuOpenChange', () => {
    render(<Navbar brand="Dudalo" />);
    expect(
      screen.queryByRole('button', { name: 'Open navigation' }),
    ).not.toBeInTheDocument();
  });

  it('exposes a named menu button that controls the overlay', async () => {
    const user = userEvent.setup();
    const onMenuOpenChange = vi.fn();
    render(
      <Navbar
        brand="Dudalo"
        menuLabel="Ouvrir la navigation"
        menuOpen={false}
        menuControls="nav-principale"
        onMenuOpenChange={onMenuOpenChange}
      />,
    );
    const button = screen.getByRole('button', { name: 'Ouvrir la navigation' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'nav-principale');
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    await user.click(button);
    expect(onMenuOpenChange).toHaveBeenCalledWith(true);
  });

  it('toggles the menu from the keyboard', async () => {
    const user = userEvent.setup();
    const onMenuOpenChange = vi.fn();
    render(
      <Navbar
        brand="Dudalo"
        menuLabel="Ouvrir la navigation"
        menuOpen
        onMenuOpenChange={onMenuOpenChange}
      />,
    );
    const button = screen.getByRole('button', { name: 'Ouvrir la navigation' });
    expect(button).toHaveAttribute('aria-expanded', 'true');
    button.focus();
    await user.keyboard('{Enter}');
    expect(onMenuOpenChange).toHaveBeenCalledWith(false);
  });
});
