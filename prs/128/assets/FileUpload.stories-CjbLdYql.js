import{r as c,j as o,h as U,ah as d,d as u}from"./iframe-BKBj04mU.js";import{P as pr}from"./arg-types-C5N8fnnN.js";import{c as m}from"./docs-source-C_O40UCi.js";import{A as cr}from"./Avatar-Df4wz7Rj.js";import{B as W}from"./Button-PAQzA8aq.js";import{T as Z}from"./Text-BbERpV5A.js";import{f as dr,F as ur}from"./FilePreview-C6onNkip.js";import{m as mr}from"./textControl-fQw5dgfK.js";import{u as fr}from"./useFieldControl-CPC5_kWO.js";function br(r,l){if(!l)return!0;const e=l.split(",").map(p=>p.trim().toLowerCase()).filter(Boolean);if(e.length===0||e.includes("*/*")||e.includes("*"))return!0;const s=r.name.toLowerCase(),n=r.type.toLowerCase();return e.some(p=>p.startsWith(".")?s.endsWith(p):p.endsWith("/*")?n.startsWith(p.slice(0,-1)):n===p)}function gr(r,l){const e=[],s=[];for(const n of r){if(!br(n,l.accept)){s.push({file:n,reason:"type"});continue}if(l.maxSize!=null&&n.size>l.maxSize){s.push({file:n,reason:"size"});continue}e.push(n)}return{accepted:e,rejected:s}}function yr(r,l){return`${r.name} dépasse ${dr(l)}.`}function hr(r){return`${r.name} n’est pas un type accepté.`}function vr(r){return`Retirer ${r}`}const xr={sm:"min-h-24 px-3 py-4 text-sm",md:"min-h-32 px-4 py-6 text-base",lg:"min-h-40 px-5 py-8 text-lg"};function Ve(r){return`${r.name}-${r.size}-${r.lastModified}`}function wr(r){const l=new Set;return r.filter(e=>{const s=Ve(e);return l.has(s)?!1:(l.add(s),!0)})}function Fr(r,l,e,s){return r.reason==="size"&&l!=null?e(r.file,l):s(r.file)}const i=c.forwardRef(function({id:l,size:e="md",label:s,helper:n,error:p,invalid:N=!1,disabled:h=!1,required:K=!1,fullWidth:Be=!0,dropzone:Oe=!0,multiple:k=!1,maxSize:J,accept:Q,files:V,defaultFiles:X,onFilesChange:v,onChange:B,onReject:O,progress:F,browseLabel:_e,dropLabel:Ge="Glissez les fichiers ici ou cliquez pour les choisir",removeLabel:He=vr,filesLabel:We="Fichiers sélectionnés",preview:_="list",sizeErrorMessage:Ze=yr,typeErrorMessage:Ke=hr,name:Je,className:Qe,...Xe},E){const x=fr(),Ye=c.useId(),w=x.id??l??Ye,Y=`${w}-helper`,ee=`${w}-error`,er=`${w}-files`,I=c.useRef(null),[rr,re]=c.useState(X??[]),[M,ae]=c.useState([]),[le,G]=c.useState(!1),L=V??rr,b=!!(h||x.disabled),y=!!(N||x["aria-invalid"]||M.length>0),H=y?p??(M.length?M.map(a=>Fr(a,J,Ze,Ke)).join(" "):void 0):n,ar=mr(x["aria-describedby"],H?y?ee:Y:void 0),oe=_e??(k?"Choisir des fichiers":"Choisir un fichier"),se=c.useRef(()=>{});se.current=()=>{const a=X??[];L.length===0&&a.length===0&&M.length===0||(ae([]),V===void 0&&re(a),v==null||v(a))},c.useEffect(()=>{var A;const a=(A=I.current)==null?void 0:A.form;if(!a)return;let t;const g=nr=>{t=setTimeout(()=>{nr.defaultPrevented||se.current()},0)};return a.addEventListener("reset",g),()=>{t!==void 0&&clearTimeout(t),a.removeEventListener("reset",g)}},[]);function lr(a){I.current=a,typeof E=="function"?E(a):E&&(E.current=a)}function te(a,t){V===void 0&&re(a),ae(t),v==null||v(a),O==null||O(t);const g=I.current;g&&(g.value="")}function ie(a){const{accepted:t,rejected:g}=gr(a,{accept:Q,maxSize:J}),A=k?wr([...L,...t]):t.slice(-1);te(A,g)}function or(a){const t=a.target.files?Array.from(a.target.files):[];ie(t),B==null||B(a)}function sr(a){a.preventDefault(),G(!1),!b&&ie(Array.from(a.dataTransfer.files))}function ne(){var a;(a=I.current)==null||a.click()}function tr(a){te(L.filter((t,g)=>g!==a),[])}const pe=o.jsx("input",{...Xe,ref:lr,id:w,type:"file",name:Je,accept:Q,multiple:k,disabled:b,required:x.required??K,"aria-invalid":y||void 0,"aria-describedby":ar,tabIndex:-1,onChange:or,className:"d-ui-visually-hidden"}),ir=Oe?o.jsxs("div",{"data-dropping":le||void 0,onDragEnter:a=>{a.preventDefault(),b||G(!0)},onDragOver:a=>{a.preventDefault()},onDragLeave:a=>{a.currentTarget.contains(a.relatedTarget)||G(!1)},onDrop:sr,className:U("relative flex flex-col items-center justify-center gap-3 rounded-md border-2 border-dashed text-center",xr[e],le?"border-brand bg-surface-muted":"border-border bg-field",y&&"border-danger",b&&"pointer-events-none opacity-50","focus-within:ring-2 focus-within:ring-focus"),children:[pe,o.jsx("label",{htmlFor:w,className:"cursor-pointer",children:o.jsx(Z,{as:"span",tone:b?"muted":"default",children:Ge})}),o.jsx(W,{type:"button",variant:"secondary",size:e,disabled:b,onClick:ne,children:oe})]}):o.jsxs("div",{className:"w-fit rounded-md focus-within:ring-2 focus-within:ring-focus",children:[pe,o.jsx(W,{type:"button",variant:"secondary",size:e,disabled:b,onClick:ne,children:oe})]});return o.jsxs("div",{className:U("flex flex-col gap-2",Be?"w-full min-w-0":"w-80 max-w-full",Qe),children:[s?o.jsxs("label",{htmlFor:w,className:U("text-sm leading-5 font-medium",b?"text-fg/40":"text-fg"),children:[s,K||x.required?o.jsx("span",{"aria-hidden":"true",children:" *"}):null]}):null,ir,_!=="none"&&L.length>0?o.jsx("ul",{id:er,"aria-label":We,className:U("list-none p-0",_==="grid"?"grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4":"flex flex-col gap-1"),children:L.map((a,t)=>o.jsx("li",{className:"min-w-0",children:o.jsx(ur,{file:a,layout:_==="grid"?"tile":"row",disabled:b,removeLabel:He(a.name),onRemove:()=>tr(t),progress:typeof F=="function"?F(a):void 0})},Ve(a)))}):null,F&&typeof F!="function"?F:null,H?o.jsx("p",{id:y?ee:Y,role:y?"alert":void 0,className:U("text-sm leading-5",y?"text-danger":"text-fg/70"),children:H}):null]})});i.__docgenInfo={description:"Sélecteur de fichiers accessible : input natif masqué, clic, dépôt optionnel.\n\nPas de client HTTP : l’app envoie les `File` elle-même.",methods:[],displayName:"FileUpload",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Libellé visible au-dessus du champ."},helper:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dropzone:{required:!1,tsType:{name:"boolean"},description:`Zone de dépôt en plus du clic. Le clavier n’en a pas besoin :
le bouton / l’input fichier reste opérable.`,defaultValue:{value:"true",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"Taille max d’un fichier, en octets."},files:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:""},defaultFiles:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:""},onFilesChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},onReject:{required:!1,tsType:{name:"signature",type:"function",raw:"(rejections: FileRejection[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  file: File;
  reason: FileRejectionReason;
}`,signature:{properties:[{key:"file",value:{name:"File",required:!0}},{key:"reason",value:{name:"union",raw:"'type' | 'size'",elements:[{name:"literal",value:"'type'"},{name:"literal",value:"'size'"}],required:!0}}]}}],raw:"FileRejection[]"},name:"rejections"}],return:{name:"void"}}},description:""},progress:{required:!1,tsType:{name:"union",raw:"ReactNode | ((file: File) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Slot de progression : nœud unique, ou par fichier."},preview:{required:!1,tsType:{name:"union",raw:"'list' | 'grid' | 'none'",elements:[{name:"literal",value:"'list'"},{name:"literal",value:"'grid'"},{name:"literal",value:"'none'"}]},description:"Forme de l'aperçu des fichiers choisis.\n\n`list` (défaut) : une ligne par fichier. `grid` : des vignettes, la forme\nd'une galerie d'images. `none` : rien du tout — les fichiers sont dans\n`files`, la page les rend comme elle veut.\n\nAvec `none`, un `progress` **par fichier** n'est jamais appelé : il n'y a\nplus de ligne où le poser. Un `progress` unique, lui, reste rendu.",defaultValue:{value:"'list'",computed:!1}},browseLabel:{required:!1,tsType:{name:"string"},description:""},dropLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Glissez les fichiers ici ou cliquez pour les choisir'",computed:!1}},removeLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileName: string) => string",signature:{arguments:[{type:{name:"string"},name:"fileName"}],return:{name:"string"}}},description:"",defaultValue:{value:"function defaultRemoveLabel(fileName: string): string {\n  return `Retirer ${fileName}`;\n}",computed:!1}},filesLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Fichiers sélectionnés'",computed:!1}},sizeErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File, maxSize: number) => string",signature:{arguments:[{type:{name:"File"},name:"file"},{type:{name:"number"},name:"maxSize"}],return:{name:"string"}}},description:"",defaultValue:{value:"function defaultSizeError(file: File, maxSize: number): string {\n  return `${file.name} dépasse ${formatFileSize(maxSize)}.`;\n}",computed:!1}},typeErrorMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => string",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"string"}}},description:"",defaultValue:{value:"function defaultTypeError(file: File): string {\n  return `${file.name} n’est pas un type accepté.`;\n}",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1}}};const f="import { FileUpload } from 'd-ui';",Lr={title:"Components/FileUpload",component:i,argTypes:pr},S={name:"Par défaut",parameters:m(f,`<FileUpload
    label="Devoir"
    helper="PDF, jusqu’à 5 Mo."
    accept=".pdf,application/pdf"
    maxSize={5 * 1024 * 1024}
/>`),render:(r,{globals:l})=>{const e=d(u(l.locale));return o.jsx(i,{...r,label:e.label,helper:e.helper,dropLabel:e.drop,browseLabel:e.browse,accept:".pdf,application/pdf",maxSize:5*1024*1024})}},z={name:"Tailles",parameters:m(f,`<FileUpload size="sm" label="Devoir" />
<FileUpload size="md" label="Devoir" />
<FileUpload size="lg" label="Devoir" />`),render:(r,{globals:l})=>{const e=d(u(l.locale));return o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(i,{...r,size:"sm",label:`${e.label} (${e.small})`,dropLabel:e.drop,browseLabel:e.browse}),o.jsx(i,{...r,size:"md",label:`${e.label} (${e.medium})`,dropLabel:e.drop,browseLabel:e.browse}),o.jsx(i,{...r,size:"lg",label:`${e.label} (${e.large})`,dropLabel:e.drop,browseLabel:e.browse})]})}},j={name:"Clic seul",parameters:m(f,'<FileUpload label="Devoir" dropzone={false} />'),render:(r,{globals:l})=>{const e=d(u(l.locale));return o.jsx(i,{...r,label:e.label,dropzone:!1,browseLabel:e.browse})}},q={name:"Plusieurs fichiers",parameters:m(f,'<FileUpload label="Devoir" multiple />'),render:(r,{globals:l})=>{const e=d(u(l.locale));return o.jsx(i,{...r,label:e.label,dropLabel:e.drop,browseLabel:e.browse,multiple:!0})}},T={name:"Désactivé",parameters:m(f,'<FileUpload label="Devoir" disabled />'),render:(r,{globals:l})=>{const e=d(u(l.locale));return o.jsx(i,{...r,label:e.label,dropLabel:e.drop,browseLabel:e.browse,disabled:!0})}},D={name:"Invalide",parameters:m(f,'<FileUpload label="Devoir" invalid error="Ce champ est requis." />'),render:(r,{globals:l})=>{const e=d(u(l.locale));return o.jsx(i,{...r,label:e.label,dropLabel:e.drop,browseLabel:e.browse,invalid:!0,error:e.error})}},P={name:"Accept et taille max",parameters:m(f,`<FileUpload
    label="Devoir"
    accept=".pdf,application/pdf"
    maxSize={5 * 1024 * 1024}
    helper="PDF, jusqu’à 5 Mo."
/>`),render:(r,{globals:l})=>{const e=d(u(l.locale));return o.jsx(i,{...r,label:e.label,helper:e.helper,dropLabel:e.drop,browseLabel:e.browse,accept:".pdf,application/pdf",maxSize:5*1024*1024})}},C={name:"Progression",parameters:m(f,`<FileUpload
    label="Devoir"
    progress={<p>Envoi : 40 %</p>}
/>`),render:(r,{globals:l})=>{const e=d(u(l.locale));return o.jsx(i,{...r,label:e.label,dropLabel:e.drop,browseLabel:e.browse,defaultFiles:[new File(["x"],"devoir.pdf",{type:"application/pdf"})],progress:o.jsx(Z,{as:"span",size:"body-sm",tone:"muted",children:e.progress})})}};function ce(r){const l='<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><rect width="160" height="160" fill="#a5b4fc"/><circle cx="56" cy="52" r="20" fill="#e0e7ff"/><path d="M0 160 L70 74 L124 160 Z" fill="#6366f1"/></svg>';return new File([l],r,{type:"image/svg+xml"})}const R={name:"Galerie d’images",parameters:m(f,`<FileUpload
    label="Photos du cours"
    accept="image/*"
    multiple
    preview="grid"
    maxSize={2 * 1024 * 1024}
/>`),render:(r,{globals:l})=>{const e=d(u(l.locale));return o.jsx(i,{...r,label:e.galleryLabel,helper:e.galleryHelper,filesLabel:e.galleryFiles,dropLabel:e.drop,browseLabel:e.browse,accept:"image/*",multiple:!0,preview:"grid",maxSize:2*1024*1024,defaultFiles:[ce("amphi.png"),ce("atelier.png")]})}},$={name:"Photo unique",parameters:m(f,`{/* Un seul fichier, et c'est la page qui décide de l'aperçu : ici un Avatar. */}
<FileUpload
    label="Photo de profil"
    accept="image/*"
    dropzone={false}
    preview="none"
    files={photo ? [photo] : []}
    onFilesChange={(files) => setPhoto(files[0] ?? null)}
/>`),render:(r,{globals:l})=>{const e=d(u(l.locale)),[s,n]=c.useState(null),[p,N]=c.useState(void 0);return c.useEffect(()=>{if(!s){N(void 0);return}const h=URL.createObjectURL(s);return N(h),()=>URL.revokeObjectURL(h)},[s]),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx(cr,{src:p,name:e.photoLabel,size:"xxl"}),o.jsx(i,{...r,label:e.photoLabel,accept:"image/*",dropzone:!1,preview:"none",browseLabel:e.photoBrowse,files:s?[s]:[],onFilesChange:h=>n(h[0]??null)}),s?o.jsx(W,{variant:"ghost",onClick:()=>n(null),children:e.deletePhoto}):o.jsx(Z,{as:"span",size:"body-sm",tone:"muted",children:e.noFile})]})}};var de,ue,me;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var fe,be,ge;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ge=(be=z.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ye,he,ve;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Clic seul',
  parameters: componentSource(importFileUpload, '<FileUpload label="Devoir" dropzone={false} />'),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} dropzone={false} browseLabel={copy.browse} />;
  }
}`,...(ve=(he=j.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var xe,we,Fe;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Plusieurs fichiers',
  parameters: componentSource(importFileUpload, '<FileUpload label="Devoir" multiple />'),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} dropLabel={copy.drop} browseLabel={copy.browse} multiple />;
  }
}`,...(Fe=(we=q.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var Le,Ue,Se;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importFileUpload, '<FileUpload label="Devoir" disabled />'),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} dropLabel={copy.drop} browseLabel={copy.browse} disabled />;
  }
}`,...(Se=(Ue=T.parameters)==null?void 0:Ue.docs)==null?void 0:Se.source}}};var ze,je,qe;D.parameters={...D.parameters,docs:{...(ze=D.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: componentSource(importFileUpload, '<FileUpload label="Devoir" invalid error="Ce champ est requis." />'),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.label} dropLabel={copy.drop} browseLabel={copy.browse} invalid error={copy.error} />;
  }
}`,...(qe=(je=D.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var Te,De,Pe;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Pe=(De=P.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Ce,Re,$e;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...($e=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:$e.source}}};var Ne,Ee,Ie;R.parameters={...R.parameters,docs:{...(Ne=R.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Galerie d’images',
  parameters: componentSource(importFileUpload, \`<FileUpload
    label="Photos du cours"
    accept="image/*"
    multiple
    preview="grid"
    maxSize={2 * 1024 * 1024}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    return <FileUpload {...args} label={copy.galleryLabel} helper={copy.galleryHelper} filesLabel={copy.galleryFiles} dropLabel={copy.drop} browseLabel={copy.browse} accept="image/*" multiple preview="grid" maxSize={2 * 1024 * 1024} defaultFiles={[samplePhoto('amphi.png'), samplePhoto('atelier.png')]} />;
  }
}`,...(Ie=(Ee=R.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Me,Ae,ke;$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Photo unique',
  parameters: componentSource(importFileUpload, \`{/* Un seul fichier, et c'est la page qui décide de l'aperçu : ici un Avatar. */}
<FileUpload
    label="Photo de profil"
    accept="image/*"
    dropzone={false}
    preview="none"
    files={photo ? [photo] : []}
    onFilesChange={(files) => setPhoto(files[0] ?? null)}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = fileUploadCopy(docsLocale(globals.locale));
    const [photo, setPhoto] = useState<File | null>(null);
    const [src, setSrc] = useState<string | undefined>(undefined);

    /*
     * L'URL se crée dans un effet, et se révoque au retour. La fabriquer au
     * rendu en produirait une nouvelle à chaque passage, toutes retenues en
     * mémoire — c'est précisément ce que \`FilePreview\` évite quand on peut
     * s'en servir. Ici l'aperçu est un \`Avatar\`, donc la page s'en charge.
     */

    useEffect(() => {
      if (!photo) {
        setSrc(undefined);
        return;
      }
      const url = URL.createObjectURL(photo);
      setSrc(url);
      return () => URL.revokeObjectURL(url);
    }, [photo]);
    return <div className="flex items-center gap-4">
        <Avatar src={src} name={copy.photoLabel} size="xxl" />
        <FileUpload {...args} label={copy.photoLabel} accept="image/*" dropzone={false} preview="none" browseLabel={copy.photoBrowse} files={photo ? [photo] : []} onFilesChange={files => setPhoto(files[0] ?? null)} />
        {photo ? <Button variant="ghost" onClick={() => setPhoto(null)}>
            {copy.deletePhoto}
          </Button> : <Text as="span" size="body-sm" tone="muted">
            {copy.noFile}
          </Text>}
      </div>;
  }
}`,...(ke=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};const Ur=["Default","Sizes","ClickOnly","Multiple","Disabled","Invalid","MaxSize","Progress","ImageGallery","SinglePhoto"],$r=Object.freeze(Object.defineProperty({__proto__:null,ClickOnly:j,Default:S,Disabled:T,ImageGallery:R,Invalid:D,MaxSize:P,Multiple:q,Progress:C,SinglePhoto:$,Sizes:z,__namedExportsOrder:Ur,default:Lr},Symbol.toStringTag,{value:"Module"}));export{j as C,S as D,$r as F,R as I,q as M,C as P,z as S,$ as a,T as b,D as c,P as d};
