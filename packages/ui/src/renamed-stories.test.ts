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
});
