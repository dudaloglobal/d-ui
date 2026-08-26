import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DQxMMF7O.js";import{b as ge,c as wa,s as Ba}from"./docs-source-C_O40UCi.js";import{c as oe,i as t,d as s}from"./docs-locale-u_wANLWo.js";const Wa={sm:"h-8",md:"h-10",lg:"h-12"};function Ia(...n){return n.filter(e=>!!e).join(" ")||void 0}function $(n){return n==null?"":typeof n=="number"?String(n):typeof n=="string"?n:n.join(",")}function Ca(n,r){if(r==null)return String(n);const e=Math.max(0,r-n);return e===1?"1 character remaining":`${e} characters remaining`}function Da({size:n,invalid:r,valid:e,disabled:i,multiline:u}){return oe("flex gap-2 rounded-md border bg-bg px-3 text-sm text-fg",u?"min-h-24 items-start py-2":oe("items-center",Wa[n]),r?"border-danger focus-within:border-danger focus-within:shadow-[inset_0_0_0_1px_var(--d-ui-color-danger)]":e?"border-success focus-within:border-success focus-within:shadow-[inset_0_0_0_1px_var(--d-ui-color-success)]":"border-border focus-within:border-focus focus-within:shadow-[inset_0_0_0_1px_var(--d-ui-color-focus)]",!i&&!r&&!e&&"hover:border-fg/40",i&&"pointer-events-none","w-full min-w-0")}function ye({id:n,label:r,helper:e,error:i,required:u,invalid:l,valid:c,disabled:h,fullWidth:g,size:y,className:x,showCount:L,count:P,maxLength:V,countMessage:w,countId:R,helperId:B,multiline:W,children:b}){const I=l?i:e,j=!!r||L;return a.jsxs("div",{className:oe("flex flex-col",g?"w-full min-w-0":"w-80 max-w-full",h&&"opacity-50",x),children:[j?a.jsxs("div",{className:"mb-1 flex items-baseline gap-3",children:[r?a.jsxs("label",{htmlFor:n,className:"min-w-0 flex-1 text-sm text-fg/70",children:[r,u?a.jsx("span",{"aria-hidden":"true",children:" *"}):null]}):a.jsx("span",{className:"flex-1"}),L?a.jsx("span",{id:R,className:"shrink-0 text-sm text-fg/70",children:w(P,V)}):null]}):null,a.jsx("div",{className:Da({size:y,invalid:l,valid:!!c&&!l,disabled:h,multiline:W}),children:b}),I?a.jsx("p",{id:B,className:oe("mt-1 text-sm",l&&i?"text-danger":"text-fg/70"),children:I}):null]})}function be({label:n,pressed:r,disabled:e,onClick:i,children:u}){return a.jsx("button",{type:"button","aria-label":n,"aria-pressed":r,disabled:e,onMouseDown:l=>l.preventDefault(),onClick:i,className:oe("inline-flex size-6 shrink-0 items-center justify-center rounded-md text-fg/70","hover:bg-surface-muted hover:text-fg","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus","disabled:pointer-events-none disabled:opacity-50"),children:u})}function xe(){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function Ta(){return a.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[a.jsx("path",{d:"M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z",stroke:"currentColor",strokeWidth:"1.5"}),a.jsx("circle",{cx:"8",cy:"8",r:"1.75",stroke:"currentColor",strokeWidth:"1.5"})]})}function ja(){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M2 2l12 12M6.1 6.2A2.2 2.2 0 009.8 9.9M4.2 4.5C2.6 5.6 1.5 8 1.5 8s2.5 4.5 6.5 4.5c1.2 0 2.3-.4 3.2-1M11.7 11.2C13.2 10.2 14.5 8 14.5 8s-2.5-4.5-6.5-4.5c-.5 0-1 .07-1.4.18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function Sa(){return a.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[a.jsx("circle",{cx:"7",cy:"7",r:"4.25",stroke:"currentColor",strokeWidth:"1.5"}),a.jsx("path",{d:"M10.5 10.5L14 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function _a(){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:"shrink-0 text-success",children:a.jsx("path",{d:"M3.5 8.5l3 3 6-7",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function qa(){return a.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:"shrink-0 text-danger",children:[a.jsx("path",{d:"M8 2.5L14.5 14h-13L8 2.5z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),a.jsx("path",{d:"M8 7v3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),a.jsx("circle",{cx:"8",cy:"12.25",r:"0.6",fill:"currentColor"})]})}function Le({invalid:n,valid:r}){return n?a.jsx(qa,{}):r?a.jsx(_a,{}):null}const Na="min-w-0 flex-1 border-0 bg-transparent p-0 text-inherit outline-none placeholder:text-fg/50";ye.__docgenInfo={description:"",methods:[],displayName:"TextFieldLayout",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!0,tsType:{name:"boolean"},description:""},valid:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},fullWidth:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},showCount:{required:!1,tsType:{name:"boolean"},description:""},count:{required:!0,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},countMessage:{required:!0,tsType:{name:"signature",type:"function",raw:"(count: number, maxLength?: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"},{type:{name:"number"},name:"maxLength"}],return:{name:"string"}}},description:""},countId:{required:!0,tsType:{name:"string"},description:""},helperId:{required:!0,tsType:{name:"string"},description:""},multiline:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};be.__docgenInfo={description:"",methods:[],displayName:"ChromeButton",props:{label:{required:!0,tsType:{name:"string"},description:""},pressed:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};xe.__docgenInfo={description:"",methods:[],displayName:"ClearIcon"};Ta.__docgenInfo={description:"",methods:[],displayName:"EyeIcon"};ja.__docgenInfo={description:"",methods:[],displayName:"EyeOffIcon"};Sa.__docgenInfo={description:"",methods:[],displayName:"SearchIcon"};_a.__docgenInfo={description:"",methods:[],displayName:"CheckIcon"};qa.__docgenInfo={description:"",methods:[],displayName:"AlertIcon"};Le.__docgenInfo={description:"",methods:[],displayName:"StatusIcon",props:{invalid:{required:!0,tsType:{name:"boolean"},description:""},valid:{required:!1,tsType:{name:"boolean"},description:""}}};const Ma=f.forwardRef(function({id:r,size:e="md",label:i,helper:u,error:l,invalid:c=!1,valid:h=!1,icon:g,prefix:y,suffix:x,fullWidth:L=!1,clearable:P=!1,onClear:V,clearLabel:w="Clear",showCount:R,countMessage:B=Ca,className:W,disabled:b,readOnly:I,required:j,value:v,defaultValue:ie,onChange:p,maxLength:S,rows:ve=3,"aria-invalid":m,"aria-describedby":D,..._},he){const C=f.useId(),ue=r??C,q=`${C}-count`,A=`${C}-helper`,N=v!==void 0,[ce,M]=f.useState(()=>$(ie)),E=N?$(v):ce,T=!!c||!!l||m===!0||m==="true",k=P&&E.length>0&&!b&&!I,de=R??S!=null,F=T?l:u;function z(me){N||M(me.target.value),p==null||p(me)}function pe(){N||M(""),V==null||V(),p==null||p({target:{value:"",name:_.name},currentTarget:{value:"",name:_.name}})}return a.jsxs(ye,{id:ue,label:i,helper:u,error:l,required:j,invalid:T,valid:h,disabled:!!b,fullWidth:L,size:e,className:W,showCount:de,count:E.length,maxLength:S,countMessage:B,countId:q,helperId:A,multiline:!0,children:[g?a.jsx("span",{className:"inline-flex shrink-0 pt-0.5 text-fg/70",children:g}):null,y?a.jsx("span",{className:"inline-flex shrink-0 pt-0.5 text-fg/70",children:y}):null,a.jsx("textarea",{..._,ref:he,id:ue,disabled:b,readOnly:I,required:j,value:E,maxLength:S,rows:ve,"aria-invalid":T||void 0,"aria-describedby":Ia(D,de&&q,F?A:void 0),onChange:z,className:`${Na} resize-y`}),k?a.jsx(be,{label:w,disabled:b,onClick:pe,children:a.jsx(xe,{})}):null,a.jsx(Le,{invalid:T,valid:h}),x?a.jsx("span",{className:"inline-flex shrink-0 pt-0.5 text-fg/70",children:x}):null]})});Ma.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"Maps to `aria-invalid`. Prefer this name so it matches Field (`invalid`).",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},prefix:{required:!1,tsType:{name:"ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},clearLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Clear'",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:""},countMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number, maxLength?: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"},{type:{name:"number"},name:"maxLength"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultCountMessage(count: number, maxLength?: number): string {
  if (maxLength == null) return String(count);
  const remaining = Math.max(0, maxLength - count);
  return remaining === 1 ? '1 character remaining' : \`\${remaining} characters remaining\`;
}`,computed:!1}},rows:{defaultValue:{value:"3",computed:!1},required:!1}}};const Ve=f.forwardRef(function({id:r,type:e="text",size:i="md",label:u,helper:l,error:c,invalid:h=!1,valid:g=!1,icon:y,prefix:x,suffix:L,fullWidth:P=!1,clearable:V=!1,onClear:w,clearLabel:R="Clear",showCount:B,countMessage:W=Ca,revealPasswordLabel:b="Show password",hidePasswordLabel:I="Hide password",className:j,disabled:v,readOnly:ie,required:p,value:S,defaultValue:ve,onChange:m,maxLength:D,"aria-invalid":_,"aria-describedby":he,...C},ue){const q=f.useId(),A=r??q,N=`${q}-count`,ce=`${q}-helper`,M=S!==void 0,[E,T]=f.useState(()=>$(ve)),[k,de]=f.useState(!1),F=M?$(S):E,z=!!h||!!c||_===!0||_==="true",pe=e==="password",me=V&&F.length>0&&!v&&!ie,Ce=B??D!=null,za=z?c:l,$a=pe&&k?"text":e;function Pa(fe){M||T(fe.target.value),m==null||m(fe)}function Ra(){M||T(""),w==null||w(),m==null||m({target:{value:"",name:C.name},currentTarget:{value:"",name:C.name}})}return a.jsxs(ye,{id:A,label:u,helper:l,error:c,required:p,invalid:z,valid:g,disabled:!!v,fullWidth:P,size:i,className:j,showCount:Ce,count:F.length,maxLength:D,countMessage:W,countId:N,helperId:ce,children:[y?a.jsx("span",{className:"inline-flex shrink-0 text-fg/70",children:y}):null,x?a.jsx("span",{className:"inline-flex shrink-0 text-fg/70",children:x}):null,a.jsx("input",{...C,ref:ue,id:A,type:$a,disabled:v,readOnly:ie,required:p,value:F,maxLength:D,"aria-invalid":z||void 0,"aria-describedby":Ia(he,Ce&&N,za?ce:void 0),onChange:Pa,className:Na}),me?a.jsx(be,{label:R,disabled:v,onClick:Ra,children:a.jsx(xe,{})}):null,pe?a.jsx(be,{label:k?I:b,pressed:k,disabled:v,onClick:()=>de(fe=>!fe),children:k?a.jsx(ja,{}):a.jsx(Ta,{})}):null,a.jsx(Le,{invalid:z,valid:g}),L?a.jsx("span",{className:"inline-flex shrink-0 text-fg/70",children:L}):null]})});Ve.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{required:!1,tsType:{name:"union",raw:"'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'",elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'number'"},{name:"literal",value:"'password'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'text'"},{name:"literal",value:"'url'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Visible label above the control. Prefer this, or an external `htmlFor` / `aria-labelledby`."},helper:{required:!1,tsType:{name:"ReactNode"},description:"Guidance under the control. Replaced by `error` when the field is invalid."},error:{required:!1,tsType:{name:"ReactNode"},description:"Error text under the control. Also sets `aria-invalid`."},invalid:{required:!1,tsType:{name:"boolean"},description:"Maps to `aria-invalid`. Prefer this name so it matches Field (`invalid`).",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"Success state: green outline and check. Ignored when `invalid`.",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Decorative icon at the start of the field. Complements `label`, does not replace it."},prefix:{required:!1,tsType:{name:"ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Stretch the control to the container width.",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"Show a clear control when the value is not empty.",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},clearLabel:{required:!1,tsType:{name:"string"},description:'Accessible name of the clear control. Default `"Clear"`.',defaultValue:{value:"'Clear'",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"Visible character count in the header (remaining when `maxLength` is set).\nDefaults to on when `maxLength` is set. Associate via `aria-describedby`."},countMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number, maxLength?: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"},{type:{name:"number"},name:"maxLength"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultCountMessage(count: number, maxLength?: number): string {
  if (maxLength == null) return String(count);
  const remaining = Math.max(0, maxLength - count);
  return remaining === 1 ? '1 character remaining' : \`\${remaining} characters remaining\`;
}`,computed:!1}},revealPasswordLabel:{required:!1,tsType:{name:"string"},description:'Accessible name while the password is hidden. Default `"Show password"`.',defaultValue:{value:"'Show password'",computed:!1}},hidePasswordLabel:{required:!1,tsType:{name:"string"},description:'Accessible name while the password is visible. Default `"Hide password"`.',defaultValue:{value:"'Hide password'",computed:!1}}}};const ka=`import { useState } from 'react';
import { Input } from 'd-ui';`,Aa=`import { useState } from 'react';
import { Textarea } from 'd-ui';`;function Ea(n){return(r,e)=>n.countRemaining(Math.max(0,(e??0)-r))}function d(n,r=""){return ge(ka,`const [value, setValue] = useState(${JSON.stringify(r)});
return (
${n.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function we(n,r=""){return ge(Aa,`const [value, setValue] = useState(${JSON.stringify(r)});
return (
${n.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function o({defaultValue:n,value:r,onChange:e,...i}){const[u,l]=f.useState(()=>$(r??n));return a.jsx(Ve,{...i,value:u,onChange:c=>{l(c.target.value),e==null||e(c)}})}function Ie({defaultValue:n,value:r,onChange:e,...i}){const[u,l]=f.useState(()=>$(r??n));return a.jsx(Ma,{...i,value:u,onChange:c=>{l(c.target.value),e==null||e(c)}})}const Fa={title:"Components/Input",component:Ve,argTypes:{type:{control:"select",options:["text","email","password","search","number","tel","url"]},size:{control:"inline-radio",options:["sm","md","lg"]},invalid:{control:"boolean"},valid:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"},clearable:{control:"boolean"},showCount:{control:"boolean"},fullWidth:{control:"boolean"}},parameters:{controls:{include:["type","size","label","helper","placeholder","invalid","valid","disabled","required","clearable","showCount","fullWidth","maxLength"]}}},H={parameters:d(`<Input
    label="Libellé du champ"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{...n,label:n.label??e.fieldLabel})}},O={parameters:d(`<Input
    label="Libellé du champ"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{label:e.fieldLabel,defaultValue:e.filledValue,disabled:!0})}},J={parameters:d(`<Input
    label="Libellé du champ"
    value={value}
    valid
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{label:e.fieldLabel,defaultValue:e.filledValue,valid:!0})}},U={parameters:d(`<Input
    label="Libellé du champ"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{label:e.fieldLabel,defaultValue:e.filledValue,invalid:!0,error:e.invalidValue})}},G={parameters:d(`<Input
    label="Libellé du champ"
    value={value}
    required
    onChange={(event) => setValue(event.target.value)}
/>`),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{label:e.fieldLabel,required:!0})}},K={parameters:d(`<Input
    label="Libellé du champ"
    helper="Texte d’aide"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{label:e.fieldLabel,helper:e.helper})}},Q={parameters:d(`<Input
    label="Libellé du champ"
    placeholder="Texte de substitution"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{label:e.fieldLabel,placeholder:e.placeholder})}},X={parameters:ge(ka,`${Ba}

const [value, setValue] = useState('');
return (
    <Input
        type="search"
        label="Libellé du champ"
        icon={search}
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
);`),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{label:e.fieldLabel,type:"search",icon:a.jsx(Sa,{}),placeholder:e.search})}},Y={parameters:d(`<Input
    label="Libellé du champ"
    value={value}
    clearable
    clearLabel="Effacer"
    onChange={(event) => setValue(event.target.value)}
    onClear={() => setValue('')}
/>`,"Ada Lovelace"),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{label:e.fieldLabel,defaultValue:e.placeholderName,clearable:!0,clearLabel:e.clear})}},Z={parameters:d(`<Input
    label="Libellé du champ"
    value={value}
    maxLength={50}
    countMessage={(count, maxLength) =>
        \`\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\`
    }
    onChange={(event) => setValue(event.target.value)}
/>`),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{label:e.fieldLabel,maxLength:50,countMessage:Ea(e)})}},ee={parameters:wa("import { Input } from 'd-ui';",'<Input label="Site" prefix="https://" suffix=".com" />'),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{label:e.site,prefix:"https://",suffix:".com",placeholder:"dudalo"})}},ae={parameters:wa("import { Input } from 'd-ui';",`<Input size="sm" label="Libellé du champ" />
<Input size="md" label="Libellé du champ" />
<Input size="lg" label="Libellé du champ" />`),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(o,{label:`${e.fieldLabel} (${e.small})`,size:"sm"}),a.jsx(o,{label:`${e.fieldLabel} (${e.medium})`,size:"md"}),a.jsx(o,{label:`${e.fieldLabel} (${e.large})`,size:"lg"})]})}},re={parameters:we(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(Ie,{label:e.textareaLabel,rows:4})}},ne={parameters:we(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    valid
    helper="Valeur valide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(Ie,{label:e.textareaLabel,defaultValue:e.filledValue,valid:!0,helper:e.validValue,rows:4})}},le={parameters:we(`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(Ie,{label:e.textareaLabel,defaultValue:e.filledValue,invalid:!0,error:e.invalidValue,rows:4})}},te={parameters:d(`<Input
    type="number"
    inputMode="numeric"
    label="Nombre"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{type:"number",inputMode:"numeric",label:e.numberLabel})}},se={parameters:d(`<Input
    type="password"
    autoComplete="current-password"
    label="Mot de passe"
    value={value}
    revealPasswordLabel="Afficher le mot de passe"
    hidePasswordLabel="Masquer le mot de passe"
    onChange={(event) => setValue(event.target.value)}
/>`,"secret"),render:(n,{globals:r})=>{const e=t(s(r.locale));return a.jsx(o,{type:"password",autoComplete:"current-password",label:e.password,defaultValue:"secret",revealPasswordLabel:e.revealPassword,hidePasswordLabel:e.hidePassword})}};var Te,je,Se;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    label="Libellé du champ"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput {...args} label={args.label ?? copy.fieldLabel} />;
  }
}`,...(Se=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var _e,qe,Ne;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    label="Libellé du champ"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} defaultValue={copy.filledValue} disabled />;
  }
}`,...(Ne=(qe=O.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var Me,ke,ze;J.parameters={...J.parameters,docs:{...(Me=J.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    label="Libellé du champ"
    value={value}
    valid
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} defaultValue={copy.filledValue} valid />;
  }
}`,...(ze=(ke=J.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};var $e,Pe,Re;U.parameters={...U.parameters,docs:{...($e=U.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    label="Libellé du champ"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} defaultValue={copy.filledValue} invalid error={copy.invalidValue} />;
  }
}`,...(Re=(Pe=U.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Be,We,De;G.parameters={...G.parameters,docs:{...(Be=G.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    label="Libellé du champ"
    value={value}
    required
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} required />;
  }
}`,...(De=(We=G.parameters)==null?void 0:We.docs)==null?void 0:De.source}}};var Ae,Ee,Fe;K.parameters={...K.parameters,docs:{...(Ae=K.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    label="Libellé du champ"
    helper="Texte d’aide"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} helper={copy.helper} />;
  }
}`,...(Fe=(Ee=K.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var He,Oe,Je;Q.parameters={...Q.parameters,docs:{...(He=Q.parameters)==null?void 0:He.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    label="Libellé du champ"
    placeholder="Texte de substitution"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} placeholder={copy.placeholder} />;
  }
}`,...(Je=(Oe=Q.parameters)==null?void 0:Oe.docs)==null?void 0:Je.source}}};var Ue,Ge,Ke;X.parameters={...X.parameters,docs:{...(Ue=X.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  parameters: componentSourceFn(importInput, \`\${searchIconSource}

const [value, setValue] = useState('');
return (
    <Input
        type="search"
        label="Libellé du champ"
        icon={search}
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
);\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} type="search" icon={<SearchIcon />} placeholder={copy.search} />;
  }
}`,...(Ke=(Ge=X.parameters)==null?void 0:Ge.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ye;Y.parameters={...Y.parameters,docs:{...(Qe=Y.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    label="Libellé du champ"
    value={value}
    clearable
    clearLabel="Effacer"
    onChange={(event) => setValue(event.target.value)}
    onClear={() => setValue('')}
/>\`, 'Ada Lovelace'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} defaultValue={copy.placeholderName} clearable clearLabel={copy.clear} />;
  }
}`,...(Ye=(Xe=Y.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,ea,aa;Z.parameters={...Z.parameters,docs:{...(Ze=Z.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    label="Libellé du champ"
    value={value}
    maxLength={50}
    countMessage={(count, maxLength) =>
        \\\`\\\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\\\`
    }
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.fieldLabel} maxLength={50} countMessage={remainingMessage(copy)} />;
  }
}`,...(aa=(ea=Z.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ra,na,la;ee.parameters={...ee.parameters,docs:{...(ra=ee.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  parameters: componentSource("import { Input } from 'd-ui';", '<Input label="Site" prefix="https://" suffix=".com" />'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput label={copy.site} prefix="https://" suffix=".com" placeholder="dudalo" />;
  }
}`,...(la=(na=ee.parameters)==null?void 0:na.docs)==null?void 0:la.source}}};var ta,sa,oa;ae.parameters={...ae.parameters,docs:{...(ta=ae.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  parameters: componentSource("import { Input } from 'd-ui';", \`<Input size="sm" label="Libellé du champ" />
<Input size="md" label="Libellé du champ" />
<Input size="lg" label="Libellé du champ" />\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-4">
        <ControlledInput label={\`\${copy.fieldLabel} (\${copy.small})\`} size="sm" />
        <ControlledInput label={\`\${copy.fieldLabel} (\${copy.medium})\`} size="md" />
        <ControlledInput label={\`\${copy.fieldLabel} (\${copy.large})\`} size="lg" />
      </div>;
  }
}`,...(oa=(sa=ae.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ia,ua,ca;re.parameters={...re.parameters,docs:{...(ia=re.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  parameters: textareaSource(\`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} rows={4} />;
  }
}`,...(ca=(ua=re.parameters)==null?void 0:ua.docs)==null?void 0:ca.source}}};var da,pa,ma;ne.parameters={...ne.parameters,docs:{...(da=ne.parameters)==null?void 0:da.docs,source:{originalSource:`{
  parameters: textareaSource(\`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    valid
    helper="Valeur valide"
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} defaultValue={copy.filledValue} valid helper={copy.validValue} rows={4} />;
  }
}`,...(ma=(pa=ne.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var fa,ba,va;le.parameters={...le.parameters,docs:{...(fa=le.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  parameters: textareaSource(\`<Textarea
    label="Libellé de la zone de texte"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextarea label={copy.textareaLabel} defaultValue={copy.filledValue} invalid error={copy.invalidValue} rows={4} />;
  }
}`,...(va=(ba=le.parameters)==null?void 0:ba.docs)==null?void 0:va.source}}};var ha,ga,ya;te.parameters={...te.parameters,docs:{...(ha=te.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    type="number"
    inputMode="numeric"
    label="Nombre"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput type="number" inputMode="numeric" label={copy.numberLabel} />;
  }
}`,...(ya=(ga=te.parameters)==null?void 0:ga.docs)==null?void 0:ya.source}}};var xa,La,Va;se.parameters={...se.parameters,docs:{...(xa=se.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  parameters: inputSource(\`<Input
    type="password"
    autoComplete="current-password"
    label="Mot de passe"
    value={value}
    revealPasswordLabel="Afficher le mot de passe"
    hidePasswordLabel="Masquer le mot de passe"
    onChange={(event) => setValue(event.target.value)}
/>\`, 'secret'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledInput type="password" autoComplete="current-password" label={copy.password} defaultValue="secret" revealPasswordLabel={copy.revealPassword} hidePasswordLabel={copy.hidePassword} />;
  }
}`,...(Va=(La=se.parameters)==null?void 0:La.docs)==null?void 0:Va.source}}};const Ha=["Default","Disabled","Valid","Invalid","Required","Helper","Placeholder","Icon","Clearable","MaxLength","PrefixSuffix","Sizes","Multiline","TextareaValid","TextareaInvalid","Number","Password"],Ka=Object.freeze(Object.defineProperty({__proto__:null,Clearable:Y,Default:H,Disabled:O,Helper:K,Icon:X,Invalid:U,MaxLength:Z,Multiline:re,Number:te,Password:se,Placeholder:Q,PrefixSuffix:ee,Required:G,Sizes:ae,TextareaInvalid:le,TextareaValid:ne,Valid:J,__namedExportsOrder:Ha,default:Fa},Symbol.toStringTag,{value:"Module"}));export{Y as C,H as D,K as H,Ka as I,Z as M,te as N,Q as P,G as R,ae as S,ne as T,J as V,O as a,U as b,X as c,ee as d,re as e,le as f,se as g,Ma as h};
