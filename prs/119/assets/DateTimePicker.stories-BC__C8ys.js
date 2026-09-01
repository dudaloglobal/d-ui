import{r as o,j as r,a1 as x,d as s}from"./iframe-Cg6bt1aJ.js";import{u as Ce}from"./arg-types-BNJ7MSgH.js";import{c as S}from"./docs-source-C_O40UCi.js";import{C as xe}from"./Calendar-djAI15k5.js";import{j as Se,t as Le}from"./calendarDate-jCkUcsyL.js";import{u as Ve}from"./useFieldControl-DYInY4Lx.js";import{P as Ie}from"./Popover-D2KRnYZG.js";import{T as Ae}from"./TextInput-D3NzSsNE.js";import{d as Me,p as Ee,P as He,C as Ne,b as Oe,c as _e,i as Re}from"./pickerChrome-BVAOlIr6.js";import{T as B}from"./TimeSpinner-CXgoFWxY.js";const Y={hour:0,minute:0};function b({size:t="md",label:n,helper:u,error:D,invalid:Z=!1,disabled:$=!1,required:ee=!1,fullWidth:re=!0,clearable:ae=!0,name:V,locale:i="fr",placeholder:ne,value:d,defaultValue:I=null,onValueChange:j,minValue:f,maxValue:v,isDateUnavailable:A,today:M,open:E,defaultOpen:te=!1,onOpenChange:w,openCalendarLabel:H="Ouvrir le calendrier",hourLabel:ue="Heure",minuteLabel:le="Minutes",incrementHourLabel:ie="Augmenter l’heure",decrementHourLabel:oe="Diminuer l’heure",incrementMinuteLabel:se="Augmenter les minutes",decrementMinuteLabel:de="Diminuer les minutes",clearLabel:me="Effacer",invalidMessage:ce="Date ou heure invalide.",className:pe}){const g=Ve(),ye=o.useId(),be=g.id??ye,l=!!($||g.disabled),[fe,ve]=o.useState(I),[ge,Te]=o.useState(te),[N,P]=o.useState(()=>C(d??I,i)),[O,T]=o.useState(!1),q=d!==void 0,a=q?d:fe,qe=l?!1:E??ge,k=(a==null?void 0:a.time)??Y;o.useEffect(()=>{q&&P(C(d,i))},[q,d,i]);function _(e){l&&e||(E===void 0&&Te(e),w==null||w(e))}function m(e,h=C(e,i)){q||ve(e),P(h),T(!1),j==null||j(e)}function ke(){const e=_e(N,i);if(e===void 0){T(!0);return}if(e&&Re(e,{minValue:f,maxValue:v,isDateUnavailable:A})){T(!0);return}m(e)}const he=!!(Z||g["aria-invalid"]||O||D),De=ne??(i.toLowerCase().startsWith("en")?"MM/DD/YYYY HH:mm":"JJ/MM/AAAA HH:mm"),je=O?D??ce:D;function we(e){e.key==="ArrowDown"&&e.altKey&&(e.preventDefault(),_(!0))}function Pe(e){m({date:e,time:(a==null?void 0:a.time)??Y})}function R(e){if(!a){m({date:M??Le(),time:e});return}m({date:a.date,time:e})}return r.jsxs(r.Fragment,{children:[V?r.jsx("input",{type:"hidden",name:V,value:a?Me(a):""}):null,r.jsx(Ae,{id:be,size:t,label:n,helper:u,error:je,invalid:he,disabled:l,required:g.required??ee,fullWidth:re,clearable:ae,clearLabel:me,placeholder:De,autoComplete:"off",value:N,className:pe,onChange:e=>{P(e.target.value),T(!1)},onBlur:e=>{const h=e.relatedTarget;h instanceof HTMLElement&&h.getAttribute("aria-haspopup")||ke()},onKeyDown:we,onClear:()=>m(null),suffix:r.jsx(Ie,{open:qe,onOpenChange:_,trapFocus:!0,unstyled:!0,arrow:!1,placement:"bottom-start",disabled:l,"aria-label":H,className:Ee,content:r.jsxs("div",{className:"flex flex-col gap-3",children:[r.jsx(xe,{size:"sm",locale:i,today:M,value:(a==null?void 0:a.date)??null,minValue:f==null?void 0:f.date,maxValue:v==null?void 0:v.date,isDateUnavailable:A,disabled:l,onValueChange:e=>{Se(e)||Pe(e)}}),r.jsxs("div",{className:"flex items-center justify-center gap-3 border-t border-border pt-3",children:[r.jsx(B,{label:ue,incrementLabel:ie,decrementLabel:oe,value:k.hour,min:0,max:23,disabled:l,onChange:e=>R({hour:e,minute:k.minute})}),r.jsx("span",{"aria-hidden":!0,className:"text-lg font-medium",children:":"}),r.jsx(B,{label:le,incrementLabel:se,decrementLabel:de,value:k.minute,min:0,max:59,disabled:l,onChange:e=>R({hour:k.hour,minute:e})})]})]}),children:r.jsx(He,{label:H,disabled:l,children:r.jsx(Ne,{})})})})]})}function C(t,n){return t?Oe(t,n):""}b.__docgenInfo={description:"Date et heure civiles : saisie + Calendar et spinbuttons dans un Popover.",methods:[],displayName:"DateTimePicker",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fr'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"DateTimeValue | null",elements:[{name:"signature",type:"object",raw:`{
  readonly date: CalendarDate;
  readonly time: ClockTime;
}`,signature:{properties:[{key:"date",value:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]},required:!0}},{key:"time",value:{name:"signature",type:"object",raw:`{
  readonly hour: number;
  readonly minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]},required:!0}}]}},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"DateTimeValue | null",elements:[{name:"signature",type:"object",raw:`{
  readonly date: CalendarDate;
  readonly time: ClockTime;
}`,signature:{properties:[{key:"date",value:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]},required:!0}},{key:"time",value:{name:"signature",type:"object",raw:`{
  readonly hour: number;
  readonly minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]},required:!0}}]}},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: DateTimeValue | null) => void",signature:{arguments:[{type:{name:"union",raw:"DateTimeValue | null",elements:[{name:"signature",type:"object",raw:`{
  readonly date: CalendarDate;
  readonly time: ClockTime;
}`,signature:{properties:[{key:"date",value:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]},required:!0}},{key:"time",value:{name:"signature",type:"object",raw:`{
  readonly hour: number;
  readonly minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]},required:!0}}]}},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},minValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly date: CalendarDate;
  readonly time: ClockTime;
}`,signature:{properties:[{key:"date",value:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]},required:!0}},{key:"time",value:{name:"signature",type:"object",raw:`{
  readonly hour: number;
  readonly minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]},required:!0}}]}},description:""},maxValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly date: CalendarDate;
  readonly time: ClockTime;
}`,signature:{properties:[{key:"date",value:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]},required:!0}},{key:"time",value:{name:"signature",type:"object",raw:`{
  readonly hour: number;
  readonly minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]},required:!0}}]}},description:""},isDateUnavailable:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: CalendarDate) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},name:"date"}],return:{name:"boolean"}}},description:""},today:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},openCalendarLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Ouvrir le calendrier'",computed:!1}},hourLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Heure'",computed:!1}},minuteLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Minutes'",computed:!1}},incrementHourLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Augmenter l’heure'",computed:!1}},decrementHourLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Diminuer l’heure'",computed:!1}},incrementMinuteLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Augmenter les minutes'",computed:!1}},decrementMinuteLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Diminuer les minutes'",computed:!1}},clearLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Effacer'",computed:!1}},invalidMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Date ou heure invalide.'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const L="import { DateTimePicker } from 'd-ui';",Be={year:2026,month:3,day:18},Ye={title:"Components/DateTimePicker",component:b,args:{today:Be,locale:"fr",defaultValue:{date:{year:2026,month:3,day:12},time:{hour:9,minute:15}}},argTypes:Ce},c={name:"Par défaut",parameters:S(L,`<DateTimePicker
    label="Soutenance"
    defaultValue={{
        date: { year: 2026, month: 3, day: 12 },
        time: { hour: 9, minute: 15 },
    }}
/>`),render:(t,{globals:n})=>{const u=x(s(n.locale));return r.jsx(b,{...t,locale:s(n.locale),label:u.label,helper:u.helper})}},p={name:"Désactivé",parameters:S(L,'<DateTimePicker label="Soutenance" disabled />'),render:(t,{globals:n})=>{const u=x(s(n.locale));return r.jsx(b,{...t,locale:s(n.locale),label:u.label,disabled:!0})}},y={name:"Invalide",parameters:S(L,'<DateTimePicker label="Soutenance" invalid error="Date ou heure invalide." />'),render:(t,{globals:n})=>{const u=x(s(n.locale));return r.jsx(b,{...t,locale:s(n.locale),label:u.label,invalid:!0,error:u.error})}};var z,F,K;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importDateTimePicker, \`<DateTimePicker
    label="Soutenance"
    defaultValue={{
        date: { year: 2026, month: 3, day: 12 },
        time: { hour: 9, minute: 15 },
    }}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = dateTimePickerCopy(docsLocale(globals.locale));
    return <DateTimePicker {...args} locale={docsLocale(globals.locale)} label={copy.label} helper={copy.helper} />;
  }
}`,...(K=(F=c.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,J,W;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importDateTimePicker, '<DateTimePicker label="Soutenance" disabled />'),
  render: (args, {
    globals
  }) => {
    const copy = dateTimePickerCopy(docsLocale(globals.locale));
    return <DateTimePicker {...args} locale={docsLocale(globals.locale)} label={copy.label} disabled />;
  }
}`,...(W=(J=p.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var G,Q,X;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(importDateTimePicker, '<DateTimePicker label="Soutenance" invalid error="Date ou heure invalide." />'),
  render: (args, {
    globals
  }) => {
    const copy = dateTimePickerCopy(docsLocale(globals.locale));
    return <DateTimePicker {...args} locale={docsLocale(globals.locale)} label={copy.label} invalid error={copy.error} />;
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ze=["Default","Disabled","Invalid"],er=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:p,Invalid:y,__namedExportsOrder:ze,default:Ye},Symbol.toStringTag,{value:"Module"}));export{er as D,y as I,c as a,p as b};
