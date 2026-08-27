import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,c as a,g as o,n as s}from"./docs-locale-DxRsX5eR.js";import{D as c,h as l,i as u,n as d,r as f}from"./docs-source-5snetGJm.js";import{n as p,t as m}from"./Button-BlIgtYyL.js";import{S as h,_ as g,a as _,b as v,c as y,d as b,f as x,g as S,h as C,i as w,m as T,n as E,p as D,r as O,s as k,t as A,u as j,y as M}from"./floating-DvfFhaFC.js";function N({content:e,children:t,placement:n=`top`,open:r,defaultOpen:i=!1,onOpenChange:a,delayMs:s=I,disabled:c=!1,className:l}){let u=(0,P.useId)(),d=(0,P.useRef)(null),f=w(),[p,m]=(0,P.useState)(i),[y,A]=(0,P.useState)(null),N=r!==void 0,L=c?!1:r??p,{refs:R,floatingStyles:z,context:B}=b({open:L,onOpenChange:e=>{c&&e||(N||m(e),a?.(e))},placement:n,middleware:[M(10),g({padding:8,fallbackAxisSideDirection:`start`}),v({padding:8}),S({element:d,padding:6})],whileElementsMounted:h}),V=O(y),H=E(V),U=D(B,{enabled:!c,move:!1,delay:{open:f?0:s,close:0}}),W=x(B,{enabled:!c}),G=j(B,{ancestorScroll:!0}),K=C(B,{role:`tooltip`}),{getReferenceProps:q,getFloatingProps:J}=T([U,W,G,K]),Y=(0,P.isValidElement)(t)?(0,P.cloneElement)(t,q({"aria-describedby":L?u:void 0})):t;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{ref:e=>{R.setReference(e),A(e)},className:`inline-flex max-w-full`,children:Y}),L?(0,F.jsx)(k,{children:(0,F.jsxs)(`div`,{ref:R.setFloating,style:z,...J(),...H,id:u,className:o(H.className,`pointer-events-none max-w-xs rounded-md bg-fg px-2 py-1 text-sm text-bg shadow-md`,l),children:[e,(0,F.jsx)(_,{ref:d,context:B,width:12,height:6,className:`d-ui-tooltip-arrow`,"data-d-ui-tooltip-arrow":``,"aria-hidden":!0})]})}):null]})}var P,F,I;function L(){return(L=e((()=>{y(),P=n(),A(),F=r(),I=200,N.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:`Contenu non interactif. Ne pas y placer de bouton, lien ou champ.`},children:{required:!0,tsType:{name:`ReactElement`},description:"Déclencheur unique (focusable). `Button` n’expose pas de ref : un wrapper sert de référence."},placement:{required:!1,tsType:{name:`union`,raw:`| 'top'
| 'top-start'
| 'top-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'right'
| 'right-start'
| 'right-end'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'top-start'`},{name:`literal`,value:`'top-end'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'bottom-start'`},{name:`literal`,value:`'bottom-end'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'left-start'`},{name:`literal`,value:`'left-end'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'right-start'`},{name:`literal`,value:`'right-end'`}]},description:`Côté préféré. Flip/shift recadrent près des bords du viewport.`,defaultValue:{value:`'top'`,computed:!1}},open:{required:!1,tsType:{name:`boolean`},description:"Ouvert contrôlé. Sinon `defaultOpen`."},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},delayMs:{required:!1,tsType:{name:`number`},description:"Délai d’ouverture au survol (ms). `0` si `prefers-reduced-motion`.",defaultValue:{value:`200`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Empêche l’ouverture.`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var R=t({Collision:()=>Y,Controlled:()=>q,Default:()=>G,Disabled:()=>J,Placement:()=>K,Portal:()=>X,__namedExportsOrder:()=>Z,default:()=>W});function z({label:e,tip:t}){let[n,r]=(0,B.useState)(!1);return(0,V.jsx)(N,{content:t,open:n,onOpenChange:r,delayMs:0,children:(0,V.jsx)(m,{variant:`secondary`,children:e})})}var B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{B=n(),l(),i(),u(),p(),L(),V=r(),H=`import { Button, Tooltip } from 'd-ui';`,U=`import { useState } from 'react';
import { Button, Tooltip } from 'd-ui';`,W={title:`Components/Tooltip`,component:N,argTypes:c,parameters:{controls:{include:[`placement`,`delayMs`,`disabled`,`content`]}}},G={name:`Par défaut`,args:{content:`Enregistrer (⌘S)`,children:(0,V.jsx)(`span`,{})},parameters:d(H,`<Tooltip content="Enregistrer (⌘S)">
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(e,{globals:t})=>{let n=a(s(t.locale));return(0,V.jsx)(N,{...e,content:n.tip,delayMs:0,children:(0,V.jsx)(m,{variant:`secondary`,children:n.help})})}},K={name:`Placement`,args:{content:`Enregistrer (⌘S)`,children:(0,V.jsx)(`span`,{})},parameters:d(H,`<>
    <Tooltip content="Enregistrer (⌘S)" placement="top">
        <Button variant="secondary">Haut</Button>
    </Tooltip>
    <Tooltip content="Enregistrer (⌘S)" placement="bottom">
        <Button variant="secondary">Bas</Button>
    </Tooltip>
    <Tooltip content="Enregistrer (⌘S)" placement="left">
        <Button variant="secondary">Gauche</Button>
    </Tooltip>
    <Tooltip content="Enregistrer (⌘S)" placement="right">
        <Button variant="secondary">Droite</Button>
    </Tooltip>
</>`),render:(e,{globals:t})=>{let n=a(s(t.locale));return(0,V.jsx)(`div`,{className:`flex flex-wrap items-center justify-center gap-4 py-12`,children:[`top`,`bottom`,`left`,`right`].map(e=>(0,V.jsx)(N,{content:n.tip,placement:e,delayMs:0,children:(0,V.jsx)(m,{variant:`secondary`,children:n[e]})},e))})}},q={name:`Contrôlé`,args:{content:`Enregistrer (⌘S)`,children:(0,V.jsx)(`span`,{})},parameters:f(U,`const [open, setOpen] = useState(false);
return (
    <Tooltip content="Enregistrer (⌘S)" open={open} onOpenChange={setOpen}>
        <Button variant="secondary">Aide</Button>
    </Tooltip>
);`),render:(e,{globals:t})=>{let n=a(s(t.locale));return(0,V.jsx)(z,{label:n.help,tip:n.tip})}},J={name:`Désactivé`,args:{content:`Enregistrer (⌘S)`,children:(0,V.jsx)(`span`,{})},parameters:d(H,`<Tooltip content="Enregistrer (⌘S)" disabled>
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(e,{globals:t})=>{let n=a(s(t.locale));return(0,V.jsx)(N,{content:n.tip,disabled:!0,delayMs:0,children:(0,V.jsx)(m,{variant:`secondary`,children:n.help})})}},Y={name:`Collision`,args:{content:`Enregistrer (⌘S)`,children:(0,V.jsx)(`span`,{})},parameters:d(H,`<Tooltip content="Enregistrer (⌘S)" placement="top">
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(e,{globals:t})=>{let n=a(s(t.locale));return(0,V.jsx)(`div`,{className:`flex h-40 items-start justify-start`,children:(0,V.jsx)(N,{content:n.tip,placement:`top`,delayMs:0,children:(0,V.jsx)(m,{variant:`secondary`,children:n.help})})})}},X={name:`Portail`,args:{content:`Enregistrer (⌘S)`,children:(0,V.jsx)(`span`,{})},parameters:d(H,`<div className="relative h-24 overflow-hidden">
    <Tooltip content="Enregistrer (⌘S)">
        <Button variant="secondary">Aide</Button>
    </Tooltip>
</div>`),render:(e,{globals:t})=>{let n=a(s(t.locale));return(0,V.jsx)(`div`,{className:`relative h-24 overflow-hidden rounded-md border border-border p-4`,children:(0,V.jsx)(N,{content:n.tip,defaultOpen:!0,delayMs:0,children:(0,V.jsx)(m,{variant:`secondary`,children:n.help})})})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    content: 'Enregistrer (⌘S)',
    children: <span />
  },
  parameters: componentSource(importTooltip, \`<Tooltip content="Enregistrer (⌘S)">
    <Button variant="secondary">Aide</Button>
</Tooltip>\`),
  render: (args, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <Tooltip {...args} content={copy.tip} delayMs={0}>
        <Button variant="secondary">{copy.help}</Button>
      </Tooltip>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Placement',
  args: {
    content: 'Enregistrer (⌘S)',
    children: <span />
  },
  parameters: componentSource(importTooltip, \`<>
    <Tooltip content="Enregistrer (⌘S)" placement="top">
        <Button variant="secondary">Haut</Button>
    </Tooltip>
    <Tooltip content="Enregistrer (⌘S)" placement="bottom">
        <Button variant="secondary">Bas</Button>
    </Tooltip>
    <Tooltip content="Enregistrer (⌘S)" placement="left">
        <Button variant="secondary">Gauche</Button>
    </Tooltip>
    <Tooltip content="Enregistrer (⌘S)" placement="right">
        <Button variant="secondary">Droite</Button>
    </Tooltip>
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center justify-center gap-4 py-12">
        {(['top', 'bottom', 'left', 'right'] as const).map(placement => <Tooltip key={placement} content={copy.tip} placement={placement} delayMs={0}>
            <Button variant="secondary">{copy[placement]}</Button>
          </Tooltip>)}
      </div>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Contrôlé',
  args: {
    content: 'Enregistrer (⌘S)',
    children: <span />
  },
  parameters: componentSourceFn(importControlled, \`const [open, setOpen] = useState(false);
return (
    <Tooltip content="Enregistrer (⌘S)" open={open} onOpenChange={setOpen}>
        <Button variant="secondary">Aide</Button>
    </Tooltip>
);\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <ControlledTooltip label={copy.help} tip={copy.tip} />;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Désactivé',
  args: {
    content: 'Enregistrer (⌘S)',
    children: <span />
  },
  parameters: componentSource(importTooltip, \`<Tooltip content="Enregistrer (⌘S)" disabled>
    <Button variant="secondary">Aide</Button>
</Tooltip>\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <Tooltip content={copy.tip} disabled delayMs={0}>
        <Button variant="secondary">{copy.help}</Button>
      </Tooltip>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Collision',
  args: {
    content: 'Enregistrer (⌘S)',
    children: <span />
  },
  parameters: componentSource(importTooltip, \`<Tooltip content="Enregistrer (⌘S)" placement="top">
    <Button variant="secondary">Aide</Button>
</Tooltip>\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <div className="flex h-40 items-start justify-start">
        <Tooltip content={copy.tip} placement="top" delayMs={0}>
          <Button variant="secondary">{copy.help}</Button>
        </Tooltip>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Portail',
  args: {
    content: 'Enregistrer (⌘S)',
    children: <span />
  },
  parameters: componentSource(importTooltip, \`<div className="relative h-24 overflow-hidden">
    <Tooltip content="Enregistrer (⌘S)">
        <Button variant="secondary">Aide</Button>
    </Tooltip>
</div>\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <div className="relative h-24 overflow-hidden rounded-md border border-border p-4">
        <Tooltip content={copy.tip} defaultOpen delayMs={0}>
          <Button variant="secondary">{copy.help}</Button>
        </Tooltip>
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z=[`Default`,`Placement`,`Controlled`,`Disabled`,`Collision`,`Portal`]})))()}export{K as a,Q as c,J as i,q as n,X as o,G as r,R as s,Y as t};