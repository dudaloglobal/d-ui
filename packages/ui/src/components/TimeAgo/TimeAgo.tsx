import { useEffect, useState, type TimeHTMLAttributes } from 'react';
import { VisuallyHidden } from '../../a11y/VisuallyHidden';
import { cx } from '../../lib/cx';

export type TimeAgoSize = 'sm' | 'md';

export type TimeAgoProps = Omit<
  TimeHTMLAttributes<HTMLTimeElement>,
  'children' | 'dateTime'
> & {
  /**
   * Instant à afficher. Accepte un `Date`, une chaîne ISO-8601, ou des
   * millisecondes epoch. Une valeur invalide rend un repli sans `<time>`.
   */
  date: Date | string | number;
  /**
   * Locale BCP 47 pour le texte relatif et absolu (`fr`, `en-US`, …).
   * Pose aussi `lang` (WCAG 3.1.2). Défaut : locale d’exécution.
   */
  locale?: Intl.LocalesArgument;
  /**
   * Si `true`, rafraîchit le texte relatif sur un intervalle grossier.
   * Visuel uniquement — pas d’`aria-live`. Passez `aria-live="polite"` pour opt-in.
   */
  live?: boolean;
  /** Taille du texte. `'md'` par défaut. */
  size?: TimeAgoSize;
  /** Infobulle native. Défaut : l’heure absolue formatée. */
  title?: string;
};

const sizeClass: Record<TimeAgoSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
};

const UNITS: ReadonlyArray<{ unit: Intl.RelativeTimeFormatUnit; ms: number }> = [
  { unit: 'year', ms: 365.25 * 24 * 60 * 60 * 1000 },
  { unit: 'month', ms: (365.25 / 12) * 24 * 60 * 60 * 1000 },
  { unit: 'week', ms: 7 * 24 * 60 * 60 * 1000 },
  { unit: 'day', ms: 24 * 60 * 60 * 1000 },
  { unit: 'hour', ms: 60 * 60 * 1000 },
  { unit: 'minute', ms: 60 * 1000 },
  { unit: 'second', ms: 1000 },
];

function toDate(value: Date | string | number): Date {
  return value instanceof Date ? value : new Date(value);
}

function pickUnit(diffMs: number): { value: number; unit: Intl.RelativeTimeFormatUnit } {
  for (const { unit, ms } of UNITS) {
    const value = Math.trunc(diffMs / ms);
    if (Math.abs(value) >= 1 || unit === 'second') {
      return { value, unit };
    }
  }
  return { value: 0, unit: 'second' };
}

function formatTimeAgo(
  date: Date,
  now: Date,
  locale?: Intl.LocalesArgument,
): { iso: string; relative: string; absolute: string } {
  const { value, unit } = pickUnit(date.getTime() - now.getTime());
  return {
    iso: date.toISOString(),
    relative: new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(
      value,
      unit,
    ),
    absolute: new Intl.DateTimeFormat(locale, {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(date),
  };
}

function nextIntervalMs(diffMs: number): number {
  const abs = Math.abs(diffMs);
  if (abs < 60_000) return 10_000;
  if (abs < 3_600_000) return 30_000;
  if (abs < 86_400_000) return 60_000;
  return 3_600_000;
}

/** Balise BCP 47 pour WCAG 3.1.2 lorsque le texte n’est pas dans la langue du document. */
function langFromLocale(locale?: Intl.LocalesArgument): string | undefined {
  if (typeof locale === 'string') return locale;
  if (Array.isArray(locale)) {
    const first = locale[0];
    return typeof first === 'string' ? first : first?.toString();
  }
  if (locale instanceof Intl.Locale) return locale.toString();
  return undefined;
}

export function TimeAgo({
  date,
  locale,
  live = false,
  size = 'md',
  className,
  title,
  lang,
  ...rest
}: TimeAgoProps) {
  const [now, setNow] = useState(() => new Date());
  const resolved = toDate(date);
  const timestamp = resolved.getTime();
  const valid = !Number.isNaN(timestamp);
  const textLang = langFromLocale(locale) ?? lang;
  const classes = cx('font-sans text-fg', sizeClass[size], className);

  useEffect(() => {
    if (!live || !valid) return undefined;

    let id: ReturnType<typeof setTimeout>;
    const tick = () => {
      const current = new Date();
      setNow(current);
      id = setTimeout(tick, nextIntervalMs(timestamp - current.getTime()));
    };
    id = setTimeout(tick, nextIntervalMs(timestamp - Date.now()));
    return () => clearTimeout(id);
  }, [live, valid, timestamp]);

  if (!valid) {
    return (
      <span {...rest} lang={textLang} className={classes}>
        —
      </span>
    );
  }

  const { iso, relative, absolute } = formatTimeAgo(resolved, now, locale);

  return (
    <time
      {...rest}
      dateTime={iso}
      lang={textLang}
      title={title ?? absolute}
      suppressHydrationWarning
      className={classes}
    >
      {relative}
      <VisuallyHidden>{`, ${absolute}`}</VisuallyHidden>
    </time>
  );
}
