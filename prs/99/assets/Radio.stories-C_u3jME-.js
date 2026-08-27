import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,g as a,n as o,u as s}from"./docs-locale-DxRsX5eR.js";import{h as c,i as l,n as u,r as d,v as f}from"./docs-source-5snetGJm.js";import{c as p,i as m,l as h,n as g,o as _,s as v}from"./selectionControl-BiqPIcwC.js";function y({label:e,name:t,value:n,defaultValue:r,onChange:i,disabled:a,required:o,invalid:s=!1,helper:c,error:l,size:u=`md`,orientation:d=`vertical`,children:f}){let p=(0,b.useId)(),m=`${p}-helper`,h=t??p,_=n!==void 0,[v,y]=(0,b.useState)(r),C=_?n:v,w=!!s||!!l,T=w?l:c;function E(e){_||y(e),i?.(e)}return(0,x.jsx)(S.Provider,{value:{name:h,value:C,disabled:a,invalid:w,size:u,required:o,helperId:T?m:void 0,setValue:E},children:(0,x.jsx)(g,{legend:e,required:o,disabled:a,invalid:w,helper:c,error:l,helperId:m,orientation:d,children:f})})}var b,x,S,C;function w(){return(w=e((()=>{b=n(),v(),x=r(),S=(0,b.createContext)(null),C=(0,b.forwardRef)(function({id:e,size:t=`md`,label:n,value:r,className:i,disabled:o,required:s,checked:c,defaultChecked:l,onChange:u,name:d,"aria-describedby":f,...g},v){let y=(0,b.useContext)(S),C=(0,b.useId)(),w=e??C,T=!!y?.invalid,E=!!(o||y?.disabled),D=y?.size??t,O=y?y.value===r:void 0;return(0,x.jsx)(`div`,{className:a(`flex min-w-0 flex-col`,i),children:(0,x.jsxs)(`label`,{htmlFor:w,className:a(`inline-flex max-w-full items-center gap-2 text-sm leading-5`,E?`text-fg/40`:`text-fg`),children:[(0,x.jsxs)(`span`,{className:a(`relative inline-flex shrink-0`,_[D]),children:[(0,x.jsx)(`input`,{...g,ref:v,id:w,type:`radio`,name:y?.name??d,value:r,disabled:E,required:y?.required||s,checked:y?O:c,defaultChecked:y?void 0:l,"aria-describedby":p(f,y?.helperId),onChange:e=>{y?.setValue(e.target.value),u?.(e)},className:a(h,`peer`)}),(0,x.jsx)(`span`,{"aria-hidden":`true`,className:a(`pointer-events-none flex size-full items-center justify-center rounded-full`,`bg-field text-on-brand`,`peer-hover:bg-field-hover peer-checked:peer-hover:bg-brand`,`peer-focus-visible:ring-2 peer-focus-visible:ring-focus`,`[&_.d-ui-radio-dot]:hidden peer-checked:[&_.d-ui-radio-dot]:block`,`peer-checked:bg-brand peer-checked:ring-brand`,T?`ring-2 ring-inset ring-danger peer-checked:ring-danger`:`ring-1 ring-inset ring-fg/40`,E&&`opacity-50`),children:(0,x.jsx)(m,{})})]}),n?(0,x.jsx)(`span`,{className:`min-w-0`,children:n}):null]})})}),y.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:"Légende du groupe (`<legend>`)."},name:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},invalid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},helper:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},C.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:`Libellé visible à côté du bouton radio.`},value:{required:!0,tsType:{name:`string`},description:"Valeur envoyée avec le groupe. Obligatoire dans un `RadioGroup`."}}}})))()}var T=t({Default:()=>M,Disabled:()=>N,Helper:()=>I,Horizontal:()=>R,Invalid:()=>P,Required:()=>F,Sizes:()=>L,__namedExportsOrder:()=>z,default:()=>j});function E(e,t=`'monthly'`){return d(A,`const [value, setValue] = useState(${t});
return (
${e.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function D({copy:e,disabled:t,required:n,invalid:r,error:i,helper:a,defaultValue:o=`monthly`,orientation:s=`vertical`}){let[c,l]=(0,O.useState)(o);return(0,k.jsxs)(y,{label:e.plan,value:c,onChange:l,disabled:t,required:n,invalid:r,error:i,helper:a,orientation:s,children:[(0,k.jsx)(C,{value:`monthly`,label:e.monthly}),(0,k.jsx)(C,{value:`yearly`,label:e.yearly}),(0,k.jsx)(C,{value:`team`,label:e.team})]})}var O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{O=n(),c(),i(),l(),w(),k=r(),A=`import { useState } from 'react';
import { Radio, RadioGroup } from 'd-ui';`,j={title:`Components/Radio`,component:C,args:{value:`monthly`},argTypes:f,parameters:{controls:{include:[`size`,`label`,`disabled`,`required`]}}},M={name:`Par défaut`,parameters:E(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,k.jsx)(D,{copy:n})}},N={name:`Désactivé`,parameters:E(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    disabled
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,k.jsx)(D,{copy:n,disabled:!0})}},P={name:`Invalide`,parameters:E(`<RadioGroup
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
</RadioGroup>`,`''`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,k.jsx)(D,{copy:n,defaultValue:``,invalid:!0,error:n.radioError})}},F={name:`Requis`,parameters:E(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    required
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,k.jsx)(D,{copy:n,required:!0})}},I={name:`Aide`,parameters:E(`<RadioGroup
    label="Formule"
    name="plan"
    value={value}
    helper="Vous pourrez changer d’avis."
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,k.jsx)(D,{copy:n,helper:n.helper})}},L={name:`Tailles`,parameters:u(`import { Radio, RadioGroup } from 'd-ui';`,`<>
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
</>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,k.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,k.jsxs)(y,{label:n.small,name:`plan-sm`,defaultValue:`monthly`,size:`sm`,children:[(0,k.jsx)(C,{value:`monthly`,label:n.monthly}),(0,k.jsx)(C,{value:`yearly`,label:n.yearly})]}),(0,k.jsxs)(y,{label:n.medium,name:`plan-md`,defaultValue:`monthly`,size:`md`,children:[(0,k.jsx)(C,{value:`monthly`,label:n.monthly}),(0,k.jsx)(C,{value:`yearly`,label:n.yearly})]}),(0,k.jsxs)(y,{label:n.large,name:`plan-lg`,defaultValue:`monthly`,size:`lg`,children:[(0,k.jsx)(C,{value:`monthly`,label:n.monthly}),(0,k.jsx)(C,{value:`yearly`,label:n.yearly})]})]})}},R={name:`Groupe horizontal`,parameters:E(`<RadioGroup
    label="Formule"
    name="plan"
    orientation="horizontal"
    value={value}
    onChange={setValue}
>
    <Radio value="monthly" label="Mensuel" />
    <Radio value="yearly" label="Annuel" />
    <Radio value="team" label="Équipe" />
</RadioGroup>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,k.jsx)(D,{copy:n,orientation:`horizontal`})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`Default`,`Disabled`,`Invalid`,`Required`,`Helper`,`Sizes`,`Horizontal`]})))()}export{P as a,L as c,R as i,B as l,N as n,T as o,I as r,F as s,M as t};