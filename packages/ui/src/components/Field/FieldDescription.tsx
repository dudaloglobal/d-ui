import type { HTMLAttributes } from 'react';
import { useEffect } from 'react';
import { Text } from '../Text/Text';
import { useFieldContext } from './FieldContext';

export type FieldDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * Aide à la saisie, annoncée via `aria-describedby`.
 *
 * S'enregistre auprès du `Field` pour que le contrôle ne référence que des
 * identifiants réellement présents dans le DOM.
 */
export function FieldDescription({ className, ...rest }: FieldDescriptionProps) {
  const field = useFieldContext('FieldDescription');
  const { setHasDescription } = field;

  useEffect(() => {
    setHasDescription(true);
    return () => setHasDescription(false);
  }, [setHasDescription]);

  return (
    <Text
      {...rest}
      id={field.descriptionId}
      size="body-sm"
      tone="muted"
      className={className}
    />
  );
}
