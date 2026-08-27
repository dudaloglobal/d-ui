import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-AGuS8-Lw.js";import{M as d,C as r,A as c}from"./index-D_4gJiDh.js";import{T as n,D as o,a as t,V as h,I as x,M as u,F as j}from"./Textarea.stories-B0t2AhIh.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CK3IA1i6.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-BXPgbAes.js";import"./cx-DUb51p-i.js";import"./textControl-DNhl058t.js";function l(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:n}),`
`,e.jsx(s.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"Textarea"})," lorsque la saisie dépasse une ligne. Le cadre reste compact (deux lignes par défaut), en pleine largeur."]}),`
`,e.jsxs(s.p,{children:["Les exemples suivent la ",e.jsx(s.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(s.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"label"})," est une prop du composant : le libellé s’affiche au-dessus du cadre."]}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(s.h2,{id:"états-particuliers",children:"États particuliers"}),`
`,e.jsx(s.h3,{id:"désactivé",children:"Désactivé"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"disabled"})," lorsque la valeur ne peut pas être modifiée."]}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(s.h3,{id:"valide",children:"Valide"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"valid"})," pour indiquer que la valeur saisie est considérée comme correcte."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(s.h3,{id:"invalide",children:"Invalide"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"invalid"})," (et ",e.jsx(s.code,{children:"error"})," pour le message) pour indiquer que la valeur saisie est considérée comme incorrecte. ",e.jsx(s.code,{children:"invalid"})," pose ",e.jsx(s.code,{children:"aria-invalid"}),"."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(s.h2,{id:"longueur-maximale",children:"Longueur maximale"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"maxLength"})," lorsque la longueur de saisie est limitée. Le compteur (caractères restants) s’affiche à droite du libellé. Localisez le texte avec ",e.jsx(s.code,{children:"countMessage"}),"."]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(s.h2,{id:"halo-de-focus",children:"Halo de focus"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"focusShadow"})," ajoute un halo doux autour du cadre au focus. Inactif par défaut : passez ",e.jsx(s.code,{children:"focusShadow"})," pour l’activer."]}),`
`,e.jsx(r,{of:j}),`
`,e.jsxs(s.p,{children:["Thème sombre : barre d’outils ",e.jsx(s.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(s.strong,{children:"Langue"}),"."]}),`
`,e.jsx(s.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Textarea"})," rend un ",e.jsx(s.code,{children:"<textarea>"})," natif."]}),`
`,e.jsxs(s.p,{children:["Associez toujours un label visible : prop ",e.jsx(s.code,{children:"label"}),", ",e.jsx(s.code,{children:"aria-labelledby"}),", ou un ",e.jsx(s.code,{children:"<label htmlFor>"})," externe. Un placeholder ne suffit pas."]}),`
`,e.jsxs(s.p,{children:["Lorsque ",e.jsx(s.code,{children:"maxLength"})," est posé, fournissez ",e.jsx(s.code,{children:"countMessage"})," localisé (par exemple « n caractères restants »). Le compteur est lié par ",e.jsx(s.code,{children:"aria-describedby"})," : il n’y a pas d’",e.jsx(s.code,{children:"aria-live"})," à chaque frappe."]}),`
`,e.jsx(s.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<Textarea label="Commentaire" />'})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"countMessage"})," localisé lorsque ",e.jsx(s.code,{children:"maxLength"})," est posé"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"invalid"})," ",e.jsx(s.strong,{children:"et"})," un message ",e.jsx(s.code,{children:"error"})," (ne pas se fier à la couleur seule)"]}),`
`]}),`
`,e.jsx(s.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Une zone identifiée seulement par le placeholder"}),`
`,e.jsxs(s.li,{children:["Un ",e.jsx(s.code,{children:"TextInput"})," multiligne — utilisez ",e.jsx(s.code,{children:"Textarea"})]}),`
`]}),`
`,e.jsx(s.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(s.p,{children:["Les attributs natifs ",e.jsx(s.code,{children:"<textarea>"})," (",e.jsx(s.code,{children:"name"}),", ",e.jsx(s.code,{children:"required"}),", ",e.jsx(s.code,{children:"className"}),", …) sont transmis au contrôle."]}),`
`,e.jsx(c,{of:n,include:["size","label","helper","error","placeholder","invalid","valid","disabled","required","icon","prefix","suffix","fullWidth","focusShadow","clearable","clearLabel","showCount","countMessage","maxLength","rows"]})]})}function C(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(l,{...i})}):l(i)}export{C as default};
