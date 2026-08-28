import{j as e,f as p,t as u,d as m}from"./iframe-DBw_qGzt.js";import{d as w}from"./arg-types-C5Tan_il.js";import{c as x}from"./docs-source-C_O40UCi.js";import{T as t}from"./Text-BcoXU7YZ.js";function n({orientation:s="horizontal",label:a,className:r,...c}){const d=a?{role:"separator","aria-orientation":s,"aria-label":a}:{role:"none","aria-hidden":!0};return s==="vertical"?e.jsx("div",{...c,...d,className:p("bg-border-subtle w-px min-h-4 self-stretch",r)}):a?e.jsxs("div",{...c,...d,className:p("flex w-full min-w-0 items-center gap-3",r),children:[e.jsx("span",{className:"bg-border-subtle h-px min-w-0 flex-1","aria-hidden":!0}),e.jsx("span",{className:"text-fg-muted shrink-0 text-xs","aria-hidden":!0,children:a}),e.jsx("span",{className:"bg-border-subtle h-px min-w-0 flex-1","aria-hidden":!0})]}):e.jsx("div",{...c,...d,className:p("bg-border-subtle m-0 block h-px w-full min-w-0",r)})}n.__docgenInfo={description:"Filet de séparation.\n\nUtilise `--d-ui-color-border-subtle` : un séparateur décoratif n'est pas une\nfrontière de contrôle, le seuil de 3:1 du critère 1.4.11 ne s'y applique pas.\n\nToujours un `div` (jamais un `<hr>` : le preflight Tailwind force `height: 0`\net des marges auto, ce qui empêchait le trait de remplir le parent).\nHorizontal : `width: 100%` du conteneur. Vertical : `self-stretch` dans un flex.",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Nom accessible du séparateur.

Sans \`label\`, le trait est purement décoratif et masqué aux technologies
d'assistance. Ne le renseigner que lorsque la séparation porte du sens.
En horizontal, le libellé est aussi visible, entre deux filets qui
occupent tout l'espace restant.`}}};const N={title:"Components/Divider",component:n,argTypes:w},i={name:"Horizontal",parameters:x("import { Divider } from 'd-ui';","<Divider />"),render:(s,{globals:a})=>{const r=u(m(a.locale));return e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx(t,{children:r.previous}),e.jsx(n,{...s}),e.jsx(t,{children:r.next})]})}},o={name:"Vertical",args:{orientation:"vertical"},parameters:x("import { Divider } from 'd-ui';",'<Divider orientation="vertical" />'),render:(s,{globals:a})=>{const r=u(m(a.locale));return e.jsxs("div",{className:"flex h-8 items-center gap-4",children:[e.jsx(t,{as:"span",children:r.drafts}),e.jsx(n,{...s}),e.jsx(t,{as:"span",children:r.published})]})}},l={name:"Labellisé",args:{label:"Fin des résultats pertinents"},parameters:x("import { Divider } from 'd-ui';",'<Divider label="Fin des résultats pertinents" />'),render:(s,{globals:a})=>{const r=u(m(a.locale));return e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx(t,{children:r.relevant}),e.jsx(n,{...s,label:r.labelled}),e.jsx(t,{tone:"muted",children:r.other})]})}};var f,v,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,b,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var j,D,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const S=["Default","Vertical","Labelled"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Labelled:l,Vertical:o,__namedExportsOrder:S,default:N},Symbol.toStringTag,{value:"Module"}));export{V as D,l as L,o as V,i as a};
