import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Pagination as PaginationFromEntry } from '../../index';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('is exported from the package entrypoint', () => {
    expect(PaginationFromEntry).toBe(Pagination);
  });

  it('exposes the current page to assistive technology', () => {
    render(
      <Pagination
        page={3}
        pageCount={8}
        onPageChange={() => undefined}
        label="Pagination des devoirs"
        pageLabel={(page, current) =>
          current ? `Page ${page}, page courante` : `Page ${page}`
        }
      />,
    );
    expect(
      screen.getByRole('navigation', { name: 'Pagination des devoirs' }),
    ).toBeInTheDocument();
    const current = screen.getByRole('button', { name: 'Page 3, page courante' });
    expect(current).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: 'Page 1' })).not.toHaveAttribute(
      'aria-current',
    );
  });

  it('is controlled and reports the requested page', async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();
    render(
      <Pagination
        page={2}
        pageCount={5}
        onPageChange={onPageChange}
        previousLabel="Page précédente"
        nextLabel="Page suivante"
        pageLabel={(page) => `Page ${page}`}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Page 4' }));
    expect(onPageChange).toHaveBeenCalledWith(4);
    await user.click(screen.getByRole('button', { name: 'Page suivante' }));
    expect(onPageChange).toHaveBeenCalledWith(3);
    await user.click(screen.getByRole('button', { name: 'Page précédente' }));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('disables previous on the first page and next on the last', () => {
    const { rerender } = render(
      <Pagination
        page={1}
        pageCount={4}
        onPageChange={() => undefined}
        previousLabel="Page précédente"
        nextLabel="Page suivante"
      />,
    );
    expect(screen.getByRole('button', { name: 'Page précédente' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Page suivante' })).not.toBeDisabled();
    rerender(
      <Pagination
        page={4}
        pageCount={4}
        onPageChange={() => undefined}
        previousLabel="Page précédente"
        nextLabel="Page suivante"
      />,
    );
    expect(screen.getByRole('button', { name: 'Page précédente' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: 'Page suivante' })).toBeDisabled();
  });

  it('does not fire when disabled', async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();
    render(
      <Pagination
        page={2}
        pageCount={5}
        disabled
        onPageChange={onPageChange}
        pageLabel={(page) => `Page ${page}`}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Page 3' }));
    expect(onPageChange).not.toHaveBeenCalled();
  });
});
