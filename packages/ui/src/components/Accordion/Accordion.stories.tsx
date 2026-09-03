import type { Meta, StoryObj } from '@storybook/react-vite';
import { accordionArgTypes } from '../../../.storybook/arg-types';
import { accordionCopy, docsLocale } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { List, ListItem } from '../List/List';
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from './Accordion';

const importAccordion = `import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionTrigger,
} from 'd-ui';`;

const importComposition = `import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionTrigger,
    List,
    ListItem,
} from 'd-ui';`;

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  args: { children: <span /> },
  argTypes: accordionArgTypes,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(
    importAccordion,
    `<Accordion defaultValue="what">
    <AccordionItem value="what">
        <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
        <AccordionPanel>Un module de révision pour ancrer les notions du cours.</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="when">
        <AccordionTrigger>Quand commencer ?</AccordionTrigger>
        <AccordionPanel>Dès le premier cours, à votre rythme.</AccordionPanel>
    </AccordionItem>
</Accordion>`,
  ),
  render: (args, { globals }) => {
    const copy = accordionCopy(docsLocale(globals.locale));
    return (
      <Accordion {...args} defaultValue="what">
        <AccordionItem value="what">
          <AccordionTrigger>{copy.what}</AccordionTrigger>
          <AccordionPanel>{copy.whatBody}</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="when">
          <AccordionTrigger>{copy.when}</AccordionTrigger>
          <AccordionPanel>{copy.whenBody}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const Multiple: Story = {
  name: 'Plusieurs sections',
  parameters: componentSource(
    importAccordion,
    `<Accordion type="multiple" defaultValue={['what', 'when']}>
    <AccordionItem value="what">
        <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
        <AccordionPanel>Un module de révision pour ancrer les notions du cours.</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="when">
        <AccordionTrigger>Quand commencer ?</AccordionTrigger>
        <AccordionPanel>Dès le premier cours, à votre rythme.</AccordionPanel>
    </AccordionItem>
</Accordion>`,
  ),
  render: (args, { globals }) => {
    const copy = accordionCopy(docsLocale(globals.locale));
    return (
      <Accordion {...args} type="multiple" defaultValue={['what', 'when']}>
        <AccordionItem value="what">
          <AccordionTrigger>{copy.what}</AccordionTrigger>
          <AccordionPanel>{copy.whatBody}</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="when">
          <AccordionTrigger>{copy.when}</AccordionTrigger>
          <AccordionPanel>{copy.whenBody}</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="why">
          <AccordionTrigger>{copy.why}</AccordionTrigger>
          <AccordionPanel>{copy.whyBody}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const DisabledItems: Story = {
  name: 'Sections désactivées',
  parameters: componentSource(
    importAccordion,
    `<Accordion defaultValue="what">
    <AccordionItem value="what">
        <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
        <AccordionPanel>Un module de révision pour ancrer les notions du cours.</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="who" disabled>
        <AccordionTrigger>Qui corrige ?</AccordionTrigger>
        <AccordionPanel>Section indisponible pour le moment.</AccordionPanel>
    </AccordionItem>
</Accordion>`,
  ),
  render: (args, { globals }) => {
    const copy = accordionCopy(docsLocale(globals.locale));
    return (
      <Accordion {...args} defaultValue="what">
        <AccordionItem value="what">
          <AccordionTrigger>{copy.what}</AccordionTrigger>
          <AccordionPanel>{copy.whatBody}</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="who" disabled>
          <AccordionTrigger>{copy.who}</AccordionTrigger>
          <AccordionPanel>{copy.whoBody}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const Sizes: Story = {
  name: 'Tailles',
  parameters: componentSource(
    importAccordion,
    `<>
    <Accordion size="sm" defaultValue="what">
        <AccordionItem value="what">
            <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
            <AccordionPanel>Un module de révision.</AccordionPanel>
        </AccordionItem>
    </Accordion>
    <Accordion size="lg" defaultValue="what">
        <AccordionItem value="what">
            <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
            <AccordionPanel>Un module de révision.</AccordionPanel>
        </AccordionItem>
    </Accordion>
</>`,
  ),
  render: (args, { globals }) => {
    const copy = accordionCopy(docsLocale(globals.locale));
    return (
      <div className="flex flex-col gap-6">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Accordion key={size} {...args} size={size} defaultValue="what">
            <AccordionItem value="what">
              <AccordionTrigger>{copy.what}</AccordionTrigger>
              <AccordionPanel>{copy.whatBody}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    );
  },
};

export const Composition: Story = {
  name: 'Composition',
  parameters: componentSource(
    importComposition,
    `<Accordion defaultValue="week-1">
    <AccordionItem value="week-1">
        <AccordionTrigger>Semaine 1</AccordionTrigger>
        <AccordionPanel>
            <List>
                <ListItem href="/cours/1">Cours 1</ListItem>
                <ListItem href="/cours/2">Cours 2</ListItem>
            </List>
        </AccordionPanel>
    </AccordionItem>
</Accordion>`,
  ),
  render: (args, { globals }) => {
    const copy = accordionCopy(docsLocale(globals.locale));
    return (
      <Accordion {...args} defaultValue="week-1">
        <AccordionItem value="week-1">
          <AccordionTrigger>{copy.week1}</AccordionTrigger>
          <AccordionPanel>
            <List>
              <ListItem href="/cours/1">{copy.lesson1}</ListItem>
              <ListItem href="/cours/2">{copy.lesson2}</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="week-2">
          <AccordionTrigger>{copy.week2}</AccordionTrigger>
          <AccordionPanel>
            <List>
              <ListItem href="/cours/3">{copy.lesson3}</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  },
};
