import { ReactElement, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { OverlayPlacement } from '../floating';
export type TooltipPlacement = OverlayPlacement;
export type TooltipProps = {
    /** Contenu non interactif. Ne pas y placer de bouton, lien ou champ. */
    content: ReactNode;
    /** Déclencheur unique (focusable). `Button` n’expose pas de ref : un wrapper sert de référence. */
    children: ReactElement;
    /** Côté préféré. Flip/shift recadrent près des bords du viewport. */
    placement?: TooltipPlacement;
    /** Ouvert contrôlé. Sinon `defaultOpen`. */
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Délai d’ouverture au survol (ms). `0` si `prefers-reduced-motion`. */
    delayMs?: number;
    /** Empêche l’ouverture. */
    disabled?: boolean;
    className?: string;
};
export declare function Tooltip({ content, children, placement, open: openProp, defaultOpen, onOpenChange, delayMs, disabled, className, }: TooltipProps): import("react").JSX.Element;
