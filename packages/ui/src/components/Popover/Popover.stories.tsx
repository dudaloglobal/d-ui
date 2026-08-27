import type { Meta, StoryObj } from '@storybook/react';
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
      include: ['placement', 'trapFocus', 'disabled'],
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
    `<Popover placement="right" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 py-16">
        {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
          <Popover
            key={placement}
            placement={placement}
            aria-label={copy.options}
            content={<p>{copy.options}</p>}
          >
            <Button variant="secondary">{copy[placement]}</Button>
          </Popover>
        ))}
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
