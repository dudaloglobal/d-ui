import{m as o,d as t,j as e}from"./iframe-DRIDI3J7.js";import{e as q}from"./arg-types-Di6f0Zb7.js";import{c}from"./docs-source-C_O40UCi.js";import{T as A}from"./Text-CVYueY0E.js";import{P as s}from"./Progress-8T6OVvdL.js";const u="import { Progress } from 'd-ui';",I={title:"Components/Progress",component:s,argTypes:q,parameters:{controls:{include:["variant","value","showValue","size"]}}},n={name:"Par défaut",args:{label:"Téléversement du fichier",value:62},parameters:c(u,'<Progress value={62} label="Téléversement du fichier" />'),render:(l,{globals:r})=>{const a=o(t(r.locale));return e.jsx("div",{className:"mx-auto w-80 p-6",children:e.jsx(s,{...l,label:a.upload})})}},i={name:"Indéterminée",args:{label:"Chargement…"},parameters:c(u,'<Progress label="Chargement…" />'),render:(l,{globals:r})=>{const a=o(t(r.locale));return e.jsx("div",{className:"mx-auto w-80 p-6",children:e.jsx(s,{label:a.loading})})}},m={name:"Tailles",args:{label:"Téléversement",value:45},parameters:c(u,`<>
    <Progress size="sm" value={45} label="Téléversement" />
    <Progress size="md" value={45} label="Téléversement" />
    <Progress size="lg" value={45} label="Téléversement" />
</>`),render:(l,{globals:r})=>{const a=o(t(r.locale));return e.jsx("div",{className:"mx-auto flex w-80 flex-col gap-6 p-6",children:["sm","md","lg"].map(v=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(A,{size:"body-sm",tone:"muted",children:v}),e.jsx(s,{size:v,value:45,label:`${a.upload} (${v})`})]},v))})}},p={name:"Avec la valeur",args:{label:"Stockage utilisé",value:78,showValue:!0},parameters:c(u,'<Progress value={78} showValue label="Stockage utilisé" />'),render:(l,{globals:r})=>{const a=o(t(r.locale));return e.jsx("div",{className:"mx-auto w-80 p-6",children:e.jsx(s,{value:78,showValue:!0,label:a.storage})})}},d={name:"Texte annoncé",args:{label:"Téléversement du fichier",value:30},parameters:c(u,`<Progress
    value={30}
    showValue
    label="Téléversement du fichier"
    valueText="12 Mo sur 40"
/>`),render:(l,{globals:r})=>{const a=o(t(r.locale));return e.jsx("div",{className:"mx-auto w-80 p-6",children:e.jsx(s,{value:30,showValue:!0,label:a.upload,valueText:a.uploadValue})})}},g={name:"Circulaire",args:{label:"Quota de stockage",value:68,variant:"circular"},parameters:c(u,`<>
    <Progress variant="circular" size="sm" value={68} label="Quota" />
    <Progress variant="circular" value={68} showValue label="Quota" />
    <Progress variant="circular" size="lg" value={68} showValue label="Quota" />
</>`),render:(l,{globals:r})=>{const a=o(t(r.locale));return e.jsxs("div",{className:"flex items-center justify-center gap-8 p-6",children:[e.jsx(s,{variant:"circular",size:"sm",value:68,label:a.quota}),e.jsx(s,{variant:"circular",value:68,showValue:!0,label:a.quota}),e.jsx(s,{variant:"circular",size:"lg",value:68,showValue:!0,label:a.quota})]})}};var b,x,P;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    label: 'Téléversement du fichier',
    value: 62
  },
  parameters: componentSource(importProgress, \`<Progress value={62} label="Téléversement du fichier" />\`),
  render: (args, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="mx-auto w-80 p-6">
        <Progress {...args} label={copy.upload} />
      </div>;
  }
}`,...(P=(x=n.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var h,y,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Indéterminée',
  args: {
    label: 'Chargement…'
  },
  parameters: componentSource(importProgress, \`<Progress label="Chargement…" />\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="mx-auto w-80 p-6">
        <Progress label={copy.loading} />
      </div>;
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var T,w,z;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Tailles',
  args: {
    label: 'Téléversement',
    value: 45
  },
  parameters: componentSource(importProgress, \`<>
    <Progress size="sm" value={45} label="Téléversement" />
    <Progress size="md" value={45} label="Téléversement" />
    <Progress size="lg" value={45} label="Téléversement" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="mx-auto flex w-80 flex-col gap-6 p-6">
        {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="flex flex-col gap-2">
            <Text size="body-sm" tone="muted">
              {size}
            </Text>
            <Progress size={size} value={45} label={\`\${copy.upload} (\${size})\`} />
          </div>)}
      </div>;
  }
}`,...(z=(w=m.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var S,V,j;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Avec la valeur',
  args: {
    label: 'Stockage utilisé',
    value: 78,
    showValue: true
  },
  parameters: componentSource(importProgress, \`<Progress value={78} showValue label="Stockage utilisé" />\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="mx-auto w-80 p-6">
        <Progress value={78} showValue label={copy.storage} />
      </div>;
  }
}`,...(j=(V=p.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var C,_,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Texte annoncé',
  args: {
    label: 'Téléversement du fichier',
    value: 30
  },
  parameters: componentSource(importProgress, \`<Progress
    value={30}
    showValue
    label="Téléversement du fichier"
    valueText="12 Mo sur 40"
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="mx-auto w-80 p-6">
        <Progress value={30} showValue label={copy.upload} valueText={copy.uploadValue} />
      </div>;
  }
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var Q,k,L;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Circulaire',
  args: {
    label: 'Quota de stockage',
    value: 68,
    variant: 'circular'
  },
  parameters: componentSource(importProgress, \`<>
    <Progress variant="circular" size="sm" value={68} label="Quota" />
    <Progress variant="circular" value={68} showValue label="Quota" />
    <Progress variant="circular" size="lg" value={68} showValue label="Quota" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="flex items-center justify-center gap-8 p-6">
        <Progress variant="circular" size="sm" value={68} label={copy.quota} />
        <Progress variant="circular" value={68} showValue label={copy.quota} />
        <Progress variant="circular" size="lg" value={68} showValue label={copy.quota} />
      </div>;
  }
}`,...(L=(k=g.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const $=["Default","Indeterminate","Sizes","WithValue","AnnouncedText","Circular"],R=Object.freeze(Object.defineProperty({__proto__:null,AnnouncedText:d,Circular:g,Default:n,Indeterminate:i,Sizes:m,WithValue:p,__namedExportsOrder:$,default:I},Symbol.toStringTag,{value:"Module"}));export{d as A,g as C,n as D,i as I,R as P,m as S,p as W};
