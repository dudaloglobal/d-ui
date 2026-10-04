import{t as c,d as p,j as a}from"./iframe-gTeUjK4u.js";import{i as z}from"./arg-types-CcAGxubR.js";import{c as t}from"./docs-source-C_O40UCi.js";import{H as l}from"./Heading-D2LgZBIh.js";const N={title:"Components/Heading",component:l,argTypes:z,args:{level:2,children:"Parcours d’apprentissage"}},r={name:"Par défaut",parameters:t("import { Heading } from '@dudaloglobal/d-ui';","<Heading level={2}>Parcours d’apprentissage</Heading>"),render:(n,{globals:o})=>{const e=c(p(o.locale));return a.jsx(l,{...n,children:e.heading})}},d={name:"Niveaux",parameters:t("import { Heading } from '@dudaloglobal/d-ui';",`<Heading level={1}>Niveau 1</Heading>
<Heading level={2}>Niveau 2</Heading>
<Heading level={3}>Niveau 3</Heading>`),render:(n,{globals:o})=>{const e=c(p(o.locale));return a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(l,{level:1,children:e.level1}),a.jsx(l,{level:2,children:e.level2}),a.jsx(l,{level:3,children:e.level3}),a.jsx(l,{level:4,children:e.level4})]})}},s={name:"Taille découplée",parameters:t("import { Heading } from '@dudaloglobal/d-ui';",`<Heading level={2} size="display">
  Titre visuellement large
</Heading>`),render:(n,{globals:o})=>{const e=c(p(o.locale));return a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(l,{level:2,size:"display",children:e.sizeDecoupledDisplay}),a.jsx(l,{level:1,size:"subtitle",children:e.sizeDecoupledSubtitle})]})}},i={name:"Gras",parameters:t("import { Heading } from '@dudaloglobal/d-ui';","<Heading level={2} bold>Parcours d’apprentissage</Heading>"),render:(n,{globals:o})=>{const e=c(p(o.locale));return a.jsx(l,{level:2,bold:!0,children:e.heading})}};var g,u,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { Heading } from '@dudaloglobal/d-ui';", '<Heading level={2}>Parcours d’apprentissage</Heading>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Heading {...args}>{copy.heading}</Heading>;
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,H,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Niveaux',
  parameters: componentSource("import { Heading } from '@dudaloglobal/d-ui';", \`<Heading level={1}>Niveau 1</Heading>
<Heading level={2}>Niveau 2</Heading>
<Heading level={3}>Niveau 3</Heading>\`),
  render: (_, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-3">
        <Heading level={1}>{copy.level1}</Heading>
        <Heading level={2}>{copy.level2}</Heading>
        <Heading level={3}>{copy.level3}</Heading>
        <Heading level={4}>{copy.level4}</Heading>
      </div>;
  }
}`,...(y=(H=d.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};var b,f,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Taille découplée',
  parameters: componentSource("import { Heading } from '@dudaloglobal/d-ui';", \`<Heading level={2} size="display">
  Titre visuellement large
</Heading>\`),
  render: (_, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-3">
        <Heading level={2} size="display">
          {copy.sizeDecoupledDisplay}
        </Heading>
        <Heading level={1} size="subtitle">
          {copy.sizeDecoupledSubtitle}
        </Heading>
      </div>;
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,S,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Gras',
  parameters: componentSource("import { Heading } from '@dudaloglobal/d-ui';", '<Heading level={2} bold>Parcours d’apprentissage</Heading>'),
  render: (_, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Heading level={2} bold>
        {copy.heading}
      </Heading>;
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const _=["Default","Levels","SizeDecoupledFromLevel","Bold"],C=Object.freeze(Object.defineProperty({__proto__:null,Bold:i,Default:r,Levels:d,SizeDecoupledFromLevel:s,__namedExportsOrder:_,default:N},Symbol.toStringTag,{value:"Module"}));export{i as B,r as D,C as H,d as L,s as S};
