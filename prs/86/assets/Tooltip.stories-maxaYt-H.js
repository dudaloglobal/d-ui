import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DQxMMF7O.js";import{i as pe,c as v,e as de}from"./docs-source-CdFyzgzW.js";import{c as ue,o as i,d as c}from"./cx-DFSoSxFP.js";import{B as p}from"./Button-CjT892Oo.js";import{k as me,u as ye,a as ge,l as fe,m as ve,c as he,d as Te,e as Se,F as be,g as Be,o as xe,h as Ee,s as je,i as Ce,O as _e,j as C}from"./floating-BPjGdGmF.js";const Oe=200;function a({content:r,children:o,placement:t="top",open:n,defaultOpen:Y=!1,onOpenChange:b,delayMs:z=Oe,disabled:T=!1,className:J}){const x=l.useId(),K=me(),[Q,W]=l.useState(Y),[X,Z]=l.useState(null),$=n!==void 0,B=T?!1:n??Q,ee=s=>{T&&s||($||W(s),b==null||b(s))},{refs:E,floatingStyles:te,context:S}=ye({open:B,onOpenChange:ee,placement:t,middleware:[xe(_e),Ee({padding:C,fallbackAxisSideDirection:"start"}),je({padding:C})],whileElementsMounted:Be}),oe=ge(X),j=Ce(oe),re=fe(S,{enabled:!T,move:!1,delay:{open:K?0:z,close:0}}),ne=ve(S,{enabled:!T}),ae=he(S,{ancestorScroll:!0}),se=Te(S,{role:"tooltip"}),{getReferenceProps:le,getFloatingProps:ie}=Se([re,ne,ae,se]),ce=l.isValidElement(o)?l.cloneElement(o,le({"aria-describedby":B?x:void 0})):o;return e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:s=>{E.setReference(s),Z(s)},className:"inline-flex max-w-full",children:ce}),B?e.jsx(be,{children:e.jsx("div",{ref:E.setFloating,style:te,...ie(),...j,id:x,className:ue(j.className,"pointer-events-none max-w-xs rounded-md bg-fg px-2 py-1 text-sm text-bg shadow-md",J),children:r})}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:"Contenu non interactif. Ne pas y placer de bouton, lien ou champ."},children:{required:!0,tsType:{name:"ReactElement"},description:"Déclencheur unique (focusable). `Button` n’expose pas de ref : un wrapper sert de référence."},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
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
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:"Côté préféré. Flip/shift recadrent près des bords du viewport.",defaultValue:{value:"'top'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Ouvert contrôlé. Sinon `defaultOpen`."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},delayMs:{required:!1,tsType:{name:"number"},description:"Délai d’ouverture au survol (ms). `0` si `prefers-reduced-motion`.",defaultValue:{value:"200",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Empêche l’ouverture.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const h="import { Button, Tooltip } from 'd-ui';",De=`import { useState } from 'react';
import { Button, Tooltip } from 'd-ui';`,Me={title:"Components/Tooltip",component:a,argTypes:pe,parameters:{controls:{include:["placement","delayMs","disabled","content"]}}},d={name:"Par défaut",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:v(h,`<Tooltip content="Enregistrer (⌘S)">
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx(a,{...r,content:t.tip,delayMs:0,children:e.jsx(p,{variant:"secondary",children:t.help})})}},u={name:"Placement",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:v(h,`<>
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
</>`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 py-12",children:["top","bottom","left","right"].map(n=>e.jsx(a,{content:t.tip,placement:n,delayMs:0,children:e.jsx(p,{variant:"secondary",children:t[n]})},n))})}},m={name:"Contrôlé",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:de(De,`const [open, setOpen] = useState(false);
return (
    <Tooltip content="Enregistrer (⌘S)" open={open} onOpenChange={setOpen}>
        <Button variant="secondary">Aide</Button>
    </Tooltip>
);`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx(Pe,{label:t.help,tip:t.tip})}},y={name:"Désactivé",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:v(h,`<Tooltip content="Enregistrer (⌘S)" disabled>
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx(a,{content:t.tip,disabled:!0,delayMs:0,children:e.jsx(p,{variant:"secondary",children:t.help})})}},g={name:"Collision",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:v(h,`<Tooltip content="Enregistrer (⌘S)" placement="top">
    <Button variant="secondary">Aide</Button>
</Tooltip>`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx("div",{className:"flex h-40 items-start justify-start",children:e.jsx(a,{content:t.tip,placement:"top",delayMs:0,children:e.jsx(p,{variant:"secondary",children:t.help})})})}},f={name:"Portail",args:{content:"Enregistrer (⌘S)",children:e.jsx("span",{})},parameters:v(h,`<div className="relative h-24 overflow-hidden">
    <Tooltip content="Enregistrer (⌘S)">
        <Button variant="secondary">Aide</Button>
    </Tooltip>
</div>`),render:(r,{globals:o})=>{const t=i(c(o.locale));return e.jsx("div",{className:"relative h-24 overflow-hidden rounded-md border border-border p-4",children:e.jsx(a,{content:t.tip,defaultOpen:!0,delayMs:0,children:e.jsx(p,{variant:"secondary",children:t.help})})})}};function Pe({label:r,tip:o}){const[t,n]=l.useState(!1);return e.jsx(a,{content:o,open:t,onOpenChange:n,delayMs:0,children:e.jsx(p,{variant:"secondary",children:r})})}var _,O,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(O=d.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var M,P,A;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var N,w,F;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(w=m.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var L,q,R;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(q=y.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var V,I,k;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(I=g.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var G,H,U;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(H=f.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const Ae=["Default","Placement","Controlled","Disabled","Collision","Portal"],Ie=Object.freeze(Object.defineProperty({__proto__:null,Collision:g,Controlled:m,Default:d,Disabled:y,Placement:u,Portal:f,__namedExportsOrder:Ae,default:Me},Symbol.toStringTag,{value:"Module"}));export{m as C,d as D,u as P,Ie as T,y as a,g as b,f as c};
