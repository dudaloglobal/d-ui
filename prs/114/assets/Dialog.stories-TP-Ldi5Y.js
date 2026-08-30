import{r as s,j as e,f as j,ae as m,d as f}from"./iframe-DPMCGbXH.js";import{J as Nn}from"./arg-types-BT0UMpT1.js";import{c as x,b as wn}from"./docs-source-C_O40UCi.js";import{B as l}from"./Button-J0p711sK.js";import{D as qn,e as In}from"./feedbackSurface-CvkUZbBg.js";import{u as _n,c as zn,d as Rn,e as Pn,a as En,n as Fn,g as Dn,D as Vn,h as Hn,l as Kn}from"./floating-BK-hZi35.js";import{H as Mn}from"./Heading-DdjEhJVn.js";import{T as Wn}from"./Text-C8y3i8q4.js";import{I as yn}from"./Icon-Bjpz_ZUO.js";import{T as $n,n as Qn,m as Un}from"./textControl-CXcT-ArV.js";import{f as Be,u as Jn,c as Gn,n as pe,s as Zn,N as Xn,S as Yn,C as ea,d as na,m as aa,e as ia}from"./useSelectOverlay-DKCJu4I8.js";import{T as ta}from"./TextInput-3Z0N33XD.js";import{F as oa}from"./ExclamationTriangleIcon-CP_kw92V.js";function ra({title:o,titleId:a,...n},t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},n),o?s.createElement("title",{id:a},o):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const sa=s.forwardRef(ra),vn=s.createContext(null);function ye(o){const a=s.useContext(vn);if(!a)throw new Error(`<${o}> doit être rendu à l’intérieur de <Dialog>.`);return a}const la={tiny:"sm:max-w-[400px]",regular:"sm:max-w-[600px]",big:"sm:max-w-[800px]",huge:"sm:max-h-[calc(100dvh-2rem)] sm:min-h-[calc(100dvh-2rem)] sm:max-w-[calc(100vw-2rem)] sm:min-w-[calc(100vw-2rem)]"};function g({open:o,onOpenChange:a,size:n="regular",alert:t=!1,dismissible:i=!1,dismissLabel:c="Fermer",processing:d=!1,initialFocus:b,children:S,className:O,"aria-label":_}){const A=s.useId(),[F,V]=s.useState(null),[k,H]=s.useState(!1),[de,ue]=s.useState(!1),re=s.useRef(null),{refs:se,context:z}=_n({open:o,onOpenChange:a}),ge=zn(z,{outsidePress:!t&&!d,escapeKey:!d}),R=Rn(z,{role:t?"alertdialog":"dialog"}),{getFloatingProps:K}=Pn([ge,R]),L=En(F),M=Kn(L),le=Fn(),N=s.useCallback(()=>a(!1),[a]),P=s.useCallback(me=>{re.current=me},[]),p=s.useMemo(()=>({titleId:`${A}-title`,descriptionId:`${A}-description`,alert:t,close:N,setHasTitle:H,setHasDescription:ue,registerFirstAction:P}),[A,t,N,P]),T=b??(t?re:void 0),ce=i&&!t&&!d;return e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:V,hidden:!0,"aria-hidden":"true"}),o?e.jsx(Dn,{children:e.jsx(Vn,{lockScroll:!0,"data-d-ui-theme":M["data-d-ui-theme"],className:j(M.className,"grid place-items-center overflow-y-auto p-4","bg-black/70",le?null:"d-ui-dialog-overlay"),children:e.jsx(Hn,{context:z,modal:!0,returnFocus:!0,initialFocus:T,children:e.jsx("div",{ref:se.setFloating,...K(),"aria-label":k?void 0:_,"aria-labelledby":k?p.titleId:void 0,"aria-describedby":de?p.descriptionId:void 0,"aria-busy":d||void 0,className:j("bg-bg text-fg relative flex w-full flex-col rounded-lg shadow-[0_8px_32px_rgb(0_0_0/0.2)]","max-h-[calc(100dvh-2rem)] outline-none",la[n],le?null:"d-ui-dialog-panel",O),children:e.jsxs(vn.Provider,{value:p,children:[ce?e.jsx("button",{type:"button",onClick:N,"aria-label":c,className:j("text-fg-muted hover:text-fg absolute end-4 top-4 z-10 rounded-md p-1","focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"),children:e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",className:"size-5","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M5 5l10 10M15 5L5 15"})})}):null,e.jsx("div",{className:"flex min-h-0 flex-1 flex-col overflow-hidden p-6",children:S}),d?e.jsx("div",{className:"bg-bg/70 absolute inset-0 grid place-items-center rounded-lg backdrop-blur-[1px]","aria-hidden":"true",children:e.jsx("span",{className:"d-ui-button-spinner text-brand size-8"})}):null]})})})})}):null]})}g.__docgenInfo={description:"Overlay modal : `Dialog` et, avec `alert`, `alertdialog`.\n\nLe piège de focus, la restitution du focus, le verrouillage du défilement et\nl'inertie du reste de la page viennent de `@floating-ui/react`, déjà utilisé\npar `Popover` et `Menu` — les overlays du design system partagent la même\nmécanique plutôt que chacun la sienne.\n\nL'empilement n'est pas supporté : un `Dialog` n'en ouvre pas un second.",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"Largeur maximale. Toutes les tailles retombent pleine largeur sur petit écran.",defaultValue:{value:"'regular'",computed:!1}},alert:{required:!1,tsType:{name:"boolean"},description:"Rôle `alertdialog` : décision destructive ou irréversible.\n\nLe clic sur l'arrière-plan et la croix de fermeture sont retirés — on ne\nsort que par une action explicite. `Escape` reste actif : WCAG 2.1.2\ninterdit de piéger le clavier.",defaultValue:{value:"false",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Croix de fermeture en haut à droite. Ignorée si `alert`.",defaultValue:{value:"false",computed:!1}},dismissLabel:{required:!1,tsType:{name:"string"},description:"Nom accessible de la croix.",defaultValue:{value:"'Fermer'",computed:!1}},processing:{required:!1,tsType:{name:"boolean"},description:`État de traitement : calque semi-opaque et spinner au-dessus du panneau.

Les interactions sont bloquées tant que la soumission est en cours
(LumApps \`isLoading\`).`,defaultValue:{value:"false",computed:!1}},initialFocus:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLElement | null>"},description:"Élément qui prend le focus à l'ouverture. Par défaut, le premier focusable."},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Requis si aucun `DialogTitle` n'est rendu."}}};const hn=typeof window>"u"?s.useEffect:s.useLayoutEffect;function u({level:o=2,className:a,...n}){const t=ye("DialogTitle"),{setHasTitle:i}=t;return hn(()=>(i(!0),()=>i(!1)),[i]),e.jsx(Mn,{...n,id:t.titleId,level:o,size:"subtitle",className:j("pe-8",a)})}function h({className:o,...a}){const n=ye("DialogDescription"),{setHasDescription:t}=n;return hn(()=>(t(!0),()=>t(!1)),[t]),e.jsx(Wn,{...a,id:n.descriptionId,size:"body-sm",tone:"muted",className:j("mt-2",o)})}function xn({className:o,...a}){return e.jsx("header",{...a,className:j("border-border shrink-0 border-b pb-4",o)})}function ve({className:o,...a}){return e.jsx("div",{...a,className:j("mt-4 min-h-0 flex-1 overflow-y-auto",o)})}const ca={end:"flex-row justify-end",start:"flex-row justify-start",stacked:"flex-col [&>*]:w-full"};function D({align:o="end",surface:a=!1,className:n,children:t,...i}){const c=ye("DialogActions"),{registerFirstAction:d}=c,b=s.useRef(null);return s.useEffect(()=>{var O;const S=(O=b.current)==null?void 0:O.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');return d(S??null),()=>d(null)},[d,t]),e.jsx("div",{...i,ref:b,className:j("mt-6 flex gap-3",ca[o],a?"bg-surface-muted -mx-6 -mb-6 shrink-0 rounded-b-lg px-6 py-4":"shrink-0",n),children:t})}u.__docgenInfo={description:"Titre du dialogue.\n\nS'enregistre auprès du `Dialog`, qui pose alors `aria-labelledby` : le nom\naccessible vient du titre visible plutôt que d'un `aria-label` à maintenir\nen double.",methods:[],displayName:"DialogTitle",props:{level:{required:!1,tsType:{name:"union",raw:"2 | 3",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"Niveau sémantique. `2` par défaut : le dialogue vit sous le titre de la page.",defaultValue:{value:"2",computed:!1}}}};h.__docgenInfo={description:"Texte d'accompagnement, relié par `aria-describedby`.\n\nSur un `alertdialog`, c'est cette description qui est annoncée d'emblée avec\nle titre : elle doit dire la conséquence, pas répéter le titre.",methods:[],displayName:"DialogDescription"};xn.__docgenInfo={description:`En-tête fixe en haut du panneau (LumApps Toolbar).

Au défilement du corps, l'en-tête reste visible : le panneau est une colonne
flex et seul le \`DialogBody\` défile.`,methods:[],displayName:"DialogHeader"};ve.__docgenInfo={description:"Contenu principal — formulaire, liste, texte long. Défile si le panneau dépasse.",methods:[],displayName:"DialogBody"};D.__docgenInfo={description:"Zone d'actions.\n\nL'action de confirmation est **le dernier enfant**, dans le DOM comme à\nl'écran. Aucune variante n'inverse l'ordre visuel : `flex-row-reverse` ou\n`flex-col-reverse` feraient diverger l'ordre de lecture de l'ordre de\ntabulation (WCAG 2.4.3). `stacked` empile donc de haut en bas.\n\nLe premier contrôle est signalé au `Dialog` : sur un `alertdialog`, c'est lui\nqui prend le focus à l'ouverture.",methods:[],displayName:"DialogActions",props:{align:{required:!1,tsType:{name:"union",raw:"'end' | 'start' | 'stacked'",elements:[{name:"literal",value:"'end'"},{name:"literal",value:"'start'"},{name:"literal",value:"'stacked'"}]},description:"",defaultValue:{value:"'end'",computed:!1}},surface:{required:!1,tsType:{name:"boolean"},description:"Pied de page teinté, filant jusqu'aux bords du panneau.\n\nLes marges négatives annulent la gouttière du `Dialog` (`p-6`) : la bande\nne peut donc pas être réutilisée hors d'un `Dialog`.",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const pa={warning:"warning",error:"danger",success:"success"},da={warning:"bg-warning/15",error:"bg-danger/15",success:"bg-success/15"};function he({open:o,onOpenChange:a,title:n,children:t,kind:i,size:c="regular",confirmLabel:d="OK",onConfirm:b,cancelLabel:S,onCancel:O,initialFocus:_}){const A=()=>a(!1),F=()=>{b==null||b(),A()},V=()=>{O==null||O(),A()},k=i?pa[i]:void 0;return e.jsxs(g,{open:o,onOpenChange:a,alert:!0,size:c,initialFocus:_,children:[i?e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:j("flex size-10 shrink-0 items-center justify-center rounded-full",da[i],In(k)),children:e.jsx(qn,{variant:k})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(u,{className:"pe-0",children:n}),e.jsx(h,{children:t})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(u,{children:n}),e.jsx(h,{children:t})]}),e.jsxs(D,{children:[S?e.jsx(l,{variant:"secondary",onClick:V,children:S}):null,e.jsx(l,{variant:"primary",onClick:F,children:d})]})]})}he.__docgenInfo={description:"Dialogue pré-composé LumApps (`AlertDialog`).\n\n- **Confirmation** : `cancelLabel` + `confirmLabel` — on ne sort que par une\n  action explicite (pas de clic extérieur ni de croix).\n- **Alerte** : `kind` (`warning`, `error`, `success`) + une seule action\n  `confirmLabel`.",methods:[],displayName:"AlertDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},kind:{required:!1,tsType:{name:"union",raw:"'warning' | 'error' | 'success'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"Variante visuelle LumApps : icône teintée à gauche du titre.\n\nSans `kind`, le dialogue est une confirmation neutre (deux actions)."},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},confirmLabel:{required:!1,tsType:{name:"string"},description:"Libellé du bouton principal.",defaultValue:{value:"'OK'",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelLabel:{required:!1,tsType:{name:"string"},description:"Si présent, le dialogue devient une confirmation (deux actions)."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function bn({options:o,value:a,defaultValue:n,onValueChange:t,name:i,form:c,placeholder:d="Choisir",emptyMessage:b="Aucune option",size:S="md",label:O,helper:_,error:A,invalid:F=!1,valid:V=!1,disabled:k=!1,required:H,fullWidth:de=!0,className:ue,id:re,"aria-label":se,"aria-labelledby":z,"aria-describedby":ge}){const R=s.useId(),K=re??R,L=`${R}-list`,M=`${R}-helper`,le=O?`${K}-label`:void 0,N=s.useRef(""),P=s.useRef(void 0),[p,T]=s.useState(!1),ce=a!==void 0,[me,Cn]=s.useState(n),E=ce?a:me,fe=!!F||!!A,On=fe?A:_,w=Be(o),W=w.find(r=>r.value===E),[q,I]=s.useState(-1),xe=z??le,be=r=>{ce||Cn(r),t==null||t(r),ia(()=>T(!1))},{refs:jn,floatingStyles:Bn,getReferenceProps:An,getFloatingProps:kn,portal:Te,setReference:Sn}=Jn(p,T);s.useEffect(()=>()=>window.clearTimeout(P.current),[]),s.useEffect(()=>{if(!p){I(-1);return}const r=Be(o);I(v=>{var Oe,je;if(v>=0&&v<r.length&&!((Oe=r[v])!=null&&Oe.disabled))return v;const De=Gn(r,E);return De>=0&&!((je=r[De])!=null&&je.disabled)?De:pe(r,-1,1)})},[p,E,o]),s.useLayoutEffect(()=>{p&&Zn(L,q)},[p,q,L]);function Ce(r){I(v=>pe(w,v,r))}function Ln(r){if(!k){if(r.key==="ArrowDown"){r.preventDefault(),p?Ce(1):T(!0);return}if(r.key==="ArrowUp"){r.preventDefault(),p?Ce(-1):T(!0);return}if(r.key==="Home"){r.preventDefault(),p||T(!0),I(pe(w,-1,1));return}if(r.key==="End"){r.preventDefault(),p||T(!0),I(pe(w,w.length,-1));return}if(r.key==="Enter"||r.key===" "){if(r.preventDefault(),!p){T(!0);return}const v=w[q];v&&!v.disabled&&be(v.value);return}if(r.key==="Escape"){p&&(r.preventDefault(),T(!1));return}if(r.key.length===1&&!r.metaKey&&!r.ctrlKey&&!r.altKey){r.preventDefault(),p||T(!0),N.current+=r.key,window.clearTimeout(P.current),P.current=setTimeout(()=>{N.current=""},500);const v=aa(w,N.current,q);v>=0&&I(v)}}}return e.jsxs($n,{id:K,label:O,helper:_,error:A,required:H,invalid:fe,valid:V,disabled:k,fullWidth:de,size:S,className:ue,showCount:!1,count:0,countMessage:()=>"",countId:`${R}-count`,helperId:M,frameRef:Sn,children:[e.jsx(Xn,{name:i,form:c,required:H,disabled:k,value:E,items:o}),e.jsxs("button",{...An({type:"button",role:"combobox",id:K,disabled:k,"aria-haspopup":"listbox","aria-expanded":p,"aria-controls":L,"aria-autocomplete":"none","aria-activedescendant":p&&q>=0?`${L}-opt-${q}`:void 0,"aria-invalid":fe||void 0,"aria-required":H||void 0,"aria-label":se,"aria-labelledby":z,"aria-describedby":Un(ge,On?M:void 0),className:j(Qn,"flex w-full cursor-pointer items-center justify-between text-left",!W&&"text-fg/60"),onClick:()=>T(r=>!r),onKeyDown:Ln}),children:[e.jsxs("span",{className:"flex min-w-0 flex-1 items-center gap-2",children:[W?e.jsx(Yn,{icon:W.icon}):null,e.jsx("span",{className:"min-w-0 flex-1 truncate",children:W?W.label:d})]}),e.jsx("span",{className:j("ml-2 inline-flex shrink-0 text-fg/70",p&&"rotate-180"),children:e.jsx(ea,{})})]}),p?e.jsx(Dn,{children:e.jsx("div",{ref:jn.setFloating,style:Bn,...kn(),...Te,className:Te.className,children:e.jsx(na,{id:L,labelledBy:xe,ariaLabel:xe?void 0:se,items:o,activeIndex:q,selectedValues:E?[E]:[],emptyMessage:b,listRef:()=>{},setActiveIndex:I,onSelect:be})})}):null]})}bn.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Choisir'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Aucune option'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const C=`import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogDescription, DialogTitle } from 'd-ui';`,Tn=`import { useState } from 'react';
import { AlertDialog, Button } from 'd-ui';`,ua={title:"Components/Dialog",component:g,argTypes:Nn,parameters:{controls:{include:["size","alert","dismissible","processing"]}}},y={open:!1,onOpenChange:()=>{},children:null};function B({copy:o,label:a,variant:n="secondary",children:t}){const[i,c]=s.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(l,{variant:n,onClick:()=>c(!0),children:a??o.open}),t(i,c)]})}const $={name:"Par défaut",args:y,parameters:wn(C,`const [open, setOpen] = useState(false);

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
);`),render:(o,{globals:a})=>{const n=m(f(a.locale));return e.jsx(B,{copy:n,children:(t,i)=>e.jsxs(g,{open:t,onOpenChange:i,children:[e.jsx(u,{children:n.planTitle}),e.jsx(h,{children:n.planBody}),e.jsxs(D,{children:[e.jsx(l,{variant:"secondary",onClick:()=>i(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>i(!1),children:n.subscribe})]})]})})}},Q={name:"Confirmation",args:y,parameters:x(Tn,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    title="Confirmer l'action"
    cancelLabel="Refuser"
    confirmLabel="Accepter"
>
    Cette opération modifiera définitivement vos préférences. Voulez-vous continuer ?
</AlertDialog>`),render:(o,{globals:a})=>{const n=m(f(a.locale));return e.jsx(B,{copy:n,label:n.confirmOpen,children:(t,i)=>e.jsx(he,{open:t,onOpenChange:i,title:n.confirmTitle,cancelLabel:n.disagree,confirmLabel:n.agree,children:n.confirmBody})})}};function ga({copy:o}){const[a,n]=s.useState(null),t=[{kind:"warning",label:o.warning},{kind:"error",label:o.error},{kind:"success",label:o.success}];return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[t.map(({kind:i,label:c})=>e.jsx(l,{variant:"secondary",onClick:()=>n(i),children:c},i)),e.jsx(he,{open:a!==null,onOpenChange:i=>n(i?a:null),kind:a??void 0,title:o.alertTitle,confirmLabel:o.ok,children:o.alertBody})]})}const U={name:"Alerte par variante",args:y,parameters:x(Tn,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    kind="warning"
    title="Alerte"
    confirmLabel="OK"
>
    Un événement important requiert votre attention.
</AlertDialog>`),render:(o,{globals:a})=>e.jsx(ga,{copy:m(f(a.locale))})},J={name:"Pied de page teinté",args:y,parameters:x(C,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:a})=>{const n=m(f(a.locale));return e.jsx(B,{copy:n,children:(t,i)=>e.jsxs(g,{open:t,onOpenChange:i,children:[e.jsx(u,{children:n.deactivateTitle}),e.jsx(h,{children:n.deactivateBody}),e.jsxs(D,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>i(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>i(!1),children:n.deactivate})]})]})})}},G={name:"Centré, action unique",args:y,parameters:x(C,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <div className="text-center">
        <Icon as={CheckIcon} size="lg" className="text-success" />
        <DialogTitle className="pe-0 mt-3">Paiement accepté</DialogTitle>
        <DialogDescription>Le reçu vient de partir vers votre adresse de facturation.</DialogDescription>
    </div>
    <DialogActions align="stacked">
        <Button variant="primary" onClick={() => setOpen(false)}>J'ai compris</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:a})=>{const n=m(f(a.locale));return e.jsx(B,{copy:n,children:(t,i)=>e.jsxs(g,{open:t,onOpenChange:i,size:"tiny",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"bg-success/15 text-success mx-auto flex size-12 items-center justify-center rounded-full",children:e.jsx(yn,{as:sa,size:"lg"})}),e.jsx(u,{className:"mt-3 pe-0",children:n.paidTitle}),e.jsx(h,{children:n.paidBody})]}),e.jsx(D,{align:"stacked",children:e.jsx(l,{variant:"primary",onClick:()=>i(!1),children:n.gotIt})})]})})}},Z={name:"Centré, actions pleine largeur",args:y,parameters:x(C,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <DialogTitle className="pe-0 text-center">Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription className="text-center">
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="stacked">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:a})=>{const n=m(f(a.locale));return e.jsx(B,{copy:n,children:(t,i)=>e.jsxs(g,{open:t,onOpenChange:i,size:"tiny",children:[e.jsx(u,{className:"pe-0 text-center",children:n.leaveTitle}),e.jsx(h,{className:"text-center",children:n.leaveBody}),e.jsxs(D,{align:"stacked",children:[e.jsx(l,{variant:"secondary",onClick:()=>i(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>i(!1),children:n.leave})]})]})})}},X={name:"Alerte",args:y,parameters:x(C,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
        Cette action est irréversible.
    </DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:a})=>{const n=m(f(a.locale));return e.jsx(B,{copy:n,variant:"primary",label:n.deactivate,children:(t,i)=>e.jsxs(g,{open:t,onOpenChange:i,alert:!0,children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:"bg-danger/15 text-danger flex size-10 shrink-0 items-center justify-center rounded-full",children:e.jsx(yn,{as:oa,size:"md"})}),e.jsxs("div",{children:[e.jsx(u,{className:"pe-0",children:n.deactivateTitle}),e.jsx(h,{children:n.deactivateBody})]})]}),e.jsxs(D,{children:[e.jsx(l,{variant:"secondary",onClick:()=>i(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>i(!1),children:n.deactivate})]})]})})}},Y={name:"Avec croix de fermeture",args:y,parameters:x(C,`<Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel="Fermer">
    <DialogTitle>Nouvelle version disponible</DialogTitle>
    <DialogDescription>
        Rechargez la page pour récupérer la dernière version.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Recharger</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:a})=>{const n=m(f(a.locale));return e.jsx(B,{copy:n,children:(t,i)=>e.jsxs(g,{open:t,onOpenChange:i,dismissible:!0,dismissLabel:n.close,children:[e.jsx(u,{children:n.updateTitle}),e.jsx(h,{children:n.updateBody}),e.jsx(D,{children:e.jsx(l,{variant:"primary",onClick:()=>i(!1),children:n.reload})})]})})}},ee={name:"Alerte, actions à gauche",args:y,parameters:x(C,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription>
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="start">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:a})=>{const n=m(f(a.locale));return e.jsx(B,{copy:n,variant:"primary",label:n.leave,children:(t,i)=>e.jsxs(g,{open:t,onOpenChange:i,alert:!0,children:[e.jsx(u,{children:n.leaveTitle}),e.jsx(h,{children:n.leaveBody}),e.jsxs(D,{align:"start",children:[e.jsx(l,{variant:"secondary",onClick:()=>i(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>i(!1),children:n.leave})]})]})})}},ma=[{size:"tiny",labelKey:"tiny"},{size:"regular",labelKey:"regular"},{size:"big",labelKey:"big"},{size:"huge",labelKey:"huge"}];function fa({copy:o}){const[a,n]=s.useState(null);return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[ma.map(({size:t,labelKey:i})=>e.jsx(l,{variant:"secondary",onClick:()=>n(t),children:o[i]},t)),e.jsxs(g,{open:a!==null,onOpenChange:t=>n(t?a:null),size:a??"regular",dismissible:!0,dismissLabel:o.close,children:[e.jsx(u,{children:`${o.sizeTitle} — ${a??""}`}),e.jsx(h,{children:o.sizeBody}),e.jsx(D,{children:e.jsx(l,{variant:"primary",onClick:()=>n(null),children:o.close})})]})]})}const ne={name:"Tailles",args:y,parameters:x(C,`<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>`),render:(o,{globals:a})=>e.jsx(fa,{copy:m(f(a.locale))})};function Da({copy:o}){const[a,n]=s.useState(!1),[t,i]=s.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(l,{variant:"secondary",onClick:()=>n(!0),children:o.processingOpen}),e.jsxs(g,{open:a,onOpenChange:c=>{t||n(c)},processing:t,children:[e.jsx(u,{children:o.processingTitle}),e.jsx(h,{children:o.processingBody}),e.jsxs(D,{children:[e.jsx(l,{variant:"secondary",disabled:t,onClick:()=>n(!1),children:o.cancel}),e.jsx(l,{variant:"primary",loading:t,onClick:()=>{i(!0),window.setTimeout(()=>{i(!1),n(!1)},2e3)},children:o.save})]})]})]})}const ae={name:"Traitement en cours",args:y,parameters:x(C,`const [processing, setProcessing] = useState(false);

<Dialog open={open} onOpenChange={setOpen} processing={processing}>
    <DialogTitle>Enregistrement en cours</DialogTitle>
    <DialogDescription>Vos modifications sont en cours d'enregistrement.</DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)} disabled={processing}>
            Annuler
        </Button>
        <Button
            variant="primary"
            loading={processing}
            onClick={() => {
                setProcessing(true);
                setTimeout(() => {
                    setProcessing(false);
                    setOpen(false);
                }, 2000);
            }}
        >
            Enregistrer
        </Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:a})=>e.jsx(Da,{copy:m(f(a.locale))})},ie={name:"Contenu défilant",args:y,parameters:x(C,`<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogHeader>
        <DialogTitle>Conditions d'utilisation</DialogTitle>
    </DialogHeader>
    <DialogBody>
        <p>{longText}</p>
    </DialogBody>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Refuser</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Accepter</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:a})=>{const n=m(f(a.locale)),t=Array.from({length:8},()=>n.scrollParagraph);return e.jsx(B,{copy:n,label:n.scrollOpen,children:(i,c)=>e.jsxs(g,{open:i,onOpenChange:c,size:"big",children:[e.jsx(xn,{children:e.jsx(u,{className:"pe-0",children:n.scrollTitle})}),e.jsx(ve,{className:"space-y-4",children:t.map((d,b)=>e.jsx("p",{className:"text-fg-muted text-sm",children:d},b))}),e.jsxs(D,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>c(!1),children:n.disagree}),e.jsx(l,{variant:"primary",onClick:()=>c(!1),children:n.agree})]})]})})}},te={name:"Animation",args:y,parameters:x(C,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Ouverture animée</DialogTitle>
    <DialogDescription>
        Le fond apparaît en opacité, le panneau monte de quelques pixels.
    </DialogDescription>
</Dialog>`),render:(o,{globals:a})=>{const n=m(f(a.locale));return e.jsx(B,{copy:n,children:(t,i)=>e.jsxs(g,{open:t,onOpenChange:i,dismissible:!0,dismissLabel:n.close,children:[e.jsx(u,{children:n.animationTitle}),e.jsx(h,{children:n.animationBody}),e.jsx(D,{children:e.jsx(l,{variant:"primary",onClick:()=>i(!1),children:n.close})})]})})}},oe={name:"Avec formulaire",args:y,parameters:x(C,`<Dialog open={open} onOpenChange={setOpen} dismissible>
    <DialogTitle>Inviter un membre</DialogTitle>
    <DialogBody>
        <form id="invite" onSubmit={onSubmit} className="grid gap-4">
            <TextInput type="email" name="email" label="Adresse e-mail" required />
            <Select name="role" label="Rôle" options={roles} defaultValue="editor" />
        </form>
    </DialogBody>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" type="submit" form="invite">Envoyer l'invitation</Button>
    </DialogActions>
</Dialog>`),render:(o,{globals:a})=>{const n=m(f(a.locale));return e.jsx(B,{copy:n,children:(t,i)=>e.jsxs(g,{open:t,onOpenChange:i,dismissible:!0,dismissLabel:n.close,children:[e.jsx(u,{children:n.inviteTitle}),e.jsx(ve,{children:e.jsxs("form",{id:"d-ui-invite",className:"grid gap-4",onSubmit:c=>{c.preventDefault(),i(!1)},children:[e.jsx(ta,{type:"email",name:"email",label:n.emailLabel,placeholder:n.emailPlaceholder,helper:n.inviteBody,required:!0}),e.jsx(bn,{name:"role",label:n.roleLabel,defaultValue:"editor",options:[{value:"editor",label:n.roleEditor},{value:"viewer",label:n.roleViewer}]})]})}),e.jsxs(D,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>i(!1),children:n.cancel}),e.jsx(l,{variant:"primary",type:"submit",form:"d-ui-invite",children:n.send})]})]})})}};var Ae,ke,Se;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Se=(ke=$.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Le,Ne,we;Q.parameters={...Q.parameters,docs:{...(Le=Q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Confirmation',
  args: closed,
  parameters: componentSource(importAlertDialog, \`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    title="Confirmer l'action"
    cancelLabel="Refuser"
    confirmLabel="Accepter"
>
    Cette opération modifiera définitivement vos préférences. Voulez-vous continuer ?
</AlertDialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy} label={copy.confirmOpen}>
        {(open, setOpen) => <AlertDialog open={open} onOpenChange={setOpen} title={copy.confirmTitle} cancelLabel={copy.disagree} confirmLabel={copy.agree}>
            {copy.confirmBody}
          </AlertDialog>}
      </Trigger>;
  }
}`,...(we=(Ne=Q.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var qe,Ie,_e;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Alerte par variante',
  args: closed,
  parameters: componentSource(importAlertDialog, \`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    kind="warning"
    title="Alerte"
    confirmLabel="OK"
>
    Un événement important requiert votre attention.
</AlertDialog>\`),
  render: (_, {
    globals
  }) => <AlertKindsDemo copy={dialogCopy(docsLocale(globals.locale))} />
}`,...(_e=(Ie=U.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var ze,Re,Pe;J.parameters={...J.parameters,docs:{...(ze=J.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Pe=(Re=J.parameters)==null?void 0:Re.docs)==null?void 0:Pe.source}}};var Ee,Fe,Ve;G.parameters={...G.parameters,docs:{...(Ee=G.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Centré, action unique',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} size="tiny">
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
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} size="tiny">
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
}`,...(Ve=(Fe=G.parameters)==null?void 0:Fe.docs)==null?void 0:Ve.source}}};var He,Ke,Me;Z.parameters={...Z.parameters,docs:{...(He=Z.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'Centré, actions pleine largeur',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} size="tiny">
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
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} size="tiny">
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
}`,...(Me=(Ke=Z.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var We,$e,Qe;X.parameters={...X.parameters,docs:{...(We=X.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Qe=($e=X.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source}}};var Ue,Je,Ge;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ge=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Ge.source}}};var Ze,Xe,Ye;ee.parameters={...ee.parameters,docs:{...(Ze=ee.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=ee.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var en,nn,an;ne.parameters={...ne.parameters,docs:{...(en=ne.parameters)==null?void 0:en.docs,source:{originalSource:`{
  name: 'Tailles',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>\`),
  render: (_, {
    globals
  }) => <SizesDemo copy={dialogCopy(docsLocale(globals.locale))} />
}`,...(an=(nn=ne.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var tn,on,rn;ae.parameters={...ae.parameters,docs:{...(tn=ae.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  name: 'Traitement en cours',
  args: closed,
  parameters: componentSource(importDialog, \`const [processing, setProcessing] = useState(false);

<Dialog open={open} onOpenChange={setOpen} processing={processing}>
    <DialogTitle>Enregistrement en cours</DialogTitle>
    <DialogDescription>Vos modifications sont en cours d'enregistrement.</DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)} disabled={processing}>
            Annuler
        </Button>
        <Button
            variant="primary"
            loading={processing}
            onClick={() => {
                setProcessing(true);
                setTimeout(() => {
                    setProcessing(false);
                    setOpen(false);
                }, 2000);
            }}
        >
            Enregistrer
        </Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => <ProcessingDemo copy={dialogCopy(docsLocale(globals.locale))} />
}`,...(rn=(on=ae.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var sn,ln,cn;ie.parameters={...ie.parameters,docs:{...(sn=ie.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  name: 'Contenu défilant',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogHeader>
        <DialogTitle>Conditions d'utilisation</DialogTitle>
    </DialogHeader>
    <DialogBody>
        <p>{longText}</p>
    </DialogBody>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Refuser</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Accepter</Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    const paragraphs = Array.from({
      length: 8
    }, () => copy.scrollParagraph);
    return <Trigger copy={copy} label={copy.scrollOpen}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} size="big">
            <DialogHeader>
              <DialogTitle className="pe-0">{copy.scrollTitle}</DialogTitle>
            </DialogHeader>
            <DialogBody className="space-y-4">
              {paragraphs.map((text, index) => <p key={index} className="text-fg-muted text-sm">
                  {text}
                </p>)}
            </DialogBody>
            <DialogActions surface>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.disagree}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.agree}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(cn=(ln=ie.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};var pn,dn,un;te.parameters={...te.parameters,docs:{...(pn=te.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(un=(dn=te.parameters)==null?void 0:dn.docs)==null?void 0:un.source}}};var gn,mn,fn;oe.parameters={...oe.parameters,docs:{...(gn=oe.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
    <DialogActions surface>
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
}`,...(fn=(mn=oe.parameters)==null?void 0:mn.docs)==null?void 0:fn.source}}};const ya=["Default","ConfirmDialog","AlertKinds","TintedFooter","CenteredSingleAction","CenteredWideButtons","Alert","WithDismissButton","AlertLeftAligned","Sizes","Processing","Scrollable","Animation","WithForm"],Na=Object.freeze(Object.defineProperty({__proto__:null,Alert:X,AlertKinds:U,AlertLeftAligned:ee,Animation:te,CenteredSingleAction:G,CenteredWideButtons:Z,ConfirmDialog:Q,Default:$,Processing:ae,Scrollable:ie,Sizes:ne,TintedFooter:J,WithDismissButton:Y,WithForm:oe,__namedExportsOrder:ya,default:ua},Symbol.toStringTag,{value:"Module"}));export{U as A,Q as C,Na as D,ae as P,ie as S,J as T,Y as W,$ as a,G as b,Z as c,X as d,ee as e,oe as f,ne as g,te as h};
