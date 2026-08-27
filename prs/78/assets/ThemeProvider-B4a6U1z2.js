import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-AGuS8-Lw.js";import{M as c,C as n,A as l}from"./index-BOyy78aJ.js";import{T as o,B as t,S as h}from"./ThemeProvider.stories-BqThSWFL.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-e3S1s0Rc.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-BpJ8NOnL.js";import"./cx-rSPOEDc8.js";import"./Button-Du8DNLO_.js";import"./ThemeProvider-zWEbKJ-4.js";function d(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsx(r.h1,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"ThemeProvider"})," pose ",e.jsx(r.code,{children:"data-d-ui-theme"})," sur une enveloppe (",e.jsx(r.code,{children:"d-ui-root"}),"). Il ne touche ",e.jsx(r.strong,{children:"pas"})," ",e.jsx(r.code,{children:"document.documentElement"})," : plusieurs racines peuvent coexister (app + Storybook, micro-frontends)."]}),`
`,e.jsxs(r.p,{children:["Les exemples suivent la ",e.jsx(r.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(r.strong,{children:"Français"})," par défaut). En plus, la barre ",e.jsx(r.strong,{children:"Thème"})," (Clair / Sombre) pilote le canvas entier."]}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(r.h2,{id:"mode-système",children:"Mode système"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:'mode="system"'})," suit ",e.jsx(r.code,{children:"prefers-color-scheme"})," et se met à jour si l’OS change. Le mode résolu reste ",e.jsx(r.code,{children:"'light' | 'dark'"})," sur l’attribut. Utilisez ",e.jsx(r.code,{children:"light"})," ou ",e.jsx(r.code,{children:"dark"})," quand l’app a son propre sélecteur."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(r.h2,{id:"surcharge-de-marque",children:"Surcharge de marque"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"tokens"})," écrit ",e.jsx(r.code,{children:"--d-ui-color-brand"}),", ",e.jsx(r.code,{children:"--d-ui-color-brand-hover"}),", ",e.jsx(r.code,{children:"--d-ui-color-on-brand"})," et ",e.jsx(r.code,{children:"--d-ui-color-focus"})," en style inline. C’est le white-label : pas de nouveau nom de token, seulement des valeurs."]}),`
`,e.jsxs(r.p,{children:["Thème sombre : barre d’outils ",e.jsx(r.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(r.strong,{children:"Langue"}),"."]}),`
`,e.jsx(r.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(r.p,{children:["Le thème n’est pas un widget. Le contraste des paires token doit rester AA en clair ",e.jsx(r.strong,{children:"et"})," en sombre (",e.jsx(r.code,{children:"docs/tokens.md"}),"). Un override ",e.jsx(r.code,{children:"brand"})," trop clair sur ",e.jsx(r.code,{children:"on-brand"})," casse 1.4.3 — c’est à l’app de garder le rapport."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"color-scheme"})," est posé sur ",e.jsx(r.code,{children:".d-ui-root"})," pour que les contrôles natifs (scrollbars, inputs) suivent le thème."]}),`
`,e.jsx(r.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Un ",e.jsx(r.code,{children:"ThemeProvider"})," à la racine de l’app, ",e.jsx(r.code,{children:"mode"})," branché sur le sélecteur utilisateur"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:'mode="system"'})," tant qu’il n’y a pas de préférence stockée"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"tokens={{ brand, brandHover, onBrand, focus }}"})," pour un client white-label"]}),`
`]}),`
`,e.jsx(r.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Écrire ",e.jsx(r.code,{children:"data-d-ui-theme"})," à la main sur ",e.jsx(r.code,{children:"document.documentElement"})]}),`
`,e.jsxs(r.li,{children:["Un hex de marque dans chaque bouton au lieu de ",e.jsx(r.code,{children:"tokens"})]}),`
`,e.jsxs(r.li,{children:["Nidifier des ",e.jsx(r.code,{children:"ThemeProvider"})," pour « juste un bouton » — préférez ",e.jsx(r.code,{children:"tokens"})," sur le plus proche ancêtre utile"]}),`
`]}),`
`,e.jsx(r.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"children"})," est obligatoire. ",e.jsx(r.code,{children:"className"})," est fusionné sur l’enveloppe."]}),`
`,e.jsx(l,{of:o,include:["mode","tokens"]})]})}function q(s={}){const{wrapper:r}={...i(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(d,{...s})}):d(s)}export{q as default};
