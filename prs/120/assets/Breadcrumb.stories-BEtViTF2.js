import{r as u,j as e,h as x,Z as g,d as y}from"./iframe-B7t-M21q.js";import{o as z}from"./arg-types-YVnHkuEO.js";import{c as j}from"./docs-source-C_O40UCi.js";import{L as A}from"./Link-MgkC_Lm7.js";const N={sm:"text-sm",md:"text-base",lg:"text-lg"};function T(){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M6 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function s({label:a="Breadcrumb",size:c="md",className:r,children:n}){const o=u.Children.toArray(n).filter(u.isValidElement);return e.jsx("nav",{"aria-label":a,className:x("font-sans",N[c],r),children:e.jsx("ol",{className:"m-0 flex list-none flex-wrap items-center gap-1 p-0",children:o.map((i,d)=>{const q=d===o.length-1;return e.jsxs("li",{className:"inline-flex items-center gap-1",children:[d>0?e.jsx("span",{className:"inline-flex text-fg/50","aria-hidden":"true",children:e.jsx(T,{})}):null,u.cloneElement(i,{current:q})]},i.key??d)})})})}function m({href:a,current:c=!1,className:r,children:n}){return c||!a?e.jsx("span",{"aria-current":c?"page":void 0,className:x(c?"font-medium text-fg":"text-fg/70",r),children:n}):e.jsx(A,{href:a,className:r,children:n})}s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{label:{required:!1,tsType:{name:"string"},description:"Nom accessible du `nav`. Fallback anglais si omis.",defaultValue:{value:"'Breadcrumb'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{href:{required:!1,tsType:{name:"string"},description:""},current:{required:!1,tsType:{name:"boolean"},description:`Posé automatiquement sur le dernier item.
La page courante n’est pas un lien.`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const v="import { Breadcrumb, BreadcrumbItem } from 'd-ui';",$={title:"Components/Breadcrumb",component:s,args:{children:e.jsx("span",{})},argTypes:z},t={name:"Par défaut",parameters:j(v,`<Breadcrumb label="Fil d’Ariane">
    <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
    <BreadcrumbItem href="/cours">Cours</BreadcrumbItem>
    <BreadcrumbItem>Mathématiques</BreadcrumbItem>
</Breadcrumb>`),render:(a,{globals:c})=>{const r=g(y(c.locale));return e.jsxs(s,{...a,label:r.label,children:[e.jsx(m,{href:"/",children:r.home}),e.jsx(m,{href:"/cours",children:r.courses}),e.jsx(m,{children:r.math})]})}},l={name:"Tailles",parameters:j(v,`<>
    <Breadcrumb size="sm" label="Fil d’Ariane">
        <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
        <BreadcrumbItem>Mathématiques</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb size="md" label="Fil d’Ariane">
        <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
        <BreadcrumbItem>Mathématiques</BreadcrumbItem>
    </Breadcrumb>
</>`),render:(a,{globals:c})=>{const r=g(y(c.locale));return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{...a,size:"sm",label:`${r.label} (${r.small})`,children:[e.jsx(m,{href:"/",children:r.home}),e.jsx(m,{children:r.math})]}),e.jsxs(s,{...a,size:"md",label:`${r.label} (${r.medium})`,children:[e.jsx(m,{href:"/",children:r.home}),e.jsx(m,{children:r.math})]}),e.jsxs(s,{...a,size:"lg",label:`${r.label} (${r.large})`,children:[e.jsx(m,{href:"/",children:r.home}),e.jsx(m,{children:r.math})]})]})}};var b,p,B;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(p=t.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var h,f,I;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(f=l.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const S=["Default","Sizes"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Sizes:l,__namedExportsOrder:S,default:$},Symbol.toStringTag,{value:"Module"}));export{k as B,t as D,l as S};
