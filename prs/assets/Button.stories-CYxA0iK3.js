import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as j,b as a,d as r}from"./docs-locale-C57-gmqy.js";const ce={primary:"bg-brand text-on-brand hover:bg-brand-hover",secondary:"bg-surface-muted text-fg border border-border hover:bg-surface-hover",ghost:"bg-transparent text-fg hover:bg-surface-muted"},de={sm:"h-8 px-3 text-sm",md:"h-10 px-4 text-base",lg:"h-12 px-5 text-lg"};function ue(){return e.jsx("span",{className:"d-ui-button-spinner","aria-hidden":"true"})}function C({children:o}){return e.jsx("span",{className:"inline-flex shrink-0","aria-hidden":"true",children:o})}const pe={secondary:"bg-surface-hover border-brand",ghost:"bg-surface-muted"};function s({variant:o="primary",size:n="md",type:t="button",className:l,disabled:oe,loading:c=!1,icon:v,iconPosition:S="start",fullWidth:te=!1,isSelected:B,children:se,...ae}){const re=!!(oe||c),ie=!c&&v&&S==="start",le=!c&&v&&S==="end";return e.jsxs("button",{...ae,type:t,disabled:re,"aria-busy":c||void 0,"aria-pressed":typeof B=="boolean"?B:void 0,className:j("inline-flex items-center justify-center gap-2 rounded-md font-medium","transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg","disabled:pointer-events-none disabled:opacity-50",ce[o],de[n],te&&"w-full min-w-0",B?pe[o]:void 0,l),children:[c?e.jsx(ue,{}):null,ie?e.jsx(C,{children:v}):null,se,le?e.jsx(C,{children:v}):null]})}s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:'Emphasis. `"primary"` is high, `"secondary"` is medium, `"ghost"` is low.\nThere should not be more than one high-emphasis button in a view.',defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` when space is constrained. `"md"` by default. `"lg"` for spacious actions.',defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Replaces the icon with a spinner and sets `aria-busy`. The label stays visible.",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Stretch to the width of the container.",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"Toggle state for medium/low emphasis (subscribe, notification on/off).\nSets `aria-pressed`. If the label already changes with the state, that is enough\nfor the name; `aria-pressed` still exposes the pressed state."},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const me={sm:"h-8 w-8 px-0",md:"h-10 w-10 px-0",lg:"h-12 w-12 px-0"};function w({icon:o,size:n="md",className:t,...l}){return e.jsx(s,{...l,size:n,icon:o,className:j(me[n],t)})}w.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible name. Required because the button has no visible text."},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function $(){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function ee(){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function ne({children:o}){return e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:o})}function x({children:o}){return e.jsx("div",{className:"flex w-full items-center gap-4",children:o})}function he({copy:o,variant:n,size:t}){return e.jsx(s,{variant:n,size:t,icon:e.jsx(ee,{}),iconPosition:"end","aria-haspopup":"true","aria-expanded":!1,children:o.dropdown})}function fe({copy:o,variant:n,size:t}){return e.jsxs("div",{className:"inline-flex overflow-hidden rounded-md",children:[e.jsx(s,{variant:n,size:t,className:"rounded-none",children:o.split}),e.jsx("span",{className:j("w-px shrink-0 self-stretch",n==="secondary"||n==="ghost"?"bg-border":"bg-on-brand/30"),"aria-hidden":"true"}),e.jsx(w,{variant:n,size:t,icon:e.jsx(ee,{}),"aria-label":o.moreActions,"aria-haspopup":"true","aria-expanded":!1,className:"rounded-none"})]})}function i({copy:o,variant:n,size:t,includeSplit:l=!0}){return e.jsxs(ne,{children:[e.jsx(s,{variant:n,size:t,children:o.default}),e.jsx(s,{variant:n,size:t,disabled:!0,children:o.disabled}),e.jsx(s,{variant:n,size:t,icon:e.jsx($,{}),children:o.withIcon}),e.jsx(he,{copy:o,variant:n,size:t}),l?e.jsx(fe,{copy:o,variant:n,size:t}):null]})}const ge={title:"Components/Button",component:s,argTypes:{variant:{control:"inline-radio",options:["primary","secondary","ghost"],description:"Emphasis: primary (high), secondary (medium), ghost (low)."},size:{control:"inline-radio",options:["sm","md","lg"],description:"Use sm when space is constrained."},loading:{control:"boolean",description:"Shows a spinner, keeps the label, sets aria-busy, and disables the control."},iconPosition:{control:"inline-radio",options:["start","end"]},fullWidth:{control:"boolean",description:"Stretch to the container width."},isSelected:{control:"boolean",description:"Toggle state for medium/low emphasis. Sets aria-pressed."},disabled:{control:"boolean"}},parameters:{controls:{include:["children","variant","size","disabled","loading","iconPosition","fullWidth","isSelected"]}}},d={render:(o,{globals:n})=>{const t=a(r(n.locale));return e.jsx(s,{...o,children:o.children??t.continue})}},u={parameters:{docs:{source:{code:`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button icon={<PlusIcon />}>Avec icône</Button>
<Button icon={<ChevronIcon />} iconPosition="end" aria-haspopup="true">
  Menu
</Button>`}}},render:(o,{globals:n})=>e.jsx(i,{copy:a(r(n.locale))})},p={parameters:{docs:{source:{code:`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>Désactivé</Button>
<Button variant="secondary" icon={<PlusIcon />}>Avec icône</Button>`}}},render:(o,{globals:n})=>e.jsx(i,{copy:a(r(n.locale)),variant:"secondary"})},m={parameters:{docs:{source:{code:`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`}}},render:(o,{globals:n})=>{const t=a(r(n.locale));return e.jsxs(ne,{children:[e.jsx(s,{variant:"secondary",children:t.subscribe}),e.jsx(s,{variant:"secondary",isSelected:!0,children:t.subscribed})]})}},h={parameters:{docs:{source:{code:`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>Désactivé</Button>
<Button variant="ghost" icon={<PlusIcon />}>Avec icône</Button>`}}},render:(o,{globals:n})=>e.jsx(i,{copy:a(r(n.locale)),variant:"ghost",includeSplit:!1})},f={parameters:{docs:{source:{code:`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">Par défaut</Button>
<Button size="sm" variant="ghost">Par défaut</Button>`}}},render:(o,{globals:n})=>{const t=a(r(n.locale));return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(i,{copy:t,size:"sm"}),e.jsx(i,{copy:t,variant:"secondary",size:"sm"}),e.jsx(i,{copy:t,variant:"ghost",size:"sm",includeSplit:!1})]})}},g={parameters:{docs:{source:{code:`<Button fullWidth>Bouton pleine largeur</Button>
<div className="flex w-full gap-4">
  <Button fullWidth variant="secondary">Deux boutons pleine largeur</Button>
  <Button fullWidth variant="secondary">Deux boutons pleine largeur</Button>
</div>`}}},render:(o,{globals:n})=>{const t=a(r(n.locale));return e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx(x,{children:e.jsx(s,{fullWidth:!0,children:t.fullWidthSingle})}),e.jsxs(x,{children:[e.jsx(s,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo}),e.jsx(s,{fullWidth:!0,variant:"secondary",children:t.fullWidthTwo})]}),e.jsxs(x,{children:[e.jsx(s,{fullWidth:!0,children:t.fullWidthSingle}),e.jsx(s,{variant:"ghost",children:t.button})]})]})}},b={render:(o,{globals:n})=>{const t=a(r(n.locale));return e.jsx(s,{...o,loading:!0,children:t.saving})}},y={render:(o,{globals:n})=>{const t=a(r(n.locale));return e.jsx(w,{icon:e.jsx($,{}),"aria-label":t.add})}};var W,P,I;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var _,T,N;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button icon={<PlusIcon />}>Avec icône</Button>
<Button icon={<ChevronIcon />} iconPosition="end" aria-haspopup="true">
  Menu
</Button>\`
      }
    }
  },
  render: (_, {
    globals
  }) => <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} />
}`,...(N=(T=u.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var E,L,z;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>Désactivé</Button>
<Button variant="secondary" icon={<PlusIcon />}>Avec icône</Button>\`
      }
    }
  },
  render: (_, {
    globals
  }) => <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} variant="secondary" />
}`,...(z=(L=p.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var R,q,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>\`
      }
    }
  },
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
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var U,k,A;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>Désactivé</Button>
<Button variant="ghost" icon={<PlusIcon />}>Avec icône</Button>\`
      }
    }
  },
  render: (_, {
    globals
  }) => <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} variant="ghost" includeSplit={false} />
}`,...(A=(k=h.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,M,V;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">Par défaut</Button>
<Button size="sm" variant="ghost">Par défaut</Button>\`
      }
    }
  },
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
}`,...(V=(M=f.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var O,H,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Button fullWidth>Bouton pleine largeur</Button>
<div className="flex w-full gap-4">
  <Button fullWidth variant="secondary">Deux boutons pleine largeur</Button>
  <Button fullWidth variant="secondary">Deux boutons pleine largeur</Button>
</div>\`
      }
    }
  },
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
}`,...(G=(H=g.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args} loading>
        {copy.saving}
      </Button>;
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const be=["Primary","HighEmphasis","MediumEmphasis","Toggled","LowEmphasis","SmallSize","FullWidth","Loading","IconOnly"],Be=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:g,HighEmphasis:u,IconOnly:y,Loading:b,LowEmphasis:h,MediumEmphasis:p,Primary:d,SmallSize:f,Toggled:m,__namedExportsOrder:be,default:ge},Symbol.toStringTag,{value:"Module"}));export{Be as B,g as F,u as H,y as I,h as L,p as M,f as S,m as T,w as a};
