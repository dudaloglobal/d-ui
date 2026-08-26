import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-AGuS8-Lw.js";import{M as a,C as i,A as d}from"./index-xREm7oDP.js";import{T as t,D as r,L as c,a as h,P as x,S as j}from"./TimeAgo.stories-B2CChWy-.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-7HxE-lmg.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./cx-2dOUpm6k.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t}),`
`,e.jsx(s.h1,{id:"time-ago",children:"Time ago"}),`
`,e.jsxs(s.p,{children:["Time ago displays a ",e.jsx(s.strong,{children:"relative"})," timestamp (",e.jsx(s.code,{children:"3 minutes ago"}),") while keeping the ",e.jsx(s.strong,{children:"absolute"})," instant available to people and machines. Copy is formatted with ",e.jsx(s.code,{children:"Intl"})," — there is no ",e.jsx(s.code,{children:"date-fns"})," locale bundle. Hover the timestamp for the absolute time; screen readers get both the relative phrase and the absolute date."]}),`
`,e.jsx(i,{of:r,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"locale",children:"Locale"}),`
`,e.jsxs(s.p,{children:["Pass a BCP 47 ",e.jsx(s.code,{children:"locale"})," string to control relative wording and absolute formatting. Locales that use 24-hour conventions (e.g. ",e.jsx(s.code,{children:"fr"}),") format the tooltip without an AM/PM suffix. ",e.jsx(s.code,{children:"locale"})," also sets the ",e.jsx(s.code,{children:"lang"})," attribute so assistive tech uses the right voice (WCAG 3.1.2)."]}),`
`,e.jsxs(s.p,{children:["The runtime locale is used when ",e.jsx(s.code,{children:"locale"})," is omitted. Inject the app language (",e.jsx(s.code,{children:"locale={i18n.language}"}),") rather than hard-coding a design-system default."]}),`
`,e.jsx(i,{of:c,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"live-updates",children:"Live updates"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"live"})," prop refreshes the visible relative text on a ",e.jsx(s.strong,{children:"coarse"})," interval so the label stays meaningful while the view is open:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"under 1 minute — every 10 seconds"}),`
`,e.jsx(s.li,{children:"under 1 hour — every 30 seconds"}),`
`,e.jsx(s.li,{children:"under 1 day — every minute"}),`
`,e.jsx(s.li,{children:"older — every hour"}),`
`]}),`
`,e.jsxs(s.p,{children:["Updates are visual only. ",e.jsx(s.code,{children:"live"})," does ",e.jsx(s.strong,{children:"not"})," set ",e.jsx(s.code,{children:"aria-live"}),", so screen readers are not flooded. Pass ",e.jsx(s.code,{children:'aria-live="polite"'})," to opt into announcements (avoid this on long lists)."]}),`
`,e.jsxs(s.p,{children:["Leave ",e.jsx(s.code,{children:"live"})," off in discussion threads, tables, and any list that can contain many timestamps."]}),`
`,e.jsx(i,{of:h,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"past-and-future",children:"Past and future"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Intl.RelativeTimeFormat"})," with ",e.jsx(s.code,{children:'numeric: "auto"'})," produces natural phrasing (",e.jsx(s.code,{children:"yesterday"}),", ",e.jsx(s.code,{children:"now"}),", ",e.jsx(s.code,{children:"in 3 hours"}),") in both directions."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h2,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," adjusts the text scale. Compose TimeAgo inside ",e.jsx(s.code,{children:"Text"})," / ",e.jsx(s.code,{children:"Heading"})," when those primitives are available; the built-in sizes cover standalone use."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'"sm"'})," — compact metadata (cards, comments)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'"md"'})," (default) — body-sized timestamps"]}),`
`]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h2,{id:"date-values",children:"Date values"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"date"})," accepts a ",e.jsx(s.code,{children:"Date"}),", an ISO-8601 string, or epoch milliseconds. The component always writes a valid global datetime on ",e.jsx(s.code,{children:"<time datetime>"}),"."]}),`
`,e.jsxs(s.p,{children:["An invalid value does not render ",e.jsx(s.code,{children:"<time>"}),": a ",e.jsx(s.code,{children:"<span>"})," with an em dash is used instead, so the markup stays semantically honest."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<TimeAgo date={submission.createdAt} locale="fr" />
<TimeAgo date="2026-08-26T12:00:00.000Z" locale="en" />
<TimeAgo date={1_724_673_600_000} locale="en" />
`})}),`
`,e.jsx(s.h2,{id:"accessibility-concerns",children:"Accessibility concerns"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"TimeAgo"})," is a native ",e.jsx(s.code,{children:"<time>"})," element. It has no extra ARIA role."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Always pass a valid ",e.jsx(s.code,{children:"date"})," so ",e.jsx(s.code,{children:"datetime"})," is a machine-readable ISO-8601 instant."]}),`
`,e.jsxs(s.li,{children:["Pass ",e.jsx(s.code,{children:"locale"})," whenever the copy is not in the document language. The element’s ",e.jsx(s.code,{children:"lang"})," follows ",e.jsx(s.code,{children:"locale"}),"."]}),`
`,e.jsxs(s.li,{children:["Visible text is relative. The absolute instant is in ",e.jsx(s.code,{children:"title"})," (pointer tooltip) ",e.jsx(s.strong,{children:"and"})," in a visually hidden phrase (assistive tech — ",e.jsx(s.code,{children:"title"})," is not a reliable accessible name)."]}),`
`,e.jsxs(s.li,{children:["Do not wrap TimeAgo in a live region that re-announces every tick. ",e.jsx(s.code,{children:"live"})," is silent by default."]}),`
`,e.jsxs(s.li,{children:["Opt-in announcements: ",e.jsx(s.code,{children:'aria-live="polite"'})," on the component. Keep the interval coarse."]}),`
`,e.jsxs(s.li,{children:["Relative text depends on “now”: the element sets ",e.jsx(s.code,{children:"suppressHydrationWarning"})," so SSR and the client may differ by one unit without crashing hydration."]}),`
`]}),`
`,e.jsx(s.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(s.h3,{id:"timeago",children:"TimeAgo"}),`
`,e.jsxs(s.p,{children:["Native ",e.jsx(s.code,{children:"<time>"})," attributes (",e.jsx(s.code,{children:"className"}),", ",e.jsx(s.code,{children:"aria-live"}),", …) are forwarded. ",e.jsx(s.code,{children:"dateTime"})," and ",e.jsx(s.code,{children:"children"})," are owned by the component."]}),`
`,e.jsx(d,{of:t,include:["date","locale","live","size","title"]})]})}function S(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{S as default};
