import{T as s,k as l,d as p,j as e}from"./iframe-DQkPQlwv.js";import{d as y}from"./arg-types-DZVvtZDS.js";import{c as f}from"./docs-source-C_O40UCi.js";import{B as h}from"./Button-BsdUeiIE.js";const B={title:"Foundations/ThemeProvider",component:s,args:{children:null},argTypes:y,parameters:{controls:{include:["mode","className"]}}},r={name:"Surcharge de marque",parameters:f("import { Button, ThemeProvider } from 'd-ui';",`<ThemeProvider
  tokens={{
    brand: '#7c3aed',
    brandHover: '#6d28d9',
    onBrand: '#ffffff',
    focus: '#7c3aed',
  }}
>
  <Button>Continuer</Button>
</ThemeProvider>`),render:(v,{globals:t})=>{const n=l(p(t.locale));return e.jsx(s,{tokens:{brand:"#7c3aed",brandHover:"#6d28d9",onBrand:"#ffffff",focus:"#7c3aed"},children:e.jsx(h,{children:n.brand})})}},o={name:"Système",parameters:f("import { Button, ThemeProvider } from 'd-ui';",`<ThemeProvider mode="system">
  <Button>Continuer</Button>
</ThemeProvider>`),render:(v,{globals:t})=>{const n=l(p(t.locale));return e.jsx(s,{mode:"system",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"m-0 text-sm opacity-80",children:n.systemHint}),e.jsx(h,{children:n.system})]})})}};var a,d,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Surcharge de marque',
  parameters: componentSource("import { Button, ThemeProvider } from 'd-ui';", \`<ThemeProvider
  tokens={{
    brand: '#7c3aed',
    brandHover: '#6d28d9',
    onBrand: '#ffffff',
    focus: '#7c3aed',
  }}
>
  <Button>Continuer</Button>
</ThemeProvider>\`),
  render: (_, {
    globals
  }) => {
    const copy = themeCopy(docsLocale(globals.locale));
    return <ThemeProvider tokens={{
      brand: '#7c3aed',
      brandHover: '#6d28d9',
      onBrand: '#ffffff',
      focus: '#7c3aed'
    }}>
        <Button>{copy.brand}</Button>
      </ThemeProvider>;
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,i,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Système',
  parameters: componentSource("import { Button, ThemeProvider } from 'd-ui';", \`<ThemeProvider mode="system">
  <Button>Continuer</Button>
</ThemeProvider>\`),
  render: (_, {
    globals
  }) => {
    const copy = themeCopy(docsLocale(globals.locale));
    return <ThemeProvider mode="system">
        <div className="flex flex-col gap-2">
          <p className="m-0 text-sm opacity-80">{copy.systemHint}</p>
          <Button>{copy.system}</Button>
        </div>
      </ThemeProvider>;
  }
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const T=["BrandOverride","System"],S=Object.freeze(Object.defineProperty({__proto__:null,BrandOverride:r,System:o,__namedExportsOrder:T,default:B},Symbol.toStringTag,{value:"Module"}));export{r as B,o as S,S as T};
