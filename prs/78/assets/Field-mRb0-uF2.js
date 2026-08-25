import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-AGuS8-Lw.js";import{M as l}from"./index-Bg7BBfEX.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BWSgERHv.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function i(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Fondations/Champs de formulaire"}),`
`,e.jsx(n.h1,{id:"système-field",children:"Système Field"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Field"}),` porte l'anatomie d'un champ : libellé, aide, erreur, état. Tous les
contrôles de saisie s'y composent, pour qu'aucun n'ait à réinventer son propre
étiquetage.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Field, FieldDescription, FieldError, Label } from 'd-ui';

<Field required invalid={Boolean(error)}>
  <Label>Adresse e-mail</Label>
  <FieldDescription>Elle sert à la récupération de compte.</FieldDescription>
  <Input type="email" />
  <FieldError>{error}</FieldError>
</Field>;
`})}),`
`,e.jsx(n.h2,{id:"câbler-un-contrôle",children:"Câbler un contrôle"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Field"}),` ne connaît pas le contrôle. Celui-ci récupère ses attributs via
`,e.jsx(n.code,{children:"useFieldControl()"})," :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function Input(props) {
  const field = useFieldControl();
  return <input {...field} {...props} />;
}
`})}),`
`,e.jsxs(n.p,{children:["Le hook renvoie ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"required"}),", ",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"aria-invalid"}),` et
`,e.jsx(n.code,{children:"aria-describedby"}),". Hors d'un ",e.jsx(n.code,{children:"Field"}),`, il renvoie un objet vide — un contrôle
peut donc l'appeler sans condition et rester utilisable seul.`]}),`
`,e.jsxs(n.p,{children:["C'est ainsi que ",e.jsx(n.code,{children:"Input"}),", ",e.jsx(n.code,{children:"Textarea"}),", ",e.jsx(n.code,{children:"Select"})," et ",e.jsx(n.code,{children:"Checkbox"}),` se brancheront
(DS-023, DS-024, DS-025), sans que `,e.jsx(n.code,{children:"Field"})," ait à les connaître."]}),`
`,e.jsx(n.h2,{id:"groupes",children:"Groupes"}),`
`,e.jsxs(n.p,{children:[`Un groupe de cases à cocher ou de boutons radio ne peut pas être nommé par un
`,e.jsx(n.code,{children:"label"})," : ",e.jsx(n.code,{children:"for"})," ne vise qu'un seul contrôle. ",e.jsx(n.code,{children:"Field group"}),` rend donc un
`,e.jsx(n.code,{children:"fieldset"}),", et ",e.jsx(n.code,{children:"Label"})," devient sa ",e.jsx(n.code,{children:"legend"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Field group required>
  <Label>Notifications</Label>
  <FieldDescription>Choisissez au moins un canal.</FieldDescription>
  <label>
    <input type="checkbox" /> E-mail
  </label>
  <label>
    <input type="checkbox" /> SMS
  </label>
</Field>
`})}),`
`,e.jsxs(n.p,{children:["Dans ce mode, ",e.jsx(n.code,{children:"useFieldControl()"})," ne renvoie ni ",e.jsx(n.code,{children:"id"})," ni ",e.jsx(n.code,{children:"aria-describedby"}),` :
c'est le `,e.jsx(n.code,{children:"fieldset"}),` qui les porte. Les poser sur chaque option ferait répéter
l'aide à chaque case.`]}),`
`,e.jsx(n.h2,{id:"accessibilité",children:"Accessibilité"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"aria-describedby"})," ne référence que ce qui existe."]})," ",e.jsx(n.code,{children:"FieldDescription"}),` et
`,e.jsx(n.code,{children:"FieldError"})," s'enregistrent auprès du ",e.jsx(n.code,{children:"Field"}),`, et le contrôle ne cite que les
identifiants réellement rendus. Pointer vers un id absent fait taire l'annonce
entière chez plusieurs lecteurs d'écran.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"L'erreur n'est pas dans le DOM tant que le champ est valide."}),` Un message
masqué visuellement mais présent reste lu par les technologies d'assistance.
`,e.jsx(n.code,{children:"FieldError"})," ne rend ",e.jsx(n.code,{children:"null"})," que sur ",e.jsx(n.code,{children:"invalid={false}"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:'role="alert"'})," sur l'erreur"]}),` : elle est annoncée à son apparition, sans
attendre que l'utilisateur revienne sur le champ.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"L'astérisque de champ requis est décoratif"})," (",e.jsx(n.code,{children:"aria-hidden"}),`). C'est
l'attribut `,e.jsx(n.code,{children:"required"}),` du contrôle qui porte l'information. Ajouter en plus un
texte masqué « requis » ferait annoncer la contrainte deux fois.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"aria-invalid"})," seul ne suffit pas."]}),` L'état invalide est aussi signalé par
la couleur `,e.jsx(n.em,{children:"et"}),` par la bordure renforcée, pour ne pas reposer sur la seule
couleur (WCAG 1.4.1).`]}),`
`]}),`
`,e.jsx(n.h2,{id:"à-faire--à-éviter",children:"À faire / à éviter"}),`
`,e.jsxs(n.p,{children:[`| ✅ À faire                                        | ❌ À éviter                                             |
| ------------------------------------------------- | ------------------------------------------------------- |
| `,e.jsx(n.code,{children:"<Field invalid>"})," piloté par l'état de validation | Rendre ",e.jsx(n.code,{children:"<FieldError>"}),` en le masquant en CSS             |
| `,e.jsx(n.code,{children:"<Field group>"})," pour des cases ou des radios      | Un ",e.jsx(n.code,{children:"<Label>"}),` unique pour plusieurs contrôles            |
| `,e.jsx(n.code,{children:"useFieldControl()"})," dans le contrôle              | Recopier ",e.jsx(n.code,{children:"aria-describedby"}),` à la main dans chaque écran |
| Une `,e.jsx(n.code,{children:"FieldDescription"})," courte et permanente       | Y mettre le message d'erreur                            |"]})]})}function j(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{j as default};
