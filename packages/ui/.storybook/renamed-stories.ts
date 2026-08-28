/** Old Storybook ids → current ids after Input → TextInput / Textarea, Select → Combobox, Field → TextInput. */
const STORY_ALIASES: Record<string, string> = {
  'components-input--multiline': 'components-textarea--default',
  'components-input--textarea-valid': 'components-textarea--valid',
  'components-input--textarea-invalid': 'components-textarea--invalid',
  'components-field--with-description': 'components-textinput--helper',
  'components-field--group': 'components-textinput--default',
};

export function rewriteRenamedStoryHref(href: string): string {
  let next = href;
  for (const [from, to] of Object.entries(STORY_ALIASES)) {
    next = next.replaceAll(from, to);
  }
  return next
    .replaceAll('components-input', 'components-textinput')
    .replaceAll('components-select', 'components-combobox')
    .replaceAll('components-field', 'components-textinput');
}

export function applyRenamedStoryUrl(): void {
  if (typeof window === 'undefined') return;
  const next = rewriteRenamedStoryHref(window.location.href);
  if (next !== window.location.href) window.location.replace(next);
}
