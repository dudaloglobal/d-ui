import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-AGuS8-Lw.js";import{M as a,C as i,A as l}from"./index-CUeDFAbO.js";import{I as r,D as o,a as t,V as h,b as x,R as u,H as p,P as j,c as m,C as f,M as b,d as v,S as g,e as q,T as L,f as z,N as M,g as I,h as y}from"./Input.stories-913gLD8u.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Mdm9qJ7t.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-C_O40UCi.js";import"./docs-locale-u_wANLWo.js";function d(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(s.h1,{id:"input",children:"Input"}),`
`,e.jsxs(s.p,{children:["Les champs de saisie (",e.jsx(s.code,{children:"Input"})," et ",e.jsx(s.code,{children:"Textarea"}),") collectent du texte."]}),`
`,e.jsxs(s.p,{children:["Les exemples suivent la ",e.jsx(s.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(s.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"label"})," est une prop du composant : le libellé s’affiche au-dessus du cadre. Vous pouvez aussi attacher un ",e.jsx(s.code,{children:"<label htmlFor>"})," externe ou ",e.jsx(s.code,{children:"aria-labelledby"})," (par exemple via ",e.jsx(s.code,{children:"Field"}),", DS-022)."]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(s.h2,{id:"special-states",children:"Special states"}),`
`,e.jsxs(s.p,{children:["Trois états particuliers : ",e.jsx(s.code,{children:"disabled"}),", ",e.jsx(s.code,{children:"valid"})," et ",e.jsx(s.code,{children:"invalid"}),"."]}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"disabled"})," lorsque la valeur ne peut pas être modifiée."]}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(s.h3,{id:"valid",children:"Valid"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"valid"})," pour indiquer que la valeur saisie est considérée comme correcte."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"invalid"})," (et ",e.jsx(s.code,{children:"error"})," pour le message) pour indiquer que la valeur saisie est considérée comme incorrecte. ",e.jsx(s.code,{children:"invalid"})," pose ",e.jsx(s.code,{children:"aria-invalid"}),"."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h2,{id:"options",children:"Options"}),`
`,e.jsxs(s.p,{children:["Options : ",e.jsx(s.code,{children:"required"}),", ",e.jsx(s.code,{children:"helper"}),", ",e.jsx(s.code,{children:"placeholder"}),", ",e.jsx(s.code,{children:"icon"}),", ",e.jsx(s.code,{children:"clearable"}),", ",e.jsx(s.code,{children:"maxLength"}),". Les chips sont hors périmètre."]}),`
`,e.jsx(s.h3,{id:"required",children:"Required"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"required"})," pour indiquer que le champ doit être renseigné avant l’envoi du formulaire. Un astérisque est affiché à côté du libellé."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(s.h3,{id:"helper",children:"Helper"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"helper"})," pour donner une indication."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(s.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"placeholder"})," pour donner un exemple de valeur attendue ou inviter à remplir le champ."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h3,{id:"icon",children:"Icon"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"icon"})," pour illustrer le champ. ",e.jsx(s.code,{children:"icon"})," complète ",e.jsx(s.code,{children:"label"})," mais ne le remplace pas."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(s.h3,{id:"clearable",children:"Clearable"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"clearable"})," affiche un bouton d’effacement dès que la valeur n’est pas vide. Passez ",e.jsx(s.code,{children:"clearLabel"})," (nom accessible) et ",e.jsx(s.code,{children:"onClear"})," si la valeur est contrôlée."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(s.h3,{id:"max-length",children:"Max length"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"maxLength"})," lorsque la longueur de saisie est limitée. Le compteur (caractères restants) s’affiche à droite du libellé. Localisez le texte avec ",e.jsx(s.code,{children:"countMessage"}),"."]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(s.h3,{id:"prefix-and-suffix",children:"Prefix and suffix"}),`
`,e.jsxs(s.p,{children:["Les slots ",e.jsx(s.code,{children:"prefix"})," et ",e.jsx(s.code,{children:"suffix"})," illustrent le champ (unité, schéma d’URL). Ils ne remplacent pas le label."]}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(s.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"sm"})," lorsque l’espace est contraint, ",e.jsx(s.code,{children:"md"})," par défaut, ",e.jsx(s.code,{children:"lg"})," pour les formulaires aérés."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(s.h2,{id:"textarea",children:"Textarea"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:"Textarea"})," lorsque la saisie dépasse une ligne."]}),`
`,e.jsx(i,{of:q}),`
`,e.jsx(s.h3,{id:"valid-1",children:"Valid"}),`
`,e.jsx(i,{of:L}),`
`,e.jsx(s.h3,{id:"invalid-1",children:"Invalid"}),`
`,e.jsx(i,{of:z}),`
`,e.jsx(s.h2,{id:"number",children:"Number"}),`
`,e.jsxs(s.p,{children:["Utilisez ",e.jsx(s.code,{children:'type="number"'})," lorsque la valeur attendue est numérique. ",e.jsx(s.code,{children:'inputMode="numeric"'})," aide le clavier logiciel."]}),`
`,e.jsx(i,{of:M}),`
`,e.jsx(s.h2,{id:"password",children:"Password"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:'type="password"'})," masque la saisie et propose un basculeur de visibilité nommé (pas seulement une icône)."]}),`
`,e.jsx(i,{of:I}),`
`,e.jsxs(s.p,{children:["Thème sombre : barre d’outils ",e.jsx(s.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(s.strong,{children:"Langue"}),"."]}),`
`,e.jsx(s.h2,{id:"accessibility-concerns",children:"Accessibility concerns"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Input"})," rend un ",e.jsx(s.code,{children:"<input>"})," natif, ",e.jsx(s.code,{children:"Textarea"})," un ",e.jsx(s.code,{children:"<textarea>"}),"."]}),`
`,e.jsxs(s.p,{children:["Associez toujours un label visible : prop ",e.jsx(s.code,{children:"label"}),", ",e.jsx(s.code,{children:"aria-labelledby"}),", ou un ",e.jsx(s.code,{children:"<label htmlFor>"})," externe. Un placeholder ne suffit pas."]}),`
`,e.jsxs(s.p,{children:["Lorsque ",e.jsx(s.code,{children:"maxLength"})," est posé, fournissez ",e.jsx(s.code,{children:"countMessage"})," localisé (par exemple « n caractères restants »). Le compteur est lié par ",e.jsx(s.code,{children:"aria-describedby"})," : il n’y a pas d’",e.jsx(s.code,{children:"aria-live"})," à chaque frappe."]}),`
`,e.jsx(s.p,{children:"Le champ peut être désactivé de deux façons :"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"disabled"})," désactive complètement le champ : il n’est plus focusable et les événements pointeur sont ignorés. Indiquez autrement pourquoi le champ est là et pourquoi il est désactivé."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"readOnly"})," / ",e.jsx(s.code,{children:"aria-disabled"})," empêche l’édition tout en laissant le focus. Expliquez la raison via ",e.jsx(s.code,{children:"helper"}),", un tooltip ou une description ARIA."]}),`
`]}),`
`,e.jsx(s.h3,{id:"do",children:"Do"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'<Input label="Email" type="email" autoComplete="email" />'})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"clearLabel"})," / ",e.jsx(s.code,{children:"revealPasswordLabel"})," dans la langue de l’app"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"countMessage"})," localisé lorsque ",e.jsx(s.code,{children:"maxLength"})," est posé"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"invalid"})," ",e.jsx(s.strong,{children:"et"})," un message ",e.jsx(s.code,{children:"error"})," (ne pas se fier à la couleur seule)"]}),`
`]}),`
`,e.jsx(s.h3,{id:"dont",children:"Don’t"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Un champ identifié seulement par le placeholder"}),`
`,e.jsxs(s.li,{children:["Remplacer le label par ",e.jsx(s.code,{children:"icon"})]}),`
`,e.jsx(s.li,{children:"Masquer le mot de passe derrière une icône sans nom accessible"}),`
`,e.jsx(s.li,{children:"Saisie masquée (carte), texte riche, OTP, chips — hors périmètre"}),`
`]}),`
`,e.jsx(s.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(s.h3,{id:"input-1",children:"Input"}),`
`,e.jsxs(s.p,{children:["Les attributs natifs ",e.jsx(s.code,{children:"<input>"})," (",e.jsx(s.code,{children:"autoComplete"}),", ",e.jsx(s.code,{children:"inputMode"}),", ",e.jsx(s.code,{children:"name"}),", ",e.jsx(s.code,{children:"required"}),", ",e.jsx(s.code,{children:"className"}),", …) sont transmis au contrôle."]}),`
`,e.jsx(l,{of:r,include:["type","size","label","helper","error","placeholder","invalid","valid","disabled","required","icon","prefix","suffix","fullWidth","clearable","clearLabel","showCount","maxLength"]}),`
`,e.jsx(s.h3,{id:"textarea-1",children:"Textarea"}),`
`,e.jsxs(s.p,{children:["Même contrat, sans ",e.jsx(s.code,{children:"type"})," ni basculeur mot de passe."]}),`
`,e.jsx(l,{of:y,include:["size","label","helper","error","placeholder","invalid","valid","disabled","required","icon","prefix","suffix","fullWidth","clearable","clearLabel","showCount","maxLength","rows"]})]})}function O(n={}){const{wrapper:s}={...c(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{O as default};
