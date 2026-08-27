import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,g as a,n as o,r as s}from"./docs-locale-DxRsX5eR.js";import{f as c,h as l,i as u,n as d}from"./docs-source-5snetGJm.js";import{n as f,t as p}from"./Text-BQmBNKAr.js";function m(e){let t=(0,_.useContext)(v);if(!t)throw Error(`<${e}> doit être rendu à l'intérieur de <Field>.`);return t}function h(){return(0,_.useContext)(v)}function g(e){let t=[e.hasDescription?e.descriptionId:null,e.hasError?e.errorId:null].filter(Boolean);return t.length>0?t.join(` `):void 0}var _,v;function y(){return(y=e((()=>{_=n(),v=(0,_.createContext)(null)})))()}function b({id:e,required:t=!1,invalid:n=!1,disabled:r=!1,group:i=!1,className:o,children:s,...c}){let l=(0,x.useId)(),u=e??l,[d,f]=(0,x.useState)(!1),[p,m]=(0,x.useState)(!1),h=(0,x.useMemo)(()=>({controlId:`${u}-control`,labelId:`${u}-label`,descriptionId:`${u}-description`,errorId:`${u}-error`,required:t,invalid:n,disabled:r,group:i,hasDescription:d,hasError:p,setHasDescription:f,setHasError:m}),[u,t,n,r,i,d,p]),_=a(`flex flex-col gap-1`,o);return i?(0,S.jsx)(v.Provider,{value:h,children:(0,S.jsx)(`fieldset`,{...c,disabled:r||void 0,"aria-invalid":n||void 0,"aria-describedby":g(h),className:a(_,`min-w-0 border-0 p-0`),children:s})}):(0,S.jsx)(v.Provider,{value:h,children:(0,S.jsx)(`div`,{...c,className:_,children:s})})}var x,S;function C(){return(C=e((()=>{x=n(),y(),S=r(),b.__docgenInfo={description:"Anatomie d'un champ de formulaire.\n\nDistribue les identifiants et l'état à `Label`, `FieldDescription` et\n`FieldError`, et expose au contrôle les attributs ARIA à poser via\n`useFieldControl()`. Aucun couplage à une librairie de formulaires.",methods:[],displayName:`Field`,props:{id:{required:!1,tsType:{name:`string`},description:`Identifiant de base. Généré si absent.`},required:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},invalid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},group:{required:!1,tsType:{name:`boolean`},description:"Groupe de contrôles (radio, cases à cocher).\n\nRend un `fieldset` et transforme le `Label` en `legend` : un groupe se\nnomme par sa légende, pas par un `for` qui ne pourrait viser qu'un seul\ndes contrôles.",defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})))()}var w,T;function E(){return(E=e((()=>{w=n(),T=typeof window>`u`?w.useEffect:w.useLayoutEffect})))()}function D({className:e,...t}){let n=m(`FieldDescription`),{setHasDescription:r}=n;return T(()=>(r(!0),()=>r(!1)),[r]),(0,O.jsx)(p,{...t,id:n.descriptionId,size:`body-sm`,tone:`muted`,className:e})}var O;function k(){return(k=e((()=>{f(),E(),y(),O=r(),D.__docgenInfo={description:"Aide à la saisie, annoncée via `aria-describedby`.\n\nS'enregistre auprès du `Field` pour que le contrôle ne référence que des\nidentifiants réellement présents dans le DOM. L'enregistrement a lieu avant\nla peinture : avec un `useEffect`, le premier rendu visible sortirait sans\n`aria-describedby` alors que le nœud est déjà dans le document.",methods:[],displayName:`FieldDescription`}})))()}function A({className:e,children:t,...n}){let r=m(`FieldError`),{setHasError:i,invalid:a}=r;return T(()=>{if(a)return i(!0),()=>i(!1)},[a,i]),a?(0,j.jsx)(p,{...n,id:r.errorId,role:`alert`,size:`body-sm`,tone:`danger`,className:e,children:t}):null}var j;function M(){return(M=e((()=>{f(),E(),y(),j=r(),A.__docgenInfo={description:`Message d'erreur du champ.

Ne rend rien tant que \`Field\` n'est pas \`invalid\` : un message d'erreur
présent dans le DOM mais masqué visuellement reste annoncé par les lecteurs
d'écran.

Porte \`role="alert"\` pour que l'erreur soit annoncée à son apparition, sans
attendre que l'utilisateur revienne sur le champ.`,methods:[],displayName:`FieldError`}})))()}function N({className:e,children:t,...n}){let r=m(`Label`),i=(0,P.jsxs)(P.Fragment,{children:[t,r.required?(0,P.jsx)(`span`,{"aria-hidden":`true`,className:`text-danger ml-0.5`,children:`*`}):null]}),o=a(`text-fg text-sm font-medium`,r.disabled?`opacity-50`:null,e);return r.group?(0,P.jsx)(`legend`,{...n,id:r.labelId,className:o,children:i}):(0,P.jsx)(`label`,{...n,id:r.labelId,htmlFor:r.controlId,className:o,children:i})}var P;function F(){return(F=e((()=>{y(),P=r(),N.__docgenInfo={description:"Libellé du champ.\n\nDans un `Field group`, rend un `legend` : un groupe de contrôles se nomme par\nsa légende. Ailleurs, un `label` lié au contrôle par `for`.\n\nL'astérisque de champ requis est décoratif (`aria-hidden`) : c'est l'attribut\n`required` posé sur le contrôle qui porte l'information pour les lecteurs\nd'écran. Doubler les deux ferait annoncer « requis » deux fois.",methods:[],displayName:`Label`}})))()}function I(){let e=h();return e?e.group?{disabled:e.disabled||void 0}:{id:e.controlId,required:e.required||void 0,disabled:e.disabled||void 0,"aria-invalid":e.invalid||void 0,"aria-describedby":g(e)}:{}}function L(){return(L=e((()=>{y()})))()}var R=t({Default:()=>U,Disabled:()=>q,Group:()=>J,Invalid:()=>K,Required:()=>G,WithDescription:()=>W,__namedExportsOrder:()=>Y,default:()=>H});function z(e){let t=I();return(0,B.jsx)(`input`,{...t,...e,className:`text-fg bg-field hover:bg-field-hover h-9 w-full min-w-0 rounded px-3 text-sm ring-1 ring-inset ring-fg/40 focus:bg-transparent focus:ring-2 focus:ring-focus focus:outline-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-danger`})}var B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{l(),u(),i(),C(),k(),M(),F(),L(),B=r(),V=`import { Field, FieldDescription, FieldError, Label } from 'd-ui';`,H={title:`Components/Field`,component:b,argTypes:c,args:{children:null}},U={name:`Par défaut`,parameters:d(V,`<Field>
  <Label>Adresse e-mail</Label>
  <input type="email" />
</Field>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,B.jsxs)(b,{children:[(0,B.jsx)(N,{children:n.email}),(0,B.jsx)(z,{type:`email`,defaultValue:n.emailValue})]})}},W={name:`Avec aide`,parameters:d(V,`<Field>
  <Label>Adresse e-mail</Label>
  <FieldDescription>Elle sert à la récupération de compte.</FieldDescription>
  <input type="email" />
</Field>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,B.jsxs)(b,{children:[(0,B.jsx)(N,{children:n.email}),(0,B.jsx)(D,{children:n.emailHelp}),(0,B.jsx)(z,{type:`email`})]})}},G={name:`Requis`,parameters:d(V,`<Field required>
  <Label>Nom du parcours</Label>
  <FieldDescription>Visible par les étudiants inscrits.</FieldDescription>
  <input />
</Field>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,B.jsxs)(b,{required:!0,children:[(0,B.jsx)(N,{children:n.pathName}),(0,B.jsx)(D,{children:n.pathHelp}),(0,B.jsx)(z,{})]})}},K={name:`Invalide`,parameters:d(V,`<Field invalid required>
  <Label>Adresse e-mail</Label>
  <FieldDescription>Elle sert à la récupération de compte.</FieldDescription>
  <input type="email" defaultValue="etudiant@" />
  <FieldError>Cette adresse n’est pas valide.</FieldError>
</Field>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,B.jsxs)(b,{invalid:!0,required:!0,children:[(0,B.jsx)(N,{children:n.email}),(0,B.jsx)(D,{children:n.emailHelp}),(0,B.jsx)(z,{type:`email`,defaultValue:n.emailInvalid}),(0,B.jsx)(A,{children:n.emailError})]})}},q={name:`Désactivé`,parameters:d(V,`<Field disabled>
  <Label>Identifiant</Label>
  <FieldDescription>Attribué par l’établissement.</FieldDescription>
  <input defaultValue="DUD-2026-0142" />
</Field>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,B.jsxs)(b,{disabled:!0,children:[(0,B.jsx)(N,{children:n.identifier}),(0,B.jsx)(D,{children:n.identifierHelp}),(0,B.jsx)(z,{defaultValue:n.identifierValue})]})}},J={name:`Groupe`,parameters:d(V,`<Field group required>
  <Label>Notifications</Label>
  <FieldDescription>Choisissez au moins un canal.</FieldDescription>
  <label>
    <input type="checkbox" /> E-mail
  </label>
</Field>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,B.jsxs)(b,{group:!0,required:!0,children:[(0,B.jsx)(N,{children:n.notifications}),(0,B.jsx)(D,{children:n.notificationsHelp}),(0,B.jsxs)(`div`,{className:`flex flex-col gap-2 pt-1`,children:[(0,B.jsxs)(`label`,{className:`text-fg flex items-center gap-2 text-sm`,children:[(0,B.jsx)(`input`,{type:`checkbox`,defaultChecked:!0}),` `,n.channelEmail]}),(0,B.jsxs)(`label`,{className:`text-fg flex items-center gap-2 text-sm`,children:[(0,B.jsx)(`input`,{type:`checkbox`}),` `,n.channelSms]})]})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`WithDescription`,`Required`,`Invalid`,`Disabled`,`Group`]})))()}export{K as a,X as c,J as i,q as n,G as o,R as r,W as s,U as t};