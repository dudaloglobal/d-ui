import { useEffect, useLayoutEffect } from 'react';

/**
 * `useLayoutEffect` côté navigateur, `useEffect` côté serveur.
 *
 * `useLayoutEffect` s'exécute avant la peinture : c'est ce qu'il faut pour
 * qu'un attribut ARIA soit posé dès le premier rendu visible, sans image
 * intermédiaire où il manque. Mais React avertit dès qu'on l'appelle pendant
 * un rendu serveur, où il ne sert à rien.
 */
export const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;
