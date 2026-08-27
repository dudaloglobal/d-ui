import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{s as g,c as h}from"./docs-source-CpGeTe7M.js";import{c as N,s as L,d as x}from"./cx-Dh08zBtx.js";const j="Skip to main content";function o({href:e="#main",className:r,children:n=j,onClick:s,...S}){function y(c){if(s==null||s(c),c.defaultPrevented)return;const d=e.startsWith("#")?e.slice(1):"";if(!d)return;const l=document.getElementById(d);l&&(l.focus(),document.activeElement===l&&c.preventDefault())}return a.jsx("a",{...S,href:e,className:N("d-ui-skip-link",r),onClick:y,children:n})}o.__docgenInfo={description:`First focusable control in an app shell. Visible on keyboard focus only.
Point \`href\` at a landmark that is already focusable, e.g.
\`<main id="main" tabIndex={-1}>\`.

If the target cannot take focus, the click is not cancelled so the browser
can still follow the hash.`,methods:[],displayName:"SkipLink",props:{href:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:"",defaultValue:{value:"'#main'",computed:!1}},children:{defaultValue:{value:"'Skip to main content'",computed:!1},required:!1}}};const v={title:"Accessibility/SkipLink",component:o,argTypes:g,parameters:{controls:{include:["href","children","className"]}}},i={name:"Clavier",parameters:h("import { SkipLink } from 'd-ui';",`<SkipLink>Aller au contenu principal</SkipLink>
<main id="main" tabIndex={-1}>
  Contenu principal
</main>`),render:(e,{globals:r})=>{const n=L(x(r.locale));return a.jsxs("div",{className:"text-fg",children:[a.jsx(o,{...e,children:e.children??n.label}),a.jsx("p",{className:"m-0 text-sm opacity-80",children:n.hint}),a.jsx("main",{id:"main",tabIndex:-1,className:"mt-4 rounded-md border border-border p-4",children:n.main})]})}},t={name:"Cible personnalisée",args:{href:"#content"},parameters:h("import { SkipLink } from 'd-ui';",`<SkipLink href="#content">Aller au contenu</SkipLink>
<main id="content" tabIndex={-1}>
  Zone de contenu
</main>`),render:(e,{globals:r})=>{const n=L(x(r.locale));return a.jsxs("div",{className:"text-fg",children:[a.jsx(o,{...e,children:e.children??n.customLabel}),a.jsx("p",{className:"m-0 text-sm opacity-80",children:n.customHint}),a.jsx("main",{id:"content",tabIndex:-1,className:"mt-4 rounded-md border border-border p-4",children:n.customTarget})]})}};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var k,f,b;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const I=["Keyboard","CustomHref"],T=Object.freeze(Object.defineProperty({__proto__:null,CustomHref:t,Keyboard:i,__namedExportsOrder:I,default:v},Symbol.toStringTag,{value:"Module"}));export{t as C,i as K,T as S};
