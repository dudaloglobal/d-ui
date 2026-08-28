import{r as k,j as e,f as q,o as g,d as E}from"./iframe-C1QnaEd8.js";import{m as D}from"./arg-types-D7CIzvvN.js";import{c as x}from"./docs-source-C_O40UCi.js";import{I as h}from"./IconButton-Cfs67Ulf.js";import{P as A}from"./Popover-CN10pwXq.js";const M=["💖","👍","🎉","👏","😂","😮","😢","🤔","👎"],J={"💖":"Cœur étincelant","👍":"Pouce en l’air","🎉":"Cotillons","👏":"Applaudissements","😂":"Larmes de joie","😮":"Surprise","😢":"Larmes","🤔":"Réflexion","👎":"Pouce en bas"};function i({children:a,onSelect:t,placement:o="top",open:p,defaultOpen:S=!1,onOpenChange:l,disabled:c=!1,className:C,labels:m,"aria-label":w="Réactions"}){const B=p!==void 0,[I,O]=k.useState(S),L=c?!1:p??I,u=r=>{c&&r||(B||O(r),l==null||l(r))},_=r=>{t==null||t(r),u(!1)},N=r=>(m==null?void 0:m[r])??J[r];return e.jsx(A,{unstyled:!0,arrow:!1,trapFocus:!0,placement:o,open:L,onOpenChange:u,disabled:c,"aria-label":w,className:q("d-ui-emoji-popover",C),content:e.jsx("div",{className:"flex items-center",children:M.map(r=>e.jsx("button",{type:"button",className:"d-ui-emoji-popover-btn","aria-label":N(r),onClick:()=>_(r),children:e.jsx("span",{"aria-hidden":!0,children:r})},r))}),children:a})}i.__docgenInfo={description:"",methods:[],displayName:"EmojiPopover",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(emoji: ReactionEmoji) => void",signature:{arguments:[{type:{name:"unknown[number]",raw:"(typeof REACTION_EMOJIS)[number]"},name:"emoji"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
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
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"unknown[number]",raw:"(typeof REACTION_EMOJIS)[number]"},{name:"string"}],raw:"Record<ReactionEmoji, string>"}],raw:"Partial<Record<ReactionEmoji, string>>"},description:"Noms accessibles. Défaut : libellés français."},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Réactions'",computed:!1}}}};const P="import { Button, EmojiPopover } from 'd-ui';";function T(){return e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"8",cy:"8",r:"6.25",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{cx:"5.75",cy:"6.5",r:"0.9",fill:"currentColor"}),e.jsx("circle",{cx:"10.25",cy:"6.5",r:"0.9",fill:"currentColor"}),e.jsx("path",{d:"M5.25 9.5c.7 1.2 1.7 1.8 2.75 1.8s2.05-.6 2.75-1.8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}const V={title:"Components/EmojiPopover",component:i,argTypes:D,parameters:{controls:{include:["placement","disabled"]}}},n={name:"Par défaut",args:{children:e.jsx("span",{})},parameters:x(P,`<EmojiPopover onSelect={(emoji) => {}}>
    <Button variant="secondary">Réagir</Button>
</EmojiPopover>`),render:(a,{globals:t})=>{const o=g(E(t.locale));return e.jsx("div",{className:"flex justify-center pb-8 pt-24",children:e.jsx(i,{...a,defaultOpen:!0,"aria-label":o.reactions,labels:R(o),children:e.jsx(h,{"aria-label":o.react,variant:"secondary",icon:e.jsx(T,{})})})})}},s={name:"Désactivé",args:{children:e.jsx("span",{}),disabled:!0},parameters:x(P,`<EmojiPopover disabled>
    <Button variant="secondary">Réagir</Button>
</EmojiPopover>`),render:(a,{globals:t})=>{const o=g(E(t.locale));return e.jsx(i,{...a,"aria-label":o.reactions,labels:R(o),children:e.jsx(h,{"aria-label":o.react,variant:"secondary",icon:e.jsx(T,{})})})}};function R(a){return{"💖":a.emojiHeart,"👍":a.emojiThumbsUp,"🎉":a.emojiParty,"👏":a.emojiClap,"😂":a.emojiJoy,"😮":a.emojiWow,"😢":a.emojiCry,"🤔":a.emojiThink,"👎":a.emojiThumbsDown}}var d,f,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var j,b,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const U=["Default","Disabled"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:s,__namedExportsOrder:U,default:V},Symbol.toStringTag,{value:"Module"}));export{n as D,K as E,s as a};
