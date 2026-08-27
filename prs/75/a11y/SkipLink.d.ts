import { AnchorHTMLAttributes } from '../../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type SkipLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href?: `#${string}`;
};
/**
 * First focusable control in an app shell. Visible on keyboard focus only.
 * Point `href` at a landmark that is already focusable, e.g.
 * `<main id="main" tabIndex={-1}>`.
 *
 * If the target cannot take focus, the click is not cancelled so the browser
 * can still follow the hash.
 */
export declare function SkipLink({ href, className, children, onClick, ...rest }: SkipLinkProps): import("react").JSX.Element;
