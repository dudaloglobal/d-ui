import{r,j as e,f as O,ae as f,d as D}from"./iframe-D_uNPPBV.js";import{J as zn}from"./arg-types-DBkVzJFl.js";import{c as h,b as Rn}from"./docs-source-C_O40UCi.js";import{B as l}from"./Button-DyzFzmN3.js";import{C as Pn,D as En,e as Fn}from"./feedbackSurface-CkeprWxp.js";import{u as Vn,c as Hn,d as Kn,e as Mn,a as $n,n as Wn,g as Cn,D as Qn,h as Un,l as Gn}from"./floating-Dxl6iPeP.js";import{c as Jn}from"./cornerRadius-B4XFh-_5.js";import{I as Zn}from"./IconButton-C7rnat-o.js";import{H as Xn}from"./Heading-B9in55XL.js";import{T as Yn}from"./Text-DasgVAvA.js";import{I as On}from"./Icon-Bos0cyO7.js";import{T as ea,n as na,m as aa}from"./textControl-BdIZBSpj.js";import{f as Se,u as ia,c as oa,n as ue,s as ta,N as ra,S as sa,C as la,d as ca,m as pa,e as da}from"./useSelectOverlay-1eqa9z1r.js";import{T as ua}from"./TextInput-D6T01Xng.js";import{F as ga}from"./ExclamationTriangleIcon-C3PJ8YhA.js";function ma({title:t,titleId:a,...n},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const fa=r.forwardRef(ma),Ne=Jn,Da={none:"rounded-b-none",sm:"rounded-b-sm",md:"rounded-b-md",lg:"rounded-b-lg",xl:"rounded-b-xl"},Bn=r.createContext(null);function xe(t){const a=r.useContext(Bn);if(!a)throw new Error(`<${t}> doit être rendu à l’intérieur de <Dialog>.`);return a}const jn=typeof window>"u"?r.useEffect:r.useLayoutEffect;function u({level:t=2,className:a,...n}){const i=xe("DialogTitle"),{setHasTitle:o}=i;return jn(()=>(o(!0),()=>o(!1)),[o]),e.jsx(Xn,{...n,id:i.titleId,level:t,size:"subtitle",className:a})}function v({className:t,...a}){const n=xe("DialogDescription"),{setHasDescription:i}=n;return jn(()=>(i(!0),()=>i(!1)),[i]),e.jsx(Yn,{...a,id:n.descriptionId,size:"body-sm",tone:"muted",className:O("mt-2",t)})}function An({className:t,...a}){return e.jsx("header",{...a,className:O("border-border shrink-0 border-b pb-4",t)})}function be({className:t,...a}){return e.jsx("div",{...a,className:O("mt-4 min-h-0 flex-1 overflow-y-auto",t)})}const ya={end:"flex-row justify-end",start:"flex-row justify-start",stacked:"flex-col [&>*]:w-full"};function d({align:t="end",surface:a=!1,className:n,children:i,...o}){const c=xe("DialogActions"),{registerFirstAction:m,radius:N,showDismiss:A,dismissLabel:k,close:S}=c,C=r.useRef(null);return r.useEffect(()=>{var j;const _=(j=C.current)==null?void 0:j.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');return m(_??null),()=>m(null)},[m,i]),e.jsxs("div",{...o,ref:C,className:O("flex shrink-0 gap-3 px-6",ya[t],a?O("bg-surface-muted border-border border-t py-4",Da[N]):"pb-6 pt-4",n),children:[A?e.jsx(Zn,{type:"button",size:"sm",variant:"ghost",icon:e.jsx(Pn,{}),"aria-label":k,onClick:S,className:t==="end"?"me-auto":void 0}):null,i]})}u.__docgenInfo={description:"Titre du dialogue.\n\nS'enregistre auprès du `Dialog`, qui pose alors `aria-labelledby` : le nom\naccessible vient du titre visible plutôt que d'un `aria-label` à maintenir\nen double.",methods:[],displayName:"DialogTitle",props:{level:{required:!1,tsType:{name:"union",raw:"2 | 3",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"Niveau sémantique. `2` par défaut : le dialogue vit sous le titre de la page.",defaultValue:{value:"2",computed:!1}}}};v.__docgenInfo={description:"Texte d'accompagnement, relié par `aria-describedby`.\n\nSur un `alertdialog`, c'est cette description qui est annoncée d'emblée avec\nle titre : elle doit dire la conséquence, pas répéter le titre.",methods:[],displayName:"DialogDescription"};An.__docgenInfo={description:`En-tête fixe en haut du panneau (LumApps Toolbar).

Au défilement du corps, l'en-tête reste visible : le panneau est une colonne
flex et seul le \`DialogBody\` défile.`,methods:[],displayName:"DialogHeader"};be.__docgenInfo={description:"Contenu principal — formulaire, liste, texte long. Défile si le panneau dépasse.",methods:[],displayName:"DialogBody"};d.__docgenInfo={description:"Zone d'actions.\n\nL'action de confirmation est **le dernier enfant**, dans le DOM comme à\nl'écran. Aucune variante n'inverse l'ordre visuel : `flex-row-reverse` ou\n`flex-col-reverse` feraient diverger l'ordre de lecture de l'ordre de\ntabulation (WCAG 2.4.3). `stacked` empile donc de haut en bas.\n\nLe premier contrôle est signalé au `Dialog` : sur un `alertdialog`, c'est lui\nqui prend le focus à l'ouverture.",methods:[],displayName:"DialogActions",props:{align:{required:!1,tsType:{name:"union",raw:"'end' | 'start' | 'stacked'",elements:[{name:"literal",value:"'end'"},{name:"literal",value:"'start'"},{name:"literal",value:"'stacked'"}]},description:"",defaultValue:{value:"'end'",computed:!1}},surface:{required:!1,tsType:{name:"boolean"},description:`Pied de page teinté sur toute la largeur du panneau.

Rendu dans la zone footer du \`Dialog\` : la bande file jusqu'aux bords sans
marges négatives.`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function va(t){const a=[],n=[];return r.Children.forEach(t,i=>{r.isValidElement(i)&&i.type===d?n.push(i):i!=null&&i!==!1&&a.push(i)}),{content:a,actions:n}}const ha={tiny:"sm:max-w-[400px]",regular:"sm:max-w-[600px]",big:"sm:max-w-[800px]",huge:"sm:max-h-[calc(100dvh-2rem)] sm:min-h-[calc(100dvh-2rem)] sm:max-w-[calc(100vw-2rem)] sm:min-w-[calc(100vw-2rem)]"};function g({open:t,onOpenChange:a,size:n="regular",alert:i=!1,dismissible:o=!1,dismissLabel:c="Fermer",processing:m=!1,bordered:N=!1,radius:A="lg",initialFocus:k,children:S,className:C,"aria-label":_}){const j=r.useId(),[w,z]=r.useState(null),[R,ge]=r.useState(!1),[me,ce]=r.useState(!1),$=r.useRef(null),{refs:fe,context:I}=Vn({open:t,onOpenChange:a}),W=Hn(I,{outsidePress:!i&&!m,escapeKey:!m}),P=Kn(I,{role:i?"alertdialog":"dialog"}),{getFloatingProps:pe}=Mn([W,P]),De=$n(w),H=Gn(De),K=Wn(),p=r.useCallback(()=>a(!1),[a]),x=r.useCallback(q=>{$.current=q},[]),M=o&&!i&&!m,{content:ye,actions:de}=r.useMemo(()=>va(S),[S]),L=de.length>0?de:M?[e.jsx(d,{},"dismiss")]:[],E=r.useMemo(()=>({titleId:`${j}-title`,descriptionId:`${j}-description`,alert:i,radius:A,showDismiss:M,dismissLabel:c,close:p,setHasTitle:ge,setHasDescription:ce,registerFirstAction:x}),[j,i,A,M,c,p,x]),ve=k??(i?$:void 0);return e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:z,hidden:!0,"aria-hidden":"true"}),t?e.jsx(Cn,{children:e.jsx(Qn,{lockScroll:!0,"data-d-ui-theme":H["data-d-ui-theme"],className:O(H.className,"grid place-items-center overflow-y-auto p-4","bg-black/70",K?null:"d-ui-dialog-overlay"),children:e.jsx(Un,{context:I,modal:!0,returnFocus:!0,initialFocus:ve,children:e.jsx("div",{ref:fe.setFloating,...pe(),"aria-label":R?void 0:_,"aria-labelledby":R?E.titleId:void 0,"aria-describedby":me?E.descriptionId:void 0,"aria-busy":m||void 0,className:O("bg-bg text-fg relative flex w-full flex-col shadow-[0_8px_32px_rgb(0_0_0/0.2)]","max-h-[calc(100dvh-2rem)] outline-none",Ne[A],N?"border border-border":null,ha[n],K?null:"d-ui-dialog-panel",C),children:e.jsxs(Bn.Provider,{value:E,children:[e.jsxs("div",{className:"flex min-h-0 flex-1 flex-col overflow-hidden",children:[e.jsx("div",{className:O("flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pt-6",L.length>0?"pb-0":"pb-6"),children:ye}),L]}),m?e.jsx("div",{className:O("bg-bg/70 absolute inset-0 grid place-items-center backdrop-blur-[1px]",Ne[A]),"aria-hidden":"true",children:e.jsx("span",{className:"d-ui-button-spinner text-brand size-8"})}):null]})})})})}):null]})}g.__docgenInfo={description:"Overlay modal : `Dialog` et, avec `alert`, `alertdialog`.\n\nLe piège de focus, la restitution du focus, le verrouillage du défilement et\nl'inertie du reste de la page viennent de `@floating-ui/react`, déjà utilisé\npar `Popover` et `Menu` — les overlays du design system partagent la même\nmécanique plutôt que chacun la sienne.\n\nL'empilement n'est pas supporté : un `Dialog` n'en ouvre pas un second.",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"Largeur maximale. Toutes les tailles retombent pleine largeur sur petit écran.",defaultValue:{value:"'regular'",computed:!1}},alert:{required:!1,tsType:{name:"boolean"},description:"Rôle `alertdialog` : décision destructive ou irréversible.\n\nLe clic sur l'arrière-plan et la croix de fermeture sont retirés — on ne\nsort que par une action explicite. `Escape` reste actif : WCAG 2.1.2\ninterdit de piéger le clavier.",defaultValue:{value:"false",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Croix de fermeture dans le pied de page (`DialogActions`). Ignorée si `alert`.",defaultValue:{value:"false",computed:!1}},dismissLabel:{required:!1,tsType:{name:"string"},description:"Nom accessible de la croix.",defaultValue:{value:"'Fermer'",computed:!1}},processing:{required:!1,tsType:{name:"boolean"},description:`État de traitement : calque semi-opaque et spinner au-dessus du panneau.

Les interactions sont bloquées tant que la soumission est en cours
(LumApps \`isLoading\`).`,defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordure `border-border` autour du panneau. Défaut : sans bordure (LumApps).",defaultValue:{value:"false",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Arrondi des coins du panneau. Défaut : `lg`.",defaultValue:{value:"'lg'",computed:!1}},initialFocus:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLElement | null>"},description:"Élément qui prend le focus à l'ouverture. Par défaut, le premier focusable."},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Requis si aucun `DialogTitle` n'est rendu."}}};const xa={warning:"warning",error:"danger",success:"success"},ba={warning:"bg-warning/15",error:"bg-danger/15",success:"bg-success/15"};function Te({open:t,onOpenChange:a,title:n,children:i,kind:o,size:c="regular",bordered:m,radius:N,confirmLabel:A="OK",onConfirm:k,cancelLabel:S,onCancel:C,initialFocus:_}){const j=()=>a(!1),w=()=>{k==null||k(),j()},z=()=>{C==null||C(),j()},R=o?xa[o]:void 0;return e.jsxs(g,{open:t,onOpenChange:a,alert:!0,size:c,bordered:m,radius:N,initialFocus:_,children:[o?e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:O("flex size-10 shrink-0 items-center justify-center rounded-full",ba[o],Fn(R)),children:e.jsx(En,{variant:R})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(u,{className:"pe-0",children:n}),e.jsx(v,{children:i})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(u,{children:n}),e.jsx(v,{children:i})]}),e.jsxs(d,{children:[S?e.jsx(l,{variant:"secondary",onClick:z,children:S}):null,e.jsx(l,{variant:"primary",onClick:w,children:A})]})]})}Te.__docgenInfo={description:"Dialogue pré-composé LumApps (`AlertDialog`).\n\n- **Confirmation** : `cancelLabel` + `confirmLabel` — on ne sort que par une\n  action explicite (pas de clic extérieur ni de croix).\n- **Alerte** : `kind` (`warning`, `error`, `success`) + une seule action\n  `confirmLabel`.",methods:[],displayName:"AlertDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},kind:{required:!1,tsType:{name:"union",raw:"'warning' | 'error' | 'success'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"Variante visuelle LumApps : icône teintée à gauche du titre.\n\nSans `kind`, le dialogue est une confirmation neutre (deux actions)."},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordure autour du panneau. Défaut : sans bordure (LumApps)."},radius:{required:!1,tsType:{name:"union",raw:"DialogProps['radius']"},description:"Arrondi des coins du panneau. Défaut : `lg`."},confirmLabel:{required:!1,tsType:{name:"string"},description:"Libellé du bouton principal.",defaultValue:{value:"'OK'",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelLabel:{required:!1,tsType:{name:"string"},description:"Si présent, le dialogue devient une confirmation (deux actions)."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function kn({options:t,value:a,defaultValue:n,onValueChange:i,name:o,form:c,placeholder:m="Choisir",emptyMessage:N="Aucune option",size:A="md",label:k,helper:S,error:C,invalid:_=!1,valid:j=!1,disabled:w=!1,required:z,fullWidth:R=!0,className:ge,id:me,"aria-label":ce,"aria-labelledby":$,"aria-describedby":fe}){const I=r.useId(),W=me??I,P=`${I}-list`,pe=`${I}-helper`,De=k?`${W}-label`:void 0,H=r.useRef(""),K=r.useRef(void 0),[p,x]=r.useState(!1),M=a!==void 0,[ye,de]=r.useState(n),L=M?a:ye,E=!!_||!!C,ve=E?C:S,q=Se(t),Q=q.find(s=>s.value===L),[F,V]=r.useState(-1),Ce=$??De,Oe=s=>{M||de(s),i==null||i(s),da(()=>x(!1))},{refs:Nn,floatingStyles:Ln,getReferenceProps:qn,getFloatingProps:wn,portal:Be,setReference:In}=ia(p,x);r.useEffect(()=>()=>window.clearTimeout(K.current),[]),r.useEffect(()=>{if(!p){V(-1);return}const s=Se(t);V(b=>{var Ae,ke;if(b>=0&&b<s.length&&!((Ae=s[b])!=null&&Ae.disabled))return b;const he=oa(s,L);return he>=0&&!((ke=s[he])!=null&&ke.disabled)?he:ue(s,-1,1)})},[p,L,t]),r.useLayoutEffect(()=>{p&&ta(P,F)},[p,F,P]);function je(s){V(b=>ue(q,b,s))}function _n(s){if(!w){if(s.key==="ArrowDown"){s.preventDefault(),p?je(1):x(!0);return}if(s.key==="ArrowUp"){s.preventDefault(),p?je(-1):x(!0);return}if(s.key==="Home"){s.preventDefault(),p||x(!0),V(ue(q,-1,1));return}if(s.key==="End"){s.preventDefault(),p||x(!0),V(ue(q,q.length,-1));return}if(s.key==="Enter"||s.key===" "){if(s.preventDefault(),!p){x(!0);return}const b=q[F];b&&!b.disabled&&Oe(b.value);return}if(s.key==="Escape"){p&&(s.preventDefault(),x(!1));return}if(s.key.length===1&&!s.metaKey&&!s.ctrlKey&&!s.altKey){s.preventDefault(),p||x(!0),H.current+=s.key,window.clearTimeout(K.current),K.current=setTimeout(()=>{H.current=""},500);const b=pa(q,H.current,F);b>=0&&V(b)}}}return e.jsxs(ea,{id:W,label:k,helper:S,error:C,required:z,invalid:E,valid:j,disabled:w,fullWidth:R,size:A,className:ge,showCount:!1,count:0,countMessage:()=>"",countId:`${I}-count`,helperId:pe,frameRef:In,children:[e.jsx(ra,{name:o,form:c,required:z,disabled:w,value:L,items:t}),e.jsxs("button",{...qn({type:"button",role:"combobox",id:W,disabled:w,"aria-haspopup":"listbox","aria-expanded":p,"aria-controls":P,"aria-autocomplete":"none","aria-activedescendant":p&&F>=0?`${P}-opt-${F}`:void 0,"aria-invalid":E||void 0,"aria-required":z||void 0,"aria-label":ce,"aria-labelledby":$,"aria-describedby":aa(fe,ve?pe:void 0),className:O(na,"flex w-full cursor-pointer items-center justify-between text-left",!Q&&"text-fg/60"),onClick:()=>x(s=>!s),onKeyDown:_n}),children:[e.jsxs("span",{className:"flex min-w-0 flex-1 items-center gap-2",children:[Q?e.jsx(sa,{icon:Q.icon}):null,e.jsx("span",{className:"min-w-0 flex-1 truncate",children:Q?Q.label:m})]}),e.jsx("span",{className:O("ml-2 inline-flex shrink-0 text-fg/70",p&&"rotate-180"),children:e.jsx(la,{})})]}),p?e.jsx(Cn,{children:e.jsx("div",{ref:Nn.setFloating,style:Ln,...wn(),...Be,className:Be.className,children:e.jsx(ca,{id:P,labelledBy:Ce,ariaLabel:Ce?void 0:ce,items:t,activeIndex:F,selectedValues:L?[L]:[],emptyMessage:N,listRef:()=>{},setActiveIndex:V,onSelect:Oe})})}):null]})}kn.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Choisir'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Aucune option'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const T=`import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogDescription, DialogTitle } from 'd-ui';`,Sn=`import { useState } from 'react';
import { AlertDialog, Button } from 'd-ui';`,Ta={title:"Components/Dialog",component:g,argTypes:zn,parameters:{controls:{include:["size","alert","dismissible","processing","bordered","radius"]}}},y={open:!1,onOpenChange:()=>{},children:null};function B({copy:t,label:a,variant:n="secondary",children:i}){const[o,c]=r.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(l,{variant:n,onClick:()=>c(!0),children:a??t.open}),i(o,c)]})}const U={name:"Par défaut",args:y,parameters:Rn(T,`const [open, setOpen] = useState(false);

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
);`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,children:(i,o)=>e.jsxs(g,{open:i,onOpenChange:o,children:[e.jsx(u,{children:n.planTitle}),e.jsx(v,{children:n.planBody}),e.jsxs(d,{children:[e.jsx(l,{variant:"secondary",onClick:()=>o(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>o(!1),children:n.subscribe})]})]})})}},G={name:"Confirmation",args:y,parameters:h(Sn,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    title="Confirmer l'action"
    cancelLabel="Refuser"
    confirmLabel="Accepter"
>
    Cette opération modifiera définitivement vos préférences. Voulez-vous continuer ?
</AlertDialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,label:n.confirmOpen,children:(i,o)=>e.jsx(Te,{open:i,onOpenChange:o,title:n.confirmTitle,cancelLabel:n.disagree,confirmLabel:n.agree,children:n.confirmBody})})}};function Ca({copy:t}){const[a,n]=r.useState(null),i=[{kind:"warning",label:t.warning},{kind:"error",label:t.error},{kind:"success",label:t.success}];return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[i.map(({kind:o,label:c})=>e.jsx(l,{variant:"secondary",onClick:()=>n(o),children:c},o)),e.jsx(Te,{open:a!==null,onOpenChange:o=>n(o?a:null),kind:a??void 0,title:t.alertTitle,confirmLabel:t.ok,children:t.alertBody})]})}const J={name:"Alerte par variante",args:y,parameters:h(Sn,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    kind="warning"
    title="Alerte"
    confirmLabel="OK"
>
    Un événement important requiert votre attention.
</AlertDialog>`),render:(t,{globals:a})=>e.jsx(Ca,{copy:f(D(a.locale))})},Z={name:"Pied de page teinté",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,children:(i,o)=>e.jsxs(g,{open:i,onOpenChange:o,children:[e.jsx(u,{children:n.deactivateTitle}),e.jsx(v,{children:n.deactivateBody}),e.jsxs(d,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>o(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>o(!1),children:n.deactivate})]})]})})}},X={name:"Centré, action unique",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <div className="text-center">
        <Icon as={CheckIcon} size="lg" className="text-success" />
        <DialogTitle className="pe-0 mt-3">Paiement accepté</DialogTitle>
        <DialogDescription>Le reçu vient de partir vers votre adresse de facturation.</DialogDescription>
    </div>
    <DialogActions align="stacked">
        <Button variant="primary" onClick={() => setOpen(false)}>J'ai compris</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,children:(i,o)=>e.jsxs(g,{open:i,onOpenChange:o,size:"tiny",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"bg-success/15 text-success mx-auto flex size-12 items-center justify-center rounded-full",children:e.jsx(On,{as:fa,size:"lg"})}),e.jsx(u,{className:"mt-3 pe-0",children:n.paidTitle}),e.jsx(v,{children:n.paidBody})]}),e.jsx(d,{align:"stacked",children:e.jsx(l,{variant:"primary",onClick:()=>o(!1),children:n.gotIt})})]})})}},Y={name:"Centré, actions pleine largeur",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <DialogTitle className="pe-0 text-center">Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription className="text-center">
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="stacked">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,children:(i,o)=>e.jsxs(g,{open:i,onOpenChange:o,size:"tiny",children:[e.jsx(u,{className:"pe-0 text-center",children:n.leaveTitle}),e.jsx(v,{className:"text-center",children:n.leaveBody}),e.jsxs(d,{align:"stacked",children:[e.jsx(l,{variant:"secondary",onClick:()=>o(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>o(!1),children:n.leave})]})]})})}},ee={name:"Alerte",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
        Cette action est irréversible.
    </DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,variant:"primary",label:n.deactivate,children:(i,o)=>e.jsxs(g,{open:i,onOpenChange:o,alert:!0,children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:"bg-danger/15 text-danger flex size-10 shrink-0 items-center justify-center rounded-full",children:e.jsx(On,{as:ga,size:"md"})}),e.jsxs("div",{children:[e.jsx(u,{className:"pe-0",children:n.deactivateTitle}),e.jsx(v,{children:n.deactivateBody})]})]}),e.jsxs(d,{children:[e.jsx(l,{variant:"secondary",onClick:()=>o(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>o(!1),children:n.deactivate})]})]})})}},ne={name:"Avec croix de fermeture",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel="Fermer">
    <DialogTitle>Nouvelle version disponible</DialogTitle>
    <DialogDescription>
        Rechargez la page pour récupérer la dernière version.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Recharger</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,children:(i,o)=>e.jsxs(g,{open:i,onOpenChange:o,dismissible:!0,dismissLabel:n.close,children:[e.jsx(u,{children:n.updateTitle}),e.jsx(v,{children:n.updateBody}),e.jsx(d,{children:e.jsx(l,{variant:"primary",onClick:()=>o(!1),children:n.reload})})]})})}},ae={name:"Alerte, actions à gauche",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription>
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="start">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,variant:"primary",label:n.leave,children:(i,o)=>e.jsxs(g,{open:i,onOpenChange:o,alert:!0,children:[e.jsx(u,{children:n.leaveTitle}),e.jsx(v,{children:n.leaveBody}),e.jsxs(d,{align:"start",children:[e.jsx(l,{variant:"secondary",onClick:()=>o(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>o(!1),children:n.leave})]})]})})}},Oa=[{size:"tiny",labelKey:"tiny"},{size:"regular",labelKey:"regular"},{size:"big",labelKey:"big"},{size:"huge",labelKey:"huge"}];function Ba({copy:t}){const[a,n]=r.useState(null);return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[Oa.map(({size:i,labelKey:o})=>e.jsx(l,{variant:"secondary",onClick:()=>n(i),children:t[o]},i)),e.jsxs(g,{open:a!==null,onOpenChange:i=>n(i?a:null),size:a??"regular",children:[e.jsx(u,{children:`${t.sizeTitle} — ${a??""}`}),e.jsx(v,{children:t.sizeBody}),e.jsx(d,{children:e.jsx(l,{variant:"primary",onClick:()=>n(null),children:t.close})})]})]})}const ie={name:"Tailles",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>`),render:(t,{globals:a})=>e.jsx(Ba,{copy:f(D(a.locale))})};function ja({copy:t}){const[a,n]=r.useState(!1),[i,o]=r.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(l,{variant:"secondary",onClick:()=>n(!0),children:t.processingOpen}),e.jsxs(g,{open:a,onOpenChange:c=>{i||n(c)},processing:i,children:[e.jsx(u,{children:t.processingTitle}),e.jsx(v,{children:t.processingBody}),e.jsxs(d,{children:[e.jsx(l,{variant:"secondary",disabled:i,onClick:()=>n(!1),children:t.cancel}),e.jsx(l,{variant:"primary",loading:i,onClick:()=>{o(!0),window.setTimeout(()=>{o(!1),n(!1)},2e3)},children:t.save})]})]})]})}const oe={name:"Traitement en cours",args:y,parameters:h(T,`const [processing, setProcessing] = useState(false);

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
</Dialog>`),render:(t,{globals:a})=>e.jsx(ja,{copy:f(D(a.locale))})},te={name:"Bordure et coins",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} bordered radius="xl">
    <DialogTitle>Apparence du panneau</DialogTitle>
    <DialogDescription>
        La bordure et l'arrondi peuvent être ajustés selon le contexte visuel.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Continuer</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,label:n.panelChromeOpen,children:(i,o)=>e.jsxs(g,{open:i,onOpenChange:o,bordered:!0,radius:"xl",children:[e.jsx(u,{children:n.panelChromeTitle}),e.jsx(v,{children:n.panelChromeBody}),e.jsxs(d,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>o(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>o(!1),children:n.continue})]})]})})}},re={name:"Contenu défilant",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} size="big">
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
</Dialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale)),i=Array.from({length:8},()=>n.scrollParagraph);return e.jsx(B,{copy:n,label:n.scrollOpen,children:(o,c)=>e.jsxs(g,{open:o,onOpenChange:c,size:"big",children:[e.jsx(An,{children:e.jsx(u,{className:"pe-0",children:n.scrollTitle})}),e.jsx(be,{className:"space-y-4",children:i.map((m,N)=>e.jsx("p",{className:"text-fg-muted text-sm",children:m},N))}),e.jsxs(d,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>c(!1),children:n.disagree}),e.jsx(l,{variant:"primary",onClick:()=>c(!1),children:n.agree})]})]})})}},se={name:"Animation",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Ouverture animée</DialogTitle>
    <DialogDescription>
        Le fond apparaît en opacité, le panneau monte de quelques pixels.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Fermer</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,children:(i,o)=>e.jsxs(g,{open:i,onOpenChange:o,children:[e.jsx(u,{children:n.animationTitle}),e.jsx(v,{children:n.animationBody}),e.jsx(d,{children:e.jsx(l,{variant:"primary",onClick:()=>o(!1),children:n.close})})]})})}},le={name:"Avec formulaire",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen}>
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
</Dialog>`),render:(t,{globals:a})=>{const n=f(D(a.locale));return e.jsx(B,{copy:n,children:(i,o)=>e.jsxs(g,{open:i,onOpenChange:o,children:[e.jsx(u,{children:n.inviteTitle}),e.jsx(be,{children:e.jsxs("form",{id:"d-ui-invite",className:"grid gap-4",onSubmit:c=>{c.preventDefault(),o(!1)},children:[e.jsx(ua,{type:"email",name:"email",label:n.emailLabel,placeholder:n.emailPlaceholder,helper:n.inviteBody,required:!0}),e.jsx(kn,{name:"role",label:n.roleLabel,defaultValue:"editor",options:[{value:"editor",label:n.roleEditor},{value:"viewer",label:n.roleViewer}]})]})}),e.jsxs(d,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>o(!1),children:n.cancel}),e.jsx(l,{variant:"primary",type:"submit",form:"d-ui-invite",children:n.send})]})]})})}};var Le,qe,we;U.parameters={...U.parameters,docs:{...(Le=U.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(we=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:we.source}}};var Ie,_e,ze;G.parameters={...G.parameters,docs:{...(Ie=G.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ze=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var Re,Pe,Ee;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ee=(Pe=J.parameters)==null?void 0:Pe.docs)==null?void 0:Ee.source}}};var Fe,Ve,He;Z.parameters={...Z.parameters,docs:{...(Fe=Z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(He=(Ve=Z.parameters)==null?void 0:Ve.docs)==null?void 0:He.source}}};var Ke,Me,$e;X.parameters={...X.parameters,docs:{...(Ke=X.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...($e=(Me=X.parameters)==null?void 0:Me.docs)==null?void 0:$e.source}}};var We,Qe,Ue;Y.parameters={...Y.parameters,docs:{...(We=Y.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ue=(Qe=Y.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ge,Je,Ze;ee.parameters={...ee.parameters,docs:{...(Ge=ee.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ze=(Je=ee.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var Xe,Ye,en;ne.parameters={...ne.parameters,docs:{...(Xe=ne.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(en=(Ye=ne.parameters)==null?void 0:Ye.docs)==null?void 0:en.source}}};var nn,an,on;ae.parameters={...ae.parameters,docs:{...(nn=ae.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(on=(an=ae.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var tn,rn,sn;ie.parameters={...ie.parameters,docs:{...(tn=ie.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(sn=(rn=ie.parameters)==null?void 0:rn.docs)==null?void 0:sn.source}}};var ln,cn,pn;oe.parameters={...oe.parameters,docs:{...(ln=oe.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(pn=(cn=oe.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var dn,un,gn;te.parameters={...te.parameters,docs:{...(dn=te.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  name: 'Bordure et coins',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen} bordered radius="xl">
    <DialogTitle>Apparence du panneau</DialogTitle>
    <DialogDescription>
        La bordure et l'arrondi peuvent être ajustés selon le contexte visuel.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Continuer</Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy} label={copy.panelChromeOpen}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen} bordered radius="xl">
            <DialogTitle>{copy.panelChromeTitle}</DialogTitle>
            <DialogDescription>{copy.panelChromeBody}</DialogDescription>
            <DialogActions surface>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.continue}
              </Button>
            </DialogActions>
          </Dialog>}
      </Trigger>;
  }
}`,...(gn=(un=te.parameters)==null?void 0:un.docs)==null?void 0:gn.source}}};var mn,fn,Dn;re.parameters={...re.parameters,docs:{...(mn=re.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(Dn=(fn=re.parameters)==null?void 0:fn.docs)==null?void 0:Dn.source}}};var yn,vn,hn;se.parameters={...se.parameters,docs:{...(yn=se.parameters)==null?void 0:yn.docs,source:{originalSource:`{
  name: 'Animation',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Ouverture animée</DialogTitle>
    <DialogDescription>
        Le fond apparaît en opacité, le panneau monte de quelques pixels.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Fermer</Button>
    </DialogActions>
</Dialog>\`),
  render: (_, {
    globals
  }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return <Trigger copy={copy}>
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen}>
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
}`,...(hn=(vn=se.parameters)==null?void 0:vn.docs)==null?void 0:hn.source}}};var xn,bn,Tn;le.parameters={...le.parameters,docs:{...(xn=le.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  name: 'Avec formulaire',
  args: closed,
  parameters: componentSource(importDialog, \`<Dialog open={open} onOpenChange={setOpen}>
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
        {(open, setOpen) => <Dialog open={open} onOpenChange={setOpen}>
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
}`,...(Tn=(bn=le.parameters)==null?void 0:bn.docs)==null?void 0:Tn.source}}};const Aa=["Default","ConfirmDialog","AlertKinds","TintedFooter","CenteredSingleAction","CenteredWideButtons","Alert","WithDismissButton","AlertLeftAligned","Sizes","Processing","PanelChrome","Scrollable","Animation","WithForm"],Ka=Object.freeze(Object.defineProperty({__proto__:null,Alert:ee,AlertKinds:J,AlertLeftAligned:ae,Animation:se,CenteredSingleAction:X,CenteredWideButtons:Y,ConfirmDialog:G,Default:U,PanelChrome:te,Processing:oe,Scrollable:re,Sizes:ie,TintedFooter:Z,WithDismissButton:ne,WithForm:le,__namedExportsOrder:Aa,default:Ta},Symbol.toStringTag,{value:"Module"}));export{J as A,G as C,Ka as D,oe as P,re as S,Z as T,ne as W,U as a,X as b,Y as c,ee as d,ae as e,le as f,ie as g,te as h,se as i};
