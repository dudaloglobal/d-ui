import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-AGuS8-Lw.js";import{M as d}from"./index-CxtFEFAj.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B_2c9ucO.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Foundations/Tokens"}),`
`,e.jsx(n.h1,{id:"tokens",children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Les couleurs sémantiques vivent dans ",e.jsx(n.code,{children:"packages/ui/src/styles/tokens.css"}),". Les hex n’existent ",e.jsx(n.strong,{children:"que là"}),". Les composants consomment ",e.jsx(n.code,{children:"var(--d-ui-*)"})," via le pont Tailwind ",e.jsx(n.code,{children:"@theme inline"})," dans ",e.jsx(n.code,{children:"styles/index.css"})," — ",e.jsx(n.code,{children:"inline"})," est obligatoire pour que le thème sombre suive ",e.jsx(n.code,{children:"data-d-ui-theme"})," et ne fige pas les valeurs du thème clair."]}),`
`,e.jsxs(n.p,{children:["Les noms TypeScript publics sont ",e.jsx(n.code,{children:"tokenNames"})," (",e.jsx(n.code,{children:"import { tokenNames } from 'd-ui'"}),")."]}),`
`,e.jsx(n.h2,{id:"contrat",children:"Contrat"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--d-ui-<famille>-<rôle>"})," — exemple ",e.jsx(n.code,{children:"--d-ui-color-brand"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Clair : ",e.jsx(n.code,{children:":root"})," + ",e.jsx(n.code,{children:"[data-d-ui-theme='light']"})]}),`
`,e.jsxs(n.li,{children:["Sombre : ",e.jsx(n.code,{children:"[data-d-ui-theme='dark']"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Les classes Tailwind internes (",e.jsx(n.code,{children:"bg-brand"}),", ",e.jsx(n.code,{children:"text-fg"}),", …) ",e.jsx(n.strong,{children:"ne font pas"})," partie du contrat consommateur. Les apps utilisent les variables CSS, ou les composants."]}),`
`,e.jsx(n.h2,{id:"ajouter-un-token",children:"Ajouter un token"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Déclarer la variable clair ",e.jsx(n.strong,{children:"et"})," sombre dans ",e.jsx(n.code,{children:"tokens.css"}),"."]}),`
`,e.jsxs(n.li,{children:["L’exposer dans ",e.jsx(n.code,{children:"@theme inline"})," si un utilitaire interne en a besoin."]}),`
`,e.jsxs(n.li,{children:["L’ajouter à ",e.jsx(n.code,{children:"packages/ui/src/tokens/names.ts"}),"."]}),`
`,e.jsxs(n.li,{children:["Documenter le contraste si c’est une paire texte / fond (",e.jsx(n.code,{children:"docs/tokens.md"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:["White-label : passer ",e.jsx(n.code,{children:"tokens"})," à ",e.jsx(n.code,{children:"ThemeProvider"})," (",e.jsx(n.code,{children:"brand"}),", ",e.jsx(n.code,{children:"brandHover"}),", ",e.jsx(n.code,{children:"onBrand"}),", ",e.jsx(n.code,{children:"focus"}),"). Cela n’ajoute pas de nouveaux noms, ça surcharge les valeurs."]}),`
`,e.jsx(n.h2,{id:"contraste",children:"Contraste"}),`
`,e.jsxs(n.p,{children:["Cible release : ",e.jsx(n.strong,{children:"WCAG 2.2 AA"})," — 4.5:1 pour le texte, 3:1 pour l’UI non texte. Les valeurs actuelles sont un bootstrap ; le gel Figma (DS-006) les remplacera ",e.jsx(n.strong,{children:"sans renommer"})," les variables si possible."]}),`
`,e.jsxs(n.p,{children:[`| Rôle                   | Usage                                        |
| ---------------------- | -------------------------------------------- |
| `,e.jsx(n.code,{children:"fg"})," / ",e.jsx(n.code,{children:"bg"}),`            | Texte courant                                |
| `,e.jsx(n.code,{children:"fg-muted"}),`             | Hiérarchie, jamais sous 4.5:1                |
| `,e.jsx(n.code,{children:"fg-disabled"}),`          | Peut rester sous 4.5:1 ; UI non texte ≥ 3:1  |
| `,e.jsx(n.code,{children:"on-brand"})," / ",e.jsx(n.code,{children:"brand"}),`   | Texte sur action primaire                    |
| `,e.jsx(n.code,{children:"danger"})," / ",e.jsx(n.code,{children:"on-danger"}),` | Erreur, pas la seule indication (WCAG 1.4.1) |
| `,e.jsx(n.code,{children:"border"}),"               | Frontière de ",e.jsx(n.strong,{children:"contrôle"}),` (1.4.11)           |
| `,e.jsx(n.code,{children:"field"}),"                | Fond de saisie, pas une couleur de texte     |"]}),`
`,e.jsxs(n.p,{children:["Voir ",e.jsx(n.a,{href:"https://github.com/dudaloglobal/d-ui/blob/main/docs/tokens.md",rel:"nofollow",children:"docs/tokens.md"}),"."]}),`
`,e.jsx(n.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"color: var(--d-ui-color-fg)"})," ou ",e.jsx(n.code,{children:'className="text-fg"'})," ",e.jsx(n.strong,{children:"dans"})," le package"]}),`
`,e.jsxs(n.li,{children:["Un hex nouveau uniquement dans ",e.jsx(n.code,{children:"tokens.css"}),", light ",e.jsx(n.strong,{children:"et"})," dark"]}),`
`]}),`
`,e.jsx(n.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"#0f172a"})," (ou n’importe quel hex) dans un ",e.jsx(n.code,{children:".tsx"})]}),`
`,e.jsxs(n.li,{children:["Exposer ",e.jsx(n.code,{children:"bg-brand"})," aux applications"]}),`
`,e.jsx(n.li,{children:"Un token « décoratif » réutilisé comme frontière de contrôle"}),`
`]})]})}function m(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{m as default};
