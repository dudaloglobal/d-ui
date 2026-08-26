import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as i,p as x,a as mn}from"./docs-source-C_O40UCi.js";import{c as C,b as r,d as s}from"./docs-locale-u_wANLWo.js";const gn={primary:"bg-brand text-on-brand hover:bg-brand-hover",secondary:"bg-surface-muted text-fg border border-border hover:bg-surface-hover",ghost:"bg-transparent text-fg hover:bg-surface-muted"},hn={sm:"h-8 px-3 text-sm",md:"h-10 px-4 text-base",lg:"h-12 px-5 text-lg"};function Bn(){return n.jsx("span",{className:"d-ui-button-spinner","aria-hidden":"true"})}function fn(){return n.jsxs("span",{className:"d-ui-button-bounce","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]})}function P({children:t}){return n.jsx("span",{className:"inline-flex shrink-0","aria-hidden":"true",children:t})}const bn={secondary:"bg-surface-hover border-brand",ghost:"bg-surface-muted"};function a({variant:t="primary",size:o="md",type:e="button",className:u,disabled:an,loading:c=!1,loadingIndicator:rn="spinner",icon:j,iconPosition:W="start",fullWidth:sn=!1,isSelected:w,children:ln,...un}){const cn=!!(an||c),dn=!c&&j&&W==="start",pn=!c&&j&&W==="end";return n.jsxs("button",{...un,type:e,disabled:cn,"aria-busy":c||void 0,"aria-pressed":typeof w=="boolean"?w:void 0,className:C("inline-flex items-center justify-center gap-2 rounded-md font-medium","transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg","disabled:pointer-events-none disabled:opacity-50",gn[t],hn[o],sn&&"w-full min-w-0",w?bn[t]:void 0,u),children:[c?rn==="bounce"?n.jsx(fn,{}):n.jsx(Bn,{}):null,dn?n.jsx(P,{children:j}):null,ln,pn?n.jsx(P,{children:j}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:'Emphasis. `"primary"` is high, `"secondary"` is medium, `"ghost"` is low.\nThere should not be more than one high-emphasis button in a view.',defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` when space is constrained. `"md"` by default. `"lg"` for spacious actions.',defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Replaces the icon with a loading indicator and sets `aria-busy`. The label stays visible.",defaultValue:{value:"false",computed:!1}},loadingIndicator:{required:!1,tsType:{name:"union",raw:"'spinner' | 'bounce'",elements:[{name:"literal",value:"'spinner'"},{name:"literal",value:"'bounce'"}]},description:'`"spinner"` (default) or `"bounce"` (three dots). Only used when `loading` is set.',defaultValue:{value:"'spinner'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Stretch to the width of the container.",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"Toggle state for medium/low emphasis (subscribe, notification on/off).\nSets `aria-pressed`. If the label already changes with the state, that is enough\nfor the name; `aria-pressed` still exposes the pressed state."},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const vn={sm:"h-8 w-8 px-0",md:"h-10 w-10 px-0",lg:"h-12 w-12 px-0"};function y({icon:t,size:o="md",className:e,...u}){return n.jsx(a,{...u,size:o,icon:t,className:C(vn[o],e)})}y.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible name. Required because the button has no visible text."},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function I(){return n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function tn(){return n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function S({children:t}){return n.jsx("div",{className:"flex flex-wrap items-center gap-4",children:t})}function E({children:t}){return n.jsx("div",{className:"flex w-full items-center gap-4",children:t})}function yn({copy:t,variant:o,size:e}){return n.jsx(a,{variant:o,size:e,icon:n.jsx(tn,{}),iconPosition:"end","aria-haspopup":"true","aria-expanded":!1,children:t.dropdown})}function xn({copy:t,variant:o,size:e}){return n.jsxs("div",{className:"inline-flex overflow-hidden rounded-md",children:[n.jsx(a,{variant:o,size:e,className:"rounded-none",children:t.split}),n.jsx("span",{className:C("w-px shrink-0 self-stretch",o==="secondary"||o==="ghost"?"bg-border":"bg-on-brand/30"),"aria-hidden":"true"}),n.jsx(y,{variant:o,size:e,icon:n.jsx(tn,{}),"aria-label":t.moreActions,"aria-haspopup":"true","aria-expanded":!1,className:"rounded-none"})]})}function l({copy:t,variant:o,size:e,includeSplit:u=!0}){return n.jsxs(S,{children:[n.jsx(a,{variant:o,size:e,children:t.default}),n.jsx(a,{variant:o,size:e,disabled:!0,children:t.disabled}),n.jsx(a,{variant:o,size:e,loading:!0,children:t.saving}),n.jsx(a,{variant:o,size:e,icon:n.jsx(I,{}),children:t.withIcon}),n.jsx(yn,{copy:t,variant:o,size:e}),u?n.jsx(xn,{copy:t,variant:o,size:e}):null]})}const jn={title:"Components/Button",component:a,argTypes:{variant:{control:"inline-radio",options:["primary","secondary","ghost"],description:"Emphasis: primary (high), secondary (medium), ghost (low)."},size:{control:"inline-radio",options:["sm","md","lg"],description:"Use sm when space is constrained."},loading:{control:"boolean",description:"Shows a loading indicator, keeps the label, sets aria-busy, and disables the control."},loadingIndicator:{control:"inline-radio",options:["spinner","bounce"],description:"Spinner (default) or bounce dots. Used when loading is true."},iconPosition:{control:"inline-radio",options:["start","end"]},fullWidth:{control:"boolean",description:"Stretch to the container width."},isSelected:{control:"boolean",description:"Toggle state for medium/low emphasis. Sets aria-pressed."},disabled:{control:"boolean"}},parameters:{controls:{include:["children","variant","size","disabled","loading","loadingIndicator","iconPosition","fullWidth","isSelected"]}}},d={render:(t,{globals:o})=>{const e=r(s(o.locale));return n.jsx(a,{...t,children:t.children??e.continue})}},p={parameters:i("import { Button, IconButton } from 'd-ui';",`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={plus}>Avec icône</Button>
<Button icon={chevron} iconPosition="end" aria-haspopup="true">
  Menu
</Button>
<Button>Fractionné</Button>
<IconButton icon={chevron} aria-label="Plus d'actions" aria-haspopup="true" />
<IconButton icon={plus} aria-label="Ajouter" />`,`${x}

${mn}`),render:(t,{globals:o})=>n.jsx(l,{copy:r(s(o.locale))})},m={parameters:i("import { Button } from 'd-ui';",`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>
  Désactivé
</Button>
<Button variant="secondary" loading>
  Enregistrement
</Button>
<Button variant="secondary" icon={plus}>
  Avec icône
</Button>`,x),render:(t,{globals:o})=>n.jsx(l,{copy:r(s(o.locale)),variant:"secondary"})},g={parameters:i("import { Button } from 'd-ui';",`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`),render:(t,{globals:o})=>{const e=r(s(o.locale));return n.jsxs(S,{children:[n.jsx(a,{variant:"secondary",children:e.subscribe}),n.jsx(a,{variant:"secondary",isSelected:!0,children:e.subscribed})]})}},h={parameters:i("import { Button } from 'd-ui';",`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>
  Désactivé
</Button>
<Button variant="ghost" loading>
  Enregistrement
</Button>
<Button variant="ghost" icon={plus}>
  Avec icône
</Button>`,x),render:(t,{globals:o})=>n.jsx(l,{copy:r(s(o.locale)),variant:"ghost",includeSplit:!1})},B={parameters:i("import { Button } from 'd-ui';",`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">
  Par défaut
</Button>
<Button size="sm" variant="ghost">
  Par défaut
</Button>`),render:(t,{globals:o})=>{const e=r(s(o.locale));return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(l,{copy:e,size:"sm"}),n.jsx(l,{copy:e,variant:"secondary",size:"sm"}),n.jsx(l,{copy:e,variant:"ghost",size:"sm",includeSplit:!1})]})}},f={parameters:i("import { Button } from 'd-ui';",`<Button fullWidth>Bouton pleine largeur</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>
<Button fullWidth variant="secondary">
  Deux boutons pleine largeur
</Button>`),render:(t,{globals:o})=>{const e=r(s(o.locale));return n.jsxs("div",{className:"flex w-full flex-col gap-4",children:[n.jsx(E,{children:n.jsx(a,{fullWidth:!0,children:e.fullWidthSingle})}),n.jsxs(E,{children:[n.jsx(a,{fullWidth:!0,variant:"secondary",children:e.fullWidthTwo}),n.jsx(a,{fullWidth:!0,variant:"secondary",children:e.fullWidthTwo})]}),n.jsxs(E,{children:[n.jsx(a,{fullWidth:!0,children:e.fullWidthSingle}),n.jsx(a,{variant:"ghost",children:e.button})]})]})}},b={parameters:i("import { Button, IconButton } from 'd-ui';",`<Button loading>Enregistrement</Button>
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
<IconButton loading loadingIndicator="bounce" icon={plus} aria-label="Ajouter" />`,x),render:(t,{globals:o})=>{const e=r(s(o.locale));return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs(S,{children:[n.jsx(a,{loading:!0,children:e.saving}),n.jsx(a,{loading:!0,variant:"secondary",children:e.saving}),n.jsx(a,{loading:!0,variant:"ghost",children:e.saving}),n.jsx(y,{loading:!0,icon:n.jsx(I,{}),"aria-label":e.add})]}),n.jsxs(S,{children:[n.jsx(a,{loading:!0,loadingIndicator:"bounce",children:e.saving}),n.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"secondary",children:e.saving}),n.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"ghost",children:e.saving}),n.jsx(y,{loading:!0,loadingIndicator:"bounce",icon:n.jsx(I,{}),"aria-label":e.add})]})]})}},v={parameters:i("import { IconButton } from 'd-ui';",'<IconButton icon={plus} aria-label="Ajouter" />',x),render:(t,{globals:o})=>{const e=r(s(o.locale));return n.jsx(y,{icon:n.jsx(I,{}),"aria-label":e.add})}};var _,T,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...(N=(T=d.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var R,A,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var U,z,q;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(z=m.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var D,F,k;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(F=g.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var M,V,O;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(V=h.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var $,H,G;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(H=B.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var nn,en,on;v.parameters={...v.parameters,docs:{...(nn=v.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  parameters: componentSource("import { IconButton } from 'd-ui';", '<IconButton icon={plus} aria-label="Ajouter" />', plusIconSource),
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  }
}`,...(on=(en=v.parameters)==null?void 0:en.docs)==null?void 0:on.source}}};const In=["Primary","HighEmphasis","MediumEmphasis","Toggled","LowEmphasis","SmallSize","FullWidth","Loading","IconOnly"],Cn=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:f,HighEmphasis:p,IconOnly:v,Loading:b,LowEmphasis:h,MediumEmphasis:m,Primary:d,SmallSize:B,Toggled:g,__namedExportsOrder:In,default:jn},Symbol.toStringTag,{value:"Module"}));export{Cn as B,f as F,p as H,v as I,h as L,m as M,B as S,g as T,b as a,y as b};
