import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index-DQxMMF7O.js";import{c as R}from"./cx-2dOUpm6k.js";function W({className:e,...a}){return t.jsx("span",{className:R("d-ui-visually-hidden",e),...a})}W.__docgenInfo={description:"Texte destiné aux lecteurs d’écran, masqué visuellement.",methods:[],displayName:"VisuallyHidden"};const Q={sm:"text-sm",md:"text-base"},X=[{unit:"year",ms:365.25*24*60*60*1e3},{unit:"month",ms:365.25/12*24*60*60*1e3},{unit:"week",ms:10080*60*1e3},{unit:"day",ms:1440*60*1e3},{unit:"hour",ms:3600*1e3},{unit:"minute",ms:60*1e3},{unit:"second",ms:1e3}];function Z(e){return e instanceof Date?e:new Date(e)}function ee(e){for(const{unit:a,ms:o}of X){const i=Math.trunc(e/o);if(Math.abs(i)>=1||a==="second")return{value:i,unit:a}}return{value:0,unit:"second"}}function te(e,a,o){const{value:i,unit:g}=ee(e.getTime()-a.getTime());return{iso:e.toISOString(),relative:new Intl.RelativeTimeFormat(o,{numeric:"auto"}).format(i,g),absolute:new Intl.DateTimeFormat(o,{dateStyle:"long",timeStyle:"short"}).format(e)}}function w(e){const a=Math.abs(e);return a<6e4?1e4:a<36e5?3e4:a<864e5?6e4:36e5}function ae(e){if(typeof e=="string")return e;if(Array.isArray(e)){const a=e[0];return typeof a=="string"?a:a==null?void 0:a.toString()}if(e instanceof Intl.Locale)return e.toString()}function s({date:e,locale:a,live:o=!1,size:i="md",className:g,title:B,lang:Y,...A}){const[G,$]=E.useState(()=>new Date),T=Z(e),f=T.getTime(),x=!Number.isNaN(f),b=ae(a)??Y,j=R("font-sans text-fg",Q[i],g);if(E.useEffect(()=>{if(!o||!x)return;let h;const N=()=>{const S=new Date;$(S),h=setTimeout(N,w(f-S.getTime()))};return h=setTimeout(N,w(f-Date.now())),()=>clearTimeout(h)},[o,x,f]),!x)return t.jsx("span",{...A,lang:b,className:j,children:"—"});const{iso:J,relative:K,absolute:y}=te(T,G,a);return t.jsxs("time",{...A,dateTime:J,lang:b,title:B??y,suppressHydrationWarning:!0,className:j,children:[K,t.jsx(W,{children:`, ${y}`})]})}s.__docgenInfo={description:"",methods:[],displayName:"TimeAgo",props:{date:{required:!0,tsType:{name:"union",raw:"Date | string | number",elements:[{name:"Date"},{name:"string"},{name:"number"}]},description:"Instant to display. Accepts a `Date`, an ISO-8601 string, or epoch\nmilliseconds. Invalid values render a non-`<time>` fallback."},locale:{required:!1,tsType:{name:"Intl.LocalesArgument"},description:"BCP 47 locale for relative and absolute copy (`fr`, `en-US`, …).\nAlso sets `lang` on the element (WCAG 3.1.2). Defaults to the runtime locale."},live:{required:!1,tsType:{name:"boolean"},description:'When `true`, refresh the relative text on a coarse interval.\nUpdates are visual only — no `aria-live` — so assistive tech is not flooded.\nPass `aria-live="polite"` to opt into announcements.',defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Text size. `'md'` by default.",defaultValue:{value:"'md'",computed:!1}}}};const l=60*1e3,v=60*l,se=24*v;function r(e){return new Date(Date.now()+e)}function n({label:e,hint:a,children:o}){return t.jsxs("div",{className:"font-sans text-fg",children:[t.jsx("p",{className:"m-0 font-medium",children:e}),a?t.jsx("p",{className:"mt-1 mb-2 text-sm opacity-80",children:a}):t.jsx("div",{className:"h-2"}),o]})}const oe={title:"Components/TimeAgo",component:s,args:{date:r(-3*l),locale:"en"},argTypes:{date:{description:"Instant to display (`Date`, ISO string, or epoch ms)."},locale:{control:"text",description:"BCP 47 locale forwarded to Intl and to the `lang` attribute."},live:{control:"boolean",description:"Refresh relative text on a coarse interval (visual only)."},size:{control:"inline-radio",options:["sm","md"],description:"Text size."},title:{description:"Native tooltip. Defaults to the absolute formatted time."}},parameters:{controls:{include:["date","locale","live","size","title","className"]}}},c={args:{locale:"fr"},parameters:{docs:{source:{code:'<TimeAgo date={submission.createdAt} locale="fr" />'}}},render:e=>t.jsx(n,{label:"Submitted",children:t.jsx(s,{...e})})},m={parameters:{docs:{source:{code:`<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />`}}},render:()=>t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsx(n,{label:"English",hint:'locale="en"',children:t.jsx(s,{date:r(-3*l),locale:"en"})}),t.jsx(n,{label:"Français",hint:'locale="fr" — 24h absolute time, no AM/PM',children:t.jsx(s,{date:r(-3*l),locale:"fr"})})]})},d={parameters:{docs:{source:{code:'<TimeAgo date={lastSeenAt} locale="en" live />'}}},render:e=>t.jsx(n,{label:"Last seen",hint:"live — relative text updates; assistive tech is not announced on each tick",children:t.jsx(s,{...e,date:r(-15*1e3),live:!0})})},u={parameters:{docs:{source:{code:`<TimeAgo date={createdAt} size="sm" />
<TimeAgo date={createdAt} size="md" />`}}},render:e=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(n,{label:"Small",hint:'size="sm"',children:t.jsx(s,{...e,date:r(-3*l),size:"sm"})}),t.jsx(n,{label:"Medium",hint:'size="md" (default)',children:t.jsx(s,{...e,date:r(-3*l),size:"md"})})]})},p={parameters:{docs:{source:{code:`<TimeAgo date={fiveHoursAgo} locale="en" />
<TimeAgo date={inThreeHours} locale="en" />`}}},render:()=>t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsx(n,{label:"Past",hint:"Five hours ago",children:t.jsx(s,{date:r(-5*v),locale:"en"})}),t.jsx(n,{label:"Future",hint:"In three hours",children:t.jsx(s,{date:r(3*v),locale:"en"})}),t.jsx(n,{label:"Yesterday",children:t.jsx(s,{date:r(-2*se),locale:"en"})})]})};var z,D,I;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    locale: 'fr'
  },
  parameters: {
    docs: {
      source: {
        code: '<TimeAgo date={submission.createdAt} locale="fr" />'
      }
    }
  },
  render: args => <Example label="Submitted">
      <TimeAgo {...args} />
    </Example>
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var F,L,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<TimeAgo date={createdAt} locale="en" />
<TimeAgo date={createdAt} locale="fr" />\`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <Example label="English" hint='locale="en"'>
        <TimeAgo date={fromNow(-3 * minute)} locale="en" />
      </Example>
      <Example label="Français" hint='locale="fr" — 24h absolute time, no AM/PM'>
        <TimeAgo date={fromNow(-3 * minute)} locale="fr" />
      </Example>
    </div>
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,_,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: '<TimeAgo date={lastSeenAt} locale="en" live />'
      }
    }
  },
  render: args => <Example label="Last seen" hint="live — relative text updates; assistive tech is not announced on each tick">
      <TimeAgo {...args} date={fromNow(-15 * 1000)} live />
    </Example>
}`,...(H=(_=d.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var k,O,q;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<TimeAgo date={createdAt} size="sm" />
<TimeAgo date={createdAt} size="md" />\`
      }
    }
  },
  render: args => <div className="flex flex-col gap-4">
      <Example label="Small" hint='size="sm"'>
        <TimeAgo {...args} date={fromNow(-3 * minute)} size="sm" />
      </Example>
      <Example label="Medium" hint='size="md" (default)'>
        <TimeAgo {...args} date={fromNow(-3 * minute)} size="md" />
      </Example>
    </div>
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var C,U,V;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<TimeAgo date={fiveHoursAgo} locale="en" />
<TimeAgo date={inThreeHours} locale="en" />\`
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <Example label="Past" hint="Five hours ago">
        <TimeAgo date={fromNow(-5 * hour)} locale="en" />
      </Example>
      <Example label="Future" hint="In three hours">
        <TimeAgo date={fromNow(3 * hour)} locale="en" />
      </Example>
      <Example label="Yesterday">
        <TimeAgo date={fromNow(-2 * day)} locale="en" />
      </Example>
    </div>
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const re=["Default","Locale","Live","Sizes","PastAndFuture"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Live:d,Locale:m,PastAndFuture:p,Sizes:u,__namedExportsOrder:re,default:oe},Symbol.toStringTag,{value:"Module"}));export{c as D,m as L,p as P,u as S,ce as T,d as a};
