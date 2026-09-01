import type { Meta, StoryObj } from '@storybook/react-vite';
import { cardArgTypes } from '../../../.storybook/arg-types';
import { componentSource } from '../../../.storybook/docs-source';
import { cardCopy, docsLocale } from '../../../.storybook/docs-locale';
import { UI_COLORS, UI_SIZES } from '../../lib/uiScale';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
  type CardRadius,
} from './Card';

const importCard = `import {
    Avatar,
    Badge,
    Button,
    Card,
    CardBody,
    CardDescription,
    CardFooter,
    CardHeader,
    CardMedia,
    CardTitle,
} from 'd-ui';`;

function coverUri() {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect fill="#0f5c4c" width="640" height="360"/><rect fill="#0c4a3e" x="40" y="40" width="240" height="280" rx="12"/></svg>';
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function portraitUri() {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect fill="#0f5c4c" width="96" height="96"/><text x="50%" y="54%" fill="#fff" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="36">A</text></svg>';
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const meta = {
  title: 'Components/Card',
  component: Card,
  argTypes: cardArgTypes,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importCard,
    `<Card>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return (
      <Card {...args} className="max-w-sm">
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
        <CardBody>{copy.body}</CardBody>
      </Card>
    );
  },
};

export const WithMedia: Story = {
  name: 'Avec média',
  parameters: componentSource(
    importCard,
    `<Card>
    <CardMedia>
        <img src="/cover.png" alt="" />
    </CardMedia>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return (
      <Card {...args} className="max-w-sm">
        <CardMedia>
          <img src={coverUri()} alt="" />
        </CardMedia>
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
        <CardBody>{copy.body}</CardBody>
      </Card>
    );
  },
};

export const HeaderAndFooter: Story = {
  name: 'En-tête et pied',
  parameters: componentSource(
    importCard,
    `<Card>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
    <CardFooter>
        <Button>Ouvrir</Button>
        <Button variant="secondary">Partager</Button>
    </CardFooter>
</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return (
      <Card {...args} className="max-w-sm">
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
        <CardBody>{copy.body}</CardBody>
        <CardFooter>
          <Button>{copy.open}</Button>
          <Button variant="secondary">{copy.share}</Button>
        </CardFooter>
      </Card>
    );
  },
};

export const Horizontal: Story = {
  name: 'Horizontale',
  parameters: componentSource(
    importCard,
    `<Card orientation="horizontal">
    <CardMedia>
        <img src="/cover.png" alt="" />
    </CardMedia>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return (
      <Card {...args} orientation="horizontal" className="max-w-lg">
        <CardMedia>
          <img src={coverUri()} alt="" />
        </CardMedia>
        <div className="flex min-w-0 flex-1 flex-col">
          <CardHeader>
            <CardTitle>{copy.title}</CardTitle>
            <CardDescription>{copy.subtitle}</CardDescription>
          </CardHeader>
          <CardBody>{copy.body}</CardBody>
        </div>
      </Card>
    );
  },
};

export const AsLink: Story = {
  name: 'Lien',
  parameters: componentSource(
    importCard,
    `<Card href="/fiches/algebre">
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return (
      <Card {...args} href="#card-link" className="max-w-sm">
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
        <CardBody>{copy.body}</CardBody>
      </Card>
    );
  },
};

export const AsButton: Story = {
  name: 'Bouton',
  parameters: componentSource(
    importCard,
    `<Card as="button" onClick={() => {}}>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
    </CardHeader>
</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return (
      <Card {...args} as="button" className="max-w-sm">
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
      </Card>
    );
  },
};

export const AsButtonDisabled: Story = {
  name: 'Bouton désactivé',
  args: { disabled: true },
  parameters: componentSource(
    importCard,
    `<Card as="button" disabled onClick={() => {}}>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
    </CardHeader>
</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return (
      <Card {...args} as="button" disabled className="max-w-sm">
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
      </Card>
    );
  },
};

export const Radius: Story = {
  name: 'Arrondi',
  parameters: componentSource(
    importCard,
    `<Card radius="sm">…</Card>
<Card radius="lg">…</Card>
<Card radius="xl">…</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    const radii: CardRadius[] = ['sm', 'lg', 'xl'];
    return (
      <div className="flex flex-col gap-4">
        {radii.map((radius) => (
          <Card key={radius} {...args} radius={radius} className="max-w-sm">
            <CardHeader>
              <CardTitle>
                {copy.title} ({radius})
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importCard,
    `<Card size="s">…</Card>
<Card size="m">…</Card>
<Card size="l">…</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-4">
        {UI_SIZES.map((size) => (
          <Card key={size} {...args} size={size} className="max-w-sm">
            <CardHeader>
              <CardTitle>
                {copy.title} ({size})
              </CardTitle>
              <CardDescription>{copy.subtitle}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  },
};

export const Colors: Story = {
  name: 'Couleurs',
  parameters: componentSource(
    importCard,
    `<Card color="brand">…</Card>
<Card color="success">…</Card>
<Card color="neutral">…</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {UI_COLORS.map((color) => (
          <Card key={color} {...args} color={color} className="max-w-sm">
            <CardHeader>
              <CardTitle>
                {copy.title} ({color})
              </CardTitle>
              <CardDescription>{copy.subtitle}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  },
};

export const Composition: Story = {
  name: 'Composition',
  parameters: componentSource(
    importCard,
    `<Card>
    <CardHeader>
        <div className="flex items-start gap-3">
            <Avatar name="Ada Lovelace" src="/portrait.png" />
            <div className="min-w-0 flex-1">
                <CardTitle>Ada Lovelace</CardTitle>
                <CardDescription>Mathématicienne</CardDescription>
            </div>
            <Badge variant="success">Actif</Badge>
        </div>
    </CardHeader>
    <CardBody>Notes de lecture sur le moteur analytique.</CardBody>
    <CardFooter>
        <Button>Message</Button>
    </CardFooter>
</Card>`,
  ),
  render: (args, { globals }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return (
      <Card {...args} className="max-w-sm">
        <CardHeader>
          <div className="flex items-start gap-3">
            <Avatar name={copy.person} src={portraitUri()} />
            <div className="min-w-0 flex-1">
              <CardTitle>{copy.person}</CardTitle>
              <CardDescription>{copy.role}</CardDescription>
            </div>
            <Badge variant="success">{copy.status}</Badge>
          </div>
        </CardHeader>
        <CardBody>{copy.personBody}</CardBody>
        <CardFooter>
          <Button>{copy.message}</Button>
        </CardFooter>
      </Card>
    );
  },
};
