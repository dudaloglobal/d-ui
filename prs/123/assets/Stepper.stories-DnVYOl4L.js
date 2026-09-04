import{j as s,h as i,q as n,d as p}from"./iframe-C18N9SQO.js";import{F as Ze}from"./arg-types-C0FEJ_j7.js";import{c as o}from"./docs-source-C_O40UCi.js";import{b as E,d as I,u as Xe,U as Je,a as Qe}from"./uiScale-DBauGOvS.js";import{B as Ye,a as H}from"./Breadcrumb-CYweBlvS.js";import{B as M}from"./Button-3_Ffbeop.js";import{P as es}from"./Progress-CCMttiKf.js";import{T as V}from"./Text-BNxzpFW1.js";import{T as ss}from"./TextInput-_xk4OweO.js";import{V as U}from"./VisuallyHidden-dexRHqPt.js";import{L as W}from"./Link-Cmne8gHS.js";const as={complete:"Completed",current:"Current step",upcoming:"Upcoming"},rs={circles:2,bullets:1.25,panels:0},ts={xxs:.625,xs:.75,s:.875,m:1,l:1.125,xl:1.3125,xxl:1.5},ls={xxs:.625,xs:.75,s:.8125,m:.875,l:1,xl:1.125,xxl:1.25};function ns(a,r){return a<r?"complete":a===r?"current":"upcoming"}function ps(a,r){return a==="complete"?i(Xe[r],I[r]):a==="current"?i("bg-bg",E[r],I[r]):"bg-bg text-fg-muted border-border"}function G(a,r){return a==="complete"?"text-fg":a==="current"?i(E[r],"font-medium"):"text-fg-muted"}function K({className:a}){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2.25",strokeLinecap:"round",strokeLinejoin:"round",className:i("size-[1.1em]",a),"aria-hidden":"true",focusable:"false",children:s.jsx("path",{d:"M3.5 8.5l3 3 6-6"})})}function c({steps:a,current:r,variant:e="circles",orientation:t="horizontal",size:x="m",color:m="brand",label:He,hideLabels:Ve=!1,bordered:$e=!1,statusLabels:Oe=as,className:qe,style:we,...Fe}){const D=t==="vertical",$=e==="panels",O=Math.min(Math.max(Math.trunc(r),0),Math.max(a.length-1,0)),Me={"--d-ui-step-marker":`${rs[e]*ts[x]}rem`,fontSize:`${ls[x]}rem`};return s.jsx("ol",{...Fe,"aria-label":He,style:{...Me,...we},className:i("flex",D?"flex-col":"flex-row items-start",$?"gap-3":null,qe),children:a.map((b,g)=>{const l=ns(g,O),Ue=g===a.length-1,We=Oe[l],q=e==="bullets"&&Ve,Ge=b.href?s.jsx(W,{href:b.href,children:b.label}):s.jsx("span",{className:G(l,m),children:b.label}),w=s.jsxs(s.Fragment,{children:[q?b.href?null:s.jsx(U,{children:b.label}):Ge,s.jsx(U,{children:` — ${We}`}),b.description&&e!=="bullets"?s.jsx("span",{className:"text-fg-muted mt-0.5 block",children:b.description}):null]});if($)return s.jsxs("li",{"aria-current":l==="current"?"step":void 0,className:i("flex-1 px-4 py-3",$e?"rounded-md border":"border-t-4",l==="upcoming"?"border-border":I[m]),children:[s.jsxs("span",{className:i("flex items-center gap-1.5 text-[0.8em] font-medium uppercase",G(l,m)),children:[l==="complete"?s.jsx(K,{className:"size-[0.95em]"}):null,`${g+1}`.padStart(2,"0")]}),w]},g);const F=e==="bullets"?s.jsx("span",{"data-d-ui-step-marker":"",className:"grid size-[var(--d-ui-step-marker)] shrink-0 place-items-center",children:s.jsx("span",{className:i("block rounded-full border-2",l==="current"?"size-[calc(var(--d-ui-step-marker)/1.5)]":"size-[calc(var(--d-ui-step-marker)/2)]",l==="complete"?i("bg-current",E[m],I[m]):"bg-bg",l==="current"?I[m]:null,l==="upcoming"?"border-border":null)})}):s.jsx("span",{"data-d-ui-step-marker":"",className:i("grid size-[var(--d-ui-step-marker)] shrink-0 place-items-center rounded-full font-medium",l==="current"?"border-[3px]":"border-2",ps(l,m)),children:l==="complete"?s.jsx(K,{}):g+1}),Ke=q&&b.href?s.jsx(W,{href:b.href,className:"inline-flex min-h-6 min-w-6 items-center justify-center no-underline","aria-label":b.label,children:F}):F;return s.jsxs("li",{"aria-current":l==="current"?"step":void 0,className:i("relative flex",D?"flex-row gap-3 pb-6 last:pb-0":"flex-1 flex-col items-start gap-2"),children:[Ue?null:s.jsx("span",{"aria-hidden":"true",className:i(g<O?i("bg-current",E[m]):"bg-border","absolute",D?"top-[var(--d-ui-step-marker)] bottom-0 left-[calc(var(--d-ui-step-marker)/2-1px)] w-0.5":"left-[var(--d-ui-step-marker)] right-0 top-[calc(var(--d-ui-step-marker)/2-1px)] h-0.5")}),Ke,s.jsx("span",{className:D?"min-w-0":"block",children:w})]},g)})})}c.__docgenInfo={description:'Suite d\'étapes ordonnées, avec l\'étape en cours.\n\nRend une `<ol>` : l\'ordre **est** l\'information. L\'étape en cours porte\n`aria-current="step"`, et chaque étape annonce son statut en toutes lettres\nvia un `VisuallyHidden`.\n\nLe statut se voit aussi **sans percevoir les couleurs** (WCAG 1.4.1) : une\nétape terminée porte une coche (`circles`, `panels`) ou une pastille pleine\n(`bullets`), une étape à venir un contour creux.\n\nSi les étapes sont des liens, enveloppez le composant dans un `<nav>` : c\'est\nalors de la navigation, et ce choix appartient à la page.\n\n`orientation="vertical"` avec `variant="circles"` donne la frise verticale —\nla même liste, pas un composant de plus. Pour la forme à chevrons, le design\nsystem a déjà `Breadcrumb` : la dupliquer ici donnerait deux conventions\n(`aria-current="step"` contre `"page"`) pour un seul motif visuel.',methods:[],displayName:"Stepper",props:{variant:{defaultValue:{value:"'circles'",computed:!1},required:!1},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},size:{defaultValue:{value:"'m'",computed:!1},required:!1},color:{defaultValue:{value:"'brand'",computed:!1},required:!1},hideLabels:{defaultValue:{value:"false",computed:!1},required:!1},bordered:{defaultValue:{value:"false",computed:!1},required:!1},statusLabels:{defaultValue:{value:`{
  complete: 'Completed',
  current: 'Current step',
  upcoming: 'Upcoming',
}`,computed:!1},required:!1}}};const u="import { Stepper } from 'd-ui';",os={title:"Components/Stepper",component:c,argTypes:Ze,parameters:{controls:{include:["current","variant","orientation","size","color","hideLabels","bordered"]}}};function z(a){return[{label:a.stepCart,description:a.stepCartHint},{label:a.stepShipping,description:a.stepShippingHint},{label:a.stepPayment,description:a.stepPaymentHint},{label:a.stepReview,description:a.stepReviewHint}]}function d(a){return{complete:a.stepDone,current:a.stepCurrent,upcoming:a.stepUpcoming}}function f(a){return z(a).map(({label:r})=>({label:r}))}const v=`const steps = [
    { label: 'Panier' },
    { label: 'Livraison' },
    { label: 'Paiement' },
    { label: 'Récapitulatif' },
];`,S={name:"Par défaut",args:{steps:[],current:1,label:"Étapes de la commande"},parameters:o(u,'<Stepper steps={steps} current={1} label="Étapes de la commande" />',v),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{...a,steps:f(e),label:e.stepsLabel,statusLabels:d(e)})})}},y={name:"Tailles",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,`<>
    <Stepper steps={steps} current={1} size="xxs" label="Étapes" />
    <Stepper steps={steps} current={1} label="Étapes" />
    <Stepper steps={steps} current={1} size="xxl" label="Étapes" />
</>`,v),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"flex flex-col gap-8 p-6",children:Qe.map(t=>s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx(V,{size:"body-sm",tone:"muted",children:t}),s.jsx(c,{steps:f(e),current:1,size:t,label:`${e.stepsLabel} (${t})`,statusLabels:d(e)})]},t))})}},L={name:"Couleurs",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,`<>
    <Stepper steps={steps} current={1} color="brand" label="Étapes" />
    <Stepper steps={steps} current={1} color="success" label="Étapes" />
    <Stepper steps={steps} current={1} color="danger" label="Étapes" />
</>`,v),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"flex flex-col gap-8 p-6",children:Je.map(t=>s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx(V,{size:"body-sm",tone:"muted",children:t}),s.jsx(c,{steps:f(e),current:1,color:t,label:`${e.stepsLabel} (${t})`,statusLabels:d(e)})]},t))})}},h={name:"Pastilles",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={1} variant="bullets" hideLabels label="Étapes" />',v),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:f(e),current:1,variant:"bullets",hideLabels:!0,label:e.stepsLabel,statusLabels:d(e)})})}},j={name:"Pastilles et texte",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={1} variant="bullets" label="Étapes" />',v),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:f(e),current:1,variant:"bullets",label:e.stepsLabel,statusLabels:d(e)})})}},N={name:"Panneaux",args:{steps:[],current:2,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={2} variant="panels" label="Étapes" />',v),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:z(e),current:2,variant:"panels",label:e.stepsLabel,statusLabels:d(e)})})}},B={name:"Panneaux encadrés",args:{steps:[],current:2,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={2} variant="panels" bordered label="Étapes" />',v),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:z(e),current:2,variant:"panels",bordered:!0,label:e.stepsLabel,statusLabels:d(e)})})}},P={name:"Fil d’Ariane",args:{steps:[],current:1,label:"Étapes"},parameters:o("import { Breadcrumb, BreadcrumbItem } from 'd-ui';",`<Breadcrumb aria-label="Étapes de la commande">
    <BreadcrumbItem href="#panier">Panier</BreadcrumbItem>
    <BreadcrumbItem>Livraison</BreadcrumbItem>
</Breadcrumb>`),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsxs(Ye,{"aria-label":e.stepsLabel,children:[s.jsx(H,{href:"#0",children:e.stepCart}),s.jsx(H,{href:"#1",children:e.stepShipping}),s.jsx(H,{children:e.stepPayment})]})})}},C={name:"Détaillé",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={1} label="Étapes" />',`const steps = [
    { label: 'Panier', description: 'Vérifier les articles' },
    { label: 'Livraison', description: 'Adresse et transporteur' },
    { label: 'Paiement', description: 'Carte ou virement' },
    { label: 'Récapitulatif', description: 'Relire avant de valider' },
];`),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:z(e),current:1,label:e.stepsLabel,statusLabels:d(e)})})}},_={name:"Vertical",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={1} orientation="vertical" variant="bullets" label="Étapes" />',v),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:f(e),current:1,orientation:"vertical",variant:"bullets",label:e.stepsLabel,statusLabels:d(e)})})}},k={name:"Frise verticale",args:{steps:[],current:2,label:"Étapes"},parameters:o(u,'<Stepper steps={steps} current={2} orientation="vertical" label="Étapes" />',v),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsx("div",{className:"p-6",children:s.jsx(c,{steps:z(e),current:2,orientation:"vertical",label:e.stepsLabel,statusLabels:d(e)})})}},T={name:"Étapes cliquables",args:{steps:[],current:2,label:"Étapes"},parameters:o(u,`<nav aria-label="Progression de la commande">
    <Stepper steps={steps} current={2} label="Étapes de la commande" />
</nav>`,`const steps = [
    { label: 'Panier', href: '#panier' },
    { label: 'Livraison', href: '#livraison' },
    { label: 'Paiement' },
    { label: 'Récapitulatif' },
];`),render:(a,{globals:r})=>{const e=n(p(r.locale)),t=f(e).map((x,m)=>m<2?{...x,href:`#${m}`}:x);return s.jsx("nav",{"aria-label":e.stepsLabel,className:"p-6",children:s.jsx(c,{steps:t,current:2,label:e.stepsLabel,statusLabels:d(e)})})}},R={name:"Avec une barre de progression",args:{steps:[],current:1,label:"Étapes"},parameters:o("import { Progress } from 'd-ui';",'<Progress value={50} label="Étapes de la commande" valueText="Étape 2 sur 4" />'),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsxs("div",{className:"mx-auto w-96 p-6",children:[s.jsx(V,{size:"body-sm",tone:"muted",children:e.stepOf}),s.jsx(es,{className:"mt-2",value:50,label:e.stepsLabel,valueText:e.stepOf})]})}},A={name:"Avec formulaire",args:{steps:[],current:1,label:"Étapes"},parameters:o(u,`<>
    <Stepper steps={steps} current={1} variant="bullets" label="Étapes" />
    <form>
        <TextInput label="Adresse de livraison" />
    </form>
</>`,v),render:(a,{globals:r})=>{const e=n(p(r.locale));return s.jsxs("div",{className:"mx-auto w-96 p-6",children:[s.jsx(c,{steps:f(e),current:1,variant:"bullets",label:e.stepsLabel,statusLabels:d(e)}),s.jsxs("form",{className:"mt-6 flex flex-col gap-4",onSubmit:t=>t.preventDefault(),children:[s.jsx(ss,{label:e.addressLabel,placeholder:e.addressPlaceholder}),s.jsxs("div",{className:"flex justify-end gap-3",children:[s.jsx(M,{variant:"secondary",children:e.back}),s.jsx(M,{variant:"primary",type:"submit",children:e.next})]})]})]})}};var Z,X,J;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,le,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var pe,oe,ce;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ce=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ie,ue,de;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,be,ve;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var fe,ge,xe;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Fil d’Ariane',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource("import { Breadcrumb, BreadcrumbItem } from 'd-ui';", \`<Breadcrumb aria-label="Étapes de la commande">
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
}`,...(xe=(ge=P.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Se,ye,Le;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Le=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:Le.source}}};var he,je,Ne;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ne=(je=_.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var Be,Pe,Ce;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ce=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}};var _e,ke,Te;T.parameters={...T.parameters,docs:{...(_e=T.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Te=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var Re,Ae,Ie;R.parameters={...R.parameters,docs:{...(Re=R.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Avec une barre de progression',
  args: {
    steps: [],
    current: 1,
    label: 'Étapes'
  },
  parameters: componentSource("import { Progress } from 'd-ui';", \`<Progress value={50} label="Étapes de la commande" valueText="Étape 2 sur 4" />\`),
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
}`,...(Ie=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var ze,De,Ee;A.parameters={...A.parameters,docs:{...(ze=A.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ee=(De=A.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};const cs=["Default","Sizes","Colors","Bullets","BulletsWithText","Panels","PanelsBordered","BreadcrumbForm","Detailed","Vertical","Timeline","Links","WithProgress","WithForm"],Ls=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbForm:P,Bullets:h,BulletsWithText:j,Colors:L,Default:S,Detailed:C,Links:T,Panels:N,PanelsBordered:B,Sizes:y,Timeline:k,Vertical:_,WithForm:A,WithProgress:R,__namedExportsOrder:cs,default:os},Symbol.toStringTag,{value:"Module"}));export{h as B,S as D,T as L,N as P,Ls as S,k as T,_ as V,R as W,C as a,j as b,B as c,P as d,A as e};
