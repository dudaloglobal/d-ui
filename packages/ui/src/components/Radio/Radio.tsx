import type { InputHTMLAttributes, ReactNode } from 'react';
import { createContext, forwardRef, useContext, useId, useState } from 'react';
import { cx } from '../../lib/cx';
import {
  GroupFieldset,
  RadioDot,
  boxSizeClass,
  mergeDescribedBy,
  nativeControlClass,
  type SelectionSize,
} from '../selectionControl';

export type RadioSize = SelectionSize;

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
  /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
  size?: RadioSize;
  /** Libellé visible à côté du bouton radio. */
  label?: ReactNode;
  /** Valeur envoyée avec le groupe. Obligatoire dans un `RadioGroup`. */
  value: string;
};

type RadioGroupContextValue = {
  name: string;
  value?: string;
  disabled?: boolean;
  invalid?: boolean;
  size?: RadioSize;
  required?: boolean;
  helperId?: string;
  setValue: (next: string) => void;
};

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export type RadioGroupProps = {
  /** Légende du groupe (`<legend>`). */
  label?: ReactNode;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  helper?: ReactNode;
  error?: ReactNode;
  size?: RadioSize;
  orientation?: 'vertical' | 'horizontal';
  children: ReactNode;
};

export function RadioGroup({
  label,
  name,
  value: valueProp,
  defaultValue,
  onChange,
  disabled,
  required,
  invalid = false,
  helper,
  error,
  size = 'md',
  orientation = 'vertical',
  children,
}: RadioGroupProps) {
  const generatedId = useId();
  const helperId = `${generatedId}-helper`;
  const groupName = name ?? generatedId;
  const isControlled = valueProp !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? valueProp : uncontrolled;
  const isInvalid = Boolean(invalid) || Boolean(error);
  const description = isInvalid ? error : helper;

  function setValue(next: string) {
    if (!isControlled) setUncontrolled(next);
    onChange?.(next);
  }

  return (
    <RadioGroupContext.Provider
      value={{
        name: groupName,
        value,
        disabled,
        invalid: isInvalid,
        size,
        required,
        helperId: description ? helperId : undefined,
        setValue,
      }}
    >
      <GroupFieldset
        legend={label}
        required={required}
        disabled={disabled}
        invalid={isInvalid}
        helper={helper}
        error={error}
        helperId={helperId}
        orientation={orientation}
      >
        {children}
      </GroupFieldset>
    </RadioGroupContext.Provider>
  );
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    id,
    size = 'md',
    label,
    value,
    className,
    disabled,
    required,
    checked,
    defaultChecked,
    onChange,
    name,
    'aria-describedby': ariaDescribedBy,
    ...rest
  },
  ref,
) {
  const group = useContext(RadioGroupContext);
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const isInvalid = Boolean(group?.invalid);
  const isDisabled = Boolean(disabled || group?.disabled);
  const resolvedSize = group?.size ?? size;
  const groupChecked = group ? group.value === value : undefined;

  return (
    <div className={cx('flex min-w-0 flex-col', className)}>
      <label
        htmlFor={controlId}
        className={cx(
          'inline-flex max-w-full items-center gap-2 text-sm leading-5',
          isDisabled ? 'text-fg/40' : 'text-fg',
        )}
      >
        <span className={cx('relative inline-flex shrink-0', boxSizeClass[resolvedSize])}>
          <input
            {...rest}
            ref={ref}
            id={controlId}
            type="radio"
            name={group?.name ?? name}
            value={value}
            disabled={isDisabled}
            required={group?.required || required}
            checked={group ? groupChecked : checked}
            defaultChecked={group ? undefined : defaultChecked}
            aria-describedby={mergeDescribedBy(ariaDescribedBy, group?.helperId)}
            onChange={(event) => {
              group?.setValue(event.target.value);
              onChange?.(event);
            }}
            className={cx(nativeControlClass, 'peer')}
          />
          <span
            aria-hidden="true"
            className={cx(
              'pointer-events-none flex size-full items-center justify-center rounded-full',
              'bg-field text-on-brand',
              'peer-hover:bg-field-hover peer-focus-visible:ring-2 peer-focus-visible:ring-focus',
              '[&_.d-ui-radio-dot]:hidden peer-checked:[&_.d-ui-radio-dot]:block',
              'peer-checked:bg-brand peer-checked:ring-brand',
              isInvalid
                ? 'ring-2 ring-inset ring-danger peer-checked:ring-danger'
                : 'ring-1 ring-inset ring-fg/40',
              isDisabled && 'opacity-50',
            )}
          >
            <RadioDot />
          </span>
        </span>
        {label ? <span className="min-w-0">{label}</span> : null}
      </label>
    </div>
  );
});
