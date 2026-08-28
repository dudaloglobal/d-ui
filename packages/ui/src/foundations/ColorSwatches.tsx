import { useLayoutEffect, useRef, useState, type ReactElement } from 'react';
import { H3 } from '../../.storybook/docs-i18n';

const STANDARD_TINTS = [80, 60, 40, 20, 10, 5] as const;
const YELLOW_TINTS = [90, 80, 60, 48, 24, 12] as const;
const DARK_TINTS = [70, 60, 38, 20, 12, 3] as const;
const LIGHT_TINTS = [90, 80, 60, 40, 20, 10] as const;

export function tint(token: string, percent: number): string {
  return `color-mix(in srgb, var(${token}) ${percent}%, transparent)`;
}

export function shade(token: string, percent: number): string {
  return `color-mix(in srgb, var(${token}) ${percent}%, black)`;
}

export type Rgba = { r: number; g: number; b: number; a: number };

export function parseCssColor(css: string): Rgba | null {
  const srgb = css.match(
    /color\(\s*srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)/i,
  );
  if (srgb) {
    return {
      r: Math.round(Number.parseFloat(srgb[1] ?? '0') * 255),
      g: Math.round(Number.parseFloat(srgb[2] ?? '0') * 255),
      b: Math.round(Number.parseFloat(srgb[3] ?? '0') * 255),
      a: parseAlpha(srgb[4], 1),
    };
  }

  const match = css.match(
    /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)/i,
  );
  if (!match) return null;
  return {
    r: Math.round(Number.parseFloat(match[1] ?? '0')),
    g: Math.round(Number.parseFloat(match[2] ?? '0')),
    b: Math.round(Number.parseFloat(match[3] ?? '0')),
    a: parseAlpha(match[4], 1),
  };
}

function parseAlpha(raw: string | undefined, fallback: number): number {
  if (raw === undefined) return fallback;
  const value = raw.endsWith('%') ? Number.parseFloat(raw) / 100 : Number.parseFloat(raw);
  return Number.isFinite(value) ? value : fallback;
}

export function formatCssColor(css: string): string {
  const color = parseCssColor(css);
  if (!color) return css;
  const hex = toHex(color.r, color.g, color.b);
  if (color.a >= 0.995) return hex;
  return `${hex}${Math.round(color.a * 100)}%`;
}

function toHex(r: number, g: number, b: number): string {
  return `#${[r, g, b]
    .map((channel) =>
      Math.max(0, Math.min(255, Math.round(channel)))
        .toString(16)
        .padStart(2, '0'),
    )
    .join('')}`;
}

export function relativeLuminance(r: number, g: number, b: number): number {
  const toLin = (channel: number) => {
    const s = channel / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
}

export function contrastInk(r: number, g: number, b: number): string {
  const luminance = relativeLuminance(r, g, b);
  const contrastWhite = 1.05 / (luminance + 0.05);
  const contrastBlack = (luminance + 0.05) / 0.05;
  return contrastWhite >= contrastBlack ? '#ffffff' : '#000000';
}

export function composite(fg: Rgba, bg: Rgba): { r: number; g: number; b: number } {
  const alpha = Math.min(1, Math.max(0, fg.a));
  return {
    r: Math.round(fg.r * alpha + bg.r * (1 - alpha)),
    g: Math.round(fg.g * alpha + bg.g * (1 - alpha)),
    b: Math.round(fg.b * alpha + bg.b * (1 - alpha)),
  };
}

type SwatchSpec = {
  step: string;
  background: string;
  opacity?: number;
};

function useComputedHex(background: string): {
  hex: string;
  probe: ReactElement;
} {
  const ref = useRef<HTMLDivElement>(null);
  const [hex, setHex] = useState('');

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const color = parseCssColor(getComputedStyle(el).backgroundColor);
    if (color) setHex(toHex(color.r, color.g, color.b));
  }, [background]);

  return {
    hex,
    probe: (
      <div
        ref={ref}
        aria-hidden="true"
        className="pointer-events-none absolute size-px overflow-hidden opacity-0"
        style={{ background }}
      />
    ),
  };
}

function Hue({ spec, nHex }: { spec: SwatchSpec; nHex: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ink, setInk] = useState('#000000');
  const [solidHex, setSolidHex] = useState('');

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const fg = parseCssColor(getComputedStyle(el).backgroundColor);
      if (!fg) return;
      setSolidHex(toHex(fg.r, fg.g, fg.b));
      let bg: Rgba = { r: 255, g: 255, b: 255, a: 1 };
      let node: HTMLElement | null = el.parentElement;
      while (node) {
        const parsed = parseCssColor(getComputedStyle(node).backgroundColor);
        if (parsed && parsed.a > 0.01) {
          bg = parsed;
          break;
        }
        node = node.parentElement;
      }
      const mixed = composite(fg, bg);
      setInk(contrastInk(mixed.r, mixed.g, mixed.b));
    };
    update();
    const root = el.closest('[data-d-ui-theme]');
    if (!root) return undefined;
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ['data-d-ui-theme'] });
    return () => observer.disconnect();
  }, [spec.background]);

  const hex = spec.opacity === undefined ? solidHex : nHex;

  return (
    <div
      ref={ref}
      role="listitem"
      className="w-20 px-2 py-6"
      style={{ background: spec.background, color: ink }}
    >
      <span className="block text-sm leading-5 font-normal">{spec.step}</span>
      <div className="mt-6">
        <span className="block text-xs leading-4">{hex}</span>
        {spec.opacity !== undefined ? (
          <span className="block text-xs leading-4">{spec.opacity}%</span>
        ) : null}
      </div>
    </div>
  );
}

function Family({
  titleKey,
  nBackground,
  swatches,
}: {
  titleKey: string;
  nBackground: string;
  swatches: SwatchSpec[];
}) {
  const { hex: nHex, probe } = useComputedHex(nBackground);

  return (
    <section>
      <H3 k={titleKey} />
      {probe}
      <div className="sb-unstyled flex flex-wrap" role="list">
        {swatches.map((spec) => (
          <Hue key={spec.step} spec={spec} nHex={nHex} />
        ))}
      </div>
    </section>
  );
}

function tintRamp(token: string, percents: readonly number[]): SwatchSpec[] {
  return percents.map((percent, index) => ({
    step: `L${index + 1}`,
    background: tint(token, percent),
    opacity: percent,
  }));
}

function chromaticRamp(
  token: string,
  extras: { d2: string; d1: string },
  percents: readonly number[] = STANDARD_TINTS,
): { nBackground: string; swatches: SwatchSpec[] } {
  return {
    nBackground: `var(${token})`,
    swatches: [
      { step: 'D2', background: extras.d2 },
      { step: 'D1', background: extras.d1 },
      { step: 'N', background: `var(${token})` },
      ...tintRamp(token, percents),
    ],
  };
}

function overlayRamp(
  token: string,
  percents: readonly number[],
): { nBackground: string; swatches: SwatchSpec[] } {
  return {
    nBackground: `var(${token})`,
    swatches: [{ step: 'N', background: `var(${token})` }, ...tintRamp(token, percents)],
  };
}

export function PrimaryPalettes() {
  const brand = chromaticRamp('--d-ui-color-brand', {
    d2: shade('--d-ui-color-brand', 72),
    d1: 'var(--d-ui-color-brand-hover)',
  });
  const dark = overlayRamp('--d-ui-color-fg', DARK_TINTS);
  const light = overlayRamp('--d-ui-color-bg', LIGHT_TINTS);

  return (
    <div className="mb-10 flex flex-col gap-12">
      <Family titleKey="color.familyBrand" {...brand} />
      <Family titleKey="color.familyDark" {...dark} />
      <Family titleKey="color.familyLight" {...light} />
    </div>
  );
}

export function SecondaryPalettes() {
  const warning = chromaticRamp(
    '--d-ui-color-warning',
    {
      d2: shade('--d-ui-color-warning', 72),
      d1: shade('--d-ui-color-warning', 88),
    },
    YELLOW_TINTS,
  );
  const danger = chromaticRamp('--d-ui-color-danger', {
    d2: shade('--d-ui-color-danger', 72),
    d1: shade('--d-ui-color-danger', 88),
  });
  const success = chromaticRamp('--d-ui-color-success', {
    d2: shade('--d-ui-color-success', 72),
    d1: shade('--d-ui-color-success', 88),
  });
  const info = chromaticRamp('--d-ui-color-info', {
    d2: shade('--d-ui-color-info', 72),
    d1: shade('--d-ui-color-info', 88),
  });
  const violet = chromaticRamp('--d-ui-color-link-visited', {
    d2: shade('--d-ui-color-link-visited', 72),
    d1: shade('--d-ui-color-link-visited', 88),
  });

  return (
    <div className="mb-10 flex flex-col gap-12">
      <Family titleKey="color.familyWarning" {...warning} />
      <Family titleKey="color.familyDanger" {...danger} />
      <Family titleKey="color.familySuccess" {...success} />
      <Family titleKey="color.familyInfo" {...info} />
      <Family titleKey="color.familyViolet" {...violet} />
    </div>
  );
}
