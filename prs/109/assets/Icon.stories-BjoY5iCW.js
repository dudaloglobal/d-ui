import{r as n,j as e,a5 as D,d as _}from"./iframe-CBq88VWm.js";import{A as P}from"./arg-types-Bf5UST3O.js";import{c as i}from"./docs-source-C_O40UCi.js";import{B as h}from"./Button-BmYN042X.js";import{I as F}from"./IconButton-CSlSesLq.js";import{I as s}from"./Icon-DJMTUrTC.js";function M({title:r,titleId:o,...a},c){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":o},a),r?n.createElement("title",{id:o},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))}const W=n.forwardRef(M);function $({title:r,titleId:o,...a},c){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":o},a),r?n.createElement("title",{id:o},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"}))}const t=n.forwardRef($);function H({title:r,titleId:o,...a},c){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":o},a),r?n.createElement("title",{id:o},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))}const V=n.forwardRef(H);function q({title:r,titleId:o,...a},c){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":o},a),r?n.createElement("title",{id:o},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))}const g=n.forwardRef(q),f=`import { BellIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';`,G={title:"Components/Icon",component:s,argTypes:P,args:{as:t}},l={name:"Par défaut",parameters:i(f,"<Icon as={BellIcon} />")},m={name:"Tailles",parameters:i(f,`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="md" />
  <Icon as={BellIcon} size="lg" />
</>`),render:()=>e.jsxs("div",{className:"text-fg flex items-end gap-4",children:[e.jsx(s,{as:t,size:"sm"}),e.jsx(s,{as:t,size:"md"}),e.jsx(s,{as:t,size:"lg"})]})},d={name:"Couleur héritée",parameters:i(f,`<span className="text-brand">
  <Icon as={BellIcon} />
</span>`),render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-fg",children:e.jsx(s,{as:t})}),e.jsx("span",{className:"text-brand",children:e.jsx(s,{as:t})}),e.jsx("span",{className:"text-on-brand bg-brand rounded-md p-2",children:e.jsx(s,{as:t})})]})},p={name:"Même silhouette",parameters:i(f,`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="lg" />
</>`),render:()=>e.jsxs("div",{className:"text-fg flex items-end gap-4",children:[e.jsx(s,{as:t,size:"sm"}),e.jsx(s,{as:t,size:"md"}),e.jsx(s,{as:t,size:"lg"})]})},u={name:"Nomée",args:{as:g,label:"Supprimer définitivement"},parameters:i(`import { TrashIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';`,'<Icon as={TrashIcon} label="Supprimer définitivement" />'),render:(r,{globals:o})=>{const a=D(_(o.locale));return e.jsx(s,{...r,as:g,label:a.deleteForever})}},I={name:"Dans un bouton",parameters:i(`import { ArrowRightIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton } from 'd-ui';`,`<>
  <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
    Continuer
  </Button>
  <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label="Supprimer" />
</>`),render:(r,{globals:o})=>{const a=D(_(o.locale));return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(h,{icon:e.jsx(s,{as:W,size:"sm"}),iconPosition:"end",children:a.continue}),e.jsx(h,{variant:"secondary",icon:e.jsx(s,{as:V,size:"sm"}),children:a.filter}),e.jsx(F,{icon:e.jsx(s,{as:g,size:"sm"}),"aria-label":a.delete})]})}};var x,B,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(heroImport, '<Icon as={BellIcon} />')
}`,...(b=(B=l.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var v,w,j;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(w=m.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var z,S,y;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,N,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(N=p.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var T,k,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var R,A,O;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(A=I.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const J=["Default","Sizes","InheritsColor","OutlineScale","Labelled","InsideButtons"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:l,InheritsColor:d,InsideButtons:I,Labelled:u,OutlineScale:p,Sizes:m,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{l as D,ee as I,u as L,p as O,m as S,d as a,I as b};
