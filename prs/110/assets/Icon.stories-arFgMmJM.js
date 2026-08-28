import{r as I,j as e,V as _,d as O}from"./iframe-DQkPQlwv.js";import{m as E}from"./arg-types-DZVvtZDS.js";import{c as a}from"./docs-source-C_O40UCi.js";import{B as g}from"./Button-BsdUeiIE.js";import{I as k}from"./IconButton-BiVw4vF8.js";import{I as o}from"./Icon-Bg_WIVcI.js";import{F as f,a as M}from"./TrashIcon-CQkxOwn4.js";import{F as $}from"./ArrowRightIcon-iY9007Xv.js";function V({title:t,titleId:r,...s},P){return I.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:P,"aria-labelledby":r},s),t?I.createElement("title",{id:r},t):null,I.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"}))}const n=I.forwardRef(V),u=`import { BellIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';`,W={title:"Components/Icon",component:o,argTypes:E,args:{as:n}},c={name:"Par défaut",parameters:a(u,"<Icon as={BellIcon} />")},i={name:"Tailles",parameters:a(u,`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="md" />
  <Icon as={BellIcon} size="lg" />
</>`),render:()=>e.jsxs("div",{className:"text-fg flex items-end gap-4",children:[e.jsx(o,{as:n,size:"sm"}),e.jsx(o,{as:n,size:"md"}),e.jsx(o,{as:n,size:"lg"})]})},l={name:"Couleur héritée",parameters:a(u,`<span className="text-brand">
  <Icon as={BellIcon} />
</span>`),render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-fg",children:e.jsx(o,{as:n})}),e.jsx("span",{className:"text-brand",children:e.jsx(o,{as:n})}),e.jsx("span",{className:"text-on-brand bg-brand rounded-md p-2",children:e.jsx(o,{as:n})})]})},m={name:"Même silhouette",parameters:a(u,`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="lg" />
</>`),render:()=>e.jsxs("div",{className:"text-fg flex items-end gap-4",children:[e.jsx(o,{as:n,size:"sm"}),e.jsx(o,{as:n,size:"md"}),e.jsx(o,{as:n,size:"lg"})]})},p={name:"Nomée",args:{as:f,label:"Supprimer définitivement"},parameters:a(`import { TrashIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';`,'<Icon as={TrashIcon} label="Supprimer définitivement" />'),render:(t,{globals:r})=>{const s=_(O(r.locale));return e.jsx(o,{...t,as:f,label:s.deleteForever})}},d={name:"Dans un bouton",parameters:a(`import { ArrowRightIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton } from 'd-ui';`,`<>
  <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
    Continuer
  </Button>
  <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label="Supprimer" />
</>`),render:(t,{globals:r})=>{const s=_(O(r.locale));return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(g,{icon:e.jsx(o,{as:$,size:"sm"}),iconPosition:"end",children:s.continue}),e.jsx(g,{variant:"secondary",icon:e.jsx(o,{as:M,size:"sm"}),children:s.filter}),e.jsx(k,{icon:e.jsx(o,{as:f,size:"sm"}),"aria-label":s.delete})]})}};var x,h,B;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(heroImport, '<Icon as={BellIcon} />')
}`,...(B=(h=c.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var b,z,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(z=i.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var v,S,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var y,N,T;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var C,R,A;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(R=p.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,F,L;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const q=["Default","Sizes","InheritsColor","OutlineScale","Labelled","InsideButtons"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:c,InheritsColor:l,InsideButtons:d,Labelled:p,OutlineScale:m,Sizes:i,__namedExportsOrder:q,default:W},Symbol.toStringTag,{value:"Module"}));export{c as D,Z as I,p as L,m as O,i as S,l as a,d as b};
