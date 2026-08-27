import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,g as a,n as o,u as s}from"./docs-locale-DxRsX5eR.js";import{c,h as l,i as u,n as d,r as f}from"./docs-source-5snetGJm.js";import{a as p,c as m,l as h,n as g,o as _,r as v,s as y,t as b}from"./selectionControl-BiqPIcwC.js";function x({label:e,name:t,value:n,defaultValue:r=[],onChange:i,disabled:a,required:o,invalid:s=!1,helper:c,error:l,size:u=`md`,orientation:d=`vertical`,children:f}){let p=`${(0,S.useId)()}-helper`,m=n!==void 0,[h,_]=(0,S.useState)(r),v=m?n:h,y=!!s||!!l,b=y?l:c;function x(e){m||_(e),i?.(e)}return(0,C.jsx)(w.Provider,{value:{name:t,value:v,disabled:a,invalid:y,size:u,required:o,helperId:b?p:void 0,setValue:x},children:(0,C.jsx)(g,{legend:e,required:o,disabled:a,invalid:y,helper:c,error:l,helperId:p,orientation:d,children:f})})}var S,C,w,T;function E(){return(E=e((()=>{S=n(),y(),C=r(),w=(0,S.createContext)(null),T=(0,S.forwardRef)(function({id:e,size:t=`md`,label:n,helper:r,error:i,invalid:o=!1,indeterminate:s=!1,className:c,disabled:l,required:u,checked:d,defaultChecked:f,value:g,onChange:y,"aria-invalid":x,"aria-describedby":T,...E},D){let O=(0,S.useContext)(w),k=(0,S.useId)(),A=e??k,j=`${k}-helper`,M=(0,S.useRef)(null),N=O!=null&&g!=null,P=N?O.value.includes(String(g)):void 0,F=!!o||!!i||!!O?.invalid||x===!0||x===`true`,I=!!(l||O?.disabled),L=!!(u||N&&O?.required),R=O?.size??t,z=m(T,(F?i:r)?j:void 0,N?O?.helperId:void 0);return(0,S.useEffect)(()=>{let e=M.current;e&&(e.indeterminate=s)},[s]),(0,C.jsxs)(`div`,{className:a(`flex min-w-0 flex-col`,c),children:[(0,C.jsxs)(`label`,{htmlFor:A,className:a(`inline-flex max-w-full items-center gap-2 text-sm leading-5`,I?`text-fg/40`:`text-fg`),children:[(0,C.jsxs)(`span`,{className:a(`relative inline-flex shrink-0`,_[R]),children:[(0,C.jsx)(`input`,{...E,ref:e=>{M.current=e,typeof D==`function`?D(e):D&&(D.current=e)},id:A,type:`checkbox`,name:E.name??O?.name,value:g,disabled:I,required:N?void 0:L,checked:N?P:d,defaultChecked:N?void 0:f,"aria-invalid":F||void 0,"aria-checked":s?`mixed`:void 0,"aria-describedby":z,onChange:e=>{if(N){let t=e.target.checked?O.value.includes(String(g))?O.value:[...O.value,String(g)]:O.value.filter(e=>e!==String(g));O.setValue(t)}y?.(e)},className:a(h,`peer`)}),(0,C.jsx)(`span`,{"aria-hidden":`true`,className:a(`pointer-events-none flex size-full items-center justify-center rounded-sm text-on-brand`,`peer-focus-visible:ring-2 peer-focus-visible:ring-focus`,s?a(`bg-brand [&_svg]:block`,F?`ring-2 ring-inset ring-danger`:`ring-2 ring-inset ring-brand`):a(`bg-field [&_svg]:hidden peer-checked:[&_svg]:block peer-checked:bg-brand`,`peer-hover:bg-field-hover peer-checked:peer-hover:bg-brand`,F?`ring-2 ring-inset ring-danger peer-checked:ring-danger`:`ring-1 ring-inset ring-fg/40 peer-checked:ring-brand`),I&&`opacity-50`),children:s?(0,C.jsx)(v,{}):(0,C.jsx)(b,{})})]}),n?(0,C.jsxs)(`span`,{className:`min-w-0`,children:[n,L&&!N?(0,C.jsx)(`span`,{"aria-hidden":`true`,children:` *`}):null]}):null]}),N?null:(0,C.jsx)(p,{id:j,invalid:F,error:i,helper:r})]})}),x.__docgenInfo={description:``,methods:[],displayName:`CheckboxGroup`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:"Légende du groupe (`<legend>`)."},name:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},invalid:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},helper:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},T.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:"Libellé visible à côté de la case. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`."},helper:{required:!1,tsType:{name:`ReactNode`},description:"Texte d’aide sous le contrôle. Remplacé par `error` si le contrôle est invalide."},error:{required:!1,tsType:{name:`ReactNode`},description:"Message d’erreur. Pose aussi `aria-invalid`."},invalid:{required:!1,tsType:{name:`boolean`},description:"État d’erreur : `aria-invalid`.",defaultValue:{value:`false`,computed:!1}},indeterminate:{required:!1,tsType:{name:`boolean`},description:'État mixte (ni coché ni décoché). Pose `indeterminate` et `aria-checked="mixed"`.',defaultValue:{value:`false`,computed:!1}}}}})))()}var D=t({Default:()=>P,Disabled:()=>F,Group:()=>V,Helper:()=>R,HorizontalGroup:()=>H,Indeterminate:()=>z,Invalid:()=>I,Required:()=>L,Sizes:()=>B,__namedExportsOrder:()=>U,default:()=>N});function O({copy:e,orientation:t=`vertical`}){let[n,r]=(0,k.useState)([`email`]);return(0,A.jsxs)(x,{label:e.channels,name:`channels`,orientation:t,value:n,onChange:r,children:[(0,A.jsx)(T,{value:`email`,label:e.email}),(0,A.jsx)(T,{value:`sms`,label:e.sms}),(0,A.jsx)(T,{value:`push`,label:e.push})]})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{k=n(),l(),i(),u(),E(),A=r(),j=`import { Checkbox } from 'd-ui';`,M=`import { useState } from 'react';
import { Checkbox, CheckboxGroup } from 'd-ui';`,N={title:`Components/Checkbox`,component:T,argTypes:c,parameters:{controls:{include:[`size`,`label`,`helper`,`invalid`,`disabled`,`required`,`indeterminate`,`checked`]}}},P={name:`Par défaut`,parameters:d(j,`<Checkbox label="Recevoir les notifications" />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,A.jsx)(T,{...e,label:e.label??n.checkboxLabel})}},F={name:`Désactivé`,parameters:d(j,`<Checkbox label="Recevoir les notifications" defaultChecked disabled />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,A.jsx)(T,{label:n.checkboxLabel,defaultChecked:!0,disabled:!0})}},I={name:`Invalide`,parameters:d(j,`<Checkbox label="J’accepte les conditions" invalid error="Ce champ est requis." />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,A.jsx)(T,{label:n.terms,invalid:!0,error:n.error})}},L={name:`Requis`,parameters:d(j,`<Checkbox label="J’accepte les conditions" required />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,A.jsx)(T,{label:n.terms,required:!0})}},R={name:`Aide`,parameters:d(j,`<Checkbox label="Recevoir les notifications" helper="Vous pourrez changer d’avis." />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,A.jsx)(T,{label:n.checkboxLabel,helper:n.helper})}},z={name:`Indéterminé`,parameters:d(j,`<Checkbox label="Tout sélectionner" indeterminate />`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,A.jsx)(T,{label:n.selectAll,indeterminate:!0})}},B={name:`Tailles`,parameters:d(j,`<>
    <Checkbox size="sm" label="Petite" />
    <Checkbox size="md" label="Moyenne" />
    <Checkbox size="lg" label="Grande" />
</>`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,A.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,A.jsx)(T,{size:`sm`,label:n.small}),(0,A.jsx)(T,{size:`md`,label:n.medium}),(0,A.jsx)(T,{size:`lg`,label:n.large})]})}},V={name:`Groupe`,parameters:f(M,`const [value, setValue] = useState(['email']);
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
);`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,A.jsx)(O,{copy:n})}},H={name:`Groupe horizontal`,parameters:f(M,`const [value, setValue] = useState(['email']);
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
);`),render:(e,{globals:t})=>{let n=s(o(t.locale));return(0,A.jsx)(O,{copy:n,orientation:`horizontal`})}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Recevoir les notifications" />\`),
  render: (args, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox {...args} label={args.label ?? copy.checkboxLabel} />;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Recevoir les notifications" defaultChecked disabled />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.checkboxLabel} defaultChecked disabled />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(importCheckbox, \`<Checkbox label="J’accepte les conditions" invalid error="Ce champ est requis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.terms} invalid error={copy.error} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Requis',
  parameters: componentSource(importCheckbox, \`<Checkbox label="J’accepte les conditions" required />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.terms} required />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Aide',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Recevoir les notifications" helper="Vous pourrez changer d’avis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.checkboxLabel} helper={copy.helper} />;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Indéterminé',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Tout sélectionner" indeterminate />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.selectAll} indeterminate />;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Default`,`Disabled`,`Invalid`,`Required`,`Helper`,`Indeterminate`,`Sizes`,`Group`,`HorizontalGroup`]})))()}export{R as a,I as c,W as d,V as i,L as l,P as n,H as o,F as r,z as s,D as t,B as u};