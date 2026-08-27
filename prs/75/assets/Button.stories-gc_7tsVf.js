import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{b as Z,c as i,p as f,a as oo}from"./docs-source-m9O2bJRw.js";import{c as X,b as r,d as s}from"./cx-BKFaN9jf.js";import{B as a}from"./Button-BmIj99U_.js";const to={sm:"h-8 w-8 px-0",md:"h-10 w-10 px-0",lg:"h-12 w-12 px-0"};function b({icon:e,size:n="md",className:t,...j}){return o.jsx(a,{...j,size:n,icon:e,className:X(to[n],t)})}b.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:"Nom accessible. Obligatoire : le bouton n’a pas de texte visible."},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function y(){return o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function Y(){return o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function x({children:e}){return o.jsx("div",{className:"flex flex-wrap items-center gap-4",children:e})}function I({children:e}){return o.jsx("div",{className:"flex w-full items-center gap-4",children:e})}function no({copy:e,variant:n,size:t}){return o.jsx(a,{variant:n,size:t,icon:o.jsx(Y,{}),iconPosition:"end","aria-haspopup":"true","aria-expanded":!1,children:e.dropdown})}function eo({copy:e,variant:n,size:t}){return o.jsxs("div",{className:"inline-flex overflow-hidden rounded-md",children:[o.jsx(a,{variant:n,size:t,className:"rounded-none",children:e.split}),o.jsx("span",{className:X("w-px shrink-0 self-stretch",n==="secondary"||n==="ghost"?"bg-border":"bg-on-brand/30"),"aria-hidden":"true"}),o.jsx(b,{variant:n,size:t,icon:o.jsx(Y,{}),"aria-label":e.moreActions,"aria-haspopup":"true","aria-expanded":!1,className:"rounded-none"})]})}function u({copy:e,variant:n,size:t,includeSplit:j=!0}){return o.jsxs(x,{children:[o.jsx(a,{variant:n,size:t,children:e.default}),o.jsx(a,{variant:n,size:t,disabled:!0,children:e.disabled}),o.jsx(a,{variant:n,size:t,loading:!0,children:e.saving}),o.jsx(a,{variant:n,size:t,icon:o.jsx(y,{}),children:e.withIcon}),o.jsx(no,{copy:e,variant:n,size:t}),j?o.jsx(eo,{copy:e,variant:n,size:t}):null]})}const ao={title:"Components/Button",component:a,argTypes:Z,parameters:{controls:{include:["children","variant","size","disabled","loading","loadingIndicator","iconPosition","fullWidth","isSelected"]}}},c={name:"Par défaut",render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsx(a,{...e,children:e.children??t.continue})}},l={name:"Forte emphase",parameters:i("import { Button, IconButton } from 'd-ui';",`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />`,`${f}

${oo}`),render:(e,{globals:n})=>o.jsx(u,{copy:r(s(n.locale))})},d={name:"Emphase moyenne",parameters:i("import { Button } from 'd-ui';",`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>`,f),render:(e,{globals:n})=>o.jsx(u,{copy:r(s(n.locale)),variant:"secondary"})},p={name:"Bouton bascule",parameters:i("import { Button } from 'd-ui';",`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs(x,{children:[o.jsx(a,{variant:"secondary",children:t.subscribe}),o.jsx(a,{variant:"secondary",isSelected:!0,children:t.subscribed})]})}},m={name:"Faible emphase",parameters:i("import { Button } from 'd-ui';",`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>`,f),render:(e,{globals:n})=>o.jsx(u,{copy:r(s(n.locale)),variant:"ghost",includeSplit:!1})},B={name:"Petite taille",parameters:i("import { Button } from 'd-ui';",`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>`),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(u,{copy:t,size:"sm"}),o.jsx(u,{copy:t,variant:"secondary",size:"sm"}),o.jsx(u,{copy:t,variant:"ghost",size:"sm",includeSplit:!1})]})}},g={name:"Pleine largeur",parameters:i("import { Button } from 'd-ui';",`<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>`),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs("div",{className:"flex w-full flex-col gap-4",children:[o.jsx(I,{children:o.jsx(a,{fullWidth:!0,children:t.fullWidthSingle})}),o.jsxs(I,{children:[o.jsx(a,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo}),o.jsx(a,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo})]}),o.jsxs(I,{children:[o.jsx(a,{fullWidth:!0,children:t.fullWidthSingle}),o.jsx(a,{variant:"ghost",children:t.button})]})]})}},h={name:"Chargement",parameters:i("import { Button, IconButton } from 'd-ui';",`<Button loading>Enregistrement</Button>
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
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />`,f),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs(x,{children:[o.jsx(a,{loading:!0,children:t.saving}),o.jsx(a,{loading:!0,variant:"secondary",children:t.saving}),o.jsx(a,{loading:!0,variant:"ghost",children:t.saving}),o.jsx(b,{loading:!0,icon:o.jsx(y,{}),"aria-label":t.add})]}),o.jsxs(x,{children:[o.jsx(a,{loading:!0,loadingIndicator:"bounce",children:t.saving}),o.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"secondary",children:t.saving}),o.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"ghost",children:t.saving}),o.jsx(b,{loading:!0,loadingIndicator:"bounce",icon:o.jsx(y,{}),"aria-label":t.add})]})]})}},v={name:"Icône seule",parameters:i("import { IconButton } from 'd-ui';",'<IconButton icon={plus} aria-label="Ajouter" />',f),render:(e,{globals:n})=>{const t=r(s(n.locale));return o.jsx(b,{icon:o.jsx(y,{}),"aria-label":t.add})}};var S,w,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Par défaut',
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var C,P,W;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(W=(P=l.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var _,A,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var F,N,R;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var U,T,z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(T=m.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var D,M,k;B.parameters={...B.parameters,docs:{...(D=B.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(M=B.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var O,$,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var H,V,G;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(V=h.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Icône seule',
  parameters: componentSource("import { IconButton } from 'd-ui';", '<IconButton icon={plus} aria-label="Ajouter" />', plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ro=["Primary","HighEmphasis","MediumEmphasis","Toggled","LowEmphasis","SmallSize","FullWidth","Loading","IconOnly"],lo=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:g,HighEmphasis:l,IconOnly:v,Loading:h,LowEmphasis:m,MediumEmphasis:d,Primary:c,SmallSize:B,Toggled:p,__namedExportsOrder:ro,default:ao},Symbol.toStringTag,{value:"Module"}));export{lo as B,g as F,l as H,v as I,m as L,d as M,B as S,p as T,h as a};
