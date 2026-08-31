import{t as x,d as m,j as e}from"./iframe-DRIDI3J7.js";import{c as T}from"./docs-source-C_O40UCi.js";import{H as s}from"./Heading-CK1fRuKU.js";import{T as i}from"./Text-CVYueY0E.js";const u={title:"Foundations/Typography"},l={name:"Styles de base",parameters:T("import { Heading, Text } from 'd-ui';",`<Heading level={1} size="display">
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
<Text size="caption">Caption</Text>`),render:(g,{globals:a})=>{const t=x(m(a.locale));return e.jsxs("div",{className:"flex max-w-3xl flex-col gap-3",children:[e.jsx(s,{level:1,size:"display",children:t.styleDisplay}),e.jsx(s,{level:2,size:"title",children:t.styleTitle}),e.jsx(s,{level:3,size:"subtitle",children:t.styleSubtitle}),e.jsx(i,{children:t.styleBody}),e.jsx(i,{size:"body-sm",children:t.styleBodySm}),e.jsx(i,{size:"caption",children:t.styleCaption})]})}},o={name:"Styles personnalisés",parameters:T("import { Heading, Text } from 'd-ui';",`<Heading level={1} size="display">
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
</Text>`),render:(g,{globals:a})=>{const t=x(m(a.locale));return e.jsxs("div",{className:"flex max-w-3xl flex-col gap-3",children:[e.jsx(s,{level:1,size:"display",children:t.customTitle1}),e.jsx(s,{level:2,size:"title",children:t.customTitle2}),e.jsx(s,{level:3,size:"subtitle",children:t.customTitle3}),e.jsx(s,{level:4,size:"body",children:t.customTitle4}),e.jsx(i,{weight:"medium",children:t.customIntro}),e.jsx(i,{size:"body",children:t.customBodyLarge}),e.jsx(i,{children:t.customBody}),e.jsx(i,{size:"body-sm",children:t.customQuote}),e.jsx(i,{size:"caption",tone:"muted",children:t.stylePublish})]})}};var d,n,c;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Styles de base',
  parameters: componentSource("import { Heading, Text } from 'd-ui';", \`<Heading level={1} size="display">
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
}`,...(c=(n=l.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var r,y,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Styles personnalisés',
  parameters: componentSource("import { Heading, Text } from 'd-ui';", \`<Heading level={1} size="display">
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
}`,...(p=(y=o.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};const H=["BasicStyles","CustomStyles"],S=Object.freeze(Object.defineProperty({__proto__:null,BasicStyles:l,CustomStyles:o,__namedExportsOrder:H,default:u},Symbol.toStringTag,{value:"Module"}));export{l as B,o as C,S as T};
