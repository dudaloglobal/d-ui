import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{q as P,c as i}from"./docs-source-CfTB_XnX.js";import{c as _,g as G,d as q}from"./cx-B-kXdATb.js";import{B as h}from"./Button-DXSNvJqw.js";import{I as F}from"./IconButton-BecWS15q.js";import{r}from"./index-DQxMMF7O.js";function M({title:o,titleId:n,...s},c){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":n},s),o?r.createElement("title",{id:n},o):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))}const W=r.forwardRef(M);function $({title:o,titleId:n,...s},c){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":n},s),o?r.createElement("title",{id:n},o):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"}))}const t=r.forwardRef($);function H({title:o,titleId:n,...s},c){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":n},s),o?r.createElement("title",{id:n},o):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))}const J=r.forwardRef(H);function K({title:o,titleId:n,...s},c){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":n},s),o?r.createElement("title",{id:n},o):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))}const g=r.forwardRef(K),Q={sm:"size-4",md:"size-5",lg:"size-6"};function a({as:o,size:n="md",label:s,className:c,...A}){const O=s?{role:"img","aria-label":s,"aria-hidden":void 0,focusable:!1}:{role:void 0,"aria-label":void 0,"aria-hidden":!0,focusable:!1};return e.jsx(o,{...A,...O,className:_("inline-block shrink-0",Q[n],c)})}a.__docgenInfo={description:`Enveloppe une icône SVG avec une taille cohérente et la bonne sémantique a11y.

La couleur suit \`currentColor\` : l'icône hérite du texte qui la porte, donc
elle suit le thème sans prop de couleur ni token dédié.`,methods:[],displayName:"Icon",props:{as:{required:!0,tsType:{name:"ComponentType",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"ComponentType<SVGProps<SVGSVGElement>>"},description:"Composant SVG à rendre.\n\n`d-ui` ne dépend d'aucune librairie d'icônes : on passe le composant, il\nn'est donc jamais importé en bloc et le bundle ne garde que ce qui sert.\n\n```tsx\nimport { ChevronDownIcon } from '@heroicons/react/24/outline';\n<Icon as={ChevronDownIcon} />\n```"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Nom accessible.\n\nSans `label`, l'icône est décorative et masquée aux technologies\nd'assistance — le cas normal quand un texte voisin porte déjà le sens.\nAvec `label`, elle devient une image nommée."}}};const f=`import { BellIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';`,U={title:"Components/Icon",component:a,argTypes:P,args:{as:t}},l={name:"Par défaut",parameters:i(f,"<Icon as={BellIcon} />")},m={name:"Tailles",parameters:i(f,`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="md" />
  <Icon as={BellIcon} size="lg" />
</>`),render:()=>e.jsxs("div",{className:"text-fg flex items-end gap-4",children:[e.jsx(a,{as:t,size:"sm"}),e.jsx(a,{as:t,size:"md"}),e.jsx(a,{as:t,size:"lg"})]})},d={name:"Couleur héritée",parameters:i(f,`<span className="text-brand">
  <Icon as={BellIcon} />
</span>`),render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-fg",children:e.jsx(a,{as:t})}),e.jsx("span",{className:"text-brand",children:e.jsx(a,{as:t})}),e.jsx("span",{className:"text-on-brand bg-brand rounded-md p-2",children:e.jsx(a,{as:t})})]})},p={name:"Même silhouette",parameters:i(f,`<>
  <Icon as={BellIcon} size="sm" />
  <Icon as={BellIcon} size="lg" />
</>`),render:()=>e.jsxs("div",{className:"text-fg flex items-end gap-4",children:[e.jsx(a,{as:t,size:"sm"}),e.jsx(a,{as:t,size:"md"}),e.jsx(a,{as:t,size:"lg"})]})},u={name:"Nomée",args:{as:g,label:"Supprimer définitivement"},parameters:i(`import { TrashIcon } from '@heroicons/react/24/outline';
import { Icon } from 'd-ui';`,'<Icon as={TrashIcon} label="Supprimer définitivement" />'),render:(o,{globals:n})=>{const s=G(q(n.locale));return e.jsx(a,{...o,as:g,label:s.deleteForever})}},I={name:"Dans un bouton",parameters:i(`import { ArrowRightIcon, ChevronDownIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton } from 'd-ui';`,`<>
  <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
    Continuer
  </Button>
  <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label="Supprimer" />
</>`),render:(o,{globals:n})=>{const s=G(q(n.locale));return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(h,{icon:e.jsx(a,{as:W,size:"sm"}),iconPosition:"end",children:s.continue}),e.jsx(h,{variant:"secondary",icon:e.jsx(a,{as:J,size:"sm"}),children:s.filter}),e.jsx(F,{icon:e.jsx(a,{as:g,size:"sm"}),"aria-label":s.delete})]})}};var x,b,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(heroImport, '<Icon as={BellIcon} />')
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var B,w,z;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(w=m.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var S,j,y;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(j=d.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var C,T,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(N=(T=p.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var k,E,L;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(L=(E=u.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var R,V,D;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(V=I.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const X=["Default","Sizes","InheritsColor","OutlineScale","Labelled","InsideButtons"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:l,InheritsColor:d,InsideButtons:I,Labelled:u,OutlineScale:p,Sizes:m,__namedExportsOrder:X,default:U},Symbol.toStringTag,{value:"Module"}));export{l as D,re as I,u as L,p as O,m as S,d as a,I as b};
