import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Skeleton as SkeletonFromEntry,
  SkeletonText as SkeletonTextFromEntry,
} from '../../index';
import { Skeleton, SkeletonText } from './Skeleton';

describe('Skeleton', () => {
  it('is exported from the package entrypoint', () => {
    expect(SkeletonFromEntry).toBe(Skeleton);
    expect(SkeletonTextFromEntry).toBe(SkeletonText);
  });

  it('never reaches the accessibility tree', () => {
    const { container } = render(
      <div aria-busy="true">
        <Skeleton />
        <SkeletonText lines={3} />
      </div>,
    );
    // Une vraie assertion : aucun bloc ne doit être hors d'un sous-arbre masqué.
    const exposed = [...container.querySelectorAll('.d-ui-skeleton')].filter(
      (node) => !node.closest('[aria-hidden="true"]'),
    );
    expect(container.querySelectorAll('.d-ui-skeleton')).toHaveLength(4);
    expect(exposed).toHaveLength(0);
  });

  it('keeps a circle square even when only one dimension is given', () => {
    render(<Skeleton shape="circle" width={80} data-testid="c" />);
    // Sans ratio forcé, la hauteur tomberait à zéro et le bloc disparaîtrait.
    expect(screen.getByTestId('c').className).toContain('aspect-square');
  });

  it('ignores height on a text line, as documented', () => {
    render(<Skeleton shape="text" height={200} data-testid="t" />);
    expect(screen.getByTestId('t').style.height).toBe('');
  });

  it('refuses to be exposed by a caller', () => {
    const { container } = render(<Skeleton aria-hidden={false} role="img" />);
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders the requested number of lines, the last one shorter', () => {
    const { container } = render(<SkeletonText lines={4} />);
    const lines = container.querySelectorAll('.d-ui-skeleton');
    expect(lines).toHaveLength(4);
    expect((lines[3] as HTMLElement).style.width).toBe('60%');
    expect((lines[0] as HTMLElement).style.width).toBe('100%');
  });

  it('keeps a single line full width', () => {
    const { container } = render(<SkeletonText lines={1} />);
    const lines = container.querySelectorAll('.d-ui-skeleton');
    expect(lines).toHaveLength(1);
    expect((lines[0] as HTMLElement).style.width).toBe('100%');
  });

  it('clamps a nonsensical line count to one', () => {
    const { container } = render(<SkeletonText lines={0} />);
    expect(container.querySelectorAll('.d-ui-skeleton')).toHaveLength(1);
  });

  it('turns a number into pixels and passes a string through', () => {
    const { container } = render(
      <>
        <Skeleton size={48} shape="circle" data-testid="a" />
        <Skeleton width="12rem" data-testid="b" />
      </>,
    );
    const a = screen.getByTestId('a');
    expect(a.style.width).toBe('48px');
    expect(a.style.height).toBe('48px');
    expect(screen.getByTestId('b').style.width).toBe('12rem');
    expect(container).toBeTruthy();
  });
});
