import{s as u,d as k,j as n}from"./iframe-CF-6NDtP.js";import{s as x}from"./arg-types--G9daUKm.js";import{c as b}from"./docs-source-C_O40UCi.js";import{S as t}from"./SkipLink-UtL9-iNm.js";const S={title:"Accessibility/SkipLink",component:t,argTypes:x,parameters:{controls:{include:["href","children","className"]}}},a={name:"Clavier",parameters:b("import { SkipLink } from '@dudaloglobal/d-ui';",`<SkipLink>Aller au contenu principal</SkipLink>
<main id="main" tabIndex={-1}>
  Contenu principal
</main>`),render:(r,{globals:i})=>{const e=u(k(i.locale));return n.jsxs("div",{className:"text-fg",children:[n.jsx(t,{...r,children:r.children??e.label}),n.jsx("p",{className:"m-0 text-sm opacity-80",children:e.hint}),n.jsx("main",{id:"main",tabIndex:-1,className:"mt-4 rounded-md border border-border p-4",children:e.main})]})}},o={name:"Cible personnalisée",args:{href:"#content"},parameters:b("import { SkipLink } from '@dudaloglobal/d-ui';",`<SkipLink href="#content">Aller au contenu</SkipLink>
<main id="content" tabIndex={-1}>
  Zone de contenu
</main>`),render:(r,{globals:i})=>{const e=u(k(i.locale));return n.jsxs("div",{className:"text-fg",children:[n.jsx(t,{...r,children:r.children??e.customLabel}),n.jsx("p",{className:"m-0 text-sm opacity-80",children:e.customHint}),n.jsx("main",{id:"content",tabIndex:-1,className:"mt-4 rounded-md border border-border p-4",children:e.customTarget})]})}},L=["Keyboard","CustomHref"];var s,c,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Clavier',
  parameters: componentSource("import { SkipLink } from '@dudaloglobal/d-ui';", \`<SkipLink>Aller au contenu principal</SkipLink>
<main id="main" tabIndex={-1}>
  Contenu principal
</main>\`),
  render: (args, {
    globals
  }) => {
    const copy = skipLinkCopy(docsLocale(globals.locale));
    return <div className="text-fg">
        <SkipLink {...args}>{args.children ?? copy.label}</SkipLink>
        <p className="m-0 text-sm opacity-80">{copy.hint}</p>
        <main id="main" tabIndex={-1} className="mt-4 rounded-md border border-border p-4">
          {copy.main}
        </main>
      </div>;
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Cible personnalisée',
  args: {
    href: '#content'
  },
  parameters: componentSource("import { SkipLink } from '@dudaloglobal/d-ui';", \`<SkipLink href="#content">Aller au contenu</SkipLink>
<main id="content" tabIndex={-1}>
  Zone de contenu
</main>\`),
  render: (args, {
    globals
  }) => {
    const copy = skipLinkCopy(docsLocale(globals.locale));
    return <div className="text-fg">
        <SkipLink {...args}>{args.children ?? copy.customLabel}</SkipLink>
        <p className="m-0 text-sm opacity-80">{copy.customHint}</p>
        <main id="content" tabIndex={-1} className="mt-4 rounded-md border border-border p-4">
          {copy.customTarget}
        </main>
      </div>;
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const N=Object.freeze(Object.defineProperty({__proto__:null,CustomHref:o,Keyboard:a,__namedExportsOrder:L,default:S},Symbol.toStringTag,{value:"Module"}));export{o as C,a as K,N as S};
