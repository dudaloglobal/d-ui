import{q as n,d as o,j as t,r as Ie}from"./iframe-DRIDI3J7.js";import{j as Te}from"./arg-types-Di6f0Zb7.js";import{b as ve,c as xe,s as Ce}from"./docs-source-C_O40UCi.js";import{c as Ve,s as Se}from"./textControl-CNWrSeW7.js";import{T as ge}from"./TextInput-ConLFbOU.js";const he=`import { useState } from 'react';
import { TextInput } from 'd-ui';`;function _e(l){return(a,e)=>l.countRemaining(Math.max(0,(e??0)-a))}function s(l,a=""){return ve(he,`const [value, setValue] = useState(${JSON.stringify(a)});
return (
${l.trim().split(`
`).map(e=>`    ${e}`).join(`
`)}
);`)}function r({defaultValue:l,value:a,onChange:e,...fe}){const[Le,ye]=Ie.useState(()=>Se(a??l));return t.jsx(ge,{...fe,value:Le,onChange:T=>{ye(T.target.value),e==null||e(T)}})}const we={title:"Components/TextInput",component:ge,argTypes:Te,parameters:{controls:{include:["type","size","label","helper","placeholder","invalid","valid","disabled","required","clearable","showCount","fullWidth","focusShadow","maxLength"]}}},u={name:"Par défaut",parameters:s(`<TextInput
    label="Libellé du champ"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{...l,label:l.label??e.fieldLabel})}},c={name:"Désactivé",parameters:s(`<TextInput
    label="Libellé du champ"
    value={value}
    disabled
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.fieldLabel,defaultValue:e.filledValue,disabled:!0})}},p={name:"Valide",parameters:s(`<TextInput
    label="Libellé du champ"
    value={value}
    valid
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.fieldLabel,defaultValue:e.filledValue,valid:!0})}},d={name:"Invalide",parameters:s(`<TextInput
    label="Libellé du champ"
    value={value}
    invalid
    error="Valeur invalide"
    onChange={(event) => setValue(event.target.value)}
/>`,"Valeur"),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.fieldLabel,defaultValue:e.filledValue,invalid:!0,error:e.invalidValue})}},i={name:"Requis",parameters:s(`<TextInput
    label="Libellé du champ"
    value={value}
    required
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.fieldLabel,required:!0})}},m={name:"Aide",parameters:s(`<TextInput
    label="Libellé du champ"
    helper="Texte d’aide"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.fieldLabel,helper:e.helper})}},b={name:"Texte de substitution",parameters:s(`<TextInput
    label="Libellé du champ"
    placeholder="Texte de substitution"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.fieldLabel,placeholder:e.placeholder})}},v={name:"Icône",parameters:ve(he,`${Ce}

const [value, setValue] = useState('');
return (
    <TextInput
        type="search"
        label="Libellé du champ"
        icon={search}
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
);`),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.fieldLabel,type:"search",icon:t.jsx(Ve,{}),placeholder:e.search})}},x={name:"Effaçable",parameters:s(`<TextInput
    label="Libellé du champ"
    value={value}
    clearable
    clearLabel="Effacer"
    onChange={(event) => setValue(event.target.value)}
    onClear={() => setValue('')}
/>`,"Ada Lovelace"),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.fieldLabel,defaultValue:e.placeholderName,clearable:!0,clearLabel:e.clear})}},g={name:"Longueur maximale",parameters:s(`<TextInput
    label="Libellé du champ"
    value={value}
    maxLength={50}
    countMessage={(count, maxLength) =>
        \`\${Math.max(0, (maxLength ?? 0) - count)} caractères restants\`
    }
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.fieldLabel,maxLength:50,countMessage:_e(e)})}},h={name:"Préfixe et suffixe",parameters:xe("import { TextInput } from 'd-ui';",'<TextInput label="Site" prefix="https://" suffix=".com" />'),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.site,prefix:"https://",suffix:".com",placeholder:"dudalo"})}},f={name:"Tailles",parameters:xe("import { TextInput } from 'd-ui';",`<TextInput size="sm" label="Libellé du champ" />
<TextInput size="md" label="Libellé du champ" />
<TextInput size="lg" label="Libellé du champ" />`),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(r,{label:`${e.fieldLabel} (${e.small})`,size:"sm"}),t.jsx(r,{label:`${e.fieldLabel} (${e.medium})`,size:"md"}),t.jsx(r,{label:`${e.fieldLabel} (${e.large})`,size:"lg"})]})}},L={name:"Halo de focus",parameters:s(`<TextInput
    label="Libellé du champ"
    value={value}
    focusShadow
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{label:e.fieldLabel,focusShadow:!0})}},y={name:"Nombre",parameters:s(`<TextInput
    type="number"
    inputMode="numeric"
    label="Nombre"
    value={value}
    onChange={(event) => setValue(event.target.value)}
/>`),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{type:"number",inputMode:"numeric",label:e.numberLabel})}},I={name:"Mot de passe",parameters:s(`<TextInput
    type="password"
    autoComplete="current-password"
    label="Mot de passe"
    value={value}
    revealPasswordLabel="Afficher le mot de passe"
    hidePasswordLabel="Masquer le mot de passe"
    onChange={(event) => setValue(event.target.value)}
/>`,"secret"),render:(l,{globals:a})=>{const e=n(o(a.locale));return t.jsx(r,{type:"password",autoComplete:"current-password",label:e.password,defaultValue:"secret",revealPasswordLabel:e.revealPassword,hidePasswordLabel:e.hidePassword})}};var C,V,S;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(V=u.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var _,w,j;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(j=(w=c.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var P,M,$;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...($=(M=p.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var z,q,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(N=(q=d.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var A,D,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var R,F,H;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var O,J,W;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(W=(J=b.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var k,B,G;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(G=(B=v.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,le;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Préfixe et suffixe',
  parameters: componentSource("import { TextInput } from 'd-ui';", '<TextInput label="Site" prefix="https://" suffix=".com" />'),
  render: (_, {
    globals
  }) => {
    const copy = inputCopy(docsLocale(globals.locale));
    return <ControlledTextInput label={copy.site} prefix="https://" suffix=".com" placeholder="dudalo" />;
  }
}`,...(le=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var te,re,ne;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,se,ue;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ue=(se=L.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var ce,pe,de;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ie,me,be;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(be=(me=I.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const je=["Default","Disabled","Valid","Invalid","Required","Helper","Placeholder","Icon","Clearable","MaxLength","PrefixSuffix","Sizes","FocusShadow","Number","Password"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Clearable:x,Default:u,Disabled:c,FocusShadow:L,Helper:m,Icon:v,Invalid:d,MaxLength:g,Number:y,Password:I,Placeholder:b,PrefixSuffix:h,Required:i,Sizes:f,Valid:p,__namedExportsOrder:je,default:we},Symbol.toStringTag,{value:"Module"}));export{x as C,u as D,L as F,m as H,d as I,g as M,y as N,b as P,i as R,f as S,Ne as T,p as V,c as a,v as b,h as c,I as d};
