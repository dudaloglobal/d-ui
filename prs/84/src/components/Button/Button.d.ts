import { ButtonHTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPosition = 'start' | 'end';
export type ButtonLoadingIndicator = 'spinner' | 'bounce';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Emphase. `"primary"` est forte, `"secondary"` moyenne, `"ghost"` faible.
     * Il ne doit pas y avoir plus d’un bouton à forte emphase dans une vue.
     */
    variant?: ButtonVariant;
    /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les actions aérées. */
    size?: ButtonSize;
    /** Remplace l’icône par un indicateur, pose `aria-busy`. Le libellé reste visible. */
    loading?: boolean;
    /** `"spinner"` (défaut) ou `"bounce"` (trois points). Utilisé si `loading` est posé. */
    loadingIndicator?: ButtonLoadingIndicator;
    /** Icône décorative. Ne remplace pas le nom accessible. */
    icon?: ReactNode;
    /** Position de l’icône : `"start"` (début) ou `"end"` (fin). */
    iconPosition?: ButtonIconPosition;
    /** Étend le bouton à la largeur du conteneur. */
    fullWidth?: boolean;
    /**
     * État bascule (emphase moyenne/faible). Pose `aria-pressed`.
     * Si le libellé change déjà selon l’état, ce nom suffit.
     */
    isSelected?: boolean;
};
export declare function Button({ variant, size, type, className, disabled, loading, loadingIndicator, icon, iconPosition, fullWidth, isSelected, children, ...rest }: ButtonProps): import("react").JSX.Element;
