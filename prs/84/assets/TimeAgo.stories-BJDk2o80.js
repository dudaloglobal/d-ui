import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as f}from"./docs-source-C_O40UCi.js";import{c as G,d as g,t as x}from"./docs-locale-u_wANLWo.js";import{r as H}from"./index-DQxMMF7O.js";function $({className:e,...t}){return a.jsx("span",{className:G("d-ui-visually-hidden",e),...t})}$.__docgenInfo={description:"Texte destiné aux lecteurs d’écran, masqué visuellement.",methods:[],displayName:"VisuallyHidden"};const ee={sm:"text-sm",md:"text-base"},te=[{unit:"year",ms:365.25*24*60*60*1e3},{unit:"month",ms:365.25/12*24*60*60*1e3},{unit:"week",ms:10080*60*1e3},{unit:"day",ms:1440*60*1e3},{unit:"hour",ms:3600*1e3},{unit:"minute",ms:60*1e3},{unit:"second",ms:1e3}];function oe(e){return e instanceof Date?e:new Date(e)}function ae(e){for(const{unit:t,ms:o}of te){const r=Math.trunc(e/o);if(Math.abs(r)>=1||t==="second")return{value:r,unit:t}}return{value:0,unit:"second"}}function re(e,t,o){const{value:r,unit:h}=ae(e.getTime()-t.getTime());return{iso:e.toISOString(),relative:new Intl.RelativeTimeFormat(o,{numeric:"auto"}).format(r,h),absolute:new Intl.DateTimeFormat(o,{dateStyle:"long",timeStyle:"short"}).format(e)}}function D(e){const t=Math.abs(e);return t<6e4?1e4:t<36e5?3e4:t<864e5?6e4:36e5}function se(e){if(typeof e=="string")return e;if(Array.isArray(e)){const t=e[0];return typeof t=="string"?t:t==null?void 0:t.toString()}if(e instanceof Intl.Locale)return e.toString()}function s({date:e,locale:t,live:o=!1,size:r="md",className:h,title:J,lang:K,...v}){const[Q,X]=H.useState(()=>new Date),j=oe(e),A=j.getTime(),y=!Number.isNaN(A),S=se(t)??K,N=G("font-sans text-fg",ee[r],h);if(H.useEffect(()=>{if(!o||!y)return;let T;const E=()=>{const z=new Date;X(z),T=setTimeout(E,D(A-z.getTime()))};return T=setTimeout(E,D(A-Date.now())),()=>clearTimeout(T)},[o,y,A]),!y)return a.jsx("span",{...v,lang:S,className:N,children:"—"});const{iso:Y,relative:Z,absolute:w}=re(j,Q,t);return a.jsxs("time",{...v,dateTime:Y,lang:S,title:J??w,suppressHydrationWarning:!0,className:N,children:[Z,a.jsx($,{children:`, ${w}`})]})}s.__docgenInfo={description:"",methods:[],displayName:"TimeAgo",props:{date:{required:!0,tsType:{name:"union",raw:"Date | string | number",elements:[{name:"Date"},{name:"string"},{name:"number"}]},description:"Instant to display. Accepts a `Date`, an ISO-8601 string, or epoch\nmilliseconds. Invalid values render a non-`<time>` fallback."},locale:{required:!1,tsType:{name:"Intl.LocalesArgument"},description:"BCP 47 locale for relative and absolute copy (`fr`, `en-US`, …).\nAlso sets `lang` on the element (WCAG 3.1.2). Defaults to the runtime locale."},live:{required:!1,tsType:{name:"boolean"},description:'When `true`, refresh the relative text on a coarse interval.\nUpdates are visual only — no `aria-live` — so assistive tech is not flooded.\nPass `aria-live="polite"` to opt into announcements.',defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Text size. `'md'` by default.",defaultValue:{value:"'md'",computed:!1}}}};const i=60*1e3,b=60*i,ne=24*b;function n(e){return new Date(Date.now()+e)}function l({label:e,hint:t,children:o}){return a.jsxs("div",{className:"font-sans text-fg",children:[a.jsx("p",{className:"m-0 font-medium",children:e}),t?a.jsx("p",{className:"mt-1 mb-2 text-sm opacity-80",children:t}):a.jsx("div",{className:"h-2"}),o]})}const le={title:"Components/TimeAgo",component:s,args:{date:n(-3*i)},argTypes:{date:{description:"Instant to display (`Date`, ISO string, or epoch ms)."},locale:{control:"text",description:"BCP 47 locale forwarded to Intl and to the `lang` attribute."},live:{control:"boolean",description:"Refresh relative text on a coarse interval (visual only)."},size:{control:"inline-radio",options:["sm","md"],description:"Text size."},title:{description:"Native tooltip. Defaults to the absolute formatted time."}},parameters:{controls:{include:["date","locale","live","size","title","className"]}}},c={parameters:f("import { TimeAgo } from 'd-ui';",'<TimeAgo date={submission.createdAt} locale="fr" />'),render:(e,{globals:t})=>{const o=g(t.locale),r=x(o);return a.jsx(l,{label:r.submitted,children:a.jsx(s,{...e,locale:o})})}},m={parameters:f("import { TimeAgo } from 'd-ui';",`<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />`),render:(e,{globals:t})=>{const o=x(g(t.locale));return a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsx(l,{label:o.english,hint:o.englishHint,children:a.jsx(s,{date:n(-3*i),locale:"en"})}),a.jsx(l,{label:o.french,hint:o.frenchHint,children:a.jsx(s,{date:n(-3*i),locale:"fr"})})]})}},d={parameters:f("import { TimeAgo } from 'd-ui';",'<TimeAgo date={lastSeenAt} locale="fr" live />'),render:(e,{globals:t})=>{const o=g(t.locale),r=x(o);return a.jsx(l,{label:r.lastSeen,hint:r.liveHint,children:a.jsx(s,{...e,date:n(-15*1e3),locale:o,live:!0})})}},u={parameters:f("import { TimeAgo } from 'd-ui';",`<TimeAgo date={createdAt} locale="fr" size="sm" />
<TimeAgo date={createdAt} locale="fr" size="md" />`),render:(e,{globals:t})=>{const o=g(t.locale),r=x(o);return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(l,{label:r.small,hint:'size="sm"',children:a.jsx(s,{...e,date:n(-3*i),locale:o,size:"sm"})}),a.jsx(l,{label:r.medium,hint:r.mediumHint,children:a.jsx(s,{...e,date:n(-3*i),locale:o,size:"md"})})]})}},p={parameters:f("import { TimeAgo } from 'd-ui';",`<TimeAgo date={fiveHoursAgo} locale="fr" />
<TimeAgo date={inThreeHours} locale="fr" />`),render:(e,{globals:t})=>{const o=g(t.locale),r=x(o);return a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsx(l,{label:r.past,hint:r.pastHint,children:a.jsx(s,{date:n(-5*b),locale:o})}),a.jsx(l,{label:r.future,hint:r.futureHint,children:a.jsx(s,{date:n(3*b),locale:o})}),a.jsx(l,{label:r.yesterday,children:a.jsx(s,{date:n(-2*ne),locale:o})})]})}};var I,L,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(L=c.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var C,P,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(P=m.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var q,F,M;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var k,U,V;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var R,W,B;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(W=p.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const ie=["Default","Locale","Live","Sizes","PastAndFuture"],pe=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Live:d,Locale:m,PastAndFuture:p,Sizes:u,__namedExportsOrder:ie,default:le},Symbol.toStringTag,{value:"Module"}));export{c as D,m as L,p as P,u as S,pe as T,d as a};
