import { ReactNode, Ref } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { SelectItem, SelectOption, SelectOptionGroup } from './selectOptions';
export declare function SelectOptionIcon({ icon }: {
    icon?: ReactNode;
}): import("react").JSX.Element | null;
export type ComboboxListStatus = 'idle' | 'loading' | 'loadingMore' | 'error';
export declare function SelectListbox({ id, labelId, labelledBy, ariaLabel, items, activeIndex, selectedValues, emptyMessage, listRef, setActiveIndex, onSelect, multiple, listStatus, listErrorMessage, listErrorRetryMessage, beforeOptions, renderOption, renderSectionTitle, }: {
    id: string;
    labelId?: string;
    labelledBy?: string;
    ariaLabel?: string;
    items: readonly SelectItem[];
    activeIndex: number;
    selectedValues: readonly string[];
    emptyMessage: ReactNode;
    listRef: Ref<HTMLDivElement>;
    setActiveIndex: (index: number) => void;
    onSelect: (value: string) => void;
    multiple?: boolean;
    listStatus?: ComboboxListStatus;
    listErrorMessage?: ReactNode;
    listErrorRetryMessage?: ReactNode;
    beforeOptions?: ReactNode;
    renderOption?: (option: SelectOption, selected: boolean) => ReactNode;
    renderSectionTitle?: (group: SelectOptionGroup) => ReactNode;
}): import("react").JSX.Element;
export declare function NativeSelectMirror({ name, form, required, disabled, value, items, multiple, }: {
    name?: string;
    form?: string;
    required?: boolean;
    disabled?: boolean;
    value?: string | readonly string[];
    items: readonly SelectItem[];
    multiple?: boolean;
}): import("react").JSX.Element | null;
export declare function ChevronIcon(): import("react").JSX.Element;
