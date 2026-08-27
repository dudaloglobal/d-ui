import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Garde-fou WCAG 2.2 AA sur les tokens de couleur.
 *
 * Une palette peut changer (charte de marque, thème client) ; les *rôles*, eux,
 * sont figés dans chaque composant. Ce test vérifie les rôles, pas les valeurs :
 * il échoue le jour où une nouvelle palette casse un rapport de contraste,
 * au lieu de le laisser découvrir en audit d'accessibilité.
 *
 * Voir docs/adr/0001-fondations-tokens.md.
 */

type Tokens = Record<string, string>;

/**
 * Le plugin Tailwind intercepte les imports CSS, y compris `?raw` : on lit le
 * fichier sur disque. Vitest s'exécute depuis `packages/ui`, la seconde entrée
 * couvre un lancement depuis la racine du monorepo.
 */
function readTokensCss(): string {
  const candidates = [
    resolve(process.cwd(), 'src/styles/tokens.css'),
    resolve(process.cwd(), 'packages/ui/src/styles/tokens.css'),
  ];

  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error(`tokens.css introuvable. Cherché dans : ${candidates.join(', ')}`);
  }

  return readFileSync(found, 'utf8');
}

const TOKENS_CSS = readTokensCss();

function parseRules(css: string): Array<{ selector: string; tokens: Tokens }> {
  const withoutComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const rules: Array<{ selector: string; tokens: Tokens }> = [];

  for (const match of withoutComments.matchAll(/([^{}]+)\{([^}]*)\}/g)) {
    const selector = (match[1] ?? '').trim();
    const body = match[2] ?? '';
    const tokens: Tokens = {};

    for (const declaration of body.split(';')) {
      const separator = declaration.indexOf(':');
      if (separator === -1) continue;
      const name = declaration.slice(0, separator).trim();
      if (!name.startsWith('--')) continue;
      tokens[name] = declaration.slice(separator + 1).trim();
    }

    rules.push({ selector, tokens });
  }

  return rules;
}

const rules = parseRules(TOKENS_CSS);

const light: Tokens = Object.assign(
  {},
  ...rules.filter((rule) => rule.selector.includes(':root')).map((rule) => rule.tokens),
);

const dark: Tokens = {
  ...light,
  ...(rules.find((rule) => rule.selector.includes("'dark'"))?.tokens ?? {}),
};

function channel(value: number): number {
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string): number {
  const normalized = hex.trim().replace('#', '');
  const expanded =
    normalized.length === 3
      ? normalized
          .split('')
          .map((c) => c + c)
          .join('')
      : normalized;

  if (!/^[0-9a-f]{6}$/i.test(expanded)) {
    throw new Error(`Couleur non hexadécimale : "${hex}"`);
  }

  const component = (offset: number) =>
    channel(Number.parseInt(expanded.slice(offset, offset + 2), 16) / 255);

  return 0.2126 * component(0) + 0.7152 * component(2) + 0.0722 * component(4);
}

function contrast(a: string, b: string): number {
  const first = luminance(a);
  const second = luminance(b);

  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

/**
 * `ratio` suit WCAG 2.2 AA :
 * 4.5:1 pour le texte (1.4.3), 3:1 pour les éléments non textuels (1.4.11).
 */
const REQUIREMENTS = [
  { fg: 'fg', bg: 'bg', ratio: 4.5, rule: '1.4.3 texte courant' },
  { fg: 'fg', bg: 'surface-muted', ratio: 4.5, rule: '1.4.3 texte sur surface' },
  { fg: 'fg-muted', bg: 'bg', ratio: 4.5, rule: '1.4.3 texte secondaire' },
  {
    fg: 'fg-muted',
    bg: 'surface-muted',
    ratio: 4.5,
    rule: '1.4.3 texte secondaire sur surface',
  },
  { fg: 'on-brand', bg: 'brand', ratio: 4.5, rule: '1.4.3 texte sur marque' },
  { fg: 'link', bg: 'bg', ratio: 4.5, rule: '1.4.3 lien' },
  { fg: 'link', bg: 'surface-muted', ratio: 4.5, rule: '1.4.3 lien sur surface' },
  { fg: 'link-visited', bg: 'bg', ratio: 4.5, rule: '1.4.3 lien visité' },
  { fg: 'danger', bg: 'bg', ratio: 4.5, rule: "1.4.3 message d'erreur" },
  {
    fg: 'danger',
    bg: 'surface-muted',
    ratio: 4.5,
    rule: "1.4.3 message d'erreur sur surface",
  },
  { fg: 'on-danger', bg: 'danger', ratio: 4.5, rule: '1.4.3 texte sur danger' },
  { fg: 'border', bg: 'bg', ratio: 3, rule: '1.4.11 frontière de contrôle' },
  {
    fg: 'border',
    bg: 'surface-muted',
    ratio: 3,
    rule: '1.4.11 frontière sur surface',
  },
  { fg: 'focus', bg: 'bg', ratio: 3, rule: '1.4.11 anneau de focus' },
  {
    fg: 'focus',
    bg: 'surface-muted',
    ratio: 3,
    rule: '1.4.11 anneau de focus sur surface',
  },
] as const;

const THEMES = [
  { name: 'light', tokens: light },
  { name: 'dark', tokens: dark },
] as const;

describe('tokens de couleur — WCAG 2.2 AA', () => {
  it('déclare les deux thèmes', () => {
    expect(Object.keys(light).length).toBeGreaterThan(0);
    expect(dark['--d-ui-color-bg']).not.toBe(light['--d-ui-color-bg']);
  });

  for (const theme of THEMES) {
    for (const requirement of REQUIREMENTS) {
      const label = `${theme.name} — ${requirement.fg} sur ${requirement.bg} ≥ ${requirement.ratio}:1 (${requirement.rule})`;

      it(label, () => {
        const foreground = theme.tokens[`--d-ui-color-${requirement.fg}`];
        const background = theme.tokens[`--d-ui-color-${requirement.bg}`];

        if (!foreground || !background) {
          throw new Error(
            `token manquant dans le thème ${theme.name} : --d-ui-color-${
              foreground ? requirement.bg : requirement.fg
            }`,
          );
        }

        const ratio = contrast(foreground, background);

        expect(
          Number(ratio.toFixed(2)),
          `${foreground} sur ${background} donne ${ratio.toFixed(2)}:1`,
        ).toBeGreaterThanOrEqual(requirement.ratio);
      });
    }
  }
});
