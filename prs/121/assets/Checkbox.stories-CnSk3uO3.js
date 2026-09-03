import{l as n,d as s,j as a,r as W}from"./iframe-CfESPI1b.js";import{g as X}from"./arg-types-B3Y5nyvA.js";import{c,b as B}from"./docs-source-C_O40UCi.js";import{C as l,a as Y}from"./Checkbox-WY-khn7n.js";const t="import { Checkbox } from 'd-ui';",K=`import { useState } from 'react';
import { Checkbox, CheckboxGroup } from 'd-ui';`,Z={title:"Components/Checkbox",component:l,argTypes:X,parameters:{controls:{include:["size","label","helper","invalid","disabled","required","indeterminate","checked"]}}},i={name:"Par défaut",parameters:c(t,'<Checkbox label="Recevoir les notifications" />'),render:(r,{globals:o})=>{const e=n(s(o.locale));return a.jsx(l,{...r,label:r.label??e.checkboxLabel})}},p={name:"Désactivé",parameters:c(t,'<Checkbox label="Recevoir les notifications" defaultChecked disabled />'),render:(r,{globals:o})=>{const e=n(s(o.locale));return a.jsx(l,{label:e.checkboxLabel,defaultChecked:!0,disabled:!0})}},u={name:"Invalide",parameters:c(t,'<Checkbox label="J’accepte les conditions" invalid error="Ce champ est requis." />'),render:(r,{globals:o})=>{const e=n(s(o.locale));return a.jsx(l,{label:e.terms,invalid:!0,error:e.error})}},m={name:"Requis",parameters:c(t,'<Checkbox label="J’accepte les conditions" required />'),render:(r,{globals:o})=>{const e=n(s(o.locale));return a.jsx(l,{label:e.terms,required:!0})}},b={name:"Aide",parameters:c(t,'<Checkbox label="Recevoir les notifications" helper="Vous pourrez changer d’avis." />'),render:(r,{globals:o})=>{const e=n(s(o.locale));return a.jsx(l,{label:e.checkboxLabel,helper:e.helper})}},d={name:"Indéterminé",parameters:c(t,'<Checkbox label="Tout sélectionner" indeterminate />'),render:(r,{globals:o})=>{const e=n(s(o.locale));return a.jsx(l,{label:e.selectAll,indeterminate:!0})}},h={name:"Tailles",parameters:c(t,`<>
    <Checkbox size="sm" label="Petite" />
    <Checkbox size="md" label="Moyenne" />
    <Checkbox size="lg" label="Grande" />
</>`),render:(r,{globals:o})=>{const e=n(s(o.locale));return a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(l,{size:"sm",label:e.small}),a.jsx(l,{size:"md",label:e.medium}),a.jsx(l,{size:"lg",label:e.large})]})}},x={name:"Groupe",parameters:B(K,`const [value, setValue] = useState(['email']);
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
);`),render:(r,{globals:o})=>{const e=n(s(o.locale));return a.jsx(Q,{copy:e})}},C={name:"Groupe horizontal",parameters:B(K,`const [value, setValue] = useState(['email']);
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
);`),render:(r,{globals:o})=>{const e=n(s(o.locale));return a.jsx(Q,{copy:e,orientation:"horizontal"})}};function Q({copy:r,orientation:o="vertical"}){const[e,U]=W.useState(["email"]);return a.jsxs(Y,{label:r.channels,name:"channels",orientation:o,value:e,onChange:U,children:[a.jsx(l,{value:"email",label:r.email}),a.jsx(l,{value:"sms",label:r.sms}),a.jsx(l,{value:"push",label:r.push})]})}var k,v,g;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Recevoir les notifications" />\`),
  render: (args, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox {...args} label={args.label ?? copy.checkboxLabel} />;
  }
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,S,f;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Recevoir les notifications" defaultChecked disabled />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.checkboxLabel} defaultChecked disabled />;
  }
}`,...(f=(S=p.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var G,z,_;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(importCheckbox, \`<Checkbox label="J’accepte les conditions" invalid error="Ce champ est requis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.terms} invalid error={copy.error} />;
  }
}`,...(_=(z=u.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var j,L,R;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Requis',
  parameters: componentSource(importCheckbox, \`<Checkbox label="J’accepte les conditions" required />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.terms} required />;
  }
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var q,V,I;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Aide',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Recevoir les notifications" helper="Vous pourrez changer d’avis." />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.checkboxLabel} helper={copy.helper} />;
  }
}`,...(I=(V=b.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var P,D,E;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Indéterminé',
  parameters: componentSource(importCheckbox, \`<Checkbox label="Tout sélectionner" indeterminate />\`),
  render: (_, {
    globals
  }) => {
    const copy = selectionCopy(docsLocale(globals.locale));
    return <Checkbox label={copy.selectAll} indeterminate />;
  }
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var M,T,A;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(T=h.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var H,J,F;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(J=x.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var O,N,w;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(w=(N=C.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const $=["Default","Disabled","Invalid","Required","Helper","Indeterminate","Sizes","Group","HorizontalGroup"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Disabled:p,Group:x,Helper:b,HorizontalGroup:C,Indeterminate:d,Invalid:u,Required:m,Sizes:h,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{le as C,i as D,x as G,b as H,u as I,m as R,h as S,p as a,d as b,C as c};
