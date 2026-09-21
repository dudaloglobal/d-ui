import{r as t,j as e,h as N,q as C,d as k,s as Ce,p as ke}from"./iframe-DuUAVHwV.js";import{S as Oe}from"./arg-types-CGfSQUbN.js";import{c as O,b as we}from"./docs-source-C_O40UCi.js";import{S as Le}from"./SkipLink-CpFvHCiR.js";import{B as qe}from"./Button-2tN7Wiju.js";import{I as f}from"./Icon-BHNd7lTx.js";import{N as Te}from"./Navbar-rOzMKzYW.js";import{d as Fe,u as Be,a as Ve,b as Ae,c as He,F as Me,g as Re,o as _e}from"./floating-DaBzMByz.js";import{V as Pe}from"./VisuallyHidden-Ke44Yr13.js";import{I as _}from"./IconButton-BFkWcZFM.js";import{F as ae,a as De}from"./HomeIcon-BKe7oqh-.js";import{F as re}from"./BookOpenIcon-Xvc5swdx.js";function Ge({title:r,titleId:n,...a},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":n},a),r?t.createElement("title",{id:n},r):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"}))}const ne=t.forwardRef(Ge),oe=t.createContext(null);function se(r){const n=t.useContext(oe);if(!n)throw new Error(`${r} must be used within Sidebar`);return n}const ie={sm:"min-h-8 px-2 text-sm",md:"min-h-9 px-3 text-sm"};function Ee(r,n){return n||(typeof r=="string"||typeof r=="number"?String(r):"")}function te({open:r}){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:r?"rotate-90":void 0,children:e.jsx("path",{d:"M6 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function ze({label:r,id:n,collapsed:a,collapsible:o,collapseLabel:l,expandLabel:c,onToggleCollapsed:u,size:d,overlay:s,onClose:m,closeLabel:b,children:p,className:S,...L}){return e.jsxs("nav",{...L,id:n,"aria-label":r,className:N("flex h-full flex-col border-e border-border bg-bg text-fg",a?"w-14":"w-56",S),children:[o||s?e.jsx("div",{className:N("flex items-center border-b border-border-subtle p-1",a||s?"justify-center":"justify-end"),children:s?e.jsx(_,{size:"sm",icon:e.jsx(Ze,{}),"aria-label":b,onClick:m}):e.jsx(_,{size:"sm",icon:e.jsx(te,{open:!a}),"aria-label":a?c:l,onClick:u})}):null,e.jsx(oe.Provider,{value:{collapsed:a,size:d},children:e.jsx("ul",{className:"m-0 flex list-none flex-col gap-0.5 overflow-y-auto p-2",children:p})})]})}function Ze(){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function h({label:r="Navigation",collapsed:n,defaultCollapsed:a=!1,onCollapsedChange:o,collapsible:l=!1,collapseLabel:c="Collapse sidebar",expandLabel:u="Expand sidebar",size:d="md",overlay:s=!1,open:m,defaultOpen:b=!1,onOpenChange:p,closeLabel:S="Close navigation",children:L,className:ce,id:de,...ue}){const me=t.useId(),pe=de??me,[be,fe]=t.useState(a),[he,Se]=t.useState(b),F=n!==void 0,B=m!==void 0,V=n??be,A=s?m??he:!0,ve=t.useCallback(v=>{F||fe(v),o==null||o(v)},[F,o]),q=t.useCallback(v=>{B||Se(v),p==null||p(v)},[B,p]),[Ie,H]=t.useState(null),ge=Fe(Ie),M=_e(ge),{refs:xe,context:T}=Be({open:s?A:!1,onOpenChange:q}),ye=Ve(T,{enabled:s,outsidePress:!1,ancestorScroll:!1}),je=Ae(T,{role:"dialog"}),{getFloatingProps:Ne}=He([ye,je]),R=e.jsx(ze,{...ue,id:pe,label:r,collapsed:s?!1:V,collapsible:l&&!s,collapseLabel:c,expandLabel:u,onToggleCollapsed:()=>ve(!V),size:d,overlay:s,onClose:()=>q(!1),closeLabel:S,className:ce,children:L});return s?A?e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:H,hidden:!0}),e.jsx(Me,{children:e.jsx(Re,{context:T,modal:!0,returnFocus:!0,initialFocus:0,children:e.jsxs("div",{ref:xe.setFloating,...Ne(),...M,"aria-label":r,className:N(M.className,"fixed inset-0 z-50 outline-none"),children:[e.jsx("button",{type:"button",tabIndex:-1,"aria-hidden":"true","data-testid":"sidebar-backdrop",className:"absolute inset-0 bg-fg/40",onClick:()=>q(!1)}),e.jsx("div",{className:"relative h-full w-56 max-w-[85vw] shadow-lg",children:R})]})})})]}):e.jsx("span",{ref:H,hidden:!0}):R}function i({href:r,icon:n,current:a=!1,label:o,children:l,className:c,onClick:u,...d}){const s=se("SidebarItem"),m=Ee(l,o),b=s.collapsed&&!!n,p=e.jsxs(e.Fragment,{children:[n?e.jsx("span",{className:"inline-flex shrink-0 [&_svg]:block","aria-hidden":"true",children:n}):null,b?e.jsx(Pe,{children:m||l}):e.jsx("span",{className:"min-w-0 flex-1 text-start",children:l})]}),S=N("flex w-full items-center gap-2 rounded-sm font-sans font-medium text-fg no-underline",ie[s.size],b&&"justify-center px-0","bg-transparent hover:bg-surface-muted","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg",a&&"bg-surface-muted",c);return e.jsx("li",{className:"m-0 p-0",children:r?e.jsx("a",{href:r,"aria-current":a?"page":void 0,"aria-label":b&&m?m:void 0,className:S,onClick:u,children:p}):e.jsx("button",{...d,type:"button","aria-current":a?"page":void 0,"aria-label":b&&m?m:void 0,className:S,onClick:u,children:p})})}function le({label:r,icon:n,defaultOpen:a=!1,children:o}){const l=se("SidebarGroup"),[c,u]=t.useState(a),d=l.collapsed&&!!n;return e.jsxs("li",{className:"m-0 p-0",children:[e.jsxs("button",{type:"button","aria-expanded":c,"aria-label":r,onClick:()=>u(s=>!s),className:N("flex w-full items-center gap-2 rounded-sm font-sans font-medium text-fg",ie[l.size],d&&"justify-center px-0","bg-transparent hover:bg-surface-muted","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg"),children:[n?e.jsx("span",{className:"inline-flex shrink-0 [&_svg]:block","aria-hidden":"true",children:n}):null,d?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"min-w-0 flex-1 text-start",children:r}),e.jsx("span",{className:"inline-flex shrink-0 text-fg-muted",children:e.jsx(te,{open:c})})]})]}),c?e.jsx("ul",{className:"m-0 list-none p-0 ps-2",children:o}):null]})}h.__docgenInfo={description:`Navigation latérale d’une coquille d’application.
Les items sont fournis par l’app : pas de sitemap LMS figé.`,methods:[],displayName:"Sidebar",props:{label:{required:!1,tsType:{name:"string"},description:"Nom accessible du `nav`. Fallback anglais si omis.",defaultValue:{value:"'Navigation'",computed:!1}},collapsed:{required:!1,tsType:{name:"boolean"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"Affiche le bouton replier / déployer.",defaultValue:{value:"false",computed:!1}},collapseLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Collapse sidebar'",computed:!1}},expandLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Expand sidebar'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},overlay:{required:!1,tsType:{name:"boolean"},description:"Panneau modal (petit écran). Escape et le fond ferment.\nPas un `Drawer` : overlay de navigation uniquement.",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Close navigation'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{href:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},current:{required:!1,tsType:{name:"boolean"},description:'Page courante : `aria-current="page"`.',defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Nom si `children` n’est pas une chaîne (obligatoire en mode replié avec icône)."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};le.__docgenInfo={description:"",methods:[],displayName:"SidebarGroup",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const w="import { Icon, Sidebar, SidebarGroup, SidebarItem } from 'd-ui';",$e=`import { useState } from 'react';
import { Icon, Navbar, Sidebar, SidebarItem, SkipLink } from 'd-ui';`,We={title:"Components/Sidebar",component:h,argTypes:Oe,args:{children:e.jsx("span",{})}},I={name:"Par défaut",parameters:O(w,`<Sidebar label="Navigation principale">
    <SidebarItem href="/accueil" current>
        Accueil
    </SidebarItem>
    <SidebarItem href="/cours">Cours</SidebarItem>
    <SidebarItem href="/devoirs">Devoirs</SidebarItem>
</Sidebar>`),render:(r,{globals:n})=>{const a=C(k(n.locale));return e.jsx("div",{className:"h-72",children:e.jsxs(h,{...r,label:a.label,children:[e.jsx(i,{href:"#accueil",current:!0,children:a.home}),e.jsx(i,{href:"#cours",children:a.courses}),e.jsx(i,{href:"#devoirs",children:a.homework})]})})}},g={name:"Avec icônes",parameters:O(w,`<Sidebar label="Navigation principale">
    <SidebarItem href="/accueil" icon={<Icon as={HomeIcon} />} current>
        Accueil
    </SidebarItem>
    <SidebarItem href="/cours" icon={<Icon as={BookOpenIcon} />}>
        Cours
    </SidebarItem>
</Sidebar>`),render:(r,{globals:n})=>{const a=C(k(n.locale));return e.jsx("div",{className:"h-72",children:e.jsxs(h,{...r,label:a.label,children:[e.jsx(i,{href:"#accueil",icon:e.jsx(f,{as:ae}),current:!0,children:a.home}),e.jsx(i,{href:"#cours",icon:e.jsx(f,{as:re}),children:a.courses}),e.jsx(i,{href:"#devoirs",icon:e.jsx(f,{as:ne}),children:a.homework})]})})}},x={name:"Replié",parameters:O(w,`<Sidebar label="Navigation principale" collapsed collapsible>
    <SidebarItem href="/accueil" icon={<Icon as={HomeIcon} />} current>
        Accueil
    </SidebarItem>
    <SidebarItem href="/cours" icon={<Icon as={BookOpenIcon} />}>
        Cours
    </SidebarItem>
</Sidebar>`),render:(r,{globals:n})=>{const a=C(k(n.locale));return e.jsx("div",{className:"h-72",children:e.jsxs(h,{...r,label:a.label,defaultCollapsed:!0,collapsible:!0,collapseLabel:a.collapse,expandLabel:a.expand,children:[e.jsx(i,{href:"#accueil",icon:e.jsx(f,{as:ae}),current:!0,children:a.home}),e.jsx(i,{href:"#cours",icon:e.jsx(f,{as:re}),children:a.courses}),e.jsx(i,{href:"#devoirs",icon:e.jsx(f,{as:ne}),children:a.homework})]})})}},y={name:"Imbriqués",parameters:O(w,`<Sidebar label="Navigation principale">
    <SidebarItem href="/accueil" current>
        Accueil
    </SidebarItem>
    <SidebarGroup label="Cours" defaultOpen>
        <SidebarItem href="/maths">Maths</SidebarItem>
        <SidebarItem href="/histoire">Histoire</SidebarItem>
    </SidebarGroup>
</Sidebar>`),render:(r,{globals:n})=>{const a=C(k(n.locale));return e.jsx("div",{className:"h-72",children:e.jsxs(h,{...r,label:a.label,children:[e.jsx(i,{href:"#accueil",current:!0,children:a.home}),e.jsxs(le,{label:a.courses,icon:e.jsx(f,{as:De}),defaultOpen:!0,children:[e.jsx(i,{href:"#maths",children:a.maths}),e.jsx(i,{href:"#histoire",children:a.history})]})]})})}},j={name:"Superposition",parameters:we($e,`const [open, setOpen] = useState(false);
return (
    <>
        <SkipLink>Aller au contenu principal</SkipLink>
        <Navbar
            brand={<a href="/">Dudalo</a>}
            menuLabel="Ouvrir la navigation"
            menuOpen={open}
            menuControls="nav-mobile"
            onMenuOpenChange={setOpen}
            user={<Button variant="secondary">Profil</Button>}
        />
        <Sidebar
            id="nav-mobile"
            label="Navigation principale"
            overlay
            open={open}
            onOpenChange={setOpen}
            closeLabel="Fermer la navigation"
        >
            <SidebarItem href="/accueil" current>
                Accueil
            </SidebarItem>
            <SidebarItem href="/cours">Cours</SidebarItem>
        </Sidebar>
        <main id="main" tabIndex={-1}>
            Contenu du cours
        </main>
    </>
);`),render:(r,{globals:n})=>{const a=k(n.locale),o=C(a),l=ke(a),c=Ce(a);function u(){const[d,s]=t.useState(!1);return e.jsxs("div",{className:"overflow-hidden rounded-md border border-border",children:[e.jsx(Le,{children:c.label}),e.jsx(Te,{brand:e.jsx("a",{href:"/",children:l.brand}),menuLabel:o.openNav,menuOpen:d,menuControls:"nav-mobile",onMenuOpenChange:s,user:e.jsx(qe,{variant:"secondary",children:l.profile})}),e.jsxs(h,{...r,id:"nav-mobile",label:o.label,overlay:!0,open:d,onOpenChange:s,closeLabel:o.closeNav,children:[e.jsx(i,{href:"#accueil",current:!0,children:o.home}),e.jsx(i,{href:"#cours",children:o.courses}),e.jsx(i,{href:"#devoirs",children:o.homework})]}),e.jsx("main",{id:"main",tabIndex:-1,className:"bg-bg p-4 text-fg",children:o.main})]})}return e.jsx(u,{})}};var P,D,G;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importSidebar, \`<Sidebar label="Navigation principale">
    <SidebarItem href="/accueil" current>
        Accueil
    </SidebarItem>
    <SidebarItem href="/cours">Cours</SidebarItem>
    <SidebarItem href="/devoirs">Devoirs</SidebarItem>
</Sidebar>\`),
  render: (args, {
    globals
  }) => {
    const copy = sidebarCopy(docsLocale(globals.locale));
    return <div className="h-72">
        <Sidebar {...args} label={copy.label}>
          <SidebarItem href="#accueil" current>
            {copy.home}
          </SidebarItem>
          <SidebarItem href="#cours">{copy.courses}</SidebarItem>
          <SidebarItem href="#devoirs">{copy.homework}</SidebarItem>
        </Sidebar>
      </div>;
  }
}`,...(G=(D=I.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var E,z,Z;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Avec icônes',
  parameters: componentSource(importSidebar, \`<Sidebar label="Navigation principale">
    <SidebarItem href="/accueil" icon={<Icon as={HomeIcon} />} current>
        Accueil
    </SidebarItem>
    <SidebarItem href="/cours" icon={<Icon as={BookOpenIcon} />}>
        Cours
    </SidebarItem>
</Sidebar>\`),
  render: (args, {
    globals
  }) => {
    const copy = sidebarCopy(docsLocale(globals.locale));
    return <div className="h-72">
        <Sidebar {...args} label={copy.label}>
          <SidebarItem href="#accueil" icon={<Icon as={HomeIcon} />} current>
            {copy.home}
          </SidebarItem>
          <SidebarItem href="#cours" icon={<Icon as={BookOpenIcon} />}>
            {copy.courses}
          </SidebarItem>
          <SidebarItem href="#devoirs" icon={<Icon as={ClipboardDocumentListIcon} />}>
            {copy.homework}
          </SidebarItem>
        </Sidebar>
      </div>;
  }
}`,...(Z=(z=g.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};var $,W,U;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Replié',
  parameters: componentSource(importSidebar, \`<Sidebar label="Navigation principale" collapsed collapsible>
    <SidebarItem href="/accueil" icon={<Icon as={HomeIcon} />} current>
        Accueil
    </SidebarItem>
    <SidebarItem href="/cours" icon={<Icon as={BookOpenIcon} />}>
        Cours
    </SidebarItem>
</Sidebar>\`),
  render: (args, {
    globals
  }) => {
    const copy = sidebarCopy(docsLocale(globals.locale));
    return <div className="h-72">
        <Sidebar {...args} label={copy.label} defaultCollapsed collapsible collapseLabel={copy.collapse} expandLabel={copy.expand}>
          <SidebarItem href="#accueil" icon={<Icon as={HomeIcon} />} current>
            {copy.home}
          </SidebarItem>
          <SidebarItem href="#cours" icon={<Icon as={BookOpenIcon} />}>
            {copy.courses}
          </SidebarItem>
          <SidebarItem href="#devoirs" icon={<Icon as={ClipboardDocumentListIcon} />}>
            {copy.homework}
          </SidebarItem>
        </Sidebar>
      </div>;
  }
}`,...(U=(W=x.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Imbriqués',
  parameters: componentSource(importSidebar, \`<Sidebar label="Navigation principale">
    <SidebarItem href="/accueil" current>
        Accueil
    </SidebarItem>
    <SidebarGroup label="Cours" defaultOpen>
        <SidebarItem href="/maths">Maths</SidebarItem>
        <SidebarItem href="/histoire">Histoire</SidebarItem>
    </SidebarGroup>
</Sidebar>\`),
  render: (args, {
    globals
  }) => {
    const copy = sidebarCopy(docsLocale(globals.locale));
    return <div className="h-72">
        <Sidebar {...args} label={copy.label}>
          <SidebarItem href="#accueil" current>
            {copy.home}
          </SidebarItem>
          <SidebarGroup label={copy.courses} icon={<Icon as={AcademicCapIcon} />} defaultOpen>
            <SidebarItem href="#maths">{copy.maths}</SidebarItem>
            <SidebarItem href="#histoire">{copy.history}</SidebarItem>
          </SidebarGroup>
        </Sidebar>
      </div>;
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,ee;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Superposition',
  parameters: componentSourceFn(importOverlay, \`const [open, setOpen] = useState(false);
return (
    <>
        <SkipLink>Aller au contenu principal</SkipLink>
        <Navbar
            brand={<a href="/">Dudalo</a>}
            menuLabel="Ouvrir la navigation"
            menuOpen={open}
            menuControls="nav-mobile"
            onMenuOpenChange={setOpen}
            user={<Button variant="secondary">Profil</Button>}
        />
        <Sidebar
            id="nav-mobile"
            label="Navigation principale"
            overlay
            open={open}
            onOpenChange={setOpen}
            closeLabel="Fermer la navigation"
        >
            <SidebarItem href="/accueil" current>
                Accueil
            </SidebarItem>
            <SidebarItem href="/cours">Cours</SidebarItem>
        </Sidebar>
        <main id="main" tabIndex={-1}>
            Contenu du cours
        </main>
    </>
);\`),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = sidebarCopy(locale);
    const nav = navbarCopy(locale);
    const skip = skipLinkCopy(locale);
    function Shell() {
      const [open, setOpen] = useState(false);
      return <div className="overflow-hidden rounded-md border border-border">
          <SkipLink>{skip.label}</SkipLink>
          <Navbar brand={<a href="/">{nav.brand}</a>} menuLabel={copy.openNav} menuOpen={open} menuControls="nav-mobile" onMenuOpenChange={setOpen} user={<Button variant="secondary">{nav.profile}</Button>} />
          <Sidebar {...args} id="nav-mobile" label={copy.label} overlay open={open} onOpenChange={setOpen} closeLabel={copy.closeNav}>
            <SidebarItem href="#accueil" current>
              {copy.home}
            </SidebarItem>
            <SidebarItem href="#cours">{copy.courses}</SidebarItem>
            <SidebarItem href="#devoirs">{copy.homework}</SidebarItem>
          </Sidebar>
          <main id="main" tabIndex={-1} className="bg-bg p-4 text-fg">
            {copy.main}
          </main>
        </div>;
    }
    return <Shell />;
  }
}`,...(ee=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const Ue=["Default","Icons","Collapsed","Nested","Overlay"],ta=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:x,Default:I,Icons:g,Nested:y,Overlay:j,__namedExportsOrder:Ue,default:We},Symbol.toStringTag,{value:"Module"}));export{x as C,I as D,g as I,y as N,j as O,ta as S};
