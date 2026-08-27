import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-DQxMMF7O.js";import{x as ue,c as h,e as me}from"./docs-source-DZzMf2H_.js";import{c as ye,o as i,d as c}from"./cx-Dh08zBtx.js";import{B as p}from"./Button-0h78LIkj.js";import{n as fe,u as ge,a as ve,p as he,q as Te,c as Se,d as be,e as Be,g as xe,F as Ee,O as _,f as je,i as Ce,o as _e,j as Oe,s as we,k as Ae,l as De,m as O}from"./floating-By5IdYG5.js";const Me=200;function a({content:r,children:o,placement:t="top",open:n,defaultOpen:z=!1,onOpenChange:b,delayMs:J=Me,disabled:S=!1,className:K}){const x=s.useId(),E=s.useRef(null),Q=fe(),[X,Z]=s.useState(z),[$,ee]=s.useState(null),te=n!==void 0,B=S?!1:n??X,oe=l=>{S&&l||(te||Z(l),b==null||b(l))},{refs:j,floatingStyles:re,context:d}=ge({open:B,onOpenChange:oe,placement:t,middleware:[_e(_+4),Oe({padding:O,fallbackAxisSideDirection:"start"}),we({padding:O}),Ae({element:E,padding:6})],whileElementsMounted:Ce}),ne=ve($),C=De(ne),ae=he(d,{enabled:!S,move:!1,delay:{open:Q?0:J,close:0}}),se=Te(d,{enabled:!S}),le=Se(d,{ancestorScroll:!0}),ie=be(d,{role:"tooltip"}),{getReferenceProps:ce,getFloatingProps:pe}=Be([ae,se,le,ie]),de=s.isValidElement(o)?s.cloneElement(o,ce({"aria-describedby":B?x:void 0})):o;return e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:l=>{j.setReference(l),ee(l)},className:"inline-flex max-w-full",children:de}),B?e.jsx(xe,{children:e.jsxs("div",{ref:j.setFloating,style:re,...pe(),...C,id:x,className:ye(C.className,"pointer-events-none max-w-xs rounded-md bg-fg px-2 py-1 text-sm text-bg shadow-md",K),children:[r,e.jsx(Ee,{ref:E,context:d,width:je,height:_,className:"d-ui-tooltip-arrow","data-d-ui-tooltip-arrow":"","aria-hidden":!0})]})}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:"Contenu non interactif. Ne pas y placer de bouton, lien ou champ."},children:{required:!0,tsType:{name:"ReactElement"},description:"Déclencheur unique (focusable). `Button` n’expose pas de ref : un wrapper sert de référence."},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
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
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:"Côté préféré. Flip/shift recadrent près des bords du viewport.",defaultValue:{value:"'top'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Ouvert contrôlé. Sinon `defaultOpen`."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},delayMs:{required:!1,tsType:{name:"number"},description:"Délai d’ouverture au survol (ms). `0` si `prefers-reduced-motion`.",defaultValue:{value:"200",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Empêche l’ouverture.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const T="import { Button, Tooltip } from 'd-ui';",Pe=`import { useState } from 'react';
import { Button, Tooltip } from 'd-ui';`,Ne={title:"Components/Tooltip",component:a,argTypes:ue,parameters:{controls:{include:["placement","delayMs","disabled","content"]}}},u={name:"Par défaut",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:h(T,`<Tooltip content="Enregistrer (⌘S)">
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx(a,{...r,content:t.tip,delayMs:0,children:e.jsx(p,{variant:"secondary",children:t.help})})}},m={name:"Placement",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:h(T,`<>
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
</>`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 py-12",children:["top","bottom","left","right"].map(n=>e.jsx(a,{content:t.tip,placement:n,delayMs:0,children:e.jsx(p,{variant:"secondary",children:t[n]})},n))})}},y={name:"Contrôlé",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:me(Pe,`const [open, setOpen] = useState(false);
return (
    <Tooltip content="Enregistrer (⌘S)" open={open} onOpenChange={setOpen}>
        <Button variant="secondary">Aide</Button>
    </Tooltip>
);`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx(Re,{label:t.help,tip:t.tip})}},f={name:"Désactivé",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:h(T,`<Tooltip content="Enregistrer (⌘S)" disabled>
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx(a,{content:t.tip,disabled:!0,delayMs:0,children:e.jsx(p,{variant:"secondary",children:t.help})})}},g={name:"Collision",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:h(T,`<Tooltip content="Enregistrer (⌘S)" placement="top">
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx("div",{className:"flex h-40 items-start justify-start",children:e.jsx(a,{content:t.tip,placement:"top",delayMs:0,children:e.jsx(p,{variant:"secondary",children:t.help})})})}},v={name:"Portail",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:h(T,`<div className="relative h-24 overflow-hidden">
    <Tooltip content="Enregistrer (⌘S)">
        <Button variant="secondary">Aide</Button>
    </Tooltip>
</div>`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx("div",{className:"relative h-24 overflow-hidden rounded-md border border-border p-4",children:e.jsx(a,{content:t.tip,defaultOpen:!0,delayMs:0,children:e.jsx(p,{variant:"secondary",children:t.help})})})}};function Re({label:r,tip:o}){const[t,n]=s.useState(!1);return e.jsx(a,{content:o,open:t,onOpenChange:n,delayMs:0,children:e.jsx(p,{variant:"secondary",children:r})})}var w,A,D;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var M,P,N;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(P=m.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var R,F,L;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(F=y.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var q,I,V;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(I=f.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var H,G,Y;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Y=(G=g.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var k,U,W;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(U=v.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const Fe=["Default","Placement","Controlled","Disabled","Collision","Portal"],ke=Object.freeze(Object.defineProperty({__proto__:null,Collision:g,Controlled:y,Default:u,Disabled:f,Placement:m,Portal:v,__namedExportsOrder:Fe,default:Ne},Symbol.toStringTag,{value:"Module"}));export{y as C,u as D,m as P,ke as T,f as a,g as b,v as c};
