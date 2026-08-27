import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-AGuS8-Lw.js";import{M as d,C as s,A as o}from"./index-D_4gJiDh.js";import{S as n,D as t,O as a,a as h,I as x,R as u,H as j,b as p}from"./Switch.stories-DbQDkngj.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CK3IA1i6.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-BXPgbAes.js";import"./cx-DUb51p-i.js";import"./selectionControl-BnQ8gEkV.js";function l(r){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:n}),`
`,e.jsx(i.h1,{id:"switch",children:"Switch"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"Switch"})," est un interrupteur pour un réglage immédiat (on / off). Pour un accord ou un choix de formulaire, préférez ",e.jsx(i.code,{children:"Checkbox"}),"."]}),`
`,e.jsxs(i.p,{children:["Les exemples suivent la ",e.jsx(i.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(i.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(i.h2,{id:"états-particuliers",children:"États particuliers"}),`
`,e.jsxs(i.p,{children:["Trois états particuliers : activé, ",e.jsx(i.code,{children:"disabled"})," et ",e.jsx(i.code,{children:"invalid"}),"."]}),`
`,e.jsx(i.h3,{id:"activé",children:"Activé"}),`
`,e.jsxs(i.p,{children:["Passez ",e.jsx(i.code,{children:"checked"})," (contrôlé) ou ",e.jsx(i.code,{children:"defaultChecked"})," (non contrôlé)."]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(i.h3,{id:"désactivé",children:"Désactivé"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"disabled"})," lorsque la valeur ne peut pas être modifiée."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h3,{id:"invalide",children:"Invalide"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"invalid"})," (et ",e.jsx(i.code,{children:"error"})," pour le message) pour indiquer que la valeur est considérée comme incorrecte. ",e.jsx(i.code,{children:"invalid"})," pose ",e.jsx(i.code,{children:"aria-invalid"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h2,{id:"options",children:"Options"}),`
`,e.jsx(i.h3,{id:"requis",children:"Requis"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"required"})," pour indiquer que l’interrupteur doit être activé avant l’envoi du formulaire. Un astérisque est affiché à côté du libellé."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(i.h3,{id:"aide",children:"Aide"}),`
`,e.jsxs(i.p,{children:["Utilisez ",e.jsx(i.code,{children:"helper"})," pour donner une indication."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(i.h3,{id:"tailles",children:"Tailles"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"sm"})," lorsque l’espace est contraint, ",e.jsx(i.code,{children:"md"})," par défaut, ",e.jsx(i.code,{children:"lg"})," pour les formulaires aérés."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"Switch"})," rend un ",e.jsx(i.code,{children:'<input type="checkbox" role="switch">'}),". L’état est exposé par ",e.jsx(i.code,{children:"aria-checked"})," (",e.jsx(i.code,{children:"true"})," / ",e.jsx(i.code,{children:"false"}),"). Associez toujours un nom accessible : prop ",e.jsx(i.code,{children:"label"}),", ",e.jsx(i.code,{children:"aria-label"}),", ou ",e.jsx(i.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(i.p,{children:["Espace et clic basculent l’état. Le focus visible utilise l’anneau ",e.jsx(i.code,{children:"ring-focus"}),"."]}),`
`,e.jsx(i.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:'<Switch label="Mode compact" />'})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"aria-label"})," si le libellé n’est pas visible"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"invalid"})," ",e.jsx(i.strong,{children:"et"})," un message ",e.jsx(i.code,{children:"error"})," (ne pas se fier à la couleur seule)"]}),`
`]}),`
`,e.jsx(i.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Un interrupteur sans nom accessible"}),`
`,e.jsx(i.li,{children:"Remplacer un groupe radio par une rangée d’interrupteurs"}),`
`,e.jsx(i.li,{children:"Segmented control (hors périmètre)"}),`
`]}),`
`,e.jsxs(i.p,{children:["Thème sombre : barre d’outils ",e.jsx(i.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(i.strong,{children:"Langue"}),"."]}),`
`,e.jsx(i.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(i.p,{children:["Les attributs natifs ",e.jsx(i.code,{children:"<input>"})," (",e.jsx(i.code,{children:"name"}),", ",e.jsx(i.code,{children:"className"}),", …) sont transmis au contrôle."]}),`
`,e.jsx(o,{of:n,include:["size","label","helper","error","invalid","disabled","required","checked"]})]})}function M(r={}){const{wrapper:i}={...c(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(l,{...r})}):l(r)}export{M as default};
