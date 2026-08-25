import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as L}from"./cx-2dOUpm6k.js";import{T as D}from"./Text-CLY2twGo.js";function T({className:e,...t}){return r.jsx("span",{className:L("d-ui-visually-hidden",e),...t})}T.__docgenInfo={description:"Texte destiné aux lecteurs d’écran, masqué visuellement.",methods:[],displayName:"VisuallyHidden"};function a({external:e=!1,externalLabel:t="(ouvre dans un nouvel onglet)",className:y,children:j,target:i,rel:l,...k}){const _=e?{target:i??"_blank",rel:l??"noopener noreferrer"}:{target:i,rel:l};return r.jsxs("a",{className:L("text-link underline underline-offset-2","hover:decoration-2","visited:text-link-visited","focus-visible:ring-focus focus-visible:ring-offset-bg rounded-xs focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",y),..._,...k,children:[j,e?r.jsxs(T,{children:[" ",t]}):null]})}a.__docgenInfo={description:`Lien du design system.

Le soulignement est permanent et non optionnel : la couleur seule ne peut pas
distinguer un lien de son texte environnant (WCAG 1.4.1).`,methods:[],displayName:"Link",props:{external:{required:!1,tsType:{name:"boolean"},description:`Ouvre dans un nouvel onglet, ajoute \`rel="noopener noreferrer"\` et
annonce l'ouverture aux lecteurs d'écran.`,defaultValue:{value:"false",computed:!1}},externalLabel:{required:!1,tsType:{name:"string"},description:"Texte annoncé pour un lien externe.",defaultValue:{value:"'(ouvre dans un nouvel onglet)'",computed:!1}}}};const V={title:"Components/Link",component:a,tags:["autodocs"],args:{href:"#",children:"Consulter le catalogue"}},s={},n={args:{href:"https://example.org",external:!0,children:"Documentation Dudalo"}},o={render:e=>r.jsxs(D,{className:"max-w-prose",children:["Le soulignement est permanent : ",r.jsx(a,{...e,children:"ce lien"})," reste identifiable même sans percevoir la couleur."]})};var u,c,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,f,x,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    href: 'https://example.org',
    external: true,
    children: 'Documentation Dudalo'
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source},description:{story:"`rel=\"noopener noreferrer\"` et mention de l'ouverture pour les lecteurs d'écran.",...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var v,h,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Text className="max-w-prose">
      Le soulignement est permanent : <Link {...args}>ce lien</Link> reste identifiable
      même sans percevoir la couleur.
    </Text>
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const q=["Default","External","InRunningText"];export{s as Default,n as External,o as InRunningText,q as __namedExportsOrder,V as default};
