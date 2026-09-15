import{j as e,h as Ve,a9 as l,d as c,r as _}from"./iframe-DuUAVHwV.js";import{F as Ee}from"./arg-types-CGfSQUbN.js";import{c as u,b as Ke}from"./docs-source-C_O40UCi.js";import{B as t}from"./Button-2tN7Wiju.js";import{D as Qe}from"./FeedbackIcons-BKKShpvh.js";import{b as He}from"./feedbackSurface-uixTcfkN.js";import{D as p}from"./Dialog-DLonsSeX.js";import{a as s,b as D,c as m,e as We,f as _e}from"./DialogFrame-D58cmQkv.js";import{I as we}from"./Icon-BHNd7lTx.js";import{S as $e}from"./Select-C27quXGF.js";import{T as Je}from"./TextInput-79fywqhW.js";import{F as Ue}from"./ExclamationTriangleIcon-Cfksm9D3.js";import{F as Me}from"./CheckIcon-DabH3iMz.js";const Ze={warning:"warning",error:"danger",success:"success"},Ge={warning:"bg-warning/15",error:"bg-danger/15",success:"bg-success/15"};function F({open:r,onOpenChange:o,title:n,children:i,kind:a,size:d="regular",bordered:w,radius:P,confirmLabel:qe="OK",onConfirm:q,cancelLabel:R,onCancel:I,initialFocus:Ie}){const V=()=>o(!1),Fe=()=>{q==null||q(),V()},Re=()=>{I==null||I(),V()},E=a?Ze[a]:void 0;return e.jsxs(p,{open:r,onOpenChange:o,alert:!0,size:d,bordered:w,radius:P,initialFocus:Ie,children:[a?e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:Ve("flex size-10 shrink-0 items-center justify-center rounded-full",Ge[a],He(E)),children:e.jsx(Qe,{variant:E})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(s,{className:"pe-0",children:n}),e.jsx(D,{children:i})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(s,{children:n}),e.jsx(D,{children:i})]}),e.jsxs(m,{children:[R?e.jsx(t,{variant:"secondary",onClick:Re,children:R}):null,e.jsx(t,{variant:"primary",onClick:Fe,children:qe})]})]})}F.__docgenInfo={description:"Dialogue pré-composé LumApps (`AlertDialog`).\n\n- **Confirmation** : `cancelLabel` + `confirmLabel` — on ne sort que par une\n  action explicite (pas de clic extérieur ni de croix).\n- **Alerte** : `kind` (`warning`, `error`, `success`) + une seule action\n  `confirmLabel`.",methods:[],displayName:"AlertDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},kind:{required:!1,tsType:{name:"union",raw:"'warning' | 'error' | 'success'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"Variante visuelle LumApps : icône teintée à gauche du titre.\n\nSans `kind`, le dialogue est une confirmation neutre (deux actions)."},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"",defaultValue:{value:"'regular'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordure autour du panneau. Défaut : sans bordure (LumApps)."},radius:{required:!1,tsType:{name:"union",raw:"DialogProps['radius']"},description:"Arrondi des coins du panneau. Défaut : `lg`."},confirmLabel:{required:!1,tsType:{name:"string"},description:"Libellé du bouton principal.",defaultValue:{value:"'OK'",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancelLabel:{required:!1,tsType:{name:"string"},description:"Si présent, le dialogue devient une confirmation (deux actions)."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const y=`import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogDescription, DialogTitle } from 'd-ui';`,Pe=`import { useState } from 'react';
import { AlertDialog, Button } from 'd-ui';`,Xe={title:"Components/Dialog",component:p,argTypes:Ee,parameters:{controls:{include:["size","alert","dismissible","processing","bordered","radius"]}}},g={open:!1,onOpenChange:()=>{},children:null};function f({copy:r,label:o,variant:n="secondary",children:i}){const[a,d]=_.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(t,{variant:n,onClick:()=>d(!0),children:o??r.open}),i(a,d)]})}const v={name:"Par défaut",args:g,parameters:Ke(y,`const [open, setOpen] = useState(false);

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
);`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,children:(i,a)=>e.jsxs(p,{open:i,onOpenChange:a,children:[e.jsx(s,{children:n.planTitle}),e.jsx(D,{children:n.planBody}),e.jsxs(m,{children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.subscribe})]})]})})}},h={name:"Confirmation",args:g,parameters:u(Pe,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    title="Confirmer l'action"
    cancelLabel="Refuser"
    confirmLabel="Accepter"
>
    Cette opération modifiera définitivement vos préférences. Voulez-vous continuer ?
</AlertDialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,label:n.confirmOpen,children:(i,a)=>e.jsx(F,{open:i,onOpenChange:a,title:n.confirmTitle,cancelLabel:n.disagree,confirmLabel:n.agree,children:n.confirmBody})})}};function Ye({copy:r}){const[o,n]=_.useState(null),i=[{kind:"warning",label:r.warning},{kind:"error",label:r.error},{kind:"success",label:r.success}];return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[i.map(({kind:a,label:d})=>e.jsx(t,{variant:"secondary",onClick:()=>n(a),children:d},a)),e.jsx(F,{open:o!==null,onOpenChange:a=>n(a?o:null),kind:o??void 0,title:r.alertTitle,confirmLabel:r.ok,children:r.alertBody})]})}const x={name:"Alerte par variante",args:g,parameters:u(Pe,`<AlertDialog
    open={open}
    onOpenChange={setOpen}
    kind="warning"
    title="Alerte"
    confirmLabel="OK"
>
    Un événement important requiert votre attention.
</AlertDialog>`),render:(r,{globals:o})=>e.jsx(Ye,{copy:l(c(o.locale))})},C={name:"Pied de page fixe",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,children:(i,a)=>e.jsxs(p,{open:i,onOpenChange:a,children:[e.jsx(s,{children:n.deactivateTitle}),e.jsx(D,{children:n.deactivateBody}),e.jsxs(m,{surface:!0,children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.deactivate})]})]})})}},B={name:"Centré, action unique",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <div className="text-center">
        <Icon as={CheckIcon} size="lg" className="text-success" />
        <DialogTitle className="pe-0 mt-3">Paiement accepté</DialogTitle>
        <DialogDescription>Le reçu vient de partir vers votre adresse de facturation.</DialogDescription>
    </div>
    <DialogActions align="stacked">
        <Button variant="primary" onClick={() => setOpen(false)}>J'ai compris</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,children:(i,a)=>e.jsxs(p,{open:i,onOpenChange:a,size:"tiny",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"bg-success/15 text-success mx-auto flex size-12 items-center justify-center rounded-full",children:e.jsx(we,{as:Me,size:"lg"})}),e.jsx(s,{className:"mt-3 pe-0",children:n.paidTitle}),e.jsx(D,{children:n.paidBody})]}),e.jsx(m,{align:"stacked",children:e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.gotIt})})]})})}},O={name:"Centré, actions pleine largeur",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen} size="tiny">
    <DialogTitle className="pe-0 text-center">Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription className="text-center">
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="stacked">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,children:(i,a)=>e.jsxs(p,{open:i,onOpenChange:a,size:"tiny",children:[e.jsx(s,{className:"pe-0 text-center",children:n.leaveTitle}),e.jsx(D,{className:"text-center",children:n.leaveBody}),e.jsxs(m,{align:"stacked",children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.leave})]})]})})}},T={name:"Alerte",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
        Cette action est irréversible.
    </DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,variant:"primary",label:n.deactivate,children:(i,a)=>e.jsxs(p,{open:i,onOpenChange:a,alert:!0,children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:"bg-danger/15 text-danger flex size-10 shrink-0 items-center justify-center rounded-full",children:e.jsx(we,{as:Ue,size:"md"})}),e.jsxs("div",{children:[e.jsx(s,{className:"pe-0",children:n.deactivateTitle}),e.jsx(D,{children:n.deactivateBody})]})]}),e.jsxs(m,{children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.deactivate})]})]})})}},b={name:"Avec croix de fermeture",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel="Fermer">
    <DialogTitle>Nouvelle version disponible</DialogTitle>
    <DialogDescription>
        Rechargez la page pour récupérer la dernière version.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Recharger</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,children:(i,a)=>e.jsxs(p,{open:i,onOpenChange:a,dismissible:!0,dismissLabel:n.close,children:[e.jsx(s,{children:n.updateTitle}),e.jsx(D,{children:n.updateBody}),e.jsx(m,{children:e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.reload})})]})})}},A={name:"Alerte, actions à gauche",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription>
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="start">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,variant:"primary",label:n.leave,children:(i,a)=>e.jsxs(p,{open:i,onOpenChange:a,alert:!0,children:[e.jsx(s,{children:n.leaveTitle}),e.jsx(D,{children:n.leaveBody}),e.jsxs(m,{align:"start",children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.leave})]})]})})}},en=[{size:"tiny",labelKey:"tiny"},{size:"regular",labelKey:"regular"},{size:"big",labelKey:"big"},{size:"huge",labelKey:"huge"}];function nn({copy:r}){const[o,n]=_.useState(null);return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[en.map(({size:i,labelKey:a})=>e.jsx(t,{variant:"secondary",onClick:()=>n(i),children:r[a]},i)),e.jsxs(p,{open:o!==null,onOpenChange:i=>n(i?o:null),size:o??"regular",children:[e.jsx(s,{children:`${r.sizeTitle} — ${o??""}`}),e.jsx(D,{children:r.sizeBody}),e.jsx(m,{children:e.jsx(t,{variant:"primary",onClick:()=>n(null),children:r.close})})]})]})}const j={name:"Tailles",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>`),render:(r,{globals:o})=>e.jsx(nn,{copy:l(c(o.locale))})};function an({copy:r}){const[o,n]=_.useState(!1),[i,a]=_.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!0),children:r.processingOpen}),e.jsxs(p,{open:o,onOpenChange:d=>{i||n(d)},processing:i,children:[e.jsx(s,{children:r.processingTitle}),e.jsx(D,{children:r.processingBody}),e.jsxs(m,{children:[e.jsx(t,{variant:"secondary",disabled:i,onClick:()=>n(!1),children:r.cancel}),e.jsx(t,{variant:"primary",loading:i,onClick:()=>{a(!0),window.setTimeout(()=>{a(!1),n(!1)},2e3)},children:r.save})]})]})]})}const k={name:"Traitement en cours",args:g,parameters:u(y,`const [processing, setProcessing] = useState(false);

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
</Dialog>`),render:(r,{globals:o})=>e.jsx(an,{copy:l(c(o.locale))})},S={name:"Bordure et coins",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen} bordered radius="xl">
    <DialogTitle>Apparence du panneau</DialogTitle>
    <DialogDescription>
        La bordure et l'arrondi peuvent être ajustés selon le contexte visuel.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Continuer</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,label:n.panelChromeOpen,children:(i,a)=>e.jsxs(p,{open:i,onOpenChange:a,bordered:!0,radius:"xl",children:[e.jsx(s,{children:n.panelChromeTitle}),e.jsx(D,{children:n.panelChromeBody}),e.jsxs(m,{surface:!0,children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.continue})]})]})})}},L={name:"Contenu défilant",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen} size="big">
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
</Dialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale)),i=Array.from({length:8},()=>n.scrollParagraph);return e.jsx(f,{copy:n,label:n.scrollOpen,children:(a,d)=>e.jsxs(p,{open:a,onOpenChange:d,size:"big",children:[e.jsx(We,{children:e.jsx(s,{className:"pe-0",children:n.scrollTitle})}),e.jsx(_e,{className:"space-y-4",children:i.map((w,P)=>e.jsx("p",{className:"text-fg-muted text-sm",children:w},P))}),e.jsxs(m,{surface:!0,children:[e.jsx(t,{variant:"secondary",onClick:()=>d(!1),children:n.disagree}),e.jsx(t,{variant:"primary",onClick:()=>d(!1),children:n.agree})]})]})})}},N={name:"Animation",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Ouverture animée</DialogTitle>
    <DialogDescription>
        Le fond apparaît en opacité, le panneau monte de quelques pixels.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Fermer</Button>
    </DialogActions>
</Dialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,children:(i,a)=>e.jsxs(p,{open:i,onOpenChange:a,children:[e.jsx(s,{children:n.animationTitle}),e.jsx(D,{children:n.animationBody}),e.jsx(m,{children:e.jsx(t,{variant:"primary",onClick:()=>a(!1),children:n.close})})]})})}},z={name:"Avec formulaire",args:g,parameters:u(y,`<Dialog open={open} onOpenChange={setOpen}>
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
</Dialog>`),render:(r,{globals:o})=>{const n=l(c(o.locale));return e.jsx(f,{copy:n,children:(i,a)=>e.jsxs(p,{open:i,onOpenChange:a,children:[e.jsx(s,{children:n.inviteTitle}),e.jsx(_e,{children:e.jsxs("form",{id:"d-ui-invite",className:"grid gap-4",onSubmit:d=>{d.preventDefault(),a(!1)},children:[e.jsx(Je,{type:"email",name:"email",label:n.emailLabel,placeholder:n.emailPlaceholder,helper:n.inviteBody,required:!0}),e.jsx($e,{name:"role",label:n.roleLabel,defaultValue:"editor",options:[{value:"editor",label:n.roleEditor},{value:"viewer",label:n.roleViewer}]})]})}),e.jsxs(m,{surface:!0,children:[e.jsx(t,{variant:"secondary",onClick:()=>a(!1),children:n.cancel}),e.jsx(t,{variant:"primary",type:"submit",form:"d-ui-invite",children:n.send})]})]})})}};var K,Q,H;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(H=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:H.source}}};var W,$,J;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=($=h.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var U,M,Z;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=(M=x.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var G,X,Y;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ne,ae;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,ie,re;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var te,se,le;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(se=T.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,pe,ge;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ge=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var de,ue,me;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var De,ye,fe;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(fe=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var ve,he,xe;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(he=k.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Ce,Be,Oe;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Oe=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var Te,be,Ae;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ae=(be=L.parameters)==null?void 0:be.docs)==null?void 0:Ae.source}}};var je,ke,Se;N.parameters={...N.parameters,docs:{...(je=N.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Se=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Le,Ne,ze;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(ze=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source}}};const on=["Default","ConfirmDialog","AlertKinds","TintedFooter","CenteredSingleAction","CenteredWideButtons","Alert","WithDismissButton","AlertLeftAligned","Sizes","Processing","PanelChrome","Scrollable","Animation","WithForm"],vn=Object.freeze(Object.defineProperty({__proto__:null,Alert:T,AlertKinds:x,AlertLeftAligned:A,Animation:N,CenteredSingleAction:B,CenteredWideButtons:O,ConfirmDialog:h,Default:v,PanelChrome:S,Processing:k,Scrollable:L,Sizes:j,TintedFooter:C,WithDismissButton:b,WithForm:z,__namedExportsOrder:on,default:Xe},Symbol.toStringTag,{value:"Module"}));export{x as A,h as C,vn as D,k as P,L as S,C as T,b as W,v as a,B as b,O as c,T as d,A as e,z as f,j as g,S as h,N as i};
