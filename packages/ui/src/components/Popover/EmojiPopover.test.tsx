import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  EmojiPopover as EmojiPopoverFromEntry,
  REACTION_EMOJIS as EmojisFromEntry,
} from '../../index';
import { EmojiPopover, REACTION_EMOJIS } from './EmojiPopover';

describe('EmojiPopover', () => {
  it('is exported from the package entrypoint', () => {
    expect(EmojiPopoverFromEntry).toBe(EmojiPopover);
    expect(EmojisFromEntry).toBe(REACTION_EMOJIS);
  });

  it('opens the Meet reaction set and selects an emoji', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <EmojiPopover onSelect={onSelect}>
        <button type="button">Réagir</button>
      </EmojiPopover>,
    );
    await user.click(screen.getByRole('button', { name: 'Réagir' }));
    const dialog = await screen.findByRole('dialog', { name: 'Réactions' });
    const picks = within(dialog).getAllByRole('button');
    expect(picks.map((button) => button.textContent)).toEqual([...REACTION_EMOJIS]);
    expect(REACTION_EMOJIS).toEqual([
      '💖',
      '👍',
      '🎉',
      '👏',
      '😂',
      '😮',
      '😢',
      '🤔',
      '👎',
    ]);
    await user.click(screen.getByRole('button', { name: 'Pouce en l’air' }));
    expect(onSelect).toHaveBeenCalledWith('👍');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    render(
      <EmojiPopover disabled>
        <button type="button">Réagir</button>
      </EmojiPopover>,
    );
    await user.click(screen.getByRole('button', { name: 'Réagir' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
