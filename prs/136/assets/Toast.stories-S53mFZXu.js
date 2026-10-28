import{r as i,j as s,h as _,ak as y,d as T}from"./iframe-BBJWnrUE.js";import{T as ee}from"./arg-types--G9daUKm.js";import{c as x}from"./docs-source-C_O40UCi.js";import{B as u}from"./Button-BaGq3ftS.js";import{d as ne,e as se,F as te,o as ae}from"./floating-C-XdXpba.js";import{N as oe}from"./Notification-BgVgMoKP.js";function re(o){return function(e,r){switch(r.type){case"enqueue":return e.active.length<o?{...e,active:[...e.active,r.item]}:{...e,pending:[...e.pending,r.item]};case"dismiss":{const t=e.active.filter(d=>d.id!==r.id),m=[...e.pending];for(;t.length<o&&m.length>0;){const d=m.shift();d&&t.push(d)}return{active:t,pending:m}}case"dismissAll":return{active:[],pending:[]};default:return e}}}const J=i.createContext(null);let A=0;function ie(o){return o||(A+=1,`d-ui-toast-${A}`)}function C(){const o=i.useContext(J);if(!o)throw new Error("useToast must be used within ToastProvider");return o}function w({children:o,maxVisible:a=3,defaultDuration:e=6e3,defaultDismissible:r=!1,label:t="Notifications",className:m}){const d=i.useRef(null),K=ne(d.current),U=se(),l=i.useRef(new Map),X=i.useMemo(()=>re(a),[a]),[{active:D},L]=i.useReducer(X,{active:[],pending:[]}),j=i.useCallback(n=>{const c=l.current.get(n);c&&(clearTimeout(c),l.current.delete(n))},[]),p=i.useCallback(n=>{j(n),L({type:"dismiss",id:n})},[j]),B=i.useCallback(()=>{l.current.forEach(n=>clearTimeout(n)),l.current.clear(),L({type:"dismissAll"})},[]),S=i.useCallback(n=>{const c=ie(n.id),Z={id:c,variant:n.variant??"info",message:n.message,actionLabel:n.actionLabel,onActionClick:n.onActionClick,duration:n.duration??e,dismissible:n.dismissible??r,dismissLabel:n.dismissLabel??"Dismiss notification"};return L({type:"enqueue",item:Z}),c},[e,r]);i.useEffect(()=>{D.forEach(n=>{if(n.duration<=0||l.current.has(n.id))return;const c=setTimeout(()=>p(n.id),n.duration);l.current.set(n.id,c)})},[D,p]),i.useEffect(()=>()=>{l.current.forEach(n=>clearTimeout(n)),l.current.clear()},[]);const Y=i.useMemo(()=>({toast:S,dismiss:p,dismissAll:B}),[S,p,B]),P=ae(K);return s.jsxs(J.Provider,{value:Y,children:[s.jsx("div",{ref:d,className:_("d-ui-root contents",m),children:o}),s.jsx(te,{children:s.jsx("div",{...P,"aria-label":t,"aria-live":"polite","aria-relevant":"additions",className:_(P.className,"pointer-events-none fixed inset-4 z-[var(--d-ui-z-overlay)] flex flex-col items-end justify-end gap-3",U?"":"motion-safe:[&_[role=alert]]:transition-opacity motion-safe:[&_[role=alert]]:duration-200"),children:D.map(n=>s.jsx("div",{className:"pointer-events-auto w-full max-w-md",children:s.jsx(oe,{variant:n.variant,actionLabel:n.actionLabel,onActionClick:n.actionLabel&&n.onActionClick?()=>{var c;(c=n.onActionClick)==null||c.call(n)}:void 0,dismissible:n.dismissible,dismissLabel:n.dismissLabel,open:!0,onOpenChange:c=>{c||p(n.id)},children:n.message})},n.id))})})]})}w.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},maxVisible:{required:!1,tsType:{name:"number"},description:"Nombre maximal de toasts visibles en même temps.",defaultValue:{value:"3",computed:!1}},defaultDuration:{required:!1,tsType:{name:"number"},description:"Durée par défaut avant auto-dismiss (ms). LumApps : ~6 s.",defaultValue:{value:"6000",computed:!1}},defaultDismissible:{required:!1,tsType:{name:"boolean"},description:"Affiche le bouton fermer par défaut sur chaque toast (`toast({ dismissible })` peut surcharger).",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Nom de la région live. Fallback anglais : `Notifications`.",defaultValue:{value:"'Notifications'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const k="import { Button, ToastProvider, useToast } from '@dudaloglobal/d-ui';",ce={title:"Components/Toast",component:w,argTypes:ee,args:{maxVisible:3,defaultDuration:6e3,defaultDismissible:!1,children:null},decorators:[(o,a)=>s.jsx(w,{maxVisible:a.args.maxVisible,defaultDuration:a.args.defaultDuration,defaultDismissible:a.args.defaultDismissible,label:a.args.label,children:s.jsx("div",{className:"min-h-48",children:s.jsx(o,{})})})]},f={name:"Par défaut",args:{children:null},parameters:x(k,`function SaveButton() {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          variant: 'success',
          message: 'Enregistré.',
          dismissible: true,
          dismissLabel: 'Fermer la notification',
        })
      }
    >
      Enregistrer
    </Button>
  );
}

<ToastProvider>
  <SaveButton />
</ToastProvider>`),render:(o,{globals:a})=>{const e=y(T(a.locale));function r(){const{toast:t}=C();return s.jsx(u,{type:"button",onClick:()=>t({variant:"success",message:e.saved,dismissible:!0,dismissLabel:e.dismiss}),children:e.show})}return s.jsx(r,{})}},g={name:"Variantes",args:{children:null},parameters:x(k,`toast({ variant: 'info', message: '…' });
toast({ variant: 'success', message: '…' });
toast({ variant: 'warning', message: '…' });
toast({ variant: 'danger', message: '…' });`),render:(o,{globals:a})=>{const e=y(T(a.locale));function r(){const{toast:t}=C();return s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsx(u,{type:"button",onClick:()=>t({variant:"info",message:e.published}),children:e.showInfo}),s.jsx(u,{type:"button",onClick:()=>t({variant:"success",message:e.saved}),children:e.showSuccess}),s.jsx(u,{type:"button",onClick:()=>t({variant:"warning",message:e.warning}),children:e.showWarning}),s.jsx(u,{type:"button",onClick:()=>t({variant:"danger",message:e.danger}),children:e.showDanger})]})}return s.jsx(r,{})}},b={name:"Avec action",args:{children:null},parameters:x(k,`toast({
  variant: 'info',
  message: 'Nouvelle version disponible.',
  actionLabel: 'Voir les détails',
  onActionClick: () => {},
});`),render:(o,{globals:a})=>{const e=y(T(a.locale));function r(){const{toast:t}=C();return s.jsx(u,{type:"button",onClick:()=>t({variant:"info",message:e.callback,actionLabel:e.action,onActionClick:()=>{}}),children:e.show})}return s.jsx(r,{})}},v={name:"Fermable",args:{children:null},parameters:x(k,`toast({
  variant: 'info',
  message: 'Les notes seront publiées demain.',
  dismissible: true,
  dismissLabel: 'Fermer la notification',
  duration: 0,
});`),render:(o,{globals:a})=>{const e=y(T(a.locale));function r(){const{toast:t}=C();return i.useEffect(()=>{t({variant:"info",message:e.published,dismissible:!0,dismissLabel:e.dismiss,duration:0})},[t]),s.jsx(u,{type:"button",onClick:()=>t({variant:"info",message:e.published,dismissible:!0,dismissLabel:e.dismiss,duration:0}),children:e.showDismissible})}return s.jsx(r,{})}},h={name:"File d’attente",args:{children:null,maxVisible:2,defaultDuration:0},parameters:x(k,`<ToastProvider maxVisible={2}>
  …
</ToastProvider>`),render:(o,{globals:a})=>{const e=y(T(a.locale));function r(){const{toast:t}=C();return s.jsx(u,{type:"button",onClick:()=>{t({variant:"info",message:e.queueFirst}),t({variant:"info",message:e.queueSecond}),t({variant:"info",message:e.queueThird})},children:e.enqueue})}return s.jsx(r,{})}},le=["Default","Variants","WithAction","Dismissible","Queue"];var E,N,q;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    children: null
  },
  parameters: componentSource(importToast, \`function SaveButton() {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          variant: 'success',
          message: 'Enregistré.',
          dismissible: true,
          dismissLabel: 'Fermer la notification',
        })
      }
    >
      Enregistrer
    </Button>
  );
}

<ToastProvider>
  <SaveButton />
</ToastProvider>\`),
  render: (_, {
    globals
  }) => {
    const copy = toastCopy(docsLocale(globals.locale));
    function Demo() {
      const {
        toast
      } = useToast();
      return <Button type="button" onClick={() => toast({
        variant: 'success',
        message: copy.saved,
        dismissible: true,
        dismissLabel: copy.dismiss
      })}>
          {copy.show}
        </Button>;
    }
    return <Demo />;
  }
}`,...(q=(N=f.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var V,F,R;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Variantes',
  args: {
    children: null
  },
  parameters: componentSource(importToast, \`toast({ variant: 'info', message: '…' });
toast({ variant: 'success', message: '…' });
toast({ variant: 'warning', message: '…' });
toast({ variant: 'danger', message: '…' });\`),
  render: (_, {
    globals
  }) => {
    const copy = toastCopy(docsLocale(globals.locale));
    function Demo() {
      const {
        toast
      } = useToast();
      return <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={() => toast({
          variant: 'info',
          message: copy.published
        })}>
            {copy.showInfo}
          </Button>
          <Button type="button" onClick={() => toast({
          variant: 'success',
          message: copy.saved
        })}>
            {copy.showSuccess}
          </Button>
          <Button type="button" onClick={() => toast({
          variant: 'warning',
          message: copy.warning
        })}>
            {copy.showWarning}
          </Button>
          <Button type="button" onClick={() => toast({
          variant: 'danger',
          message: copy.danger
        })}>
            {copy.showDanger}
          </Button>
        </div>;
    }
    return <Demo />;
  }
}`,...(R=(F=g.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var M,I,Q;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Avec action',
  args: {
    children: null
  },
  parameters: componentSource(importToast, \`toast({
  variant: 'info',
  message: 'Nouvelle version disponible.',
  actionLabel: 'Voir les détails',
  onActionClick: () => {},
});\`),
  render: (_, {
    globals
  }) => {
    const copy = toastCopy(docsLocale(globals.locale));
    function Demo() {
      const {
        toast
      } = useToast();
      return <Button type="button" onClick={() => toast({
        variant: 'info',
        message: copy.callback,
        actionLabel: copy.action,
        onActionClick: () => undefined
      })}>
          {copy.show}
        </Button>;
    }
    return <Demo />;
  }
}`,...(Q=(I=b.parameters)==null?void 0:I.docs)==null?void 0:Q.source}}};var W,O,z;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Fermable',
  args: {
    children: null
  },
  parameters: componentSource(importToast, \`toast({
  variant: 'info',
  message: 'Les notes seront publiées demain.',
  dismissible: true,
  dismissLabel: 'Fermer la notification',
  duration: 0,
});\`),
  render: (_, {
    globals
  }) => {
    const copy = toastCopy(docsLocale(globals.locale));
    function Demo() {
      const {
        toast
      } = useToast();
      useEffect(() => {
        toast({
          variant: 'info',
          message: copy.published,
          dismissible: true,
          dismissLabel: copy.dismiss,
          duration: 0
        });
      }, [toast]);
      return <Button type="button" onClick={() => toast({
        variant: 'info',
        message: copy.published,
        dismissible: true,
        dismissLabel: copy.dismiss,
        duration: 0
      })}>
          {copy.showDismissible}
        </Button>;
    }
    return <Demo />;
  }
}`,...(z=(O=v.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var $,G,H;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'File d’attente',
  args: {
    children: null,
    maxVisible: 2,
    defaultDuration: 0
  },
  parameters: componentSource(importToast, \`<ToastProvider maxVisible={2}>
  …
</ToastProvider>\`),
  render: (_, {
    globals
  }) => {
    const copy = toastCopy(docsLocale(globals.locale));
    function Demo() {
      const {
        toast
      } = useToast();
      return <Button type="button" onClick={() => {
        toast({
          variant: 'info',
          message: copy.queueFirst
        });
        toast({
          variant: 'info',
          message: copy.queueSecond
        });
        toast({
          variant: 'info',
          message: copy.queueThird
        });
      }}>
          {copy.enqueue}
        </Button>;
    }
    return <Demo />;
  }
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const be=Object.freeze(Object.defineProperty({__proto__:null,Default:f,Dismissible:v,Queue:h,Variants:g,WithAction:b,__namedExportsOrder:le,default:ce},Symbol.toStringTag,{value:"Module"}));export{f as D,h as Q,be as T,g as V,b as W,v as a};
