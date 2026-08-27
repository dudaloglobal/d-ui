import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,g as i,m as a,n as o}from"./docs-locale-DxRsX5eR.js";import{h as s,i as c,n as l,u}from"./docs-source-5snetGJm.js";import{n as d,t as f}from"./Text-BQmBNKAr.js";function p({orientation:e=`horizontal`,label:t,className:n,...r}){let a=t?{role:`separator`,"aria-orientation":e,"aria-label":t}:{role:`none`,"aria-hidden":!0};return e===`vertical`?(0,m.jsx)(`div`,{...r,...a,className:i(`bg-border-subtle w-px min-h-4 self-stretch`,n)}):t?(0,m.jsxs)(`div`,{...r,...a,className:i(`flex w-full min-w-0 items-center gap-3`,n),children:[(0,m.jsx)(`span`,{className:`bg-border-subtle h-px min-w-0 flex-1`,"aria-hidden":!0}),(0,m.jsx)(`span`,{className:`text-fg-muted shrink-0 text-xs`,"aria-hidden":!0,children:t}),(0,m.jsx)(`span`,{className:`bg-border-subtle h-px min-w-0 flex-1`,"aria-hidden":!0})]}):(0,m.jsx)(`div`,{...r,...a,className:i(`bg-border-subtle m-0 block h-px w-full min-w-0`,n)})}var m;function h(){return(h=e((()=>{m=n(),p.__docgenInfo={description:"Filet de séparation.\n\nUtilise `--d-ui-color-border-subtle` : un séparateur décoratif n'est pas une\nfrontière de contrôle, le seuil de 3:1 du critère 1.4.11 ne s'y applique pas.\n\nToujours un `div` (jamais un `<hr>` : le preflight Tailwind force `height: 0`\net des marges auto, ce qui empêchait le trait de remplir le parent).\nHorizontal : `width: 100%` du conteneur. Vertical : `self-stretch` dans un flex.",methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Nom accessible du séparateur.

Sans \`label\`, le trait est purement décoratif et masqué aux technologies
d'assistance. Ne le renseigner que lorsque la séparation porte du sens.
En horizontal, le libellé est aussi visible, entre deux filets qui
occupent tout l'espace restant.`}}}})))()}var g=t({Default:()=>y,Labelled:()=>x,Vertical:()=>b,__namedExportsOrder:()=>S,default:()=>v}),_,v,y,b,x,S;function C(){return(C=e((()=>{s(),c(),r(),d(),h(),_=n(),v={title:`Components/Divider`,component:p,argTypes:u},y={name:`Horizontal`,parameters:l(`import { Divider } from 'd-ui';`,`<Divider />`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,_.jsxs)(`div`,{className:`flex w-full flex-col gap-4`,children:[(0,_.jsx)(f,{children:n.previous}),(0,_.jsx)(p,{...e}),(0,_.jsx)(f,{children:n.next})]})}},b={name:`Vertical`,args:{orientation:`vertical`},parameters:l(`import { Divider } from 'd-ui';`,`<Divider orientation="vertical" />`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,_.jsxs)(`div`,{className:`flex h-8 items-center gap-4`,children:[(0,_.jsx)(f,{as:`span`,children:n.drafts}),(0,_.jsx)(p,{...e}),(0,_.jsx)(f,{as:`span`,children:n.published})]})}},x={name:`Labellisé`,args:{label:`Fin des résultats pertinents`},parameters:l(`import { Divider } from 'd-ui';`,`<Divider label="Fin des résultats pertinents" />`),render:(e,{globals:t})=>{let n=a(o(t.locale));return(0,_.jsxs)(`div`,{className:`flex w-full flex-col gap-4`,children:[(0,_.jsx)(f,{children:n.relevant}),(0,_.jsx)(p,{...e,label:n.labelled}),(0,_.jsx)(f,{tone:`muted`,children:n.other})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  parameters: componentSource("import { Divider } from 'd-ui';", '<Divider />'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex w-full flex-col gap-4">
        <Text>{copy.previous}</Text>
        <Divider {...args} />
        <Text>{copy.next}</Text>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Vertical',
  args: {
    orientation: 'vertical'
  },
  parameters: componentSource("import { Divider } from 'd-ui';", '<Divider orientation="vertical" />'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex h-8 items-center gap-4">
        <Text as="span">{copy.drafts}</Text>
        <Divider {...args} />
        <Text as="span">{copy.published}</Text>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Labellisé',
  args: {
    label: 'Fin des résultats pertinents'
  },
  parameters: componentSource("import { Divider } from 'd-ui';", '<Divider label="Fin des résultats pertinents" />'),
  render: (args, {
    globals
  }) => {
    const copy = typographyCopy(docsLocale(globals.locale));
    return <div className="flex w-full flex-col gap-4">
        <Text>{copy.relevant}</Text>
        <Divider {...args} label={copy.labelled} />
        <Text tone="muted">{copy.other}</Text>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Vertical`,`Labelled`]})))()}export{C as a,b as i,g as n,x as r,y as t};