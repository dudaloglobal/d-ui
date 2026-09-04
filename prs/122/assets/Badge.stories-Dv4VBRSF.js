import{e as c,d as t,j as s,r as y}from"./iframe-CwN-tBdP.js";import{c as H}from"./arg-types-OipRHc-K.js";import{c as d}from"./docs-source-C_O40UCi.js";import{I as J}from"./Icon-Ce-yi8vw.js";import{B as n}from"./Badge-CuNrIRvR.js";import{U as K,a as Q}from"./uiScale-XvgKbea-.js";import{F as X}from"./CheckIcon-CXcyIWOT.js";const l="import { Badge, Icon } from 'd-ui';",G=["default","success","warning","danger","info","neutral"],Y={title:"Components/Badge",component:n,argTypes:H},g={name:"Par défaut",args:{variant:"default"},parameters:d(l,"<Badge>Nouveau</Badge>"),render:(a,{globals:r})=>{const e=c(t(r.locale));return s.jsx(n,{...a,children:e.defaultLabel})}},p={name:"Variantes",parameters:d(l,`<Badge variant="default">Nouveau</Badge>
<Badge variant="success">Publié</Badge>
<Badge variant="warning">Brouillon</Badge>
<Badge variant="danger">Archivé</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="neutral">Neutre</Badge>`),render:(a,{globals:r})=>{const e=c(t(r.locale)),o={default:e.defaultLabel,success:e.success,warning:e.warning,danger:e.danger,info:e.info,neutral:e.neutral};return s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:G.map(i=>y.createElement(n,{...a,key:i,variant:i},o[i]))})}},u={name:"Apparences",parameters:d(l,`<Badge appearance="soft">Nouveau</Badge>
<Badge appearance="solid">Nouveau</Badge>
<Badge appearance="outline">Nouveau</Badge>`),render:(a,{globals:r})=>{const e=c(t(r.locale)),o=["soft","solid","outline"],i={soft:e.soft,solid:e.solid,outline:e.outline};return s.jsx("div",{className:"flex flex-col gap-3",children:o.map(x=>s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:G.map(N=>y.createElement(n,{...a,key:N,appearance:x,variant:N},i[x]))},x))})}},m={name:"Tailles",parameters:d(l,`<Badge size="xxs">Nouveau</Badge>
<Badge size="s">Nouveau</Badge>
<Badge size="m">Nouveau</Badge>
<Badge size="xl">Nouveau</Badge>`),render:(a,{globals:r})=>{const e=c(t(r.locale));return s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:Q.map(o=>y.createElement(n,{...a,key:o,size:o},e.defaultLabel))})}},B={name:"Couleurs",parameters:d(l,`<Badge color="brand">Nouveau</Badge>
<Badge color="success">Nouveau</Badge>
<Badge color="warning">Nouveau</Badge>`),render:(a,{globals:r})=>{const e=c(t(r.locale));return s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:K.map(o=>y.createElement(n,{...a,key:o,color:o},e.defaultLabel))})}},v={name:"Avec icône",parameters:d(l,`<Badge variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
    Publié
</Badge>`),render:(a,{globals:r})=>{const e=c(t(r.locale));return s.jsx(n,{...a,variant:"success",icon:s.jsx(J,{as:X,size:"sm"}),children:e.success})}},f={name:"Avec point",parameters:d(l,`<Badge variant="success" dot>
    Publié
</Badge>`),render:(a,{globals:r})=>{const e=c(t(r.locale));return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(n,{...a,variant:"success",dot:!0,children:e.success}),s.jsx(n,{...a,variant:"warning",dot:!0,children:e.warning}),s.jsx(n,{...a,variant:"danger",dot:!0,children:e.danger})]})}},b={name:"Fermable",parameters:d(l,`<Badge dismissible dismissLabel="Retirer" onDismiss={() => {}}>
    Nouveau
</Badge>`),render:(a,{globals:r})=>{const e=c(t(r.locale));return s.jsx(n,{...a,dismissible:!0,dismissLabel:e.dismiss,variant:"neutral",children:e.defaultLabel})}};var S,L,w;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    variant: 'default'
  },
  parameters: componentSource(importBadge, '<Badge>Nouveau</Badge>'),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <Badge {...args}>{copy.defaultLabel}</Badge>;
  }
}`,...(w=(L=g.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var I,h,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Variantes',
  parameters: componentSource(importBadge, \`<Badge variant="default">Nouveau</Badge>
<Badge variant="success">Publié</Badge>
<Badge variant="warning">Brouillon</Badge>
<Badge variant="danger">Archivé</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="neutral">Neutre</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    const labels: Record<BadgeVariant, string> = {
      default: copy.defaultLabel,
      success: copy.success,
      warning: copy.warning,
      danger: copy.danger,
      info: copy.info,
      neutral: copy.neutral
    };
    return <div className="flex flex-wrap items-center gap-2">
        {VARIANTS.map(variant => <Badge {...args} key={variant} variant={variant}>
            {labels[variant]}
          </Badge>)}
      </div>;
  }
}`,...(A=(h=p.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var C,z,j;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Apparences',
  parameters: componentSource(importBadge, \`<Badge appearance="soft">Nouveau</Badge>
<Badge appearance="solid">Nouveau</Badge>
<Badge appearance="outline">Nouveau</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    const appearances: BadgeAppearance[] = ['soft', 'solid', 'outline'];
    const labels: Record<BadgeAppearance, string> = {
      soft: copy.soft,
      solid: copy.solid,
      outline: copy.outline
    };
    return <div className="flex flex-col gap-3">
        {appearances.map(appearance => <div key={appearance} className="flex flex-wrap items-center gap-2">
            {VARIANTS.map(variant => <Badge {...args} key={variant} appearance={appearance} variant={variant}>
                {labels[appearance]}
              </Badge>)}
          </div>)}
      </div>;
  }
}`,...(j=(z=u.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var k,R,_;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importBadge, \`<Badge size="xxs">Nouveau</Badge>
<Badge size="s">Nouveau</Badge>
<Badge size="m">Nouveau</Badge>
<Badge size="xl">Nouveau</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-2">
        {UI_SIZES.map(size => <Badge {...args} key={size} size={size}>
            {copy.defaultLabel}
          </Badge>)}
      </div>;
  }
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var D,E,P;B.parameters={...B.parameters,docs:{...(D=B.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Couleurs',
  parameters: componentSource(importBadge, \`<Badge color="brand">Nouveau</Badge>
<Badge color="success">Nouveau</Badge>
<Badge color="warning">Nouveau</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-2">
        {UI_COLORS.map(color => <Badge {...args} key={color} color={color}>
            {copy.defaultLabel}
          </Badge>)}
      </div>;
  }
}`,...(P=(E=B.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var V,T,O;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Avec icône',
  parameters: componentSource(importBadge, \`<Badge variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
    Publié
</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <Badge {...args} variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
        {copy.success}
      </Badge>;
  }
}`,...(O=(T=v.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var U,W,F;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Avec point',
  parameters: componentSource(importBadge, \`<Badge variant="success" dot>
    Publié
</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-2">
        <Badge {...args} variant="success" dot>
          {copy.success}
        </Badge>
        <Badge {...args} variant="warning" dot>
          {copy.warning}
        </Badge>
        <Badge {...args} variant="danger" dot>
          {copy.danger}
        </Badge>
      </div>;
  }
}`,...(F=(W=f.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var Z,M,q;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Fermable',
  parameters: componentSource(importBadge, \`<Badge dismissible dismissLabel="Retirer" onDismiss={() => {}}>
    Nouveau
</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <Badge {...args} dismissible dismissLabel={copy.dismiss} variant="neutral">
        {copy.defaultLabel}
      </Badge>;
  }
}`,...(q=(M=b.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const $=["Default","Variants","Appearances","Sizes","Colors","WithIcon","WithDot","Dismissible"],te=Object.freeze(Object.defineProperty({__proto__:null,Appearances:u,Colors:B,Default:g,Dismissible:b,Sizes:m,Variants:p,WithDot:f,WithIcon:v,__namedExportsOrder:$,default:Y},Symbol.toStringTag,{value:"Module"}));export{u as A,te as B,B as C,g as D,m as S,p as V,v as W,f as a,b};
