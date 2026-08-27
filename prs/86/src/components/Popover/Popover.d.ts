import { ReactElement, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { OverlayPlacement } from '../floating';
export type PopoverPlacement = OverlayPlacement;
export type PopoverProps = {
    /** Contenu du panneau. */
    content: ReactNode;
    /** Déclencheur unique (focusable). */
    children: ReactElement;
    /** Côté préféré. Flip/shift recadrent près des bords du viewport. */
    placement?: PopoverPlacement;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /**
     * Piège le focus dans le panneau (rôle `dialog`).
     * À passer lorsque le contenu est interactif (boutons, champs).
     */
    trapFocus?: boolean;
    /** Empêche l’ouverture. */
    disabled?: boolean;
    className?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
};
export declare function Popover({ content, children, placement, open: openProp, defaultOpen, onOpenChange, trapFocus, disabled, className, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, }: PopoverProps): import("react").JSX.Element;
