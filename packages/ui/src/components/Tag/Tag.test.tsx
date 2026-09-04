import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Tag as TagFromEntry, TagGroup as TagGroupFromEntry } from '../../index';
import { Tag, TagGroup } from './Tag';

describe('Tag', () => {
  it('is exported from the package entrypoint', () => {
    expect(TagFromEntry).toBe(Tag);
    expect(TagGroupFromEntry).toBe(TagGroup);
  });

  it('renders a named status label', () => {
    render(<Tag variant="success">Publié</Tag>);
    expect(screen.getByText('Publié')).toBeVisible();
  });

  it('keeps a decorative icon out of the accessible name', () => {
    render(
      <Tag
        variant="info"
        icon={
          <svg width="1em" height="1em" aria-hidden="true">
            <circle cx="8" cy="8" r="4" />
          </svg>
        }
      >
        Info
      </Tag>,
    );
    expect(screen.getByText('Info')).toBeVisible();
    expect(screen.getByText('Info').querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  it('does not expose the status dot to assistive tech', () => {
    render(
      <Tag variant="warning" dot>
        Brouillon
      </Tag>,
    );
    const tag = screen.getByText('Brouillon');
    expect(tag.querySelector('[aria-hidden="true"]')).toBeTruthy();
  });

  it('calls onDismiss and keeps the tag until the parent unmounts it', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(
      <Tag dismissible dismissLabel="Retirer" onDismiss={onDismiss}>
        Maths
      </Tag>,
    );
    await user.click(screen.getByRole('button', { name: 'Retirer' }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Maths')).toBeVisible();
  });

  it('forwards className onto the pill', () => {
    render(
      <Tag color="success" className="my-tag">
        Publié
      </Tag>,
    );
    expect(screen.getByText('Publié')).toHaveClass('my-tag');
  });

  it('hides surplus tags behind a named overflow pill', () => {
    render(
      <TagGroup max={2} label="Filtres" overflowLabel={(n) => `${n} de plus`}>
        <Tag>Algèbre</Tag>
        <Tag>Géométrie</Tag>
        <Tag>Analyse</Tag>
      </TagGroup>,
    );
    expect(screen.getByRole('group', { name: 'Filtres' })).toBeVisible();
    expect(screen.getByText('Algèbre')).toBeVisible();
    expect(screen.getByText('Géométrie')).toBeVisible();
    expect(screen.queryByText('Analyse')).not.toBeInTheDocument();
    expect(screen.getByLabelText('1 de plus')).toHaveTextContent('+1');
  });
});
