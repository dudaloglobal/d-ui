import { ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type SelectOption = {
    value: string;
    label: ReactNode;
    disabled?: boolean;
};
export type SelectOptionGroup = {
    label: string;
    options: SelectOption[];
};
export type SelectItem = SelectOption | SelectOptionGroup;
export type FlatOption = SelectOption & {
    group?: string;
};
export declare function isSelectGroup(item: SelectItem): item is SelectOptionGroup;
export declare function optionText(label: ReactNode): string;
export declare function flattenSelectItems(items: readonly SelectItem[]): FlatOption[];
export declare function filterSelectItems(items: readonly SelectItem[], query: string): SelectItem[];
export declare function findOptionIndex(options: readonly FlatOption[], value: string | undefined): number;
export declare function nextEnabledIndex(options: readonly FlatOption[], from: number, delta: number): number;
export declare function matchTypeahead(options: readonly FlatOption[], query: string, startIndex: number): number;
