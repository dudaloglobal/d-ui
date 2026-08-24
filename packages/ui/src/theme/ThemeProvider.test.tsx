import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import { ThemeProvider } from './ThemeProvider';

function stubMatchMedia(matches: boolean) {
  const addEventListener = vi.fn();
  const removeEventListener = vi.fn();
  window.matchMedia = vi.fn().mockReturnValue({
    matches,
    media: '(prefers-color-scheme: dark)',
    addEventListener,
    removeEventListener,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
    onchange: null,
  }) as unknown as typeof window.matchMedia;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('ThemeProvider', () => {
  it('sets the explicit theme on the wrapper', () => {
    render(
      <ThemeProvider mode="dark">
        <p>Hello</p>
      </ThemeProvider>,
    );
    expect(screen.getByText('Hello').parentElement).toHaveAttribute(
      'data-d-ui-theme',
      'dark',
    );
  });

  it('resolves system preference to dark when the OS is dark', () => {
    stubMatchMedia(true);
    render(
      <ThemeProvider mode="system">
        <p>Hello</p>
      </ThemeProvider>,
    );
    expect(screen.getByText('Hello').parentElement).toHaveAttribute(
      'data-d-ui-theme',
      'dark',
    );
  });

  it('applies brand token overrides as CSS variables', () => {
    render(
      <ThemeProvider tokens={{ brand: 'rgb(1, 2, 3)' }}>
        <p>Hello</p>
      </ThemeProvider>,
    );
    expect(screen.getByText('Hello').parentElement).toHaveStyle({
      '--d-ui-color-brand': 'rgb(1, 2, 3)',
    });
  });
});
