import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,c as a,n as o}from"./docs-locale-DxRsX5eR.js";import{_ as s,h as c,i as l,n as u,r as d}from"./docs-source-5snetGJm.js";import{n as f,t as p}from"./Button-BlIgtYyL.js";import{n as m,t as h}from"./Popover-BKa_wfW9.js";var g=t({Alignments:()=>E,Collision:()=>k,Controlled:()=>D,Default:()=>w,Disabled:()=>A,Placement:()=>T,WithoutFocusTrap:()=>O,__namedExportsOrder:()=>j,default:()=>C});function _({copy:e,placement:t}){return(0,b.jsx)(h,{placement:t,defaultOpen:!0,"aria-label":e[t],content:(0,b.jsx)(`p`,{children:e.options}),children:(0,b.jsx)(p,{variant:`secondary`,children:e[t]})})}function v({openLabel:e,action:t,options:n}){let[r,i]=(0,y.useState)(!1);return(0,b.jsx)(h,{open:r,onOpenChange:i,trapFocus:!0,"aria-label":n,content:(0,b.jsx)(p,{variant:`primary`,children:t}),children:(0,b.jsx)(p,{variant:`secondary`,children:e})})}var y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{y=n(),c(),i(),l(),f(),m(),b=r(),x=`import { Button, Popover } from 'd-ui';`,S=`import { useState } from 'react';
import { Button, Popover } from 'd-ui';`,C={title:`Components/Popover`,component:h,argTypes:s,parameters:{controls:{include:[`placement`,`trapFocus`,`disabled`]}}},w={name:`Par défaut`,args:{content:null,children:(0,b.jsx)(`span`,{})},parameters:u(x,`<Popover
    trapFocus
    aria-label="Options"
    content={
        <Button variant="primary">Confirmer</Button>
    }
>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,b.jsx)(h,{...e,trapFocus:!0,"aria-label":n.options,content:(0,b.jsx)(p,{variant:`primary`,children:n.action}),children:(0,b.jsx)(p,{variant:`secondary`,children:n.open})})}},T={name:`Placement`,args:{content:null,children:(0,b.jsx)(`span`,{})},parameters:u(x,`<Popover placement="top" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Haut</Button>
</Popover>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,b.jsxs)(`div`,{className:`mx-auto grid w-max grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] items-center justify-items-center gap-x-24 gap-y-16 px-8 py-20`,children:[(0,b.jsx)(`div`,{className:`col-start-2 row-start-1`,children:(0,b.jsx)(_,{copy:n,placement:`top`})}),(0,b.jsx)(`div`,{className:`col-start-1 row-start-2`,children:(0,b.jsx)(_,{copy:n,placement:`left`})}),(0,b.jsx)(`div`,{className:`col-start-3 row-start-2`,children:(0,b.jsx)(_,{copy:n,placement:`right`})}),(0,b.jsx)(`div`,{className:`col-start-2 row-start-3`,children:(0,b.jsx)(_,{copy:n,placement:`bottom`})})]})}},E={name:`Alignements`,args:{content:null,children:(0,b.jsx)(`span`,{})},parameters:u(x,`<>
    <Popover placement="top-start" aria-label="Options" content={<p>Aligné au début</p>}>
        <Button variant="secondary">Haut début</Button>
    </Popover>
    <Popover placement="top-end" aria-label="Options" content={<p>Aligné à la fin</p>}>
        <Button variant="secondary">Haut fin</Button>
    </Popover>
</>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,b.jsxs)(`div`,{className:`flex items-end justify-center gap-24 px-8 pb-8 pt-24`,children:[(0,b.jsx)(h,{placement:`top-start`,defaultOpen:!0,"aria-label":n.topStart,content:(0,b.jsx)(`p`,{children:n.alignStart}),children:(0,b.jsx)(p,{variant:`secondary`,children:n.topStart})}),(0,b.jsx)(h,{placement:`top-end`,defaultOpen:!0,"aria-label":n.topEnd,content:(0,b.jsx)(`p`,{children:n.alignEnd}),children:(0,b.jsx)(p,{variant:`secondary`,children:n.topEnd})})]})}},D={name:`Contrôlé`,args:{content:null,children:(0,b.jsx)(`span`,{})},parameters:d(S,`const [open, setOpen] = useState(false);
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
);`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,b.jsx)(v,{openLabel:n.open,action:n.action,options:n.options})}},O={name:`Sans piège de focus`,args:{content:null,children:(0,b.jsx)(`span`,{})},parameters:u(x,`<Popover aria-label="Plus d’infos" content={<p>Plus d’infos</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,b.jsx)(h,{"aria-label":n.more,content:(0,b.jsx)(`p`,{children:n.more}),children:(0,b.jsx)(p,{variant:`secondary`,children:n.open})})}},k={name:`Collision`,args:{content:null,children:(0,b.jsx)(`span`,{})},parameters:u(x,`<Popover placement="top" aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,b.jsx)(`div`,{className:`flex h-40 items-start justify-start`,children:(0,b.jsx)(h,{placement:`top`,defaultOpen:!0,"aria-label":n.options,content:(0,b.jsx)(`p`,{children:n.options}),children:(0,b.jsx)(p,{variant:`secondary`,children:n.open})})})}},A={name:`Désactivé`,args:{content:null,children:(0,b.jsx)(`span`,{})},parameters:u(x,`<Popover disabled aria-label="Options" content={<p>Options</p>}>
    <Button variant="secondary">Ouvrir</Button>
</Popover>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,b.jsx)(h,{disabled:!0,"aria-label":n.options,content:(0,b.jsx)(`p`,{children:n.options}),children:(0,b.jsx)(p,{variant:`secondary`,children:n.open})})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Placement`,`Alignments`,`Controlled`,`WithoutFocusTrap`,`Collision`,`Disabled`]})))()}export{A as a,O as c,w as i,M as l,k as n,T as o,D as r,g as s,E as t};