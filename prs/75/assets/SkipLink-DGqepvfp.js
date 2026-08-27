import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-AGuS8-Lw.js";import{M as d,C as s,A as a}from"./index-DxSJjt9U.js";import{S as l,K as o,C as t}from"./SkipLink.stories-B3sJKlAu.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DtevF36a.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-m9O2bJRw.js";import"./cx-BKFaN9jf.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"skiplink",children:"SkipLink"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SkipLink"})," est le premier contrôle focusable d’une coquille d’application. Invisible tant qu’on n’utilise pas le clavier, il apparaît au focus et envoie vers le landmark principal — pour ne pas tabuler tout le chrome (WCAG 2.4.1)."]}),`
`,e.jsxs(n.p,{children:["Les exemples suivent la ",e.jsx(n.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(n.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(n.h2,{id:"cible",children:"Cible"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"href"})," pointe un identifiant déjà focusable, en général ",e.jsx(n.code,{children:'<main id="main" tabIndex={-1}>'}),". Le composant ",e.jsx(n.strong,{children:"ne pose pas"})," ",e.jsx(n.code,{children:"tabIndex"})," sur la cible : c’est à l’application de rendre le landmark focusable. Une cible absente laisse le lien natif s’exécuter (pas de ",e.jsx(n.code,{children:"preventDefault"}),")."]}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(n.h2,{id:"libellé",children:"Libellé"}),`
`,e.jsxs(n.p,{children:["Le texte par défaut est anglais (",e.jsx(n.code,{children:"Skip to main content"}),") — c’est le seul fallback a11y autorisé dans un composant. Passez ",e.jsx(n.code,{children:"children"})," dans la langue de l’app (",e.jsx(n.code,{children:"Aller au contenu principal"}),")."]}),`
`,e.jsxs(n.p,{children:["Thème sombre : barre d’outils ",e.jsx(n.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(n.strong,{children:"Langue"}),"."]}),`
`,e.jsx(n.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SkipLink"})," rend un ",e.jsx(n.code,{children:'<a href="#main">'}),". Pas de ",e.jsx(n.code,{children:"role"}),", pas de ",e.jsx(n.code,{children:"div"})," cliquable."]}),`
`,e.jsxs(n.p,{children:["Au clic / Entrée, si la cible existe, le focus y est déplacé sans muter le DOM hôte. ",e.jsx(n.code,{children:"SkipLink"})," n’est ",e.jsx(n.strong,{children:"pas"})," un overlay : pas de piège de Tab, pas d’",e.jsx(n.code,{children:"aria-modal"}),"."]}),`
`,e.jsx(n.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<SkipLink>Aller au contenu principal</SkipLink>"})," avec ",e.jsx(n.code,{children:'<main id="main" tabIndex={-1}>'})]}),`
`,e.jsxs(n.li,{children:["Un seul skip link, tout en haut du ",e.jsx(n.code,{children:"ThemeProvider"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'href="#content"'})," seulement si le landmark s’appelle ",e.jsx(n.code,{children:"content"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Omettre ",e.jsx(n.code,{children:"tabIndex={-1}"})," sur ",e.jsx(n.code,{children:"main"})," (le focus n’ira pas)"]}),`
`,e.jsxs(n.li,{children:["Un ",e.jsx(n.code,{children:"<button>"})," ou un ",e.jsx(n.code,{children:"div"})," + ",e.jsx(n.code,{children:"onKeyDown"})," à la place du lien"]}),`
`,e.jsx(n.li,{children:"Dupliquer le lien dans chaque page alors que la coquille l’a déjà"}),`
`]}),`
`,e.jsx(n.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(n.p,{children:["Les attributs natifs ",e.jsx(n.code,{children:"<a>"})," (",e.jsx(n.code,{children:"className"}),", ",e.jsx(n.code,{children:"onClick"}),", …) sont transmis. ",e.jsx(n.code,{children:"href"})," doit rester une ancre (",e.jsx(n.code,{children:"#…"}),")."]}),`
`,e.jsx(a,{of:l,include:["href","children"]})]})}function S(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{S as default};
