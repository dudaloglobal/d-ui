import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { Popover as PopoverFromEntry } from '../../index';
import { Popover } from './Popover';

describe('Popover', () => {
  it('is exported from the package entrypoint', () => {
    expect(PopoverFromEntry).toBe(Popover);
  });

  it('opens on click and closes on Escape and outside press', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Popover content={<p>Options</p>} aria-label="Options">
          <button type="button">Ouvrir</button>
        </Popover>
        <button type="button">Dehors</button>
      </>,
    );
    const trigger = screen.getByRole('button', { name: 'Ouvrir' });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('region', { name: 'Options' })).toHaveTextContent('Options');
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('region', { name: 'Options' })).not.toBeInTheDocument();
    await user.click(trigger);
    await user.click(screen.getByRole('button', { name: 'Dehors' }));
    expect(screen.queryByRole('region', { name: 'Options' })).not.toBeInTheDocument();
  });

  it('traps focus when trapFocus is set', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Popover
          trapFocus
          aria-label="Actions"
          content={
            <>
              <button type="button">Un</button>
              <button type="button">Deux</button>
            </>
          }
        >
          <button type="button">Ouvrir</button>
        </Popover>
        <button type="button">Après</button>
      </>,
    );
    await user.click(screen.getByRole('button', { name: 'Ouvrir' }));
    const dialog = await screen.findByRole('dialog', { name: 'Actions' });
    expect(dialog).toBeVisible();
    await waitFor(() => {
      expect(dialog.contains(document.activeElement)).toBe(true);
    });
    await user.tab();
    expect(screen.getByText('Après')).not.toHaveFocus();
    expect(dialog.contains(document.activeElement)).toBe(true);
    expect(screen.queryByRole('button', { name: 'Après' })).not.toBeInTheDocument();
  });

  it('does not trap focus when the panel has no trapFocus', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Popover defaultOpen aria-label="Info" content={<p>Texte seul</p>}>
          <button type="button">Ouvrir</button>
        </Popover>
        <button type="button">Après</button>
      </>,
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    screen.getByRole('button', { name: 'Ouvrir' }).focus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'Après' })).toHaveFocus();
  });

  it('supports controlled open', async () => {
    const user = userEvent.setup();
    function Controlled() {
      const [open, setOpen] = useState(false);
      return (
        <Popover
          open={open}
          onOpenChange={setOpen}
          aria-label="Contrôlé"
          content={<p>Panneau</p>}
        >
          <button type="button">Ouvrir</button>
        </Popover>
      );
    }
    render(<Controlled />);
    await user.click(screen.getByRole('button', { name: 'Ouvrir' }));
    expect(screen.getByRole('region', { name: 'Contrôlé' })).toBeVisible();
  });

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    render(
      <Popover disabled content={<p>Caché</p>} aria-label="Caché">
        <button type="button">Ouvrir</button>
      </Popover>,
    );
    await user.click(screen.getByRole('button', { name: 'Ouvrir' }));
    expect(screen.queryByText('Caché')).not.toBeInTheDocument();
  });

  it('inherits dark theme on the portal', () => {
    render(
      <ThemeProvider mode="dark">
        <Popover defaultOpen content={<p>Sombre</p>} aria-label="Sombre">
          <button type="button">Ouvrir</button>
        </Popover>
      </ThemeProvider>,
    );
    const panel = screen.getByRole('region', { name: 'Sombre' });
    expect(panel).toHaveAttribute('data-d-ui-theme', 'dark');
    expect(panel).toHaveClass('d-ui-overlay');
  });

  it('calls onOpenChange when dismissed', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Popover defaultOpen onOpenChange={onOpenChange} content={<p>X</p>} aria-label="X">
        <button type="button">Ouvrir</button>
      </Popover>,
    );
    await user.keyboard('{Escape}');
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
