import{j as r,a6 as m,d as y}from"./iframe-CwN-tBdP.js";import{D as x}from"./arg-types-OipRHc-K.js";import{c as v}from"./docs-source-C_O40UCi.js";import{B as f}from"./Button-a8buNURr.js";import{F as B}from"./FeedbackPlaceholder-DhTEDwAn.js";function j(){return r.jsxs("svg",{width:"2.5rem",height:"2.5rem",viewBox:"0 0 24 24",fill:"none",className:"text-danger","aria-hidden":"true",children:[r.jsx("path",{d:"M12 3.5 20.5 19.5H3.5L12 3.5z",stroke:"currentColor",strokeWidth:"1.75",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 9.5v4.5M12 16.75v.01",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})]})}function s({title:t,description:o,icon:e,actions:S,live:h=!1,...E}){return r.jsx(B,{...E,role:h?"alert":void 0,title:t,description:o,icon:e??r.jsx(j,{}),actions:S})}s.__docgenInfo={description:"Placeholder pour un échec de chargement ou une action impossible.",methods:[],displayName:"ErrorState",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},live:{required:!1,tsType:{name:"boolean"},description:'Pose `role="alert"` quand l’échec apparaît après le chargement.\nLaissez `false` pour un écran d’erreur statique.',defaultValue:{value:"false",computed:!1}}}};const g="import { Button, ErrorState } from 'd-ui';",b={title:"Components/ErrorState",component:s,argTypes:x,args:{title:"Placeholder"}},a={name:"Par défaut",parameters:v(g,`<ErrorState
    title="Impossible de charger les devoirs"
    description="Vérifiez votre connexion, puis réessayez."
    actions={<Button variant="secondary">Réessayer</Button>}
/>`),render:(t,{globals:o})=>{const e=m(y(o.locale));return r.jsx(s,{...t,title:e.title,description:e.description,actions:r.jsx(f,{variant:"secondary",children:e.retry})})}},n={name:"Annonce dynamique",args:{live:!0},parameters:v(g,`<ErrorState
    live
    title="Échec de l’enregistrement"
    description="Réessayez ou contactez le support."
    actions={<Button variant="secondary">Réessayer</Button>}
/>`),render:(t,{globals:o})=>{const e=m(y(o.locale));return r.jsx(s,{...t,title:e.saveTitle,description:e.saveDescription,actions:r.jsx(f,{variant:"secondary",children:e.retry})})}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importErrorState, \`<ErrorState
    title="Impossible de charger les devoirs"
    description="Vérifiez votre connexion, puis réessayez."
    actions={<Button variant="secondary">Réessayer</Button>}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = errorStateCopy(docsLocale(globals.locale));
    return <ErrorState {...args} title={copy.title} description={copy.description} actions={<Button variant="secondary">{copy.retry}</Button>} />;
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Annonce dynamique',
  args: {
    live: true
  },
  parameters: componentSource(importErrorState, \`<ErrorState
    live
    title="Échec de l’enregistrement"
    description="Réessayez ou contactez le support."
    actions={<Button variant="secondary">Réessayer</Button>}
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = errorStateCopy(docsLocale(globals.locale));
    return <ErrorState {...args} title={copy.saveTitle} description={copy.saveDescription} actions={<Button variant="secondary">{copy.retry}</Button>} />;
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const z=["Default","Live"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Live:n,__namedExportsOrder:z,default:b},Symbol.toStringTag,{value:"Module"}));export{a as D,k as E,n as L};
