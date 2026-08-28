import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { paginationArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, paginationCopy } from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { Pagination } from './Pagination';

const importPagination =
  "import { useState } from 'react';\nimport { Pagination } from 'd-ui';";

function paginationSource(
  jsx: string,
  initial = '3',
): ReturnType<typeof componentSourceFn> {
  return componentSourceFn(
    importPagination,
    `const [page, setPage] = useState(${initial});
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
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    page: 3,
    pageCount: 8,
    onPageChange: () => undefined,
  },
  argTypes: paginationArgTypes,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

function LabeledPagination({
  copy,
  pageCount,
  initial = 3,
  size,
  disabled,
}: {
  copy: ReturnType<typeof paginationCopy>;
  pageCount: number;
  initial?: number;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}) {
  const [page, setPage] = useState(initial);
  return (
    <Pagination
      page={page}
      pageCount={pageCount}
      onPageChange={setPage}
      label={copy.label}
      previousLabel={copy.previous}
      nextLabel={copy.next}
      pageLabel={(next, current) => (current ? copy.pageCurrent(next) : copy.page(next))}
      size={size}
      disabled={disabled}
    />
  );
}

export const Default: Story = {
  name: 'Par défaut',
  parameters: paginationSource(`<Pagination
    page={page}
    pageCount={8}
    onPageChange={setPage}
    label="Pagination des devoirs"
    previousLabel="Page précédente"
    nextLabel="Page suivante"
/>`),
  render: (_, { globals }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    return <LabeledPagination copy={copy} pageCount={8} />;
  },
};

export const ManyPages: Story = {
  name: 'Beaucoup de pages',
  parameters: paginationSource(
    `<Pagination
    page={page}
    pageCount={24}
    onPageChange={setPage}
    label="Pagination des devoirs"
    previousLabel="Page précédente"
    nextLabel="Page suivante"
/>`,
    '12',
  ),
  render: (_, { globals }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    return <LabeledPagination copy={copy} pageCount={24} initial={12} />;
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  parameters: componentSource(
    "import { Pagination } from 'd-ui';",
    `<Pagination
    page={3}
    pageCount={8}
    disabled
    onPageChange={() => {}}
    label="Pagination des devoirs"
/>`,
  ),
  render: (_, { globals }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    return <LabeledPagination copy={copy} pageCount={8} disabled />;
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    "import { Pagination } from 'd-ui';",
    `<>
    <Pagination size="sm" page={2} pageCount={5} onPageChange={() => {}} />
    <Pagination size="md" page={2} pageCount={5} onPageChange={() => {}} />
    <Pagination size="lg" page={2} pageCount={5} onPageChange={() => {}} />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-4">
        <LabeledPagination copy={copy} pageCount={5} initial={2} size="sm" />
        <LabeledPagination copy={copy} pageCount={5} initial={2} size="md" />
        <LabeledPagination copy={copy} pageCount={5} initial={2} size="lg" />
      </div>
    );
  },
};
