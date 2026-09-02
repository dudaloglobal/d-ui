import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ComponentType } from 'react';
import { dataTableArgTypes } from '../../../.storybook/arg-types';
import {
  docsLocale,
  dataTableCopy,
  type DataTableDocsCopy,
} from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';
import { Menu, MenuItem, MenuSeparator } from '../Menu/Menu';
import { Tab, TabList, TabPanel, Tabs } from '../Tabs/Tabs';
import { TextInput } from '../TextInput/TextInput';
import {
  DataTable,
  type DataTableColumn,
  type DataTableLabels,
  type DataTableProps,
} from './DataTable';

const importTable = "import { DataTable } from 'd-ui';";

type Status = 'paid' | 'pending' | 'late' | 'draft';

type Order = {
  id: string;
  reference: string;
  client: string;
  amount: number;
  date: string;
  status: Status;
  closed?: boolean;
};

const ORDERS: Order[] = [
  {
    id: '1',
    reference: 'CMD-1042',
    client: 'Amina Doumbouya',
    amount: 1250,
    date: '2026-08-02',
    status: 'paid',
    closed: true,
  },
  {
    id: '2',
    reference: 'CMD-1043',
    client: 'Bruno Kessi',
    amount: 340,
    date: '2026-08-05',
    status: 'pending',
  },
  {
    id: '3',
    reference: 'CMD-1044',
    client: 'Chloé Adjovi',
    amount: 8900,
    date: '2026-08-09',
    status: 'late',
  },
  {
    id: '4',
    reference: 'CMD-1045',
    client: 'Élodie Sagbo',
    amount: 76,
    date: '2026-08-11',
    status: 'draft',
  },
  {
    id: '5',
    reference: 'CMD-1046',
    client: 'Farid Zinsou',
    amount: 2410,
    date: '2026-08-14',
    status: 'paid',
  },
  {
    id: '6',
    reference: 'CMD-1047',
    client: 'Grace Houngbo',
    amount: 530,
    date: '2026-08-18',
    status: 'pending',
  },
  {
    id: '7',
    reference: 'CMD-1048',
    client: 'Hervé Noukpo',
    amount: 15300,
    date: '2026-08-21',
    status: 'late',
  },
];

const tagVariant: Record<Status, 'success' | 'warning' | 'danger' | 'neutral'> = {
  paid: 'success',
  pending: 'warning',
  late: 'danger',
  draft: 'neutral',
};

function statusText(copy: DataTableDocsCopy, status: Status): string {
  return copy[status];
}

function money(value: number, locale: string): string {
  return new Intl.NumberFormat(locale === 'en' ? 'en-GB' : 'fr-FR', {
    style: 'currency',
    currency: 'XOF',
    maximumFractionDigits: 0,
  }).format(value);
}

function labels(copy: DataTableDocsCopy): DataTableLabels {
  return {
    selectAll: copy.selectAll,
    selectRow: copy.selectRow,
    sortBy: copy.sortBy,
    locked: copy.locked,
    results: copy.results,
    empty: copy.empty,
  };
}

function columns(copy: DataTableDocsCopy, locale: string): DataTableColumn<Order>[] {
  return [
    { id: 'reference', header: copy.reference, value: (row) => row.reference },
    { id: 'client', header: copy.client, value: (row) => row.client },
    {
      id: 'amount',
      header: copy.amount,
      align: 'end',
      // Trié sur le nombre, affiché formaté : trier sur « 1 250 F » serait faux.
      value: (row) => row.amount,
      cell: (row) => money(row.amount, locale),
    },
    {
      id: 'date',
      header: copy.date,
      value: (row) => new Date(row.date),
      cell: (row) => row.date,
    },
    {
      id: 'status',
      header: copy.status,
      // Cherché et trié sur le mot, pas sur le JSX du badge.
      value: (row) => statusText(copy, row.status),
      cell: (row) => (
        <Tag variant={tagVariant[row.status]}>{statusText(copy, row.status)}</Tag>
      ),
    },
  ];
}

/*
 * Le composant est générique ; `Meta<typeof DataTable>` effacerait `Row` en
 * `unknown`. On fige la ligne une fois ici, et toutes les stories en héritent.
 */
const meta = {
  title: 'Components/DataTable',
  component: DataTable as ComponentType<DataTableProps<Order>>,
  args: {
    columns: [],
    rows: [],
    rowId: (row: Order) => row.id,
    caption: 'Commandes',
  },
  argTypes: dataTableArgTypes,
  parameters: {
    controls: { include: ['selectable', 'pageSize', 'hideCaption'] },
  },
} satisfies Meta<DataTableProps<Order>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importTable,
    `<DataTable
    caption="Commandes du trimestre"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
/>`,
    `const columns = [
    { id: 'reference', header: 'Référence', value: (row) => row.reference },
    { id: 'amount', header: 'Montant', align: 'end', value: (row) => row.amount },
];`,
  ),
  render: (args, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return (
      <DataTable
        {...args}
        columns={columns(copy, locale)}
        rows={ORDERS}
        rowId={(row) => row.id}
        caption={copy.caption}
        labels={labels(copy)}
      />
    );
  },
};

export const Search: Story = {
  name: 'Recherche',
  parameters: componentSource(
    importTable,
    `<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    toolbar={({ search, setSearch }) => (
        <TextInput
            type="search"
            label="Rechercher une commande"
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
        />
    )}
/>`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return (
      <DataTable
        columns={columns(copy, locale)}
        rows={ORDERS}
        rowId={(row) => row.id}
        caption={copy.caption}
        labels={labels(copy)}
        toolbar={({ search, setSearch }) => (
          <TextInput
            type="search"
            label={copy.search}
            placeholder={copy.searchPlaceholder}
            value={search}
            fullWidth={false}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
        )}
      />
    );
  },
};

export const Filtering: Story = {
  name: 'Filtres',
  parameters: componentSource(
    importTable,
    `<DataTable
    caption="Commandes"
    columns={columns}
    rows={onlyLate ? orders.filter((o) => o.status === 'late') : orders}
    rowId={(row) => row.id}
    toolbar={<Button onClick={() => setOnlyLate(!onlyLate)}>En retard seulement</Button>}
/>`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <FilterDemo copy={copy} locale={locale} />;
  },
};

function FilterDemo({ copy, locale }: { copy: DataTableDocsCopy; locale: string }) {
  const [onlyLate, setOnlyLate] = useState(false);
  /*
   * Le filtre vit dans la page, pas dans la table : chaque produit a ses
   * critères, et une prop `filters` générique finirait en langage de requête.
   */
  const rows = onlyLate ? ORDERS.filter((order) => order.status === 'late') : ORDERS;

  return (
    <DataTable
      columns={columns(copy, locale)}
      rows={rows}
      rowId={(row) => row.id}
      caption={copy.caption}
      labels={labels(copy)}
      toolbar={
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            isSelected={!onlyLate}
            onClick={() => setOnlyLate(false)}
          >
            {copy.all}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            isSelected={onlyLate}
            onClick={() => setOnlyLate(true)}
          >
            {copy.onlyLate}
          </Button>
        </div>
      }
    />
  );
}

export const Sorting: Story = {
  name: 'Tri',
  parameters: componentSource(
    importTable,
    `<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    defaultSort={{ columnId: 'amount', direction: 'descending' }}
/>`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return (
      <DataTable
        columns={columns(copy, locale)}
        rows={ORDERS}
        rowId={(row) => row.id}
        caption={copy.caption}
        labels={labels(copy)}
        defaultSort={{ columnId: 'amount', direction: 'descending' }}
        locale={locale === 'en' ? 'en' : 'fr'}
      />
    );
  },
};

export const NonSortable: Story = {
  name: 'Colonne non triable',
  parameters: componentSource(
    importTable,
    `const columns = [
    ...,
    { id: 'actions', header: 'Actions', value: () => null, sortable: false },
];`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return (
      <DataTable
        columns={[
          ...columns(copy, locale),
          {
            id: 'actions',
            header: copy.actions,
            // Rien à trier : l'en-tête reste un `th`, sans bouton ni aria-sort.
            value: () => null,
            sortable: false,
            align: 'end',
            cell: (row) => (
              <Menu
                label={copy.rowActions}
                trigger={
                  <IconButton
                    variant="ghost"
                    size="sm"
                    aria-label={`${copy.rowActions} — ${row.reference}`}
                    icon={
                      <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                        <circle cx="8" cy="3" r="1.4" fill="currentColor" />
                        <circle cx="8" cy="8" r="1.4" fill="currentColor" />
                        <circle cx="8" cy="13" r="1.4" fill="currentColor" />
                      </svg>
                    }
                  />
                }
              >
                <MenuItem>{copy.edit}</MenuItem>
                <MenuItem>{copy.duplicate}</MenuItem>
                <MenuSeparator />
                <MenuItem>{copy.archive}</MenuItem>
              </Menu>
            ),
          },
        ]}
        rows={ORDERS.slice(0, 4)}
        rowId={(row) => row.id}
        caption={copy.caption}
        labels={labels(copy)}
      />
    );
  },
};

export const SelectingRows: Story = {
  name: 'Sélection de lignes',
  parameters: componentSource(
    importTable,
    `<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    rowLabel={(row) => row.reference}
/>`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return (
      <DataTable
        columns={columns(copy, locale)}
        rows={ORDERS.slice(0, 5)}
        rowId={(row) => row.id}
        caption={copy.caption}
        labels={labels(copy)}
        selectable
        rowLabel={(row) => `${row.reference} — ${row.client}`}
        defaultSelectedIds={['2']}
      />
    );
  },
};

export const LockedRows: Story = {
  name: 'Lignes verrouillées',
  parameters: componentSource(
    importTable,
    `<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    isRowLocked={(row) => row.closed === true}
/>`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return (
      <DataTable
        columns={columns(copy, locale)}
        rows={ORDERS.slice(0, 5)}
        rowId={(row) => row.id}
        caption={copy.caption}
        labels={labels(copy)}
        selectable
        rowLabel={(row) => `${row.reference} — ${row.client}`}
        isRowLocked={(row) => row.closed === true}
      />
    );
  },
};

export const Export: Story = {
  name: 'Export',
  parameters: componentSource(
    importTable,
    `<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    toolbar={({ rows, selectedIds }) => (
        // La table donne les lignes visibles ; le fichier est à vous.
        <Button onClick={() => downloadCsv(rows, selectedIds)}>Exporter</Button>
    )}
/>`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <ExportDemo copy={copy} locale={locale} />;
  },
};

function ExportDemo({ copy, locale }: { copy: DataTableDocsCopy; locale: string }) {
  const [message, setMessage] = useState('');
  return (
    <DataTable
      columns={columns(copy, locale)}
      rows={ORDERS.slice(0, 5)}
      rowId={(row) => row.id}
      caption={copy.caption}
      labels={labels(copy)}
      selectable
      rowLabel={(row) => row.reference}
      toolbar={({ rows, selectedIds }) => (
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              setMessage(
                copy.exported(selectedIds.length > 0 ? selectedIds.length : rows.length),
              )
            }
          >
            {copy.export}
          </Button>
          {/*
           * Pas de seconde région live : la table en a déjà une. Deux
           * régions polies dans un même composant s'annoncent en désordre.
           */}
          <p className="text-fg-muted m-0 text-sm">{message}</p>
        </div>
      )}
    />
  );
}

export const TablePagination: Story = {
  name: 'Pagination',
  parameters: componentSource(
    importTable,
    `<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    pageSize={3}
/>`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return (
      <DataTable
        columns={columns(copy, locale)}
        rows={ORDERS}
        rowId={(row) => row.id}
        caption={copy.caption}
        labels={labels(copy)}
        pageSize={3}
      />
    );
  },
};

export const WithTabs: Story = {
  name: 'Avec onglets',
  parameters: componentSource(
    "import { DataTable, Tab, TabList, TabPanel, Tabs } from 'd-ui';",
    `<Tabs defaultValue="all">
    <TabList>
        <Tab value="all">Toutes</Tab>
        <Tab value="late">En retard</Tab>
    </TabList>
    <TabPanel value="all"><DataTable rows={orders} … /></TabPanel>
    <TabPanel value="late"><DataTable rows={late} … /></TabPanel>
</Tabs>`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    const groups = [
      { value: 'all', label: copy.tabAll, rows: ORDERS },
      {
        value: 'late',
        label: copy.tabLate,
        rows: ORDERS.filter((o) => o.status === 'late'),
      },
      {
        value: 'paid',
        label: copy.tabPaid,
        rows: ORDERS.filter((o) => o.status === 'paid'),
      },
    ];

    return (
      <Tabs defaultValue="all" label={copy.caption}>
        <TabList>
          {groups.map((group) => (
            <Tab key={group.value} value={group.value}>
              {group.label}
            </Tab>
          ))}
        </TabList>
        {groups.map((group) => (
          <TabPanel key={group.value} value={group.value}>
            <DataTable
              className="mt-4"
              columns={columns(copy, locale)}
              rows={group.rows}
              rowId={(row) => row.id}
              caption={`${copy.caption} — ${group.label}`}
              hideCaption
              labels={labels(copy)}
            />
          </TabPanel>
        ))}
      </Tabs>
    );
  },
};

export const EmptyResults: Story = {
  name: 'État vide',
  parameters: componentSource(
    importTable,
    `<DataTable caption="Commandes" columns={columns} rows={[]} rowId={(row) => row.id} />`,
  ),
  render: (_, { globals }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return (
      <DataTable
        columns={columns(copy, locale)}
        rows={[]}
        rowId={(row) => row.id}
        caption={copy.caption}
        labels={labels(copy)}
      />
    );
  },
};
