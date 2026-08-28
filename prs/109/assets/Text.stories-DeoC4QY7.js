import{j as e,d as i,t as c,h as X}from"./iframe-CBq88VWm.js";import{t as P}from"./arg-types-Bf5UST3O.js";import{c as l}from"./docs-source-C_O40UCi.js";import{T as o,a as B,b as G}from"./Text-COJWzyeV.js";const I={title:"Components/Text",component:o,argTypes:P,args:{children:"Le design system fournit les primitives typographiques pour que les écrans n’inventent pas leurs propres tailles."}},p={name:"Par défaut",parameters:l("import { Text } from 'd-ui';","<Text>Le design system fournit les primitives typographiques.</Text>"),render:(t,{globals:a})=>{const r=c(i(a.locale));return e.jsx(o,{...t,children:r.sample})}},d={name:"Tailles",parameters:l("import { Text } from 'd-ui';",`<Text size="body">texte courant</Text>
<Text size="body-sm">texte secondaire</Text>
<Text size="caption">légende</Text>`),render:(t,{globals:a})=>{const r=c(i(a.locale));return e.jsxs("div",{className:"flex max-w-prose flex-col gap-3",children:[e.jsx(o,{size:"body",children:r.body}),e.jsx(o,{size:"body-sm",children:r.bodySm}),e.jsx(o,{size:"caption",children:r.caption})]})}},m={name:"Tons",parameters:l("import { Text } from 'd-ui';",`<Text>contraste maximal</Text>
<Text tone="muted">hiérarchie, ≥ 4.5:1</Text>
<Text tone="danger">message d’erreur</Text>`),render:(t,{globals:a})=>{const r=c(i(a.locale));return e.jsxs("div",{className:"flex max-w-prose flex-col gap-3",children:[e.jsx(o,{tone:"default",children:r.toneDefault}),e.jsx(o,{tone:"muted",children:r.toneMuted}),e.jsx(o,{tone:"danger",children:r.toneDanger})]})}},x={name:"Graisses",parameters:l("import { Text } from 'd-ui';",`<Text weight="regular">regular</Text>
<Text weight="medium">medium</Text>
<Text weight="semibold">semibold</Text>`),render:(t,{globals:a})=>{const r=c(i(a.locale));return e.jsxs("div",{className:"flex max-w-prose flex-col gap-3",children:[e.jsx(o,{weight:"regular",children:r.weightRegular}),e.jsx(o,{weight:"medium",children:r.weightMedium}),e.jsx(o,{weight:"semibold",children:r.weightSemibold})]})}},u={name:"Couleurs",parameters:l("import { Text } from 'd-ui';",`<Text>
    Voici un mot <Text as="span" color="brand">coloré</Text> dans la phrase.
</Text>
<Text color="danger">Danger</Text>
<div className="bg-fg rounded-md px-3 py-2">
    <Text color="light">Clair</Text>
</div>`),render:(t,{globals:a})=>{const r=i(a.locale),n=c(r),f=X(r);return e.jsxs("div",{className:"flex max-w-prose flex-col gap-3",children:[e.jsxs(o,{children:[n.colorBefore," ",e.jsx(o,{as:"span",color:"brand",children:n.colorEmphasis})," ",n.colorAfter]}),G.map(s=>{const y=e.jsx(o,{as:"span",color:s,children:f[s]});return s==="light"?e.jsx("div",{className:"bg-fg rounded-md px-3 py-2",children:y},s):e.jsx("div",{children:y},s)})]})}},T={name:"Variantes de couleur",parameters:l("import { Text } from 'd-ui';",`<Text color="brand" colorVariant="D2">D2</Text>
<Text color="brand">N</Text>
<Text color="brand" colorVariant="L2">L2</Text>`),render:()=>e.jsx("div",{className:"flex max-w-prose flex-wrap items-baseline gap-x-4 gap-y-2",children:B.map(t=>e.jsx(o,{as:"span",color:"brand",colorVariant:t,children:t},t))})},g={name:"Retour à la ligne et débordement",parameters:l("import { Text } from 'd-ui';",`<div className="max-w-[180px] overflow-hidden">
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
</div>
<div className="max-w-[180px] overflow-hidden">
    <Text noWrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
</div>
<div className="max-w-[180px] overflow-hidden">
    <Text truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
</div>
<div className="max-w-[180px] overflow-hidden">
    <Text truncate={{ lines: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
</div>`),render:(t,{globals:a})=>{const r=c(i(a.locale)),n=[{key:"default",label:r.wrapDefault,props:{}},{key:"nowrap",label:r.wrapNoWrap,props:{noWrap:!0}},{key:"truncate",label:r.wrapTruncate,props:{truncate:!0}},{key:"multiline",label:r.wrapTruncateMultiline,props:{truncate:{lines:2}}}];return e.jsx("div",{className:"flex flex-wrap gap-8",children:n.map(({key:f,label:s,props:y})=>e.jsxs("div",{className:"max-w-[180px] overflow-hidden",children:[e.jsx(o,{as:"span",size:"caption",tone:"muted",className:"mb-1 block",children:s}),e.jsx(o,{...y,children:r.wrapSample})]},f))})}};var h,b,v;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { Text } from 'd-ui';", '<Text>Le design system fournit les primitives typographiques.</Text>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Text {...args}>{copy.sample}</Text>;
  }
}`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,N,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var j,L,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(L=m.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var _,z,k;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Graisses',
  parameters: componentSource("import { Text } from 'd-ui';", \`<Text weight="regular">regular</Text>
<Text weight="medium">medium</Text>
<Text weight="semibold">semibold</Text>\`),
  render: (_, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex max-w-prose flex-col gap-3">
        <Text weight="regular">{copy.weightRegular}</Text>
        <Text weight="medium">{copy.weightMedium}</Text>
        <Text weight="semibold">{copy.weightSemibold}</Text>
      </div>;
  }
}`,...(k=(z=x.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var D,V,O;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Couleurs',
  parameters: componentSource("import { Text } from 'd-ui';", \`<Text>
    Voici un mot <Text as="span" color="brand">coloré</Text> dans la phrase.
</Text>
<Text color="danger">Danger</Text>
<div className="bg-fg rounded-md px-3 py-2">
    <Text color="light">Clair</Text>
</div>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = typographyCopy(locale);
    const colors = colorCopy(locale);
    return <div className="flex max-w-prose flex-col gap-3">
        <Text>
          {copy.colorBefore}{' '}
          <Text as="span" color="brand">
            {copy.colorEmphasis}
          </Text>{' '}
          {copy.colorAfter}
        </Text>
        {TEXT_COLORS.map(color => {
        const sample = <Text as="span" color={color}>
              {colors[color]}
            </Text>;
        if (color === 'light') {
          return <div key={color} className="bg-fg rounded-md px-3 py-2">
                {sample}
              </div>;
        }
        return <div key={color}>{sample}</div>;
      })}
      </div>;
  }
}`,...(O=(V=u.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var R,W,A;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Variantes de couleur',
  parameters: componentSource("import { Text } from 'd-ui';", \`<Text color="brand" colorVariant="D2">D2</Text>
<Text color="brand">N</Text>
<Text color="brand" colorVariant="L2">L2</Text>\`),
  render: () => <div className="flex max-w-prose flex-wrap items-baseline gap-x-4 gap-y-2">
      {TEXT_COLOR_VARIANTS.map(variant => <Text key={variant} as="span" color="brand" colorVariant={variant}>
          {variant}
        </Text>)}
    </div>
}`,...(A=(W=T.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var E,M,q;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Retour à la ligne et débordement',
  parameters: componentSource("import { Text } from 'd-ui';", \`<div className="max-w-[180px] overflow-hidden">
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
</div>
<div className="max-w-[180px] overflow-hidden">
    <Text noWrap>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
</div>
<div className="max-w-[180px] overflow-hidden">
    <Text truncate>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
</div>
<div className="max-w-[180px] overflow-hidden">
    <Text truncate={{ lines: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
</div>\`),
  render: (_, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    const samples = [{
      key: 'default',
      label: copy.wrapDefault,
      props: {}
    }, {
      key: 'nowrap',
      label: copy.wrapNoWrap,
      props: {
        noWrap: true as const
      }
    }, {
      key: 'truncate',
      label: copy.wrapTruncate,
      props: {
        truncate: true as const
      }
    }, {
      key: 'multiline',
      label: copy.wrapTruncateMultiline,
      props: {
        truncate: {
          lines: 2
        }
      }
    }];
    return <div className="flex flex-wrap gap-8">
        {samples.map(({
        key,
        label,
        props
      }) => <div key={key} className="max-w-[180px] overflow-hidden">
            <Text as="span" size="caption" tone="muted" className="mb-1 block">
              {label}
            </Text>
            <Text {...props}>{copy.wrapSample}</Text>
          </div>)}
      </div>;
  }
}`,...(q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const F=["Default","Sizes","Tones","Weights","Colors","ColorVariants","WrapAndOverflow"],U=Object.freeze(Object.defineProperty({__proto__:null,ColorVariants:T,Colors:u,Default:p,Sizes:d,Tones:m,Weights:x,WrapAndOverflow:g,__namedExportsOrder:F,default:I},Symbol.toStringTag,{value:"Module"}));export{u as C,p as D,d as S,U as T,x as W,m as a,T as b,g as c};
