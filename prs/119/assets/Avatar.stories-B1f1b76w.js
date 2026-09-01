import{c,d as l,j as r}from"./iframe-C__29WIa.js";import{a as W,b as X}from"./arg-types-DvfBQmdr.js";import{c as n}from"./docs-source-C_O40UCi.js";import{A as o,a as Y}from"./Avatar-6XuwCaCJ.js";const t="import { Avatar, AvatarGroup } from 'd-ui';";function p(e,s){const a=`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect fill="${e}" width="96" height="96"/><text x="50%" y="54%" fill="#fff" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="36">${s}</text></svg>`;return`data:image/svg+xml,${encodeURIComponent(a)}`}const aa=["xs","sm","md","lg","xl"],ea={title:"Components/Avatar",component:o,argTypes:X},i={name:"Par défaut",parameters:n(t,'<Avatar name="Ada Lovelace" src="/portrait.png" />'),render:(e,{globals:s})=>{const a=c(l(s.locale));return r.jsx(o,{...e,name:a.ada,src:p("#0f5c4c",a.adaInitial)})}},d={name:"Photo",parameters:n(t,'<Avatar name="Ada Lovelace" src="/portrait.png" />'),render:(e,{globals:s})=>{const a=c(l(s.locale));return r.jsx(o,{...e,name:a.ada,src:p("#0f5c4c",a.adaInitial)})}},v={name:"Initiales",parameters:n(t,'<Avatar name="Ada Lovelace" />'),render:(e,{globals:s})=>{const a=c(l(s.locale));return r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsx(o,{...e,name:a.ada}),r.jsx(o,{...e,name:a.grace}),r.jsx(o,{...e,name:a.katherine})]})}},u={name:"Sans image",parameters:n(t,"<Avatar />"),render:e=>r.jsx(o,{...e})},A={name:"Tailles",parameters:n(t,`<Avatar size="xs" name="Ada Lovelace" />
<Avatar size="sm" name="Ada Lovelace" />
<Avatar size="md" name="Ada Lovelace" />
<Avatar size="lg" name="Ada Lovelace" />
<Avatar size="xl" name="Ada Lovelace" />`),render:(e,{globals:s})=>{const a=c(l(s.locale));return r.jsx("div",{className:"flex flex-wrap items-end gap-3",children:aa.map(m=>r.jsx(o,{...e,size:m,name:a.ada},m))})}},g={name:"Carré",parameters:n(t,'<Avatar square name="Ada Lovelace" src="/portrait.png" />'),render:(e,{globals:s})=>{const a=c(l(s.locale));return r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsx(o,{...e,square:!0,name:a.ada,src:p("#0f5c4c",a.adaInitial)}),r.jsx(o,{...e,square:!0,name:a.grace})]})}},y={name:"Présence",parameters:n(t,`<Avatar name="Ada Lovelace" presence="online" presenceLabel="En ligne" />
<Avatar name="Grace Hopper" presence="busy" presenceLabel="Occupé" />`),render:(e,{globals:s})=>{const a=c(l(s.locale)),m=[{presence:"online",label:a.online},{presence:"away",label:a.away},{presence:"busy",label:a.busy},{presence:"offline",label:a.offline}];return r.jsx("div",{className:"flex flex-wrap items-center gap-3",children:m.map(({presence:b,label:L})=>r.jsx(o,{...e,name:a.ada,presence:b,presenceLabel:L},b))})}},f={name:"À côté d’un nom",parameters:n(t,`<div className="flex items-center gap-3">
    <Avatar name="Ada Lovelace" src="/portrait.png" alt="" />
    <span>Ada Lovelace</span>
</div>`),render:(e,{globals:s})=>{const a=c(l(s.locale));return r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(o,{...e,name:a.ada,alt:"",src:p("#0f5c4c",a.adaInitial)}),r.jsx("span",{children:a.ada})]})}},x={name:"Groupe",argTypes:W,args:{max:3,size:"md"},parameters:n(t,`<AvatarGroup max={3} label="Équipe">
    <Avatar name="Ada Lovelace" />
    <Avatar name="Grace Hopper" />
    <Avatar name="Katherine Johnson" />
    <Avatar name="Annie Easley" />
</AvatarGroup>`),render:(e,{globals:s})=>{const a=c(l(s.locale)),{overflowLabel:m,label:b,max:L,size:Q}=e;return r.jsxs(Y,{max:L,size:Q,label:b??a.groupLabel,overflowLabel:m??(V=>a.overflow(V)),children:[r.jsx(o,{name:a.ada,src:p("#0f5c4c",a.adaInitial)}),r.jsx(o,{name:a.grace,src:p("#175cd3",a.graceInitial)}),r.jsx(o,{name:a.katherine,src:p("#6b21a8",a.katherineInitial)}),r.jsx(o,{name:a.annie})]})}};var S,h,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importAvatar, \`<Avatar name="Ada Lovelace" src="/portrait.png" />\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return <Avatar {...args} name={copy.ada} src={portraitUri('#0f5c4c', copy.adaInitial)} />;
  }
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var w,I,z;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Photo',
  parameters: componentSource(importAvatar, \`<Avatar name="Ada Lovelace" src="/portrait.png" />\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return <Avatar {...args} name={copy.ada} src={portraitUri('#0f5c4c', copy.adaInitial)} />;
  }
}`,...(z=(I=d.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var G,C,N;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Initiales',
  parameters: componentSource(importAvatar, \`<Avatar name="Ada Lovelace" />\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-3">
        <Avatar {...args} name={copy.ada} />
        <Avatar {...args} name={copy.grace} />
        <Avatar {...args} name={copy.katherine} />
      </div>;
  }
}`,...(N=(C=v.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var P,k,q;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Sans image',
  parameters: componentSource(importAvatar, '<Avatar />'),
  render: args => <Avatar {...args} />
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var T,U,E;A.parameters={...A.parameters,docs:{...(T=A.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importAvatar, \`<Avatar size="xs" name="Ada Lovelace" />
<Avatar size="sm" name="Ada Lovelace" />
<Avatar size="md" name="Ada Lovelace" />
<Avatar size="lg" name="Ada Lovelace" />
<Avatar size="xl" name="Ada Lovelace" />\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-end gap-3">
        {SIZES.map(size => <Avatar key={size} {...args} size={size} name={copy.ada} />)}
      </div>;
  }
}`,...(E=(U=A.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var _,D,O;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Carré',
  parameters: componentSource(importAvatar, \`<Avatar square name="Ada Lovelace" src="/portrait.png" />\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-3">
        <Avatar {...args} square name={copy.ada} src={portraitUri('#0f5c4c', copy.adaInitial)} />
        <Avatar {...args} square name={copy.grace} />
      </div>;
  }
}`,...(O=(D=g.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var H,F,$;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Présence',
  parameters: componentSource(importAvatar, \`<Avatar name="Ada Lovelace" presence="online" presenceLabel="En ligne" />
<Avatar name="Grace Hopper" presence="busy" presenceLabel="Occupé" />\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    const states: {
      presence: AvatarPresence;
      label: string;
    }[] = [{
      presence: 'online',
      label: copy.online
    }, {
      presence: 'away',
      label: copy.away
    }, {
      presence: 'busy',
      label: copy.busy
    }, {
      presence: 'offline',
      label: copy.offline
    }];
    return <div className="flex flex-wrap items-center gap-3">
        {states.map(({
        presence,
        label
      }) => <Avatar key={presence} {...args} name={copy.ada} presence={presence} presenceLabel={label} />)}
      </div>;
  }
}`,...($=(F=y.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var J,K,R;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'À côté d’un nom',
  parameters: componentSource(importAvatar, \`<div className="flex items-center gap-3">
    <Avatar name="Ada Lovelace" src="/portrait.png" alt="" />
    <span>Ada Lovelace</span>
</div>\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return <div className="flex items-center gap-3">
        <Avatar {...args} name={copy.ada} alt="" src={portraitUri('#0f5c4c', copy.adaInitial)} />
        <span>{copy.ada}</span>
      </div>;
  }
}`,...(R=(K=f.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var Z,M,B;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Groupe',
  argTypes: avatarGroupArgTypes,
  args: {
    max: 3,
    size: 'md'
  },
  parameters: componentSource(importAvatar, \`<AvatarGroup max={3} label="Équipe">
    <Avatar name="Ada Lovelace" />
    <Avatar name="Grace Hopper" />
    <Avatar name="Katherine Johnson" />
    <Avatar name="Annie Easley" />
</AvatarGroup>\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    const {
      overflowLabel,
      label,
      max,
      size
    } = args;
    return <AvatarGroup max={max} size={size} label={label ?? copy.groupLabel} overflowLabel={overflowLabel ?? (count => copy.overflow(count))}>
        <Avatar name={copy.ada} src={portraitUri('#0f5c4c', copy.adaInitial)} />
        <Avatar name={copy.grace} src={portraitUri('#175cd3', copy.graceInitial)} />
        <Avatar name={copy.katherine} src={portraitUri('#6b21a8', copy.katherineInitial)} />
        <Avatar name={copy.annie} />
      </AvatarGroup>;
  }
}`,...(B=(M=x.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const ra=["Default","Image","Initials","Fallback","Sizes","Square","Presence","Decorative","Group"],ca=Object.freeze(Object.defineProperty({__proto__:null,Decorative:f,Default:i,Fallback:u,Group:x,Image:d,Initials:v,Presence:y,Sizes:A,Square:g,__namedExportsOrder:ra,default:ea},Symbol.toStringTag,{value:"Module"}));export{ca as A,i as D,u as F,x as G,d as I,y as P,A as S,v as a,g as b,f as c};
