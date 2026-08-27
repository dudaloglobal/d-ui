import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as pe,a as i,p as x,e as me}from"./docs-source-BPq0lqAN.js";import{c as C,b as r,d as s}from"./cx-B-sdHrRy.js";const ge={primary:"bg-brand text-on-brand hover:bg-brand-hover",secondary:"bg-surface-muted text-fg border border-border hover:bg-surface-hover",ghost:"bg-transparent text-fg hover:bg-surface-muted"},Be={sm:"h-8 px-3 text-sm",md:"h-10 px-4 text-base",lg:"h-12 px-5 text-lg"};function he(){return e.jsx("span",{className:"d-ui-button-spinner","aria-hidden":"true"})}function fe(){return e.jsxs("span",{className:"d-ui-button-bounce","aria-hidden":"true",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})}function W({children:o}){return e.jsx("span",{className:"inline-flex shrink-0","aria-hidden":"true",children:o})}const be={secondary:"bg-surface-hover border-brand",ghost:"bg-surface-muted"};function a({variant:o="primary",size:t="md",type:n="button",className:u,disabled:ae,loading:c=!1,loadingIndicator:re="spinner",icon:j,iconPosition:P="start",fullWidth:se=!1,isSelected:w,children:ie,...le}){const ue=!!(ae||c),ce=!c&&j&&P==="start",de=!c&&j&&P==="end";return e.jsxs("button",{...le,type:n,disabled:ue,"aria-busy":c||void 0,"aria-pressed":typeof w=="boolean"?w:void 0,className:C("inline-flex items-center justify-center gap-2 rounded-md font-medium","transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg","disabled:pointer-events-none disabled:opacity-50",ge[o],Be[t],se&&"w-full min-w-0",w?be[o]:void 0,u),children:[c?re==="bounce"?e.jsx(fe,{}):e.jsx(he,{}):null,ce?e.jsx(W,{children:j}):null,ie,de?e.jsx(W,{children:j}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:'Emphase. `"primary"` est forte, `"secondary"` moyenne, `"ghost"` faible.\nIl ne doit pas y avoir plus d’un bouton à forte emphase dans une vue.',defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les actions aérées.',defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Remplace l’icône par un indicateur, pose `aria-busy`. Le libellé reste visible.",defaultValue:{value:"false",computed:!1}},loadingIndicator:{required:!1,tsType:{name:"union",raw:"'spinner' | 'bounce'",elements:[{name:"literal",value:"'spinner'"},{name:"literal",value:"'bounce'"}]},description:'`"spinner"` (défaut) ou `"bounce"` (trois points). Utilisé si `loading` est posé.',defaultValue:{value:"'spinner'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icône décorative. Ne remplace pas le nom accessible."},iconPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:'Position de l’icône : `"start"` (début) ou `"end"` (fin).',defaultValue:{value:"'start'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Étend le bouton à la largeur du conteneur.",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"État bascule (emphase moyenne/faible). Pose `aria-pressed`.\nSi le libellé change déjà selon l’état, ce nom suffit."},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const ve={sm:"h-8 w-8 px-0",md:"h-10 w-10 px-0",lg:"h-12 w-12 px-0"};function y({icon:o,size:t="md",className:n,...u}){return e.jsx(a,{...u,size:t,icon:o,className:C(ve[t],n)})}y.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:"Nom accessible. Obligatoire : le bouton n’a pas de texte visible."},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function I(){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function oe(){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function S({children:o}){return e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:o})}function E({children:o}){return e.jsx("div",{className:"flex w-full items-center gap-4",children:o})}function ye({copy:o,variant:t,size:n}){return e.jsx(a,{variant:t,size:n,icon:e.jsx(oe,{}),iconPosition:"end","aria-haspopup":"true","aria-expanded":!1,children:o.dropdown})}function xe({copy:o,variant:t,size:n}){return e.jsxs("div",{className:"inline-flex overflow-hidden rounded-md",children:[e.jsx(a,{variant:t,size:n,className:"rounded-none",children:o.split}),e.jsx("span",{className:C("w-px shrink-0 self-stretch",t==="secondary"||t==="ghost"?"bg-border":"bg-on-brand/30"),"aria-hidden":"true"}),e.jsx(y,{variant:t,size:n,icon:e.jsx(oe,{}),"aria-label":o.moreActions,"aria-haspopup":"true","aria-expanded":!1,className:"rounded-none"})]})}function l({copy:o,variant:t,size:n,includeSplit:u=!0}){return e.jsxs(S,{children:[e.jsx(a,{variant:t,size:n,children:o.default}),e.jsx(a,{variant:t,size:n,disabled:!0,children:o.disabled}),e.jsx(a,{variant:t,size:n,loading:!0,children:o.saving}),e.jsx(a,{variant:t,size:n,icon:e.jsx(I,{}),children:o.withIcon}),e.jsx(ye,{copy:o,variant:t,size:n}),u?e.jsx(xe,{copy:o,variant:t,size:n}):null]})}const je={title:"Components/Button",component:a,argTypes:pe,parameters:{controls:{include:["children","variant","size","disabled","loading","loadingIndicator","iconPosition","fullWidth","isSelected"]}}},d={name:"Par défaut",render:(o,{globals:t})=>{const n=r(s(t.locale));return e.jsx(a,{...o,children:o.children??n.continue})}},p={name:"Forte emphase",parameters:i("import { Button, IconButton } from 'd-ui';",`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />`,`${x}

${me}`),render:(o,{globals:t})=>e.jsx(l,{copy:r(s(t.locale))})},m={name:"Emphase moyenne",parameters:i("import { Button } from 'd-ui';",`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>`,x),render:(o,{globals:t})=>e.jsx(l,{copy:r(s(t.locale)),variant:"secondary"})},g={name:"Bouton bascule",parameters:i("import { Button } from 'd-ui';",`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`),render:(o,{globals:t})=>{const n=r(s(t.locale));return e.jsxs(S,{children:[e.jsx(a,{variant:"secondary",children:n.subscribe}),e.jsx(a,{variant:"secondary",isSelected:!0,children:n.subscribed})]})}},B={name:"Faible emphase",parameters:i("import { Button } from 'd-ui';",`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>`,x),render:(o,{globals:t})=>e.jsx(l,{copy:r(s(t.locale)),variant:"ghost",includeSplit:!1})},h={name:"Petite taille",parameters:i("import { Button } from 'd-ui';",`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>`),render:(o,{globals:t})=>{const n=r(s(t.locale));return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(l,{copy:n,size:"sm"}),e.jsx(l,{copy:n,variant:"secondary",size:"sm"}),e.jsx(l,{copy:n,variant:"ghost",size:"sm",includeSplit:!1})]})}},f={name:"Pleine largeur",parameters:i("import { Button } from 'd-ui';",`<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>`),render:(o,{globals:t})=>{const n=r(s(t.locale));return e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx(E,{children:e.jsx(a,{fullWidth:!0,children:n.fullWidthSingle})}),e.jsxs(E,{children:[e.jsx(a,{fullWidth:!0,variant:"secondary",children:n.fullWidthTwo}),e.jsx(a,{fullWidth:!0,variant:"secondary",children:n.fullWidthTwo})]}),e.jsxs(E,{children:[e.jsx(a,{fullWidth:!0,children:n.fullWidthSingle}),e.jsx(a,{variant:"ghost",children:n.button})]})]})}},b={name:"Chargement",parameters:i("import { Button, IconButton } from 'd-ui';",`<Button loading>Enregistrement</Button>
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
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />`,x),render:(o,{globals:t})=>{const n=r(s(t.locale));return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(S,{children:[e.jsx(a,{loading:!0,children:n.saving}),e.jsx(a,{loading:!0,variant:"secondary",children:n.saving}),e.jsx(a,{loading:!0,variant:"ghost",children:n.saving}),e.jsx(y,{loading:!0,icon:e.jsx(I,{}),"aria-label":n.add})]}),e.jsxs(S,{children:[e.jsx(a,{loading:!0,loadingIndicator:"bounce",children:n.saving}),e.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"secondary",children:n.saving}),e.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"ghost",children:n.saving}),e.jsx(y,{loading:!0,loadingIndicator:"bounce",icon:e.jsx(I,{}),"aria-label":n.add})]})]})}},v={name:"Icône seule",parameters:i("import { IconButton } from 'd-ui';",'<IconButton icon={plus} aria-label="Ajouter" />',x),render:(o,{globals:t})=>{const n=r(s(t.locale));return e.jsx(y,{icon:e.jsx(I,{}),"aria-label":n.add})}};var _,N,T;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Par défaut',
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var L,A,R;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(A=p.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var F,U,z;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(U=m.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var q,D,k;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(k=(D=g.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var M,V,O;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(V=B.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var $,H,G;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(H=h.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Icône seule',
  parameters: componentSource("import { IconButton } from 'd-ui';", '<IconButton icon={plus} aria-label="Ajouter" />', plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  }
}`,...(te=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Ie=["Primary","HighEmphasis","MediumEmphasis","Toggled","LowEmphasis","SmallSize","FullWidth","Loading","IconOnly"],Ce=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:f,HighEmphasis:p,IconOnly:v,Loading:b,LowEmphasis:B,MediumEmphasis:m,Primary:d,SmallSize:h,Toggled:g,__namedExportsOrder:Ie,default:je},Symbol.toStringTag,{value:"Module"}));export{Ce as B,f as F,p as H,v as I,B as L,m as M,h as S,g as T,b as a};
