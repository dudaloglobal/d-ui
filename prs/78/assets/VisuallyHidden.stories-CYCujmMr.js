import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{v as i,c as l}from"./docs-source-BpJ8NOnL.js";import{v as u,d as c}from"./cx-rSPOEDc8.js";import{V as a}from"./VisuallyHidden-B4HpmGuA.js";const p={title:"Accessibility/VisuallyHidden",component:a,argTypes:i},e={name:"Nom d’un bouton icône",parameters:l("import { VisuallyHidden } from 'd-ui';",`<button type="button">
  <span aria-hidden="true">×</span>
  <VisuallyHidden>Fermer</VisuallyHidden>
</button>`),render:(y,{globals:d})=>{const s=u(c(d.locale));return o.jsxs("button",{type:"button",className:"text-fg rounded-md border border-border px-3 py-2",children:[o.jsx("span",{"aria-hidden":"true",children:"×"}),o.jsx(a,{children:s.close})]})}};var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Nom d’un bouton icône',
  parameters: componentSource("import { VisuallyHidden } from 'd-ui';", \`<button type="button">
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
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const m=["IconOnlyName"],x=Object.freeze(Object.defineProperty({__proto__:null,IconOnlyName:e,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{e as I,x as V};
