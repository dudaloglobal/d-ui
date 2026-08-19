import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as _}from"./cx-2dOUpm6k.js";const q={primary:"bg-brand text-on-brand hover:bg-brand-hover",secondary:"bg-surface-muted text-fg border border-border hover:bg-surface-hover",ghost:"bg-transparent text-fg hover:bg-surface-muted"},V={sm:"h-8 px-3 text-sm",md:"h-10 px-4 text-base",lg:"h-12 px-5 text-lg"};function r({variant:B="primary",size:S="md",type:j="button",className:C,disabled:G,children:N,...P}){return e.jsx("button",{type:j,disabled:G,className:_("inline-flex items-center justify-center gap-2 rounded-md font-medium","transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg","disabled:pointer-events-none disabled:opacity-50",q[B],V[S],C),...P,children:N})}r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const E={title:"Components/Button",component:r,tags:["autodocs"],args:{children:"Continuer"}},s={},a={args:{variant:"secondary"}},t={args:{variant:"ghost"}},o={args:{disabled:!0}},n={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{size:"sm",children:"Petit"}),e.jsx(r,{size:"md",children:"Moyen"}),e.jsx(r,{size:"lg",children:"Grand"})]})};var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,b,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,h,z;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button size="sm">Petit</Button>
      <Button size="md">Moyen</Button>
      <Button size="lg">Grand</Button>
    </div>
}`,...(z=(h=n.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const M=["Primary","Secondary","Ghost","Disabled","Sizes"];export{o as Disabled,t as Ghost,s as Primary,a as Secondary,n as Sizes,M as __namedExportsOrder,E as default};
