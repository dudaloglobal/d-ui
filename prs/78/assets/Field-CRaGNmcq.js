import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-AGuS8-Lw.js";import{M as o,C as r,A as c}from"./index-BOyy78aJ.js";import{F as s,D as t,W as a,R as u,I as h,a as x,G as j}from"./Field.stories-BgU0_K8O.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-e3S1s0Rc.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-source-BpJ8NOnL.js";import"./cx-rSPOEDc8.js";import"./Text-DvZeaTGB.js";function d(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
`,e.jsx(n.h1,{id:"field",children:"Field"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Field"})," porte l’anatomie d’un champ : libellé, aide, erreur, état. Les contrôles de saisie s’y composent (",e.jsx(n.code,{children:"useFieldControl"}),") pour qu’aucun n’ait à réinventer son étiquetage. ",e.jsx(n.code,{children:"Input"}),", ",e.jsx(n.code,{children:"Select"})," et ",e.jsx(n.code,{children:"Checkbox"})," arriveront ensuite (DS-023 et suivants)."]}),`
`,e.jsxs(n.p,{children:["Les exemples suivent la ",e.jsx(n.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(n.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h2,{id:"aide",children:"Aide"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FieldDescription"})," est une aide permanente, citée par ",e.jsx(n.code,{children:"aria-describedby"})," seulement si elle est réellement rendue. Un id absent ferait taire l’annonce entière."]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"requis",children:"Requis"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"required"})," pose l’attribut sur le contrôle et un astérisque décoratif (",e.jsx(n.code,{children:"aria-hidden"}),") sur le libellé. C’est l’attribut HTML qui porte l’information : un texte masqué « requis » ferait double emploi."]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h2,{id:"invalide",children:"Invalide"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FieldError"})," n’est pas dans le DOM tant que ",e.jsx(n.code,{children:"invalid"})," est faux. Un message masqué en CSS resterait lu. ",e.jsx(n.code,{children:'role="alert"'})," annonce l’apparition ; le message est aussi cité par ",e.jsx(n.code,{children:"aria-describedby"}),", donc il peut être entendu deux fois — mieux que pas du tout. L’état invalide n’est pas porté par la seule couleur (bordure renforcée, WCAG 1.4.1)."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"désactivé",children:"Désactivé"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," se propage au contrôle via ",e.jsx(n.code,{children:"useFieldControl"}),", et atténue le libellé."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"groupe",children:"Groupe"}),`
`,e.jsxs(n.p,{children:["Un groupe de cases ou de radios ne peut pas être nommé par un ",e.jsx(n.code,{children:"label"})," (",e.jsx(n.code,{children:"for"})," ne vise qu’un contrôle). ",e.jsx(n.code,{children:"group"})," rend un ",e.jsx(n.code,{children:"fieldset"})," ; ",e.jsx(n.code,{children:"Label"})," devient sa ",e.jsx(n.code,{children:"legend"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"Label"})," doit rester le premier enfant."]})," Une ",e.jsx(n.code,{children:"legend"})," ne nomme le ",e.jsx(n.code,{children:"fieldset"})," que si elle en est le premier élément."]}),`
`,e.jsxs(n.p,{children:["Dans ce mode, ",e.jsx(n.code,{children:"useFieldControl()"})," ne renvoie ni ",e.jsx(n.code,{children:"id"}),", ni ",e.jsx(n.code,{children:"aria-describedby"}),", ni ",e.jsx(n.code,{children:"required"})," : les poser sur chaque option répéterait l’aide et exigerait de cocher toutes les cases. ",e.jsx(n.code,{children:"required"})," ne pilote que l’astérisque de la légende."]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h2,{id:"câbler-un-contrôle",children:"Câbler un contrôle"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function Input(props) {
  const field = useFieldControl();
  return <input {...field} {...props} />;
}
`})}),`
`,e.jsxs(n.p,{children:["Hors d’un ",e.jsx(n.code,{children:"Field"}),", le hook renvoie ",e.jsx(n.code,{children:"{}"})," : un contrôle peut l’appeler sans condition."]}),`
`,e.jsx(n.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Field"})," seul rend un ",e.jsx(n.code,{children:"div"}),". ",e.jsx(n.code,{children:"group"})," rend un ",e.jsx(n.code,{children:"fieldset"}),". ",e.jsx(n.code,{children:"Label"})," rend ",e.jsx(n.code,{children:"<label for>"})," ou ",e.jsx(n.code,{children:"<legend>"}),". Pas de ",e.jsx(n.code,{children:"role"})," inventé."]}),`
`,e.jsx(n.h3,{id:"à-faire",children:"À faire"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Field invalid>"})," piloté par la validation, avec ",e.jsx(n.code,{children:"<FieldError>"})," dans le DOM uniquement alors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Field group>"})," pour des cases ou des radios, ",e.jsx(n.code,{children:"Label"})," en premier enfant"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useFieldControl()"})," dans le contrôle"]}),`
`]}),`
`,e.jsx(n.h3,{id:"à-éviter",children:"À éviter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Rendre ",e.jsx(n.code,{children:"<FieldError>"})," en le masquant en CSS"]}),`
`,e.jsxs(n.li,{children:["Un ",e.jsx(n.code,{children:"<Label>"})," unique pour plusieurs contrôles hors ",e.jsx(n.code,{children:"group"})]}),`
`,e.jsxs(n.li,{children:["Recopier ",e.jsx(n.code,{children:"aria-describedby"})," à la main"]}),`
`,e.jsxs(n.li,{children:["Mettre le message d’erreur dans ",e.jsx(n.code,{children:"FieldDescription"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Thème sombre : barre d’outils ",e.jsx(n.strong,{children:"Thème"}),". Langue des exemples : barre d’outils ",e.jsx(n.strong,{children:"Langue"}),"."]}),`
`,e.jsx(n.h2,{id:"propriétés",children:"Propriétés"}),`
`,e.jsxs(n.p,{children:["Les attributs natifs de l’enveloppe (",e.jsx(n.code,{children:"className"}),", ",e.jsx(n.code,{children:"id"}),", …) sont transmis. ",e.jsx(n.code,{children:"Label"}),", ",e.jsx(n.code,{children:"FieldDescription"})," et ",e.jsx(n.code,{children:"FieldError"})," n’exposent pas d’API au-delà du HTML."]}),`
`,e.jsx(c,{of:s,include:["required","invalid","disabled","group"]})]})}function S(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{S as default};
