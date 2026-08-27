import { describe, expect, it } from 'vitest';
import {
  defaultCountMessage,
  frameClass,
  mergeDescribedBy,
  stringifyValue,
} from './textControl';

describe('stringifyValue', () => {
  it('turns empty values into an empty string', () => {
    expect(stringifyValue(undefined)).toBe('');
    expect(stringifyValue(null as unknown as undefined)).toBe('');
  });

  it('stringifies numbers and joins arrays', () => {
    expect(stringifyValue(3)).toBe('3');
    expect(stringifyValue(['a', 'b'])).toBe('a,b');
    expect(stringifyValue('Ada')).toBe('Ada');
  });
});

describe('mergeDescribedBy', () => {
  it('joins truthy ids and drops empty slots', () => {
    expect(mergeDescribedBy('a', false, undefined, 'b')).toBe('a b');
    expect(mergeDescribedBy(false, undefined)).toBeUndefined();
  });
});

describe('defaultCountMessage', () => {
  it('returns the raw count without a max', () => {
    expect(defaultCountMessage(4)).toBe('4');
  });

  it('uses singular remaining copy at one', () => {
    expect(defaultCountMessage(9, 10)).toBe('1 character remaining');
    expect(defaultCountMessage(8, 10)).toBe('2 characters remaining');
    expect(defaultCountMessage(12, 10)).toBe('0 characters remaining');
  });
});

describe('frameClass', () => {
  const base = {
    size: 'md' as const,
    invalid: false,
    disabled: false,
  };

  it('uses the compact filled chrome, not a tall outlined box', () => {
    const single = frameClass(base);
    expect(single).toContain('bg-field');
    expect(single).toContain('min-h-9');
    expect(single).not.toContain('min-h-24');

    const multi = frameClass({ ...base, multiline: true });
    expect(multi).toContain('items-start');
    expect(multi).toContain('py-2');
    expect(multi).not.toContain('min-h-24');
    expect(multi).not.toContain('min-h-9');
  });

  it('marks invalid, valid, and disabled frames', () => {
    expect(frameClass({ ...base, invalid: true })).toContain('ring-danger');
    expect(frameClass({ ...base, valid: true })).toContain('ring-success');
    expect(frameClass({ ...base, valid: true, invalid: true })).toContain('ring-danger');
    expect(frameClass({ ...base, disabled: true })).toContain('opacity-50');
  });

  it('uses a soft focus glow only when focusShadow is set', () => {
    expect(frameClass(base)).not.toContain(
      'focus-within:shadow-[var(--d-ui-shadow-focus)]',
    );
    expect(frameClass(base)).toContain('focus-within:ring-focus');
    expect(frameClass({ ...base, focusShadow: true })).toContain(
      'focus-within:shadow-[var(--d-ui-shadow-focus)]',
    );
    expect(frameClass({ ...base, focusShadow: true, invalid: true })).not.toContain(
      'focus-within:shadow-[var(--d-ui-shadow-focus)]',
    );
  });
});
