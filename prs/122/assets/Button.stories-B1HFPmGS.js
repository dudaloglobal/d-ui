import{h as s,d as i,j as o,i as j}from"./iframe-PigAhWKn.js";import{e as eo}from"./arg-types-BX1P8EmD.js";import{c as u,p as x,a as ao}from"./docs-source-C_O40UCi.js";import{B as a}from"./Button-CNNdDgDY.js";import{I}from"./IconButton-pTLYCFlb.js";function S(){return o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function no(){return o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function f({children:e}){return o.jsx("div",{className:"flex flex-wrap items-center gap-4",children:e})}function w({children:e}){return o.jsx("div",{className:"flex w-full items-center gap-4",children:e})}function ro({copy:e,variant:n,size:t}){return o.jsx(a,{variant:n,size:t,icon:o.jsx(no,{}),iconPosition:"end","aria-haspopup":"true","aria-expanded":!1,children:e.dropdown})}function so({copy:e,variant:n,size:t}){const r=n==="secondary";return o.jsxs("div",{className:j("inline-flex overflow-hidden rounded-md",r&&"ring-1 ring-inset ring-border"),children:[o.jsx(a,{variant:n,size:t,className:j("!rounded-none",r&&"!border-0"),children:e.split}),o.jsx("span",{className:j("w-px shrink-0 self-stretch",r?"bg-border":"bg-on-brand/30"),"aria-hidden":"true"}),o.jsx(I,{variant:n,size:t,icon:o.jsx(no,{}),"aria-label":e.moreActions,"aria-haspopup":"true","aria-expanded":!1,className:j("!rounded-none",r&&"!border-0")})]})}function c({copy:e,variant:n,size:t,includeSplit:r=!0}){return o.jsxs(f,{children:[o.jsx(a,{variant:n,size:t,children:e.default}),o.jsx(a,{variant:n,size:t,disabled:!0,children:e.disabled}),o.jsx(a,{variant:n,size:t,loading:!0,children:e.saving}),o.jsx(a,{variant:n,size:t,icon:o.jsx(S,{}),children:e.withIcon}),o.jsx(ro,{copy:e,variant:n,size:t}),r?o.jsx(so,{copy:e,variant:n,size:t}):null]})}const io={title:"Components/Button",component:a,argTypes:eo,parameters:{controls:{include:["children","variant","size","disabled","loading","loadingIndicator","iconPosition","fullWidth","isSelected","radius"]}}},l={name:"Par défaut",render:(e,{globals:n})=>{const t=s(i(n.locale));return o.jsx(a,{...e,children:e.children??t.continue})}},d={name:"Forte emphase",parameters:u("import { Button, IconButton } from 'd-ui';",`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />`,`${x}

${ao}`),render:(e,{globals:n})=>o.jsx(c,{copy:s(i(n.locale))})},p={name:"Emphase moyenne",parameters:u("import { Button } from 'd-ui';",`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>`,x),render:(e,{globals:n})=>o.jsx(c,{copy:s(i(n.locale)),variant:"secondary"})},m={name:"Bouton bascule",parameters:u("import { Button } from 'd-ui';",`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`),render:(e,{globals:n})=>{const t=s(i(n.locale));return o.jsxs(f,{children:[o.jsx(a,{variant:"secondary",children:t.subscribe}),o.jsx(a,{variant:"secondary",isSelected:!0,children:t.subscribed})]})}},B={name:"Faible emphase",parameters:u("import { Button } from 'd-ui';",`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>`,x),render:(e,{globals:n})=>o.jsx(c,{copy:s(i(n.locale)),variant:"ghost",includeSplit:!1})},g={name:"Petite taille",parameters:u("import { Button } from 'd-ui';",`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>`),render:(e,{globals:n})=>{const t=s(i(n.locale));return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(c,{copy:t,size:"sm"}),o.jsx(c,{copy:t,variant:"secondary",size:"sm"}),o.jsx(c,{copy:t,variant:"ghost",size:"sm",includeSplit:!1})]})}},h={name:"Pleine largeur",parameters:u("import { Button } from 'd-ui';",`<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>`),render:(e,{globals:n})=>{const t=s(i(n.locale));return o.jsxs("div",{className:"flex w-full flex-col gap-4",children:[o.jsx(w,{children:o.jsx(a,{fullWidth:!0,children:t.fullWidthSingle})}),o.jsxs(w,{children:[o.jsx(a,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo}),o.jsx(a,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo})]}),o.jsxs(w,{children:[o.jsx(a,{fullWidth:!0,children:t.fullWidthSingle}),o.jsx(a,{variant:"ghost",children:t.button})]})]})}},v={name:"Chargement",parameters:u("import { Button, IconButton } from 'd-ui';",`<Button loading>Enregistrement</Button>
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
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />`,x),render:(e,{globals:n})=>{const t=s(i(n.locale));return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs(f,{children:[o.jsx(a,{loading:!0,children:t.saving}),o.jsx(a,{loading:!0,variant:"secondary",children:t.saving}),o.jsx(a,{loading:!0,variant:"ghost",children:t.saving}),o.jsx(I,{loading:!0,icon:o.jsx(S,{}),"aria-label":t.add})]}),o.jsxs(f,{children:[o.jsx(a,{loading:!0,loadingIndicator:"bounce",children:t.saving}),o.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"secondary",children:t.saving}),o.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"ghost",children:t.saving}),o.jsx(I,{loading:!0,loadingIndicator:"bounce",icon:o.jsx(S,{}),"aria-label":t.add})]})]})}},b={name:"Icône seule",parameters:u("import { IconButton } from 'd-ui';",'<IconButton icon={plus} aria-label="Ajouter" />',x),render:(e,{globals:n})=>{const t=s(i(n.locale));return o.jsx(I,{icon:o.jsx(S,{}),"aria-label":t.add})}},uo=["none","sm","md","lg","xl"],y={name:"Arrondi",parameters:u("import { Button } from 'd-ui';",'<Button radius="lg">Continuer</Button>'),render:(e,{globals:n})=>{const t=s(i(n.locale));return o.jsxs(f,{children:[uo.map(r=>o.jsx(a,{radius:r,variant:"secondary",children:r},r)),o.jsx(a,{radius:"lg",children:t.continue})]})}};var C,E,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Par défaut',
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var W,_,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Forte emphase',
  parameters: componentSource("import { Button, IconButton } from 'd-ui';", \`<Button>Par défaut</Button>
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
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var R,L,F;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Emphase moyenne',
  parameters: componentSource("import { Button } from 'd-ui';", \`<Button variant="secondary">Par défaut</Button>
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
}`,...(F=(L=p.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var U,D,N;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Bouton bascule',
  parameters: componentSource("import { Button } from 'd-ui';", \`<Button variant="secondary">S'abonner</Button>
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
}`,...(N=(D=m.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var z,T,k;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Faible emphase',
  parameters: componentSource("import { Button } from 'd-ui';", \`<Button variant="ghost">Par défaut</Button>
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
}`,...(k=(T=B.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var M,O,$;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Petite taille',
  parameters: componentSource("import { Button } from 'd-ui';", \`<Button size="sm">Par défaut</Button>
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
}`,...($=(O=g.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var H,q,G;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Pleine largeur',
  parameters: componentSource("import { Button } from 'd-ui';", \`<Button fullWidth>Bouton pleine largeur</Button>
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
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Chargement',
  parameters: componentSource("import { Button, IconButton } from 'd-ui';", \`<Button loading>Enregistrement</Button>
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
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,X,Y;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Icône seule',
  parameters: componentSource("import { IconButton } from 'd-ui';", '<IconButton icon={plus} aria-label="Ajouter" />', plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,oo,to;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Arrondi',
  parameters: componentSource("import { Button } from 'd-ui';", \`<Button radius="lg">Continuer</Button>\`),
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
}`,...(to=(oo=y.parameters)==null?void 0:oo.docs)==null?void 0:to.source}}};const co=["Primary","HighEmphasis","MediumEmphasis","Toggled","LowEmphasis","SmallSize","FullWidth","Loading","IconOnly","Radius"],ho=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:h,HighEmphasis:d,IconOnly:b,Loading:v,LowEmphasis:B,MediumEmphasis:p,Primary:l,Radius:y,SmallSize:g,Toggled:m,__namedExportsOrder:co,default:io},Symbol.toStringTag,{value:"Module"}));export{ho as B,h as F,d as H,b as I,B as L,p as M,y as R,g as S,m as T,v as a};
