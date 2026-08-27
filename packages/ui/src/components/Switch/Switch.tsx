import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId, useState } from 'react';
import { cx } from '../../lib/cx';
import {
  SelectionCaption,
  mergeDescribedBy,
  nativeControlClass,
  switchThumbClass,
  switchTrackClass,
  type SelectionSize,
} from '../selectionControl';

export type SwitchSize = SelectionSize;

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
  /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
  size?: SwitchSize;
  /** Libellé visible à côté de l’interrupteur. Sinon, `aria-label` ou `aria-labelledby`. */
  label?: ReactNode;
  /** Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide. */
  helper?: ReactNode;
  /** Message d’erreur. Pose aussi `aria-invalid`. */
  error?: ReactNode;
  /** État d’erreur : `aria-invalid`. */
  invalid?: boolean;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  {
    id,
    size = 'md',
    label,
    helper,
    error,
    invalid = false,
    className,
    disabled,
    required,
    checked,
    defaultChecked,
    onChange,
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedBy,
    ...rest
  },
  ref,
) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const helperId = `${generatedId}-helper`;
  const isControlled = checked !== undefined;
  const [uncontrolled, setUncontrolled] = useState(Boolean(defaultChecked));
  const isOn = isControlled ? Boolean(checked) : uncontrolled;
  const isInvalid =
    Boolean(invalid) || Boolean(error) || ariaInvalid === true || ariaInvalid === 'true';
  const description = isInvalid ? error : helper;
  const describedBy = mergeDescribedBy(
    ariaDescribedBy,
    description ? helperId : undefined,
  );

  return (
    <div className={cx('flex min-w-0 flex-col', className)}>
      <label
        htmlFor={controlId}
        className={cx(
          'inline-flex max-w-full items-center gap-2 text-sm leading-5',
          disabled ? 'text-fg/40' : 'text-fg',
        )}
      >
        <span
          className={cx(
            'relative inline-flex shrink-0 items-center',
            switchTrackClass[size],
          )}
        >
          <input
            {...rest}
            ref={ref}
            id={controlId}
            type="checkbox"
            role="switch"
            disabled={disabled}
            required={required}
            checked={isOn}
            aria-checked={isOn}
            aria-invalid={isInvalid || undefined}
            aria-describedby={describedBy}
            onChange={(event) => {
              if (!isControlled) setUncontrolled(event.target.checked);
              onChange?.(event);
            }}
            className={cx(nativeControlClass, 'peer')}
          />
          <span
            aria-hidden="true"
            className={cx(
              'pointer-events-none absolute inset-0 rounded-full',
              'bg-fg/20',
              'peer-hover:bg-fg/30 peer-focus-visible:ring-2 peer-focus-visible:ring-focus',
              'peer-checked:bg-brand peer-checked:ring-brand',
              isInvalid
                ? 'ring-2 ring-inset ring-danger peer-checked:ring-danger'
                : 'ring-1 ring-inset ring-fg/20',
              disabled && 'opacity-50',
            )}
          />
          <span
            aria-hidden="true"
            className={cx(
              'pointer-events-none z-[1] rounded-full bg-white',
              'transition-transform motion-reduce:transition-none',
              switchThumbClass[size],
            )}
          />
        </span>
        {label ? (
          <span className="min-w-0">
            {label}
            {required ? <span aria-hidden="true"> *</span> : null}
          </span>
        ) : null}
      </label>
      <SelectionCaption id={helperId} invalid={isInvalid} error={error} helper={helper} />
    </div>
  );
});
