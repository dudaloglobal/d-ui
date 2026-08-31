import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Progress as ProgressFromEntry } from '../../index';
import { Progress } from './Progress';

describe('Progress', () => {
  it('is exported from the package entrypoint', () => {
    expect(ProgressFromEntry).toBe(Progress);
  });

  it('exposes a named progressbar with its bounds', () => {
    render(<Progress value={42} label="Envoi du fichier" />);
    const bar = screen.getByRole('progressbar', { name: 'Envoi du fichier' });
    expect(bar).toHaveAttribute('aria-valuenow', '42');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('omits aria-valuenow when indeterminate — that is what makes it not zero', () => {
    render(<Progress label="Chargement" />);
    const bar = screen.getByRole('progressbar', { name: 'Chargement' });
    expect(bar).not.toHaveAttribute('aria-valuenow');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('clamps out-of-range values instead of announcing them', () => {
    const { rerender } = render(<Progress value={140} label="Envoi" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
    rerender(<Progress value={-20} label="Envoi" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('announces valueText instead of a bare percentage', () => {
    render(<Progress value={50} label="Étapes" valueText="Étape 2 sur 4" />);
    const bar = screen.getByRole('progressbar', { name: 'Étapes' });
    expect(bar).toHaveAttribute('aria-valuetext', 'Étape 2 sur 4');
  });

  it('does not read the visible value twice', () => {
    render(<Progress value={30} label="Envoi" showValue />);
    // Le texte visible double `aria-valuenow` : il reste hors de l'arbre.
    expect(screen.getByText('30 %')).toHaveAttribute('aria-hidden', 'true');
  });

  it('keeps the progressbar role when a caller passes another one', () => {
    render(<Progress value={10} label="Envoi" role="meter" />);
    expect(screen.getByRole('progressbar', { name: 'Envoi' })).toBeInTheDocument();
  });

  it('draws the circular variant as an arc sized to the value', () => {
    const { container } = render(
      <Progress variant="circular" value={25} label="Quota" />,
    );
    const bar = screen.getByRole('progressbar', { name: 'Quota' });
    expect(bar).toHaveAttribute('aria-valuenow', '25');
    const arc = container.querySelectorAll('circle')[1] as SVGCircleElement;
    const circumference = Number(arc.getAttribute('stroke-dasharray'));
    expect(Number(arc.getAttribute('stroke-dashoffset'))).toBeCloseTo(
      circumference * 0.75,
      3,
    );
  });

  it('keeps valueText even when indeterminate', () => {
    render(<Progress label="Étapes" valueText="Étape 2 sur 4" />);
    const bar = screen.getByRole('progressbar', { name: 'Étapes' });
    // ARIA autorise `aria-valuetext` sans `aria-valuenow` : c'est justement le
    // cas où la valeur chiffrée manque mais l'information existe.
    expect(bar).toHaveAttribute('aria-valuetext', 'Étape 2 sur 4');
    expect(bar).not.toHaveAttribute('aria-valuenow');
  });

  it('falls back to a linear bar when circular is given no value', () => {
    // Le type l'interdit, mais un consommateur JavaScript passe au travers :
    // un anneau vide dessinerait 0 % sans l'annoncer.
    const props = { variant: 'circular', label: 'Quota' } as unknown as Parameters<
      typeof Progress
    >[0];
    const { container } = render(<Progress {...props} />);
    expect(container.querySelector('svg')).toBeNull();
    expect(screen.getByRole('progressbar')).not.toHaveAttribute('aria-valuenow');
  });

  it('reserves no gutter for a value it cannot show', () => {
    const { container } = render(<Progress label="Chargement" showValue />);
    const bar = screen.getByRole('progressbar');
    expect(bar.children).toHaveLength(1);
    expect(container.textContent).toBe('');
  });

  it('hides the decorative svg from screen readers', () => {
    const { container } = render(
      <Progress variant="circular" value={60} label="Quota" />,
    );
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });
});
