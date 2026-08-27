import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-AGuS8-Lw.js";import{M as c,C as i,A as l}from"./index-B_hZr9mQ.js";import{B as o,H as r,M as a,T as h,L as u,a as x,S as j,F as p,I as m}from"./Button.stories-CtopslTY.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DjH4vcGw.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-Dv31QUyA.js";import"./cx-5YvX89nH.js";import"./Button-CMWGv60o.js";import"./IconButton-DcIuFrzy.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o}),`
`,e.jsx(n.h1,{id:"button",children:"Button"}),`
`,e.jsx(n.p,{children:"Les boutons déclenchent une action en un clic."}),`
`,e.jsxs(n.p,{children:["Les exemples suivent la ",e.jsx(n.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(n.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(n.h2,{id:"forte-emphase",children:"Forte emphase"}),`
`,e.jsxs(n.p,{children:["Utilisez le fort emphasis (",e.jsx(n.code,{children:'variant="primary"'}),") pour aider à identifier l’action principale. Il ne doit pas y avoir plus d’un bouton high emphasis dans une vue."]}),`
`,e.jsx(n.p,{children:"Cas d’usage : Par défaut, Désactivé, Chargement, Avec icône, Menu, Fractionné."}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h2,{id:"emphase-moyenne",children:"Emphase moyenne"}),`
`,e.jsxs(n.p,{children:["Utilisez le medium emphasis (",e.jsx(n.code,{children:'variant="secondary"'}),") pour les actions secondaires."]}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h3,{id:"bouton-bascule",children:"Bouton bascule"}),`
`,e.jsxs(n.p,{children:["Les boutons medium ont une option supplémentaire : ",e.jsx(n.code,{children:"isSelected"}),". Utilisez ",e.jsx(n.code,{children:"isSelected"})," pour des actions à bascule (activation de notifications, abonnement à un flux). Décrivez l’action le plus clairement possible dans le libellé."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h2,{id:"faible-emphase",children:"Faible emphase"}),`
`,e.jsxs(n.p,{children:["Quand la vue contient déjà un bouton primary et un medium, utilisez le low emphasis (",e.jsx(n.code,{children:'variant="ghost"'}),") pour les actions de moindre priorité. Autrement, utilisez-le lorsqu’il n’y a qu’un seul niveau de priorité."]}),`
`,e.jsx(n.p,{children:"Cas d’usage : Par défaut, Désactivé, Chargement, Avec icône, Menu (pas de fractionné)."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"chargement",children:"Chargement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"loading"})," affiche un indicateur, conserve le libellé, pose ",e.jsx(n.code,{children:"aria-busy"})," et désactive le contrôle. L’icône est remplacée par l’indicateur. ",e.jsx(n.code,{children:'loadingIndicator="spinner"'})," (défaut) ou ",e.jsx(n.code,{children:'"bounce"'}),"."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"petite-taille",children:"Petite taille"}),`
`,e.jsxs(n.p,{children:["Utilisez la petite taille (",e.jsx(n.code,{children:'size="sm"'}),") lorsque l’espace est contraint."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"pleine-largeur",children:"Pleine largeur"}),`
`,e.jsxs(n.p,{children:["Utilisez ",e.jsx(n.code,{children:"fullWidth"})," lorsque le bouton doit occuper toute la largeur du conteneur."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsxs(n.p,{children:["Menu et fractionné sont des ",e.jsx(n.strong,{children:"compositions"})," de ",e.jsx(n.code,{children:"Button"})," / ",e.jsx(n.code,{children:"IconButton"})," (chevron, ",e.jsx(n.code,{children:"aria-haspopup"}),"). Le menu déroulant complet arrive avec Menu (DS-030)."]}),`
`,e.jsx(n.h3,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsx(n.h4,{id:"button-1",children:"Button"}),`
`,e.jsxs(n.p,{children:["Le bouton utilise le texte visible comme nom accessible. S’il n’y a pas de texte (icône seule, image, …), passez un ",e.jsx(n.code,{children:"aria-label"})," qui décrit l’action."]}),`
`,e.jsx(n.p,{children:"Cas d’usage accessibilité :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bouton natif"})," — ",e.jsx(n.code,{children:"Button"})," rend un ",e.jsx(n.code,{children:'<button type="button">'}),". Pour la navigation, utilisez un lien (",e.jsx(n.code,{children:"Link"}),", DS-019)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Toggle"})," — état actif/inactif via ",e.jsx(n.code,{children:"isSelected"}),". Si le libellé change selon l’état (",e.jsx(n.code,{children:"S'abonner"})," / ",e.jsx(n.code,{children:"Abonné"}),"), ce nom suffit. Si le libellé ne change pas, ",e.jsx(n.code,{children:"aria-pressed"})," est posé depuis ",e.jsx(n.code,{children:"isSelected"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Menu"})," — si le bouton ouvre une liste : ",e.jsx(n.code,{children:'aria-haspopup="true"'}),", ",e.jsx(n.code,{children:"aria-expanded"})," selon l’ouverture, et ",e.jsx(n.code,{children:"aria-controls"})," vers l’id du menu uniquement si le menu est dans le DOM."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Chargement"})," — ",e.jsx(n.code,{children:"loading"})," conserve le libellé, pose ",e.jsx(n.code,{children:"aria-busy"})," et désactive le contrôle. ",e.jsx(n.code,{children:"loadingIndicator"})," choisit spinner ou bounce."]}),`
`]}),`
`,e.jsx(n.h4,{id:"iconbutton",children:"IconButton"}),`
`,e.jsxs(n.p,{children:["Toutes les règles de ",e.jsx(n.code,{children:"Button"})," s’appliquent. Comme il n’y a pas de texte, ",e.jsx(n.code,{children:"aria-label"})," est obligatoire."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsxs(n.p,{children:["Thème sombre : barre d’outils ",e.jsx(n.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(n.strong,{children:"Langue"}),"."]}),`
`,e.jsx(n.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsx(n.h3,{id:"button-2",children:"Button"}),`
`,e.jsxs(n.p,{children:["Les attributs natifs ",e.jsx(n.code,{children:"<button>"})," (",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"type"}),", ",e.jsx(n.code,{children:"className"}),", ",e.jsx(n.code,{children:"aria-haspopup"}),", …) sont transmis."]}),`
`,e.jsx(l,{of:o,include:["variant","size","loading","loadingIndicator","icon","iconPosition","fullWidth","isSelected","disabled"]}),`
`,e.jsx(n.h3,{id:"iconbutton-1",children:"IconButton"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"IconButton"})," exige ",e.jsx(n.code,{children:"aria-label"}),". ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"variant"}),", ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"loading"}),", ",e.jsx(n.code,{children:"loadingIndicator"}),", ",e.jsx(n.code,{children:"fullWidth"})," et ",e.jsx(n.code,{children:"isSelected"})," sont les mêmes que ",e.jsx(n.code,{children:"Button"}),"."]}),`
`,e.jsx(l,{of:o,include:["icon","aria-label","variant","size","disabled","loading","loadingIndicator","fullWidth","isSelected"]})]})}function A(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{A as default};
