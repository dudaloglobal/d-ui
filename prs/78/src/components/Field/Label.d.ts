import { HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
/**
 * `htmlFor` et `id` sont pilotés par `Field` : les surcharger casserait
 * l'association entre le libellé et son contrôle.
 */
export type LabelProps = Omit<HTMLAttributes<HTMLElement>, 'htmlFor' | 'id'>;
/**
 * Libellé du champ.
 *
 * Dans un `Field group`, rend un `legend` : un groupe de contrôles se nomme par
 * sa légende. Ailleurs, un `label` lié au contrôle par `for`.
 *
 * L'astérisque de champ requis est décoratif (`aria-hidden`) : c'est l'attribut
 * `required` posé sur le contrôle qui porte l'information pour les lecteurs
 * d'écran. Doubler les deux ferait annoncer « requis » deux fois.
 */
export declare function Label({ className, children, ...rest }: LabelProps): import("react").JSX.Element;
