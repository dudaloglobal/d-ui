import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{w as Y,c as f}from"./docs-source-DZzMf2H_.js";import{c as Z,d as g,g as x}from"./cx-Dh08zBtx.js";import{r as L}from"./index-DQxMMF7O.js";import{V as ee}from"./VisuallyHidden-DS-G7beS.js";const ae={sm:"text-sm",md:"text-base"},te=[{unit:"year",ms:365.25*24*60*60*1e3},{unit:"month",ms:365.25/12*24*60*60*1e3},{unit:"week",ms:10080*60*1e3},{unit:"day",ms:1440*60*1e3},{unit:"hour",ms:3600*1e3},{unit:"minute",ms:60*1e3},{unit:"second",ms:1e3}];function oe(e){return e instanceof Date?e:new Date(e)}function re(e){for(const{unit:a,ms:t}of te){const r=Math.trunc(e/t);if(Math.abs(r)>=1||a==="second")return{value:r,unit:a}}return{value:0,unit:"second"}}function se(e,a,t){const{value:r,unit:T}=re(e.getTime()-a.getTime());return{iso:e.toISOString(),relative:new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(r,T),absolute:new Intl.DateTimeFormat(t,{dateStyle:"long",timeStyle:"short"}).format(e)}}function z(e){const a=Math.abs(e);return a<6e4?1e4:a<36e5?3e4:a<864e5?6e4:36e5}function le(e){if(typeof e=="string")return e;if(Array.isArray(e)){const a=e[0];return typeof a=="string"?a:a==null?void 0:a.toString()}if(e instanceof Intl.Locale)return e.toString()}function s({date:e,locale:a,live:t=!1,size:r="md",className:T,title:G,lang:$,...v}){const[J,K]=L.useState(()=>new Date),j=oe(e),A=j.getTime(),y=!Number.isNaN(A),S=le(a)??$,N=Z("font-sans text-fg",ae[r],T);if(L.useEffect(()=>{if(!t||!y)return;let h;const E=()=>{const H=new Date;K(H),h=setTimeout(E,z(A-H.getTime()))};return h=setTimeout(E,z(A-Date.now())),()=>clearTimeout(h)},[t,y,A]),!y)return o.jsx("span",{...v,lang:S,className:N,children:"—"});const{iso:Q,relative:X,absolute:w}=se(j,J,a);return o.jsxs("time",{...v,dateTime:Q,lang:S,title:G??w,suppressHydrationWarning:!0,className:N,children:[X,o.jsx(ee,{children:`, ${w}`})]})}s.__docgenInfo={description:"",methods:[],displayName:"TimeAgo",props:{date:{required:!0,tsType:{name:"union",raw:"Date | string | number",elements:[{name:"Date"},{name:"string"},{name:"number"}]},description:"Instant à afficher. Accepte un `Date`, une chaîne ISO-8601, ou des\nmillisecondes epoch. Une valeur invalide rend un repli sans `<time>`."},locale:{required:!1,tsType:{name:"Intl.LocalesArgument"},description:"Locale BCP 47 pour le texte relatif et absolu (`fr`, `en-US`, …).\nPose aussi `lang` (WCAG 3.1.2). Défaut : locale d’exécution."},live:{required:!1,tsType:{name:"boolean"},description:'Si `true`, rafraîchit le texte relatif sur un intervalle grossier.\nVisuel uniquement — pas d’`aria-live`. Passez `aria-live="polite"` pour opt-in.',defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Taille du texte. `'md'` par défaut.",defaultValue:{value:"'md'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Infobulle native. Défaut : l’heure absolue formatée."}}};const i=60*1e3,b=60*i,ne=24*b;function l(e){return new Date(Date.now()+e)}function n({label:e,hint:a,children:t}){return o.jsxs("div",{className:"font-sans text-fg",children:[o.jsx("p",{className:"m-0 font-medium",children:e}),a?o.jsx("p",{className:"mt-1 mb-2 text-sm opacity-80",children:a}):o.jsx("div",{className:"h-2"}),t]})}const ie={title:"Components/TimeAgo",component:s,args:{date:l(-3*i)},argTypes:Y,parameters:{controls:{include:["date","locale","live","size","title","className"]}}},c={name:"Par défaut",parameters:f("import { TimeAgo } from 'd-ui';",'<TimeAgo date={submission.createdAt} locale="fr" />'),render:(e,{globals:a})=>{const t=g(a.locale),r=x(t);return o.jsx(n,{label:r.submitted,children:o.jsx(s,{...e,locale:t})})}},m={name:"Langue",parameters:f("import { TimeAgo } from 'd-ui';",`<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />`),render:(e,{globals:a})=>{const t=x(g(a.locale));return o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsx(n,{label:t.english,hint:t.englishHint,children:o.jsx(s,{date:l(-3*i),locale:"en"})}),o.jsx(n,{label:t.french,hint:t.frenchHint,children:o.jsx(s,{date:l(-3*i),locale:"fr"})})]})}},u={name:"Mises à jour en direct",parameters:f("import { TimeAgo } from 'd-ui';",'<TimeAgo date={lastSeenAt} locale="fr" live />'),render:(e,{globals:a})=>{const t=g(a.locale),r=x(t);return o.jsx(n,{label:r.lastSeen,hint:r.liveHint,children:o.jsx(s,{...e,date:l(-15*1e3),locale:t,live:!0})})}},d={name:"Taille",parameters:f("import { TimeAgo } from 'd-ui';",`<TimeAgo date={createdAt} locale="fr" size="sm" />
<TimeAgo date={createdAt} locale="fr" size="md" />`),render:(e,{globals:a})=>{const t=g(a.locale),r=x(t);return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(n,{label:r.small,hint:'size="sm"',children:o.jsx(s,{...e,date:l(-3*i),locale:t,size:"sm"})}),o.jsx(n,{label:r.medium,hint:r.mediumHint,children:o.jsx(s,{...e,date:l(-3*i),locale:t,size:"md"})})]})}},p={name:"Passé et futur",parameters:f("import { TimeAgo } from 'd-ui';",`<TimeAgo date={fiveHoursAgo} locale="fr" />
<TimeAgo date={inThreeHours} locale="fr" />`),render:(e,{globals:a})=>{const t=g(a.locale),r=x(t);return o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsx(n,{label:r.past,hint:r.pastHint,children:o.jsx(s,{date:l(-5*b),locale:t})}),o.jsx(n,{label:r.future,hint:r.futureHint,children:o.jsx(s,{date:l(3*b),locale:t})}),o.jsx(n,{label:r.yesterday,children:o.jsx(s,{date:l(-2*ne),locale:t})})]})}};var D,I,P;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var C,_,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var q,F,O;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var V,U,k;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(U=d.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var R,W,B;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(W=p.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const ce=["Default","Locale","Live","Sizes","PastAndFuture"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Live:u,Locale:m,PastAndFuture:p,Sizes:d,__namedExportsOrder:ce,default:ie},Symbol.toStringTag,{value:"Module"}));export{c as D,m as L,p as P,d as S,ge as T,u as a};
