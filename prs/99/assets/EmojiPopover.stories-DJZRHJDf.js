import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,c as a,g as o,n as s}from"./docs-locale-DxRsX5eR.js";import{d as c,h as l,i as u,n as d}from"./docs-source-5snetGJm.js";import{n as f,t as p}from"./IconButton-CpgKMX4H.js";import{n as m,t as h}from"./Popover-BKa_wfW9.js";function g({children:e,onSelect:t,placement:n=`top`,open:r,defaultOpen:i=!1,onOpenChange:a,disabled:s=!1,className:c,labels:l,"aria-label":u=`Réactions`}){let d=r!==void 0,[f,p]=(0,_.useState)(i),m=s?!1:r??f,g=e=>{s&&e||(d||p(e),a?.(e))},x=e=>{t?.(e),g(!1)},S=e=>l?.[e]??b[e];return(0,v.jsx)(h,{unstyled:!0,arrow:!1,trapFocus:!0,placement:n,open:m,onOpenChange:g,disabled:s,"aria-label":u,className:o(`d-ui-emoji-popover`,c),content:(0,v.jsx)(`div`,{className:`flex items-center`,children:y.map(e=>(0,v.jsx)(`button`,{type:`button`,className:`d-ui-emoji-popover-btn`,"aria-label":S(e),onClick:()=>x(e),children:(0,v.jsx)(`span`,{"aria-hidden":!0,children:e})},e))}),children:e})}var _,v,y,b;function x(){return(x=e((()=>{_=n(),m(),v=r(),y=[`💖`,`👍`,`🎉`,`👏`,`😂`,`😮`,`😢`,`🤔`,`👎`],b={"💖":`Cœur étincelant`,"👍":`Pouce en l’air`,"🎉":`Cotillons`,"👏":`Applaudissements`,"😂":`Larmes de joie`,"😮":`Surprise`,"😢":`Larmes`,"🤔":`Réflexion`,"👎":`Pouce en bas`},g.__docgenInfo={description:``,methods:[],displayName:`EmojiPopover`,props:{children:{required:!0,tsType:{name:`ReactElement`},description:``},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(emoji: ReactionEmoji) => void`,signature:{arguments:[{type:{name:`unknown[number]`,raw:`(typeof REACTION_EMOJIS)[number]`},name:`emoji`}],return:{name:`void`}}},description:``},placement:{required:!1,tsType:{name:`union`,raw:`| 'top'
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
| 'right-end'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'top-start'`},{name:`literal`,value:`'top-end'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'bottom-start'`},{name:`literal`,value:`'bottom-end'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'left-start'`},{name:`literal`,value:`'left-end'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'right-start'`},{name:`literal`,value:`'right-end'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},labels:{required:!1,tsType:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof REACTION_EMOJIS)[number]`},{name:`string`}],raw:`Record<ReactionEmoji, string>`}],raw:`Partial<Record<ReactionEmoji, string>>`},description:`Noms accessibles. Défaut : libellés français.`},"aria-label":{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Réactions'`,computed:!1}}}}})))()}var S=t({Default:()=>O,Disabled:()=>k,__namedExportsOrder:()=>A,default:()=>D});function C(){return(0,T.jsxs)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,T.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.25`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,T.jsx)(`circle`,{cx:`5.75`,cy:`6.5`,r:`0.9`,fill:`currentColor`}),(0,T.jsx)(`circle`,{cx:`10.25`,cy:`6.5`,r:`0.9`,fill:`currentColor`}),(0,T.jsx)(`path`,{d:`M5.25 9.5c.7 1.2 1.7 1.8 2.75 1.8s2.05-.6 2.75-1.8`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function w(e){return{"💖":e.emojiHeart,"👍":e.emojiThumbsUp,"🎉":e.emojiParty,"👏":e.emojiClap,"😂":e.emojiJoy,"😮":e.emojiWow,"😢":e.emojiCry,"🤔":e.emojiThink,"👎":e.emojiThumbsDown}}var T,E,D,O,k,A;function j(){return(j=e((()=>{l(),i(),u(),f(),x(),T=r(),E=`import { Button, EmojiPopover } from 'd-ui';`,D={title:`Components/EmojiPopover`,component:g,argTypes:c,parameters:{controls:{include:[`placement`,`disabled`]}}},O={name:`Par défaut`,args:{children:(0,T.jsx)(`span`,{})},parameters:d(E,`<EmojiPopover onSelect={(emoji) => {}}>
    <Button variant="secondary">Réagir</Button>
</EmojiPopover>`),render:(e,{globals:t})=>{let n=a(s(t.locale));return(0,T.jsx)(`div`,{className:`flex justify-center pb-8 pt-24`,children:(0,T.jsx)(g,{...e,defaultOpen:!0,"aria-label":n.reactions,labels:w(n),children:(0,T.jsx)(p,{"aria-label":n.react,variant:`secondary`,icon:(0,T.jsx)(C,{})})})})}},k={name:`Désactivé`,args:{children:(0,T.jsx)(`span`,{}),disabled:!0},parameters:d(E,`<EmojiPopover disabled>
    <Button variant="secondary">Réagir</Button>
</EmojiPopover>`),render:(e,{globals:t})=>{let n=a(s(t.locale));return(0,T.jsx)(g,{...e,"aria-label":n.reactions,labels:w(n),children:(0,T.jsx)(p,{"aria-label":n.react,variant:`secondary`,icon:(0,T.jsx)(C,{})})})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Disabled`]})))()}export{j as i,k as n,S as r,O as t};