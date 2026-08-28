import{r as c,j as a,f as I,V as $,d as _}from"./iframe-CBq88VWm.js";import{n as oe}from"./arg-types-Bf5UST3O.js";import{c as q}from"./docs-source-C_O40UCi.js";const le=c.createContext(null);function F(r){const l=c.useContext(le);if(!l)throw new Error(`${r} must be used within Tabs`);return l}const re={sm:"h-8 px-3 text-sm",md:"h-10 px-4 text-base",lg:"h-12 px-5 text-lg"};function f({label:r="Tabs",value:l,defaultValue:e="",onValueChange:T,activation:w="automatic",orientation:b="horizontal",size:i="md",disabled:d=!1,className:P,children:x}){const j=c.useId(),o=l!==void 0,[t,v]=c.useState(e),g=o?l:t,p=c.useRef(!!e||o),y=c.useCallback(u=>{o||v(u),T==null||T(u)},[o,T]),L=c.useCallback(u=>{p.current||(p.current=!0,o||v(u))},[o]);return a.jsx(le.Provider,{value:{value:g,setValue:y,activation:w,orientation:b,size:i,disabled:d,label:r,baseId:j,ensureDefault:L},children:a.jsx("div",{className:I(b==="vertical"?"flex items-start gap-4":void 0,P),children:x})})}const h=c.forwardRef(function({className:l,onKeyDown:e,children:T,...w},b){const i=F("TabList"),d=c.useRef(null);function P(){const o=d.current;return o?[...o.querySelectorAll('[role="tab"]')].filter(t=>t.getAttribute("aria-disabled")!=="true"):[]}function x(o,t){if(o.focus(),t){const v=o.dataset.value;v&&i.setValue(v)}}function j(o){var R;if(e==null||e(o),o.defaultPrevented||i.disabled)return;const t=P();if(t.length===0)return;const v=t.findIndex(C=>C===document.activeElement);if(v<0)return;const g=(((R=d.current)==null?void 0:R.closest('[dir="rtl"]'))??document.documentElement).getAttribute("dir")==="rtl",p=o.key,y=i.orientation==="horizontal",L=y?g?"ArrowLeft":"ArrowRight":"ArrowDown",u=y?g?"ArrowRight":"ArrowLeft":"ArrowUp";let m=null;if(p===L&&(m=(v+1)%t.length),p===u&&(m=(v-1+t.length)%t.length),p==="Home"&&(m=0),p==="End"&&(m=t.length-1),m===null)return;o.preventDefault();const E=t[m];E&&x(E,i.activation==="automatic")}return a.jsx("div",{...w,ref:o=>{d.current=o,typeof b=="function"?b(o):b&&(b.current=o)},role:"tablist","aria-label":i.label,"aria-orientation":i.orientation,tabIndex:-1,onKeyDown:j,className:I("flex",i.orientation==="vertical"?"min-w-36 flex-col border-s border-border":"flex-row border-b border-border",l),children:T})}),n=c.forwardRef(function({value:l,disabled:e,className:T,onClick:w,onKeyDown:b,children:i,...d},P){const x=F("Tab"),{value:j,setValue:o,activation:t,orientation:v,size:g,disabled:p,baseId:y,ensureDefault:L}=x,u=!!(e||p),m=j===l,E=`${y}-tab-${l}`,R=`${y}-panel-${l}`;c.useEffect(()=>{u||L(l)},[L,u,l]);function C(k){b==null||b(k),!(k.defaultPrevented||u)&&t==="manual"&&(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),o(l))}return a.jsx("button",{...d,ref:P,type:"button",role:"tab",id:E,"data-value":l,"aria-selected":m,"aria-controls":R,"aria-disabled":u||void 0,tabIndex:m&&!u?0:-1,disabled:u,onClick:k=>{u||o(l),w==null||w(k)},onKeyDown:C,className:I("relative shrink-0 font-sans font-medium","focus-visible:ring-focus focus-visible:z-1 focus-visible:ring-2 focus-visible:outline-none",re[g],v==="vertical"?"w-full text-start":"text-center",m?I("text-fg",v==="vertical"?"border-s-2 border-brand bg-surface-muted":"border-b-2 border-brand"):"text-fg/70 hover:text-fg hover:bg-surface-muted",u&&"opacity-50",T),children:i})}),s=c.forwardRef(function({value:l,className:e,children:T,...w},b){const i=F("TabPanel"),d=i.value===l,P=`${i.baseId}-tab-${l}`,x=`${i.baseId}-panel-${l}`;return a.jsx("div",{...w,ref:b,role:"tabpanel",id:x,"aria-labelledby":P,hidden:!d,tabIndex:d?0:void 0,className:I("min-w-0 flex-1 font-sans text-fg",e),children:d?T:null})});f.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{label:{required:!1,tsType:{name:"string"},description:"Nom accessible de la `tablist`. Fallback anglais si omis.",defaultValue:{value:"'Tabs'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},activation:{required:!1,tsType:{name:"union",raw:"'automatic' | 'manual'",elements:[{name:"literal",value:"'automatic'"},{name:"literal",value:"'manual'"}]},description:'`"automatic"` (défaut) : flèches sélectionnent l’onglet.\n`"manual"` : flèches déplacent le focus ; Entrée / Espace activent.',defaultValue:{value:"'automatic'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"TabList"};n.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifiant de l’onglet, aligné sur `TabPanel value`."}}};s.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:""}}};const N="import { Tab, TabList, TabPanel, Tabs } from 'd-ui';",ne={title:"Components/Tabs",component:f,args:{children:a.jsx("span",{})},argTypes:oe},V={name:"Par défaut",parameters:q(N,`<Tabs label="Section du cours" defaultValue="overview">
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
        <Tab value="files">Fichiers</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
    <TabPanel value="files">Documents du cours.</TabPanel>
</Tabs>`),render:(r,{globals:l})=>{const e=$(_(l.locale));return a.jsxs(f,{...r,label:e.label,defaultValue:"overview",children:[a.jsxs(h,{children:[a.jsx(n,{value:"overview",children:e.overview}),a.jsx(n,{value:"homework",children:e.homework}),a.jsx(n,{value:"files",children:e.files})]}),a.jsx(s,{value:"overview",children:e.overviewPanel}),a.jsx(s,{value:"homework",children:e.homeworkPanel}),a.jsx(s,{value:"files",children:e.filesPanel})]})}},S={name:"Activation manuelle",parameters:q(N,`<Tabs label="Section du cours" defaultValue="overview" activation="manual">
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
        <Tab value="files">Fichiers</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
    <TabPanel value="files">Documents du cours.</TabPanel>
</Tabs>`),render:(r,{globals:l})=>{const e=$(_(l.locale));return a.jsxs(f,{...r,label:e.label,defaultValue:"overview",activation:"manual",children:[a.jsxs(h,{children:[a.jsx(n,{value:"overview",children:e.overview}),a.jsx(n,{value:"homework",children:e.homework}),a.jsx(n,{value:"files",children:e.files})]}),a.jsx(s,{value:"overview",children:e.overviewPanel}),a.jsx(s,{value:"homework",children:e.homeworkPanel}),a.jsx(s,{value:"files",children:e.filesPanel})]})}},D={name:"Onglets verticaux",parameters:q(N,`<Tabs label="Section du cours" defaultValue="overview" orientation="vertical">
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
        <Tab value="files">Fichiers</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
    <TabPanel value="files">Documents du cours.</TabPanel>
</Tabs>`),render:(r,{globals:l})=>{const e=$(_(l.locale));return a.jsxs(f,{...r,label:e.label,defaultValue:"overview",orientation:"vertical",children:[a.jsxs(h,{children:[a.jsx(n,{value:"overview",children:e.overview}),a.jsx(n,{value:"homework",children:e.homework}),a.jsx(n,{value:"files",children:e.files})]}),a.jsx(s,{value:"overview",children:e.overviewPanel}),a.jsx(s,{value:"homework",children:e.homeworkPanel}),a.jsx(s,{value:"files",children:e.filesPanel})]})}},A={name:"Désactivé",parameters:q(N,`<Tabs label="Section du cours" defaultValue="overview" disabled>
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
</Tabs>`),render:(r,{globals:l})=>{const e=$(_(l.locale));return a.jsxs(f,{...r,label:e.label,defaultValue:"overview",disabled:!0,children:[a.jsxs(h,{children:[a.jsx(n,{value:"overview",children:e.overview}),a.jsx(n,{value:"homework",children:e.homework})]}),a.jsx(s,{value:"overview",children:e.overviewPanel}),a.jsx(s,{value:"homework",children:e.homeworkPanel})]})}},z={name:"Tailles",parameters:q(N,`<>
    <Tabs size="sm" label="Section du cours" defaultValue="overview">
        <TabList>
            <Tab value="overview">Aperçu</Tab>
            <Tab value="homework">Devoirs</Tab>
        </TabList>
        <TabPanel value="overview">Présentation du cours.</TabPanel>
        <TabPanel value="homework">Liste des devoirs.</TabPanel>
    </Tabs>
    <Tabs size="md" label="Section du cours" defaultValue="overview">
        <TabList>
            <Tab value="overview">Aperçu</Tab>
            <Tab value="homework">Devoirs</Tab>
        </TabList>
        <TabPanel value="overview">Présentation du cours.</TabPanel>
        <TabPanel value="homework">Liste des devoirs.</TabPanel>
    </Tabs>
</>`),render:(r,{globals:l})=>{const e=$(_(l.locale));return a.jsxs("div",{className:"flex flex-col gap-8",children:[a.jsxs(f,{...r,size:"sm",label:`${e.label} (${e.small})`,defaultValue:"overview",children:[a.jsxs(h,{children:[a.jsx(n,{value:"overview",children:e.overview}),a.jsx(n,{value:"homework",children:e.homework})]}),a.jsx(s,{value:"overview",children:e.overviewPanel}),a.jsx(s,{value:"homework",children:e.homeworkPanel})]}),a.jsxs(f,{...r,size:"md",label:`${e.label} (${e.medium})`,defaultValue:"overview",children:[a.jsxs(h,{children:[a.jsx(n,{value:"overview",children:e.overview}),a.jsx(n,{value:"homework",children:e.homework})]}),a.jsx(s,{value:"overview",children:e.overviewPanel}),a.jsx(s,{value:"homework",children:e.homeworkPanel})]}),a.jsxs(f,{...r,size:"lg",label:`${e.label} (${e.large})`,defaultValue:"overview",children:[a.jsxs(h,{children:[a.jsx(n,{value:"overview",children:e.overview}),a.jsx(n,{value:"homework",children:e.homework})]}),a.jsx(s,{value:"overview",children:e.overviewPanel}),a.jsx(s,{value:"homework",children:e.homeworkPanel})]})]})}};var O,M,B;V.parameters={...V.parameters,docs:{...(O=V.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importTabs, \`<Tabs label="Section du cours" defaultValue="overview">
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
        <Tab value="files">Fichiers</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
    <TabPanel value="files">Documents du cours.</TabPanel>
</Tabs>\`),
  render: (args, {
    globals
  }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return <Tabs {...args} label={copy.label} defaultValue="overview">
        <TabList>
          <Tab value="overview">{copy.overview}</Tab>
          <Tab value="homework">{copy.homework}</Tab>
          <Tab value="files">{copy.files}</Tab>
        </TabList>
        <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
        <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        <TabPanel value="files">{copy.filesPanel}</TabPanel>
      </Tabs>;
  }
}`,...(B=(M=V.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var H,U,G;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Activation manuelle',
  parameters: componentSource(importTabs, \`<Tabs label="Section du cours" defaultValue="overview" activation="manual">
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
        <Tab value="files">Fichiers</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
    <TabPanel value="files">Documents du cours.</TabPanel>
</Tabs>\`),
  render: (args, {
    globals
  }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return <Tabs {...args} label={copy.label} defaultValue="overview" activation="manual">
        <TabList>
          <Tab value="overview">{copy.overview}</Tab>
          <Tab value="homework">{copy.homework}</Tab>
          <Tab value="files">{copy.files}</Tab>
        </TabList>
        <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
        <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        <TabPanel value="files">{copy.filesPanel}</TabPanel>
      </Tabs>;
  }
}`,...(G=(U=S.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,Q,W;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Onglets verticaux',
  parameters: componentSource(importTabs, \`<Tabs label="Section du cours" defaultValue="overview" orientation="vertical">
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
        <Tab value="files">Fichiers</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
    <TabPanel value="files">Documents du cours.</TabPanel>
</Tabs>\`),
  render: (args, {
    globals
  }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return <Tabs {...args} label={copy.label} defaultValue="overview" orientation="vertical">
        <TabList>
          <Tab value="overview">{copy.overview}</Tab>
          <Tab value="homework">{copy.homework}</Tab>
          <Tab value="files">{copy.files}</Tab>
        </TabList>
        <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
        <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        <TabPanel value="files">{copy.filesPanel}</TabPanel>
      </Tabs>;
  }
}`,...(W=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importTabs, \`<Tabs label="Section du cours" defaultValue="overview" disabled>
    <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
    </TabList>
    <TabPanel value="overview">Présentation du cours.</TabPanel>
    <TabPanel value="homework">Liste des devoirs.</TabPanel>
</Tabs>\`),
  render: (args, {
    globals
  }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return <Tabs {...args} label={copy.label} defaultValue="overview" disabled>
        <TabList>
          <Tab value="overview">{copy.overview}</Tab>
          <Tab value="homework">{copy.homework}</Tab>
        </TabList>
        <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
        <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
      </Tabs>;
  }
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var K,ee,ae;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importTabs, \`<>
    <Tabs size="sm" label="Section du cours" defaultValue="overview">
        <TabList>
            <Tab value="overview">Aperçu</Tab>
            <Tab value="homework">Devoirs</Tab>
        </TabList>
        <TabPanel value="overview">Présentation du cours.</TabPanel>
        <TabPanel value="homework">Liste des devoirs.</TabPanel>
    </Tabs>
    <Tabs size="md" label="Section du cours" defaultValue="overview">
        <TabList>
            <Tab value="overview">Aperçu</Tab>
            <Tab value="homework">Devoirs</Tab>
        </TabList>
        <TabPanel value="overview">Présentation du cours.</TabPanel>
        <TabPanel value="homework">Liste des devoirs.</TabPanel>
    </Tabs>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = tabsCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-8">
        <Tabs {...args} size="sm" label={\`\${copy.label} (\${copy.small})\`} defaultValue="overview">
          <TabList>
            <Tab value="overview">{copy.overview}</Tab>
            <Tab value="homework">{copy.homework}</Tab>
          </TabList>
          <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
          <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        </Tabs>
        <Tabs {...args} size="md" label={\`\${copy.label} (\${copy.medium})\`} defaultValue="overview">
          <TabList>
            <Tab value="overview">{copy.overview}</Tab>
            <Tab value="homework">{copy.homework}</Tab>
          </TabList>
          <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
          <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        </Tabs>
        <Tabs {...args} size="lg" label={\`\${copy.label} (\${copy.large})\`} defaultValue="overview">
          <TabList>
            <Tab value="overview">{copy.overview}</Tab>
            <Tab value="homework">{copy.homework}</Tab>
          </TabList>
          <TabPanel value="overview">{copy.overviewPanel}</TabPanel>
          <TabPanel value="homework">{copy.homeworkPanel}</TabPanel>
        </Tabs>
      </div>;
  }
}`,...(ae=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const se=["Default","Manual","Vertical","Disabled","Sizes"],be=Object.freeze(Object.defineProperty({__proto__:null,Default:V,Disabled:A,Manual:S,Sizes:z,Vertical:D,__namedExportsOrder:se,default:ne},Symbol.toStringTag,{value:"Module"}));export{V as D,S as M,z as S,be as T,D as V,A as a};
