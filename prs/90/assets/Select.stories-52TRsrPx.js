import{r as c,j as l,f as ae,I as p,d}from"./iframe-Wq3C05Zi.js";import{m as Ue,c as S,e as We}from"./docs-source-D4DylD1p.js";import{g as Je}from"./floating-DADufGJH.js";import{T as Qe,m as Xe,n as Ye}from"./textControl-D3W0-3dK.js";import{f as se,u as Ze,c as ea,n as R,s as aa,N as sa,S as oa,C as la,d as ra,m as ta,e as na}from"./useSelectOverlay-D2LH_G-3.js";function n({options:s,value:o,defaultValue:e,onValueChange:u,name:N,form:L,placeholder:D="Choisir",emptyMessage:Pe="Aucune option",size:De="md",label:B,helper:M,error:O,invalid:Ve=!1,valid:ze=!1,disabled:V=!1,required:k,fullWidth:Re=!0,className:Ne,id:Le,"aria-label":H,"aria-labelledby":K,"aria-describedby":Oe}){const z=c.useId(),E=Le??z,x=`${z}-list`,U=`${z}-helper`,ke=B?`${E}-label`:void 0,F=c.useRef(""),A=c.useRef(void 0),[r,i]=c.useState(!1),W=o!==void 0,[Ee,Fe]=c.useState(e),g=W?o:Ee,$=!!Ve||!!O,Ae=$?O:M,m=se(s),h=m.find(a=>a.value===g),[f,b]=c.useState(-1),J=K??ke,Q=a=>{W||Fe(a),u==null||u(a),na(()=>i(!1))},{refs:$e,floatingStyles:Ge,getReferenceProps:Be,getFloatingProps:Me,portal:X,setReference:He}=Ze(r,i);c.useEffect(()=>()=>window.clearTimeout(A.current),[]),c.useEffect(()=>{if(!r){b(-1);return}const a=se(s);b(t=>{var Z,ee;if(t>=0&&t<a.length&&!((Z=a[t])!=null&&Z.disabled))return t;const G=ea(a,g);return G>=0&&!((ee=a[G])!=null&&ee.disabled)?G:R(a,-1,1)})},[r,g,s]),c.useLayoutEffect(()=>{r&&aa(x,f)},[r,f,x]);function Y(a){b(t=>R(m,t,a))}function Ke(a){if(!V){if(a.key==="ArrowDown"){a.preventDefault(),r?Y(1):i(!0);return}if(a.key==="ArrowUp"){a.preventDefault(),r?Y(-1):i(!0);return}if(a.key==="Home"){a.preventDefault(),r||i(!0),b(R(m,-1,1));return}if(a.key==="End"){a.preventDefault(),r||i(!0),b(R(m,m.length,-1));return}if(a.key==="Enter"||a.key===" "){if(a.preventDefault(),!r){i(!0);return}const t=m[f];t&&!t.disabled&&Q(t.value);return}if(a.key==="Escape"){r&&(a.preventDefault(),i(!1));return}if(a.key.length===1&&!a.metaKey&&!a.ctrlKey&&!a.altKey){a.preventDefault(),r||i(!0),F.current+=a.key,window.clearTimeout(A.current),A.current=setTimeout(()=>{F.current=""},500);const t=ta(m,F.current,f);t>=0&&b(t)}}}return l.jsxs(Qe,{id:E,label:B,helper:M,error:O,required:k,invalid:$,valid:ze,disabled:V,fullWidth:Re,size:De,className:Ne,showCount:!1,count:0,countMessage:()=>"",countId:`${z}-count`,helperId:U,frameRef:He,children:[l.jsx(sa,{name:N,form:L,required:k,disabled:V,value:g,items:s}),l.jsxs("button",{...Be({type:"button",role:"combobox",id:E,disabled:V,"aria-haspopup":"listbox","aria-expanded":r,"aria-controls":x,"aria-autocomplete":"none","aria-activedescendant":r&&f>=0?`${x}-opt-${f}`:void 0,"aria-invalid":$||void 0,"aria-required":k||void 0,"aria-label":H,"aria-labelledby":K,"aria-describedby":Xe(Oe,Ae?U:void 0),className:ae(Ye,"flex w-full cursor-pointer items-center justify-between text-left",!h&&"text-fg/60"),onClick:()=>i(a=>!a),onKeyDown:Ke}),children:[l.jsxs("span",{className:"flex min-w-0 flex-1 items-center gap-2",children:[h?l.jsx(oa,{icon:h.icon}):null,l.jsx("span",{className:"min-w-0 flex-1 truncate",children:h?h.label:D})]}),l.jsx("span",{className:ae("ml-2 inline-flex shrink-0 text-fg/70",r&&"rotate-180"),children:l.jsx(la,{})})]}),r?l.jsx(Je,{children:l.jsx("div",{ref:$e.setFloating,style:Ge,...Me(),...X,className:X.className,children:l.jsx(ra,{id:x,labelledBy:J,ariaLabel:J?void 0:H,items:s,activeIndex:f,selectedValues:g?[g]:[],emptyMessage:Pe,listRef:()=>{},setActiveIndex:b,onSelect:Q})})}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Choisir'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Aucune option'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const v="import { Select } from 'd-ui';",ia=`import { useState } from 'react';
import { Select } from 'd-ui';`;function y(s,o=!1){return[{value:"fr",label:s.france},{value:"be",label:s.belgium},{value:"ca",label:s.canada},{value:"ch",label:s.switzerland,disabled:o}]}function ca(s){return[{label:s.europe,options:[{value:"fr",label:s.france},{value:"be",label:s.belgium}]},{label:s.americas,options:[{value:"ca",label:s.canada}]}]}function we({value:s,defaultValue:o,onValueChange:e,...u}){const[N,L]=c.useState(s??o);return l.jsx(n,{...u,value:N,onValueChange:D=>{L(D),e==null||e(D)}})}function _e(s){return We(ia,`const [value, setValue] = useState();
return (
${s.trim().split(`
`).map(o=>`    ${o}`).join(`
`)}
);`)}const ua={title:"Components/Select",component:n,argTypes:Ue,parameters:{controls:{include:["size","label","helper","placeholder","invalid","valid","disabled","required","fullWidth"]}}},q={name:"Par défaut",args:{options:[]},parameters:_e(`<Select
    label="Pays"
    placeholder="Choisir"
    options={[
        { value: 'fr', label: 'France' },
        { value: 'be', label: 'Belgique' },
        { value: 'ca', label: 'Canada' },
    ]}
    value={value}
    onValueChange={setValue}
/>`),render:(s,{globals:o})=>{const e=p(d(o.locale));return l.jsx(we,{...s,label:s.label??e.country,placeholder:e.choose,options:y(e)})}},T={name:"Désactivé",args:{options:[]},parameters:S(v,'<Select label="Pays" options={options} defaultValue="fr" disabled />'),render:(s,{globals:o})=>{const e=p(d(o.locale));return l.jsx(n,{label:e.country,options:y(e),defaultValue:"fr",disabled:!0})}},C={name:"Invalide",args:{options:[]},parameters:S(v,'<Select label="Pays" options={options} invalid error="Ce champ est requis." />'),render:(s,{globals:o})=>{const e=p(d(o.locale));return l.jsx(n,{label:e.country,options:y(e),invalid:!0,error:e.error})}},j={name:"Requis",args:{options:[]},parameters:_e(`<Select
    label="Pays"
    required
    options={options}
    value={value}
    onValueChange={setValue}
/>`),render:(s,{globals:o})=>{const e=p(d(o.locale));return l.jsx(we,{label:e.country,options:y(e),required:!0})}},I={name:"Aide",args:{options:[]},parameters:S(v,'<Select label="Pays" helper="Le pays de résidence." options={options} />'),render:(s,{globals:o})=>{const e=p(d(o.locale));return l.jsx(n,{label:e.country,helper:e.helper,options:y(e)})}},w={name:"Tailles",args:{options:[]},parameters:S(v,`<>
    <Select size="sm" label="Petite" options={options} />
    <Select size="md" label="Moyenne" options={options} />
    <Select size="lg" label="Grande" options={options} />
</>`),render:(s,{globals:o})=>{const e=p(d(o.locale)),u=y(e);return l.jsxs("div",{className:"flex w-full max-w-md flex-col gap-4",children:[l.jsx(n,{size:"sm",label:e.small,options:u}),l.jsx(n,{size:"md",label:e.medium,options:u}),l.jsx(n,{size:"lg",label:e.large,options:u})]})}},_={name:"Groupe",args:{options:[]},parameters:S(v,`<Select
    label="Pays"
    options={[
        { label: 'Europe', options: [{ value: 'fr', label: 'France' }] },
        { label: 'Amériques', options: [{ value: 'ca', label: 'Canada' }] },
    ]}
/>`),render:(s,{globals:o})=>{const e=p(d(o.locale));return l.jsx(n,{label:e.country,options:ca(e)})}},P={name:"Options désactivées",args:{options:[]},parameters:S(v,`<Select
    label="Pays"
    options={[
        { value: 'fr', label: 'France' },
        { value: 'ch', label: 'Suisse', disabled: true },
    ]}
/>`),render:(s,{globals:o})=>{const e=p(d(o.locale));return l.jsx(n,{label:e.country,options:y(e,!0)})}};var oe,le,re;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(le=q.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var te,ne,ie;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,ue,pe;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var de,me,fe;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(fe=(me=j.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var be,ye,ge;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var Se,ve,xe;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(xe=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var he,qe,Te;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Te=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:Te.source}}};var Ce,je,Ie;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ie=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};const pa=["Default","Disabled","Invalid","Required","Helper","Sizes","Group","DisabledOptions"],ga=Object.freeze(Object.defineProperty({__proto__:null,Default:q,Disabled:T,DisabledOptions:P,Group:_,Helper:I,Invalid:C,Required:j,Sizes:w,__namedExportsOrder:pa,default:ua},Symbol.toStringTag,{value:"Module"}));export{q as D,_ as G,I as H,C as I,j as R,ga as S,T as a,w as b,P as c};
