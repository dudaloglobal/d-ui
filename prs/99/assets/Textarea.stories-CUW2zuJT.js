import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,n as a,o}from"./docs-locale-DxRsX5eR.js";import{h as s,i as c,r as l,w as u}from"./docs-source-5snetGJm.js";import{c as d,d as f,f as p,l as m,n as h,o as g,s as _,t as v,u as y}from"./textControl-CulYcE92.js";var b,x,S;function C(){return(C=e((()=>{b=n(),m(),x=r(),S=(0,b.forwardRef)(function({id:e,size:t=`md`,label:n,helper:r,error:i,invalid:a=!1,valid:o=!1,icon:s,prefix:c,suffix:l,fullWidth:u=!0,focusShadow:m,clearable:S=!1,onClear:C,clearLabel:w=`Effacer`,showCount:T,countMessage:E=d,className:D,disabled:O,readOnly:k,required:A,value:j,defaultValue:M,onChange:N,maxLength:P,rows:F=2,"aria-invalid":I,"aria-describedby":L,...R},z){let B=(0,b.useId)(),V=e??B,H=`${B}-count`,U=`${B}-helper`,W=j!==void 0,[G,K]=(0,b.useState)(()=>p(M)),q=W?p(j):G,J=!!a||!!i||I===!0||I===`true`,Y=S&&q.length>0&&!O&&!k,X=T??P!=null,Z=J?i:r;function Q(e){W||K(e.target.value),N?.(e)}function $(){W||K(``),C?.(),N?.({target:{value:``,name:R.name},currentTarget:{value:``,name:R.name}})}return(0,x.jsxs)(_,{id:V,label:n,helper:r,error:i,required:A,invalid:J,valid:o,disabled:!!O,fullWidth:u,focusShadow:m,size:t,className:D,showCount:X,count:q.length,maxLength:P,countMessage:E,countId:H,helperId:U,multiline:!0,children:[s?(0,x.jsx)(`span`,{className:`inline-flex shrink-0 pt-0.5 text-fg/70`,"aria-hidden":`true`,children:s}):null,c?(0,x.jsx)(`span`,{className:`inline-flex shrink-0 pt-0.5 text-fg/70`,children:c}):null,(0,x.jsx)(`textarea`,{...R,ref:z,id:V,disabled:O,readOnly:k,required:A,value:q,maxLength:P,rows:F,"aria-invalid":J||void 0,"aria-describedby":y(L,X&&H,Z?U:void 0),onChange:Q,className:f}),Y?(0,x.jsx)(v,{label:w,disabled:O,onClick:$,children:(0,x.jsx)(h,{})}):null,(0,x.jsx)(g,{invalid:J,valid:o}),l?(0,x.jsx)(`span`,{className:`inline-flex shrink-0 pt-0.5 text-fg/70`,children:l}):null]})}),S.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:"Libellé visible au-dessus du champ. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`."},helper:{required:!1,tsType:{name:`ReactNode`},description:"Texte d’aide sous le champ. Remplacé par `error` si le champ est invalide."},error:{required:!1,tsType:{name:`ReactNode`},description:"Message d’erreur sous le champ. Pose aussi `aria-invalid`."},invalid:{required:!1,tsType:{name:`boolean`},description:"État d’erreur : `aria-invalid`. Même nom que `Field` (`invalid`).",defaultValue:{value:`false`,computed:!1}},valid:{required:!1,tsType:{name:`boolean`},description:"État de succès : contour vert et icône. Ignoré si `invalid`.",defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:"Icône décorative au début du champ. Complète `label`, ne le remplace pas."},prefix:{required:!1,tsType:{name:`ReactNode`},description:`Contenu au début du champ. Ne remplace pas le libellé.`},suffix:{required:!1,tsType:{name:`ReactNode`},description:`Contenu à la fin du champ. Ne remplace pas le libellé.`},fullWidth:{required:!1,tsType:{name:`boolean`},description:"Étend le champ à la largeur du conteneur. Défaut : `true`.",defaultValue:{value:`true`,computed:!1}},focusShadow:{required:!1,tsType:{name:`boolean`},description:"Halo de focus (ombre douce). Inactif sauf si `true`."},clearable:{required:!1,tsType:{name:`boolean`},description:`Bouton d’effacement dès que la valeur n’est pas vide.`,defaultValue:{value:`false`,computed:!1}},onClear:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},clearLabel:{required:!1,tsType:{name:`string`},description:'Nom accessible du bouton d’effacement. Défaut `"Effacer"`.',defaultValue:{value:`'Effacer'`,computed:!1}},showCount:{required:!1,tsType:{name:`boolean`},description:"Compteur de caractères (restants si `maxLength` est posé).\nActivé par défaut avec `maxLength`. Lié via `aria-describedby`."},countMessage:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(count: number, maxLength?: number) => string`,signature:{arguments:[{type:{name:`number`},name:`count`},{type:{name:`number`},name:`maxLength`}],return:{name:`string`}}},description:"Libellé du compteur. Reçoit le nombre de caractères et `maxLength`.",defaultValue:{value:`function defaultCountMessage(count: number, maxLength?: number): string {
  if (maxLength == null) return String(count);
  const remaining = Math.max(0, maxLength - count);
  return remaining === 1 ? '1 caractère restant' : \`\${remaining} caractères restants\`;
}`,computed:!1}},rows:{required:!1,tsType:{name:`number`},description:"Nombre de lignes visibles. Défaut : `2`.",defaultValue:{value:`2`,computed:!1}}}}})))()}var w=t({Default:()=>M,Disabled:()=>N,FocusShadow:()=>L,Invalid:()=>F,MaxLength:()=>I,Valid:()=>P,__namedExportsOrder:()=>R,default:()=>j});function T(e){return(t,n)=>e.countRemaining(Math.max(0,(n??0)-t))}function E(e,t=``){return l(A,`const [value, setValue] = useState(${JSON.stringify(t)});
return (
${e.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function D({defaultValue:e,value:t,onChange:n,...r}){let[i,a]=(0,O.useState)(()=>p(t??e));return(0,k.jsx)(S,{...r,value:i,onChange:e=>{a(e.target.value),n?.(e)}})}var O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{O=n(),s(),c(),i(),m(),C(),k=r(),A=`import { useState } from 'react';
import { Textarea } from 'd-ui';`,j={title:`Components/Textarea`,component:S,argTypes:u,parameters:{controls:{include:[`size`,`label`,`helper`,`placeholder`,`invalid`,`valid`,`disabled`,`required`,`clearable`,`showCount`,`fullWidth`,`focusShadow`,`maxLength`,`rows`]}}},M={name:`Par défaut`,parameters:E(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,k.jsx)(D,{label:n.textareaLabel})}},N={name:`Désactivé`,parameters:E(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>`,`Valeur`),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,k.jsx)(D,{label:n.textareaLabel,defaultValue:n.filledValue,disabled:!0})}},P={name:`Valide`,parameters:E(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    valid
    helper="Valeur valide"
    onChange={(event) => setValue(event.target.value)}
/>`,`Valeur`),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,k.jsx)(D,{label:n.textareaLabel,defaultValue:n.filledValue,valid:!0,helper:n.validValue})}},F={name:`Invalide`,parameters:E(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>`,`Valeur`),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,k.jsx)(D,{label:n.textareaLabel,defaultValue:n.filledValue,invalid:!0,error:n.invalidValue})}},I={name:`Longueur maximale`,parameters:E(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    maxLength={200}
    countMessage={(count, maxLength) =>
        \`\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\`
    }
    onChange={(event) => setValue(event.target.value)}
/>`),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,k.jsx)(D,{label:n.textareaLabel,maxLength:200,countMessage:T(n)})}},L={name:`Halo de focus`,parameters:E(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    focusShadow
    onChange={(event) => setValue(event.target.value)}
/>`),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,k.jsx)(D,{label:n.textareaLabel,focusShadow:!0})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: textareaSource(\`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: textareaSource(\`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} defaultValue={copy.filledValue} disabled />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Valide',
  parameters: textareaSource(\`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    valid
    helper="Valeur valide"
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} defaultValue={copy.filledValue} valid helper={copy.validValue} />;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: textareaSource(\`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} defaultValue={copy.filledValue} invalid error={copy.invalidValue} />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Longueur maximale',
  parameters: textareaSource(\`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    maxLength={200}
    countMessage={(count, maxLength) =>
        \\\`\\\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\\\`
    }
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} maxLength={200} countMessage={remainingMessage(copy)} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Halo de focus',
  parameters: textareaSource(\`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    focusShadow
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} focusShadow />;
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`Disabled`,`Valid`,`Invalid`,`MaxLength`,`FocusShadow`]})))()}export{I as a,z as c,F as i,N as n,w as o,L as r,P as s,M as t};