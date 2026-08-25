import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./cx-2dOUpm6k.js";const j={display:"text-4xl font-bold tracking-tight",title:"text-2xl font-semibold",subtitle:"text-xl font-semibold",body:"text-base font-semibold"},z={1:"display",2:"title",3:"subtitle",4:"body",5:"body",6:"body"};function a({level:t,size:b,className:y,...f}){const h=`h${t}`,H=b??z[t];return e.jsx(h,{className:N("text-fg text-balance",j[H],y),...f})}a.__docgenInfo={description:`Titre du design system.

Le niveau sémantique et la taille visuelle sont deux props distinctes :
coupler les deux pousse à sauter des niveaux pour obtenir la bonne taille,
ce qui casse la navigation par titres (WCAG 1.3.1).`,methods:[],displayName:"Heading",props:{level:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Niveau sémantique. Rend un vrai `h1`…`h6` : il porte la structure du document."},size:{required:!1,tsType:{name:"union",raw:"'display' | 'title' | 'subtitle' | 'body'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'title'"},{name:"literal",value:"'subtitle'"},{name:"literal",value:"'body'"}]},description:"Taille visuelle, indépendante du niveau.\n\nUn `h2` peut avoir l'allure d'un `display` sans casser la hiérarchie.\nPar défaut, la taille suit le niveau."}}};const q={title:"Components/Heading",component:a,tags:["autodocs"],args:{level:2,children:"Parcours d’apprentissage"}},s={},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{level:1,children:"Niveau 1 — display"}),e.jsx(a,{level:2,children:"Niveau 2 — title"}),e.jsx(a,{level:3,children:"Niveau 3 — subtitle"}),e.jsx(a,{level:4,children:"Niveau 4 — body"})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{level:2,size:"display",children:"h2 rendu en display"}),e.jsx(a,{level:1,size:"subtitle",children:"h1 rendu en subtitle"})]})};var n,r,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(d=(r=s.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var o,u,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Heading level={1}>Niveau 1 — display</Heading>
      <Heading level={2}>Niveau 2 — title</Heading>
      <Heading level={3}>Niveau 3 — subtitle</Heading>
      <Heading level={4}>Niveau 4 — body</Heading>
    </div>
}`,...(c=(u=i.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,m,v,x,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Heading level={2} size="display">
        h2 rendu en display
      </Heading>
      <Heading level={1} size="subtitle">
        h1 rendu en subtitle
      </Heading>
    </div>
}`,...(v=(m=l.parameters)==null?void 0:m.docs)==null?void 0:v.source},description:{story:"Le niveau sémantique et la taille visuelle se règlent séparément.",...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};const C=["Default","Levels","SizeDecoupledFromLevel"];export{s as Default,i as Levels,l as SizeDecoupledFromLevel,C as __namedExportsOrder,q as default};
