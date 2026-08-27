import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-AGuS8-Lw.js";import{M as r}from"./index-CxtFEFAj.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B_2c9ucO.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Foundations/Typography"}),`
`,e.jsx(n.h1,{id:"typographie",children:"Typographie"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Text"}),", ",e.jsx(n.code,{children:"Heading"}),", ",e.jsx(n.code,{children:"Link"})," et ",e.jsx(n.code,{children:"Divider"})," sont les primitives sur lesquelles reposent les autres composants. Un écran qui écrit ",e.jsx(n.code,{children:"text-[17px]"})," ou ",e.jsx(n.code,{children:"#475569"})," en dur ne passe pas la revue."]}),`
`,e.jsxs(n.p,{children:["Les pages détaillées (états, accessibilité, propriétés) sont sous ",e.jsx(n.strong,{children:"Components"})," : Text, Heading, Link, Divider."]}),`
`,e.jsx(n.h2,{id:"échelle",children:"Échelle"}),`
`,e.jsx(n.p,{children:"L’échelle est celle de Tailwind, exposée sous des rôles sémantiques."}),`
`,e.jsxs(n.p,{children:[`| Rôle       | Composant          | Classe      |
| ---------- | ------------------ | ----------- |
| `,e.jsx(n.code,{children:"display"}),"  | ",e.jsx(n.code,{children:"Heading"}),"          | ",e.jsx(n.code,{children:"text-4xl"}),`  |
| `,e.jsx(n.code,{children:"title"}),"    | ",e.jsx(n.code,{children:"Heading"}),"          | ",e.jsx(n.code,{children:"text-2xl"}),`  |
| `,e.jsx(n.code,{children:"subtitle"})," | ",e.jsx(n.code,{children:"Heading"}),"          | ",e.jsx(n.code,{children:"text-xl"}),`   |
| `,e.jsx(n.code,{children:"body"}),"     | ",e.jsx(n.code,{children:"Text"})," / ",e.jsx(n.code,{children:"Heading"})," | ",e.jsx(n.code,{children:"text-base"}),` |
| `,e.jsx(n.code,{children:"body-sm"}),"  | ",e.jsx(n.code,{children:"Text"}),"             | ",e.jsx(n.code,{children:"text-sm"}),`   |
| `,e.jsx(n.code,{children:"caption"}),"  | ",e.jsx(n.code,{children:"Text"}),"             | ",e.jsx(n.code,{children:"text-xs"}),"   |"]}),`
`,e.jsx(n.h2,{id:"composition",children:"Composition"}),`
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
`,e.jsx(n.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Le niveau de titre porte la structure, pas l’apparence."})," ",e.jsx(n.code,{children:"Heading"})," sépare ",e.jsx(n.code,{children:"level"})," de ",e.jsx(n.code,{children:"size"})," (WCAG 1.3.1)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Les liens sont soulignés en permanence"})," (WCAG 1.4.1)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Un lien externe s’annonce."})," ",e.jsx(n.code,{children:"external"})," ajoute ",e.jsx(n.code,{children:'rel="noopener noreferrer"'})," et un fallback anglais ",e.jsx(n.code,{children:"(opens in a new tab)"}),"."]}),`
`,e.jsx(n.li,{children:e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Divider"})," est décoratif par défaut."]})}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:'tone="muted"'})," reste au-dessus de 4.5:1."]})," Le test ",e.jsx(n.code,{children:"tokens.contrast.test.ts"})," le vérifie."]}),`
`]}),`
`,e.jsx(n.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'<Heading level={2} size="display">'})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'<Text tone="muted">'})," pour une métadonnée"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Link external>"})," pour une cible hors application"]}),`
`]}),`
`,e.jsx(n.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Heading level={1}>"})," deux fois sur une page"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'<Text className="text-slate-400">'})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'target="_blank"'})," sans ",e.jsx(n.code,{children:"rel"})]}),`
`]})]})}function u(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
