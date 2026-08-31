import{m as o,d as i,j as e}from"./iframe-DRIDI3J7.js";import{g as H}from"./arg-types-Di6f0Zb7.js";import{c as l}from"./docs-source-C_O40UCi.js";import{S as s,B as f}from"./Button-lDgXfmFs.js";import{H as O}from"./Heading-CK1fRuKU.js";import{T as b}from"./Text-CVYueY0E.js";const x="import { Spinner } from 'd-ui';",P={title:"Components/Spinner",component:s,argTypes:H,parameters:{controls:{include:["size","label"]}}},c={name:"Par défaut",parameters:l(x,'<Spinner label="Chargement…" />'),render:(t,{globals:r})=>{const n=o(i(r.locale));return e.jsx("div",{className:"flex justify-center p-6",children:e.jsx(s,{...t,label:n.loading})})}},d={name:"Tailles",parameters:l(x,`<>
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
</>`),render:(t,{globals:r})=>{const n=o(i(r.locale));return e.jsx("div",{className:"flex items-center justify-center gap-8 p-6",children:["xs","sm","md","lg"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:a,label:`${n.loading} (${a})`}),e.jsx(b,{size:"body-sm",tone:"muted",children:a})]},a))})}},p={name:"Couleurs",parameters:l(x,`<>
    <Spinner className="text-brand" />
    <Spinner className="text-fg-muted" />
    <Spinner className="text-danger" />
</>`),render:(t,{globals:r})=>{const n=o(i(r.locale));return e.jsx("div",{className:"flex items-center justify-center gap-8 p-6",children:["text-brand","text-fg","text-fg-muted","text-danger"].map(a=>e.jsx(s,{className:a,label:`${n.loading} — ${a}`},a))})}},m={name:"Alignement",parameters:l(x,`<div className="flex items-center gap-2">
    <Spinner size="xs" />
    <span>Chargement…</span>
</div>`),render:(t,{globals:r})=>{const n=o(i(r.locale));return e.jsxs("div",{className:"flex flex-col items-center gap-6 p-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:"xs"}),e.jsx(b,{children:n.loading})]}),e.jsx("div",{className:"border-border grid h-32 w-64 place-items-center rounded-md border",children:e.jsx(s,{label:n.loading})})]})}},u={name:"Dans une carte",parameters:l(x,`<div className="rounded-lg border p-6" aria-busy="true">
    <Spinner label="Chargement du rapport" />
</div>`),render:(t,{globals:r})=>{const n=o(i(r.locale));return e.jsx("div",{className:"flex justify-center p-6",children:e.jsxs("div",{className:"border-border w-80 rounded-lg border p-6","aria-busy":"true","aria-live":"polite",children:[e.jsx(O,{level:3,size:"subtitle",children:n.cardTitle}),e.jsxs("div",{className:"mt-6 flex items-center justify-center gap-3",children:[e.jsx(s,{}),e.jsx(b,{tone:"muted",children:n.loading})]})]})})}},g={name:"Dans un bouton",parameters:l("import { Button } from 'd-ui';",`<>
    <Button loading>Enregistrer</Button>
    <Button loading loadingIndicator="bounce">Enregistrer</Button>
</>`),render:(t,{globals:r})=>{const n=o(i(r.locale));return e.jsxs("div",{className:"flex items-center justify-center gap-4 p-6",children:[e.jsx(f,{loading:!0,children:n.save}),e.jsx(f,{variant:"secondary",loading:!0,loadingIndicator:"bounce",children:n.save})]})}};var S,y,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importSpinner, \`<Spinner label="Chargement…" />\`),
  render: (args, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="flex justify-center p-6">
        <Spinner {...args} label={copy.loading} />
      </div>;
  }
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,N,h;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importSpinner, \`<>
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="flex items-center justify-center gap-8 p-6">
        {(['xs', 'sm', 'md', 'lg'] as const).map(size => <div key={size} className="flex flex-col items-center gap-2">
            <Spinner size={size} label={\`\${copy.loading} (\${size})\`} />
            <Text size="body-sm" tone="muted">
              {size}
            </Text>
          </div>)}
      </div>;
  }
}`,...(h=(N=d.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var z,C,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Couleurs',
  parameters: componentSource(importSpinner, \`<>
    <Spinner className="text-brand" />
    <Spinner className="text-fg-muted" />
    <Spinner className="text-danger" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="flex items-center justify-center gap-8 p-6">
        {['text-brand', 'text-fg', 'text-fg-muted', 'text-danger'].map(tone => <Spinner key={tone} className={tone} label={\`\${copy.loading} — \${tone}\`} />)}
      </div>;
  }
}`,...(B=(C=p.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var _,T,$;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Alignement',
  parameters: componentSource(importSpinner, \`<div className="flex items-center gap-2">
    <Spinner size="xs" />
    <span>Chargement…</span>
</div>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="flex flex-col items-center gap-6 p-6">
        <div className="flex items-center gap-2">
          <Spinner size="xs" />
          <Text>{copy.loading}</Text>
        </div>
        <div className="border-border grid h-32 w-64 place-items-center rounded-md border">
          <Spinner label={copy.loading} />
        </div>
      </div>;
  }
}`,...($=(T=m.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var D,I,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Dans une carte',
  parameters: componentSource(importSpinner, \`<div className="rounded-lg border p-6" aria-busy="true">
    <Spinner label="Chargement du rapport" />
</div>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="flex justify-center p-6">
        <div className="border-border w-80 rounded-lg border p-6" aria-busy="true" aria-live="polite">
          <Heading level={3} size="subtitle">
            {copy.cardTitle}
          </Heading>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Spinner />
            <Text tone="muted">{copy.loading}</Text>
          </div>
        </div>
      </div>;
  }
}`,...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var A,E,w;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Dans un bouton',
  parameters: componentSource("import { Button } from 'd-ui';", \`<>
    <Button loading>Enregistrer</Button>
    <Button loading loadingIndicator="bounce">Enregistrer</Button>
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return <div className="flex items-center justify-center gap-4 p-6">
        <Button loading>{copy.save}</Button>
        <Button variant="secondary" loading loadingIndicator="bounce">
          {copy.save}
        </Button>
      </div>;
  }
}`,...(w=(E=g.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const W=["Default","Sizes","Colors","Alignment","WithCard","InButtons"],J=Object.freeze(Object.defineProperty({__proto__:null,Alignment:m,Colors:p,Default:c,InButtons:g,Sizes:d,WithCard:u,__namedExportsOrder:W,default:P},Symbol.toStringTag,{value:"Module"}));export{m as A,p as C,c as D,g as I,J as S,u as W,d as a};
