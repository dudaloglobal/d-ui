import { TimeHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type TimeAgoSize = 'sm' | 'md';
export type TimeAgoProps = Omit<TimeHTMLAttributes<HTMLTimeElement>, 'children' | 'dateTime'> & {
    /**
     * Instant to display. Accepts a `Date`, an ISO-8601 string, or epoch
     * milliseconds. Invalid values render a non-`<time>` fallback.
     */
    date: Date | string | number;
    /**
     * BCP 47 locale for relative and absolute copy (`fr`, `en-US`, …).
     * Also sets `lang` on the element (WCAG 3.1.2). Defaults to the runtime locale.
     */
    locale?: Intl.LocalesArgument;
    /**
     * When `true`, refresh the relative text on a coarse interval.
     * Updates are visual only — no `aria-live` — so assistive tech is not flooded.
     * Pass `aria-live="polite"` to opt into announcements.
     */
    live?: boolean;
    /** Text size. `'md'` by default. */
    size?: TimeAgoSize;
};
export declare function TimeAgo({ date, locale, live, size, className, title, lang, ...rest }: TimeAgoProps): import("react").JSX.Element;
