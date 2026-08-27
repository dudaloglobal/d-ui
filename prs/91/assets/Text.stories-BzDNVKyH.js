import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as z,c as n}from"./docs-source-Dhouib-y.js";import{t as l,d as x}from"./cx-DGpBHnTn.js";import{T as t}from"./Text-gebLHIXY.js";const v={title:"Components/Text",component:t,argTypes:z,args:{children:"Le design system fournit les primitives typographiques pour que les écrans n’inventent pas leurs propres tailles."}},s={name:"Par défaut",parameters:n("import { Text } from 'd-ui';","<Text>Le design system fournit les primitives typographiques.</Text>"),render:(c,{globals:o})=>{const r=l(x(o.locale));return e.jsx(t,{...c,children:r.sample})}},a={name:"Tailles",parameters:n("import { Text } from 'd-ui';",`<Text size="body">texte courant</Text>
<Text size="body-sm">texte secondaire</Text>
<Text size="caption">légende</Text>`),render:(c,{globals:o})=>{const r=l(x(o.locale));return e.jsxs("div",{className:"flex max-w-prose flex-col gap-3",children:[e.jsx(t,{size:"body",children:r.body}),e.jsx(t,{size:"body-sm",children:r.bodySm}),e.jsx(t,{size:"caption",children:r.caption})]})}},i={name:"Tons",parameters:n("import { Text } from 'd-ui';",`<Text>contraste maximal</Text>
<Text tone="muted">hiérarchie, ≥ 4.5:1</Text>
<Text tone="danger">message d’erreur</Text>`),render:(c,{globals:o})=>{const r=l(x(o.locale));return e.jsxs("div",{className:"flex max-w-prose flex-col gap-3",children:[e.jsx(t,{tone:"default",children:r.toneDefault}),e.jsx(t,{tone:"muted",children:r.toneMuted}),e.jsx(t,{tone:"danger",children:r.toneDanger})]})}},m={name:"Graisses",parameters:n("import { Text } from 'd-ui';",`<Text weight="regular">regular</Text>
<Text weight="medium">medium</Text>
<Text weight="semibold">semibold</Text>`),render:()=>e.jsxs("div",{className:"flex max-w-prose flex-col gap-3",children:[e.jsx(t,{weight:"regular",children:"regular"}),e.jsx(t,{weight:"medium",children:"medium"}),e.jsx(t,{weight:"semibold",children:"semibold"})]})};var d,p,T;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { Text } from 'd-ui';", '<Text>Le design system fournit les primitives typographiques.</Text>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Text {...args}>{copy.sample}</Text>;
  }
}`,...(T=(p=s.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,f,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Tons',
  parameters: componentSource("import { Text } from 'd-ui';", \`<Text>contraste maximal</Text>
<Text tone="muted">hiérarchie, ≥ 4.5:1</Text>
<Text tone="danger">message d’erreur</Text>\`),
  render: (_, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex max-w-prose flex-col gap-3">
        <Text tone="default">{copy.toneDefault}</Text>
        <Text tone="muted">{copy.toneMuted}</Text>
        <Text tone="danger">{copy.toneDanger}</Text>
      </div>;
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,j,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Graisses',
  parameters: componentSource("import { Text } from 'd-ui';", \`<Text weight="regular">regular</Text>
<Text weight="medium">medium</Text>
<Text weight="semibold">semibold</Text>\`),
  render: () => <div className="flex max-w-prose flex-col gap-3">
      <Text weight="regular">regular</Text>
      <Text weight="medium">medium</Text>
      <Text weight="semibold">semibold</Text>
    </div>
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const _=["Default","Sizes","Tones","Weights"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Sizes:a,Tones:i,Weights:m,__namedExportsOrder:_,default:v},Symbol.toStringTag,{value:"Module"}));export{s as D,a as S,q as T,m as W,i as a};
