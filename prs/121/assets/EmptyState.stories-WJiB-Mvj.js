import{r as s,a9 as g,d as S,j as e}from"./iframe-CSDJ8R1k.js";import{F as I}from"./arg-types-B_nef0fB.js";import{c as B}from"./docs-source-C_O40UCi.js";import{B as c}from"./Button-DCvfpArC.js";import{I as v}from"./Icon-CtovchWW.js";import{E as i}from"./EmptyState-C7sHga_F.js";function b({title:o,titleId:r,...t},x){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:x,"aria-labelledby":r},t),o?s.createElement("title",{id:r},o):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"}))}const E=s.forwardRef(b),f="import { Button, EmptyState, Icon } from 'd-ui';",h={title:"Components/EmptyState",component:i,argTypes:I,args:{title:"Placeholder"}},n={name:"Par défaut",parameters:B(f,`<EmptyState
    title="Aucun devoir"
    description="Créez votre premier devoir pour commencer."
    icon={<Icon as={InboxIcon} size="lg" />}
    actions={<Button>Créer un devoir</Button>}
/>`),render:(o,{globals:r})=>{const t=g(S(r.locale));return e.jsx(i,{...o,title:t.title,description:t.description,icon:e.jsx(v,{as:E,size:"lg"}),actions:e.jsx(c,{children:t.primary})})}},a={name:"Avec actions",parameters:B(f,`<EmptyState
    title="Aucun cours"
    description="Importez un cours ou créez-en un nouveau."
    actions={
        <>
            <Button>Créer</Button>
            <Button variant="secondary">Importer</Button>
        </>
    }
/>`),render:(o,{globals:r})=>{const t=g(S(r.locale));return e.jsx(i,{...o,title:t.coursesTitle,description:t.coursesDescription,icon:e.jsx(v,{as:E,size:"lg"}),actions:e.jsxs(e.Fragment,{children:[e.jsx(c,{children:t.primary}),e.jsx(c,{variant:"secondary",children:t.secondary})]})})}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importEmptyState, \`<EmptyState
    title="Aucun devoir"
    description="Créez votre premier devoir pour commencer."
    icon={<Icon as={InboxIcon} size="lg" />}
    actions={<Button>Créer un devoir</Button>}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = emptyStateCopy(docsLocale(globals.locale));
    return <EmptyState {...args} title={copy.title} description={copy.description} icon={<Icon as={InboxIcon} size="lg" />} actions={<Button>{copy.primary}</Button>} />;
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,d,y;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Avec actions',
  parameters: componentSource(importEmptyState, \`<EmptyState
    title="Aucun cours"
    description="Importez un cours ou créez-en un nouveau."
    actions={
        <>
            <Button>Créer</Button>
            <Button variant="secondary">Importer</Button>
        </>
    }
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = emptyStateCopy(docsLocale(globals.locale));
    return <EmptyState {...args} title={copy.coursesTitle} description={copy.coursesDescription} icon={<Icon as={InboxIcon} size="lg" />} actions={<>
            <Button>{copy.primary}</Button>
            <Button variant="secondary">{copy.secondary}</Button>
          </>} />;
  }
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const j=["Default","WithActions"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithActions:a,__namedExportsOrder:j,default:h},Symbol.toStringTag,{value:"Module"}));export{n as D,D as E,a as W};
