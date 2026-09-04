import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Stepper as StepperFromEntry } from '../../index';
import { UI_COLORS, UI_SIZES } from '../../lib/uiScale';
import { Stepper, type StepperStep } from './Stepper';

const STEPS: StepperStep[] = [
  { label: 'Panier', description: 'Vérifier les articles' },
  { label: 'Livraison', description: 'Adresse et transporteur' },
  { label: 'Paiement', description: 'Carte ou virement' },
];

const STATUS = {
  complete: 'Terminé',
  current: 'Étape en cours',
  upcoming: 'À venir',
};

describe('Stepper', () => {
  it('is exported from the package entrypoint', () => {
    expect(StepperFromEntry).toBe(Stepper);
  });

  it('is an ordered list — the order is the information', () => {
    render(<Stepper steps={STEPS} current={1} label="Commande" statusLabels={STATUS} />);
    const list = screen.getByRole('list', { name: 'Commande' });
    expect(list.tagName).toBe('OL');
    expect(within(list).getAllByRole('listitem')).toHaveLength(3);
  });

  it('marks exactly one step as current, with aria-current="step"', () => {
    render(<Stepper steps={STEPS} current={1} label="Commande" statusLabels={STATUS} />);
    const items = screen.getAllByRole('listitem');
    expect(items.filter((li) => li.getAttribute('aria-current') === 'step')).toHaveLength(
      1,
    );
    expect(items[1]).toHaveAttribute('aria-current', 'step');
    expect(items[0]).not.toHaveAttribute('aria-current');
  });

  it('announces each status in text, not by colour alone', () => {
    render(<Stepper steps={STEPS} current={1} label="Commande" statusLabels={STATUS} />);
    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveTextContent('Terminé');
    expect(items[1]).toHaveTextContent('Étape en cours');
    expect(items[2]).toHaveTextContent('À venir');
  });

  it('numbers upcoming steps and checks off completed ones', () => {
    const { container } = render(
      <Stepper steps={STEPS} current={1} label="Commande" statusLabels={STATUS} />,
    );
    const [done, currentStep, next] = screen.getAllByRole('listitem');
    // Étape terminée : une coche, pas seulement une couleur.
    expect(done?.querySelector('svg')).toBeTruthy();
    expect(currentStep).toHaveTextContent('2');
    expect(next).toHaveTextContent('3');
    expect(container).toBeTruthy();
  });

  it('renders a real link only for a step that has an href', async () => {
    const user = userEvent.setup();
    render(
      <Stepper
        steps={[{ label: 'Panier', href: '#panier' }, { label: 'Paiement' }]}
        current={1}
        label="Commande"
        statusLabels={STATUS}
      />,
    );
    expect(screen.getAllByRole('link')).toHaveLength(1);
    const link = screen.getByRole('link', { name: /Panier/ });
    expect(link).toHaveAttribute('href', '#panier');

    await user.tab();
    expect(link).toHaveFocus();
    // Une étape sans href n'est pas focusable : rien à activer.
    await user.tab();
    expect(link).not.toHaveFocus();
  });

  it('keeps the labels readable when hideLabels only hides them visually', () => {
    render(
      <Stepper
        steps={STEPS}
        current={0}
        label="Commande"
        variant="bullets"
        hideLabels
        statusLabels={STATUS}
      />,
    );
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('Panier');
  });

  it('keeps the same semantics across every variant and orientation', () => {
    for (const variant of ['circles', 'bullets', 'panels'] as const) {
      for (const orientation of ['horizontal', 'vertical'] as const) {
        const { unmount } = render(
          <Stepper
            steps={STEPS}
            current={2}
            variant={variant}
            orientation={orientation}
            label="Commande"
            statusLabels={STATUS}
          />,
        );
        const list = screen.getByRole('list', { name: 'Commande' });
        expect(within(list).getAllByRole('listitem')).toHaveLength(3);
        expect(
          within(list)
            .getAllByRole('listitem')
            .filter((li) => li.getAttribute('aria-current') === 'step'),
        ).toHaveLength(1);
        unmount();
      }
    }
  });

  it('keeps the links when hideLabels hides the text', () => {
    render(
      <Stepper
        steps={[
          { label: 'Panier', href: '#panier' },
          { label: 'Paiement', href: '#paiement' },
        ]}
        current={1}
        variant="bullets"
        hideLabels
        label="Commande"
        statusLabels={STATUS}
      />,
    );
    // `hideLabels` masque le texte, il ne supprime pas la navigation.
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('keeps the link name free of the step status', () => {
    render(
      <Stepper
        steps={[{ label: 'Panier', href: '#panier', description: 'Vérifier' }]}
        current={0}
        label="Commande"
        statusLabels={STATUS}
      />,
    );
    // Le nom du lien ne doit pas changer quand l'étape avance.
    expect(screen.getByRole('link', { name: 'Panier' })).toBeInTheDocument();
  });

  it('clamps current so there is always exactly one step in progress', () => {
    for (const value of [-3, 0, 2, 9]) {
      const { unmount } = render(
        <Stepper steps={STEPS} current={value} label="Commande" statusLabels={STATUS} />,
      );
      expect(
        screen
          .getAllByRole('listitem')
          .filter((li) => li.getAttribute('aria-current') === 'step'),
      ).toHaveLength(1);
      unmount();
    }
  });

  it('survives two steps sharing a label', () => {
    const duplicated = [{ label: 'Vérification' }, { label: 'Vérification' }];
    render(
      <Stepper steps={duplicated} current={1} label="Commande" statusLabels={STATUS} />,
    );
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(items[1]).toHaveAttribute('aria-current', 'step');
  });

  it('shows completion by shape, not only by colour', () => {
    const { container, unmount } = render(
      <Stepper steps={STEPS} current={2} label="Commande" statusLabels={STATUS} />,
    );
    // `circles` : une coche sur les deux étapes terminées.
    expect(container.querySelectorAll('li svg')).toHaveLength(2);
    unmount();

    const bullets = render(
      <Stepper
        steps={STEPS}
        current={2}
        variant="bullets"
        label="Commande"
        statusLabels={STATUS}
      />,
    );
    /*
     * `bullets` : pastille pleine si terminée, creuse sinon. L'assertion porte
     * sur le remplissage (`bg-current` contre `bg-bg`), pas sur une teinte
     * précise — la couleur est réglable par `color`, la forme non.
     */
    const dots = bullets.container.querySelectorAll('[data-d-ui-step-marker] > span');
    expect(dots).toHaveLength(STEPS.length);
    const filled = [...dots].filter((dot) => dot.classList.contains('bg-current'));
    const hollow = [...dots].filter((dot) => dot.classList.contains('bg-bg'));
    expect(filled).toHaveLength(2);
    expect(hollow).toHaveLength(STEPS.length - 2);
    bullets.unmount();

    const panels = render(
      <Stepper
        steps={STEPS}
        current={2}
        variant="panels"
        label="Commande"
        statusLabels={STATUS}
      />,
    );
    expect(panels.container.querySelectorAll('li svg')).toHaveLength(2);
  });

  it('falls back to English status wording when no labels are given', () => {
    render(<Stepper steps={STEPS} current={0} label="Order" />);
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('Current step');
  });

  it('drives the marker box from one variable, strictly growing across the scale', () => {
    /*
     * Le trait de liaison se positionne par `calc()` sur cette variable : si
     * elle ne bouge pas, le marqueur grandit et le trait reste où il était.
     */
    const boxes = UI_SIZES.map((size) => {
      const { container, unmount } = render(
        <Stepper steps={STEPS} current={1} label="Commande" size={size} />,
      );
      const list = container.querySelector<HTMLElement>('ol');
      const box = list?.style.getPropertyValue('--d-ui-step-marker') ?? '';
      const font = list?.style.fontSize ?? '';
      unmount();
      return { box: Number.parseFloat(box), font: Number.parseFloat(font) };
    });
    // Strictement croissant : trié à l'identique, et sans deux crans égaux.
    const markers = boxes.map((b) => b.box);
    expect([...markers].sort((a, b) => a - b)).toEqual(markers);
    expect(new Set(markers).size).toBe(markers.length);
    /*
     * La police est posée en ligne, pas par une classe `text-*` : entre deux
     * utilitaires Tailwind, c'est l'ordre de la feuille qui trancherait, et
     * `size` cesserait de décider.
     */
    const fonts = boxes.map((b) => b.font);
    expect([...fonts].sort((a, b) => a - b)).toEqual(fonts);
    expect(new Set(fonts).size).toBe(fonts.length);
  });

  it('gives panels no marker to position, at any size', () => {
    const { container } = render(
      <Stepper steps={STEPS} current={1} variant="panels" label="Commande" size="xxl" />,
    );
    // La variante sort avant le marqueur : rien à dimensionner, rien à relier.
    expect(container.querySelectorAll('[data-d-ui-step-marker]')).toHaveLength(0);
    const list = container.querySelector<HTMLElement>('ol');
    expect(
      Number.parseFloat(list?.style.getPropertyValue('--d-ui-step-marker') ?? ''),
    ).toBe(0);
  });

  it('marks the current step by shape, not by hue, on every colour', () => {
    /*
     * Deux pièges mesurés dans le navigateur : `neutral`, dont le contour
     * retombait sur `border-border` — le jeton de l'étape à venir — et
     * `success` / `warning`, dont la luminance est si proche de ce même jeton
     * que le contour teinté ne s'en distingue pas sans percevoir la couleur.
     * Le repère de l'étape en cours est donc une forme : trait plus épais sur
     * `circles`, pastille plus grande sur `bullets` (1.4.1).
     */
    const widthOf = (el?: Element) =>
      [...(el?.classList ?? [])].find(
        (c) => c.startsWith('border-[') || c === 'border-2',
      );
    const diameterOf = (el?: Element) =>
      [...(el?.classList ?? [])].find((c) => c.startsWith('size-[calc'));

    for (const color of UI_COLORS) {
      const circles = render(
        <Stepper
          steps={STEPS}
          current={1}
          label="Commande"
          color={color}
          statusLabels={STATUS}
        />,
      );
      const [, curCircle, nextCircle] = [
        ...circles.container.querySelectorAll('[data-d-ui-step-marker]'),
      ];
      expect(widthOf(curCircle)).toBeDefined();
      expect(widthOf(curCircle)).not.toBe(widthOf(nextCircle));
      circles.unmount();

      const bullets = render(
        <Stepper
          steps={STEPS}
          current={1}
          variant="bullets"
          hideLabels
          label="Commande"
          color={color}
          statusLabels={STATUS}
        />,
      );
      const [, curDot, nextDot] = [
        ...bullets.container.querySelectorAll('[data-d-ui-step-marker] > span'),
      ];
      expect(diameterOf(curDot)).toBeDefined();
      expect(diameterOf(curDot)).not.toBe(diameterOf(nextDot));
      bullets.unmount();
    }
  });

  it('recolours the current and completed steps without dropping the shape cues', () => {
    const { container } = render(
      <Stepper
        steps={STEPS}
        current={1}
        label="Commande"
        color="success"
        statusLabels={STATUS}
      />,
    );
    const [complete, current, upcoming] = [
      ...container.querySelectorAll('[data-d-ui-step-marker]'),
    ];
    expect(complete?.classList.contains('bg-success')).toBe(true);
    expect(current?.classList.contains('border-success')).toBe(true);
    // Une étape à venir garde le gris neutre, quelle que soit la couleur choisie.
    expect(upcoming?.classList.contains('border-border')).toBe(true);
    // La couleur change, la coche reste : le statut ne tient jamais à la teinte seule.
    expect(container.querySelectorAll('li svg')).toHaveLength(1);
  });

  it('still announces every status in words when a colour is set', () => {
    render(
      <Stepper
        steps={STEPS}
        current={1}
        label="Commande"
        color="danger"
        statusLabels={STATUS}
      />,
    );
    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveTextContent(STATUS.complete);
    expect(items[1]).toHaveTextContent(STATUS.current);
    expect(items[2]).toHaveTextContent(STATUS.upcoming);
  });
});
