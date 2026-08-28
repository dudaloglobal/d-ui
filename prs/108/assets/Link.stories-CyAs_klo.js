import{r as f,j as n,f as G,t as l,d as s}from"./iframe-FxQv0PLs.js";import{u as J}from"./arg-types-CcCGDFlU.js";import{c}from"./docs-source-C_O40UCi.js";import{I as K}from"./Icon-D61w61VJ.js";import{T as Q}from"./Text-Kxhsp1U-.js";import{V as U}from"./VisuallyHidden-DOVQU8HQ.js";function X({title:e,titleId:r,...o},a){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},o),e?f.createElement("title",{id:r},e):null,f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"}))}const Y=f.forwardRef(X),Z={default:"text-link visited:text-link-visited",dark:"text-fg",light:"text-bg"};function y({children:e}){return n.jsx("span",{className:"inline-flex shrink-0 [&_svg]:block","aria-hidden":"true",children:e})}function t({external:e=!1,externalLabel:r="(opens in a new tab)",color:o="default",icon:a,iconPosition:k="start",className:V,children:B,target:L,rel:x,...W}){const M=e?{target:L??"_blank",rel:x??"noopener noreferrer"}:{target:L,rel:x},H=!!a&&k==="start",F=!!a&&k==="end";return n.jsxs("a",{className:G("underline underline-offset-2","hover:decoration-2","focus-visible:ring-focus focus-visible:ring-offset-bg rounded-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",Z[o],a?"inline-flex items-center gap-1.5":void 0,V),...W,...M,children:[H?n.jsx(y,{children:a}):null,B,F?n.jsx(y,{children:a}):null,e?n.jsxs(U,{children:[" ",r]}):null]})}t.__docgenInfo={description:`Lien du design system.

Le soulignement est permanent et non optionnel : la couleur seule ne peut pas
distinguer un lien de son texte environnant (WCAG 1.4.1).`,methods:[],displayName:"Link",props:{external:{required:!1,tsType:{name:"boolean"},description:`Ouvre dans un nouvel onglet, ajoute \`rel="noopener noreferrer"\` et
annonce l'ouverture aux lecteurs d'écran.`,defaultValue:{value:"false",computed:!1}},externalLabel:{required:!1,tsType:{name:"string"},description:"Accessible extra for an external link. Override with the product language.",defaultValue:{value:"'(opens in a new tab)'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'dark' | 'light'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:'Couleur du lien. `"default"` : token `link`. `"dark"` : encre (`fg`).\n`"light"` : fond (`bg`), à poser sur un fond `fg`. Non héritée du parent.',defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icône décorative. Ne remplace pas le nom accessible."},iconPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:'Position de l’icône : `"start"` (début) ou `"end"` (fin).',defaultValue:{value:"'start'",computed:!1}}}};const h="import { Link } from 'd-ui';",$=`import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Icon, Link } from 'd-ui';`,ee={title:"Components/Link",component:t,argTypes:J,args:{href:"#",children:"Consulter le catalogue"}},i={name:"Par défaut",parameters:c(h,'<Link href="/catalogue">Consulter le catalogue</Link>'),render:(e,{globals:r})=>{const o=l(s(r.locale));return n.jsx(t,{...e,href:"/catalogue",children:o.catalogue})}},u={name:"Avec icône",parameters:c($,`<Link
    href="/catalogue"
    icon={<Icon as={ArrowTopRightOnSquareIcon} size="sm" />}
    iconPosition="end"
>
    Consulter le catalogue
</Link>`),render:(e,{globals:r})=>{const o=l(s(r.locale));return n.jsx(t,{...e,href:"/catalogue",icon:n.jsx(K,{as:Y,size:"sm"}),iconPosition:"end",children:o.catalogue})}},p={name:"Couleur sombre",parameters:c(h,'<Link href="/catalogue" color="dark">Lien sombre</Link>'),render:(e,{globals:r})=>{const o=l(s(r.locale));return n.jsx(t,{...e,href:"/catalogue",color:"dark",children:o.darkLink})}},d={name:"Couleur claire",parameters:c(h,'<Link href="/catalogue" color="light">Lien clair</Link>'),render:(e,{globals:r})=>{const o=l(s(r.locale));return n.jsx("div",{className:"bg-fg rounded-md px-4 py-3",children:n.jsx(t,{...e,href:"/catalogue",color:"light",children:o.lightLink})})}},m={name:"Externe",args:{href:"https://example.org",external:!0},parameters:c(h,`<Link href="https://example.org" external externalLabel="(ouvre dans un nouvel onglet)">
  Documentation Dudalo
</Link>`),render:(e,{globals:r})=>{const o=l(s(r.locale)),a=s(r.locale);return n.jsx(t,{...e,externalLabel:a==="en"?"(opens in a new tab)":"(ouvre dans un nouvel onglet)",children:o.docs})}},g={name:"Dans un paragraphe",parameters:c("import { Link, Text } from 'd-ui';",`<Text>
    Consultez le <Link href="/catalogue">catalogue</Link> pour choisir un module.
</Text>`),render:(e,{globals:r})=>{const o=l(s(r.locale));return n.jsxs(Q,{className:"max-w-prose",children:[o.inTextBefore," ",n.jsx(t,{...e,href:"/catalogue",children:o.inTextLink})," ",o.inTextAfter]})}};var b,v,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var w,C,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var I,j,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(j=p.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var E,D,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var R,q,N;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(q=m.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var _,P,z;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(P=g.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const re=["Default","WithIcon","Dark","Light","External","InRunningText"],ce=Object.freeze(Object.defineProperty({__proto__:null,Dark:p,Default:i,External:m,InRunningText:g,Light:d,WithIcon:u,__namedExportsOrder:re,default:ee},Symbol.toStringTag,{value:"Module"}));export{i as D,m as E,g as I,ce as L,u as W,p as a,d as b};
