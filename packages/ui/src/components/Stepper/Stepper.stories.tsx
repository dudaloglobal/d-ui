import type { Meta, StoryObj } from '@storybook/react-vite';
import { stepperArgTypes } from '../../../.storybook/arg-types';
import {
  docsLocale,
  loadingCopy,
  type LoadingDocsCopy,
} from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb/Breadcrumb';
import { Button } from '../Button/Button';
import { Progress } from '../Progress/Progress';
import { Text } from '../Text/Text';
import { TextInput } from '../TextInput/TextInput';
import { Stepper, type StepperStep, type StepStatus } from './Stepper';

const importStepper = "import { Stepper } from 'd-ui';";

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: stepperArgTypes,
  parameters: {
    controls: {
      include: ['current', 'variant', 'orientation', 'hideLabels', 'bordered'],
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

function steps(copy: LoadingDocsCopy): StepperStep[] {
  return [
    { label: copy.stepCart, description: copy.stepCartHint },
    { label: copy.stepShipping, description: copy.stepShippingHint },
    { label: copy.stepPayment, description: copy.stepPaymentHint },
    { label: copy.stepReview, description: copy.stepReviewHint },
  ];
}

function statusLabels(copy: LoadingDocsCopy): Record<StepStatus, string> {
  return {
    complete: copy.stepDone,
    current: copy.stepCurrent,
    upcoming: copy.stepUpcoming,
  };
}

/** Sans `description` : les variantes compactes n'en affichent pas. */
function plainSteps(copy: LoadingDocsCopy): StepperStep[] {
  return steps(copy).map(({ label }) => ({ label }));
}

const SHARED = `const steps = [
    { label: 'Panier' },
    { label: 'Livraison' },
    { label: 'Paiement' },
    { label: 'Récapitulatif' },
];`;

export const Default: Story = {
  name: 'Par défaut',
  args: { steps: [], current: 1, label: 'Étapes de la commande' },
  parameters: componentSource(
    importStepper,
    `<Stepper steps={steps} current={1} label="Étapes de la commande" />`,
    SHARED,
  ),
  render: (args, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="p-6">
        <Stepper
          {...args}
          steps={plainSteps(copy)}
          label={copy.stepsLabel}
          statusLabels={statusLabels(copy)}
        />
      </div>
    );
  },
};

export const Bullets: Story = {
  name: 'Pastilles',
  args: { steps: [], current: 1, label: 'Étapes' },
  parameters: componentSource(
    importStepper,
    `<Stepper steps={steps} current={1} variant="bullets" hideLabels label="Étapes" />`,
    SHARED,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="p-6">
        <Stepper
          steps={plainSteps(copy)}
          current={1}
          variant="bullets"
          hideLabels
          label={copy.stepsLabel}
          statusLabels={statusLabels(copy)}
        />
      </div>
    );
  },
};

export const BulletsWithText: Story = {
  name: 'Pastilles et texte',
  args: { steps: [], current: 1, label: 'Étapes' },
  parameters: componentSource(
    importStepper,
    `<Stepper steps={steps} current={1} variant="bullets" label="Étapes" />`,
    SHARED,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="p-6">
        <Stepper
          steps={plainSteps(copy)}
          current={1}
          variant="bullets"
          label={copy.stepsLabel}
          statusLabels={statusLabels(copy)}
        />
      </div>
    );
  },
};

export const Panels: Story = {
  name: 'Panneaux',
  args: { steps: [], current: 2, label: 'Étapes' },
  parameters: componentSource(
    importStepper,
    `<Stepper steps={steps} current={2} variant="panels" label="Étapes" />`,
    SHARED,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="p-6">
        <Stepper
          steps={steps(copy)}
          current={2}
          variant="panels"
          label={copy.stepsLabel}
          statusLabels={statusLabels(copy)}
        />
      </div>
    );
  },
};

export const PanelsBordered: Story = {
  name: 'Panneaux encadrés',
  args: { steps: [], current: 2, label: 'Étapes' },
  parameters: componentSource(
    importStepper,
    `<Stepper steps={steps} current={2} variant="panels" bordered label="Étapes" />`,
    SHARED,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="p-6">
        <Stepper
          steps={steps(copy)}
          current={2}
          variant="panels"
          bordered
          label={copy.stepsLabel}
          statusLabels={statusLabels(copy)}
        />
      </div>
    );
  },
};

export const BreadcrumbForm: Story = {
  name: 'Fil d’Ariane',
  args: { steps: [], current: 1, label: 'Étapes' },
  parameters: componentSource(
    "import { Breadcrumb, BreadcrumbItem } from 'd-ui';",
    `<Breadcrumb aria-label="Étapes de la commande">
    <BreadcrumbItem href="#panier">Panier</BreadcrumbItem>
    <BreadcrumbItem>Livraison</BreadcrumbItem>
</Breadcrumb>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    /*
     * La forme à chevrons existe déjà dans le design system : la redoubler
     * dans `Stepper` donnerait deux conventions (`aria-current="step"` contre
     * `"page"`) pour un seul motif visuel.
     */
    return (
      <div className="p-6">
        <Breadcrumb aria-label={copy.stepsLabel}>
          <BreadcrumbItem href="#0">{copy.stepCart}</BreadcrumbItem>
          <BreadcrumbItem href="#1">{copy.stepShipping}</BreadcrumbItem>
          <BreadcrumbItem>{copy.stepPayment}</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  },
};

export const Detailed: Story = {
  name: 'Détaillé',
  args: { steps: [], current: 1, label: 'Étapes' },
  parameters: componentSource(
    importStepper,
    `<Stepper steps={steps} current={1} label="Étapes" />`,
    `const steps = [
    { label: 'Panier', description: 'Vérifier les articles' },
    { label: 'Livraison', description: 'Adresse et transporteur' },
    { label: 'Paiement', description: 'Carte ou virement' },
    { label: 'Récapitulatif', description: 'Relire avant de valider' },
];`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="p-6">
        <Stepper
          steps={steps(copy)}
          current={1}
          label={copy.stepsLabel}
          statusLabels={statusLabels(copy)}
        />
      </div>
    );
  },
};

export const Vertical: Story = {
  name: 'Vertical',
  args: { steps: [], current: 1, label: 'Étapes' },
  parameters: componentSource(
    importStepper,
    `<Stepper steps={steps} current={1} orientation="vertical" variant="bullets" label="Étapes" />`,
    SHARED,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="p-6">
        <Stepper
          steps={plainSteps(copy)}
          current={1}
          orientation="vertical"
          variant="bullets"
          label={copy.stepsLabel}
          statusLabels={statusLabels(copy)}
        />
      </div>
    );
  },
};

export const Timeline: Story = {
  name: 'Frise verticale',
  args: { steps: [], current: 2, label: 'Étapes' },
  parameters: componentSource(
    importStepper,
    `<Stepper steps={steps} current={2} orientation="vertical" label="Étapes" />`,
    SHARED,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="p-6">
        <Stepper
          steps={steps(copy)}
          current={2}
          orientation="vertical"
          label={copy.stepsLabel}
          statusLabels={statusLabels(copy)}
        />
      </div>
    );
  },
};

export const Links: Story = {
  name: 'Étapes cliquables',
  args: { steps: [], current: 2, label: 'Étapes' },
  parameters: componentSource(
    importStepper,
    `<nav aria-label="Progression de la commande">
    <Stepper steps={steps} current={2} label="Étapes de la commande" />
</nav>`,
    `const steps = [
    { label: 'Panier', href: '#panier' },
    { label: 'Livraison', href: '#livraison' },
    { label: 'Paiement' },
    { label: 'Récapitulatif' },
];`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    const list = plainSteps(copy).map((step, index) =>
      index < 2 ? { ...step, href: `#${index}` } : step,
    );
    return (
      <nav aria-label={copy.stepsLabel} className="p-6">
        <Stepper
          steps={list}
          current={2}
          label={copy.stepsLabel}
          statusLabels={statusLabels(copy)}
        />
      </nav>
    );
  },
};

export const WithProgress: Story = {
  name: 'Avec une barre de progression',
  args: { steps: [], current: 1, label: 'Étapes' },
  parameters: componentSource(
    "import { Progress } from 'd-ui';",
    `<Progress value={50} label="Étapes de la commande" valueText="Étape 2 sur 4" />`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="mx-auto w-96 p-6">
        <Text size="body-sm" tone="muted">
          {copy.stepOf}
        </Text>
        <Progress
          className="mt-2"
          value={50}
          label={copy.stepsLabel}
          valueText={copy.stepOf}
        />
      </div>
    );
  },
};

export const WithForm: Story = {
  name: 'Avec formulaire',
  args: { steps: [], current: 1, label: 'Étapes' },
  parameters: componentSource(
    importStepper,
    `<>
    <Stepper steps={steps} current={1} variant="bullets" label="Étapes" />
    <form>
        <TextInput label="Adresse de livraison" />
    </form>
</>`,
    SHARED,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <div className="mx-auto w-96 p-6">
        <Stepper
          steps={plainSteps(copy)}
          current={1}
          variant="bullets"
          label={copy.stepsLabel}
          statusLabels={statusLabels(copy)}
        />
        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <TextInput label={copy.addressLabel} placeholder={copy.addressPlaceholder} />
          <div className="flex justify-end gap-3">
            <Button variant="secondary">{copy.back}</Button>
            <Button variant="primary" type="submit">
              {copy.next}
            </Button>
          </div>
        </form>
      </div>
    );
  },
};
