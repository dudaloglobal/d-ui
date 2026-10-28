import{t as c,d as a,j as r}from"./iframe-CF-6NDtP.js";import{l as O}from"./arg-types--G9daUKm.js";import{c as s}from"./docs-source-C_O40UCi.js";import{I as P}from"./Icon-DSmifnLV.js";import{T as _}from"./Text-DlQLLHRe.js";import{L as t}from"./Link-yUYP-NEr.js";import{F as q}from"./ArrowTopRightOnSquareIcon-DEMrRPSa.js";const d="import { Link } from '@dudaloglobal/d-ui';",N=`import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Icon, Link } from '@dudaloglobal/d-ui';`,F={title:"Components/Link",component:t,argTypes:O,args:{href:"#",children:"Consulter le catalogue"}},l={name:"Par défaut",parameters:s(d,'<Link href="/catalogue">Consulter le catalogue</Link>'),render:(n,{globals:o})=>{const e=c(a(o.locale));return r.jsx(t,{...n,href:"/catalogue",children:e.catalogue})}},i={name:"Avec icône",parameters:s(N,`<Link
    href="/catalogue"
    icon={<Icon as={ArrowTopRightOnSquareIcon} size="sm" />}
    iconPosition="end"
>
    Consulter le catalogue
</Link>`),render:(n,{globals:o})=>{const e=c(a(o.locale));return r.jsx(t,{...n,href:"/catalogue",icon:r.jsx(P,{as:q,size:"sm"}),iconPosition:"end",children:e.catalogue})}},p={name:"Couleur sombre",parameters:s(d,'<Link href="/catalogue" color="dark">Lien sombre</Link>'),render:(n,{globals:o})=>{const e=c(a(o.locale));return r.jsx(t,{...n,href:"/catalogue",color:"dark",children:e.darkLink})}},u={name:"Couleur claire",parameters:s(d,'<Link href="/catalogue" color="light">Lien clair</Link>'),render:(n,{globals:o})=>{const e=c(a(o.locale));return r.jsx("div",{className:"bg-fg rounded-md px-4 py-3",children:r.jsx(t,{...n,href:"/catalogue",color:"light",children:e.lightLink})})}},m={name:"Externe",args:{href:"https://example.org",external:!0},parameters:s(d,`<Link href="https://example.org" external externalLabel="(ouvre dans un nouvel onglet)">
  Documentation Dudalo
</Link>`),render:(n,{globals:o})=>{const e=c(a(o.locale)),z=a(o.locale);return r.jsx(t,{...n,externalLabel:z==="en"?"(opens in a new tab)":"(ouvre dans un nouvel onglet)",children:e.docs})}},g={name:"Dans un paragraphe",parameters:s("import { Link, Text } from '@dudaloglobal/d-ui';",`<Text>
    Consultez le <Link href="/catalogue">catalogue</Link> pour choisir un module.
</Text>`),render:(n,{globals:o})=>{const e=c(a(o.locale));return r.jsxs(_,{className:"max-w-prose",children:[e.inTextBefore," ",r.jsx(t,{...n,href:"/catalogue",children:e.inTextLink})," ",e.inTextAfter]})}},W=["Default","WithIcon","Dark","Light","External","InRunningText"];var L,k,h;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(h=(k=l.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var x,f,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,T,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(T=p.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var C,I,v;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(I=u.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var j,D,w;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(D=m.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var A,E,R;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Dans un paragraphe',
  parameters: componentSource("import { Link, Text } from '@dudaloglobal/d-ui';", \`<Text>
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
}`,...(R=(E=g.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const U=Object.freeze(Object.defineProperty({__proto__:null,Dark:p,Default:l,External:m,InRunningText:g,Light:u,WithIcon:i,__namedExportsOrder:W,default:F},Symbol.toStringTag,{value:"Module"}));export{l as D,m as E,g as I,U as L,i as W,p as a,u as b};
