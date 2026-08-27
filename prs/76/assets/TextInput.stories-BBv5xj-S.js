import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DQxMMF7O.js";import{f as da,g as Fe,c as Oe,i as ia}from"./docs-source-TRj_OXTg.js";import{i as n,d as s}from"./cx-BmrDAEIN.js";import{s as E,T as ma,d as ba,n as va,m as fa,C as ee,a as xa,E as ga,b as ha,S as ya,c as La}from"./textControl-BSZhVelk.js";const A=d.forwardRef(function({id:a,type:e="text",size:q="md",label:M,helper:S,error:u,invalid:We=!1,valid:H=!1,icon:B,prefix:k,suffix:F,fullWidth:Je=!0,clearable:Ge=!1,onClear:P,clearLabel:Ke="Clear",showCount:Qe,countMessage:Xe=ba,revealPasswordLabel:Ye="Show password",hidePasswordLabel:Ze="Hide password",className:ea,disabled:p,readOnly:O,required:U,value:W,defaultValue:aa,onChange:c,maxLength:N,"aria-invalid":J,"aria-describedby":la,...$},ta){const z=d.useId(),G=a??z,K=`${z}-count`,Q=`${z}-helper`,R=W!==void 0,[ra,X]=d.useState(()=>E(aa)),[w,na]=d.useState(!1),D=R?E(W):ra,j=!!We||!!u||J===!0||J==="true",Y=e==="password",sa=Ge&&D.length>0&&!p&&!O,Z=Qe??N!=null,oa=j?u:S,ua=Y&&w?"text":e;function ca(_){R||X(_.target.value),c==null||c(_)}function pa(){R||X(""),P==null||P(),c==null||c({target:{value:"",name:$.name},currentTarget:{value:"",name:$.name}})}return l.jsxs(ma,{id:G,label:M,helper:S,error:u,required:U,invalid:j,valid:H,disabled:!!p,fullWidth:Je,size:q,className:ea,showCount:Z,count:D.length,maxLength:N,countMessage:Xe,countId:K,helperId:Q,children:[B?l.jsx("span",{className:"inline-flex shrink-0 text-fg/70","aria-hidden":"true",children:B}):null,k?l.jsx("span",{className:"inline-flex shrink-0 text-fg/70",children:k}):null,l.jsx("input",{...$,ref:ta,id:G,type:ua,disabled:p,readOnly:O,required:U,value:D,maxLength:N,"aria-invalid":j||void 0,"aria-describedby":fa(la,Z&&K,oa?Q:void 0),onChange:ca,className:va}),sa?l.jsx(ee,{label:Ke,disabled:p,onClick:pa,children:l.jsx(xa,{})}):null,Y?l.jsx(ee,{label:w?Ze:Ye,pressed:w,disabled:p,onClick:()=>na(_=>!_),children:w?l.jsx(ga,{}):l.jsx(ha,{})}):null,l.jsx(ya,{invalid:j,valid:H}),F?l.jsx("span",{className:"inline-flex shrink-0 text-fg/70",children:F}):null]})});A.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{type:{required:!1,tsType:{name:"union",raw:"'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'",elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'number'"},{name:"literal",value:"'password'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'text'"},{name:"literal",value:"'url'"}]},description:"Type HTML : `text`, `email`, `password`, `search`, `number`, `tel`, `url`.",defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Libellé visible au-dessus du champ. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`."},helper:{required:!1,tsType:{name:"ReactNode"},description:"Texte d’aide sous le champ. Remplacé par `error` si le champ est invalide."},error:{required:!1,tsType:{name:"ReactNode"},description:"Message d’erreur sous le champ. Pose aussi `aria-invalid`."},invalid:{required:!1,tsType:{name:"boolean"},description:"État d’erreur : `aria-invalid`. Même nom que `Field` (`invalid`).",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"État de succès : contour vert et icône. Ignoré si `invalid`.",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icône décorative au début du champ. Complète `label`, ne le remplace pas."},prefix:{required:!1,tsType:{name:"ReactNode"},description:"Contenu au début du champ (unité, schéma d’URL). Ne remplace pas le libellé."},suffix:{required:!1,tsType:{name:"ReactNode"},description:"Contenu à la fin du champ. Ne remplace pas le libellé."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Étend le champ à la largeur du conteneur. Défaut : `true`.",defaultValue:{value:"true",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"Bouton d’effacement dès que la valeur n’est pas vide.",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},clearLabel:{required:!1,tsType:{name:"string"},description:'Nom accessible du bouton d’effacement. Défaut `"Clear"`.',defaultValue:{value:"'Clear'",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"Compteur de caractères (restants si `maxLength` est posé).\nActivé par défaut avec `maxLength`. Lié via `aria-describedby`."},countMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number, maxLength?: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"},{type:{name:"number"},name:"maxLength"}],return:{name:"string"}}},description:"Libellé du compteur. Reçoit le nombre de caractères et `maxLength`.",defaultValue:{value:`function defaultCountMessage(count: number, maxLength?: number): string {
  if (maxLength == null) return String(count);
  const remaining = Math.max(0, maxLength - count);
  return remaining === 1 ? '1 character remaining' : \`\${remaining} characters remaining\`;
}`,computed:!1}},revealPasswordLabel:{required:!1,tsType:{name:"string"},description:'Nom accessible pour afficher le mot de passe. Défaut `"Show password"`.',defaultValue:{value:"'Show password'",computed:!1}},hidePasswordLabel:{required:!1,tsType:{name:"string"},description:'Nom accessible pour masquer le mot de passe. Défaut `"Hide password"`.',defaultValue:{value:"'Hide password'",computed:!1}}}};const Ue=`import { useState } from 'react';
import { TextInput } from 'd-ui';`;function Ia(t){return(a,e)=>t.countRemaining(Math.max(0,(e??0)-a))}function o(t,a=""){return Fe(Ue,`const [value, setValue] = useState(${JSON.stringify(a)});
return (
${t.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function r({defaultValue:t,value:a,onChange:e,...q}){const[M,S]=d.useState(()=>E(a??t));return l.jsx(A,{...q,value:M,onChange:u=>{S(u.target.value),e==null||e(u)}})}const Ta={title:"Components/TextInput",component:A,argTypes:da,parameters:{controls:{include:["type","size","label","helper","placeholder","invalid","valid","disabled","required","clearable","showCount","fullWidth","maxLength"]}}},i={name:"Par défaut",parameters:o(`<TextInput
    label="Libellé du champ"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{...t,label:t.label??e.fieldLabel})}},m={name:"Désactivé",parameters:o(`<TextInput
    label="Libellé du champ"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,defaultValue:e.filledValue,disabled:!0})}},b={name:"Valide",parameters:o(`<TextInput
    label="Libellé du champ"
    value={value}
    valid
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,defaultValue:e.filledValue,valid:!0})}},v={name:"Invalide",parameters:o(`<TextInput
    label="Libellé du champ"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,defaultValue:e.filledValue,invalid:!0,error:e.invalidValue})}},f={name:"Requis",parameters:o(`<TextInput
    label="Libellé du champ"
    value={value}
    required
    onChange={(event) => setValue(event.target.value)}
/>`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,required:!0})}},x={name:"Aide",parameters:o(`<TextInput
    label="Libellé du champ"
    helper="Texte d’aide"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,helper:e.helper})}},g={name:"Texte de substitution",parameters:o(`<TextInput
    label="Libellé du champ"
    placeholder="Texte de substitution"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,placeholder:e.placeholder})}},h={name:"Icône",parameters:Fe(Ue,`${ia}

const [value, setValue] = useState('');
return (
    <TextInput
        type="search"
        label="Libellé du champ"
        icon={search}
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
);`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,type:"search",icon:l.jsx(La,{}),placeholder:e.search})}},y={name:"Effaçable",parameters:o(`<TextInput
    label="Libellé du champ"
    value={value}
    clearable
    clearLabel="Effacer"
    onChange={(event) => setValue(event.target.value)}
    onClear={() => setValue('')}
/>`,"Ada Lovelace"),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,defaultValue:e.placeholderName,clearable:!0,clearLabel:e.clear})}},L={name:"Longueur maximale",parameters:o(`<TextInput
    label="Libellé du champ"
    value={value}
    maxLength={50}
    countMessage={(count, maxLength) =>
        \`\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\`
    }
    onChange={(event) => setValue(event.target.value)}
/>`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,maxLength:50,countMessage:Ia(e)})}},I={name:"Préfixe et suffixe",parameters:Oe("import { TextInput } from 'd-ui';",'<TextInput label="Site" prefix="https://" suffix=".com" />'),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.site,prefix:"https://",suffix:".com",placeholder:"dudalo"})}},T={name:"Tailles",parameters:Oe("import { TextInput } from 'd-ui';",`<TextInput size="sm" label="Libellé du champ" />
<TextInput size="md" label="Libellé du champ" />
<TextInput size="lg" label="Libellé du champ" />`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx(r,{label:`${e.fieldLabel} (${e.small})`,size:"sm"}),l.jsx(r,{label:`${e.fieldLabel} (${e.medium})`,size:"md"}),l.jsx(r,{label:`${e.fieldLabel} (${e.large})`,size:"lg"})]})}},C={name:"Nombre",parameters:o(`<TextInput
    type="number"
    inputMode="numeric"
    label="Nombre"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{type:"number",inputMode:"numeric",label:e.numberLabel})}},V={name:"Mot de passe",parameters:o(`<TextInput
    type="password"
    autoComplete="current-password"
    label="Mot de passe"
    value={value}
    revealPasswordLabel="Afficher le mot de passe"
    hidePasswordLabel="Masquer le mot de passe"
    onChange={(event) => setValue(event.target.value)}
/>`,"secret"),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{type:"password",autoComplete:"current-password",label:e.password,defaultValue:"secret",revealPasswordLabel:e.revealPassword,hidePasswordLabel:e.hidePassword})}};var ae,le,te;i.parameters={...i.parameters,docs:{...(ae=i.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: textInputSource(\`<TextInput
    label="Libellé du champ"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput {...args} label={args.label ?? copy.fieldLabel} />;
  }
}`,...(te=(le=i.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var re,ne,se;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: textInputSource(\`<TextInput
    label="Libellé du champ"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} defaultValue={copy.filledValue} disabled />;
  }
}`,...(se=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ue,ce;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Valide',
  parameters: textInputSource(\`<TextInput
    label="Libellé du champ"
    value={value}
    valid
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} defaultValue={copy.filledValue} valid />;
  }
}`,...(ce=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,de,ie;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Invalide',
  parameters: textInputSource(\`<TextInput
    label="Libellé du champ"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>\`, 'Valeur'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} defaultValue={copy.filledValue} invalid error={copy.invalidValue} />;
  }
}`,...(ie=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var me,be,ve;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Requis',
  parameters: textInputSource(\`<TextInput
    label="Libellé du champ"
    value={value}
    required
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} required />;
  }
}`,...(ve=(be=f.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var fe,xe,ge;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Aide',
  parameters: textInputSource(\`<TextInput
    label="Libellé du champ"
    helper="Texte d’aide"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} helper={copy.helper} />;
  }
}`,...(ge=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var he,ye,Le;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Texte de substitution',
  parameters: textInputSource(\`<TextInput
    label="Libellé du champ"
    placeholder="Texte de substitution"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} placeholder={copy.placeholder} />;
  }
}`,...(Le=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:Le.source}}};var Ie,Te,Ce;h.parameters={...h.parameters,docs:{...(Ie=h.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Icône',
  parameters: componentSourceFn(importTextInput, \`\${searchIconSource}

const [value, setValue] = useState('');
return (
    <TextInput
        type="search"
        label="Libellé du champ"
        icon={search}
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
);\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} type="search" icon={<SearchIcon />} placeholder={copy.search} />;
  }
}`,...(Ce=(Te=h.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Ve,Se,we;y.parameters={...y.parameters,docs:{...(Ve=y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Effaçable',
  parameters: textInputSource(\`<TextInput
    label="Libellé du champ"
    value={value}
    clearable
    clearLabel="Effacer"
    onChange={(event) => setValue(event.target.value)}
    onClear={() => setValue('')}
/>\`, 'Ada Lovelace'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} defaultValue={copy.placeholderName} clearable clearLabel={copy.clear} />;
  }
}`,...(we=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var je,_e,qe;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Longueur maximale',
  parameters: textInputSource(\`<TextInput
    label="Libellé du champ"
    value={value}
    maxLength={50}
    countMessage={(count, maxLength) =>
        \\\`\\\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\\\`
    }
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} maxLength={50} countMessage={remainingMessage(copy)} />;
  }
}`,...(qe=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};var Me,Pe,Ne;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Préfixe et suffixe',
  parameters: componentSource("import { TextInput } from 'd-ui';", '<TextInput label="Site" prefix="https://" suffix=".com" />'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.site} prefix="https://" suffix=".com" placeholder="dudalo" />;
  }
}`,...(Ne=(Pe=I.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};var $e,ze,Re;T.parameters={...T.parameters,docs:{...($e=T.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource("import { TextInput } from 'd-ui';", \`<TextInput size="sm" label="Libellé du champ" />
<TextInput size="md" label="Libellé du champ" />
<TextInput size="lg" label="Libellé du champ" />\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-4">
        <ControlledTextInput label={\`\${copy.fieldLabel} (\${copy.small})\`} size="sm" />
        <ControlledTextInput label={\`\${copy.fieldLabel} (\${copy.medium})\`} size="md" />
        <ControlledTextInput label={\`\${copy.fieldLabel} (\${copy.large})\`} size="lg" />
      </div>;
  }
}`,...(Re=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:Re.source}}};var De,Ee,Ae;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Nombre',
  parameters: textInputSource(\`<TextInput
    type="number"
    inputMode="numeric"
    label="Nombre"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput type="number" inputMode="numeric" label={copy.numberLabel} />;
  }
}`,...(Ae=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var He,Be,ke;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'Mot de passe',
  parameters: textInputSource(\`<TextInput
    type="password"
    autoComplete="current-password"
    label="Mot de passe"
    value={value}
    revealPasswordLabel="Afficher le mot de passe"
    hidePasswordLabel="Masquer le mot de passe"
    onChange={(event) => setValue(event.target.value)}
/>\`, 'secret'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput type="password" autoComplete="current-password" label={copy.password} defaultValue="secret" revealPasswordLabel={copy.revealPassword} hidePasswordLabel={copy.hidePassword} />;
  }
}`,...(ke=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};const Ca=["Default","Disabled","Valid","Invalid","Required","Helper","Placeholder","Icon","Clearable","MaxLength","PrefixSuffix","Sizes","Number","Password"],qa=Object.freeze(Object.defineProperty({__proto__:null,Clearable:y,Default:i,Disabled:m,Helper:x,Icon:h,Invalid:v,MaxLength:L,Number:C,Password:V,Placeholder:g,PrefixSuffix:I,Required:f,Sizes:T,Valid:b,__namedExportsOrder:Ca,default:Ta},Symbol.toStringTag,{value:"Module"}));export{y as C,i as D,x as H,v as I,L as M,C as N,g as P,f as R,T as S,qa as T,b as V,m as a,h as b,I as c,V as d};
