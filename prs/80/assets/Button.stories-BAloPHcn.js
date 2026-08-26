import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as S,b as s,d as r}from"./docs-locale-C57-gmqy.js";const un={primary:"bg-brand text-on-brand hover:bg-brand-hover",secondary:"bg-surface-muted text-fg border border-border hover:bg-surface-hover",ghost:"bg-transparent text-fg hover:bg-surface-muted"},pn={sm:"h-8 px-3 text-sm",md:"h-10 px-4 text-base",lg:"h-12 px-5 text-lg"};function gn(){return n.jsx("span",{className:"d-ui-button-spinner","aria-hidden":"true"})}function mn(){return n.jsxs("span",{className:"d-ui-button-bounce","aria-hidden":"true",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]})}function C({children:t}){return n.jsx("span",{className:"inline-flex shrink-0","aria-hidden":"true",children:t})}const hn={secondary:"bg-surface-hover border-brand",ghost:"bg-surface-muted"};function a({variant:t="primary",size:o="md",type:e="button",className:l,disabled:on,loading:c=!1,loadingIndicator:tn="spinner",icon:y,iconPosition:E="start",fullWidth:an=!1,isSelected:w,children:sn,...rn}){const ln=!!(on||c),cn=!c&&y&&E==="start",dn=!c&&y&&E==="end";return n.jsxs("button",{...rn,type:e,disabled:ln,"aria-busy":c||void 0,"aria-pressed":typeof w=="boolean"?w:void 0,className:S("inline-flex items-center justify-center gap-2 rounded-md font-medium","transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg","disabled:pointer-events-none disabled:opacity-50",un[t],pn[o],an&&"w-full min-w-0",w?hn[t]:void 0,l),children:[c?tn==="bounce"?n.jsx(mn,{}):n.jsx(gn,{}):null,cn?n.jsx(C,{children:y}):null,sn,dn?n.jsx(C,{children:y}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:'Emphasis. `"primary"` is high, `"secondary"` is medium, `"ghost"` is low.\nThere should not be more than one high-emphasis button in a view.',defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` when space is constrained. `"md"` by default. `"lg"` for spacious actions.',defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Replaces the icon with a loading indicator and sets `aria-busy`. The label stays visible.",defaultValue:{value:"false",computed:!1}},loadingIndicator:{required:!1,tsType:{name:"union",raw:"'spinner' | 'bounce'",elements:[{name:"literal",value:"'spinner'"},{name:"literal",value:"'bounce'"}]},description:'`"spinner"` (default) or `"bounce"` (three dots). Only used when `loading` is set.',defaultValue:{value:"'spinner'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Stretch to the width of the container.",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"Toggle state for medium/low emphasis (subscribe, notification on/off).\nSets `aria-pressed`. If the label already changes with the state, that is enough\nfor the name; `aria-pressed` still exposes the pressed state."},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const Bn={sm:"h-8 w-8 px-0",md:"h-10 w-10 px-0",lg:"h-12 w-12 px-0"};function v({icon:t,size:o="md",className:e,...l}){return n.jsx(a,{...l,size:o,icon:t,className:S(Bn[o],e)})}v.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible name. Required because the button has no visible text."},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function x(){return n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}function en(){return n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function j({children:t}){return n.jsx("div",{className:"flex flex-wrap items-center gap-4",children:t})}function I({children:t}){return n.jsx("div",{className:"flex w-full items-center gap-4",children:t})}function bn({copy:t,variant:o,size:e}){return n.jsx(a,{variant:o,size:e,icon:n.jsx(en,{}),iconPosition:"end","aria-haspopup":"true","aria-expanded":!1,children:t.dropdown})}function fn({copy:t,variant:o,size:e}){return n.jsxs("div",{className:"inline-flex overflow-hidden rounded-md",children:[n.jsx(a,{variant:o,size:e,className:"rounded-none",children:t.split}),n.jsx("span",{className:S("w-px shrink-0 self-stretch",o==="secondary"||o==="ghost"?"bg-border":"bg-on-brand/30"),"aria-hidden":"true"}),n.jsx(v,{variant:o,size:e,icon:n.jsx(en,{}),"aria-label":t.moreActions,"aria-haspopup":"true","aria-expanded":!1,className:"rounded-none"})]})}function i({copy:t,variant:o,size:e,includeSplit:l=!0}){return n.jsxs(j,{children:[n.jsx(a,{variant:o,size:e,children:t.default}),n.jsx(a,{variant:o,size:e,disabled:!0,children:t.disabled}),n.jsx(a,{variant:o,size:e,loading:!0,children:t.saving}),n.jsx(a,{variant:o,size:e,icon:n.jsx(x,{}),children:t.withIcon}),n.jsx(bn,{copy:t,variant:o,size:e}),l?n.jsx(fn,{copy:t,variant:o,size:e}):null]})}const vn={title:"Components/Button",component:a,argTypes:{variant:{control:"inline-radio",options:["primary","secondary","ghost"],description:"Emphasis: primary (high), secondary (medium), ghost (low)."},size:{control:"inline-radio",options:["sm","md","lg"],description:"Use sm when space is constrained."},loading:{control:"boolean",description:"Shows a loading indicator, keeps the label, sets aria-busy, and disables the control."},loadingIndicator:{control:"inline-radio",options:["spinner","bounce"],description:"Spinner (default) or bounce dots. Used when loading is true."},iconPosition:{control:"inline-radio",options:["start","end"]},fullWidth:{control:"boolean",description:"Stretch to the container width."},isSelected:{control:"boolean",description:"Toggle state for medium/low emphasis. Sets aria-pressed."},disabled:{control:"boolean"}},parameters:{controls:{include:["children","variant","size","disabled","loading","loadingIndicator","iconPosition","fullWidth","isSelected"]}}},d={render:(t,{globals:o})=>{const e=s(r(o.locale));return n.jsx(a,{...t,children:t.children??e.continue})}},u={parameters:{docs:{source:{code:`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
<Button icon={<PlusIcon />}>Avec icône</Button>
<Button icon={<ChevronIcon />} iconPosition="end" aria-haspopup="true">
  Menu
</Button>`}}},render:(t,{globals:o})=>n.jsx(i,{copy:s(r(o.locale))})},p={parameters:{docs:{source:{code:`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>Désactivé</Button>
<Button variant="secondary" loading>Enregistrement</Button>
<Button variant="secondary" icon={<PlusIcon />}>Avec icône</Button>`}}},render:(t,{globals:o})=>n.jsx(i,{copy:s(r(o.locale)),variant:"secondary"})},g={parameters:{docs:{source:{code:`<Button variant="secondary">S'abonner</Button>
<Button variant="secondary" isSelected>
  Abonné
</Button>`}}},render:(t,{globals:o})=>{const e=s(r(o.locale));return n.jsxs(j,{children:[n.jsx(a,{variant:"secondary",children:e.subscribe}),n.jsx(a,{variant:"secondary",isSelected:!0,children:e.subscribed})]})}},m={parameters:{docs:{source:{code:`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>Désactivé</Button>
<Button variant="ghost" loading>Enregistrement</Button>
<Button variant="ghost" icon={<PlusIcon />}>Avec icône</Button>`}}},render:(t,{globals:o})=>n.jsx(i,{copy:s(r(o.locale)),variant:"ghost",includeSplit:!1})},h={parameters:{docs:{source:{code:`<Button size="sm">Par défaut</Button>
<Button size="sm" variant="secondary">Par défaut</Button>
<Button size="sm" variant="ghost">Par défaut</Button>`}}},render:(t,{globals:o})=>{const e=s(r(o.locale));return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(i,{copy:e,size:"sm"}),n.jsx(i,{copy:e,variant:"secondary",size:"sm"}),n.jsx(i,{copy:e,variant:"ghost",size:"sm",includeSplit:!1})]})}},B={parameters:{docs:{source:{code:`<Button fullWidth>Bouton pleine largeur</Button>
<div className="flex w-full gap-4">
  <Button fullWidth variant="secondary">Deux boutons pleine largeur</Button>
  <Button fullWidth variant="secondary">Deux boutons pleine largeur</Button>
</div>`}}},render:(t,{globals:o})=>{const e=s(r(o.locale));return n.jsxs("div",{className:"flex w-full flex-col gap-4",children:[n.jsx(I,{children:n.jsx(a,{fullWidth:!0,children:e.fullWidthSingle})}),n.jsxs(I,{children:[n.jsx(a,{fullWidth:!0,variant:"secondary",children:e.fullWidthTwo}),n.jsx(a,{fullWidth:!0,variant:"secondary",children:e.fullWidthTwo})]}),n.jsxs(I,{children:[n.jsx(a,{fullWidth:!0,children:e.fullWidthSingle}),n.jsx(a,{variant:"ghost",children:e.button})]})]})}},b={parameters:{docs:{source:{code:`<Button loading>Enregistrement</Button>
<Button loading variant="secondary">Enregistrement</Button>
<Button loading variant="ghost">Enregistrement</Button>
<IconButton loading icon={<PlusIcon />} aria-label="Ajouter" />
<Button loading loadingIndicator="bounce">Enregistrement</Button>
<Button loading loadingIndicator="bounce" variant="secondary">Enregistrement</Button>
<Button loading loadingIndicator="bounce" variant="ghost">Enregistrement</Button>
<IconButton loading loadingIndicator="bounce" icon={<PlusIcon />} aria-label="Ajouter" />`}}},render:(t,{globals:o})=>{const e=s(r(o.locale));return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs(j,{children:[n.jsx(a,{loading:!0,children:e.saving}),n.jsx(a,{loading:!0,variant:"secondary",children:e.saving}),n.jsx(a,{loading:!0,variant:"ghost",children:e.saving}),n.jsx(v,{loading:!0,icon:n.jsx(x,{}),"aria-label":e.add})]}),n.jsxs(j,{children:[n.jsx(a,{loading:!0,loadingIndicator:"bounce",children:e.saving}),n.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"secondary",children:e.saving}),n.jsx(a,{loading:!0,loadingIndicator:"bounce",variant:"ghost",children:e.saving}),n.jsx(v,{loading:!0,loadingIndicator:"bounce",icon:n.jsx(x,{}),"aria-label":e.add})]})]})}},f={render:(t,{globals:o})=>{const e=s(r(o.locale));return n.jsx(v,{icon:n.jsx(x,{}),"aria-label":e.add})}};var P,W,_;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <Button {...args}>{args.children ?? copy.continue}</Button>;
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var N,T,R;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Button>Par défaut</Button>
<Button disabled>Désactivé</Button>
<Button loading>Enregistrement</Button>
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
}`,...(R=(T=u.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var L,U,z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="secondary">Par défaut</Button>
<Button variant="secondary" disabled>Désactivé</Button>
<Button variant="secondary" loading>Enregistrement</Button>
<Button variant="secondary" icon={<PlusIcon />}>Avec icône</Button>\`
      }
    }
  },
  render: (_, {
    globals
  }) => <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} variant="secondary" />
}`,...(z=(U=p.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var A,q,D;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(q=g.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var k,F,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="ghost">Par défaut</Button>
<Button variant="ghost" disabled>Désactivé</Button>
<Button variant="ghost" loading>Enregistrement</Button>
<Button variant="ghost" icon={<PlusIcon />}>Avec icône</Button>\`
      }
    }
  },
  render: (_, {
    globals
  }) => <EmphasisUseCases copy={buttonCopy(docsLocale(globals.locale))} variant="ghost" includeSplit={false} />
}`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,O,H;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(H=(O=h.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var G,J,K;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=B.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<Button loading>Enregistrement</Button>
<Button loading variant="secondary">Enregistrement</Button>
<Button loading variant="ghost">Enregistrement</Button>
<IconButton loading icon={<PlusIcon />} aria-label="Ajouter" />
<Button loading loadingIndicator="bounce">Enregistrement</Button>
<Button loading loadingIndicator="bounce" variant="secondary">Enregistrement</Button>
<Button loading loadingIndicator="bounce" variant="ghost">Enregistrement</Button>
<IconButton loading loadingIndicator="bounce" icon={<PlusIcon />} aria-label="Ajouter" />\`
      }
    }
  },
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
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,nn;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: (_, {
    globals
  }) => {
    const copy = buttonCopy(docsLocale(globals.locale));
    return <IconButton icon={<PlusIcon />} aria-label={copy.add} />;
  }
}`,...(nn=($=f.parameters)==null?void 0:$.docs)==null?void 0:nn.source}}};const yn=["Primary","HighEmphasis","MediumEmphasis","Toggled","LowEmphasis","SmallSize","FullWidth","Loading","IconOnly"],wn=Object.freeze(Object.defineProperty({__proto__:null,FullWidth:B,HighEmphasis:u,IconOnly:f,Loading:b,LowEmphasis:m,MediumEmphasis:p,Primary:d,SmallSize:h,Toggled:g,__namedExportsOrder:yn,default:vn},Symbol.toStringTag,{value:"Module"}));export{wn as B,B as F,u as H,f as I,m as L,p as M,h as S,g as T,b as a,v as b};
