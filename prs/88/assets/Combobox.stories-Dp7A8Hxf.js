import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DQxMMF7O.js";import{h as Be,c as I,e as $e}from"./docs-source-CuvzGT6e.js";import{c as ae,a as b,d as f}from"./cx-DZL12kEg.js";import{g as Ge}from"./floating-By5IdYG5.js";import{T as Oe,m as Ue,n as We}from"./textControl-QmjPGioz.js";import{f as $,o as He,a as Ke,u as Je,n as v,b as Qe,s as Xe,N as Ye,C as Ze,S as eo}from"./useSelectOverlay-DAzNVQzp.js";function n({options:o,value:l,defaultValue:a,onValueChange:i,name:M,form:E,placeholder:_="Rechercher",emptyMessage:Se="Aucune option",size:he="md",label:G,helper:O,error:R,invalid:Te=!1,valid:Ve=!1,disabled:z=!1,required:P,fullWidth:qe=!0,className:Ie,id:je,"aria-label":U,"aria-labelledby":W,"aria-describedby":_e}){const D=c.useId(),k=je??D,y=`${D}-list`,H=`${D}-helper`,ze=G?`${k}-label`:void 0,[t,p]=c.useState(!1),[u,w]=c.useState(null),K=l!==void 0,[De,we]=c.useState(a),x=K?l:De,F=!!Te||!!R,Ne=F?R:O,A=$(o).find(e=>e.value===x),J=A?He(A.label)||A.value:"",N=c.useMemo(()=>u==null?[...o]:Ke(o,u),[o,u]),g=$(N),[d,m]=c.useState(-1),Q=W??ze,Le=t?u??J:J,X=e=>{K||we(e),i==null||i(e),w(null),p(!1)},{refs:Me,floatingStyles:Ee,getReferenceProps:Re,getFloatingProps:Pe,portal:Y,setReference:ke}=Je(t,e=>{p(e),e||w(null)});c.useEffect(()=>{if(!t){m(-1);return}const e=$(N);m(r=>{var ee,oe;if(u!=null)return v(e,-1,1);if(r>=0&&r<e.length&&!((ee=e[r])!=null&&ee.disabled))return r;const B=Qe(e,x);return B>=0&&!((oe=e[B])!=null&&oe.disabled)?B:v(e,-1,1)})},[t,x,N,u]),c.useLayoutEffect(()=>{t&&Xe(y,d)},[t,d,y]);function Z(e){m(r=>v(g,r,e))}function Fe(e){if(!z){if(e.key==="ArrowDown"){e.preventDefault(),t?Z(1):p(!0);return}if(e.key==="ArrowUp"){e.preventDefault(),t?Z(-1):p(!0);return}if(e.key==="Home"&&t){e.preventDefault(),m(v(g,-1,1));return}if(e.key==="End"&&t){e.preventDefault(),m(v(g,g.length,-1));return}if(e.key==="Enter"){if(!t)return;e.preventDefault();const r=g[d];r&&!r.disabled&&X(r.value);return}e.key==="Escape"&&t&&(e.preventDefault(),w(null),p(!1))}}function Ae(e){p(!0),w(e.target.value)}return s.jsxs(Oe,{id:k,label:G,helper:O,error:R,required:P,invalid:F,valid:Ve,disabled:z,fullWidth:qe,size:he,className:Ie,showCount:!1,count:0,countMessage:()=>"",countId:`${D}-count`,helperId:H,children:[s.jsx(Ye,{name:M,form:E,required:P,disabled:z,value:x,items:o}),s.jsx("input",{...Re({type:"text",role:"combobox",id:k,disabled:z,autoComplete:"off",spellCheck:!1,"aria-haspopup":"listbox","aria-expanded":t,"aria-controls":y,"aria-autocomplete":"list","aria-activedescendant":t&&d>=0?`${y}-opt-${d}`:void 0,"aria-invalid":F||void 0,"aria-required":P||void 0,"aria-label":U,"aria-labelledby":W,"aria-describedby":Ue(_e,Ne?H:void 0),className:ae(We,"w-full"),placeholder:_,value:Le,onChange:Ae,onKeyDown:Fe,onClick:()=>p(!0)}),ref:ke}),s.jsx("span",{className:ae("ml-2 inline-flex shrink-0 text-fg/70",t&&"rotate-180"),"aria-hidden":"true",children:s.jsx(Ze,{})}),t?s.jsx(Ge,{children:s.jsx("div",{ref:Me.setFloating,style:Ee,...Pe(),...Y,className:Y.className,children:s.jsx(eo,{id:y,labelledBy:Q,ariaLabel:Q?void 0:U,items:N,activeIndex:d,selectedValue:x,emptyMessage:Se,listRef:()=>{},setActiveIndex:m,onSelect:X})})}):null]})}n.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{options:{required:!0,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Rechercher'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Aucune option'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const j="import { Combobox } from 'd-ui';",oo=`import { useState } from 'react';
import { Combobox } from 'd-ui';`;function L(o,l=!1){return[{value:"paris",label:o.paris},{value:"lyon",label:o.lyon},{value:"marseille",label:o.marseille},{value:"bruxelles",label:o.brussels,disabled:l}]}function ao(o){return[{label:o.france,options:[{value:"paris",label:o.paris},{value:"lyon",label:o.lyon}]},{label:o.belgium,options:[{value:"bruxelles",label:o.brussels}]}]}function lo({value:o,defaultValue:l,onValueChange:a,...i}){const[M,E]=c.useState(o??l);return s.jsx(n,{...i,value:M,onValueChange:_=>{E(_),a==null||a(_)}})}function so(o){return $e(oo,`const [value, setValue] = useState();
return (
${o.trim().split(`
`).map(l=>`    ${l}`).join(`
`)}
);`)}const to={title:"Components/Combobox",component:n,argTypes:Be,parameters:{controls:{include:["size","label","helper","placeholder","invalid","valid","disabled","required","fullWidth"]}}},C={name:"Par défaut",args:{options:[]},parameters:so(`<Combobox
    label="Ville"
    placeholder="Rechercher"
    options={[
        { value: 'paris', label: 'Paris' },
        { value: 'lyon', label: 'Lyon' },
        { value: 'marseille', label: 'Marseille' },
    ]}
    value={value}
    onValueChange={setValue}
/>`),render:(o,{globals:l})=>{const a=b(f(l.locale));return s.jsx(lo,{...o,label:o.label??a.city,placeholder:a.search,options:L(a)})}},S={name:"Désactivé",args:{options:[]},parameters:I(j,'<Combobox label="Ville" options={options} defaultValue="paris" disabled />'),render:(o,{globals:l})=>{const a=b(f(l.locale));return s.jsx(n,{label:a.city,options:L(a),defaultValue:"paris",disabled:!0})}},h={name:"Invalide",args:{options:[]},parameters:I(j,'<Combobox label="Ville" options={options} invalid error="Ce champ est requis." />'),render:(o,{globals:l})=>{const a=b(f(l.locale));return s.jsx(n,{label:a.city,options:L(a),invalid:!0,error:a.error})}},T={name:"Tailles",args:{options:[]},parameters:I(j,`<>
    <Combobox size="sm" label="Petite" options={options} />
    <Combobox size="md" label="Moyenne" options={options} />
    <Combobox size="lg" label="Grande" options={options} />
</>`),render:(o,{globals:l})=>{const a=b(f(l.locale)),i=L(a);return s.jsxs("div",{className:"flex w-full max-w-md flex-col gap-4",children:[s.jsx(n,{size:"sm",label:a.small,options:i}),s.jsx(n,{size:"md",label:a.medium,options:i}),s.jsx(n,{size:"lg",label:a.large,options:i})]})}},V={name:"Groupe",args:{options:[]},parameters:I(j,`<Combobox
    label="Ville"
    options={[
        { label: 'France', options: [{ value: 'paris', label: 'Paris' }] },
        { label: 'Belgique', options: [{ value: 'bruxelles', label: 'Bruxelles' }] },
    ]}
/>`),render:(o,{globals:l})=>{const a=b(f(l.locale));return s.jsx(n,{label:a.city,options:ao(a)})}},q={name:"État vide",args:{options:[]},parameters:I(j,'<Combobox label="Ville" options={[]} emptyMessage="Aucune option" />'),render:(o,{globals:l})=>{const a=b(f(l.locale));return s.jsx(n,{label:a.city,options:[],emptyMessage:a.empty,defaultValue:""})}};var le,se,te;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Par défaut',
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
    return <ControlledCombobox {...args} label={args.label ?? copy.city} placeholder={copy.search} options={cities(copy)} />;
  }
}`,...(te=(se=C.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,ne,ie;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Désactivé',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<Combobox label="Ville" options={options} defaultValue="paris" disabled />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={cities(copy)} defaultValue="paris" disabled />;
  }
}`,...(ie=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,pe,ue;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Invalide',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<Combobox label="Ville" options={options} invalid error="Ce champ est requis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={cities(copy)} invalid error={copy.error} />;
  }
}`,...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,me,be;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
        <Combobox size="sm" label={copy.small} options={options} />
        <Combobox size="md" label={copy.medium} options={options} />
        <Combobox size="lg" label={copy.large} options={options} />
      </div>;
  }
}`,...(be=(me=T.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var fe,ye,xe;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
    return <Combobox label={copy.city} options={groupedCities(copy)} />;
  }
}`,...(xe=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var ge,ve,Ce;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'État vide',
  args: {
    options: []
  },
  parameters: componentSource(importCombobox, \`<Combobox label="Ville" options={[]} emptyMessage="Aucune option" />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectCopy(docsLocale(globals.locale));
    return <Combobox label={copy.city} options={[]} emptyMessage={copy.empty} defaultValue="" />;
  }
}`,...(Ce=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};const ro=["Default","Disabled","Invalid","Sizes","Group","Empty"],yo=Object.freeze(Object.defineProperty({__proto__:null,Default:C,Disabled:S,Empty:q,Group:V,Invalid:h,Sizes:T,__namedExportsOrder:ro,default:to},Symbol.toStringTag,{value:"Module"}));export{yo as C,C as D,q as E,V as G,h as I,T as S,S as a};
