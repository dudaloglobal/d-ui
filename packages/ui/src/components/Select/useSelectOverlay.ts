import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { useState, type CSSProperties } from 'react';
import { OVERLAY_PADDING, overlayPortalProps, useInheritedTheme } from '../floating';

type SelectOverlay = {
  refs: { setFloating: (node: HTMLElement | null) => void };
  floatingStyles: CSSProperties;
  getReferenceProps: (userProps?: object) => Record<string, unknown>;
  getFloatingProps: (userProps?: object) => Record<string, unknown>;
  portal: ReturnType<typeof overlayPortalProps>;
  setReference: (node: Element | null) => void;
};

/** Storybook wraps each canvas in `.d-ui-docs`. Clicks in another canvas must not close this list. */
export function shouldDismissSelectOverlay(
  event: { target: EventTarget | null },
  reference: Element | null,
): boolean {
  const root = reference?.closest('.d-ui-docs');
  if (!root) return true;
  const target = event.target;
  if (!(target instanceof Node)) return true;
  const clickedRoot = target instanceof Element ? target.closest('.d-ui-docs') : null;
  return !clickedRoot || clickedRoot === root;
}

export function useSelectOverlay(
  open: boolean,
  onOpenChange: (open: boolean) => void,
): SelectOverlay {
  const [referenceEl, setReferenceEl] = useState<Element | null>(null);
  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange,
    placement: 'bottom-start',
    strategy: 'fixed',
    middleware: [
      offset(4),
      flip({ padding: OVERLAY_PADDING }),
      shift({ padding: OVERLAY_PADDING }),
      size({
        padding: OVERLAY_PADDING,
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${Math.min(320, availableHeight)}px`,
          });
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  });
  const theme = useInheritedTheme(referenceEl);
  const portal = overlayPortalProps(theme);
  const dismiss = useDismiss(context, {
    bubbles: false,
    ancestorScroll: false,
    outsidePress: (event) => shouldDismissSelectOverlay(event, referenceEl),
  });
  const { getReferenceProps: getReferencePropsRaw, getFloatingProps } = useInteractions([
    dismiss,
  ]);

  function setReference(node: Element | null) {
    refs.setReference(node);
    setReferenceEl(node);
  }

  /** Frame owns `setReference`; do not let interaction props retarget the ref to the input. */
  function getReferenceProps(userProps?: object) {
    const props = getReferencePropsRaw(userProps) as Record<string, unknown>;
    const { ref: _ignored, ...rest } = props;
    return rest;
  }

  return {
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    portal,
    setReference,
  };
}

/** Unmount after the pointer event so the click cannot open a field underneath. */
export function closeSelectOverlay(close: () => void) {
  queueMicrotask(close);
}

/** Scroll the option inside the listbox only — never the document. */
export function scrollOptionIntoView(listId: string, index: number) {
  if (index < 0) return;
  const node = document.getElementById(`${listId}-opt-${index}`);
  const list = document.getElementById(listId);
  if (!node || !list) return;
  const nodeRect = node.getBoundingClientRect();
  const listRect = list.getBoundingClientRect();
  if (nodeRect.top < listRect.top) {
    list.scrollTop -= listRect.top - nodeRect.top;
  } else if (nodeRect.bottom > listRect.bottom) {
    list.scrollTop += nodeRect.bottom - listRect.bottom;
  }
}
