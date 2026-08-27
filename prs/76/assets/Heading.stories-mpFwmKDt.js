import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{h as S,c as t}from"./docs-source-TRj_OXTg.js";import{c as N,t as d,d as c}from"./cx-BmrDAEIN.js";const j={display:"text-4xl font-bold tracking-tight",title:"text-2xl font-semibold",subtitle:"text-xl font-semibold",body:"text-base font-semibold"},_={1:"display",2:"title",3:"subtitle",4:"body",5:"body",6:"body"};function l({level:s,size:i,className:e,...b}){const h=`h${s}`,z=i??_[s];return a.jsx(h,{className:N("text-fg text-balance",j[z],e),...b})}l.__docgenInfo={description:`Titre du design system.

Le niveau sémantique et la taille visuelle sont deux props distinctes :
coupler les deux pousse à sauter des niveaux pour obtenir la bonne taille,
ce qui casse la navigation par titres (WCAG 1.3.1).`,methods:[],displayName:"Heading",props:{level:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Niveau sémantique. Rend un vrai `h1`…`h6` : il porte la structure du document."},size:{required:!1,tsType:{name:"union",raw:"'display' | 'title' | 'subtitle' | 'body'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'title'"},{name:"literal",value:"'subtitle'"},{name:"literal",value:"'body'"}]},description:"Taille visuelle, indépendante du niveau.\n\nUn `h2` peut avoir l'allure d'un `display` sans casser la hiérarchie.\nPar défaut, la taille suit le niveau."}}};const D={title:"Components/Heading",component:l,argTypes:S,args:{level:2,children:"Parcours d’apprentissage"}},r={name:"Par défaut",parameters:t("import { Heading } from 'd-ui';","<Heading level={2}>Parcours d’apprentissage</Heading>"),render:(s,{globals:i})=>{const e=d(c(i.locale));return a.jsx(l,{...s,children:e.heading})}},n={name:"Niveaux",parameters:t("import { Heading } from 'd-ui';",`<Heading level={1}>Niveau 1</Heading>
<Heading level={2}>Niveau 2</Heading>
<Heading level={3}>Niveau 3</Heading>`),render:(s,{globals:i})=>{const e=d(c(i.locale));return a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(l,{level:1,children:e.level1}),a.jsx(l,{level:2,children:e.level2}),a.jsx(l,{level:3,children:e.level3}),a.jsx(l,{level:4,children:e.level4})]})}},o={name:"Taille découplée",parameters:t("import { Heading } from 'd-ui';",`<Heading level={2} size="display">
  Titre visuellement large
</Heading>`),render:(s,{globals:i})=>{const e=d(c(i.locale));return a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(l,{level:2,size:"display",children:e.sizeDecoupledDisplay}),a.jsx(l,{level:1,size:"subtitle",children:e.sizeDecoupledSubtitle})]})}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { Heading } from 'd-ui';", '<Heading level={2}>Parcours d’apprentissage</Heading>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Heading {...args}>{copy.heading}</Heading>;
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,v,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Niveaux',
  parameters: componentSource("import { Heading } from 'd-ui';", \`<Heading level={1}>Niveau 1</Heading>
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
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var H,x,f;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Taille découplée',
  parameters: componentSource("import { Heading } from 'd-ui';", \`<Heading level={2} size="display">
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
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const L=["Default","Levels","SizeDecoupledFromLevel"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Levels:n,SizeDecoupledFromLevel:o,__namedExportsOrder:L,default:D},Symbol.toStringTag,{value:"Module"}));export{r as D,q as H,n as L,o as S};
