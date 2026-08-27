import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{l as C,c as u}from"./docs-source-CVD5Hzvy.js";import{c as S,t as p,d as i}from"./cx-DCCm14g-.js";import{T as D}from"./Text-hTUe-ezr.js";import{V as _}from"./VisuallyHidden-Bzel1Qq5.js";function l({external:o=!1,externalLabel:n="(opens in a new tab)",className:e,children:c,target:d,rel:m,...T}){const j=o?{target:d??"_blank",rel:m??"noopener noreferrer"}:{target:d,rel:m};return r.jsxs("a",{className:S("text-link underline underline-offset-2","hover:decoration-2","visited:text-link-visited","focus-visible:ring-focus focus-visible:ring-offset-bg rounded-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",e),...T,...j,children:[c,o?r.jsxs(_,{children:[" ",n]}):null]})}l.__docgenInfo={description:`Lien du design system.

Le soulignement est permanent et non optionnel : la couleur seule ne peut pas
distinguer un lien de son texte environnant (WCAG 1.4.1).`,methods:[],displayName:"Link",props:{external:{required:!1,tsType:{name:"boolean"},description:`Ouvre dans un nouvel onglet, ajoute \`rel="noopener noreferrer"\` et
annonce l'ouverture aux lecteurs d'écran.`,defaultValue:{value:"false",computed:!1}},externalLabel:{required:!1,tsType:{name:"string"},description:"Accessible extra for an external link. Override with the product language.",defaultValue:{value:"'(opens in a new tab)'",computed:!1}}}};const w={title:"Components/Link",component:l,argTypes:C,args:{href:"#",children:"Consulter le catalogue"}},a={name:"Par défaut",parameters:u("import { Link } from 'd-ui';",'<Link href="/catalogue">Consulter le catalogue</Link>'),render:(o,{globals:n})=>{const e=p(i(n.locale));return r.jsx(l,{...o,href:"/catalogue",children:e.catalogue})}},t={name:"Externe",args:{href:"https://example.org",external:!0},parameters:u("import { Link } from 'd-ui';",`<Link href="https://example.org" external externalLabel="(ouvre dans un nouvel onglet)">
  Documentation Dudalo
</Link>`),render:(o,{globals:n})=>{const e=p(i(n.locale)),c=i(n.locale);return r.jsx(l,{...o,externalLabel:c==="en"?"(opens in a new tab)":"(ouvre dans un nouvel onglet)",children:e.docs})}},s={name:"Dans un paragraphe",parameters:u("import { Link, Text } from 'd-ui';",`<Text>
  Consultez le <Link href="/catalogue">catalogue</Link> pour choisir un module.
</Text>`),render:(o,{globals:n})=>{const e=p(i(n.locale));return r.jsxs(D,{className:"max-w-prose",children:[e.inTextBefore," ",r.jsx(l,{...o,href:"/catalogue",children:e.inTextLink})," ",e.inTextAfter]})}};var g,f,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var L,h,k;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var y,b,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const E=["Default","External","InRunningText"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:a,External:t,InRunningText:s,__namedExportsOrder:E,default:w},Symbol.toStringTag,{value:"Module"}));export{a as D,t as E,s as I,V as L};
