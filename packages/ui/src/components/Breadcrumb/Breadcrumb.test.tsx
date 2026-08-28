import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Breadcrumb as BreadcrumbFromEntry,
  BreadcrumbItem as BreadcrumbItemFromEntry,
} from '../../index';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

describe('Breadcrumb', () => {
  it('is exported from the package entrypoint', () => {
    expect(BreadcrumbFromEntry).toBe(Breadcrumb);
    expect(BreadcrumbItemFromEntry).toBe(BreadcrumbItem);
  });

  it('marks the last item as the current page and keeps earlier crumbs as links', () => {
    render(
      <Breadcrumb label="Fil d’Ariane">
        <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
        <BreadcrumbItem href="/cours">Cours</BreadcrumbItem>
        <BreadcrumbItem href="/cours/maths">Mathématiques</BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(screen.getByRole('navigation', { name: 'Fil d’Ariane' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Accueil' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Cours' })).toHaveAttribute('href', '/cours');
    expect(screen.queryByRole('link', { name: 'Mathématiques' })).not.toBeInTheDocument();
    const current = screen.getByText('Mathématiques');
    expect(current).toHaveAttribute('aria-current', 'page');
  });

  it('renders a crumb without href as text, not a link', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>Espace</BreadcrumbItem>
        <BreadcrumbItem href="/cours">Cours</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(screen.queryByRole('link', { name: 'Espace' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Cours' })).not.toBeInTheDocument();
    expect(screen.getByText('Cours')).toHaveAttribute('aria-current', 'page');
  });
});
