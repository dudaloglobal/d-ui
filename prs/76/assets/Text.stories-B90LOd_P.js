import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as z,c}from"./docs-source-CpGeTe7M.js";import{t as n,d as p}from"./cx-Dh08zBtx.js";import{T as t}from"./Text-BSKGaZky.js";const v={title:"Components/Text",component:t,argTypes:z,args:{children:"Le design system fournit les primitives typographiques pour que les écrans n’inventent pas leurs propres tailles."}},s={name:"Par défaut",parameters:c("import { Text } from 'd-ui';","<Text>Le design system fournit les primitives typographiques.</Text>"),render:(l,{globals:o})=>{const r=n(p(o.locale));return e.jsx(t,{...l,children:r.sample})}},a={name:"Tailles",parameters:c("import { Text } from 'd-ui';",`<Text size="body">texte courant</Text>
<Text size="body-sm">texte secondaire</Text>
<Text size="caption">légende</Text>`),render:(l,{globals:o})=>{const r=n(p(o.locale));return e.jsxs("div",{className:"flex max-w-prose flex-col gap-3",children:[e.jsx(t,{size:"body",children:r.body}),e.jsx(t,{size:"body-sm",children:r.bodySm}),e.jsx(t,{size:"caption",children:r.caption})]})}},i={name:"Tons",parameters:c("import { Text } from 'd-ui';",`<Text>contraste maximal</Text>
<Text tone="muted">hiérarchie, ≥ 4.5:1</Text>`),render:(l,{globals:o})=>{const r=n(p(o.locale));return e.jsxs("div",{className:"flex max-w-prose flex-col gap-3",children:[e.jsx(t,{tone:"default",children:r.toneDefault}),e.jsx(t,{tone:"muted",children:r.toneMuted})]})}},m={name:"Graisses",parameters:c("import { Text } from 'd-ui';",`<Text weight="regular">regular</Text>
<Text weight="medium">medium</Text>
<Text weight="semibold">semibold</Text>`),render:()=>e.jsxs("div",{className:"flex max-w-prose flex-col gap-3",children:[e.jsx(t,{weight:"regular",children:"regular"}),e.jsx(t,{weight:"medium",children:"medium"}),e.jsx(t,{weight:"semibold",children:"semibold"})]})};var x,d,u;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { Text } from 'd-ui';", '<Text>Le design system fournit les primitives typographiques.</Text>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Text {...args}>{copy.sample}</Text>;
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var T,g,y;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource("import { Text } from 'd-ui';", \`<Text size="body">texte courant</Text>
<Text size="body-sm">texte secondaire</Text>
<Text size="caption">légende</Text>\`),
  render: (_, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex max-w-prose flex-col gap-3">
        <Text size="body">{copy.body}</Text>
        <Text size="body-sm">{copy.bodySm}</Text>
        <Text size="caption">{copy.caption}</Text>
      </div>;
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,h,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Tons',
  parameters: componentSource("import { Text } from 'd-ui';", \`<Text>contraste maximal</Text>
<Text tone="muted">hiérarchie, ≥ 4.5:1</Text>\`),
  render: (_, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex max-w-prose flex-col gap-3">
        <Text tone="default">{copy.toneDefault}</Text>
        <Text tone="muted">{copy.toneMuted}</Text>
      </div>;
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,S,j;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Graisses',
  parameters: componentSource("import { Text } from 'd-ui';", \`<Text weight="regular">regular</Text>
<Text weight="medium">medium</Text>
<Text weight="semibold">semibold</Text>\`),
  render: () => <div className="flex max-w-prose flex-col gap-3">
      <Text weight="regular">regular</Text>
      <Text weight="medium">medium</Text>
      <Text weight="semibold">semibold</Text>
    </div>
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const _=["Default","Sizes","Tones","Weights"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Sizes:a,Tones:i,Weights:m,__namedExportsOrder:_,default:v},Symbol.toStringTag,{value:"Module"}));export{s as D,a as S,q as T,m as W,i as a};
