import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';
import { IconButton } from './IconButton';

function PlusIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

describe('Button', () => {
  it('renders a native button with an accessible name', () => {
    render(<Button>Enregistrer</Button>);
    expect(screen.getByRole('button', { name: 'Enregistrer' })).toBeEnabled();
  });

  it('does not fire click when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Envoyer
      </Button>,
    );
    await user.click(screen.getByRole('button', { name: 'Envoyer' }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('defaults to type="button" to avoid accidental form submit', () => {
    render(<Button>OK</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('keeps the accessible name and blocks click while loading', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button loading onClick={onClick}>
        Enregistrer
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Enregistrer' });
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('keeps the text name when an icon is present', () => {
    render(<Button icon={<PlusIcon />}>Ajouter</Button>);
    expect(screen.getByRole('button', { name: 'Ajouter' })).toBeInTheDocument();
  });
});

describe('IconButton', () => {
  it('requires an accessible name via aria-label', () => {
    render(<IconButton icon={<PlusIcon />} aria-label="Ajouter" />);
    expect(screen.getByRole('button', { name: 'Ajouter' })).toBeInTheDocument();
  });
});
