import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId, useState } from 'react';
import {
  ChromeButton,
  ClearIcon,
  EyeIcon,
  EyeOffIcon,
  StatusIcon,
  TextFieldLayout,
  defaultCountMessage,
  mergeDescribedBy,
  nativeInputClass,
  stringifyValue,
  type TextControlSize,
} from '../textControl';

export type TextInputSize = TextControlSize;
export type TextInputType =
  'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'prefix' | 'size' | 'type'
> & {
  /** Type HTML : `text`, `email`, `password`, `search`, `number`, `tel`, `url`. */
  type?: TextInputType;
  /** `"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés. */
  size?: TextInputSize;
  /** Libellé visible au-dessus du champ. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`. */
  label?: ReactNode;
  /** Texte d’aide sous le champ. Remplacé par `error` si le champ est invalide. */
  helper?: ReactNode;
  /** Message d’erreur sous le champ. Pose aussi `aria-invalid`. */
  error?: ReactNode;
  /** État d’erreur : `aria-invalid`. Même nom que `Field` (`invalid`). */
  invalid?: boolean;
  /** État de succès : contour vert et icône. Ignoré si `invalid`. */
  valid?: boolean;
  /** Icône décorative au début du champ. Complète `label`, ne le remplace pas. */
  icon?: ReactNode;
  /** Contenu au début du champ (unité, schéma d’URL). Ne remplace pas le libellé. */
  prefix?: ReactNode;
  /** Contenu à la fin du champ. Ne remplace pas le libellé. */
  suffix?: ReactNode;
  /** Étend le champ à la largeur du conteneur. Défaut : `true`. */
  fullWidth?: boolean;
  /** Halo de focus (ombre douce). Inactif sauf si `true`. */
  focusShadow?: boolean;
  /** Bouton d’effacement dès que la valeur n’est pas vide. */
  clearable?: boolean;
  onClear?: () => void;
  /** Nom accessible du bouton d’effacement. Défaut `"Effacer"`. */
  clearLabel?: string;
  /**
   * Compteur de caractères (restants si `maxLength` est posé).
   * Activé par défaut avec `maxLength`. Lié via `aria-describedby`.
   */
  showCount?: boolean;
  /** Libellé du compteur. Reçoit le nombre de caractères et `maxLength`. */
  countMessage?: (count: number, maxLength?: number) => string;
  /** Nom accessible pour afficher le mot de passe. Défaut `"Afficher le mot de passe"`. */
  revealPasswordLabel?: string;
  /** Nom accessible pour masquer le mot de passe. Défaut `"Masquer le mot de passe"`. */
  hidePasswordLabel?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  {
    id,
    type = 'text',
    size = 'md',
    label,
    helper,
    error,
    invalid = false,
    valid = false,
    icon,
    prefix,
    suffix,
    fullWidth = true,
    focusShadow,
    clearable = false,
    onClear,
    clearLabel = 'Effacer',
    showCount,
    countMessage = defaultCountMessage,
    revealPasswordLabel = 'Afficher le mot de passe',
    hidePasswordLabel = 'Masquer le mot de passe',
    className,
    disabled,
    readOnly,
    required,
    value,
    defaultValue,
    onChange,
    maxLength,
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedBy,
    ...rest
  }: TextInputProps,
  ref,
) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const countId = `${generatedId}-count`;
  const helperId = `${generatedId}-helper`;
  const isControlled = value !== undefined;
  const [uncontrolled, setUncontrolled] = useState(() => stringifyValue(defaultValue));
  const [passwordVisible, setPasswordVisible] = useState(false);
  const current = isControlled ? stringifyValue(value) : uncontrolled;
  const isInvalid =
    Boolean(invalid) || Boolean(error) || ariaInvalid === true || ariaInvalid === 'true';
  const isPassword = type === 'password';
  const showClear = clearable && current.length > 0 && !disabled && !readOnly;
  const displayCount = showCount ?? maxLength != null;
  const description = isInvalid ? error : helper;
  const inputType = isPassword && passwordVisible ? 'text' : type;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!isControlled) setUncontrolled(event.target.value);
    onChange?.(event);
  }

  function handleClear() {
    if (!isControlled) setUncontrolled('');
    onClear?.();
    onChange?.({
      target: { value: '', name: rest.name },
      currentTarget: { value: '', name: rest.name },
    } as ChangeEvent<HTMLInputElement>);
  }

  return (
    <TextFieldLayout
      id={controlId}
      label={label}
      helper={helper}
      error={error}
      required={required}
      invalid={isInvalid}
      valid={valid}
      disabled={Boolean(disabled)}
      fullWidth={fullWidth}
      focusShadow={focusShadow}
      size={size}
      className={className}
      showCount={displayCount}
      count={current.length}
      maxLength={maxLength}
      countMessage={countMessage}
      countId={countId}
      helperId={helperId}
    >
      {icon ? (
        <span className="inline-flex shrink-0 text-fg/70" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {prefix ? <span className="inline-flex shrink-0 text-fg/70">{prefix}</span> : null}
      <input
        {...rest}
        ref={ref}
        id={controlId}
        type={inputType}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        value={current}
        maxLength={maxLength}
        aria-invalid={isInvalid || undefined}
        aria-describedby={mergeDescribedBy(
          ariaDescribedBy,
          displayCount && countId,
          description ? helperId : undefined,
        )}
        onChange={handleChange}
        className={nativeInputClass}
      />
      {showClear ? (
        <ChromeButton label={clearLabel} disabled={disabled} onClick={handleClear}>
          <ClearIcon />
        </ChromeButton>
      ) : null}
      {isPassword ? (
        <ChromeButton
          label={passwordVisible ? hidePasswordLabel : revealPasswordLabel}
          pressed={passwordVisible}
          disabled={disabled}
          onClick={() => setPasswordVisible((visible) => !visible)}
        >
          {passwordVisible ? <EyeOffIcon /> : <EyeIcon />}
        </ChromeButton>
      ) : null}
      <StatusIcon invalid={isInvalid} valid={valid} />
      {suffix ? <span className="inline-flex shrink-0 text-fg/70">{suffix}</span> : null}
    </TextFieldLayout>
  );
});
