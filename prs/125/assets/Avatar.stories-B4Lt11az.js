import{c as l,d as p,j as r}from"./iframe-3cp6bBDu.js";import{a as ea,b as ra}from"./arg-types-Be6NSCGb.js";import{c as n}from"./docs-source-C_O40UCi.js";import{A as o,a as sa}from"./Avatar-CXpXd09Z.js";import{U as oa,a as na}from"./uiScale-DBauGOvS.js";const c="import { Avatar, AvatarGroup } from 'd-ui';";function m(e,s){const a=`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect fill="${e}" width="96" height="96"/><text x="50%" y="54%" fill="#fff" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="36">${s}</text></svg>`;return`data:image/svg+xml,${encodeURIComponent(a)}`}const ca=na,ta={title:"Components/Avatar",component:o,argTypes:ra},i={name:"Par défaut",parameters:n(c,'<Avatar name="Ada Lovelace" src="/portrait.png" />'),render:(e,{globals:s})=>{const a=l(p(s.locale));return r.jsx(o,{...e,name:a.ada,src:m("#0f5c4c",a.adaInitial)})}},d={name:"Photo",parameters:n(c,'<Avatar name="Ada Lovelace" src="/portrait.png" />'),render:(e,{globals:s})=>{const a=l(p(s.locale));return r.jsx(o,{...e,name:a.ada,src:m("#0f5c4c",a.adaInitial)})}},v={name:"Initiales",parameters:n(c,'<Avatar name="Ada Lovelace" />'),render:(e,{globals:s})=>{const a=l(p(s.locale));return r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsx(o,{...e,name:a.ada}),r.jsx(o,{...e,name:a.grace}),r.jsx(o,{...e,name:a.katherine})]})}},A={name:"Sans image",parameters:n(c,"<Avatar />"),render:e=>r.jsx(o,{...e})},u={name:"Tailles",parameters:n(c,`<Avatar size="xxs" name="Ada Lovelace" />
<Avatar size="xs" name="Ada Lovelace" />
<Avatar size="s" name="Ada Lovelace" />
<Avatar size="m" name="Ada Lovelace" />
<Avatar size="l" name="Ada Lovelace" />
<Avatar size="xl" name="Ada Lovelace" />
<Avatar size="xxl" name="Ada Lovelace" />`),render:(e,{globals:s})=>{const a=l(p(s.locale));return r.jsx("div",{className:"flex flex-wrap items-end gap-3",children:ca.map(t=>r.jsx(o,{...e,size:t,name:a.ada},t))})}},g={name:"Couleurs",parameters:n(c,`<Avatar color="brand" name="Ada Lovelace" />
<Avatar color="success" name="Ada Lovelace" />
<Avatar color="warning" name="Ada Lovelace" />`),render:(e,{globals:s})=>{const a=l(p(s.locale));return r.jsx("div",{className:"flex flex-wrap items-center gap-3",children:oa.map(t=>r.jsx(o,{...e,color:t,name:a.ada},t))})}},y={name:"Carré",parameters:n(c,'<Avatar square name="Ada Lovelace" src="/portrait.png" />'),render:(e,{globals:s})=>{const a=l(p(s.locale));return r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsx(o,{...e,square:!0,name:a.ada,src:m("#0f5c4c",a.adaInitial)}),r.jsx(o,{...e,square:!0,name:a.grace})]})}},x={name:"Présence",parameters:n(c,`<Avatar name="Ada Lovelace" presence="online" presenceLabel="En ligne" />
<Avatar name="Grace Hopper" presence="busy" presenceLabel="Occupé" />`),render:(e,{globals:s})=>{const a=l(p(s.locale)),t=[{presence:"online",label:a.online},{presence:"away",label:a.away},{presence:"busy",label:a.busy},{presence:"offline",label:a.offline}];return r.jsx("div",{className:"flex flex-wrap items-center gap-3",children:t.map(({presence:L,label:S})=>r.jsx(o,{...e,name:a.ada,presence:L,presenceLabel:S},L))})}},f={name:"À côté d’un nom",parameters:n(c,`<div className="flex items-center gap-3">
    <Avatar name="Ada Lovelace" src="/portrait.png" alt="" />
    <span>Ada Lovelace</span>
</div>`),render:(e,{globals:s})=>{const a=l(p(s.locale));return r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(o,{...e,name:a.ada,alt:"",src:m("#0f5c4c",a.adaInitial)}),r.jsx("span",{children:a.ada})]})}},b={name:"Groupe",argTypes:ea,args:{max:3,size:"m"},parameters:n(c,`<AvatarGroup max={3} label="Équipe">
    <Avatar name="Ada Lovelace" />
    <Avatar name="Grace Hopper" />
    <Avatar name="Katherine Johnson" />
    <Avatar name="Annie Easley" />
</AvatarGroup>`),render:(e,{globals:s})=>{const a=l(p(s.locale)),{overflowLabel:t,label:L,max:S,size:Y}=e;return r.jsxs(sa,{max:S,size:Y,label:L??a.groupLabel,overflowLabel:t??(aa=>a.overflow(aa)),children:[r.jsx(o,{name:a.ada,src:m("#0f5c4c",a.adaInitial)}),r.jsx(o,{name:a.grace,src:m("#175cd3",a.graceInitial)}),r.jsx(o,{name:a.katherine,src:m("#6b21a8",a.katherineInitial)}),r.jsx(o,{name:a.annie})]})}};var w,h,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importAvatar, \`<Avatar name="Ada Lovelace" src="/portrait.png" />\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return <Avatar {...args} name={copy.ada} src={portraitUri('#0f5c4c', copy.adaInitial)} />;
  }
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var I,z,C;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Photo',
  parameters: componentSource(importAvatar, \`<Avatar name="Ada Lovelace" src="/portrait.png" />\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return <Avatar {...args} name={copy.ada} src={portraitUri('#0f5c4c', copy.adaInitial)} />;
  }
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var G,N,U;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(N=v.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var k,P,q;A.parameters={...A.parameters,docs:{...(k=A.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Sans image',
  parameters: componentSource(importAvatar, '<Avatar />'),
  render: args => <Avatar {...args} />
}`,...(q=(P=A.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var E,O,T;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importAvatar, \`<Avatar size="xxs" name="Ada Lovelace" />
<Avatar size="xs" name="Ada Lovelace" />
<Avatar size="s" name="Ada Lovelace" />
<Avatar size="m" name="Ada Lovelace" />
<Avatar size="l" name="Ada Lovelace" />
<Avatar size="xl" name="Ada Lovelace" />
<Avatar size="xxl" name="Ada Lovelace" />\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-end gap-3">
        {SIZES.map(size => <Avatar key={size} {...args} size={size} name={copy.ada} />)}
      </div>;
  }
}`,...(T=(O=u.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var _,D,H;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Couleurs',
  parameters: componentSource(importAvatar, \`<Avatar color="brand" name="Ada Lovelace" />
<Avatar color="success" name="Ada Lovelace" />
<Avatar color="warning" name="Ada Lovelace" />\`),
  render: (args, {
    globals
  }) => {
    const copy = avatarCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-3">
        {UI_COLORS.map(color => <Avatar key={color} {...args} color={color} name={copy.ada} />)}
      </div>;
  }
}`,...(H=(D=g.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var R,F,Z;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Z=(F=y.parameters)==null?void 0:F.docs)==null?void 0:Z.source}}};var $,J,K;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,B,Q;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Q=(B=f.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var V,W,X;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Groupe',
  argTypes: avatarGroupArgTypes,
  args: {
    max: 3,
    size: 'm'
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
}`,...(X=(W=b.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const la=["Default","Image","Initials","Fallback","Sizes","Colors","Square","Presence","Decorative","Group"],Aa=Object.freeze(Object.defineProperty({__proto__:null,Colors:g,Decorative:f,Default:i,Fallback:A,Group:b,Image:d,Initials:v,Presence:x,Sizes:u,Square:y,__namedExportsOrder:la,default:ta},Symbol.toStringTag,{value:"Module"}));export{Aa as A,g as C,i as D,A as F,b as G,d as I,x as P,u as S,v as a,y as b,f as c};
