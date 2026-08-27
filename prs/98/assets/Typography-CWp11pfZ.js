import{u as a,j as e,M as c,P as d,a as t,U as s,b as r}from"./iframe-DwQTNPAe.js";import"./preload-helper-Dp1pzeXC.js";function i(o){const n={code:"code",h1:"h1",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Foundations/Typography"}),`
`,e.jsx(n.h1,{id:"typographie",children:"Typographie"}),`
`,e.jsx(d,{k:"typography.intro"}),`
`,e.jsx(t,{k:"typography.scale"}),`
`,e.jsx(d,{k:"typography.scaleBody"}),`
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
`,e.jsx(s,{items:["typography.a11yLevel","typography.a11yUnderline","typography.a11yExternal","typography.a11yDivider","typography.a11yMuted"]}),`
`,e.jsx(r,{k:"chrome.do"}),`
`,e.jsx(s,{items:["typography.doHeading","typography.doMuted","typography.doExternal"]}),`
`,e.jsx(r,{k:"chrome.dont"}),`
`,e.jsx(s,{items:["typography.dontTwoH1","typography.dontClass","typography.dontBlank"]})]})}function p(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{p as default};
