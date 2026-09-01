import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Avatar as AvatarFromEntry,
  AvatarGroup as AvatarGroupFromEntry,
} from '../../index';
import { Avatar, AvatarGroup, initialsFromName } from './Avatar';

describe('Avatar', () => {
  it('is exported from the package entrypoint', () => {
    expect(AvatarFromEntry).toBe(Avatar);
    expect(AvatarGroupFromEntry).toBe(AvatarGroup);
  });

  it('derives two-letter initials from a name', () => {
    expect(initialsFromName('Ada Lovelace')).toBe('AL');
    expect(initialsFromName('Platon')).toBe('PL');
  });

  it('names initials with the person’s name', () => {
    render(<Avatar name="Ada Lovelace" />);
    const portrait = screen.getByRole('img', { name: 'Ada Lovelace' });
    expect(portrait).toHaveTextContent('AL');
  });

  it('uses an explicit initials prop', () => {
    render(<Avatar name="Ada Lovelace" initials="AX" />);
    expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toHaveTextContent('AX');
  });

  it('renders a named image', () => {
    render(<Avatar src="/portrait.png" name="Ada Lovelace" />);
    expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toHaveAttribute(
      'src',
      '/portrait.png',
    );
  });

  it('falls back to named initials when the image fails', () => {
    render(<Avatar src="/missing.png" name="Ada Lovelace" />);
    fireEvent.error(screen.getByRole('img', { name: 'Ada Lovelace' }));
    expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toHaveTextContent('AL');
    expect(
      screen.queryByRole('img', { name: 'Ada Lovelace' })?.querySelector('img'),
    ).toBeNull();
  });

  it('keeps an unnamed silhouette decorative', () => {
    const { container } = render(<Avatar />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('names overflow in a group', () => {
    render(
      <AvatarGroup max={2} label="Équipe" overflowLabel={(n) => `${n} de plus`}>
        <Avatar name="Ada Lovelace" />
        <Avatar name="Grace Hopper" />
        <Avatar name="Katherine Johnson" />
      </AvatarGroup>,
    );
    expect(screen.getByRole('group', { name: 'Équipe' })).toBeVisible();
    expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toBeVisible();
    expect(screen.getByRole('img', { name: 'Grace Hopper' })).toBeVisible();
    expect(
      screen.queryByRole('img', { name: 'Katherine Johnson' }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: '1 de plus' })).toHaveTextContent('+1');
  });

  it('includes presence in the accessible name, not colour alone', () => {
    render(<Avatar name="Ada Lovelace" presence="online" />);
    expect(screen.getByRole('img', { name: 'Ada Lovelace, Online' })).toBeVisible();
  });

  it('uses presenceLabel instead of the English fallback', () => {
    render(<Avatar name="Ada Lovelace" presence="busy" presenceLabel="Occupé" />);
    expect(screen.getByRole('img', { name: 'Ada Lovelace, Occupé' })).toBeVisible();
  });

  it('keeps a decorative image unnamed when alt is empty beside visible text', () => {
    render(
      <div>
        <Avatar src="/portrait.png" name="Ada Lovelace" alt="" />
        <p>Ada Lovelace</p>
      </div>,
    );
    expect(screen.getByText('Ada Lovelace', { selector: 'p' })).toBeVisible();
    const photo = document.querySelector('img');
    expect(photo).toHaveAttribute('alt', '');
    expect(screen.queryByRole('img', { name: 'Ada Lovelace' })).not.toBeInTheDocument();
  });

  it('forwards className and keeps a named portrait when color is set', () => {
    render(<Avatar name="Ada Lovelace" color="brand" className="my-avatar" />);
    expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toHaveClass('my-avatar');
  });
});
