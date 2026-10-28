import{g as s,d as i,j as n,h as j}from"./iframe-CF-6NDtP.js";import{d as en}from"./arg-types--G9daUKm.js";import{c as l,p as f,a as an}from"./docs-source-C_O40UCi.js";import{B as a}from"./Button-DTD6VUeU.js";import{I}from"./IconButton-DTxJryZw.js";function S(){return n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function tn(){return n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function y({children:e}){return n.jsx("div",{className:"flex flex-wrap items-center gap-4",children:e})}function E({children:e}){return n.jsx("div",{className:"flex w-full items-center gap-4",children:e})}function rn({copy:e,variant:t,size:o}){return n.jsx(a,{variant:t,size:o,icon:n.jsx(tn,{}),iconPosition:"end","aria-haspopup":"true","aria-expanded":!1,children:e.dropdown})}function sn({copy:e,variant:t,size:o}){const r=t==="secondary";return n.jsxs("div",{className:j("inline-flex overflow-hidden rounded-md",r&&"ring-1 ring-inset ring-border"),children:[n.jsx(a,{variant:t,size:o,className:j("!rounded-none",r&&"!border-0"),children:e.split}),n.jsx("span",{className:j("w-px shrink-0 self-stretch",r?"bg-border":"bg-on-brand/30"),"aria-hidden":"true"}),n.jsx(I,{variant:t,size:o,icon:n.jsx(tn,{}),"aria-label":e.moreActions,"aria-haspopup":"true","aria-expanded":!1,className:j("!rounded-none",r&&"!border-0")})]})}function u({copy:e,variant:t,size:o,includeSplit:r=!0}){return n.jsxs(y,{children:[n.jsx(a,{variant:t,size:o,children:e.default}),n.jsx(a,{variant:t,size:o,disabled:!0,children:e.disabled}),n.jsx(a,{variant:t,size:o,loading:!0,children:e.saving}),n.jsx(a,{variant:t,size:o,icon:n.jsx(S,{}),children:e.withIcon}),n.jsx(rn,{copy:e,variant:t,size:o}),r?n.jsx(sn,{copy:e,variant:t,size:o}):null]})}const ln={title:"Components/Button",component:a,argTypes:en,parameters:{controls:{include:["children","variant","size","disabled","loading","loadingIndicator","iconPosition","fullWidth","isSelected","radius"]}}},c={name:"Par défaut",render:(e,{globals:t})=>{const o=s(i(t.locale));return n.jsx(a,{...e,children:e.children??o.continue})}},d={name:"Forte emphase",parameters:l("import { Button, IconButton } from '@dudaloglobal/d-ui';",`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />`,`${f}

${an}`),render:(e,{globals:t})=>n.jsx(u,{copy:s(i(t.locale))})},p={name:"Emphase moyenne",parameters:l("import { Button } from '@dudaloglobal/d-ui';",`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>`,f),render:(e,{globals:t})=>n.jsx(u,{copy:s(i(t.locale)),variant:"secondary"})},m={name:"Bouton bascule",parameters:l("import { Button } from '@dudaloglobal/d-ui';",`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`),render:(e,{globals:t})=>{const o=s(i(t.locale));return n.jsxs(y,{children:[n.jsx(a,{variant:"secondary",children:o.subscribe}),n.jsx(a,{variant:"secondary",isSelected:!0,children:o.subscribed})]})}},g={name:"Faible emphase",parameters:l("import { Button } from '@dudaloglobal/d-ui';",`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>`,f),render:(e,{globals:t})=>n.jsx(u,{copy:s(i(t.locale)),variant:"ghost",includeSplit:!1})},B={name:"Petite taille",parameters:l("import { Button } from '@dudaloglobal/d-ui';",`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>`),render:(e,{globals:t})=>{const o=s(i(t.locale));return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(u,{copy:o,size:"sm"}),n.jsx(u,{copy:o,variant:"secondary",size:"sm"}),n.jsx(u,{copy:o,variant:"ghost",size:"sm",includeSplit:!1})]})}},h={name:"Pleine largeur",parameters:l("import { Button } from '@dudaloglobal/d-ui';",`<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>`),render:(e,{globals:t})=>{const o=s(i(t.locale));return n.jsxs("div",{className:"flex w-full flex-col gap-4",children:[n.jsx(E,{children:n.jsx(a,{fullWidth:!0,children:o.fullWidthSingle})}),n.jsxs(E,{children:[n.jsx(a,{fullWidth:!0,variant:"secondary",children:o.fullWidthTwo}),n.jsx(a,{fullWidth:!0,variant:"secondary",children:o.fullWidthTwo})]}),n.jsxs(E,{children:[n.jsx(a,{fullWidth:!0,children:o.fullWidthSingle}),n.jsx(a,{variant:"ghost",children:o.button})]})]})}},b={name:"Chargement",parameters:l("import { Button, IconButton } from '@dudaloglobal/d-ui';",`<Button loading>Enregistrement</Button>
<Button loading variant="secondary">
  Enregistrement
</Button>
<Button loading variant="ghost">
  Enregistrement
</Button>
<IconButton loading icon={plus} aria-label="Ajouter" />
<Button loading loadingIndicator="bounce">
  Enregistrement
</Button>
<Button loading loadingIndicator="bounce" variant="secondary">
  Enregistrement
</Button>
<Button loading loadingIndicator="bounce" variant="ghost">
  Enregistrement
</Button>
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />`,f),render:(e,{globals:t})=>{const o=s(i(t.locale));return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs(y,{children:[n.jsx(a,{loading:!0,children:o.saving}),n.jsx(a,{loading:!0,variant:"secondary",children:o.saving}),n.jsx(a,{loading:!0,variant:"ghost",children:o.saving}),n.jsx(I,{loading:!0,icon:n.jsx(S,{}),"aria-label":o.add})]}),n.jsxs(y,{children:[n.jsx(a,{loading:!0,loadingIndicator:"bounce",children:o.saving}),n.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"secondary",children:o.saving}),n.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"ghost",children:o.saving}),n.jsx(I,{loading:!0,loadingIndicator:"bounce",icon:n.jsx(S,{}),"aria-label":o.add})]})]})}},v={name:"Icône seule",parameters:l("import { IconButton } from '@dudaloglobal/d-ui';",'<IconButton icon={plus} aria-label="Ajouter" />',f),render:(e,{globals:t})=>{const o=s(i(t.locale));return n.jsx(I,{icon:n.jsx(S,{}),"aria-label":o.add})}},un=["none","sm","md","lg","xl"],x={name:"Arrondi",parameters:l("import { Button } from '@dudaloglobal/d-ui';",'<Button radius="lg">Continuer</Button>'),render:(e,{globals:t})=>{const o=s(i(t.locale));return n.jsxs(y,{children:[un.map(r=>n.jsx(a,{radius:r,variant:"secondary",children:r},r)),n.jsx(a,{radius:"lg",children:o.continue})]})}},cn=["Primary","HighEmphasis","MediumEmphasis","Toggled","LowEmphasis","SmallSize","FullWidth","Loading","IconOnly","Radius"];var w,C,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Par défaut',
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var W,_,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Forte emphase',
  parameters: componentSource("import { Button, IconButton } from '@dudaloglobal/d-ui';", \`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />\`, \`\${plusIconSource}\\n\\n\${chevronIconSource}\`),
  render: (_, {
    globals
  }) => <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} />
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var R,F,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Emphase moyenne',
  parameters: componentSource("import { Button } from '@dudaloglobal/d-ui';", \`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>\`, plusIconSource),
  render: (_, {
    globals
  }) => <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} variant="secondary" />
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var U,D,N;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Bouton bascule',
  parameters: componentSource("import { Button } from '@dudaloglobal/d-ui';", \`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>\`),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <UseCaseRow>
        <Button variant="secondary">{copy.subscribe}</Button>
        <Button variant="secondary" isSelected>
          {copy.subscribed}
        </Button>
      </UseCaseRow>;
  }
}`,...(N=(D=m.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var z,T,k;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Faible emphase',
  parameters: componentSource("import { Button } from '@dudaloglobal/d-ui';", \`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>\`, plusIconSource),
  render: (_, {
    globals
  }) => <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} variant="ghost" includeSplit={false} />
}`,...(k=(T=g.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var M,O,$;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Petite taille',
  parameters: componentSource("import { Button } from '@dudaloglobal/d-ui';", \`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>\`),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-4">
        <EmphasisUseCases copy={copy} size="sm" />
        <EmphasisUseCases copy={copy} variant="secondary" size="sm" />
        <EmphasisUseCases copy={copy} variant="ghost" size="sm" includeSplit={false} />
      </div>;
  }
}`,...($=(O=B.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var H,q,G;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Pleine largeur',
  parameters: componentSource("import { Button } from '@dudaloglobal/d-ui';", \`<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>\`),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <div className="flex w-full flex-col gap-4">
        <FillRow>
          <Button fullWidth>{copy.fullWidthSingle}</Button>
        </FillRow>
        <FillRow>
          <Button fullWidth variant="secondary">
            {copy.fullWidthTwo}
          </Button>
          <Button fullWidth variant="secondary">
            {copy.fullWidthTwo}
          </Button>
        </FillRow>
        <FillRow>
          <Button fullWidth>{copy.fullWidthSingle}</Button>
          <Button variant="ghost">{copy.button}</Button>
        </FillRow>
      </div>;
  }
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Chargement',
  parameters: componentSource("import { Button, IconButton } from '@dudaloglobal/d-ui';", \`<Button loading>Enregistrement</Button>
<Button loading variant="secondary">
  Enregistrement
</Button>
<Button loading variant="ghost">
  Enregistrement
</Button>
<IconButton loading icon={plus} aria-label="Ajouter" />
<Button loading loadingIndicator="bounce">
  Enregistrement
</Button>
<Button loading loadingIndicator="bounce" variant="secondary">
  Enregistrement
</Button>
<Button loading loadingIndicator="bounce" variant="ghost">
  Enregistrement
</Button>
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />\`, plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-4">
        <UseCaseRow>
          <Button loading>{copy.saving}</Button>
          <Button loading variant="secondary">
            {copy.saving}
          </Button>
          <Button loading variant="ghost">
            {copy.saving}
          </Button>
          <IconButton loading icon={<PlusIcon />} aria-label={copy.add} />
        </UseCaseRow>
        <UseCaseRow>
          <Button loading loadingIndicator="bounce">
            {copy.saving}
          </Button>
          <Button loading loadingIndicator="bounce" variant="secondary">
            {copy.saving}
          </Button>
          <Button loading loadingIndicator="bounce" variant="ghost">
            {copy.saving}
          </Button>
          <IconButton loading loadingIndicator="bounce" icon={<PlusIcon />} aria-label={copy.add} />
        </UseCaseRow>
      </div>;
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,X,Y;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Icône seule',
  parameters: componentSource("import { IconButton } from '@dudaloglobal/d-ui';", '<IconButton icon={plus} aria-label="Ajouter" />', plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,nn,on;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Arrondi',
  parameters: componentSource("import { Button } from '@dudaloglobal/d-ui';", \`<Button radius="lg">Continuer</Button>\`),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <UseCaseRow>
        {RADII.map(radius => <Button key={radius} radius={radius} variant="secondary">
            {radius}
          </Button>)}
        <Button radius="lg">{copy.continue}</Button>
      </UseCaseRow>;
  }
}`,...(on=(nn=x.parameters)==null?void 0:nn.docs)==null?void 0:on.source}}};const hn=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:h,HighEmphasis:d,IconOnly:v,Loading:b,LowEmphasis:g,MediumEmphasis:p,Primary:c,Radius:x,SmallSize:B,Toggled:m,__namedExportsOrder:cn,default:ln},Symbol.toStringTag,{value:"Module"}));export{hn as B,h as F,d as H,v as I,g as L,p as M,x as R,B as S,m as T,b as a};
