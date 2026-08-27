import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Radio as RadioFromEntry, RadioGroup as RadioGroupFromEntry } from '../../index';
import { Radio, RadioGroup } from './Radio';

describe('Radio', () => {
  it('is exported from the package entrypoint', () => {
    expect(RadioFromEntry).toBe(Radio);
    expect(RadioGroupFromEntry).toBe(RadioGroup);
  });

  it('forwards a ref to the native radio', () => {
    const ref = createRef<HTMLInputElement>();
    render(
      <RadioGroup label="Formule">
        <Radio value="monthly" label="Mensuel" ref={ref} />
      </RadioGroup>,
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current).toHaveAttribute('type', 'radio');
  });
});

describe('RadioGroup', () => {
  it('exposes a labelled group and keeps a single selection', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioGroup label="Formule" name="plan" defaultValue="monthly" onChange={onChange}>
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
      </RadioGroup>,
    );

    expect(screen.getByRole('group', { name: 'Formule' })).toBeInTheDocument();
    const monthly = screen.getByRole('radio', { name: 'Mensuel' });
    const yearly = screen.getByRole('radio', { name: 'Annuel' });
    expect(monthly).toBeChecked();
    expect(yearly).not.toBeChecked();
    expect(monthly).toHaveAttribute('name', 'plan');
    expect(yearly).toHaveAttribute('name', 'plan');

    await user.click(yearly);
    expect(onChange).toHaveBeenCalledWith('yearly');
    expect(yearly).toBeChecked();
    expect(monthly).not.toBeChecked();
  });

  it('moves selection with arrow keys', async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup label="Formule" defaultValue="monthly">
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
      </RadioGroup>,
    );
    const monthly = screen.getByRole('radio', { name: 'Mensuel' });
    monthly.focus();
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('radio', { name: 'Annuel' })).toBeChecked();
    expect(monthly).not.toBeChecked();
  });

  it('does not fire when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioGroup label="Formule" disabled defaultValue="monthly" onChange={onChange}>
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
      </RadioGroup>,
    );
    await user.click(screen.getByRole('radio', { name: 'Annuel' }));
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('radio', { name: 'Mensuel' })).toBeChecked();
  });

  it('marks options invalid and required from the group', () => {
    render(
      <RadioGroup label="Formule" required error="Choisissez une formule">
        <Radio value="monthly" label="Mensuel" />
      </RadioGroup>,
    );
    const group = screen.getByRole('group', { name: 'Formule' });
    expect(group).toHaveAttribute('aria-invalid', 'true');
    expect(group).toHaveAttribute('aria-required', 'true');
    const radio = screen.getByRole('radio', { name: 'Mensuel' });
    expect(radio).toBeRequired();
    expect(radio).toHaveAccessibleDescription('Choisissez une formule');
  });

  it('does not steal selection from another group when name is omitted', async () => {
    const user = userEvent.setup();
    render(
      <>
        <RadioGroup label="Formule A" defaultValue="a1">
          <Radio value="a1" label="A1" />
          <Radio value="a2" label="A2" />
        </RadioGroup>
        <RadioGroup label="Formule B" defaultValue="b1">
          <Radio value="b1" label="B1" />
          <Radio value="b2" label="B2" />
        </RadioGroup>
      </>,
    );

    await user.click(screen.getByRole('radio', { name: 'A2' }));
    expect(screen.getByRole('radio', { name: 'A2' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'A1' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: 'B1' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'B2' })).not.toBeChecked();
  });
});
