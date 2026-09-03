import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { List as ListFromEntry, ListItem as ListItemFromEntry } from '../../index';
import { Button } from '../Button/Button';
import { List, ListItem } from './List';

describe('List', () => {
  it('is exported from the package entrypoint', () => {
    expect(ListFromEntry).toBe(List);
    expect(ListItemFromEntry).toBe(ListItem);
  });

  it('renders an unordered list of items', () => {
    render(
      <List>
        <ListItem>Algèbre</ListItem>
        <ListItem>Géométrie</ListItem>
      </List>,
    );
    expect(screen.getByRole('list')).toBeVisible();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('Algèbre')).toBeVisible();
  });

  it('renders an ordered list when as is ol', () => {
    const { container } = render(
      <List as="ol">
        <ListItem>Étape une</ListItem>
        <ListItem>Étape deux</ListItem>
      </List>,
    );
    expect(container.querySelector('ol')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeVisible();
  });

  it('renders a real link when href is set', () => {
    render(
      <List>
        <ListItem href="/cours/algebre" description="Chapitre 2">
          Algèbre
        </ListItem>
      </List>,
    );
    expect(screen.getByRole('link', { name: /Algèbre/ })).toHaveAttribute(
      'href',
      '/cours/algebre',
    );
    expect(screen.getByText('Chapitre 2')).toBeVisible();
  });

  it('keeps leading and trailing slots without nesting a link around a button', () => {
    render(
      <List>
        <ListItem leading={<span>icon</span>} trailing={<Button>Ouvrir</Button>}>
          Fiche
        </ListItem>
      </List>,
    );
    expect(screen.getByRole('button', { name: 'Ouvrir' })).toBeVisible();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.getByText('icon')).toBeVisible();
  });

  it('does not render a link when the item is disabled', () => {
    render(
      <List>
        <ListItem href="/cours/algebre" disabled>
          Algèbre
        </ListItem>
      </List>,
    );
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.getByText('Algèbre')).toBeVisible();
  });
});
