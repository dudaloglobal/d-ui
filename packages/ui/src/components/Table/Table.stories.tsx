import type { Meta, StoryObj } from '@storybook/react-vite';
import { tableArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, tableCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { EmptyState } from '../EmptyState/EmptyState';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableEmpty,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './Table';

const importTable = `import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`;
const importCaption = `import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`;
const importEmpty = `import {
    EmptyState,
    Table,
    TableBody,
    TableCell,
    TableEmpty,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`;
const importFooter = `import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`;

const meta = {
  title: 'Components/Table',
  component: Table,
  args: { children: <span /> },
  argTypes: tableArgTypes,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importTable,
    `<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead>Moyenne</TableHead>
            <TableHead>Statut</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell>18,5</TableCell>
            <TableCell>Admise</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
  ),
  render: (args, { globals }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return (
      <Table {...args} caption={copy.caption}>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead>{copy.average}</TableHead>
            <TableHead>{copy.status}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{copy.ada}</TableCell>
            <TableCell>{copy.averageAda}</TableCell>
            <TableCell>{copy.admitted}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{copy.grace}</TableCell>
            <TableCell>{copy.averageGrace}</TableCell>
            <TableCell>{copy.admitted}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{copy.katherine}</TableCell>
            <TableCell>{copy.averageKatherine}</TableCell>
            <TableCell>{copy.admitted}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

export const Numeric: Story = {
  name: 'Alignement numérique',
  parameters: componentSource(
    importTable,
    `<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
  ),
  render: (args, { globals }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return (
      <Table {...args} caption={copy.caption}>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead numeric>{copy.average}</TableHead>
            <TableHead numeric>{copy.hours}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{copy.ada}</TableCell>
            <TableCell numeric>{copy.averageAda}</TableCell>
            <TableCell numeric>{copy.hoursAda}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{copy.grace}</TableCell>
            <TableCell numeric>{copy.averageGrace}</TableCell>
            <TableCell numeric>{copy.hoursGrace}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

export const Align: Story = {
  name: 'Alignements',
  parameters: componentSource(
    importTable,
    `<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead align="center">Statut</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell align="center">Admise</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
  ),
  render: (args, { globals }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return (
      <Table {...args} caption={copy.caption}>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead align="center">{copy.status}</TableHead>
            <TableHead numeric>{copy.average}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{copy.ada}</TableCell>
            <TableCell align="center">{copy.admitted}</TableCell>
            <TableCell numeric>{copy.averageAda}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{copy.grace}</TableCell>
            <TableCell align="center">{copy.admitted}</TableCell>
            <TableCell numeric>{copy.averageGrace}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

export const Caption: Story = {
  name: 'Légende',
  parameters: componentSource(
    importCaption,
    `<Table>
    <TableCaption>Notes du trimestre</TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead>Statut</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell>Admise</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
  ),
  render: (args, { globals }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    const { caption: _caption, ...rest } = args;
    return (
      <Table {...rest}>
        <TableCaption>{copy.caption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead>{copy.status}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{copy.ada}</TableCell>
            <TableCell>{copy.admitted}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

export const Overflow: Story = {
  name: 'Débordement',
  parameters: componentSource(
    importTable,
    `<Table caption="Planning de la semaine" className="max-w-md">
    <TableHeader>
        <TableRow>
            <TableHead>Module</TableHead>
            <TableHead>Lundi</TableHead>
            <TableHead>Mardi</TableHead>
            <TableHead>Mercredi</TableHead>
            <TableHead>Jeudi</TableHead>
            <TableHead>Vendredi</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Algèbre linéaire — espaces vectoriels</TableCell>
            <TableCell>08:00</TableCell>
            <TableCell>10:00</TableCell>
            <TableCell>08:00</TableCell>
            <TableCell>14:00</TableCell>
            <TableCell>09:00</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
  ),
  render: (args, { globals }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return (
      <Table {...args} caption={copy.scheduleCaption} className="max-w-md">
        <TableHeader>
          <TableRow>
            <TableHead>{copy.module}</TableHead>
            <TableHead>{copy.monday}</TableHead>
            <TableHead>{copy.tuesday}</TableHead>
            <TableHead>{copy.wednesday}</TableHead>
            <TableHead>{copy.thursday}</TableHead>
            <TableHead>{copy.friday}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="whitespace-nowrap">{copy.longModule}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotMorning}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotLate}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotMorning}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotAfternoon}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotMid}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="whitespace-nowrap">{copy.longModuleTwo}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotAfternoon}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotMorning}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotLate}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotMorning}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotAfternoon}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

export const Empty: Story = {
  name: 'État vide',
  parameters: componentSource(
    importEmpty,
    `<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead>Moyenne</TableHead>
            <TableHead>Statut</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableEmpty colSpan={3}>
            <EmptyState
                title="Aucune note"
                description="Les notes apparaîtront après le premier devoir."
            />
        </TableEmpty>
    </TableBody>
</Table>`,
  ),
  render: (args, { globals }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return (
      <Table {...args} caption={copy.caption}>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead>{copy.average}</TableHead>
            <TableHead>{copy.status}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableEmpty colSpan={3}>
            <EmptyState title={copy.emptyTitle} description={copy.emptyDescription} />
          </TableEmpty>
        </TableBody>
      </Table>
    );
  },
};

export const StickyHeader: Story = {
  name: 'En-tête collant',
  parameters: componentSource(
    importTable,
    `<Table caption="Notes du trimestre" stickyHeader className="max-h-56">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
  ),
  render: (args, { globals }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    const rows = [
      copy.ada,
      copy.grace,
      copy.katherine,
      copy.annie,
      copy.hypatia,
      copy.emmy,
      copy.sofia,
      copy.maryam,
    ];
    return (
      <Table {...args} caption={copy.caption} stickyHeader className="max-h-56">
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead numeric>{copy.average}</TableHead>
            <TableHead>{copy.status}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((name, index) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell numeric>{copy.stickyAverages[index]}</TableCell>
              <TableCell>{copy.admitted}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const Footer: Story = {
  name: 'Pied de tableau',
  parameters: componentSource(
    importFooter,
    `<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
    <TableFooter>
        <TableRow>
            <TableCell>Moyenne de classe</TableCell>
            <TableCell numeric>17,2</TableCell>
        </TableRow>
    </TableFooter>
</Table>`,
  ),
  render: (args, { globals }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return (
      <Table {...args} caption={copy.caption}>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead numeric>{copy.average}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{copy.ada}</TableCell>
            <TableCell numeric>{copy.averageAda}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{copy.grace}</TableCell>
            <TableCell numeric>{copy.averageGrace}</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>{copy.classAverage}</TableCell>
            <TableCell numeric>{copy.classAverageValue}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

export const RowHeader: Story = {
  name: 'En-tête de ligne',
  parameters: componentSource(
    importTable,
    `<Table caption="Planning de la semaine">
    <TableBody>
        <TableRow>
            <TableHead>Lundi</TableHead>
            <TableCell>08:00</TableCell>
            <TableCell>Algèbre linéaire — espaces vectoriels</TableCell>
        </TableRow>
    </TableBody>
</Table>`,
  ),
  render: (args, { globals }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return (
      <Table {...args} caption={copy.scheduleCaption}>
        <TableBody>
          <TableRow>
            <TableHead>{copy.monday}</TableHead>
            <TableCell>{copy.slotMorning}</TableCell>
            <TableCell>{copy.longModule}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>{copy.tuesday}</TableHead>
            <TableCell>{copy.slotLate}</TableCell>
            <TableCell>{copy.longModuleTwo}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importTable,
    `<>
    <Table caption="Notes du trimestre" size="sm">
        <TableHeader>
            <TableRow>
                <TableHead>Élève</TableHead>
                <TableHead numeric>Moyenne</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>Ada Lovelace</TableCell>
                <TableCell numeric>18,5</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    <Table caption="Notes du trimestre" size="lg">
        <TableHeader>
            <TableRow>
                <TableHead>Élève</TableHead>
                <TableHead numeric>Moyenne</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>Ada Lovelace</TableCell>
                <TableCell numeric>18,5</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</>`,
  ),
  render: (args, { globals }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-8">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Table key={size} {...args} caption={copy.caption} size={size}>
            <TableHeader>
              <TableRow>
                <TableHead>{copy.student}</TableHead>
                <TableHead numeric>{copy.average}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{copy.ada}</TableCell>
                <TableCell numeric>{copy.averageAda}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ))}
      </div>
    );
  },
};
