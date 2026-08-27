import { ReactNode, Ref } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { SelectItem } from './selectOptions';
export declare function SelectListbox({ id, labelId, labelledBy, ariaLabel, items, activeIndex, selectedValue, emptyMessage, listRef, setActiveIndex, onSelect, }: {
    id: string;
    labelId?: string;
    labelledBy?: string;
    ariaLabel?: string;
    items: readonly SelectItem[];
    activeIndex: number;
    selectedValue?: string;
    emptyMessage: ReactNode;
    listRef: Ref<HTMLDivElement>;
    setActiveIndex: (index: number) => void;
    onSelect: (value: string) => void;
}): import("react").JSX.Element;
export declare function NativeSelectMirror({ name, form, required, disabled, value, items, }: {
    name?: string;
    form?: string;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    items: readonly SelectItem[];
}): import("react").JSX.Element | null;
export declare function ChevronIcon(): import("react").JSX.Element;
