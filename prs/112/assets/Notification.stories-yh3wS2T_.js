import{r as R,j as i,f as W,Z as d,d as f}from"./iframe-yMf_EFOX.js";import{q as F}from"./arg-types-IeEEafH1.js";import{c as u}from"./docs-source-C_O40UCi.js";import{B as P}from"./Button-Dk2F59Uz.js";import{I as G}from"./IconButton-Da82d4hJ.js";import{T as U}from"./Text-COPhsueu.js";import{D as Z,f as H,C as J,a as K}from"./feedbackSurface-CwsqOGKw.js";function a({variant:e="info",icon:n,dismissLabel:o="Dismiss notification",actionLabel:N,onActionClick:v,dismissible:L=!1,onDismiss:c,open:g,defaultOpen:S=!0,onOpenChange:l,className:A,style:q,children:V,..._}){const[D,I]=R.useState(S),z=g!==void 0,M=g??D,O=y=>{z||I(y),l==null||l(y),c==null||c()};if(!M)return null;const E=!!(N&&v);return i.jsxs("div",{..._,role:"alert",className:W("flex max-w-md min-h-[3.25rem] items-center overflow-hidden rounded text-start",A),style:{...K(),...q},children:[i.jsx("span",{className:"inline-flex size-[3.25rem] shrink-0 items-center justify-center",style:H(e),"aria-hidden":"true",children:n??i.jsx(Z,{variant:e})}),i.jsx("div",{className:"min-w-0 flex-1 px-4",children:i.jsx(U,{as:"div",size:"body-sm",children:V})}),E?i.jsx("div",{className:"shrink-0 pe-2",children:i.jsx(P,{size:"sm",variant:"secondary",onClick:v,children:N})}):null,L?i.jsx(G,{size:"sm",variant:"ghost",icon:i.jsx(J,{}),"aria-label":o,onClick:()=>O(!1),className:"me-1 shrink-0"}):null]})}a.__docgenInfo={description:"Toast LumApps (coin inférieur droit). La file / auto-dismiss relève de Toast (DS-033).",methods:[],displayName:"Notification",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},dismissLabel:{required:!1,tsType:{name:"string"},description:"Fallback anglais : `Dismiss notification`.",defaultValue:{value:"'Dismiss notification'",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"Libellé du bouton d’action (LumApps « Info with callback »)."},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:"LumApps n’affiche pas de fermeture manuelle ; réservé aux cas contrôlés.",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const m="import { Notification } from 'd-ui';";function p({children:e}){return i.jsx("div",{className:"flex w-full items-end justify-end rounded-md border border-border-subtle bg-surface-muted/40 p-4",children:e})}const Q={title:"Components/Notification",component:a,argTypes:F,args:{children:"Message"}},t={name:"Par défaut",args:{variant:"info"},parameters:u(m,`<Notification variant="info">
    Les notes seront publiées demain.
</Notification>`),render:(e,{globals:n})=>{const o=d(f(n.locale));return i.jsx(p,{children:i.jsx(a,{...e,children:o.infoBody})})}},r={name:"Variantes",args:{children:"Message"},parameters:u(m,`<Notification variant="info">…</Notification>
<Notification variant="success">…</Notification>
<Notification variant="warning">…</Notification>
<Notification variant="danger">…</Notification>`),render:(e,{globals:n})=>{const o=d(f(n.locale));return i.jsx(p,{children:i.jsxs("div",{className:"flex flex-col items-end gap-3",children:[i.jsx(a,{...e,variant:"info",children:o.infoBody}),i.jsx(a,{...e,variant:"success",children:o.successBody}),i.jsx(a,{...e,variant:"warning",children:o.warningBody}),i.jsx(a,{...e,variant:"danger",children:o.dangerBody})]})})}},s={name:"Avec action",args:{variant:"info"},parameters:u(m,`<Notification
    variant="info"
    actionLabel="Voir les détails"
    onActionClick={() => {}}
>
    Nouvelle version disponible.
</Notification>`),render:(e,{globals:n})=>{const o=d(f(n.locale));return i.jsx(p,{children:i.jsx(a,{...e,actionLabel:o.action,onActionClick:()=>{},children:o.callbackBody})})}};var b,x,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,w,T;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(w=r.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var C,k,B;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const X=["Default","Variants","WithAction"],ti=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Variants:r,WithAction:s,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{t as D,ti as N,r as V,s as W};
