# Consommer `d-ui`

Contrat public :

1. API React (`Button`, `ThemeProvider`, `SkipLink`, …)
2. variables CSS `--d-ui-*`
3. `import 'd-ui/styles.css'`

Les classes Tailwind internes ne font pas partie du contrat.

```tsx
import 'd-ui/styles.css';
import { Button, SkipLink, ThemeProvider } from 'd-ui';

export function App() {
  return (
    <ThemeProvider mode="light">
      <SkipLink>Aller au contenu principal</SkipLink>
      <main id="main" tabIndex={-1}>
        <Button>Enregistrer</Button>
      </main>
    </ThemeProvider>
  );
}
```

`mode="light" | "dark" | "system"`. White-label : `tokens={{ brand, brandHover, onBrand, focus }}`.
