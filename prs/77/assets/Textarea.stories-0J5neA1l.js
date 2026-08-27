import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DQxMMF7O.js";import{g as he,e as ye}from"./docs-source-Dv31QUyA.js";import{i as c,d as m}from"./cx-5YvX89nH.js";import{s as M,T as Ve,d as Le,n as Te,m as Ce,C as Se,a as je,S as Me}from"./textControl-DQdLA4r4.js";const q=h.forwardRef(function({id:a,size:e="md",label:y,helper:f,error:n,invalid:x=!1,valid:_=!1,icon:I,prefix:N,suffix:z,fullWidth:re=!0,clearable:ne=!1,onClear:V,clearLabel:se="Clear",showCount:oe,countMessage:ue=Le,className:ie,disabled:b,readOnly:D,required:R,value:w,defaultValue:de,onChange:r,maxLength:L,rows:ce=2,"aria-invalid":$,"aria-describedby":me,...T},pe){const C=h.useId(),B=a??C,k=`${C}-count`,F=`${C}-helper`,S=w!==void 0,[ve,P]=h.useState(()=>M(de)),j=S?M(w):ve,g=!!x||!!n||$===!0||$==="true",fe=ne&&j.length>0&&!b&&!D,E=oe??L!=null,xe=g?n:f;function be(O){S||P(O.target.value),r==null||r(O)}function ge(){S||P(""),V==null||V(),r==null||r({target:{value:"",name:T.name},currentTarget:{value:"",name:T.name}})}return t.jsxs(Ve,{id:B,label:y,helper:f,error:n,required:R,invalid:g,valid:_,disabled:!!b,fullWidth:re,size:e,className:ie,showCount:E,count:j.length,maxLength:L,countMessage:ue,countId:k,helperId:F,multiline:!0,children:[I?t.jsx("span",{className:"inline-flex shrink-0 pt-0.5 text-fg/70","aria-hidden":"true",children:I}):null,N?t.jsx("span",{className:"inline-flex shrink-0 pt-0.5 text-fg/70",children:N}):null,t.jsx("textarea",{...T,ref:pe,id:B,disabled:b,readOnly:D,required:R,value:j,maxLength:L,rows:ce,"aria-invalid":g||void 0,"aria-describedby":Ce(me,E&&k,xe?F:void 0),onChange:be,className:Te}),fe?t.jsx(Se,{label:se,disabled:b,onClick:ge,children:t.jsx(je,{})}):null,t.jsx(Me,{invalid:g,valid:_}),z?t.jsx("span",{className:"inline-flex shrink-0 pt-0.5 text-fg/70",children:z}):null]})});q.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Libellé visible au-dessus du champ. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`."},helper:{required:!1,tsType:{name:"ReactNode"},description:"Texte d’aide sous le champ. Remplacé par `error` si le champ est invalide."},error:{required:!1,tsType:{name:"ReactNode"},description:"Message d’erreur sous le champ. Pose aussi `aria-invalid`."},invalid:{required:!1,tsType:{name:"boolean"},description:"État d’erreur : `aria-invalid`. Même nom que `Field` (`invalid`).",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"État de succès : contour vert et icône. Ignoré si `invalid`.",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icône décorative au début du champ. Complète `label`, ne le remplace pas."},prefix:{required:!1,tsType:{name:"ReactNode"},description:"Contenu au début du champ. Ne remplace pas le libellé."},suffix:{required:!1,tsType:{name:"ReactNode"},description:"Contenu à la fin du champ. Ne remplace pas le libellé."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Étend le champ à la largeur du conteneur. Défaut : `true`.",defaultValue:{value:"true",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"Bouton d’effacement dès que la valeur n’est pas vide.",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},clearLabel:{required:!1,tsType:{name:"string"},description:'Nom accessible du bouton d’effacement. Défaut `"Clear"`.',defaultValue:{value:"'Clear'",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"Compteur de caractères (restants si `maxLength` est posé).\nActivé par défaut avec `maxLength`. Lié via `aria-describedby`."},countMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number, maxLength?: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"},{type:{name:"number"},name:"maxLength"}],return:{name:"string"}}},description:"Libellé du compteur. Reçoit le nombre de caractères et `maxLength`.",defaultValue:{value:`function defaultCountMessage(count: number, maxLength?: number): string {
  if (maxLength == null) return String(count);
  const remaining = Math.max(0, maxLength - count);
  return remaining === 1 ? '1 character remaining' : \`\${remaining} characters remaining\`;
}`,computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Nombre de lignes visibles. Défaut : `2`.",defaultValue:{value:"2",computed:!1}}}};const qe=`import { useState } from 'react';
import { Textarea } from 'd-ui';`;function _e(l){return(a,e)=>l.countRemaining(Math.max(0,(e??0)-a))}function p(l,a=""){return ye(qe,`const [value, setValue] = useState(${JSON.stringify(a)});
return (
${l.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function v({defaultValue:l,value:a,onChange:e,...y}){const[f,n]=h.useState(()=>M(a??l));return t.jsx(q,{...y,value:f,onChange:x=>{n(x.target.value),e==null||e(x)}})}const Ie={title:"Components/Textarea",component:q,argTypes:he,parameters:{controls:{include:["size","label","helper","placeholder","invalid","valid","disabled","required","clearable","showCount","fullWidth","maxLength","rows"]}}},s={name:"Par défaut",parameters:p(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=c(m(a.locale));return t.jsx(v,{label:e.textareaLabel})}},o={name:"Désactivé",parameters:p(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=c(m(a.locale));return t.jsx(v,{label:e.textareaLabel,defaultValue:e.filledValue,disabled:!0})}},u={name:"Valide",parameters:p(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    valid
    helper="Valeur valide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=c(m(a.locale));return t.jsx(v,{label:e.textareaLabel,defaultValue:e.filledValue,valid:!0,helper:e.validValue})}},i={name:"Invalide",parameters:p(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=c(m(a.locale));return t.jsx(v,{label:e.textareaLabel,defaultValue:e.filledValue,invalid:!0,error:e.invalidValue})}},d={name:"Longueur maximale",parameters:p(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    maxLength={200}
    countMessage={(count, maxLength) =>
        \`\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\`
    }
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=c(m(a.locale));return t.jsx(v,{label:e.textareaLabel,maxLength:200,countMessage:_e(e)})}};var A,W,J;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(J=(W=s.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var U,G,H;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(G=o.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,le;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(te=d.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const Ne=["Default","Disabled","Valid","Invalid","MaxLength"],Be=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:o,Invalid:i,MaxLength:d,Valid:u,__namedExportsOrder:Ne,default:Ie},Symbol.toStringTag,{value:"Module"}));export{s as D,i as I,d as M,Be as T,u as V,o as a};
