import{j as a,f as S,t as o,d}from"./iframe-D4wExxT_.js";import{k as N,c}from"./docs-source-Cj4_yT6J.js";const j={display:"text-4xl tracking-tight",title:"text-2xl",subtitle:"text-xl",body:"text-base"},_={1:"display",2:"title",3:"subtitle",4:"body",5:"body",6:"body"};function l({level:r,size:i,className:e,...b}){const h=`h${r}`,z=i??_[r];return a.jsx(h,{className:S("font-bold text-fg text-balance",j[z],e),...b})}l.__docgenInfo={description:`Titre du design system.

Le niveau sémantique et la taille visuelle sont deux props distinctes :
coupler les deux pousse à sauter des niveaux pour obtenir la bonne taille,
ce qui casse la navigation par titres (WCAG 1.3.1).`,methods:[],displayName:"Heading",props:{level:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Niveau sémantique. Rend un vrai `h1`…`h6` : il porte la structure du document."},size:{required:!1,tsType:{name:"union",raw:"'display' | 'title' | 'subtitle' | 'body'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'title'"},{name:"literal",value:"'subtitle'"},{name:"literal",value:"'body'"}]},description:"Taille visuelle, indépendante du niveau.\n\nUn `h2` peut avoir l'allure d'un `display` sans casser la hiérarchie.\nPar défaut, la taille suit le niveau."}}};const D={title:"Components/Heading",component:l,argTypes:N,args:{level:2,children:"Parcours d’apprentissage"}},s={name:"Par défaut",parameters:c("import { Heading } from 'd-ui';","<Heading level={2}>Parcours d’apprentissage</Heading>"),render:(r,{globals:i})=>{const e=o(d(i.locale));return a.jsx(l,{...r,children:e.heading})}},n={name:"Niveaux",parameters:c("import { Heading } from 'd-ui';",`<Heading level={1}>Niveau 1</Heading>
<Heading level={2}>Niveau 2</Heading>
<Heading level={3}>Niveau 3</Heading>`),render:(r,{globals:i})=>{const e=o(d(i.locale));return a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(l,{level:1,children:e.level1}),a.jsx(l,{level:2,children:e.level2}),a.jsx(l,{level:3,children:e.level3}),a.jsx(l,{level:4,children:e.level4})]})}},t={name:"Taille découplée",parameters:c("import { Heading } from 'd-ui';",`<Heading level={2} size="display">
  Titre visuellement large
</Heading>`),render:(r,{globals:i})=>{const e=o(d(i.locale));return a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(l,{level:2,size:"display",children:e.sizeDecoupledDisplay}),a.jsx(l,{level:1,size:"subtitle",children:e.sizeDecoupledSubtitle})]})}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { Heading } from 'd-ui';", '<Heading level={2}>Parcours d’apprentissage</Heading>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Heading {...args}>{copy.heading}</Heading>;
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,v,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var H,x,f;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const L=["Default","Levels","SizeDecoupledFromLevel"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Levels:n,SizeDecoupledFromLevel:t,__namedExportsOrder:L,default:D},Symbol.toStringTag,{value:"Module"}));export{s as D,P as H,n as L,t as S};
