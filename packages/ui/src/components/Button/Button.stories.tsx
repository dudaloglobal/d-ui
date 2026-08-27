import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import { buttonArgTypes } from '../../../.storybook/arg-types';
import {
  chevronIconSource,
  componentSource,
  plusIconSource,
} from '../../../.storybook/docs-source';
import {
  buttonCopy,
  docsLocale,
  type ButtonDocsCopy,
} from '../../../.storybook/docs-locale';
import { cx } from '../../lib/cx';
import { Button, type ButtonSize, type ButtonVariant } from './Button';
import { IconButton } from './IconButton';

function PlusIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 3v10M3 8h10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UseCaseRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>;
}

function FillRow({ children }: { children: ReactNode }) {
  return <div className="flex w-full items-center gap-4">{children}</div>;
}

function DropdownButton({
  copy,
  variant,
  size,
}: {
  copy: ButtonDocsCopy;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <Button
      variant={variant}
      size={size}
      icon={<ChevronIcon />}
      iconPosition="end"
      aria-haspopup="true"
      aria-expanded={false}
    >
      {copy.dropdown}
    </Button>
  );
}

function SplitButton({
  copy,
  variant,
  size,
}: {
  copy: ButtonDocsCopy;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  const outlined = variant === 'secondary';
  return (
    <div
      className={cx(
        'inline-flex overflow-hidden rounded-md',
        outlined && 'ring-1 ring-inset ring-border',
      )}
    >
      <Button
        variant={variant}
        size={size}
        className={cx('!rounded-none', outlined && '!border-0')}
      >
        {copy.split}
      </Button>
      <span
        className={cx(
          'w-px shrink-0 self-stretch',
          outlined ? 'bg-border' : 'bg-on-brand/30',
        )}
        aria-hidden="true"
      />
      <IconButton
        variant={variant}
        size={size}
        icon={<ChevronIcon />}
        aria-label={copy.moreActions}
        aria-haspopup="true"
        aria-expanded={false}
        className={cx('!rounded-none', outlined && '!border-0')}
      />
    </div>
  );
}

function EmphasisUseCases({
  copy,
  variant,
  size,
  includeSplit = true,
}: {
  copy: ButtonDocsCopy;
  variant?: ButtonVariant;
  size?: ButtonSize;
  includeSplit?: boolean;
}) {
  return (
    <UseCaseRow>
      <Button variant={variant} size={size}>
        {copy.default}
      </Button>
      <Button variant={variant} size={size} disabled>
        {copy.disabled}
      </Button>
      <Button variant={variant} size={size} loading>
        {copy.saving}
      </Button>
      <Button variant={variant} size={size} icon={<PlusIcon />}>
        {copy.withIcon}
      </Button>
      <DropdownButton copy={copy} variant={variant} size={size} />
      {includeSplit ? <SplitButton copy={copy} variant={variant} size={size} /> : null}
    </UseCaseRow>
  );
}

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: buttonArgTypes,
  parameters: {
    controls: {
      include: [
        'children',
        'variant',
        'size',
        'disabled',
        'loading',
        'loadingIndicator',
        'iconPosition',
        'fullWidth',
        'isSelected',
      ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Par défaut',
  render: (args, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  },
};

export const HighEmphasis: Story = {
  name: 'Forte emphase',
  parameters: componentSource(
    "import { Button, IconButton } from 'd-ui';",
    `<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />`,
    `${plusIconSource}\n\n${chevronIconSource}`,
  ),
  render: (_, { globals }) => (
    <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} />
  ),
};

export const MediumEmphasis: Story = {
  name: 'Emphase moyenne',
  parameters: componentSource(
    "import { Button } from 'd-ui';",
    `<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>`,
    plusIconSource,
  ),
  render: (_, { globals }) => (
    <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} variant="secondary" />
  ),
};

export const Toggled: Story = {
  name: 'Bouton bascule',
  parameters: componentSource(
    "import { Button } from 'd-ui';",
    `<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`,
  ),
  render: (_, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return (
      <UseCaseRow>
        <Button variant="secondary">{copy.subscribe}</Button>
        <Button variant="secondary" isSelected>
          {copy.subscribed}
        </Button>
      </UseCaseRow>
    );
  },
};

export const LowEmphasis: Story = {
  name: 'Faible emphase',
  parameters: componentSource(
    "import { Button } from 'd-ui';",
    `<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>`,
    plusIconSource,
  ),
  render: (_, { globals }) => (
    <EmphasisUseCases
      copy={buttonCopy(docsLocale(globals.locale))}
      variant="ghost"
      includeSplit={false}
    />
  ),
};

export const SmallSize: Story = {
  name: 'Petite taille',
  parameters: componentSource(
    "import { Button } from 'd-ui';",
    `<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>`,
  ),
  render: (_, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-4">
        <EmphasisUseCases copy={copy} size="sm" />
        <EmphasisUseCases copy={copy} variant="secondary" size="sm" />
        <EmphasisUseCases copy={copy} variant="ghost" size="sm" includeSplit={false} />
      </div>
    );
  },
};

export const FullWidth: Story = {
  name: 'Pleine largeur',
  parameters: componentSource(
    "import { Button } from 'd-ui';",
    `<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>`,
  ),
  render: (_, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return (
      <div className="flex w-full flex-col gap-4">
        <FillRow>
          <Button fullWidth>{copy.fullWidthSingle}</Button>
        </FillRow>
        <FillRow>
          <Button fullWidth variant="secondary">
            {copy.fullWidthTwo}
          </Button>
          <Button fullWidth variant="secondary">
            {copy.fullWidthTwo}
          </Button>
        </FillRow>
        <FillRow>
          <Button fullWidth>{copy.fullWidthSingle}</Button>
          <Button variant="ghost">{copy.button}</Button>
        </FillRow>
      </div>
    );
  },
};

export const Loading: Story = {
  name: 'Chargement',
  parameters: componentSource(
    "import { Button, IconButton } from 'd-ui';",
    `<Button loading>Enregistrement</Button>
<Button loading variant="secondary">
  Enregistrement
</Button>
<Button loading variant="ghost">
  Enregistrement
</Button>
<IconButton loading icon={plus} aria-label="Ajouter" />
<Button loading loadingIndicator="bounce">
  Enregistrement
</Button>
<Button loading loadingIndicator="bounce" variant="secondary">
  Enregistrement
</Button>
<Button loading loadingIndicator="bounce" variant="ghost">
  Enregistrement
</Button>
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />`,
    plusIconSource,
  ),
  render: (_, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-4">
        <UseCaseRow>
          <Button loading>{copy.saving}</Button>
          <Button loading variant="secondary">
            {copy.saving}
          </Button>
          <Button loading variant="ghost">
            {copy.saving}
          </Button>
          <IconButton loading icon={<PlusIcon />} aria-label={copy.add} />
        </UseCaseRow>
        <UseCaseRow>
          <Button loading loadingIndicator="bounce">
            {copy.saving}
          </Button>
          <Button loading loadingIndicator="bounce" variant="secondary">
            {copy.saving}
          </Button>
          <Button loading loadingIndicator="bounce" variant="ghost">
            {copy.saving}
          </Button>
          <IconButton
            loading
            loadingIndicator="bounce"
            icon={<PlusIcon />}
            aria-label={copy.add}
          />
        </UseCaseRow>
      </div>
    );
  },
};

export const IconOnly: Story = {
  name: 'Icône seule',
  parameters: componentSource(
    "import { IconButton } from 'd-ui';",
    '<IconButton icon={plus} aria-label="Ajouter" />',
    plusIconSource,
  ),
  render: (_, { globals }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  },
};
