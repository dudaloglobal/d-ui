import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  Card as CardFromEntry,
  CardBody as CardBodyFromEntry,
  CardFooter as CardFooterFromEntry,
  CardHeader as CardHeaderFromEntry,
  CardMedia as CardMediaFromEntry,
  CardTitle as CardTitleFromEntry,
} from '../../index';
import { Button } from '../Button/Button';
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
} from './Card';

describe('Card', () => {
  it('is exported from the package entrypoint', () => {
    expect(CardFromEntry).toBe(Card);
    expect(CardMediaFromEntry).toBe(CardMedia);
    expect(CardHeaderFromEntry).toBe(CardHeader);
    expect(CardBodyFromEntry).toBe(CardBody);
    expect(CardFooterFromEntry).toBe(CardFooter);
    expect(CardTitleFromEntry).toBe(CardTitle);
  });

  it('renders a static article with slots', () => {
    render(
      <Card>
        <CardMedia>
          <img src="/cover.png" alt="" />
        </CardMedia>
        <CardHeader>
          <CardTitle>Algèbre</CardTitle>
          <CardDescription>Chapitre 2</CardDescription>
        </CardHeader>
        <CardBody>Les équations du premier degré.</CardBody>
        <CardFooter>
          <Button>Ouvrir</Button>
        </CardFooter>
      </Card>,
    );
    expect(screen.getByRole('article')).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Algèbre', level: 3 })).toBeVisible();
    expect(screen.getByText('Chapitre 2')).toBeVisible();
    expect(screen.getByText('Les équations du premier degré.')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Ouvrir' })).toBeVisible();
    const cover = document.querySelector('img');
    expect(cover).toHaveAttribute('src', '/cover.png');
    expect(cover).toHaveAttribute('alt', '');
  });

  it('renders as a link when href is set', () => {
    render(
      <Card href="/fiches/algebre">
        <CardHeader>
          <CardTitle>Algèbre</CardTitle>
        </CardHeader>
      </Card>,
    );
    expect(screen.queryByRole('article')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Algèbre' })).toHaveAttribute(
      'href',
      '/fiches/algebre',
    );
  });

  it('renders as a native button', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Card as="button" onClick={onClick}>
        <CardHeader>
          <CardTitle>Choisir</CardTitle>
        </CardHeader>
      </Card>,
    );
    const card = screen.getByRole('button', { name: 'Choisir' });
    expect(card).toHaveAttribute('type', 'button');
    await user.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire click when the button card is disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Card as="button" disabled onClick={onClick}>
        <CardHeader>
          <CardTitle>Choisir</CardTitle>
        </CardHeader>
      </Card>,
    );
    const card = screen.getByRole('button', { name: 'Choisir' });
    expect(card).toBeDisabled();
    await user.click(card);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('forwards className onto the article', () => {
    render(
      <Card className="my-card" color="brand" size="s">
        <CardHeader>
          <CardTitle>Algèbre</CardTitle>
        </CardHeader>
      </Card>,
    );
    expect(screen.getByRole('article')).toHaveClass('my-card');
    expect(screen.getByRole('heading', { name: 'Algèbre', level: 3 })).toBeVisible();
  });
});
