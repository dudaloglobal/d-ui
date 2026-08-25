import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-AGuS8-Lw.js";import{M as d}from"./index-DSoJthh8.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DKA0ZmVS.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Fondations/Typographie"}),`
`,e.jsx(n.h1,{id:"typographie",children:"Typographie"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Text"}),", ",e.jsx(n.code,{children:"Heading"}),", ",e.jsx(n.code,{children:"Link"})," et ",e.jsx(n.code,{children:"Divider"}),` sont les primitives sur lesquelles reposent tous
les autres composants. Un écran qui écrit `,e.jsx(n.code,{children:"text-[17px]"})," ou ",e.jsx(n.code,{children:"#475569"}),` en dur ne passe pas
la revue : ces quatre composants existent pour rendre ça inutile.`]}),`
`,e.jsx(n.h2,{id:"échelle",children:"Échelle"}),`
`,e.jsxs(n.p,{children:[`L'échelle est celle de Tailwind, exposée sous des rôles sémantiques. Voir
`,e.jsx(n.a,{href:"https://github.com/dudaloglobal/d-ui/blob/main/docs/adr/0001-fondations-tokens.md",rel:"nofollow",children:"ADR 0001"}),"."]}),`
`,e.jsxs(n.p,{children:[`| Rôle       | Composant          | Classe      |
| ---------- | ------------------ | ----------- |
| `,e.jsx(n.code,{children:"display"}),"  | ",e.jsx(n.code,{children:"Heading"}),"          | ",e.jsx(n.code,{children:"text-4xl"}),`  |
| `,e.jsx(n.code,{children:"title"}),"    | ",e.jsx(n.code,{children:"Heading"}),"          | ",e.jsx(n.code,{children:"text-2xl"}),`  |
| `,e.jsx(n.code,{children:"subtitle"})," | ",e.jsx(n.code,{children:"Heading"}),"          | ",e.jsx(n.code,{children:"text-xl"}),`   |
| `,e.jsx(n.code,{children:"body"}),"     | ",e.jsx(n.code,{children:"Text"})," / ",e.jsx(n.code,{children:"Heading"})," | ",e.jsx(n.code,{children:"text-base"}),` |
| `,e.jsx(n.code,{children:"body-sm"}),"  | ",e.jsx(n.code,{children:"Text"}),"             | ",e.jsx(n.code,{children:"text-sm"}),`   |
| `,e.jsx(n.code,{children:"caption"}),"  | ",e.jsx(n.code,{children:"Text"}),"             | ",e.jsx(n.code,{children:"text-xs"}),"   |"]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Divider, Heading, Link, Text } from 'd-ui';
import 'd-ui/styles.css';

<article>
  <Heading level={1}>Parcours d’apprentissage</Heading>
  <Text tone="muted" size="body-sm">
    Mis à jour il y a deux jours
  </Text>
  <Divider />
  <Text>
    Consultez le <Link href="/catalogue">catalogue</Link> pour choisir un module.
  </Text>
</article>;
`})}),`
`,e.jsxs(n.p,{children:[`Les tableaux de props de chaque composant sont générés automatiquement dans
`,e.jsx(n.code,{children:"Components / Text"}),", ",e.jsx(n.code,{children:"Heading"}),", ",e.jsx(n.code,{children:"Link"})," et ",e.jsx(n.code,{children:"Divider"}),"."]}),`
`,e.jsx(n.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Le niveau de titre porte la structure, pas l'apparence."})," ",e.jsx(n.code,{children:"Heading"})," sépare ",e.jsx(n.code,{children:"level"}),` de
`,e.jsx(n.code,{children:"size"}),` précisément pour qu'on n'ait jamais à sauter un niveau pour obtenir la bonne
taille — ce qui casserait la navigation par titres (WCAG 1.3.1).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Les liens sont soulignés en permanence."}),` La couleur seule ne suffit pas à identifier
un lien dans un paragraphe (WCAG 1.4.1).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Un lien externe s'annonce."})," ",e.jsx(n.code,{children:"external"})," ajoute ",e.jsx(n.code,{children:'rel="noopener noreferrer"'}),` et un texte
masqué « (ouvre dans un nouvel onglet) ».`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Divider"})," est décoratif par défaut"]}),", donc masqué aux lecteurs d'écran. Le ",e.jsx(n.code,{children:"label"}),`
n'est justifié que si la séparation porte réellement du sens.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:'tone="muted"'})," reste au-dessus de 4.5:1"]}),` dans les deux thèmes. C'est une nuance de
hiérarchie, pas une autorisation de baisser le contraste — le test
`,e.jsx(n.code,{children:"tokens.contrast.test.ts"})," le vérifie à chaque CI."]}),`
`]}),`
`,e.jsx(n.h2,{id:"à-faire--à-éviter",children:"À faire / à éviter"}),`
`,e.jsxs(n.p,{children:[`| ✅ À faire                                        | ❌ À éviter                                          |
| ------------------------------------------------- | ---------------------------------------------------- |
| `,e.jsx(n.code,{children:'<Heading level={2} size="display">'}),"              | ",e.jsx(n.code,{children:"<Heading level={1}>"}),` deux fois sur une page         |
| `,e.jsx(n.code,{children:'<Text tone="muted">'})," pour une métadonnée         | ",e.jsx(n.code,{children:'<Text className="text-slate-400">'}),`                  |
| `,e.jsx(n.code,{children:"<Link external>"})," pour une cible hors application | ",e.jsx(n.code,{children:'target="_blank"'})," posé à la main sans ",e.jsx(n.code,{children:"rel"}),`          |
| `,e.jsx(n.code,{children:"<Divider />"})," entre deux blocs visuels            | ",e.jsx(n.code,{children:'<Divider label="…" />'})," sur chaque ligne d'une liste |"]})]})}function p(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{p as default};
