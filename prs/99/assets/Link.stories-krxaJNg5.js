import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,g as i,m as a,n as o}from"./docs-locale-DxRsX5eR.js";import{g as s,h as c,i as l,n as u}from"./docs-source-5snetGJm.js";import{n as d,t as f}from"./VisuallyHidden-zHqM2pej.js";import{n as p,t as m}from"./Text-BQmBNKAr.js";function h({external:e=!1,externalLabel:t=`(opens in a new tab)`,className:n,children:r,target:a,rel:o,...s}){let c=e?{target:a??`_blank`,rel:o??`noopener noreferrer`}:{target:a,rel:o};return(0,g.jsxs)(`a`,{className:i(`text-link underline underline-offset-2`,`hover:decoration-2`,`visited:text-link-visited`,`focus-visible:ring-focus focus-visible:ring-offset-bg rounded-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`,n),...s,...c,children:[r,e?(0,g.jsxs)(f,{children:[` `,t]}):null]})}var g;function _(){return(_=e((()=>{d(),g=n(),h.__docgenInfo={description:`Lien du design system.

Le soulignement est permanent et non optionnel : la couleur seule ne peut pas
distinguer un lien de son texte environnant (WCAG 1.4.1).`,methods:[],displayName:`Link`,props:{external:{required:!1,tsType:{name:`boolean`},description:`Ouvre dans un nouvel onglet, ajoute \`rel="noopener noreferrer"\` et
annonce l'ouverture aux lecteurs d'écran.`,defaultValue:{value:`false`,computed:!1}},externalLabel:{required:!1,tsType:{name:`string`},description:`Accessible extra for an external link. Override with the product language.`,defaultValue:{value:`'(opens in a new tab)'`,computed:!1}}}}})))()}var v=t({Default:()=>x,External:()=>S,InRunningText:()=>C,__namedExportsOrder:()=>w,default:()=>b}),y,b,x,S,C,w;function T(){return(T=e((()=>{c(),l(),r(),p(),_(),y=n(),b={title:`Components/Link`,component:h,argTypes:s,args:{href:`#`,children:`Consulter le catalogue`}},x={name:`Par défaut`,parameters:u(`import { Link } from 'd-ui';`,`<Link href="/catalogue">Consulter le catalogue</Link>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,y.jsx)(h,{...e,href:`/catalogue`,children:n.catalogue})}},S={name:`Externe`,args:{href:`https://example.org`,external:!0},parameters:u(`import { Link } from 'd-ui';`,`<Link href="https://example.org" external externalLabel="(ouvre dans un nouvel onglet)">
  Documentation Dudalo
</Link>`),render:(e,{globals:t})=>{let n=a(o(t.locale)),r=o(t.locale);return(0,y.jsx)(h,{...e,externalLabel:r===`en`?`(opens in a new tab)`:`(ouvre dans un nouvel onglet)`,children:n.docs})}},C={name:`Dans un paragraphe`,parameters:u(`import { Link, Text } from 'd-ui';`,`<Text>
  Consultez le <Link href="/catalogue">catalogue</Link> pour choisir un module.
</Text>`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,y.jsxs)(m,{className:`max-w-prose`,children:[n.inTextBefore,` `,(0,y.jsx)(h,{...e,href:`/catalogue`,children:n.inTextLink}),` `,n.inTextAfter]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource("import { Link } from 'd-ui';", '<Link href="/catalogue">Consulter le catalogue</Link>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Link {...args} href="/catalogue">
        {copy.catalogue}
      </Link>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Externe',
  args: {
    href: 'https://example.org',
    external: true
  },
  parameters: componentSource("import { Link } from 'd-ui';", \`<Link href="https://example.org" external externalLabel="(ouvre dans un nouvel onglet)">
  Documentation Dudalo
</Link>\`),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    const locale = docsLocale(globals.locale);
    return <Link {...args} externalLabel={locale === 'en' ? '(opens in a new tab)' : '(ouvre dans un nouvel onglet)'}>
        {copy.docs}
      </Link>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Dans un paragraphe',
  parameters: componentSource("import { Link, Text } from 'd-ui';", \`<Text>
  Consultez le <Link href="/catalogue">catalogue</Link> pour choisir un module.
</Text>\`),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Text className="max-w-prose">
        {copy.inTextBefore}{' '}
        <Link {...args} href="/catalogue">
          {copy.inTextLink}
        </Link>{' '}
        {copy.inTextAfter}
      </Text>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`External`,`InRunningText`]})))()}export{T as a,v as i,S as n,C as r,x as t};