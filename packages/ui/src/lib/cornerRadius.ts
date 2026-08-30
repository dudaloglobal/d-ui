/** Arrondi des coins des surfaces (boutons, panneaux flottants, etc.). */
export type CornerRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export const cornerRadiusClass: Record<CornerRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};
