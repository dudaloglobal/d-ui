import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { Tooltip as TooltipFromEntry } from '../../index';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('is exported from the package entrypoint', () => {
    expect(TooltipFromEntry).toBe(Tooltip);
  });

  it('shows on hover and hides on Escape', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Enregistrer (⌘S)" delayMs={0}>
        <button type="button">Aide</button>
      </Tooltip>,
    );
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    await user.hover(screen.getByRole('button', { name: 'Aide' }));
    const tip = await screen.findByRole('tooltip');
    expect(tip).toHaveTextContent('Enregistrer (⌘S)');
    expect(tip).toHaveClass('pointer-events-none');
    expect(tip.querySelector('[data-d-ui-tooltip-arrow]')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Aide' })).toHaveAttribute(
      'aria-describedby',
      tip.id,
    );
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('shows on focus and hides on blur', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Tooltip content="Raccourci" delayMs={0}>
          <button type="button">Aide</button>
        </Tooltip>
        <button type="button">Après</button>
      </>,
    );
    await user.tab();
    expect(screen.getByRole('button', { name: 'Aide' })).toHaveFocus();
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Raccourci');
    await user.tab();
    expect(screen.getByRole('button', { name: 'Après' })).toHaveFocus();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Caché" delayMs={0} disabled>
        <button type="button">Aide</button>
      </Tooltip>,
    );
    await user.hover(screen.getByRole('button', { name: 'Aide' }));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('supports controlled open', async () => {
    const user = userEvent.setup();
    function Controlled() {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Tooltip content="Contrôlé" open={open} onOpenChange={setOpen} delayMs={0}>
            <button type="button">Aide</button>
          </Tooltip>
          <button type="button" onClick={() => setOpen(true)}>
            Forcer
          </button>
        </>
      );
    }
    render(<Controlled />);
    await user.click(screen.getByRole('button', { name: 'Forcer' }));
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Contrôlé');
  });

  it('calls onOpenChange and inherits dark theme on the portal', async () => {
    const onOpenChange = vi.fn();
    render(
      <ThemeProvider mode="dark">
        <Tooltip content="Sombre" defaultOpen onOpenChange={onOpenChange} delayMs={0}>
          <button type="button">Aide</button>
        </Tooltip>
      </ThemeProvider>,
    );
    const tip = await screen.findByRole('tooltip');
    expect(tip).toHaveAttribute('data-d-ui-theme', 'dark');
    expect(tip).toHaveClass('d-ui-overlay');
    expect(tip.parentElement).not.toBe(
      screen.getByRole('button', { name: 'Aide' }).parentElement,
    );
  });
});
