import type { Meta, StoryObj } from '@storybook/react';
import { visuallyHiddenArgTypes } from '../../.storybook/arg-types';
import { componentSource } from '../../.storybook/docs-source';
import { docsLocale, visuallyHiddenCopy } from '../../.storybook/docs-locale';
import { VisuallyHidden } from './VisuallyHidden';

const meta = {
  title: 'Accessibility/VisuallyHidden',
  component: VisuallyHidden,
  argTypes: visuallyHiddenArgTypes,
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconOnlyName: Story = {
  name: 'Nom d’un bouton icône',
  parameters: componentSource(
    "import { VisuallyHidden } from 'd-ui';",
    `<button type="button">
  <span aria-hidden="true">×</span>
  <VisuallyHidden>Fermer</VisuallyHidden>
</button>`,
  ),
  render: (_, { globals }) => {
    const copy = visuallyHiddenCopy(docsLocale(globals.locale));
    return (
      <button type="button" className="text-fg rounded-md border border-border px-3 py-2">
        <span aria-hidden="true">×</span>
        <VisuallyHidden>{copy.close}</VisuallyHidden>
      </button>
    );
  },
};
