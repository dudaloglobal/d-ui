import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SkipLink } from './SkipLink';

describe('SkipLink', () => {
  it('is a link that targets main', () => {
    render(<SkipLink />);
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main',
    );
  });

  it('moves focus to the main landmark', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <SkipLink />
        <main id="main" tabIndex={-1}>
          Contenu
        </main>
      </div>,
    );
    await user.click(screen.getByRole('link', { name: 'Skip to main content' }));
    expect(document.getElementById('main')).toHaveFocus();
  });

  it('uses a custom hash target', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <SkipLink href="#content" />
        <main id="content" tabIndex={-1}>
          Contenu
        </main>
      </div>,
    );
    await user.click(screen.getByRole('link'));
    expect(document.getElementById('content')).toHaveFocus();
  });

  it('does not prevent default when the target is missing', async () => {
    const user = userEvent.setup();
    render(<SkipLink />);
    const link = screen.getByRole('link');
    const seen = vi.fn();
    link.addEventListener('click', (event) => {
      seen(event.defaultPrevented);
    });
    await user.click(link);
    expect(seen).toHaveBeenCalledWith(false);
  });

  it('does not move focus when the consumer prevents default', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <SkipLink onClick={(event) => event.preventDefault()} />
        <main id="main" tabIndex={-1}>
          Contenu
        </main>
      </div>,
    );
    await user.click(screen.getByRole('link'));
    expect(document.getElementById('main')).not.toHaveFocus();
  });

  it('moves focus on Tab then Enter', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <SkipLink />
        <main id="main" tabIndex={-1}>
          Contenu
        </main>
      </div>,
    );
    await user.tab();
    expect(screen.getByRole('link')).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(document.getElementById('main')).toHaveFocus();
  });

  it('does not mutate tabindex on the target', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <SkipLink />
        <main id="main">Contenu</main>
      </div>,
    );
    const main = document.getElementById('main');
    expect(main).not.toHaveAttribute('tabindex');
    await user.click(screen.getByRole('link'));
    expect(main).not.toHaveAttribute('tabindex');
  });
});
