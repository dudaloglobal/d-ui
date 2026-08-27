import{r as d,j as l,J as n,d as s}from"./iframe-Wq3C05Zi.js";import{o as fa,e as We,c as Ge,q as xa}from"./docs-source-D4DylD1p.js";import{s as A,T as ga,d as ha,n as ya,m as La,a as ae,C as Ia,E as Ta,b as Ca,S as Va,c as Sa}from"./textControl-D3W0-3dK.js";const F=d.forwardRef(function({id:a,type:e="text",size:M="md",label:P,helper:w,error:u,invalid:Qe=!1,valid:H=!1,icon:B,prefix:k,suffix:O,fullWidth:Xe=!0,focusShadow:Ye,clearable:Ze=!1,onClear:N,clearLabel:ea="Effacer",showCount:aa,countMessage:la=ha,revealPasswordLabel:ta="Afficher le mot de passe",hidePasswordLabel:ra="Masquer le mot de passe",className:na,disabled:p,readOnly:J,required:U,value:W,defaultValue:sa,onChange:c,maxLength:$,"aria-invalid":G,"aria-describedby":oa,...z},ua){const R=d.useId(),K=a??R,Q=`${R}-count`,X=`${R}-helper`,E=W!==void 0,[ca,Y]=d.useState(()=>A(sa)),[j,pa]=d.useState(!1),D=E?A(W):ca,q=!!Qe||!!u||G===!0||G==="true",Z=e==="password",da=Ze&&D.length>0&&!p&&!J,ee=aa??$!=null,ia=q?u:w,ma=Z&&j?"text":e;function ba(_){E||Y(_.target.value),c==null||c(_)}function va(){E||Y(""),N==null||N(),c==null||c({target:{value:"",name:z.name},currentTarget:{value:"",name:z.name}})}return l.jsxs(ga,{id:K,label:P,helper:w,error:u,required:U,invalid:q,valid:H,disabled:!!p,fullWidth:Xe,focusShadow:Ye,size:M,className:na,showCount:ee,count:D.length,maxLength:$,countMessage:la,countId:Q,helperId:X,children:[B?l.jsx("span",{className:"inline-flex shrink-0 text-fg/70","aria-hidden":"true",children:B}):null,k?l.jsx("span",{className:"inline-flex shrink-0 text-fg/70",children:k}):null,l.jsx("input",{...z,ref:ua,id:K,type:ma,disabled:p,readOnly:J,required:U,value:D,maxLength:$,"aria-invalid":q||void 0,"aria-describedby":La(oa,ee&&Q,ia?X:void 0),onChange:ba,className:ya}),da?l.jsx(ae,{label:ea,disabled:p,onClick:va,children:l.jsx(Ia,{})}):null,Z?l.jsx(ae,{label:j?ra:ta,pressed:j,disabled:p,onClick:()=>pa(_=>!_),children:j?l.jsx(Ta,{}):l.jsx(Ca,{})}):null,l.jsx(Va,{invalid:q,valid:H}),O?l.jsx("span",{className:"inline-flex shrink-0 text-fg/70",children:O}):null]})});F.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{type:{required:!1,tsType:{name:"union",raw:"'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'",elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'number'"},{name:"literal",value:"'password'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'text'"},{name:"literal",value:"'url'"}]},description:"Type HTML : `text`, `email`, `password`, `search`, `number`, `tel`, `url`.",defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les formulaires aérés.',defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Libellé visible au-dessus du champ. Sinon, un `<label htmlFor>` externe ou `aria-labelledby`."},helper:{required:!1,tsType:{name:"ReactNode"},description:"Texte d’aide sous le champ. Remplacé par `error` si le champ est invalide."},error:{required:!1,tsType:{name:"ReactNode"},description:"Message d’erreur sous le champ. Pose aussi `aria-invalid`."},invalid:{required:!1,tsType:{name:"boolean"},description:"État d’erreur : `aria-invalid`. Même nom que `Field` (`invalid`).",defaultValue:{value:"false",computed:!1}},valid:{required:!1,tsType:{name:"boolean"},description:"État de succès : contour vert et icône. Ignoré si `invalid`.",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icône décorative au début du champ. Complète `label`, ne le remplace pas."},prefix:{required:!1,tsType:{name:"ReactNode"},description:"Contenu au début du champ (unité, schéma d’URL). Ne remplace pas le libellé."},suffix:{required:!1,tsType:{name:"ReactNode"},description:"Contenu à la fin du champ. Ne remplace pas le libellé."},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Étend le champ à la largeur du conteneur. Défaut : `true`.",defaultValue:{value:"true",computed:!1}},focusShadow:{required:!1,tsType:{name:"boolean"},description:"Halo de focus (ombre douce). Inactif sauf si `true`."},clearable:{required:!1,tsType:{name:"boolean"},description:"Bouton d’effacement dès que la valeur n’est pas vide.",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},clearLabel:{required:!1,tsType:{name:"string"},description:'Nom accessible du bouton d’effacement. Défaut `"Effacer"`.',defaultValue:{value:"'Effacer'",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"Compteur de caractères (restants si `maxLength` est posé).\nActivé par défaut avec `maxLength`. Lié via `aria-describedby`."},countMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number, maxLength?: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"},{type:{name:"number"},name:"maxLength"}],return:{name:"string"}}},description:"Libellé du compteur. Reçoit le nombre de caractères et `maxLength`.",defaultValue:{value:`function defaultCountMessage(count: number, maxLength?: number): string {
  if (maxLength == null) return String(count);
  const remaining = Math.max(0, maxLength - count);
  return remaining === 1 ? '1 caractère restant' : \`\${remaining} caractères restants\`;
}`,computed:!1}},revealPasswordLabel:{required:!1,tsType:{name:"string"},description:'Nom accessible pour afficher le mot de passe. Défaut `"Afficher le mot de passe"`.',defaultValue:{value:"'Afficher le mot de passe'",computed:!1}},hidePasswordLabel:{required:!1,tsType:{name:"string"},description:'Nom accessible pour masquer le mot de passe. Défaut `"Masquer le mot de passe"`.',defaultValue:{value:"'Masquer le mot de passe'",computed:!1}}}};const Ke=`import { useState } from 'react';
import { TextInput } from 'd-ui';`;function wa(t){return(a,e)=>t.countRemaining(Math.max(0,(e??0)-a))}function o(t,a=""){return We(Ke,`const [value, setValue] = useState(${JSON.stringify(a)});
return (
${t.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function r({defaultValue:t,value:a,onChange:e,...M}){const[P,w]=d.useState(()=>A(a??t));return l.jsx(F,{...M,value:P,onChange:u=>{w(u.target.value),e==null||e(u)}})}const ja={title:"Components/TextInput",component:F,argTypes:fa,parameters:{controls:{include:["type","size","label","helper","placeholder","invalid","valid","disabled","required","clearable","showCount","fullWidth","focusShadow","maxLength"]}}},i={name:"Par défaut",parameters:o(`<TextInput
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
/>`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,placeholder:e.placeholder})}},h={name:"Icône",parameters:We(Ke,`${xa}

const [value, setValue] = useState('');
return (
    <TextInput
        type="search"
        label="Libellé du champ"
        icon={search}
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
);`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,type:"search",icon:l.jsx(Sa,{}),placeholder:e.search})}},y={name:"Effaçable",parameters:o(`<TextInput
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
/>`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,maxLength:50,countMessage:wa(e)})}},I={name:"Préfixe et suffixe",parameters:Ge("import { TextInput } from 'd-ui';",'<TextInput label="Site" prefix="https://" suffix=".com" />'),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.site,prefix:"https://",suffix:".com",placeholder:"dudalo"})}},T={name:"Tailles",parameters:Ge("import { TextInput } from 'd-ui';",`<TextInput size="sm" label="Libellé du champ" />
<TextInput size="md" label="Libellé du champ" />
<TextInput size="lg" label="Libellé du champ" />`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx(r,{label:`${e.fieldLabel} (${e.small})`,size:"sm"}),l.jsx(r,{label:`${e.fieldLabel} (${e.medium})`,size:"md"}),l.jsx(r,{label:`${e.fieldLabel} (${e.large})`,size:"lg"})]})}},C={name:"Halo de focus",parameters:o(`<TextInput
    label="Libellé du champ"
    value={value}
    focusShadow
    onChange={(event) => setValue(event.target.value)}
/>`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{label:e.fieldLabel,focusShadow:!0})}},V={name:"Nombre",parameters:o(`<TextInput
    type="number"
    inputMode="numeric"
    label="Nombre"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{type:"number",inputMode:"numeric",label:e.numberLabel})}},S={name:"Mot de passe",parameters:o(`<TextInput
    type="password"
    autoComplete="current-password"
    label="Mot de passe"
    value={value}
    revealPasswordLabel="Afficher le mot de passe"
    hidePasswordLabel="Masquer le mot de passe"
    onChange={(event) => setValue(event.target.value)}
/>`,"secret"),render:(t,{globals:a})=>{const e=n(s(a.locale));return l.jsx(r,{type:"password",autoComplete:"current-password",label:e.password,defaultValue:"secret",revealPasswordLabel:e.revealPassword,hidePasswordLabel:e.hidePassword})}};var le,te,re;i.parameters={...i.parameters,docs:{...(le=i.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(re=(te=i.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,se,oe;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(se=m.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ue,ce,pe;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,ie,me;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var be,ve,fe;f.parameters={...f.parameters,docs:{...(be=f.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(fe=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var xe,ge,he;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(he=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ye,Le,Ie;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ie=(Le=g.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};var Te,Ce,Ve;h.parameters={...h.parameters,docs:{...(Te=h.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ve=(Ce=h.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};var Se,we,je;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(je=(we=y.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};var qe,_e,Me;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Me=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Me.source}}};var Pe,Ne,$e;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Préfixe et suffixe',
  parameters: componentSource("import { TextInput } from 'd-ui';", '<TextInput label="Site" prefix="https://" suffix=".com" />'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.site} prefix="https://" suffix=".com" placeholder="dudalo" />;
  }
}`,...($e=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:$e.source}}};var ze,Re,Ee;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ee=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var De,Ae,Fe;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Halo de focus',
  parameters: textInputSource(\`<TextInput
    label="Libellé du champ"
    value={value}
    focusShadow
    onChange={(event) => setValue(event.target.value)}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.fieldLabel} focusShadow />;
  }
}`,...(Fe=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:Fe.source}}};var He,Be,ke;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(ke=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};var Oe,Je,Ue;S.parameters={...S.parameters,docs:{...(Oe=S.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ue=(Je=S.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};const qa=["Default","Disabled","Valid","Invalid","Required","Helper","Placeholder","Icon","Clearable","MaxLength","PrefixSuffix","Sizes","FocusShadow","Number","Password"],Na=Object.freeze(Object.defineProperty({__proto__:null,Clearable:y,Default:i,Disabled:m,FocusShadow:C,Helper:x,Icon:h,Invalid:v,MaxLength:L,Number:V,Password:S,Placeholder:g,PrefixSuffix:I,Required:f,Sizes:T,Valid:b,__namedExportsOrder:qa,default:ja},Symbol.toStringTag,{value:"Module"}));export{y as C,i as D,C as F,x as H,v as I,L as M,V as N,g as P,f as R,T as S,Na as T,b as V,m as a,h as b,I as c,S as d};
