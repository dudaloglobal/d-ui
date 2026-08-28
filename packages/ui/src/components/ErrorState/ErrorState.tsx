import type { HTMLAttributes, ReactNode } from 'react';
import { FeedbackPlaceholder } from '../feedback/FeedbackPlaceholder';

export type ErrorStateProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  /**
   * Pose `role="alert"` quand l’échec apparaît après le chargement.
   * Laissez `false` pour un écran d’erreur statique.
   */
  live?: boolean;
};

function DefaultErrorIcon() {
  return (
    <svg
      width="2.5rem"
      height="2.5rem"
      viewBox="0 0 24 24"
      fill="none"
      className="text-danger"
      aria-hidden="true"
    >
      <path
        d="M12 3.5 20.5 19.5H3.5L12 3.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.5v4.5M12 16.75v.01"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Placeholder pour un échec de chargement ou une action impossible.
 */
export function ErrorState({
  title,
  description,
  icon,
  actions,
  live = false,
  ...rest
}: ErrorStateProps) {
  return (
    <FeedbackPlaceholder
      {...rest}
      role={live ? 'alert' : undefined}
      title={title}
      description={description}
      icon={icon ?? <DefaultErrorIcon />}
      actions={actions}
    />
  );
}
