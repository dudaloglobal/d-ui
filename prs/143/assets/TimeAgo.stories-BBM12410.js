import{r as z,h as le,j as a,d as c,ad as m}from"./iframe-DkVyFt5e.js";import{O as re}from"./arg-types--G9daUKm.js";import{c as d}from"./docs-source-C_O40UCi.js";import{V as se}from"./VisuallyHidden-DVFkwVGT.js";const ne={sm:"text-sm",md:"text-base"},ie=[{unit:"year",ms:365.25*24*60*60*1e3},{unit:"month",ms:365.25/12*24*60*60*1e3},{unit:"week",ms:10080*60*1e3},{unit:"day",ms:1440*60*1e3},{unit:"hour",ms:3600*1e3},{unit:"minute",ms:60*1e3},{unit:"second",ms:1e3}];function ce(e){return e instanceof Date?e:new Date(e)}function me(e){for(const{unit:o,ms:t}of ie){const l=Math.trunc(e/t);if(Math.abs(l)>=1||o==="second")return{value:l,unit:o}}return{value:0,unit:"second"}}function de(e,o,t,l){const{value:y,unit:h}=me(e.getTime()-o.getTime());return{iso:e.toISOString(),relative:new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(y,h),absolute:new Intl.DateTimeFormat(t,{dateStyle:"long",timeStyle:"short",timeZone:l}).format(e)}}function C(e){const o=Math.abs(e);return o<6e4?1e4:o<36e5?3e4:o<864e5?6e4:36e5}function ue(e){if(typeof e=="string")return e;if(Array.isArray(e)){const o=e[0];return typeof o=="string"?o:o==null?void 0:o.toString()}if(e instanceof Intl.Locale)return e.toString()}function r({date:e,locale:o,timeZone:t,live:l=!1,size:y="md",className:h,title:X,lang:Y,...N}){const[ee,ae]=z.useState(()=>new Date),S=ce(e),T=S.getTime(),b=!Number.isNaN(T),E=ue(o)??Y,w=le("font-sans text-fg",ne[y],h);if(z.useEffect(()=>{if(!l||!b)return;let v;const D=()=>{const L=new Date;ae(L),v=setTimeout(D,C(T-L.getTime()))};return v=setTimeout(D,C(T-Date.now())),()=>clearTimeout(v)},[l,b,T]),!b)return a.jsx("span",{...N,lang:E,className:w,children:"—"});const{iso:oe,relative:te,absolute:H}=de(S,ee,o,t);return a.jsxs("time",{...N,dateTime:oe,lang:E,title:X??H,suppressHydrationWarning:!0,className:w,children:[te,a.jsx(se,{children:`, ${H}`})]})}r.__docgenInfo={description:"",methods:[],displayName:"TimeAgo",props:{date:{required:!0,tsType:{name:"union",raw:"Date | string | number",elements:[{name:"Date"},{name:"string"},{name:"number"}]},description:"Instant à afficher. Accepte un `Date`, une chaîne ISO-8601, ou des\nmillisecondes epoch. Une valeur invalide rend un repli sans `<time>`."},locale:{required:!1,tsType:{name:"Intl.LocalesArgument"},description:"Locale BCP 47 pour le texte relatif et absolu (`fr`, `en-US`, …).\nPose aussi `lang` (WCAG 3.1.2). Défaut : locale d’exécution."},timeZone:{required:!1,tsType:{name:"string"},description:"Fuseau IANA de l’heure absolue (`Africa/Niamey`, `UTC`, …). Doit être un\nnom valide : `Intl` lève une `RangeError` sinon. Défaut : fuseau d’exécution. Fixez-le dès que le composant est rendu côté\nserveur : sinon le serveur et le navigateur formatent l’heure absolue\nchacun dans son fuseau et l’hydratation échoue."},live:{required:!1,tsType:{name:"boolean"},description:'Si `true`, rafraîchit le texte relatif sur un intervalle grossier.\nVisuel uniquement — pas d’`aria-live`. Passez `aria-live="polite"` pour opt-in.',defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Taille du texte. `'md'` par défaut.",defaultValue:{value:"'md'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Infobulle native. Défaut : l’heure absolue formatée."}}};const i=60*1e3,j=60*i,pe=24*j;function n(e){return new Date(Date.now()+e)}function s({label:e,hint:o,children:t}){return a.jsxs("div",{className:"font-sans text-fg",children:[a.jsx("p",{className:"m-0 font-medium",children:e}),o?a.jsx("p",{className:"mt-1 mb-2 text-sm opacity-80",children:o}):a.jsx("div",{className:"h-2"}),t]})}const ge={title:"Components/TimeAgo",component:r,args:{date:n(-3*i)},argTypes:re,parameters:{controls:{include:["date","locale","timeZone","live","size","title","className"]}}},u={name:"Par défaut",parameters:d("import { TimeAgo } from '@dudaloglobal/d-ui';",'<TimeAgo date={submission.createdAt} locale="fr" />'),render:(e,{globals:o})=>{const t=c(o.locale),l=m(t);return a.jsx(s,{label:l.submitted,children:a.jsx(r,{...e,locale:t})})}},p={name:"Langue",parameters:d("import { TimeAgo } from '@dudaloglobal/d-ui';",`<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />`),render:(e,{globals:o})=>{const t=m(c(o.locale));return a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsx(s,{label:t.english,hint:t.englishHint,children:a.jsx(r,{date:n(-3*i),locale:"en"})}),a.jsx(s,{label:t.french,hint:t.frenchHint,children:a.jsx(r,{date:n(-3*i),locale:"fr"})})]})}},I=new Date("2026-08-26T23:30:00.000Z"),g={name:"Fuseau horaire",parameters:d("import { TimeAgo } from '@dudaloglobal/d-ui';",`<TimeAgo date={createdAt} locale="fr" timeZone="UTC" />
<TimeAgo date={createdAt} locale="fr" timeZone="Africa/Niamey" />`),render:(e,{globals:o})=>{const t=c(o.locale),l=m(t);return a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsx(s,{label:l.utc,hint:l.utcHint,children:a.jsx(r,{date:I,locale:t,timeZone:"UTC"})}),a.jsx(s,{label:l.niamey,hint:l.niameyHint,children:a.jsx(r,{date:I,locale:t,timeZone:"Africa/Niamey"})})]})}},f={name:"Mises à jour en direct",parameters:d("import { TimeAgo } from '@dudaloglobal/d-ui';",'<TimeAgo date={lastSeenAt} locale="fr" live />'),render:(e,{globals:o})=>{const t=c(o.locale),l=m(t);return a.jsx(s,{label:l.lastSeen,hint:l.liveHint,children:a.jsx(r,{...e,date:n(-15*1e3),locale:t,live:!0})})}},x={name:"Taille",parameters:d("import { TimeAgo } from '@dudaloglobal/d-ui';",`<TimeAgo date={createdAt} locale="fr" size="sm" />
<TimeAgo date={createdAt} locale="fr" size="md" />`),render:(e,{globals:o})=>{const t=c(o.locale),l=m(t);return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(s,{label:l.small,hint:'size="sm"',children:a.jsx(r,{...e,date:n(-3*i),locale:t,size:"sm"})}),a.jsx(s,{label:l.medium,hint:l.mediumHint,children:a.jsx(r,{...e,date:n(-3*i),locale:t,size:"md"})})]})}},A={name:"Passé et futur",parameters:d("import { TimeAgo } from '@dudaloglobal/d-ui';",`<TimeAgo date={fiveHoursAgo} locale="fr" />
<TimeAgo date={inThreeHours} locale="fr" />`),render:(e,{globals:o})=>{const t=c(o.locale),l=m(t);return a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsx(s,{label:l.past,hint:l.pastHint,children:a.jsx(r,{date:n(-5*j),locale:t})}),a.jsx(s,{label:l.future,hint:l.futureHint,children:a.jsx(r,{date:n(3*j),locale:t})}),a.jsx(s,{label:l.yesterday,children:a.jsx(r,{date:n(-2*pe),locale:t})})]})}};var Z,_,P;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(P=(_=u.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var F,U,q;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(U=p.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var M,O,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Fuseau horaire',
  parameters: componentSource("import { TimeAgo } from '@dudaloglobal/d-ui';", \`<TimeAgo date={createdAt} locale="fr" timeZone="UTC" />
<TimeAgo date={createdAt} locale="fr" timeZone="Africa/Niamey" />\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return <div className="flex flex-col gap-6">
        <Example label={copy.utc} hint={copy.utcHint}>
          <TimeAgo date={lateEvening} locale={locale} timeZone="UTC" />
        </Example>
        <Example label={copy.niamey} hint={copy.niameyHint}>
          <TimeAgo date={lateEvening} locale={locale} timeZone="Africa/Niamey" />
        </Example>
      </div>;
  }
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var k,R,W;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(R=f.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var B,G,$;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...($=(G=x.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var J,K,Q;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=A.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const fe=["Default","Locale","TimeZone","Live","Sizes","PastAndFuture"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Live:f,Locale:p,PastAndFuture:A,Sizes:x,TimeZone:g,__namedExportsOrder:fe,default:ge},Symbol.toStringTag,{value:"Module"}));export{u as D,p as L,A as P,x as S,he as T,g as a,f as b};
