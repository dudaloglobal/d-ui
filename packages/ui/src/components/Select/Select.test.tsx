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

  it('does not open another Select when choosing an option', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Select label="Pays" options={options} />
        <Select label="Ville" options={options} />
      </div>,
    );
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    await user.click(screen.getByRole('option', { name: 'France' }));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Ville' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
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

  it('opens a borderless listbox in a fixed overlay', async () => {
    const user = userEvent.setup();
    render(<Select label="Pays" options={options} />);
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    const list = screen.getByRole('listbox', { name: 'Pays' });
    expect(list).toHaveClass('d-ui-listbox');
    expect(list.className.split(/\s+/)).not.toContain('border');
    expect(list.parentElement).toHaveStyle({ position: 'fixed' });
  });

  it('shows the selected option icon in the trigger', () => {
    render(
      <Select
        label="Pays"
        defaultValue="fr"
        options={[
          { value: 'fr', label: 'France', icon: <span data-testid="flag">⚑</span> },
        ]}
      />,
    );
    expect(
      within(screen.getByRole('combobox', { name: 'Pays' })).getByTestId('flag'),
    ).toBeInTheDocument();
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

  it('keeps a list open when another Combobox is in a separate canvas', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <div className="d-ui-docs">
          <Combobox label="Pays" options={options} />
        </div>
        <div className="d-ui-docs">
          <Combobox label="Ville" options={options} />
        </div>
      </div>,
    );
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    expect(screen.getByRole('listbox', { name: 'Pays' })).toBeVisible();
    await user.click(screen.getByRole('combobox', { name: 'Ville' }));
    expect(screen.getByRole('listbox', { name: 'Pays' })).toBeVisible();
    expect(screen.getByRole('listbox', { name: 'Ville' })).toBeVisible();
  });

  it('closes the open list when another Combobox on the same surface opens', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Combobox label="Pays" options={options} />
        <Combobox label="Ville" options={options} />
      </div>,
    );
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    await user.click(screen.getByRole('combobox', { name: 'Ville' }));
    expect(screen.queryByRole('listbox', { name: 'Pays' })).not.toBeInTheDocument();
    expect(screen.getByRole('listbox', { name: 'Ville' })).toBeVisible();
  });

  it('does not open another Combobox when choosing an option', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Combobox label="Pays" options={options} />
        <Combobox label="Ville" options={options} />
      </div>,
    );
    await user.click(screen.getByRole('combobox', { name: 'Pays' }));
    await user.click(screen.getByRole('option', { name: 'France' }));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Ville' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(screen.getByRole('combobox', { name: 'Pays' })).toHaveValue('France');
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

  it('toggles the list from the suggestions button', async () => {
    const user = userEvent.setup();
    render(<Combobox label="Ville" options={options} />);
    const toggle = screen.getByRole('button', { name: 'Afficher les suggestions' });
    expect(toggle).toHaveAttribute('tabindex', '-1');
    await user.click(toggle);
    expect(screen.getByRole('listbox', { name: 'Ville' })).toBeVisible();
    await user.click(toggle);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('clears the selected value', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <Combobox
        label="Ville"
        options={options}
        defaultValue="fr"
        onValueChange={onValueChange}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Effacer' }));
    expect(onValueChange).toHaveBeenCalledWith('');
    expect(screen.getByRole('combobox', { name: 'Ville' })).toHaveValue('');
  });

  it('toggles chips in multiple selection', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <Combobox
        multiple
        label="Villes"
        options={options}
        defaultValue={['fr']}
        chipGroupLabel="Villes"
        chipRemoveLabel="Retirer"
        onValueChange={onValueChange}
      />,
    );
    expect(screen.getByRole('list', { name: 'Villes' })).toHaveTextContent('France');
    const control = screen.getByRole('combobox', { name: 'Villes' });
    expect(control.parentElement).toContainElement(
      screen.getByRole('list', { name: 'Villes' }),
    );
    expect(control).toHaveValue('');
    await user.click(screen.getByRole('button', { name: 'Afficher les suggestions' }));
    await user.click(screen.getByRole('option', { name: 'Belgique' }));
    expect(onValueChange).toHaveBeenCalledWith(['fr', 'be']);
    expect(screen.getByRole('listbox')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'France — Retirer' }));
    expect(onValueChange).toHaveBeenLastCalledWith(['be']);
  });

  it('shows loading placeholders instead of options', async () => {
    const user = userEvent.setup();
    render(
      <Combobox
        label="Ville"
        options={options}
        listStatus="loading"
        loadingMessage="Chargement"
      />,
    );
    await user.click(screen.getByRole('combobox', { name: 'Ville' }));
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
    expect(screen.getByRole('listbox')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByText('Chargement')).toBeInTheDocument();
  });

  it('shows a list error instead of options', async () => {
    const user = userEvent.setup();
    render(
      <Combobox
        label="Ville"
        options={options}
        listStatus="error"
        listErrorMessage="Impossible de charger"
        listErrorRetryMessage="Réessayez."
      />,
    );
    await user.click(screen.getByRole('combobox', { name: 'Ville' }));
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('Impossible de charger');
    expect(alert).toHaveTextContent('Réessayez.');
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('appends a loading-more placeholder under options', async () => {
    const user = userEvent.setup();
    render(
      <Combobox
        label="Ville"
        options={options}
        listStatus="loadingMore"
        loadingMessage="Chargement de la suite"
      />,
    );
    await user.click(screen.getByRole('combobox', { name: 'Ville' }));
    expect(screen.getByRole('option', { name: 'France' })).toBeVisible();
    expect(screen.getByRole('listbox')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByText('Chargement de la suite')).toBeInTheDocument();
  });

  it('shows a query-aware empty message', async () => {
    const user = userEvent.setup();
    render(
      <Combobox
        label="Ville"
        options={options}
        emptyMessage={(query) =>
          query ? `Aucun résultat pour « ${query} »` : 'Aucune option'
        }
      />,
    );
    const control = screen.getByRole('combobox', { name: 'Ville' });
    await user.click(control);
    await user.keyboard('xyz');
    expect(screen.getByText('Aucun résultat pour « xyz »')).toBeVisible();
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('keeps all options visible with filter="manual"', async () => {
    const user = userEvent.setup();
    const onSearch = vi.fn();
    render(
      <Combobox label="Ville" options={options} filter="manual" onSearch={onSearch} />,
    );
    const control = screen.getByRole('combobox', { name: 'Ville' });
    await user.click(control);
    await user.keyboard('xyz');
    expect(onSearch).toHaveBeenCalledWith('xyz');
    expect(screen.getByRole('option', { name: 'France' })).toBeVisible();
  });

  it('blocks typing when filter is off', async () => {
    const user = userEvent.setup();
    render(<Combobox label="Ville" options={options} filter="off" />);
    const control = screen.getByRole('combobox', { name: 'Ville' });
    expect(control).toHaveAttribute('readonly');
    await user.click(control);
    expect(screen.getByRole('listbox')).toBeVisible();
    await user.keyboard('bel');
    expect(screen.getByRole('option', { name: 'France' })).toBeVisible();
  });

  it('renders option descriptions and beforeOptions', async () => {
    const user = userEvent.setup();
    const onCreate = vi.fn();
    render(
      <Combobox
        label="Ville"
        options={[{ value: 'fr', label: 'France', description: 'Capitale' }]}
        beforeOptions={
          <button type="button" onClick={onCreate}>
            Créer
          </button>
        }
      />,
    );
    await user.click(screen.getByRole('combobox', { name: 'Ville' }));
    expect(screen.getByRole('option', { name: /France/ })).toHaveTextContent('Capitale');
    await user.click(screen.getByRole('button', { name: 'Créer' }));
    expect(onCreate).toHaveBeenCalled();
  });

  it('shows option icons in the list and on selected chips', async () => {
    const user = userEvent.setup();
    render(
      <Combobox
        multiple
        label="Villes"
        chipGroupLabel="Villes"
        chipRemoveLabel="Retirer"
        defaultValue={['fr']}
        options={[
          { value: 'fr', label: 'France', icon: <span data-testid="flag">⚑</span> },
        ]}
      />,
    );
    expect(
      within(screen.getByRole('list', { name: 'Villes' })).getByTestId('flag'),
    ).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Afficher les suggestions' }));
    expect(
      within(screen.getByRole('option', { name: 'France' })).getByTestId('flag'),
    ).toBeInTheDocument();
  });
});
