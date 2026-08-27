import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-AGuS8-Lw.js";import{M as c}from"./index-BOyy78aJ.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-e3S1s0Rc.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"d-ui",children:"d-ui"}),`
`,n.jsxs(e.p,{children:["Storybook du package ",n.jsx(e.strong,{children:"d-ui"})," (Dudalo Design System)."]}),`
`,n.jsx(e.h2,{id:"information-architecture",children:"Information architecture"}),`
`,n.jsxs(e.p,{children:[`| Section           | Contenu                      |
| ----------------- | ---------------------------- |
| `,n.jsx(e.strong,{children:"Introduction"}),`  | Contrat public, consommation |
| `,n.jsx(e.strong,{children:"Foundations"}),"   | Tokens, ",n.jsx(e.code,{children:"ThemeProvider"}),`      |
| `,n.jsx(e.strong,{children:"Components"}),`    | API visuelle (Button, …)     |
| `,n.jsx(e.strong,{children:"Accessibility"})," | ",n.jsx(e.code,{children:"VisuallyHidden"}),", ",n.jsx(e.code,{children:"SkipLink"})," |"]}),`
`,n.jsx(e.h2,{id:"contrat-public",children:"Contrat public"}),`
`,n.jsx(e.p,{children:"Les applications consommatrices utilisent :"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["les composants React (",n.jsx(e.code,{children:"Button"}),", ",n.jsx(e.code,{children:"Text"}),", ",n.jsx(e.code,{children:"Heading"}),", ",n.jsx(e.code,{children:"Link"}),", ",n.jsx(e.code,{children:"Field"}),", ",n.jsx(e.code,{children:"TextInput"}),", ",n.jsx(e.code,{children:"Textarea"}),", ",n.jsx(e.code,{children:"TimeAgo"}),", ",n.jsx(e.code,{children:"ThemeProvider"}),", ",n.jsx(e.code,{children:"SkipLink"}),", …)"]}),`
`,n.jsxs(e.li,{children:["les ",n.jsx(e.strong,{children:"variables CSS"})," ",n.jsx(e.code,{children:"--d-ui-*"})]}),`
`,n.jsxs(e.li,{children:["la feuille ",n.jsx(e.code,{children:"d-ui/styles.css"})]}),`
`]}),`
`,n.jsx(e.p,{children:"Ne pas dépendre des classes Tailwind internes du package."}),`
`,n.jsx(e.h2,{id:"consommation",children:"Consommation"}),`
`,n.jsxs(e.p,{children:["Guide : ",n.jsx(e.a,{href:"https://github.com/dudaloglobal/d-ui/blob/main/docs/consume.md",rel:"nofollow",children:"docs/consume.md"}),"."]}),`
`,n.jsx(e.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,n.jsxs(e.p,{children:["Cible ",n.jsx(e.strong,{children:"WCAG 2.2 AA"}),". Chaque story est contrôlée avec l’addon a11y. Voir ",n.jsx(e.code,{children:"docs/accessibility.md"}),"."]})]})}function u(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{u as default};
