import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../lib/cx';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

export type FeedbackPlaceholderProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  illustration?: ReactNode;
  actions?: ReactNode;
};

export function FeedbackPlaceholder({
  title,
  description,
  icon,
  illustration,
  actions,
  className,
  ...rest
}: FeedbackPlaceholderProps) {
  const titleId = useId();

  return (
    <div
      {...rest}
      aria-labelledby={titleId}
      className={cx('flex flex-col items-center gap-4 px-4 py-10 text-center', className)}
    >
      {illustration}
      {icon ? (
        <div className="inline-flex shrink-0 [&_svg]:block" aria-hidden="true">
          {icon}
        </div>
      ) : null}
      <Heading level={2} size="subtitle" id={titleId}>
        {title}
      </Heading>
      {description ? (
        <Text as="div" tone="muted" size="body-sm" className="max-w-md">
          {description}
        </Text>
      ) : null}
      {actions ? (
        <div className="flex flex-wrap items-center justify-center gap-2">{actions}</div>
      ) : null}
    </div>
  );
}
