import { HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type TextSize = 'body' | 'body-sm' | 'caption';
export type TextTone = 'default' | 'muted';
export type TextWeight = 'regular' | 'medium' | 'semibold';
export type TextElement = 'p' | 'span' | 'div' | 'label' | 'legend';
export type TextProps = HTMLAttributes<HTMLElement> & {
    /** Élément rendu. `p` par défaut — passer `span` pour du texte en ligne. */
    as?: TextElement;
    size?: TextSize;
    tone?: TextTone;
    weight?: TextWeight;
};
/**
 * Texte courant du design system.
 *
 * `tone="muted"` reste au-dessus de 4.5:1 dans les deux thèmes : c'est une
 * nuance de hiérarchie, pas une permission de baisser le contraste.
 */
export declare function Text({ as, size, tone, weight, className, ...rest }: TextProps): import("react").JSX.Element;
