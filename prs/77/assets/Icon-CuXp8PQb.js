import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-AGuS8-Lw.js";import{M as r}from"./index-B0Msp1eh.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-NhGwnmIZ.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Fondations/Icônes"}),`
`,e.jsx(n.h1,{id:"icônes",children:"Icônes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"d-ui"})," ",e.jsx(n.strong,{children:"ne dépend d'aucune librairie d'icônes"}),". ",e.jsx(n.code,{children:"Icon"})," reçoit le composant SVG en prop :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';

<Icon as={ChevronDownIcon} size="md" />;
`})}),`
`,e.jsxs(n.p,{children:[`Trois conséquences voulues : le contrat public ne se verrouille pas sur une
dépendance tierce, aucun jeu d'icônes n'est jamais importé en bloc, et une
application qui a déjà les siennes consomme `,e.jsx(n.code,{children:"d-ui"})," sans doublon de bundle."]}),`
`,e.jsxs(n.p,{children:["Le jeu recommandé est ",e.jsx(n.strong,{children:"Heroicons"}),` (MIT, Tailwind Labs). Il n'est ici qu'une
`,e.jsx(n.code,{children:"devDependency"}),", pour les stories."]}),`
`,e.jsx(n.h2,{id:"tailles",children:"Tailles"}),`
`,e.jsxs(n.p,{children:["Alignées sur les hauteurs de ",e.jsx(n.code,{children:"Button"}),"."]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"size"}),` | Rendu | Classe   | Usage                       |
| ------ | ----- | -------- | --------------------------- |
| `,e.jsx(n.code,{children:"sm"}),"   | 16 px | ",e.jsx(n.code,{children:"size-4"}),` | dans un bouton, une puce    |
| `,e.jsx(n.code,{children:"md"}),"   | 20 px | ",e.jsx(n.code,{children:"size-5"}),` | par défaut, texte courant   |
| `,e.jsx(n.code,{children:"lg"}),"   | 24 px | ",e.jsx(n.code,{children:"size-6"})," | titre de section, état vide |"]}),`
`,e.jsx(n.h2,{id:"couleur",children:"Couleur"}),`
`,e.jsxs(n.p,{children:["Aucune prop de couleur, et c'est délibéré : le SVG hérite de ",e.jsx(n.code,{children:"currentColor"}),`,
donc de la couleur du texte qui le porte. Il suit le thème sans token dédié.
Pour le colorer, on colore son conteneur.`]}),`
`,e.jsx(n.h2,{id:"le-piège-heroicons-v2",children:"Le piège Heroicons v2"}),`
`,e.jsxs(n.p,{children:["Heroicons ne fournit l'",e.jsx(n.strong,{children:"outline qu'en 24 px"}),". Les jeux 20 et 16 sont ",e.jsx(n.strong,{children:`solid
uniquement`}),". Mapper ",e.jsx(n.code,{children:'size="sm"'})," sur ",e.jsx(n.code,{children:"@heroicons/react/16/solid"}),` ferait donc
basculer la silhouette en plein sans prévenir, au milieu d'une interface en
outline.`]}),`
`,e.jsxs(n.p,{children:["La règle : importer depuis ",e.jsx(n.code,{children:"24/outline"})," et laisser ",e.jsx(n.code,{children:"size"}),` réduire en CSS.
Ne descendre sur `,e.jsx(n.code,{children:"20/solid"})," ou ",e.jsx(n.code,{children:"16/solid"}),` que lorsqu'on veut explicitement du
solid.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// ✅ même silhouette à toutes les tailles
import { BellIcon } from '@heroicons/react/24/outline';
<Icon as={BellIcon} size="sm" />;

// ❌ bascule silencieusement en solid
import { BellIcon } from '@heroicons/react/16/solid';
`})}),`
`,e.jsx(n.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Décorative par défaut."})," Sans ",e.jsx(n.code,{children:"label"}),", l'icône porte ",e.jsx(n.code,{children:'aria-hidden="true"'}),` et
`,e.jsx(n.code,{children:'focusable="false"'}),` — ce dernier neutralise un vieux bug d'Internet Explorer et
Edge legacy qui rendait les SVG focusables au clavier.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"label"})," uniquement quand l'icône porte le sens à elle seule."]}),` Une icône
posée à côté de son libellé n'a pas de `,e.jsx(n.code,{children:"label"}),` : elle le répéterait au lecteur
d'écran.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Dans un ",e.jsx(n.code,{children:"Button"}),", ne mets jamais de ",e.jsx(n.code,{children:"label"}),"."]})," Le slot ",e.jsx(n.code,{children:"icon"}),` du bouton est
déjà `,e.jsx(n.code,{children:"aria-hidden"})," et le bouton porte son propre nom accessible. Un ",e.jsx(n.code,{children:"label"}),` y
serait ignoré silencieusement.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"IconButton"})," porte le nom sur le bouton"]}),", via son ",e.jsx(n.code,{children:"aria-label"}),` obligatoire —
pas sur l'icône.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"à-faire--à-éviter",children:"À faire / à éviter"}),`
`,e.jsxs(n.p,{children:[`| ✅ À faire                                             | ❌ À éviter                                             |
| ------------------------------------------------------ | ------------------------------------------------------- |
| `,e.jsx(n.code,{children:"<Icon as={BellIcon} />"})," à côté d'un libellé           | ",e.jsx(n.code,{children:'<Icon as={BellIcon} label="Notifications" />'}),` idem     |
| `,e.jsx(n.code,{children:'<IconButton icon={<Icon …/>} aria-label="Supprimer">'})," | ",e.jsx(n.code,{children:"<IconButton>"})," sans ",e.jsx(n.code,{children:"aria-label"}),`                        |
| Import depuis `,e.jsx(n.code,{children:"24/outline"}),"                             | Import depuis ",e.jsx(n.code,{children:"16/solid"}),` pour obtenir une petite taille |
| Colorer le conteneur                                   | Passer `,e.jsx(n.code,{children:"fill"})," ou ",e.jsx(n.code,{children:"stroke"})," en dur                        |"]})]})}function p(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{p as default};
