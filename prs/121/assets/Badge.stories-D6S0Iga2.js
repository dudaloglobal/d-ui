import{r as d,j as o,h as S,a5 as l,d as c}from"./iframe-CSDJ8R1k.js";import{z as ue}from"./arg-types-B_nef0fB.js";import{c as i}from"./docs-source-C_O40UCi.js";import{A as ae}from"./Avatar-kEUmyX2p.js";import{I as v}from"./IconButton-Bu6_OKkE.js";import{I}from"./Icon-CtovchWW.js";import{V as de}from"./VisuallyHidden-D3lTWNeG.js";import{u as pe}from"./uiScale-DBauGOvS.js";import{T as me}from"./Tag-DAanEdjS.js";import{F as x}from"./BellIcon-Bm23bQwc.js";const Z={"top-end":"top-0 end-0 translate-x-1/3 -translate-y-1/3","top-start":"top-0 start-0 -translate-x-1/3 -translate-y-1/3","bottom-end":"bottom-0 end-0 translate-x-1/3 translate-y-1/3","bottom-start":"bottom-0 start-0 -translate-x-1/3 translate-y-1/3"};function ge(n,a){return a??(n==="default"?"brand":n)}function be(n,a){if(n)return n;if(typeof a=="string"||typeof a=="number")return String(a)}function fe(n,a,e){if(a!==void 0&&typeof a!="number")return a;const t=typeof a=="number"?a:n;return t===void 0?null:t>e?`${e}+`:String(t)}function r({children:n,count:a,content:e,max:t=99,showZero:s=!1,dot:h=!1,label:ne,variant:w="danger",color:N,appearance:oe="solid",size:te="xxs",placement:A="top-end",className:re,...se}){const T=d.useId(),j=d.Children.only(n);if(!d.isValidElement(j))throw new Error("<Badge> attend un seul élément hôte (Avatar, IconButton, …).");const P=fe(a,e,t),q=typeof e=="number"?e:a,le=h||!(!h&&(q===void 0||q===0&&!s)&&(e===void 0||typeof e=="number")),C=be(ne,h?void 0:P),L=ge(w,N),ce=[j.props["aria-describedby"],C?T:void 0].filter(Boolean).join(" "),ie=le?h?o.jsx("span",{className:S("absolute size-2.5 rounded-full ring-2 ring-bg",Z[A],L==="neutral"?"bg-fg":pe[L]),"aria-hidden":"true"}):o.jsx(me,{variant:w,color:N,appearance:oe,size:te,"aria-hidden":"true",className:S("absolute min-w-4 justify-center px-1",Z[A]),children:P}):null;return o.jsxs("span",{...se,className:S("relative inline-flex",re),children:[C?d.cloneElement(j,{"aria-describedby":ce}):j,C?o.jsx(de,{id:T,children:C}):null,ie]})}r.__docgenInfo={description:"Compteur ou point posé sur un contrôle (`IconButton`, `Avatar`, `Button`).\n\nCe n’est pas une pastille de libellé : pour « Publié » / « Brouillon »,\nutilisez `Tag`. L’incrustation est décorative ; le nom passe par `label`\n(relié à l’hôte).",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactElement"},description:"Contrôle ou portrait sur lequel poser le compteur. Un seul élément."},count:{required:!1,tsType:{name:"number"},description:"Compteur. Masqué si `0` sauf `showZero`. Plafonné par `max`."},content:{required:!1,tsType:{name:"ReactNode"},description:"Contenu d’incrustation. Un nombre est traité comme `count`."},max:{required:!1,tsType:{name:"number"},description:"Plafond affiché (`99+`). Défaut : `99`.",defaultValue:{value:"99",computed:!1}},showZero:{required:!1,tsType:{name:"boolean"},description:"Affiche `0`.",defaultValue:{value:"false",computed:!1}},dot:{required:!1,tsType:{name:"boolean"},description:"Point de statut, sans chiffre.",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Annoncé à côté de l’hôte (`aria-describedby`). Fallback : le chiffre\nvisible, en anglais s’il n’y a que le nombre."},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'danger'",computed:!1}},color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof UI_COLORS)[number]"},description:""},appearance:{required:!1,tsType:{name:"union",raw:"'soft' | 'solid' | 'outline'",elements:[{name:"literal",value:"'soft'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof UI_SIZES)[number]"},description:"Taille de l’incrustation. `xxs` par défaut.",defaultValue:{value:"'xxs'",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'top-end' | 'top-start' | 'bottom-end' | 'bottom-start'",elements:[{name:"literal",value:"'top-end'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'bottom-start'"}]},description:"",defaultValue:{value:"'top-end'",computed:!1}}}};const u="import { Avatar, Badge, Icon, IconButton } from 'd-ui';",Be={title:"Components/Badge",component:r,args:{children:o.jsx("span",{}),count:5},argTypes:ue},p={name:"Par défaut",parameters:i(u,`<Badge count={5} label="5 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>`),render:(n,{globals:a})=>{const e=l(c(a.locale));return o.jsx(r,{...n,count:n.count??5,label:e.unread,children:o.jsx(v,{icon:o.jsx(I,{as:x}),"aria-label":e.notifications})})}},m={name:"Plafond",parameters:i(u,`<Badge count={120} max={99} label="120 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>`),render:(n,{globals:a})=>{const e=l(c(a.locale));return o.jsx(r,{...n,count:120,max:99,label:e.unreadMany,children:o.jsx(v,{icon:o.jsx(I,{as:x}),"aria-label":e.notifications})})}},g={name:"Avec point",parameters:i(u,`<Badge dot label="En ligne">
    <Avatar name="Ada Lovelace" />
</Badge>`),render:(n,{globals:a})=>{const e=l(c(a.locale)),{count:t,...s}=n;return o.jsx(r,{...s,dot:!0,label:e.online,children:o.jsx(ae,{name:e.ada})})}},b={name:"Sur un avatar",parameters:i(u,`<Badge count={3} label="3 messages">
    <Avatar name="Ada Lovelace" />
</Badge>`),render:(n,{globals:a})=>{const e=l(c(a.locale));return o.jsx(r,{...n,count:3,label:e.messages,children:o.jsx(ae,{name:e.ada})})}},f={name:"Zéro",parameters:i(u,`<Badge count={0} showZero label="0 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>`),render:(n,{globals:a})=>{const e=l(c(a.locale));return o.jsx(r,{...n,count:0,showZero:!0,label:e.unreadZero,children:o.jsx(v,{icon:o.jsx(I,{as:x}),"aria-label":e.notifications})})}},B={name:"Position",parameters:i(u,`<Badge count={5} placement="top-start" label="5 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>`),render:(n,{globals:a})=>{const e=l(c(a.locale)),t=["top-end","top-start","bottom-end","bottom-start"];return o.jsx("div",{className:"flex flex-wrap items-center gap-8 p-6",children:t.map(s=>d.createElement(r,{...n,key:s,count:5,placement:s,label:e.unread},o.jsx(v,{icon:o.jsx(I,{as:x}),"aria-label":e.notifications})))})}},y={name:"Contenu",parameters:i(u,`<Badge content="N" label="Nouveau">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>`),render:(n,{globals:a})=>{const e=l(c(a.locale)),{count:t,...s}=n;return o.jsx(r,{...s,content:"N",label:e.newMark,children:o.jsx(v,{icon:o.jsx(I,{as:x}),"aria-label":e.notifications})})}};var _,E,V;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importBadge, \`<Badge count={5} label="5 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <Badge {...args} count={args.count ?? 5} label={copy.unread}>
        <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
      </Badge>;
  }
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var O,k,D;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Plafond',
  parameters: componentSource(importBadge, \`<Badge count={120} max={99} label="120 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <Badge {...args} count={120} max={99} label={copy.unreadMany}>
        <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
      </Badge>;
  }
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var M,z,R;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Avec point',
  parameters: componentSource(importBadge, \`<Badge dot label="En ligne">
    <Avatar name="Ada Lovelace" />
</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    const {
      count: _count,
      ...rest
    } = args;
    return <Badge {...rest} dot label={copy.online}>
        <Avatar name={copy.ada} />
      </Badge>;
  }
}`,...(R=(z=g.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var U,F,H;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Sur un avatar',
  parameters: componentSource(importBadge, \`<Badge count={3} label="3 messages">
    <Avatar name="Ada Lovelace" />
</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <Badge {...args} count={3} label={copy.messages}>
        <Avatar name={copy.ada} />
      </Badge>;
  }
}`,...(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var $,G,J;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Zéro',
  parameters: componentSource(importBadge, \`<Badge count={0} showZero label="0 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <Badge {...args} count={0} showZero label={copy.unreadZero}>
        <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
      </Badge>;
  }
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,W;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Position',
  parameters: componentSource(importBadge, \`<Badge count={5} placement="top-start" label="5 non lus">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    const corners = ['top-end', 'top-start', 'bottom-end', 'bottom-start'] as const;
    return <div className="flex flex-wrap items-center gap-8 p-6">
        {corners.map(placement => <Badge {...args} key={placement} count={5} placement={placement} label={copy.unread}>
            <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
          </Badge>)}
      </div>;
  }
}`,...(W=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,ee;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Contenu',
  parameters: componentSource(importBadge, \`<Badge content="N" label="Nouveau">
    <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    const {
      count: _count,
      ...rest
    } = args;
    return <Badge {...rest} content="N" label={copy.newMark}>
        <IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />
      </Badge>;
  }
}`,...(ee=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const ye=["Default","Capped","Dot","OnAvatar","Zero","Placement","Content"],qe=Object.freeze(Object.defineProperty({__proto__:null,Capped:m,Content:y,Default:p,Dot:g,OnAvatar:b,Placement:B,Zero:f,__namedExportsOrder:ye,default:Be},Symbol.toStringTag,{value:"Module"}));export{qe as B,m as C,p as D,b as O,B as P,f as Z,g as a,y as b};
