import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,g as a,l as o,n as s}from"./docs-locale-DxRsX5eR.js";import{h as c,i as l,n as u,r as d,y as f}from"./docs-source-5snetGJm.js";import{c as p,s as ee}from"./floating-DvfFhaFC.js";import{d as te,l as m,s as ne,u as h}from"./textControl-CulYcE92.js";import{a as g,c as re,f as ie,g as _,h as ae,i as oe,l as v,n as y,o as b,p as x,r as se,s as ce,t as le}from"./useSelectOverlay-CnS5tgMk.js";function S({options:e,value:t,defaultValue:n,onValueChange:r,name:i,form:o,placeholder:s=`Choisir`,emptyMessage:c=`Aucune option`,size:l=`md`,label:u,helper:d,error:f,invalid:p=!1,valid:m=!1,disabled:v=!1,required:y,fullWidth:S=!0,className:T,id:E,"aria-label":D,"aria-labelledby":O,"aria-describedby":k}){let A=(0,C.useId)(),j=E??A,M=`${A}-list`,N=`${A}-helper`,P=u?`${j}-label`:void 0,F=(0,C.useRef)(``),I=(0,C.useRef)(void 0),[L,R]=(0,C.useState)(!1),z=t!==void 0,[B,V]=(0,C.useState)(n),H=z?t:B,U=!!p||!!f,W=U?f:d,G=x(e),K=G.find(e=>e.value===H),[q,J]=(0,C.useState)(-1),Y=O??P,X=e=>{z||V(e),r?.(e),le(()=>R(!1))},{refs:Z,floatingStyles:ue,getReferenceProps:de,getFloatingProps:fe,portal:Q,setReference:pe}=oe(L,R);(0,C.useEffect)(()=>()=>window.clearTimeout(I.current),[]),(0,C.useEffect)(()=>{if(!L){J(-1);return}let t=x(e);J(e=>{if(e>=0&&e<t.length&&!t[e]?.disabled)return e;let n=ie(t,H);return n>=0&&!t[n]?.disabled?n:_(t,-1,1)})},[L,H,e]),(0,C.useLayoutEffect)(()=>{L&&se(M,q)},[L,q,M]);function $(e){J(t=>_(G,t,e))}function me(e){if(!v){if(e.key===`ArrowDown`){e.preventDefault(),L?$(1):R(!0);return}if(e.key===`ArrowUp`){e.preventDefault(),L?$(-1):R(!0);return}if(e.key===`Home`){e.preventDefault(),L||R(!0),J(_(G,-1,1));return}if(e.key===`End`){e.preventDefault(),L||R(!0),J(_(G,G.length,-1));return}if(e.key===`Enter`||e.key===` `){if(e.preventDefault(),!L){R(!0);return}let t=G[q];t&&!t.disabled&&X(t.value);return}if(e.key===`Escape`){L&&(e.preventDefault(),R(!1));return}if(e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey){e.preventDefault(),L||R(!0),F.current+=e.key,window.clearTimeout(I.current),I.current=setTimeout(()=>{F.current=``},500);let t=ae(G,F.current,q);t>=0&&J(t)}}}return(0,w.jsxs)(ne,{id:j,label:u,helper:d,error:f,required:y,invalid:U,valid:m,disabled:v,fullWidth:S,size:l,className:T,showCount:!1,count:0,countMessage:()=>``,countId:`${A}-count`,helperId:N,frameRef:pe,children:[(0,w.jsx)(b,{name:i,form:o,required:y,disabled:v,value:H,items:e}),(0,w.jsxs)(`button`,{...de({type:`button`,role:`combobox`,id:j,disabled:v,"aria-haspopup":`listbox`,"aria-expanded":L,"aria-controls":M,"aria-autocomplete":`none`,"aria-activedescendant":L&&q>=0?`${M}-opt-${q}`:void 0,"aria-invalid":U||void 0,"aria-required":y||void 0,"aria-label":D,"aria-labelledby":O,"aria-describedby":h(k,W?N:void 0),className:a(te,`flex w-full cursor-pointer items-center justify-between text-left`,!K&&`text-fg/60`),onClick:()=>R(e=>!e),onKeyDown:me}),children:[(0,w.jsxs)(`span`,{className:`flex min-w-0 flex-1 items-center gap-2`,children:[K?(0,w.jsx)(re,{icon:K.icon}):null,(0,w.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:K?K.label:s})]}),(0,w.jsx)(`span`,{className:a(`ml-2 inline-flex shrink-0 text-fg/70`,L&&`rotate-180`),children:(0,w.jsx)(g,{})})]}),L?(0,w.jsx)(ee,{children:(0,w.jsx)(`div`,{ref:Z.setFloating,style:ue,...fe(),...Q,className:Q.className,children:(0,w.jsx)(ce,{id:M,labelledBy:Y,ariaLabel:Y?void 0:D,items:e,activeIndex:q,selectedValues:H?[H]:[],emptyMessage:c,listRef:()=>void 0,setActiveIndex:J,onSelect:X})})}):null]})}var C,w;function T(){return(T=e((()=>{p(),C=n(),m(),v(),y(),w=r(),S.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{options:{required:!0,tsType:{name:`unknown`},description:``},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},name:{required:!1,tsType:{name:`string`},description:``},form:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Choisir'`,computed:!1}},emptyMessage:{required:!1,tsType:{name:`ReactNode`},description:``,defaultValue:{value:`'Aucune option'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:``},helper:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`ReactNode`},description:``},invalid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},valid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},id:{required:!1,tsType:{name:`string`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``},"aria-labelledby":{required:!1,tsType:{name:`string`},description:``},"aria-describedby":{required:!1,tsType:{name:`string`},description:``}}}})))()}var E=t({Default:()=>I,Disabled:()=>L,DisabledOptions:()=>U,Group:()=>H,Helper:()=>B,Invalid:()=>R,Required:()=>z,Sizes:()=>V,__namedExportsOrder:()=>W,default:()=>F});function D(e,t=!1){return[{value:`fr`,label:e.france},{value:`be`,label:e.belgium},{value:`ca`,label:e.canada},{value:`ch`,label:e.switzerland,disabled:t}]}function O(e){return[{label:e.europe,options:[{value:`fr`,label:e.france},{value:`be`,label:e.belgium}]},{label:e.americas,options:[{value:`ca`,label:e.canada}]}]}function k({value:e,defaultValue:t,onValueChange:n,...r}){let[i,a]=(0,j.useState)(e??t);return(0,M.jsx)(S,{...r,value:i,onValueChange:e=>{a(e),n?.(e)}})}function A(e){return d(P,`const [value, setValue] = useState();
return (
${e.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}var j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{j=n(),c(),i(),l(),T(),M=r(),N=`import { Select } from 'd-ui';`,P=`import { useState } from 'react';
import { Select } from 'd-ui';`,F={title:`Components/Select`,component:S,argTypes:f,parameters:{controls:{include:[`size`,`label`,`helper`,`placeholder`,`invalid`,`valid`,`disabled`,`required`,`fullWidth`]}}},I={name:`Par défaut`,args:{options:[]},parameters:A(`<Select
    label="Pays"
    placeholder="Choisir"
    options={[
        { value: 'fr', label: 'France' },
        { value: 'be', label: 'Belgique' },
        { value: 'ca', label: 'Canada' },
    ]}
    value={value}
    onValueChange={setValue}
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,M.jsx)(k,{...e,label:e.label??n.country,placeholder:n.choose,options:D(n)})}},L={name:`Désactivé`,args:{options:[]},parameters:u(N,`<Select label="Pays" options={options} defaultValue="fr" disabled />`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,M.jsx)(S,{label:n.country,options:D(n),defaultValue:`fr`,disabled:!0})}},R={name:`Invalide`,args:{options:[]},parameters:u(N,`<Select label="Pays" options={options} invalid error="Ce champ est requis." />`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,M.jsx)(S,{label:n.country,options:D(n),invalid:!0,error:n.error})}},z={name:`Requis`,args:{options:[]},parameters:A(`<Select
    label="Pays"
    required
    options={options}
    value={value}
    onValueChange={setValue}
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,M.jsx)(k,{label:n.country,options:D(n),required:!0})}},B={name:`Aide`,args:{options:[]},parameters:u(N,`<Select label="Pays" helper="Le pays de résidence." options={options} />`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,M.jsx)(S,{label:n.country,helper:n.helper,options:D(n)})}},V={name:`Tailles`,args:{options:[]},parameters:u(N,`<>
    <Select size="sm" label="Petite" options={options} />
    <Select size="md" label="Moyenne" options={options} />
    <Select size="lg" label="Grande" options={options} />
</>`),render:(e,{globals:t})=>{let n=o(s(t.locale)),r=D(n);return(0,M.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-4`,children:[(0,M.jsx)(S,{size:`sm`,label:n.small,options:r}),(0,M.jsx)(S,{size:`md`,label:n.medium,options:r}),(0,M.jsx)(S,{size:`lg`,label:n.large,options:r})]})}},H={name:`Groupe`,args:{options:[]},parameters:u(N,`<Select
    label="Pays"
    options={[
        { label: 'Europe', options: [{ value: 'fr', label: 'France' }] },
        { label: 'Amériques', options: [{ value: 'ca', label: 'Canada' }] },
    ]}
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,M.jsx)(S,{label:n.country,options:O(n)})}},U={name:`Options désactivées`,args:{options:[]},parameters:u(N,`<Select
    label="Pays"
    options={[
        { value: 'fr', label: 'France' },
        { value: 'ch', label: 'Suisse', disabled: true },
    ]}
/>`),render:(e,{globals:t})=>{let n=o(s(t.locale));return(0,M.jsx)(S,{label:n.country,options:D(n,!0)})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    options: []
  },
  parameters: selectSource(\`<Select
    label="Pays"
    placeholder="Choisir"
    options={[
        { value: 'fr', label: 'France' },
        { value: 'be', label: 'Belgique' },
        { value: 'ca', label: 'Canada' },
    ]}
    value={value}
    onValueChange={setValue}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <ControlledSelect {...args} label={args.label ?? copy.country} placeholder={copy.choose} options={countries(copy)} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Désactivé',
  args: {
    options: []
  },
  parameters: componentSource(importSelect, \`<Select label="Pays" options={options} defaultValue="fr" disabled />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Select label={copy.country} options={countries(copy)} defaultValue="fr" disabled />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Invalide',
  args: {
    options: []
  },
  parameters: componentSource(importSelect, \`<Select label="Pays" options={options} invalid error="Ce champ est requis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Select label={copy.country} options={countries(copy)} invalid error={copy.error} />;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Requis',
  args: {
    options: []
  },
  parameters: selectSource(\`<Select
    label="Pays"
    required
    options={options}
    value={value}
    onValueChange={setValue}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <ControlledSelect label={copy.country} options={countries(copy)} required />;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Aide',
  args: {
    options: []
  },
  parameters: componentSource(importSelect, \`<Select label="Pays" helper="Le pays de résidence." options={options} />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Select label={copy.country} helper={copy.helper} options={countries(copy)} />;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Tailles',
  args: {
    options: []
  },
  parameters: componentSource(importSelect, \`<>
    <Select size="sm" label="Petite" options={options} />
    <Select size="md" label="Moyenne" options={options} />
    <Select size="lg" label="Grande" options={options} />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    const options = countries(copy);
    return <div className="flex w-full max-w-md flex-col gap-4">
        <Select size="sm" label={copy.small} options={options} />
        <Select size="md" label={copy.medium} options={options} />
        <Select size="lg" label={copy.large} options={options} />
      </div>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Groupe',
  args: {
    options: []
  },
  parameters: componentSource(importSelect, \`<Select
    label="Pays"
    options={[
        { label: 'Europe', options: [{ value: 'fr', label: 'France' }] },
        { label: 'Amériques', options: [{ value: 'ca', label: 'Canada' }] },
    ]}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Select label={copy.country} options={groupedCountries(copy)} />;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Options désactivées',
  args: {
    options: []
  },
  parameters: componentSource(importSelect, \`<Select
    label="Pays"
    options={[
        { value: 'fr', label: 'France' },
        { value: 'ch', label: 'Suisse', disabled: true },
    ]}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Select label={copy.country} options={countries(copy, true)} />;
  }
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Disabled`,`Invalid`,`Required`,`Helper`,`Sizes`,`Group`,`DisabledOptions`]})))()}export{B as a,E as c,H as i,V as l,L as n,R as o,U as r,z as s,I as t,G as u};