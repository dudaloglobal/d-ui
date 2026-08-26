import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-AGuS8-Lw.js";import{M as d,C as s,A as o}from"./index-CBSmp58I.js";import{B as l,H as r,M as a,T as h,L as u,S as x,F as j,I as p,a as m}from"./Button.stories-CYxA0iK3.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dd35BPkf.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-locale-C57-gmqy.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"button",children:"Button"}),`
`,e.jsx(n.p,{children:"Les boutons déclenchent une action en un clic."}),`
`,e.jsxs(n.p,{children:["Les exemples suivent la ",e.jsx(n.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(n.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(n.h2,{id:"high-emphasis",children:"High emphasis"}),`
`,e.jsxs(n.p,{children:["Utilisez le fort emphasis (",e.jsx(n.code,{children:'variant="primary"'}),") pour aider à identifier l’action principale. Il ne doit pas y avoir plus d’un bouton high emphasis dans une vue."]}),`
`,e.jsx(n.p,{children:"Cas d’usage : Par défaut, Désactivé, Avec icône, Menu, Fractionné."}),`
`,e.jsx(s,{of:r,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"medium-emphasis",children:"Medium emphasis"}),`
`,e.jsxs(n.p,{children:["Utilisez le medium emphasis (",e.jsx(n.code,{children:'variant="secondary"'}),") pour les actions secondaires."]}),`
`,e.jsx(s,{of:a,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"toggled-button",children:"Toggled button"}),`
`,e.jsxs(n.p,{children:["Les boutons medium ont une option supplémentaire : ",e.jsx(n.code,{children:"isSelected"}),". Utilisez ",e.jsx(n.code,{children:"isSelected"})," pour des actions à bascule (activation de notifications, abonnement à un flux). Décrivez l’action le plus clairement possible dans le libellé."]}),`
`,e.jsx(s,{of:h,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"low-emphasis",children:"Low emphasis"}),`
`,e.jsxs(n.p,{children:["Quand la vue contient déjà un bouton primary et un medium, utilisez le low emphasis (",e.jsx(n.code,{children:'variant="ghost"'}),") pour les actions de moindre priorité. Autrement, utilisez-le lorsqu’il n’y a qu’un seul niveau de priorité."]}),`
`,e.jsx(n.p,{children:"Cas d’usage : Par défaut, Désactivé, Avec icône, Menu (pas de fractionné)."}),`
`,e.jsx(s,{of:u,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"small-size",children:"Small size"}),`
`,e.jsxs(n.p,{children:["Utilisez la petite taille (",e.jsx(n.code,{children:'size="sm"'}),") lorsque l’espace est contraint."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"full-width",children:"Full width"}),`
`,e.jsxs(n.p,{children:["Utilisez ",e.jsx(n.code,{children:"fullWidth"})," lorsque le bouton doit occuper toute la largeur du conteneur."]}),`
`,e.jsx(s,{of:j,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:["Menu et fractionné sont des ",e.jsx(n.strong,{children:"compositions"})," de ",e.jsx(n.code,{children:"Button"})," / ",e.jsx(n.code,{children:"IconButton"})," (chevron, ",e.jsx(n.code,{children:"aria-haspopup"}),"). Le menu déroulant complet arrive avec Menu (DS-030)."]}),`
`,e.jsx(n.h3,{id:"accessibility-concerns",children:"Accessibility concerns"}),`
`,e.jsx(n.h4,{id:"button-1",children:"Button"}),`
`,e.jsxs(n.p,{children:["Le bouton utilise le texte visible comme nom accessible. S’il n’y a pas de texte (icône seule, image, …), passez un ",e.jsx(n.code,{children:"aria-label"})," qui décrit l’action."]}),`
`,e.jsx(n.p,{children:"Cas d’usage accessibilité :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bouton natif"})," — ",e.jsx(n.code,{children:"Button"})," rend un ",e.jsx(n.code,{children:'<button type="button">'}),". Pour la navigation, utilisez un lien (",e.jsx(n.code,{children:"Link"}),", DS-019)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Toggle"})," — état actif/inactif via ",e.jsx(n.code,{children:"isSelected"}),". Si le libellé change selon l’état (",e.jsx(n.code,{children:"S'abonner"})," / ",e.jsx(n.code,{children:"Abonné"}),"), ce nom suffit. Si le libellé ne change pas, ",e.jsx(n.code,{children:"aria-pressed"})," est posé depuis ",e.jsx(n.code,{children:"isSelected"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Menu"})," — si le bouton ouvre une liste : ",e.jsx(n.code,{children:'aria-haspopup="true"'}),", ",e.jsx(n.code,{children:"aria-expanded"})," selon l’ouverture, et ",e.jsx(n.code,{children:"aria-controls"})," vers l’id du menu uniquement si le menu est dans le DOM."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Chargement"})," — ",e.jsx(n.code,{children:"loading"})," conserve le libellé, pose ",e.jsx(n.code,{children:"aria-busy"})," et désactive le contrôle."]}),`
`]}),`
`,e.jsx(n.h4,{id:"iconbutton",children:"IconButton"}),`
`,e.jsxs(n.p,{children:["Toutes les règles de ",e.jsx(n.code,{children:"Button"})," s’appliquent. Comme il n’y a pas de texte, ",e.jsx(n.code,{children:"aria-label"})," est obligatoire."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsxs(n.p,{children:["Thème sombre : barre d’outils ",e.jsx(n.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(n.strong,{children:"Langue"}),"."]}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(n.h3,{id:"button-2",children:"Button"}),`
`,e.jsxs(n.p,{children:["Les attributs natifs ",e.jsx(n.code,{children:"<button>"})," (",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"type"}),", ",e.jsx(n.code,{children:"className"}),", ",e.jsx(n.code,{children:"aria-haspopup"}),", …) sont transmis."]}),`
`,e.jsx(o,{of:l,include:["variant","size","loading","icon","iconPosition","fullWidth","isSelected","disabled"]}),`
`,e.jsx(n.h3,{id:"iconbutton-1",children:"IconButton"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"IconButton"})," exige ",e.jsx(n.code,{children:"aria-label"}),". ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"variant"}),", ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"loading"}),", ",e.jsx(n.code,{children:"fullWidth"})," et ",e.jsx(n.code,{children:"isSelected"})," sont les mêmes que ",e.jsx(n.code,{children:"Button"}),"."]}),`
`,e.jsx(o,{of:m,include:["icon","aria-label","variant","size","disabled","loading","fullWidth","isSelected"]})]})}function C(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{C as default};
