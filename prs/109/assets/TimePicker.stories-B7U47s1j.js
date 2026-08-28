import{r as s,j as r,X as v,d as k}from"./iframe-CBq88VWm.js";import{u as je}from"./arg-types-Bf5UST3O.js";import{c as h}from"./docs-source-C_O40UCi.js";import{u as He}from"./useFieldControl-Bsu8HHMu.js";import{P as Se}from"./Popover-5LSHlG7R.js";import{T as Ve}from"./TextInput-CEt2bS_m.js";import{e as X,p as Ce,P as Le,g as ze,h as we,j as De}from"./pickerChrome-Xbq1qp0n.js";import{T as N}from"./TimeSpinner-B7IB30LM.js";function t({size:l="md",label:n,helper:a,error:P,invalid:J=!1,disabled:Q=!1,required:Y=!1,fullWidth:Z=!0,clearable:ee=!0,name:C,placeholder:re="HH:mm",value:u,defaultValue:L=null,onValueChange:x,minValue:ae,maxValue:le,open:z,defaultOpen:ne=!1,onOpenChange:j,openTimeLabel:w="Ouvrir le sélecteur d’heure",hourLabel:te="Heure",minuteLabel:ie="Minutes",incrementHourLabel:se="Augmenter l’heure",decrementHourLabel:ue="Diminuer l’heure",incrementMinuteLabel:oe="Augmenter les minutes",decrementMinuteLabel:me="Diminuer les minutes",clearLabel:de="Effacer",invalidMessage:ce="Heure invalide.",className:pe}){const p=He(),fe=s.useId(),be=p.id??fe,i=!!(Q||p.disabled),[ye,Te]=s.useState(L),[ge,ve]=s.useState(ne),[D,H]=s.useState(()=>V(u??L)),[I,f]=s.useState(!1),b=u!==void 0,S=b?u:ye,ke=i?!1:z??ge,y=S??{hour:0,minute:0};s.useEffect(()=>{b&&H(V(u))},[b,u]);function $(e){i&&e||(z===void 0&&ve(e),j==null||j(e))}function T(e,g=V(e)){b||Te(e),H(g),f(!1),x==null||x(e)}function he(){const e=we(D);if(e===void 0){f(!0);return}if(e&&De(e,{minValue:ae,maxValue:le})){f(!0);return}T(e)}const qe=!!(J||p["aria-invalid"]||I||P),Pe=I?P??ce:P;function xe(e){e.key==="ArrowDown"&&e.altKey&&(e.preventDefault(),$(!0))}return r.jsxs(r.Fragment,{children:[C?r.jsx("input",{type:"hidden",name:C,value:S?X(S):""}):null,r.jsx(Ve,{id:be,size:l,label:n,helper:a,error:Pe,invalid:qe,disabled:i,required:p.required??Y,fullWidth:Z,clearable:ee,clearLabel:de,placeholder:re,autoComplete:"off",inputMode:"numeric",value:D,className:pe,onChange:e=>{H(e.target.value),f(!1)},onBlur:e=>{const g=e.relatedTarget;g instanceof HTMLElement&&g.getAttribute("aria-haspopup")||he()},onKeyDown:xe,onClear:()=>T(null),suffix:r.jsx(Se,{open:ke,onOpenChange:$,trapFocus:!0,unstyled:!0,arrow:!1,placement:"bottom-start",disabled:i,"aria-label":w,className:Ce,content:r.jsxs("div",{className:"flex items-center gap-3 px-2",children:[r.jsx(N,{label:te,incrementLabel:se,decrementLabel:ue,value:y.hour,min:0,max:23,disabled:i,onChange:e=>T({hour:e,minute:y.minute})}),r.jsx("span",{"aria-hidden":!0,className:"text-lg font-medium",children:":"}),r.jsx(N,{label:ie,incrementLabel:oe,decrementLabel:me,value:y.minute,min:0,max:59,disabled:i,onChange:e=>T({hour:y.hour,minute:e})})]}),children:r.jsx(Le,{label:w,disabled:i,children:r.jsx(ze,{})})})})]})}function V(l){return l?X(l):""}t.__docgenInfo={description:"Champ heure : saisie `HH:mm` + spinbuttons accessibles dans un Popover.",methods:[],displayName:"TimePicker",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'HH:mm'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"ClockTime | null",elements:[{name:"signature",type:"object",raw:`{
  readonly hour: number;
  readonly minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]}},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"ClockTime | null",elements:[{name:"signature",type:"object",raw:`{
  readonly hour: number;
  readonly minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]}},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ClockTime | null) => void",signature:{arguments:[{type:{name:"union",raw:"ClockTime | null",elements:[{name:"signature",type:"object",raw:`{
  readonly hour: number;
  readonly minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]}},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},minValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly hour: number;
  readonly minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]}},description:""},maxValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly hour: number;
  readonly minute: number;
}`,signature:{properties:[{key:"hour",value:{name:"number",required:!0}},{key:"minute",value:{name:"number",required:!0}}]}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},openTimeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Ouvrir le sélecteur d’heure'",computed:!1}},hourLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Heure'",computed:!1}},minuteLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Minutes'",computed:!1}},incrementHourLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Augmenter l’heure'",computed:!1}},decrementHourLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Diminuer l’heure'",computed:!1}},incrementMinuteLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Augmenter les minutes'",computed:!1}},decrementMinuteLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Diminuer les minutes'",computed:!1}},clearLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Effacer'",computed:!1}},invalidMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Heure invalide.'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const q="import { TimePicker } from 'd-ui';",Ie={title:"Components/TimePicker",component:t,args:{defaultValue:{hour:14,minute:30}},argTypes:je},o={name:"Par défaut",parameters:h(q,'<TimePicker label="Heure de début" defaultValue={{ hour: 14, minute: 30 }} />'),render:(l,{globals:n})=>{const a=v(k(n.locale));return r.jsx(t,{...l,label:a.label,helper:a.helper})}},m={name:"Désactivé",parameters:h(q,'<TimePicker label="Heure de début" disabled />'),render:(l,{globals:n})=>{const a=v(k(n.locale));return r.jsx(t,{...l,label:a.label,disabled:!0})}},d={name:"Invalide",parameters:h(q,'<TimePicker label="Heure de début" invalid error="Heure invalide." />'),render:(l,{globals:n})=>{const a=v(k(n.locale));return r.jsx(t,{...l,label:a.label,invalid:!0,error:a.error})}},c={name:"Tailles",parameters:h(q,`<TimePicker size="sm" label="Heure de début" />
<TimePicker size="md" label="Heure de début" />
<TimePicker size="lg" label="Heure de début" />`),render:(l,{globals:n})=>{const a=v(k(n.locale));return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(t,{...l,size:"sm",label:`${a.label} (${a.small})`}),r.jsx(t,{...l,size:"md",label:`${a.label} (${a.medium})`}),r.jsx(t,{...l,size:"lg",label:`${a.label} (${a.large})`})]})}};var E,M,O;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importTimePicker, '<TimePicker label="Heure de début" defaultValue={{ hour: 14, minute: 30 }} />'),
  render: (args, {
    globals
  }) => {
    const copy = timePickerCopy(docsLocale(globals.locale));
    return <TimePicker {...args} label={copy.label} helper={copy.helper} />;
  }
}`,...(O=(M=o.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var _,A,B;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importTimePicker, '<TimePicker label="Heure de début" disabled />'),
  render: (args, {
    globals
  }) => {
    const copy = timePickerCopy(docsLocale(globals.locale));
    return <TimePicker {...args} label={copy.label} disabled />;
  }
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var R,F,K;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(importTimePicker, '<TimePicker label="Heure de début" invalid error="Heure invalide." />'),
  render: (args, {
    globals
  }) => {
    const copy = timePickerCopy(docsLocale(globals.locale));
    return <TimePicker {...args} label={copy.label} invalid error={copy.error} />;
  }
}`,...(K=(F=d.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,G,W;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importTimePicker, \`<TimePicker size="sm" label="Heure de début" />
<TimePicker size="md" label="Heure de début" />
<TimePicker size="lg" label="Heure de début" />\`),
  render: (args, {
    globals
  }) => {
    const copy = timePickerCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-4">
        <TimePicker {...args} size="sm" label={\`\${copy.label} (\${copy.small})\`} />
        <TimePicker {...args} size="md" label={\`\${copy.label} (\${copy.medium})\`} />
        <TimePicker {...args} size="lg" label={\`\${copy.label} (\${copy.large})\`} />
      </div>;
  }
}`,...(W=(G=c.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};const $e=["Default","Disabled","Invalid","Sizes"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Disabled:m,Invalid:d,Sizes:c,__namedExportsOrder:$e,default:Ie},Symbol.toStringTag,{value:"Module"}));export{o as D,d as I,c as S,Fe as T,m as a};
