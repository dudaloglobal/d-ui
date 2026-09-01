import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  Accordion as AccordionFromEntry,
  AccordionItem as AccordionItemFromEntry,
  AccordionPanel as AccordionPanelFromEntry,
  AccordionTrigger as AccordionTriggerFromEntry,
} from '../../index';
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from './Accordion';

function Faq({
  type = 'single' as const,
  defaultValue = 'what',
  onValueChange,
}: {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}) {
  return (
    <Accordion type={type} defaultValue={defaultValue} onValueChange={onValueChange}>
      <AccordionItem value="what">
        <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
        <AccordionPanel>Un module de révision.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="when">
        <AccordionTrigger>Quand commencer ?</AccordionTrigger>
        <AccordionPanel>Dès le premier cours.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="who" disabled>
        <AccordionTrigger>Qui corrige ?</AccordionTrigger>
        <AccordionPanel>Masqué.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

describe('Accordion', () => {
  it('is exported from the package entrypoint', () => {
    expect(AccordionFromEntry).toBe(Accordion);
    expect(AccordionItemFromEntry).toBe(AccordionItem);
    expect(AccordionTriggerFromEntry).toBe(AccordionTrigger);
    expect(AccordionPanelFromEntry).toBe(AccordionPanel);
  });

  it('follows the WAI-ARIA accordion pattern', () => {
    render(<Faq />);
    const trigger = screen.getByRole('button', { name: 'Qu’est-ce que c’est ?' });
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger.tagName).toBe('BUTTON');
    expect(
      screen.getByRole('heading', { name: 'Qu’est-ce que c’est ?', level: 3 }),
    ).toBeVisible();
    const panel = screen.getByRole('region', { name: 'Qu’est-ce que c’est ?' });
    expect(panel).toHaveTextContent('Un module de révision.');
    expect(panel).toHaveAttribute('id', trigger.getAttribute('aria-controls'));
    expect(
      screen.queryByRole('region', { name: 'Quand commencer ?' }),
    ).not.toBeInTheDocument();
  });

  it('opens another section and closes the previous one when type is single', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Faq onValueChange={onValueChange} />);
    await user.click(screen.getByRole('button', { name: 'Quand commencer ?' }));
    expect(onValueChange).toHaveBeenCalledWith('when');
    expect(screen.getByRole('button', { name: 'Quand commencer ?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(screen.getByRole('button', { name: 'Qu’est-ce que c’est ?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('can close the open section in single mode', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Faq onValueChange={onValueChange} />);
    await user.click(screen.getByRole('button', { name: 'Qu’est-ce que c’est ?' }));
    expect(onValueChange).toHaveBeenCalledWith('');
    expect(screen.getByRole('button', { name: 'Qu’est-ce que c’est ?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('keeps several sections open when type is multiple', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Faq type="multiple" defaultValue={['what']} onValueChange={onValueChange} />);
    await user.click(screen.getByRole('button', { name: 'Quand commencer ?' }));
    expect(onValueChange).toHaveBeenCalledWith(['what', 'when']);
    expect(screen.getByRole('region', { name: 'Qu’est-ce que c’est ?' })).toBeVisible();
    expect(screen.getByRole('region', { name: 'Quand commencer ?' })).toBeVisible();
  });

  it('does not open a disabled section', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Faq onValueChange={onValueChange} />);
    expect(screen.getByRole('button', { name: 'Qui corrige ?' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Qui corrige ?' }));
    expect(onValueChange).not.toHaveBeenCalled();
    expect(
      screen.queryByRole('region', { name: 'Qui corrige ?' }),
    ).not.toBeInTheDocument();
  });

  it('moves focus between headers with arrows, Home, and End', async () => {
    const user = userEvent.setup();
    render(<Faq />);
    screen.getByRole('button', { name: 'Qu’est-ce que c’est ?' }).focus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: 'Quand commencer ?' })).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: 'Qu’est-ce que c’est ?' })).toHaveFocus();
    await user.keyboard('{End}');
    expect(screen.getByRole('button', { name: 'Quand commencer ?' })).toHaveFocus();
    await user.keyboard('{Home}');
    expect(screen.getByRole('button', { name: 'Qu’est-ce que c’est ?' })).toHaveFocus();
  });
});
