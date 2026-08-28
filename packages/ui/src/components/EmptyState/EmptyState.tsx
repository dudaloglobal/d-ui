import type { HTMLAttributes, ReactNode } from 'react';
import { FeedbackPlaceholder } from '../feedback/FeedbackPlaceholder';

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  illustration?: ReactNode;
  actions?: ReactNode;
};

/**
 * Placeholder quand une liste ou une vue n’a pas encore de contenu.
 */
export function EmptyState({
  title,
  description,
  icon,
  illustration,
  actions,
  ...rest
}: EmptyStateProps) {
  return (
    <FeedbackPlaceholder
      {...rest}
      title={title}
      description={description}
      icon={icon}
      illustration={illustration}
      actions={actions}
    />
  );
}
