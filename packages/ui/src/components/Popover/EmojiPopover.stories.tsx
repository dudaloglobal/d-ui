import type { Meta, StoryObj } from '@storybook/react';
import { emojiPopoverArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, overlayCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { IconButton } from '../Button/IconButton';
import { EmojiPopover, type ReactionEmoji } from './EmojiPopover';

const importEmoji = "import { Button, EmojiPopover } from 'd-ui';";

function SmileIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5.75" cy="6.5" r="0.9" fill="currentColor" />
      <circle cx="10.25" cy="6.5" r="0.9" fill="currentColor" />
      <path
        d="M5.25 9.5c.7 1.2 1.7 1.8 2.75 1.8s2.05-.6 2.75-1.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const meta = {
  title: 'Components/EmojiPopover',
  component: EmojiPopover,
  argTypes: emojiPopoverArgTypes,
  parameters: {
    controls: {
      include: ['placement', 'disabled'],
    },
  },
} satisfies Meta<typeof EmojiPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  args: { children: <span /> },
  parameters: componentSource(
    importEmoji,
    `<EmojiPopover onSelect={(emoji) => {}}>
    <Button variant="secondary">Réagir</Button>
</EmojiPopover>`,
  ),
  render: (args, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <div className="flex justify-center pb-8 pt-24">
        <EmojiPopover
          {...args}
          defaultOpen
          aria-label={copy.reactions}
          labels={reactionLabels(copy)}
        >
          <IconButton aria-label={copy.react} variant="secondary" icon={<SmileIcon />} />
        </EmojiPopover>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: 'Désactivé',
  args: { children: <span />, disabled: true },
  parameters: componentSource(
    importEmoji,
    `<EmojiPopover disabled>
    <Button variant="secondary">Réagir</Button>
</EmojiPopover>`,
  ),
  render: (args, { globals }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return (
      <EmojiPopover {...args} aria-label={copy.reactions} labels={reactionLabels(copy)}>
        <IconButton aria-label={copy.react} variant="secondary" icon={<SmileIcon />} />
      </EmojiPopover>
    );
  },
};

function reactionLabels(
  copy: ReturnType<typeof overlayCopy>,
): Partial<Record<ReactionEmoji, string>> {
  return {
    '💖': copy.emojiHeart,
    '👍': copy.emojiThumbsUp,
    '🎉': copy.emojiParty,
    '👏': copy.emojiClap,
    '😂': copy.emojiJoy,
    '😮': copy.emojiWow,
    '😢': copy.emojiCry,
    '🤔': copy.emojiThink,
    '👎': copy.emojiThumbsDown,
  };
}
