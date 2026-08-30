import{r as x,j as o,f as $,a7 as d,d as u}from"./iframe-D_uNPPBV.js";import{C as Qe}from"./arg-types-DBkVzJFl.js";import{c as m}from"./docs-source-C_O40UCi.js";import{T as k}from"./Text-DasgVAvA.js";import{B as Y}from"./Button-DyzFzmN3.js";import{I as Xe}from"./IconButton-C7rnat-o.js";import{m as Ye}from"./textControl-BdIZBSpj.js";import{u as er}from"./useFieldControl-DQkWMPKc.js";function rr(r,a){if(!a)return!0;const e=a.split(",").map(p=>p.trim().toLowerCase()).filter(Boolean);if(e.length===0||e.includes("*/*")||e.includes("*"))return!0;const i=r.name.toLowerCase(),t=r.type.toLowerCase();return e.some(p=>p.startsWith(".")?i.endsWith(p):p.endsWith("/*")?t.startsWith(p.slice(0,-1)):t===p)}function Ue(r){if(r<1024)return`${r} o`;if(r<1024*1024)return`${Math.round(r/1024)} Ko`;const a=r/(1024*1024);return`${a>=10?Math.round(a):Math.round(a*10)/10} Mo`}function ar(r,a){const e=[],i=[];for(const t of r){if(!rr(t,a.accept)){i.push({file:t,reason:"type"});continue}if(a.maxSize!=null&&t.size>a.maxSize){i.push({file:t,reason:"size"});continue}e.push(t)}return{accepted:e,rejected:i}}function lr(r,a){return`${r.name} dépasse ${Ue(a)}.`}function or(r){return`${r.name} n’est pas un type accepté.`}function sr(r){return`Retirer ${r}`}const nr={sm:"min-h-24 px-3 py-4 text-sm",md:"min-h-32 px-4 py-6 text-base",lg:"min-h-40 px-5 py-8 text-lg"};function ir(){return o.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function tr(r,a){return`${r.name}-${r.size}-${r.lastModified}-${a}`}function pr(r,a,e,i){return r.reason==="size"&&a!=null?e(r.file,a):i(r.file)}const s=x.forwardRef(function({id:a,size:e="md",label:i,helper:t,error:p,invalid:ze=!1,disabled:je=!1,required:A=!1,fullWidth:Se=!0,dropzone:De=!0,multiple:C=!1,maxSize:B,accept:_,files:O,defaultFiles:Te,onFilesChange:M,onChange:N,onReject:I,progress:h,browseLabel:qe,dropLabel:$e="Glissez les fichiers ici ou cliquez pour les choisir",removeLabel:Ce=sr,filesLabel:Me="Fichiers sélectionnés",sizeErrorMessage:Ne=lr,typeErrorMessage:Ie=or,name:Ee,className:Pe,...Re},T){const g=er(),Ve=x.useId(),y=g.id??a??Ve,W=`${y}-helper`,H=`${y}-error`,ke=`${y}-files`,E=x.useRef(null),[Ae,Be]=x.useState(Te??[]),[P,_e]=x.useState([]),[G,R]=x.useState(!1),q=O??Ae,c=!!(je||g.disabled),b=!!(ze||g["aria-invalid"]||P.length>0),V=b?p??(P.length?P.map(l=>pr(l,B,Ne,Ie)).join(" "):void 0):t,Oe=Ye(g["aria-describedby"],V?b?H:W:void 0),K=qe??(C?"Choisir des fichiers":"Choisir un fichier");function We(l){E.current=l,typeof T=="function"?T(l):T&&(T.current=l)}function Z(l,n){O===void 0&&Be(l),_e(n),M==null||M(l),I==null||I(n);const v=E.current;v&&(v.value="")}function J(l){const{accepted:n,rejected:v}=ar(l,{accept:_,maxSize:B}),Je=C?[...q,...n]:n.slice(-1);Z(Je,v)}function He(l){const n=l.target.files?Array.from(l.target.files):[];J(n),N==null||N(l)}function Ge(l){l.preventDefault(),R(!1),!c&&J(Array.from(l.dataTransfer.files))}function Q(){var l;(l=E.current)==null||l.click()}function Ke(l){Z(q.filter((n,v)=>v!==l),[])}const X=o.jsx("input",{...Re,ref:We,id:y,type:"file",name:Ee,accept:_,multiple:C,disabled:c,required:g.required??A,"aria-invalid":b||void 0,"aria-describedby":Oe,tabIndex:-1,onChange:He,className:"d-ui-visually-hidden"}),Ze=De?o.jsxs("div",{"data-dropping":G||void 0,onDragEnter:l=>{l.preventDefault(),c||R(!0)},onDragOver:l=>{l.preventDefault()},onDragLeave:l=>{l.currentTarget.contains(l.relatedTarget)||R(!1)},onDrop:Ge,className:$("relative flex flex-col items-center justify-center gap-3 rounded-md border-2 border-dashed text-center",nr[e],G?"border-brand bg-surface-muted":"border-border bg-field",b&&"border-danger",c&&"pointer-events-none opacity-50","focus-within:ring-2 focus-within:ring-focus"),children:[X,o.jsx("label",{htmlFor:y,className:"cursor-pointer",children:o.jsx(k,{as:"span",tone:c?"muted":"default",children:$e})}),o.jsx(Y,{type:"button",variant:"secondary",size:e,disabled:c,onClick:Q,children:K})]}):o.jsxs("div",{className:"w-fit rounded-md focus-within:ring-2 focus-within:ring-focus",children:[X,o.jsx(Y,{type:"button",variant:"secondary",size:e,disabled:c,onClick:Q,children:K})]});return o.jsxs("div",{className:$("flex flex-col gap-2",Se?"w-full min-w-0":"w-80 max-w-full",Pe),children:[i?o.jsxs("label",{htmlFor:y,className:$("text-sm leading-5 font-medium",c?"text-fg/40":"text-fg"),children:[i,A||g.required?o.jsx("span",{"aria-hidden":"true",children:" *"}):null]}):null,Ze,q.length>0?o.jsx("ul",{id:ke,"aria-label":Me,className:"flex flex-col gap-1",children:q.map((l,n)=>o.jsxs("li",{className:"flex items-center gap-2 rounded-md bg-surface-muted px-3 py-2",children:[o.jsxs(k,{as:"span",size:"body-sm",className:"min-w-0 flex-1 truncate",children:[l.name,o.jsxs("span",{className:"text-fg-muted",children:[" · ",Ue(l.size)]})]}),typeof h=="function"?h(l):null,o.jsx(Xe,{type:"button",variant:"ghost",size:"sm",disabled:c,"aria-label":Ce(l.name),icon:o.jsx(ir,{}),onClick:()=>Ke(n)})]},tr(l,n)))}):null,h&&typeof h!="function"?h:null,V?o.jsx("p",{id:b?H:W,role:b?"alert":void 0,className:$("text-sm leading-5",b?"text-danger":"text-fg/70"),children:V}):null]})});s.__docgenInfo={description:"Sélecteur de fichiers accessible : input natif masqué, clic, dépôt optionnel.\n\nPas de client HTTP : l’app envoie les `File` elle-même.",methods:[],displayName:"FileUpload",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Libellé visible au-dessus du champ."},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dropzone:{required:!1,tsType:{name:"boolean"},description:`Zone de dépôt en plus du clic. Le clavier n’en a pas besoin :
le bouton / l’input fichier reste opérable.`,defaultValue:{value:"true",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"Taille max d’un fichier, en octets."},files:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:""},defaultFiles:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:""},onFilesChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},onReject:{required:!1,tsType:{name:"signature",type:"function",raw:"(rejections: FileRejection[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  file: File;
  reason: FileRejectionReason;
}`,signature:{properties:[{key:"file",value:{name:"File",required:!0}},{key:"reason",value:{name:"union",raw:"'type' | 'size'",elements:[{name:"literal",value:"'type'"},{name:"literal",value:"'size'"}],required:!0}}]}}],raw:"FileRejection[]"},name:"rejections"}],return:{name:"void"}}},description:""},progress:{required:!1,tsType:{name:"union",raw:"ReactNode | ((file: File) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Slot de progression : nœud unique, ou par fichier."},browseLabel:{required:!1,tsType:{name:"string"},description:""},dropLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Glissez les fichiers ici ou cliquez pour les choisir'",computed:!1}},removeLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileName: string) => string",signature:{arguments:[{type:{name:"string"},name:"fileName"}],return:{name:"string"}}},description:"",defaultValue:{value:"function defaultRemoveLabel(fileName: string): string {\n  return `Retirer ${fileName}`;\n}",computed:!1}},filesLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Fichiers sélectionnés'",computed:!1}},sizeErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File, maxSize: number) => string",signature:{arguments:[{type:{name:"File"},name:"file"},{type:{name:"number"},name:"maxSize"}],return:{name:"string"}}},description:"",defaultValue:{value:"function defaultSizeError(file: File, maxSize: number): string {\n  return `${file.name} dépasse ${formatFileSize(maxSize)}.`;\n}",computed:!1}},typeErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => string",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"string"}}},description:"",defaultValue:{value:"function defaultTypeError(file: File): string {\n  return `${file.name} n’est pas un type accepté.`;\n}",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1}}};const f="import { FileUpload } from 'd-ui';",cr={title:"Components/FileUpload",component:s,argTypes:Qe},F={name:"Par défaut",parameters:m(f,`<FileUpload
    label="Devoir"
    helper="PDF, jusqu’à 5 Mo."
    accept=".pdf,application/pdf"
    maxSize={5 * 1024 * 1024}
/>`),render:(r,{globals:a})=>{const e=d(u(a.locale));return o.jsx(s,{...r,label:e.label,helper:e.helper,dropLabel:e.drop,browseLabel:e.browse,accept:".pdf,application/pdf",maxSize:5*1024*1024})}},w={name:"Tailles",parameters:m(f,`<FileUpload size="sm" label="Devoir" />
<FileUpload size="md" label="Devoir" />
<FileUpload size="lg" label="Devoir" />`),render:(r,{globals:a})=>{const e=d(u(a.locale));return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(s,{...r,size:"sm",label:`${e.label} (${e.small})`,dropLabel:e.drop,browseLabel:e.browse}),o.jsx(s,{...r,size:"md",label:`${e.label} (${e.medium})`,dropLabel:e.drop,browseLabel:e.browse}),o.jsx(s,{...r,size:"lg",label:`${e.label} (${e.large})`,dropLabel:e.drop,browseLabel:e.browse})]})}},L={name:"Clic seul",parameters:m(f,'<FileUpload label="Devoir" dropzone={false} />'),render:(r,{globals:a})=>{const e=d(u(a.locale));return o.jsx(s,{...r,label:e.label,dropzone:!1,browseLabel:e.browse})}},U={name:"Plusieurs fichiers",parameters:m(f,'<FileUpload label="Devoir" multiple />'),render:(r,{globals:a})=>{const e=d(u(a.locale));return o.jsx(s,{...r,label:e.label,dropLabel:e.drop,browseLabel:e.browse,multiple:!0})}},z={name:"Désactivé",parameters:m(f,'<FileUpload label="Devoir" disabled />'),render:(r,{globals:a})=>{const e=d(u(a.locale));return o.jsx(s,{...r,label:e.label,dropLabel:e.drop,browseLabel:e.browse,disabled:!0})}},j={name:"Invalide",parameters:m(f,'<FileUpload label="Devoir" invalid error="Ce champ est requis." />'),render:(r,{globals:a})=>{const e=d(u(a.locale));return o.jsx(s,{...r,label:e.label,dropLabel:e.drop,browseLabel:e.browse,invalid:!0,error:e.error})}},S={name:"Accept et taille max",parameters:m(f,`<FileUpload
    label="Devoir"
    accept=".pdf,application/pdf"
    maxSize={5 * 1024 * 1024}
    helper="PDF, jusqu’à 5 Mo."
/>`),render:(r,{globals:a})=>{const e=d(u(a.locale));return o.jsx(s,{...r,label:e.label,helper:e.helper,dropLabel:e.drop,browseLabel:e.browse,accept:".pdf,application/pdf",maxSize:5*1024*1024})}},D={name:"Progression",parameters:m(f,`<FileUpload
    label="Devoir"
    progress={<p>Envoi : 40 %</p>}
/>`),render:(r,{globals:a})=>{const e=d(u(a.locale));return o.jsx(s,{...r,label:e.label,dropLabel:e.drop,browseLabel:e.browse,defaultFiles:[new File(["x"],"devoir.pdf",{type:"application/pdf"})],progress:o.jsx(k,{as:"span",size:"body-sm",tone:"muted",children:e.progress})})}};var ee,re,ae;F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importFileUpload, \`<FileUpload
    label="Devoir"
    helper="PDF, jusqu’à 5 Mo."
    accept=".pdf,application/pdf"
    maxSize={5 * 1024 * 1024}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} helper={copy.helper} dropLabel={copy.drop} browseLabel={copy.browse} accept=".pdf,application/pdf" maxSize={5 * 1024 * 1024} />;
  }
}`,...(ae=(re=F.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var le,oe,se;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importFileUpload, \`<FileUpload size="sm" label="Devoir" />
<FileUpload size="md" label="Devoir" />
<FileUpload size="lg" label="Devoir" />\`),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-4">
        <FileUpload {...args} size="sm" label={\`\${copy.label} (\${copy.small})\`} dropLabel={copy.drop} browseLabel={copy.browse} />
        <FileUpload {...args} size="md" label={\`\${copy.label} (\${copy.medium})\`} dropLabel={copy.drop} browseLabel={copy.browse} />
        <FileUpload {...args} size="lg" label={\`\${copy.label} (\${copy.large})\`} dropLabel={copy.drop} browseLabel={copy.browse} />
      </div>;
  }
}`,...(se=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,ie,te;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Clic seul',
  parameters: componentSource(importFileUpload, '<FileUpload label="Devoir" dropzone={false} />'),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} dropzone={false} browseLabel={copy.browse} />;
  }
}`,...(te=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var pe,ce,de;U.parameters={...U.parameters,docs:{...(pe=U.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Plusieurs fichiers',
  parameters: componentSource(importFileUpload, '<FileUpload label="Devoir" multiple />'),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} dropLabel={copy.drop} browseLabel={copy.browse} multiple />;
  }
}`,...(de=(ce=U.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,fe;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importFileUpload, '<FileUpload label="Devoir" disabled />'),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} dropLabel={copy.drop} browseLabel={copy.browse} disabled />;
  }
}`,...(fe=(me=z.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var be,ge,ye;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(importFileUpload, '<FileUpload label="Devoir" invalid error="Ce champ est requis." />'),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} dropLabel={copy.drop} browseLabel={copy.browse} invalid error={copy.error} />;
  }
}`,...(ye=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var ve,xe,he;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Accept et taille max',
  parameters: componentSource(importFileUpload, \`<FileUpload
    label="Devoir"
    accept=".pdf,application/pdf"
    maxSize={5 * 1024 * 1024}
    helper="PDF, jusqu’à 5 Mo."
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} helper={copy.helper} dropLabel={copy.drop} browseLabel={copy.browse} accept=".pdf,application/pdf" maxSize={5 * 1024 * 1024} />;
  }
}`,...(he=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var Fe,we,Le;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Progression',
  parameters: componentSource(importFileUpload, \`<FileUpload
    label="Devoir"
    progress={<p>Envoi : 40 %</p>}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} dropLabel={copy.drop} browseLabel={copy.browse} defaultFiles={[new File(['x'], 'devoir.pdf', {
      type: 'application/pdf'
    })]} progress={<Text as="span" size="body-sm" tone="muted">
            {copy.progress}
          </Text>} />;
  }
}`,...(Le=(we=D.parameters)==null?void 0:we.docs)==null?void 0:Le.source}}};const dr=["Default","Sizes","ClickOnly","Multiple","Disabled","Invalid","MaxSize","Progress"],hr=Object.freeze(Object.defineProperty({__proto__:null,ClickOnly:L,Default:F,Disabled:z,Invalid:j,MaxSize:S,Multiple:U,Progress:D,Sizes:w,__namedExportsOrder:dr,default:cr},Symbol.toStringTag,{value:"Module"}));export{L as C,F as D,hr as F,j as I,U as M,D as P,w as S,z as a,S as b};
