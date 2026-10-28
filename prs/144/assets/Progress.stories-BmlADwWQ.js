import{B as n,d as c,j as e}from"./iframe-CF-6NDtP.js";import{r as A}from"./arg-types--G9daUKm.js";import{c as t}from"./docs-source-C_O40UCi.js";import{U,a as D}from"./uiScale-DBauGOvS.js";import{T as q}from"./Text-DlQLLHRe.js";import{P as l}from"./Progress-DBrrB_KX.js";const u="import { Progress } from '@dudaloglobal/d-ui';",M={title:"Components/Progress",component:l,argTypes:A,parameters:{controls:{include:["variant","value","showValue","size","color"]}}},i={name:"Par défaut",args:{label:"Téléversement du fichier",value:62},parameters:t(u,'<Progress value={62} label="Téléversement du fichier" />'),render:(o,{globals:r})=>{const a=n(c(r.locale));return e.jsx("div",{className:"mx-auto w-80 p-6",children:e.jsx(l,{...o,label:a.upload})})}},m={name:"Indéterminée",args:{label:"Chargement…"},parameters:t(u,'<Progress label="Chargement…" />'),render:(o,{globals:r})=>{const a=n(c(r.locale));return e.jsx("div",{className:"mx-auto w-80 p-6",children:e.jsx(l,{label:a.loading})})}},p={name:"Tailles",args:{label:"Téléversement",value:45},parameters:t(u,`<>
    <Progress size="xxs" value={45} label="Téléversement" />
    <Progress size="m" value={45} label="Téléversement" />
    <Progress size="xxl" value={45} label="Téléversement" />
</>`),render:(o,{globals:r})=>{const a=n(c(r.locale));return e.jsx("div",{className:"mx-auto flex w-80 flex-col gap-6 p-6",children:D.map(s=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(q,{size:"body-sm",tone:"muted",children:s}),e.jsx(l,{size:s,value:45,label:`${a.upload} (${s})`})]},s))})}},d={name:"Avec la valeur",args:{label:"Stockage utilisé",value:78,showValue:!0},parameters:t(u,'<Progress value={78} showValue label="Stockage utilisé" />'),render:(o,{globals:r})=>{const a=n(c(r.locale));return e.jsx("div",{className:"mx-auto w-80 p-6",children:e.jsx(l,{value:78,showValue:!0,label:a.storage})})}},v={name:"Texte annoncé",args:{label:"Téléversement du fichier",value:30},parameters:t(u,`<Progress
    value={30}
    showValue
    label="Téléversement du fichier"
    valueText="12 Mo sur 40"
/>`),render:(o,{globals:r})=>{const a=n(c(r.locale));return e.jsx("div",{className:"mx-auto w-80 p-6",children:e.jsx(l,{value:30,showValue:!0,label:a.upload,valueText:a.uploadValue})})}},g={name:"Circulaire",args:{label:"Quota de stockage",value:68,variant:"circular"},parameters:t(u,`<>
    <Progress variant="circular" size="s" value={68} label="Quota" />
    <Progress variant="circular" value={68} showValue label="Quota" />
    <Progress variant="circular" size="xl" value={68} showValue label="Quota" />
</>`),render:(o,{globals:r})=>{const a=n(c(r.locale));return e.jsxs("div",{className:"flex items-center justify-center gap-8 p-6",children:[e.jsx(l,{variant:"circular",size:"s",value:68,label:a.quota}),e.jsx(l,{variant:"circular",value:68,showValue:!0,label:a.quota}),e.jsx(l,{variant:"circular",size:"xl",value:68,showValue:!0,label:a.quota})]})}},x={name:"Couleurs",args:{label:"Téléversement",value:60},parameters:t(u,`<>
    <Progress color="brand" value={60} label="Téléversement" />
    <Progress color="success" value={60} label="Téléversement" />
    <Progress color="danger" value={60} label="Téléversement" />
</>`),render:(o,{globals:r})=>{const a=n(c(r.locale));return e.jsx("div",{className:"mx-auto flex w-80 flex-col gap-6 p-6",children:U.map(s=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(q,{size:"body-sm",tone:"muted",children:s}),e.jsx(l,{color:s,value:60,label:`${a.upload} (${s})`,showValue:!0})]},s))})}},R=["Default","Indeterminate","Sizes","WithValue","AnnouncedText","Circular","Colors"];var b,P,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(P=i.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var y,f,T;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(f=m.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var E,w,S;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Tailles',
  args: {
    label: 'Téléversement',
    value: 45
  },
  parameters: componentSource(importProgress, \`<>
    <Progress size="xxs" value={45} label="Téléversement" />
    <Progress size="m" value={45} label="Téléversement" />
    <Progress size="xxl" value={45} label="Téléversement" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="mx-auto flex w-80 flex-col gap-6 p-6">
        {UI_SIZES.map(size => <div key={size} className="flex flex-col gap-2">
            <Text size="body-sm" tone="muted">
              {size}
            </Text>
            <Progress size={size} value={45} label={\`\${copy.upload} (\${size})\`} />
          </div>)}
      </div>;
  }
}`,...(S=(w=p.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,z,V;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(V=(z=d.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var C,_,N;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(N=(_=v.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var I,L,k;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Circulaire',
  args: {
    label: 'Quota de stockage',
    value: 68,
    variant: 'circular'
  },
  parameters: componentSource(importProgress, \`<>
    <Progress variant="circular" size="s" value={68} label="Quota" />
    <Progress variant="circular" value={68} showValue label="Quota" />
    <Progress variant="circular" size="xl" value={68} showValue label="Quota" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="flex items-center justify-center gap-8 p-6">
        <Progress variant="circular" size="s" value={68} label={copy.quota} />
        <Progress variant="circular" value={68} showValue label={copy.quota} />
        <Progress variant="circular" size="xl" value={68} showValue label={copy.quota} />
      </div>;
  }
}`,...(k=(L=g.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var Q,$,O;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Couleurs',
  args: {
    label: 'Téléversement',
    value: 60
  },
  parameters: componentSource(importProgress, \`<>
    <Progress color="brand" value={60} label="Téléversement" />
    <Progress color="success" value={60} label="Téléversement" />
    <Progress color="danger" value={60} label="Téléversement" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="mx-auto flex w-80 flex-col gap-6 p-6">
        {UI_COLORS.map(color => <div key={color} className="flex flex-col gap-2">
            <Text size="body-sm" tone="muted">
              {color}
            </Text>
            {/*
              La couleur ne dit rien à elle seule : le nom accessible porte
              l'information, ici comme dans une vraie page (1.4.1).
             */}
            <Progress color={color} value={60} label={\`\${copy.upload} (\${color})\`} showValue />
          </div>)}
      </div>;
  }
}`,...(O=($=x.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const J=Object.freeze(Object.defineProperty({__proto__:null,AnnouncedText:v,Circular:g,Colors:x,Default:i,Indeterminate:m,Sizes:p,WithValue:d,__namedExportsOrder:R,default:M},Symbol.toStringTag,{value:"Module"}));export{v as A,g as C,i as D,m as I,J as P,p as S,d as W};
