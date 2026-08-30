import{r as s,j as t,a6 as f,d as S}from"./iframe-DPMCGbXH.js";import{B as b}from"./arg-types-BT0UMpT1.js";import{c as B}from"./docs-source-C_O40UCi.js";import{B as p}from"./Button-J0p711sK.js";import{I as v}from"./Icon-Bjpz_ZUO.js";import{F as j}from"./FeedbackPlaceholder-Ck-ZmlLW.js";function z({title:o,titleId:n,...e},i){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},e),o?s.createElement("title",{id:n},o):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"}))}const x=s.forwardRef(z);function c({title:o,description:n,icon:e,illustration:i,actions:I,...h}){return t.jsx(j,{...h,title:o,description:n,icon:e,illustration:i,actions:I})}c.__docgenInfo={description:"Placeholder quand une liste ou une vue n’a pas encore de contenu.",methods:[],displayName:"EmptyState",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},illustration:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}}};const E="import { Button, EmptyState, Icon } from 'd-ui';",C={title:"Components/EmptyState",component:c,argTypes:b,args:{title:"Placeholder"}},r={name:"Par défaut",parameters:B(E,`<EmptyState
    title="Aucun devoir"
    description="Créez votre premier devoir pour commencer."
    icon={<Icon as={InboxIcon} size="lg" />}
    actions={<Button>Créer un devoir</Button>}
/>`),render:(o,{globals:n})=>{const e=f(S(n.locale));return t.jsx(c,{...o,title:e.title,description:e.description,icon:t.jsx(v,{as:x,size:"lg"}),actions:t.jsx(p,{children:e.primary})})}},a={name:"Avec actions",parameters:B(E,`<EmptyState
    title="Aucun cours"
    description="Importez un cours ou créez-en un nouveau."
    actions={
        <>
            <Button>Créer</Button>
            <Button variant="secondary">Importer</Button>
        </>
    }
/>`),render:(o,{globals:n})=>{const e=f(S(n.locale));return t.jsx(c,{...o,title:e.coursesTitle,description:e.coursesDescription,icon:t.jsx(v,{as:x,size:"lg"}),actions:t.jsxs(t.Fragment,{children:[t.jsx(p,{children:e.primary}),t.jsx(p,{variant:"secondary",children:e.secondary})]})})}};var u,m,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,y,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const A=["Default","WithActions"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithActions:a,__namedExportsOrder:A,default:C},Symbol.toStringTag,{value:"Module"}));export{r as D,N as E,a as W};
