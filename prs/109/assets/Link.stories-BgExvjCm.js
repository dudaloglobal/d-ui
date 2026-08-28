import{r as d,t as c,d as n,j as a}from"./iframe-CY8VAtSp.js";import{l as P}from"./arg-types-CR9IEapM.js";import{c as s}from"./docs-source-C_O40UCi.js";import{I as _}from"./Icon-Df7xhHPZ.js";import{T as q}from"./Text-C3hBiZSl.js";import{L as t}from"./Link-ClW-hHaw.js";function N({title:r,titleId:e,...o},h){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:h,"aria-labelledby":e},o),r?d.createElement("title",{id:e},r):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"}))}const W=d.forwardRef(N),L="import { Link } from 'd-ui';",B=`import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Icon, Link } from 'd-ui';`,M={title:"Components/Link",component:t,argTypes:P,args:{href:"#",children:"Consulter le catalogue"}},l={name:"Par défaut",parameters:s(L,'<Link href="/catalogue">Consulter le catalogue</Link>'),render:(r,{globals:e})=>{const o=c(n(e.locale));return a.jsx(t,{...r,href:"/catalogue",children:o.catalogue})}},i={name:"Avec icône",parameters:s(B,`<Link
    href="/catalogue"
    icon={<Icon as={ArrowTopRightOnSquareIcon} size="sm" />}
    iconPosition="end"
>
    Consulter le catalogue
</Link>`),render:(r,{globals:e})=>{const o=c(n(e.locale));return a.jsx(t,{...r,href:"/catalogue",icon:a.jsx(_,{as:W,size:"sm"}),iconPosition:"end",children:o.catalogue})}},p={name:"Couleur sombre",parameters:s(L,'<Link href="/catalogue" color="dark">Lien sombre</Link>'),render:(r,{globals:e})=>{const o=c(n(e.locale));return a.jsx(t,{...r,href:"/catalogue",color:"dark",children:o.darkLink})}},u={name:"Couleur claire",parameters:s(L,'<Link href="/catalogue" color="light">Lien clair</Link>'),render:(r,{globals:e})=>{const o=c(n(e.locale));return a.jsx("div",{className:"bg-fg rounded-md px-4 py-3",children:a.jsx(t,{...r,href:"/catalogue",color:"light",children:o.lightLink})})}},m={name:"Externe",args:{href:"https://example.org",external:!0},parameters:s(L,`<Link href="https://example.org" external externalLabel="(ouvre dans un nouvel onglet)">
  Documentation Dudalo
</Link>`),render:(r,{globals:e})=>{const o=c(n(e.locale)),h=n(e.locale);return a.jsx(t,{...r,externalLabel:h==="en"?"(opens in a new tab)":"(ouvre dans un nouvel onglet)",children:o.docs})}},g={name:"Dans un paragraphe",parameters:s("import { Link, Text } from 'd-ui';",`<Text>
    Consultez le <Link href="/catalogue">catalogue</Link> pour choisir un module.
</Text>`),render:(r,{globals:e})=>{const o=c(n(e.locale));return a.jsxs(q,{className:"max-w-prose",children:[o.inTextBefore," ",a.jsx(t,{...r,href:"/catalogue",children:o.inTextLink})," ",o.inTextAfter]})}};var k,f,x;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importLink, '<Link href="/catalogue">Consulter le catalogue</Link>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Link {...args} href="/catalogue">
        {copy.catalogue}
      </Link>;
  }
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,b,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Avec icône',
  parameters: componentSource(importIconLink, \`<Link
    href="/catalogue"
    icon={<Icon as={ArrowTopRightOnSquareIcon} size="sm" />}
    iconPosition="end"
>
    Consulter le catalogue
</Link>\`),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Link {...args} href="/catalogue" icon={<Icon as={ArrowTopRightOnSquareIcon} size="sm" />} iconPosition="end">
        {copy.catalogue}
      </Link>;
  }
}`,...(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var S,C,v;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Couleur sombre',
  parameters: componentSource(importLink, '<Link href="/catalogue" color="dark">Lien sombre</Link>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <Link {...args} href="/catalogue" color="dark">
        {copy.darkLink}
      </Link>;
  }
}`,...(v=(C=p.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var I,w,j;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Couleur claire',
  parameters: componentSource(importLink, '<Link href="/catalogue" color="light">Lien clair</Link>'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="bg-fg rounded-md px-4 py-3">
        <Link {...args} href="/catalogue" color="light">
          {copy.lightLink}
        </Link>
      </div>;
  }
}`,...(j=(w=u.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var A,D,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Externe',
  args: {
    href: 'https://example.org',
    external: true
  },
  parameters: componentSource(importLink, \`<Link href="https://example.org" external externalLabel="(ouvre dans un nouvel onglet)">
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
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var R,O,z;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(z=(O=g.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const F=["Default","WithIcon","Dark","Light","External","InRunningText"],U=Object.freeze(Object.defineProperty({__proto__:null,Dark:p,Default:l,External:m,InRunningText:g,Light:u,WithIcon:i,__namedExportsOrder:F,default:M},Symbol.toStringTag,{value:"Module"}));export{l as D,m as E,g as I,U as L,i as W,p as a,u as b};
