/** Encode une chaîne comme littéral JavaScript complet pour les snippets Storybook. */
export function javascriptStringLiteral(value: string): string {
  const escaped = value.replace(/['\\]/g, (character) => `\\${character}`);
  return `'${escaped}'`;
}
