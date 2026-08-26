/**
 * Storybook docs "Show code": the real package import and the public
 * component, not story wrappers (`DefaultDemo`, `Labeled`, …).
 */
export function componentSource(imported: string, jsx: string, prelude = '') {
  const trimmed = jsx.trim();
  const wrapFragment = trimmed.includes('\n') && !trimmed.startsWith('<>');
  const inner = wrapFragment ? `<>\n${indent(trimmed, 4)}\n</>` : trimmed;
  const extra = prelude ? `${prelude}\n\n` : '';

  return {
    docs: {
      source: {
        language: 'tsx' as const,
        code: `${imported}\n\n${extra}export default () => (\n${indent(inner, 4)}\n);\n`,
      },
    },
  };
}

export function componentSourceFn(imported: string, body: string) {
  return {
    docs: {
      source: {
        language: 'tsx' as const,
        code: `${imported}\n\nexport default () => {\n${indent(body.trim(), 4)}\n};\n`,
      },
    },
  };
}

export const plusIconSource = `const plus = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
);`;

export const chevronIconSource = `const chevron = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);`;

export const searchIconSource = `const search = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="4.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);`;

function indent(text: string, spaces: number): string {
  const pad = ' '.repeat(spaces);
  return text
    .split('\n')
    .map((line) => (line.length ? pad + line : line))
    .join('\n');
}
