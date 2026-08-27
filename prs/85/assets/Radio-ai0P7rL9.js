import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-AGuS8-Lw.js";import{M as c,C as s,A as a}from"./index-DFAaG5O7.js";import{R as r,D as d,a as t,I as h,b as u,H as x,S as j,c as p}from"./Radio.stories-kpLilGmM.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CO4cV4v8.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-D60Dts3d.js";import"./cx-DUb51p-i.js";import"./selectionControl-BnQ8gEkV.js";function l(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(i.h1,{id:"radio",children:"Radio"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"Radio"})," est un bouton radio natif. Utilisez-le dans un ",e.jsx(i.code,{children:"RadioGroup"})," pour un choix exclusif."]}),`
`,e.jsxs(i.p,{children:["Les exemples suivent la ",e.jsx(i.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(i.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(i.h2,{id:"états-particuliers",children:"États particuliers"}),`
`,e.jsxs(i.p,{children:["Deux états particuliers : ",e.jsx(i.code,{children:"disabled"})," et ",e.jsx(i.code,{children:"invalid"}),"."]}),`
`,e.jsx(i.h3,{id:"désactivé",children:"Désactivé"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"disabled"})," sur le groupe lorsque la valeur ne peut pas être modifiée."]}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(i.h3,{id:"invalide",children:"Invalide"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"invalid"})," (et ",e.jsx(i.code,{children:"error"})," pour le message) pour indiquer qu’aucune option n’est considérée comme correcte. Le groupe pose ",e.jsx(i.code,{children:"aria-invalid"})," sur le ",e.jsx(i.code,{children:"fieldset"}),"."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h2,{id:"options",children:"Options"}),`
`,e.jsx(i.h3,{id:"requis",children:"Requis"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"required"})," sur le groupe pour exiger une sélection avant l’envoi du formulaire. Un astérisque est affiché à côté de la légende."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(i.h3,{id:"aide",children:"Aide"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"helper"})," pour donner une indication."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h3,{id:"tailles",children:"Tailles"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"sm"})," lorsque l’espace est contraint, ",e.jsx(i.code,{children:"md"})," par défaut, ",e.jsx(i.code,{children:"lg"})," pour les formulaires aérés."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(i.h2,{id:"groupe",children:"Groupe"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"RadioGroup"})," enveloppe les options dans un ",e.jsx(i.code,{children:"fieldset"})," nommé par ",e.jsx(i.code,{children:"label"})," (",e.jsx(i.code,{children:"<legend>"}),"). Toutes les radios partagent le même ",e.jsx(i.code,{children:"name"}),". La valeur est une chaîne."]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(i.h3,{id:"disposition",children:"Disposition"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:'orientation="horizontal"'})," aligne les options sur une ligne."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"Radio"})," rend un ",e.jsx(i.code,{children:'<input type="radio">'})," natif. Le groupe utilise ",e.jsx(i.code,{children:"fieldset"})," + ",e.jsx(i.code,{children:"legend"}),". Les flèches déplacent la sélection dans le groupe."]}),`
`,e.jsx(i.p,{children:"Associez toujours un label visible par option. La légende du groupe nomme l’ensemble, pas chaque radio."}),`
`,e.jsx(i.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"RadioGroup"})," + ",e.jsx(i.code,{children:"Radio"})," avec ",e.jsx(i.code,{children:"value"})," distinctes"]}),`
`,e.jsxs(i.li,{children:["Un seul ",e.jsx(i.code,{children:"name"})," pour tout le groupe"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"invalid"})," ",e.jsx(i.strong,{children:"et"})," un message ",e.jsx(i.code,{children:"error"})," (ne pas se fier à la couleur seule)"]}),`
`]}),`
`,e.jsx(i.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Des radios sans groupe nommé"}),`
`,e.jsx(i.li,{children:"Segmented control (hors périmètre)"}),`
`,e.jsx(i.li,{children:"Simuler un choix exclusif avec des cases à cocher"}),`
`]}),`
`,e.jsxs(i.p,{children:["Thème sombre : barre d’outils ",e.jsx(i.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(i.strong,{children:"Langue"}),"."]}),`
`,e.jsx(i.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(i.p,{children:["Les attributs natifs ",e.jsx(i.code,{children:"<input>"})," (",e.jsx(i.code,{children:"name"}),", ",e.jsx(i.code,{children:"className"}),", …) sont transmis au contrôle. ",e.jsx(i.code,{children:"value"})," est obligatoire."]}),`
`,e.jsx(a,{of:r,include:["size","label","value","disabled","required"]})]})}function A(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}export{A as default};
