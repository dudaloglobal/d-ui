import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DQxMMF7O.js";import{r as ue,c as te,e as de}from"./docs-source-B3WMQTen.js";import{c as G,s as t,d}from"./cx-BmnLLSRP.js";import{m as pe,R as me,G as ce,n as ye,b as ve}from"./selectionControl-fcCmPe54.js";const se=u.createContext(null);function _({label:n,name:o,value:e,defaultValue:p,onChange:i,disabled:m,required:c,invalid:R=!1,helper:y,error:s,size:h="md",orientation:F="vertical",children:P}){const A=u.useId(),M=`${A}-helper`,l=o??A,T=e!==void 0,[I,k]=u.useState(p),f=T?e:I,g=!!R||!!s,D=g?s:y;function N(L){T||k(L),i==null||i(L)}return a.jsx(se.Provider,{value:{name:l,value:f,disabled:m,invalid:g,size:h,required:c,helperId:D?M:void 0,setValue:N},children:a.jsx(ce,{legend:n,required:c,disabled:m,invalid:g,helper:y,error:s,helperId:M,orientation:F,children:P})})}const r=u.forwardRef(function({id:o,size:e="md",label:p,value:i,className:m,disabled:c,required:R,checked:y,defaultChecked:s,onChange:h,name:F,"aria-describedby":P,...A},M){const l=u.useContext(se),T=u.useId(),I=o??T,k=!!(l!=null&&l.invalid),f=!!(c||l!=null&&l.disabled),g=(l==null?void 0:l.size)??e,D=l?l.value===i:void 0;return a.jsx("div",{className:G("flex min-w-0 flex-col",m),children:a.jsxs("label",{htmlFor:I,className:G("inline-flex max-w-full items-center gap-2 text-sm leading-5",f?"text-fg/40":"text-fg"),children:[a.jsxs("span",{className:G("relative inline-flex shrink-0",ve[g]),children:[a.jsx("input",{...A,ref:M,id:I,type:"radio",name:(l==null?void 0:l.name)??F,value:i,disabled:f,required:(l==null?void 0:l.required)||R,checked:l?D:y,defaultChecked:l?void 0:s,"aria-describedby":pe(P,l==null?void 0:l.helperId),onChange:N=>{l==null||l.setValue(N.target.value),h==null||h(N)},className:G(ye,"peer")}),a.jsx("span",{"aria-hidden":"true",className:G("pointer-events-none flex size-full items-center justify-center rounded-full","bg-field text-on-brand","peer-hover:bg-field-hover peer-checked:peer-hover:bg-brand","peer-focus-visible:ring-2 peer-focus-visible:ring-focus","[&_.d-ui-radio-dot]:hidden peer-checked:[&_.d-ui-radio-dot]:block","peer-checked:bg-brand peer-checked:ring-brand",k?"ring-2 ring-inset ring-danger peer-checked:ring-danger":"ring-1 ring-inset ring-fg/40",f&&"opacity-50"),children:a.jsx(me,{})})]}),p?a.jsx("span",{className:"min-w-0",children:p}):null]})})});_.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{label:{required:!1,tsType:{name:"ReactNode"},description:"Légende du groupe (`<legend>`)."},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Libellé visible à côté du bouton radio."},value:{required:!0,tsType:{name:"string"},description:"Valeur envoyée avec le groupe. Obligatoire dans un `RadioGroup`."}}};const be=`import { useState } from 'react';
import { Radio, RadioGroup } from 'd-ui';`;function v(n,o="'monthly'"){return de(be,`const [value, setValue] = useState(${o});
return (
${n.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}const Re={title:"Components/Radio",component:r,args:{value:"monthly"},argTypes:ue,parameters:{controls:{include:["size","label","disabled","required"]}}},x={name:"Par défaut",parameters:v(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),render:(n,{globals:o})=>{const e=t(d(o.locale));return a.jsx(b,{copy:e})}},q={name:"Désactivé",parameters:v(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    disabled
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),render:(n,{globals:o})=>{const e=t(d(o.locale));return a.jsx(b,{copy:e,disabled:!0})}},V={name:"Invalide",parameters:v(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    invalid
    error="Choisissez une formule."
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`,"''"),render:(n,{globals:o})=>{const e=t(d(o.locale));return a.jsx(b,{copy:e,defaultValue:"",invalid:!0,error:e.radioError})}},z={name:"Requis",parameters:v(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    required
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),render:(n,{globals:o})=>{const e=t(d(o.locale));return a.jsx(b,{copy:e,required:!0})}},j={name:"Aide",parameters:v(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    helper="Vous pourrez changer d’avis."
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),render:(n,{globals:o})=>{const e=t(d(o.locale));return a.jsx(b,{copy:e,helper:e.helper})}},S={name:"Tailles",parameters:te("import { Radio, RadioGroup } from 'd-ui';",`<>
    <RadioGroup label="Petite" name="plan-sm" defaultValue="monthly" size="sm">
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
    </RadioGroup>
    <RadioGroup label="Moyenne" name="plan-md" defaultValue="monthly" size="md">
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
    </RadioGroup>
    <RadioGroup label="Grande" name="plan-lg" defaultValue="monthly" size="lg">
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
    </RadioGroup>
</>`),render:(n,{globals:o})=>{const e=t(d(o.locale));return a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs(_,{label:e.small,name:"plan-sm",defaultValue:"monthly",size:"sm",children:[a.jsx(r,{value:"monthly",label:e.monthly}),a.jsx(r,{value:"yearly",label:e.yearly})]}),a.jsxs(_,{label:e.medium,name:"plan-md",defaultValue:"monthly",size:"md",children:[a.jsx(r,{value:"monthly",label:e.monthly}),a.jsx(r,{value:"yearly",label:e.yearly})]}),a.jsxs(_,{label:e.large,name:"plan-lg",defaultValue:"monthly",size:"lg",children:[a.jsx(r,{value:"monthly",label:e.monthly}),a.jsx(r,{value:"yearly",label:e.yearly})]})]})}},C={name:"Groupe horizontal",parameters:v(`<RadioGroup
    label="Formule"
    name="plan"
    orientation="horizontal"
    value={value}
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),render:(n,{globals:o})=>{const e=t(d(o.locale));return a.jsx(b,{copy:e,orientation:"horizontal"})}};function b({copy:n,disabled:o,required:e,invalid:p,error:i,helper:m,defaultValue:c="monthly",orientation:R="vertical"}){const[y,s]=u.useState(c);return a.jsxs(_,{label:n.plan,value:y,onChange:s,disabled:o,required:e,invalid:p,error:i,helper:m,orientation:R,children:[a.jsx(r,{value:"monthly",label:n.monthly}),a.jsx(r,{value:"yearly",label:n.yearly}),a.jsx(r,{value:"team",label:n.team})]})}var w,B,E;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: radioGroupSource(\`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} />;
  }
}`,...(E=(B=x.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var H,O,$;q.parameters={...q.parameters,docs:{...(H=q.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: radioGroupSource(\`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    disabled
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} disabled />;
  }
}`,...($=(O=q.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var U,J,K;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: radioGroupSource(\`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    invalid
    error="Choisissez une formule."
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>\`, "''"),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} defaultValue="" invalid error={copy.radioError} />;
  }
}`,...(K=(J=V.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;z.parameters={...z.parameters,docs:{...(Q=z.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Requis',
  parameters: radioGroupSource(\`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    required
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} required />;
  }
}`,...(X=(W=z.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Aide',
  parameters: radioGroupSource(\`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    helper="Vous pourrez changer d’avis."
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} helper={copy.helper} />;
  }
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,oe;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource("import { Radio, RadioGroup } from 'd-ui';", \`<>
    <RadioGroup label="Petite" name="plan-sm" defaultValue="monthly" size="sm">
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
    </RadioGroup>
    <RadioGroup label="Moyenne" name="plan-md" defaultValue="monthly" size="md">
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
    </RadioGroup>
    <RadioGroup label="Grande" name="plan-lg" defaultValue="monthly" size="lg">
        <Radio value="monthly" label="Mensuel" />
        <Radio value="yearly" label="Annuel" />
    </RadioGroup>
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-6">
        <RadioGroup label={copy.small} name="plan-sm" defaultValue="monthly" size="sm">
          <Radio value="monthly" label={copy.monthly} />
          <Radio value="yearly" label={copy.yearly} />
        </RadioGroup>
        <RadioGroup label={copy.medium} name="plan-md" defaultValue="monthly" size="md">
          <Radio value="monthly" label={copy.monthly} />
          <Radio value="yearly" label={copy.yearly} />
        </RadioGroup>
        <RadioGroup label={copy.large} name="plan-lg" defaultValue="monthly" size="lg">
          <Radio value="monthly" label={copy.monthly} />
          <Radio value="yearly" label={copy.yearly} />
        </RadioGroup>
      </div>;
  }
}`,...(oe=(le=S.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ne,re,ie;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Groupe horizontal',
  parameters: radioGroupSource(\`<RadioGroup
    label="Formule"
    name="plan"
    orientation="horizontal"
    value={value}
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <PlanGroup copy={copy} orientation="horizontal" />;
  }
}`,...(ie=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const he=["Default","Disabled","Invalid","Required","Helper","Sizes","Horizontal"],Ve=Object.freeze(Object.defineProperty({__proto__:null,Default:x,Disabled:q,Helper:j,Horizontal:C,Invalid:V,Required:z,Sizes:S,__namedExportsOrder:he,default:Re},Symbol.toStringTag,{value:"Module"}));export{x as D,j as H,V as I,Ve as R,S,q as a,z as b,C as c};
