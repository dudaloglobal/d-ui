import{e as o,d as c,j as s,r as O}from"./iframe-C__29WIa.js";import{c as q}from"./arg-types-DvfBQmdr.js";import{c as t}from"./docs-source-C_O40UCi.js";import{I as G}from"./Icon-Dz6y32Cy.js";import{B as r}from"./Badge-C9IYwQjj.js";import{F as H}from"./CheckIcon-BeinONxc.js";const d="import { Badge, Icon } from 'd-ui';",M=["default","success","warning","danger","info","neutral"],J={title:"Components/Badge",component:r,argTypes:q},i={name:"Par défaut",args:{variant:"default"},parameters:t(d,"<Badge>Nouveau</Badge>"),render:(a,{globals:n})=>{const e=o(c(n.locale));return s.jsx(r,{...a,children:e.defaultLabel})}},g={name:"Variantes",parameters:t(d,`<Badge variant="default">Nouveau</Badge>
<Badge variant="success">Publié</Badge>
<Badge variant="warning">Brouillon</Badge>
<Badge variant="danger">Archivé</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="neutral">Neutre</Badge>`),render:(a,{globals:n})=>{const e=o(c(n.locale)),f={default:e.defaultLabel,success:e.success,warning:e.warning,danger:e.danger,info:e.info,neutral:e.neutral};return s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:M.map(l=>O.createElement(r,{...a,key:l,variant:l},f[l]))})}},p={name:"Apparences",parameters:t(d,`<Badge appearance="soft">Nouveau</Badge>
<Badge appearance="solid">Nouveau</Badge>
<Badge appearance="outline">Nouveau</Badge>`),render:(a,{globals:n})=>{const e=o(c(n.locale)),f=["soft","solid","outline"],l={soft:e.soft,solid:e.solid,outline:e.outline};return s.jsx("div",{className:"flex flex-col gap-3",children:f.map(b=>s.jsx("div",{className:"flex flex-wrap items-center gap-2",children:M.map(y=>O.createElement(r,{...a,key:y,appearance:b,variant:y},l[b]))},b))})}},u={name:"Tailles",parameters:t(d,`<Badge size="sm">Nouveau</Badge>
<Badge size="md">Nouveau</Badge>
<Badge size="lg">Nouveau</Badge>`),render:(a,{globals:n})=>{const e=o(c(n.locale));return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(r,{...a,size:"sm",children:e.defaultLabel}),s.jsx(r,{...a,size:"md",children:e.defaultLabel}),s.jsx(r,{...a,size:"lg",children:e.defaultLabel})]})}},m={name:"Avec icône",parameters:t(d,`<Badge variant="success" icon={<Icon as={CheckIcon} size="sm" />}>
    Publié
</Badge>`),render:(a,{globals:n})=>{const e=o(c(n.locale));return s.jsx(r,{...a,variant:"success",icon:s.jsx(G,{as:H,size:"sm"}),children:e.success})}},B={name:"Avec point",parameters:t(d,`<Badge variant="success" dot>
    Publié
</Badge>`),render:(a,{globals:n})=>{const e=o(c(n.locale));return s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(r,{...a,variant:"success",dot:!0,children:e.success}),s.jsx(r,{...a,variant:"warning",dot:!0,children:e.warning}),s.jsx(r,{...a,variant:"danger",dot:!0,children:e.danger})]})}},v={name:"Fermable",parameters:t(d,`<Badge dismissible dismissLabel="Retirer" onDismiss={() => {}}>
    Nouveau
</Badge>`),render:(a,{globals:n})=>{const e=o(c(n.locale));return s.jsx(r,{...a,dismissible:!0,dismissLabel:e.dismiss,variant:"neutral",children:e.defaultLabel})}};var x,N,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(N=i.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var S,h,w;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(h=g.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var A,j,z;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var I,C,D;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importBadge, \`<Badge size="sm">Nouveau</Badge>
<Badge size="md">Nouveau</Badge>
<Badge size="lg">Nouveau</Badge>\`),
  render: (args, {
    globals
  }) => {
    const copy = badgeCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-2">
        <Badge {...args} size="sm">
          {copy.defaultLabel}
        </Badge>
        <Badge {...args} size="md">
          {copy.defaultLabel}
        </Badge>
        <Badge {...args} size="lg">
          {copy.defaultLabel}
        </Badge>
      </div>;
  }
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var P,R,V;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var k,T,_;B.parameters={...B.parameters,docs:{...(k=B.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(T=B.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var E,W,F;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(W=v.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const K=["Default","Variants","Appearances","Sizes","WithIcon","WithDot","Dismissible"],ee=Object.freeze(Object.defineProperty({__proto__:null,Appearances:p,Default:i,Dismissible:v,Sizes:u,Variants:g,WithDot:B,WithIcon:m,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{p as A,ee as B,i as D,u as S,g as V,m as W,B as a,v as b};
