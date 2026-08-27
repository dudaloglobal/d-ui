import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { comboboxArgTypes } from '../../../.storybook/arg-types';
import {
  docsLocale,
  selectCopy,
  type SelectDocsCopy,
} from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { Combobox, type ComboboxProps } from './Combobox';
import type { SelectItem } from './Select';
import { flattenSelectItems } from './selectOptions';

const importCombobox = "import { Combobox } from 'd-ui';";
const importControlled =
  "import { useState } from 'react';\nimport { Combobox } from 'd-ui';";

function cities(copy: SelectDocsCopy, disabledLast = false): SelectItem[] {
  return [
    { value: 'paris', label: copy.paris },
    { value: 'lyon', label: copy.lyon },
    { value: 'marseille', label: copy.marseille },
    { value: 'bruxelles', label: copy.brussels, disabled: disabledLast },
  ];
}

function describedCities(copy: SelectDocsCopy): SelectItem[] {
  return [
    { value: 'paris', label: copy.paris, description: copy.capital },
    { value: 'lyon', label: copy.lyon, description: copy.gastronomy },
    { value: 'marseille', label: copy.marseille, description: copy.port },
    { value: 'bruxelles', label: copy.brussels, description: copy.capital },
  ];
}

function groupedCities(copy: SelectDocsCopy): SelectItem[] {
  return [
    {
      label: copy.france,
      options: [
        { value: 'paris', label: copy.paris },
        { value: 'lyon', label: copy.lyon },
      ],
    },
    {
      label: copy.belgium,
      options: [{ value: 'bruxelles', label: copy.brussels }],
    },
  ];
}

function groupedDescribedCities(copy: SelectDocsCopy): SelectItem[] {
  return [
    {
      label: copy.france,
      options: [
        { value: 'paris', label: copy.paris, description: copy.capital },
        { value: 'lyon', label: copy.lyon, description: copy.gastronomy },
        { value: 'marseille', label: copy.marseille, description: copy.port },
      ],
    },
    {
      label: copy.belgium,
      options: [{ value: 'bruxelles', label: copy.brussels, description: copy.capital }],
    },
  ];
}

function PlaceIcon({ name }: { name: string }) {
  const path =
    name === 'paris'
      ? 'M8 2l2 5h5l-4 3 1.5 5L8 12l-4.5 3L5 10 1 7h5L8 2z'
      : name === 'lyon'
        ? 'M8 2l6 12H2L8 2zm0 4.5L4.8 12h6.4L8 6.5z'
        : name === 'marseille'
          ? 'M2 11c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5M2 8c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5M2 5c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5'
          : name === 'bruxelles'
            ? 'M8 1.5l1.8 3.7 4.2.6-3 2.9.7 4.2L8 11.2 4.3 12.9l.7-4.2-3-2.9 4.2-.6L8 1.5z'
            : 'M8 3v10M3 8h10';
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="size-4"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="size-4"
    >
      <path
        d="M8 3v10M3 8h10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function listStateSource(jsx: string) {
  return {
    docs: {
      ...componentSource(importCombobox, jsx).docs,
      story: {
        inline: false,
        iframeHeight: 280,
      },
    },
  };
}

function ControlledCombobox({
  value: valueProp,
  defaultValue,
  onValueChange,
  multiple,
  ...props
}: ComboboxProps) {
  const [value, setValue] = useState(
    valueProp ?? defaultValue ?? (multiple ? [] : undefined),
  );
  return (
    <Combobox
      {...props}
      multiple={multiple}
      value={value}
      onValueChange={(next) => {
        setValue(next);
        onValueChange?.(next);
      }}
    />
  );
}

function fieldChrome(copy: SelectDocsCopy) {
  return {
    toggleLabel: copy.toggle,
    clearLabel: copy.clear,
    chipRemoveLabel: copy.remove,
    chipGroupLabel: copy.cities,
  };
}

function comboboxSource(jsx: string) {
  return componentSourceFn(
    importControlled,
    `const [value, setValue] = useState();
return (
${jsx
  .trim()
  .split('\n')
  .map((line) => `    ${line}`)
  .join('\n')}
);`,
  );
}

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  argTypes: comboboxArgTypes,
  parameters: {
    controls: {
      include: [
        'size',
        'label',
        'helper',
        'placeholder',
        'invalid',
        'valid',
        'disabled',
        'required',
        'fullWidth',
        'multiple',
        'filter',
        'listStatus',
      ],
    },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Sélection unique',
  args: { options: [] },
  parameters: comboboxSource(`<Combobox
    label="Ville"
    placeholder="Rechercher"
    options={[
        { value: 'paris', label: 'Paris' },
        { value: 'lyon', label: 'Lyon' },
        { value: 'marseille', label: 'Marseille' },
    ]}
    value={value}
    onValueChange={setValue}
/>`),
  render: (args, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <ControlledCombobox
        {...args}
        label={args.label ?? copy.city}
        placeholder={copy.search}
        {...fieldChrome(copy)}
        options={cities(copy)}
      />
    );
  },
};

export const Multiple: Story = {
  name: 'Sélection multiple',
  args: { options: [] },
  parameters: comboboxSource(`<Combobox
    multiple
    label="Villes"
    placeholder="Rechercher"
    options={options}
    value={value}
    onValueChange={setValue}
/>`),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <ControlledCombobox
        multiple
        label={copy.cities}
        placeholder={copy.search}
        defaultValue={['paris', 'lyon']}
        options={cities(copy)}
        {...fieldChrome(copy)}
      />
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<Combobox label="Ville" options={options} defaultValue="paris" disabled />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox
        label={copy.city}
        options={cities(copy)}
        defaultValue="paris"
        disabled
        {...fieldChrome(copy)}
      />
    );
  },
};

export const Invalid: Story = {
  name: 'Invalide',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<Combobox label="Ville" options={options} invalid error="Ce champ est requis." />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox
        label={copy.city}
        options={cities(copy)}
        invalid
        error={copy.error}
        {...fieldChrome(copy)}
      />
    );
  },
};

export const Required: Story = {
  name: 'Requis',
  args: { options: [] },
  parameters: comboboxSource(`<Combobox
    label="Ville"
    required
    options={options}
    value={value}
    onValueChange={setValue}
/>`),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <ControlledCombobox
        label={copy.city}
        options={cities(copy)}
        required
        placeholder={copy.search}
        {...fieldChrome(copy)}
      />
    );
  },
};

export const Helper: Story = {
  name: 'Aide',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<Combobox label="Ville" helper="Le pays de résidence." options={options} />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox
        label={copy.city}
        helper={copy.helper}
        options={cities(copy)}
        placeholder={copy.search}
        {...fieldChrome(copy)}
      />
    );
  },
};

export const Valid: Story = {
  name: 'Valide',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<Combobox label="Ville" options={options} defaultValue="paris" valid />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox
        label={copy.city}
        options={cities(copy)}
        defaultValue="paris"
        valid
        {...fieldChrome(copy)}
      />
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<>
    <Combobox size="sm" label="Petite" options={options} />
    <Combobox size="md" label="Moyenne" options={options} />
    <Combobox size="lg" label="Grande" options={options} />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    const options = cities(copy);
    return (
      <div className="flex w-full max-w-md flex-col gap-4">
        <Combobox size="sm" label={copy.small} options={options} {...fieldChrome(copy)} />
        <Combobox
          size="md"
          label={copy.medium}
          options={options}
          {...fieldChrome(copy)}
        />
        <Combobox size="lg" label={copy.large} options={options} {...fieldChrome(copy)} />
      </div>
    );
  },
};

export const Group: Story = {
  name: 'Groupe',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<Combobox
    label="Ville"
    options={[
        { label: 'France', options: [{ value: 'paris', label: 'Paris' }] },
        { label: 'Belgique', options: [{ value: 'bruxelles', label: 'Bruxelles' }] },
    ]}
/>`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox label={copy.city} options={groupedCities(copy)} {...fieldChrome(copy)} />
    );
  },
};

export const Descriptions: Story = {
  name: 'Descriptions',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<Combobox
    label="Ville"
    options={[
        { value: 'paris', label: 'Paris', description: 'Capitale' },
        { value: 'lyon', label: 'Lyon', description: 'Gastronomie' },
    ]}
/>`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox
        label={copy.city}
        options={describedCities(copy)}
        placeholder={copy.search}
        {...fieldChrome(copy)}
      />
    );
  },
};

function CustomRenderDemo({ copy }: { copy: SelectDocsCopy }) {
  const [value, setValue] = useState<string[]>(['lyon']);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState(groupedDescribedCities(copy));
  const needle = query.trim();
  const canCreate =
    needle.length > 0 &&
    !flattenSelectItems(items).some(
      (item) => String(item.label).toLowerCase() === needle.toLowerCase(),
    );
  const create = () => {
    const next = {
      value: needle.toLowerCase(),
      label: needle,
      description: copy.customCity,
    };
    setItems((current) => [...current, next]);
    setValue((current) => [...current, next.value]);
    setQuery('');
  };
  return (
    <Combobox
      multiple
      label={copy.cities}
      placeholder={copy.search}
      options={items}
      value={value}
      onValueChange={(next) => setValue(Array.isArray(next) ? next : [next])}
      onSearch={setQuery}
      filter="auto"
      {...fieldChrome(copy)}
      renderOption={(option) => (
        <span className="flex min-w-0 items-center gap-2">
          <PlaceIcon name={option.value} />
          <span className="min-w-0">
            <span className="block truncate font-medium">{option.label}</span>
            {option.description ? (
              <span className="mt-0.5 block truncate text-xs font-normal text-fg/60">
                {option.description}
              </span>
            ) : null}
          </span>
        </span>
      )}
      renderSectionTitle={(group) => (
        <span className="uppercase tracking-wide">{group.label}</span>
      )}
      renderChip={(option) => (
        <span className="inline-flex min-w-0 items-center gap-1.5">
          <PlaceIcon name={option.value} />
          <span className="truncate">{option.label}</span>
        </span>
      )}
      beforeOptions={
        canCreate ? (
          <button
            type="button"
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-fg hover:bg-surface-hover"
            onMouseDown={(event) => event.preventDefault()}
            onClick={create}
          >
            <PlusIcon />
            {copy.create} « {needle} »
          </button>
        ) : null
      }
    />
  );
}

export const Custom: Story = {
  name: 'Rendu personnalisé',
  args: { options: [] },
  parameters: comboboxSource(`<Combobox
    multiple
    label="Villes"
    options={options}
    renderOption={(option) => (
        <span>
            {option.icon}
            <strong>{option.label}</strong>
            <span>{option.description}</span>
        </span>
    )}
    renderChip={(option) => (
        <>
            {option.icon}
            {option.label}
        </>
    )}
    beforeOptions={canCreate ? <button type="button">Créer « {query} »</button> : null}
/>`),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <CustomRenderDemo copy={copy} />;
  },
};

export const Loading: Story = {
  name: 'Chargement',
  args: { options: [] },
  parameters: listStateSource(
    `<Combobox label="Ville" options={[]} listStatus="loading" defaultOpen />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox
        label={copy.city}
        options={[]}
        listStatus="loading"
        loadingMessage={copy.loading}
        defaultOpen
        {...fieldChrome(copy)}
      />
    );
  },
};

export const LoadingMore: Story = {
  name: 'Chargement de la suite',
  args: { options: [] },
  parameters: listStateSource(
    `<Combobox label="Ville" options={options} listStatus="loadingMore" defaultOpen />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox
        label={copy.city}
        options={cities(copy)}
        listStatus="loadingMore"
        loadingMessage={copy.loadingMore}
        defaultOpen
        {...fieldChrome(copy)}
      />
    );
  },
};

export const Empty: Story = {
  name: 'État vide',
  args: { options: [] },
  parameters: listStateSource(
    `<Combobox label="Ville" options={[]} emptyMessage={(query) => query ? \`Aucun résultat pour « \${query} »\` : 'Aucune option'} defaultOpen />`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox
        label={copy.city}
        options={[]}
        emptyMessage={(query) => (query ? `${copy.emptyQuery} « ${query} »` : copy.empty)}
        defaultOpen
        {...fieldChrome(copy)}
      />
    );
  },
};

export const ListError: Story = {
  name: 'Erreur de liste',
  args: { options: [] },
  parameters: listStateSource(`<Combobox
    label="Ville"
    options={[]}
    listStatus="error"
    listErrorMessage="Impossible de charger les options"
    listErrorRetryMessage="Réessayez."
    defaultOpen
/>`),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return (
      <Combobox
        label={copy.city}
        options={[]}
        listStatus="error"
        listErrorMessage={copy.listError}
        listErrorRetryMessage={copy.listRetry}
        defaultOpen
        {...fieldChrome(copy)}
      />
    );
  },
};

export const FilterTypes: Story = {
  name: 'Types de filtre',
  args: { options: [] },
  parameters: componentSource(
    importCombobox,
    `<>
    <Combobox filter="auto" label="Auto" options={options} />
    <Combobox filter="manual" label="Manuel" options={options} onSearch={onSearch} />
    <Combobox filter="off" label="Désactivé" options={options} />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    const options = cities(copy);
    return (
      <div className="flex w-full max-w-md flex-col gap-4">
        <Combobox
          filter="auto"
          label={copy.filterAuto}
          placeholder={copy.search}
          options={options}
          {...fieldChrome(copy)}
        />
        <Combobox
          filter="manual"
          label={copy.filterManual}
          placeholder={copy.search}
          options={options}
          {...fieldChrome(copy)}
        />
        <Combobox
          filter="off"
          label={copy.filterOff}
          placeholder={copy.choose}
          options={options}
          openOnFocus
          {...fieldChrome(copy)}
        />
      </div>
    );
  },
};
