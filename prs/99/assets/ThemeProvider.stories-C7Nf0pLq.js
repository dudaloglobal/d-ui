import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,f as i,n as a}from"./docs-locale-DxRsX5eR.js";import{d as o,u as s}from"./iframe-ilJZjlXm.js";import{T as c,h as l,i as u,n as d}from"./docs-source-5snetGJm.js";import{n as f,t as p}from"./Button-BlIgtYyL.js";var m=t({BrandOverride:()=>_,System:()=>v,__namedExportsOrder:()=>y,default:()=>g}),h,g,_,v,y;function b(){return(b=e((()=>{l(),u(),r(),f(),o(),h=n(),g={title:`Foundations/ThemeProvider`,component:s,args:{children:null},argTypes:c,parameters:{controls:{include:[`mode`,`className`]}}},_={name:`Surcharge de marque`,parameters:d(`import { Button, ThemeProvider } from 'd-ui';`,`<ThemeProvider
  tokens={{
    brand: '#7c3aed',
    brandHover: '#6d28d9',
    onBrand: '#ffffff',
    focus: '#7c3aed',
  }}
>
  <Button>Continuer</Button>
</ThemeProvider>`),render:(e,{globals:t})=>{let n=i(a(t.locale));return(0,h.jsx)(s,{tokens:{brand:`#7c3aed`,brandHover:`#6d28d9`,onBrand:`#ffffff`,focus:`#7c3aed`},children:(0,h.jsx)(p,{children:n.brand})})}},v={name:`Système`,parameters:d(`import { Button, ThemeProvider } from 'd-ui';`,`<ThemeProvider mode="system">
  <Button>Continuer</Button>
</ThemeProvider>`),render:(e,{globals:t})=>{let n=i(a(t.locale));return(0,h.jsx)(s,{mode:`system`,children:(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsx)(`p`,{className:`m-0 text-sm opacity-80`,children:n.systemHint}),(0,h.jsx)(p,{children:n.system})]})})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`BrandOverride`,`System`]})))()}export{b as i,v as n,m as r,_ as t};