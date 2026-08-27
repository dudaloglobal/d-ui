import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-AGuS8-Lw.js";import{M as t,C as r,A as a}from"./index-CxtFEFAj.js";import{L as i,D as d,I as c,E as x}from"./Link.stories-DCPZ8Lsx.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B_2c9ucO.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-TRj_OXTg.js";import"./cx-BmrDAEIN.js";import"./Text-q3dk7SM8.js";import"./VisuallyHidden-k-sfkgnV.js";function l(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:i}),`
`,e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Link"})," est un ",e.jsx(n.code,{children:"<a>"}),". Le soulignement est ",e.jsx(n.strong,{children:"permanent"})," : la couleur seule ne distingue pas un lien dans un paragraphe (WCAG 1.4.1). Pour une action, utilisez ",e.jsx(n.code,{children:"Button"}),"."]}),`
`,e.jsxs(n.p,{children:["Les exemples suivent la ",e.jsx(n.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(n.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"dans-un-paragraphe",children:"Dans un paragraphe"}),`
`,e.jsxs(n.p,{children:["Composez ",e.jsx(n.code,{children:"Link"})," dans ",e.jsx(n.code,{children:"Text"}),". Le soulignement et ",e.jsx(n.code,{children:"visited:text-link-visited"})," restent."]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"externe",children:"Externe"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"external"})," ouvre un nouvel onglet, pose ",e.jsx(n.code,{children:'rel="noopener noreferrer"'}),", et annonce l’ouverture. Le fallback masqué est anglais (",e.jsx(n.code,{children:"(opens in a new tab)"}),") — passez ",e.jsx(n.code,{children:"externalLabel"})," dans la langue de l’app."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsxs(n.p,{children:["Thème sombre : barre d’outils ",e.jsx(n.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(n.strong,{children:"Langue"}),"."]}),`
`,e.jsx(n.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(n.p,{children:["Contrôle natif ",e.jsx(n.code,{children:"<a href>"}),". Focus visible via l’anneau ",e.jsx(n.code,{children:"focus"}),". Tab / Entrée activent le lien."]}),`
`,e.jsx(n.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'<Link href="/catalogue">Catalogue</Link>'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'<Link href="https://…" external externalLabel="(ouvre dans un nouvel onglet)">'})}),`
`]}),`
`,e.jsx(n.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'target="_blank"'})," sans ",e.jsx(n.code,{children:"rel"})]}),`
`,e.jsxs(n.li,{children:["Un ",e.jsx(n.code,{children:"Button"})," pour de la navigation, ou un ",e.jsx(n.code,{children:"Link"})," pour soumettre un formulaire"]}),`
`]}),`
`,e.jsx(n.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(n.p,{children:["Les attributs natifs ",e.jsx(n.code,{children:"<a>"})," (",e.jsx(n.code,{children:"className"}),", ",e.jsx(n.code,{children:"download"}),", …) sont transmis."]}),`
`,e.jsx(a,{of:i,include:["href","external","externalLabel"]})]})}function T(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{T as default};
