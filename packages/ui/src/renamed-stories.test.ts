import { describe, expect, it } from 'vitest';
import { rewriteRenamedStoryHref } from '../.storybook/renamed-stories';

describe('rewriteRenamedStoryHref', () => {
  it('sends old Input docs to TextInput docs', () => {
    expect(
      rewriteRenamedStoryHref('http://localhost:6006/?path=/docs/components-input--docs'),
    ).toBe('http://localhost:6006/?path=/docs/components-textinput--docs');
  });

  it('sends old Input stories to TextInput stories', () => {
    expect(
      rewriteRenamedStoryHref(
        'http://localhost:6006/iframe.html?id=components-input--valid&viewMode=story',
      ),
    ).toBe(
      'http://localhost:6006/iframe.html?id=components-textinput--valid&viewMode=story',
    );
  });

  it('sends the old Input multiline stories to Textarea', () => {
    expect(
      rewriteRenamedStoryHref(
        'http://localhost:6006/?path=/story/components-input--multiline',
      ),
    ).toBe('http://localhost:6006/?path=/story/components-textarea--default');
  });

  it('sends old Select docs to Combobox docs', () => {
    expect(
      rewriteRenamedStoryHref(
        'http://localhost:6006/?path=/docs/components-select--docs',
      ),
    ).toBe('http://localhost:6006/?path=/docs/components-combobox--docs');
  });

  it('sends old Select stories to Combobox stories', () => {
    expect(
      rewriteRenamedStoryHref(
        'http://localhost:6006/iframe.html?id=components-select--default&viewMode=story',
      ),
    ).toBe(
      'http://localhost:6006/iframe.html?id=components-combobox--default&viewMode=story',
    );
  });

  it('sends old Field docs to TextInput docs', () => {
    expect(
      rewriteRenamedStoryHref(
        'http://localhost:6006/?path=/docs/components-field--docs',
      ),
    ).toBe('http://localhost:6006/?path=/docs/components-textinput--docs');
  });

  it('sends old Field stories to TextInput stories', () => {
    expect(
      rewriteRenamedStoryHref(
        'http://localhost:6006/iframe.html?id=components-field--default&viewMode=story',
      ),
    ).toBe(
      'http://localhost:6006/iframe.html?id=components-textinput--default&viewMode=story',
    );
    expect(
      rewriteRenamedStoryHref(
        'http://localhost:6006/?path=/story/components-field--with-description',
      ),
    ).toBe('http://localhost:6006/?path=/story/components-textinput--helper');
    expect(
      rewriteRenamedStoryHref(
        'http://localhost:6006/?path=/story/components-field--group',
      ),
    ).toBe('http://localhost:6006/?path=/story/components-textinput--default');
  });
});
