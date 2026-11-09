import{g as s,d as u,j as n,h as w}from"./iframe-BgAAkhia.js";import{d as pn}from"./arg-types-DAn3E37r.js";import{c as i,p,a as Bn}from"./docs-source-C_O40UCi.js";import{B as o}from"./Button-BpOZjla9.js";import{I as d}from"./IconButton-BM9_17qI.js";function a(){return n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function dn(){return n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function l({children:r}){return n.jsx("div",{className:"flex flex-wrap items-center gap-4",children:r})}function C({children:r}){return n.jsx("div",{className:"flex w-full items-center gap-4",children:r})}function mn({copy:r,variant:e,size:t}){return n.jsx(o,{variant:e,size:t,icon:n.jsx(dn,{}),iconPosition:"end","aria-haspopup":"true","aria-expanded":!1,children:r.dropdown})}function gn({copy:r,variant:e,size:t}){const c=e==="secondary";return n.jsxs("div",{className:w("inline-flex overflow-hidden rounded-md",c&&"ring-1 ring-inset ring-border"),children:[n.jsx(o,{variant:e,size:t,className:w("!rounded-none",c&&"!border-0"),children:r.split}),n.jsx("span",{className:w("w-px shrink-0 self-stretch",c?"bg-border":"bg-on-brand/30"),"aria-hidden":"true"}),n.jsx(d,{variant:e,size:t,icon:n.jsx(dn,{}),"aria-label":r.moreActions,"aria-haspopup":"true","aria-expanded":!1,className:w("!rounded-none",c&&"!border-0")})]})}function B({copy:r,variant:e,size:t,includeSplit:c=!0}){return n.jsxs(l,{children:[n.jsx(o,{variant:e,size:t,children:r.default}),n.jsx(o,{variant:e,size:t,disabled:!0,children:r.disabled}),n.jsx(o,{variant:e,size:t,loading:!0,children:r.saving}),n.jsx(o,{variant:e,size:t,icon:n.jsx(a,{}),children:r.withIcon}),n.jsx(mn,{copy:r,variant:e,size:t}),c?n.jsx(gn,{copy:r,variant:e,size:t}):null]})}const hn={title:"Components/Button",component:o,argTypes:pn,parameters:{controls:{include:["children","variant","size","disabled","loading","loadingIndicator","iconPosition","fullWidth","href","external","externalLabel","target","rel","isSelected","radius"]}}},m={name:"Par défaut",render:(r,{globals:e})=>{const t=s(u(e.locale));return n.jsx(o,{...r,children:r.children??t.continue})}},g={name:"Forte emphase",parameters:i("import { Button, IconButton } from '@dudaloglobal/d-ui';",`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />`,`${p}

${Bn}`),render:(r,{globals:e})=>n.jsx(B,{copy:s(u(e.locale))})},h={name:"Emphase moyenne",parameters:i("import { Button } from '@dudaloglobal/d-ui';",`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>`,p),render:(r,{globals:e})=>n.jsx(B,{copy:s(u(e.locale)),variant:"secondary"})},v={name:"Bouton bascule",parameters:i("import { Button } from '@dudaloglobal/d-ui';",`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`),render:(r,{globals:e})=>{const t=s(u(e.locale));return n.jsxs(l,{children:[n.jsx(o,{variant:"secondary",children:t.subscribe}),n.jsx(o,{variant:"secondary",isSelected:!0,children:t.subscribed})]})}},b={name:"Faible emphase",parameters:i("import { Button } from '@dudaloglobal/d-ui';",`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>`,p),render:(r,{globals:e})=>n.jsx(B,{copy:s(u(e.locale)),variant:"ghost",includeSplit:!1})},x={name:"Action irréversible",parameters:i("import { Button, IconButton } from '@dudaloglobal/d-ui';",`<Button variant="destructive">Supprimer</Button>
<Button variant="destructive" disabled>
  Désactivé
</Button>
<Button variant="destructive" loading>
  Enregistrement
</Button>
<Button variant="destructive" icon={plus}>
  Avec icône
</Button>
<Button variant="destructive" icon={plus} iconPosition="end">
  Avec icône
</Button>
<Button variant="destructive" size="sm">
  Supprimer
</Button>
<Button variant="destructive" size="lg">
  Supprimer
</Button>
<Button variant="destructive" fullWidth>
  Supprimer
</Button>
<IconButton variant="destructive" icon={plus} aria-label="Supprimer" />`,p),render:(r,{globals:e})=>{const t=s(u(e.locale));return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs(l,{children:[n.jsx(o,{variant:"destructive",children:t.remove}),n.jsx(o,{variant:"destructive",disabled:!0,children:t.disabled}),n.jsx(o,{variant:"destructive",loading:!0,children:t.saving}),n.jsx(o,{variant:"destructive",icon:n.jsx(a,{}),children:t.withIcon}),n.jsx(o,{variant:"destructive",icon:n.jsx(a,{}),iconPosition:"end",children:t.withIcon})]}),n.jsxs(l,{children:[n.jsx(o,{variant:"destructive",size:"sm",children:t.remove}),n.jsx(o,{variant:"destructive",size:"lg",children:t.remove}),n.jsx(o,{variant:"destructive",fullWidth:!0,children:t.remove}),n.jsx(d,{variant:"destructive",icon:n.jsx(a,{}),"aria-label":t.remove})]})]})}},f={name:"Lien habillé en bouton",parameters:i("import { Button, IconButton } from '@dudaloglobal/d-ui';",`<Button href="/cours">Retour</Button>
<Button href="/cours" disabled>
  Désactivé
</Button>
<Button href="/cours" loading>
  Enregistrement
</Button>
<Button href="/cours" icon={plus}>
  Avec icône
</Button>
<Button href="/cours" icon={plus} iconPosition="end">
  Avec icône
</Button>
<Button
  href="https://example.com"
  external
  target="_blank"
  rel="noopener noreferrer"
  externalLabel="(ouvre dans un nouvel onglet)"
>
  Ouvrir le cours
</Button>
<IconButton
  href="https://example.com"
  external
  externalLabel="(ouvre dans un nouvel onglet)"
  icon={plus}
  aria-label="Ouvrir le cours"
/>
<Button href="/cours" variant="secondary">Retour</Button>
<Button href="/cours" variant="ghost">Retour</Button>
<Button href="/cours" size="sm">Retour</Button>
<Button href="/cours" size="lg">Retour</Button>
<Button href="/cours" fullWidth>Retour</Button>`,p),render:(r,{globals:e})=>{const t=s(u(e.locale));return n.jsxs("div",{className:"flex w-full flex-col gap-4",children:[n.jsxs(l,{children:[n.jsx(o,{href:"/cours",children:t.back}),n.jsx(o,{href:"/cours",disabled:!0,children:t.disabled}),n.jsx(o,{href:"/cours",loading:!0,children:t.saving}),n.jsx(o,{href:"/cours",icon:n.jsx(a,{}),children:t.withIcon}),n.jsx(o,{href:"/cours",icon:n.jsx(a,{}),iconPosition:"end",children:t.withIcon}),n.jsx(o,{href:"https://example.com",external:!0,target:"_blank",rel:"noopener noreferrer",externalLabel:t.externalLabel,children:t.openCourse}),n.jsx(d,{href:"https://example.com",external:!0,externalLabel:t.externalLabel,icon:n.jsx(a,{}),"aria-label":t.openCourse})]}),n.jsxs(l,{children:[n.jsx(o,{href:"/cours",variant:"secondary",children:t.back}),n.jsx(o,{href:"/cours",variant:"ghost",children:t.back}),n.jsx(o,{href:"/cours",size:"sm",children:t.back}),n.jsx(o,{href:"/cours",size:"lg",children:t.back})]}),n.jsx(C,{children:n.jsx(o,{href:"/cours",fullWidth:!0,children:t.back})})]})}},y={name:"Petite taille",parameters:i("import { Button } from '@dudaloglobal/d-ui';",`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>`),render:(r,{globals:e})=>{const t=s(u(e.locale));return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(B,{copy:t,size:"sm"}),n.jsx(B,{copy:t,variant:"secondary",size:"sm"}),n.jsx(B,{copy:t,variant:"ghost",size:"sm",includeSplit:!1})]})}},j={name:"Pleine largeur",parameters:i("import { Button } from '@dudaloglobal/d-ui';",`<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>`),render:(r,{globals:e})=>{const t=s(u(e.locale));return n.jsxs("div",{className:"flex w-full flex-col gap-4",children:[n.jsx(C,{children:n.jsx(o,{fullWidth:!0,children:t.fullWidthSingle})}),n.jsxs(C,{children:[n.jsx(o,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo}),n.jsx(o,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo})]}),n.jsxs(C,{children:[n.jsx(o,{fullWidth:!0,children:t.fullWidthSingle}),n.jsx(o,{variant:"ghost",children:t.button})]})]})}},I={name:"Chargement",parameters:i("import { Button, IconButton } from '@dudaloglobal/d-ui';",`<Button loading>Enregistrement</Button>
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
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />`,p),render:(r,{globals:e})=>{const t=s(u(e.locale));return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs(l,{children:[n.jsx(o,{loading:!0,children:t.saving}),n.jsx(o,{loading:!0,variant:"secondary",children:t.saving}),n.jsx(o,{loading:!0,variant:"ghost",children:t.saving}),n.jsx(d,{loading:!0,icon:n.jsx(a,{}),"aria-label":t.add})]}),n.jsxs(l,{children:[n.jsx(o,{loading:!0,loadingIndicator:"bounce",children:t.saving}),n.jsx(o,{loading:!0,loadingIndicator:"bounce",variant:"secondary",children:t.saving}),n.jsx(o,{loading:!0,loadingIndicator:"bounce",variant:"ghost",children:t.saving}),n.jsx(d,{loading:!0,loadingIndicator:"bounce",icon:n.jsx(a,{}),"aria-label":t.add})]})]})}},S={name:"Icône seule",parameters:i("import { IconButton } from '@dudaloglobal/d-ui';",`<IconButton icon={plus} aria-label="Ajouter" />
<IconButton variant="destructive" icon={plus} aria-label="Supprimer" />
<IconButton href="/cours" icon={plus} aria-label="Retour" />`,p),render:(r,{globals:e})=>{const t=s(u(e.locale));return n.jsxs(l,{children:[n.jsx(d,{icon:n.jsx(a,{}),"aria-label":t.add}),n.jsx(d,{variant:"destructive",icon:n.jsx(a,{}),"aria-label":t.remove}),n.jsx(d,{href:"/cours",icon:n.jsx(a,{}),"aria-label":t.back})]})}},vn=["none","sm","md","lg","xl"],E={name:"Arrondi",parameters:i("import { Button } from '@dudaloglobal/d-ui';",'<Button radius="lg">Continuer</Button>'),render:(r,{globals:e})=>{const t=s(u(e.locale));return n.jsxs(l,{children:[vn.map(c=>n.jsx(o,{radius:c,variant:"secondary",children:c},c)),n.jsx(o,{radius:"lg",children:t.continue})]})}},bn=["Primary","HighEmphasis","MediumEmphasis","Toggled","LowEmphasis","Destructive","AsLink","SmallSize","FullWidth","Loading","IconOnly","Radius"];var R,P,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Par défaut',
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...(L=(P=m.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var A,W,_;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var k,z,F;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(F=(z=h.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var U,D,N;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(N=(D=v.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var T,M,O;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(M=b.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var $,H,q;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Action irréversible',
  parameters: componentSource("import { Button, IconButton } from '@dudaloglobal/d-ui';", \`<Button variant="destructive">Supprimer</Button>
<Button variant="destructive" disabled>
  Désactivé
</Button>
<Button variant="destructive" loading>
  Enregistrement
</Button>
<Button variant="destructive" icon={plus}>
  Avec icône
</Button>
<Button variant="destructive" icon={plus} iconPosition="end">
  Avec icône
</Button>
<Button variant="destructive" size="sm">
  Supprimer
</Button>
<Button variant="destructive" size="lg">
  Supprimer
</Button>
<Button variant="destructive" fullWidth>
  Supprimer
</Button>
<IconButton variant="destructive" icon={plus} aria-label="Supprimer" />\`, plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-4">
        <UseCaseRow>
          <Button variant="destructive">{copy.remove}</Button>
          <Button variant="destructive" disabled>
            {copy.disabled}
          </Button>
          <Button variant="destructive" loading>
            {copy.saving}
          </Button>
          <Button variant="destructive" icon={<PlusIcon />}>
            {copy.withIcon}
          </Button>
          <Button variant="destructive" icon={<PlusIcon />} iconPosition="end">
            {copy.withIcon}
          </Button>
        </UseCaseRow>
        <UseCaseRow>
          <Button variant="destructive" size="sm">
            {copy.remove}
          </Button>
          <Button variant="destructive" size="lg">
            {copy.remove}
          </Button>
          <Button variant="destructive" fullWidth>
            {copy.remove}
          </Button>
          <IconButton variant="destructive" icon={<PlusIcon />} aria-label={copy.remove} />
        </UseCaseRow>
      </div>;
  }
}`,...(q=(H=x.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Lien habillé en bouton',
  parameters: componentSource("import { Button, IconButton } from '@dudaloglobal/d-ui';", \`<Button href="/cours">Retour</Button>
<Button href="/cours" disabled>
  Désactivé
</Button>
<Button href="/cours" loading>
  Enregistrement
</Button>
<Button href="/cours" icon={plus}>
  Avec icône
</Button>
<Button href="/cours" icon={plus} iconPosition="end">
  Avec icône
</Button>
<Button
  href="https://example.com"
  external
  target="_blank"
  rel="noopener noreferrer"
  externalLabel="(ouvre dans un nouvel onglet)"
>
  Ouvrir le cours
</Button>
<IconButton
  href="https://example.com"
  external
  externalLabel="(ouvre dans un nouvel onglet)"
  icon={plus}
  aria-label="Ouvrir le cours"
/>
<Button href="/cours" variant="secondary">Retour</Button>
<Button href="/cours" variant="ghost">Retour</Button>
<Button href="/cours" size="sm">Retour</Button>
<Button href="/cours" size="lg">Retour</Button>
<Button href="/cours" fullWidth>Retour</Button>\`, plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <div className="flex w-full flex-col gap-4">
        <UseCaseRow>
          <Button href="/cours">{copy.back}</Button>
          <Button href="/cours" disabled>
            {copy.disabled}
          </Button>
          <Button href="/cours" loading>
            {copy.saving}
          </Button>
          <Button href="/cours" icon={<PlusIcon />}>
            {copy.withIcon}
          </Button>
          <Button href="/cours" icon={<PlusIcon />} iconPosition="end">
            {copy.withIcon}
          </Button>
          <Button href="https://example.com" external target="_blank" rel="noopener noreferrer" externalLabel={copy.externalLabel}>
            {copy.openCourse}
          </Button>
          <IconButton href="https://example.com" external externalLabel={copy.externalLabel} icon={<PlusIcon />} aria-label={copy.openCourse} />
        </UseCaseRow>
        <UseCaseRow>
          <Button href="/cours" variant="secondary">
            {copy.back}
          </Button>
          <Button href="/cours" variant="ghost">
            {copy.back}
          </Button>
          <Button href="/cours" size="sm">
            {copy.back}
          </Button>
          <Button href="/cours" size="lg">
            {copy.back}
          </Button>
        </UseCaseRow>
        <FillRow>
          <Button href="/cours" fullWidth>
            {copy.back}
          </Button>
        </FillRow>
      </div>;
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,X;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(V=y.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,nn;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(nn=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:nn.source}}};var tn,on,en;I.parameters={...I.parameters,docs:{...(tn=I.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
}`,...(en=(on=I.parameters)==null?void 0:on.docs)==null?void 0:en.source}}};var rn,an,sn;S.parameters={...S.parameters,docs:{...(rn=S.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  name: 'Icône seule',
  parameters: componentSource("import { IconButton } from '@dudaloglobal/d-ui';", \`<IconButton icon={plus} aria-label="Ajouter" />
<IconButton variant="destructive" icon={plus} aria-label="Supprimer" />
<IconButton href="/cours" icon={plus} aria-label="Retour" />\`, plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <UseCaseRow>
        <IconButton icon={<PlusIcon />} aria-label={copy.add} />
        <IconButton variant="destructive" icon={<PlusIcon />} aria-label={copy.remove} />
        <IconButton href="/cours" icon={<PlusIcon />} aria-label={copy.back} />
      </UseCaseRow>;
  }
}`,...(sn=(an=S.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};var un,cn,ln;E.parameters={...E.parameters,docs:{...(un=E.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(ln=(cn=E.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};const Sn=Object.freeze(Object.defineProperty({__proto__:null,AsLink:f,Destructive:x,FullWidth:j,HighEmphasis:g,IconOnly:S,Loading:I,LowEmphasis:b,MediumEmphasis:h,Primary:m,Radius:E,SmallSize:y,Toggled:v,__namedExportsOrder:bn,default:hn},Symbol.toStringTag,{value:"Module"}));export{f as A,Sn as B,x as D,j as F,g as H,S as I,b as L,h as M,E as R,y as S,v as T,I as a};
