import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as u}from"./cx-2dOUpm6k.js";import{T as s}from"./Text-B5LM6aWp.js";function t({orientation:r="horizontal",label:o,className:l,...c}){const d=o?{role:"separator","aria-orientation":r,"aria-label":o}:{role:"none","aria-hidden":!0},p=r==="horizontal"?"h-px w-full":"w-px self-stretch min-h-4";return r==="vertical"?e.jsx("div",{...c,...d,className:u("bg-border-subtle",p,l)}):e.jsx("hr",{...c,...d,className:u("bg-border-subtle border-0",p,l)})}t.__docgenInfo={description:`Filet de séparation.

Utilise \`--d-ui-color-border-subtle\` : un séparateur décoratif n'est pas une
frontière de contrôle, le seuil de 3:1 du critère 1.4.11 ne s'y applique pas.`,methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Nom accessible du séparateur.

Sans \`label\`, le trait est purement décoratif et masqué aux technologies
d'assistance. Ne le renseigner que lorsque la séparation porte du sens.`}}};const D={title:"Components/Divider",component:t,tags:["autodocs"]},n={render:r=>e.jsxs("div",{className:"flex max-w-prose flex-col gap-4",children:[e.jsx(s,{children:"Section précédente"}),e.jsx(t,{...r}),e.jsx(s,{children:"Section suivante"})]})},i={render:()=>e.jsxs("div",{className:"flex h-8 items-center gap-4",children:[e.jsx(s,{as:"span",children:"Brouillons"}),e.jsx(t,{orientation:"vertical"}),e.jsx(s,{as:"span",children:"Publiés"})]})},a={args:{label:"Fin des résultats pertinents"},render:r=>e.jsxs("div",{className:"flex max-w-prose flex-col gap-4",children:[e.jsx(s,{children:"Résultats pertinents"}),e.jsx(t,{...r}),e.jsx(s,{tone:"muted",children:"Autres résultats"})]})};var m,x,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="flex max-w-prose flex-col gap-4">
      <Text>Section précédente</Text>
      <Divider {...args} />
      <Text>Section suivante</Text>
    </div>
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,h,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex h-8 items-center gap-4">
      <Text as="span">Brouillons</Text>
      <Divider orientation="vertical" />
      <Text as="span">Publiés</Text>
    </div>
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,j,T,N,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Fin des résultats pertinents'
  },
  render: args => <div className="flex max-w-prose flex-col gap-4">
      <Text>Résultats pertinents</Text>
      <Divider {...args} />
      <Text tone="muted">Autres résultats</Text>
    </div>
}`,...(T=(j=a.parameters)==null?void 0:j.docs)==null?void 0:T.source},description:{story:"Avec `label`, le trait devient un séparateur annoncé. À réserver aux ruptures porteuses de sens.",...(S=(N=a.parameters)==null?void 0:N.docs)==null?void 0:S.description}}};const y=["Horizontal","Vertical","Labelled"];export{n as Horizontal,a as Labelled,i as Vertical,y as __namedExportsOrder,D as default};
