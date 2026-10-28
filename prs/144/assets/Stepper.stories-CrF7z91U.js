import{j as s,h as i,B as l,d as p}from"./iframe-CF-6NDtP.js";import{M as Ze}from"./arg-types--G9daUKm.js";import{c as o}from"./docs-source-C_O40UCi.js";import{b as D,d as A,u as Xe,U as Je,a as Qe}from"./uiScale-DBauGOvS.js";import{B as Ye,a as H}from"./Breadcrumb-Ca7GKraO.js";import{B as M}from"./Button-DTD6VUeU.js";import{P as es}from"./Progress-DBrrB_KX.js";import{T as V}from"./Text-DlQLLHRe.js";import{T as ss}from"./TextInput-BKzao1aS.js";import{V as U}from"./VisuallyHidden-W2p2ijsf.js";import{L as W}from"./Link-yUYP-NEr.js";const as={complete:"Completed",current:"Current step",upcoming:"Upcoming"},rs={circles:2,bullets:1.25,panels:0},ts={xxs:.625,xs:.75,s:.875,m:1,l:1.125,xl:1.3125,xxl:1.5},ns={xxs:.625,xs:.75,s:.8125,m:.875,l:1,xl:1.125,xxl:1.25};function ls(a,r){return a<r?"complete":a===r?"current":"upcoming"}function ps(a,r){return a==="complete"?i(Xe[r],A[r]):a==="current"?i("bg-bg",D[r],A[r]):"bg-bg text-fg-muted border-border"}function G(a,r){return a==="complete"?"text-fg":a==="current"?i(D[r],"font-medium"):"text-fg-muted"}function K({className:a}){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2.25",strokeLinecap:"round",strokeLinejoin:"round",className:i("size-[1.1em]",a),"aria-hidden":"true",focusable:"false",children:s.jsx("path",{d:"M3.5 8.5l3 3 6-6"})})}function c({steps:a,current:r,variant:e="circles",orientation:t="horizontal",size:f="m",color:m="brand",label:He,hideLabels:Ve=!1,bordered:$e=!1,statusLabels:Oe=as,className:we,style:qe,...Fe}){const z=t==="vertical",$=e==="panels",O=Math.min(Math.max(Math.trunc(r),0),Math.max(a.length-1,0)),Me={"--d-ui-step-marker":`${rs[e]*ts[f]}rem`,fontSize:`${ns[f]}rem`};return s.jsx("ol",{...Fe,"aria-label":He,style:{...Me,...qe},className:i("flex",z?"flex-col":"flex-row items-start",$?"gap-3":null,we),children:a.map((b,g)=>{const n=ls(g,O),Ue=g===a.length-1,We=Oe[n],w=e==="bullets"&&Ve,Ge=b.href?s.jsx(W,{href:b.href,children:b.label}):s.jsx("span",{className:G(n,m),children:b.label}),q=s.jsxs(s.Fragment,{children:[w?b.href?null:s.jsx(U,{children:b.label}):Ge,s.jsx(U,{children:` — ${We}`}),b.description&&e!=="bullets"?s.jsx("span",{className:"text-fg-muted mt-0.5 block",children:b.description}):null]});if($)return s.jsxs("li",{"aria-current":n==="current"?"step":void 0,className:i("flex-1 px-4 py-3",$e?"rounded-md border":"border-t-4",n==="upcoming"?"border-border":A[m]),children:[s.jsxs("span",{className:i("flex items-center gap-1.5 text-[0.8em] font-medium uppercase",G(n,m)),children:[n==="complete"?s.jsx(K,{className:"size-[0.95em]"}):null,`${g+1}`.padStart(2,"0")]}),q]},g);const F=e==="bullets"?s.jsx("span",{"data-d-ui-step-marker":"",className:"grid size-[var(--d-ui-step-marker)] shrink-0 place-items-center",children:s.jsx("span",{className:i("block rounded-full border-2",n==="current"?"size-[calc(var(--d-ui-step-marker)/1.5)]":"size-[calc(var(--d-ui-step-marker)/2)]",n==="complete"?i("bg-current",D[m],A[m]):"bg-bg",n==="current"?A[m]:null,n==="upcoming"?"border-border":null)})}):s.jsx("span",{"data-d-ui-step-marker":"",className:i("grid size-[var(--d-ui-step-marker)] shrink-0 place-items-center rounded-full font-medium",n==="current"?"border-[3px]":"border-2",ps(n,m)),children:n==="complete"?s.jsx(K,{}):g+1}),Ke=w&&b.href?s.jsx(W,{href:b.href,className:"inline-flex min-h-6 min-w-6 items-center justify-center no-underline","aria-label":b.label,children:F}):F;return s.jsxs("li",{"aria-current":n==="current"?"step":void 0,className:i("relative flex",z?"flex-row gap-3 pb-6 last:pb-0":"flex-1 flex-col items-start gap-2"),children:[Ue?null:s.jsx("span",{"aria-hidden":"true",className:i(g<O?i("bg-current",D[m]):"bg-border","absolute",z?"top-[var(--d-ui-step-marker)] bottom-0 left-[calc(var(--d-ui-step-marker)/2-1px)] w-0.5":"left-[var(--d-ui-step-marker)] right-0 top-[calc(var(--d-ui-step-marker)/2-1px)] h-0.5")}),Ke,s.jsx("span",{className:z?"min-w-0":"block",children:q})]},g)})})}c.__docgenInfo={description:'Suite d\'étapes ordonnées, avec l\'étape en cours.\n\nRend une `<ol>` : l\'ordre **est** l\'information. L\'étape en cours porte\n`aria-current="step"`, et chaque étape annonce son statut en toutes lettres\nvia un `VisuallyHidden`.\n\nLe statut se voit aussi **sans percevoir les couleurs** (WCAG 1.4.1) : une\nétape terminée porte une coche (`circles`, `panels`) ou une pastille pleine\n(`bullets`), une étape à venir un contour creux.\n\nSi les étapes sont des liens, enveloppez le composant dans un `<nav>` : c\'est\nalors de la navigation, et ce choix appartient à la page.\n\n`orientation="vertical"` avec `variant="circles"` donne la frise verticale —\nla même liste, pas un composant de plus. Pour la forme à chevrons, le design\nsystem a déjà `Breadcrumb` : la dupliquer ici donnerait deux conventions\n(`aria-current="step"` contre `"page"`) pour un seul motif visuel.',methods:[],displayName:"Stepper",props:{variant:{defaultValue:{value:"'circles'",computed:!1},required:!1},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},size:{defaultValue:{value:"'m'",computed:!1},required:!1},color:{defaultValue:{value:"'brand'",computed:!1},required:!1},hideLabels:{defaultValue:{value:"false",computed:!1},required:!1},bordered:{defaultValue:{value:"false",computed:!1},required:!1},statusLabels:{defaultValue:{value:`{
  complete: 'Completed',
  current: 'Current step',
  upcoming: 'Upcoming',
}`,computed:!1},required:!1}}};const u="import { Stepper } from '@dudaloglobal/d-ui';",os={title:"Components/Stepper",component:c,argTypes:Ze,parameters:{controls:{include:["current","variant","orientation","size","color","hideLabels","bordered"]}}};function I(a){return[{label:a.stepCart,description:a.stepCartHint},{label:a.stepShipping,description:a.stepShippingHint},{label:a.stepPayment,description:a.stepPaymentHint},{label:a.stepReview,description:a.stepReviewHint}]}function d(a){return{complete:a.stepDone,current:a.stepCurrent,upcoming:a.stepUpcoming}}function v(a){return I(a).map(({label:r})=>({label:r}))}const x=`const steps = [
    { label: 'Panier' },
    { label: 'Livraison' },
    { label: 'Paiement' },
    { label: 'Récapitulatif' },
];`,S={name:"Par défaut",args:{steps:[],current:1,label:"Étapes de la commande"},parameters:o(u,'<Stepper steps={steps} current={1} label="Étapes de la commande" />',x),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{...a,steps:v(e),label:e.stepsLabel,statusLabels:d(e)})})}},y={name:"Tailles",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,`<>
    <Stepper steps={steps} current={1} size="xxs" label="Étapes" />
    <Stepper steps={steps} current={1} label="Étapes" />
    <Stepper steps={steps} current={1} size="xxl" label="Étapes" />
</>`,x),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"flex flex-col gap-8 p-6",children:Qe.map(t=>s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx(V,{size:"body-sm",tone:"muted",children:t}),s.jsx(c,{steps:v(e),current:1,size:t,label:`${e.stepsLabel} (${t})`,statusLabels:d(e)})]},t))})}},L={name:"Couleurs",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,`<>
    <Stepper steps={steps} current={1} color="brand" label="Étapes" />
    <Stepper steps={steps} current={1} color="success" label="Étapes" />
    <Stepper steps={steps} current={1} color="danger" label="Étapes" />
</>`,x),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"flex flex-col gap-8 p-6",children:Je.map(t=>s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx(V,{size:"body-sm",tone:"muted",children:t}),s.jsx(c,{steps:v(e),current:1,color:t,label:`${e.stepsLabel} (${t})`,statusLabels:d(e)})]},t))})}},h={name:"Pastilles",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={1} variant="bullets" hideLabels label="Étapes" />',x),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:v(e),current:1,variant:"bullets",hideLabels:!0,label:e.stepsLabel,statusLabels:d(e)})})}},C={name:"Pastilles et texte",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={1} variant="bullets" label="Étapes" />',x),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:v(e),current:1,variant:"bullets",label:e.stepsLabel,statusLabels:d(e)})})}},j={name:"Panneaux",args:{steps:[],current:2,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={2} variant="panels" label="Étapes" />',x),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:I(e),current:2,variant:"panels",label:e.stepsLabel,statusLabels:d(e)})})}},N={name:"Panneaux encadrés",args:{steps:[],current:2,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={2} variant="panels" bordered label="Étapes" />',x),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:I(e),current:2,variant:"panels",bordered:!0,label:e.stepsLabel,statusLabels:d(e)})})}},B={name:"Fil d’Ariane",args:{steps:[],current:1,label:"Étapes"},parameters:o("import { Breadcrumb, BreadcrumbItem } from '@dudaloglobal/d-ui';",`<Breadcrumb aria-label="Étapes de la commande">
    <BreadcrumbItem href="#panier">Panier</BreadcrumbItem>
    <BreadcrumbItem>Livraison</BreadcrumbItem>
</Breadcrumb>`),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsxs(Ye,{"aria-label":e.stepsLabel,children:[s.jsx(H,{href:"#0",children:e.stepCart}),s.jsx(H,{href:"#1",children:e.stepShipping}),s.jsx(H,{children:e.stepPayment})]})})}},P={name:"Détaillé",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={1} label="Étapes" />',`const steps = [
    { label: 'Panier', description: 'Vérifier les articles' },
    { label: 'Livraison', description: 'Adresse et transporteur' },
    { label: 'Paiement', description: 'Carte ou virement' },
    { label: 'Récapitulatif', description: 'Relire avant de valider' },
];`),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:I(e),current:1,label:e.stepsLabel,statusLabels:d(e)})})}},_={name:"Vertical",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={1} orientation="vertical" variant="bullets" label="Étapes" />',x),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:v(e),current:1,orientation:"vertical",variant:"bullets",label:e.stepsLabel,statusLabels:d(e)})})}},E={name:"Frise verticale",args:{steps:[],current:2,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={2} orientation="vertical" label="Étapes" />',x),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:I(e),current:2,orientation:"vertical",label:e.stepsLabel,statusLabels:d(e)})})}},k={name:"Étapes cliquables",args:{steps:[],current:2,label:"Étapes"},parameters:o(u,`<nav aria-label="Progression de la commande">
    <Stepper steps={steps} current={2} label="Étapes de la commande" />
</nav>`,`const steps = [
    { label: 'Panier', href: '#panier' },
    { label: 'Livraison', href: '#livraison' },
    { label: 'Paiement' },
    { label: 'Récapitulatif' },
];`),render:(a,{globals:r})=>{const e=l(p(r.locale)),t=v(e).map((f,m)=>m<2?{...f,href:`#${m}`}:f);return s.jsx("nav",{"aria-label":e.stepsLabel,className:"p-6",children:s.jsx(c,{steps:t,current:2,label:e.stepsLabel,statusLabels:d(e)})})}},T={name:"Avec une barre de progression",args:{steps:[],current:1,label:"Étapes"},parameters:o("import { Progress } from '@dudaloglobal/d-ui';",'<Progress value={50} label="Étapes de la commande" valueText="Étape 2 sur 4" />'),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsxs("div",{className:"mx-auto w-96 p-6",children:[s.jsx(V,{size:"body-sm",tone:"muted",children:e.stepOf}),s.jsx(es,{className:"mt-2",value:50,label:e.stepsLabel,valueText:e.stepOf})]})}},R={name:"Avec formulaire",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,`<>
    <Stepper steps={steps} current={1} variant="bullets" label="Étapes" />
    <form>
        <TextInput label="Adresse de livraison" />
    </form>
</>`,x),render:(a,{globals:r})=>{const e=l(p(r.locale));return s.jsxs("div",{className:"mx-auto w-96 p-6",children:[s.jsx(c,{steps:v(e),current:1,variant:"bullets",label:e.stepsLabel,statusLabels:d(e)}),s.jsxs("form",{className:"mt-6 flex flex-col gap-4",onSubmit:t=>t.preventDefault(),children:[s.jsx(ss,{label:e.addressLabel,placeholder:e.addressPlaceholder}),s.jsxs("div",{className:"flex justify-end gap-3",children:[s.jsx(M,{variant:"secondary",children:e.back}),s.jsx(M,{variant:"primary",type:"submit",children:e.next})]})]})]})}},cs=["Default","Sizes","Colors","Bullets","BulletsWithText","Panels","PanelsBordered","BreadcrumbForm","Detailed","Vertical","Timeline","Links","WithProgress","WithForm"];var Z,X,J;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes de la commande'
  },
  parameters: componentSource(importStepper, \`<Stepper steps={steps} current={1} label="Étapes de la commande" />\`, SHARED),
  render: (args, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="p-6">
        <Stepper {...args} steps={plainSteps(copy)} label={copy.stepsLabel} statusLabels={statusLabels(copy)} />
      </div>;
  }
}`,...(J=(X=S.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Y,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Tailles',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<>
    <Stepper steps={steps} current={1} size="xxs" label="Étapes" />
    <Stepper steps={steps} current={1} label="Étapes" />
    <Stepper steps={steps} current={1} size="xxl" label="Étapes" />
</>\`, SHARED),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-8 p-6">
        {UI_SIZES.map(size => <div key={size} className="flex flex-col gap-2">
            <Text size="body-sm" tone="muted">
              {size}
            </Text>
            <Stepper steps={plainSteps(copy)} current={1} size={size} label={\`\${copy.stepsLabel} (\${size})\`} statusLabels={statusLabels(copy)} />
          </div>)}
      </div>;
  }
}`,...(ee=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var se,ae,re;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Couleurs',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<>
    <Stepper steps={steps} current={1} color="brand" label="Étapes" />
    <Stepper steps={steps} current={1} color="success" label="Étapes" />
    <Stepper steps={steps} current={1} color="danger" label="Étapes" />
</>\`, SHARED),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-8 p-6">
        {UI_COLORS.map(color => <div key={color} className="flex flex-col gap-2">
            <Text size="body-sm" tone="muted">
              {color}
            </Text>
            {/*
              La teinte change, les repères de forme restent : coche sur une
              étape terminée, contour creux sur une étape à venir (1.4.1).
             */}
            <Stepper steps={plainSteps(copy)} current={1} color={color} label={\`\${copy.stepsLabel} (\${color})\`} statusLabels={statusLabels(copy)} />
          </div>)}
      </div>;
  }
}`,...(re=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,le;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Pastilles',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<Stepper steps={steps} current={1} variant="bullets" hideLabels label="Étapes" />\`, SHARED),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="p-6">
        <Stepper steps={plainSteps(copy)} current={1} variant="bullets" hideLabels label={copy.stepsLabel} statusLabels={statusLabels(copy)} />
      </div>;
  }
}`,...(le=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var pe,oe,ce;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Pastilles et texte',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<Stepper steps={steps} current={1} variant="bullets" label="Étapes" />\`, SHARED),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="p-6">
        <Stepper steps={plainSteps(copy)} current={1} variant="bullets" label={copy.stepsLabel} statusLabels={statusLabels(copy)} />
      </div>;
  }
}`,...(ce=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ie,ue,de;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Panneaux',
  args: {
    steps: [],
    current: 2,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<Stepper steps={steps} current={2} variant="panels" label="Étapes" />\`, SHARED),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="p-6">
        <Stepper steps={steps(copy)} current={2} variant="panels" label={copy.stepsLabel} statusLabels={statusLabels(copy)} />
      </div>;
  }
}`,...(de=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,be,xe;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Panneaux encadrés',
  args: {
    steps: [],
    current: 2,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<Stepper steps={steps} current={2} variant="panels" bordered label="Étapes" />\`, SHARED),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="p-6">
        <Stepper steps={steps(copy)} current={2} variant="panels" bordered label={copy.stepsLabel} statusLabels={statusLabels(copy)} />
      </div>;
  }
}`,...(xe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var ve,ge,fe;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Fil d’Ariane',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource("import { Breadcrumb, BreadcrumbItem } from '@dudaloglobal/d-ui';", \`<Breadcrumb aria-label="Étapes de la commande">
    <BreadcrumbItem href="#panier">Panier</BreadcrumbItem>
    <BreadcrumbItem>Livraison</BreadcrumbItem>
</Breadcrumb>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    /*
     * La forme à chevrons existe déjà dans le design system : la redoubler
     * dans \`Stepper\` donnerait deux conventions (\`aria-current="step"\` contre
     * \`"page"\`) pour un seul motif visuel.
     */
    return <div className="p-6">
        <Breadcrumb aria-label={copy.stepsLabel}>
          <BreadcrumbItem href="#0">{copy.stepCart}</BreadcrumbItem>
          <BreadcrumbItem href="#1">{copy.stepShipping}</BreadcrumbItem>
          <BreadcrumbItem>{copy.stepPayment}</BreadcrumbItem>
        </Breadcrumb>
      </div>;
  }
}`,...(fe=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Se,ye,Le;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Détaillé',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<Stepper steps={steps} current={1} label="Étapes" />\`, \`const steps = [
    { label: 'Panier', description: 'Vérifier les articles' },
    { label: 'Livraison', description: 'Adresse et transporteur' },
    { label: 'Paiement', description: 'Carte ou virement' },
    { label: 'Récapitulatif', description: 'Relire avant de valider' },
];\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="p-6">
        <Stepper steps={steps(copy)} current={1} label={copy.stepsLabel} statusLabels={statusLabels(copy)} />
      </div>;
  }
}`,...(Le=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:Le.source}}};var he,Ce,je;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Vertical',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<Stepper steps={steps} current={1} orientation="vertical" variant="bullets" label="Étapes" />\`, SHARED),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="p-6">
        <Stepper steps={plainSteps(copy)} current={1} orientation="vertical" variant="bullets" label={copy.stepsLabel} statusLabels={statusLabels(copy)} />
      </div>;
  }
}`,...(je=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Ne,Be,Pe;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Frise verticale',
  args: {
    steps: [],
    current: 2,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<Stepper steps={steps} current={2} orientation="vertical" label="Étapes" />\`, SHARED),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="p-6">
        <Stepper steps={steps(copy)} current={2} orientation="vertical" label={copy.stepsLabel} statusLabels={statusLabels(copy)} />
      </div>;
  }
}`,...(Pe=(Be=E.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var _e,Ee,ke;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Étapes cliquables',
  args: {
    steps: [],
    current: 2,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<nav aria-label="Progression de la commande">
    <Stepper steps={steps} current={2} label="Étapes de la commande" />
</nav>\`, \`const steps = [
    { label: 'Panier', href: '#panier' },
    { label: 'Livraison', href: '#livraison' },
    { label: 'Paiement' },
    { label: 'Récapitulatif' },
];\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    const list = plainSteps(copy).map((step, index) => index < 2 ? {
      ...step,
      href: \`#\${index}\`
    } : step);
    return <nav aria-label={copy.stepsLabel} className="p-6">
        <Stepper steps={list} current={2} label={copy.stepsLabel} statusLabels={statusLabels(copy)} />
      </nav>;
  }
}`,...(ke=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Te,Re,Ae;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'Avec une barre de progression',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource("import { Progress } from '@dudaloglobal/d-ui';", \`<Progress value={50} label="Étapes de la commande" valueText="Étape 2 sur 4" />\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="mx-auto w-96 p-6">
        <Text size="body-sm" tone="muted">
          {copy.stepOf}
        </Text>
        <Progress className="mt-2" value={50} label={copy.stepsLabel} valueText={copy.stepOf} />
      </div>;
  }
}`,...(Ae=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var Ie,ze,De;R.parameters={...R.parameters,docs:{...(Ie=R.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Avec formulaire',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource(importStepper, \`<>
    <Stepper steps={steps} current={1} variant="bullets" label="Étapes" />
    <form>
        <TextInput label="Adresse de livraison" />
    </form>
</>\`, SHARED),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="mx-auto w-96 p-6">
        <Stepper steps={plainSteps(copy)} current={1} variant="bullets" label={copy.stepsLabel} statusLabels={statusLabels(copy)} />
        <form className="mt-6 flex flex-col gap-4" onSubmit={event => event.preventDefault()}>
          <TextInput label={copy.addressLabel} placeholder={copy.addressPlaceholder} />
          <div className="flex justify-end gap-3">
            <Button variant="secondary">{copy.back}</Button>
            <Button variant="primary" type="submit">
              {copy.next}
            </Button>
          </div>
        </form>
      </div>;
  }
}`,...(De=(ze=R.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};const Ls=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbForm:B,Bullets:h,BulletsWithText:C,Colors:L,Default:S,Detailed:P,Links:k,Panels:j,PanelsBordered:N,Sizes:y,Timeline:E,Vertical:_,WithForm:R,WithProgress:T,__namedExportsOrder:cs,default:os},Symbol.toStringTag,{value:"Module"}));export{h as B,S as D,k as L,j as P,Ls as S,E as T,_ as V,T as W,P as a,C as b,N as c,B as d,R as e};
