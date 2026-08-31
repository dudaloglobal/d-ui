import{r as p,j as n,Z as i,d as t}from"./iframe-DRIDI3J7.js";import{q as Le}from"./arg-types-Di6f0Zb7.js";import{c as u}from"./docs-source-C_O40UCi.js";import{C as Ae}from"./Calendar-xmJZ9sW5.js";import{c as Ie,j as Me,p as $e}from"./calendarDate-jCkUcsyL.js";import{u as Ee}from"./useFieldControl-B7DEN5WW.js";import{P as Ne}from"./Popover-SJReyP1L.js";import{T as Oe}from"./TextInput-ConLFbOU.js";import{p as Re,P as _e,C as Je,f as Ke,a as Be}from"./pickerChrome-CrpQ_hdC.js";function o({size:l="md",label:a,helper:e,error:s,invalid:ie=!1,disabled:ue=!1,required:de=!1,fullWidth:me=!0,clearable:pe=!0,name:A,locale:c="fr",placeholder:ye,value:y,defaultValue:I=null,onValueChange:j,minValue:M,maxValue:$,isDateUnavailable:E,today:be,open:N,defaultOpen:fe=!1,onOpenChange:S,openCalendarLabel:O="Ouvrir le calendrier",clearLabel:ge="Effacer",invalidMessage:ve="Date invalide.",className:he}){const P=Ee(),ke=p.useId(),De=P.id??ke,m=!!(ue||P.disabled),[Pe,qe]=p.useState(I),[Te,Ce]=p.useState(fe),[R,x]=p.useState(()=>L(y??I,c)),[_,q]=p.useState(!1),T=y!==void 0,V=T?y:Pe,je=m?!1:N??Te;p.useEffect(()=>{T&&x(L(y,c))},[T,y,c]);function z(r){m&&r||(N===void 0&&Ce(r),S==null||S(r))}function w(r,C=L(r,c)){T||qe(r),x(C),q(!1),j==null||j(r)}function Se(){const r=Be(R,c);if(r===void 0){q(!0);return}if(r&&$e(r,{minValue:M,maxValue:$,isDateUnavailable:E})){q(!0);return}w(r)}const xe=!!(ie||P["aria-invalid"]||_||s),Ve=ye??(c.toLowerCase().startsWith("en")?"MM/DD/YYYY":"JJ/MM/AAAA"),ze=_?s??ve:s;function we(r){r.key==="ArrowDown"&&r.altKey&&(r.preventDefault(),z(!0))}return n.jsxs(n.Fragment,{children:[A?n.jsx("input",{type:"hidden",name:A,value:V?Ie(V):""}):null,n.jsx(Oe,{id:De,size:l,label:a,helper:e,error:ze,invalid:xe,disabled:m,required:P.required??de,fullWidth:me,clearable:pe,clearLabel:ge,placeholder:Ve,autoComplete:"off",inputMode:"numeric",value:R,className:he,onChange:r=>{x(r.target.value),q(!1)},onBlur:r=>{const C=r.relatedTarget;C instanceof HTMLElement&&C.getAttribute("aria-haspopup")||Se()},onKeyDown:we,onClear:()=>w(null),suffix:n.jsx(Ne,{open:je,onOpenChange:z,trapFocus:!0,unstyled:!0,arrow:!1,placement:"bottom-start",disabled:m,"aria-label":O,className:Re,content:n.jsx(Ae,{size:l==="lg"?"md":"sm",locale:c,today:be,value:V,minValue:M,maxValue:$,isDateUnavailable:E,disabled:m,onValueChange:r=>{Me(r)||(w(r),z(!1))}}),children:n.jsx(_e,{label:O,disabled:m,children:n.jsx(Je,{})})})})]})}function L(l,a){return l?Ke(l,a):""}o.__docgenInfo={description:"Champ date : saisie au clavier + Calendar dans un Popover.\n\nValeur civile `{ year, month, day }`, pas de fuseau.",methods:[],displayName:"DatePicker",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fr'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"CalendarDate | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"CalendarDate | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: CalendarDate | null) => void",signature:{arguments:[{type:{name:"union",raw:"CalendarDate | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},minValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},description:""},maxValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},description:""},isDateUnavailable:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: CalendarDate) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},name:"date"}],return:{name:"boolean"}}},description:""},today:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},openCalendarLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Ouvrir le calendrier'",computed:!1}},clearLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Effacer'",computed:!1}},invalidMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Date invalide.'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const d="import { DatePicker } from 'd-ui';",Ye={year:2026,month:3,day:18},Fe={year:2026,month:3,day:12},Ue={title:"Components/DatePicker",component:o,args:{today:Ye,defaultValue:Fe,locale:"fr"},argTypes:Le},b={name:"Par défaut",parameters:u(d,`<DatePicker
    label="Échéance"
    helper="Saisissez une date ou ouvrez le calendrier."
    defaultValue={{ year: 2026, month: 3, day: 12 }}
/>`),render:(l,{globals:a})=>{const e=i(t(a.locale));return n.jsx(o,{...l,locale:t(a.locale),label:e.label,helper:e.helper})}},f={name:"Saisie au clavier",parameters:u(d,'<DatePicker label="Échéance" placeholder="JJ/MM/AAAA" />'),args:{defaultValue:null},render:(l,{globals:a})=>{const e=i(t(a.locale));return n.jsx(o,{...l,locale:t(a.locale),label:e.label,helper:e.helper,placeholder:e.placeholder})}},g={name:"Dates restreintes",parameters:u(d,`<DatePicker
    label="Échéance"
    minValue={{ year: 2026, month: 3, day: 5 }}
    maxValue={{ year: 2026, month: 3, day: 25 }}
/>`),args:{minValue:{year:2026,month:3,day:5},maxValue:{year:2026,month:3,day:25}},render:(l,{globals:a})=>{const e=i(t(a.locale));return n.jsx(o,{...l,locale:t(a.locale),label:e.label,helper:e.restricted})}},v={name:"Désactivé",parameters:u(d,'<DatePicker label="Échéance" disabled />'),render:(l,{globals:a})=>{const e=i(t(a.locale));return n.jsx(o,{...l,locale:t(a.locale),label:e.label,disabled:!0})}},h={name:"Invalide",parameters:u(d,'<DatePicker label="Échéance" invalid error="Date invalide." />'),render:(l,{globals:a})=>{const e=i(t(a.locale));return n.jsx(o,{...l,locale:t(a.locale),label:e.label,invalid:!0,error:e.error})}},k={name:"Effaçable",parameters:u(d,'<DatePicker label="Échéance" clearable defaultValue={{ year: 2026, month: 3, day: 12 }} />'),render:(l,{globals:a})=>{const e=i(t(a.locale));return n.jsx(o,{...l,locale:t(a.locale),label:e.label,clearable:!0})}},D={name:"Tailles",parameters:u(d,`<DatePicker size="sm" label="Échéance" />
<DatePicker size="md" label="Échéance" />
<DatePicker size="lg" label="Échéance" />`),render:(l,{globals:a})=>{const e=i(t(a.locale)),s=t(a.locale);return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(o,{...l,size:"sm",locale:s,label:`${e.label} (${e.small})`}),n.jsx(o,{...l,size:"md",locale:s,label:`${e.label} (${e.medium})`}),n.jsx(o,{...l,size:"lg",locale:s,label:`${e.label} (${e.large})`})]})}};var J,K,B;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importDatePicker, \`<DatePicker
    label="Échéance"
    helper="Saisissez une date ou ouvrez le calendrier."
    defaultValue={{ year: 2026, month: 3, day: 12 }}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return <DatePicker {...args} locale={docsLocale(globals.locale)} label={copy.label} helper={copy.helper} />;
  }
}`,...(B=(K=b.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var Y,F,U;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Saisie au clavier',
  parameters: componentSource(importDatePicker, '<DatePicker label="Échéance" placeholder="JJ/MM/AAAA" />'),
  args: {
    defaultValue: null
  },
  render: (args, {
    globals
  }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return <DatePicker {...args} locale={docsLocale(globals.locale)} label={copy.label} helper={copy.helper} placeholder={copy.placeholder} />;
  }
}`,...(U=(F=f.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var W,G,H;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Dates restreintes',
  parameters: componentSource(importDatePicker, \`<DatePicker
    label="Échéance"
    minValue={{ year: 2026, month: 3, day: 5 }}
    maxValue={{ year: 2026, month: 3, day: 25 }}
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
    }
  },
  render: (args, {
    globals
  }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return <DatePicker {...args} locale={docsLocale(globals.locale)} label={copy.label} helper={copy.restricted} />;
  }
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Z,Q,X;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importDatePicker, '<DatePicker label="Échéance" disabled />'),
  render: (args, {
    globals
  }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return <DatePicker {...args} locale={docsLocale(globals.locale)} label={copy.label} disabled />;
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,ae,re;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(importDatePicker, '<DatePicker label="Échéance" invalid error="Date invalide." />'),
  render: (args, {
    globals
  }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return <DatePicker {...args} locale={docsLocale(globals.locale)} label={copy.label} invalid error={copy.error} />;
  }
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,ne,te;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Effaçable',
  parameters: componentSource(importDatePicker, '<DatePicker label="Échéance" clearable defaultValue={{ year: 2026, month: 3, day: 12 }} />'),
  render: (args, {
    globals
  }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    return <DatePicker {...args} locale={docsLocale(globals.locale)} label={copy.label} clearable />;
  }
}`,...(te=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,se,ce;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importDatePicker, \`<DatePicker size="sm" label="Échéance" />
<DatePicker size="md" label="Échéance" />
<DatePicker size="lg" label="Échéance" />\`),
  render: (args, {
    globals
  }) => {
    const copy = datePickerCopy(docsLocale(globals.locale));
    const locale = docsLocale(globals.locale);
    return <div className="flex flex-col gap-4">
        <DatePicker {...args} size="sm" locale={locale} label={\`\${copy.label} (\${copy.small})\`} />
        <DatePicker {...args} size="md" locale={locale} label={\`\${copy.label} (\${copy.medium})\`} />
        <DatePicker {...args} size="lg" locale={locale} label={\`\${copy.label} (\${copy.large})\`} />
      </div>;
  }
}`,...(ce=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};const We=["Default","Keyboard","Restricted","Disabled","Invalid","Clearable","Sizes"],na=Object.freeze(Object.defineProperty({__proto__:null,Clearable:k,Default:b,Disabled:v,Invalid:h,Keyboard:f,Restricted:g,Sizes:D,__namedExportsOrder:We,default:Ue},Symbol.toStringTag,{value:"Module"}));export{k as C,na as D,h as I,f as K,g as R,D as S,b as a,v as b};
