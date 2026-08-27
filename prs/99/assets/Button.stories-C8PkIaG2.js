import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,g as i,n as a,t as o}from"./docs-locale-DxRsX5eR.js";import{a as s,h as c,i as l,n as u,s as d,t as f}from"./docs-source-5snetGJm.js";import{n as p,t as m}from"./Button-BlIgtYyL.js";import{n as h,t as g}from"./IconButton-CpgKMX4H.js";var _=t({FullWidth:()=>N,HighEmphasis:()=>O,IconOnly:()=>F,Loading:()=>P,LowEmphasis:()=>j,MediumEmphasis:()=>k,Primary:()=>D,SmallSize:()=>M,Toggled:()=>A,__namedExportsOrder:()=>I,default:()=>E});function v(){return(0,T.jsx)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,T.jsx)(`path`,{d:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinecap:`round`})})}function y(){return(0,T.jsx)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,T.jsx)(`path`,{d:`M4 6l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.75`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function b({children:e}){return(0,T.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:e})}function x({children:e}){return(0,T.jsx)(`div`,{className:`flex w-full items-center gap-4`,children:e})}function S({copy:e,variant:t,size:n}){return(0,T.jsx)(m,{variant:t,size:n,icon:(0,T.jsx)(y,{}),iconPosition:`end`,"aria-haspopup":`true`,"aria-expanded":!1,children:e.dropdown})}function C({copy:e,variant:t,size:n}){let r=t===`secondary`;return(0,T.jsxs)(`div`,{className:i(`inline-flex overflow-hidden rounded-md`,r&&`ring-1 ring-inset ring-border`),children:[(0,T.jsx)(m,{variant:t,size:n,className:i(`!rounded-none`,r&&`!border-0`),children:e.split}),(0,T.jsx)(`span`,{className:i(`w-px shrink-0 self-stretch`,r?`bg-border`:`bg-on-brand/30`),"aria-hidden":`true`}),(0,T.jsx)(g,{variant:t,size:n,icon:(0,T.jsx)(y,{}),"aria-label":e.moreActions,"aria-haspopup":`true`,"aria-expanded":!1,className:i(`!rounded-none`,r&&`!border-0`)})]})}function w({copy:e,variant:t,size:n,includeSplit:r=!0}){return(0,T.jsxs)(b,{children:[(0,T.jsx)(m,{variant:t,size:n,children:e.default}),(0,T.jsx)(m,{variant:t,size:n,disabled:!0,children:e.disabled}),(0,T.jsx)(m,{variant:t,size:n,loading:!0,children:e.saving}),(0,T.jsx)(m,{variant:t,size:n,icon:(0,T.jsx)(v,{}),children:e.withIcon}),(0,T.jsx)(S,{copy:e,variant:t,size:n}),r?(0,T.jsx)(C,{copy:e,variant:t,size:n}):null]})}var T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{c(),l(),r(),p(),h(),T=n(),E={title:`Components/Button`,component:m,argTypes:d,parameters:{controls:{include:[`children`,`variant`,`size`,`disabled`,`loading`,`loadingIndicator`,`iconPosition`,`fullWidth`,`isSelected`]}}},D={name:`Par défaut`,render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,T.jsx)(m,{...e,children:e.children??n.continue})}},O={name:`Forte emphase`,parameters:u(`import { Button, IconButton } from 'd-ui';`,`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />`,`${s}\n\n${f}`),render:(e,{globals:t})=>(0,T.jsx)(w,{copy:o(a(t.locale))})},k={name:`Emphase moyenne`,parameters:u(`import { Button } from 'd-ui';`,`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>`,s),render:(e,{globals:t})=>(0,T.jsx)(w,{copy:o(a(t.locale)),variant:`secondary`})},A={name:`Bouton bascule`,parameters:u(`import { Button } from 'd-ui';`,`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,T.jsxs)(b,{children:[(0,T.jsx)(m,{variant:`secondary`,children:n.subscribe}),(0,T.jsx)(m,{variant:`secondary`,isSelected:!0,children:n.subscribed})]})}},j={name:`Faible emphase`,parameters:u(`import { Button } from 'd-ui';`,`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>`,s),render:(e,{globals:t})=>(0,T.jsx)(w,{copy:o(a(t.locale)),variant:`ghost`,includeSplit:!1})},M={name:`Petite taille`,parameters:u(`import { Button } from 'd-ui';`,`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>`),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,T.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,T.jsx)(w,{copy:n,size:`sm`}),(0,T.jsx)(w,{copy:n,variant:`secondary`,size:`sm`}),(0,T.jsx)(w,{copy:n,variant:`ghost`,size:`sm`,includeSplit:!1})]})}},N={name:`Pleine largeur`,parameters:u(`import { Button } from 'd-ui';`,`<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>`),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,T.jsxs)(`div`,{className:`flex w-full flex-col gap-4`,children:[(0,T.jsx)(x,{children:(0,T.jsx)(m,{fullWidth:!0,children:n.fullWidthSingle})}),(0,T.jsxs)(x,{children:[(0,T.jsx)(m,{fullWidth:!0,variant:`secondary`,children:n.fullWidthTwo}),(0,T.jsx)(m,{fullWidth:!0,variant:`secondary`,children:n.fullWidthTwo})]}),(0,T.jsxs)(x,{children:[(0,T.jsx)(m,{fullWidth:!0,children:n.fullWidthSingle}),(0,T.jsx)(m,{variant:`ghost`,children:n.button})]})]})}},P={name:`Chargement`,parameters:u(`import { Button, IconButton } from 'd-ui';`,`<Button loading>Enregistrement</Button>
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
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />`,s),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,T.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,T.jsxs)(b,{children:[(0,T.jsx)(m,{loading:!0,children:n.saving}),(0,T.jsx)(m,{loading:!0,variant:`secondary`,children:n.saving}),(0,T.jsx)(m,{loading:!0,variant:`ghost`,children:n.saving}),(0,T.jsx)(g,{loading:!0,icon:(0,T.jsx)(v,{}),"aria-label":n.add})]}),(0,T.jsxs)(b,{children:[(0,T.jsx)(m,{loading:!0,loadingIndicator:`bounce`,children:n.saving}),(0,T.jsx)(m,{loading:!0,loadingIndicator:`bounce`,variant:`secondary`,children:n.saving}),(0,T.jsx)(m,{loading:!0,loadingIndicator:`bounce`,variant:`ghost`,children:n.saving}),(0,T.jsx)(g,{loading:!0,loadingIndicator:`bounce`,icon:(0,T.jsx)(v,{}),"aria-label":n.add})]})]})}},F={name:`Icône seule`,parameters:u(`import { IconButton } from 'd-ui';`,`<IconButton icon={plus} aria-label="Ajouter" />`,s),render:(e,{globals:t})=>{let n=o(a(t.locale));return(0,T.jsx)(g,{icon:(0,T.jsx)(v,{}),"aria-label":n.add})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Par défaut',
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Icône seule',
  parameters: componentSource("import { IconButton } from 'd-ui';", '<IconButton icon={plus} aria-label="Ajouter" />', plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  }
}`,...F.parameters?.docs?.source}}},I=[`Primary`,`HighEmphasis`,`MediumEmphasis`,`Toggled`,`LowEmphasis`,`SmallSize`,`FullWidth`,`Loading`,`IconOnly`]})))()}export{P as a,M as c,F as i,A as l,N as n,j as o,O as r,k as s,_ as t,L as u};