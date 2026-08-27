import { ReactNode } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type SelectionSize = 'sm' | 'md' | 'lg';
export declare const boxSizeClass: Record<SelectionSize, string>;
export declare const switchTrackClass: Record<SelectionSize, string>;
export declare const switchThumbClass: Record<SelectionSize, string>;
export declare const nativeControlClass = "absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed";
export declare function mergeDescribedBy(...ids: Array<string | undefined | false>): string | undefined;
export declare function CheckMark(): import("react").JSX.Element;
export declare function IndeterminateMark(): import("react").JSX.Element;
export declare function RadioDot(): import("react").JSX.Element;
export declare function SelectionCaption({ id, invalid, error, helper, }: {
    id: string;
    invalid: boolean;
    error?: ReactNode;
    helper?: ReactNode;
}): import("react").JSX.Element | null;
export declare function GroupFieldset({ legend, required, disabled, invalid, helper, error, helperId, orientation, children, }: {
    legend?: ReactNode;
    required?: boolean;
    disabled?: boolean;
    invalid: boolean;
    helper?: ReactNode;
    error?: ReactNode;
    helperId: string;
    orientation?: 'vertical' | 'horizontal';
    children: ReactNode;
}): import("react").JSX.Element;
