import type { HTMLAttributes } from 'react';
import { Text } from '../Text/Text';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useFieldContext } from './FieldContext';

export type FieldDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * Aide à la saisie, annoncée via `aria-describedby`.
 *
 * S'enregistre auprès du `Field` pour que le contrôle ne référence que des
 * identifiants réellement présents dans le DOM. L'enregistrement a lieu avant
 * la peinture : avec un `useEffect`, le premier rendu visible sortirait sans
 * `aria-describedby` alors que le nœud est déjà dans le document.
 */
export function FieldDescription({ className, ...rest }: FieldDescriptionProps) {
  const field = useFieldContext('FieldDescription');
  const { setHasDescription } = field;

  useIsomorphicLayoutEffect(() => {
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
