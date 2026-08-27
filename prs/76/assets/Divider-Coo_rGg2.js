import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-AGuS8-Lw.js";import{M as t,C as n,A as c}from"./index-CxtFEFAj.js";import{D as i,a as o,V as a,L as h}from"./Divider.stories-u1IYJw6e.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B_2c9ucO.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-TRj_OXTg.js";import"./cx-BmrDAEIN.js";import"./Text-q3dk7SM8.js";function d(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:i}),`
`,e.jsx(s.h1,{id:"divider",children:"Divider"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Divider"})," est un filet de séparation. Par défaut il est ",e.jsx(s.strong,{children:"décoratif"})," (",e.jsx(s.code,{children:"aria-hidden"}),") : un séparateur visuel n’est pas une frontière de contrôle, donc ",e.jsx(s.code,{children:"--d-ui-color-border-subtle"})," (pas le seuil 3:1 de 1.4.11)."]}),`
`,e.jsxs(s.p,{children:["Les exemples suivent la ",e.jsx(s.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(s.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(s.h2,{id:"vertical",children:"Vertical"}),`
`,e.jsxs(s.p,{children:["Un parent flex est requis (",e.jsx(s.code,{children:"self-stretch"}),"). Rend un ",e.jsx(s.code,{children:"div"}),", pas un ",e.jsx(s.code,{children:"<hr>"}),"."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(s.h2,{id:"labellisé",children:"Labellisé"}),`
`,e.jsxs(s.p,{children:["Avec ",e.jsx(s.code,{children:"label"}),", le trait devient un ",e.jsx(s.code,{children:"separator"})," annoncé. À réserver aux ruptures porteuses de sens (« fin des résultats pertinents »), pas à chaque ligne d’une liste."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsxs(s.p,{children:["Thème sombre : barre d’outils ",e.jsx(s.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(s.strong,{children:"Langue"}),"."]}),`
`,e.jsx(s.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(s.p,{children:["Sans ",e.jsx(s.code,{children:"label"})," : ",e.jsx(s.code,{children:'role="none"'})," et ",e.jsx(s.code,{children:"aria-hidden"}),". Avec ",e.jsx(s.code,{children:"label"})," : ",e.jsx(s.code,{children:'role="separator"'})," et ",e.jsx(s.code,{children:"aria-orientation"}),"."]}),`
`,e.jsx(s.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"<Divider />"})," entre deux blocs visuels"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'<Divider label="Fin des résultats" />'})," seulement si la rupture a un sens"]}),`
`]}),`
`,e.jsx(s.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Un ",e.jsx(s.code,{children:"border-border"})," sur un ",e.jsx(s.code,{children:"div"})," bricolé"]}),`
`,e.jsx(s.li,{children:"Labelliser chaque filet décoratif"}),`
`]}),`
`,e.jsx(s.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(s.p,{children:["Les attributs natifs (",e.jsx(s.code,{children:"className"}),", ",e.jsx(s.code,{children:"data-*"}),") sont transmis ",e.jsx(s.strong,{children:"avant"})," la sémantique a11y, qui ne peut pas être écrasée."]}),`
`,e.jsx(c,{of:i,include:["orientation","label"]})]})}function A(r={}){const{wrapper:s}={...l(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(d,{...r})}):d(r)}export{A as default};
