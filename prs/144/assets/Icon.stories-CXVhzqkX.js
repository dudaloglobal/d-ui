import{j as e,n as _,d as A}from"./iframe-CF-6NDtP.js";import{j as P}from"./arg-types--G9daUKm.js";import{c as s}from"./docs-source-C_O40UCi.js";import{B as x}from"./Button-DTD6VUeU.js";import{I as L}from"./IconButton-DTxJryZw.js";import{I as n}from"./Icon-DSmifnLV.js";import{F as I,a as O}from"./TrashIcon-CEbOvTQF.js";import{F as o}from"./BellIcon-nPG3kiy3.js";import{F as M}from"./ArrowRightIcon-8bXc65tn.js";const p=`import { BellIcon } from '@heroicons/react/24/outline';
import { Icon } from '@dudaloglobal/d-ui';`,$={title:"Components/Icon",component:n,argTypes:P,args:{as:o}},r={name:"Par défaut",parameters:s(p,"<Icon as={BellIcon} />")},c={name:"Tailles",parameters:s(p,`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="md" />
  <Icon as={BellIcon} size="lg" />
</>`),render:()=>e.jsxs("div",{className:"text-fg flex items-end gap-4",children:[e.jsx(n,{as:o,size:"sm"}),e.jsx(n,{as:o,size:"md"}),e.jsx(n,{as:o,size:"lg"})]})},t={name:"Couleur héritée",parameters:s(p,`<span className="text-brand">
  <Icon as={BellIcon} />
</span>`),render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-fg",children:e.jsx(n,{as:o})}),e.jsx("span",{className:"text-brand",children:e.jsx(n,{as:o})}),e.jsx("span",{className:"text-on-brand bg-brand rounded-md p-2",children:e.jsx(n,{as:o})})]})},i={name:"Même silhouette",parameters:s(p,`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="lg" />
</>`),render:()=>e.jsxs("div",{className:"text-fg flex items-end gap-4",children:[e.jsx(n,{as:o,size:"sm"}),e.jsx(n,{as:o,size:"md"}),e.jsx(n,{as:o,size:"lg"})]})},l={name:"Nomée",args:{as:I,label:"Supprimer définitivement"},parameters:s(`import { TrashIcon } from '@heroicons/react/24/outline';
import { Icon } from '@dudaloglobal/d-ui';`,'<Icon as={TrashIcon} label="Supprimer définitivement" />'),render:(u,{globals:d})=>{const a=_(A(d.locale));return e.jsx(n,{...u,as:I,label:a.deleteForever})}},m={name:"Dans un bouton",parameters:s(`import { ArrowRightIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton } from '@dudaloglobal/d-ui';`,`<>
  <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
    Continuer
  </Button>
  <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label="Supprimer" />
</>`),render:(u,{globals:d})=>{const a=_(A(d.locale));return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(x,{icon:e.jsx(n,{as:M,size:"sm"}),iconPosition:"end",children:a.continue}),e.jsx(x,{variant:"secondary",icon:e.jsx(n,{as:O,size:"sm"}),children:a.filter}),e.jsx(L,{icon:e.jsx(n,{as:I,size:"sm"}),"aria-label":a.delete})]})}},k=["Default","Sizes","InheritsColor","OutlineScale","Labelled","InsideButtons"];var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(heroImport, '<Icon as={BellIcon} />')
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var B,b,z;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(heroImport, \`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="md" />
  <Icon as={BellIcon} size="lg" />
</>\`),
  render: () => <div className="text-fg flex items-end gap-4">
      <Icon as={BellIcon} size="sm" />
      <Icon as={BellIcon} size="md" />
      <Icon as={BellIcon} size="lg" />
    </div>
}`,...(z=(b=c.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var j,S,v;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Couleur héritée',
  parameters: componentSource(heroImport, \`<span className="text-brand">
  <Icon as={BellIcon} />
</span>\`),
  render: () => <div className="flex items-center gap-4">
      <span className="text-fg">
        <Icon as={BellIcon} />
      </span>
      <span className="text-brand">
        <Icon as={BellIcon} />
      </span>
      <span className="text-on-brand bg-brand rounded-md p-2">
        <Icon as={BellIcon} />
      </span>
    </div>
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var N,y,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Même silhouette',
  parameters: componentSource(heroImport, \`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="lg" />
</>\`),
  render: () => <div className="text-fg flex items-end gap-4">
      <Icon as={BellIcon} size="sm" />
      <Icon as={BellIcon} size="md" />
      <Icon as={BellIcon} size="lg" />
    </div>
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var C,w,R;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Nomée',
  args: {
    as: TrashIcon,
    label: 'Supprimer définitivement'
  },
  parameters: componentSource(\`import { TrashIcon } from '@heroicons/react/24/outline';
import { Icon } from '@dudaloglobal/d-ui';\`, '<Icon as={TrashIcon} label="Supprimer définitivement" />'),
  render: (args, {
    globals
  }) => {
    const copy = iconCopy(docsLocale(globals.locale));
    return <Icon {...args} as={TrashIcon} label={copy.deleteForever} />;
  }
}`,...(R=(w=l.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var E,F,D;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Dans un bouton',
  parameters: componentSource(\`import { ArrowRightIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton } from '@dudaloglobal/d-ui';\`, \`<>
  <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
    Continuer
  </Button>
  <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label="Supprimer" />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = iconCopy(docsLocale(globals.locale));
    return <div className="flex items-center gap-3">
        <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
          {copy.continue}
        </Button>
        <Button variant="secondary" icon={<Icon as={ChevronDownIcon} size="sm" />}>
          {copy.filter}
        </Button>
        <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label={copy.delete} />
      </div>;
  }
}`,...(D=(F=m.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const X=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InheritsColor:t,InsideButtons:m,Labelled:l,OutlineScale:i,Sizes:c,__namedExportsOrder:k,default:$},Symbol.toStringTag,{value:"Module"}));export{r as D,X as I,l as L,i as O,c as S,t as a,m as b};
