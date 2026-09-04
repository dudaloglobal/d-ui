import{e as i,d as p,j as r}from"./iframe-C18N9SQO.js";import{c as f}from"./arg-types-C0FEJ_j7.js";import{c as h}from"./docs-source-C_O40UCi.js";import{B as t,a}from"./Breadcrumb-CYweBlvS.js";const I="import { Breadcrumb, BreadcrumbItem } from 'd-ui';",y={title:"Components/Breadcrumb",component:t,args:{children:r.jsx("span",{})},argTypes:f},c={name:"Par défaut",parameters:h(I,`<Breadcrumb label="Fil d’Ariane">
    <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
    <BreadcrumbItem href="/cours">Cours</BreadcrumbItem>
    <BreadcrumbItem>Mathématiques</BreadcrumbItem>
</Breadcrumb>`),render:(m,{globals:u})=>{const e=i(p(u.locale));return r.jsxs(t,{...m,label:e.label,children:[r.jsx(a,{href:"/",children:e.home}),r.jsx(a,{href:"/cours",children:e.courses}),r.jsx(a,{children:e.math})]})}},d={name:"Tailles",parameters:h(I,`<>
    <Breadcrumb size="sm" label="Fil d’Ariane">
        <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
        <BreadcrumbItem>Mathématiques</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb size="md" label="Fil d’Ariane">
        <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
        <BreadcrumbItem>Mathématiques</BreadcrumbItem>
    </Breadcrumb>
</>`),render:(m,{globals:u})=>{const e=i(p(u.locale));return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs(t,{...m,size:"sm",label:`${e.label} (${e.small})`,children:[r.jsx(a,{href:"/",children:e.home}),r.jsx(a,{children:e.math})]}),r.jsxs(t,{...m,size:"md",label:`${e.label} (${e.medium})`,children:[r.jsx(a,{href:"/",children:e.home}),r.jsx(a,{children:e.math})]}),r.jsxs(t,{...m,size:"lg",label:`${e.label} (${e.large})`,children:[r.jsx(a,{href:"/",children:e.home}),r.jsx(a,{children:e.math})]})]})}};var s,l,o;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importBreadcrumb, \`<Breadcrumb label="Fil d’Ariane">
    <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
    <BreadcrumbItem href="/cours">Cours</BreadcrumbItem>
    <BreadcrumbItem>Mathématiques</BreadcrumbItem>
</Breadcrumb>\`),
  render: (args, {
    globals
  }) => {
    const copy = breadcrumbCopy(docsLocale(globals.locale));
    return <Breadcrumb {...args} label={copy.label}>
        <BreadcrumbItem href="/">{copy.home}</BreadcrumbItem>
        <BreadcrumbItem href="/cours">{copy.courses}</BreadcrumbItem>
        <BreadcrumbItem>{copy.math}</BreadcrumbItem>
      </Breadcrumb>;
  }
}`,...(o=(l=c.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var b,n,B;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importBreadcrumb, \`<>
    <Breadcrumb size="sm" label="Fil d’Ariane">
        <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
        <BreadcrumbItem>Mathématiques</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb size="md" label="Fil d’Ariane">
        <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
        <BreadcrumbItem>Mathématiques</BreadcrumbItem>
    </Breadcrumb>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = breadcrumbCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-4">
        <Breadcrumb {...args} size="sm" label={\`\${copy.label} (\${copy.small})\`}>
          <BreadcrumbItem href="/">{copy.home}</BreadcrumbItem>
          <BreadcrumbItem>{copy.math}</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb {...args} size="md" label={\`\${copy.label} (\${copy.medium})\`}>
          <BreadcrumbItem href="/">{copy.home}</BreadcrumbItem>
          <BreadcrumbItem>{copy.math}</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb {...args} size="lg" label={\`\${copy.label} (\${copy.large})\`}>
          <BreadcrumbItem href="/">{copy.home}</BreadcrumbItem>
          <BreadcrumbItem>{copy.math}</BreadcrumbItem>
        </Breadcrumb>
      </div>;
  }
}`,...(B=(n=d.parameters)==null?void 0:n.docs)==null?void 0:B.source}}};const x=["Default","Sizes"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Sizes:d,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{$ as B,c as D,d as S};
