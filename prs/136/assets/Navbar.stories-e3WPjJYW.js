import{p as b,d as s,j as a,q as g}from"./iframe-BBJWnrUE.js";import{c as f}from"./docs-source-C_O40UCi.js";import{n as N}from"./arg-types--G9daUKm.js";import{B as v}from"./Button-BaGq3ftS.js";import{I as h}from"./IconButton-XQamiyn5.js";import{I}from"./Icon-C2Ws5HFO.js";import{N as c}from"./Navbar-aqRckvrZ.js";import{F as C}from"./BellIcon-wh_IeaCt.js";const B="import { Button, Icon, IconButton, Navbar } from '@dudaloglobal/d-ui';",x={title:"Components/Navbar",component:c,argTypes:N},o={name:"Par défaut",parameters:f(B,`<Navbar
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
/>`),render:(t,{globals:e})=>{const n=b(s(e.locale)),y=g(s(e.locale));return a.jsx(c,{...t,brand:a.jsx("a",{href:"/",children:n.brand}),menuLabel:y.openNav,menuControls:"nav-mobile",onMenuOpenChange:()=>{},user:a.jsx(v,{variant:"secondary",children:n.profile})})}},j=["Default","MenuButton"];var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const T=Object.freeze(Object.defineProperty({__proto__:null,Default:o,MenuButton:r,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{o as D,r as M,T as N};
