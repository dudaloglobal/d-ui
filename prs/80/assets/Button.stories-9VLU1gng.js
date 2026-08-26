import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as K}from"./cx-2dOUpm6k.js";const re={primary:"bg-brand text-on-brand hover:bg-brand-hover",secondary:"bg-surface-muted text-fg border border-border hover:bg-surface-hover",ghost:"bg-transparent text-fg hover:bg-surface-muted"},se={sm:"h-8 px-3 text-sm",md:"h-10 px-4 text-base",lg:"h-12 px-5 text-lg"};function ae(){return e.jsx("span",{className:"d-ui-button-spinner","aria-hidden":"true"})}function b({children:s}){return e.jsx("span",{className:"inline-flex shrink-0","aria-hidden":"true",children:s})}function r({variant:s="primary",size:n="md",type:f="button",className:h,disabled:U,loading:a=!1,icon:t,iconPosition:v="start",children:X,...Y}){const Z=!!(U||a),$=!a&&t&&v==="start",ee=!a&&t&&v==="end";return e.jsxs("button",{...Y,type:f,disabled:Z,"aria-busy":a||void 0,className:K("inline-flex items-center justify-center gap-2 rounded-md font-medium","transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg","disabled:pointer-events-none disabled:opacity-50",re[s],se[n],h),children:[a?e.jsx(ae,{}):null,$?e.jsx(b,{children:t}):null,X,ee?e.jsx(b,{children:t}):null]})}r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const ne={sm:"h-8 w-8 px-0",md:"h-10 w-10 px-0",lg:"h-12 w-12 px-0"};function Q({icon:s,size:n="md",className:f,...h}){return e.jsx(r,{...h,size:n,icon:s,className:K(ne[n],f)})}Q.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function x(){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const ie={title:"Components/Button",component:r,tags:["autodocs"],args:{children:"Continuer"}},o={},i={args:{variant:"secondary"}},c={args:{variant:"ghost"}},d={args:{disabled:!0}},l={args:{loading:!0,children:"Enregistrement"}},u={args:{icon:e.jsx(x,{}),children:"Ajouter"}},m={args:{icon:e.jsx(x,{}),iconPosition:"end",children:"Ajouter"}},p={render:()=>e.jsx(Q,{icon:e.jsx(x,{}),"aria-label":"Ajouter"})},g={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{size:"sm",children:"Petit"}),e.jsx(r,{size:"md",children:"Moyen"}),e.jsx(r,{size:"lg",children:"Grand"})]})};var y,j,I;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(I=(j=o.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,B,z;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(z=(B=i.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var w,N,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var q,E,T;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var A,C,V;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Enregistrement'
  }
}`,...(V=(C=l.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var _,W,k;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    icon: <PlusIcon />,
    children: 'Ajouter'
  }
}`,...(k=(W=u.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var G,M,O;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    icon: <PlusIcon />,
    iconPosition: 'end',
    children: 'Ajouter'
  }
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var D,L,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <IconButton icon={<PlusIcon />} aria-label="Ajouter" />
}`,...(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var F,H,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button size="sm">Petit</Button>
      <Button size="md">Moyen</Button>
      <Button size="lg">Grand</Button>
    </div>
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ce=["Primary","Secondary","Ghost","Disabled","Loading","WithIcon","WithIconEnd","IconOnly","Sizes"];export{d as Disabled,c as Ghost,p as IconOnly,l as Loading,o as Primary,i as Secondary,g as Sizes,u as WithIcon,m as WithIconEnd,ce as __namedExportsOrder,ie as default};
