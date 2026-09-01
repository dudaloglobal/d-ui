import{n as b,d as s,j as a,m as g}from"./iframe-B7t-M21q.js";import{c as f}from"./docs-source-C_O40UCi.js";import{n as N}from"./arg-types-YVnHkuEO.js";import{B as v}from"./Button-DBSW31vk.js";import{I as h}from"./IconButton-B1ZwPE3L.js";import{I}from"./Icon-BsoIhE7H.js";import{N as c}from"./Navbar-M7UuTIJq.js";import{F as C}from"./BellIcon-DryIry0n.js";const B="import { Button, Icon, IconButton, Navbar } from 'd-ui';",j={title:"Components/Navbar",component:c,argTypes:N},o={name:"Par défaut",parameters:f(B,`<Navbar
    brand={<a href="/">Dudalo</a>}
    actions={
        <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
    }
    user={<Button variant="secondary">Profil</Button>}
/>`),render:(t,{globals:e})=>{const n=b(s(e.locale));return a.jsx(c,{...t,brand:a.jsx("a",{href:"/",children:n.brand}),actions:a.jsx(h,{icon:a.jsx(I,{as:C}),"aria-label":n.notifications}),user:a.jsx(v,{variant:"secondary",children:n.profile})})}},r={name:"Bouton menu",parameters:f(B,`<Navbar
    brand={<a href="/">Dudalo</a>}
    menuLabel="Ouvrir la navigation"
    menuControls="nav-mobile"
    onMenuOpenChange={() => {}}
    user={<Button variant="secondary">Profil</Button>}
/>`),render:(t,{globals:e})=>{const n=b(s(e.locale)),y=g(s(e.locale));return a.jsx(c,{...t,brand:a.jsx("a",{href:"/",children:n.brand}),menuLabel:y.openNav,menuControls:"nav-mobile",onMenuOpenChange:()=>{},user:a.jsx(v,{variant:"secondary",children:n.profile})})}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importNavbar, \`<Navbar
    brand={<a href="/">Dudalo</a>}
    actions={
        <IconButton icon={<Icon as={BellIcon} />} aria-label="Notifications" />
    }
    user={<Button variant="secondary">Profil</Button>}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = navbarCopy(docsLocale(globals.locale));
    return <Navbar {...args} brand={<a href="/">{copy.brand}</a>} actions={<IconButton icon={<Icon as={BellIcon} />} aria-label={copy.notifications} />} user={<Button variant="secondary">{copy.profile}</Button>} />;
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Bouton menu',
  parameters: componentSource(importNavbar, \`<Navbar
    brand={<a href="/">Dudalo</a>}
    menuLabel="Ouvrir la navigation"
    menuControls="nav-mobile"
    onMenuOpenChange={() => {}}
    user={<Button variant="secondary">Profil</Button>}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = navbarCopy(docsLocale(globals.locale));
    const side = sidebarCopy(docsLocale(globals.locale));
    return <Navbar {...args} brand={<a href="/">{copy.brand}</a>} menuLabel={side.openNav} menuControls="nav-mobile" onMenuOpenChange={() => undefined} user={<Button variant="secondary">{copy.profile}</Button>} />;
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Default","MenuButton"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:o,MenuButton:r,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{o as D,r as M,E as N};
