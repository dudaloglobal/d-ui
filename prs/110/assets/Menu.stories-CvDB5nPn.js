import{j as e,r as s,f as _,V as v,d as j}from"./iframe-Cu1DtCRJ.js";import{c as S}from"./docs-source-C_O40UCi.js";import{m as en}from"./arg-types-D4Qb33ct.js";import{B as f}from"./Button-DS2SrhEy.js";import{n as Te,p as nn,q as tn,r as rn,u as an,i as on,o as sn,j as un,s as ln,a as cn,t as mn,v as dn,b as pn,w as Mn,c as gn,d as bn,x as fn,y as In,e as yn,z as xn,g as hn,h as vn,m as oe,l as jn}from"./floating-CRLOEAIU.js";const Ne=s.createContext(null);function Re(t){const r=s.useContext(Ne);if(!r)throw new Error(`${t} must be used within Menu or ContextMenu`);return r}const Ce={sm:"min-h-8 px-2 text-sm",md:"min-h-9 px-3 text-sm",lg:"min-h-10 px-3 text-base"};function Sn(t,r){return r||(typeof t=="string"||typeof t=="number"?String(t):"")}function Bn(){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M6 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function H({mode:t,label:r="Menu",trigger:n,triggerLabel:l,children:B,size:R="md",placement:F,disabled:i=!1,open:A,defaultOpen:$=!1,onOpenChange:b,className:d,parentSurface:c,parentIndex:I}){const O=s.useId(),u=tn(),k=Te(),m=rn(),p=t==="submenu",[ze,Ee]=s.useState($),[K,W]=s.useState(null),[Pe,X]=s.useState(null),[x,V]=s.useState(null),J=A!==void 0,M=i?!1:A??ze,h=s.useCallback(o=>{i&&o||(J||Ee(o),b==null||b(o),o||V(null))},[i,J,b]),Q=s.useRef([]),Z=s.useRef([]),ee=s.useRef(0);ee.current=0;const Le=F??(p||t==="context"?"right-start":"bottom-start"),{refs:U,floatingStyles:ke,context:y}=an({nodeId:u,open:M,onOpenChange:h,placement:Le,middleware:[sn(p?{mainAxis:0,alignmentAxis:-4}:4),un({padding:oe,fallbackAxisSideDirection:"start"}),ln({padding:oe})],whileElementsMounted:on}),_e=cn(Pe),ne=jn(_e),Fe=mn(y,{enabled:p&&!i,delay:{open:75},handleClose:dn({blockPointerEvents:!0})}),$e=pn(y,{enabled:t==="menu"&&!i,event:"mousedown",toggle:!p,ignoreMouse:p}),Oe=Mn(y,{enabled:t==="context"&&M&&x!==null,x:x==null?void 0:x.x,y:x==null?void 0:x.y}),Ke=gn(y,{bubbles:p,ancestorScroll:!0}),Ve=bn(y,{role:"menu"}),Ue=fn(y,{listRef:Q,activeIndex:K,nested:p,loop:!0,focusItemOnOpen:!0,onNavigate:W}),Ye=In(y,{listRef:Z,activeIndex:K,onMatch:M?W:void 0}),{getReferenceProps:te,getFloatingProps:Ge,getItemProps:He}=yn([Fe,$e,Oe,Ke,Ve,Ue,Ye]);s.useEffect(()=>{if(!m)return;function o(){h(!1)}function G(C){C.nodeId!==u&&C.parentId===k&&h(!1)}return m.events.on("click",o),m.events.on("menuopen",G),()=>{m.events.off("click",o),m.events.off("menuopen",G)}},[u,k,h,m]),s.useEffect(()=>{M&&m&&m.events.emit("menuopen",{parentId:k,nodeId:u})},[M,m,u,k]);function We(){m==null||m.events.emit("click"),h(!1)}const Xe={size:R,activeIndex:K,nextIndex:()=>ee.current++,listRef:Q,labelsRef:Z,getItemProps:He,closeTree:We},Y=`${O}-menu`;s.useLayoutEffect(()=>{!c||I===void 0||!l||(c.labelsRef.current[I]=i?null:l)});const Je=p?c==null?void 0:c.getItemProps(te({ref(o){U.setReference(o),X(o),c&&I!==void 0&&(c.listRef.current[I]=o)}})):void 0,Qe=p?e.jsxs("button",{type:"button",role:"menuitem","aria-haspopup":"menu","aria-expanded":M,"aria-controls":M?Y:void 0,disabled:i,"aria-disabled":i||void 0,...Je,className:_("flex w-full items-center justify-between gap-6 rounded-sm font-sans font-medium text-fg",Ce[R],"bg-transparent text-start","focus-visible:bg-surface-muted focus-visible:outline-none",M&&"bg-surface-muted",i&&"opacity-50"),children:[e.jsx("span",{children:l}),e.jsx("span",{className:"inline-flex shrink-0 text-fg-muted","aria-hidden":"true",children:e.jsx(Bn,{})})]}):s.isValidElement(n)?e.jsx("span",{ref:o=>{U.setReference(o),X(o)},className:"inline-flex max-w-full",children:s.cloneElement(n,te({"aria-haspopup":"menu","aria-expanded":M,"aria-controls":M?Y:void 0,disabled:i||!!n.props.disabled,...t==="context"?{tabIndex:n.props.tabIndex??0,onContextMenu(o){i||(o.preventDefault(),V({x:o.clientX,y:o.clientY}),h(!0))},onKeyDown(o){var re,ae;if((ae=(re=n.props).onKeyDown)==null||ae.call(re,o),o.defaultPrevented||i||!(o.key==="ContextMenu"||o.key==="F10"&&o.shiftKey))return;o.preventDefault();const C=o.currentTarget.getBoundingClientRect();V({x:C.left,y:C.bottom}),h(!0)}}:{}}))}):n,Ze=e.jsx("div",{ref:U.setFloating,id:Y,style:ke,...Ge(),...ne,"aria-label":r,"aria-labelledby":void 0,className:_(ne.className,"min-w-44 rounded-md border border-border bg-bg py-1 text-fg shadow-lg outline-none",d),children:e.jsx(Ne.Provider,{value:Xe,children:B})});return e.jsxs(xn,{id:u,children:[Qe,M?e.jsx(hn,{children:e.jsx(vn,{context:y,modal:!1,initialFocus:p?-1:0,returnFocus:!p,guards:!1,children:Ze})}):null]})}function qe({children:t}){return Te()===null?e.jsx(nn,{children:t}):t}function g(t){return e.jsx(qe,{children:e.jsx(H,{mode:"menu",...t})})}function we(t){return e.jsx(qe,{children:e.jsx(H,{mode:"context",...t})})}function De({label:t,disabled:r,children:n}){const l=Re("MenuSub"),B=l.nextIndex();return e.jsx(H,{mode:"submenu",label:t,triggerLabel:t,disabled:r,size:l.size,parentSurface:l,parentIndex:B,children:n})}const a=s.forwardRef(function({children:r,onSelect:n,disabled:l,shortcut:B,icon:R,textValue:F,className:i,onClick:A,...$},b){const d=Re("MenuItem"),c=d.nextIndex(),I=d.activeIndex===c,O=Sn(r,F);return s.useLayoutEffect(()=>{d.labelsRef.current[c]=l?null:O}),s.useLayoutEffect(()=>{var u;!I||l||(u=d.listRef.current[c])==null||u.focus({preventScroll:!0})},[l,c,I,d.listRef]),e.jsxs("button",{...$,type:"button",role:"menuitem",disabled:l,"aria-disabled":l||void 0,...d.getItemProps({ref(u){d.listRef.current[c]=u,typeof b=="function"?b(u):b&&(b.current=u)},onClick(u){A==null||A(u),!(l||u.defaultPrevented)&&(n==null||n(),d.closeTree())}}),className:_("flex w-full items-center gap-2 rounded-sm font-sans font-medium text-fg",Ce[d.size],"bg-transparent text-start","focus-visible:bg-surface-muted focus-visible:outline-none",I&&"bg-surface-muted",l&&"opacity-50",i),children:[R?e.jsx("span",{className:"inline-flex shrink-0 [&_svg]:block","aria-hidden":"true",children:R}):null,e.jsx("span",{className:"min-w-0 flex-1",children:r}),B?e.jsx("kbd",{className:"text-fg-muted ms-4 font-sans text-xs font-normal",children:B}):null]})});function T({className:t,...r}){return e.jsx("div",{...r,role:"separator",className:_("bg-border-subtle my-1 h-px w-full",t)})}g.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{label:{required:!1,tsType:{name:"string"},description:"Nom accessible du `menu`. Fallback anglais si omis."},trigger:{required:!0,tsType:{name:"ReactElement"},description:"Déclencheur unique (focusable), typiquement un `Button`."},children:{required:!0,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'right'
| 'right-start'
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};we.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'
| 'right'
| 'right-start'
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:""}}};De.__docgenInfo={description:"",methods:[],displayName:"MenuSub",props:{label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},shortcut:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},textValue:{required:!1,tsType:{name:"string"},description:"Texte pour le typeahead si `children` n’est pas une chaîne."}}};T.__docgenInfo={description:"",methods:[],displayName:"MenuSeparator"};const N="import { Button, Menu, MenuItem, MenuSeparator, MenuSub } from 'd-ui';",An="import { Button, ContextMenu, Menu, MenuItem, MenuSeparator } from 'd-ui';",Tn={title:"Components/Menu",component:g,argTypes:en,args:{trigger:e.jsx("span",{}),children:e.jsx("span",{})}},q={name:"Par défaut",parameters:S(N,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem>Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=v(j(r.locale));return e.jsxs(g,{...t,label:n.label,trigger:e.jsx(f,{variant:"secondary",children:n.actions}),children:[e.jsx(a,{children:n.rename}),e.jsx(a,{children:n.duplicate}),e.jsx(T,{}),e.jsx(a,{children:n.delete})]})}},w={name:"Raccourcis",parameters:S(N,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem shortcut="⌘S">Enregistrer</MenuItem>
    <MenuItem shortcut="⌘⇧D">Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem shortcut="⌘⌫">Supprimer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=v(j(r.locale));return e.jsxs(g,{...t,label:n.label,trigger:e.jsx(f,{variant:"secondary",children:n.actions}),children:[e.jsx(a,{shortcut:n.saveShortcut,children:n.save}),e.jsx(a,{shortcut:n.duplicateShortcut,children:n.duplicate}),e.jsx(T,{}),e.jsx(a,{shortcut:n.deleteShortcut,children:n.delete})]})}},D={name:"Éléments désactivés",parameters:S(N,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem disabled>Archiver</MenuItem>
    <MenuItem>Supprimer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=v(j(r.locale));return e.jsxs(g,{...t,label:n.label,trigger:e.jsx(f,{variant:"secondary",children:n.actions}),children:[e.jsx(a,{children:n.rename}),e.jsx(a,{disabled:!0,children:n.archive}),e.jsx(a,{children:n.delete})]})}},z={name:"Sous-menu",parameters:S(N,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuSub label="Partager">
        <MenuItem>Copier le lien</MenuItem>
        <MenuItem>E-mail</MenuItem>
    </MenuSub>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=v(j(r.locale));return e.jsxs(g,{...t,label:n.label,trigger:e.jsx(f,{variant:"secondary",children:n.actions}),children:[e.jsx(a,{children:n.rename}),e.jsxs(De,{label:n.share,children:[e.jsx(a,{children:n.copyLink}),e.jsx(a,{children:n.email})]}),e.jsx(T,{}),e.jsx(a,{children:n.delete})]})}},E={name:"Menu contextuel",parameters:S(An,`<>
    <Menu label="Actions du fichier" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
    </Menu>
    <ContextMenu
        label="Actions du fichier"
        trigger={
            <button type="button" className="rounded-md border border-border px-4 py-8">
                Fiche devoir
            </button>
        }
    >
        <MenuItem>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
    </ContextMenu>
</>`),render:(t,{globals:r})=>{const n=v(j(r.locale));return e.jsxs("div",{className:"flex flex-col items-start gap-4",children:[e.jsxs(g,{...t,label:n.fileLabel,trigger:e.jsx(f,{variant:"secondary",children:n.actions}),children:[e.jsx(a,{children:n.open}),e.jsx(a,{children:n.download}),e.jsx(T,{}),e.jsx(a,{children:n.delete})]}),e.jsxs(we,{label:n.fileLabel,trigger:e.jsx("button",{type:"button",className:"rounded-md border border-border bg-bg px-4 py-8 text-start text-fg",children:n.card}),children:[e.jsx(a,{children:n.open}),e.jsx(a,{children:n.download}),e.jsx(T,{}),e.jsx(a,{children:n.delete})]})]})}},P={name:"Tailles",parameters:S(N,`<>
    <Menu size="sm" label="Actions du devoir" trigger={<Button size="sm" variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu size="md" label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>`),render:(t,{globals:r})=>{const n=v(j(r.locale));return e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsxs(g,{...t,size:"sm",label:`${n.label} (${n.small})`,trigger:e.jsx(f,{size:"sm",variant:"secondary",children:n.actions}),children:[e.jsx(a,{children:n.rename}),e.jsx(a,{children:n.duplicate})]}),e.jsxs(g,{...t,size:"md",label:`${n.label} (${n.medium})`,trigger:e.jsx(f,{variant:"secondary",children:n.actions}),children:[e.jsx(a,{children:n.rename}),e.jsx(a,{children:n.duplicate})]}),e.jsxs(g,{...t,size:"lg",label:`${n.label} (${n.large})`,trigger:e.jsx(f,{size:"lg",variant:"secondary",children:n.actions}),children:[e.jsx(a,{children:n.rename}),e.jsx(a,{children:n.duplicate})]})]})}},L={name:"Désactivé",parameters:S(N,`<Menu disabled label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=v(j(r.locale));return e.jsx(g,{...t,disabled:!0,label:n.label,trigger:e.jsx(f,{variant:"secondary",children:n.actions}),children:e.jsx(a,{children:n.rename})})}};var se,ue,le;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importMenu, \`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem>Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem>{copy.rename}</MenuItem>
        <MenuItem>{copy.duplicate}</MenuItem>
        <MenuSeparator />
        <MenuItem>{copy.delete}</MenuItem>
      </Menu>;
  }
}`,...(le=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var ie,ce,me;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Raccourcis',
  parameters: componentSource(importMenu, \`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem shortcut="⌘S">Enregistrer</MenuItem>
    <MenuItem shortcut="⌘⇧D">Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem shortcut="⌘⌫">Supprimer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem shortcut={copy.saveShortcut}>{copy.save}</MenuItem>
        <MenuItem shortcut={copy.duplicateShortcut}>{copy.duplicate}</MenuItem>
        <MenuSeparator />
        <MenuItem shortcut={copy.deleteShortcut}>{copy.delete}</MenuItem>
      </Menu>;
  }
}`,...(me=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,pe,Me;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Éléments désactivés',
  parameters: componentSource(importMenu, \`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem disabled>Archiver</MenuItem>
    <MenuItem>Supprimer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem>{copy.rename}</MenuItem>
        <MenuItem disabled>{copy.archive}</MenuItem>
        <MenuItem>{copy.delete}</MenuItem>
      </Menu>;
  }
}`,...(Me=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:Me.source}}};var ge,be,fe;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Sous-menu',
  parameters: componentSource(importMenu, \`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuSub label="Partager">
        <MenuItem>Copier le lien</MenuItem>
        <MenuItem>E-mail</MenuItem>
    </MenuSub>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem>{copy.rename}</MenuItem>
        <MenuSub label={copy.share}>
          <MenuItem>{copy.copyLink}</MenuItem>
          <MenuItem>{copy.email}</MenuItem>
        </MenuSub>
        <MenuSeparator />
        <MenuItem>{copy.delete}</MenuItem>
      </Menu>;
  }
}`,...(fe=(be=z.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ie,ye,xe;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Menu contextuel',
  parameters: componentSource(importContext, \`<>
    <Menu label="Actions du fichier" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
    </Menu>
    <ContextMenu
        label="Actions du fichier"
        trigger={
            <button type="button" className="rounded-md border border-border px-4 py-8">
                Fiche devoir
            </button>
        }
    >
        <MenuItem>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
    </ContextMenu>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <div className="flex flex-col items-start gap-4">
        <Menu {...args} label={copy.fileLabel} trigger={<Button variant="secondary">{copy.actions}</Button>}>
          <MenuItem>{copy.open}</MenuItem>
          <MenuItem>{copy.download}</MenuItem>
          <MenuSeparator />
          <MenuItem>{copy.delete}</MenuItem>
        </Menu>
        <ContextMenu label={copy.fileLabel} trigger={<button type="button" className="rounded-md border border-border bg-bg px-4 py-8 text-start text-fg">
              {copy.card}
            </button>}>
          <MenuItem>{copy.open}</MenuItem>
          <MenuItem>{copy.download}</MenuItem>
          <MenuSeparator />
          <MenuItem>{copy.delete}</MenuItem>
        </ContextMenu>
      </div>;
  }
}`,...(xe=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var he,ve,je;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importMenu, \`<>
    <Menu size="sm" label="Actions du devoir" trigger={<Button size="sm" variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu size="md" label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-4">
        <Menu {...args} size="sm" label={\`\${copy.label} (\${copy.small})\`} trigger={<Button size="sm" variant="secondary">
              {copy.actions}
            </Button>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu {...args} size="md" label={\`\${copy.label} (\${copy.medium})\`} trigger={<Button variant="secondary">{copy.actions}</Button>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu {...args} size="lg" label={\`\${copy.label} (\${copy.large})\`} trigger={<Button size="lg" variant="secondary">
              {copy.actions}
            </Button>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
      </div>;
  }
}`,...(je=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:je.source}}};var Se,Be,Ae;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importMenu, \`<Menu disabled label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} disabled label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem>{copy.rename}</MenuItem>
      </Menu>;
  }
}`,...(Ae=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};const Nn=["Default","Shortcuts","DisabledItems","Submenu","Context","Sizes","Disabled"],zn=Object.freeze(Object.defineProperty({__proto__:null,Context:E,Default:q,Disabled:L,DisabledItems:D,Shortcuts:w,Sizes:P,Submenu:z,__namedExportsOrder:Nn,default:Tn},Symbol.toStringTag,{value:"Module"}));export{E as C,q as D,zn as M,w as S,D as a,z as b,P as c,L as d};
