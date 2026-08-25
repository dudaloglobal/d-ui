import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DQxMMF7O.js";import{c as v}from"./cx-2dOUpm6k.js";import{T as Q}from"./Text-CLY2twGo.js";import"./_commonjsHelpers-CqkleIqs.js";const F=a.createContext(null);function D(r){const n=a.useContext(F);if(!n)throw new Error(`<${r}> doit être rendu à l'intérieur de <Field>.`);return n}function se(){return a.useContext(F)}function X(r){const n=[r.hasDescription?r.descriptionId:null,r.hasError?r.errorId:null].filter(Boolean);return n.length>0?n.join(" "):void 0}function d({id:r,required:n=!1,invalid:i=!1,disabled:s=!1,group:t=!1,className:l,children:q,...y}){const Z=a.useId(),c=r??Z,[I,ee]=a.useState(!1),[E,re]=a.useState(!1),j=a.useMemo(()=>({controlId:`${c}-control`,labelId:`${c}-label`,descriptionId:`${c}-description`,errorId:`${c}-error`,required:n,invalid:i,disabled:s,group:t,hasDescription:I,hasError:E,setHasDescription:ee,setHasError:re}),[c,n,i,s,t,I,E]),N=v("flex flex-col gap-1",l);return t?e.jsx(F.Provider,{value:j,children:e.jsx("fieldset",{...y,disabled:s||void 0,"aria-invalid":i||void 0,"aria-describedby":X(j),className:v(N,"min-w-0 border-0 p-0"),children:q})}):e.jsx(F.Provider,{value:j,children:e.jsx("div",{...y,className:N,children:q})})}d.__docgenInfo={description:"Anatomie d'un champ de formulaire.\n\nDistribue les identifiants et l'état à `Label`, `FieldDescription` et\n`FieldError`, et expose au contrôle les attributs ARIA à poser via\n`useFieldControl()`. Aucun couplage à une librairie de formulaires.",methods:[],displayName:"Field",props:{id:{required:!1,tsType:{name:"string"},description:"Identifiant de base. Généré si absent."},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},group:{required:!1,tsType:{name:"boolean"},description:"Groupe de contrôles (radio, cases à cocher).\n\nRend un `fieldset` et transforme le `Label` en `legend` : un groupe se\nnomme par sa légende, pas par un `for` qui ne pourrait viser qu'un seul\ndes contrôles.",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function u({className:r,...n}){const i=D("FieldDescription"),{setHasDescription:s}=i;return a.useEffect(()=>(s(!0),()=>s(!1)),[s]),e.jsx(Q,{...n,id:i.descriptionId,size:"body-sm",tone:"muted",className:r})}u.__docgenInfo={description:"Aide à la saisie, annoncée via `aria-describedby`.\n\nS'enregistre auprès du `Field` pour que le contrôle ne référence que des\nidentifiants réellement présents dans le DOM.",methods:[],displayName:"FieldDescription"};function Y({className:r,children:n,...i}){const s=D("FieldError"),{setHasError:t,invalid:l}=s;return a.useEffect(()=>{if(l)return t(!0),()=>t(!1)},[l,t]),l?e.jsx(Q,{...i,id:s.errorId,role:"alert",size:"body-sm",tone:"danger",className:r,children:n}):null}Y.__docgenInfo={description:`Message d'erreur du champ.

Ne rend rien tant que \`Field\` n'est pas \`invalid\` : un message d'erreur
présent dans le DOM mais masqué visuellement reste annoncé par les lecteurs
d'écran.

Porte \`role="alert"\` pour que l'erreur soit annoncée à son apparition, sans
attendre que l'utilisateur revienne sur le champ.`,methods:[],displayName:"FieldError"};function o({className:r,children:n,...i}){const s=D("Label"),t=e.jsxs(e.Fragment,{children:[n,s.required?e.jsx("span",{"aria-hidden":"true",className:"text-danger ml-0.5",children:"*"}):null]}),l=v("text-fg text-sm font-medium",s.disabled?"opacity-50":null,r);return s.group?e.jsx("legend",{...i,id:s.labelId,className:l,children:t}):e.jsx("label",{...i,id:s.labelId,htmlFor:s.controlId,className:l,children:t})}o.__docgenInfo={description:"Libellé du champ.\n\nDans un `Field group`, rend un `legend` : un groupe de contrôles se nomme par\nsa légende. Ailleurs, un `label` lié au contrôle par `for`.\n\nL'astérisque de champ requis est décoratif (`aria-hidden`) : c'est l'attribut\n`required` posé sur le contrôle qui porte l'information pour les lecteurs\nd'écran. Doubler les deux ferait annoncer « requis » deux fois.",methods:[],displayName:"Label"};function ne(){const r=se();return r?r.group?{required:r.required||void 0,disabled:r.disabled||void 0}:{id:r.controlId,required:r.required||void 0,disabled:r.disabled||void 0,"aria-invalid":r.invalid||void 0,"aria-describedby":X(r)}:{}}function f(r){const n=ne();return e.jsx("input",{...n,...r,className:"border-border text-fg bg-bg focus-visible:ring-focus focus-visible:ring-offset-bg h-10 rounded-md border px-3 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50 aria-invalid:border-2 aria-invalid:border-(--d-ui-color-danger)"})}const oe={title:"Components/Field",component:d,tags:["autodocs"],args:{children:null}},b={render:()=>e.jsxs(d,{children:[e.jsx(o,{children:"Adresse e-mail"}),e.jsx(f,{type:"email",defaultValue:"etudiant@dudalo.com"})]})},x={render:()=>e.jsxs(d,{children:[e.jsx(o,{children:"Adresse e-mail"}),e.jsx(u,{children:"Elle sert uniquement à la récupération de compte."}),e.jsx(f,{type:"email"})]})},h={render:()=>e.jsxs(d,{required:!0,children:[e.jsx(o,{children:"Nom du parcours"}),e.jsx(u,{children:"Visible par les étudiants inscrits."}),e.jsx(f,{})]})},p={render:()=>e.jsxs(d,{invalid:!0,required:!0,children:[e.jsx(o,{children:"Adresse e-mail"}),e.jsx(u,{children:"Elle sert uniquement à la récupération de compte."}),e.jsx(f,{type:"email",defaultValue:"etudiant@"}),e.jsx(Y,{children:"Cette adresse n’est pas valide."})]})},g={render:()=>e.jsxs(d,{disabled:!0,children:[e.jsx(o,{children:"Identifiant"}),e.jsx(u,{children:"Attribué par l’établissement."}),e.jsx(f,{defaultValue:"DUD-2026-0142"})]})},m={render:()=>e.jsxs(d,{group:!0,required:!0,children:[e.jsx(o,{children:"Notifications"}),e.jsx(u,{children:"Choisissez au moins un canal."}),e.jsxs("div",{className:"flex flex-col gap-2 pt-1",children:[e.jsxs("label",{className:"text-fg flex items-center gap-2 text-sm",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0})," E-mail"]}),e.jsxs("label",{className:"text-fg flex items-center gap-2 text-sm",children:[e.jsx("input",{type:"checkbox"})," SMS"]})]})]})};var L,C,A;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Field>
      <Label>Adresse e-mail</Label>
      <DemoInput type="email" defaultValue="etudiant@dudalo.com" />
    </Field>
}`,...(A=(C=b.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var S,V,_;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Field>
      <Label>Adresse e-mail</Label>
      <FieldDescription>
        Elle sert uniquement à la récupération de compte.
      </FieldDescription>
      <DemoInput type="email" />
    </Field>
}`,...(_=(V=x.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var T,k,M;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Field required>
      <Label>Nom du parcours</Label>
      <FieldDescription>Visible par les étudiants inscrits.</FieldDescription>
      <DemoInput />
    </Field>
}`,...(M=(k=h.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var R,$,z,G,H;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Field invalid required>
      <Label>Adresse e-mail</Label>
      <FieldDescription>
        Elle sert uniquement à la récupération de compte.
      </FieldDescription>
      <DemoInput type="email" defaultValue="etudiant@" />
      <FieldError>Cette adresse n’est pas valide.</FieldError>
    </Field>
}`,...(z=($=p.parameters)==null?void 0:$.docs)==null?void 0:z.source},description:{story:"L'erreur n'est rendue que si le champ est `invalid` — sinon elle resterait annoncée.",...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var O,w,P;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Field disabled>
      <Label>Identifiant</Label>
      <FieldDescription>Attribué par l’établissement.</FieldDescription>
      <DemoInput defaultValue="DUD-2026-0142" />
    </Field>
}`,...(P=(w=g.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var U,B,W,J,K;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Field group required>
      <Label>Notifications</Label>
      <FieldDescription>Choisissez au moins un canal.</FieldDescription>
      <div className="flex flex-col gap-2 pt-1">
        <label className="text-fg flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked /> E-mail
        </label>
        <label className="text-fg flex items-center gap-2 text-sm">
          <input type="checkbox" /> SMS
        </label>
      </div>
    </Field>
}`,...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.source},description:{story:"Un groupe se nomme par sa légende : `Field group` rend un `fieldset`.",...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const ue=["Default","WithDescription","Required","Invalid","Disabled","Group"];export{b as Default,g as Disabled,m as Group,p as Invalid,h as Required,x as WithDescription,ue as __namedExportsOrder,oe as default};
