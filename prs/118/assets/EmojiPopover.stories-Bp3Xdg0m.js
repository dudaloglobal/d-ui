import{r as N,j as e,g as k,o as g,d as E}from"./iframe-DRIDI3J7.js";import{w as A}from"./arg-types-Di6f0Zb7.js";import{c as x}from"./docs-source-C_O40UCi.js";import{I as h}from"./IconButton-Bk6yeAV0.js";import{P as M}from"./Popover-SJReyP1L.js";const J=["💖","👍","🎉","👏","😂","😮","😢","🤔","👎"],V={"💖":"Cœur étincelant","👍":"Pouce en l’air","🎉":"Cotillons","👏":"Applaudissements","😂":"Larmes de joie","😮":"Surprise","😢":"Larmes","🤔":"Réflexion","👎":"Pouce en bas"};function i({children:a,onSelect:n,placement:o="top",open:u,defaultOpen:w=!1,onOpenChange:l,disabled:c=!1,radius:S,className:C,labels:m,"aria-label":B="Réactions"}){const I=u!==void 0,[O,L]=N.useState(w),_=c?!1:u??O,p=r=>{c&&r||(I||L(r),l==null||l(r))},q=r=>{n==null||n(r),p(!1)},D=r=>(m==null?void 0:m[r])??V[r];return e.jsx(M,{unstyled:!0,arrow:!1,trapFocus:!0,placement:o,open:_,onOpenChange:p,disabled:c,radius:S,"aria-label":B,className:k("d-ui-emoji-popover",C),content:e.jsx("div",{className:"flex items-center",children:J.map(r=>e.jsx("button",{type:"button",className:"d-ui-emoji-popover-btn","aria-label":D(r),onClick:()=>q(r),children:e.jsx("span",{"aria-hidden":!0,children:r})},r))}),children:a})}i.__docgenInfo={description:"",methods:[],displayName:"EmojiPopover",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(emoji: ReactionEmoji) => void",signature:{arguments:[{type:{name:"unknown[number]",raw:"(typeof REACTION_EMOJIS)[number]"},name:"emoji"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'right'
| 'right-start'
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Arrondi des coins du panneau. Défaut : `md`."},className:{required:!1,tsType:{name:"string"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof REACTION_EMOJIS)[number]"},{name:"string"}],raw:"Record<ReactionEmoji, string>"}],raw:"Partial<Record<ReactionEmoji, string>>"},description:"Noms accessibles. Défaut : libellés français."},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Réactions'",computed:!1}}}};const P="import { Button, EmojiPopover } from 'd-ui';";function T(){return e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"8",cy:"8",r:"6.25",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{cx:"5.75",cy:"6.5",r:"0.9",fill:"currentColor"}),e.jsx("circle",{cx:"10.25",cy:"6.5",r:"0.9",fill:"currentColor"}),e.jsx("path",{d:"M5.25 9.5c.7 1.2 1.7 1.8 2.75 1.8s2.05-.6 2.75-1.8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}const U={title:"Components/EmojiPopover",component:i,argTypes:A,parameters:{controls:{include:["placement","disabled"]}}},t={name:"Par défaut",args:{children:e.jsx("span",{})},parameters:x(P,`<EmojiPopover onSelect={(emoji) => {}}>
    <Button variant="secondary">Réagir</Button>
</EmojiPopover>`),render:(a,{globals:n})=>{const o=g(E(n.locale));return e.jsx("div",{className:"flex justify-center pb-8 pt-24",children:e.jsx(i,{...a,defaultOpen:!0,"aria-label":o.reactions,labels:R(o),children:e.jsx(h,{"aria-label":o.react,variant:"secondary",icon:e.jsx(T,{})})})})}},s={name:"Désactivé",args:{children:e.jsx("span",{}),disabled:!0},parameters:x(P,`<EmojiPopover disabled>
    <Button variant="secondary">Réagir</Button>
</EmojiPopover>`),render:(a,{globals:n})=>{const o=g(E(n.locale));return e.jsx(i,{...a,"aria-label":o.reactions,labels:R(o),children:e.jsx(h,{"aria-label":o.react,variant:"secondary",icon:e.jsx(T,{})})})}};function R(a){return{"💖":a.emojiHeart,"👍":a.emojiThumbsUp,"🎉":a.emojiParty,"👏":a.emojiClap,"😂":a.emojiJoy,"😮":a.emojiWow,"😢":a.emojiCry,"🤔":a.emojiThink,"👎":a.emojiThumbsDown}}var d,f,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    children: <span />
  },
  parameters: componentSource(importEmoji, \`<EmojiPopover onSelect={(emoji) => {}}>
    <Button variant="secondary">Réagir</Button>
</EmojiPopover>\`),
  render: (args, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <div className="flex justify-center pb-8 pt-24">
        <EmojiPopover {...args} defaultOpen aria-label={copy.reactions} labels={reactionLabels(copy)}>
          <IconButton aria-label={copy.react} variant="secondary" icon={<SmileIcon />} />
        </EmojiPopover>
      </div>;
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var j,b,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Désactivé',
  args: {
    children: <span />,
    disabled: true
  },
  parameters: componentSource(importEmoji, \`<EmojiPopover disabled>
    <Button variant="secondary">Réagir</Button>
</EmojiPopover>\`),
  render: (args, {
    globals
  }) => {
    const copy = overlayCopy(docsLocale(globals.locale));
    return <EmojiPopover {...args} aria-label={copy.reactions} labels={reactionLabels(copy)}>
        <IconButton aria-label={copy.react} variant="secondary" icon={<SmileIcon />} />
      </EmojiPopover>;
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const W=["Default","Disabled"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Disabled:s,__namedExportsOrder:W,default:U},Symbol.toStringTag,{value:"Module"}));export{t as D,Q as E,s as a};
