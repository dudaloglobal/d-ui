import{u as i,j as e,M as x,P as a,C as s,a as n,b as t,U as l,A as j}from"./iframe-D_uNPPBV.js";import{C as d,D as m,R as k,W as h,Y as p,a as u,b as f,L as y,M as C,S as M,c as b}from"./Calendar.stories--0vOcFih.js";import"./preload-helper-Dp1pzeXC.js";import"./arg-types-DBkVzJFl.js";import"./docs-source-C_O40UCi.js";import"./Calendar-Cm3U5hAE.js";import"./VisuallyHidden-D6u_xeh3.js";import"./IconButton-C7rnat-o.js";import"./Button-DyzFzmN3.js";import"./cornerRadius-B4XFh-_5.js";import"./calendarDate-jCkUcsyL.js";function c(o){const r={code:"code",h1:"h1",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:d}),`
`,e.jsx(r.h1,{id:"calendar",children:"Calendar"}),`
`,e.jsx(a,{k:"calendar.intro"}),`
`,e.jsx(a,{k:"chrome.examplesFollow"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n,{k:"calendar.restricted"}),`
`,e.jsx(a,{k:"calendar.restrictedBody"}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n,{k:"calendar.year"}),`
`,e.jsx(a,{k:"calendar.yearBody"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n,{k:"calendar.range"}),`
`,e.jsx(a,{k:"calendar.rangeBody"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n,{k:"calendar.weekStart"}),`
`,e.jsx(a,{k:"calendar.weekStartBody"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n,{k:"calendar.locale"}),`
`,e.jsx(a,{k:"calendar.localeBody"}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n,{k:"calendar.multipleMonths"}),`
`,e.jsx(a,{k:"calendar.multipleMonthsBody"}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(n,{k:"chrome.sizes"}),`
`,e.jsx(a,{k:"chrome.useSizes"}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(n,{k:"chrome.specialStates"}),`
`,e.jsx(t,{k:"chrome.disabled"}),`
`,e.jsx(a,{k:"chrome.useDisabled"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n,{k:"calendar.adapter"}),`
`,e.jsx(a,{k:"calendar.adapterBody"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { Calendar, toCalendarDate, fromCalendarDate } from 'd-ui';

const selected = toCalendarDate(booking.start, 'local');

<Calendar
  value={selected}
  onValueChange={(date) => setStart(fromCalendarDate(date, 'local'))}
  locale="fr"
  weekStartsOn={1}
/>;
`})}),`
`,e.jsx(n,{k:"chrome.accessibility"}),`
`,e.jsx(a,{k:"calendar.a11yBody"}),`
`,e.jsx(a,{k:"calendar.a11yKeys"}),`
`,e.jsx(t,{k:"chrome.do"}),`
`,e.jsx(l,{items:["calendar.doGrid","calendar.doAdapter","calendar.doUnavailable"]}),`
`,e.jsx(t,{k:"chrome.dont"}),`
`,e.jsx(l,{items:["calendar.dontEvents","calendar.dontPicker","calendar.dontTimezone"]}),`
`,e.jsx(a,{k:"chrome.themeLang"}),`
`,e.jsx(n,{k:"chrome.properties"}),`
`,e.jsx(a,{k:"calendar.propsBody"}),`
`,e.jsx(j,{of:d,include:["value","defaultValue","onValueChange","month","defaultMonth","onMonthChange","today","minValue","maxValue","selectionMode","isDateUnavailable","weekStartsOn","locale","numberOfMonths","size","disabled","previousMonthLabel","nextMonthLabel","monthSelectLabel","yearSelectLabel","name","nameEnd"]})]})}function A(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(c,{...o})}):c(o)}export{A as default};
