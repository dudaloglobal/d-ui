import type { HTMLAttributes } from 'react';
import { useEffect } from 'react';
import { Text } from '../Text/Text';
import { useFieldContext } from './FieldContext';

export type FieldErrorProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * Message d'erreur du champ.
 *
 * Ne rend rien tant que `Field` n'est pas `invalid` : un message d'erreur
 * présent dans le DOM mais masqué visuellement reste annoncé par les lecteurs
 * d'écran.
 *
 * Porte `role="alert"` pour que l'erreur soit annoncée à son apparition, sans
 * attendre que l'utilisateur revienne sur le champ.
 */
export function FieldError({ className, children, ...rest }: FieldErrorProps) {
  const field = useFieldContext('FieldError');
  const { setHasError, invalid } = field;

  useEffect(() => {
    if (!invalid) {
      return;
    }
    setHasError(true);
    return () => setHasError(false);
  }, [invalid, setHasError]);

  if (!invalid) {
    return null;
  }

  return (
    <Text
      {...rest}
      id={field.errorId}
      role="alert"
      size="body-sm"
      tone="danger"
      className={className}
    >
      {children}
    </Text>
  );
}
