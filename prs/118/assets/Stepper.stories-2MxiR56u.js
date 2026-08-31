import{j as a,g as d,m as l,d as n}from"./iframe-DRIDI3J7.js";import{z as He}from"./arg-types-Di6f0Zb7.js";import{c as p}from"./docs-source-C_O40UCi.js";import{B as Ee,a as R}from"./Breadcrumb-BkA4oNtM.js";import{B as w}from"./Button-lDgXfmFs.js";import{P as ze}from"./Progress-8T6OVvdL.js";import{T as we}from"./Text-CVYueY0E.js";import{T as Fe}from"./TextInput-ConLFbOU.js";import{V as F}from"./VisuallyHidden-CbKEqINP.js";import{L as q}from"./Link-3L-czQxM.js";const qe={complete:"Completed",current:"Current step",upcoming:"Upcoming"},Oe={circles:"2rem",bullets:"1.25rem",panels:"0rem"};function We(s,r){return s<r?"complete":s===r?"current":"upcoming"}const Me={complete:"bg-brand text-on-brand border-brand",current:"bg-bg text-brand border-brand",upcoming:"bg-bg text-fg-muted border-border"},O={complete:"text-fg",current:"text-brand font-medium",upcoming:"text-fg-muted"};function W({className:s}){return a.jsx("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2.25",strokeLinecap:"round",strokeLinejoin:"round",className:d("size-3.5",s),"aria-hidden":"true",focusable:"false",children:a.jsx("path",{d:"M3.5 8.5l3 3 6-6"})})}function o({steps:s,current:r,variant:e="circles",orientation:g="horizontal",label:A,hideLabels:T=!1,bordered:Pe=!1,statusLabels:_e=qe,className:Ce,style:ke,...Ae}){const I=g==="vertical",D=e==="panels",V=Math.min(Math.max(Math.trunc(r),0),Math.max(s.length-1,0)),Te={"--d-ui-step-marker":Oe[e]};return a.jsx("ol",{...Ae,"aria-label":A,style:{...Te,...ke},className:d("flex",I?"flex-col":"flex-row items-start",D?"gap-3":null,Ce),children:s.map((c,b)=>{const t=We(b,V),Ie=b===s.length-1,Re=_e[t],H=e==="bullets"&&T,De=c.href?a.jsx(q,{href:c.href,className:"text-sm",children:c.label}):a.jsx("span",{className:d("text-sm",O[t]),children:c.label}),E=a.jsxs(a.Fragment,{children:[H?c.href?null:a.jsx(F,{children:c.label}):De,a.jsx(F,{children:` — ${Re}`}),c.description&&e!=="bullets"?a.jsx("span",{className:"text-fg-muted mt-0.5 block text-sm",children:c.description}):null]});if(D)return a.jsxs("li",{"aria-current":t==="current"?"step":void 0,className:d("flex-1 px-4 py-3",Pe?"rounded-md border":"border-t-4",t==="upcoming"?"border-border":"border-brand"),children:[a.jsxs("span",{className:d("flex items-center gap-1.5 text-xs font-medium uppercase",O[t]),children:[t==="complete"?a.jsx(W,{className:"size-3"}):null,`${b+1}`.padStart(2,"0")]}),E]},b);const z=e==="bullets"?a.jsx("span",{"data-d-ui-step-marker":"",className:"grid size-[var(--d-ui-step-marker)] shrink-0 place-items-center",children:a.jsx("span",{className:d("block size-2.5 rounded-full border-2",t==="complete"?"bg-brand border-brand":"bg-bg",t==="current"?"border-brand":null,t==="upcoming"?"border-border":null)})}):a.jsx("span",{"data-d-ui-step-marker":"",className:d("grid size-[var(--d-ui-step-marker)] shrink-0 place-items-center rounded-full border-2 text-sm font-medium",Me[t]),children:t==="complete"?a.jsx(W,{}):b+1}),Ve=H&&c.href?a.jsx(q,{href:c.href,className:"inline-flex no-underline","aria-label":c.label,children:z}):z;return a.jsxs("li",{"aria-current":t==="current"?"step":void 0,className:d("relative flex",I?"flex-row gap-3 pb-6 last:pb-0":"flex-1 flex-col items-start gap-2"),children:[Ie?null:a.jsx("span",{"aria-hidden":"true",className:d(b<V?"bg-brand":"bg-border","absolute",I?"top-[var(--d-ui-step-marker)] bottom-0 left-[calc(var(--d-ui-step-marker)/2-1px)] w-0.5":"left-[var(--d-ui-step-marker)] right-0 top-[calc(var(--d-ui-step-marker)/2-1px)] h-0.5")}),Ve,a.jsx("span",{className:I?"min-w-0":"block",children:E})]},b)})})}o.__docgenInfo={description:'Suite d\'étapes ordonnées, avec l\'étape en cours.\n\nRend une `<ol>` : l\'ordre **est** l\'information. L\'étape en cours porte\n`aria-current="step"`, et chaque étape annonce son statut en toutes lettres\nvia un `VisuallyHidden`.\n\nLe statut se voit aussi **sans percevoir les couleurs** (WCAG 1.4.1) : une\nétape terminée porte une coche (`circles`, `panels`) ou une pastille pleine\n(`bullets`), une étape à venir un contour creux.\n\nSi les étapes sont des liens, enveloppez le composant dans un `<nav>` : c\'est\nalors de la navigation, et ce choix appartient à la page.\n\n`orientation="vertical"` avec `variant="circles"` donne la frise verticale —\nla même liste, pas un composant de plus. Pour la forme à chevrons, le design\nsystem a déjà `Breadcrumb` : la dupliquer ici donnerait deux conventions\n(`aria-current="step"` contre `"page"`) pour un seul motif visuel.',methods:[],displayName:"Stepper",props:{variant:{defaultValue:{value:"'circles'",computed:!1},required:!1},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},hideLabels:{defaultValue:{value:"false",computed:!1},required:!1},bordered:{defaultValue:{value:"false",computed:!1},required:!1},statusLabels:{defaultValue:{value:`{
  complete: 'Completed',
  current: 'Current step',
  upcoming: 'Upcoming',
}`,computed:!1},required:!1}}};const i="import { Stepper } from 'd-ui';",Ue={title:"Components/Stepper",component:o,argTypes:He,parameters:{controls:{include:["current","variant","orientation","hideLabels","bordered"]}}};function k(s){return[{label:s.stepCart,description:s.stepCartHint},{label:s.stepShipping,description:s.stepShippingHint},{label:s.stepPayment,description:s.stepPaymentHint},{label:s.stepReview,description:s.stepReviewHint}]}function u(s){return{complete:s.stepDone,current:s.stepCurrent,upcoming:s.stepUpcoming}}function v(s){return k(s).map(({label:r})=>({label:r}))}const m=`const steps = [
    { label: 'Panier' },
    { label: 'Livraison' },
    { label: 'Paiement' },
    { label: 'Récapitulatif' },
];`,f={name:"Par défaut",args:{steps:[],current:1,label:"Étapes de la commande"},parameters:p(i,'<Stepper steps={steps} current={1} label="Étapes de la commande" />',m),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsx("div",{className:"p-6",children:a.jsx(o,{...s,steps:v(e),label:e.stepsLabel,statusLabels:u(e)})})}},x={name:"Pastilles",args:{steps:[],current:1,label:"Étapes"},parameters:p(i,'<Stepper steps={steps} current={1} variant="bullets" hideLabels label="Étapes" />',m),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsx("div",{className:"p-6",children:a.jsx(o,{steps:v(e),current:1,variant:"bullets",hideLabels:!0,label:e.stepsLabel,statusLabels:u(e)})})}},S={name:"Pastilles et texte",args:{steps:[],current:1,label:"Étapes"},parameters:p(i,'<Stepper steps={steps} current={1} variant="bullets" label="Étapes" />',m),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsx("div",{className:"p-6",children:a.jsx(o,{steps:v(e),current:1,variant:"bullets",label:e.stepsLabel,statusLabels:u(e)})})}},h={name:"Panneaux",args:{steps:[],current:2,label:"Étapes"},parameters:p(i,'<Stepper steps={steps} current={2} variant="panels" label="Étapes" />',m),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsx("div",{className:"p-6",children:a.jsx(o,{steps:k(e),current:2,variant:"panels",label:e.stepsLabel,statusLabels:u(e)})})}},L={name:"Panneaux encadrés",args:{steps:[],current:2,label:"Étapes"},parameters:p(i,'<Stepper steps={steps} current={2} variant="panels" bordered label="Étapes" />',m),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsx("div",{className:"p-6",children:a.jsx(o,{steps:k(e),current:2,variant:"panels",bordered:!0,label:e.stepsLabel,statusLabels:u(e)})})}},y={name:"Fil d’Ariane",args:{steps:[],current:1,label:"Étapes"},parameters:p("import { Breadcrumb, BreadcrumbItem } from 'd-ui';",`<Breadcrumb aria-label="Étapes de la commande">
    <BreadcrumbItem href="#panier">Panier</BreadcrumbItem>
    <BreadcrumbItem>Livraison</BreadcrumbItem>
</Breadcrumb>`),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsx("div",{className:"p-6",children:a.jsxs(Ee,{"aria-label":e.stepsLabel,children:[a.jsx(R,{href:"#0",children:e.stepCart}),a.jsx(R,{href:"#1",children:e.stepShipping}),a.jsx(R,{children:e.stepPayment})]})})}},j={name:"Détaillé",args:{steps:[],current:1,label:"Étapes"},parameters:p(i,'<Stepper steps={steps} current={1} label="Étapes" />',`const steps = [
    { label: 'Panier', description: 'Vérifier les articles' },
    { label: 'Livraison', description: 'Adresse et transporteur' },
    { label: 'Paiement', description: 'Carte ou virement' },
    { label: 'Récapitulatif', description: 'Relire avant de valider' },
];`),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsx("div",{className:"p-6",children:a.jsx(o,{steps:k(e),current:1,label:e.stepsLabel,statusLabels:u(e)})})}},N={name:"Vertical",args:{steps:[],current:1,label:"Étapes"},parameters:p(i,'<Stepper steps={steps} current={1} orientation="vertical" variant="bullets" label="Étapes" />',m),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsx("div",{className:"p-6",children:a.jsx(o,{steps:v(e),current:1,orientation:"vertical",variant:"bullets",label:e.stepsLabel,statusLabels:u(e)})})}},B={name:"Frise verticale",args:{steps:[],current:2,label:"Étapes"},parameters:p(i,'<Stepper steps={steps} current={2} orientation="vertical" label="Étapes" />',m),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsx("div",{className:"p-6",children:a.jsx(o,{steps:k(e),current:2,orientation:"vertical",label:e.stepsLabel,statusLabels:u(e)})})}},P={name:"Étapes cliquables",args:{steps:[],current:2,label:"Étapes"},parameters:p(i,`<nav aria-label="Progression de la commande">
    <Stepper steps={steps} current={2} label="Étapes de la commande" />
</nav>`,`const steps = [
    { label: 'Panier', href: '#panier' },
    { label: 'Livraison', href: '#livraison' },
    { label: 'Paiement' },
    { label: 'Récapitulatif' },
];`),render:(s,{globals:r})=>{const e=l(n(r.locale)),g=v(e).map((A,T)=>T<2?{...A,href:`#${T}`}:A);return a.jsx("nav",{"aria-label":e.stepsLabel,className:"p-6",children:a.jsx(o,{steps:g,current:2,label:e.stepsLabel,statusLabels:u(e)})})}},_={name:"Avec une barre de progression",args:{steps:[],current:1,label:"Étapes"},parameters:p("import { Progress } from 'd-ui';",'<Progress value={50} label="Étapes de la commande" valueText="Étape 2 sur 4" />'),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsxs("div",{className:"mx-auto w-96 p-6",children:[a.jsx(we,{size:"body-sm",tone:"muted",children:e.stepOf}),a.jsx(ze,{className:"mt-2",value:50,label:e.stepsLabel,valueText:e.stepOf})]})}},C={name:"Avec formulaire",args:{steps:[],current:1,label:"Étapes"},parameters:p(i,`<>
    <Stepper steps={steps} current={1} variant="bullets" label="Étapes" />
    <form>
        <TextInput label="Adresse de livraison" />
    </form>
</>`,m),render:(s,{globals:r})=>{const e=l(n(r.locale));return a.jsxs("div",{className:"mx-auto w-96 p-6",children:[a.jsx(o,{steps:v(e),current:1,variant:"bullets",label:e.stepsLabel,statusLabels:u(e)}),a.jsxs("form",{className:"mt-6 flex flex-col gap-4",onSubmit:g=>g.preventDefault(),children:[a.jsx(Fe,{label:e.addressLabel,placeholder:e.addressPlaceholder}),a.jsxs("div",{className:"flex justify-end gap-3",children:[a.jsx(w,{variant:"secondary",children:e.back}),a.jsx(w,{variant:"primary",type:"submit",children:e.next})]})]})]})}};var M,U,$;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(U=f.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var G,K,X;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(K=x.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var J,Q,Y;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ae;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,re,te;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(te=(re=L.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,ne,pe;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:pe.source}}};var oe,ce,ie;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var ue,de,me;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=N.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var be,ve,ge;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var fe,xe,Se;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Se=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var he,Le,ye;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:ye.source}}};var je,Ne,Be;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Be=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Be.source}}};const $e=["Default","Bullets","BulletsWithText","Panels","PanelsBordered","BreadcrumbForm","Detailed","Vertical","Timeline","Links","WithProgress","WithForm"],ra=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbForm:y,Bullets:x,BulletsWithText:S,Default:f,Detailed:j,Links:P,Panels:h,PanelsBordered:L,Timeline:B,Vertical:N,WithForm:C,WithProgress:_,__namedExportsOrder:$e,default:Ue},Symbol.toStringTag,{value:"Module"}));export{x as B,f as D,P as L,h as P,ra as S,B as T,N as V,_ as W,j as a,S as b,L as c,y as d,C as e};
