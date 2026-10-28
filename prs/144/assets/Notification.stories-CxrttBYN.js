import{w as s,d as f,j as n}from"./iframe-CF-6NDtP.js";import{o as C}from"./arg-types--G9daUKm.js";import{c as l}from"./docs-source-C_O40UCi.js";import{N as a}from"./Notification-B3b1SKiq.js";const d="import { Notification } from '@dudaloglobal/d-ui';";function p({children:o}){return n.jsx("div",{className:"flex w-full items-end justify-end rounded-md border border-border-subtle bg-surface-muted/40 p-4",children:o})}const h={title:"Components/Notification",component:a,argTypes:C,args:{children:"Message"}},e={name:"Par défaut",args:{variant:"info"},parameters:l(d,`<Notification variant="info">
    Les notes seront publiées demain.
</Notification>`),render:(o,{globals:t})=>{const i=s(f(t.locale));return n.jsx(p,{children:n.jsx(a,{...o,children:i.infoBody})})}},r={name:"Variantes",args:{children:"Message"},parameters:l(d,`<Notification variant="info">…</Notification>
<Notification variant="success">…</Notification>
<Notification variant="warning">…</Notification>
<Notification variant="danger">…</Notification>`),render:(o,{globals:t})=>{const i=s(f(t.locale));return n.jsx(p,{children:n.jsxs("div",{className:"flex flex-col items-end gap-3",children:[n.jsx(a,{...o,variant:"info",children:i.infoBody}),n.jsx(a,{...o,variant:"success",children:i.successBody}),n.jsx(a,{...o,variant:"warning",children:i.warningBody}),n.jsx(a,{...o,variant:"danger",children:i.dangerBody})]})})}},c={name:"Avec action",args:{variant:"info"},parameters:l(d,`<Notification
    variant="info"
    actionLabel="Voir les détails"
    onActionClick={() => {}}
>
    Nouvelle version disponible.
</Notification>`),render:(o,{globals:t})=>{const i=s(f(t.locale));return n.jsx(p,{children:n.jsx(a,{...o,actionLabel:i.action,onActionClick:()=>{},children:i.callbackBody})})}},B=["Default","Variants","WithAction"];var m,N,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    variant: 'info'
  },
  parameters: componentSource(importNotification, \`<Notification variant="info">
    Les notes seront publiées demain.
</Notification>\`),
  render: (args, {
    globals
  }) => {
    const copy = notificationCopy(docsLocale(globals.locale));
    return <NotificationCorner>
        <Notification {...args}>{copy.infoBody}</Notification>
      </NotificationCorner>;
  }
}`,...(u=(N=e.parameters)==null?void 0:N.docs)==null?void 0:u.source}}};var g,v,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Variantes',
  args: {
    children: 'Message'
  },
  parameters: componentSource(importNotification, \`<Notification variant="info">…</Notification>
<Notification variant="success">…</Notification>
<Notification variant="warning">…</Notification>
<Notification variant="danger">…</Notification>\`),
  render: (args, {
    globals
  }) => {
    const copy = notificationCopy(docsLocale(globals.locale));
    return <NotificationCorner>
        <div className="flex flex-col items-end gap-3">
          <Notification {...args} variant="info">
            {copy.infoBody}
          </Notification>
          <Notification {...args} variant="success">
            {copy.successBody}
          </Notification>
          <Notification {...args} variant="warning">
            {copy.warningBody}
          </Notification>
          <Notification {...args} variant="danger">
            {copy.dangerBody}
          </Notification>
        </div>
      </NotificationCorner>;
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,x,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Avec action',
  args: {
    variant: 'info'
  },
  parameters: componentSource(importNotification, \`<Notification
    variant="info"
    actionLabel="Voir les détails"
    onActionClick={() => {}}
>
    Nouvelle version disponible.
</Notification>\`),
  render: (args, {
    globals
  }) => {
    const copy = notificationCopy(docsLocale(globals.locale));
    return <NotificationCorner>
        <Notification {...args} actionLabel={copy.action} onActionClick={() => undefined}>
          {copy.callbackBody}
        </Notification>
      </NotificationCorner>;
  }
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const V=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Variants:r,WithAction:c,__namedExportsOrder:B,default:h},Symbol.toStringTag,{value:"Module"}));export{e as D,V as N,r as V,c as W};
