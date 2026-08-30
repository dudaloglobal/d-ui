import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { popoverArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, overlayCopy } from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { Button } from '../Button/Button';
import { Popover } from './Popover';

const importPopover = "import { Button, Popover } from 'd-ui';";
const importControlled =
  "import { useState } from 'react';\nimport { Button, Popover } from 'd-ui';";

const meta = {
  title: 'Components/Popover',
  component: Popover,
  argTypes: popoverArgTypes,
  parameters: {
    controls: {
      include: ['placement', 'trapFocus', 'disabled', 'radius'],
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  args: { content: null, children: <span /> },
  parameters: componentSource(
    importPopover,
    `<Popover
    trapFocus
    aria-label="Options"
    content={
        <Button variant="primary">Confirmer</Button>
    }
>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`,
  ),
  render: (args, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <Popover
        {...args}
        trapFocus
        aria-label={copy.options}
        content={<Button variant="primary">{copy.action}</Button>}
      >
        <Button variant="secondary">{copy.open}</Button>
      </Popover>
    );
  },
};

export const Placement: Story = {
  name: 'Placement',
  args: { content: null, children: <span /> },
  parameters: componentSource(
    importPopover,
    `<Popover placement="top" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Haut</Button>
</Popover>`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <div className="mx-auto grid w-max grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] items-center justify-items-center gap-x-24 gap-y-16 px-8 py-20">
        <div className="col-start-2 row-start-1">
          <DirectedPopover copy={copy} placement="top" />
        </div>
        <div className="col-start-1 row-start-2">
          <DirectedPopover copy={copy} placement="left" />
        </div>
        <div className="col-start-3 row-start-2">
          <DirectedPopover copy={copy} placement="right" />
        </div>
        <div className="col-start-2 row-start-3">
          <DirectedPopover copy={copy} placement="bottom" />
        </div>
      </div>
    );
  },
};

export const Alignments: Story = {
  name: 'Alignements',
  args: { content: null, children: <span /> },
  parameters: componentSource(
    importPopover,
    `<>
    <Popover placement="top-start" aria-label="Options" content={<p>Aligné au début</p>}>
        <Button variant="secondary">Haut début</Button>
    </Popover>
    <Popover placement="top-end" aria-label="Options" content={<p>Aligné à la fin</p>}>
        <Button variant="secondary">Haut fin</Button>
    </Popover>
</>`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <div className="flex items-end justify-center gap-24 px-8 pb-8 pt-24">
        <Popover
          placement="top-start"
          defaultOpen
          aria-label={copy.topStart}
          content={<p>{copy.alignStart}</p>}
        >
          <Button variant="secondary">{copy.topStart}</Button>
        </Popover>
        <Popover
          placement="top-end"
          defaultOpen
          aria-label={copy.topEnd}
          content={<p>{copy.alignEnd}</p>}
        >
          <Button variant="secondary">{copy.topEnd}</Button>
        </Popover>
      </div>
    );
  },
};

export const Controlled: Story = {
  name: 'Contrôlé',
  args: { content: null, children: <span /> },
  parameters: componentSourceFn(
    importControlled,
    `const [open, setOpen] = useState(false);
return (
    <Popover
        open={open}
        onOpenChange={setOpen}
        trapFocus
        aria-label="Options"
        content={<Button variant="primary">Confirmer</Button>}
    >
        <Button variant="secondary">Ouvrir</Button>
    </Popover>
);`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <ControlledPopover
        openLabel={copy.open}
        action={copy.action}
        options={copy.options}
      />
    );
  },
};

export const WithoutFocusTrap: Story = {
  name: 'Sans piège de focus',
  args: { content: null, children: <span /> },
  parameters: componentSource(
    importPopover,
    `<Popover aria-label="Plus d’infos" content={<p>Plus d’infos</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <Popover aria-label={copy.more} content={<p>{copy.more}</p>}>
        <Button variant="secondary">{copy.open}</Button>
      </Popover>
    );
  },
};

export const Collision: Story = {
  name: 'Collision',
  args: { content: null, children: <span /> },
  parameters: componentSource(
    importPopover,
    `<Popover placement="top" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <div className="flex h-40 items-start justify-start">
        <Popover
          placement="top"
          defaultOpen
          aria-label={copy.options}
          content={<p>{copy.options}</p>}
        >
          <Button variant="secondary">{copy.open}</Button>
        </Popover>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  args: { content: null, children: <span /> },
  parameters: componentSource(
    importPopover,
    `<Popover disabled aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <Popover disabled aria-label={copy.options} content={<p>{copy.options}</p>}>
        <Button variant="secondary">{copy.open}</Button>
      </Popover>
    );
  },
};

function DirectedPopover({
  copy,
  placement,
}: {
  copy: ReturnType<typeof overlayCopy>;
  placement: 'top' | 'bottom' | 'left' | 'right';
}) {
  return (
    <Popover
      placement={placement}
      defaultOpen
      aria-label={copy[placement]}
      content={<p>{copy.options}</p>}
    >
      <Button variant="secondary">{copy[placement]}</Button>
    </Popover>
  );
}

function ControlledPopover({
  openLabel,
  action,
  options,
}: {
  openLabel: string;
  action: string;
  options: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trapFocus
      aria-label={options}
      content={<Button variant="primary">{action}</Button>}
    >
      <Button variant="secondary">{openLabel}</Button>
    </Popover>
  );
}

export const Radius: Story = {
  name: 'Arrondi',
  args: { content: null, children: <span /> },
  parameters: componentSource(
    importPopover,
    `<Popover
    trapFocus
    radius="xl"
    aria-label="Options"
    content={<Button variant="primary">Confirmer</Button>}
>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`,
  ),
  render: (args, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <Popover
        {...args}
        trapFocus
        radius="xl"
        defaultOpen
        aria-label={copy.options}
        content={<Button variant="primary">{copy.action}</Button>}
      >
        <Button variant="secondary">{copy.open}</Button>
      </Popover>
    );
  },
};
