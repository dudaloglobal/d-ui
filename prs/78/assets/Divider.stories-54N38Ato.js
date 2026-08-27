import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as N,c}from"./docs-source-BpJ8NOnL.js";import{c as v,t as d,d as p}from"./cx-rSPOEDc8.js";import{T as o}from"./Text-DvZeaTGB.js";function n({orientation:a="horizontal",label:s,className:r,...m}){const u=s?{role:"separator","aria-orientation":a,"aria-label":s}:{role:"none","aria-hidden":!0},x=a==="horizontal"?"h-px w-full":"w-px self-stretch min-h-4";return a==="vertical"?e.jsx("div",{...m,...u,className:v("bg-border-subtle",x,r)}):e.jsx("hr",{...m,...u,className:v("bg-border-subtle border-0",x,r)})}n.__docgenInfo={description:`Filet de séparation.

Utilise \`--d-ui-color-border-subtle\` : un séparateur décoratif n'est pas une
frontière de contrôle, le seuil de 3:1 du critère 1.4.11 ne s'y applique pas.`,methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Nom accessible du séparateur.

Sans \`label\`, le trait est purement décoratif et masqué aux technologies
d'assistance. Ne le renseigner que lorsque la séparation porte du sens.`}}};const L={title:"Components/Divider",component:n,argTypes:N},t={name:"Horizontal",parameters:c("import { Divider } from 'd-ui';","<Divider />"),render:(a,{globals:s})=>{const r=d(p(s.locale));return e.jsxs("div",{className:"flex max-w-prose flex-col gap-4",children:[e.jsx(o,{children:r.previous}),e.jsx(n,{...a}),e.jsx(o,{children:r.next})]})}},i={name:"Vertical",args:{orientation:"vertical"},parameters:c("import { Divider } from 'd-ui';",'<Divider orientation="vertical" />'),render:(a,{globals:s})=>{const r=d(p(s.locale));return e.jsxs("div",{className:"flex h-8 items-center gap-4",children:[e.jsx(o,{as:"span",children:r.drafts}),e.jsx(n,{...a}),e.jsx(o,{as:"span",children:r.published})]})}},l={name:"Labellisé",args:{label:"Fin des résultats pertinents"},parameters:c("import { Divider } from 'd-ui';",'<Divider label="Fin des résultats pertinents" />'),render:(a,{globals:s})=>{const r=d(p(s.locale));return e.jsxs("div",{className:"flex max-w-prose flex-col gap-4",children:[e.jsx(o,{children:r.relevant}),e.jsx(n,{...a,label:r.labelled}),e.jsx(o,{tone:"muted",children:r.other})]})}};var f,g,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Horizontal',
  parameters: componentSource("import { Divider } from 'd-ui';", '<Divider />'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex max-w-prose flex-col gap-4">
        <Text>{copy.previous}</Text>
        <Divider {...args} />
        <Text>{copy.next}</Text>
      </div>;
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,h,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Vertical',
  args: {
    orientation: 'vertical'
  },
  parameters: componentSource("import { Divider } from 'd-ui';", '<Divider orientation="vertical" />'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex h-8 items-center gap-4">
        <Text as="span">{copy.drafts}</Text>
        <Divider {...args} />
        <Text as="span">{copy.published}</Text>
      </div>;
  }
}`,...(D=(h=i.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var T,j,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Labellisé',
  args: {
    label: 'Fin des résultats pertinents'
  },
  parameters: componentSource("import { Divider } from 'd-ui';", '<Divider label="Fin des résultats pertinents" />'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex max-w-prose flex-col gap-4">
        <Text>{copy.relevant}</Text>
        <Divider {...args} label={copy.labelled} />
        <Text tone="muted">{copy.other}</Text>
      </div>;
  }
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const z=["Default","Vertical","Labelled"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Labelled:l,Vertical:i,__namedExportsOrder:z,default:L},Symbol.toStringTag,{value:"Module"}));export{C as D,l as L,i as V,t as a};
