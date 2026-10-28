import{c as l,d as p,j as r}from"./iframe-BBJWnrUE.js";import{a as ea,b as ra}from"./arg-types--G9daUKm.js";import{c as o}from"./docs-source-C_O40UCi.js";import{A as s,a as na}from"./Avatar-bMCnLvJJ.js";import{U as sa,a as oa}from"./uiScale-DBauGOvS.js";const c="import { Avatar, AvatarGroup } from '@dudaloglobal/d-ui';";function m(e,n){const a=`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect fill="${e}" width="96" height="96"/><text x="50%" y="54%" fill="#fff" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="36">${n}</text></svg>`;return`data:image/svg+xml,${encodeURIComponent(a)}`}const ca=oa,ta={title:"Components/Avatar",component:s,argTypes:ra},i={name:"Par défaut",parameters:o(c,'<Avatar name="Ada Lovelace" src="/portrait.png" />'),render:(e,{globals:n})=>{const a=l(p(n.locale));return r.jsx(s,{...e,name:a.ada,src:m("#0f5c4c",a.adaInitial)})}},d={name:"Photo",parameters:o(c,'<Avatar name="Ada Lovelace" src="/portrait.png" />'),render:(e,{globals:n})=>{const a=l(p(n.locale));return r.jsx(s,{...e,name:a.ada,src:m("#0f5c4c",a.adaInitial)})}},v={name:"Initiales",parameters:o(c,'<Avatar name="Ada Lovelace" />'),render:(e,{globals:n})=>{const a=l(p(n.locale));return r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsx(s,{...e,name:a.ada}),r.jsx(s,{...e,name:a.grace}),r.jsx(s,{...e,name:a.katherine})]})}},A={name:"Sans image",parameters:o(c,"<Avatar />"),render:e=>r.jsx(s,{...e})},u={name:"Tailles",parameters:o(c,`<Avatar size="xxs" name="Ada Lovelace" />
<Avatar size="xs" name="Ada Lovelace" />
<Avatar size="s" name="Ada Lovelace" />
<Avatar size="m" name="Ada Lovelace" />
<Avatar size="l" name="Ada Lovelace" />
<Avatar size="xl" name="Ada Lovelace" />
<Avatar size="xxl" name="Ada Lovelace" />`),render:(e,{globals:n})=>{const a=l(p(n.locale));return r.jsx("div",{className:"flex flex-wrap items-end gap-3",children:ca.map(t=>r.jsx(s,{...e,size:t,name:a.ada},t))})}},g={name:"Couleurs",parameters:o(c,`<Avatar color="brand" name="Ada Lovelace" />
<Avatar color="success" name="Ada Lovelace" />
<Avatar color="warning" name="Ada Lovelace" />`),render:(e,{globals:n})=>{const a=l(p(n.locale));return r.jsx("div",{className:"flex flex-wrap items-center gap-3",children:sa.map(t=>r.jsx(s,{...e,color:t,name:a.ada},t))})}},x={name:"Carré",parameters:o(c,'<Avatar square name="Ada Lovelace" src="/portrait.png" />'),render:(e,{globals:n})=>{const a=l(p(n.locale));return r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsx(s,{...e,square:!0,name:a.ada,src:m("#0f5c4c",a.adaInitial)}),r.jsx(s,{...e,square:!0,name:a.grace})]})}},y={name:"Présence",parameters:o(c,`<Avatar name="Ada Lovelace" presence="online" presenceLabel="En ligne" />
<Avatar name="Grace Hopper" presence="busy" presenceLabel="Occupé" />`),render:(e,{globals:n})=>{const a=l(p(n.locale)),t=[{presence:"online",label:a.online},{presence:"away",label:a.away},{presence:"busy",label:a.busy},{presence:"offline",label:a.offline}];return r.jsx("div",{className:"flex flex-wrap items-center gap-3",children:t.map(({presence:L,label:S})=>r.jsx(s,{...e,name:a.ada,presence:L,presenceLabel:S},L))})}},f={name:"À côté d’un nom",parameters:o(c,`<div className="flex items-center gap-3">
    <Avatar name="Ada Lovelace" src="/portrait.png" alt="" />
    <span>Ada Lovelace</span>
</div>`),render:(e,{globals:n})=>{const a=l(p(n.locale));return r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(s,{...e,name:a.ada,alt:"",src:m("#0f5c4c",a.adaInitial)}),r.jsx("span",{children:a.ada})]})}},b={name:"Groupe",argTypes:ea,args:{max:3,size:"m"},parameters:o(c,`<AvatarGroup max={3} label="Équipe">
    <Avatar name="Ada Lovelace" />
    <Avatar name="Grace Hopper" />
    <Avatar name="Katherine Johnson" />
    <Avatar name="Annie Easley" />
</AvatarGroup>`),render:(e,{globals:n})=>{const a=l(p(n.locale)),{overflowLabel:t,label:L,max:S,size:Y}=e;return r.jsxs(na,{max:S,size:Y,label:L??a.groupLabel,overflowLabel:t??(aa=>a.overflow(aa)),children:[r.jsx(s,{name:a.ada,src:m("#0f5c4c",a.adaInitial)}),r.jsx(s,{name:a.grace,src:m("#175cd3",a.graceInitial)}),r.jsx(s,{name:a.katherine,src:m("#6b21a8",a.katherineInitial)}),r.jsx(s,{name:a.annie})]})}},la=["Default","Image","Initials","Fallback","Sizes","Colors","Square","Presence","Decorative","Group"];var w,h,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var G,E,N;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(E=v.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var U,k,P;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Sans image',
  parameters: componentSource(importAvatar, '<Avatar />'),
  render: args => <Avatar {...args} />
}`,...(P=(k=A.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var q,O,T;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(T=(O=u.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var _,D,F;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,R,Z;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Z=(R=x.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var $,J,K;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,B,Q;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(X=(W=b.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const Aa=Object.freeze(Object.defineProperty({__proto__:null,Colors:g,Decorative:f,Default:i,Fallback:A,Group:b,Image:d,Initials:v,Presence:y,Sizes:u,Square:x,__namedExportsOrder:la,default:ta},Symbol.toStringTag,{value:"Module"}));export{Aa as A,g as C,i as D,A as F,b as G,d as I,y as P,u as S,v as a,x as b,f as c};
