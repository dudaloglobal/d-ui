const BRAND = 'Dudalo Design System';

export function pageTitleForComponent(name?: string): string {
  const trimmed = name?.trim();
  return trimmed ? `${trimmed} | ${BRAND}` : BRAND;
}

export function componentNameFromKind(kind?: string): string | undefined {
  const name = kind?.split('/').filter(Boolean).at(-1)?.trim();
  return name || undefined;
}

/** Storybook manager title, e.g. "Components / TextInput - Docs ⋅ Storybook". */
export function componentNameFromDocumentTitle(title: string): string | undefined {
  if (title === BRAND) return undefined;
  if (title.includes(`| ${BRAND}`)) {
    return title.split('|')[0]?.trim() || undefined;
  }
  const withoutBrand = title.replace(/\s*[⋅·].*$/, '').trim();
  const withoutStory = withoutBrand.replace(/\s+-\s+[^-]+$/, '').trim();
  const last = withoutStory.split(' / ').filter(Boolean).at(-1)?.trim();
  return last || undefined;
}

export function dudaloDocumentTitle(kind?: string, currentTitle?: string): string {
  return pageTitleForComponent(
    componentNameFromKind(kind) ??
      (currentTitle ? componentNameFromDocumentTitle(currentTitle) : undefined),
  );
}
