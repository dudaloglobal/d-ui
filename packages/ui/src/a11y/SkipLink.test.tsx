import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
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
        <main id="main">Contenu</main>
      </div>,
    );
    await user.click(screen.getByRole('link', { name: 'Skip to main content' }));
    expect(document.getElementById('main')).toHaveFocus();
  });
});
