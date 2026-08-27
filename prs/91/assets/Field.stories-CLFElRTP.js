import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{z as ne,c}from"./docs-source-Dhouib-y.js";import{c as I,j as u,d as p}from"./cx-DGpBHnTn.js";import{r as s}from"./index-DQxMMF7O.js";import{T as Q}from"./Text-gebLHIXY.js";const v=s.createContext(null);function q(i){const n=s.useContext(v);if(!n)throw new Error(`<${i}> doit être rendu à l'intérieur de <Field>.`);return n}function le(){return s.useContext(v)}function X(i){const n=[i.hasDescription?i.descriptionId:null,i.hasError?i.errorId:null].filter(Boolean);return n.length>0?n.join(" "):void 0}function o({id:i,required:n=!1,invalid:r=!1,disabled:l=!1,group:a=!1,className:t,children:E,..._}){const ee=s.useId(),b=i??ee,[N,re]=s.useState(!1),[C,ie]=s.useState(!1),j=s.useMemo(()=>({controlId:`${b}-control`,labelId:`${b}-label`,descriptionId:`${b}-description`,errorId:`${b}-error`,required:n,invalid:r,disabled:l,group:a,hasDescription:N,hasError:C,setHasDescription:re,setHasError:ie}),[b,n,r,l,a,N,C]),S=I("flex flex-col gap-1",t);return a?e.jsx(v.Provider,{value:j,children:e.jsx("fieldset",{..._,disabled:l||void 0,"aria-invalid":r||void 0,"aria-describedby":X(j),className:I(S,"min-w-0 border-0 p-0"),children:E})}):e.jsx(v.Provider,{value:j,children:e.jsx("div",{..._,className:S,children:E})})}o.__docgenInfo={description:"Anatomie d'un champ de formulaire.\n\nDistribue les identifiants et l'état à `Label`, `FieldDescription` et\n`FieldError`, et expose au contrôle les attributs ARIA à poser via\n`useFieldControl()`. Aucun couplage à une librairie de formulaires.",methods:[],displayName:"Field",props:{id:{required:!1,tsType:{name:"string"},description:"Identifiant de base. Généré si absent."},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},group:{required:!1,tsType:{name:"boolean"},description:"Groupe de contrôles (radio, cases à cocher).\n\nRend un `fieldset` et transforme le `Label` en `legend` : un groupe se\nnomme par sa légende, pas par un `for` qui ne pourrait viser qu'un seul\ndes contrôles.",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Y=typeof window>"u"?s.useEffect:s.useLayoutEffect;function m({className:i,...n}){const r=q("FieldDescription"),{setHasDescription:l}=r;return Y(()=>(l(!0),()=>l(!1)),[l]),e.jsx(Q,{...n,id:r.descriptionId,size:"body-sm",tone:"muted",className:i})}m.__docgenInfo={description:"Aide à la saisie, annoncée via `aria-describedby`.\n\nS'enregistre auprès du `Field` pour que le contrôle ne référence que des\nidentifiants réellement présents dans le DOM. L'enregistrement a lieu avant\nla peinture : avec un `useEffect`, le premier rendu visible sortirait sans\n`aria-describedby` alors que le nœud est déjà dans le document.",methods:[],displayName:"FieldDescription"};function Z({className:i,children:n,...r}){const l=q("FieldError"),{setHasError:a,invalid:t}=l;return Y(()=>{if(t)return a(!0),()=>a(!1)},[t,a]),t?e.jsx(Q,{...r,id:l.errorId,role:"alert",size:"body-sm",tone:"danger",className:i,children:n}):null}Z.__docgenInfo={description:`Message d'erreur du champ.

Ne rend rien tant que \`Field\` n'est pas \`invalid\` : un message d'erreur
présent dans le DOM mais masqué visuellement reste annoncé par les lecteurs
d'écran.

Porte \`role="alert"\` pour que l'erreur soit annoncée à son apparition, sans
attendre que l'utilisateur revienne sur le champ.`,methods:[],displayName:"FieldError"};function d({className:i,children:n,...r}){const l=q("Label"),a=e.jsxs(e.Fragment,{children:[n,l.required?e.jsx("span",{"aria-hidden":"true",className:"text-danger ml-0.5",children:"*"}):null]}),t=I("text-fg text-sm font-medium",l.disabled?"opacity-50":null,i);return l.group?e.jsx("legend",{...r,id:l.labelId,className:t,children:a}):e.jsx("label",{...r,id:l.labelId,htmlFor:l.controlId,className:t,children:a})}d.__docgenInfo={description:"Libellé du champ.\n\nDans un `Field group`, rend un `legend` : un groupe de contrôles se nomme par\nsa légende. Ailleurs, un `label` lié au contrôle par `for`.\n\nL'astérisque de champ requis est décoratif (`aria-hidden`) : c'est l'attribut\n`required` posé sur le contrôle qui porte l'information pour les lecteurs\nd'écran. Doubler les deux ferait annoncer « requis » deux fois.",methods:[],displayName:"Label"};function ae(){const i=le();return i?i.group?{disabled:i.disabled||void 0}:{id:i.controlId,required:i.required||void 0,disabled:i.disabled||void 0,"aria-invalid":i.invalid||void 0,"aria-describedby":X(i)}:{}}function L(i){const n=ae();return e.jsx("input",{...n,...i,className:"text-fg bg-field hover:bg-field-hover h-9 w-full min-w-0 rounded px-3 text-sm ring-1 ring-inset ring-fg/40 focus:bg-transparent focus:ring-2 focus:ring-focus focus:outline-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-danger"})}const f="import { Field, FieldDescription, FieldError, Label } from 'd-ui';",se={title:"Components/Field",component:o,argTypes:ne,args:{children:null}},F={name:"Par défaut",parameters:c(f,`<Field>
  <Label>Adresse e-mail</Label>
  <input type="email" />
</Field>`),render:(i,{globals:n})=>{const r=u(p(n.locale));return e.jsxs(o,{children:[e.jsx(d,{children:r.email}),e.jsx(L,{type:"email",defaultValue:r.emailValue})]})}},x={name:"Avec aide",parameters:c(f,`<Field>
  <Label>Adresse e-mail</Label>
  <FieldDescription>Elle sert à la récupération de compte.</FieldDescription>
  <input type="email" />
</Field>`),render:(i,{globals:n})=>{const r=u(p(n.locale));return e.jsxs(o,{children:[e.jsx(d,{children:r.email}),e.jsx(m,{children:r.emailHelp}),e.jsx(L,{type:"email"})]})}},y={name:"Requis",parameters:c(f,`<Field required>
  <Label>Nom du parcours</Label>
  <FieldDescription>Visible par les étudiants inscrits.</FieldDescription>
  <input />
</Field>`),render:(i,{globals:n})=>{const r=u(p(n.locale));return e.jsxs(o,{required:!0,children:[e.jsx(d,{children:r.pathName}),e.jsx(m,{children:r.pathHelp}),e.jsx(L,{})]})}},g={name:"Invalide",parameters:c(f,`<Field invalid required>
  <Label>Adresse e-mail</Label>
  <FieldDescription>Elle sert à la récupération de compte.</FieldDescription>
  <input type="email" defaultValue="etudiant@" />
  <FieldError>Cette adresse n’est pas valide.</FieldError>
</Field>`),render:(i,{globals:n})=>{const r=u(p(n.locale));return e.jsxs(o,{invalid:!0,required:!0,children:[e.jsx(d,{children:r.email}),e.jsx(m,{children:r.emailHelp}),e.jsx(L,{type:"email",defaultValue:r.emailInvalid}),e.jsx(Z,{children:r.emailError})]})}},h={name:"Désactivé",parameters:c(f,`<Field disabled>
  <Label>Identifiant</Label>
  <FieldDescription>Attribué par l’établissement.</FieldDescription>
  <input defaultValue="DUD-2026-0142" />
</Field>`),render:(i,{globals:n})=>{const r=u(p(n.locale));return e.jsxs(o,{disabled:!0,children:[e.jsx(d,{children:r.identifier}),e.jsx(m,{children:r.identifierHelp}),e.jsx(L,{defaultValue:r.identifierValue})]})}},D={name:"Groupe",parameters:c(f,`<Field group required>
  <Label>Notifications</Label>
  <FieldDescription>Choisissez au moins un canal.</FieldDescription>
  <label>
    <input type="checkbox" /> E-mail
  </label>
</Field>`),render:(i,{globals:n})=>{const r=u(p(n.locale));return e.jsxs(o,{group:!0,required:!0,children:[e.jsx(d,{children:r.notifications}),e.jsx(m,{children:r.notificationsHelp}),e.jsxs("div",{className:"flex flex-col gap-2 pt-1",children:[e.jsxs("label",{className:"text-fg flex items-center gap-2 text-sm",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0})," ",r.channelEmail]}),e.jsxs("label",{className:"text-fg flex items-center gap-2 text-sm",children:[e.jsx("input",{type:"checkbox"})," ",r.channelSms]})]})]})}};var V,A,H;F.parameters={...F.parameters,docs:{...(V=F.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(fieldImport, \`<Field>
  <Label>Adresse e-mail</Label>
  <input type="email" />
</Field>\`),
  render: (_, {
    globals
  }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return <Field>
        <Label>{copy.email}</Label>
        <DemoInput type="email" defaultValue={copy.emailValue} />
      </Field>;
  }
}`,...(H=(A=F.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var T,R,k;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Avec aide',
  parameters: componentSource(fieldImport, \`<Field>
  <Label>Adresse e-mail</Label>
  <FieldDescription>Elle sert à la récupération de compte.</FieldDescription>
  <input type="email" />
</Field>\`),
  render: (_, {
    globals
  }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return <Field>
        <Label>{copy.email}</Label>
        <FieldDescription>{copy.emailHelp}</FieldDescription>
        <DemoInput type="email" />
      </Field>;
  }
}`,...(k=(R=x.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var w,G,z;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Requis',
  parameters: componentSource(fieldImport, \`<Field required>
  <Label>Nom du parcours</Label>
  <FieldDescription>Visible par les étudiants inscrits.</FieldDescription>
  <input />
</Field>\`),
  render: (_, {
    globals
  }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return <Field required>
        <Label>{copy.pathName}</Label>
        <FieldDescription>{copy.pathHelp}</FieldDescription>
        <DemoInput />
      </Field>;
  }
}`,...(z=(G=y.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var O,P,M;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(fieldImport, \`<Field invalid required>
  <Label>Adresse e-mail</Label>
  <FieldDescription>Elle sert à la récupération de compte.</FieldDescription>
  <input type="email" defaultValue="etudiant@" />
  <FieldError>Cette adresse n’est pas valide.</FieldError>
</Field>\`),
  render: (_, {
    globals
  }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return <Field invalid required>
        <Label>{copy.email}</Label>
        <FieldDescription>{copy.emailHelp}</FieldDescription>
        <DemoInput type="email" defaultValue={copy.emailInvalid} />
        <FieldError>{copy.emailError}</FieldError>
      </Field>;
  }
}`,...(M=(P=g.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var $,W,B;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(fieldImport, \`<Field disabled>
  <Label>Identifiant</Label>
  <FieldDescription>Attribué par l’établissement.</FieldDescription>
  <input defaultValue="DUD-2026-0142" />
</Field>\`),
  render: (_, {
    globals
  }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return <Field disabled>
        <Label>{copy.identifier}</Label>
        <FieldDescription>{copy.identifierHelp}</FieldDescription>
        <DemoInput defaultValue={copy.identifierValue} />
      </Field>;
  }
}`,...(B=(W=h.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var U,J,K;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Groupe',
  parameters: componentSource(fieldImport, \`<Field group required>
  <Label>Notifications</Label>
  <FieldDescription>Choisissez au moins un canal.</FieldDescription>
  <label>
    <input type="checkbox" /> E-mail
  </label>
</Field>\`),
  render: (_, {
    globals
  }) => {
    const copy = fieldCopy(docsLocale(globals.locale));
    return <Field group required>
        <Label>{copy.notifications}</Label>
        <FieldDescription>{copy.notificationsHelp}</FieldDescription>
        <div className="flex flex-col gap-2 pt-1">
          <label className="text-fg flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> {copy.channelEmail}
          </label>
          <label className="text-fg flex items-center gap-2 text-sm">
            <input type="checkbox" /> {copy.channelSms}
          </label>
        </div>
      </Field>;
  }
}`,...(K=(J=D.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const te=["Default","WithDescription","Required","Invalid","Disabled","Group"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:F,Disabled:h,Group:D,Invalid:g,Required:y,WithDescription:x,__namedExportsOrder:te,default:se},Symbol.toStringTag,{value:"Module"}));export{F as D,me as F,D as G,g as I,y as R,x as W,h as a};
