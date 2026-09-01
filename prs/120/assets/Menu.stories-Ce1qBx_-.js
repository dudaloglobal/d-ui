import{r as s,j as e,h as U,ah as b,d as y}from"./iframe-B7t-M21q.js";import{c as h}from"./docs-source-C_O40UCi.js";import{M as cn}from"./arg-types-YVnHkuEO.js";import{B as M}from"./Button-DBSW31vk.js";import{I as mn}from"./IconButton-B1ZwPE3L.js";import{I as C}from"./Icon-BsoIhE7H.js";import{L as dn}from"./Link-MgkC_Lm7.js";import{t as Fe,v as pn,w as Mn,x as In,u as gn,i as fn,o as bn,j as yn,s as hn,a as xn,p as vn,y as jn,b as Sn,z as Bn,c as An,d as wn,A as Rn,B as Dn,e as Tn,C as Cn,g as qn,h as Nn,m as me,l as kn}from"./floating-D3eVabcv.js";import{F as Ln}from"./ArrowTopRightOnSquareIcon-CgXuAjGM.js";import{F as En,a as Pn}from"./TrashIcon-hfTxDPeb.js";function zn({title:t,titleId:r,...n},u){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:u,"aria-labelledby":r},n),t?s.createElement("title",{id:r},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"}))}const Fn=s.forwardRef(zn);function On({title:t,titleId:r,...n},u){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:u,"aria-labelledby":r},n),t?s.createElement("title",{id:r},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"}))}const _n=s.forwardRef(On);function $n({title:t,titleId:r,...n},u){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:u,"aria-labelledby":r},n),t?s.createElement("title",{id:r},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"}))}const Vn=s.forwardRef($n),Oe=s.createContext(null);function _e(t){const r=s.useContext(Oe);if(!r)throw new Error(`${t} must be used within Menu or ContextMenu`);return r}const $e={sm:"min-h-8 px-2 text-sm",md:"min-h-9 px-3 text-sm",lg:"min-h-10 px-3 text-base"};function Hn(t,r){return r||(typeof t=="string"||typeof t=="number"?String(t):"")}function Kn(){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M6 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function ne({mode:t,label:r="Menu",trigger:n,triggerLabel:u,children:w,size:N="md",placement:H,disabled:c=!1,open:K,defaultOpen:Y=!1,onOpenChange:R,className:G,parentSurface:f,parentIndex:x}){const W=s.useId(),I=Mn(),d=Fe(),i=In(),m=t==="submenu",[X,Z]=s.useState(Y),[D,k]=s.useState(null),[p,te]=s.useState(null),[S,J]=s.useState(null),re=K!==void 0,g=c?!1:K??X,B=s.useCallback(a=>{c&&a||(re||Z(a),R==null||R(a),a||J(null))},[c,re,R]),oe=s.useRef([]),ae=s.useRef([]),se=s.useRef(0);se.current=0;const We=H??(m||t==="context"?"right-start":"bottom-start"),{refs:Q,floatingStyles:Ze,context:v}=gn({nodeId:I,open:g,onOpenChange:B,placement:We,middleware:[bn(m?{mainAxis:0,alignmentAxis:-4}:4),yn({padding:me,fallbackAxisSideDirection:"start"}),hn({padding:me})],whileElementsMounted:fn}),Ue=xn(p),ue=kn(Ue),Ye=vn(v,{enabled:m&&!c,delay:{open:75},handleClose:jn({blockPointerEvents:!0})}),Ge=Sn(v,{enabled:t==="menu"&&!c,event:"mousedown",toggle:!m,ignoreMouse:m}),Xe=Bn(v,{enabled:t==="context"&&g&&S!==null,x:S==null?void 0:S.x,y:S==null?void 0:S.y}),Je=An(v,{bubbles:m,ancestorScroll:!0}),Qe=wn(v,{role:"menu"}),en=Rn(v,{listRef:oe,activeIndex:D,nested:m,loop:!0,focusItemOnOpen:!0,onNavigate:k}),nn=Dn(v,{listRef:ae,activeIndex:D,onMatch:g?k:void 0}),{getReferenceProps:ie,getFloatingProps:tn,getItemProps:rn}=Tn([Ye,Ge,Xe,Je,Qe,en,nn]);s.useEffect(()=>{if(!i)return;function a(){B(!1)}function T(j){j.nodeId!==I&&j.parentId===d&&B(!1)}return i.events.on("click",a),i.events.on("menuopen",T),()=>{i.events.off("click",a),i.events.off("menuopen",T)}},[I,d,B,i]),s.useEffect(()=>{g&&i&&i.events.emit("menuopen",{parentId:d,nodeId:I})},[g,i,I,d]);function on(){i==null||i.events.emit("click"),B(!1)}const an={size:N,activeIndex:D,nextIndex:()=>se.current++,listRef:oe,labelsRef:ae,getItemProps:rn,closeTree:on},ee=`${W}-menu`;s.useLayoutEffect(()=>{!f||x===void 0||!u||(f.labelsRef.current[x]=c?null:u)});const sn=m?f==null?void 0:f.getItemProps(ie({ref(a){Q.setReference(a),te(a),f&&x!==void 0&&(f.listRef.current[x]=a)}})):void 0,un=m?e.jsxs("button",{type:"button",role:"menuitem","aria-haspopup":"menu","aria-expanded":g,"aria-controls":g?ee:void 0,disabled:c,"aria-disabled":c||void 0,...sn,className:U("flex w-full items-center justify-between gap-6 rounded-sm font-sans font-medium text-fg",$e[N],"bg-transparent text-start","focus-visible:bg-surface-muted focus-visible:outline-none",g&&"bg-surface-muted",c&&"opacity-50"),children:[e.jsx("span",{children:u}),e.jsx("span",{className:"inline-flex shrink-0 text-fg-muted","aria-hidden":"true",children:e.jsx(Kn,{})})]}):s.isValidElement(n)?e.jsx("span",{ref:a=>{Q.setReference(a),te(a)},className:"inline-flex max-w-full",children:s.cloneElement(n,ie({"aria-haspopup":"menu","aria-expanded":g,"aria-controls":g?ee:void 0,disabled:c||!!n.props.disabled,onClick(a){var T,j;(j=(T=n.props).onClick)==null||j.call(T,a),!a.defaultPrevented&&a.currentTarget.closest("a")&&a.preventDefault()},...t==="context"?{tabIndex:n.props.tabIndex??0,onContextMenu(a){c||(a.preventDefault(),J({x:a.clientX,y:a.clientY}),B(!0))},onKeyDown(a){var le,ce;if((ce=(le=n.props).onKeyDown)==null||ce.call(le,a),a.defaultPrevented||c||!(a.key==="ContextMenu"||a.key==="F10"&&a.shiftKey))return;a.preventDefault();const j=a.currentTarget.getBoundingClientRect();J({x:j.left,y:j.bottom}),B(!0)}}:{}}))}):n,ln=e.jsx("div",{ref:Q.setFloating,id:ee,style:Ze,...tn(),...ue,"aria-label":r,"aria-labelledby":void 0,className:U(ue.className,"min-w-44 rounded-md border border-border bg-bg py-1 text-fg shadow-lg outline-none",G),children:e.jsx(Oe.Provider,{value:an,children:w})});return e.jsxs(Cn,{id:I,children:[un,g?e.jsx(qn,{children:e.jsx(Nn,{context:v,modal:!1,initialFocus:m?-1:0,returnFocus:!m,guards:!1,children:ln})}):null]})}function Ve({children:t}){return Fe()===null?e.jsx(pn,{children:t}):t}function l(t){return e.jsx(Ve,{children:e.jsx(ne,{mode:"menu",...t})})}function He(t){return e.jsx(Ve,{children:e.jsx(ne,{mode:"context",...t})})}function Ke({label:t,disabled:r,children:n}){const u=_e("MenuSub"),w=u.nextIndex();return e.jsx(ne,{mode:"submenu",label:t,triggerLabel:t,disabled:r,size:u.size,parentSurface:u,parentIndex:w,children:n})}const o=s.forwardRef(function({children:r,onSelect:n,disabled:u,shortcut:w,icon:N,iconEnd:H,href:c,target:K,rel:Y,download:R,textValue:G,className:f,onClick:x,...W},I){const d=_e("MenuItem"),i=d.nextIndex(),m=d.activeIndex===i,X=Hn(r,G);s.useLayoutEffect(()=>{d.labelsRef.current[i]=u?null:X}),s.useLayoutEffect(()=>{var p;!m||u||(p=d.listRef.current[i])==null||p.focus({preventScroll:!0})},[u,i,m,d.listRef]);const Z=d.getItemProps({ref(p){d.listRef.current[i]=p,typeof I=="function"?I(p):I&&(I.current=p)},onClick(p){if(x==null||x(p),u){p.preventDefault();return}p.defaultPrevented||(n==null||n(),d.closeTree())}}),D=U("flex w-full items-center gap-2 rounded-sm font-sans font-medium text-fg no-underline",$e[d.size],"bg-transparent text-start","focus-visible:bg-surface-muted focus-visible:outline-none",m&&"bg-surface-muted",u&&"pointer-events-none opacity-50",f),k=e.jsxs(e.Fragment,{children:[N?e.jsx("span",{className:"inline-flex shrink-0 [&_svg]:block","aria-hidden":"true",children:N}):null,e.jsx("span",{className:"min-w-0 flex-1",children:r}),H?e.jsx("span",{className:"inline-flex shrink-0 [&_svg]:block","aria-hidden":"true",children:H}):null,w?e.jsx("kbd",{className:"text-fg-muted ms-4 font-sans text-xs font-normal",children:w}):null]});return c?e.jsx("a",{...W,href:u?void 0:c,target:K,rel:Y,download:R,role:"menuitem","aria-disabled":u||void 0,...Z,className:D,children:k}):e.jsx("button",{...W,type:"button",role:"menuitem",disabled:u,"aria-disabled":u||void 0,...Z,className:D,children:k})});function A({className:t,...r}){return e.jsx("div",{...r,role:"separator",className:U("bg-border-subtle my-1 h-px w-full",t)})}l.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{label:{required:!1,tsType:{name:"string"},description:"Nom accessible du `menu`. Fallback anglais si omis."},trigger:{required:!0,tsType:{name:"ReactElement"},description:"Déclencheur unique (focusable), typiquement un `Button`."},children:{required:!0,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
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
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};He.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{placement:{required:!1,tsType:{name:"union",raw:`| 'top'
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
| 'right-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"}]},description:""}}};Ke.__docgenInfo={description:"",methods:[],displayName:"MenuSub",props:{label:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},shortcut:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icône avant le libellé (slot « before »)."},iconEnd:{required:!1,tsType:{name:"ReactNode"},description:"Icône après le libellé (slot « after »)."},textValue:{required:!1,tsType:{name:"string"},description:"Texte pour le typeahead si `children` n’est pas une chaîne."}}};A.__docgenInfo={description:"",methods:[],displayName:"MenuSeparator"};const q="import { Button, Menu, MenuItem, MenuSeparator, MenuSub } from 'd-ui';",Wn=`import { ChevronDownIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton, Link, Menu, MenuItem } from 'd-ui';`,Zn=`import {
    ArrowTopRightOnSquareIcon,
    DocumentDuplicateIcon,
    PencilSquareIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';
import { Button, Icon, Menu, MenuItem, MenuSeparator } from 'd-ui';`,Un="import { Button, ContextMenu, Menu, MenuItem, MenuSeparator } from 'd-ui';",Yn={title:"Components/Menu",component:l,argTypes:cn,args:{trigger:e.jsx("span",{}),children:e.jsx("span",{})}},L={name:"Par défaut",parameters:h(q,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem>Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=b(y(r.locale));return e.jsxs(l,{...t,label:n.label,trigger:e.jsx(M,{variant:"secondary",children:n.actions}),children:[e.jsx(o,{children:n.rename}),e.jsx(o,{children:n.duplicate}),e.jsx(A,{}),e.jsx(o,{children:n.delete})]})}},E={name:"Variantes de déclencheur",parameters:h(Wn,`<>
    <Menu
        label="Actions du devoir"
        trigger={
            <Button variant="secondary" icon={<Icon as={ChevronDownIcon} />} iconPosition="end">
                Actions
            </Button>
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu
        label="Actions du devoir"
        trigger={
            <IconButton icon={<Icon as={EllipsisVerticalIcon} />} aria-label="Plus d’actions" />
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu label="Actions du devoir" trigger={<Link href="#actions">Actions</Link>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu
        label="Actions du devoir"
        trigger={
            <Button variant="secondary" size="sm" className="rounded-full">
                Actions
            </Button>
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>`),render:(t,{globals:r})=>{const n=b(y(r.locale)),u=e.jsxs(e.Fragment,{children:[e.jsx(o,{children:n.rename}),e.jsx(o,{children:n.duplicate})]});return e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(l,{...t,label:n.label,trigger:e.jsx(M,{variant:"secondary",icon:e.jsx(C,{as:Pn}),iconPosition:"end",children:n.actions}),children:u}),e.jsxs(l,{label:n.label,trigger:e.jsx(mn,{icon:e.jsx(C,{as:_n}),"aria-label":n.moreActions}),children:[e.jsx(o,{children:n.rename}),e.jsx(o,{children:n.duplicate})]}),e.jsxs(l,{label:n.label,trigger:e.jsx(dn,{href:"#actions",children:n.actions}),children:[e.jsx(o,{children:n.rename}),e.jsx(o,{children:n.duplicate})]}),e.jsxs(l,{label:n.label,trigger:e.jsx(M,{variant:"secondary",size:"sm",className:"rounded-full",children:n.actions}),children:[e.jsx(o,{children:n.rename}),e.jsx(o,{children:n.duplicate})]})]})}},P={name:"Éléments du menu",parameters:h(Zn,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem icon={<Icon as={PencilSquareIcon} />}>Renommer</MenuItem>
    <MenuItem icon={<Icon as={DocumentDuplicateIcon} />} shortcut="⌘⇧D">
        Dupliquer
    </MenuItem>
    <MenuItem
        href="/devoirs/12"
        iconEnd={<Icon as={ArrowTopRightOnSquareIcon} />}
    >
        Ouvrir le devoir
    </MenuItem>
    <MenuSeparator />
    <MenuItem icon={<Icon as={TrashIcon} />}>Supprimer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=b(y(r.locale));return e.jsxs(l,{...t,label:n.label,trigger:e.jsx(M,{variant:"secondary",children:n.actions}),children:[e.jsx(o,{icon:e.jsx(C,{as:Vn}),children:n.rename}),e.jsx(o,{icon:e.jsx(C,{as:Fn}),shortcut:n.duplicateShortcut,children:n.duplicate}),e.jsx(o,{href:"/devoirs/12",iconEnd:e.jsx(C,{as:Ln}),children:n.openAssignment}),e.jsx(A,{}),e.jsx(o,{icon:e.jsx(C,{as:En}),children:n.delete})]})}},z={name:"Raccourcis",parameters:h(q,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem shortcut="⌘S">Enregistrer</MenuItem>
    <MenuItem shortcut="⌘⇧D">Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem shortcut="⌘⌫">Supprimer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=b(y(r.locale));return e.jsxs(l,{...t,label:n.label,trigger:e.jsx(M,{variant:"secondary",children:n.actions}),children:[e.jsx(o,{shortcut:n.saveShortcut,children:n.save}),e.jsx(o,{shortcut:n.duplicateShortcut,children:n.duplicate}),e.jsx(A,{}),e.jsx(o,{shortcut:n.deleteShortcut,children:n.delete})]})}},F={name:"Éléments désactivés",parameters:h(q,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem disabled>Archiver</MenuItem>
    <MenuItem>Supprimer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=b(y(r.locale));return e.jsxs(l,{...t,label:n.label,trigger:e.jsx(M,{variant:"secondary",children:n.actions}),children:[e.jsx(o,{children:n.rename}),e.jsx(o,{disabled:!0,children:n.archive}),e.jsx(o,{children:n.delete})]})}},O={name:"Sous-menu",parameters:h(q,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuSub label="Partager">
        <MenuItem>Copier le lien</MenuItem>
        <MenuItem>E-mail</MenuItem>
    </MenuSub>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=b(y(r.locale));return e.jsxs(l,{...t,label:n.label,trigger:e.jsx(M,{variant:"secondary",children:n.actions}),children:[e.jsx(o,{children:n.rename}),e.jsxs(Ke,{label:n.share,children:[e.jsx(o,{children:n.copyLink}),e.jsx(o,{children:n.email})]}),e.jsx(A,{}),e.jsx(o,{children:n.delete})]})}},_={name:"Menu contextuel",parameters:h(Un,`<>
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
</>`),render:(t,{globals:r})=>{const n=b(y(r.locale));return e.jsxs("div",{className:"flex flex-col items-start gap-4",children:[e.jsxs(l,{...t,label:n.fileLabel,trigger:e.jsx(M,{variant:"secondary",children:n.actions}),children:[e.jsx(o,{children:n.open}),e.jsx(o,{children:n.download}),e.jsx(A,{}),e.jsx(o,{children:n.delete})]}),e.jsxs(He,{label:n.fileLabel,trigger:e.jsx("button",{type:"button",className:"rounded-md border border-border bg-bg px-4 py-8 text-start text-fg",children:n.card}),children:[e.jsx(o,{children:n.open}),e.jsx(o,{children:n.download}),e.jsx(A,{}),e.jsx(o,{children:n.delete})]})]})}},$={name:"Tailles",parameters:h(q,`<>
    <Menu size="sm" label="Actions du devoir" trigger={<Button size="sm" variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu size="md" label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>`),render:(t,{globals:r})=>{const n=b(y(r.locale));return e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsxs(l,{...t,size:"sm",label:`${n.label} (${n.small})`,trigger:e.jsx(M,{size:"sm",variant:"secondary",children:n.actions}),children:[e.jsx(o,{children:n.rename}),e.jsx(o,{children:n.duplicate})]}),e.jsxs(l,{...t,size:"md",label:`${n.label} (${n.medium})`,trigger:e.jsx(M,{variant:"secondary",children:n.actions}),children:[e.jsx(o,{children:n.rename}),e.jsx(o,{children:n.duplicate})]}),e.jsxs(l,{...t,size:"lg",label:`${n.label} (${n.large})`,trigger:e.jsx(M,{size:"lg",variant:"secondary",children:n.actions}),children:[e.jsx(o,{children:n.rename}),e.jsx(o,{children:n.duplicate})]})]})}},V={name:"Désactivé",parameters:h(q,`<Menu disabled label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
</Menu>`),render:(t,{globals:r})=>{const n=b(y(r.locale));return e.jsx(l,{...t,disabled:!0,label:n.label,trigger:e.jsx(M,{variant:"secondary",children:n.actions}),children:e.jsx(o,{children:n.rename})})}};var de,pe,Me;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(Me=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:Me.source}}};var Ie,ge,fe;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Variantes de déclencheur',
  parameters: componentSource(importTriggers, \`<>
    <Menu
        label="Actions du devoir"
        trigger={
            <Button variant="secondary" icon={<Icon as={ChevronDownIcon} />} iconPosition="end">
                Actions
            </Button>
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu
        label="Actions du devoir"
        trigger={
            <IconButton icon={<Icon as={EllipsisVerticalIcon} />} aria-label="Plus d’actions" />
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu label="Actions du devoir" trigger={<Link href="#actions">Actions</Link>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu
        label="Actions du devoir"
        trigger={
            <Button variant="secondary" size="sm" className="rounded-full">
                Actions
            </Button>
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    const items = <>
        <MenuItem>{copy.rename}</MenuItem>
        <MenuItem>{copy.duplicate}</MenuItem>
      </>;
    return <div className="flex flex-wrap items-center gap-4">
        <Menu {...args} label={copy.label} trigger={<Button variant="secondary" icon={<Icon as={ChevronDownIcon} />} iconPosition="end">
              {copy.actions}
            </Button>}>
          {items}
        </Menu>
        <Menu label={copy.label} trigger={<IconButton icon={<Icon as={EllipsisVerticalIcon} />} aria-label={copy.moreActions} />}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu label={copy.label} trigger={<Link href="#actions">{copy.actions}</Link>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu label={copy.label} trigger={<Button variant="secondary" size="sm" className="rounded-full">
              {copy.actions}
            </Button>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
      </div>;
  }
}`,...(fe=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var be,ye,he;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Éléments du menu',
  parameters: componentSource(importItems, \`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem icon={<Icon as={PencilSquareIcon} />}>Renommer</MenuItem>
    <MenuItem icon={<Icon as={DocumentDuplicateIcon} />} shortcut="⌘⇧D">
        Dupliquer
    </MenuItem>
    <MenuItem
        href="/devoirs/12"
        iconEnd={<Icon as={ArrowTopRightOnSquareIcon} />}
    >
        Ouvrir le devoir
    </MenuItem>
    <MenuSeparator />
    <MenuItem icon={<Icon as={TrashIcon} />}>Supprimer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem icon={<Icon as={PencilSquareIcon} />}>{copy.rename}</MenuItem>
        <MenuItem icon={<Icon as={DocumentDuplicateIcon} />} shortcut={copy.duplicateShortcut}>
          {copy.duplicate}
        </MenuItem>
        <MenuItem href="/devoirs/12" iconEnd={<Icon as={ArrowTopRightOnSquareIcon} />}>
          {copy.openAssignment}
        </MenuItem>
        <MenuSeparator />
        <MenuItem icon={<Icon as={TrashIcon} />}>{copy.delete}</MenuItem>
      </Menu>;
  }
}`,...(he=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var xe,ve,je;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(je=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:je.source}}};var Se,Be,Ae;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var we,Re,De;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(De=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Te,Ce,qe;_.parameters={..._.parameters,docs:{...(Te=_.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(qe=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:qe.source}}};var Ne,ke,Le;$.parameters={...$.parameters,docs:{...(Ne=$.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Le=(ke=$.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var Ee,Pe,ze;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ze=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:ze.source}}};const Gn=["Default","TriggerVariants","Items","Shortcuts","DisabledItems","Submenu","Context","Sizes","Disabled"],ut=Object.freeze(Object.defineProperty({__proto__:null,Context:_,Default:L,Disabled:V,DisabledItems:F,Items:P,Shortcuts:z,Sizes:$,Submenu:O,TriggerVariants:E,__namedExportsOrder:Gn,default:Yn},Symbol.toStringTag,{value:"Module"}));export{_ as C,L as D,P as I,ut as M,z as S,E as T,F as a,O as b,$ as c,V as d};
