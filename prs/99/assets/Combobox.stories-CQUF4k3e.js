import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,g as a,l as o,n as s}from"./docs-locale-DxRsX5eR.js";import{h as ee,i as c,l as te,n as l,r as u}from"./docs-source-5snetGJm.js";import{c as d,s as ne}from"./floating-DvfFhaFC.js";import{d as re,l as ie,n as ae,o as oe,s as se,t as ce,u as le}from"./textControl-CulYcE92.js";import{_ as ue,a as de,c as fe,d as pe,f as me,g as f,i as he,l as ge,n as p,o as _e,p as m,r as ve,s as ye,t as be,u as xe}from"./useSelectOverlay-CnS5tgMk.js";function h({options:e,value:t,defaultValue:n,onValueChange:r,multiple:i=!1,name:o,form:s,placeholder:ee=`Rechercher`,emptyMessage:c=`Aucune option`,size:te=`md`,label:l,helper:u,error:d,invalid:ie=!1,valid:ge=!1,disabled:p=!1,required:h,fullWidth:Se=!0,className:Ce,id:v,clearable:we=!0,clearLabel:Te=`Effacer`,toggleLabel:Ee=`Afficher les suggestions`,chipGroupLabel:De,chipRemoveLabel:Oe=`Retirer`,defaultOpen:y=!1,openOnFocus:b=!1,filter:x=`auto`,onSearch:S,listStatus:C=`idle`,loadingMessage:w=`Chargement`,listErrorMessage:T=`Impossible de charger les options`,listErrorRetryMessage:E,beforeOptions:D,renderOption:O,renderSectionTitle:k,renderChip:A,icon:j,"aria-label":M,"aria-labelledby":N,"aria-describedby":P}){let F=(0,g.useId)(),I=v??F,L=`${F}-list`,R=`${F}-helper`,z=l?`${I}-label`:void 0,B=`${F}-live`,[V,H]=(0,g.useState)(y),[U,W]=(0,g.useState)(null),G=t!==void 0,[ke,Ae]=(0,g.useState)(n),K=xe(G?t:ke),je=K.join(`\0`),q=!!ie||!!d,Me=q?d:u,Ne=m(e),J=K.map(e=>Ne.find(t=>t.value===e)).filter(e=>!!e),Pe=ue(J[0]?.label)||J[0]?.value||``,Fe=x===`off`,Y=(0,g.useMemo)(()=>x!==`auto`||U==null?[...e]:pe(e,U),[e,x,U]),X=m(Y),[Z,Q]=(0,g.useState)(-1),Ie=N??z,Le=i?U??``:V?U??Pe:Pe,Re=!!(we&&!i&&K.length>0&&!p),ze=De??(typeof l==`string`?l:`Sélection`),Be=e=>{G||Ae(i?e:e[0]??``),r?.(i?e:e[0]??``)},Ve=e=>{Be(e?[e]:[]),W(null),be(()=>H(!1))},$=e=>{let t=K.includes(e)?K.filter(t=>t!==e):[...K,e];Be(t),W(``),S?.(``)},{refs:He,floatingStyles:Ue,getReferenceProps:We,getFloatingProps:Ge,portal:Ke,setReference:qe}=he(V,e=>{H(e),e||W(null)});(0,g.useEffect)(()=>{if(!V){Q(-1);return}let e=m(Y),t=je.split(`\0`)[0];Q(n=>{if(U!=null)return f(e,-1,1);if(n>=0&&n<e.length&&!e[n]?.disabled)return n;let r=me(e,t);return r>=0&&!e[r]?.disabled?r:f(e,-1,1)})},[V,je,Y,U]),(0,g.useLayoutEffect)(()=>{V&&ve(L,Z)},[V,Z,L]);function Je(e){Q(t=>f(X,t,e))}function Ye(e){if(!p){if(e.key===`ArrowDown`){e.preventDefault(),V?Je(1):H(!0);return}if(e.key===`ArrowUp`){e.preventDefault(),V?Je(-1):H(!0);return}if(e.key===`Home`&&V){e.preventDefault(),Q(f(X,-1,1));return}if(e.key===`End`&&V){e.preventDefault(),Q(f(X,X.length,-1));return}if(e.key===`Enter`){if(!V)return;e.preventDefault();let t=X[Z];t&&!t.disabled&&(i?$(t.value):Ve(t.value));return}e.key===`Escape`&&V&&(e.preventDefault(),W(null),H(!1))}}function Xe(e){let t=e.target.value;H(!0),W(t),S?.(t)}let Ze=i&&J.length>0?(0,_.jsx)(`div`,{role:`list`,"aria-label":ze,className:`flex flex-wrap items-center gap-1.5`,children:J.map(e=>{let t=ue(e.label)||e.value;return(0,_.jsxs)(`span`,{role:`listitem`,className:`inline-flex max-w-full items-center gap-1 rounded-full bg-surface-muted px-2 py-0.5 text-sm text-fg`,children:[(0,_.jsx)(`span`,{className:`inline-flex min-w-0 items-center gap-1.5`,children:A?A(e):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(fe,{icon:e.icon}),(0,_.jsx)(`span`,{className:`min-w-0 truncate`,children:e.label})]})}),(0,_.jsx)(`button`,{type:`button`,"aria-label":`${t} — ${Oe}`,disabled:p,onMouseDown:e=>e.preventDefault(),onClick:()=>$(e.value),className:a(`inline-flex size-4 shrink-0 items-center justify-center rounded-full text-fg/70`,`hover:bg-surface-hover hover:text-fg`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus`,`disabled:pointer-events-none disabled:opacity-50`),children:(0,_.jsx)(ae,{})})]},e.value)})}):null;return(0,_.jsxs)(se,{id:I,label:l,helper:u,error:d,required:h,invalid:q,valid:ge,disabled:p,fullWidth:Se,size:te,className:Ce,showCount:!1,count:0,countMessage:()=>``,countId:`${F}-count`,helperId:R,frameRef:qe,children:[(0,_.jsx)(_e,{name:o,form:s,required:h,disabled:p,value:i?K:K[0],items:e,multiple:i}),(0,_.jsx)(`div`,{className:`d-ui-visually-hidden`,"aria-live":`polite`,id:B,children:C===`loading`||C===`loadingMore`?w:null}),j?(0,_.jsx)(`span`,{className:`inline-flex shrink-0 text-fg/70`,"aria-hidden":`true`,children:j}):null,(0,_.jsxs)(`div`,{className:a(`flex min-w-0 flex-1 flex-wrap items-center gap-1.5`,Ze&&`py-1`),children:[Ze,!i&&U==null&&J[0]?.icon?(0,_.jsx)(fe,{icon:J[0].icon}):null,(0,_.jsx)(`input`,{...We({type:`text`,role:`combobox`,id:I,disabled:p,readOnly:Fe,autoComplete:`off`,spellCheck:!1,"aria-haspopup":`listbox`,"aria-expanded":V,"aria-controls":L,"aria-autocomplete":x===`off`?`none`:`list`,"aria-activedescendant":V&&Z>=0?`${L}-opt-${Z}`:void 0,"aria-invalid":q||void 0,"aria-required":h||void 0,"aria-label":M,"aria-labelledby":N,"aria-describedby":le(P,Me?R:void 0,C===`loading`||C===`loadingMore`?B:void 0),className:a(re,`min-w-[6rem] flex-1`),placeholder:ee,value:Le,onChange:Fe?void 0:Xe,onKeyDown:Ye,onClick:()=>H(!0),onFocus:()=>{b&&!p&&H(!0)}})})]}),Re?(0,_.jsx)(ce,{label:Te,disabled:p,onClick:()=>Ve(void 0),children:(0,_.jsx)(ae,{})}):null,(0,_.jsx)(oe,{invalid:q,valid:ge}),Ee?(0,_.jsx)(`button`,{type:`button`,tabIndex:-1,disabled:p,"aria-label":Ee,"aria-expanded":V,"aria-controls":L,onMouseDown:e=>e.preventDefault(),onClick:()=>H(e=>!e),className:a(`inline-flex size-6 shrink-0 items-center justify-center rounded-md text-fg/70`,`hover:bg-surface-muted hover:text-fg`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus`,`disabled:pointer-events-none disabled:opacity-50`),children:(0,_.jsx)(`span`,{className:a(`inline-flex`,V&&`rotate-180`),children:(0,_.jsx)(de,{})})}):null,V?(0,_.jsx)(ne,{children:(0,_.jsx)(`div`,{ref:He.setFloating,style:Ue,...Ge(),...Ke,className:Ke.className,children:(0,_.jsx)(ye,{id:L,labelledBy:Ie,ariaLabel:Ie?void 0:M,items:Y,activeIndex:Z,selectedValues:K,emptyMessage:typeof c==`function`?c(U??``):c,listRef:()=>void 0,setActiveIndex:Q,onSelect:i?$:Ve,multiple:i,listStatus:C,listErrorMessage:T,listErrorRetryMessage:E,beforeOptions:D,renderOption:O,renderSectionTitle:k})})}):null]})}var g,_;function Se(){return(Se=e((()=>{d(),g=n(),ie(),ge(),p(),_=r(),h.__docgenInfo={description:``,methods:[],displayName:`Combobox`,props:{options:{required:!0,tsType:{name:`unknown`},description:``},value:{required:!1,tsType:{name:`union`,raw:`string | readonly string[]`,elements:[{name:`string`},{name:`unknown`}]},description:``},defaultValue:{required:!1,tsType:{name:`union`,raw:`string | readonly string[]`,elements:[{name:`string`},{name:`unknown`}]},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | string[]) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},name:`value`}],return:{name:`void`}}},description:``},multiple:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},form:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Rechercher'`,computed:!1}},emptyMessage:{required:!1,tsType:{name:`union`,raw:`ReactNode | ((query: string) => ReactNode)`,elements:[{name:`ReactNode`},{name:`unknown`}]},description:``,defaultValue:{value:`'Aucune option'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:``},helper:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`ReactNode`},description:``},invalid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},valid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},id:{required:!1,tsType:{name:`string`},description:``},clearable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},clearLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Effacer'`,computed:!1}},toggleLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Afficher les suggestions'`,computed:!1}},chipGroupLabel:{required:!1,tsType:{name:`string`},description:``},chipRemoveLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Retirer'`,computed:!1}},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},openOnFocus:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},filter:{required:!1,tsType:{name:`union`,raw:`'auto' | 'manual' | 'off'`,elements:[{name:`literal`,value:`'auto'`},{name:`literal`,value:`'manual'`},{name:`literal`,value:`'off'`}]},description:``,defaultValue:{value:`'auto'`,computed:!1}},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(query: string) => void`,signature:{arguments:[{type:{name:`string`},name:`query`}],return:{name:`void`}}},description:``},listStatus:{required:!1,tsType:{name:`union`,raw:`'idle' | 'loading' | 'loadingMore' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'loading'`},{name:`literal`,value:`'loadingMore'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'idle'`,computed:!1}},loadingMessage:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Chargement'`,computed:!1}},listErrorMessage:{required:!1,tsType:{name:`ReactNode`},description:``,defaultValue:{value:`'Impossible de charger les options'`,computed:!1}},listErrorRetryMessage:{required:!1,tsType:{name:`ReactNode`},description:``},beforeOptions:{required:!1,tsType:{name:`ReactNode`},description:``},renderOption:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(option: SelectOption, selected: boolean) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  value: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactNode`,required:!0}},{key:`description`,value:{name:`ReactNode`,required:!1}},{key:`icon`,value:{name:`ReactNode`,required:!1}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}},name:`option`},{type:{name:`boolean`},name:`selected`}],return:{name:`ReactNode`}}},description:``},renderSectionTitle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(group: SelectOptionGroup) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  label: string;
  options: SelectOption[];
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`options`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactNode`,required:!0}},{key:`description`,value:{name:`ReactNode`,required:!1}},{key:`icon`,value:{name:`ReactNode`,required:!1}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`SelectOption[]`,required:!0}}]}},name:`group`}],return:{name:`ReactNode`}}},description:``},renderChip:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(option: SelectOption) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  value: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactNode`,required:!0}},{key:`description`,value:{name:`ReactNode`,required:!1}},{key:`icon`,value:{name:`ReactNode`,required:!1}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}},name:`option`}],return:{name:`ReactNode`}}},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``},"aria-labelledby":{required:!1,tsType:{name:`string`},description:``},"aria-describedby":{required:!1,tsType:{name:`string`},description:``}}}})))()}var Ce=t({Custom:()=>z,Default:()=>k,Descriptions:()=>R,Disabled:()=>j,Empty:()=>H,FilterTypes:()=>W,Group:()=>L,Helper:()=>P,Invalid:()=>M,ListError:()=>U,Loading:()=>B,LoadingMore:()=>V,Multiple:()=>A,Required:()=>N,Sizes:()=>I,Valid:()=>F,__namedExportsOrder:()=>G,default:()=>O});function v(e,t=!1){return[{value:`paris`,label:e.paris},{value:`lyon`,label:e.lyon},{value:`marseille`,label:e.marseille},{value:`bruxelles`,label:e.brussels,disabled:t}]}function we(e){return[{value:`paris`,label:e.paris,description:e.capital},{value:`lyon`,label:e.lyon,description:e.gastronomy},{value:`marseille`,label:e.marseille,description:e.port},{value:`bruxelles`,label:e.brussels,description:e.capital}]}function Te(e){return[{label:e.france,options:[{value:`paris`,label:e.paris},{value:`lyon`,label:e.lyon}]},{label:e.belgium,options:[{value:`bruxelles`,label:e.brussels}]}]}function Ee(e){return[{label:e.france,options:[{value:`paris`,label:e.paris,description:e.capital},{value:`lyon`,label:e.lyon,description:e.gastronomy},{value:`marseille`,label:e.marseille,description:e.port}]},{label:e.belgium,options:[{value:`bruxelles`,label:e.brussels,description:e.capital}]}]}function De({name:e}){return(0,T.jsx)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,className:`size-4`,children:(0,T.jsx)(`path`,{d:e===`paris`?`M8 2l2 5h5l-4 3 1.5 5L8 12l-4.5 3L5 10 1 7h5L8 2z`:e===`lyon`?`M8 2l6 12H2L8 2zm0 4.5L4.8 12h6.4L8 6.5z`:e===`marseille`?`M2 11c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5M2 8c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5M2 5c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5`:e===`bruxelles`?`M8 1.5l1.8 3.7 4.2.6-3 2.9.7 4.2L8 11.2 4.3 12.9l.7-4.2-3-2.9 4.2-.6L8 1.5z`:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`,strokeLinecap:`round`})})}function Oe(){return(0,T.jsx)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,className:`size-4`,children:(0,T.jsx)(`path`,{d:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinecap:`round`})})}function y(e){return{docs:{...l(E,e).docs,story:{inline:!1,iframeHeight:280}}}}function b({value:e,defaultValue:t,onValueChange:n,multiple:r,...i}){let[a,o]=(0,w.useState)(e??t??(r?[]:void 0));return(0,T.jsx)(h,{...i,multiple:r,value:a,onValueChange:e=>{o(e),n?.(e)}})}function x(e){return{toggleLabel:e.toggle,clearLabel:e.clear,chipRemoveLabel:e.remove,chipGroupLabel:e.cities}}function S(e){return u(D,`const [value, setValue] = useState();
return (
${e.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function C({copy:e}){let[t,n]=(0,w.useState)([`lyon`]),[r,i]=(0,w.useState)(``),[a,o]=(0,w.useState)(Ee(e)),s=r.trim(),ee=s.length>0&&!m(a).some(e=>String(e.label).toLowerCase()===s.toLowerCase()),c=()=>{let t={value:s.toLowerCase(),label:s,description:e.customCity};o(e=>[...e,t]),n(e=>[...e,t.value]),i(``)};return(0,T.jsx)(h,{multiple:!0,label:e.cities,placeholder:e.search,options:a,value:t,onValueChange:e=>n(Array.isArray(e)?e:[e]),onSearch:i,filter:`auto`,...x(e),renderOption:e=>(0,T.jsxs)(`span`,{className:`flex min-w-0 items-center gap-2`,children:[(0,T.jsx)(De,{name:e.value}),(0,T.jsxs)(`span`,{className:`min-w-0`,children:[(0,T.jsx)(`span`,{className:`block truncate font-medium`,children:e.label}),e.description?(0,T.jsx)(`span`,{className:`mt-0.5 block truncate text-xs font-normal text-fg/60`,children:e.description}):null]})]}),renderSectionTitle:e=>(0,T.jsx)(`span`,{className:`uppercase tracking-wide`,children:e.label}),renderChip:e=>(0,T.jsxs)(`span`,{className:`inline-flex min-w-0 items-center gap-1.5`,children:[(0,T.jsx)(De,{name:e.value}),(0,T.jsx)(`span`,{className:`truncate`,children:e.label})]}),beforeOptions:ee?(0,T.jsxs)(`button`,{type:`button`,className:`flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-fg hover:bg-surface-hover`,onMouseDown:e=>e.preventDefault(),onClick:c,children:[(0,T.jsx)(Oe,{}),e.create,` « `,s,` »`]}):null})}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function ke(){return(ke=e((()=>{w=n(),ee(),i(),c(),Se(),T=r(),E=`import { Combobox } from 'd-ui';`,D=`import { useState } from 'react';
import { Combobox } from 'd-ui';`,O={title:`Components/Combobox`,component:h,argTypes:te,parameters:{controls:{include:[`size`,`label`,`helper`,`placeholder`,`invalid`,`valid`,`disabled`,`required`,`fullWidth`,`multiple`,`filter`,`listStatus`]}}},k={name:`Sélection unique`,args:{options:[]},parameters:S(`<Combobox
    label="Ville"
    placeholder="Rechercher"
    options={[
        { value: 'paris', label: 'Paris' },
        { value: 'lyon', label: 'Lyon' },
        { value: 'marseille', label: 'Marseille' },
    ]}
    value={value}
    onValueChange={setValue}
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(b,{...e,label:e.label??n.city,placeholder:n.search,...x(n),options:v(n)})}},A={name:`Sélection multiple`,args:{options:[]},parameters:S(`<Combobox
    multiple
    label="Villes"
    placeholder="Rechercher"
    options={options}
    value={value}
    onValueChange={setValue}
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(b,{multiple:!0,label:n.cities,placeholder:n.search,defaultValue:[`paris`,`lyon`],options:v(n),...x(n)})}},j={name:`Désactivé`,args:{options:[]},parameters:l(E,`<Combobox label="Ville" options={options} defaultValue="paris" disabled />`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(h,{label:n.city,options:v(n),defaultValue:`paris`,disabled:!0,...x(n)})}},M={name:`Invalide`,args:{options:[]},parameters:l(E,`<Combobox label="Ville" options={options} invalid error="Ce champ est requis." />`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(h,{label:n.city,options:v(n),invalid:!0,error:n.error,...x(n)})}},N={name:`Requis`,args:{options:[]},parameters:S(`<Combobox
    label="Ville"
    required
    options={options}
    value={value}
    onValueChange={setValue}
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(b,{label:n.city,options:v(n),required:!0,placeholder:n.search,...x(n)})}},P={name:`Aide`,args:{options:[]},parameters:l(E,`<Combobox label="Ville" helper="Le pays de résidence." options={options} />`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(h,{label:n.city,helper:n.helper,options:v(n),placeholder:n.search,...x(n)})}},F={name:`Valide`,args:{options:[]},parameters:l(E,`<Combobox label="Ville" options={options} defaultValue="paris" valid />`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(h,{label:n.city,options:v(n),defaultValue:`paris`,valid:!0,...x(n)})}},I={name:`Tailles`,args:{options:[]},parameters:l(E,`<>
    <Combobox size="sm" label="Petite" options={options} />
    <Combobox size="md" label="Moyenne" options={options} />
    <Combobox size="lg" label="Grande" options={options} />
</>`),render:(e,{globals:t})=>{let n=o(s(t.locale)),r=v(n);return(0,T.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-4`,children:[(0,T.jsx)(h,{size:`sm`,label:n.small,options:r,...x(n)}),(0,T.jsx)(h,{size:`md`,label:n.medium,options:r,...x(n)}),(0,T.jsx)(h,{size:`lg`,label:n.large,options:r,...x(n)})]})}},L={name:`Groupe`,args:{options:[]},parameters:l(E,`<Combobox
    label="Ville"
    options={[
        { label: 'France', options: [{ value: 'paris', label: 'Paris' }] },
        { label: 'Belgique', options: [{ value: 'bruxelles', label: 'Bruxelles' }] },
    ]}
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(h,{label:n.city,options:Te(n),...x(n)})}},R={name:`Descriptions`,args:{options:[]},parameters:l(E,`<Combobox
    label="Ville"
    options={[
        { value: 'paris', label: 'Paris', description: 'Capitale' },
        { value: 'lyon', label: 'Lyon', description: 'Gastronomie' },
    ]}
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(h,{label:n.city,options:we(n),placeholder:n.search,...x(n)})}},z={name:`Rendu personnalisé`,args:{options:[]},parameters:S(`<Combobox
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
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(C,{copy:n})}},B={name:`Chargement`,args:{options:[]},parameters:y(`<Combobox label="Ville" options={[]} listStatus="loading" defaultOpen />`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(h,{label:n.city,options:[],listStatus:`loading`,loadingMessage:n.loading,defaultOpen:!0,...x(n)})}},V={name:`Chargement de la suite`,args:{options:[]},parameters:y(`<Combobox label="Ville" options={options} listStatus="loadingMore" defaultOpen />`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(h,{label:n.city,options:v(n),listStatus:`loadingMore`,loadingMessage:n.loadingMore,defaultOpen:!0,...x(n)})}},H={name:`État vide`,args:{options:[]},parameters:y("<Combobox label=\"Ville\" options={[]} emptyMessage={(query) => query ? `Aucun résultat pour « ${query} »` : 'Aucune option'} defaultOpen />"),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(h,{label:n.city,options:[],emptyMessage:e=>e?`${n.emptyQuery} « ${e} »`:n.empty,defaultOpen:!0,...x(n)})}},U={name:`Erreur de liste`,args:{options:[]},parameters:y(`<Combobox
    label="Ville"
    options={[]}
    listStatus="error"
    listErrorMessage="Impossible de charger les options"
    listErrorRetryMessage="Réessayez."
    defaultOpen
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,T.jsx)(h,{label:n.city,options:[],listStatus:`error`,listErrorMessage:n.listError,listErrorRetryMessage:n.listRetry,defaultOpen:!0,...x(n)})}},W={name:`Types de filtre`,args:{options:[]},parameters:l(E,`<>
    <Combobox filter="auto" label="Auto" options={options} />
    <Combobox filter="manual" label="Manuel" options={options} onSearch={onSearch} />
    <Combobox filter="off" label="Désactivé" options={options} />
</>`),render:(e,{globals:t})=>{let n=o(s(t.locale)),r=v(n);return(0,T.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-4`,children:[(0,T.jsx)(h,{filter:`auto`,label:n.filterAuto,placeholder:n.search,options:r,...x(n)}),(0,T.jsx)(h,{filter:`manual`,label:n.filterManual,placeholder:n.search,options:r,...x(n)}),(0,T.jsx)(h,{filter:`off`,label:n.filterOff,placeholder:n.choose,options:r,openOnFocus:!0,...x(n)})]})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Default`,`Multiple`,`Disabled`,`Invalid`,`Required`,`Helper`,`Valid`,`Sizes`,`Group`,`Descriptions`,`Custom`,`Loading`,`LoadingMore`,`Empty`,`ListError`,`FilterTypes`]})))()}export{F as _,j as a,L as c,U as d,B as f,I as g,N as h,R as i,P as l,A as m,z as n,H as o,V as p,k as r,W as s,Ce as t,M as u,ke as v};