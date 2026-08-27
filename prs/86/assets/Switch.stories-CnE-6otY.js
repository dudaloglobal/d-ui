import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-DQxMMF7O.js";import{s as ie,c,e as de}from"./docs-source-OU1RIk5-.js";import{c as l,s as o,d as n}from"./cx-XQLYb_SV.js";import{m as pe,S as me,n as ue,s as he,a as be}from"./selectionControl-VqgqtVrN.js";const t=y.forwardRef(function({id:r,size:e="md",label:S,helper:w,error:v,invalid:ee=!1,className:ae,disabled:x,required:j,checked:k,defaultChecked:re,onChange:C,"aria-invalid":L,"aria-describedby":se,...te},oe){const _=y.useId(),z=r??_,M=`${_}-helper`,q=k!==void 0,[ne,le]=y.useState(!!re),N=q?!!k:ne,f=!!ee||!!v||L===!0||L==="true",ce=pe(se,(f?v:w)?M:void 0);return a.jsxs("div",{className:l("flex min-w-0 flex-col",ae),children:[a.jsxs("label",{htmlFor:z,className:l("inline-flex max-w-full items-center gap-2 text-sm leading-5",x?"text-fg/40":"text-fg"),children:[a.jsxs("span",{className:l("relative inline-flex shrink-0 items-center",be[e]),children:[a.jsx("input",{...te,ref:oe,id:z,type:"checkbox",role:"switch",disabled:x,required:j,checked:N,"aria-checked":N,"aria-invalid":f||void 0,"aria-describedby":ce,onChange:R=>{q||le(R.target.checked),C==null||C(R)},className:l(ue,"peer")}),a.jsx("span",{"aria-hidden":"true",className:l("pointer-events-none absolute inset-0 rounded-full","bg-fg/20","peer-hover:bg-fg/30 peer-checked:peer-hover:bg-brand","peer-focus-visible:ring-2 peer-focus-visible:ring-focus","peer-checked:bg-brand peer-checked:ring-brand",f?"ring-2 ring-inset ring-danger peer-checked:ring-danger":"ring-1 ring-inset ring-fg/20",x&&"opacity-50")}),a.jsx("span",{"aria-hidden":"true",className:l("pointer-events-none z-[1] rounded-full bg-white","transition-transform motion-reduce:transition-none",he[e])})]}),S?a.jsxs("span",{className:"min-w-0",children:[S,j?a.jsx("span",{"aria-hidden":"true",children:" *"}):null]}):null]}),a.jsx(me,{id:M,invalid:f,error:v,helper:w})]})});t.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Libellé visible à côté de l’interrupteur. Sinon, `aria-label` ou `aria-labelledby`."},helper:{required:!1,tsType:{name:"ReactNode"},description:"Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide."},error:{required:!1,tsType:{name:"ReactNode"},description:"Message d’erreur. Pose aussi `aria-invalid`."},invalid:{required:!1,tsType:{name:"boolean"},description:"État d’erreur : `aria-invalid`.",defaultValue:{value:"false",computed:!1}}}};const i="import { Switch } from 'd-ui';",ge=`import { useState } from 'react';
import { Switch } from 'd-ui';`,Se={title:"Components/Switch",component:t,argTypes:ie,parameters:{controls:{include:["size","label","helper","invalid","disabled","required","checked"]}}},d={name:"Par défaut",parameters:c(i,'<Switch label="Mode compact" />'),render:(s,{globals:r})=>{const e=o(n(r.locale));return a.jsx(t,{...s,label:s.label??e.switchLabel})}},p={name:"Activé",parameters:de(ge,`const [on, setOn] = useState(true);
return (
    <Switch
        label="Mode compact"
        checked={on}
        onChange={(event) => setOn(event.target.checked)}
    />
);`),render:(s,{globals:r})=>{const e=o(n(r.locale));return a.jsx(we,{label:e.switchLabel,defaultChecked:!0})}},m={name:"Désactivé",parameters:c(i,'<Switch label="Mode compact" defaultChecked disabled />'),render:(s,{globals:r})=>{const e=o(n(r.locale));return a.jsx(t,{label:e.switchLabel,defaultChecked:!0,disabled:!0})}},u={name:"Invalide",parameters:c(i,'<Switch label="Mode compact" invalid error="Ce champ est requis." />'),render:(s,{globals:r})=>{const e=o(n(r.locale));return a.jsx(t,{label:e.switchLabel,invalid:!0,error:e.error})}},h={name:"Requis",parameters:c(i,'<Switch label="Mode compact" required />'),render:(s,{globals:r})=>{const e=o(n(r.locale));return a.jsx(t,{label:e.switchLabel,required:!0})}},b={name:"Aide",parameters:c(i,'<Switch label="Mode compact" helper="Réduit les marges de l’interface." />'),render:(s,{globals:r})=>{const e=o(n(r.locale));return a.jsx(t,{label:e.switchLabel,helper:e.switchHelper})}},g={name:"Tailles",parameters:c(i,`<>
    <Switch size="sm" label="Petite" />
    <Switch size="md" label="Moyenne" />
    <Switch size="lg" label="Grande" />
</>`),render:(s,{globals:r})=>{const e=o(n(r.locale));return a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(t,{size:"sm",label:e.small}),a.jsx(t,{size:"md",label:e.medium}),a.jsx(t,{size:"lg",label:e.large})]})}};function we({label:s,defaultChecked:r=!1}){const[e,S]=y.useState(r);return a.jsx(t,{label:s,checked:e,onChange:w=>S(w.target.checked)})}var T,O,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importSwitch, \`<Switch label="Mode compact" />\`),
  render: (args, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch {...args} label={args.label ?? copy.switchLabel} />;
  }
}`,...(I=(O=d.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var D,B,P;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Activé',
  parameters: componentSourceFn(importControlled, \`const [on, setOn] = useState(true);
return (
    <Switch
        label="Mode compact"
        checked={on}
        onChange={(event) => setOn(event.target.checked)}
    />
);\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <ControlledSwitch label={copy.switchLabel} defaultChecked />;
  }
}`,...(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var A,H,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importSwitch, \`<Switch label="Mode compact" defaultChecked disabled />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} defaultChecked disabled />;
  }
}`,...(E=(H=m.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var F,G,V;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(importSwitch, \`<Switch label="Mode compact" invalid error="Ce champ est requis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} invalid error={copy.error} />;
  }
}`,...(V=(G=u.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var U,$,J;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Requis',
  parameters: componentSource(importSwitch, \`<Switch label="Mode compact" required />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} required />;
  }
}`,...(J=($=h.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,W;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Aide',
  parameters: componentSource(importSwitch, \`<Switch label="Mode compact" helper="Réduit les marges de l’interface." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} helper={copy.switchHelper} />;
  }
}`,...(W=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importSwitch, \`<>
    <Switch size="sm" label="Petite" />
    <Switch size="md" label="Moyenne" />
    <Switch size="lg" label="Grande" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-3">
        <Switch size="sm" label={copy.small} />
        <Switch size="md" label={copy.medium} />
        <Switch size="lg" label={copy.large} />
      </div>;
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const fe=["Default","On","Disabled","Invalid","Required","Helper","Sizes"],Le=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Disabled:m,Helper:b,Invalid:u,On:p,Required:h,Sizes:g,__namedExportsOrder:fe,default:Se},Symbol.toStringTag,{value:"Module"}));export{d as D,b as H,u as I,p as O,h as R,Le as S,m as a,g as b};
