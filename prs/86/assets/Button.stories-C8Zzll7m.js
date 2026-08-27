import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{b as Z,c as u,p as x,a as oo}from"./docs-source-CdFyzgzW.js";import{c as l,b as r,d as s}from"./cx-DFSoSxFP.js";import{B as a}from"./Button-CjT892Oo.js";const to={sm:"h-8 w-8 px-0",md:"h-10 w-10 px-0",lg:"h-12 w-12 px-0"};function y({icon:e,size:n="md",className:t,...i}){return o.jsx(a,{...i,size:n,icon:e,className:l(to[n],t)})}y.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:"Nom accessible. Obligatoire : le bouton n’a pas de texte visible."},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function j(){return o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function Y(){return o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function I({children:e}){return o.jsx("div",{className:"flex flex-wrap items-center gap-4",children:e})}function S({children:e}){return o.jsx("div",{className:"flex w-full items-center gap-4",children:e})}function no({copy:e,variant:n,size:t}){return o.jsx(a,{variant:n,size:t,icon:o.jsx(Y,{}),iconPosition:"end","aria-haspopup":"true","aria-expanded":!1,children:e.dropdown})}function eo({copy:e,variant:n,size:t}){const i=n==="secondary";return o.jsxs("div",{className:l("inline-flex overflow-hidden rounded-md",i&&"ring-1 ring-inset ring-border"),children:[o.jsx(a,{variant:n,size:t,className:l("!rounded-none",i&&"!border-0"),children:e.split}),o.jsx("span",{className:l("w-px shrink-0 self-stretch",i?"bg-border":"bg-on-brand/30"),"aria-hidden":"true"}),o.jsx(y,{variant:n,size:t,icon:o.jsx(Y,{}),"aria-label":e.moreActions,"aria-haspopup":"true","aria-expanded":!1,className:l("!rounded-none",i&&"!border-0")})]})}function c({copy:e,variant:n,size:t,includeSplit:i=!0}){return o.jsxs(I,{children:[o.jsx(a,{variant:n,size:t,children:e.default}),o.jsx(a,{variant:n,size:t,disabled:!0,children:e.disabled}),o.jsx(a,{variant:n,size:t,loading:!0,children:e.saving}),o.jsx(a,{variant:n,size:t,icon:o.jsx(j,{}),children:e.withIcon}),o.jsx(no,{copy:e,variant:n,size:t}),i?o.jsx(eo,{copy:e,variant:n,size:t}):null]})}const ao={title:"Components/Button",component:a,argTypes:Z,parameters:{controls:{include:["children","variant","size","disabled","loading","loadingIndicator","iconPosition","fullWidth","isSelected"]}}},d={name:"Par défaut",render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsx(a,{...e,children:e.children??t.continue})}},p={name:"Forte emphase",parameters:u("import { Button, IconButton } from 'd-ui';",`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />`,`${x}

${oo}`),render:(e,{globals:n})=>o.jsx(c,{copy:r(s(n.locale))})},m={name:"Emphase moyenne",parameters:u("import { Button } from 'd-ui';",`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>`,x),render:(e,{globals:n})=>o.jsx(c,{copy:r(s(n.locale)),variant:"secondary"})},g={name:"Bouton bascule",parameters:u("import { Button } from 'd-ui';",`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs(I,{children:[o.jsx(a,{variant:"secondary",children:t.subscribe}),o.jsx(a,{variant:"secondary",isSelected:!0,children:t.subscribed})]})}},B={name:"Faible emphase",parameters:u("import { Button } from 'd-ui';",`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>`,x),render:(e,{globals:n})=>o.jsx(c,{copy:r(s(n.locale)),variant:"ghost",includeSplit:!1})},h={name:"Petite taille",parameters:u("import { Button } from 'd-ui';",`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>`),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(c,{copy:t,size:"sm"}),o.jsx(c,{copy:t,variant:"secondary",size:"sm"}),o.jsx(c,{copy:t,variant:"ghost",size:"sm",includeSplit:!1})]})}},b={name:"Pleine largeur",parameters:u("import { Button } from 'd-ui';",`<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>`),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs("div",{className:"flex w-full flex-col gap-4",children:[o.jsx(S,{children:o.jsx(a,{fullWidth:!0,children:t.fullWidthSingle})}),o.jsxs(S,{children:[o.jsx(a,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo}),o.jsx(a,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo})]}),o.jsxs(S,{children:[o.jsx(a,{fullWidth:!0,children:t.fullWidthSingle}),o.jsx(a,{variant:"ghost",children:t.button})]})]})}},v={name:"Chargement",parameters:u("import { Button, IconButton } from 'd-ui';",`<Button loading>Enregistrement</Button>
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
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />`,x),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs(I,{children:[o.jsx(a,{loading:!0,children:t.saving}),o.jsx(a,{loading:!0,variant:"secondary",children:t.saving}),o.jsx(a,{loading:!0,variant:"ghost",children:t.saving}),o.jsx(y,{loading:!0,icon:o.jsx(j,{}),"aria-label":t.add})]}),o.jsxs(I,{children:[o.jsx(a,{loading:!0,loadingIndicator:"bounce",children:t.saving}),o.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"secondary",children:t.saving}),o.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"ghost",children:t.saving}),o.jsx(y,{loading:!0,loadingIndicator:"bounce",icon:o.jsx(j,{}),"aria-label":t.add})]})]})}},f={name:"Icône seule",parameters:u("import { IconButton } from 'd-ui';",'<IconButton icon={plus} aria-label="Ajouter" />',x),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsx(y,{icon:o.jsx(j,{}),"aria-label":t.add})}};var w,E,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Par défaut',
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var P,W,_;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var A,L,F;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(L=m.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var N,R,U;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(R=g.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var T,z,D;B.parameters={...B.parameters,docs:{...(T=B.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(z=B.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var M,k,O;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(k=h.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var $,q,H;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(q=b.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var V,G,J;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Icône seule',
  parameters: componentSource("import { IconButton } from 'd-ui';", '<IconButton icon={plus} aria-label="Ajouter" />', plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ro=["Primary","HighEmphasis","MediumEmphasis","Toggled","LowEmphasis","SmallSize","FullWidth","Loading","IconOnly"],lo=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:b,HighEmphasis:p,IconOnly:f,Loading:v,LowEmphasis:B,MediumEmphasis:m,Primary:d,SmallSize:h,Toggled:g,__namedExportsOrder:ro,default:ao},Symbol.toStringTag,{value:"Module"}));export{lo as B,b as F,p as H,f as I,B as L,m as M,h as S,g as T,v as a};
