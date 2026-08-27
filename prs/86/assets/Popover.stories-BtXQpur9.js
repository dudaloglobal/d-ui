import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DQxMMF7O.js";import{f as ue,c as g,e as de}from"./docs-source-CdFyzgzW.js";import{c as me,o as i,d as c}from"./cx-DFSoSxFP.js";import{B as a}from"./Button-CjT892Oo.js";import{u as ve,a as fe,b as ye,c as ge,d as be,e as Pe,F as he,f as xe,g as Be,o as Oe,h as je,s as Ce,i as Se,O as Fe,j as N}from"./floating-BPjGdGmF.js";function s({content:t,children:o,placement:n="bottom",open:r,defaultOpen:x=!1,onOpenChange:B,trapFocus:P=!1,disabled:O=!1,className:Z,"aria-label":C,"aria-labelledby":S}){const F=p.useId(),[$,ee]=p.useState(x),[ne,oe]=p.useState(null),te=r!==void 0,j=O?!1:r??$,re=l=>{O&&l||(te||ee(l),B==null||B(l))},{refs:_,floatingStyles:ae,context:h}=ve({open:j,onOpenChange:re,placement:n,middleware:[Oe(Fe),je({padding:N,fallbackAxisSideDirection:"start"}),Ce({padding:N})],whileElementsMounted:Be}),se=fe(ne),T=Se(se),q=ye(h,{enabled:!O}),E=ge(h,{ancestorScroll:!0}),le=be(h,{role:"dialog"}),{getReferenceProps:pe,getFloatingProps:ie}=Pe(P?[q,E,le]:[q,E]),ce=p.isValidElement(o)?p.cloneElement(o,pe({"aria-expanded":j,"aria-haspopup":P?"dialog":!0,"aria-controls":F})):o,D=e.jsx("div",{ref:_.setFloating,style:ae,...ie(),...T,...!P&&(C||S)?{role:"region"}:{},id:F,className:me(T.className,"max-w-sm rounded-md border border-border bg-bg px-3 py-3 text-fg shadow-lg","outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg",Z),"aria-label":C,"aria-labelledby":S,children:t});return e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:l=>{_.setReference(l),oe(l)},className:"inline-flex max-w-full",children:ce}),j?e.jsx(he,{children:P?e.jsx(xe,{context:h,modal:!0,returnFocus:!0,initialFocus:0,children:D}):D}):null]})}s.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{content:{required:!0,tsType:{name:"ReactNode"},description:"Contenu du panneau."},children:{required:!0,tsType:{name:"ReactElement"},description:"Déclencheur unique (focusable)."},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
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
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:"Côté préféré. Flip/shift recadrent près des bords du viewport.",defaultValue:{value:"'bottom'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trapFocus:{required:!1,tsType:{name:"boolean"},description:"Piège le focus dans le panneau (rôle `dialog`).\nÀ passer lorsque le contenu est interactif (boutons, champs).",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Empêche l’ouverture.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const b="import { Button, Popover } from 'd-ui';",_e=`import { useState } from 'react';
import { Button, Popover } from 'd-ui';`,Te={title:"Components/Popover",component:s,argTypes:ue,parameters:{controls:{include:["placement","trapFocus","disabled"]}}},u={name:"Par défaut",args:{content:null,children:e.jsx("span",{})},parameters:g(b,`<Popover
    trapFocus
    aria-label="Options"
    content={
        <Button variant="primary">Confirmer</Button>
    }
>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(t,{globals:o})=>{const n=i(c(o.locale));return e.jsx(s,{...t,trapFocus:!0,"aria-label":n.options,content:e.jsx(a,{variant:"primary",children:n.action}),children:e.jsx(a,{variant:"secondary",children:n.open})})}},d={name:"Placement",args:{content:null,children:e.jsx("span",{})},parameters:g(b,`<Popover placement="right" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(t,{globals:o})=>{const n=i(c(o.locale));return e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 py-16",children:["top","bottom","left","right"].map(r=>e.jsx(s,{placement:r,"aria-label":n.options,content:e.jsx("p",{children:n.options}),children:e.jsx(a,{variant:"secondary",children:n[r]})},r))})}},m={name:"Contrôlé",args:{content:null,children:e.jsx("span",{})},parameters:de(_e,`const [open, setOpen] = useState(false);
return (
    <Popover
        open={open}
        onOpenChange={setOpen}
        trapFocus
        aria-label="Options"
        content={<Button variant="primary">Confirmer</Button>}
    >
        <Button variant="secondary">Ouvrir</Button>
    </Popover>
);`),render:(t,{globals:o})=>{const n=i(c(o.locale));return e.jsx(qe,{openLabel:n.open,action:n.action,options:n.options})}},v={name:"Sans piège de focus",args:{content:null,children:e.jsx("span",{})},parameters:g(b,`<Popover aria-label="Plus d’infos" content={<p>Plus d’infos</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(t,{globals:o})=>{const n=i(c(o.locale));return e.jsx(s,{"aria-label":n.more,content:e.jsx("p",{children:n.more}),children:e.jsx(a,{variant:"secondary",children:n.open})})}},f={name:"Collision",args:{content:null,children:e.jsx("span",{})},parameters:g(b,`<Popover placement="top" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(t,{globals:o})=>{const n=i(c(o.locale));return e.jsx("div",{className:"flex h-40 items-start justify-start",children:e.jsx(s,{placement:"top",defaultOpen:!0,"aria-label":n.options,content:e.jsx("p",{children:n.options}),children:e.jsx(a,{variant:"secondary",children:n.open})})})}},y={name:"Désactivé",args:{content:null,children:e.jsx("span",{})},parameters:g(b,`<Popover disabled aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(t,{globals:o})=>{const n=i(c(o.locale));return e.jsx(s,{disabled:!0,"aria-label":n.options,content:e.jsx("p",{children:n.options}),children:e.jsx(a,{variant:"secondary",children:n.open})})}};function qe({openLabel:t,action:o,options:n}){const[r,x]=p.useState(!1);return e.jsx(s,{open:r,onOpenChange:x,trapFocus:!0,"aria-label":n,content:e.jsx(a,{variant:"primary",children:o}),children:e.jsx(a,{variant:"secondary",children:t})})}var w,L,R;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    content: null,
    children: <span />
  },
  parameters: componentSource(importPopover, \`<Popover
    trapFocus
    aria-label="Options"
    content={
        <Button variant="primary">Confirmer</Button>
    }
>
    <Button variant="secondary">Ouvrir</Button>
</Popover>\`),
  render: (args, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <Popover {...args} trapFocus aria-label={copy.options} content={<Button variant="primary">{copy.action}</Button>}>
        <Button variant="secondary">{copy.open}</Button>
      </Popover>;
  }
}`,...(R=(L=u.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var V,I,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Placement',
  args: {
    content: null,
    children: <span />
  },
  parameters: componentSource(importPopover, \`<Popover placement="right" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center justify-center gap-4 py-16">
        {(['top', 'bottom', 'left', 'right'] as const).map(placement => <Popover key={placement} placement={placement} aria-label={copy.options} content={<p>{copy.options}</p>}>
            <Button variant="secondary">{copy[placement]}</Button>
          </Popover>)}
      </div>;
  }
}`,...(A=(I=d.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var k,M,W;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Contrôlé',
  args: {
    content: null,
    children: <span />
  },
  parameters: componentSourceFn(importControlled, \`const [open, setOpen] = useState(false);
return (
    <Popover
        open={open}
        onOpenChange={setOpen}
        trapFocus
        aria-label="Options"
        content={<Button variant="primary">Confirmer</Button>}
    >
        <Button variant="secondary">Ouvrir</Button>
    </Popover>
);\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <ControlledPopover openLabel={copy.open} action={copy.action} options={copy.options} />;
  }
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var U,Y,z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Sans piège de focus',
  args: {
    content: null,
    children: <span />
  },
  parameters: componentSource(importPopover, \`<Popover aria-label="Plus d’infos" content={<p>Plus d’infos</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <Popover aria-label={copy.more} content={<p>{copy.more}</p>}>
        <Button variant="secondary">{copy.open}</Button>
      </Popover>;
  }
}`,...(z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var G,H,J;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Collision',
  args: {
    content: null,
    children: <span />
  },
  parameters: componentSource(importPopover, \`<Popover placement="top" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <div className="flex h-40 items-start justify-start">
        <Popover placement="top" defaultOpen aria-label={copy.options} content={<p>{copy.options}</p>}>
          <Button variant="secondary">{copy.open}</Button>
        </Popover>
      </div>;
  }
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Désactivé',
  args: {
    content: null,
    children: <span />
  },
  parameters: componentSource(importPopover, \`<Popover disabled aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <Popover disabled aria-label={copy.options} content={<p>{copy.options}</p>}>
        <Button variant="secondary">{copy.open}</Button>
      </Popover>;
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ee=["Default","Placement","Controlled","WithoutFocusTrap","Collision","Disabled"],Ie=Object.freeze(Object.defineProperty({__proto__:null,Collision:f,Controlled:m,Default:u,Disabled:y,Placement:d,WithoutFocusTrap:v,__namedExportsOrder:Ee,default:Te},Symbol.toStringTag,{value:"Module"}));export{m as C,u as D,Ie as P,v as W,d as a,y as b,f as c};
