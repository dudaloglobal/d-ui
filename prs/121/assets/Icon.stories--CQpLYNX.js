import{j as e,m as P,d as A}from"./iframe-CSDJ8R1k.js";import{i as L}from"./arg-types-B_nef0fB.js";import{c as s}from"./docs-source-C_O40UCi.js";import{B as f}from"./Button-DCvfpArC.js";import{I as O}from"./IconButton-Bu6_OKkE.js";import{I as o}from"./Icon-CtovchWW.js";import{F as I,a as M}from"./TrashIcon-DHHidqro.js";import{F as n}from"./BellIcon-Bm23bQwc.js";import{F as $}from"./ArrowRightIcon-B9begqf_.js";const p=`import { BellIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';`,E={title:"Components/Icon",component:o,argTypes:L,args:{as:n}},r={name:"Par défaut",parameters:s(p,"<Icon as={BellIcon} />")},c={name:"Tailles",parameters:s(p,`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="md" />
  <Icon as={BellIcon} size="lg" />
</>`),render:()=>e.jsxs("div",{className:"text-fg flex items-end gap-4",children:[e.jsx(o,{as:n,size:"sm"}),e.jsx(o,{as:n,size:"md"}),e.jsx(o,{as:n,size:"lg"})]})},t={name:"Couleur héritée",parameters:s(p,`<span className="text-brand">
  <Icon as={BellIcon} />
</span>`),render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-fg",children:e.jsx(o,{as:n})}),e.jsx("span",{className:"text-brand",children:e.jsx(o,{as:n})}),e.jsx("span",{className:"text-on-brand bg-brand rounded-md p-2",children:e.jsx(o,{as:n})})]})},i={name:"Même silhouette",parameters:s(p,`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="lg" />
</>`),render:()=>e.jsxs("div",{className:"text-fg flex items-end gap-4",children:[e.jsx(o,{as:n,size:"sm"}),e.jsx(o,{as:n,size:"md"}),e.jsx(o,{as:n,size:"lg"})]})},l={name:"Nomée",args:{as:I,label:"Supprimer définitivement"},parameters:s(`import { TrashIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';`,'<Icon as={TrashIcon} label="Supprimer définitivement" />'),render:(u,{globals:d})=>{const a=P(A(d.locale));return e.jsx(o,{...u,as:I,label:a.deleteForever})}},m={name:"Dans un bouton",parameters:s(`import { ArrowRightIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton } from 'd-ui';`,`<>
  <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
    Continuer
  </Button>
  <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label="Supprimer" />
</>`),render:(u,{globals:d})=>{const a=P(A(d.locale));return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(f,{icon:e.jsx(o,{as:$,size:"sm"}),iconPosition:"end",children:a.continue}),e.jsx(f,{variant:"secondary",icon:e.jsx(o,{as:M,size:"sm"}),children:a.filter}),e.jsx(O,{icon:e.jsx(o,{as:I,size:"sm"}),"aria-label":a.delete})]})}};var g,x,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(heroImport, '<Icon as={BellIcon} />')
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var B,z,b;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(b=(z=c.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var j,S,v;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
import { Icon } from 'd-ui';\`, '<Icon as={TrashIcon} label="Supprimer définitivement" />'),
  render: (args, {
    globals
  }) => {
    const copy = iconCopy(docsLocale(globals.locale));
    return <Icon {...args} as={TrashIcon} label={copy.deleteForever} />;
  }
}`,...(R=(w=l.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var F,D,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Dans un bouton',
  parameters: componentSource(\`import { ArrowRightIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton } from 'd-ui';\`, \`<>
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
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const k=["Default","Sizes","InheritsColor","OutlineScale","Labelled","InsideButtons"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InheritsColor:t,InsideButtons:m,Labelled:l,OutlineScale:i,Sizes:c,__namedExportsOrder:k,default:E},Symbol.toStringTag,{value:"Module"}));export{r as D,X as I,l as L,i as O,c as S,t as a,m as b};
