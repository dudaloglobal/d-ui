import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,m as i,n as a}from"./docs-locale-DxRsX5eR.js";import{S as o,h as s,i as c,n as l}from"./docs-source-5snetGJm.js";import{n as u,t as d}from"./Text-BQmBNKAr.js";var f=t({Default:()=>h,Sizes:()=>g,Tones:()=>_,Weights:()=>v,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{s(),c(),r(),u(),p=n(),m={title:`Components/Text`,component:d,argTypes:o,args:{children:`Le design system fournit les primitives typographiques pour que les écrans n’inventent pas leurs propres tailles.`}},h={name:`Par défaut`,parameters:l(`import { Text } from 'd-ui';`,`<Text>Le design system fournit les primitives typographiques.</Text>`),render:(e,{globals:t})=>{let n=i(a(t.locale));return(0,p.jsx)(d,{...e,children:n.sample})}},g={name:`Tailles`,parameters:l(`import { Text } from 'd-ui';`,`<Text size="body">texte courant</Text>
<Text size="body-sm">texte secondaire</Text>
<Text size="caption">légende</Text>`),render:(e,{globals:t})=>{let n=i(a(t.locale));return(0,p.jsxs)(`div`,{className:`flex max-w-prose flex-col gap-3`,children:[(0,p.jsx)(d,{size:`body`,children:n.body}),(0,p.jsx)(d,{size:`body-sm`,children:n.bodySm}),(0,p.jsx)(d,{size:`caption`,children:n.caption})]})}},_={name:`Tons`,parameters:l(`import { Text } from 'd-ui';`,`<Text>contraste maximal</Text>
<Text tone="muted">hiérarchie, ≥ 4.5:1</Text>
<Text tone="danger">message d’erreur</Text>`),render:(e,{globals:t})=>{let n=i(a(t.locale));return(0,p.jsxs)(`div`,{className:`flex max-w-prose flex-col gap-3`,children:[(0,p.jsx)(d,{tone:`default`,children:n.toneDefault}),(0,p.jsx)(d,{tone:`muted`,children:n.toneMuted}),(0,p.jsx)(d,{tone:`danger`,children:n.toneDanger})]})}},v={name:`Graisses`,parameters:l(`import { Text } from 'd-ui';`,`<Text weight="regular">regular</Text>
<Text weight="medium">medium</Text>
<Text weight="semibold">semibold</Text>`),render:()=>(0,p.jsxs)(`div`,{className:`flex max-w-prose flex-col gap-3`,children:[(0,p.jsx)(d,{weight:`regular`,children:`regular`}),(0,p.jsx)(d,{weight:`medium`,children:`medium`}),(0,p.jsx)(d,{weight:`semibold`,children:`semibold`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { Text } from 'd-ui';", '<Text>Le design system fournit les primitives typographiques.</Text>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Text {...args}>{copy.sample}</Text>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Graisses',
  parameters: componentSource("import { Text } from 'd-ui';", \`<Text weight="regular">regular</Text>
<Text weight="medium">medium</Text>
<Text weight="semibold">semibold</Text>\`),
  render: () => <div className="flex max-w-prose flex-col gap-3">
      <Text weight="regular">regular</Text>
      <Text weight="medium">medium</Text>
      <Text weight="semibold">semibold</Text>
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Sizes`,`Tones`,`Weights`]})))()}export{v as a,_ as i,g as n,b as o,f as r,h as t};