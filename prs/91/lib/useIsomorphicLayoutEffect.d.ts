import { useEffect } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
/**
 * `useLayoutEffect` côté navigateur, `useEffect` côté serveur.
 *
 * `useLayoutEffect` s'exécute avant la peinture : c'est ce qu'il faut pour
 * qu'un attribut ARIA soit posé dès le premier rendu visible, sans image
 * intermédiaire où il manque. Mais React avertit dès qu'on l'appelle pendant
 * un rendu serveur, où il ne sert à rien.
 */
export declare const useIsomorphicLayoutEffect: typeof useEffect;
