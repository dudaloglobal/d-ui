import{r as b,j as a,f as E,X as d,d as m}from"./iframe-D5579FTu.js";import{j as ba}from"./arg-types-865yu2cB.js";import{c as C,b as fa}from"./docs-source-C_O40UCi.js";import{g as ya}from"./floating-OHeRg-O1.js";import{a as Ee,T as ga,m as xa,C as va,S as ha,n as Ca}from"./textControl-BnayZD6R.js";import{a as Sa,f as se,o as ze,b as qa,u as Va,n as z,c as ja,s as Ra,S as Ae,N as Na,C as wa,d as Ma,e as Ta}from"./useSelectOverlay-GMLbnFIJ.js";function r({options:o,value:s,defaultValue:e,onValueChange:i,multiple:u=!1,name:V,form:L,placeholder:f="Rechercher",emptyMessage:k="Aucune option",size:te="md",label:n,helper:j,error:ie,invalid:Do=!1,valid:fe=!1,disabled:g=!1,required:ce,fullWidth:Eo=!0,className:zo,id:Ao,clearable:Fo=!0,clearLabel:$o="Effacer",toggleLabel:ye="Afficher les suggestions",chipGroupLabel:Bo,chipRemoveLabel:Po="Retirer",defaultOpen:Go=!1,openOnFocus:Ho=!1,filter:oe="auto",onSearch:R,listStatus:O="idle",loadingMessage:Wo="Chargement",listErrorMessage:Qo="Impossible de charger les options",listErrorRetryMessage:Ko,beforeOptions:Uo,renderOption:Xo,renderSectionTitle:Jo,renderChip:ge,icon:xe,"aria-label":ve,"aria-labelledby":he,"aria-describedby":Yo}){var ke,Oe,_e;const _=b.useId(),pe=Ao??_,N=`${_}-list`,Ce=`${_}-helper`,Zo=n?`${pe}-label`:void 0,Se=`${_}-live`,[c,x]=b.useState(Go),[v,I]=b.useState(null),qe=s!==void 0,[ea,oa]=b.useState(e),h=Sa(qe?s:ea),Ve=h.join("\0"),ae=!!Do||!!ie,aa=ae?ie:j,la=se(o),w=h.map(l=>la.find(p=>p.value===l)).filter(l=>!!l),je=ze((ke=w[0])==null?void 0:ke.label)||((Oe=w[0])==null?void 0:Oe.value)||"",Re=oe==="off",le=b.useMemo(()=>oe!=="auto"||v==null?[...o]:qa(o,v),[o,oe,v]),D=se(le),[M,T]=b.useState(-1),Ne=he??Zo,sa=u?v??"":c?v??je:je,na=!!(Fo&&!u&&h.length>0&&!g),ra=Bo??(typeof n=="string"?n:"Sélection"),we=l=>{qe||oa(u?l:l[0]??""),i==null||i(u?l:l[0]??"")},ue=l=>{we(l?[l]:[]),I(null),Ta(()=>x(!1))},de=l=>{const p=h.includes(l)?h.filter(q=>q!==l):[...h,l];we(p),I(""),R==null||R("")},{refs:ta,floatingStyles:ia,getReferenceProps:ca,getFloatingProps:pa,portal:Me,setReference:ua}=Va(c,l=>{x(l),l||I(null)});b.useEffect(()=>{if(!c){T(-1);return}const l=se(le),p=Ve.split("\0")[0];T(q=>{var Ie,De;if(v!=null)return z(l,-1,1);if(q>=0&&q<l.length&&!((Ie=l[q])!=null&&Ie.disabled))return q;const me=ja(l,p);return me>=0&&!((De=l[me])!=null&&De.disabled)?me:z(l,-1,1)})},[c,Ve,le,v]),b.useLayoutEffect(()=>{c&&Ra(N,M)},[c,M,N]);function Te(l){T(p=>z(D,p,l))}function da(l){if(!g){if(l.key==="ArrowDown"){l.preventDefault(),c?Te(1):x(!0);return}if(l.key==="ArrowUp"){l.preventDefault(),c?Te(-1):x(!0);return}if(l.key==="Home"&&c){l.preventDefault(),T(z(D,-1,1));return}if(l.key==="End"&&c){l.preventDefault(),T(z(D,D.length,-1));return}if(l.key==="Enter"){if(!c)return;l.preventDefault();const p=D[M];p&&!p.disabled&&(u?de(p.value):ue(p.value));return}l.key==="Escape"&&c&&(l.preventDefault(),I(null),x(!1))}}function ma(l){const p=l.target.value;x(!0),I(p),R==null||R(p)}const Le=u&&w.length>0?a.jsx("div",{role:"list","aria-label":ra,className:"flex flex-wrap items-center gap-1.5",children:w.map(l=>{const p=ze(l.label)||l.value;return a.jsxs("span",{role:"listitem",className:"inline-flex max-w-full items-center gap-1 rounded-full bg-surface-muted px-2 py-0.5 text-sm text-fg",children:[a.jsx("span",{className:"inline-flex min-w-0 items-center gap-1.5",children:ge?ge(l):a.jsxs(a.Fragment,{children:[a.jsx(Ae,{icon:l.icon}),a.jsx("span",{className:"min-w-0 truncate",children:l.label})]})}),a.jsx("button",{type:"button","aria-label":`${p} — ${Po}`,disabled:g,onMouseDown:q=>q.preventDefault(),onClick:()=>de(l.value),className:E("inline-flex size-4 shrink-0 items-center justify-center rounded-full text-fg/70","hover:bg-surface-hover hover:text-fg","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus","disabled:pointer-events-none disabled:opacity-50"),children:a.jsx(Ee,{})})]},l.value)})}):null;return a.jsxs(ga,{id:pe,label:n,helper:j,error:ie,required:ce,invalid:ae,valid:fe,disabled:g,fullWidth:Eo,size:te,className:zo,showCount:!1,count:0,countMessage:()=>"",countId:`${_}-count`,helperId:Ce,frameRef:ua,children:[a.jsx(Na,{name:V,form:L,required:ce,disabled:g,value:u?h:h[0],items:o,multiple:u}),a.jsx("div",{className:"d-ui-visually-hidden","aria-live":"polite",id:Se,children:O==="loading"||O==="loadingMore"?Wo:null}),xe?a.jsx("span",{className:"inline-flex shrink-0 text-fg/70","aria-hidden":"true",children:xe}):null,a.jsxs("div",{className:E("flex min-w-0 flex-1 flex-wrap items-center gap-1.5",Le&&"py-1"),children:[Le,!u&&v==null&&((_e=w[0])!=null&&_e.icon)?a.jsx(Ae,{icon:w[0].icon}):null,a.jsx("input",{...ca({type:"text",role:"combobox",id:pe,disabled:g,readOnly:Re,autoComplete:"off",spellCheck:!1,"aria-haspopup":"listbox","aria-expanded":c,"aria-controls":N,"aria-autocomplete":oe==="off"?"none":"list","aria-activedescendant":c&&M>=0?`${N}-opt-${M}`:void 0,"aria-invalid":ae||void 0,"aria-required":ce||void 0,"aria-label":ve,"aria-labelledby":he,"aria-describedby":xa(Yo,aa?Ce:void 0,O==="loading"||O==="loadingMore"?Se:void 0),className:E(Ca,"min-w-[6rem] flex-1"),placeholder:f,value:sa,onChange:Re?void 0:ma,onKeyDown:da,onClick:()=>x(!0),onFocus:()=>{Ho&&!g&&x(!0)}})})]}),na?a.jsx(va,{label:$o,disabled:g,onClick:()=>ue(void 0),children:a.jsx(Ee,{})}):null,a.jsx(ha,{invalid:ae,valid:fe}),ye?a.jsx("button",{type:"button",tabIndex:-1,disabled:g,"aria-label":ye,"aria-expanded":c,"aria-controls":N,onMouseDown:l=>l.preventDefault(),onClick:()=>x(l=>!l),className:E("inline-flex size-6 shrink-0 items-center justify-center rounded-md text-fg/70","hover:bg-surface-muted hover:text-fg","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus","disabled:pointer-events-none disabled:opacity-50"),children:a.jsx("span",{className:E("inline-flex",c&&"rotate-180"),children:a.jsx(wa,{})})}):null,c?a.jsx(ya,{children:a.jsx("div",{ref:ta.setFloating,style:ia,...pa(),...Me,className:Me.className,children:a.jsx(Ma,{id:N,labelledBy:Ne,ariaLabel:Ne?void 0:ve,items:le,activeIndex:M,selectedValues:h,emptyMessage:typeof k=="function"?k(v??""):k,listRef:()=>{},setActiveIndex:T,onSelect:u?de:ue,multiple:u,listStatus:O,listErrorMessage:Qo,listErrorRetryMessage:Ko,beforeOptions:Uo,renderOption:Xo,renderSectionTitle:Jo})})}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | readonly string[]",elements:[{name:"string"},{name:"unknown"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | readonly string[]",elements:[{name:"string"},{name:"unknown"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Rechercher'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"union",raw:"ReactNode | ((query: string) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"",defaultValue:{value:"'Aucune option'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Effacer'",computed:!1}},toggleLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Afficher les suggestions'",computed:!1}},chipGroupLabel:{required:!1,tsType:{name:"string"},description:""},chipRemoveLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Retirer'",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},openOnFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},filter:{required:!1,tsType:{name:"union",raw:"'auto' | 'manual' | 'off'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'manual'"},{name:"literal",value:"'off'"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},listStatus:{required:!1,tsType:{name:"union",raw:"'idle' | 'loading' | 'loadingMore' | 'error'",elements:[{name:"literal",value:"'idle'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'loadingMore'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'idle'",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Chargement'",computed:!1}},listErrorMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Impossible de charger les options'",computed:!1}},listErrorRetryMessage:{required:!1,tsType:{name:"ReactNode"},description:""},beforeOptions:{required:!1,tsType:{name:"ReactNode"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: SelectOption, selected: boolean) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}},name:"option"}],return:{name:"ReactNode"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const S="import { Combobox } from 'd-ui';",La=`import { useState } from 'react';
import { Combobox } from 'd-ui';`;function y(o,s=!1){return[{value:"paris",label:o.paris},{value:"lyon",label:o.lyon},{value:"marseille",label:o.marseille},{value:"bruxelles",label:o.brussels,disabled:s}]}function ka(o){return[{value:"paris",label:o.paris,description:o.capital},{value:"lyon",label:o.lyon,description:o.gastronomy},{value:"marseille",label:o.marseille,description:o.port},{value:"bruxelles",label:o.brussels,description:o.capital}]}function Oa(o){return[{label:o.france,options:[{value:"paris",label:o.paris},{value:"lyon",label:o.lyon}]},{label:o.belgium,options:[{value:"bruxelles",label:o.brussels}]}]}function _a(o){return[{label:o.france,options:[{value:"paris",label:o.paris,description:o.capital},{value:"lyon",label:o.lyon,description:o.gastronomy},{value:"marseille",label:o.marseille,description:o.port}]},{label:o.belgium,options:[{value:"bruxelles",label:o.brussels,description:o.capital}]}]}function Fe({name:o}){const s=o==="paris"?"M8 2l2 5h5l-4 3 1.5 5L8 12l-4.5 3L5 10 1 7h5L8 2z":o==="lyon"?"M8 2l6 12H2L8 2zm0 4.5L4.8 12h6.4L8 6.5z":o==="marseille"?"M2 11c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5M2 8c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5M2 5c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5":o==="bruxelles"?"M8 1.5l1.8 3.7 4.2.6-3 2.9.7 4.2L8 11.2 4.3 12.9l.7-4.2-3-2.9 4.2-.6L8 1.5z":"M8 3v10M3 8h10";return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:"size-4",children:a.jsx("path",{d:s,stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"})})}function Ia(){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:"size-4",children:a.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function ne(o){return{docs:{...C(S,o).docs,story:{inline:!1,iframeHeight:280}}}}function be({value:o,defaultValue:s,onValueChange:e,multiple:i,...u}){const[V,L]=b.useState(o??s??(i?[]:void 0));return a.jsx(r,{...u,multiple:i,value:V,onValueChange:f=>{L(f),e==null||e(f)}})}function t(o){return{toggleLabel:o.toggle,clearLabel:o.clear,chipRemoveLabel:o.remove,chipGroupLabel:o.cities}}function re(o){return fa(La,`const [value, setValue] = useState();
return (
${o.trim().split(`
`).map(s=>`    ${s}`).join(`
`)}
);`)}const Da={title:"Components/Combobox",component:r,argTypes:ba,parameters:{controls:{include:["size","label","helper","placeholder","invalid","valid","disabled","required","fullWidth","multiple","filter","listStatus"]}}},A={name:"Sélection unique",args:{options:[]},parameters:re(`<Combobox
    label="Ville"
    placeholder="Rechercher"
    options={[
        { value: 'paris', label: 'Paris' },
        { value: 'lyon', label: 'Lyon' },
        { value: 'marseille', label: 'Marseille' },
    ]}
    value={value}
    onValueChange={setValue}
/>`),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(be,{...o,label:o.label??e.city,placeholder:e.search,...t(e),options:y(e)})}},F={name:"Sélection multiple",args:{options:[]},parameters:re(`<Combobox
    multiple
    label="Villes"
    placeholder="Rechercher"
    options={options}
    value={value}
    onValueChange={setValue}
/>`),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(be,{multiple:!0,label:e.cities,placeholder:e.search,defaultValue:["paris","lyon"],options:y(e),...t(e)})}},$={name:"Désactivé",args:{options:[]},parameters:C(S,'<Combobox label="Ville" options={options} defaultValue="paris" disabled />'),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(r,{label:e.city,options:y(e),defaultValue:"paris",disabled:!0,...t(e)})}},B={name:"Invalide",args:{options:[]},parameters:C(S,'<Combobox label="Ville" options={options} invalid error="Ce champ est requis." />'),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(r,{label:e.city,options:y(e),invalid:!0,error:e.error,...t(e)})}},P={name:"Requis",args:{options:[]},parameters:re(`<Combobox
    label="Ville"
    required
    options={options}
    value={value}
    onValueChange={setValue}
/>`),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(be,{label:e.city,options:y(e),required:!0,placeholder:e.search,...t(e)})}},G={name:"Aide",args:{options:[]},parameters:C(S,'<Combobox label="Ville" helper="Le pays de résidence." options={options} />'),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(r,{label:e.city,helper:e.helper,options:y(e),placeholder:e.search,...t(e)})}},H={name:"Valide",args:{options:[]},parameters:C(S,'<Combobox label="Ville" options={options} defaultValue="paris" valid />'),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(r,{label:e.city,options:y(e),defaultValue:"paris",valid:!0,...t(e)})}},W={name:"Tailles",args:{options:[]},parameters:C(S,`<>
    <Combobox size="sm" label="Petite" options={options} />
    <Combobox size="md" label="Moyenne" options={options} />
    <Combobox size="lg" label="Grande" options={options} />
</>`),render:(o,{globals:s})=>{const e=d(m(s.locale)),i=y(e);return a.jsxs("div",{className:"flex w-full max-w-md flex-col gap-4",children:[a.jsx(r,{size:"sm",label:e.small,options:i,...t(e)}),a.jsx(r,{size:"md",label:e.medium,options:i,...t(e)}),a.jsx(r,{size:"lg",label:e.large,options:i,...t(e)})]})}},Q={name:"Groupe",args:{options:[]},parameters:C(S,`<Combobox
    label="Ville"
    options={[
        { label: 'France', options: [{ value: 'paris', label: 'Paris' }] },
        { label: 'Belgique', options: [{ value: 'bruxelles', label: 'Bruxelles' }] },
    ]}
/>`),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(r,{label:e.city,options:Oa(e),...t(e)})}},K={name:"Descriptions",args:{options:[]},parameters:C(S,`<Combobox
    label="Ville"
    options={[
        { value: 'paris', label: 'Paris', description: 'Capitale' },
        { value: 'lyon', label: 'Lyon', description: 'Gastronomie' },
    ]}
/>`),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(r,{label:e.city,options:ka(e),placeholder:e.search,...t(e)})}};function Ea({copy:o}){const[s,e]=b.useState(["lyon"]),[i,u]=b.useState(""),[V,L]=b.useState(_a(o)),f=i.trim(),k=f.length>0&&!se(V).some(n=>String(n.label).toLowerCase()===f.toLowerCase()),te=()=>{const n={value:f.toLowerCase(),label:f,description:o.customCity};L(j=>[...j,n]),e(j=>[...j,n.value]),u("")};return a.jsx(r,{multiple:!0,label:o.cities,placeholder:o.search,options:V,value:s,onValueChange:n=>e(Array.isArray(n)?n:[n]),onSearch:u,filter:"auto",...t(o),renderOption:n=>a.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[a.jsx(Fe,{name:n.value}),a.jsxs("span",{className:"min-w-0",children:[a.jsx("span",{className:"block truncate font-medium",children:n.label}),n.description?a.jsx("span",{className:"mt-0.5 block truncate text-xs font-normal text-fg/60",children:n.description}):null]})]}),renderSectionTitle:n=>a.jsx("span",{className:"uppercase tracking-wide",children:n.label}),renderChip:n=>a.jsxs("span",{className:"inline-flex min-w-0 items-center gap-1.5",children:[a.jsx(Fe,{name:n.value}),a.jsx("span",{className:"truncate",children:n.label})]}),beforeOptions:k?a.jsxs("button",{type:"button",className:"flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-fg hover:bg-surface-hover",onMouseDown:n=>n.preventDefault(),onClick:te,children:[a.jsx(Ia,{}),o.create," « ",f," »"]}):null})}const U={name:"Rendu personnalisé",args:{options:[]},parameters:re(`<Combobox
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
/>`),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(Ea,{copy:e})}},X={name:"Chargement",args:{options:[]},parameters:ne('<Combobox label="Ville" options={[]} listStatus="loading" defaultOpen />'),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(r,{label:e.city,options:[],listStatus:"loading",loadingMessage:e.loading,defaultOpen:!0,...t(e)})}},J={name:"Chargement de la suite",args:{options:[]},parameters:ne('<Combobox label="Ville" options={options} listStatus="loadingMore" defaultOpen />'),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(r,{label:e.city,options:y(e),listStatus:"loadingMore",loadingMessage:e.loadingMore,defaultOpen:!0,...t(e)})}},Y={name:"État vide",args:{options:[]},parameters:ne("<Combobox label=\"Ville\" options={[]} emptyMessage={(query) => query ? `Aucun résultat pour « ${query} »` : 'Aucune option'} defaultOpen />"),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(r,{label:e.city,options:[],emptyMessage:i=>i?`${e.emptyQuery} « ${i} »`:e.empty,defaultOpen:!0,...t(e)})}},Z={name:"Erreur de liste",args:{options:[]},parameters:ne(`<Combobox
    label="Ville"
    options={[]}
    listStatus="error"
    listErrorMessage="Impossible de charger les options"
    listErrorRetryMessage="Réessayez."
    defaultOpen
/>`),render:(o,{globals:s})=>{const e=d(m(s.locale));return a.jsx(r,{label:e.city,options:[],listStatus:"error",listErrorMessage:e.listError,listErrorRetryMessage:e.listRetry,defaultOpen:!0,...t(e)})}},ee={name:"Types de filtre",args:{options:[]},parameters:C(S,`<>
    <Combobox filter="auto" label="Auto" options={options} />
    <Combobox filter="manual" label="Manuel" options={options} onSearch={onSearch} />
    <Combobox filter="off" label="Désactivé" options={options} />
</>`),render:(o,{globals:s})=>{const e=d(m(s.locale)),i=y(e);return a.jsxs("div",{className:"flex w-full max-w-md flex-col gap-4",children:[a.jsx(r,{filter:"auto",label:e.filterAuto,placeholder:e.search,options:i,...t(e)}),a.jsx(r,{filter:"manual",label:e.filterManual,placeholder:e.search,options:i,...t(e)}),a.jsx(r,{filter:"off",label:e.filterOff,placeholder:e.choose,options:i,openOnFocus:!0,...t(e)})]})}};var $e,Be,Pe;A.parameters={...A.parameters,docs:{...($e=A.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Pe=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Ge,He,We;F.parameters={...F.parameters,docs:{...(Ge=F.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(We=(He=F.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Qe,Ke,Ue;$.parameters={...$.parameters,docs:{...(Qe=$.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ue=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var Xe,Je,Ye;B.parameters={...B.parameters,docs:{...(Xe=B.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ye=(Je=B.parameters)==null?void 0:Je.docs)==null?void 0:Ye.source}}};var Ze,eo,oo;P.parameters={...P.parameters,docs:{...(Ze=P.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(oo=(eo=P.parameters)==null?void 0:eo.docs)==null?void 0:oo.source}}};var ao,lo,so;G.parameters={...G.parameters,docs:{...(ao=G.parameters)==null?void 0:ao.docs,source:{originalSource:`{
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
}`,...(so=(lo=G.parameters)==null?void 0:lo.docs)==null?void 0:so.source}}};var no,ro,to;H.parameters={...H.parameters,docs:{...(no=H.parameters)==null?void 0:no.docs,source:{originalSource:`{
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
}`,...(to=(ro=H.parameters)==null?void 0:ro.docs)==null?void 0:to.source}}};var io,co,po;W.parameters={...W.parameters,docs:{...(io=W.parameters)==null?void 0:io.docs,source:{originalSource:`{
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
}`,...(po=(co=W.parameters)==null?void 0:co.docs)==null?void 0:po.source}}};var uo,mo,bo;Q.parameters={...Q.parameters,docs:{...(uo=Q.parameters)==null?void 0:uo.docs,source:{originalSource:`{
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
}`,...(bo=(mo=Q.parameters)==null?void 0:mo.docs)==null?void 0:bo.source}}};var fo,yo,go;K.parameters={...K.parameters,docs:{...(fo=K.parameters)==null?void 0:fo.docs,source:{originalSource:`{
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
}`,...(go=(yo=K.parameters)==null?void 0:yo.docs)==null?void 0:go.source}}};var xo,vo,ho;U.parameters={...U.parameters,docs:{...(xo=U.parameters)==null?void 0:xo.docs,source:{originalSource:`{
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
}`,...(ho=(vo=U.parameters)==null?void 0:vo.docs)==null?void 0:ho.source}}};var Co,So,qo;X.parameters={...X.parameters,docs:{...(Co=X.parameters)==null?void 0:Co.docs,source:{originalSource:`{
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
}`,...(qo=(So=X.parameters)==null?void 0:So.docs)==null?void 0:qo.source}}};var Vo,jo,Ro;J.parameters={...J.parameters,docs:{...(Vo=J.parameters)==null?void 0:Vo.docs,source:{originalSource:`{
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
}`,...(Ro=(jo=J.parameters)==null?void 0:jo.docs)==null?void 0:Ro.source}}};var No,wo,Mo;Y.parameters={...Y.parameters,docs:{...(No=Y.parameters)==null?void 0:No.docs,source:{originalSource:`{
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
}`,...(Mo=(wo=Y.parameters)==null?void 0:wo.docs)==null?void 0:Mo.source}}};var To,Lo,ko;Z.parameters={...Z.parameters,docs:{...(To=Z.parameters)==null?void 0:To.docs,source:{originalSource:`{
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
}`,...(ko=(Lo=Z.parameters)==null?void 0:Lo.docs)==null?void 0:ko.source}}};var Oo,_o,Io;ee.parameters={...ee.parameters,docs:{...(Oo=ee.parameters)==null?void 0:Oo.docs,source:{originalSource:`{
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
}`,...(Io=(_o=ee.parameters)==null?void 0:_o.docs)==null?void 0:Io.source}}};const za=["Default","Multiple","Disabled","Invalid","Required","Helper","Valid","Sizes","Group","Descriptions","Custom","Loading","LoadingMore","Empty","ListError","FilterTypes"],Wa=Object.freeze(Object.defineProperty({__proto__:null,Custom:U,Default:A,Descriptions:K,Disabled:$,Empty:Y,FilterTypes:ee,Group:Q,Helper:G,Invalid:B,ListError:Z,Loading:X,LoadingMore:J,Multiple:F,Required:P,Sizes:W,Valid:H,__namedExportsOrder:za,default:Da},Symbol.toStringTag,{value:"Module"}));export{Wa as C,A as D,Y as E,ee as F,Q as G,G as H,B as I,X as L,F as M,P as R,W as S,H as V,K as a,U as b,$ as c,J as d,Z as e};
