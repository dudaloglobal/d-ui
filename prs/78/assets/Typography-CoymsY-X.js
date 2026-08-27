import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-AGuS8-Lw.js";import{M as a}from"./index-xxiSHfhw.js";import{P as i,a as t,U as r,b as s}from"./docs-i18n-D3ZiU-L1.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C4t9bl2k.js";import"./index-W1VnaOaO.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function d(o){const n={code:"code",h1:"h1",p:"p",pre:"pre",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Foundations/Typography"}),`
`,e.jsx(n.h1,{id:"typographie",children:"Typographie"}),`
`,e.jsx(i,{k:"typography.intro"}),`
`,e.jsx(t,{k:"typography.scale"}),`
`,e.jsx(i,{k:"typography.scaleBody"}),`
`,e.jsxs(n.p,{children:[`| Rôle       | Composant          | Classe      |
| ---------- | ------------------ | ----------- |
| `,e.jsx(n.code,{children:"display"}),"  | ",e.jsx(n.code,{children:"Heading"}),"          | ",e.jsx(n.code,{children:"text-4xl"}),`  |
| `,e.jsx(n.code,{children:"title"}),"    | ",e.jsx(n.code,{children:"Heading"}),"          | ",e.jsx(n.code,{children:"text-2xl"}),`  |
| `,e.jsx(n.code,{children:"subtitle"})," | ",e.jsx(n.code,{children:"Heading"}),"          | ",e.jsx(n.code,{children:"text-xl"}),`   |
| `,e.jsx(n.code,{children:"body"}),"     | ",e.jsx(n.code,{children:"Text"})," / ",e.jsx(n.code,{children:"Heading"})," | ",e.jsx(n.code,{children:"text-base"}),` |
| `,e.jsx(n.code,{children:"body-sm"}),"  | ",e.jsx(n.code,{children:"Text"}),"             | ",e.jsx(n.code,{children:"text-sm"}),`   |
| `,e.jsx(n.code,{children:"caption"}),"  | ",e.jsx(n.code,{children:"Text"}),"             | ",e.jsx(n.code,{children:"text-xs"}),"   |"]}),`
`,e.jsx(t,{k:"typography.composition"}),`
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
`,e.jsx(t,{k:"chrome.accessibility"}),`
`,e.jsx(r,{items:["typography.a11yLevel","typography.a11yUnderline","typography.a11yExternal","typography.a11yDivider","typography.a11yMuted"]}),`
`,e.jsx(s,{k:"chrome.do"}),`
`,e.jsx(r,{items:["typography.doHeading","typography.doMuted","typography.doExternal"]}),`
`,e.jsx(s,{k:"chrome.dont"}),`
`,e.jsx(r,{items:["typography.dontTwoH1","typography.dontClass","typography.dontBlank"]})]})}function T(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(d,{...o})}):d(o)}export{T as default};
