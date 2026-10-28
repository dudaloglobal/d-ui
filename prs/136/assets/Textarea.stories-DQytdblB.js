import{F as r,d as n,j as t,r as P}from"./iframe-BBJWnrUE.js";import{x as H}from"./arg-types--G9daUKm.js";import{b as R}from"./docs-source-C_O40UCi.js";import{s as q}from"./textControl-C1r-jKW6.js";import{T as F}from"./Textarea-BKUuMs_e.js";const A=`import { useState } from 'react';
import { Textarea } from '@dudaloglobal/d-ui';`;function J(l){return(a,e)=>l.countRemaining(Math.max(0,(e??0)-a))}function o(l,a=""){return R(A,`const [value, setValue] = useState(${JSON.stringify(a)});
return (
${l.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function s({defaultValue:l,value:a,onChange:e,...I}){const[$,O]=P.useState(()=>q(a??l));return t.jsx(F,{...I,value:$,onChange:m=>{O(m.target.value),e==null||e(m)}})}const N={title:"Components/Textarea",component:F,argTypes:H,parameters:{controls:{include:["size","label","helper","placeholder","invalid","valid","disabled","required","clearable","showCount","fullWidth","focusShadow","maxLength","rows"]}}},u={name:"Par défaut",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=r(n(a.locale));return t.jsx(s,{label:e.textareaLabel})}},c={name:"Désactivé",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=r(n(a.locale));return t.jsx(s,{label:e.textareaLabel,defaultValue:e.filledValue,disabled:!0})}},d={name:"Valide",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    valid
    helper="Valeur valide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=r(n(a.locale));return t.jsx(s,{label:e.textareaLabel,defaultValue:e.filledValue,valid:!0,helper:e.validValue})}},i={name:"Invalide",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=r(n(a.locale));return t.jsx(s,{label:e.textareaLabel,defaultValue:e.filledValue,invalid:!0,error:e.invalidValue})}},p={name:"Longueur maximale",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    maxLength={200}
    countMessage={(count, maxLength) =>
        \`\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\`
    }
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=r(n(a.locale));return t.jsx(s,{label:e.textareaLabel,maxLength:200,countMessage:J(e)})}},x={name:"Halo de focus",parameters:o(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    focusShadow
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=r(n(a.locale));return t.jsx(s,{label:e.textareaLabel,focusShadow:!0})}},W=["Default","Disabled","Valid","Invalid","MaxLength","FocusShadow"];var v,b,g;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(b=u.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var V,L,f;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(f=(L=c.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var h,y,T;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,C,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(C=i.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var z,E,M;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var j,w,D;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(w=x.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const U=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Disabled:c,FocusShadow:x,Invalid:i,MaxLength:p,Valid:d,__namedExportsOrder:W,default:N},Symbol.toStringTag,{value:"Module"}));export{u as D,x as F,i as I,p as M,U as T,d as V,c as a};
