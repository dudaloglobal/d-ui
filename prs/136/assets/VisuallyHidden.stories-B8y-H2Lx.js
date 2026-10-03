import{v as l,d as i,j as o}from"./iframe-BaR_79Rv.js";import{v as u}from"./arg-types-CGfSQUbN.js";import{c}from"./docs-source-C_O40UCi.js";import{V as a}from"./VisuallyHidden-yxOfl0zW.js";const p={title:"Accessibility/VisuallyHidden",component:a,argTypes:u},e={name:"Nom d’un bouton icône",parameters:c("import { VisuallyHidden } from '@dudaloglobal/d-ui';",`<button type="button">
  <span aria-hidden="true">×</span>
  <VisuallyHidden>Fermer</VisuallyHidden>
</button>`),render:(y,{globals:d})=>{const s=l(i(d.locale));return o.jsxs("button",{type:"button",className:"text-fg rounded-md border border-border px-3 py-2",children:[o.jsx("span",{"aria-hidden":"true",children:"×"}),o.jsx(a,{children:s.close})]})}};var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Nom d’un bouton icône',
  parameters: componentSource("import { VisuallyHidden } from '@dudaloglobal/d-ui';", \`<button type="button">
  <span aria-hidden="true">×</span>
  <VisuallyHidden>Fermer</VisuallyHidden>
</button>\`),
  render: (_, {
    globals
  }) => {
    const copy = visuallyHiddenCopy(docsLocale(globals.locale));
    return <button type="button" className="text-fg rounded-md border border-border px-3 py-2">
        <span aria-hidden="true">×</span>
        <VisuallyHidden>{copy.close}</VisuallyHidden>
      </button>;
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const m=["IconOnlyName"],g=Object.freeze(Object.defineProperty({__proto__:null,IconOnlyName:e,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{e as I,g as V};
