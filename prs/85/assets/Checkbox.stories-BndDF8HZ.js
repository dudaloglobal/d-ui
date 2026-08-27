import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DQxMMF7O.js";import{c as Te,a as b,b as Ce}from"./docs-source-D60Dts3d.js";import{c as m,s as i,d}from"./cx-DUb51p-i.js";import{m as Ie,I as Re,C as Ve,S as Le,n as Ne,b as we,G as Pe}from"./selectionControl-BnQ8gEkV.js";const ge=c.createContext(null);function ke({label:l,name:o,value:a,defaultValue:x=[],onChange:v,disabled:f,required:N,invalid:u=!1,helper:w,error:k,size:D="md",orientation:A="vertical",children:E}){const C=`${c.useId()}-helper`,y=a!==void 0,[F,P]=c.useState(x),g=y?a:F,e=!!u||!!k,M=e?k:w;function B(S){y||P(S),v==null||v(S)}return r.jsx(ge.Provider,{value:{name:o,value:g,disabled:f,invalid:e,size:D,required:N,helperId:M?C:void 0,setValue:B},children:r.jsx(Pe,{legend:l,required:N,disabled:f,invalid:e,helper:w,error:k,helperId:C,orientation:A,children:E})})}const n=c.forwardRef(function({id:o,size:a="md",label:x,helper:v,error:f,invalid:N=!1,indeterminate:u=!1,className:w,disabled:k,required:D,checked:A,defaultChecked:E,value:p,onChange:C,"aria-invalid":y,"aria-describedby":F,...P},g){const e=c.useContext(ge),M=c.useId(),B=o??M,S=`${M}-helper`,J=c.useRef(null),s=e!=null&&p!=null,ze=s?e.value.includes(String(p)):void 0,z=!!N||!!f||!!(e!=null&&e.invalid)||y===!0||y==="true",H=!!(k||e!=null&&e.disabled),O=!!(D||s&&(e!=null&&e.required)),je=(e==null?void 0:e.size)??a,qe=Ie(F,(z?f:v)?S:void 0,s?e==null?void 0:e.helperId:void 0);return c.useEffect(()=>{const t=J.current;t&&(t.indeterminate=u)},[u]),r.jsxs("div",{className:m("flex min-w-0 flex-col",w),children:[r.jsxs("label",{htmlFor:B,className:m("inline-flex max-w-full items-center gap-2 text-sm leading-5",H?"text-fg/40":"text-fg"),children:[r.jsxs("span",{className:m("relative inline-flex shrink-0",we[je]),children:[r.jsx("input",{...P,ref:t=>{J.current=t,typeof g=="function"?g(t):g&&(g.current=t)},id:B,type:"checkbox",name:P.name??(e==null?void 0:e.name),value:p,disabled:H,required:s?void 0:O,checked:s?ze:A,defaultChecked:s?void 0:E,"aria-invalid":z||void 0,"aria-checked":u?"mixed":void 0,"aria-describedby":qe,onChange:t=>{if(s){const Ge=t.target.checked?e.value.includes(String(p))?e.value:[...e.value,String(p)]:e.value.filter(_e=>_e!==String(p));e.setValue(Ge)}C==null||C(t)},className:m(Ne,"peer")}),r.jsx("span",{"aria-hidden":"true",className:m("pointer-events-none flex size-full items-center justify-center rounded-sm text-on-brand","peer-hover:bg-field-hover peer-focus-visible:ring-2 peer-focus-visible:ring-focus",u?m("bg-brand [&_svg]:block",z?"ring-2 ring-inset ring-danger":"ring-2 ring-inset ring-brand"):m("bg-field [&_svg]:hidden peer-checked:[&_svg]:block peer-checked:bg-brand",z?"ring-2 ring-inset ring-danger peer-checked:ring-danger":"ring-1 ring-inset ring-fg/40 peer-checked:ring-brand"),H&&"opacity-50"),children:u?r.jsx(Re,{}):r.jsx(Ve,{})})]}),x?r.jsxs("span",{className:"min-w-0",children:[x,O&&!s?r.jsx("span",{"aria-hidden":"true",children:" *"}):null]}):null]}),s?null:r.jsx(Le,{id:S,invalid:z,error:f,helper:v})]})});ke.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{label:{required:!1,tsType:{name:"ReactNode"},description:"Légende du groupe (`<legend>`)."},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Libellé visible à côté de la case. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`."},helper:{required:!1,tsType:{name:"ReactNode"},description:"Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide."},error:{required:!1,tsType:{name:"ReactNode"},description:"Message d’erreur. Pose aussi `aria-invalid`."},invalid:{required:!1,tsType:{name:"boolean"},description:"État d’erreur : `aria-invalid`.",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:'État mixte (ni coché ni décoché). Pose `indeterminate` et `aria-checked="mixed"`.',defaultValue:{value:"false",computed:!1}}}};const h="import { Checkbox } from 'd-ui';",ye=`import { useState } from 'react';
import { Checkbox, CheckboxGroup } from 'd-ui';`,Me={title:"Components/Checkbox",component:n,argTypes:Te,parameters:{controls:{include:["size","label","helper","invalid","disabled","required","indeterminate","checked"]}}},j={name:"Par défaut",parameters:b(h,'<Checkbox label="Recevoir les notifications" />'),render:(l,{globals:o})=>{const a=i(d(o.locale));return r.jsx(n,{...l,label:l.label??a.checkboxLabel})}},q={name:"Désactivé",parameters:b(h,'<Checkbox label="Recevoir les notifications" defaultChecked disabled />'),render:(l,{globals:o})=>{const a=i(d(o.locale));return r.jsx(n,{label:a.checkboxLabel,defaultChecked:!0,disabled:!0})}},G={name:"Invalide",parameters:b(h,'<Checkbox label="J’accepte les conditions" invalid error="Ce champ est requis." />'),render:(l,{globals:o})=>{const a=i(d(o.locale));return r.jsx(n,{label:a.terms,invalid:!0,error:a.error})}},_={name:"Requis",parameters:b(h,'<Checkbox label="J’accepte les conditions" required />'),render:(l,{globals:o})=>{const a=i(d(o.locale));return r.jsx(n,{label:a.terms,required:!0})}},T={name:"Aide",parameters:b(h,'<Checkbox label="Recevoir les notifications" helper="Vous pourrez changer d’avis." />'),render:(l,{globals:o})=>{const a=i(d(o.locale));return r.jsx(n,{label:a.checkboxLabel,helper:a.helper})}},I={name:"Indéterminé",parameters:b(h,'<Checkbox label="Tout sélectionner" indeterminate />'),render:(l,{globals:o})=>{const a=i(d(o.locale));return r.jsx(n,{label:a.selectAll,indeterminate:!0})}},R={name:"Tailles",parameters:b(h,`<>
    <Checkbox size="sm" label="Petite" />
    <Checkbox size="md" label="Moyenne" />
    <Checkbox size="lg" label="Grande" />
</>`),render:(l,{globals:o})=>{const a=i(d(o.locale));return r.jsxs("div",{className:"flex flex-col gap-3",children:[r.jsx(n,{size:"sm",label:a.small}),r.jsx(n,{size:"md",label:a.medium}),r.jsx(n,{size:"lg",label:a.large})]})}},V={name:"Groupe",parameters:Ce(ye,`const [value, setValue] = useState(['email']);
return (
    <CheckboxGroup
        label="Canaux de notification"
        name="channels"
        value={value}
        onChange={setValue}
    >
        <Checkbox value="email" label="Email" />
        <Checkbox value="sms" label="SMS" />
        <Checkbox value="push" label="Push" />
    </CheckboxGroup>
);`),render:(l,{globals:o})=>{const a=i(d(o.locale));return r.jsx(Se,{copy:a})}},L={name:"Groupe horizontal",parameters:Ce(ye,`const [value, setValue] = useState(['email']);
return (
    <CheckboxGroup
        label="Canaux de notification"
        name="channels"
        orientation="horizontal"
        value={value}
        onChange={setValue}
    >
        <Checkbox value="email" label="Email" />
        <Checkbox value="sms" label="SMS" />
        <Checkbox value="push" label="Push" />
    </CheckboxGroup>
);`),render:(l,{globals:o})=>{const a=i(d(o.locale));return r.jsx(Se,{copy:a,orientation:"horizontal"})}};function Se({copy:l,orientation:o="vertical"}){const[a,x]=c.useState(["email"]);return r.jsxs(ke,{label:l.channels,name:"channels",orientation:o,value:a,onChange:x,children:[r.jsx(n,{value:"email",label:l.email}),r.jsx(n,{value:"sms",label:l.sms}),r.jsx(n,{value:"push",label:l.push})]})}var $,U,K;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Recevoir les notifications" />\`),
  render: (args, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox {...args} label={args.label ?? copy.checkboxLabel} />;
  }
}`,...(K=(U=j.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Q,W,X;q.parameters={...q.parameters,docs:{...(Q=q.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Recevoir les notifications" defaultChecked disabled />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.checkboxLabel} defaultChecked disabled />;
  }
}`,...(X=(W=q.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;G.parameters={...G.parameters,docs:{...(Y=G.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(importCheckbox, \`<Checkbox label="J’accepte les conditions" invalid error="Ce champ est requis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.terms} invalid error={copy.error} />;
  }
}`,...(ee=(Z=G.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,oe;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Requis',
  parameters: componentSource(importCheckbox, \`<Checkbox label="J’accepte les conditions" required />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.terms} required />;
  }
}`,...(oe=(re=_.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var le,ne,se;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Aide',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Recevoir les notifications" helper="Vous pourrez changer d’avis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.checkboxLabel} helper={copy.helper} />;
  }
}`,...(se=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,ce,ie;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Indéterminé',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Tout sélectionner" indeterminate />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.selectAll} indeterminate />;
  }
}`,...(ie=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,pe;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importCheckbox, \`<>
    <Checkbox size="sm" label="Petite" />
    <Checkbox size="md" label="Moyenne" />
    <Checkbox size="lg" label="Grande" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-3">
        <Checkbox size="sm" label={copy.small} />
        <Checkbox size="md" label={copy.medium} />
        <Checkbox size="lg" label={copy.large} />
      </div>;
  }
}`,...(pe=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,he;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Groupe',
  parameters: componentSourceFn(importGroup, \`const [value, setValue] = useState(['email']);
return (
    <CheckboxGroup
        label="Canaux de notification"
        name="channels"
        value={value}
        onChange={setValue}
    >
        <Checkbox value="email" label="Email" />
        <Checkbox value="sms" label="SMS" />
        <Checkbox value="push" label="Push" />
    </CheckboxGroup>
);\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <ChannelsGroup copy={copy} />;
  }
}`,...(he=(be=V.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,ve,fe;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Groupe horizontal',
  parameters: componentSourceFn(importGroup, \`const [value, setValue] = useState(['email']);
return (
    <CheckboxGroup
        label="Canaux de notification"
        name="channels"
        orientation="horizontal"
        value={value}
        onChange={setValue}
    >
        <Checkbox value="email" label="Email" />
        <Checkbox value="sms" label="SMS" />
        <Checkbox value="push" label="Push" />
    </CheckboxGroup>
);\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <ChannelsGroup copy={copy} orientation="horizontal" />;
  }
}`,...(fe=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};const Be=["Default","Disabled","Invalid","Required","Helper","Indeterminate","Sizes","Group","HorizontalGroup"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Default:j,Disabled:q,Group:V,Helper:T,HorizontalGroup:L,Indeterminate:I,Invalid:G,Required:_,Sizes:R,__namedExportsOrder:Be,default:Me},Symbol.toStringTag,{value:"Module"}));export{Oe as C,j as D,V as G,T as H,G as I,_ as R,R as S,q as a,I as b,L as c};
