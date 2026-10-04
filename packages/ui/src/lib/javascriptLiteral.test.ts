import { describe, expect, it } from 'vitest';
import { javascriptStringLiteral } from './javascriptLiteral';

describe('javascriptStringLiteral', () => {
  it('preserves quotes and backslashes without producing executable source', () => {
    const input = String.raw`C:\users\O'Brien\file`;
    const literal = javascriptStringLiteral(input);

    expect(literal).toBe("'C:\\\\users\\\\O\\'Brien\\\\file'");
  });
});
