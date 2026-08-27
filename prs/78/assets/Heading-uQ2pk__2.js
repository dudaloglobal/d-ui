import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-AGuS8-Lw.js";import{M as c,C as i,A as o}from"./index-BOyy78aJ.js";import{H as r,D as t,L as h,S as a}from"./Heading.stories-CcAhepAq.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-e3S1s0Rc.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-BpJ8NOnL.js";import"./cx-rSPOEDc8.js";function d(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(s.h1,{id:"heading",children:"Heading"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Heading"})," porte la structure du document : un vrai ",e.jsx(s.code,{children:"h1"}),"…",e.jsx(s.code,{children:"h6"}),". La taille visuelle (",e.jsx(s.code,{children:"size"}),") est une prop ",e.jsx(s.strong,{children:"distincte"})," pour ne pas sauter un niveau afin d’obtenir le bon corps (WCAG 1.3.1)."]}),`
`,e.jsxs(s.p,{children:["Les exemples suivent la ",e.jsx(s.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(s.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(s.h2,{id:"niveaux",children:"Niveaux"}),`
`,e.jsxs(s.p,{children:["Par défaut, la taille suit le niveau : ",e.jsx(s.code,{children:"h1"})," → display, ",e.jsx(s.code,{children:"h2"})," → title, ",e.jsx(s.code,{children:"h3"})," → subtitle, ",e.jsx(s.code,{children:"h4"}),"–",e.jsx(s.code,{children:"h6"})," → body."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h2,{id:"taille-découplée",children:"Taille découplée"}),`
`,e.jsxs(s.p,{children:["Un ",e.jsx(s.code,{children:"h2"})," peut avoir l’allure d’un display. Un ",e.jsx(s.code,{children:"h1"})," peut rester discret. Ne posez ",e.jsx(s.strong,{children:"qu’un"})," ",e.jsx(s.code,{children:"h1"})," par vue."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsxs(s.p,{children:["Thème sombre : barre d’outils ",e.jsx(s.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(s.strong,{children:"Langue"}),"."]}),`
`,e.jsx(s.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(s.p,{children:["Le composant rend ",e.jsx(s.code,{children:"<h1>"}),"…",e.jsx(s.code,{children:"<h6>"}),". Pas de ",e.jsx(s.code,{children:'role="heading"'})," sur un ",e.jsx(s.code,{children:"div"}),"."]}),`
`,e.jsx(s.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'<Heading level={2} size="display">'})," si le visuel est grand mais le niveau est 2"]}),`
`,e.jsxs(s.li,{children:["Un seul ",e.jsx(s.code,{children:"level={1}"})," par page"]}),`
`]}),`
`,e.jsx(s.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Sauter de ",e.jsx(s.code,{children:"h1"})," à ",e.jsx(s.code,{children:"h3"})," pour une question de taille"]}),`
`,e.jsxs(s.li,{children:["Deux ",e.jsx(s.code,{children:"h1"})," sur le même écran"]}),`
`]}),`
`,e.jsx(s.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(s.p,{children:["Les attributs natifs du titre (",e.jsx(s.code,{children:"id"}),", ",e.jsx(s.code,{children:"className"}),", …) sont transmis."]}),`
`,e.jsx(o,{of:r,include:["level","size"]})]})}function C(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{C as default};
