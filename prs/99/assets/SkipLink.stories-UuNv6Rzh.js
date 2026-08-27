import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,d as i,g as a,n as o}from"./docs-locale-DxRsX5eR.js";import{b as s,h as c,i as l,n as u}from"./docs-source-5snetGJm.js";function d({href:e=`#main`,className:t,children:n=p,onClick:r,...i}){function o(t){if(r?.(t),t.defaultPrevented)return;let n=e.startsWith(`#`)?e.slice(1):``;if(!n)return;let i=document.getElementById(n);i&&(i.focus(),document.activeElement===i&&t.preventDefault())}return(0,f.jsx)(`a`,{...i,href:e,className:a(`d-ui-skip-link`,t),onClick:o,children:n})}var f,p;function m(){return(m=e((()=>{f=n(),p=`Skip to main content`,d.__docgenInfo={description:`First focusable control in an app shell. Visible on keyboard focus only.
Point \`href\` at a landmark that is already focusable, e.g.
\`<main id="main" tabIndex={-1}>\`.

If the target cannot take focus, the click is not cancelled so the browser
can still follow the hash.`,methods:[],displayName:`SkipLink`,props:{href:{required:!1,tsType:{name:`literal`,value:"`#${string}`"},description:``,defaultValue:{value:`'#main'`,computed:!1}},children:{defaultValue:{value:`'Skip to main content'`,computed:!1},required:!1}}}})))()}var h=t({CustomHref:()=>y,Keyboard:()=>v,__namedExportsOrder:()=>b,default:()=>_}),g,_,v,y,b;function x(){return(x=e((()=>{c(),l(),r(),m(),g=n(),_={title:`Accessibility/SkipLink`,component:d,argTypes:s,parameters:{controls:{include:[`href`,`children`,`className`]}}},v={name:`Clavier`,parameters:u(`import { SkipLink } from 'd-ui';`,`<SkipLink>Aller au contenu principal</SkipLink>
<main id="main" tabIndex={-1}>
  Contenu principal
</main>`),render:(e,{globals:t})=>{let n=i(o(t.locale));return(0,g.jsxs)(`div`,{className:`text-fg`,children:[(0,g.jsx)(d,{...e,children:e.children??n.label}),(0,g.jsx)(`p`,{className:`m-0 text-sm opacity-80`,children:n.hint}),(0,g.jsx)(`main`,{id:`main`,tabIndex:-1,className:`mt-4 rounded-md border border-border p-4`,children:n.main})]})}},y={name:`Cible personnalisée`,args:{href:`#content`},parameters:u(`import { SkipLink } from 'd-ui';`,`<SkipLink href="#content">Aller au contenu</SkipLink>
<main id="content" tabIndex={-1}>
  Zone de contenu
</main>`),render:(e,{globals:t})=>{let n=i(o(t.locale));return(0,g.jsxs)(`div`,{className:`text-fg`,children:[(0,g.jsx)(d,{...e,children:e.children??n.customLabel}),(0,g.jsx)(`p`,{className:`m-0 text-sm opacity-80`,children:n.customHint}),(0,g.jsx)(`main`,{id:`content`,tabIndex:-1,className:`mt-4 rounded-md border border-border p-4`,children:n.customTarget})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Keyboard`,`CustomHref`]})))()}export{x as i,v as n,h as r,y as t};