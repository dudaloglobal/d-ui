import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { tooltipArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, overlayCopy } from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { Button } from '../Button/Button';
import { Tooltip } from './Tooltip';

const importTooltip = "import { Button, Tooltip } from 'd-ui';";
const importControlled =
  "import { useState } from 'react';\nimport { Button, Tooltip } from 'd-ui';";

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: tooltipArgTypes,
  parameters: {
    controls: {
      include: ['placement', 'delayMs', 'disabled', 'content'],
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  args: { content: 'Enregistrer (⌘S)', children: <span /> },
  parameters: componentSource(
    importTooltip,
    `<Tooltip content="Enregistrer (⌘S)">
    <Button variant="secondary">Aide</Button>
</Tooltip>`,
  ),
  render: (args, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <Tooltip {...args} content={copy.tip} delayMs={0}>
        <Button variant="secondary">{copy.help}</Button>
      </Tooltip>
    );
  },
};

export const Placement: Story = {
  name: 'Placement',
  args: { content: 'Enregistrer (⌘S)', children: <span /> },
  parameters: componentSource(
    importTooltip,
    `<>
    <Tooltip content="Enregistrer (⌘S)" placement="top">
        <Button variant="secondary">Haut</Button>
    </Tooltip>
    <Tooltip content="Enregistrer (⌘S)" placement="bottom">
        <Button variant="secondary">Bas</Button>
    </Tooltip>
    <Tooltip content="Enregistrer (⌘S)" placement="left">
        <Button variant="secondary">Gauche</Button>
    </Tooltip>
    <Tooltip content="Enregistrer (⌘S)" placement="right">
        <Button variant="secondary">Droite</Button>
    </Tooltip>
</>`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 py-12">
        {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
          <Tooltip key={placement} content={copy.tip} placement={placement} delayMs={0}>
            <Button variant="secondary">{copy[placement]}</Button>
          </Tooltip>
        ))}
      </div>
    );
  },
};

export const Controlled: Story = {
  name: 'Contrôlé',
  args: { content: 'Enregistrer (⌘S)', children: <span /> },
  parameters: componentSourceFn(
    importControlled,
    `const [open, setOpen] = useState(false);
return (
    <Tooltip content="Enregistrer (⌘S)" open={open} onOpenChange={setOpen}>
        <Button variant="secondary">Aide</Button>
    </Tooltip>
);`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <ControlledTooltip label={copy.help} tip={copy.tip} />;
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  args: { content: 'Enregistrer (⌘S)', children: <span /> },
  parameters: componentSource(
    importTooltip,
    `<Tooltip content="Enregistrer (⌘S)" disabled>
    <Button variant="secondary">Aide</Button>
</Tooltip>`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <Tooltip content={copy.tip} disabled delayMs={0}>
        <Button variant="secondary">{copy.help}</Button>
      </Tooltip>
    );
  },
};

export const Collision: Story = {
  name: 'Collision',
  args: { content: 'Enregistrer (⌘S)', children: <span /> },
  parameters: componentSource(
    importTooltip,
    `<Tooltip content="Enregistrer (⌘S)" placement="top">
    <Button variant="secondary">Aide</Button>
</Tooltip>`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <div className="flex h-40 items-start justify-start">
        <Tooltip content={copy.tip} placement="top" delayMs={0}>
          <Button variant="secondary">{copy.help}</Button>
        </Tooltip>
      </div>
    );
  },
};

export const Portal: Story = {
  name: 'Portail',
  args: { content: 'Enregistrer (⌘S)', children: <span /> },
  parameters: componentSource(
    importTooltip,
    `<div className="relative h-24 overflow-hidden">
    <Tooltip content="Enregistrer (⌘S)">
        <Button variant="secondary">Aide</Button>
    </Tooltip>
</div>`,
  ),
  render: (_, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <div className="relative h-24 overflow-hidden rounded-md border border-border p-4">
        <Tooltip content={copy.tip} defaultOpen delayMs={0}>
          <Button variant="secondary">{copy.help}</Button>
        </Tooltip>
      </div>
    );
  },
};

function ControlledTooltip({ label, tip }: { label: string; tip: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Tooltip content={tip} open={open} onOpenChange={setOpen} delayMs={0}>
      <Button variant="secondary">{label}</Button>
    </Tooltip>
  );
}
