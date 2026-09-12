import{j as e,h as le,r as D,ah as d,d as g}from"./iframe-DqG8H_yA.js";import{P as Ln}from"./arg-types-sXQN9g_w.js";import{c as f,b as Nn}from"./docs-source-C_O40UCi.js";import{B as s}from"./Button-BvhVaXB-.js";import{D as qn}from"./FeedbackIcons-CiZJZieB.js";import{b as zn}from"./feedbackSurface-uixTcfkN.js";import{D as u,a as p,b as h,c as y,d as wn,e as un}from"./Dialog-tANkoJfW.js";import{I as mn}from"./Icon-CXkko47o.js";import{g as In}from"./floating-BCFaOO06.js";import{T as _n,n as Pn,m as Rn}from"./textControl-nrJbCom6.js";import{N as Vn,S as En,C as Fn,a as Kn}from"./SelectListbox-CmW2x04D.js";import{f as xe,u as $n,c as Hn,n as ee,s as Qn,m as Wn,d as Mn}from"./useSelectOverlay-DLK421jT.js";import{T as Un}from"./TextInput-B3olv-fN.js";import{F as Jn}from"./ExclamationTriangleIcon-Dac9TwAb.js";import{F as Zn}from"./CheckIcon-DHSYDGF6.js";const Gn={warning:"warning",error:"danger",success:"success"},Xn={warning:"bg-warning/15",error:"bg-danger/15",success:"bg-success/15"};function ce({open:t,onOpenChange:o,title:n,children:i,kind:a,size:l="regular",bordered:L,radius:N,confirmLabel:ne="OK",onConfirm:j,cancelLabel:q,onCancel:T,initialFocus:ae}){const G=()=>o(!1),k=()=>{j==null||j(),G()},z=()=>{T==null||T(),G()},X=a?Gn[a]:void 0;return e.jsxs(u,{open:t,onOpenChange:o,alert:!0,size:l,bordered:L,radius:N,initialFocus:ae,children:[a?e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:le("flex size-10 shrink-0 items-center justify-center rounded-full",Xn[a],zn(X)),children:e.jsx(qn,{variant:X})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(p,{className:"pe-0",children:n}),e.jsx(h,{children:i})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(p,{children:n}),e.jsx(h,{children:i})]}),e.jsxs(y,{children:[q?e.jsx(s,{variant:"secondary",onClick:z,children:q}):null,e.jsx(s,{variant:"primary",onClick:k,children:ne})]})]})}ce.__docgenInfo={description:"Dialogue pré-composé LumApps (`AlertDialog`).\n\n- **Confirmation** : `cancelLabel` + `confirmLabel` — on ne sort que par une\n  action explicite (pas de clic extérieur ni de croix).\n- **Alerte** : `kind` (`warning`, `error`, `success`) + une seule action\n  `confirmLabel`.",methods:[],displayName:"AlertDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},kind:{required:!1,tsType:{name:"union",raw:"'warning' | 'error' | 'success'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"Variante visuelle LumApps : icône teintée à gauche du titre.\n\nSans `kind`, le dialogue est une confirmation neutre (deux actions)."},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordure autour du panneau. Défaut : sans bordure (LumApps)."},radius:{required:!1,tsType:{name:"union",raw:"DialogProps['radius']"},description:"Arrondi des coins du panneau. Défaut : `lg`."},confirmLabel:{required:!1,tsType:{name:"string"},description:"Libellé du bouton principal.",defaultValue:{value:"'OK'",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelLabel:{required:!1,tsType:{name:"string"},description:"Si présent, le dialogue devient une confirmation (deux actions)."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function Dn({options:t,value:o,defaultValue:n,onValueChange:i,name:a,form:l,placeholder:L="Choisir",emptyMessage:N="Aucune option",size:ne="md",label:j,helper:q,error:T,invalid:ae=!1,valid:G=!1,disabled:k=!1,required:z,fullWidth:X=!0,className:yn,id:vn,"aria-label":pe,"aria-labelledby":de,"aria-describedby":hn}){const Y=D.useId(),oe=vn??Y,w=`${Y}-list`,ge=`${Y}-helper`,xn=j?`${oe}-label`:void 0,ie=D.useRef(""),te=D.useRef(void 0),[c,b]=D.useState(!1),ue=o!==void 0,[Cn,bn]=D.useState(n),S=ue?o:Cn,re=!!ae||!!T,Tn=re?T:q,O=xe(t),I=O.find(r=>r.value===S),[B,A]=D.useState(-1),me=de??xn,De=r=>{ue||bn(r),i==null||i(r),Mn(()=>b(!1))},{refs:On,floatingStyles:Bn,getReferenceProps:An,getFloatingProps:jn,portal:fe,setReference:kn}=$n(c,b);D.useEffect(()=>()=>window.clearTimeout(te.current),[]),D.useEffect(()=>{if(!c){A(-1);return}const r=xe(t);A(v=>{var ve,he;if(v>=0&&v<r.length&&!((ve=r[v])!=null&&ve.disabled))return v;const se=Hn(r,S);return se>=0&&!((he=r[se])!=null&&he.disabled)?se:ee(r,-1,1)})},[c,S,t]),D.useLayoutEffect(()=>{c&&Qn(w,B)},[c,B,w]);function ye(r){A(v=>ee(O,v,r))}function Sn(r){if(!k){if(r.key==="ArrowDown"){r.preventDefault(),c?ye(1):b(!0);return}if(r.key==="ArrowUp"){r.preventDefault(),c?ye(-1):b(!0);return}if(r.key==="Home"){r.preventDefault(),c||b(!0),A(ee(O,-1,1));return}if(r.key==="End"){r.preventDefault(),c||b(!0),A(ee(O,O.length,-1));return}if(r.key==="Enter"||r.key===" "){if(r.preventDefault(),!c){b(!0);return}const v=O[B];v&&!v.disabled&&De(v.value);return}if(r.key==="Escape"){c&&(r.preventDefault(),b(!1));return}if(r.key.length===1&&!r.metaKey&&!r.ctrlKey&&!r.altKey){r.preventDefault(),c||b(!0),ie.current+=r.key,window.clearTimeout(te.current),te.current=setTimeout(()=>{ie.current=""},500);const v=Wn(O,ie.current,B);v>=0&&A(v)}}}return e.jsxs(_n,{id:oe,label:j,helper:q,error:T,required:z,invalid:re,valid:G,disabled:k,fullWidth:X,size:ne,className:yn,showCount:!1,count:0,countMessage:()=>"",countId:`${Y}-count`,helperId:ge,frameRef:kn,children:[e.jsx(Vn,{name:a,form:l,required:z,disabled:k,value:S,items:t}),e.jsxs("button",{...An({type:"button",role:"combobox",id:oe,disabled:k,"aria-haspopup":"listbox","aria-expanded":c,"aria-controls":w,"aria-autocomplete":"none","aria-activedescendant":c&&B>=0?`${w}-opt-${B}`:void 0,"aria-invalid":re||void 0,"aria-required":z||void 0,"aria-label":pe,"aria-labelledby":de,"aria-describedby":Rn(hn,Tn?ge:void 0),className:le(Pn,"flex w-full cursor-pointer items-center justify-between text-left",!I&&"text-fg/60"),onClick:()=>b(r=>!r),onKeyDown:Sn}),children:[e.jsxs("span",{className:"flex min-w-0 flex-1 items-center gap-2",children:[I?e.jsx(En,{icon:I.icon}):null,e.jsx("span",{className:"min-w-0 flex-1 truncate",children:I?I.label:L})]}),e.jsx("span",{className:le("ml-2 inline-flex shrink-0 text-fg/70",c&&"rotate-180"),children:e.jsx(Fn,{})})]}),c?e.jsx(In,{children:e.jsx("div",{ref:On.setFloating,style:Bn,...jn(),...fe,className:fe.className,children:e.jsx(Kn,{id:w,labelledBy:me,ariaLabel:me?void 0:pe,items:t,activeIndex:B,selectedValues:S?[S]:[],emptyMessage:N,listRef:()=>{},setActiveIndex:A,onSelect:De})})}):null]})}Dn.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},form:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Choisir'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'Aucune option'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const x=`import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogDescription, DialogTitle } from 'd-ui';`,fn=`import { useState } from 'react';
import { AlertDialog, Button } from 'd-ui';`,Yn={title:"Components/Dialog",component:u,argTypes:Ln,parameters:{controls:{include:["size","alert","dismissible","processing","bordered","radius"]}}},m={open:!1,onOpenChange:()=>{},children:null};function C({copy:t,label:o,variant:n="secondary",children:i}){const[a,l]=D.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(s,{variant:n,onClick:()=>l(!0),children:o??t.open}),i(a,l)]})}const _={name:"Par défaut",args:m,parameters:Nn(x,`const [open, setOpen] = useState(false);

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
);`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,children:(i,a)=>e.jsxs(u,{open:i,onOpenChange:a,children:[e.jsx(p,{children:n.planTitle}),e.jsx(h,{children:n.planBody}),e.jsxs(y,{children:[e.jsx(s,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(s,{variant:"primary",onClick:()=>a(!1),children:n.subscribe})]})]})})}},P={name:"Confirmation",args:m,parameters:f(fn,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    title="Confirmer l'action"
    cancelLabel="Refuser"
    confirmLabel="Accepter"
>
    Cette opération modifiera définitivement vos préférences. Voulez-vous continuer ?
</AlertDialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,label:n.confirmOpen,children:(i,a)=>e.jsx(ce,{open:i,onOpenChange:a,title:n.confirmTitle,cancelLabel:n.disagree,confirmLabel:n.agree,children:n.confirmBody})})}};function ea({copy:t}){const[o,n]=D.useState(null),i=[{kind:"warning",label:t.warning},{kind:"error",label:t.error},{kind:"success",label:t.success}];return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[i.map(({kind:a,label:l})=>e.jsx(s,{variant:"secondary",onClick:()=>n(a),children:l},a)),e.jsx(ce,{open:o!==null,onOpenChange:a=>n(a?o:null),kind:o??void 0,title:t.alertTitle,confirmLabel:t.ok,children:t.alertBody})]})}const R={name:"Alerte par variante",args:m,parameters:f(fn,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    kind="warning"
    title="Alerte"
    confirmLabel="OK"
>
    Un événement important requiert votre attention.
</AlertDialog>`),render:(t,{globals:o})=>e.jsx(ea,{copy:d(g(o.locale))})},V={name:"Pied de page fixe",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,children:(i,a)=>e.jsxs(u,{open:i,onOpenChange:a,children:[e.jsx(p,{children:n.deactivateTitle}),e.jsx(h,{children:n.deactivateBody}),e.jsxs(y,{surface:!0,children:[e.jsx(s,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(s,{variant:"primary",onClick:()=>a(!1),children:n.deactivate})]})]})})}},E={name:"Centré, action unique",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <div className="text-center">
        <Icon as={CheckIcon} size="lg" className="text-success" />
        <DialogTitle className="pe-0 mt-3">Paiement accepté</DialogTitle>
        <DialogDescription>Le reçu vient de partir vers votre adresse de facturation.</DialogDescription>
    </div>
    <DialogActions align="stacked">
        <Button variant="primary" onClick={() => setOpen(false)}>J'ai compris</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,children:(i,a)=>e.jsxs(u,{open:i,onOpenChange:a,size:"tiny",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"bg-success/15 text-success mx-auto flex size-12 items-center justify-center rounded-full",children:e.jsx(mn,{as:Zn,size:"lg"})}),e.jsx(p,{className:"mt-3 pe-0",children:n.paidTitle}),e.jsx(h,{children:n.paidBody})]}),e.jsx(y,{align:"stacked",children:e.jsx(s,{variant:"primary",onClick:()=>a(!1),children:n.gotIt})})]})})}},F={name:"Centré, actions pleine largeur",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <DialogTitle className="pe-0 text-center">Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription className="text-center">
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="stacked">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,children:(i,a)=>e.jsxs(u,{open:i,onOpenChange:a,size:"tiny",children:[e.jsx(p,{className:"pe-0 text-center",children:n.leaveTitle}),e.jsx(h,{className:"text-center",children:n.leaveBody}),e.jsxs(y,{align:"stacked",children:[e.jsx(s,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(s,{variant:"primary",onClick:()=>a(!1),children:n.leave})]})]})})}},K={name:"Alerte",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
        Cette action est irréversible.
    </DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,variant:"primary",label:n.deactivate,children:(i,a)=>e.jsxs(u,{open:i,onOpenChange:a,alert:!0,children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:"bg-danger/15 text-danger flex size-10 shrink-0 items-center justify-center rounded-full",children:e.jsx(mn,{as:Jn,size:"md"})}),e.jsxs("div",{children:[e.jsx(p,{className:"pe-0",children:n.deactivateTitle}),e.jsx(h,{children:n.deactivateBody})]})]}),e.jsxs(y,{children:[e.jsx(s,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(s,{variant:"primary",onClick:()=>a(!1),children:n.deactivate})]})]})})}},$={name:"Avec croix de fermeture",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel="Fermer">
    <DialogTitle>Nouvelle version disponible</DialogTitle>
    <DialogDescription>
        Rechargez la page pour récupérer la dernière version.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Recharger</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,children:(i,a)=>e.jsxs(u,{open:i,onOpenChange:a,dismissible:!0,dismissLabel:n.close,children:[e.jsx(p,{children:n.updateTitle}),e.jsx(h,{children:n.updateBody}),e.jsx(y,{children:e.jsx(s,{variant:"primary",onClick:()=>a(!1),children:n.reload})})]})})}},H={name:"Alerte, actions à gauche",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription>
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="start">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,variant:"primary",label:n.leave,children:(i,a)=>e.jsxs(u,{open:i,onOpenChange:a,alert:!0,children:[e.jsx(p,{children:n.leaveTitle}),e.jsx(h,{children:n.leaveBody}),e.jsxs(y,{align:"start",children:[e.jsx(s,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(s,{variant:"primary",onClick:()=>a(!1),children:n.leave})]})]})})}},na=[{size:"tiny",labelKey:"tiny"},{size:"regular",labelKey:"regular"},{size:"big",labelKey:"big"},{size:"huge",labelKey:"huge"}];function aa({copy:t}){const[o,n]=D.useState(null);return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[na.map(({size:i,labelKey:a})=>e.jsx(s,{variant:"secondary",onClick:()=>n(i),children:t[a]},i)),e.jsxs(u,{open:o!==null,onOpenChange:i=>n(i?o:null),size:o??"regular",children:[e.jsx(p,{children:`${t.sizeTitle} — ${o??""}`}),e.jsx(h,{children:t.sizeBody}),e.jsx(y,{children:e.jsx(s,{variant:"primary",onClick:()=>n(null),children:t.close})})]})]})}const Q={name:"Tailles",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>`),render:(t,{globals:o})=>e.jsx(aa,{copy:d(g(o.locale))})};function oa({copy:t}){const[o,n]=D.useState(!1),[i,a]=D.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(s,{variant:"secondary",onClick:()=>n(!0),children:t.processingOpen}),e.jsxs(u,{open:o,onOpenChange:l=>{i||n(l)},processing:i,children:[e.jsx(p,{children:t.processingTitle}),e.jsx(h,{children:t.processingBody}),e.jsxs(y,{children:[e.jsx(s,{variant:"secondary",disabled:i,onClick:()=>n(!1),children:t.cancel}),e.jsx(s,{variant:"primary",loading:i,onClick:()=>{a(!0),window.setTimeout(()=>{a(!1),n(!1)},2e3)},children:t.save})]})]})]})}const W={name:"Traitement en cours",args:m,parameters:f(x,`const [processing, setProcessing] = useState(false);

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
</Dialog>`),render:(t,{globals:o})=>e.jsx(oa,{copy:d(g(o.locale))})},M={name:"Bordure et coins",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen} bordered radius="xl">
    <DialogTitle>Apparence du panneau</DialogTitle>
    <DialogDescription>
        La bordure et l'arrondi peuvent être ajustés selon le contexte visuel.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Continuer</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,label:n.panelChromeOpen,children:(i,a)=>e.jsxs(u,{open:i,onOpenChange:a,bordered:!0,radius:"xl",children:[e.jsx(p,{children:n.panelChromeTitle}),e.jsx(h,{children:n.panelChromeBody}),e.jsxs(y,{surface:!0,children:[e.jsx(s,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(s,{variant:"primary",onClick:()=>a(!1),children:n.continue})]})]})})}},U={name:"Contenu défilant",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen} size="big">
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
</Dialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale)),i=Array.from({length:8},()=>n.scrollParagraph);return e.jsx(C,{copy:n,label:n.scrollOpen,children:(a,l)=>e.jsxs(u,{open:a,onOpenChange:l,size:"big",children:[e.jsx(wn,{children:e.jsx(p,{className:"pe-0",children:n.scrollTitle})}),e.jsx(un,{className:"space-y-4",children:i.map((L,N)=>e.jsx("p",{className:"text-fg-muted text-sm",children:L},N))}),e.jsxs(y,{surface:!0,children:[e.jsx(s,{variant:"secondary",onClick:()=>l(!1),children:n.disagree}),e.jsx(s,{variant:"primary",onClick:()=>l(!1),children:n.agree})]})]})})}},J={name:"Animation",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Ouverture animée</DialogTitle>
    <DialogDescription>
        Le fond apparaît en opacité, le panneau monte de quelques pixels.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Fermer</Button>
    </DialogActions>
</Dialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,children:(i,a)=>e.jsxs(u,{open:i,onOpenChange:a,children:[e.jsx(p,{children:n.animationTitle}),e.jsx(h,{children:n.animationBody}),e.jsx(y,{children:e.jsx(s,{variant:"primary",onClick:()=>a(!1),children:n.close})})]})})}},Z={name:"Avec formulaire",args:m,parameters:f(x,`<Dialog open={open} onOpenChange={setOpen}>
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
</Dialog>`),render:(t,{globals:o})=>{const n=d(g(o.locale));return e.jsx(C,{copy:n,children:(i,a)=>e.jsxs(u,{open:i,onOpenChange:a,children:[e.jsx(p,{children:n.inviteTitle}),e.jsx(un,{children:e.jsxs("form",{id:"d-ui-invite",className:"grid gap-4",onSubmit:l=>{l.preventDefault(),a(!1)},children:[e.jsx(Un,{type:"email",name:"email",label:n.emailLabel,placeholder:n.emailPlaceholder,helper:n.inviteBody,required:!0}),e.jsx(Dn,{name:"role",label:n.roleLabel,defaultValue:"editor",options:[{value:"editor",label:n.roleEditor},{value:"viewer",label:n.roleViewer}]})]})}),e.jsxs(y,{surface:!0,children:[e.jsx(s,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(s,{variant:"primary",type:"submit",form:"d-ui-invite",children:n.send})]})]})})}};var Ce,be,Te;_.parameters={..._.parameters,docs:{...(Ce=_.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Te=(be=_.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var Oe,Be,Ae;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ae=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var je,ke,Se;R.parameters={...R.parameters,docs:{...(je=R.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Se=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Le,Ne,qe;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var ze,we,Ie;E.parameters={...E.parameters,docs:{...(ze=E.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ie=(we=E.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var _e,Pe,Re;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Re=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Ve,Ee,Fe;K.parameters={...K.parameters,docs:{...(Ve=K.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Fe=(Ee=K.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var Ke,$e,He;$.parameters={...$.parameters,docs:{...(Ke=$.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(He=($e=$.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};var Qe,We,Me;H.parameters={...H.parameters,docs:{...(Qe=H.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Me=(We=H.parameters)==null?void 0:We.docs)==null?void 0:Me.source}}};var Ue,Je,Ze;Q.parameters={...Q.parameters,docs:{...(Ue=Q.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ze=(Je=Q.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var Ge,Xe,Ye;W.parameters={...W.parameters,docs:{...(Ge=W.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var en,nn,an;M.parameters={...M.parameters,docs:{...(en=M.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(an=(nn=M.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var on,tn,rn;U.parameters={...U.parameters,docs:{...(on=U.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(rn=(tn=U.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var sn,ln,cn;J.parameters={...J.parameters,docs:{...(sn=J.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(cn=(ln=J.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};var pn,dn,gn;Z.parameters={...Z.parameters,docs:{...(pn=Z.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(gn=(dn=Z.parameters)==null?void 0:dn.docs)==null?void 0:gn.source}}};const ia=["Default","ConfirmDialog","AlertKinds","TintedFooter","CenteredSingleAction","CenteredWideButtons","Alert","WithDismissButton","AlertLeftAligned","Sizes","Processing","PanelChrome","Scrollable","Animation","WithForm"],xa=Object.freeze(Object.defineProperty({__proto__:null,Alert:K,AlertKinds:R,AlertLeftAligned:H,Animation:J,CenteredSingleAction:E,CenteredWideButtons:F,ConfirmDialog:P,Default:_,PanelChrome:M,Processing:W,Scrollable:U,Sizes:Q,TintedFooter:V,WithDismissButton:$,WithForm:Z,__namedExportsOrder:ia,default:Yn},Symbol.toStringTag,{value:"Module"}));export{R as A,P as C,xa as D,W as P,U as S,V as T,$ as W,_ as a,E as b,F as c,K as d,H as e,Z as f,Q as g,M as h,J as i};
