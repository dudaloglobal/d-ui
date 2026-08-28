import{r as s,j as r,f as B,ab as l,d as c}from"./iframe-yMf_EFOX.js";import{F as te}from"./arg-types-IeEEafH1.js";import{c as d}from"./docs-source-C_O40UCi.js";import{B as ie}from"./Button-Dk2F59Uz.js";import{I as i}from"./Icon-By4nCEDJ.js";import{I as le}from"./IconButton-Da82d4hJ.js";import{H as ce}from"./Heading-DWjaWK2b.js";import{T as de}from"./Text-COPhsueu.js";import{D as me,b as ue,C as pe,c as fe,d as ge,e as ve}from"./feedbackSurface-CwsqOGKw.js";function Ae({title:e,titleId:n,...a},o){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":n},a),e?s.createElement("title",{id:n},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const ye=s.forwardRef(Ae);function be({title:e,titleId:n,...a},o){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":n},a),e?s.createElement("title",{id:n},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))}const Z=s.forwardRef(be);function xe({title:e,titleId:n,...a},o){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":n},a),e?s.createElement("title",{id:n},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))}const y=s.forwardRef(xe);function he({title:e,titleId:n,...a},o){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":n},a),e?s.createElement("title",{id:n},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const we=s.forwardRef(he);function t({variant:e="info",title:n,icon:a,hasBackground:o=!0,actions:h,dismissible:H=!1,onDismiss:b,dismissLabel:$="Dismiss alert",open:w,defaultOpen:P=!0,onOpenChange:x,className:X,style:G,children:U,...J}){const[K,Q]=s.useState(P),Y=w!==void 0,ee=w??K,re=ge(e),ae=H&&e==="info"&&o,ne=j=>{Y||Q(j),x==null||x(j),b==null||b()};if(!ee)return null;const se=o?fe(e):void 0,oe=ve(e);return r.jsxs("div",{...J,role:re,className:B("flex items-start gap-3 text-start",o?"rounded-md border px-3 py-2":"px-0 py-1",X),style:{...se,...G},children:[r.jsx("span",{className:B("inline-flex shrink-0 pt-0.5",oe),children:a??r.jsx(me,{variant:e})}),r.jsxs("div",{className:"min-w-0 flex-1",children:[n?r.jsx(ce,{level:3,size:"body",className:"mb-0.5 font-medium",children:n}):null,r.jsx(de,{as:"div",size:"body-sm",color:ue(e),children:U}),h?r.jsx("div",{className:"mt-2 flex flex-wrap items-center gap-2",children:h}):null]}),ae?r.jsx(le,{size:"sm",variant:"ghost",icon:r.jsx(pe,{}),"aria-label":$,onClick:()=>ne(!1),className:"shrink-0"}):null]})}t.__docgenInfo={description:"Message inline permanent (LumApps Message). Distinct de `Notification` et de Toast (DS-033).",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},hasBackground:{required:!1,tsType:{name:"boolean"},description:"Fond teinté et bordure. `false` = variante « trimmed » LumApps Message.",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:"Boutons ou liens (`Button`, `Link`)."},dismissible:{required:!1,tsType:{name:"boolean"},description:"Affiche le bouton fermer. LumApps Message : seulement `info` + `hasBackground`.\nLes autres combinaisons ignorent `dismissible`.",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dismissLabel:{required:!1,tsType:{name:"string"},description:"Fallback anglais : `Dismiss alert`.",defaultValue:{value:"'Dismiss alert'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Ouvert contrôlé. Sinon l’alerte se masque après fermeture."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const m="import { Alert, Icon } from 'd-ui';",je={title:"Components/Alert",component:t,argTypes:te},u={name:"Par défaut",args:{variant:"info"},parameters:d(m,`<Alert variant="info">
    Les notes seront visibles après la correction.
</Alert>`),render:(e,{globals:n})=>{const a=l(c(n.locale));return r.jsx(t,{...e,children:a.infoBody})}},p={name:"Variantes",parameters:d(m,`<Alert variant="info">…</Alert>
<Alert variant="success">…</Alert>
<Alert variant="warning">…</Alert>
<Alert variant="danger">…</Alert>`),render:(e,{globals:n})=>{const a=l(c(n.locale));return r.jsxs("div",{className:"flex flex-col gap-3",children:[r.jsx(t,{...e,variant:"info",icon:r.jsx(i,{as:y,size:"md"}),children:a.infoBody}),r.jsx(t,{...e,variant:"success",icon:r.jsx(i,{as:ye,size:"md"}),children:a.successBody}),r.jsx(t,{...e,variant:"warning",icon:r.jsx(i,{as:Z,size:"md"}),children:a.warningBody}),r.jsx(t,{...e,variant:"danger",icon:r.jsx(i,{as:we,size:"md"}),children:a.dangerBody})]})}},f={name:"Avec titre",args:{variant:"warning"},parameters:d(m,`<Alert variant="warning" title="Session expirée">
    Reconnectez-vous pour continuer.
</Alert>`),render:(e,{globals:n})=>{const a=l(c(n.locale));return r.jsx(t,{...e,title:a.sessionTitle,icon:r.jsx(i,{as:Z,size:"md"}),children:a.sessionBody})}},g={name:"Fermable",args:{variant:"info",dismissible:!0},parameters:d(m,`<Alert variant="info" dismissible dismissLabel="Fermer l’alerte">
    Nouvelle fonctionnalité disponible.
</Alert>`),render:(e,{globals:n})=>{const a=l(c(n.locale));return r.jsx(t,{...e,dismissLabel:a.dismiss,icon:r.jsx(i,{as:y,size:"md"}),children:a.featureBody})}},v={name:"Sans fond",args:{variant:"info",hasBackground:!1},parameters:d(m,`<Alert variant="info" hasBackground={false}>
    Conseil sans fond teinté (LumApps Message trimmed).
</Alert>`),render:(e,{globals:n})=>{const a=l(c(n.locale));return r.jsx(t,{...e,icon:r.jsx(i,{as:y,size:"md"}),children:a.trimmedBody})}},A={name:"Avec action",args:{variant:"info"},parameters:d(m,`<Alert
    variant="info"
    actions={<Button size="sm" variant="ghost">En savoir plus</Button>}
>
    Nouvelle fonctionnalité disponible.
</Alert>`),render:(e,{globals:n})=>{const a=l(c(n.locale));return r.jsx(t,{...e,icon:r.jsx(i,{as:y,size:"md"}),actions:r.jsx(ie,{size:"sm",variant:"ghost",children:a.learnMore}),children:a.featureBody})}};var k,L,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    variant: 'info'
  },
  parameters: componentSource(importAlert, \`<Alert variant="info">
    Les notes seront visibles après la correction.
</Alert>\`),
  render: (args, {
    globals
  }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return <Alert {...args}>{copy.infoBody}</Alert>;
  }
}`,...(I=(L=u.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var C,T,z;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Variantes',
  parameters: componentSource(importAlert, \`<Alert variant="info">…</Alert>
<Alert variant="success">…</Alert>
<Alert variant="warning">…</Alert>
<Alert variant="danger">…</Alert>\`),
  render: (args, {
    globals
  }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-3">
        <Alert {...args} variant="info" icon={<Icon as={InformationCircleIcon} size="md" />}>
          {copy.infoBody}
        </Alert>
        <Alert {...args} variant="success" icon={<Icon as={CheckCircleIcon} size="md" />}>
          {copy.successBody}
        </Alert>
        <Alert {...args} variant="warning" icon={<Icon as={ExclamationTriangleIcon} size="md" />}>
          {copy.warningBody}
        </Alert>
        <Alert {...args} variant="danger" icon={<Icon as={XCircleIcon} size="md" />}>
          {copy.dangerBody}
        </Alert>
      </div>;
  }
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var S,E,N;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Avec titre',
  args: {
    variant: 'warning'
  },
  parameters: componentSource(importAlert, \`<Alert variant="warning" title="Session expirée">
    Reconnectez-vous pour continuer.
</Alert>\`),
  render: (args, {
    globals
  }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return <Alert {...args} title={copy.sessionTitle} icon={<Icon as={ExclamationTriangleIcon} size="md" />}>
        {copy.sessionBody}
      </Alert>;
  }
}`,...(N=(E=f.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var M,R,q;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Fermable',
  args: {
    variant: 'info',
    dismissible: true
  },
  parameters: componentSource(importAlert, \`<Alert variant="info" dismissible dismissLabel="Fermer l’alerte">
    Nouvelle fonctionnalité disponible.
</Alert>\`),
  render: (args, {
    globals
  }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return <Alert {...args} dismissLabel={copy.dismiss} icon={<Icon as={InformationCircleIcon} size="md" />}>
        {copy.featureBody}
      </Alert>;
  }
}`,...(q=(R=g.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var F,V,D;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Sans fond',
  args: {
    variant: 'info',
    hasBackground: false
  },
  parameters: componentSource(importAlert, \`<Alert variant="info" hasBackground={false}>
    Conseil sans fond teinté (LumApps Message trimmed).
</Alert>\`),
  render: (args, {
    globals
  }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return <Alert {...args} icon={<Icon as={InformationCircleIcon} size="md" />}>
        {copy.trimmedBody}
      </Alert>;
  }
}`,...(D=(V=v.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var O,W,_;A.parameters={...A.parameters,docs:{...(O=A.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Avec action',
  args: {
    variant: 'info'
  },
  parameters: componentSource(importAlert, \`<Alert
    variant="info"
    actions={<Button size="sm" variant="ghost">En savoir plus</Button>}
>
    Nouvelle fonctionnalité disponible.
</Alert>\`),
  render: (args, {
    globals
  }) => {
    const copy = alertCopy(docsLocale(globals.locale));
    return <Alert {...args} icon={<Icon as={InformationCircleIcon} size="md" />} actions={<Button size="sm" variant="ghost">
            {copy.learnMore}
          </Button>}>
        {copy.featureBody}
      </Alert>;
  }
}`,...(_=(W=A.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const Be=["Default","Variants","WithTitle","Dismissible","Trimmed","WithAction"],Me=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Dismissible:g,Trimmed:v,Variants:p,WithAction:A,WithTitle:f,__namedExportsOrder:Be,default:je},Symbol.toStringTag,{value:"Module"}));export{Me as A,u as D,v as T,p as V,f as W,g as a,A as b};
