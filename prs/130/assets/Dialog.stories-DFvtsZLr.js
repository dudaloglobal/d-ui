import{r as D,j as e,h as $,ai as p,d}from"./iframe-av9DYt01.js";import{Q as tn}from"./arg-types-D35aY_Cn.js";import{c as g,b as sn}from"./docs-source-C_O40UCi.js";import{B as t}from"./Button-DP-j3O6D.js";import{D as ln}from"./FeedbackIcons-B0mznADm.js";import{b as cn}from"./feedbackSurface-uixTcfkN.js";import{u as pn,c as dn,d as un,e as gn,a as mn,A as Dn,g as fn,B as yn,h as vn,l as hn}from"./floating-Bkdv2t9R.js";import{D as xn,f as Cn,a as c,b as f,e as m,d as bn,c as We,S as Tn}from"./Select-BqJm8bpn.js";import{I as $e}from"./Icon-C-T3v8vn.js";import{T as On}from"./TextInput-C6yR02K9.js";import{F as Bn}from"./ExclamationTriangleIcon-BNEfTPb1.js";import{F as An}from"./CheckIcon-lVjZFY2d.js";const jn={tiny:"sm:max-w-[400px]",regular:"sm:max-w-[600px]",big:"sm:max-w-[800px]",huge:"sm:max-h-[calc(100dvh-2rem)] sm:min-h-[calc(100dvh-2rem)] sm:max-w-[calc(100vw-2rem)] sm:min-w-[calc(100vw-2rem)]"};function l({open:r,onOpenChange:o,size:n="regular",alert:i=!1,dismissible:a=!1,dismissLabel:s="Fermer",processing:h=!1,bordered:C=!1,radius:b="lg",initialFocus:T,children:E,className:O,"aria-label":K}){const x=D.useId(),[H,M]=D.useState(null),[B,Ue]=D.useState(!1),[Ge,Ze]=D.useState(!1),U=D.useRef(null),{refs:Xe,context:Q}=pn({open:r,onOpenChange:o}),Ye=dn(Q,{outsidePress:!i&&!h,escapeKey:!h}),en=un(Q,{role:i?"alertdialog":"dialog"}),{getFloatingProps:nn}=gn([Ye,en]),an=mn(H),G=hn(an),Z=Dn(),X=D.useCallback(()=>o(!1),[o]),Y=D.useCallback(rn=>{U.current=rn},[]),ee=a&&!i&&!h,W=D.useMemo(()=>({titleId:`${x}-title`,descriptionId:`${x}-description`,alert:i,radius:b,showDismiss:ee,dismissLabel:s,close:X,setHasTitle:Ue,setHasDescription:Ze,registerFirstAction:Y}),[x,i,b,ee,s,X,Y]),on=T??(i?U:void 0);return e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:M,hidden:!0,"aria-hidden":"true"}),r?e.jsx(fn,{children:e.jsx(yn,{lockScroll:!0,"data-d-ui-theme":G["data-d-ui-theme"],className:$(G.className,"grid place-items-center overflow-y-auto p-4","bg-black/70",Z?null:"d-ui-dialog-overlay"),children:e.jsx(vn,{context:Q,modal:!0,returnFocus:!0,initialFocus:on,children:e.jsx("div",{ref:Xe.setFloating,...nn(),"aria-label":B?void 0:K,"aria-labelledby":B?W.titleId:void 0,"aria-describedby":Ge?W.descriptionId:void 0,"aria-busy":h||void 0,className:$("bg-bg text-fg relative flex w-full flex-col shadow-[0_8px_32px_rgb(0_0_0/0.2)]","max-h-[calc(100dvh-2rem)] outline-none",Cn[b],C?"border border-border":null,jn[n],Z?null:"d-ui-dialog-panel",O),children:e.jsx(xn,{value:W,processing:h,children:E})})})})}):null]})}l.__docgenInfo={description:"Overlay modal : `Dialog` et, avec `alert`, `alertdialog`.\n\nLe piège de focus, la restitution du focus, le verrouillage du défilement et\nl'inertie du reste de la page viennent de `@floating-ui/react`, déjà utilisé\npar `Popover` et `Menu` — les overlays du design system partagent la même\nmécanique plutôt que chacun la sienne. L'intérieur du panneau\n(`DialogFrame`) est partagé avec `Drawer`.\n\nL'empilement n'est pas supporté : un `Dialog` n'en ouvre pas un second.",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"Largeur maximale. Toutes les tailles retombent pleine largeur sur petit écran.",defaultValue:{value:"'regular'",computed:!1}},alert:{required:!1,tsType:{name:"boolean"},description:"Rôle `alertdialog` : décision destructive ou irréversible.\n\nLe clic sur l'arrière-plan et la croix de fermeture sont retirés — on ne\nsort que par une action explicite. `Escape` reste actif : WCAG 2.1.2\ninterdit de piéger le clavier.",defaultValue:{value:"false",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Croix de fermeture en haut à droite. Ignorée si `alert`.",defaultValue:{value:"false",computed:!1}},dismissLabel:{required:!1,tsType:{name:"string"},description:"Nom accessible de la croix.",defaultValue:{value:"'Fermer'",computed:!1}},processing:{required:!1,tsType:{name:"boolean"},description:`État de traitement : calque semi-opaque et spinner au-dessus du panneau.

Les interactions sont bloquées tant que la soumission est en cours
(LumApps \`isLoading\`).`,defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordure `border-border` autour du panneau. Défaut : sans bordure (LumApps).",defaultValue:{value:"false",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Arrondi des coins du panneau. Défaut : `lg`.",defaultValue:{value:"'lg'",computed:!1}},initialFocus:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLElement | null>"},description:"Élément qui prend le focus à l'ouverture. Par défaut, le premier focusable."},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Requis si aucun `DialogTitle` n'est rendu."}}};const kn={warning:"warning",error:"danger",success:"success"},Sn={warning:"bg-warning/15",error:"bg-danger/15",success:"bg-success/15"};function J({open:r,onOpenChange:o,title:n,children:i,kind:a,size:s="regular",bordered:h,radius:C,confirmLabel:b="OK",onConfirm:T,cancelLabel:E,onCancel:O,initialFocus:K}){const x=()=>o(!1),H=()=>{T==null||T(),x()},M=()=>{O==null||O(),x()},B=a?kn[a]:void 0;return e.jsxs(l,{open:r,onOpenChange:o,alert:!0,size:s,bordered:h,radius:C,initialFocus:K,children:[a?e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:$("flex size-10 shrink-0 items-center justify-center rounded-full",Sn[a],cn(B)),children:e.jsx(ln,{variant:B})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(c,{className:"pe-0",children:n}),e.jsx(f,{children:i})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(c,{children:n}),e.jsx(f,{children:i})]}),e.jsxs(m,{children:[E?e.jsx(t,{variant:"secondary",onClick:M,children:E}):null,e.jsx(t,{variant:"primary",onClick:H,children:b})]})]})}J.__docgenInfo={description:"Dialogue pré-composé LumApps (`AlertDialog`).\n\n- **Confirmation** : `cancelLabel` + `confirmLabel` — on ne sort que par une\n  action explicite (pas de clic extérieur ni de croix).\n- **Alerte** : `kind` (`warning`, `error`, `success`) + une seule action\n  `confirmLabel`.",methods:[],displayName:"AlertDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},kind:{required:!1,tsType:{name:"union",raw:"'warning' | 'error' | 'success'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"Variante visuelle LumApps : icône teintée à gauche du titre.\n\nSans `kind`, le dialogue est une confirmation neutre (deux actions)."},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordure autour du panneau. Défaut : sans bordure (LumApps)."},radius:{required:!1,tsType:{name:"union",raw:"DialogProps['radius']"},description:"Arrondi des coins du panneau. Défaut : `lg`."},confirmLabel:{required:!1,tsType:{name:"string"},description:"Libellé du bouton principal.",defaultValue:{value:"'OK'",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelLabel:{required:!1,tsType:{name:"string"},description:"Si présent, le dialogue devient une confirmation (deux actions)."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const y=`import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogDescription, DialogTitle } from 'd-ui';`,Je=`import { useState } from 'react';
import { AlertDialog, Button } from 'd-ui';`,Ln={title:"Components/Dialog",component:l,argTypes:tn,parameters:{controls:{include:["size","alert","dismissible","processing","bordered","radius"]}}},u={open:!1,onOpenChange:()=>{},children:null};function v({copy:r,label:o,variant:n="secondary",children:i}){const[a,s]=D.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(t,{variant:n,onClick:()=>s(!0),children:o??r.open}),i(a,s)]})}const A={name:"Par défaut",args:u,parameters:sn(y,`const [open, setOpen] = useState(false);

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
);`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,children:(i,a)=>e.jsxs(l,{open:i,onOpenChange:a,children:[e.jsx(c,{children:n.planTitle}),e.jsx(f,{children:n.planBody}),e.jsxs(m,{children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.subscribe})]})]})})}},j={name:"Confirmation",args:u,parameters:g(Je,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    title="Confirmer l'action"
    cancelLabel="Refuser"
    confirmLabel="Accepter"
>
    Cette opération modifiera définitivement vos préférences. Voulez-vous continuer ?
</AlertDialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,label:n.confirmOpen,children:(i,a)=>e.jsx(J,{open:i,onOpenChange:a,title:n.confirmTitle,cancelLabel:n.disagree,confirmLabel:n.agree,children:n.confirmBody})})}};function Nn({copy:r}){const[o,n]=D.useState(null),i=[{kind:"warning",label:r.warning},{kind:"error",label:r.error},{kind:"success",label:r.success}];return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[i.map(({kind:a,label:s})=>e.jsx(t,{variant:"secondary",onClick:()=>n(a),children:s},a)),e.jsx(J,{open:o!==null,onOpenChange:a=>n(a?o:null),kind:o??void 0,title:r.alertTitle,confirmLabel:r.ok,children:r.alertBody})]})}const k={name:"Alerte par variante",args:u,parameters:g(Je,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    kind="warning"
    title="Alerte"
    confirmLabel="OK"
>
    Un événement important requiert votre attention.
</AlertDialog>`),render:(r,{globals:o})=>e.jsx(Nn,{copy:p(d(o.locale))})},S={name:"Pied de page fixe",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,children:(i,a)=>e.jsxs(l,{open:i,onOpenChange:a,children:[e.jsx(c,{children:n.deactivateTitle}),e.jsx(f,{children:n.deactivateBody}),e.jsxs(m,{surface:!0,children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.deactivate})]})]})})}},L={name:"Centré, action unique",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <div className="text-center">
        <Icon as={CheckIcon} size="lg" className="text-success" />
        <DialogTitle className="pe-0 mt-3">Paiement accepté</DialogTitle>
        <DialogDescription>Le reçu vient de partir vers votre adresse de facturation.</DialogDescription>
    </div>
    <DialogActions align="stacked">
        <Button variant="primary" onClick={() => setOpen(false)}>J'ai compris</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,children:(i,a)=>e.jsxs(l,{open:i,onOpenChange:a,size:"tiny",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"bg-success/15 text-success mx-auto flex size-12 items-center justify-center rounded-full",children:e.jsx($e,{as:An,size:"lg"})}),e.jsx(c,{className:"mt-3 pe-0",children:n.paidTitle}),e.jsx(f,{children:n.paidBody})]}),e.jsx(m,{align:"stacked",children:e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.gotIt})})]})})}},N={name:"Centré, actions pleine largeur",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <DialogTitle className="pe-0 text-center">Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription className="text-center">
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="stacked">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,children:(i,a)=>e.jsxs(l,{open:i,onOpenChange:a,size:"tiny",children:[e.jsx(c,{className:"pe-0 text-center",children:n.leaveTitle}),e.jsx(f,{className:"text-center",children:n.leaveBody}),e.jsxs(m,{align:"stacked",children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.leave})]})]})})}},z={name:"Alerte",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
        Cette action est irréversible.
    </DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,variant:"primary",label:n.deactivate,children:(i,a)=>e.jsxs(l,{open:i,onOpenChange:a,alert:!0,children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:"bg-danger/15 text-danger flex size-10 shrink-0 items-center justify-center rounded-full",children:e.jsx($e,{as:Bn,size:"md"})}),e.jsxs("div",{children:[e.jsx(c,{className:"pe-0",children:n.deactivateTitle}),e.jsx(f,{children:n.deactivateBody})]})]}),e.jsxs(m,{children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.deactivate})]})]})})}},q={name:"Avec croix de fermeture",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel="Fermer">
    <DialogTitle>Nouvelle version disponible</DialogTitle>
    <DialogDescription>
        Rechargez la page pour récupérer la dernière version.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Recharger</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,children:(i,a)=>e.jsxs(l,{open:i,onOpenChange:a,dismissible:!0,dismissLabel:n.close,children:[e.jsx(c,{children:n.updateTitle}),e.jsx(f,{children:n.updateBody}),e.jsx(m,{children:e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.reload})})]})})}},w={name:"Alerte, actions à gauche",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription>
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="start">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,variant:"primary",label:n.leave,children:(i,a)=>e.jsxs(l,{open:i,onOpenChange:a,alert:!0,children:[e.jsx(c,{children:n.leaveTitle}),e.jsx(f,{children:n.leaveBody}),e.jsxs(m,{align:"start",children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.leave})]})]})})}},zn=[{size:"tiny",labelKey:"tiny"},{size:"regular",labelKey:"regular"},{size:"big",labelKey:"big"},{size:"huge",labelKey:"huge"}];function qn({copy:r}){const[o,n]=D.useState(null);return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[zn.map(({size:i,labelKey:a})=>e.jsx(t,{variant:"secondary",onClick:()=>n(i),children:r[a]},i)),e.jsxs(l,{open:o!==null,onOpenChange:i=>n(i?o:null),size:o??"regular",children:[e.jsx(c,{children:`${r.sizeTitle} — ${o??""}`}),e.jsx(f,{children:r.sizeBody}),e.jsx(m,{children:e.jsx(t,{variant:"primary",onClick:()=>n(null),children:r.close})})]})]})}const _={name:"Tailles",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>`),render:(r,{globals:o})=>e.jsx(qn,{copy:p(d(o.locale))})};function wn({copy:r}){const[o,n]=D.useState(!1),[i,a]=D.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!0),children:r.processingOpen}),e.jsxs(l,{open:o,onOpenChange:s=>{i||n(s)},processing:i,children:[e.jsx(c,{children:r.processingTitle}),e.jsx(f,{children:r.processingBody}),e.jsxs(m,{children:[e.jsx(t,{variant:"secondary",disabled:i,onClick:()=>n(!1),children:r.cancel}),e.jsx(t,{variant:"primary",loading:i,onClick:()=>{a(!0),window.setTimeout(()=>{a(!1),n(!1)},2e3)},children:r.save})]})]})]})}const P={name:"Traitement en cours",args:u,parameters:g(y,`const [processing, setProcessing] = useState(false);

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
</Dialog>`),render:(r,{globals:o})=>e.jsx(wn,{copy:p(d(o.locale))})},I={name:"Bordure et coins",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen} bordered radius="xl">
    <DialogTitle>Apparence du panneau</DialogTitle>
    <DialogDescription>
        La bordure et l'arrondi peuvent être ajustés selon le contexte visuel.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Continuer</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,label:n.panelChromeOpen,children:(i,a)=>e.jsxs(l,{open:i,onOpenChange:a,bordered:!0,radius:"xl",children:[e.jsx(c,{children:n.panelChromeTitle}),e.jsx(f,{children:n.panelChromeBody}),e.jsxs(m,{surface:!0,children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.continue})]})]})})}},F={name:"Contenu défilant",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen} size="big">
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
</Dialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale)),i=Array.from({length:8},()=>n.scrollParagraph);return e.jsx(v,{copy:n,label:n.scrollOpen,children:(a,s)=>e.jsxs(l,{open:a,onOpenChange:s,size:"big",children:[e.jsx(bn,{children:e.jsx(c,{className:"pe-0",children:n.scrollTitle})}),e.jsx(We,{className:"space-y-4",children:i.map((h,C)=>e.jsx("p",{className:"text-fg-muted text-sm",children:h},C))}),e.jsxs(m,{surface:!0,children:[e.jsx(t,{variant:"secondary",onClick:()=>s(!1),children:n.disagree}),e.jsx(t,{variant:"primary",onClick:()=>s(!1),children:n.agree})]})]})})}},R={name:"Animation",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Ouverture animée</DialogTitle>
    <DialogDescription>
        Le fond apparaît en opacité, le panneau monte de quelques pixels.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Fermer</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,children:(i,a)=>e.jsxs(l,{open:i,onOpenChange:a,children:[e.jsx(c,{children:n.animationTitle}),e.jsx(f,{children:n.animationBody}),e.jsx(m,{children:e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.close})})]})})}},V={name:"Avec formulaire",args:u,parameters:g(y,`<Dialog open={open} onOpenChange={setOpen}>
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
</Dialog>`),render:(r,{globals:o})=>{const n=p(d(o.locale));return e.jsx(v,{copy:n,children:(i,a)=>e.jsxs(l,{open:i,onOpenChange:a,children:[e.jsx(c,{children:n.inviteTitle}),e.jsx(We,{children:e.jsxs("form",{id:"d-ui-invite",className:"grid gap-4",onSubmit:s=>{s.preventDefault(),a(!1)},children:[e.jsx(On,{type:"email",name:"email",label:n.emailLabel,placeholder:n.emailPlaceholder,helper:n.inviteBody,required:!0}),e.jsx(Tn,{name:"role",label:n.roleLabel,defaultValue:"editor",options:[{value:"editor",label:n.roleEditor},{value:"viewer",label:n.roleViewer}]})]})}),e.jsxs(m,{surface:!0,children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",type:"submit",form:"d-ui-invite",children:n.send})]})]})})}};var ne,ae,oe;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ie,re,te;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(te=(re=j.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,le,ce;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,de,ue;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ge,me,De;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(De=(me=L.parameters)==null?void 0:me.docs)==null?void 0:De.source}}};var fe,ye,ve;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var he,xe,Ce;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ce=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var be,Te,Oe;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Oe=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:Oe.source}}};var Be,Ae,je;w.parameters={...w.parameters,docs:{...(Be=w.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(je=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var ke,Se,Le;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Le=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:Le.source}}};var Ne,ze,qe;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(qe=(ze=P.parameters)==null?void 0:ze.docs)==null?void 0:qe.source}}};var we,_e,Pe;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Pe=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:Pe.source}}};var Ie,Fe,Re;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Re=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var Ve,Ee,Ke;R.parameters={...R.parameters,docs:{...(Ve=R.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ke=(Ee=R.parameters)==null?void 0:Ee.docs)==null?void 0:Ke.source}}};var He,Me,Qe;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Qe=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:Qe.source}}};const _n=["Default","ConfirmDialog","AlertKinds","TintedFooter","CenteredSingleAction","CenteredWideButtons","Alert","WithDismissButton","AlertLeftAligned","Sizes","Processing","PanelChrome","Scrollable","Animation","WithForm"],Jn=Object.freeze(Object.defineProperty({__proto__:null,Alert:z,AlertKinds:k,AlertLeftAligned:w,Animation:R,CenteredSingleAction:L,CenteredWideButtons:N,ConfirmDialog:j,Default:A,PanelChrome:I,Processing:P,Scrollable:F,Sizes:_,TintedFooter:S,WithDismissButton:q,WithForm:V,__namedExportsOrder:_n,default:Ln},Symbol.toStringTag,{value:"Module"}));export{k as A,j as C,Jn as D,P,F as S,S as T,q as W,A as a,L as b,N as c,z as d,w as e,V as f,_ as g,I as h,R as i};
