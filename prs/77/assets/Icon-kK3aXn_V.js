import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-AGuS8-Lw.js";import{M as c,C as i,A as d}from"./index-B_hZr9mQ.js";import{I as r,D as t,S as a,a as h,O as u,L as x,b as j}from"./Icon.stories-BRGwdDD7.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DjH4vcGw.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-Dv31QUyA.js";import"./cx-5YvX89nH.js";import"./Button-CMWGv60o.js";import"./IconButton-DcIuFrzy.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(n.h1,{id:"icon",children:"Icon"}),`
`,e.jsxs(n.p,{children:["Enveloppe un SVG pour une taille alignée sur ",e.jsx(n.code,{children:"Button"})," et la bonne sémantique d’accessibilité. ",e.jsx(n.code,{children:"d-ui"})," ",e.jsx(n.strong,{children:"ne dépend d’aucune librairie d’icônes"})," : on passe le composant (",e.jsx(n.code,{children:"as"}),"), il n’est jamais importé en bloc."]}),`
`,e.jsxs(n.p,{children:["Les exemples suivent la ",e.jsx(n.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(n.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(n.h2,{id:"tailles",children:"Tailles"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size"})," suit les hauteurs de ",e.jsx(n.code,{children:"Button"})," : ",e.jsx(n.code,{children:"sm"})," 16 px, ",e.jsx(n.code,{children:"md"})," 20 px (défaut), ",e.jsx(n.code,{children:"lg"})," 24 px. Utilisez ",e.jsx(n.code,{children:"sm"})," dans un bouton, ",e.jsx(n.code,{children:"lg"})," sur un état vide ou un titre."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h2,{id:"couleur",children:"Couleur"}),`
`,e.jsxs(n.p,{children:["Aucune prop de couleur : le SVG hérite de ",e.jsx(n.code,{children:"currentColor"}),", donc du texte qui le porte, et suit le thème sans token dédié. Pour le colorer, colorez le conteneur."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"jeu-recommandé",children:"Jeu recommandé"}),`
`,e.jsxs(n.p,{children:["Le jeu recommandé est ",e.jsx(n.strong,{children:"Heroicons"})," (MIT, Tailwind Labs). Il n’est ici qu’une ",e.jsx(n.code,{children:"devDependency"}),", pour les stories."]}),`
`,e.jsxs(n.p,{children:["Heroicons ne fournit l’",e.jsx(n.strong,{children:"outline qu’en 24 px"}),". Les jeux 20 et 16 sont ",e.jsx(n.strong,{children:"solid uniquement"}),". Mapper ",e.jsx(n.code,{children:'size="sm"'})," sur ",e.jsx(n.code,{children:"@heroicons/react/16/solid"})," ferait basculer la silhouette en plein sans prévenir."]}),`
`,e.jsxs(n.p,{children:["Importer depuis ",e.jsx(n.code,{children:"24/outline"})," et laisser ",e.jsx(n.code,{children:"size"})," réduire en CSS. Ne descendre sur ",e.jsx(n.code,{children:"20/solid"})," ou ",e.jsx(n.code,{children:"16/solid"})," que lorsqu’on veut explicitement du solid."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(n.p,{children:["Sans ",e.jsx(n.code,{children:"label"}),", l’icône est décorative : ",e.jsx(n.code,{children:"aria-hidden"})," et ",e.jsx(n.code,{children:'focusable="false"'})," (retire le SVG de l’ordre de tabulation, y compris sur les anciens Edge). Avec ",e.jsx(n.code,{children:"label"}),", elle devient une image nommée (",e.jsx(n.code,{children:'role="img"'}),"). Ces attributs sont ",e.jsx(n.strong,{children:"réaffirmés après"})," les props consommateur."]}),`
`,e.jsxs(n.p,{children:["Dans un ",e.jsx(n.code,{children:"Button"}),", ne passez ",e.jsx(n.strong,{children:"jamais"})," ",e.jsx(n.code,{children:"label"})," : le slot ",e.jsx(n.code,{children:"icon"})," est déjà ",e.jsx(n.code,{children:"aria-hidden"})," et le bouton porte son nom. ",e.jsx(n.code,{children:"IconButton"})," porte le nom sur le bouton (",e.jsx(n.code,{children:"aria-label"})," obligatoire), pas sur l’icône."]}),`
`,e.jsx(n.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Icon as={BellIcon} />"})," à côté d’un libellé visible"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'<IconButton icon={<Icon as={TrashIcon} />} aria-label="Supprimer" />'})}),`
`,e.jsxs(n.li,{children:["Import depuis ",e.jsx(n.code,{children:"@heroicons/react/24/outline"})," pour garder la même silhouette"]}),`
`]}),`
`,e.jsx(n.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'<Icon as={BellIcon} label="Notifications" />'})," à côté du même mot"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IconButton"})," sans ",e.jsx(n.code,{children:"aria-label"})]}),`
`,e.jsxs(n.li,{children:["Import ",e.jsx(n.code,{children:"@heroicons/react/16/solid"})," uniquement pour obtenir une petite taille"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fill"})," ou ",e.jsx(n.code,{children:"stroke"})," en dur à la place de ",e.jsx(n.code,{children:"currentColor"})]}),`
`]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(i,{of:j}),`
`,e.jsxs(n.p,{children:["Thème sombre : barre d’outils ",e.jsx(n.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(n.strong,{children:"Langue"}),"."]}),`
`,e.jsx(n.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(n.p,{children:["Les attributs SVG natifs (",e.jsx(n.code,{children:"className"}),", ",e.jsx(n.code,{children:"data-*"}),", …) sont transmis. ",e.jsx(n.code,{children:"role"}),", ",e.jsx(n.code,{children:"aria-hidden"}),", ",e.jsx(n.code,{children:"aria-label"})," et ",e.jsx(n.code,{children:"focusable"})," ne peuvent pas être écrasés."]}),`
`,e.jsx(d,{of:r,include:["as","size","label"]})]})}function D(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{D as default};
