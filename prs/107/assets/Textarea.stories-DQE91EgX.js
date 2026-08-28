import{r as y,j as t,K as n,d as s}from"./iframe-BQ1xWJI8.js";import{g as Se}from"./arg-types-XmCnwb5k.js";import{b as Ce}from"./docs-source-C_O40UCi.js";import{s as q,T as je,d as _e,n as qe,m as Me,C as we,a as Ie,S as Ne}from"./textControl-BfsYHw_5.js";const M=y.forwardRef(function({id:a,size:e="md",label:L,helper:b,error:i,invalid:x=!1,valid:w=!1,icon:I,prefix:N,suffix:z,fullWidth:ue=!0,focusShadow:ie,clearable:ce=!1,onClear:V,clearLabel:de="Effacer",showCount:me,countMessage:pe=_e,className:ve,disabled:g,readOnly:D,required:R,value:$,defaultValue:fe,onChange:r,maxLength:T,rows:be=2,"aria-invalid":F,"aria-describedby":xe,...S},ge){const C=y.useId(),B=a??C,E=`${C}-count`,k=`${C}-helper`,j=$!==void 0,[he,P]=y.useState(()=>q(fe)),_=j?q($):he,h=!!x||!!i||F===!0||F==="true",ye=ce&&_.length>0&&!g&&!D,H=me??T!=null,Le=h?i:b;function Ve(O){j||P(O.target.value),r==null||r(O)}function Te(){j||P(""),V==null||V(),r==null||r({target:{value:"",name:S.name},currentTarget:{value:"",name:S.name}})}return t.jsxs(je,{id:B,label:L,helper:b,error:i,required:R,invalid:h,valid:w,disabled:!!g,fullWidth:ue,focusShadow:ie,size:e,className:ve,showCount:H,count:_.length,maxLength:T,countMessage:pe,countId:E,helperId:k,multiline:!0,children:[I?t.jsx("span",{className:"inline-flex shrink-0 pt-0.5 text-fg/70","aria-hidden":"true",children:I}):null,N?t.jsx("span",{className:"inline-flex shrink-0 pt-0.5 text-fg/70",children:N}):null,t.jsx("textarea",{...S,ref:ge,id:B,disabled:g,readOnly:D,required:R,value:_,maxLength:T,rows:be,"aria-invalid":h||void 0,"aria-describedby":Me(xe,H&&E,Le?k:void 0),onChange:Ve,className:qe}),ye?t.jsx(we,{label:de,disabled:g,onClick:Te,children:t.jsx(Ie,{})}):null,t.jsx(Ne,{invalid:h,valid:w}),z?t.jsx("span",{className:"inline-flex shrink-0 pt-0.5 text-fg/70",children:z}):null]})});M.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Libellé visible au-dessus du champ. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`."},helper:{required:!1,tsType:{name:"ReactNode"},description:"Texte d’aide sous le champ. Remplacé par `error` si le champ est invalide."},error:{required:!1,tsType:{name:"ReactNode"},description:"Message d’erreur sous le champ. Pose aussi `aria-invalid`."},invalid:{required:!1,tsType:{name:"boolean"},description:"État d’erreur : `aria-invalid`. Même nom que `Field` (`invalid`).",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"État de succès : contour vert et icône. Ignoré si `invalid`.",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icône décorative au début du champ. Complète `label`, ne le remplace pas."},prefix:{required:!1,tsType:{name:"ReactNode"},description:"Contenu au début du champ. Ne remplace pas le libellé."},suffix:{required:!1,tsType:{name:"ReactNode"},description:"Contenu à la fin du champ. Ne remplace pas le libellé."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Étend le champ à la largeur du conteneur. Défaut : `true`.",defaultValue:{value:"true",computed:!1}},focusShadow:{required:!1,tsType:{name:"boolean"},description:"Halo de focus (ombre douce). Inactif sauf si `true`."},clearable:{required:!1,tsType:{name:"boolean"},description:"Bouton d’effacement dès que la valeur n’est pas vide.",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},clearLabel:{required:!1,tsType:{name:"string"},description:'Nom accessible du bouton d’effacement. Défaut `"Effacer"`.',defaultValue:{value:"'Effacer'",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"Compteur de caractères (restants si `maxLength` est posé).\nActivé par défaut avec `maxLength`. Lié via `aria-describedby`."},countMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number, maxLength?: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"},{type:{name:"number"},name:"maxLength"}],return:{name:"string"}}},description:"Libellé du compteur. Reçoit le nombre de caractères et `maxLength`.",defaultValue:{value:`function defaultCountMessage(count: number, maxLength?: number): string {
  if (maxLength == null) return String(count);
  const remaining = Math.max(0, maxLength - count);
  return remaining === 1 ? '1 caractère restant' : \`\${remaining} caractères restants\`;
}`,computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Nombre de lignes visibles. Défaut : `2`.",defaultValue:{value:"2",computed:!1}}}};const ze=`import { useState } from 'react';
import { Textarea } from 'd-ui';`;function De(l){return(a,e)=>l.countRemaining(Math.max(0,(e??0)-a))}function o(l,a=""){return Ce(ze,`const [value, setValue] = useState(${JSON.stringify(a)});
return (
${l.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function u({defaultValue:l,value:a,onChange:e,...L}){const[b,i]=y.useState(()=>q(a??l));return t.jsx(M,{...L,value:b,onChange:x=>{i(x.target.value),e==null||e(x)}})}const Re={title:"Components/Textarea",component:M,argTypes:Se,parameters:{controls:{include:["size","label","helper","placeholder","invalid","valid","disabled","required","clearable","showCount","fullWidth","focusShadow","maxLength","rows"]}}},c={name:"Par défaut",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=n(s(a.locale));return t.jsx(u,{label:e.textareaLabel})}},d={name:"Désactivé",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=n(s(a.locale));return t.jsx(u,{label:e.textareaLabel,defaultValue:e.filledValue,disabled:!0})}},m={name:"Valide",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    valid
    helper="Valeur valide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=n(s(a.locale));return t.jsx(u,{label:e.textareaLabel,defaultValue:e.filledValue,valid:!0,helper:e.validValue})}},p={name:"Invalide",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=n(s(a.locale));return t.jsx(u,{label:e.textareaLabel,defaultValue:e.filledValue,invalid:!0,error:e.invalidValue})}},v={name:"Longueur maximale",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    maxLength={200}
    countMessage={(count, maxLength) =>
        \`\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\`
    }
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=n(s(a.locale));return t.jsx(u,{label:e.textareaLabel,maxLength:200,countMessage:De(e)})}},f={name:"Halo de focus",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    focusShadow
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=n(s(a.locale));return t.jsx(u,{label:e.textareaLabel,focusShadow:!0})}};var A,W,J;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(J=(W=c.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var K,U,G;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(U=d.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var Q,X,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,le,re;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(le=v.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ne,se,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const $e=["Default","Disabled","Valid","Invalid","MaxLength","FocusShadow"],Pe=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:d,FocusShadow:f,Invalid:p,MaxLength:v,Valid:m,__namedExportsOrder:$e,default:Re},Symbol.toStringTag,{value:"Module"}));export{c as D,f as F,p as I,v as M,Pe as T,m as V,d as a};
