import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from './SkipLink';

const meta = {
  title: 'Accessibility/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Keyboard: Story = {
  render: () => (
    <div>
      <SkipLink />
      <p>Tab once — the skip link becomes visible, then Enter moves focus to main.</p>
      <main id="main" tabIndex={-1}>
        Main content
      </main>
    </div>
  ),
};
