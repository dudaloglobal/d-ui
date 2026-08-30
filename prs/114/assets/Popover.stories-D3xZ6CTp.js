import{o as s,d as p,j as n,r as k}from"./iframe-DPMCGbXH.js";import{p as q}from"./arg-types-BT0UMpT1.js";import{c,b as G}from"./docs-source-C_O40UCi.js";import{B as r}from"./Button-J0p711sK.js";import{P as a}from"./Popover-BDQc6NPz.js";const l="import { Button, Popover } from 'd-ui';",I=`import { useState } from 'react';
import { Button, Popover } from 'd-ui';`,J={title:"Components/Popover",component:a,argTypes:q,parameters:{controls:{include:["placement","trapFocus","disabled"]}}},i={name:"Par défaut",args:{content:null,children:n.jsx("span",{})},parameters:c(l,`<Popover
    trapFocus
    aria-label="Options"
    content={
        <Button variant="primary">Confirmer</Button>
    }
>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(t,{globals:e})=>{const o=s(p(e.locale));return n.jsx(a,{...t,trapFocus:!0,"aria-label":o.options,content:n.jsx(r,{variant:"primary",children:o.action}),children:n.jsx(r,{variant:"secondary",children:o.open})})}},d={name:"Placement",args:{content:null,children:n.jsx("span",{})},parameters:c(l,`<Popover placement="top" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Haut</Button>
</Popover>`),render:(t,{globals:e})=>{const o=s(p(e.locale));return n.jsxs("div",{className:"mx-auto grid w-max grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] items-center justify-items-center gap-x-24 gap-y-16 px-8 py-20",children:[n.jsx("div",{className:"col-start-2 row-start-1",children:n.jsx(g,{copy:o,placement:"top"})}),n.jsx("div",{className:"col-start-1 row-start-2",children:n.jsx(g,{copy:o,placement:"left"})}),n.jsx("div",{className:"col-start-3 row-start-2",children:n.jsx(g,{copy:o,placement:"right"})}),n.jsx("div",{className:"col-start-2 row-start-3",children:n.jsx(g,{copy:o,placement:"bottom"})})]})}},u={name:"Alignements",args:{content:null,children:n.jsx("span",{})},parameters:c(l,`<>
    <Popover placement="top-start" aria-label="Options" content={<p>Aligné au début</p>}>
        <Button variant="secondary">Haut début</Button>
    </Popover>
    <Popover placement="top-end" aria-label="Options" content={<p>Aligné à la fin</p>}>
        <Button variant="secondary">Haut fin</Button>
    </Popover>
</>`),render:(t,{globals:e})=>{const o=s(p(e.locale));return n.jsxs("div",{className:"flex items-end justify-center gap-24 px-8 pb-8 pt-24",children:[n.jsx(a,{placement:"top-start",defaultOpen:!0,"aria-label":o.topStart,content:n.jsx("p",{children:o.alignStart}),children:n.jsx(r,{variant:"secondary",children:o.topStart})}),n.jsx(a,{placement:"top-end",defaultOpen:!0,"aria-label":o.topEnd,content:n.jsx("p",{children:o.alignEnd}),children:n.jsx(r,{variant:"secondary",children:o.topEnd})})]})}},m={name:"Contrôlé",args:{content:null,children:n.jsx("span",{})},parameters:G(I,`const [open, setOpen] = useState(false);
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
);`),render:(t,{globals:e})=>{const o=s(p(e.locale));return n.jsx(K,{openLabel:o.open,action:o.action,options:o.options})}},v={name:"Sans piège de focus",args:{content:null,children:n.jsx("span",{})},parameters:c(l,`<Popover aria-label="Plus d’infos" content={<p>Plus d’infos</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(t,{globals:e})=>{const o=s(p(e.locale));return n.jsx(a,{"aria-label":o.more,content:n.jsx("p",{children:o.more}),children:n.jsx(r,{variant:"secondary",children:o.open})})}},y={name:"Collision",args:{content:null,children:n.jsx("span",{})},parameters:c(l,`<Popover placement="top" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(t,{globals:e})=>{const o=s(p(e.locale));return n.jsx("div",{className:"flex h-40 items-start justify-start",children:n.jsx(a,{placement:"top",defaultOpen:!0,"aria-label":o.options,content:n.jsx("p",{children:o.options}),children:n.jsx(r,{variant:"secondary",children:o.open})})})}},P={name:"Désactivé",args:{content:null,children:n.jsx("span",{})},parameters:c(l,`<Popover disabled aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(t,{globals:e})=>{const o=s(p(e.locale));return n.jsx(a,{disabled:!0,"aria-label":o.options,content:n.jsx("p",{children:o.options}),children:n.jsx(r,{variant:"secondary",children:o.open})})}};function g({copy:t,placement:e}){return n.jsx(a,{placement:e,defaultOpen:!0,"aria-label":t[e],content:n.jsx("p",{children:t.options}),children:n.jsx(r,{variant:"secondary",children:t[e]})})}function K({openLabel:t,action:e,options:o}){const[M,R]=k.useState(!1);return n.jsx(a,{open:M,onOpenChange:R,trapFocus:!0,"aria-label":o,content:n.jsx(r,{variant:"primary",children:e}),children:n.jsx(r,{variant:"secondary",children:t})})}var b,x,B;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var f,h,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Placement',
  args: {
    content: null,
    children: <span />
  },
  parameters: componentSource(importPopover, \`<Popover placement="top" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Haut</Button>
</Popover>\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <div className="mx-auto grid w-max grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] items-center justify-items-center gap-x-24 gap-y-16 px-8 py-20">
        <div className="col-start-2 row-start-1">
          <DirectedPopover copy={copy} placement="top" />
        </div>
        <div className="col-start-1 row-start-2">
          <DirectedPopover copy={copy} placement="left" />
        </div>
        <div className="col-start-3 row-start-2">
          <DirectedPopover copy={copy} placement="right" />
        </div>
        <div className="col-start-2 row-start-3">
          <DirectedPopover copy={copy} placement="bottom" />
        </div>
      </div>;
  }
}`,...(j=(h=d.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var O,S,C;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Alignements',
  args: {
    content: null,
    children: <span />
  },
  parameters: componentSource(importPopover, \`<>
    <Popover placement="top-start" aria-label="Options" content={<p>Aligné au début</p>}>
        <Button variant="secondary">Haut début</Button>
    </Popover>
    <Popover placement="top-end" aria-label="Options" content={<p>Aligné à la fin</p>}>
        <Button variant="secondary">Haut fin</Button>
    </Popover>
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <div className="flex items-end justify-center gap-24 px-8 pb-8 pt-24">
        <Popover placement="top-start" defaultOpen aria-label={copy.topStart} content={<p>{copy.alignStart}</p>}>
          <Button variant="secondary">{copy.topStart}</Button>
        </Popover>
        <Popover placement="top-end" defaultOpen aria-label={copy.topEnd} content={<p>{copy.alignEnd}</p>}>
          <Button variant="secondary">{copy.topEnd}</Button>
        </Popover>
      </div>;
  }
}`,...(C=(S=u.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var _,N,w;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(N=m.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var D,F,A;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(F=v.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var L,E,H;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(E=y.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var T,W,z;P.parameters={...P.parameters,docs:{...(T=P.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(z=(W=P.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const Q=["Default","Placement","Alignments","Controlled","WithoutFocusTrap","Collision","Disabled"],$=Object.freeze(Object.defineProperty({__proto__:null,Alignments:u,Collision:y,Controlled:m,Default:i,Disabled:P,Placement:d,WithoutFocusTrap:v,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{u as A,m as C,i as D,$ as P,v as W,d as a,P as b,y as c};
