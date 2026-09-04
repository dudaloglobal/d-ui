import{w as o,d as r,j as e}from"./iframe-PigAhWKn.js";import{m as q}from"./arg-types-BX1P8EmD.js";import{c as l}from"./docs-source-C_O40UCi.js";import{S as s,a as b}from"./Skeleton-D5rLONDE.js";const i="import { Skeleton, SkeletonText } from 'd-ui';",F={title:"Components/Skeleton",component:s,argTypes:q,parameters:{controls:{include:["shape","width","height","size"]}}};function d({label:t,children:a}){return e.jsx("div",{className:"flex justify-center p-6",children:e.jsx("div",{"aria-busy":"true","aria-label":t,className:"w-80",children:a})})}const c={name:"Par défaut",parameters:l(i,"<Skeleton height={16} />"),render:(t,{globals:a})=>{const n=o(r(a.locale));return e.jsx(d,{label:n.loading,children:e.jsx(s,{...t,height:t.height??16})})}},m={name:"Image et vidéo",parameters:l(i,`<>
    <Skeleton height={160} />
    <Skeleton height={160} className="aspect-video h-auto" />
</>`),render:(t,{globals:a})=>{const n=o(r(a.locale));return e.jsx(d,{label:n.loading,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{height:140}),e.jsxs("div",{className:"relative",children:[e.jsx(s,{className:"aspect-video h-auto"}),e.jsx("span",{"aria-hidden":"true",className:"border-fg/20 absolute inset-0 m-auto grid size-12 place-items-center rounded-full border-2",children:e.jsx("span",{className:"border-y-transparent border-l-fg/20 ms-1 border-y-6 border-l-10"})})]})]})})}},p={name:"Paragraphe",parameters:l(i,"<SkeletonText lines={4} />"),render:(t,{globals:a})=>{const n=o(r(a.locale));return e.jsx(d,{label:n.loading,children:e.jsx(b,{lines:4})})}},h={name:"Carte",parameters:l(i,`<div className="rounded-lg border p-4" aria-busy="true">
    <Skeleton height={120} />
    <Skeleton shape="text" width="45%" className="mt-4" />
    <SkeletonText lines={2} className="mt-3" />
</div>`),render:(t,{globals:a})=>{const n=o(r(a.locale));return e.jsx(d,{label:n.loading,children:e.jsxs("div",{className:"border-border rounded-lg border p-4",children:[e.jsx(s,{height:120}),e.jsx(s,{shape:"text",width:"45%",className:"mt-4"}),e.jsx(b,{lines:2,className:"mt-3"})]})})}},g={name:"Widget",parameters:l(i,`<div className="rounded-lg border p-4" aria-busy="true">
    <Skeleton shape="text" width="40%" />
    <Skeleton height={72} className="mt-4" />
</div>`),render:(t,{globals:a})=>{const n=o(r(a.locale));return e.jsx(d,{label:n.loading,children:e.jsxs("div",{className:"border-border rounded-lg border p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(s,{shape:"text",width:"40%"}),e.jsx(s,{shape:"circle",size:24})]}),e.jsx("div",{className:"mt-4 flex items-end gap-2",children:[40,68,32,80,56,72].map((S,R)=>e.jsx(s,{height:S,width:"100%"},R))})]})})}},x={name:"Liste",parameters:l(i,`<div className="flex items-center gap-3" aria-busy="true">
    <Skeleton shape="circle" size={40} />
    <div className="flex-1">
        <Skeleton shape="text" width="35%" />
        <Skeleton shape="text" width="60%" className="mt-2" />
    </div>
</div>`),render:(t,{globals:a})=>{const n=o(r(a.locale));return e.jsx(d,{label:n.loading,children:e.jsx("div",{className:"flex flex-col gap-4",children:[0,1,2,3].map(S=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{shape:"circle",size:40}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(s,{shape:"text",width:"35%"}),e.jsx(s,{shape:"text",width:"60%",className:"mt-2"})]})]},S))})})}},u={name:"Témoignage",parameters:l(i,`<div aria-busy="true">
    <SkeletonText lines={3} />
    <div className="mt-6 flex items-center gap-3">
        <Skeleton shape="circle" size={44} />
        <div className="flex-1">
            <Skeleton shape="text" width="40%" />
            <Skeleton shape="text" width="55%" className="mt-2" />
        </div>
    </div>
</div>`),render:(t,{globals:a})=>{const n=o(r(a.locale));return e.jsxs(d,{label:n.loading,children:[e.jsx(b,{lines:3,lastLineWidth:"70%"}),e.jsxs("div",{className:"mt-6 flex items-center gap-3",children:[e.jsx(s,{shape:"circle",size:44}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(s,{shape:"text",width:"40%"}),e.jsx(s,{shape:"text",width:"55%",className:"mt-2"})]})]})]})}};var v,k,N;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importSkeleton, \`<Skeleton height={16} />\`),
  render: (args, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <Loading label={copy.loading}>
        <Skeleton {...args} height={args.height ?? 16} />
      </Loading>;
  }
}`,...(N=(k=c.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var f,y,j;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Image et vidéo',
  parameters: componentSource(importSkeleton, \`<>
    <Skeleton height={160} />
    <Skeleton height={160} className="aspect-video h-auto" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <Loading label={copy.loading}>
        <div className="flex flex-col gap-4">
          <Skeleton height={140} />
          <div className="relative">
            <Skeleton className="aspect-video h-auto" />
            <span aria-hidden="true" className="border-fg/20 absolute inset-0 m-auto grid size-12 place-items-center rounded-full border-2">
              <span className="border-y-transparent border-l-fg/20 ms-1 border-y-6 border-l-10" />
            </span>
          </div>
        </div>
      </Loading>;
  }
}`,...(j=(y=m.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,L,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Paragraphe',
  parameters: componentSource(importSkeleton, \`<SkeletonText lines={4} />\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <Loading label={copy.loading}>
        <SkeletonText lines={4} />
      </Loading>;
  }
}`,...(T=(L=p.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var _,z,C;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Carte',
  parameters: componentSource(importSkeleton, \`<div className="rounded-lg border p-4" aria-busy="true">
    <Skeleton height={120} />
    <Skeleton shape="text" width="45%" className="mt-4" />
    <SkeletonText lines={2} className="mt-3" />
</div>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <Loading label={copy.loading}>
        <div className="border-border rounded-lg border p-4">
          <Skeleton height={120} />
          <Skeleton shape="text" width="45%" className="mt-4" />
          <SkeletonText lines={2} className="mt-3" />
        </div>
      </Loading>;
  }
}`,...(C=(z=h.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var W,P,M;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Widget',
  parameters: componentSource(importSkeleton, \`<div className="rounded-lg border p-4" aria-busy="true">
    <Skeleton shape="text" width="40%" />
    <Skeleton height={72} className="mt-4" />
</div>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <Loading label={copy.loading}>
        <div className="border-border rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <Skeleton shape="text" width="40%" />
            <Skeleton shape="circle" size={24} />
          </div>
          <div className="mt-4 flex items-end gap-2">
            {[40, 68, 32, 80, 56, 72].map((height, index) => <Skeleton key={index} height={height} width="100%" />)}
          </div>
        </div>
      </Loading>;
  }
}`,...(M=(P=g.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var D,O,B;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Liste',
  parameters: componentSource(importSkeleton, \`<div className="flex items-center gap-3" aria-busy="true">
    <Skeleton shape="circle" size={40} />
    <div className="flex-1">
        <Skeleton shape="text" width="35%" />
        <Skeleton shape="text" width="60%" className="mt-2" />
    </div>
</div>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <Loading label={copy.loading}>
        <div className="flex flex-col gap-4">
          {[0, 1, 2, 3].map(row => <div key={row} className="flex items-center gap-3">
              <Skeleton shape="circle" size={40} />
              <div className="min-w-0 flex-1">
                <Skeleton shape="text" width="35%" />
                <Skeleton shape="text" width="60%" className="mt-2" />
              </div>
            </div>)}
        </div>
      </Loading>;
  }
}`,...(B=(O=x.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var E,I,A;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Témoignage',
  parameters: componentSource(importSkeleton, \`<div aria-busy="true">
    <SkeletonText lines={3} />
    <div className="mt-6 flex items-center gap-3">
        <Skeleton shape="circle" size={44} />
        <div className="flex-1">
            <Skeleton shape="text" width="40%" />
            <Skeleton shape="text" width="55%" className="mt-2" />
        </div>
    </div>
</div>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <Loading label={copy.loading}>
        <SkeletonText lines={3} lastLineWidth="70%" />
        <div className="mt-6 flex items-center gap-3">
          <Skeleton shape="circle" size={44} />
          <div className="min-w-0 flex-1">
            <Skeleton shape="text" width="40%" />
            <Skeleton shape="text" width="55%" className="mt-2" />
          </div>
        </div>
      </Loading>;
  }
}`,...(A=(I=u.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const G=["Default","Media","TextBlock","Card","Widget","List","Testimonial"],U=Object.freeze(Object.defineProperty({__proto__:null,Card:h,Default:c,List:x,Media:m,Testimonial:u,TextBlock:p,Widget:g,__namedExportsOrder:G,default:F},Symbol.toStringTag,{value:"Module"}));export{h as C,c as D,x as L,m as M,U as S,p as T,g as W,u as a};
