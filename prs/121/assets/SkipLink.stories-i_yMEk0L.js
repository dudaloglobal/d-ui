import{s as u,d as k,j as e}from"./iframe-CfESPI1b.js";import{s as S}from"./arg-types-B3Y5nyvA.js";import{c as b}from"./docs-source-C_O40UCi.js";import{S as t}from"./SkipLink-DeX6_tIr.js";const x={title:"Accessibility/SkipLink",component:t,argTypes:S,parameters:{controls:{include:["href","children","className"]}}},a={name:"Clavier",parameters:b("import { SkipLink } from 'd-ui';",`<SkipLink>Aller au contenu principal</SkipLink>
<main id="main" tabIndex={-1}>
  Contenu principal
</main>`),render:(n,{globals:o})=>{const r=u(k(o.locale));return e.jsxs("div",{className:"text-fg",children:[e.jsx(t,{...n,children:n.children??r.label}),e.jsx("p",{className:"m-0 text-sm opacity-80",children:r.hint}),e.jsx("main",{id:"main",tabIndex:-1,className:"mt-4 rounded-md border border-border p-4",children:r.main})]})}},i={name:"Cible personnalisée",args:{href:"#content"},parameters:b("import { SkipLink } from 'd-ui';",`<SkipLink href="#content">Aller au contenu</SkipLink>
<main id="content" tabIndex={-1}>
  Zone de contenu
</main>`),render:(n,{globals:o})=>{const r=u(k(o.locale));return e.jsxs("div",{className:"text-fg",children:[e.jsx(t,{...n,children:n.children??r.customLabel}),e.jsx("p",{className:"m-0 text-sm opacity-80",children:r.customHint}),e.jsx("main",{id:"content",tabIndex:-1,className:"mt-4 rounded-md border border-border p-4",children:r.customTarget})]})}};var s,c,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Clavier',
  parameters: componentSource("import { SkipLink } from 'd-ui';", \`<SkipLink>Aller au contenu principal</SkipLink>
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
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Cible personnalisée',
  args: {
    href: '#content'
  },
  parameters: componentSource("import { SkipLink } from 'd-ui';", \`<SkipLink href="#content">Aller au contenu</SkipLink>
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
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const L=["Keyboard","CustomHref"],N=Object.freeze(Object.defineProperty({__proto__:null,CustomHref:i,Keyboard:a,__namedExportsOrder:L,default:x},Symbol.toStringTag,{value:"Module"}));export{i as C,a as K,N as S};
