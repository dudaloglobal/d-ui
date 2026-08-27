import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ThemeProvider } from './ThemeProvider';

function stubMatchMedia(matches: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockReturnValue({
      matches,
      media: '(prefers-color-scheme: dark)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
      onchange: null,
    }),
  );
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

  it('keeps an explicit light mode when the OS is dark', () => {
    stubMatchMedia(true);
    render(
      <ThemeProvider mode="light">
        <p>Hello</p>
      </ThemeProvider>,
    );
    expect(screen.getByText('Hello').parentElement).toHaveAttribute(
      'data-d-ui-theme',
      'light',
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

  it('resolves system preference to light when the OS is light', () => {
    stubMatchMedia(false);
    render(
      <ThemeProvider mode="system">
        <p>Hello</p>
      </ThemeProvider>,
    );
    expect(screen.getByText('Hello').parentElement).toHaveAttribute(
      'data-d-ui-theme',
      'light',
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
