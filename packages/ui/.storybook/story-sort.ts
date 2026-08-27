/** Sidebar order: Introduction first, then Components A–Z. Stories keep file order.
 *  Keep in sync with the inline `storySort` in preview.tsx (Storybook requires it inline). */
export function sortSidebarStories(a: { title: string }, b: { title: string }): number {
  const aRoot = a.title.split('/')[0] ?? '';
  const bRoot = b.title.split('/')[0] ?? '';
  if (aRoot !== bRoot) {
    if (aRoot === 'Introduction') return -1;
    if (bRoot === 'Introduction') return 1;
    return aRoot.localeCompare(bRoot, 'en');
  }
  const aComponent = a.title.split('/').slice(1).join('/');
  const bComponent = b.title.split('/').slice(1).join('/');
  if (aComponent !== bComponent) {
    return aComponent.localeCompare(bComponent, 'en', {
      numeric: true,
      sensitivity: 'base',
    });
  }
  return 0;
}
