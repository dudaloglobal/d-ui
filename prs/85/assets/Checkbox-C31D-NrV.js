import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-AGuS8-Lw.js";import{M as c,C as n,A as o}from"./index-DFAaG5O7.js";import{C as r,D as t,a,I as h,R as x,H as u,b as j,S as p,G as m,c as b}from"./Checkbox.stories-BndDF8HZ.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CO4cV4v8.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-D60Dts3d.js";import"./cx-DUb51p-i.js";import"./selectionControl-BnQ8gEkV.js";function d(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r}),`
`,e.jsx(i.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"Checkbox"})," est une case à cocher native. Pour plusieurs options indépendantes, utilisez ",e.jsx(i.code,{children:"CheckboxGroup"}),"."]}),`
`,e.jsxs(i.p,{children:["Les exemples suivent la ",e.jsx(i.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(i.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(n,{of:t}),`
`,e.jsx(i.h2,{id:"états-particuliers",children:"États particuliers"}),`
`,e.jsxs(i.p,{children:["Deux états particuliers : ",e.jsx(i.code,{children:"disabled"})," et ",e.jsx(i.code,{children:"invalid"}),"."]}),`
`,e.jsx(i.h3,{id:"désactivé",children:"Désactivé"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"disabled"})," lorsque la valeur ne peut pas être modifiée."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(i.h3,{id:"invalide",children:"Invalide"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"invalid"})," (et ",e.jsx(i.code,{children:"error"})," pour le message) pour indiquer que la valeur est considérée comme incorrecte. ",e.jsx(i.code,{children:"invalid"})," pose ",e.jsx(i.code,{children:"aria-invalid"}),"."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"options",children:"Options"}),`
`,e.jsx(i.h3,{id:"requis",children:"Requis"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"required"})," pour indiquer que la case doit être cochée avant l’envoi du formulaire. Un astérisque est affiché à côté du libellé."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"aide",children:"Aide"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"helper"})," pour donner une indication."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"état-indéterminé",children:"État indéterminé"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"indeterminate"})," représente un état mixte (ni tout coché, ni tout décoché), typiquement sur « Tout sélectionner ». Pose ",e.jsx(i.code,{children:'aria-checked="mixed"'}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h3,{id:"tailles",children:"Tailles"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"sm"})," lorsque l’espace est contraint, ",e.jsx(i.code,{children:"md"})," par défaut, ",e.jsx(i.code,{children:"lg"})," pour les formulaires aérés."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"groupe",children:"Groupe"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"CheckboxGroup"})," enveloppe les options dans un ",e.jsx(i.code,{children:"fieldset"})," nommé par ",e.jsx(i.code,{children:"label"})," (",e.jsx(i.code,{children:"<legend>"}),"). La valeur est un tableau de chaînes."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"disposition",children:"Disposition"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:'orientation="horizontal"'})," aligne les options sur une ligne."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"Checkbox"})," rend un ",e.jsx(i.code,{children:'<input type="checkbox">'})," natif. Associez toujours un label visible : prop ",e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"aria-labelledby"}),", ou un ",e.jsx(i.code,{children:"<label htmlFor>"})," externe."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"CheckboxGroup"})," pose ",e.jsx(i.code,{children:"fieldset"})," + ",e.jsx(i.code,{children:"legend"}),". Ne pas simuler un groupe avec des ",e.jsx(i.code,{children:"div"})," et ",e.jsx(i.code,{children:'role="group"'})," si un ",e.jsx(i.code,{children:"fieldset"})," suffit."]}),`
`,e.jsxs(i.p,{children:["Le champ peut être désactivé : ",e.jsx(i.code,{children:"disabled"})," n’est plus focusable. Indiquez autrement pourquoi le contrôle est là."]}),`
`,e.jsx(i.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:'<Checkbox label="J’accepte les conditions" required />'})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"CheckboxGroup"})," pour plusieurs options liées"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"invalid"})," ",e.jsx(i.strong,{children:"et"})," un message ",e.jsx(i.code,{children:"error"})," (ne pas se fier à la couleur seule)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"indeterminate"})," pour un parent « tout sélectionner »"]}),`
`]}),`
`,e.jsx(i.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Une case identifiée seulement par la proximité d’un texte"}),`
`,e.jsx(i.li,{children:"Tree checkbox (hors périmètre)"}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"required"})," sur chaque option d’un groupe multi-sélection"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Thème sombre : barre d’outils ",e.jsx(i.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(i.strong,{children:"Langue"}),"."]}),`
`,e.jsx(i.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(i.p,{children:["Les attributs natifs ",e.jsx(i.code,{children:"<input>"})," (",e.jsx(i.code,{children:"name"}),", ",e.jsx(i.code,{children:"value"}),", ",e.jsx(i.code,{children:"className"}),", …) sont transmis au contrôle."]}),`
`,e.jsx(o,{of:r,include:["size","label","helper","error","invalid","disabled","required","indeterminate","checked"]})]})}function U(s={}){const{wrapper:i}={...l(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(d,{...s})}):d(s)}export{U as default};
