import{m as p,d,j as o}from"./iframe-av9DYt01.js";import{h as _}from"./arg-types-D35aY_Cn.js";import{c as f}from"./docs-source-C_O40UCi.js";import{P as C}from"./Progress-BAj5NoWw.js";import{F as m}from"./FilePreview-u5hDdW69.js";const v="import { FilePreview } from 'd-ui';";function u(a){const i='<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="#7dd3fc"/><circle cx="42" cy="40" r="16" fill="#e0f2fe"/><path d="M0 120 L52 56 L92 120 Z" fill="#0284c7"/></svg>';return new File([i],a,{type:"image/svg+xml"})}function l(a){return new File([new Uint8Array(24e4)],a,{type:"application/pdf"})}const T={title:"Components/FilePreview",component:m,argTypes:_,parameters:{controls:{include:["layout"]}}},s={name:"Par défaut",args:{file:l("plan-de-cours.pdf")},parameters:f(v,`<FilePreview
    file={fichier}
    removeLabel={\`Retirer \${fichier.name}\`}
    onRemove={() => retirer(fichier)}
/>`),render:(a,{globals:i})=>{const e=p(d(i.locale)),r=l(e.fileName);return o.jsx("div",{className:"w-96 p-6",children:o.jsx(m,{...a,file:r,removeLabel:e.removeFile(r.name),onRemove:()=>{}})})}},n={name:"Vignette",args:{file:u("amphi.png"),layout:"tile"},parameters:f(v,'<FilePreview file={image} layout="tile" onRemove={() => retirer(image)} />'),render:(a,{globals:i})=>{const e=p(d(i.locale));return o.jsx("div",{className:"grid w-96 grid-cols-3 gap-2 p-6",children:[1,2,3].map(r=>{const g=u(`${r}-${e.imageName}`);return o.jsx(m,{file:g,layout:"tile",removeLabel:e.removeFile(g.name),onRemove:()=>{}},r)})})}},c={name:"Progression",args:{file:l("plan-de-cours.pdf")},parameters:f(v,`<FilePreview
    file={fichier}
    progress={<Progress value={40} size="xs" label="Envoi du fichier" />}
/>`),render:(a,{globals:i})=>{const e=p(d(i.locale)),r=l(e.fileName);return o.jsx("div",{className:"w-96 p-6",children:o.jsx(m,{file:r,removeLabel:e.removeFile(r.name),onRemove:()=>{},progress:o.jsx(C,{value:40,size:"xs",label:e.sending})})})}},t={name:"Fichier refusé",args:{file:l("plan-de-cours.pdf")},parameters:f(v,'<FilePreview file={fichier} error="Dépasse 2 Mo" onRemove={() => retirer(fichier)} />'),render:(a,{globals:i})=>{const e=p(d(i.locale)),r=l(e.fileName);return o.jsx("div",{className:"w-96 p-6",children:o.jsx(m,{file:r,error:e.tooHeavy,removeLabel:e.removeFile(r.name),onRemove:()=>{}})})}};var F,y,w;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    file: pdfFile('plan-de-cours.pdf')
  },
  parameters: componentSource(importFilePreview, \`<FilePreview
    file={fichier}
    removeLabel={\\\`Retirer \\\${fichier.name}\\\`}
    onRemove={() => retirer(fichier)}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = imageCopy(docsLocale(globals.locale));
    const file = pdfFile(copy.fileName);
    return <div className="w-96 p-6">
        <FilePreview {...args} file={file} removeLabel={copy.removeFile(file.name)} onRemove={() => undefined} />
      </div>;
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var h,P,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Vignette',
  args: {
    file: pngFile('amphi.png'),
    layout: 'tile'
  },
  parameters: componentSource(importFilePreview, \`<FilePreview file={image} layout="tile" onRemove={() => retirer(image)} />\`),
  render: (_, {
    globals
  }) => {
    const copy = imageCopy(docsLocale(globals.locale));
    return <div className="grid w-96 grid-cols-3 gap-2 p-6">
        {[1, 2, 3].map(n => {
        const file = pngFile(\`\${n}-\${copy.imageName}\`);
        return <FilePreview key={n} file={file} layout="tile" removeLabel={copy.removeFile(file.name)} onRemove={() => undefined} />;
      })}
      </div>;
  }
}`,...(b=(P=n.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var x,R,L;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Progression',
  args: {
    file: pdfFile('plan-de-cours.pdf')
  },
  parameters: componentSource(importFilePreview, \`<FilePreview
    file={fichier}
    progress={<Progress value={40} size="xs" label="Envoi du fichier" />}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = imageCopy(docsLocale(globals.locale));
    const file = pdfFile(copy.fileName);
    return <div className="w-96 p-6">
        <FilePreview file={file} removeLabel={copy.removeFile(file.name)} onRemove={() => undefined} progress={<Progress value={40} size="xs" label={copy.sending} />} />
      </div>;
  }
}`,...(L=(R=c.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var N,j,S;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Fichier refusé',
  args: {
    file: pdfFile('plan-de-cours.pdf')
  },
  parameters: componentSource(importFilePreview, \`<FilePreview file={fichier} error="Dépasse 2 Mo" onRemove={() => retirer(fichier)} />\`),
  render: (_, {
    globals
  }) => {
    const copy = imageCopy(docsLocale(globals.locale));
    const file = pdfFile(copy.fileName);
    return <div className="w-96 p-6">
        {/* Le motif s'accompagne d'un glyphe : la couleur seule ne le porte pas. */}
        <FilePreview file={file} error={copy.tooHeavy} removeLabel={copy.removeFile(file.name)} onRemove={() => undefined} />
      </div>;
  }
}`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const $=["Default","Tile","WithProgress","Rejected"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Rejected:t,Tile:n,WithProgress:c,__namedExportsOrder:$,default:T},Symbol.toStringTag,{value:"Module"}));export{s as D,W as F,t as R,n as T,c as W};
