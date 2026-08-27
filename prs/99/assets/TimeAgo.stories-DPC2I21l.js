import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,g as a,n as o,p as s}from"./docs-locale-DxRsX5eR.js";import{E as c,h as l,i as u,n as d}from"./docs-source-5snetGJm.js";import{n as f,t as p}from"./VisuallyHidden-zHqM2pej.js";function m(e){return e instanceof Date?e:new Date(e)}function h(e){for(let{unit:t,ms:n}of C){let r=Math.trunc(e/n);if(Math.abs(r)>=1||t===`second`)return{value:r,unit:t}}return{value:0,unit:`second`}}function g(e,t,n){let{value:r,unit:i}=h(e.getTime()-t.getTime());return{iso:e.toISOString(),relative:new Intl.RelativeTimeFormat(n,{numeric:`auto`}).format(r,i),absolute:new Intl.DateTimeFormat(n,{dateStyle:`long`,timeStyle:`short`}).format(e)}}function _(e){let t=Math.abs(e);return t<6e4?1e4:t<36e5?3e4:t<864e5?6e4:36e5}function v(e){if(typeof e==`string`)return e;if(Array.isArray(e)){let t=e[0];return typeof t==`string`?t:t?.toString()}if(e instanceof Intl.Locale)return e.toString()}function y({date:e,locale:t,live:n=!1,size:r=`md`,className:i,title:o,lang:s,...c}){let[l,u]=(0,b.useState)(()=>new Date),d=m(e),f=d.getTime(),h=!Number.isNaN(f),y=v(t)??s,C=a(`font-sans text-fg`,S[r],i);if((0,b.useEffect)(()=>{if(!n||!h)return;let e,t=()=>{let n=new Date;u(n),e=setTimeout(t,_(f-n.getTime()))};return e=setTimeout(t,_(f-Date.now())),()=>clearTimeout(e)},[n,h,f]),!h)return(0,x.jsx)(`span`,{...c,lang:y,className:C,children:`—`});let{iso:w,relative:T,absolute:E}=g(d,l,t);return(0,x.jsxs)(`time`,{...c,dateTime:w,lang:y,title:o??E,suppressHydrationWarning:!0,className:C,children:[T,(0,x.jsx)(p,{children:`, ${E}`})]})}var b,x,S,C;function w(){return(w=e((()=>{b=n(),f(),x=r(),S={sm:`text-sm`,md:`text-base`},C=[{unit:`year`,ms:315576e5},{unit:`month`,ms:26298e5},{unit:`week`,ms:6048e5},{unit:`day`,ms:864e5},{unit:`hour`,ms:36e5},{unit:`minute`,ms:6e4},{unit:`second`,ms:1e3}],y.__docgenInfo={description:``,methods:[],displayName:`TimeAgo`,props:{date:{required:!0,tsType:{name:`union`,raw:`Date | string | number`,elements:[{name:`Date`},{name:`string`},{name:`number`}]},description:"Instant à afficher. Accepte un `Date`, une chaîne ISO-8601, ou des\nmillisecondes epoch. Une valeur invalide rend un repli sans `<time>`."},locale:{required:!1,tsType:{name:`Intl.LocalesArgument`},description:"Locale BCP 47 pour le texte relatif et absolu (`fr`, `en-US`, …).\nPose aussi `lang` (WCAG 3.1.2). Défaut : locale d’exécution."},live:{required:!1,tsType:{name:`boolean`},description:'Si `true`, rafraîchit le texte relatif sur un intervalle grossier.\nVisuel uniquement — pas d’`aria-live`. Passez `aria-live="polite"` pour opt-in.',defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:"Taille du texte. `'md'` par défaut.",defaultValue:{value:`'md'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Infobulle native. Défaut : l’heure absolue formatée.`}}}})))()}var T=t({Default:()=>N,Live:()=>F,Locale:()=>P,PastAndFuture:()=>L,Sizes:()=>I,__namedExportsOrder:()=>R,default:()=>M});function E(e){return new Date(Date.now()+e)}function D({label:e,hint:t,children:n}){return(0,O.jsxs)(`div`,{className:`font-sans text-fg`,children:[(0,O.jsx)(`p`,{className:`m-0 font-medium`,children:e}),t?(0,O.jsx)(`p`,{className:`mt-1 mb-2 text-sm opacity-80`,children:t}):(0,O.jsx)(`div`,{className:`h-2`}),n]})}var O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{l(),u(),i(),w(),O=r(),k=6e4,A=60*k,j=24*A,M={title:`Components/TimeAgo`,component:y,args:{date:E(-3*k)},argTypes:c,parameters:{controls:{include:[`date`,`locale`,`live`,`size`,`title`,`className`]}}},N={name:`Par défaut`,parameters:d(`import { TimeAgo } from 'd-ui';`,`<TimeAgo date={submission.createdAt} locale="fr" />`),render:(e,{globals:t})=>{let n=o(t.locale),r=s(n);return(0,O.jsx)(D,{label:r.submitted,children:(0,O.jsx)(y,{...e,locale:n})})}},P={name:`Langue`,parameters:d(`import { TimeAgo } from 'd-ui';`,`<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,O.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,O.jsx)(D,{label:n.english,hint:n.englishHint,children:(0,O.jsx)(y,{date:E(-3*k),locale:`en`})}),(0,O.jsx)(D,{label:n.french,hint:n.frenchHint,children:(0,O.jsx)(y,{date:E(-3*k),locale:`fr`})})]})}},F={name:`Mises à jour en direct`,parameters:d(`import { TimeAgo } from 'd-ui';`,`<TimeAgo date={lastSeenAt} locale="fr" live />`),render:(e,{globals:t})=>{let n=o(t.locale),r=s(n);return(0,O.jsx)(D,{label:r.lastSeen,hint:r.liveHint,children:(0,O.jsx)(y,{...e,date:E(-15e3),locale:n,live:!0})})}},I={name:`Taille`,parameters:d(`import { TimeAgo } from 'd-ui';`,`<TimeAgo date={createdAt} locale="fr" size="sm" />
<TimeAgo date={createdAt} locale="fr" size="md" />`),render:(e,{globals:t})=>{let n=o(t.locale),r=s(n);return(0,O.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,O.jsx)(D,{label:r.small,hint:`size="sm"`,children:(0,O.jsx)(y,{...e,date:E(-3*k),locale:n,size:`sm`})}),(0,O.jsx)(D,{label:r.medium,hint:r.mediumHint,children:(0,O.jsx)(y,{...e,date:E(-3*k),locale:n,size:`md`})})]})}},L={name:`Passé et futur`,parameters:d(`import { TimeAgo } from 'd-ui';`,`<TimeAgo date={fiveHoursAgo} locale="fr" />
<TimeAgo date={inThreeHours} locale="fr" />`),render:(e,{globals:t})=>{let n=o(t.locale),r=s(n);return(0,O.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,O.jsx)(D,{label:r.past,hint:r.pastHint,children:(0,O.jsx)(y,{date:E(-5*A),locale:n})}),(0,O.jsx)(D,{label:r.future,hint:r.futureHint,children:(0,O.jsx)(y,{date:E(3*A),locale:n})}),(0,O.jsx)(D,{label:r.yesterday,children:(0,O.jsx)(y,{date:E(-2*j),locale:n})})]})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { TimeAgo } from 'd-ui';", '<TimeAgo date={submission.createdAt} locale="fr" />'),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return <Example label={copy.submitted}>
        <TimeAgo {...args} locale={locale} />
      </Example>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Langue',
  parameters: componentSource("import { TimeAgo } from 'd-ui';", \`<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />\`),
  render: (_, {
    globals
  }) => {
    const copy = timeAgoCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-6">
        <Example label={copy.english} hint={copy.englishHint}>
          <TimeAgo date={fromNow(-3 * minute)} locale="en" />
        </Example>
        <Example label={copy.french} hint={copy.frenchHint}>
          <TimeAgo date={fromNow(-3 * minute)} locale="fr" />
        </Example>
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Mises à jour en direct',
  parameters: componentSource("import { TimeAgo } from 'd-ui';", '<TimeAgo date={lastSeenAt} locale="fr" live />'),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return <Example label={copy.lastSeen} hint={copy.liveHint}>
        <TimeAgo {...args} date={fromNow(-15 * 1000)} locale={locale} live />
      </Example>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Taille',
  parameters: componentSource("import { TimeAgo } from 'd-ui';", \`<TimeAgo date={createdAt} locale="fr" size="sm" />
<TimeAgo date={createdAt} locale="fr" size="md" />\`),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return <div className="flex flex-col gap-4">
        <Example label={copy.small} hint='size="sm"'>
          <TimeAgo {...args} date={fromNow(-3 * minute)} locale={locale} size="sm" />
        </Example>
        <Example label={copy.medium} hint={copy.mediumHint}>
          <TimeAgo {...args} date={fromNow(-3 * minute)} locale={locale} size="md" />
        </Example>
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Passé et futur',
  parameters: componentSource("import { TimeAgo } from 'd-ui';", \`<TimeAgo date={fiveHoursAgo} locale="fr" />
<TimeAgo date={inThreeHours} locale="fr" />\`),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return <div className="flex flex-col gap-6">
        <Example label={copy.past} hint={copy.pastHint}>
          <TimeAgo date={fromNow(-5 * hour)} locale={locale} />
        </Example>
        <Example label={copy.future} hint={copy.futureHint}>
          <TimeAgo date={fromNow(3 * hour)} locale={locale} />
        </Example>
        <Example label={copy.yesterday}>
          <TimeAgo date={fromNow(-2 * day)} locale={locale} />
        </Example>
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`Locale`,`Live`,`Sizes`,`PastAndFuture`]})))()}export{I as a,L as i,F as n,T as o,P as r,z as s,N as t};