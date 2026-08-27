import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-AGuS8-Lw.js";import{M as t,C as i,A as c}from"./index-BOyy78aJ.js";import{T as r,D as l,S as a,a as x,W as h}from"./Text.stories-BPoJMX_y.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-e3S1s0Rc.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-BpJ8NOnL.js";import"./cx-rSPOEDc8.js";import"./Text-DvZeaTGB.js";function d(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:r}),`
`,e.jsx(s.h1,{id:"text",children:"Text"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Text"})," est le texte courant du design system. Utilisez ",e.jsx(s.code,{children:"Heading"})," pour un titre, ",e.jsx(s.code,{children:"Link"})," pour une navigation."]}),`
`,e.jsxs(s.p,{children:["Les exemples suivent la ",e.jsx(s.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(s.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(s.h2,{id:"tailles",children:"Tailles"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"body"})," pour le paragraphe, ",e.jsx(s.code,{children:"body-sm"})," pour une aide de saisie, ",e.jsx(s.code,{children:"caption"})," pour une métadonnée. L’échelle est celle de Tailwind, exposée sous des rôles — pas de ",e.jsx(s.code,{children:"text-[17px]"}),"."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(s.h2,{id:"tons",children:"Tons"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"tone"})," est une prop, jamais un ",e.jsx(s.code,{children:"className"}),". ",e.jsx(s.code,{children:"cx()"})," ne résout pas les conflits Tailwind : ",e.jsx(s.code,{children:'className="text-slate-400"'})," laisserait ",e.jsx(s.code,{children:"text-fg"})," gagner. ",e.jsx(s.code,{children:"muted"})," reste au-dessus de 4.5:1 dans les deux thèmes. ",e.jsx(s.code,{children:"danger"})," est réservé aux messages d’erreur (",e.jsx(s.code,{children:"FieldError"}),")."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h2,{id:"graisses",children:"Graisses"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"regular"}),", ",e.jsx(s.code,{children:"medium"}),", ",e.jsx(s.code,{children:"semibold"}),"."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsxs(s.p,{children:["Thème sombre : barre d’outils ",e.jsx(s.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(s.strong,{children:"Langue"}),"."]}),`
`,e.jsx(s.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Text"})," rend un ",e.jsx(s.code,{children:"<p>"})," par défaut. Passez ",e.jsx(s.code,{children:'as="span"'})," en ligne. Ce n’est pas un titre : un ",e.jsx(s.code,{children:'Text size="body"'})," avec ",e.jsx(s.code,{children:"font-semibold"})," ne remplace pas un ",e.jsx(s.code,{children:"Heading"}),"."]}),`
`,e.jsx(s.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<Text tone="muted" size="body-sm">Mis à jour hier</Text>'})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'as="span"'})," dans un bouton ou un lien"]}),`
`]}),`
`,e.jsx(s.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'<Text className="text-slate-400">'})," pour un ton"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'<Text as="h2">'})," — utiliser ",e.jsx(s.code,{children:"Heading"})]}),`
`]}),`
`,e.jsx(s.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(s.p,{children:["Les attributs natifs de l’élément (",e.jsx(s.code,{children:"id"}),", ",e.jsx(s.code,{children:"className"}),", …) sont transmis."]}),`
`,e.jsx(c,{of:r,include:["as","size","tone","weight"]})]})}function C(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{C as default};
