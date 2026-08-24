import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Button-Cg5X55M0.js";import{c as F}from"./cx-2dOUpm6k.js";const H={sm:"h-8 w-8 px-0",md:"h-10 w-10 px-0",lg:"h-12 w-12 px-0"};function D({icon:R,size:l="md",className:T,...V}){return e.jsx(r,{...V,size:l,icon:R,className:F(H[l],T)})}D.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};function m(){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const U={title:"Components/Button",component:r,tags:["autodocs"],args:{children:"Continuer"}},s={},o={args:{variant:"secondary"}},n={args:{variant:"ghost"}},a={args:{disabled:!0}},t={args:{loading:!0,children:"Enregistrement"}},c={args:{icon:e.jsx(m,{}),children:"Ajouter"}},i={args:{icon:e.jsx(m,{}),iconPosition:"end",children:"Ajouter"}},d={render:()=>e.jsx(D,{icon:e.jsx(m,{}),"aria-label":"Ajouter"})},u={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{size:"sm",children:"Petit"}),e.jsx(r,{size:"md",children:"Moyen"}),e.jsx(r,{size:"lg",children:"Grand"})]})};var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,j,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var I,S,f;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var B,v,P;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(P=(v=a.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var z,b,A;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Enregistrement'
  }
}`,...(A=(b=t.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var E,w,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    icon: <PlusIcon />,
    children: 'Ajouter'
  }
}`,...(N=(w=c.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var W,C,G;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    icon: <PlusIcon />,
    iconPosition: 'end',
    children: 'Ajouter'
  }
}`,...(G=(C=i.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var M,O,_;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <IconButton icon={<PlusIcon />} aria-label="Ajouter" />
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var k,q,L;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button size="sm">Petit</Button>
      <Button size="md">Moyen</Button>
      <Button size="lg">Grand</Button>
    </div>
}`,...(L=(q=u.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};const X=["Primary","Secondary","Ghost","Disabled","Loading","WithIcon","WithIconEnd","IconOnly","Sizes"];export{a as Disabled,n as Ghost,d as IconOnly,t as Loading,s as Primary,o as Secondary,u as Sizes,c as WithIcon,i as WithIconEnd,X as __namedExportsOrder,U as default};
