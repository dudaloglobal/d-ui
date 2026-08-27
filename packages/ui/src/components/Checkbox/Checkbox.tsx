import type { InputHTMLAttributes, ReactNode } from 'react';
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { cx } from '../../lib/cx';
import {
  CheckMark,
  GroupFieldset,
  IndeterminateMark,
  SelectionCaption,
  boxSizeClass,
  mergeDescribedBy,
  nativeControlClass,
  type SelectionSize,
} from '../selectionControl';

export type CheckboxSize = SelectionSize;

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> & {
  /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
  size?: CheckboxSize;
  /** Libellé visible à côté de la case. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`. */
  label?: ReactNode;
  /** Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide. */
  helper?: ReactNode;
  /** Message d’erreur. Pose aussi `aria-invalid`. */
  error?: ReactNode;
  /** État d’erreur : `aria-invalid`. */
  invalid?: boolean;
  /** État mixte (ni coché ni décoché). Pose `indeterminate` et `aria-checked="mixed"`. */
  indeterminate?: boolean;
};

type CheckboxGroupContextValue = {
  name?: string;
  value: string[];
  disabled?: boolean;
  invalid?: boolean;
  size?: CheckboxSize;
  required?: boolean;
  helperId?: string;
  setValue: (next: string[]) => void;
};

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

export type CheckboxGroupProps = {
  /** Légende du groupe (`<legend>`). */
  label?: ReactNode;
  name?: string;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  helper?: ReactNode;
  error?: ReactNode;
  size?: CheckboxSize;
  orientation?: 'vertical' | 'horizontal';
  children: ReactNode;
};

export function CheckboxGroup({
  label,
  name,
  value: valueProp,
  defaultValue = [],
  onChange,
  disabled,
  required,
  invalid = false,
  helper,
  error,
  size = 'md',
  orientation = 'vertical',
  children,
}: CheckboxGroupProps) {
  const generatedId = useId();
  const helperId = `${generatedId}-helper`;
  const isControlled = valueProp !== undefined;
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = isControlled ? valueProp : uncontrolled;
  const isInvalid = Boolean(invalid) || Boolean(error);
  const description = isInvalid ? error : helper;

  function setValue(next: string[]) {
    if (!isControlled) setUncontrolled(next);
    onChange?.(next);
  }

  return (
    <CheckboxGroupContext.Provider
      value={{
        name,
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
    </CheckboxGroupContext.Provider>
  );
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    id,
    size = 'md',
    label,
    helper,
    error,
    invalid = false,
    indeterminate = false,
    className,
    disabled,
    required,
    checked,
    defaultChecked,
    value,
    onChange,
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedBy,
    ...rest
  },
  ref,
) {
  const group = useContext(CheckboxGroupContext);
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const helperId = `${generatedId}-helper`;
  const innerRef = useRef<HTMLInputElement | null>(null);
  const inGroup = group != null && value != null;
  const groupChecked = inGroup ? group.value.includes(String(value)) : undefined;
  const isInvalid =
    Boolean(invalid) ||
    Boolean(error) ||
    Boolean(group?.invalid) ||
    ariaInvalid === true ||
    ariaInvalid === 'true';
  const isDisabled = Boolean(disabled || group?.disabled);
  const isRequired = Boolean(required || (inGroup && group?.required));
  const resolvedSize = group?.size ?? size;
  const description = isInvalid ? error : helper;
  const describedBy = mergeDescribedBy(
    ariaDescribedBy,
    description ? helperId : undefined,
    inGroup ? group?.helperId : undefined,
  );

  useEffect(() => {
    const node = innerRef.current;
    if (node) node.indeterminate = indeterminate;
  }, [indeterminate]);

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
            ref={(node) => {
              innerRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) ref.current = node;
            }}
            id={controlId}
            type="checkbox"
            name={rest.name ?? group?.name}
            value={value}
            disabled={isDisabled}
            required={inGroup ? undefined : isRequired}
            checked={inGroup ? groupChecked : checked}
            defaultChecked={inGroup ? undefined : defaultChecked}
            aria-invalid={isInvalid || undefined}
            aria-checked={indeterminate ? 'mixed' : undefined}
            aria-describedby={describedBy}
            onChange={(event) => {
              if (inGroup) {
                const next = event.target.checked
                  ? group.value.includes(String(value))
                    ? group.value
                    : [...group.value, String(value)]
                  : group.value.filter((item) => item !== String(value));
                group.setValue(next);
              }
              onChange?.(event);
            }}
            className={cx(nativeControlClass, 'peer')}
          />
          <span
            aria-hidden="true"
            className={cx(
              'pointer-events-none flex size-full items-center justify-center rounded-sm text-on-brand',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-focus',
              indeterminate
                ? cx(
                    'bg-brand [&_svg]:block',
                    isInvalid
                      ? 'ring-2 ring-inset ring-danger'
                      : 'ring-2 ring-inset ring-brand',
                  )
                : cx(
                    'bg-field [&_svg]:hidden peer-checked:[&_svg]:block peer-checked:bg-brand',
                    'peer-hover:bg-field-hover peer-checked:peer-hover:bg-brand',
                    isInvalid
                      ? 'ring-2 ring-inset ring-danger peer-checked:ring-danger'
                      : 'ring-1 ring-inset ring-fg/40 peer-checked:ring-brand',
                  ),
              isDisabled && 'opacity-50',
            )}
          >
            {indeterminate ? <IndeterminateMark /> : <CheckMark />}
          </span>
        </span>
        {label ? (
          <span className="min-w-0">
            {label}
            {isRequired && !inGroup ? <span aria-hidden="true"> *</span> : null}
          </span>
        ) : null}
      </label>
      {!inGroup ? (
        <SelectionCaption
          id={helperId}
          invalid={isInvalid}
          error={error}
          helper={helper}
        />
      ) : null}
    </div>
  );
});
