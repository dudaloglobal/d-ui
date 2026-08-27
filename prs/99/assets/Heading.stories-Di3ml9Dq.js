import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,g as i,m as a,n as o}from"./docs-locale-DxRsX5eR.js";import{h as s,i as c,n as l,p as u}from"./docs-source-5snetGJm.js";function d({level:e,size:t,className:n,...r}){let a=`h${e}`,o=t??m[e];return(0,f.jsx)(a,{className:i(`text-fg text-balance`,p[o],n),...r})}var f,p,m;function h(){return(h=e((()=>{f=n(),p={display:`text-4xl font-bold tracking-tight`,title:`text-2xl font-semibold`,subtitle:`text-xl font-semibold`,body:`text-base font-semibold`},m={1:`display`,2:`title`,3:`subtitle`,4:`body`,5:`body`,6:`body`},d.__docgenInfo={description:`Titre du design system.

Le niveau sémantique et la taille visuelle sont deux props distinctes :
coupler les deux pousse à sauter des niveaux pour obtenir la bonne taille,
ce qui casse la navigation par titres (WCAG 1.3.1).`,methods:[],displayName:`Heading`,props:{level:{required:!0,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:"Niveau sémantique. Rend un vrai `h1`…`h6` : il porte la structure du document."},size:{required:!1,tsType:{name:`union`,raw:`'display' | 'title' | 'subtitle' | 'body'`,elements:[{name:`literal`,value:`'display'`},{name:`literal`,value:`'title'`},{name:`literal`,value:`'subtitle'`},{name:`literal`,value:`'body'`}]},description:"Taille visuelle, indépendante du niveau.\n\nUn `h2` peut avoir l'allure d'un `display` sans casser la hiérarchie.\nPar défaut, la taille suit le niveau."}}}})))()}var g=t({Default:()=>y,Levels:()=>b,SizeDecoupledFromLevel:()=>x,__namedExportsOrder:()=>S,default:()=>v}),_,v,y,b,x,S;function C(){return(C=e((()=>{s(),c(),r(),h(),_=n(),v={title:`Components/Heading`,component:d,argTypes:u,args:{level:2,children:`Parcours d’apprentissage`}},y={name:`Par défaut`,parameters:l(`import { Heading } from 'd-ui';`,`<Heading level={2}>Parcours d’apprentissage</Heading>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,_.jsx)(d,{...e,children:n.heading})}},b={name:`Niveaux`,parameters:l(`import { Heading } from 'd-ui';`,`<Heading level={1}>Niveau 1</Heading>
<Heading level={2}>Niveau 2</Heading>
<Heading level={3}>Niveau 3</Heading>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsx)(d,{level:1,children:n.level1}),(0,_.jsx)(d,{level:2,children:n.level2}),(0,_.jsx)(d,{level:3,children:n.level3}),(0,_.jsx)(d,{level:4,children:n.level4})]})}},x={name:`Taille découplée`,parameters:l(`import { Heading } from 'd-ui';`,`<Heading level={2} size="display">
  Titre visuellement large
</Heading>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsx)(d,{level:2,size:`display`,children:n.sizeDecoupledDisplay}),(0,_.jsx)(d,{level:1,size:`subtitle`,children:n.sizeDecoupledSubtitle})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { Heading } from 'd-ui';", '<Heading level={2}>Parcours d’apprentissage</Heading>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Heading {...args}>{copy.heading}</Heading>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Levels`,`SizeDecoupledFromLevel`]})))()}export{C as a,x as i,g as n,b as r,y as t};