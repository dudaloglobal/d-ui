import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { sortableListArgTypes } from '../../../.storybook/arg-types';
import { componentSourceFn } from '../../../.storybook/docs-source';
import {
  docsLocale,
  sortableCopy,
  type SortableDocsCopy,
} from '../../../.storybook/docs-locale';
import { IconButton } from '../Button/IconButton';
import { Text } from '../Text/Text';
import { DragHandle, type DragHandleSize } from './DragHandle';
import {
  SortableItem,
  SortableList,
  type SortableListElement,
  type SortableOrientation,
} from './Sortable';
import { moveSortableItem, type SortableMessages } from './sortableMessages';

const importSortable =
  "import { useState } from 'react';\nimport { DragHandle, SortableItem, SortableList } from 'd-ui';";

const messagesSource = [
  'const messages = {',
  '    handle: (label) => `Réordonner ${label}`,',
  "    instructions: 'Espace ou Entrée pour saisir, flèches pour déplacer, Espace ou Entrée pour déposer, Échap pour annuler.',",
  '    pickedUp: ({ label, from, count }) => `${label} saisi. Position ${from} sur ${count}.`,',
  '    moved: ({ label, to, count }) => `${label} déplacé en position ${to} sur ${count}.`,',
  '    dropped: ({ label, to, count }) => `${label} déposé en position ${to} sur ${count}.`,',
  '    canceled: ({ label, from, count }) => `Annulé. ${label} reste en position ${from} sur ${count}.`,',
  '};',
].join('\n');

const CHAPTER_IDS = ['intro', 'vectors', 'maps', 'determinants', 'eigen'];
const TAG_IDS = ['algebra', 'analysis', 'geometry', 'probability', 'statistics'];
const WIDGET_IDS = ['progress', 'assignments', 'grades', 'agenda', 'messages', 'news'];

/** Show code stays French (docs default) and lists the same items as the French canvas. */
const frCopy = sortableCopy('fr');

function quote(value: string): string {
  return `'${value.replace(/'/g, "\\'")}'`;
}

function arraySource(values: readonly string[]): string {
  return `[${values.map(quote).join(', ')}]`;
}

function labelsSource(ids: readonly string[], labels: readonly string[]): string {
  const entries = ids.map((id, index) => `    ${id}: ${quote(labels[index] ?? id)},`);
  return `{\n${entries.join('\n')}\n}`;
}

const chaptersSource = [
  `const [chapters, setChapters] = useState(${arraySource(CHAPTER_IDS)});`,
  `const labels = ${labelsSource(CHAPTER_IDS, frCopy.chapters)};`,
].join('\n');

const messagesNote = '// messages : le même objet que dans « Par défaut ».';

function indent(text: string, spaces = 4): string {
  const pad = ' '.repeat(spaces);
  return text
    .trim()
    .split('\n')
    .map((line) => (line.length ? pad + line : line))
    .join('\n');
}

function listSource(
  jsx: string,
  prelude = `${chaptersSource}\n${messagesNote}`,
  imported = importSortable,
) {
  return componentSourceFn(imported, `${prelude}\n\nreturn (\n${indent(jsx)}\n);`);
}

const chapterListJsx = (
  extra = '',
) => `<SortableList aria-label="Chapitres"${extra} items={chapters} onReorder={setChapters} messages={messages}>
    {chapters.map((id) => (
        <SortableItem key={id} id={id} label={labels[id]}>
            <DragHandle />
            {labels[id]}
        </SortableItem>
    ))}
</SortableList>`;

function messagesOf(
  copy: SortableDocsCopy,
  onAnnounce?: (text: string) => void,
): Partial<SortableMessages> {
  const tap =
    <A extends unknown[]>(fn: (...args: A) => string) =>
    (...args: A) => {
      const text = fn(...args);
      onAnnounce?.(text);
      return text;
    };
  return {
    handle: copy.handle,
    instructions: copy.instructions,
    pickedUp: tap(copy.pickedUp),
    moved: tap(copy.moved),
    dropped: tap(copy.dropped),
    canceled: tap(copy.canceled),
  };
}

function ChevronIcon({ direction }: { direction: 'up' | 'down' }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={direction === 'up' ? 'M4 10l4-4 4 4' : 'M4 6l4 4 4-4'}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ChapterListProps = {
  copy: SortableDocsCopy;
  as?: SortableListElement;
  orientation?: SortableOrientation;
  disabled?: boolean;
  lockedId?: string;
  handleSize?: DragHandleSize;
  numbered?: boolean;
  moveButtons?: boolean;
  onAnnounce?: (text: string) => void;
  className?: string;
};

function ChapterList({
  copy,
  as,
  orientation,
  disabled,
  lockedId,
  handleSize,
  numbered = false,
  moveButtons = false,
  onAnnounce,
  className,
}: ChapterListProps) {
  const [items, setItems] = useState(CHAPTER_IDS);
  const labelOf = (id: string) => copy.chapters[CHAPTER_IDS.indexOf(id)] ?? id;
  return (
    <SortableList
      aria-label={copy.listLabel}
      items={items}
      onReorder={setItems}
      as={as}
      orientation={orientation}
      disabled={disabled}
      messages={messagesOf(copy, onAnnounce)}
      className={className}
    >
      {items.map((id, index) => (
        <SortableItem key={id} id={id} label={labelOf(id)} disabled={id === lockedId}>
          <DragHandle size={handleSize} />
          {numbered ? (
            <Text as="span" tone="muted" className="w-6 tabular-nums">
              {index + 1}.
            </Text>
          ) : null}
          <Text as="span">{labelOf(id)}</Text>
          {id === lockedId ? (
            <Text as="span" size="body-sm" tone="muted" className="ms-auto">
              {copy.locked}
            </Text>
          ) : null}
          {moveButtons ? (
            <span className="ms-auto inline-flex gap-1">
              <IconButton
                variant="ghost"
                size="sm"
                icon={<ChevronIcon direction="up" />}
                aria-label={copy.moveUp(labelOf(id))}
                disabled={index === 0}
                onClick={() => setItems(moveSortableItem(items, index, index - 1))}
              />
              <IconButton
                variant="ghost"
                size="sm"
                icon={<ChevronIcon direction="down" />}
                aria-label={copy.moveDown(labelOf(id))}
                disabled={index === items.length - 1}
                onClick={() => setItems(moveSortableItem(items, index, index + 1))}
              />
            </span>
          ) : null}
        </SortableItem>
      ))}
    </SortableList>
  );
}

function AnnouncedChapterList({ copy }: { copy: SortableDocsCopy }) {
  const [last, setLast] = useState('');
  return (
    <div className="flex flex-col gap-3">
      <ChapterList copy={copy} onAnnounce={setLast} />
      <Text as="p" size="body-sm" tone="muted" aria-hidden="true">
        {copy.lastAnnouncement} {last || '—'}
      </Text>
    </div>
  );
}

function TagList({ copy }: { copy: SortableDocsCopy }) {
  const [items, setItems] = useState(TAG_IDS);
  const labelOf = (id: string) => copy.tags[TAG_IDS.indexOf(id)] ?? id;
  return (
    <SortableList
      aria-label={copy.tagsLabel}
      items={items}
      onReorder={setItems}
      orientation="horizontal"
      messages={messagesOf(copy)}
    >
      {items.map((id) => (
        <SortableItem key={id} id={id} label={labelOf(id)} className="py-1 ps-1">
          <DragHandle size="sm" aria-label={copy.moveTag(labelOf(id))} />
          <Text as="span" size="body-sm">
            {labelOf(id)}
          </Text>
        </SortableItem>
      ))}
    </SortableList>
  );
}

function WidgetGrid({ copy }: { copy: SortableDocsCopy }) {
  const [items, setItems] = useState(WIDGET_IDS);
  const labelOf = (id: string) => copy.widgets[WIDGET_IDS.indexOf(id)] ?? id;
  return (
    <SortableList
      aria-label={copy.widgetsLabel}
      items={items}
      onReorder={setItems}
      orientation="grid"
      messages={messagesOf(copy)}
      className="grid-cols-2 sm:grid-cols-3"
    >
      {items.map((id) => (
        <SortableItem key={id} id={id} label={labelOf(id)} className="min-h-28">
          <div className="flex w-full flex-col gap-1 self-start">
            <div className="flex items-center justify-between gap-2">
              <Text as="span" weight="semibold">
                {labelOf(id)}
              </Text>
              <DragHandle size="sm" />
            </div>
            <Text as="span" size="body-sm" tone="muted">
              {copy.widgetHint}
            </Text>
          </div>
        </SortableItem>
      ))}
    </SortableList>
  );
}

function HandleSizes({ copy }: { copy: SortableDocsCopy }) {
  const sizes: DragHandleSize[] = ['sm', 'md', 'lg'];
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col gap-2">
          <Text as="span" size="body-sm" tone="muted">
            size=&quot;{size}&quot;
          </Text>
          <ChapterList copy={copy} handleSize={size} />
        </div>
      ))}
    </div>
  );
}

const meta = {
  title: 'Components/SortableList',
  component: SortableList,
  args: {
    items: [],
    onReorder: () => undefined,
  },
  argTypes: sortableListArgTypes,
} satisfies Meta<typeof SortableList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: listSource(chapterListJsx(), `${chaptersSource}\n\n${messagesSource}`),
  render: (_, { globals }) => (
    <ChapterList copy={sortableCopy(docsLocale(globals.locale))} />
  ),
};

export const Keyboard: Story = {
  name: 'Clavier et annonces',
  parameters: listSource(chapterListJsx(), `${chaptersSource}\n\n${messagesSource}`),
  render: (_, { globals }) => (
    <AnnouncedChapterList copy={sortableCopy(docsLocale(globals.locale))} />
  ),
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: listSource(
    `<SortableItem id="intro" label="Introduction">
    <DragHandle size="sm" />
    Introduction
</SortableItem>
<SortableItem id="vectors" label="Espaces vectoriels">
    <DragHandle size="lg" />
    Espaces vectoriels
</SortableItem>`,
  ),
  render: (_, { globals }) => (
    <HandleSizes copy={sortableCopy(docsLocale(globals.locale))} />
  ),
};

export const Ordered: Story = {
  name: 'Liste ordonnée',
  parameters: listSource(
    `<SortableList as="ol" aria-label="Chapitres" items={chapters} onReorder={setChapters} messages={messages}>
    {chapters.map((id, index) => (
        <SortableItem key={id} id={id} label={labels[id]}>
            <DragHandle />
            <span className="w-6 tabular-nums">{index + 1}.</span>
            {labels[id]}
        </SortableItem>
    ))}
</SortableList>`,
  ),
  render: (_, { globals }) => (
    <ChapterList copy={sortableCopy(docsLocale(globals.locale))} as="ol" numbered />
  ),
};

export const Horizontal: Story = {
  name: 'Disposition horizontale',
  parameters: listSource(
    `<SortableList orientation="horizontal" aria-label="Étiquettes" items={tags} onReorder={setTags} messages={messages}>
    {tags.map((tag) => (
        <SortableItem key={tag} id={tag} label={tag}>
            <DragHandle size="sm" aria-label={\`Déplacer l’étiquette \${tag}\`} />
            {tag}
        </SortableItem>
    ))}
</SortableList>`,
    `const [tags, setTags] = useState(${arraySource(frCopy.tags)});\n${messagesNote}`,
  ),
  render: (_, { globals }) => <TagList copy={sortableCopy(docsLocale(globals.locale))} />,
};

export const Grid: Story = {
  name: 'Grille',
  parameters: listSource(
    `<SortableList orientation="grid" aria-label="Tableau de bord" items={widgets} onReorder={setWidgets} messages={messages} className="grid-cols-2 sm:grid-cols-3">
    {widgets.map((widget) => (
        <SortableItem key={widget} id={widget} label={widget} className="min-h-28">
            <div className="flex w-full items-start justify-between gap-2">
                {widget}
                <DragHandle size="sm" />
            </div>
        </SortableItem>
    ))}
</SortableList>`,
    `const [widgets, setWidgets] = useState(${arraySource(frCopy.widgets)});\n${messagesNote}`,
  ),
  render: (_, { globals }) => (
    <WidgetGrid copy={sortableCopy(docsLocale(globals.locale))} />
  ),
};

export const LockedItem: Story = {
  name: 'Élément verrouillé',
  parameters: listSource(
    `<SortableList aria-label="Chapitres" items={chapters} onReorder={setChapters} messages={messages}>
    {chapters.map((id) => (
        <SortableItem key={id} id={id} label={labels[id]} disabled={id === 'intro'}>
            <DragHandle />
            {labels[id]}
        </SortableItem>
    ))}
</SortableList>`,
  ),
  render: (_, { globals }) => (
    <ChapterList copy={sortableCopy(docsLocale(globals.locale))} lockedId="intro" />
  ),
};

export const Disabled: Story = {
  name: 'Désactivé',
  args: { disabled: true },
  parameters: listSource(chapterListJsx(' disabled')),
  render: (_, { globals }) => (
    <ChapterList copy={sortableCopy(docsLocale(globals.locale))} disabled />
  ),
};

export const MoveButtons: Story = {
  name: 'Boutons Monter / Descendre',
  parameters: listSource(
    `<SortableList aria-label="Chapitres" items={chapters} onReorder={setChapters} messages={messages}>
    {chapters.map((id, index) => (
        <SortableItem key={id} id={id} label={labels[id]}>
            <DragHandle />
            {labels[id]}
            <IconButton
                variant="ghost"
                size="sm"
                icon={up}
                aria-label={\`Monter \${labels[id]}\`}
                disabled={index === 0}
                onClick={() => setChapters(moveSortableItem(chapters, index, index - 1))}
            />
            <IconButton
                variant="ghost"
                size="sm"
                icon={down}
                aria-label={\`Descendre \${labels[id]}\`}
                disabled={index === chapters.length - 1}
                onClick={() => setChapters(moveSortableItem(chapters, index, index + 1))}
            />
        </SortableItem>
    ))}
</SortableList>`,
    `${chaptersSource}\n${messagesNote}`,
    "import { useState } from 'react';\nimport { DragHandle, IconButton, SortableItem, SortableList, moveSortableItem } from 'd-ui';",
  ),
  render: (_, { globals }) => (
    <ChapterList copy={sortableCopy(docsLocale(globals.locale))} moveButtons />
  ),
};
