import{j as a,r as v,f as B,a6 as y,d as x}from"./iframe-C1QnaEd8.js";import{A as qa}from"./arg-types-D7CIzvvN.js";import{c as M,b as ja}from"./docs-source-C_O40UCi.js";import{u as Na,i as Ra,o as Sa,j as wa,s as Ta,r as Va,a as ka,c as Ma,e as La,m as Te,l as Oa,g as Ia}from"./floating-BmHbD9cf.js";import{a as Ye,T as _a,m as Da,C as Ea,S as Aa,n as $a}from"./textControl-RkcGi-tY.js";function he(e){return typeof e=="object"&&e!==null&&"options"in e&&Array.isArray(e.options)}function I(e){return e==null||typeof e=="boolean"?"":typeof e=="string"||typeof e=="number"?String(e):Array.isArray(e)?e.map(I).join(""):""}function Je(e){return`${I(e.label)} ${I(e.description)}`.trim()}function za(e){return e==null||e===""?[]:typeof e=="string"?[e]:[...e]}function me(e){const n=[];for(const o of e)if(he(o))for(const s of o.options)n.push({...s,group:o.label});else n.push(o);return n}function Pa(e,n){const o=n.trim().toLowerCase();if(!o)return[...e];const s=[];for(const t of e)if(he(t)){const c=t.options.filter(u=>Je(u).toLowerCase().includes(o));c.length>0&&s.push({...t,options:c})}else Je(t).toLowerCase().includes(o)&&s.push(t);return s}function Ba(e,n){return n==null||n===""?-1:e.findIndex(o=>o.value===n)}function Y(e,n,o){var c;if(e.length===0)return-1;let t=n<0?o>0?-1:e.length:n;for(let u=0;u<e.length;u+=1)if(t=(t+o+e.length)%e.length,!((c=e[t])!=null&&c.disabled))return t;return-1}function ve({icon:e}){return e?a.jsx("span",{className:"inline-flex shrink-0 text-fg/70 [&_svg]:block","aria-hidden":"true",children:v.isValidElement(e)?v.cloneElement(e):e}):null}function Yo({id:e,labelId:n,labelledBy:o,ariaLabel:s,items:t,activeIndex:c,selectedValues:u,emptyMessage:m,listRef:i,setActiveIndex:q,onSelect:l,multiple:j=!1,listStatus:N="idle",listErrorMessage:F,listErrorRetryMessage:h,beforeOptions:g,renderOption:w,renderSectionTitle:_}){const be=me(t);let R=-1;const G=N==="loading",fe=N==="error",D=!G&&!fe;return a.jsxs("div",{ref:i,id:e,role:"listbox",tabIndex:-1,"aria-busy":G||N==="loadingMore"||void 0,"aria-multiselectable":j||void 0,"aria-labelledby":o??n,"aria-label":o||n?void 0:s,className:"d-ui-listbox max-h-[inherit] overflow-auto rounded-md bg-bg py-1 text-fg",children:[g&&D?a.jsx("div",{className:"border-b border-border py-1",children:g}):null,G?a.jsx(Xe,{count:4}):null,fe?a.jsxs("div",{className:"px-3 py-3 text-sm",role:"alert",children:[a.jsx("p",{className:"font-medium text-danger",children:F}),h?a.jsx("p",{className:"mt-1 text-fg/70",children:h}):null]}):null,D&&be.length===0?a.jsx("div",{className:"px-3 py-2 text-sm text-fg/70",role:"presentation",children:m}):null,D&&be.length>0?t.map((C,je)=>he(C)?a.jsxs("div",{role:"group","aria-label":C.label,children:[a.jsx("div",{className:"px-3 py-1 text-xs font-medium text-fg/60",children:_?_(C):C.label}),C.options.map(H=>(R+=1,a.jsx(Ze,{id:`${e}-opt-${R}`,option:H,index:R,active:R===c,selected:u.includes(H.value),renderOption:w,onHover:q,onSelect:l},H.value)))]},`g-${C.label}-${je}`):(R+=1,a.jsx(Ze,{id:`${e}-opt-${R}`,option:C,index:R,active:R===c,selected:u.includes(C.value),renderOption:w,onHover:q,onSelect:l},C.value))):null,N==="loadingMore"?a.jsx(Xe,{count:1}):null]})}function Xe({count:e}){return a.jsx("div",{className:"flex flex-col gap-2 px-3 py-2","aria-hidden":"true",children:Array.from({length:e},(n,o)=>a.jsx("div",{className:"h-4 animate-pulse rounded bg-fg/15"},o))})}function Ze({id:e,option:n,index:o,active:s,selected:t,renderOption:c,onHover:u,onSelect:m}){return a.jsxs("div",{id:e,role:"option",tabIndex:-1,"aria-selected":t,"aria-disabled":n.disabled||void 0,"data-active":s?"":void 0,className:B("d-ui-option flex cursor-pointer items-center gap-2 px-3 py-2 text-sm",n.disabled&&"pointer-events-none opacity-50",s&&!n.disabled&&"bg-surface-hover",t&&"font-medium"),onMouseMove:()=>{n.disabled||u(o)},onPointerDown:i=>{i.preventDefault(),i.stopPropagation()},onMouseDown:i=>{i.preventDefault(),i.stopPropagation()},onKeyDown:i=>i.preventDefault(),onClick:i=>{i.preventDefault(),i.stopPropagation(),n.disabled||m(n.value)},children:[a.jsx("span",{className:"min-w-0 flex-1",children:c?c(n,t):a.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[a.jsx(ve,{icon:n.icon}),a.jsxs("span",{className:"min-w-0 flex-1",children:[a.jsx("span",{className:"block truncate",children:n.label}),n.description?a.jsx("span",{className:"mt-0.5 block truncate text-xs font-normal text-fg/60",children:n.description}):null]})]})}),t?a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:"shrink-0",children:a.jsx("path",{d:"M3.5 8.5l3 3 6-7",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null]})}function Jo({name:e,form:n,required:o,disabled:s,value:t,items:c,multiple:u=!1}){if(!e)return null;const m=typeof t=="string"?t?[t]:[]:[...t??[]];return a.jsxs("select",{className:"d-ui-visually-hidden",tabIndex:-1,"aria-hidden":"true",name:e,form:n,required:o,disabled:s,multiple:u||void 0,value:u?m:m[0]??"",onChange:()=>{},children:[u?null:a.jsx("option",{value:""}),c.map((i,q)=>he(i)?a.jsx("optgroup",{label:i.label,children:i.options.map(l=>a.jsx("option",{value:l.value,disabled:l.disabled,children:I(l.label)||l.value},l.value))},`${i.label}-${q}`):a.jsx("option",{value:i.value,disabled:i.disabled,children:I(i.label)||i.value},i.value))]})}function Xo(){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}ve.__docgenInfo={description:"",methods:[],displayName:"SelectOptionIcon",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""}}};Yo.__docgenInfo={description:"",methods:[],displayName:"SelectListbox",props:{id:{required:!0,tsType:{name:"string"},description:""},labelId:{required:!1,tsType:{name:"string"},description:""},labelledBy:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"unknown"},description:""},activeIndex:{required:!0,tsType:{name:"number"},description:""},selectedValues:{required:!0,tsType:{name:"unknown"},description:""},emptyMessage:{required:!0,tsType:{name:"ReactNode"},description:""},listRef:{required:!0,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:""},setActiveIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},listStatus:{required:!1,tsType:{name:"union",raw:"'idle' | 'loading' | 'loadingMore' | 'error'",elements:[{name:"literal",value:"'idle'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'loadingMore'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'idle'",computed:!1}},listErrorMessage:{required:!1,tsType:{name:"ReactNode"},description:""},listErrorRetryMessage:{required:!1,tsType:{name:"ReactNode"},description:""},beforeOptions:{required:!1,tsType:{name:"ReactNode"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: SelectOption, selected: boolean) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"},{type:{name:"boolean"},name:"selected"}],return:{name:"ReactNode"}}},description:""},renderSectionTitle:{required:!1,tsType:{name:"signature",type:"function",raw:"(group: SelectOptionGroup) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  label: string;
  options: SelectOption[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]",required:!0}}]}},name:"group"}],return:{name:"ReactNode"}}},description:""}}};Jo.__docgenInfo={description:"",methods:[],displayName:"NativeSelectMirror",props:{name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | readonly string[]",elements:[{name:"string"},{name:"unknown"}]},description:""},items:{required:!0,tsType:{name:"unknown"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};Xo.__docgenInfo={description:"",methods:[],displayName:"ChevronIcon"};function Fa(e,n){const o=n==null?void 0:n.closest(".d-ui-docs");if(!o)return!0;const s=e.target;if(!(s instanceof Node))return!0;const t=s instanceof Element?s.closest(".d-ui-docs"):null;return!t||t===o}function Ga(e,n){const[o,s]=v.useState(null),{refs:t,floatingStyles:c,context:u}=Na({open:e,onOpenChange:n,placement:"bottom-start",strategy:"fixed",middleware:[Sa(4),wa({padding:Te}),Ta({padding:Te}),Va({padding:Te,apply({rects:h,elements:g,availableHeight:w}){Object.assign(g.floating.style,{width:`${h.reference.width}px`,maxHeight:`${Math.min(320,w)}px`})}})],whileElementsMounted:Ra}),m=ka(o),i=Oa(m),q=Ma(u,{bubbles:!1,ancestorScroll:!1,outsidePress:h=>Fa(h,o)}),{getReferenceProps:l,getFloatingProps:j}=La([q]);function N(h){t.setReference(h),s(h)}function F(h){const g=l(h),{ref:w,..._}=g;return _}return{refs:t,floatingStyles:c,getReferenceProps:F,getFloatingProps:j,portal:i,setReference:N}}function Ha(e){queueMicrotask(e)}function Wa(e,n){if(n<0)return;const o=document.getElementById(`${e}-opt-${n}`),s=document.getElementById(e);if(!o||!s)return;const t=o.getBoundingClientRect(),c=s.getBoundingClientRect();t.top<c.top?s.scrollTop-=c.top-t.top:t.bottom>c.bottom&&(s.scrollTop+=t.bottom-c.bottom)}function p({options:e,value:n,defaultValue:o,onValueChange:s,multiple:t=!1,name:c,form:u,placeholder:m="Rechercher",emptyMessage:i="Aucune option",size:q="md",label:l,helper:j,error:N,invalid:F=!1,valid:h=!1,disabled:g=!1,required:w,fullWidth:_=!0,className:be,id:R,clearable:G=!0,clearLabel:fe="Effacer",toggleLabel:D="Afficher les suggestions",chipGroupLabel:C,chipRemoveLabel:je="Retirer",defaultOpen:H=!1,openOnFocus:Zo=!1,filter:ge="auto",onSearch:E,listStatus:W="idle",loadingMessage:ea="Chargement",listErrorMessage:oa="Impossible de charger les options",listErrorRetryMessage:aa,beforeOptions:na,renderOption:ra,renderSectionTitle:ta,renderChip:ke,icon:Me,"aria-label":Le,"aria-labelledby":Oe,"aria-describedby":sa}){var He,We,Ke;const K=v.useId(),Ne=R??K,A=`${K}-list`,Ie=`${K}-helper`,la=l?`${Ne}-label`:void 0,_e=`${K}-live`,[b,T]=v.useState(H),[V,Q]=v.useState(null),De=n!==void 0,[ia,ca]=v.useState(o),k=za(De?n:ia),Ee=k.join("\0"),ye=!!F||!!N,ua=ye?N:j,pa=me(e),$=k.map(r=>pa.find(f=>f.value===r)).filter(r=>!!r),Ae=I((He=$[0])==null?void 0:He.label)||((We=$[0])==null?void 0:We.value)||"",$e=ge==="off",xe=v.useMemo(()=>ge!=="auto"||V==null?[...e]:Pa(e,V),[e,ge,V]),U=me(xe),[z,P]=v.useState(-1),ze=Oe??la,da=t?V??"":b?V??Ae:Ae,ma=!!(G&&!t&&k.length>0&&!g),ba=C??(typeof l=="string"?l:"Sélection"),Pe=r=>{De||ca(t?r:r[0]??""),s==null||s(t?r:r[0]??"")},Re=r=>{Pe(r?[r]:[]),Q(null),Ha(()=>T(!1))},Se=r=>{const f=k.includes(r)?k.filter(O=>O!==r):[...k,r];Pe(f),Q(""),E==null||E("")},{refs:fa,floatingStyles:ga,getReferenceProps:ya,getFloatingProps:xa,portal:Be,setReference:va}=Ga(b,r=>{T(r),r||Q(null)});v.useEffect(()=>{if(!b){P(-1);return}const r=me(xe),f=Ee.split("\0")[0];P(O=>{var Qe,Ue;if(V!=null)return Y(r,-1,1);if(O>=0&&O<r.length&&!((Qe=r[O])!=null&&Qe.disabled))return O;const we=Ba(r,f);return we>=0&&!((Ue=r[we])!=null&&Ue.disabled)?we:Y(r,-1,1)})},[b,Ee,xe,V]),v.useLayoutEffect(()=>{b&&Wa(A,z)},[b,z,A]);function Fe(r){P(f=>Y(U,f,r))}function ha(r){if(!g){if(r.key==="ArrowDown"){r.preventDefault(),b?Fe(1):T(!0);return}if(r.key==="ArrowUp"){r.preventDefault(),b?Fe(-1):T(!0);return}if(r.key==="Home"&&b){r.preventDefault(),P(Y(U,-1,1));return}if(r.key==="End"&&b){r.preventDefault(),P(Y(U,U.length,-1));return}if(r.key==="Enter"){if(!b)return;r.preventDefault();const f=U[z];f&&!f.disabled&&(t?Se(f.value):Re(f.value));return}r.key==="Escape"&&b&&(r.preventDefault(),Q(null),T(!1))}}function Ca(r){const f=r.target.value;T(!0),Q(f),E==null||E(f)}const Ge=t&&$.length>0?a.jsx("div",{role:"list","aria-label":ba,className:"flex flex-wrap items-center gap-1.5",children:$.map(r=>{const f=I(r.label)||r.value;return a.jsxs("span",{role:"listitem",className:"inline-flex max-w-full items-center gap-1 rounded-full bg-surface-muted px-2 py-0.5 text-sm text-fg",children:[a.jsx("span",{className:"inline-flex min-w-0 items-center gap-1.5",children:ke?ke(r):a.jsxs(a.Fragment,{children:[a.jsx(ve,{icon:r.icon}),a.jsx("span",{className:"min-w-0 truncate",children:r.label})]})}),a.jsx("button",{type:"button","aria-label":`${f} — ${je}`,disabled:g,onMouseDown:O=>O.preventDefault(),onClick:()=>Se(r.value),className:B("inline-flex size-4 shrink-0 items-center justify-center rounded-full text-fg/70","hover:bg-surface-hover hover:text-fg","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus","disabled:pointer-events-none disabled:opacity-50"),children:a.jsx(Ye,{})})]},r.value)})}):null;return a.jsxs(_a,{id:Ne,label:l,helper:j,error:N,required:w,invalid:ye,valid:h,disabled:g,fullWidth:_,size:q,className:be,showCount:!1,count:0,countMessage:()=>"",countId:`${K}-count`,helperId:Ie,frameRef:va,children:[a.jsx(Jo,{name:c,form:u,required:w,disabled:g,value:t?k:k[0],items:e,multiple:t}),a.jsx("div",{className:"d-ui-visually-hidden","aria-live":"polite",id:_e,children:W==="loading"||W==="loadingMore"?ea:null}),Me?a.jsx("span",{className:"inline-flex shrink-0 text-fg/70","aria-hidden":"true",children:Me}):null,a.jsxs("div",{className:B("flex min-w-0 flex-1 flex-wrap items-center gap-1.5",Ge&&"py-1"),children:[Ge,!t&&V==null&&((Ke=$[0])!=null&&Ke.icon)?a.jsx(ve,{icon:$[0].icon}):null,a.jsx("input",{...ya({type:"text",role:"combobox",id:Ne,disabled:g,readOnly:$e,autoComplete:"off",spellCheck:!1,"aria-haspopup":"listbox","aria-expanded":b,"aria-controls":A,"aria-autocomplete":ge==="off"?"none":"list","aria-activedescendant":b&&z>=0?`${A}-opt-${z}`:void 0,"aria-invalid":ye||void 0,"aria-required":w||void 0,"aria-label":Le,"aria-labelledby":Oe,"aria-describedby":Da(sa,ua?Ie:void 0,W==="loading"||W==="loadingMore"?_e:void 0),className:B($a,"min-w-[6rem] flex-1"),placeholder:m,value:da,onChange:$e?void 0:Ca,onKeyDown:ha,onClick:()=>T(!0),onFocus:()=>{Zo&&!g&&T(!0)}})})]}),ma?a.jsx(Ea,{label:fe,disabled:g,onClick:()=>Re(void 0),children:a.jsx(Ye,{})}):null,a.jsx(Aa,{invalid:ye,valid:h}),D?a.jsx("button",{type:"button",tabIndex:-1,disabled:g,"aria-label":D,"aria-expanded":b,"aria-controls":A,onMouseDown:r=>r.preventDefault(),onClick:()=>T(r=>!r),className:B("inline-flex size-6 shrink-0 items-center justify-center rounded-md text-fg/70","hover:bg-surface-muted hover:text-fg","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus","disabled:pointer-events-none disabled:opacity-50"),children:a.jsx("span",{className:B("inline-flex",b&&"rotate-180"),children:a.jsx(Xo,{})})}):null,b?a.jsx(Ia,{children:a.jsx("div",{ref:fa.setFloating,style:ga,...xa(),...Be,className:Be.className,children:a.jsx(Yo,{id:A,labelledBy:ze,ariaLabel:ze?void 0:Le,items:xe,activeIndex:z,selectedValues:k,emptyMessage:typeof i=="function"?i(V??""):i,listRef:()=>{},setActiveIndex:P,onSelect:t?Se:Re,multiple:t,listStatus:W,listErrorMessage:oa,listErrorRetryMessage:aa,beforeOptions:na,renderOption:ra,renderSectionTitle:ta})})}):null]})}p.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | readonly string[]",elements:[{name:"string"},{name:"unknown"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | readonly string[]",elements:[{name:"string"},{name:"unknown"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Rechercher'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"union",raw:"ReactNode | ((query: string) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"",defaultValue:{value:"'Aucune option'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Effacer'",computed:!1}},toggleLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Afficher les suggestions'",computed:!1}},chipGroupLabel:{required:!1,tsType:{name:"string"},description:""},chipRemoveLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Retirer'",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},openOnFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},filter:{required:!1,tsType:{name:"union",raw:"'auto' | 'manual' | 'off'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'manual'"},{name:"literal",value:"'off'"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},listStatus:{required:!1,tsType:{name:"union",raw:"'idle' | 'loading' | 'loadingMore' | 'error'",elements:[{name:"literal",value:"'idle'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'loadingMore'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'idle'",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Chargement'",computed:!1}},listErrorMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Impossible de charger les options'",computed:!1}},listErrorRetryMessage:{required:!1,tsType:{name:"ReactNode"},description:""},beforeOptions:{required:!1,tsType:{name:"ReactNode"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: SelectOption, selected: boolean) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"},{type:{name:"boolean"},name:"selected"}],return:{name:"ReactNode"}}},description:""},renderSectionTitle:{required:!1,tsType:{name:"signature",type:"function",raw:"(group: SelectOptionGroup) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  label: string;
  options: SelectOption[];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"SelectOption[]",required:!0}}]}},name:"group"}],return:{name:"ReactNode"}}},description:""},renderChip:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: SelectOption) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  value: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"ReactNode"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const L="import { Combobox } from 'd-ui';",Ka=`import { useState } from 'react';
import { Combobox } from 'd-ui';`;function S(e,n=!1){return[{value:"paris",label:e.paris},{value:"lyon",label:e.lyon},{value:"marseille",label:e.marseille},{value:"bruxelles",label:e.brussels,disabled:n}]}function Qa(e){return[{value:"paris",label:e.paris,description:e.capital},{value:"lyon",label:e.lyon,description:e.gastronomy},{value:"marseille",label:e.marseille,description:e.port},{value:"bruxelles",label:e.brussels,description:e.capital}]}function Ua(e){return[{label:e.france,options:[{value:"paris",label:e.paris},{value:"lyon",label:e.lyon}]},{label:e.belgium,options:[{value:"bruxelles",label:e.brussels}]}]}function Ya(e){return[{label:e.france,options:[{value:"paris",label:e.paris,description:e.capital},{value:"lyon",label:e.lyon,description:e.gastronomy},{value:"marseille",label:e.marseille,description:e.port}]},{label:e.belgium,options:[{value:"bruxelles",label:e.brussels,description:e.capital}]}]}function eo({name:e}){const n=e==="paris"?"M8 2l2 5h5l-4 3 1.5 5L8 12l-4.5 3L5 10 1 7h5L8 2z":e==="lyon"?"M8 2l6 12H2L8 2zm0 4.5L4.8 12h6.4L8 6.5z":e==="marseille"?"M2 11c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5M2 8c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5M2 5c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5":e==="bruxelles"?"M8 1.5l1.8 3.7 4.2.6-3 2.9.7 4.2L8 11.2 4.3 12.9l.7-4.2-3-2.9 4.2-.6L8 1.5z":"M8 3v10M3 8h10";return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:"size-4",children:a.jsx("path",{d:n,stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"})})}function Ja(){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:"size-4",children:a.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function Ce(e){return{docs:{...M(L,e).docs,story:{inline:!1,iframeHeight:280}}}}function Ve({value:e,defaultValue:n,onValueChange:o,multiple:s,...t}){const[c,u]=v.useState(e??n??(s?[]:void 0));return a.jsx(p,{...t,multiple:s,value:c,onValueChange:m=>{u(m),o==null||o(m)}})}function d(e){return{toggleLabel:e.toggle,clearLabel:e.clear,chipRemoveLabel:e.remove,chipGroupLabel:e.cities}}function qe(e){return ja(Ka,`const [value, setValue] = useState();
return (
${e.trim().split(`
`).map(n=>`    ${n}`).join(`
`)}
);`)}const Xa={title:"Components/Combobox",component:p,argTypes:qa,parameters:{controls:{include:["size","label","helper","placeholder","invalid","valid","disabled","required","fullWidth","multiple","filter","listStatus"]}}},J={name:"Sélection unique",args:{options:[]},parameters:qe(`<Combobox
    label="Ville"
    placeholder="Rechercher"
    options={[
        { value: 'paris', label: 'Paris' },
        { value: 'lyon', label: 'Lyon' },
        { value: 'marseille', label: 'Marseille' },
    ]}
    value={value}
    onValueChange={setValue}
/>`),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(Ve,{...e,label:e.label??o.city,placeholder:o.search,...d(o),options:S(o)})}},X={name:"Sélection multiple",args:{options:[]},parameters:qe(`<Combobox
    multiple
    label="Villes"
    placeholder="Rechercher"
    options={options}
    value={value}
    onValueChange={setValue}
/>`),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(Ve,{multiple:!0,label:o.cities,placeholder:o.search,defaultValue:["paris","lyon"],options:S(o),...d(o)})}},Z={name:"Désactivé",args:{options:[]},parameters:M(L,'<Combobox label="Ville" options={options} defaultValue="paris" disabled />'),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(p,{label:o.city,options:S(o),defaultValue:"paris",disabled:!0,...d(o)})}},ee={name:"Invalide",args:{options:[]},parameters:M(L,'<Combobox label="Ville" options={options} invalid error="Ce champ est requis." />'),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(p,{label:o.city,options:S(o),invalid:!0,error:o.error,...d(o)})}},oe={name:"Requis",args:{options:[]},parameters:qe(`<Combobox
    label="Ville"
    required
    options={options}
    value={value}
    onValueChange={setValue}
/>`),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(Ve,{label:o.city,options:S(o),required:!0,placeholder:o.search,...d(o)})}},ae={name:"Aide",args:{options:[]},parameters:M(L,'<Combobox label="Ville" helper="Le pays de résidence." options={options} />'),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(p,{label:o.city,helper:o.helper,options:S(o),placeholder:o.search,...d(o)})}},ne={name:"Valide",args:{options:[]},parameters:M(L,'<Combobox label="Ville" options={options} defaultValue="paris" valid />'),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(p,{label:o.city,options:S(o),defaultValue:"paris",valid:!0,...d(o)})}},re={name:"Tailles",args:{options:[]},parameters:M(L,`<>
    <Combobox size="sm" label="Petite" options={options} />
    <Combobox size="md" label="Moyenne" options={options} />
    <Combobox size="lg" label="Grande" options={options} />
</>`),render:(e,{globals:n})=>{const o=y(x(n.locale)),s=S(o);return a.jsxs("div",{className:"flex w-full max-w-md flex-col gap-4",children:[a.jsx(p,{size:"sm",label:o.small,options:s,...d(o)}),a.jsx(p,{size:"md",label:o.medium,options:s,...d(o)}),a.jsx(p,{size:"lg",label:o.large,options:s,...d(o)})]})}},te={name:"Groupe",args:{options:[]},parameters:M(L,`<Combobox
    label="Ville"
    options={[
        { label: 'France', options: [{ value: 'paris', label: 'Paris' }] },
        { label: 'Belgique', options: [{ value: 'bruxelles', label: 'Bruxelles' }] },
    ]}
/>`),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(p,{label:o.city,options:Ua(o),...d(o)})}},se={name:"Descriptions",args:{options:[]},parameters:M(L,`<Combobox
    label="Ville"
    options={[
        { value: 'paris', label: 'Paris', description: 'Capitale' },
        { value: 'lyon', label: 'Lyon', description: 'Gastronomie' },
    ]}
/>`),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(p,{label:o.city,options:Qa(o),placeholder:o.search,...d(o)})}};function Za({copy:e}){const[n,o]=v.useState(["lyon"]),[s,t]=v.useState(""),[c,u]=v.useState(Ya(e)),m=s.trim(),i=m.length>0&&!me(c).some(l=>String(l.label).toLowerCase()===m.toLowerCase()),q=()=>{const l={value:m.toLowerCase(),label:m,description:e.customCity};u(j=>[...j,l]),o(j=>[...j,l.value]),t("")};return a.jsx(p,{multiple:!0,label:e.cities,placeholder:e.search,options:c,value:n,onValueChange:l=>o(Array.isArray(l)?l:[l]),onSearch:t,filter:"auto",...d(e),renderOption:l=>a.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[a.jsx(eo,{name:l.value}),a.jsxs("span",{className:"min-w-0",children:[a.jsx("span",{className:"block truncate font-medium",children:l.label}),l.description?a.jsx("span",{className:"mt-0.5 block truncate text-xs font-normal text-fg/60",children:l.description}):null]})]}),renderSectionTitle:l=>a.jsx("span",{className:"uppercase tracking-wide",children:l.label}),renderChip:l=>a.jsxs("span",{className:"inline-flex min-w-0 items-center gap-1.5",children:[a.jsx(eo,{name:l.value}),a.jsx("span",{className:"truncate",children:l.label})]}),beforeOptions:i?a.jsxs("button",{type:"button",className:"flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-fg hover:bg-surface-hover",onMouseDown:l=>l.preventDefault(),onClick:q,children:[a.jsx(Ja,{}),e.create," « ",m," »"]}):null})}const le={name:"Rendu personnalisé",args:{options:[]},parameters:qe(`<Combobox
    multiple
    label="Villes"
    options={options}
    renderOption={(option) => (
        <span>
            {option.icon}
            <strong>{option.label}</strong>
            <span>{option.description}</span>
        </span>
    )}
    renderChip={(option) => (
        <>
            {option.icon}
            {option.label}
        </>
    )}
    beforeOptions={canCreate ? <button type="button">Créer « {query} »</button> : null}
/>`),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(Za,{copy:o})}},ie={name:"Chargement",args:{options:[]},parameters:Ce('<Combobox label="Ville" options={[]} listStatus="loading" defaultOpen />'),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(p,{label:o.city,options:[],listStatus:"loading",loadingMessage:o.loading,defaultOpen:!0,...d(o)})}},ce={name:"Chargement de la suite",args:{options:[]},parameters:Ce('<Combobox label="Ville" options={options} listStatus="loadingMore" defaultOpen />'),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(p,{label:o.city,options:S(o),listStatus:"loadingMore",loadingMessage:o.loadingMore,defaultOpen:!0,...d(o)})}},ue={name:"État vide",args:{options:[]},parameters:Ce("<Combobox label=\"Ville\" options={[]} emptyMessage={(query) => query ? `Aucun résultat pour « ${query} »` : 'Aucune option'} defaultOpen />"),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(p,{label:o.city,options:[],emptyMessage:s=>s?`${o.emptyQuery} « ${s} »`:o.empty,defaultOpen:!0,...d(o)})}},pe={name:"Erreur de liste",args:{options:[]},parameters:Ce(`<Combobox
    label="Ville"
    options={[]}
    listStatus="error"
    listErrorMessage="Impossible de charger les options"
    listErrorRetryMessage="Réessayez."
    defaultOpen
/>`),render:(e,{globals:n})=>{const o=y(x(n.locale));return a.jsx(p,{label:o.city,options:[],listStatus:"error",listErrorMessage:o.listError,listErrorRetryMessage:o.listRetry,defaultOpen:!0,...d(o)})}},de={name:"Types de filtre",args:{options:[]},parameters:M(L,`<>
    <Combobox filter="auto" label="Auto" options={options} />
    <Combobox filter="manual" label="Manuel" options={options} onSearch={onSearch} />
    <Combobox filter="off" label="Désactivé" options={options} />
</>`),render:(e,{globals:n})=>{const o=y(x(n.locale)),s=S(o);return a.jsxs("div",{className:"flex w-full max-w-md flex-col gap-4",children:[a.jsx(p,{filter:"auto",label:o.filterAuto,placeholder:o.search,options:s,...d(o)}),a.jsx(p,{filter:"manual",label:o.filterManual,placeholder:o.search,options:s,...d(o)}),a.jsx(p,{filter:"off",label:o.filterOff,placeholder:o.choose,options:s,openOnFocus:!0,...d(o)})]})}};var oo,ao,no;J.parameters={...J.parameters,docs:{...(oo=J.parameters)==null?void 0:oo.docs,source:{originalSource:`{
  name: 'Sélection unique',
  args: {
    options: []
  },
  parameters: comboboxSource(\`<Combobox
    label="Ville"
    placeholder="Rechercher"
    options={[
        { value: 'paris', label: 'Paris' },
        { value: 'lyon', label: 'Lyon' },
        { value: 'marseille', label: 'Marseille' },
    ]}
    value={value}
    onValueChange={setValue}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <ControlledCombobox {...args} label={args.label ?? copy.city} placeholder={copy.search} {...fieldChrome(copy)} options={cities(copy)} />;
  }
}`,...(no=(ao=J.parameters)==null?void 0:ao.docs)==null?void 0:no.source}}};var ro,to,so;X.parameters={...X.parameters,docs:{...(ro=X.parameters)==null?void 0:ro.docs,source:{originalSource:`{
  name: 'Sélection multiple',
  args: {
    options: []
  },
  parameters: comboboxSource(\`<Combobox
    multiple
    label="Villes"
    placeholder="Rechercher"
    options={options}
    value={value}
    onValueChange={setValue}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <ControlledCombobox multiple label={copy.cities} placeholder={copy.search} defaultValue={['paris', 'lyon']} options={cities(copy)} {...fieldChrome(copy)} />;
  }
}`,...(so=(to=X.parameters)==null?void 0:to.docs)==null?void 0:so.source}}};var lo,io,co;Z.parameters={...Z.parameters,docs:{...(lo=Z.parameters)==null?void 0:lo.docs,source:{originalSource:`{
  name: 'Désactivé',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<Combobox label="Ville" options={options} defaultValue="paris" disabled />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={cities(copy)} defaultValue="paris" disabled {...fieldChrome(copy)} />;
  }
}`,...(co=(io=Z.parameters)==null?void 0:io.docs)==null?void 0:co.source}}};var uo,po,mo;ee.parameters={...ee.parameters,docs:{...(uo=ee.parameters)==null?void 0:uo.docs,source:{originalSource:`{
  name: 'Invalide',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<Combobox label="Ville" options={options} invalid error="Ce champ est requis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={cities(copy)} invalid error={copy.error} {...fieldChrome(copy)} />;
  }
}`,...(mo=(po=ee.parameters)==null?void 0:po.docs)==null?void 0:mo.source}}};var bo,fo,go;oe.parameters={...oe.parameters,docs:{...(bo=oe.parameters)==null?void 0:bo.docs,source:{originalSource:`{
  name: 'Requis',
  args: {
    options: []
  },
  parameters: comboboxSource(\`<Combobox
    label="Ville"
    required
    options={options}
    value={value}
    onValueChange={setValue}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <ControlledCombobox label={copy.city} options={cities(copy)} required placeholder={copy.search} {...fieldChrome(copy)} />;
  }
}`,...(go=(fo=oe.parameters)==null?void 0:fo.docs)==null?void 0:go.source}}};var yo,xo,vo;ae.parameters={...ae.parameters,docs:{...(yo=ae.parameters)==null?void 0:yo.docs,source:{originalSource:`{
  name: 'Aide',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<Combobox label="Ville" helper="Le pays de résidence." options={options} />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} helper={copy.helper} options={cities(copy)} placeholder={copy.search} {...fieldChrome(copy)} />;
  }
}`,...(vo=(xo=ae.parameters)==null?void 0:xo.docs)==null?void 0:vo.source}}};var ho,Co,qo;ne.parameters={...ne.parameters,docs:{...(ho=ne.parameters)==null?void 0:ho.docs,source:{originalSource:`{
  name: 'Valide',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<Combobox label="Ville" options={options} defaultValue="paris" valid />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={cities(copy)} defaultValue="paris" valid {...fieldChrome(copy)} />;
  }
}`,...(qo=(Co=ne.parameters)==null?void 0:Co.docs)==null?void 0:qo.source}}};var jo,No,Ro;re.parameters={...re.parameters,docs:{...(jo=re.parameters)==null?void 0:jo.docs,source:{originalSource:`{
  name: 'Tailles',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<>
    <Combobox size="sm" label="Petite" options={options} />
    <Combobox size="md" label="Moyenne" options={options} />
    <Combobox size="lg" label="Grande" options={options} />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    const options = cities(copy);
    return <div className="flex w-full max-w-md flex-col gap-4">
        <Combobox size="sm" label={copy.small} options={options} {...fieldChrome(copy)} />
        <Combobox size="md" label={copy.medium} options={options} {...fieldChrome(copy)} />
        <Combobox size="lg" label={copy.large} options={options} {...fieldChrome(copy)} />
      </div>;
  }
}`,...(Ro=(No=re.parameters)==null?void 0:No.docs)==null?void 0:Ro.source}}};var So,wo,To;te.parameters={...te.parameters,docs:{...(So=te.parameters)==null?void 0:So.docs,source:{originalSource:`{
  name: 'Groupe',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<Combobox
    label="Ville"
    options={[
        { label: 'France', options: [{ value: 'paris', label: 'Paris' }] },
        { label: 'Belgique', options: [{ value: 'bruxelles', label: 'Bruxelles' }] },
    ]}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={groupedCities(copy)} {...fieldChrome(copy)} />;
  }
}`,...(To=(wo=te.parameters)==null?void 0:wo.docs)==null?void 0:To.source}}};var Vo,ko,Mo;se.parameters={...se.parameters,docs:{...(Vo=se.parameters)==null?void 0:Vo.docs,source:{originalSource:`{
  name: 'Descriptions',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<Combobox
    label="Ville"
    options={[
        { value: 'paris', label: 'Paris', description: 'Capitale' },
        { value: 'lyon', label: 'Lyon', description: 'Gastronomie' },
    ]}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={describedCities(copy)} placeholder={copy.search} {...fieldChrome(copy)} />;
  }
}`,...(Mo=(ko=se.parameters)==null?void 0:ko.docs)==null?void 0:Mo.source}}};var Lo,Oo,Io;le.parameters={...le.parameters,docs:{...(Lo=le.parameters)==null?void 0:Lo.docs,source:{originalSource:`{
  name: 'Rendu personnalisé',
  args: {
    options: []
  },
  parameters: comboboxSource(\`<Combobox
    multiple
    label="Villes"
    options={options}
    renderOption={(option) => (
        <span>
            {option.icon}
            <strong>{option.label}</strong>
            <span>{option.description}</span>
        </span>
    )}
    renderChip={(option) => (
        <>
            {option.icon}
            {option.label}
        </>
    )}
    beforeOptions={canCreate ? <button type="button">Créer « {query} »</button> : null}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <CustomRenderDemo copy={copy} />;
  }
}`,...(Io=(Oo=le.parameters)==null?void 0:Oo.docs)==null?void 0:Io.source}}};var _o,Do,Eo;ie.parameters={...ie.parameters,docs:{...(_o=ie.parameters)==null?void 0:_o.docs,source:{originalSource:`{
  name: 'Chargement',
  args: {
    options: []
  },
  parameters: listStateSource(\`<Combobox label="Ville" options={[]} listStatus="loading" defaultOpen />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={[]} listStatus="loading" loadingMessage={copy.loading} defaultOpen {...fieldChrome(copy)} />;
  }
}`,...(Eo=(Do=ie.parameters)==null?void 0:Do.docs)==null?void 0:Eo.source}}};var Ao,$o,zo;ce.parameters={...ce.parameters,docs:{...(Ao=ce.parameters)==null?void 0:Ao.docs,source:{originalSource:`{
  name: 'Chargement de la suite',
  args: {
    options: []
  },
  parameters: listStateSource(\`<Combobox label="Ville" options={options} listStatus="loadingMore" defaultOpen />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={cities(copy)} listStatus="loadingMore" loadingMessage={copy.loadingMore} defaultOpen {...fieldChrome(copy)} />;
  }
}`,...(zo=($o=ce.parameters)==null?void 0:$o.docs)==null?void 0:zo.source}}};var Po,Bo,Fo;ue.parameters={...ue.parameters,docs:{...(Po=ue.parameters)==null?void 0:Po.docs,source:{originalSource:`{
  name: 'État vide',
  args: {
    options: []
  },
  parameters: listStateSource(\`<Combobox label="Ville" options={[]} emptyMessage={(query) => query ? \\\`Aucun résultat pour « \\\${query} »\\\` : 'Aucune option'} defaultOpen />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={[]} emptyMessage={query => query ? \`\${copy.emptyQuery} « \${query} »\` : copy.empty} defaultOpen {...fieldChrome(copy)} />;
  }
}`,...(Fo=(Bo=ue.parameters)==null?void 0:Bo.docs)==null?void 0:Fo.source}}};var Go,Ho,Wo;pe.parameters={...pe.parameters,docs:{...(Go=pe.parameters)==null?void 0:Go.docs,source:{originalSource:`{
  name: 'Erreur de liste',
  args: {
    options: []
  },
  parameters: listStateSource(\`<Combobox
    label="Ville"
    options={[]}
    listStatus="error"
    listErrorMessage="Impossible de charger les options"
    listErrorRetryMessage="Réessayez."
    defaultOpen
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={[]} listStatus="error" listErrorMessage={copy.listError} listErrorRetryMessage={copy.listRetry} defaultOpen {...fieldChrome(copy)} />;
  }
}`,...(Wo=(Ho=pe.parameters)==null?void 0:Ho.docs)==null?void 0:Wo.source}}};var Ko,Qo,Uo;de.parameters={...de.parameters,docs:{...(Ko=de.parameters)==null?void 0:Ko.docs,source:{originalSource:`{
  name: 'Types de filtre',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<>
    <Combobox filter="auto" label="Auto" options={options} />
    <Combobox filter="manual" label="Manuel" options={options} onSearch={onSearch} />
    <Combobox filter="off" label="Désactivé" options={options} />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    const options = cities(copy);
    return <div className="flex w-full max-w-md flex-col gap-4">
        <Combobox filter="auto" label={copy.filterAuto} placeholder={copy.search} options={options} {...fieldChrome(copy)} />
        <Combobox filter="manual" label={copy.filterManual} placeholder={copy.search} options={options} {...fieldChrome(copy)} />
        <Combobox filter="off" label={copy.filterOff} placeholder={copy.choose} options={options} openOnFocus {...fieldChrome(copy)} />
      </div>;
  }
}`,...(Uo=(Qo=de.parameters)==null?void 0:Qo.docs)==null?void 0:Uo.source}}};const en=["Default","Multiple","Disabled","Invalid","Required","Helper","Valid","Sizes","Group","Descriptions","Custom","Loading","LoadingMore","Empty","ListError","FilterTypes"],ln=Object.freeze(Object.defineProperty({__proto__:null,Custom:le,Default:J,Descriptions:se,Disabled:Z,Empty:ue,FilterTypes:de,Group:te,Helper:ae,Invalid:ee,ListError:pe,Loading:ie,LoadingMore:ce,Multiple:X,Required:oe,Sizes:re,Valid:ne,__namedExportsOrder:en,default:Xa},Symbol.toStringTag,{value:"Module"}));export{ln as C,J as D,ue as E,de as F,te as G,ae as H,ee as I,ie as L,X as M,oe as R,re as S,ne as V,se as a,le as b,Z as c,ce as d,pe as e};
