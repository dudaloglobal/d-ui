import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c as B,d as f,t as g}from"./docs-locale-C57-gmqy.js";import{r as z}from"./index-DQxMMF7O.js";function G({className:e,...t}){return o.jsx("span",{className:B("d-ui-visually-hidden",e),...t})}G.__docgenInfo={description:"Texte destiné aux lecteurs d’écran, masqué visuellement.",methods:[],displayName:"VisuallyHidden"};const Z={sm:"text-sm",md:"text-base"},ee=[{unit:"year",ms:365.25*24*60*60*1e3},{unit:"month",ms:365.25/12*24*60*60*1e3},{unit:"week",ms:10080*60*1e3},{unit:"day",ms:1440*60*1e3},{unit:"hour",ms:3600*1e3},{unit:"minute",ms:60*1e3},{unit:"second",ms:1e3}];function te(e){return e instanceof Date?e:new Date(e)}function ae(e){for(const{unit:t,ms:a}of ee){const s=Math.trunc(e/a);if(Math.abs(s)>=1||t==="second")return{value:s,unit:t}}return{value:0,unit:"second"}}function oe(e,t,a){const{value:s,unit:h}=ae(e.getTime()-t.getTime());return{iso:e.toISOString(),relative:new Intl.RelativeTimeFormat(a,{numeric:"auto"}).format(s,h),absolute:new Intl.DateTimeFormat(a,{dateStyle:"long",timeStyle:"short"}).format(e)}}function H(e){const t=Math.abs(e);return t<6e4?1e4:t<36e5?3e4:t<864e5?6e4:36e5}function se(e){if(typeof e=="string")return e;if(Array.isArray(e)){const t=e[0];return typeof t=="string"?t:t==null?void 0:t.toString()}if(e instanceof Intl.Locale)return e.toString()}function n({date:e,locale:t,live:a=!1,size:s="md",className:h,title:$,lang:J,...b}){const[K,Q]=z.useState(()=>new Date),v=te(e),x=v.getTime(),y=!Number.isNaN(x),j=se(t)??J,N=B("font-sans text-fg",Z[s],h);if(z.useEffect(()=>{if(!a||!y)return;let A;const w=()=>{const E=new Date;Q(E),A=setTimeout(w,H(x-E.getTime()))};return A=setTimeout(w,H(x-Date.now())),()=>clearTimeout(A)},[a,y,x]),!y)return o.jsx("span",{...b,lang:j,className:N,children:"—"});const{iso:X,relative:Y,absolute:S}=oe(v,K,t);return o.jsxs("time",{...b,dateTime:X,lang:j,title:$??S,suppressHydrationWarning:!0,className:N,children:[Y,o.jsx(G,{children:`, ${S}`})]})}n.__docgenInfo={description:"",methods:[],displayName:"TimeAgo",props:{date:{required:!0,tsType:{name:"union",raw:"Date | string | number",elements:[{name:"Date"},{name:"string"},{name:"number"}]},description:"Instant to display. Accepts a `Date`, an ISO-8601 string, or epoch\nmilliseconds. Invalid values render a non-`<time>` fallback."},locale:{required:!1,tsType:{name:"Intl.LocalesArgument"},description:"BCP 47 locale for relative and absolute copy (`fr`, `en-US`, …).\nAlso sets `lang` on the element (WCAG 3.1.2). Defaults to the runtime locale."},live:{required:!1,tsType:{name:"boolean"},description:'When `true`, refresh the relative text on a coarse interval.\nUpdates are visual only — no `aria-live` — so assistive tech is not flooded.\nPass `aria-live="polite"` to opt into announcements.',defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Text size. `'md'` by default.",defaultValue:{value:"'md'",computed:!1}}}};const c=60*1e3,T=60*c,ne=24*T;function l(e){return new Date(Date.now()+e)}function r({label:e,hint:t,children:a}){return o.jsxs("div",{className:"font-sans text-fg",children:[o.jsx("p",{className:"m-0 font-medium",children:e}),t?o.jsx("p",{className:"mt-1 mb-2 text-sm opacity-80",children:t}):o.jsx("div",{className:"h-2"}),a]})}const le={title:"Components/TimeAgo",component:n,args:{date:l(-3*c)},argTypes:{date:{description:"Instant to display (`Date`, ISO string, or epoch ms)."},locale:{control:"text",description:"BCP 47 locale forwarded to Intl and to the `lang` attribute."},live:{control:"boolean",description:"Refresh relative text on a coarse interval (visual only)."},size:{control:"inline-radio",options:["sm","md"],description:"Text size."},title:{description:"Native tooltip. Defaults to the absolute formatted time."}},parameters:{controls:{include:["date","locale","live","size","title","className"]}}},i={parameters:{docs:{source:{code:'<TimeAgo date={submission.createdAt} locale="fr" />'}}},render:(e,{globals:t})=>{const a=f(t.locale),s=g(a);return o.jsx(r,{label:s.submitted,children:o.jsx(n,{...e,locale:a})})}},m={parameters:{docs:{source:{code:`<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />`}}},render:(e,{globals:t})=>{const a=g(f(t.locale));return o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsx(r,{label:a.english,hint:a.englishHint,children:o.jsx(n,{date:l(-3*c),locale:"en"})}),o.jsx(r,{label:a.french,hint:a.frenchHint,children:o.jsx(n,{date:l(-3*c),locale:"fr"})})]})}},d={parameters:{docs:{source:{code:'<TimeAgo date={lastSeenAt} locale="fr" live />'}}},render:(e,{globals:t})=>{const a=f(t.locale),s=g(a);return o.jsx(r,{label:s.lastSeen,hint:s.liveHint,children:o.jsx(n,{...e,date:l(-15*1e3),locale:a,live:!0})})}},u={parameters:{docs:{source:{code:`<TimeAgo date={createdAt} locale="fr" size="sm" />
<TimeAgo date={createdAt} locale="fr" size="md" />`}}},render:(e,{globals:t})=>{const a=f(t.locale),s=g(a);return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(r,{label:s.small,hint:'size="sm"',children:o.jsx(n,{...e,date:l(-3*c),locale:a,size:"sm"})}),o.jsx(r,{label:s.medium,hint:s.mediumHint,children:o.jsx(n,{...e,date:l(-3*c),locale:a,size:"md"})})]})}},p={parameters:{docs:{source:{code:`<TimeAgo date={fiveHoursAgo} locale="fr" />
<TimeAgo date={inThreeHours} locale="fr" />`}}},render:(e,{globals:t})=>{const a=f(t.locale),s=g(a);return o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsx(r,{label:s.past,hint:s.pastHint,children:o.jsx(n,{date:l(-5*T),locale:a})}),o.jsx(r,{label:s.future,hint:s.futureHint,children:o.jsx(n,{date:l(3*T),locale:a})}),o.jsx(r,{label:s.yesterday,children:o.jsx(n,{date:l(-2*ne),locale:a})})]})}};var D,I,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: '<TimeAgo date={submission.createdAt} locale="fr" />'
      }
    }
  },
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return <Example label={copy.submitted}>
        <TimeAgo {...args} locale={locale} />
      </Example>;
  }
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var _,C,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />\`
      }
    }
  },
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
}`,...(P=(C=m.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var O,q,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: '<TimeAgo date={lastSeenAt} locale="fr" live />'
      }
    }
  },
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = timeAgoCopy(locale);
    return <Example label={copy.lastSeen} hint={copy.liveHint}>
        <TimeAgo {...args} date={fromNow(-15 * 1000)} locale={locale} live />
      </Example>;
  }
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var M,k,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<TimeAgo date={createdAt} locale="fr" size="sm" />
<TimeAgo date={createdAt} locale="fr" size="md" />\`
      }
    }
  },
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
}`,...(U=(k=u.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var V,R,W;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<TimeAgo date={fiveHoursAgo} locale="fr" />
<TimeAgo date={inThreeHours} locale="fr" />\`
      }
    }
  },
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
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const re=["Default","Locale","Live","Sizes","PastAndFuture"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Live:d,Locale:m,PastAndFuture:p,Sizes:u,__namedExportsOrder:re,default:le},Symbol.toStringTag,{value:"Module"}));export{i as D,m as L,p as P,u as S,de as T,d as a};
