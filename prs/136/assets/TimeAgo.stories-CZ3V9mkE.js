import{r as L,h as Y,j as t,d as f,ad as g}from"./iframe-BaR_79Rv.js";import{O as Z}from"./arg-types-CGfSQUbN.js";import{c as x}from"./docs-source-C_O40UCi.js";import{V as ee}from"./VisuallyHidden-yxOfl0zW.js";const ae={sm:"text-sm",md:"text-base"},oe=[{unit:"year",ms:365.25*24*60*60*1e3},{unit:"month",ms:365.25/12*24*60*60*1e3},{unit:"week",ms:10080*60*1e3},{unit:"day",ms:1440*60*1e3},{unit:"hour",ms:3600*1e3},{unit:"minute",ms:60*1e3},{unit:"second",ms:1e3}];function te(e){return e instanceof Date?e:new Date(e)}function le(e){for(const{unit:a,ms:o}of oe){const l=Math.trunc(e/o);if(Math.abs(l)>=1||a==="second")return{value:l,unit:a}}return{value:0,unit:"second"}}function re(e,a,o){const{value:l,unit:T}=le(e.getTime()-a.getTime());return{iso:e.toISOString(),relative:new Intl.RelativeTimeFormat(o,{numeric:"auto"}).format(l,T),absolute:new Intl.DateTimeFormat(o,{dateStyle:"long",timeStyle:"short"}).format(e)}}function z(e){const a=Math.abs(e);return a<6e4?1e4:a<36e5?3e4:a<864e5?6e4:36e5}function se(e){if(typeof e=="string")return e;if(Array.isArray(e)){const a=e[0];return typeof a=="string"?a:a==null?void 0:a.toString()}if(e instanceof Intl.Locale)return e.toString()}function r({date:e,locale:a,live:o=!1,size:l="md",className:T,title:G,lang:$,...v}){const[J,K]=L.useState(()=>new Date),j=te(e),A=j.getTime(),b=!Number.isNaN(A),S=se(a)??$,N=Y("font-sans text-fg",ae[l],T);if(L.useEffect(()=>{if(!o||!b)return;let h;const w=()=>{const H=new Date;K(H),h=setTimeout(w,z(A-H.getTime()))};return h=setTimeout(w,z(A-Date.now())),()=>clearTimeout(h)},[o,b,A]),!b)return t.jsx("span",{...v,lang:S,className:N,children:"—"});const{iso:Q,relative:X,absolute:E}=re(j,J,a);return t.jsxs("time",{...v,dateTime:Q,lang:S,title:G??E,suppressHydrationWarning:!0,className:N,children:[X,t.jsx(ee,{children:`, ${E}`})]})}r.__docgenInfo={description:"",methods:[],displayName:"TimeAgo",props:{date:{required:!0,tsType:{name:"union",raw:"Date | string | number",elements:[{name:"Date"},{name:"string"},{name:"number"}]},description:"Instant à afficher. Accepte un `Date`, une chaîne ISO-8601, ou des\nmillisecondes epoch. Une valeur invalide rend un repli sans `<time>`."},locale:{required:!1,tsType:{name:"Intl.LocalesArgument"},description:"Locale BCP 47 pour le texte relatif et absolu (`fr`, `en-US`, …).\nPose aussi `lang` (WCAG 3.1.2). Défaut : locale d’exécution."},live:{required:!1,tsType:{name:"boolean"},description:'Si `true`, rafraîchit le texte relatif sur un intervalle grossier.\nVisuel uniquement — pas d’`aria-live`. Passez `aria-live="polite"` pour opt-in.',defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Taille du texte. `'md'` par défaut.",defaultValue:{value:"'md'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Infobulle native. Défaut : l’heure absolue formatée."}}};const i=60*1e3,y=60*i,ne=24*y;function s(e){return new Date(Date.now()+e)}function n({label:e,hint:a,children:o}){return t.jsxs("div",{className:"font-sans text-fg",children:[t.jsx("p",{className:"m-0 font-medium",children:e}),a?t.jsx("p",{className:"mt-1 mb-2 text-sm opacity-80",children:a}):t.jsx("div",{className:"h-2"}),o]})}const ie={title:"Components/TimeAgo",component:r,args:{date:s(-3*i)},argTypes:Z,parameters:{controls:{include:["date","locale","live","size","title","className"]}}},c={name:"Par défaut",parameters:x("import { TimeAgo } from '@dudaloglobal/d-ui';",'<TimeAgo date={submission.createdAt} locale="fr" />'),render:(e,{globals:a})=>{const o=f(a.locale),l=g(o);return t.jsx(n,{label:l.submitted,children:t.jsx(r,{...e,locale:o})})}},m={name:"Langue",parameters:x("import { TimeAgo } from '@dudaloglobal/d-ui';",`<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />`),render:(e,{globals:a})=>{const o=g(f(a.locale));return t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsx(n,{label:o.english,hint:o.englishHint,children:t.jsx(r,{date:s(-3*i),locale:"en"})}),t.jsx(n,{label:o.french,hint:o.frenchHint,children:t.jsx(r,{date:s(-3*i),locale:"fr"})})]})}},d={name:"Mises à jour en direct",parameters:x("import { TimeAgo } from '@dudaloglobal/d-ui';",'<TimeAgo date={lastSeenAt} locale="fr" live />'),render:(e,{globals:a})=>{const o=f(a.locale),l=g(o);return t.jsx(n,{label:l.lastSeen,hint:l.liveHint,children:t.jsx(r,{...e,date:s(-15*1e3),locale:o,live:!0})})}},u={name:"Taille",parameters:x("import { TimeAgo } from '@dudaloglobal/d-ui';",`<TimeAgo date={createdAt} locale="fr" size="sm" />
<TimeAgo date={createdAt} locale="fr" size="md" />`),render:(e,{globals:a})=>{const o=f(a.locale),l=g(o);return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(n,{label:l.small,hint:'size="sm"',children:t.jsx(r,{...e,date:s(-3*i),locale:o,size:"sm"})}),t.jsx(n,{label:l.medium,hint:l.mediumHint,children:t.jsx(r,{...e,date:s(-3*i),locale:o,size:"md"})})]})}},p={name:"Passé et futur",parameters:x("import { TimeAgo } from '@dudaloglobal/d-ui';",`<TimeAgo date={fiveHoursAgo} locale="fr" />
<TimeAgo date={inThreeHours} locale="fr" />`),render:(e,{globals:a})=>{const o=f(a.locale),l=g(o);return t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsx(n,{label:l.past,hint:l.pastHint,children:t.jsx(r,{date:s(-5*y),locale:o})}),t.jsx(n,{label:l.future,hint:l.futureHint,children:t.jsx(r,{date:s(3*y),locale:o})}),t.jsx(n,{label:l.yesterday,children:t.jsx(r,{date:s(-2*ne),locale:o})})]})}};var D,I,P;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { TimeAgo } from '@dudaloglobal/d-ui';", '<TimeAgo date={submission.createdAt} locale="fr" />'),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return <Example label={copy.submitted}>
        <TimeAgo {...args} locale={locale} />
      </Example>;
  }
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var C,_,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Langue',
  parameters: componentSource("import { TimeAgo } from '@dudaloglobal/d-ui';", \`<TimeAgo date={createdAt} locale="en" />
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
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var q,O,F;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Mises à jour en direct',
  parameters: componentSource("import { TimeAgo } from '@dudaloglobal/d-ui';", '<TimeAgo date={lastSeenAt} locale="fr" live />'),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return <Example label={copy.lastSeen} hint={copy.liveHint}>
        <TimeAgo {...args} date={fromNow(-15 * 1000)} locale={locale} live />
      </Example>;
  }
}`,...(F=(O=d.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var V,U,k;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Taille',
  parameters: componentSource("import { TimeAgo } from '@dudaloglobal/d-ui';", \`<TimeAgo date={createdAt} locale="fr" size="sm" />
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
}`,...(k=(U=u.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var R,W,B;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Passé et futur',
  parameters: componentSource("import { TimeAgo } from '@dudaloglobal/d-ui';", \`<TimeAgo date={fiveHoursAgo} locale="fr" />
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
}`,...(B=(W=p.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const ce=["Default","Locale","Live","Sizes","PastAndFuture"],fe=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Live:d,Locale:m,PastAndFuture:p,Sizes:u,__namedExportsOrder:ce,default:ie},Symbol.toStringTag,{value:"Module"}));export{c as D,m as L,p as P,u as S,fe as T,d as a};
