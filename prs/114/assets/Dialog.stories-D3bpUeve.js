import{r as l,j as e,f as b,ad as D,d as y}from"./iframe-m85d2-d1.js";import{I as un}from"./arg-types-C3uIi5KS.js";import{c as T,b as gn}from"./docs-source-C_O40UCi.js";import{B as c}from"./Button-C7UWra0G.js";import{I as Ue}from"./Icon-Dx_AUn93.js";import{g as Ze,u as mn,c as fn,d as Dn,e as yn,a as vn,n as xn,D as hn,h as bn,l as Tn}from"./floating-qBAh7KEF.js";import{T as Cn,n as Bn,m as On}from"./textControl-Cpk--Yao.js";import{f as xe,u as jn,c as An,n as oe,s as kn,N as Sn,S as Nn,C as Ln,d as qn,m as In,e as wn}from"./useSelectOverlay-Dc6zDudP.js";import{T as zn}from"./TextInput-vC-snWoF.js";import{H as _n}from"./Heading-DBhcvMoz.js";import{T as Rn}from"./Text-D7q3AyVj.js";import{F as Fn}from"./ExclamationTriangleIcon-DYoaF31u.js";function En({title:o,titleId:i,...n},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":i},n),o?l.createElement("title",{id:i},o):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const Pn=l.forwardRef(En);function Xe({options:o,value:i,defaultValue:n,onValueChange:a,name:t,form:f,placeholder:O="Choisir",emptyMessage:L="Aucune option",size:F="md",label:j,helper:q,error:E,invalid:se=!1,valid:ne=!1,disabled:I=!1,required:P,fullWidth:le=!0,className:ae,id:re,"aria-label":w,"aria-labelledby":ie,"aria-describedby":ce}){const z=l.useId(),V=re??z,B=`${z}-list`,M=`${z}-helper`,W=j?`${V}-label`:void 0,_=l.useRef(""),A=l.useRef(void 0),[r,d]=l.useState(!1),te=i!==void 0,[an,tn]=l.useState(n),R=te?i:an,pe=!!se||!!E,on=pe?E:q,k=xe(o),$=k.find(s=>s.value===R),[S,N]=l.useState(-1),ge=ie??W,me=s=>{te||tn(s),a==null||a(s),wn(()=>d(!1))},{refs:sn,floatingStyles:ln,getReferenceProps:rn,getFloatingProps:cn,portal:fe,setReference:pn}=jn(r,d);l.useEffect(()=>()=>window.clearTimeout(A.current),[]),l.useEffect(()=>{if(!r){N(-1);return}const s=xe(o);N(p=>{var ye,ve;if(p>=0&&p<s.length&&!((ye=s[p])!=null&&ye.disabled))return p;const de=An(s,R);return de>=0&&!((ve=s[de])!=null&&ve.disabled)?de:oe(s,-1,1)})},[r,R,o]),l.useLayoutEffect(()=>{r&&kn(B,S)},[r,S,B]);function De(s){N(p=>oe(k,p,s))}function dn(s){if(!I){if(s.key==="ArrowDown"){s.preventDefault(),r?De(1):d(!0);return}if(s.key==="ArrowUp"){s.preventDefault(),r?De(-1):d(!0);return}if(s.key==="Home"){s.preventDefault(),r||d(!0),N(oe(k,-1,1));return}if(s.key==="End"){s.preventDefault(),r||d(!0),N(oe(k,k.length,-1));return}if(s.key==="Enter"||s.key===" "){if(s.preventDefault(),!r){d(!0);return}const p=k[S];p&&!p.disabled&&me(p.value);return}if(s.key==="Escape"){r&&(s.preventDefault(),d(!1));return}if(s.key.length===1&&!s.metaKey&&!s.ctrlKey&&!s.altKey){s.preventDefault(),r||d(!0),_.current+=s.key,window.clearTimeout(A.current),A.current=setTimeout(()=>{_.current=""},500);const p=In(k,_.current,S);p>=0&&N(p)}}}return e.jsxs(Cn,{id:V,label:j,helper:q,error:E,required:P,invalid:pe,valid:ne,disabled:I,fullWidth:le,size:F,className:ae,showCount:!1,count:0,countMessage:()=>"",countId:`${z}-count`,helperId:M,frameRef:pn,children:[e.jsx(Sn,{name:t,form:f,required:P,disabled:I,value:R,items:o}),e.jsxs("button",{...rn({type:"button",role:"combobox",id:V,disabled:I,"aria-haspopup":"listbox","aria-expanded":r,"aria-controls":B,"aria-autocomplete":"none","aria-activedescendant":r&&S>=0?`${B}-opt-${S}`:void 0,"aria-invalid":pe||void 0,"aria-required":P||void 0,"aria-label":w,"aria-labelledby":ie,"aria-describedby":On(ce,on?M:void 0),className:b(Bn,"flex w-full cursor-pointer items-center justify-between text-left",!$&&"text-fg/60"),onClick:()=>d(s=>!s),onKeyDown:dn}),children:[e.jsxs("span",{className:"flex min-w-0 flex-1 items-center gap-2",children:[$?e.jsx(Nn,{icon:$.icon}):null,e.jsx("span",{className:"min-w-0 flex-1 truncate",children:$?$.label:O})]}),e.jsx("span",{className:b("ml-2 inline-flex shrink-0 text-fg/70",r&&"rotate-180"),children:e.jsx(Ln,{})})]}),r?e.jsx(Ze,{children:e.jsx("div",{ref:sn.setFloating,style:ln,...cn(),...fe,className:fe.className,children:e.jsx(qn,{id:B,labelledBy:ge,ariaLabel:ge?void 0:w,items:o,activeIndex:S,selectedValues:R?[R]:[],emptyMessage:L,listRef:()=>{},setActiveIndex:N,onSelect:me})})}):null]})}Xe.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Choisir'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Aucune option'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const Ye=l.createContext(null);function ue(o){const i=l.useContext(Ye);if(!i)throw new Error(`<${o}> doit être rendu à l’intérieur de <Dialog>.`);return i}const Vn={xs:"sm:max-w-xs",sm:"sm:max-w-sm",md:"sm:max-w-lg",lg:"sm:max-w-2xl",xl:"sm:max-w-4xl","2xl":"sm:max-w-6xl"};function u({open:o,onOpenChange:i,size:n="md",alert:a=!1,dismissible:t=!1,dismissLabel:f="Fermer",initialFocus:O,children:L,className:F,"aria-label":j}){const q=l.useId(),[E,se]=l.useState(null),[ne,I]=l.useState(!1),[P,le]=l.useState(!1),ae=l.useRef(null),{refs:re,context:w}=mn({open:o,onOpenChange:i}),ie=fn(w,{outsidePress:!a,escapeKey:!0}),ce=Dn(w,{role:a?"alertdialog":"dialog"}),{getFloatingProps:z}=yn([ie,ce]),V=vn(E),B=Tn(V),M=xn(),W=l.useCallback(()=>i(!1),[i]),_=l.useCallback(te=>{ae.current=te},[]),A=l.useMemo(()=>({titleId:`${q}-title`,descriptionId:`${q}-description`,alert:a,close:W,setHasTitle:I,setHasDescription:le,registerFirstAction:_}),[q,a,W,_]),r=O??(a?ae:void 0),d=t&&!a;return e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:se,hidden:!0,"aria-hidden":"true"}),o?e.jsx(Ze,{children:e.jsx(hn,{lockScroll:!0,"data-d-ui-theme":B["data-d-ui-theme"],className:b(B.className,"grid place-items-center overflow-y-auto p-4","bg-fg/40",M?null:"d-ui-dialog-overlay"),children:e.jsx(bn,{context:w,modal:!0,returnFocus:!0,initialFocus:r,children:e.jsx("div",{ref:re.setFloating,...z(),"aria-label":ne?void 0:j,"aria-labelledby":ne?A.titleId:void 0,"aria-describedby":P?A.descriptionId:void 0,className:b("bg-bg text-fg border-border relative w-full rounded-lg border shadow-xl","p-6 outline-none",Vn[n],M?null:"d-ui-dialog-panel",F),children:e.jsxs(Ye.Provider,{value:A,children:[d?e.jsx("button",{type:"button",onClick:W,"aria-label":f,className:b("text-fg-muted hover:text-fg absolute end-4 top-4 rounded-md p-1","focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"),children:e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",className:"size-5","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M5 5l10 10M15 5L5 15"})})}):null,L]})})})})}):null]})}u.__docgenInfo={description:"Overlay modal : `Dialog` et, avec `alert`, `alertdialog`.\n\nLe piège de focus, la restitution du focus, le verrouillage du défilement et\nl'inertie du reste de la page viennent de `@floating-ui/react`, déjà utilisé\npar `Popover` et `Menu` — les overlays du design system partagent la même\nmécanique plutôt que chacun la sienne.\n\nL'empilement n'est pas supporté : un `Dialog` n'en ouvre pas un second.",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},description:"Largeur maximale. Toutes les tailles retombent pleine largeur sur petit écran.",defaultValue:{value:"'md'",computed:!1}},alert:{required:!1,tsType:{name:"boolean"},description:"Rôle `alertdialog` : décision destructive ou irréversible.\n\nLe clic sur l'arrière-plan et la croix de fermeture sont retirés — on ne\nsort que par une action explicite. `Escape` reste actif : WCAG 2.1.2\ninterdit de piéger le clavier.",defaultValue:{value:"false",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Croix de fermeture en haut à droite. Ignorée si `alert`.",defaultValue:{value:"false",computed:!1}},dismissLabel:{required:!1,tsType:{name:"string"},description:"Nom accessible de la croix.",defaultValue:{value:"'Fermer'",computed:!1}},initialFocus:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLElement | null>"},description:"Élément qui prend le focus à l'ouverture. Par défaut, le premier focusable."},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Requis si aucun `DialogTitle` n'est rendu."}}};const en=typeof window>"u"?l.useEffect:l.useLayoutEffect;function g({level:o=2,className:i,...n}){const a=ue("DialogTitle"),{setHasTitle:t}=a;return en(()=>(t(!0),()=>t(!1)),[t]),e.jsx(_n,{...n,id:a.titleId,level:o,size:"subtitle",className:b("pe-8",i)})}function v({className:o,...i}){const n=ue("DialogDescription"),{setHasDescription:a}=n;return en(()=>(a(!0),()=>a(!1)),[a]),e.jsx(Rn,{...i,id:n.descriptionId,size:"body-sm",tone:"muted",className:b("mt-2",o)})}function nn({className:o,...i}){return e.jsx("div",{...i,className:b("mt-4",o)})}const Mn={end:"flex-row justify-end",start:"flex-row justify-start",stacked:"flex-col [&>*]:w-full"};function m({align:o="end",surface:i=!1,className:n,children:a,...t}){const f=ue("DialogActions"),{registerFirstAction:O}=f,L=l.useRef(null);return l.useEffect(()=>{var j;const F=(j=L.current)==null?void 0:j.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');return O(F??null),()=>O(null)},[O,a]),e.jsx("div",{...t,ref:L,className:b("mt-6 flex gap-3",Mn[o],i?"bg-surface-muted -mx-6 -mb-6 rounded-b-lg px-6 py-4":null,n),children:a})}g.__docgenInfo={description:"Titre du dialogue.\n\nS'enregistre auprès du `Dialog`, qui pose alors `aria-labelledby` : le nom\naccessible vient du titre visible plutôt que d'un `aria-label` à maintenir\nen double.",methods:[],displayName:"DialogTitle",props:{level:{required:!1,tsType:{name:"union",raw:"2 | 3",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"Niveau sémantique. `2` par défaut : le dialogue vit sous le titre de la page.",defaultValue:{value:"2",computed:!1}}}};v.__docgenInfo={description:"Texte d'accompagnement, relié par `aria-describedby`.\n\nSur un `alertdialog`, c'est cette description qui est annoncée d'emblée avec\nle titre : elle doit dire la conséquence, pas répéter le titre.",methods:[],displayName:"DialogDescription"};nn.__docgenInfo={description:"Contenu principal — formulaire, liste, texte long.",methods:[],displayName:"DialogBody"};m.__docgenInfo={description:"Zone d'actions.\n\nL'action de confirmation est **le dernier enfant**, dans le DOM comme à\nl'écran. Aucune variante n'inverse l'ordre visuel : `flex-row-reverse` ou\n`flex-col-reverse` feraient diverger l'ordre de lecture de l'ordre de\ntabulation (WCAG 2.4.3). `stacked` empile donc de haut en bas.\n\nLe premier contrôle est signalé au `Dialog` : sur un `alertdialog`, c'est lui\nqui prend le focus à l'ouverture.",methods:[],displayName:"DialogActions",props:{align:{required:!1,tsType:{name:"union",raw:"'end' | 'start' | 'stacked'",elements:[{name:"literal",value:"'end'"},{name:"literal",value:"'start'"},{name:"literal",value:"'stacked'"}]},description:"",defaultValue:{value:"'end'",computed:!1}},surface:{required:!1,tsType:{name:"boolean"},description:"Pied de page teinté, filant jusqu'aux bords du panneau.\n\nLes marges négatives annulent la gouttière du `Dialog` (`p-6`) : la bande\nne peut donc pas être réutilisée hors d'un `Dialog`.",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const x=`import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogDescription, DialogTitle } from 'd-ui';`,Wn={title:"Components/Dialog",component:u,argTypes:un,parameters:{controls:{include:["size","alert","dismissible"]}}},h={open:!1,onOpenChange:()=>{},children:null};function C({copy:o,label:i,variant:n="secondary",children:a}){const[t,f]=l.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(c,{variant:n,onClick:()=>f(!0),children:i??o.open}),a(t,f)]})}const H={name:"Par défaut",args:h,parameters:gn(x,`const [open, setOpen] = useState(false);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>Ouvrir</Button>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle>Passer à l'offre annuelle</DialogTitle>
            <DialogDescription>
                La facturation devient annuelle et le changement prend effet immédiatement.
            </DialogDescription>
            <DialogActions>
                <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
                <Button variant="primary" onClick={() => setOpen(false)}>S'abonner</Button>
            </DialogActions>
        </Dialog>
    </>
);`),render:(o,{globals:i})=>{const n=D(y(i.locale));return e.jsx(C,{copy:n,children:(a,t)=>e.jsxs(u,{open:a,onOpenChange:t,children:[e.jsx(g,{children:n.planTitle}),e.jsx(v,{children:n.planBody}),e.jsxs(m,{children:[e.jsx(c,{variant:"secondary",onClick:()=>t(!1),children:n.cancel}),e.jsx(c,{variant:"primary",onClick:()=>t(!1),children:n.subscribe})]})]})})}},Q={name:"Pied de page teinté",args:h,parameters:T(x,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:i})=>{const n=D(y(i.locale));return e.jsx(C,{copy:n,children:(a,t)=>e.jsxs(u,{open:a,onOpenChange:t,children:[e.jsx(g,{children:n.deactivateTitle}),e.jsx(v,{children:n.deactivateBody}),e.jsxs(m,{surface:!0,children:[e.jsx(c,{variant:"secondary",onClick:()=>t(!1),children:n.cancel}),e.jsx(c,{variant:"primary",onClick:()=>t(!1),children:n.deactivate})]})]})})}},K={name:"Centré, action unique",args:h,parameters:T(x,`<Dialog open={open} onOpenChange={setOpen} size="sm">
    <div className="text-center">
        <Icon as={CheckIcon} size="lg" className="text-success" />
        <DialogTitle className="pe-0 mt-3">Paiement accepté</DialogTitle>
        <DialogDescription>Le reçu vient de partir vers votre adresse de facturation.</DialogDescription>
    </div>
    <DialogActions align="stacked">
        <Button variant="primary" onClick={() => setOpen(false)}>J'ai compris</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:i})=>{const n=D(y(i.locale));return e.jsx(C,{copy:n,children:(a,t)=>e.jsxs(u,{open:a,onOpenChange:t,size:"sm",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"bg-success/15 text-success mx-auto flex size-12 items-center justify-center rounded-full",children:e.jsx(Ue,{as:Pn,size:"lg"})}),e.jsx(g,{className:"mt-3 pe-0",children:n.paidTitle}),e.jsx(v,{children:n.paidBody})]}),e.jsx(m,{align:"stacked",children:e.jsx(c,{variant:"primary",onClick:()=>t(!1),children:n.gotIt})})]})})}},G={name:"Centré, actions pleine largeur",args:h,parameters:T(x,`<Dialog open={open} onOpenChange={setOpen} size="sm">
    <DialogTitle className="pe-0 text-center">Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription className="text-center">
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="stacked">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:i})=>{const n=D(y(i.locale));return e.jsx(C,{copy:n,children:(a,t)=>e.jsxs(u,{open:a,onOpenChange:t,size:"sm",children:[e.jsx(g,{className:"pe-0 text-center",children:n.leaveTitle}),e.jsx(v,{className:"text-center",children:n.leaveBody}),e.jsxs(m,{align:"stacked",children:[e.jsx(c,{variant:"secondary",onClick:()=>t(!1),children:n.cancel}),e.jsx(c,{variant:"primary",onClick:()=>t(!1),children:n.leave})]})]})})}},J={name:"Alerte",args:h,parameters:T(x,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
        Cette action est irréversible.
    </DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:i})=>{const n=D(y(i.locale));return e.jsx(C,{copy:n,variant:"primary",label:n.deactivate,children:(a,t)=>e.jsxs(u,{open:a,onOpenChange:t,alert:!0,children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:"bg-danger/15 text-danger flex size-10 shrink-0 items-center justify-center rounded-full",children:e.jsx(Ue,{as:Fn,size:"md"})}),e.jsxs("div",{children:[e.jsx(g,{className:"pe-0",children:n.deactivateTitle}),e.jsx(v,{children:n.deactivateBody})]})]}),e.jsxs(m,{children:[e.jsx(c,{variant:"secondary",onClick:()=>t(!1),children:n.cancel}),e.jsx(c,{variant:"primary",onClick:()=>t(!1),children:n.deactivate})]})]})})}},U={name:"Avec croix de fermeture",args:h,parameters:T(x,`<Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel="Fermer">
    <DialogTitle>Nouvelle version disponible</DialogTitle>
    <DialogDescription>
        Rechargez la page pour récupérer la dernière version.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Recharger</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:i})=>{const n=D(y(i.locale));return e.jsx(C,{copy:n,children:(a,t)=>e.jsxs(u,{open:a,onOpenChange:t,dismissible:!0,dismissLabel:n.close,children:[e.jsx(g,{children:n.updateTitle}),e.jsx(v,{children:n.updateBody}),e.jsx(m,{children:e.jsx(c,{variant:"primary",onClick:()=>t(!1),children:n.reload})})]})})}},Z={name:"Alerte, actions à gauche",args:h,parameters:T(x,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription>
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="start">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:i})=>{const n=D(y(i.locale));return e.jsx(C,{copy:n,variant:"primary",label:n.leave,children:(a,t)=>e.jsxs(u,{open:a,onOpenChange:t,alert:!0,children:[e.jsx(g,{children:n.leaveTitle}),e.jsx(v,{children:n.leaveBody}),e.jsxs(m,{align:"start",children:[e.jsx(c,{variant:"secondary",onClick:()=>t(!1),children:n.cancel}),e.jsx(c,{variant:"primary",onClick:()=>t(!1),children:n.leave})]})]})})}},$n=["xs","sm","md","lg","xl","2xl"];function Hn({copy:o}){const[i,n]=l.useState(null);return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[$n.map(a=>e.jsx(c,{variant:"secondary",onClick:()=>n(a),children:a},a)),e.jsxs(u,{open:i!==null,onOpenChange:a=>n(a?i:null),size:i??"md",dismissible:!0,dismissLabel:o.close,children:[e.jsx(g,{children:`${o.sizeTitle} — ${i??""}`}),e.jsx(v,{children:o.sizeBody}),e.jsx(m,{children:e.jsx(c,{variant:"primary",onClick:()=>n(null),children:o.close})})]})]})}const X={name:"Tailles",args:h,parameters:T(x,`<Dialog open={open} onOpenChange={setOpen} size="xl">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>`),render:(o,{globals:i})=>e.jsx(Hn,{copy:D(y(i.locale))})},Y={name:"Animation",args:h,parameters:T(x,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Ouverture animée</DialogTitle>
    <DialogDescription>
        Le fond apparaît en opacité, le panneau monte de quelques pixels.
    </DialogDescription>
</Dialog>`),render:(o,{globals:i})=>{const n=D(y(i.locale));return e.jsx(C,{copy:n,children:(a,t)=>e.jsxs(u,{open:a,onOpenChange:t,dismissible:!0,dismissLabel:n.close,children:[e.jsx(g,{children:n.animationTitle}),e.jsx(v,{children:n.animationBody}),e.jsx(m,{children:e.jsx(c,{variant:"primary",onClick:()=>t(!1),children:n.close})})]})})}},ee={name:"Avec formulaire",args:h,parameters:T(x,`<Dialog open={open} onOpenChange={setOpen} dismissible>
    <DialogTitle>Inviter un membre</DialogTitle>
    <DialogBody>
        <form id="invite" onSubmit={onSubmit} className="grid gap-4">
            <TextInput type="email" name="email" label="Adresse e-mail" required />
            <Select name="role" label="Rôle" options={roles} defaultValue="editor" />
        </form>
    </DialogBody>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" type="submit" form="invite">Envoyer l'invitation</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:i})=>{const n=D(y(i.locale));return e.jsx(C,{copy:n,children:(a,t)=>e.jsxs(u,{open:a,onOpenChange:t,dismissible:!0,dismissLabel:n.close,children:[e.jsx(g,{children:n.inviteTitle}),e.jsx(nn,{children:e.jsxs("form",{id:"d-ui-invite",className:"grid gap-4",onSubmit:f=>{f.preventDefault(),t(!1)},children:[e.jsx(zn,{type:"email",name:"email",label:n.emailLabel,placeholder:n.emailPlaceholder,helper:n.inviteBody,required:!0}),e.jsx(Xe,{name:"role",label:n.roleLabel,defaultValue:"editor",options:[{value:"editor",label:n.roleEditor},{value:"viewer",label:n.roleViewer}]})]})}),e.jsxs(m,{surface:!0,children:[e.jsx(c,{variant:"secondary",onClick:()=>t(!1),children:n.cancel}),e.jsx(c,{variant:"primary",type:"submit",form:"d-ui-invite",children:n.send})]})]})})}};var he,be,Te;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: closed,
  parameters: componentSourceFn(importDialog, \`const [open, setOpen] = useState(false);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>Ouvrir</Button>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle>Passer à l'offre annuelle</DialogTitle>
            <DialogDescription>
                La facturation devient annuelle et le changement prend effet immédiatement.
            </DialogDescription>
            <DialogActions>
                <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
                <Button variant="primary" onClick={() => setOpen(false)}>S'abonner</Button>
            </DialogActions>
        </Dialog>
    </>
);\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle>{copy.planTitle}</DialogTitle>
            <DialogDescription>{copy.planBody}</DialogDescription>
            <DialogActions>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.subscribe}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(Te=(be=H.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var Ce,Be,Oe;Q.parameters={...Q.parameters,docs:{...(Ce=Q.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Pied de page teinté',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle>{copy.deactivateTitle}</DialogTitle>
            <DialogDescription>{copy.deactivateBody}</DialogDescription>
            <DialogActions surface>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.deactivate}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(Oe=(Be=Q.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var je,Ae,ke;K.parameters={...K.parameters,docs:{...(je=K.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Centré, action unique',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} size="sm">
    <div className="text-center">
        <Icon as={CheckIcon} size="lg" className="text-success" />
        <DialogTitle className="pe-0 mt-3">Paiement accepté</DialogTitle>
        <DialogDescription>Le reçu vient de partir vers votre adresse de facturation.</DialogDescription>
    </div>
    <DialogActions align="stacked">
        <Button variant="primary" onClick={() => setOpen(false)}>J'ai compris</Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} size="sm">
            <div className="text-center">
              <span className="bg-success/15 text-success mx-auto flex size-12 items-center justify-center rounded-full">
                <Icon as={CheckIcon} size="lg" />
              </span>
              <DialogTitle className="mt-3 pe-0">{copy.paidTitle}</DialogTitle>
              <DialogDescription>{copy.paidBody}</DialogDescription>
            </div>
            <DialogActions align="stacked">
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.gotIt}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(ke=(Ae=K.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var Se,Ne,Le;G.parameters={...G.parameters,docs:{...(Se=G.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Centré, actions pleine largeur',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} size="sm">
    <DialogTitle className="pe-0 text-center">Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription className="text-center">
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="stacked">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} size="sm">
            <DialogTitle className="pe-0 text-center">{copy.leaveTitle}</DialogTitle>
            <DialogDescription className="text-center">
              {copy.leaveBody}
            </DialogDescription>
            <DialogActions align="stacked">
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.leave}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(Le=(Ne=G.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};var qe,Ie,we;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Alerte',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
        Cette action est irréversible.
    </DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy} variant="primary" label={copy.deactivate}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} alert>
            <div className="flex gap-4">
              <span className="bg-danger/15 text-danger flex size-10 shrink-0 items-center justify-center rounded-full">
                <Icon as={ExclamationTriangleIcon} size="md" />
              </span>
              <div>
                <DialogTitle className="pe-0">{copy.deactivateTitle}</DialogTitle>
                <DialogDescription>{copy.deactivateBody}</DialogDescription>
              </div>
            </div>
            <DialogActions>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.deactivate}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(we=(Ie=J.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var ze,_e,Re;U.parameters={...U.parameters,docs:{...(ze=U.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Avec croix de fermeture',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel="Fermer">
    <DialogTitle>Nouvelle version disponible</DialogTitle>
    <DialogDescription>
        Rechargez la page pour récupérer la dernière version.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Recharger</Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel={copy.close}>
            <DialogTitle>{copy.updateTitle}</DialogTitle>
            <DialogDescription>{copy.updateBody}</DialogDescription>
            <DialogActions>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.reload}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(Re=(_e=U.parameters)==null?void 0:_e.docs)==null?void 0:Re.source}}};var Fe,Ee,Pe;Z.parameters={...Z.parameters,docs:{...(Fe=Z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Alerte, actions à gauche',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription>
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="start">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy} variant="primary" label={copy.leave}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} alert>
            <DialogTitle>{copy.leaveTitle}</DialogTitle>
            <DialogDescription>{copy.leaveBody}</DialogDescription>
            <DialogActions align="start">
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.leave}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(Pe=(Ee=Z.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};var Ve,Me,We;X.parameters={...X.parameters,docs:{...(Ve=X.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Tailles',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} size="xl">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>\`),
  render: (_, {
    globals
  }) => <SizesDemo copy={dialogCopy(docsLocale(globals.locale))} />
}`,...(We=(Me=X.parameters)==null?void 0:Me.docs)==null?void 0:We.source}}};var $e,He,Qe;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'Animation',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Ouverture animée</DialogTitle>
    <DialogDescription>
        Le fond apparaît en opacité, le panneau monte de quelques pixels.
    </DialogDescription>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel={copy.close}>
            <DialogTitle>{copy.animationTitle}</DialogTitle>
            <DialogDescription>{copy.animationBody}</DialogDescription>
            <DialogActions>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.close}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(Qe=(He=Y.parameters)==null?void 0:He.docs)==null?void 0:Qe.source}}};var Ke,Ge,Je;ee.parameters={...ee.parameters,docs:{...(Ke=ee.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'Avec formulaire',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} dismissible>
    <DialogTitle>Inviter un membre</DialogTitle>
    <DialogBody>
        <form id="invite" onSubmit={onSubmit} className="grid gap-4">
            <TextInput type="email" name="email" label="Adresse e-mail" required />
            <Select name="role" label="Rôle" options={roles} defaultValue="editor" />
        </form>
    </DialogBody>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" type="submit" form="invite">Envoyer l'invitation</Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel={copy.close}>
            <DialogTitle>{copy.inviteTitle}</DialogTitle>
            <DialogBody>
              <form id="d-ui-invite" className="grid gap-4" onSubmit={event => {
            event.preventDefault();
            setOpen(false);
          }}>
                <TextInput type="email" name="email" label={copy.emailLabel} placeholder={copy.emailPlaceholder} helper={copy.inviteBody} required />
                <Select name="role" label={copy.roleLabel} defaultValue="editor" options={[{
              value: 'editor',
              label: copy.roleEditor
            }, {
              value: 'viewer',
              label: copy.roleViewer
            }]} />
              </form>
            </DialogBody>
            <DialogActions surface>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" type="submit" form="d-ui-invite">
                {copy.send}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(Je=(Ge=ee.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};const Qn=["Default","TintedFooter","CenteredSingleAction","CenteredWideButtons","Alert","WithDismissButton","AlertLeftAligned","Sizes","Animation","WithForm"],oa=Object.freeze(Object.defineProperty({__proto__:null,Alert:J,AlertLeftAligned:Z,Animation:Y,CenteredSingleAction:K,CenteredWideButtons:G,Default:H,Sizes:X,TintedFooter:Q,WithDismissButton:U,WithForm:ee,__namedExportsOrder:Qn,default:Wn},Symbol.toStringTag,{value:"Module"}));export{J as A,K as C,oa as D,X as S,Q as T,U as W,H as a,G as b,Z as c,ee as d,Y as e};
