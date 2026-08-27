import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { Combobox as ComboboxFromEntry, Select as SelectFromEntry } from '../../index';
import { Combobox } from './Combobox';
import { Select } from './Select';
import type { SelectItem } from './selectOptions';

const options: SelectItem[] = [
  { value: 'fr', label: 'France' },
  { value: 'be', label: 'Belgique' },
  { value: 'ca', label: 'Canada' },
  { value: 'ch', label: 'Suisse', disabled: true },
];

const grouped: SelectItem[] = [
  {
    label: 'Europe',
    options: [
      { value: 'fr', label: 'France' },
      { value: 'be', label: 'Belgique' },
    ],
  },
  {
    label: 'Amériques',
    options: [{ value: 'ca', label: 'Canada' }],
  },
];

describe('Select', () => {
  it('is exported from the package entrypoint', () => {
    expect(SelectFromEntry).toBe(Select);
  });

  it('is full width by default', () => {
    const { container } = render(<Select label="Pays" options={options} />);
    expect(container.firstElementChild).toHaveClass('w-full');
  });

  it('names the combobox from the built-in label', () => {
    render(<Select label="Pays" options={options} />);
    expect(screen.getByRole('combobox', { name: 'Pays' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('opens the labelled listbox and selects an option', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Select label="Pays" options={options} onValueChange={onValueChange} />);
    const control = screen.getByRole('combobox', { name: 'Pays' });
    await user.click(control);
    expect(control).toHaveAttribute('aria-expanded', 'true');
    const list = screen.getByRole('listbox', { name: 'Pays' });
    await user.click(within(list).getByRole('option', { name: 'Belgique' }));
    expect(onValueChange).toHaveBeenCalledWith('be');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(control).toHaveTextContent('Belgique');
  });

  it('moves with arrows, skips disabled options, and commits with Enter', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <Select
        label="Pays"
        options={options}
        defaultValue="fr"
        onValueChange={onValueChange}
      />,
    );
    const control = screen.getByRole('combobox', { name: 'Pays' });
    control.focus();
    await user.keyboard('{ArrowDown}');
    const list = screen.getByRole('listbox');
    expect(within(list).getByRole('option', { name: 'Suisse' })).toHaveAttribute(
      'aria-disabled',
      'true',
    );
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');
    expect(onValueChange).toHaveBeenCalledWith('be');
  });

  it('typeahead highlights a matching option', async () => {
    const user = userEvent.setup();
    render(<Select label="Pays" options={options} />);
    const control = screen.getByRole('combobox', { name: 'Pays' });
    control.focus();
    await user.keyboard('c');
    const canada = screen.getByRole('option', { name: 'Canada' });
    expect(control).toHaveAttribute('aria-activedescendant', canada.id);
  });

  it('closes on Escape and outside click', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Select label="Pays" options={options} />
        <button type="button">Dehors</button>
      </>,
    );
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    expect(screen.getByRole('listbox')).toBeVisible();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    await user.click(screen.getByRole('button', { name: 'Dehors' }));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('renders option groups', async () => {
    const user = userEvent.setup();
    render(<Select label="Pays" options={grouped} />);
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    expect(screen.getByRole('group', { name: 'Europe' })).toBeVisible();
    expect(screen.getByRole('group', { name: 'Amériques' })).toBeVisible();
  });

  it('shows an empty state when there are no options', async () => {
    const user = userEvent.setup();
    render(<Select label="Pays" options={[]} emptyMessage="Aucune option" />);
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    expect(screen.getByRole('listbox')).toHaveTextContent('Aucune option');
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('mirrors the value on a native select for name/form', async () => {
    const user = userEvent.setup();
    render(<Select label="Pays" options={options} name="country" form="profile" />);
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    await user.click(screen.getByRole('option', { name: 'France' }));
    const native = document.querySelector('select[name="country"]');
    expect(native).toHaveAttribute('form', 'profile');
    expect(native).toHaveValue('fr');
    expect(native).toHaveAttribute('aria-hidden', 'true');
  });

  it('marks the control invalid without relying on colour alone', () => {
    render(<Select label="Pays" options={options} invalid error="Requis" />);
    const control = screen.getByRole('combobox', { name: 'Pays' });
    expect(control).toHaveAttribute('aria-invalid', 'true');
    expect(control).toHaveAccessibleDescription('Requis');
  });

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    render(<Select label="Pays" options={options} disabled />);
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('inherits dark theme on the portal', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider mode="dark">
        <Select label="Pays" options={options} />
      </ThemeProvider>,
    );
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    const overlay = screen.getByRole('listbox').parentElement;
    expect(overlay).toHaveAttribute('data-d-ui-theme', 'dark');
    expect(overlay).toHaveClass('d-ui-overlay');
  });
});

describe('Combobox', () => {
  it('is exported from the package entrypoint', () => {
    expect(ComboboxFromEntry).toBe(Combobox);
  });

  it('filters options as the user types and selects with Enter', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Combobox label="Ville" options={options} onValueChange={onValueChange} />);
    const control = screen.getByRole('combobox', { name: 'Ville' });
    await user.click(control);
    await user.keyboard('bel');
    const list = screen.getByRole('listbox', { name: 'Ville' });
    expect(within(list).getByRole('option', { name: 'Belgique' })).toBeVisible();
    expect(
      within(list).queryByRole('option', { name: 'France' }),
    ).not.toBeInTheDocument();
    await user.keyboard('{Enter}');
    expect(onValueChange).toHaveBeenCalledWith('be');
    expect(control).toHaveValue('Belgique');
  });

  it('shows the empty message when the query matches nothing', async () => {
    const user = userEvent.setup();
    render(<Combobox label="Ville" options={options} emptyMessage="Aucun résultat" />);
    await user.click(screen.getByRole('combobox', { name: 'Ville' }));
    await user.keyboard('xyz');
    expect(screen.getByRole('listbox')).toHaveTextContent('Aucun résultat');
  });

  it('reverts the query on Escape', async () => {
    const user = userEvent.setup();
    render(<Combobox label="Ville" options={options} defaultValue="fr" />);
    const control = screen.getByRole('combobox', { name: 'Ville' });
    expect(control).toHaveValue('France');
    await user.click(control);
    await user.clear(control);
    await user.keyboard('can');
    expect(control).toHaveValue('can');
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(control).toHaveValue('France');
  });
});
