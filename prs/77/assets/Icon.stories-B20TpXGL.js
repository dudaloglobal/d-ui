import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as T}from"./cx-2dOUpm6k.js";import{B as p,I as A}from"./IconButton-BWJr5_bf.js";import{r as n}from"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";function D({title:s,titleId:r,...o},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},o),s?n.createElement("title",{id:r},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))}const F=n.forwardRef(D);function O({title:s,titleId:r,...o},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},o),s?n.createElement("title",{id:r},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"}))}const i=n.forwardRef(O);function P({title:s,titleId:r,...o},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},o),s?n.createElement("title",{id:r},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))}const W=n.forwardRef(P);function _({title:s,titleId:r,...o},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},o),s?n.createElement("title",{id:r},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))}const G=n.forwardRef(_),M={sm:"size-4",md:"size-5",lg:"size-6"};function a({as:s,size:r="md",label:o,className:t,...R}){const q=o?{role:"img","aria-label":o,"aria-hidden":void 0,focusable:!1}:{role:void 0,"aria-label":void 0,"aria-hidden":!0,focusable:!1};return e.jsx(s,{...R,...q,className:T("inline-block shrink-0",M[r],t)})}a.__docgenInfo={description:`Enveloppe une icône SVG avec une taille cohérente et la bonne sémantique a11y.

La couleur suit \`currentColor\` : l'icône hérite du texte qui la porte, donc
elle suit le thème sans prop de couleur ni token dédié.`,methods:[],displayName:"Icon",props:{as:{required:!0,tsType:{name:"ComponentType",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"ComponentType<SVGProps<SVGSVGElement>>"},description:"Composant SVG à rendre.\n\n`d-ui` ne dépend d'aucune librairie d'icônes : on passe le composant, il\nn'est donc jamais importé en bloc et le bundle ne garde que ce qui sert.\n\n```tsx\nimport { ChevronDownIcon } from '@heroicons/react/24/outline';\n<Icon as={ChevronDownIcon} />\n```"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Nom accessible.\n\nSans `label`, l'icône est décorative et masquée aux technologies\nd'assistance — le cas normal quand un texte voisin porte déjà le sens.\nAvec `label`, elle devient une image nommée."}}};const U={title:"Components/Icon",component:a,tags:["autodocs"],args:{as:i}},d={},m={render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(a,{as:i,size:"sm"}),e.jsx(a,{as:i,size:"md"}),e.jsx(a,{as:i,size:"lg"})]})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-fg",children:e.jsx(a,{as:i})}),e.jsx("span",{className:"text-brand",children:e.jsx(a,{as:i})}),e.jsx("span",{className:"text-on-brand bg-brand rounded-md p-2",children:e.jsx(a,{as:i})})]})},l={args:{as:G,label:"Supprimer définitivement"}},u={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(p,{icon:e.jsx(a,{as:F,size:"sm"}),iconPosition:"end",children:"Continuer"}),e.jsx(p,{variant:"secondary",icon:e.jsx(a,{as:W,size:"sm"}),children:"Filtrer"}),e.jsx(A,{icon:e.jsx(a,{as:G,size:"sm"}),"aria-label":"Supprimer"})]})};var f,x,g;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,h,b;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <Icon as={BellIcon} size="sm" />
      <Icon as={BellIcon} size="md" />
      <Icon as={BellIcon} size="lg" />
    </div>
}`,...(b=(h=m.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,I,j,S,B;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(I=c.parameters)==null?void 0:I.docs)==null?void 0:j.source},description:{story:"L'icône hérite de `currentColor` : elle suit le texte qui la porte.",...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.description}}};var k,z,C,E,y;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    as: TrashIcon,
    label: 'Supprimer définitivement'
  }
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source},description:{story:"Avec `label`, l'icône devient une image nommée. À réserver aux cas où aucun texte voisin ne porte le sens.",...(y=(E=l.parameters)==null?void 0:E.docs)==null?void 0:y.description}}};var L,N,V;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button icon={<Icon as={ArrowRightIcon} size="sm" />} iconPosition="end">
        Continuer
      </Button>
      <Button variant="secondary" icon={<Icon as={ChevronDownIcon} size="sm" />}>
        Filtrer
      </Button>
      <IconButton icon={<Icon as={TrashIcon} size="sm" />} aria-label="Supprimer" />
    </div>
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const X=["Default","Sizes","InheritsColor","Labelled","InsideButtons"];export{d as Default,c as InheritsColor,u as InsideButtons,l as Labelled,m as Sizes,X as __namedExportsOrder,U as default};
