import{r as s,j as e,h as C,ag as f,d as D}from"./iframe-Cg6bt1aJ.js";import{M as zn}from"./arg-types-BNJ7MSgH.js";import{c as h,b as Rn}from"./docs-source-C_O40UCi.js";import{B as l}from"./Button-DV2PshCF.js";import{C as Pn,D as Fn}from"./FeedbackIcons-D_mbrhPg.js";import{e as Vn}from"./feedbackSurface-DX-WaKcU.js";import{u as En,c as Hn,d as Kn,e as Mn,a as $n,n as Wn,g as Cn,D as Qn,h as Un,l as Gn}from"./floating-BevT19-z.js";import{I as Jn}from"./IconButton-La1Jp8NF.js";import{c as Zn}from"./cornerRadius-B4XFh-_5.js";import{H as Xn}from"./Heading-B2vCCfWy.js";import{T as Yn}from"./Text-ypFHAm_o.js";import{I as Bn}from"./Icon-DsKUK0IZ.js";import{T as ea,n as na,m as aa}from"./textControl-BWiMuGGA.js";import{f as Se,u as ia,c as oa,n as ge,s as ta,N as ra,S as sa,C as la,d as ca,m as pa,e as da}from"./useSelectOverlay-CtruLNw_.js";import{T as ua}from"./TextInput-D3NzSsNE.js";import{F as ga}from"./ExclamationTriangleIcon-CrVGaMYc.js";import{F as ma}from"./CheckIcon-puPPTmtu.js";const Ne=Zn,fa={none:"rounded-b-none",sm:"rounded-b-sm",md:"rounded-b-md",lg:"rounded-b-lg",xl:"rounded-b-xl"},On=s.createContext(null);function be(t){const i=s.useContext(On);if(!i)throw new Error(`<${t}> doit être rendu à l’intérieur de <Dialog>.`);return i}const jn=typeof window>"u"?s.useEffect:s.useLayoutEffect;function d({level:t=2,className:i,...n}){const o=be("DialogTitle"),{setHasTitle:a}=o;return jn(()=>(a(!0),()=>a(!1)),[a]),e.jsx(Xn,{...n,id:o.titleId,level:t,size:"subtitle",className:C("shrink-0 pe-8",i)})}function v({className:t,...i}){const n=be("DialogDescription"),{setHasDescription:o}=n;return jn(()=>(o(!0),()=>o(!1)),[o]),e.jsx(Yn,{...i,id:n.descriptionId,size:"body-sm",tone:"muted",className:C("mt-2 shrink-0",t)})}function An({className:t,...i}){return e.jsx("header",{...i,className:C("border-border shrink-0 border-b pb-4",t)})}function me({className:t,...i}){return e.jsx("div",{...i,className:C("mt-4 min-h-0 flex-1 overflow-y-auto",t)})}const Da={end:"flex-row justify-end",start:"flex-row justify-start",stacked:"flex-col [&>*]:w-full"};function u({align:t="end",surface:i=!1,className:n,children:o,...a}){const c=be("DialogActions"),{registerFirstAction:m,radius:k}=c,O=s.useRef(null);return s.useEffect(()=>{var j;const A=(j=O.current)==null?void 0:j.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');return m(A??null),()=>m(null)},[m,o]),e.jsx("div",{...a,ref:O,className:C("flex shrink-0 gap-3 px-6 pb-6 pt-6",Da[t],i?fa[k]:null,n),children:o})}d.__docgenInfo={description:"Titre du dialogue.\n\nS'enregistre auprès du `Dialog`, qui pose alors `aria-labelledby` : le nom\naccessible vient du titre visible plutôt que d'un `aria-label` à maintenir\nen double.",methods:[],displayName:"DialogTitle",props:{level:{required:!1,tsType:{name:"union",raw:"2 | 3",elements:[{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"Niveau sémantique. `2` par défaut : le dialogue vit sous le titre de la page.",defaultValue:{value:"2",computed:!1}}}};v.__docgenInfo={description:"Texte d'accompagnement, relié par `aria-describedby`.\n\nSur un `alertdialog`, c'est cette description qui est annoncée d'emblée avec\nle titre : elle doit dire la conséquence, pas répéter le titre.",methods:[],displayName:"DialogDescription"};An.__docgenInfo={description:`En-tête fixe en haut du panneau (LumApps Toolbar).

Au défilement du corps, l'en-tête reste visible : le panneau est une colonne
flex et seul le \`DialogBody\` défile.`,methods:[],displayName:"DialogHeader"};me.__docgenInfo={description:"Contenu principal — formulaire, liste, texte long. Défile si le panneau dépasse.",methods:[],displayName:"DialogBody"};u.__docgenInfo={description:"Zone d'actions.\n\nL'action de confirmation est **le dernier enfant**, dans le DOM comme à\nl'écran. Aucune variante n'inverse l'ordre visuel : `flex-row-reverse` ou\n`flex-col-reverse` feraient diverger l'ordre de lecture de l'ordre de\ntabulation (WCAG 2.4.3). `stacked` empile donc de haut en bas.\n\nLe premier contrôle est signalé au `Dialog` : sur un `alertdialog`, c'est lui\nqui prend le focus à l'ouverture.",methods:[],displayName:"DialogActions",props:{align:{required:!1,tsType:{name:"union",raw:"'end' | 'start' | 'stacked'",elements:[{name:"literal",value:"'end'"},{name:"literal",value:"'start'"},{name:"literal",value:"'stacked'"}]},description:"",defaultValue:{value:"'end'",computed:!1}},surface:{required:!1,tsType:{name:"boolean"},description:"Pied de page ancré en bas du panneau, avec les coins inférieurs alignés sur\nle `radius` du `Dialog`.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function ya(t){const i=[],n=[];let o=!1;return s.Children.forEach(t,a=>{s.isValidElement(a)&&a.type===u?n.push(a):s.isValidElement(a)&&a.type===me?(o=!0,i.push(a)):a!=null&&a!==!1&&i.push(a)}),{content:i,actions:n,hasBody:o}}const va={tiny:"sm:max-w-[400px]",regular:"sm:max-w-[600px]",big:"sm:max-w-[800px]",huge:"sm:max-h-[calc(100dvh-2rem)] sm:min-h-[calc(100dvh-2rem)] sm:max-w-[calc(100vw-2rem)] sm:min-w-[calc(100vw-2rem)]"};function g({open:t,onOpenChange:i,size:n="regular",alert:o=!1,dismissible:a=!1,dismissLabel:c="Fermer",processing:m=!1,bordered:k=!1,radius:O="lg",initialFocus:A,children:j,className:S,"aria-label":$}){const L=s.useId(),[q,_]=s.useState(null),[z,fe]=s.useState(!1),[De,pe]=s.useState(!1),W=s.useRef(null),{refs:ye,context:w}=En({open:t,onOpenChange:i}),Q=Hn(w,{outsidePress:!o&&!m,escapeKey:!m}),R=Kn(w,{role:o?"alertdialog":"dialog"}),{getFloatingProps:de}=Mn([Q,R]),ve=$n(q),E=Gn(ve),H=Wn(),p=s.useCallback(()=>i(!1),[i]),x=s.useCallback(P=>{W.current=P},[]),K=a&&!o&&!m,{content:he,actions:ue,hasBody:I}=s.useMemo(()=>ya(j),[j]),M=ue.length>0?ue:[],U=s.useMemo(()=>({titleId:`${L}-title`,descriptionId:`${L}-description`,alert:o,radius:O,showDismiss:K,dismissLabel:c,close:p,setHasTitle:fe,setHasDescription:pe,registerFirstAction:x}),[L,o,O,K,c,p,x]),N=A??(o?W:void 0);return e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:_,hidden:!0,"aria-hidden":"true"}),t?e.jsx(Cn,{children:e.jsx(Qn,{lockScroll:!0,"data-d-ui-theme":E["data-d-ui-theme"],className:C(E.className,"grid place-items-center overflow-y-auto p-4","bg-black/70",H?null:"d-ui-dialog-overlay"),children:e.jsx(Un,{context:w,modal:!0,returnFocus:!0,initialFocus:N,children:e.jsx("div",{ref:ye.setFloating,...de(),"aria-label":z?void 0:$,"aria-labelledby":z?U.titleId:void 0,"aria-describedby":De?U.descriptionId:void 0,"aria-busy":m||void 0,className:C("bg-bg text-fg relative flex w-full flex-col shadow-[0_8px_32px_rgb(0_0_0/0.2)]","max-h-[calc(100dvh-2rem)] outline-none",Ne[O],k?"border border-border":null,va[n],H?null:"d-ui-dialog-panel",S),children:e.jsxs(On.Provider,{value:U,children:[e.jsxs("div",{className:"flex min-h-0 flex-1 flex-col overflow-hidden",children:[e.jsx("div",{className:C("flex min-h-0 flex-1 flex-col px-6 pt-6",I?"overflow-hidden":"overflow-y-auto",M.length>0?"pb-0":"pb-6"),children:he}),M]}),K?e.jsx(Jn,{type:"button",size:"sm",variant:"ghost",icon:e.jsx(Pn,{}),"aria-label":c,onClick:p,className:"absolute end-4 top-4 z-10 shrink-0"}):null,m?e.jsx("div",{className:C("bg-bg/70 absolute inset-0 grid place-items-center backdrop-blur-[1px]",Ne[O]),"aria-hidden":"true",children:e.jsx("span",{className:"d-ui-button-spinner text-brand size-8"})}):null]})})})})}):null]})}g.__docgenInfo={description:"Overlay modal : `Dialog` et, avec `alert`, `alertdialog`.\n\nLe piège de focus, la restitution du focus, le verrouillage du défilement et\nl'inertie du reste de la page viennent de `@floating-ui/react`, déjà utilisé\npar `Popover` et `Menu` — les overlays du design system partagent la même\nmécanique plutôt que chacun la sienne.\n\nL'empilement n'est pas supporté : un `Dialog` n'en ouvre pas un second.",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"Largeur maximale. Toutes les tailles retombent pleine largeur sur petit écran.",defaultValue:{value:"'regular'",computed:!1}},alert:{required:!1,tsType:{name:"boolean"},description:"Rôle `alertdialog` : décision destructive ou irréversible.\n\nLe clic sur l'arrière-plan et la croix de fermeture sont retirés — on ne\nsort que par une action explicite. `Escape` reste actif : WCAG 2.1.2\ninterdit de piéger le clavier.",defaultValue:{value:"false",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Croix de fermeture en haut à droite. Ignorée si `alert`.",defaultValue:{value:"false",computed:!1}},dismissLabel:{required:!1,tsType:{name:"string"},description:"Nom accessible de la croix.",defaultValue:{value:"'Fermer'",computed:!1}},processing:{required:!1,tsType:{name:"boolean"},description:`État de traitement : calque semi-opaque et spinner au-dessus du panneau.

Les interactions sont bloquées tant que la soumission est en cours
(LumApps \`isLoading\`).`,defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordure `border-border` autour du panneau. Défaut : sans bordure (LumApps).",defaultValue:{value:"false",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Arrondi des coins du panneau. Défaut : `lg`.",defaultValue:{value:"'lg'",computed:!1}},initialFocus:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLElement | null>"},description:"Élément qui prend le focus à l'ouverture. Par défaut, le premier focusable."},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Requis si aucun `DialogTitle` n'est rendu."}}};const ha={warning:"warning",error:"danger",success:"success"},xa={warning:"bg-warning/15",error:"bg-danger/15",success:"bg-success/15"};function Te({open:t,onOpenChange:i,title:n,children:o,kind:a,size:c="regular",bordered:m,radius:k,confirmLabel:O="OK",onConfirm:A,cancelLabel:j,onCancel:S,initialFocus:$}){const L=()=>i(!1),q=()=>{A==null||A(),L()},_=()=>{S==null||S(),L()},z=a?ha[a]:void 0;return e.jsxs(g,{open:t,onOpenChange:i,alert:!0,size:c,bordered:m,radius:k,initialFocus:$,children:[a?e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:C("flex size-10 shrink-0 items-center justify-center rounded-full",xa[a],Vn(z)),children:e.jsx(Fn,{variant:z})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(d,{className:"pe-0",children:n}),e.jsx(v,{children:o})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:n}),e.jsx(v,{children:o})]}),e.jsxs(u,{children:[j?e.jsx(l,{variant:"secondary",onClick:_,children:j}):null,e.jsx(l,{variant:"primary",onClick:q,children:O})]})]})}Te.__docgenInfo={description:"Dialogue pré-composé LumApps (`AlertDialog`).\n\n- **Confirmation** : `cancelLabel` + `confirmLabel` — on ne sort que par une\n  action explicite (pas de clic extérieur ni de croix).\n- **Alerte** : `kind` (`warning`, `error`, `success`) + une seule action\n  `confirmLabel`.",methods:[],displayName:"AlertDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},kind:{required:!1,tsType:{name:"union",raw:"'warning' | 'error' | 'success'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"Variante visuelle LumApps : icône teintée à gauche du titre.\n\nSans `kind`, le dialogue est une confirmation neutre (deux actions)."},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordure autour du panneau. Défaut : sans bordure (LumApps)."},radius:{required:!1,tsType:{name:"union",raw:"DialogProps['radius']"},description:"Arrondi des coins du panneau. Défaut : `lg`."},confirmLabel:{required:!1,tsType:{name:"string"},description:"Libellé du bouton principal.",defaultValue:{value:"'OK'",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelLabel:{required:!1,tsType:{name:"string"},description:"Si présent, le dialogue devient une confirmation (deux actions)."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function kn({options:t,value:i,defaultValue:n,onValueChange:o,name:a,form:c,placeholder:m="Choisir",emptyMessage:k="Aucune option",size:O="md",label:A,helper:j,error:S,invalid:$=!1,valid:L=!1,disabled:q=!1,required:_,fullWidth:z=!0,className:fe,id:De,"aria-label":pe,"aria-labelledby":W,"aria-describedby":ye}){const w=s.useId(),Q=De??w,R=`${w}-list`,de=`${w}-helper`,ve=A?`${Q}-label`:void 0,E=s.useRef(""),H=s.useRef(void 0),[p,x]=s.useState(!1),K=i!==void 0,[he,ue]=s.useState(n),I=K?i:he,M=!!$||!!S,U=M?S:j,N=Se(t),P=N.find(r=>r.value===I),[F,V]=s.useState(-1),Ce=W??ve,Be=r=>{K||ue(r),o==null||o(r),da(()=>x(!1))},{refs:Nn,floatingStyles:Ln,getReferenceProps:qn,getFloatingProps:wn,portal:Oe,setReference:In}=ia(p,x);s.useEffect(()=>()=>window.clearTimeout(H.current),[]),s.useEffect(()=>{if(!p){V(-1);return}const r=Se(t);V(b=>{var Ae,ke;if(b>=0&&b<r.length&&!((Ae=r[b])!=null&&Ae.disabled))return b;const xe=oa(r,I);return xe>=0&&!((ke=r[xe])!=null&&ke.disabled)?xe:ge(r,-1,1)})},[p,I,t]),s.useLayoutEffect(()=>{p&&ta(R,F)},[p,F,R]);function je(r){V(b=>ge(N,b,r))}function _n(r){if(!q){if(r.key==="ArrowDown"){r.preventDefault(),p?je(1):x(!0);return}if(r.key==="ArrowUp"){r.preventDefault(),p?je(-1):x(!0);return}if(r.key==="Home"){r.preventDefault(),p||x(!0),V(ge(N,-1,1));return}if(r.key==="End"){r.preventDefault(),p||x(!0),V(ge(N,N.length,-1));return}if(r.key==="Enter"||r.key===" "){if(r.preventDefault(),!p){x(!0);return}const b=N[F];b&&!b.disabled&&Be(b.value);return}if(r.key==="Escape"){p&&(r.preventDefault(),x(!1));return}if(r.key.length===1&&!r.metaKey&&!r.ctrlKey&&!r.altKey){r.preventDefault(),p||x(!0),E.current+=r.key,window.clearTimeout(H.current),H.current=setTimeout(()=>{E.current=""},500);const b=pa(N,E.current,F);b>=0&&V(b)}}}return e.jsxs(ea,{id:Q,label:A,helper:j,error:S,required:_,invalid:M,valid:L,disabled:q,fullWidth:z,size:O,className:fe,showCount:!1,count:0,countMessage:()=>"",countId:`${w}-count`,helperId:de,frameRef:In,children:[e.jsx(ra,{name:a,form:c,required:_,disabled:q,value:I,items:t}),e.jsxs("button",{...qn({type:"button",role:"combobox",id:Q,disabled:q,"aria-haspopup":"listbox","aria-expanded":p,"aria-controls":R,"aria-autocomplete":"none","aria-activedescendant":p&&F>=0?`${R}-opt-${F}`:void 0,"aria-invalid":M||void 0,"aria-required":_||void 0,"aria-label":pe,"aria-labelledby":W,"aria-describedby":aa(ye,U?de:void 0),className:C(na,"flex w-full cursor-pointer items-center justify-between text-left",!P&&"text-fg/60"),onClick:()=>x(r=>!r),onKeyDown:_n}),children:[e.jsxs("span",{className:"flex min-w-0 flex-1 items-center gap-2",children:[P?e.jsx(sa,{icon:P.icon}):null,e.jsx("span",{className:"min-w-0 flex-1 truncate",children:P?P.label:m})]}),e.jsx("span",{className:C("ml-2 inline-flex shrink-0 text-fg/70",p&&"rotate-180"),children:e.jsx(la,{})})]}),p?e.jsx(Cn,{children:e.jsx("div",{ref:Nn.setFloating,style:Ln,...wn(),...Oe,className:Oe.className,children:e.jsx(ca,{id:R,labelledBy:Ce,ariaLabel:Ce?void 0:pe,items:t,activeIndex:F,selectedValues:I?[I]:[],emptyMessage:k,listRef:()=>{},setActiveIndex:V,onSelect:Be})})}):null]})}kn.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Choisir'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Aucune option'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const T=`import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogDescription, DialogTitle } from 'd-ui';`,Sn=`import { useState } from 'react';
import { AlertDialog, Button } from 'd-ui';`,ba={title:"Components/Dialog",component:g,argTypes:zn,parameters:{controls:{include:["size","alert","dismissible","processing","bordered","radius"]}}},y={open:!1,onOpenChange:()=>{},children:null};function B({copy:t,label:i,variant:n="secondary",children:o}){const[a,c]=s.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(l,{variant:n,onClick:()=>c(!0),children:i??t.open}),o(a,c)]})}const G={name:"Par défaut",args:y,parameters:Rn(T,`const [open, setOpen] = useState(false);

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
);`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,children:(o,a)=>e.jsxs(g,{open:o,onOpenChange:a,children:[e.jsx(d,{children:n.planTitle}),e.jsx(v,{children:n.planBody}),e.jsxs(u,{children:[e.jsx(l,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>a(!1),children:n.subscribe})]})]})})}},J={name:"Confirmation",args:y,parameters:h(Sn,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    title="Confirmer l'action"
    cancelLabel="Refuser"
    confirmLabel="Accepter"
>
    Cette opération modifiera définitivement vos préférences. Voulez-vous continuer ?
</AlertDialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,label:n.confirmOpen,children:(o,a)=>e.jsx(Te,{open:o,onOpenChange:a,title:n.confirmTitle,cancelLabel:n.disagree,confirmLabel:n.agree,children:n.confirmBody})})}};function Ta({copy:t}){const[i,n]=s.useState(null),o=[{kind:"warning",label:t.warning},{kind:"error",label:t.error},{kind:"success",label:t.success}];return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[o.map(({kind:a,label:c})=>e.jsx(l,{variant:"secondary",onClick:()=>n(a),children:c},a)),e.jsx(Te,{open:i!==null,onOpenChange:a=>n(a?i:null),kind:i??void 0,title:t.alertTitle,confirmLabel:t.ok,children:t.alertBody})]})}const Z={name:"Alerte par variante",args:y,parameters:h(Sn,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    kind="warning"
    title="Alerte"
    confirmLabel="OK"
>
    Un événement important requiert votre attention.
</AlertDialog>`),render:(t,{globals:i})=>e.jsx(Ta,{copy:f(D(i.locale))})},X={name:"Pied de page fixe",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,children:(o,a)=>e.jsxs(g,{open:o,onOpenChange:a,children:[e.jsx(d,{children:n.deactivateTitle}),e.jsx(v,{children:n.deactivateBody}),e.jsxs(u,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>a(!1),children:n.deactivate})]})]})})}},Y={name:"Centré, action unique",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <div className="text-center">
        <Icon as={CheckIcon} size="lg" className="text-success" />
        <DialogTitle className="pe-0 mt-3">Paiement accepté</DialogTitle>
        <DialogDescription>Le reçu vient de partir vers votre adresse de facturation.</DialogDescription>
    </div>
    <DialogActions align="stacked">
        <Button variant="primary" onClick={() => setOpen(false)}>J'ai compris</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,children:(o,a)=>e.jsxs(g,{open:o,onOpenChange:a,size:"tiny",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"bg-success/15 text-success mx-auto flex size-12 items-center justify-center rounded-full",children:e.jsx(Bn,{as:ma,size:"lg"})}),e.jsx(d,{className:"mt-3 pe-0",children:n.paidTitle}),e.jsx(v,{children:n.paidBody})]}),e.jsx(u,{align:"stacked",children:e.jsx(l,{variant:"primary",onClick:()=>a(!1),children:n.gotIt})})]})})}},ee={name:"Centré, actions pleine largeur",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <DialogTitle className="pe-0 text-center">Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription className="text-center">
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="stacked">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,children:(o,a)=>e.jsxs(g,{open:o,onOpenChange:a,size:"tiny",children:[e.jsx(d,{className:"pe-0 text-center",children:n.leaveTitle}),e.jsx(v,{className:"text-center",children:n.leaveBody}),e.jsxs(u,{align:"stacked",children:[e.jsx(l,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>a(!1),children:n.leave})]})]})})}},ne={name:"Alerte",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
        Cette action est irréversible.
    </DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,variant:"primary",label:n.deactivate,children:(o,a)=>e.jsxs(g,{open:o,onOpenChange:a,alert:!0,children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:"bg-danger/15 text-danger flex size-10 shrink-0 items-center justify-center rounded-full",children:e.jsx(Bn,{as:ga,size:"md"})}),e.jsxs("div",{children:[e.jsx(d,{className:"pe-0",children:n.deactivateTitle}),e.jsx(v,{children:n.deactivateBody})]})]}),e.jsxs(u,{children:[e.jsx(l,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>a(!1),children:n.deactivate})]})]})})}},ae={name:"Avec croix de fermeture",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel="Fermer">
    <DialogTitle>Nouvelle version disponible</DialogTitle>
    <DialogDescription>
        Rechargez la page pour récupérer la dernière version.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Recharger</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,children:(o,a)=>e.jsxs(g,{open:o,onOpenChange:a,dismissible:!0,dismissLabel:n.close,children:[e.jsx(d,{children:n.updateTitle}),e.jsx(v,{children:n.updateBody}),e.jsx(u,{children:e.jsx(l,{variant:"primary",onClick:()=>a(!1),children:n.reload})})]})})}},ie={name:"Alerte, actions à gauche",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription>
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="start">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,variant:"primary",label:n.leave,children:(o,a)=>e.jsxs(g,{open:o,onOpenChange:a,alert:!0,children:[e.jsx(d,{children:n.leaveTitle}),e.jsx(v,{children:n.leaveBody}),e.jsxs(u,{align:"start",children:[e.jsx(l,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>a(!1),children:n.leave})]})]})})}},Ca=[{size:"tiny",labelKey:"tiny"},{size:"regular",labelKey:"regular"},{size:"big",labelKey:"big"},{size:"huge",labelKey:"huge"}];function Ba({copy:t}){const[i,n]=s.useState(null);return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[Ca.map(({size:o,labelKey:a})=>e.jsx(l,{variant:"secondary",onClick:()=>n(o),children:t[a]},o)),e.jsxs(g,{open:i!==null,onOpenChange:o=>n(o?i:null),size:i??"regular",children:[e.jsx(d,{children:`${t.sizeTitle} — ${i??""}`}),e.jsx(v,{children:t.sizeBody}),e.jsx(u,{children:e.jsx(l,{variant:"primary",onClick:()=>n(null),children:t.close})})]})]})}const oe={name:"Tailles",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>`),render:(t,{globals:i})=>e.jsx(Ba,{copy:f(D(i.locale))})};function Oa({copy:t}){const[i,n]=s.useState(!1),[o,a]=s.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(l,{variant:"secondary",onClick:()=>n(!0),children:t.processingOpen}),e.jsxs(g,{open:i,onOpenChange:c=>{o||n(c)},processing:o,children:[e.jsx(d,{children:t.processingTitle}),e.jsx(v,{children:t.processingBody}),e.jsxs(u,{children:[e.jsx(l,{variant:"secondary",disabled:o,onClick:()=>n(!1),children:t.cancel}),e.jsx(l,{variant:"primary",loading:o,onClick:()=>{a(!0),window.setTimeout(()=>{a(!1),n(!1)},2e3)},children:t.save})]})]})]})}const te={name:"Traitement en cours",args:y,parameters:h(T,`const [processing, setProcessing] = useState(false);

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
</Dialog>`),render:(t,{globals:i})=>e.jsx(Oa,{copy:f(D(i.locale))})},re={name:"Bordure et coins",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} bordered radius="xl">
    <DialogTitle>Apparence du panneau</DialogTitle>
    <DialogDescription>
        La bordure et l'arrondi peuvent être ajustés selon le contexte visuel.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Continuer</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,label:n.panelChromeOpen,children:(o,a)=>e.jsxs(g,{open:o,onOpenChange:a,bordered:!0,radius:"xl",children:[e.jsx(d,{children:n.panelChromeTitle}),e.jsx(v,{children:n.panelChromeBody}),e.jsxs(u,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(l,{variant:"primary",onClick:()=>a(!1),children:n.continue})]})]})})}},se={name:"Contenu défilant",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen} size="big">
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
</Dialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale)),o=Array.from({length:8},()=>n.scrollParagraph);return e.jsx(B,{copy:n,label:n.scrollOpen,children:(a,c)=>e.jsxs(g,{open:a,onOpenChange:c,size:"big",children:[e.jsx(An,{children:e.jsx(d,{className:"pe-0",children:n.scrollTitle})}),e.jsx(me,{className:"space-y-4",children:o.map((m,k)=>e.jsx("p",{className:"text-fg-muted text-sm",children:m},k))}),e.jsxs(u,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>c(!1),children:n.disagree}),e.jsx(l,{variant:"primary",onClick:()=>c(!1),children:n.agree})]})]})})}},le={name:"Animation",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Ouverture animée</DialogTitle>
    <DialogDescription>
        Le fond apparaît en opacité, le panneau monte de quelques pixels.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Fermer</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,children:(o,a)=>e.jsxs(g,{open:o,onOpenChange:a,children:[e.jsx(d,{children:n.animationTitle}),e.jsx(v,{children:n.animationBody}),e.jsx(u,{children:e.jsx(l,{variant:"primary",onClick:()=>a(!1),children:n.close})})]})})}},ce={name:"Avec formulaire",args:y,parameters:h(T,`<Dialog open={open} onOpenChange={setOpen}>
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
</Dialog>`),render:(t,{globals:i})=>{const n=f(D(i.locale));return e.jsx(B,{copy:n,children:(o,a)=>e.jsxs(g,{open:o,onOpenChange:a,children:[e.jsx(d,{children:n.inviteTitle}),e.jsx(me,{children:e.jsxs("form",{id:"d-ui-invite",className:"grid gap-4",onSubmit:c=>{c.preventDefault(),a(!1)},children:[e.jsx(ua,{type:"email",name:"email",label:n.emailLabel,placeholder:n.emailPlaceholder,helper:n.inviteBody,required:!0}),e.jsx(kn,{name:"role",label:n.roleLabel,defaultValue:"editor",options:[{value:"editor",label:n.roleEditor},{value:"viewer",label:n.roleViewer}]})]})}),e.jsxs(u,{surface:!0,children:[e.jsx(l,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(l,{variant:"primary",type:"submit",form:"d-ui-invite",children:n.send})]})]})})}};var Le,qe,we;G.parameters={...G.parameters,docs:{...(Le=G.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(we=(qe=G.parameters)==null?void 0:qe.docs)==null?void 0:we.source}}};var Ie,_e,ze;J.parameters={...J.parameters,docs:{...(Ie=J.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ze=(_e=J.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var Re,Pe,Fe;Z.parameters={...Z.parameters,docs:{...(Re=Z.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Fe=(Pe=Z.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var Ve,Ee,He;X.parameters={...X.parameters,docs:{...(Ve=X.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Pied de page fixe',
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
}`,...(He=(Ee=X.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var Ke,Me,$e;Y.parameters={...Y.parameters,docs:{...(Ke=Y.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...($e=(Me=Y.parameters)==null?void 0:Me.docs)==null?void 0:$e.source}}};var We,Qe,Ue;ee.parameters={...ee.parameters,docs:{...(We=ee.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ue=(Qe=ee.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ge,Je,Ze;ne.parameters={...ne.parameters,docs:{...(Ge=ne.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ze=(Je=ne.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var Xe,Ye,en;ae.parameters={...ae.parameters,docs:{...(Xe=ae.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(en=(Ye=ae.parameters)==null?void 0:Ye.docs)==null?void 0:en.source}}};var nn,an,on;ie.parameters={...ie.parameters,docs:{...(nn=ie.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(on=(an=ie.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var tn,rn,sn;oe.parameters={...oe.parameters,docs:{...(tn=oe.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(sn=(rn=oe.parameters)==null?void 0:rn.docs)==null?void 0:sn.source}}};var ln,cn,pn;te.parameters={...te.parameters,docs:{...(ln=te.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(pn=(cn=te.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var dn,un,gn;re.parameters={...re.parameters,docs:{...(dn=re.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(gn=(un=re.parameters)==null?void 0:un.docs)==null?void 0:gn.source}}};var mn,fn,Dn;se.parameters={...se.parameters,docs:{...(mn=se.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(Dn=(fn=se.parameters)==null?void 0:fn.docs)==null?void 0:Dn.source}}};var yn,vn,hn;le.parameters={...le.parameters,docs:{...(yn=le.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(hn=(vn=le.parameters)==null?void 0:vn.docs)==null?void 0:hn.source}}};var xn,bn,Tn;ce.parameters={...ce.parameters,docs:{...(xn=ce.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(Tn=(bn=ce.parameters)==null?void 0:bn.docs)==null?void 0:Tn.source}}};const ja=["Default","ConfirmDialog","AlertKinds","TintedFooter","CenteredSingleAction","CenteredWideButtons","Alert","WithDismissButton","AlertLeftAligned","Sizes","Processing","PanelChrome","Scrollable","Animation","WithForm"],Ma=Object.freeze(Object.defineProperty({__proto__:null,Alert:ne,AlertKinds:Z,AlertLeftAligned:ie,Animation:le,CenteredSingleAction:Y,CenteredWideButtons:ee,ConfirmDialog:J,Default:G,PanelChrome:re,Processing:te,Scrollable:se,Sizes:oe,TintedFooter:X,WithDismissButton:ae,WithForm:ce,__namedExportsOrder:ja,default:ba},Symbol.toStringTag,{value:"Module"}));export{Z as A,J as C,Ma as D,te as P,se as S,X as T,ae as W,G as a,Y as b,ee as c,ne as d,ie as e,ce as f,oe as g,re as h,le as i};
