import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-AGuS8-Lw.js";import{M as t}from"./index-B1dEHoUP.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ywzGOFMB.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function s(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Introduction"}),`
`,n.jsx(i.h1,{id:"introduction",children:"Introduction"}),`
`,n.jsxs(i.p,{children:["Storybook du package ",n.jsx(i.strong,{children:"d-ui"})," (Dudalo Design System)."]}),`
`,n.jsx(i.h2,{id:"information-architecture",children:"Information architecture"}),`
`,n.jsxs(i.p,{children:[`| Section           | Contenu                      |
| ----------------- | ---------------------------- |
| `,n.jsx(i.strong,{children:"Introduction"}),`  | Contrat public, consommation |
| `,n.jsx(i.strong,{children:"Foundations"}),`   | Tokens, thème                |
| `,n.jsx(i.strong,{children:"Components"}),`    | API visuelle (Button, …)     |
| `,n.jsx(i.strong,{children:"Accessibility"})," | ",n.jsx(i.code,{children:"VisuallyHidden"}),", ",n.jsx(i.code,{children:"SkipLink"})," |"]}),`
`,n.jsx(i.h2,{id:"contrat-public",children:"Contrat public"}),`
`,n.jsx(i.p,{children:"Les applications consommatrices utilisent :"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:["les composants React (",n.jsx(i.code,{children:"Button"}),", ",n.jsx(i.code,{children:"ThemeProvider"}),", ",n.jsx(i.code,{children:"SkipLink"}),", …)"]}),`
`,n.jsxs(i.li,{children:["les ",n.jsx(i.strong,{children:"variables CSS"})," ",n.jsx(i.code,{children:"--d-ui-*"})]}),`
`,n.jsxs(i.li,{children:["la feuille ",n.jsx(i.code,{children:"d-ui/styles.css"})]}),`
`]}),`
`,n.jsx(i.p,{children:"Ne pas dépendre des classes Tailwind internes du package."}),`
`,n.jsx(i.h2,{id:"consommation",children:"Consommation"}),`
`,n.jsxs(i.p,{children:["Guide : ",n.jsx(i.a,{href:"https://github.com/dudaloglobal/d-ui/blob/main/docs/consume.md",rel:"nofollow",children:"docs/consume.md"}),"."]}),`
`,n.jsx(i.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,n.jsxs(i.p,{children:["Cible ",n.jsx(i.strong,{children:"WCAG 2.2 AA"}),". Chaque story est contrôlée avec l’addon a11y. Voir ",n.jsx(i.code,{children:"docs/accessibility.md"}),"."]})]})}function j(e={}){const{wrapper:i}={...o(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{j as default};
