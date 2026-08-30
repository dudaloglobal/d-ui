import{j as a,f as O,a8 as x,d as y,r as W}from"./iframe-D_uNPPBV.js";import{D as F}from"./arg-types-DBkVzJFl.js";import{c as $,b as R}from"./docs-source-C_O40UCi.js";import{B as G}from"./Button-DyzFzmN3.js";import{I as j}from"./IconButton-C7rnat-o.js";function H(n,e,o){return Math.min(Math.max(n,e),o)}function J(n,e,o=1){if(e<1)return[];const g=H(n,1,e),p=Math.max(0,o),d=p*2+5;if(e<=d)return Array.from({length:e},(t,i)=>({type:"page",page:i+1}));const u=new Set([1,e]);for(let t=g-p;t<=g+p;t+=1)t>=1&&t<=e&&u.add(t);let r=[...u].sort((t,i)=>t-i);for(let t=1;t<r.length;t+=1){const i=r[t-1],c=r[t];i!==void 0&&c!==void 0&&c-i===2&&u.add(i+1)}r=[...u].sort((t,i)=>t-i);const l=[];for(let t=0;t<r.length;t+=1){const i=r[t],c=r[t-1];i!==void 0&&(c!==void 0&&i-c>1&&l.push({type:"ellipsis",id:c===1?"start":"end"}),l.push({type:"page",page:i}))}return l}function K(){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M10 4L6 8l4 4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function Q(){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M6 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function U(n,e){return e?`Page ${n}, current page`:`Page ${n}`}function L({page:n,pageCount:e,onPageChange:o,siblingCount:g=1,label:p="Pagination",previousLabel:d="Previous page",nextLabel:u="Next page",pageLabel:r=U,disabled:l=!1,size:t="md",className:i}){const c=J(n,e,g),m=e<1?0:Math.min(Math.max(n,1),e),I=m<=1,A=m>=e||e<1;function C(s){l||s<1||s>e||s===m||o(s)}return a.jsx("nav",{"aria-label":p,className:O("font-sans",i),children:a.jsxs("ul",{className:"m-0 flex list-none flex-wrap items-center gap-1 p-0",children:[a.jsx("li",{children:a.jsx(j,{variant:"ghost",size:t,icon:a.jsx(K,{}),"aria-label":d,disabled:l||I,onClick:()=>C(m-1)})}),c.map(s=>s.type==="ellipsis"?a.jsx("li",{children:a.jsx("span",{"aria-hidden":"true",className:"inline-flex min-w-8 items-center justify-center px-1 text-fg/70",children:"…"})},s.id):a.jsx("li",{children:a.jsx(X,{page:s.page,current:s.page===m,disabled:l,size:t,label:r(s.page,s.page===m),onSelect:C})},s.page)),a.jsx("li",{children:a.jsx(j,{variant:"ghost",size:t,icon:a.jsx(Q,{}),"aria-label":u,disabled:l||A,onClick:()=>C(m+1)})})]})})}function X({page:n,current:e,disabled:o,size:g,label:p,onSelect:d}){return a.jsx(G,{type:"button",variant:e?"secondary":"ghost",size:g,disabled:o,"aria-label":p,"aria-current":e?"page":void 0,onClick:()=>d(n),children:n})}L.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:"Page courante, 1-indexée. Contrôlé."},pageCount:{required:!0,tsType:{name:"number"},description:"Nombre total de pages."},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"Pages numérotées de chaque côté de la courante. Défaut : `1`.",defaultValue:{value:"1",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Nom accessible du `nav`. Fallback anglais si omis.",defaultValue:{value:"'Pagination'",computed:!1}},previousLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Previous page'",computed:!1}},nextLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Next page'",computed:!1}},pageLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number, current: boolean) => string",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"boolean"},name:"current"}],return:{name:"string"}}},description:"Accessible name for a page button.",defaultValue:{value:"function defaultPageLabel(page: number, current: boolean): string {\n  return current ? `Page ${page}, current page` : `Page ${page}`;\n}",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Y=`import { useState } from 'react';
import { Pagination } from 'd-ui';`;function E(n,e="3"){return R(Y,`const [page, setPage] = useState(${e});
return (
${n.trim().split(`
`).map(o=>`    ${o}`).join(`
`)}
);`)}const Z={title:"Components/Pagination",component:L,args:{page:3,pageCount:8,onPageChange:()=>{}},argTypes:F};function f({copy:n,pageCount:e,initial:o=3,size:g,disabled:p}){const[d,u]=W.useState(o);return a.jsx(L,{page:d,pageCount:e,onPageChange:u,label:n.label,previousLabel:n.previous,nextLabel:n.next,pageLabel:(r,l)=>l?n.pageCurrent(r):n.page(r),size:g,disabled:p})}const P={name:"Par défaut",parameters:E(`<Pagination
    page={page}
    pageCount={8}
    onPageChange={setPage}
    label="Pagination des devoirs"
    previousLabel="Page précédente"
    nextLabel="Page suivante"
/>`),render:(n,{globals:e})=>{const o=x(y(e.locale));return a.jsx(f,{copy:o,pageCount:8})}},b={name:"Beaucoup de pages",parameters:E(`<Pagination
    page={page}
    pageCount={24}
    onPageChange={setPage}
    label="Pagination des devoirs"
    previousLabel="Page précédente"
    nextLabel="Page suivante"
/>`,"12"),render:(n,{globals:e})=>{const o=x(y(e.locale));return a.jsx(f,{copy:o,pageCount:24,initial:12})}},h={name:"Désactivé",parameters:$("import { Pagination } from 'd-ui';",`<Pagination
    page={3}
    pageCount={8}
    disabled
    onPageChange={() => {}}
    label="Pagination des devoirs"
/>`),render:(n,{globals:e})=>{const o=x(y(e.locale));return a.jsx(f,{copy:o,pageCount:8,disabled:!0})}},v={name:"Tailles",parameters:$("import { Pagination } from 'd-ui';",`<>
    <Pagination size="sm" page={2} pageCount={5} onPageChange={() => {}} />
    <Pagination size="md" page={2} pageCount={5} onPageChange={() => {}} />
    <Pagination size="lg" page={2} pageCount={5} onPageChange={() => {}} />
</>`),render:(n,{globals:e})=>{const o=x(y(e.locale));return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(f,{copy:o,pageCount:5,initial:2,size:"sm"}),a.jsx(f,{copy:o,pageCount:5,initial:2,size:"md"}),a.jsx(f,{copy:o,pageCount:5,initial:2,size:"lg"})]})}};var S,_,T;P.parameters={...P.parameters,docs:{...(S=P.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: paginationSource(\`<Pagination
    page={page}
    pageCount={8}
    onPageChange={setPage}
    label="Pagination des devoirs"
    previousLabel="Page précédente"
    nextLabel="Page suivante"
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    return <LabeledPagination copy={copy} pageCount={8} />;
  }
}`,...(T=(_=P.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var z,k,q;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Beaucoup de pages',
  parameters: paginationSource(\`<Pagination
    page={page}
    pageCount={24}
    onPageChange={setPage}
    label="Pagination des devoirs"
    previousLabel="Page précédente"
    nextLabel="Page suivante"
/>\`, '12'),
  render: (_, {
    globals
  }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    return <LabeledPagination copy={copy} pageCount={24} initial={12} />;
  }
}`,...(q=(k=b.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var M,N,w;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource("import { Pagination } from 'd-ui';", \`<Pagination
    page={3}
    pageCount={8}
    disabled
    onPageChange={() => {}}
    label="Pagination des devoirs"
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    return <LabeledPagination copy={copy} pageCount={8} disabled />;
  }
}`,...(w=(N=h.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var D,B,V;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource("import { Pagination } from 'd-ui';", \`<>
    <Pagination size="sm" page={2} pageCount={5} onPageChange={() => {}} />
    <Pagination size="md" page={2} pageCount={5} onPageChange={() => {}} />
    <Pagination size="lg" page={2} pageCount={5} onPageChange={() => {}} />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-4">
        <LabeledPagination copy={copy} pageCount={5} initial={2} size="sm" />
        <LabeledPagination copy={copy} pageCount={5} initial={2} size="md" />
        <LabeledPagination copy={copy} pageCount={5} initial={2} size="lg" />
      </div>;
  }
}`,...(V=(B=v.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const ee=["Default","ManyPages","Disabled","Sizes"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:P,Disabled:h,ManyPages:b,Sizes:v,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{P as D,b as M,re as P,v as S,h as a};
