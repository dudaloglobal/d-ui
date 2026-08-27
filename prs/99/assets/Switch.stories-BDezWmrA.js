import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,g as a,n as o,u as s}from"./docs-locale-DxRsX5eR.js";import{h as c,i as l,n as u,r as d,x as f}from"./docs-source-5snetGJm.js";import{a as p,c as m,d as h,l as g,s as _,u as v}from"./selectionControl-BiqPIcwC.js";var y,b,x;function S(){return(S=e((()=>{y=n(),_(),b=r(),x=(0,y.forwardRef)(function({id:e,size:t=`md`,label:n,helper:r,error:i,invalid:o=!1,className:s,disabled:c,required:l,checked:u,defaultChecked:d,onChange:f,"aria-invalid":_,"aria-describedby":x,...S},C){let w=(0,y.useId)(),T=e??w,E=`${w}-helper`,D=u!==void 0,[O,k]=(0,y.useState)(!!d),A=D?!!u:O,j=!!o||!!i||_===!0||_===`true`,M=m(x,(j?i:r)?E:void 0);return(0,b.jsxs)(`div`,{className:a(`flex min-w-0 flex-col`,s),children:[(0,b.jsxs)(`label`,{htmlFor:T,className:a(`inline-flex max-w-full items-center gap-2 text-sm leading-5`,c?`text-fg/40`:`text-fg`),children:[(0,b.jsxs)(`span`,{className:a(`relative inline-flex shrink-0 items-center`,h[t]),children:[(0,b.jsx)(`input`,{...S,ref:C,id:T,type:`checkbox`,role:`switch`,disabled:c,required:l,checked:A,"aria-checked":A,"aria-invalid":j||void 0,"aria-describedby":M,onChange:e=>{D||k(e.target.checked),f?.(e)},className:a(g,`peer`)}),(0,b.jsx)(`span`,{"aria-hidden":`true`,className:a(`pointer-events-none absolute inset-0 rounded-full`,`bg-fg/20`,`peer-hover:bg-fg/30 peer-checked:peer-hover:bg-brand`,`peer-focus-visible:ring-2 peer-focus-visible:ring-focus`,`peer-checked:bg-brand peer-checked:ring-brand`,j?`ring-2 ring-inset ring-danger peer-checked:ring-danger`:`ring-1 ring-inset ring-fg/20`,c&&`opacity-50`)}),(0,b.jsx)(`span`,{"aria-hidden":`true`,className:a(`pointer-events-none z-[1] rounded-full bg-white`,`transition-transform motion-reduce:transition-none`,v[t])})]}),n?(0,b.jsxs)(`span`,{className:`min-w-0`,children:[n,l?(0,b.jsx)(`span`,{"aria-hidden":`true`,children:` *`}):null]}):null]}),(0,b.jsx)(p,{id:E,invalid:j,error:i,helper:r})]})}),x.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:"Libellé visible à côté de l’interrupteur. Sinon, `aria-label` ou `aria-labelledby`."},helper:{required:!1,tsType:{name:`ReactNode`},description:"Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide."},error:{required:!1,tsType:{name:`ReactNode`},description:"Message d’erreur. Pose aussi `aria-invalid`."},invalid:{required:!1,tsType:{name:`boolean`},description:"État d’erreur : `aria-invalid`.",defaultValue:{value:`false`,computed:!1}}}}})))()}var C=t({Default:()=>A,Disabled:()=>M,Helper:()=>F,Invalid:()=>N,On:()=>j,Required:()=>P,Sizes:()=>I,__namedExportsOrder:()=>L,default:()=>k});function w({label:e,defaultChecked:t=!1}){let[n,r]=(0,T.useState)(t);return(0,E.jsx)(x,{label:e,checked:n,onChange:e=>r(e.target.checked)})}var T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{T=n(),c(),i(),l(),S(),E=r(),D=`import { Switch } from 'd-ui';`,O=`import { useState } from 'react';
import { Switch } from 'd-ui';`,k={title:`Components/Switch`,component:x,argTypes:f,parameters:{controls:{include:[`size`,`label`,`helper`,`invalid`,`disabled`,`required`,`checked`]}}},A={name:`Par défaut`,parameters:u(D,`<Switch label="Mode compact" />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,E.jsx)(x,{...e,label:e.label??n.switchLabel})}},j={name:`Activé`,parameters:d(O,`const [on, setOn] = useState(true);
return (
    <Switch
        label="Mode compact"
        checked={on}
        onChange={(event) => setOn(event.target.checked)}
    />
);`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,E.jsx)(w,{label:n.switchLabel,defaultChecked:!0})}},M={name:`Désactivé`,parameters:u(D,`<Switch label="Mode compact" defaultChecked disabled />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,E.jsx)(x,{label:n.switchLabel,defaultChecked:!0,disabled:!0})}},N={name:`Invalide`,parameters:u(D,`<Switch label="Mode compact" invalid error="Ce champ est requis." />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,E.jsx)(x,{label:n.switchLabel,invalid:!0,error:n.error})}},P={name:`Requis`,parameters:u(D,`<Switch label="Mode compact" required />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,E.jsx)(x,{label:n.switchLabel,required:!0})}},F={name:`Aide`,parameters:u(D,`<Switch label="Mode compact" helper="Réduit les marges de l’interface." />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,E.jsx)(x,{label:n.switchLabel,helper:n.switchHelper})}},I={name:`Tailles`,parameters:u(D,`<>
    <Switch size="sm" label="Petite" />
    <Switch size="md" label="Moyenne" />
    <Switch size="lg" label="Grande" />
</>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,E.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,E.jsx)(x,{size:`sm`,label:n.small}),(0,E.jsx)(x,{size:`md`,label:n.medium}),(0,E.jsx)(x,{size:`lg`,label:n.large})]})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importSwitch, \`<Switch label="Mode compact" />\`),
  render: (args, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch {...args} label={args.label ?? copy.switchLabel} />;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importSwitch, \`<Switch label="Mode compact" defaultChecked disabled />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} defaultChecked disabled />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(importSwitch, \`<Switch label="Mode compact" invalid error="Ce champ est requis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} invalid error={copy.error} />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Requis',
  parameters: componentSource(importSwitch, \`<Switch label="Mode compact" required />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} required />;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Aide',
  parameters: componentSource(importSwitch, \`<Switch label="Mode compact" helper="Réduit les marges de l’interface." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Switch label={copy.switchLabel} helper={copy.switchHelper} />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`Default`,`On`,`Disabled`,`Invalid`,`Required`,`Helper`,`Sizes`]})))()}export{j as a,C as c,N as i,R as l,M as n,P as o,F as r,I as s,A as t};