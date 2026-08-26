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
    expect(button.querySelector('.d-ui-button-spinner')).not.toBeNull();
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('uses bounce dots when loadingIndicator is bounce', () => {
    render(
      <Button loading loadingIndicator="bounce">
        Enregistrer
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Enregistrer' });
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();
    const bounce = button.querySelector('.d-ui-button-bounce');
    expect(bounce).not.toBeNull();
    expect(bounce).toHaveAttribute('aria-hidden', 'true');
    expect(bounce?.children).toHaveLength(3);
    expect(button.querySelector('.d-ui-button-spinner')).toBeNull();
    expect(button).not.toHaveAttribute('loadingindicator');
  });

  it('does not show bounce unless loading is set', () => {
    render(<Button loadingIndicator="bounce">Enregistrer</Button>);
    expect(
      screen
        .getByRole('button', { name: 'Enregistrer' })
        .querySelector('.d-ui-button-bounce'),
    ).toBeNull();
  });

  it('replaces the icon with the loading indicator', () => {
    render(
      <Button loading icon={<PlusIcon />}>
        Ajouter
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Ajouter' });
    expect(button.querySelector('svg')).toBeNull();
    expect(button.querySelector('.d-ui-button-spinner')).not.toBeNull();
  });

  it('keeps the text name when an icon is present', () => {
    render(<Button icon={<PlusIcon />}>Ajouter</Button>);
    expect(screen.getByRole('button', { name: 'Ajouter' })).toBeInTheDocument();
  });

  it('exposes toggle state with aria-pressed', () => {
    const { rerender } = render(
      <Button variant="secondary" isSelected={false}>
        Subscribe
      </Button>,
    );
    expect(screen.getByRole('button', { name: 'Subscribe' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );

    rerender(
      <Button variant="secondary" isSelected>
        Subscribed
      </Button>,
    );
    expect(screen.getByRole('button', { name: 'Subscribed' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('stretches to the container when fullWidth is set', () => {
    render(<Button fullWidth>Continuer</Button>);
    expect(screen.getByRole('button', { name: 'Continuer' })).toHaveClass(
      'w-full',
      'min-w-0',
    );
  });
});

describe('IconButton', () => {
  it('requires an accessible name via aria-label', () => {
    render(<IconButton icon={<PlusIcon />} aria-label="Ajouter" />);
    expect(screen.getByRole('button', { name: 'Ajouter' })).toBeInTheDocument();
  });

  it('shows bounce loading while keeping the accessible name', () => {
    render(
      <IconButton
        loading
        loadingIndicator="bounce"
        icon={<PlusIcon />}
        aria-label="Ajouter"
      />,
    );
    const button = screen.getByRole('button', { name: 'Ajouter' });
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();
    expect(button.querySelector('.d-ui-button-bounce')?.children).toHaveLength(3);
    expect(button.querySelector('svg')).toBeNull();
  });
});
