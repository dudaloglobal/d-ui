import{d as r,j as e,g as M}from"./iframe-C1QnaEd8.js";import{c as $}from"./arg-types-D7CIzvvN.js";import{c as o}from"./docs-source-C_O40UCi.js";import{C as t}from"./Calendar-CbUuTAwU.js";import{w as ee}from"./calendarDate-jCkUcsyL.js";const s="import { Calendar } from 'd-ui';",d={year:2026,month:3,day:18},c={year:2026,month:3,day:12},m={year:2026,month:3,day:1};function ae(a){const n=ee(a);return n===0||n===6}const ne={title:"Components/Calendar",component:t,args:{today:d,defaultValue:c,defaultMonth:m,locale:"fr",weekStartsOn:1},argTypes:$,parameters:{controls:{include:["size","locale","weekStartsOn","numberOfMonths","disabled","selectionMode","previousMonthLabel","nextMonthLabel"]}}},u={name:"Par défaut",parameters:o(s,`<Calendar
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    locale="fr"
    weekStartsOn={1}
/>`),render:(a,{globals:n})=>{const l=r(n.locale);return e.jsx(t,{...a,locale:a.locale??l})}},y={name:"Dates restreintes",parameters:o(s,`<Calendar
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    minValue={{ year: 2026, month: 3, day: 5 }}
    maxValue={{ year: 2026, month: 3, day: 25 }}
    isDateUnavailable={(date) => date.day === 13}
    locale="fr"
    weekStartsOn={1}
/>`),args:{minValue:{year:2026,month:3,day:5},maxValue:{year:2026,month:3,day:25},isDateUnavailable:a=>a.day===13},render:(a,{globals:n})=>e.jsx(t,{...a,locale:a.locale??r(n.locale)})},i={name:"Début de semaine",parameters:o(s,`<>
    <Calendar weekStartsOn={1} locale="fr" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar weekStartsOn={0} locale="en" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>`),render:(a,{globals:n})=>{const l=M(r(n.locale));return e.jsxs("div",{className:"flex flex-wrap gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:l.weekMonday}),e.jsx(t,{today:d,defaultValue:c,defaultMonth:m,locale:"fr",weekStartsOn:1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:l.weekSunday}),e.jsx(t,{today:d,defaultValue:c,defaultMonth:m,locale:"en",weekStartsOn:0})]})]})}},p={name:"Langue",parameters:o(s,`<>
    <Calendar locale="fr" weekStartsOn={1} defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar locale="en" weekStartsOn={0} defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>`),render:(a,{globals:n})=>{const l=M(r(n.locale));return e.jsxs("div",{className:"flex flex-wrap gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:l.french}),e.jsx(t,{today:d,defaultValue:c,defaultMonth:m,locale:"fr",weekStartsOn:1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:l.english}),e.jsx(t,{today:d,defaultValue:c,defaultMonth:m,locale:"en",weekStartsOn:0})]})]})}},f={name:"Plusieurs mois",parameters:o(s,`<Calendar
    numberOfMonths={2}
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    locale="fr"
    weekStartsOn={1}
/>`),args:{numberOfMonths:2},render:(a,{globals:n})=>e.jsx(t,{...a,locale:a.locale??r(n.locale)})},h={name:"Tailles",parameters:o(s,`<>
    <Calendar size="sm" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar size="md" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar size="lg" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>`),render:(a,{globals:n})=>{const l=r(n.locale),S=M(l);return e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:S.small}),e.jsx(t,{size:"sm",today:d,defaultValue:c,defaultMonth:m,locale:l,weekStartsOn:1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:S.medium}),e.jsx(t,{size:"md",today:d,defaultValue:c,defaultMonth:m,locale:l,weekStartsOn:1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:S.large}),e.jsx(t,{size:"lg",today:d,defaultValue:c,defaultMonth:m,locale:l,weekStartsOn:1})]})]})}},g={name:"Désactivé",parameters:o(s,"<Calendar disabled defaultValue={{ year: 2026, month: 3, day: 12 }} />"),args:{disabled:!0},render:(a,{globals:n})=>e.jsx(t,{...a,locale:a.locale??r(n.locale)})},x={name:"Week-ends indisponibles",parameters:o(s,`<Calendar
    isDateUnavailable={(date) => {
        const weekday = new Date(Date.UTC(date.year, date.month - 1, date.day)).getUTCDay();
        return weekday === 0 || weekday === 6;
    }}
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    locale="fr"
/>`),args:{isDateUnavailable:ae},render:(a,{globals:n})=>e.jsx(t,{...a,locale:a.locale??r(n.locale)})},b={name:"Année",parameters:o(s,`<Calendar
    defaultMonth={{ year: 2026, month: 3, day: 1 }}
    minValue={{ year: 2020, month: 1, day: 1 }}
    maxValue={{ year: 2030, month: 12, day: 31 }}
    locale="fr"
/>`),args:{minValue:{year:2020,month:1,day:1},maxValue:{year:2030,month:12,day:31}},render:(a,{globals:n})=>e.jsx(t,{...a,locale:a.locale??r(n.locale)})},C={name:"Plage de dates",parameters:o(s,`<Calendar
    selectionMode="range"
    numberOfMonths={2}
    defaultValue={{
        start: { year: 2026, month: 3, day: 25 },
        end: { year: 2026, month: 4, day: 8 },
    }}
    locale="fr"
/>`),args:{selectionMode:"range",numberOfMonths:2,defaultValue:{start:{year:2026,month:3,day:25},end:{year:2026,month:4,day:8}}},render:(a,{globals:n})=>e.jsx(t,{...a,locale:a.locale??r(n.locale)})};var w,k,V;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importCalendar, \`<Calendar
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    locale="fr"
    weekStartsOn={1}
/>\`),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    return <Calendar {...args} locale={args.locale ?? locale} />;
  }
}`,...(V=(k=u.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var v,O,j;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Dates restreintes',
  parameters: componentSource(importCalendar, \`<Calendar
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    minValue={{ year: 2026, month: 3, day: 5 }}
    maxValue={{ year: 2026, month: 3, day: 25 }}
    isDateUnavailable={(date) => date.day === 13}
    locale="fr"
    weekStartsOn={1}
/>\`),
  args: {
    minValue: {
      year: 2026,
      month: 3,
      day: 5
    },
    maxValue: {
      year: 2026,
      month: 3,
      day: 25
    },
    isDateUnavailable: date => date.day === 13
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(j=(O=y.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var D,N,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Début de semaine',
  parameters: componentSource(importCalendar, \`<>
    <Calendar weekStartsOn={1} locale="fr" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar weekStartsOn={0} locale="en" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = calendarCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap gap-8">
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.weekMonday}</p>
          <Calendar today={today} defaultValue={selected} defaultMonth={march} locale="fr" weekStartsOn={1} />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.weekSunday}</p>
          <Calendar today={today} defaultValue={selected} defaultMonth={march} locale="en" weekStartsOn={0} />
        </div>
      </div>;
  }
}`,...(L=(N=i.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var z,U,_;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Langue',
  parameters: componentSource(importCalendar, \`<>
    <Calendar locale="fr" weekStartsOn={1} defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar locale="en" weekStartsOn={0} defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = calendarCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap gap-8">
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.french}</p>
          <Calendar today={today} defaultValue={selected} defaultMonth={march} locale="fr" weekStartsOn={1} />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.english}</p>
          <Calendar today={today} defaultValue={selected} defaultMonth={march} locale="en" weekStartsOn={0} />
        </div>
      </div>;
  }
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var T,P,W;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Plusieurs mois',
  parameters: componentSource(importCalendar, \`<Calendar
    numberOfMonths={2}
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    locale="fr"
    weekStartsOn={1}
/>\`),
  args: {
    numberOfMonths: 2
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(W=(P=f.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var R,A,Y;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importCalendar, \`<>
    <Calendar size="sm" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar size="md" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar size="lg" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = calendarCopy(locale);
    return <div className="flex flex-col gap-8">
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.small}</p>
          <Calendar size="sm" today={today} defaultValue={selected} defaultMonth={march} locale={locale} weekStartsOn={1} />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.medium}</p>
          <Calendar size="md" today={today} defaultValue={selected} defaultMonth={march} locale={locale} weekStartsOn={1} />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.large}</p>
          <Calendar size="lg" today={today} defaultValue={selected} defaultMonth={march} locale={locale} weekStartsOn={1} />
        </div>
      </div>;
  }
}`,...(Y=(A=h.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};var E,I,q;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importCalendar, \`<Calendar disabled defaultValue={{ year: 2026, month: 3, day: 12 }} />\`),
  args: {
    disabled: true
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(q=(I=g.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var B,F,G;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Week-ends indisponibles',
  parameters: componentSource(importCalendar, \`<Calendar
    isDateUnavailable={(date) => {
        const weekday = new Date(Date.UTC(date.year, date.month - 1, date.day)).getUTCDay();
        return weekday === 0 || weekday === 6;
    }}
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    locale="fr"
/>\`),
  args: {
    isDateUnavailable: weekend
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(G=(F=x.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Année',
  parameters: componentSource(importCalendar, \`<Calendar
    defaultMonth={{ year: 2026, month: 3, day: 1 }}
    minValue={{ year: 2020, month: 1, day: 1 }}
    maxValue={{ year: 2030, month: 12, day: 31 }}
    locale="fr"
/>\`),
  args: {
    minValue: {
      year: 2020,
      month: 1,
      day: 1
    },
    maxValue: {
      year: 2030,
      month: 12,
      day: 31
    }
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Plage de dates',
  parameters: componentSource(importCalendar, \`<Calendar
    selectionMode="range"
    numberOfMonths={2}
    defaultValue={{
        start: { year: 2026, month: 3, day: 25 },
        end: { year: 2026, month: 4, day: 8 },
    }}
    locale="fr"
/>\`),
  args: {
    selectionMode: 'range',
    numberOfMonths: 2,
    defaultValue: {
      start: {
        year: 2026,
        month: 3,
        day: 25
      },
      end: {
        year: 2026,
        month: 4,
        day: 8
      }
    }
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const te=["Default","Restricted","WeekStart","Locale","MultipleMonths","Sizes","Disabled","WeekendsUnavailable","Year","Range"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Disabled:g,Locale:p,MultipleMonths:f,Range:C,Restricted:y,Sizes:h,WeekStart:i,WeekendsUnavailable:x,Year:b,__namedExportsOrder:te,default:ne},Symbol.toStringTag,{value:"Module"}));export{ce as C,u as D,p as L,f as M,y as R,h as S,x as W,b as Y,C as a,i as b,g as c};
