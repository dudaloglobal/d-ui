import{t as p,d as m,j as e}from"./iframe-B4opKa0M.js";import{c as T}from"./docs-source-C_O40UCi.js";import{H as l}from"./Heading-CX6iTCbW.js";import{T as i}from"./Text-Da7AhSjD.js";const u={title:"Foundations/Typography"},n={name:"Styles de base",parameters:T("import { Heading, Text } from '@dudaloglobal/d-ui';",`<Heading level={1} size="display">
  Display
</Heading>
<Heading level={2} size="title">
  Title
</Heading>
<Heading level={3} size="subtitle">
  Subtitle
</Heading>
<Text>Texte courant.</Text>
<Text size="body-sm">Texte secondaire.</Text>
<Text size="caption">Caption</Text>`),render:(g,{globals:o})=>{const t=p(m(o.locale));return e.jsxs("div",{className:"flex max-w-3xl flex-col gap-3",children:[e.jsx(l,{level:1,size:"display",children:t.styleDisplay}),e.jsx(l,{level:2,size:"title",children:t.styleTitle}),e.jsx(l,{level:3,size:"subtitle",children:t.styleSubtitle}),e.jsx(i,{children:t.styleBody}),e.jsx(i,{size:"body-sm",children:t.styleBodySm}),e.jsx(i,{size:"caption",children:t.styleCaption})]})}},s={name:"Styles personnalisés",parameters:T("import { Heading, Text } from '@dudaloglobal/d-ui';",`<Heading level={1} size="display">
  Title1
</Heading>
<Heading level={2} size="title">
  Title2
</Heading>
<Heading level={3} size="subtitle">
  Title3
</Heading>
<Heading level={4} size="body">
  Title4
</Heading>
<Text weight="medium">Intro</Text>
<Text>Body</Text>
<Text size="body-sm">Citation.</Text>
<Text size="caption" tone="muted">
  Publié le 12 mars 2026
</Text>`),render:(g,{globals:o})=>{const t=p(m(o.locale));return e.jsxs("div",{className:"flex max-w-3xl flex-col gap-3",children:[e.jsx(l,{level:1,size:"display",children:t.customTitle1}),e.jsx(l,{level:2,size:"title",children:t.customTitle2}),e.jsx(l,{level:3,size:"subtitle",children:t.customTitle3}),e.jsx(l,{level:4,size:"body",children:t.customTitle4}),e.jsx(i,{weight:"medium",children:t.customIntro}),e.jsx(i,{size:"body",children:t.customBodyLarge}),e.jsx(i,{children:t.customBody}),e.jsx(i,{size:"body-sm",children:t.customQuote}),e.jsx(i,{size:"caption",tone:"muted",children:t.stylePublish})]})}},H=["BasicStyles","CustomStyles"];var a,d,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Styles de base',
  parameters: componentSource("import { Heading, Text } from '@dudaloglobal/d-ui';", \`<Heading level={1} size="display">
  Display
</Heading>
<Heading level={2} size="title">
  Title
</Heading>
<Heading level={3} size="subtitle">
  Subtitle
</Heading>
<Text>Texte courant.</Text>
<Text size="body-sm">Texte secondaire.</Text>
<Text size="caption">Caption</Text>\`),
  render: (_, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex max-w-3xl flex-col gap-3">
        <Heading level={1} size="display">
          {copy.styleDisplay}
        </Heading>
        <Heading level={2} size="title">
          {copy.styleTitle}
        </Heading>
        <Heading level={3} size="subtitle">
          {copy.styleSubtitle}
        </Heading>
        <Text>{copy.styleBody}</Text>
        <Text size="body-sm">{copy.styleBodySm}</Text>
        <Text size="caption">{copy.styleCaption}</Text>
      </div>;
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var r,x,y;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Styles personnalisés',
  parameters: componentSource("import { Heading, Text } from '@dudaloglobal/d-ui';", \`<Heading level={1} size="display">
  Title1
</Heading>
<Heading level={2} size="title">
  Title2
</Heading>
<Heading level={3} size="subtitle">
  Title3
</Heading>
<Heading level={4} size="body">
  Title4
</Heading>
<Text weight="medium">Intro</Text>
<Text>Body</Text>
<Text size="body-sm">Citation.</Text>
<Text size="caption" tone="muted">
  Publié le 12 mars 2026
</Text>\`),
  render: (_, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex max-w-3xl flex-col gap-3">
        <Heading level={1} size="display">
          {copy.customTitle1}
        </Heading>
        <Heading level={2} size="title">
          {copy.customTitle2}
        </Heading>
        <Heading level={3} size="subtitle">
          {copy.customTitle3}
        </Heading>
        <Heading level={4} size="body">
          {copy.customTitle4}
        </Heading>
        <Text weight="medium">{copy.customIntro}</Text>
        <Text size="body">{copy.customBodyLarge}</Text>
        <Text>{copy.customBody}</Text>
        <Text size="body-sm">{copy.customQuote}</Text>
        <Text size="caption" tone="muted">
          {copy.stylePublish}
        </Text>
      </div>;
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const S=Object.freeze(Object.defineProperty({__proto__:null,BasicStyles:n,CustomStyles:s,__namedExportsOrder:H,default:u},Symbol.toStringTag,{value:"Module"}));export{n as B,s as C,S as T};
