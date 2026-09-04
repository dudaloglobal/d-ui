import{w as t,d as l,j as r,r as x}from"./iframe-C18N9SQO.js";import{t as X}from"./arg-types-C0FEJ_j7.js";import{c as i}from"./docs-source-C_O40UCi.js";import{U as Y,a as $}from"./uiScale-DBauGOvS.js";import{I as aa}from"./Icon-xcf1om_h.js";import{T as n,a as ea}from"./Tag-DhVtDNPT.js";import{F as ra}from"./CheckIcon-AvskCfIK.js";const g="import { Icon, Tag, TagGroup } from 'd-ui';",Q=["default","success","warning","danger","info","neutral"],sa={title:"Components/Tag",component:n,argTypes:X},p={name:"Par défaut",args:{variant:"default"},parameters:i(g,"<Tag>Nouveau</Tag>"),render:(e,{globals:s})=>{const a=t(l(s.locale));return r.jsx(n,{...e,children:a.defaultLabel})}},u={name:"Variantes",parameters:i(g,`<Tag variant="default">Nouveau</Tag>
<Tag variant="success">Publié</Tag>
<Tag variant="warning">Brouillon</Tag>
<Tag variant="danger">Archivé</Tag>
<Tag variant="info">Info</Tag>
<Tag variant="neutral">Neutre</Tag>`),render:(e,{globals:s})=>{const a=t(l(s.locale)),o={default:a.defaultLabel,success:a.success,warning:a.warning,danger:a.danger,info:a.info,neutral:a.neutral};return r.jsx("div",{className:"flex flex-wrap items-center gap-2",children:Q.map(c=>x.createElement(n,{...e,key:c,variant:c},o[c]))})}},m={name:"Apparences",parameters:i(g,`<Tag appearance="soft">Nouveau</Tag>
<Tag appearance="solid">Nouveau</Tag>
<Tag appearance="outline">Nouveau</Tag>`),render:(e,{globals:s})=>{const a=t(l(s.locale)),o=["soft","solid","outline"],c={soft:a.soft,solid:a.solid,outline:a.outline};return r.jsx("div",{className:"flex flex-col gap-3",children:o.map(N=>r.jsx("div",{className:"flex flex-wrap items-center gap-2",children:Q.map(S=>x.createElement(n,{...e,key:S,appearance:N,variant:S},c[N]))},N))})}},d={name:"Tailles",parameters:i(g,`<Tag size="xxs">Nouveau</Tag>
<Tag size="s">Nouveau</Tag>
<Tag size="m">Nouveau</Tag>
<Tag size="xl">Nouveau</Tag>`),render:(e,{globals:s})=>{const a=t(l(s.locale));return r.jsx("div",{className:"flex flex-wrap items-center gap-2",children:$.map(o=>x.createElement(n,{...e,key:o,size:o},a.defaultLabel))})}},T={name:"Couleurs",parameters:i(g,`<Tag color="brand">Nouveau</Tag>
<Tag color="success">Nouveau</Tag>
<Tag color="warning">Nouveau</Tag>`),render:(e,{globals:s})=>{const a=t(l(s.locale));return r.jsx("div",{className:"flex flex-wrap items-center gap-2",children:Y.map(o=>x.createElement(n,{...e,key:o,color:o},a.defaultLabel))})}},v={name:"Avec icône",parameters:i(g,`<Tag variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
    Publié
</Tag>`),render:(e,{globals:s})=>{const a=t(l(s.locale));return r.jsx(n,{...e,variant:"success",icon:r.jsx(aa,{as:ra,size:"sm"}),children:a.success})}},b={name:"Avec point",parameters:i(g,`<Tag variant="success" dot>
    Publié
</Tag>`),render:(e,{globals:s})=>{const a=t(l(s.locale));return r.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.jsx(n,{...e,variant:"success",dot:!0,children:a.success}),r.jsx(n,{...e,variant:"warning",dot:!0,children:a.warning}),r.jsx(n,{...e,variant:"danger",dot:!0,children:a.danger})]})}},y={name:"Fermable",parameters:i(g,`<Tag dismissible dismissLabel="Retirer" onDismiss={() => {}}>
    Nouveau
</Tag>`),render:(e,{globals:s})=>{const a=t(l(s.locale)),[o,c]=x.useState(!0);return o?r.jsx(n,{...e,dismissible:!0,dismissLabel:a.dismiss,variant:"neutral",onDismiss:()=>c(!1),children:a.defaultLabel}):r.jsx("span",{})}},f={name:"Groupe",parameters:i(g,`<TagGroup max={3} label="Filtres">
    <Tag>Algèbre</Tag>
    <Tag>Géométrie</Tag>
    <Tag>Analyse</Tag>
    <Tag>Probabilités</Tag>
</TagGroup>`),render:(e,{globals:s})=>{const a=t(l(s.locale)),{children:o,...c}=e;return r.jsxs(ea,{...c,max:3,label:a.groupLabel,children:[r.jsx(n,{children:a.algebra},"algebra"),r.jsx(n,{children:a.geometry},"geometry"),r.jsx(n,{children:a.analysis},"analysis"),r.jsx(n,{children:a.probability},"probability")]})}};var h,L,w;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    variant: 'default'
  },
  parameters: componentSource(importTag, '<Tag>Nouveau</Tag>'),
  render: (args, {
    globals
  }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    return <Tag {...args}>{copy.defaultLabel}</Tag>;
  }
}`,...(w=(L=p.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,j,I;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Variantes',
  parameters: componentSource(importTag, \`<Tag variant="default">Nouveau</Tag>
<Tag variant="success">Publié</Tag>
<Tag variant="warning">Brouillon</Tag>
<Tag variant="danger">Archivé</Tag>
<Tag variant="info">Info</Tag>
<Tag variant="neutral">Neutre</Tag>\`),
  render: (args, {
    globals
  }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    const labels: Record<TagVariant, string> = {
      default: copy.defaultLabel,
      success: copy.success,
      warning: copy.warning,
      danger: copy.danger,
      info: copy.info,
      neutral: copy.neutral
    };
    return <div className="flex flex-wrap items-center gap-2">
        {VARIANTS.map(variant => <Tag {...args} key={variant} variant={variant}>
            {labels[variant]}
          </Tag>)}
      </div>;
  }
}`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,z,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Apparences',
  parameters: componentSource(importTag, \`<Tag appearance="soft">Nouveau</Tag>
<Tag appearance="solid">Nouveau</Tag>
<Tag appearance="outline">Nouveau</Tag>\`),
  render: (args, {
    globals
  }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    const appearances: TagAppearance[] = ['soft', 'solid', 'outline'];
    const labels: Record<TagAppearance, string> = {
      soft: copy.soft,
      solid: copy.solid,
      outline: copy.outline
    };
    return <div className="flex flex-col gap-3">
        {appearances.map(appearance => <div key={appearance} className="flex flex-wrap items-center gap-2">
            {VARIANTS.map(variant => <Tag {...args} key={variant} appearance={appearance} variant={variant}>
                {labels[appearance]}
              </Tag>)}
          </div>)}
      </div>;
  }
}`,...(k=(z=m.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var G,_,D;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importTag, \`<Tag size="xxs">Nouveau</Tag>
<Tag size="s">Nouveau</Tag>
<Tag size="m">Nouveau</Tag>
<Tag size="xl">Nouveau</Tag>\`),
  render: (args, {
    globals
  }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-2">
        {UI_SIZES.map(size => <Tag {...args} key={size} size={size}>
            {copy.defaultLabel}
          </Tag>)}
      </div>;
  }
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var P,R,O;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Couleurs',
  parameters: componentSource(importTag, \`<Tag color="brand">Nouveau</Tag>
<Tag color="success">Nouveau</Tag>
<Tag color="warning">Nouveau</Tag>\`),
  render: (args, {
    globals
  }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-2">
        {UI_COLORS.map(color => <Tag {...args} key={color} color={color}>
            {copy.defaultLabel}
          </Tag>)}
      </div>;
  }
}`,...(O=(R=T.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var E,V,F;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Avec icône',
  parameters: componentSource(importTag, \`<Tag variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
    Publié
</Tag>\`),
  render: (args, {
    globals
  }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    return <Tag {...args} variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
        {copy.success}
      </Tag>;
  }
}`,...(F=(V=v.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var U,W,B;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Avec point',
  parameters: componentSource(importTag, \`<Tag variant="success" dot>
    Publié
</Tag>\`),
  render: (args, {
    globals
  }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-2">
        <Tag {...args} variant="success" dot>
          {copy.success}
        </Tag>
        <Tag {...args} variant="warning" dot>
          {copy.warning}
        </Tag>
        <Tag {...args} variant="danger" dot>
          {copy.danger}
        </Tag>
      </div>;
  }
}`,...(B=(W=b.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var Z,M,q;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Fermable',
  parameters: componentSource(importTag, \`<Tag dismissible dismissLabel="Retirer" onDismiss={() => {}}>
    Nouveau
</Tag>\`),
  render: (args, {
    globals
  }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    const [open, setOpen] = useState(true);
    if (!open) return <span />;
    return <Tag {...args} dismissible dismissLabel={copy.dismiss} variant="neutral" onDismiss={() => setOpen(false)}>
        {copy.defaultLabel}
      </Tag>;
  }
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var H,J,K;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Groupe',
  parameters: componentSource(importTag, \`<TagGroup max={3} label="Filtres">
    <Tag>Algèbre</Tag>
    <Tag>Géométrie</Tag>
    <Tag>Analyse</Tag>
    <Tag>Probabilités</Tag>
</TagGroup>\`),
  render: (args, {
    globals
  }) => {
    const copy = tagCopy(docsLocale(globals.locale));
    const {
      children: _children,
      ...rest
    } = args;
    return <TagGroup {...rest} max={3} label={copy.groupLabel}>
        <Tag key="algebra">{copy.algebra}</Tag>
        <Tag key="geometry">{copy.geometry}</Tag>
        <Tag key="analysis">{copy.analysis}</Tag>
        <Tag key="probability">{copy.probability}</Tag>
      </TagGroup>;
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const na=["Default","Variants","Appearances","Sizes","Colors","WithIcon","WithDot","Dismissible","Group"],ua=Object.freeze(Object.defineProperty({__proto__:null,Appearances:m,Colors:T,Default:p,Dismissible:y,Group:f,Sizes:d,Variants:u,WithDot:b,WithIcon:v,__namedExportsOrder:na,default:sa},Symbol.toStringTag,{value:"Module"}));export{m as A,T as C,p as D,f as G,d as S,ua as T,u as V,v as W,b as a,y as b};
