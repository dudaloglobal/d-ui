import{j as r,f as C,t as u,d as i}from"./iframe-Wq3C05Zi.js";import{l as S,c as p}from"./docs-source-D4DylD1p.js";import{T as D}from"./Text-B_XHPNKW.js";import{V as _}from"./VisuallyHidden-D4bkHto5.js";function l({external:n=!1,externalLabel:o="(opens in a new tab)",className:e,children:c,target:d,rel:m,...T}){const j=n?{target:d??"_blank",rel:m??"noopener noreferrer"}:{target:d,rel:m};return r.jsxs("a",{className:C("text-link underline underline-offset-2","hover:decoration-2","visited:text-link-visited","focus-visible:ring-focus focus-visible:ring-offset-bg rounded-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",e),...T,...j,children:[c,n?r.jsxs(_,{children:[" ",o]}):null]})}l.__docgenInfo={description:`Lien du design system.

Le soulignement est permanent et non optionnel : la couleur seule ne peut pas
distinguer un lien de son texte environnant (WCAG 1.4.1).`,methods:[],displayName:"Link",props:{external:{required:!1,tsType:{name:"boolean"},description:`Ouvre dans un nouvel onglet, ajoute \`rel="noopener noreferrer"\` et
annonce l'ouverture aux lecteurs d'écran.`,defaultValue:{value:"false",computed:!1}},externalLabel:{required:!1,tsType:{name:"string"},description:"Accessible extra for an external link. Override with the product language.",defaultValue:{value:"'(opens in a new tab)'",computed:!1}}}};const w={title:"Components/Link",component:l,argTypes:S,args:{href:"#",children:"Consulter le catalogue"}},a={name:"Par défaut",parameters:p("import { Link } from 'd-ui';",'<Link href="/catalogue">Consulter le catalogue</Link>'),render:(n,{globals:o})=>{const e=u(i(o.locale));return r.jsx(l,{...n,href:"/catalogue",children:e.catalogue})}},t={name:"Externe",args:{href:"https://example.org",external:!0},parameters:p("import { Link } from 'd-ui';",`<Link href="https://example.org" external externalLabel="(ouvre dans un nouvel onglet)">
  Documentation Dudalo
</Link>`),render:(n,{globals:o})=>{const e=u(i(o.locale)),c=i(o.locale);return r.jsx(l,{...n,externalLabel:c==="en"?"(opens in a new tab)":"(ouvre dans un nouvel onglet)",children:e.docs})}},s={name:"Dans un paragraphe",parameters:p("import { Link, Text } from 'd-ui';",`<Text>
  Consultez le <Link href="/catalogue">catalogue</Link> pour choisir un module.
</Text>`),render:(n,{globals:o})=>{const e=u(i(o.locale));return r.jsxs(D,{className:"max-w-prose",children:[e.inTextBefore," ",r.jsx(l,{...n,href:"/catalogue",children:e.inTextLink})," ",e.inTextAfter]})}};var g,f,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const E=["Default","External","InRunningText"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:a,External:t,InRunningText:s,__namedExportsOrder:E,default:w},Symbol.toStringTag,{value:"Module"}));export{a as D,t as E,s as I,P as L};
