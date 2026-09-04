import{p as s,d as f,j as i}from"./iframe-PigAhWKn.js";import{j as C}from"./arg-types-BX1P8EmD.js";import{c as l}from"./docs-source-C_O40UCi.js";import{N as n}from"./Notification-mILrlOsp.js";const d="import { Notification } from 'd-ui';";function p({children:o}){return i.jsx("div",{className:"flex w-full items-end justify-end rounded-md border border-border-subtle bg-surface-muted/40 p-4",children:o})}const h={title:"Components/Notification",component:n,argTypes:C,args:{children:"Message"}},e={name:"Par défaut",args:{variant:"info"},parameters:l(d,`<Notification variant="info">
    Les notes seront publiées demain.
</Notification>`),render:(o,{globals:t})=>{const a=s(f(t.locale));return i.jsx(p,{children:i.jsx(n,{...o,children:a.infoBody})})}},r={name:"Variantes",args:{children:"Message"},parameters:l(d,`<Notification variant="info">…</Notification>
<Notification variant="success">…</Notification>
<Notification variant="warning">…</Notification>
<Notification variant="danger">…</Notification>`),render:(o,{globals:t})=>{const a=s(f(t.locale));return i.jsx(p,{children:i.jsxs("div",{className:"flex flex-col items-end gap-3",children:[i.jsx(n,{...o,variant:"info",children:a.infoBody}),i.jsx(n,{...o,variant:"success",children:a.successBody}),i.jsx(n,{...o,variant:"warning",children:a.warningBody}),i.jsx(n,{...o,variant:"danger",children:a.dangerBody})]})})}},c={name:"Avec action",args:{variant:"info"},parameters:l(d,`<Notification
    variant="info"
    actionLabel="Voir les détails"
    onActionClick={() => {}}
>
    Nouvelle version disponible.
</Notification>`),render:(o,{globals:t})=>{const a=s(f(t.locale));return i.jsx(p,{children:i.jsx(n,{...o,actionLabel:a.action,onActionClick:()=>{},children:a.callbackBody})})}};var m,N,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const B=["Default","Variants","WithAction"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Variants:r,WithAction:c,__namedExportsOrder:B,default:h},Symbol.toStringTag,{value:"Module"}));export{e as D,V as N,r as V,c as W};
