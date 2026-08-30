import{r as s,j as e,f as ve,o as l,d as i}from"./iframe-D5579FTu.js";import{A as he}from"./arg-types-865yu2cB.js";import{c as d,b as Te}from"./docs-source-C_O40UCi.js";import{B as c}from"./Button-DS9JBTo6.js";import{n as Se,u as Be,a as be,p as xe,q as Ee,c as je,d as Ae,e as Ce,g as Oe,F as _e,O,f as we,i as De,o as Re,j as Me,s as Pe,k as Ne,l as Le,m as _}from"./floating-OHeRg-O1.js";import{c as qe}from"./cornerRadius-B4XFh-_5.js";const Fe=200;function n({content:r,children:o,placement:t="top",open:a,defaultOpen:X=!1,onOpenChange:b,delayMs:Z=Fe,disabled:B=!1,radius:$="md",className:ee}){const E=s.useId(),j=s.useRef(null),te=Se(),[oe,re]=s.useState(X),[ne,ae]=s.useState(null),se=a!==void 0,x=B?!1:a??oe,le=p=>{B&&p||(se||re(p),b==null||b(p))},{refs:A,floatingStyles:ie,context:m}=Be({open:x,onOpenChange:le,placement:t,middleware:[Re(O+4),Me({padding:_,fallbackAxisSideDirection:"start"}),Pe({padding:_}),Ne({element:j,padding:6})],whileElementsMounted:De}),ce=be(ne),C=Le(ce),pe=xe(m,{enabled:!B,move:!1,delay:{open:te?0:Z,close:0}}),de=Ee(m,{enabled:!B}),ue=je(m,{ancestorScroll:!0}),me=Ae(m,{role:"tooltip"}),{getReferenceProps:ye,getFloatingProps:ge}=Ce([pe,de,ue,me]),fe=s.isValidElement(o)?s.cloneElement(o,ye({"aria-describedby":x?E:void 0})):o;return e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:p=>{A.setReference(p),ae(p)},className:"inline-flex max-w-full",children:fe}),x?e.jsx(Oe,{children:e.jsxs("div",{ref:A.setFloating,style:ie,...ge(),...C,id:E,className:ve(C.className,"pointer-events-none max-w-xs bg-fg px-2 py-1 text-sm text-bg shadow-md",qe[$],ee),children:[r,e.jsx(_e,{ref:j,context:m,width:we,height:O,className:"d-ui-tooltip-arrow","data-d-ui-tooltip-arrow":"","aria-hidden":!0})]})}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:"Contenu non interactif. Ne pas y placer de bouton, lien ou champ."},children:{required:!0,tsType:{name:"ReactElement"},description:"Déclencheur unique (focusable). `Button` n’expose pas de ref : un wrapper sert de référence."},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
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
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:"Côté préféré. Flip/shift recadrent près des bords du viewport.",defaultValue:{value:"'top'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Ouvert contrôlé. Sinon `defaultOpen`."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},delayMs:{required:!1,tsType:{name:"number"},description:"Délai d’ouverture au survol (ms). `0` si `prefers-reduced-motion`.",defaultValue:{value:"200",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Empêche l’ouverture.",defaultValue:{value:"false",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Arrondi des coins du panneau. Défaut : `md`.",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const u="import { Button, Tooltip } from 'd-ui';",Ve=`import { useState } from 'react';
import { Button, Tooltip } from 'd-ui';`,Ie={title:"Components/Tooltip",component:n,argTypes:he,parameters:{controls:{include:["placement","delayMs","disabled","content","radius"]}}},y={name:"Par défaut",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:d(u,`<Tooltip content="Enregistrer (⌘S)">
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(r,{globals:o})=>{const t=l(i(o.locale));return e.jsx(n,{...r,content:t.tip,delayMs:0,children:e.jsx(c,{variant:"secondary",children:t.help})})}},g={name:"Placement",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:d(u,`<>
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
</>`),render:(r,{globals:o})=>{const t=l(i(o.locale));return e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 py-12",children:["top","bottom","left","right"].map(a=>e.jsx(n,{content:t.tip,placement:a,delayMs:0,children:e.jsx(c,{variant:"secondary",children:t[a]})},a))})}},f={name:"Contrôlé",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:Te(Ve,`const [open, setOpen] = useState(false);
return (
    <Tooltip content="Enregistrer (⌘S)" open={open} onOpenChange={setOpen}>
        <Button variant="secondary">Aide</Button>
    </Tooltip>
);`),render:(r,{globals:o})=>{const t=l(i(o.locale));return e.jsx(He,{label:t.help,tip:t.tip})}},v={name:"Désactivé",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:d(u,`<Tooltip content="Enregistrer (⌘S)" disabled>
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(r,{globals:o})=>{const t=l(i(o.locale));return e.jsx(n,{content:t.tip,disabled:!0,delayMs:0,children:e.jsx(c,{variant:"secondary",children:t.help})})}},h={name:"Collision",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:d(u,`<Tooltip content="Enregistrer (⌘S)" placement="top">
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(r,{globals:o})=>{const t=l(i(o.locale));return e.jsx("div",{className:"flex h-40 items-start justify-start",children:e.jsx(n,{content:t.tip,placement:"top",delayMs:0,children:e.jsx(c,{variant:"secondary",children:t.help})})})}},T={name:"Portail",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:d(u,`<div className="relative h-24 overflow-hidden">
    <Tooltip content="Enregistrer (⌘S)">
        <Button variant="secondary">Aide</Button>
    </Tooltip>
</div>`),render:(r,{globals:o})=>{const t=l(i(o.locale));return e.jsx("div",{className:"relative h-24 overflow-hidden rounded-md border border-border p-4",children:e.jsx(n,{content:t.tip,defaultOpen:!0,delayMs:0,children:e.jsx(c,{variant:"secondary",children:t.help})})})}};function He({label:r,tip:o}){const[t,a]=s.useState(!1);return e.jsx(n,{content:o,open:t,onOpenChange:a,delayMs:0,children:e.jsx(c,{variant:"secondary",children:r})})}const S={name:"Arrondi",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:d(u,`<Tooltip content="Enregistrer (⌘S)" radius="xl">
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(r,{globals:o})=>{const t=l(i(o.locale));return e.jsx(n,{...r,content:t.tip,radius:"xl",defaultOpen:!0,delayMs:0,children:e.jsx(c,{variant:"secondary",children:t.help})})}};var w,D,R;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(D=y.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var M,P,N;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(P=g.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var L,q,F;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(q=f.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var V,I,H;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(I=v.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var G,Y,k;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(k=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:k.source}}};var U,W,z;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(W=T.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Arrondi',
  args: {
    content: 'Enregistrer (⌘S)',
    children: <span />
  },
  parameters: componentSource(importTooltip, \`<Tooltip content="Enregistrer (⌘S)" radius="xl">
    <Button variant="secondary">Aide</Button>
</Tooltip>\`),
  render: (args, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <Tooltip {...args} content={copy.tip} radius="xl" defaultOpen delayMs={0}>
        <Button variant="secondary">{copy.help}</Button>
      </Tooltip>;
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ge=["Default","Placement","Controlled","Disabled","Collision","Portal","Radius"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Collision:h,Controlled:f,Default:y,Disabled:v,Placement:g,Portal:T,Radius:S,__namedExportsOrder:Ge,default:Ie},Symbol.toStringTag,{value:"Module"}));export{f as C,y as D,g as P,S as R,Qe as T,v as a,h as b,T as c};
