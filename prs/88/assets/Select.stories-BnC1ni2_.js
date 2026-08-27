import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DQxMMF7O.js";import{s as Ue,c as g,e as We}from"./docs-source-CuvzGT6e.js";import{c as ae,a as p,d}from"./cx-DZL12kEg.js";import{g as Je}from"./floating-By5IdYG5.js";import{T as Qe,m as Xe,n as Ye}from"./textControl-QmjPGioz.js";import{f as oe,u as Ze,b as ea,n as z,s as aa,N as oa,C as sa,S as la,m as ra}from"./useSelectOverlay-DAzNVQzp.js";function n({options:o,value:s,defaultValue:e,onValueChange:u,name:R,form:N,placeholder:P="Choisir",emptyMessage:Pe="Aucune option",size:De="md",label:B,helper:M,error:L,invalid:Ve=!1,valid:ze=!1,disabled:D=!1,required:k,fullWidth:Re=!0,className:Ne,id:Le,"aria-label":H,"aria-labelledby":K,"aria-describedby":ke}){const V=c.useId(),E=Le??V,v=`${V}-list`,U=`${V}-helper`,Ee=B?`${E}-label`:void 0,F=c.useRef(""),O=c.useRef(void 0),[r,i]=c.useState(!1),W=s!==void 0,[Fe,Oe]=c.useState(e),x=W?s:Fe,A=!!Ve||!!L,Ae=A?L:M,m=oe(o),$=m.find(a=>a.value===x),[f,b]=c.useState(-1),J=K??Ee,Q=a=>{W||Oe(a),u==null||u(a),i(!1)},{refs:$e,floatingStyles:Ge,getReferenceProps:Be,getFloatingProps:Me,portal:X,setReference:He}=Ze(r,i);c.useEffect(()=>()=>window.clearTimeout(O.current),[]),c.useEffect(()=>{if(!r){b(-1);return}const a=oe(o);b(t=>{var Z,ee;if(t>=0&&t<a.length&&!((Z=a[t])!=null&&Z.disabled))return t;const G=ea(a,x);return G>=0&&!((ee=a[G])!=null&&ee.disabled)?G:z(a,-1,1)})},[r,x,o]),c.useLayoutEffect(()=>{r&&aa(v,f)},[r,f,v]);function Y(a){b(t=>z(m,t,a))}function Ke(a){if(!D){if(a.key==="ArrowDown"){a.preventDefault(),r?Y(1):i(!0);return}if(a.key==="ArrowUp"){a.preventDefault(),r?Y(-1):i(!0);return}if(a.key==="Home"){a.preventDefault(),r||i(!0),b(z(m,-1,1));return}if(a.key==="End"){a.preventDefault(),r||i(!0),b(z(m,m.length,-1));return}if(a.key==="Enter"||a.key===" "){if(a.preventDefault(),!r){i(!0);return}const t=m[f];t&&!t.disabled&&Q(t.value);return}if(a.key==="Escape"){r&&(a.preventDefault(),i(!1));return}if(a.key.length===1&&!a.metaKey&&!a.ctrlKey&&!a.altKey){a.preventDefault(),r||i(!0),F.current+=a.key,window.clearTimeout(O.current),O.current=setTimeout(()=>{F.current=""},500);const t=ra(m,F.current,f);t>=0&&b(t)}}}return l.jsxs(Qe,{id:E,label:B,helper:M,error:L,required:k,invalid:A,valid:ze,disabled:D,fullWidth:Re,size:De,className:Ne,showCount:!1,count:0,countMessage:()=>"",countId:`${V}-count`,helperId:U,children:[l.jsx(oa,{name:R,form:N,required:k,disabled:D,value:x,items:o}),l.jsxs("button",{...Be({type:"button",role:"combobox",id:E,disabled:D,"aria-haspopup":"listbox","aria-expanded":r,"aria-controls":v,"aria-autocomplete":"none","aria-activedescendant":r&&f>=0?`${v}-opt-${f}`:void 0,"aria-invalid":A||void 0,"aria-required":k||void 0,"aria-label":H,"aria-labelledby":K,"aria-describedby":Xe(ke,Ae?U:void 0),className:ae(Ye,"flex w-full cursor-pointer items-center justify-between text-left",!$&&"text-fg/60"),onClick:()=>i(a=>!a),onKeyDown:Ke}),ref:He,children:[l.jsx("span",{className:"min-w-0 flex-1 truncate",children:$?$.label:P}),l.jsx("span",{className:ae("ml-2 inline-flex shrink-0 text-fg/70",r&&"rotate-180"),children:l.jsx(sa,{})})]}),r?l.jsx(Je,{children:l.jsx("div",{ref:$e.setFloating,style:Ge,...Me(),...X,className:X.className,children:l.jsx(la,{id:v,labelledBy:J,ariaLabel:J?void 0:H,items:o,activeIndex:f,selectedValue:x,emptyMessage:Pe,listRef:()=>{},setActiveIndex:b,onSelect:Q})})}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Choisir'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Aucune option'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const S="import { Select } from 'd-ui';",ta=`import { useState } from 'react';
import { Select } from 'd-ui';`;function y(o,s=!1){return[{value:"fr",label:o.france},{value:"be",label:o.belgium},{value:"ca",label:o.canada},{value:"ch",label:o.switzerland,disabled:s}]}function na(o){return[{label:o.europe,options:[{value:"fr",label:o.france},{value:"be",label:o.belgium}]},{label:o.americas,options:[{value:"ca",label:o.canada}]}]}function _e({value:o,defaultValue:s,onValueChange:e,...u}){const[R,N]=c.useState(o??s);return l.jsx(n,{...u,value:R,onValueChange:P=>{N(P),e==null||e(P)}})}function we(o){return We(ta,`const [value, setValue] = useState();
return (
${o.trim().split(`
`).map(s=>`    ${s}`).join(`
`)}
);`)}const ia={title:"Components/Select",component:n,argTypes:Ue,parameters:{controls:{include:["size","label","helper","placeholder","invalid","valid","disabled","required","fullWidth"]}}},h={name:"Par défaut",args:{options:[]},parameters:we(`<Select
    label="Pays"
    placeholder="Choisir"
    options={[
        { value: 'fr', label: 'France' },
        { value: 'be', label: 'Belgique' },
        { value: 'ca', label: 'Canada' },
    ]}
    value={value}
    onValueChange={setValue}
/>`),render:(o,{globals:s})=>{const e=p(d(s.locale));return l.jsx(_e,{...o,label:o.label??e.country,placeholder:e.choose,options:y(e)})}},q={name:"Désactivé",args:{options:[]},parameters:g(S,'<Select label="Pays" options={options} defaultValue="fr" disabled />'),render:(o,{globals:s})=>{const e=p(d(s.locale));return l.jsx(n,{label:e.country,options:y(e),defaultValue:"fr",disabled:!0})}},T={name:"Invalide",args:{options:[]},parameters:g(S,'<Select label="Pays" options={options} invalid error="Ce champ est requis." />'),render:(o,{globals:s})=>{const e=p(d(s.locale));return l.jsx(n,{label:e.country,options:y(e),invalid:!0,error:e.error})}},C={name:"Requis",args:{options:[]},parameters:we(`<Select
    label="Pays"
    required
    options={options}
    value={value}
    onValueChange={setValue}
/>`),render:(o,{globals:s})=>{const e=p(d(s.locale));return l.jsx(_e,{label:e.country,options:y(e),required:!0})}},j={name:"Aide",args:{options:[]},parameters:g(S,'<Select label="Pays" helper="Le pays de résidence." options={options} />'),render:(o,{globals:s})=>{const e=p(d(s.locale));return l.jsx(n,{label:e.country,helper:e.helper,options:y(e)})}},I={name:"Tailles",args:{options:[]},parameters:g(S,`<>
    <Select size="sm" label="Petite" options={options} />
    <Select size="md" label="Moyenne" options={options} />
    <Select size="lg" label="Grande" options={options} />
</>`),render:(o,{globals:s})=>{const e=p(d(s.locale)),u=y(e);return l.jsxs("div",{className:"flex w-full max-w-md flex-col gap-4",children:[l.jsx(n,{size:"sm",label:e.small,options:u}),l.jsx(n,{size:"md",label:e.medium,options:u}),l.jsx(n,{size:"lg",label:e.large,options:u})]})}},_={name:"Groupe",args:{options:[]},parameters:g(S,`<Select
    label="Pays"
    options={[
        { label: 'Europe', options: [{ value: 'fr', label: 'France' }] },
        { label: 'Amériques', options: [{ value: 'ca', label: 'Canada' }] },
    ]}
/>`),render:(o,{globals:s})=>{const e=p(d(s.locale));return l.jsx(n,{label:e.country,options:na(e)})}},w={name:"Options désactivées",args:{options:[]},parameters:g(S,`<Select
    label="Pays"
    options={[
        { value: 'fr', label: 'France' },
        { value: 'ch', label: 'Suisse', disabled: true },
    ]}
/>`),render:(o,{globals:s})=>{const e=p(d(s.locale));return l.jsx(n,{label:e.country,options:y(e,!0)})}};var se,le,re;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(le=h.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var te,ne,ie;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,ue,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var de,me,fe;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(fe=(me=C.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var be,ye,ge;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var Se,ve,xe;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(xe=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var he,qe,Te;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Te=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:Te.source}}};var Ce,je,Ie;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ie=(je=w.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};const ca=["Default","Disabled","Invalid","Required","Helper","Sizes","Group","DisabledOptions"],ga=Object.freeze(Object.defineProperty({__proto__:null,Default:h,Disabled:q,DisabledOptions:w,Group:_,Helper:j,Invalid:T,Required:C,Sizes:I,__namedExportsOrder:ca,default:ia},Symbol.toStringTag,{value:"Module"}));export{h as D,_ as G,j as H,T as I,C as R,ga as S,q as a,I as b,w as c};
