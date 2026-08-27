import { CSSProperties } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { overlayPortalProps } from '../floating';
type SelectOverlay = {
    refs: {
        setFloating: (node: HTMLElement | null) => void;
    };
    floatingStyles: CSSProperties;
    getReferenceProps: (userProps?: object) => Record<string, unknown>;
    getFloatingProps: (userProps?: object) => Record<string, unknown>;
    portal: ReturnType<typeof overlayPortalProps>;
    setReference: (node: Element | null) => void;
};
export declare function useSelectOverlay(open: boolean, onOpenChange: (open: boolean) => void): SelectOverlay;
export declare function scrollOptionIntoView(listId: string, index: number): void;
export {};
