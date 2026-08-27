import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{b as Z,c as i,p as f,a as oo}from"./docs-source-CVD5Hzvy.js";import{b as r,d as s,c as y}from"./cx-DCCm14g-.js";import{B as a}from"./Button-D_irj1Bu.js";import{I as x}from"./IconButton-DRiq0ei9.js";function j(){return o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function Y(){return o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function I({children:e}){return o.jsx("div",{className:"flex flex-wrap items-center gap-4",children:e})}function S({children:e}){return o.jsx("div",{className:"flex w-full items-center gap-4",children:e})}function to({copy:e,variant:n,size:t}){return o.jsx(a,{variant:n,size:t,icon:o.jsx(Y,{}),iconPosition:"end","aria-haspopup":"true","aria-expanded":!1,children:e.dropdown})}function no({copy:e,variant:n,size:t}){const u=n==="secondary";return o.jsxs("div",{className:y("inline-flex overflow-hidden rounded-md",u&&"ring-1 ring-inset ring-border"),children:[o.jsx(a,{variant:n,size:t,className:y("!rounded-none",u&&"!border-0"),children:e.split}),o.jsx("span",{className:y("w-px shrink-0 self-stretch",u?"bg-border":"bg-on-brand/30"),"aria-hidden":"true"}),o.jsx(x,{variant:n,size:t,icon:o.jsx(Y,{}),"aria-label":e.moreActions,"aria-haspopup":"true","aria-expanded":!1,className:y("!rounded-none",u&&"!border-0")})]})}function c({copy:e,variant:n,size:t,includeSplit:u=!0}){return o.jsxs(I,{children:[o.jsx(a,{variant:n,size:t,children:e.default}),o.jsx(a,{variant:n,size:t,disabled:!0,children:e.disabled}),o.jsx(a,{variant:n,size:t,loading:!0,children:e.saving}),o.jsx(a,{variant:n,size:t,icon:o.jsx(j,{}),children:e.withIcon}),o.jsx(to,{copy:e,variant:n,size:t}),u?o.jsx(no,{copy:e,variant:n,size:t}):null]})}const eo={title:"Components/Button",component:a,argTypes:Z,parameters:{controls:{include:["children","variant","size","disabled","loading","loadingIndicator","iconPosition","fullWidth","isSelected"]}}},l={name:"Par défaut",render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsx(a,{...e,children:e.children??t.continue})}},d={name:"Forte emphase",parameters:i("import { Button, IconButton } from 'd-ui';",`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />`,`${f}

${oo}`),render:(e,{globals:n})=>o.jsx(c,{copy:r(s(n.locale))})},p={name:"Emphase moyenne",parameters:i("import { Button } from 'd-ui';",`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>`,f),render:(e,{globals:n})=>o.jsx(c,{copy:r(s(n.locale)),variant:"secondary"})},m={name:"Bouton bascule",parameters:i("import { Button } from 'd-ui';",`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs(I,{children:[o.jsx(a,{variant:"secondary",children:t.subscribe}),o.jsx(a,{variant:"secondary",isSelected:!0,children:t.subscribed})]})}},B={name:"Faible emphase",parameters:i("import { Button } from 'd-ui';",`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>`,f),render:(e,{globals:n})=>o.jsx(c,{copy:r(s(n.locale)),variant:"ghost",includeSplit:!1})},g={name:"Petite taille",parameters:i("import { Button } from 'd-ui';",`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>`),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(c,{copy:t,size:"sm"}),o.jsx(c,{copy:t,variant:"secondary",size:"sm"}),o.jsx(c,{copy:t,variant:"ghost",size:"sm",includeSplit:!1})]})}},h={name:"Pleine largeur",parameters:i("import { Button } from 'd-ui';",`<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>`),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs("div",{className:"flex w-full flex-col gap-4",children:[o.jsx(S,{children:o.jsx(a,{fullWidth:!0,children:t.fullWidthSingle})}),o.jsxs(S,{children:[o.jsx(a,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo}),o.jsx(a,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo})]}),o.jsxs(S,{children:[o.jsx(a,{fullWidth:!0,children:t.fullWidthSingle}),o.jsx(a,{variant:"ghost",children:t.button})]})]})}},v={name:"Chargement",parameters:i("import { Button, IconButton } from 'd-ui';",`<Button loading>Enregistrement</Button>
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
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />`,f),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs(I,{children:[o.jsx(a,{loading:!0,children:t.saving}),o.jsx(a,{loading:!0,variant:"secondary",children:t.saving}),o.jsx(a,{loading:!0,variant:"ghost",children:t.saving}),o.jsx(x,{loading:!0,icon:o.jsx(j,{}),"aria-label":t.add})]}),o.jsxs(I,{children:[o.jsx(a,{loading:!0,loadingIndicator:"bounce",children:t.saving}),o.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"secondary",children:t.saving}),o.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"ghost",children:t.saving}),o.jsx(x,{loading:!0,loadingIndicator:"bounce",icon:o.jsx(j,{}),"aria-label":t.add})]})]})}},b={name:"Icône seule",parameters:i("import { IconButton } from 'd-ui';",'<IconButton icon={plus} aria-label="Ajouter" />',f),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsx(x,{icon:o.jsx(j,{}),"aria-label":t.add})}};var E,w,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Par défaut',
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...(P=(w=l.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var C,W,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var A,L,F;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(L=p.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var R,U,N;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(U=m.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var D,z,T;B.parameters={...B.parameters,docs:{...(D=B.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(z=B.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var M,k,O;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(k=g.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var $,H,q;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(q=(H=h.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Icône seule',
  parameters: componentSource("import { IconButton } from 'd-ui';", '<IconButton icon={plus} aria-label="Ajouter" />', plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  }
}`,...(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const ao=["Primary","HighEmphasis","MediumEmphasis","Toggled","LowEmphasis","SmallSize","FullWidth","Loading","IconOnly"],lo=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:h,HighEmphasis:d,IconOnly:b,Loading:v,LowEmphasis:B,MediumEmphasis:p,Primary:l,SmallSize:g,Toggled:m,__namedExportsOrder:ao,default:eo},Symbol.toStringTag,{value:"Module"}));export{lo as B,h as F,d as H,b as I,B as L,p as M,g as S,m as T,v as a};
