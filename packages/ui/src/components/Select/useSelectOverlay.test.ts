import { describe, expect, it, vi } from 'vitest';
import { scrollOptionIntoView, shouldDismissSelectOverlay } from './useSelectOverlay';

function mockRect(element: HTMLElement, top: number, bottom: number) {
  vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
    top,
    bottom,
    left: 0,
    right: 100,
    width: 100,
    height: bottom - top,
    x: 0,
    y: top,
    toJSON() {
      return {};
    },
  });
}

describe('shouldDismissSelectOverlay', () => {
  it('dismisses when the field is not in a Storybook canvas', () => {
    const field = document.createElement('input');
    const outside = document.createElement('button');
    document.body.append(field, outside);
    expect(shouldDismissSelectOverlay({ target: outside }, field)).toBe(true);
    field.remove();
    outside.remove();
  });

  it('keeps the list open when the click is in another canvas', () => {
    const canvasA = document.createElement('div');
    canvasA.className = 'd-ui-docs';
    const field = document.createElement('input');
    canvasA.append(field);
    const canvasB = document.createElement('div');
    canvasB.className = 'd-ui-docs';
    const other = document.createElement('input');
    canvasB.append(other);
    document.body.append(canvasA, canvasB);
    expect(shouldDismissSelectOverlay({ target: other }, field)).toBe(false);
    canvasA.remove();
    canvasB.remove();
  });

  it('dismisses when the click is in the same canvas or the page', () => {
    const canvas = document.createElement('div');
    canvas.className = 'd-ui-docs';
    const field = document.createElement('input');
    const sibling = document.createElement('button');
    canvas.append(field, sibling);
    const page = document.createElement('p');
    document.body.append(canvas, page);
    expect(shouldDismissSelectOverlay({ target: sibling }, field)).toBe(true);
    expect(shouldDismissSelectOverlay({ target: page }, field)).toBe(true);
    canvas.remove();
    page.remove();
  });
});

describe('scrollOptionIntoView', () => {
  it('scrolls the listbox instead of calling Element.scrollIntoView', () => {
    const list = document.createElement('div');
    list.id = 'cities-list';
    Object.defineProperty(list, 'scrollTop', {
      configurable: true,
      writable: true,
      value: 0,
    });
    const option = document.createElement('div');
    option.id = 'cities-list-opt-0';
    const scrollIntoView = vi.fn();
    option.scrollIntoView = scrollIntoView;
    list.append(option);
    document.body.append(list);
    mockRect(list, 0, 100);
    mockRect(option, 140, 160);

    scrollOptionIntoView('cities-list', 0);

    expect(scrollIntoView).not.toHaveBeenCalled();
    expect(list.scrollTop).toBe(60);
    list.remove();
  });

  it('scrolls up when the option sits above the visible list', () => {
    const list = document.createElement('div');
    list.id = 'cities-list';
    Object.defineProperty(list, 'scrollTop', {
      configurable: true,
      writable: true,
      value: 80,
    });
    const option = document.createElement('div');
    option.id = 'cities-list-opt-2';
    list.append(option);
    document.body.append(list);
    mockRect(list, 40, 140);
    mockRect(option, 10, 30);

    scrollOptionIntoView('cities-list', 2);

    expect(list.scrollTop).toBe(50);
    list.remove();
  });
});
