import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-AGuS8-Lw.js";import{M as d,C as t,A as o}from"./index-XlzjIlUv.js";import{V as s,I as c}from"./VisuallyHidden.stories-CAMozyUN.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-COhYIWo2.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-m9O2bJRw.js";import"./cx-BKFaN9jf.js";import"./VisuallyHidden-R9qRvU08.js";function l(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(n.h1,{id:"visuallyhidden",children:"VisuallyHidden"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"VisuallyHidden"})," masque un texte à l’écran tout en le laissant aux technologies d’assistance. C’est le nom accessible d’un contrôle sans libellé visible (bouton icône, pagination « page 3 sur 12 »)."]}),`
`,e.jsxs(n.p,{children:["Les exemples suivent la ",e.jsx(n.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(n.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsxs(n.p,{children:["Ce n’est ",e.jsx(n.strong,{children:"pas"})," un tooltip, ni un ",e.jsx(n.code,{children:"title"}),", ni ",e.jsx(n.code,{children:"aria-label"})," à la place d’un texte qui pourrait être visible. Si le libellé peut tenir à l’écran, affichez-le."]}),`
`,e.jsxs(n.p,{children:["Thème sombre : barre d’outils ",e.jsx(n.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(n.strong,{children:"Langue"}),"."]}),`
`,e.jsx(n.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(n.p,{children:["Le composant rend un ",e.jsx(n.code,{children:"<span>"})," avec la classe ",e.jsx(n.code,{children:"d-ui-visually-hidden"})," (clip, pas ",e.jsx(n.code,{children:"display: none"})," — ",e.jsx(n.code,{children:"display: none"})," retire le texte de l’arbre d’accessibilité)."]}),`
`,e.jsxs(n.p,{children:["Pour un bouton icône du design system, préférez ",e.jsx(n.code,{children:"IconButton"})," (",e.jsx(n.code,{children:"aria-label"})," obligatoire). ",e.jsx(n.code,{children:"VisuallyHidden"})," sert quand vous composez un contrôle natif vous-même."]}),`
`,e.jsx(n.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'<button type="button"><span aria-hidden="true">×</span><VisuallyHidden>Fermer</VisuallyHidden></button>'})}),`
`,e.jsxs(n.li,{children:["Masquer uniquement le texte de ",e.jsx(n.strong,{children:"renfort"})," (unité, contexte), pas tout le contenu d’une vue"]}),`
`]}),`
`,e.jsx(n.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"display: none"})," / ",e.jsx(n.code,{children:"hidden"})," / ",e.jsx(n.code,{children:"aria-hidden"})," sur le texte à annoncer"]}),`
`,e.jsxs(n.li,{children:["Remplacer un ",e.jsx(n.code,{children:"label"})," visible de champ par ",e.jsx(n.code,{children:"VisuallyHidden"})]}),`
`,e.jsxs(n.li,{children:["Dupliquer un nom déjà porté par ",e.jsx(n.code,{children:"aria-label"})," (double annonce)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(n.p,{children:["Les attributs natifs ",e.jsx(n.code,{children:"<span>"})," (",e.jsx(n.code,{children:"className"}),", ",e.jsx(n.code,{children:"id"}),", …) sont transmis."]}),`
`,e.jsx(o,{of:s,include:["children"]})]})}function C(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{C as default};
