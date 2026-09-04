import{w as i,d as t,j as e,x as v,r as Q}from"./iframe-CSDJ8R1k.js";import{p as W}from"./arg-types-B_nef0fB.js";import{c as U,b as X}from"./docs-source-C_O40UCi.js";import{C as Y,d as Z,e as ee}from"./Card-BPf7tI8A.js";import{T as ae}from"./Text--B0S1JsQ.js";import{P as y,a as w,b as V,c as L,d as ne}from"./Pagination-EFYscwC9.js";const oe=`import { useState } from 'react';
import { Pagination } from 'd-ui';`;function f(o,a="3"){return X(oe,`const [page, setPage] = useState(${a});
return (
${o.trim().split(`
`).map(n=>`    ${n}`).join(`
`)}
);`)}const te={title:"Components/Pagination",component:y,args:{page:3,pageCount:8,onPageChange:()=>{}},argTypes:W};function g({copy:o,pageCount:a,initial:n=3,size:r,disabled:s}){const[l,x]=Q.useState(n);return e.jsx(y,{page:l,pageCount:a,onPageChange:x,label:o.label,previousLabel:o.previous,nextLabel:o.next,pageLabel:(c,h)=>h?o.pageCurrent(c):o.page(c),size:r,disabled:s})}const p={name:"Par défaut",parameters:f(`<Pagination
    page={page}
    pageCount={8}
    onPageChange={setPage}
    label="Pagination des devoirs"
    previousLabel="Page précédente"
    nextLabel="Page suivante"
/>`),render:(o,{globals:a})=>{const n=i(t(a.locale));return e.jsx(g,{copy:n,pageCount:8})}},d={name:"Beaucoup de pages",parameters:f(`<Pagination
    page={page}
    pageCount={24}
    onPageChange={setPage}
    label="Pagination des devoirs"
    previousLabel="Page précédente"
    nextLabel="Page suivante"
/>`,"12"),render:(o,{globals:a})=>{const n=i(t(a.locale));return e.jsx(g,{copy:n,pageCount:24,initial:12})}},u={name:"Désactivé",parameters:U("import { Pagination } from 'd-ui';",`<Pagination
    page={3}
    pageCount={8}
    disabled
    onPageChange={() => {}}
    label="Pagination des devoirs"
/>`),render:(o,{globals:a})=>{const n=i(t(a.locale));return e.jsx(g,{copy:n,pageCount:8,disabled:!0})}},m={name:"Tailles",parameters:U("import { Pagination } from 'd-ui';",`<>
    <Pagination size="sm" page={2} pageCount={5} onPageChange={() => {}} />
    <Pagination size="md" page={2} pageCount={5} onPageChange={() => {}} />
    <Pagination size="lg" page={2} pageCount={5} onPageChange={() => {}} />
</>`),render:(o,{globals:a})=>{const n=i(t(a.locale));return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(g,{copy:n,pageCount:5,initial:2,size:"sm"}),e.jsx(g,{copy:n,pageCount:5,initial:2,size:"md"}),e.jsx(g,{copy:n,pageCount:5,initial:2,size:"lg"})]})}};function j({children:o,copy:a,table:n,initial:r=3,pageCount:s=8}){const[l,x]=Q.useState(r);return e.jsxs(Y,{className:"max-w-2xl",children:[e.jsx(Z,{children:e.jsx(ae,{tone:"muted",children:n.caption})}),e.jsx(ee,{className:"justify-between gap-4",children:e.jsx(y,{page:l,pageCount:s,onPageChange:x,label:a.label,previousLabel:a.previous,nextLabel:a.next,pageLabel:(c,h)=>h?a.pageCurrent(c):a.page(c),size:"sm",className:"w-full",children:o(l,s)})})]})}const P={name:"Pied de carte",parameters:f(`<Card>
    <CardBody>…</CardBody>
    <CardFooter className="justify-between">
        <Pagination page={page} pageCount={8} onPageChange={setPage} className="w-full">
            <div className="flex w-full items-center justify-between gap-4">
                <PaginationPrevious showLabel />
                <PaginationPages />
                <PaginationNext showLabel />
            </div>
        </Pagination>
    </CardFooter>
</Card>`),render:(o,{globals:a})=>{const n=i(t(a.locale));return e.jsx(j,{copy:n,table:v(t(a.locale)),children:()=>e.jsxs("div",{className:"flex w-full items-center justify-between gap-4",children:[e.jsx(w,{showLabel:!0}),e.jsx(V,{}),e.jsx(L,{showLabel:!0})]})})}},b={name:"Numéros centrés",parameters:f(`<Pagination page={page} pageCount={8} onPageChange={setPage} className="w-full">
    <div className="flex w-full items-center">
        <PaginationPrevious showLabel />
        <PaginationPages className="flex-1 justify-center" />
        <PaginationNext showLabel />
    </div>
</Pagination>`),render:(o,{globals:a})=>{const n=i(t(a.locale));return e.jsx(j,{copy:n,table:v(t(a.locale)),children:()=>e.jsxs("div",{className:"flex w-full items-center",children:[e.jsx(w,{showLabel:!0}),e.jsx(V,{className:"flex-1 justify-center"}),e.jsx(L,{showLabel:!0})]})})}},C={name:"Pied de carte simple",parameters:f(`<Pagination page={page} pageCount={8} onPageChange={setPage} className="w-full">
    <div className="flex w-full items-center justify-between gap-4">
        <PaginationStatus>1 à 10 sur 97</PaginationStatus>
        <div className="flex gap-2">
            <PaginationPrevious showLabel />
            <PaginationNext showLabel />
        </div>
    </div>
</Pagination>`),render:(o,{globals:a})=>{const n=i(t(a.locale)),r=v(t(a.locale));return e.jsx(j,{copy:n,table:r,children:(s,l)=>e.jsxs("div",{className:"flex w-full items-center justify-between gap-4",children:[e.jsx(ne,{children:r.showing((s-1)*10+1,s*10,l*10)}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(w,{showLabel:!0}),e.jsx(L,{showLabel:!0})]})]})})}};var N,S,_;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(S=p.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var F,z,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var B,D,M;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(M=(D=u.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var E,O,$;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...($=(O=m.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var q,A,R;P.parameters={...P.parameters,docs:{...(q=P.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Pied de carte',
  parameters: paginationSource(\`<Card>
    <CardBody>…</CardBody>
    <CardFooter className="justify-between">
        <Pagination page={page} pageCount={8} onPageChange={setPage} className="w-full">
            <div className="flex w-full items-center justify-between gap-4">
                <PaginationPrevious showLabel />
                <PaginationPages />
                <PaginationNext showLabel />
            </div>
        </Pagination>
    </CardFooter>
</Card>\`),
  render: (_, {
    globals
  }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    return <FooterShell copy={copy} table={dataTableCopy(docsLocale(globals.locale))}>
        {() => <div className="flex w-full items-center justify-between gap-4">
            <PaginationPrevious showLabel />
            <PaginationPages />
            <PaginationNext showLabel />
          </div>}
      </FooterShell>;
  }
}`,...(R=(A=P.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var k,G,H;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Numéros centrés',
  parameters: paginationSource(\`<Pagination page={page} pageCount={8} onPageChange={setPage} className="w-full">
    <div className="flex w-full items-center">
        <PaginationPrevious showLabel />
        <PaginationPages className="flex-1 justify-center" />
        <PaginationNext showLabel />
    </div>
</Pagination>\`),
  render: (_, {
    globals
  }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    return <FooterShell copy={copy} table={dataTableCopy(docsLocale(globals.locale))}>
        {() => <div className="flex w-full items-center">
            <PaginationPrevious showLabel />
            <PaginationPages className="flex-1 justify-center" />
            <PaginationNext showLabel />
          </div>}
      </FooterShell>;
  }
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Pied de carte simple',
  parameters: paginationSource(\`<Pagination page={page} pageCount={8} onPageChange={setPage} className="w-full">
    <div className="flex w-full items-center justify-between gap-4">
        <PaginationStatus>1 à 10 sur 97</PaginationStatus>
        <div className="flex gap-2">
            <PaginationPrevious showLabel />
            <PaginationNext showLabel />
        </div>
    </div>
</Pagination>\`),
  render: (_, {
    globals
  }) => {
    const copy = paginationCopy(docsLocale(globals.locale));
    const table = dataTableCopy(docsLocale(globals.locale));
    return <FooterShell copy={copy} table={table}>
        {(page, pageCount) => <div className="flex w-full items-center justify-between gap-4">
            {/* Le composant ne fabrique pas ce texte : il ignore le total réel. */}
            <PaginationStatus>
              {table.showing((page - 1) * 10 + 1, page * 10, pageCount * 10)}
            </PaginationStatus>
            <div className="flex gap-2">
              <PaginationPrevious showLabel />
              <PaginationNext showLabel />
            </div>
          </div>}
      </FooterShell>;
  }
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const se=["Default","ManyPages","Disabled","Sizes","CardFooterPages","CenteredPages","SimpleCardFooter"],de=Object.freeze(Object.defineProperty({__proto__:null,CardFooterPages:P,CenteredPages:b,Default:p,Disabled:u,ManyPages:d,SimpleCardFooter:C,Sizes:m,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{p as D,d as M,de as P,m as S,u as a};
