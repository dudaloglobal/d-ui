import{v as l,d as i,j as n}from"./iframe-CF-6NDtP.js";import{v as u}from"./arg-types--G9daUKm.js";import{c}from"./docs-source-C_O40UCi.js";import{V as a}from"./VisuallyHidden-W2p2ijsf.js";const p={title:"Accessibility/VisuallyHidden",component:a,argTypes:u},e={name:"Nom d’un bouton icône",parameters:c("import { VisuallyHidden } from '@dudaloglobal/d-ui';",`<button type="button">
  <span aria-hidden="true">×</span>
  <VisuallyHidden>Fermer</VisuallyHidden>
</button>`),render:(y,{globals:d})=>{const s=l(i(d.locale));return n.jsxs("button",{type:"button",className:"text-fg rounded-md border border-border px-3 py-2",children:[n.jsx("span",{"aria-hidden":"true",children:"×"}),n.jsx(a,{children:s.close})]})}},m=["IconOnlyName"];var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const f=Object.freeze(Object.defineProperty({__proto__:null,IconOnlyName:e,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{e as I,f as V};
