import{r as A,j as e,i as P,$ as b,d as j}from"./iframe-PigAhWKn.js";import{r as K}from"./arg-types-BX1P8EmD.js";import{c as L}from"./docs-source-C_O40UCi.js";import{L as k,a as q}from"./List-BUFb4Ilr.js";import{H as ee}from"./Heading-CeGD0fto.js";const G=A.createContext(null),J=A.createContext(null);function X(r){const n=A.useContext(G);if(!n)throw new Error(`${r} must be used within Accordion`);return n}function Y(r){const n=A.useContext(J);if(!n)throw new Error(`${r} must be used within AccordionItem`);return n}function V(r){return r===void 0?[]:Array.isArray(r)?r:r===""?[]:[r]}const oe={sm:"min-h-10 gap-2 px-3 py-2 text-sm",md:"min-h-12 gap-3 px-4 py-3 text-base",lg:"min-h-14 gap-3 px-5 py-4 text-lg"},re={sm:"px-3 pb-3 text-sm",md:"px-4 pb-4 text-base",lg:"px-5 pb-5 text-lg"};function ne({open:r}){return e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:P("shrink-0",r&&"rotate-180"),children:e.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function ce(r,n,o){o&&o(r==="single"?n[0]??"":n)}function g({type:r="single",value:n,defaultValue:o,onValueChange:t,size:p="md",className:h,children:s}){const f=n!==void 0,[C,i]=A.useState(()=>V(o)),c=f?V(n):C,m=A.useCallback(d=>{const w=c.includes(d)?c.filter(Z=>Z!==d):r==="single"?[d]:[...c,d];f||i(w),ce(r,w,t)},[f,t,c,r]);return e.jsx(G.Provider,{value:{type:r,open:c,toggle:m,size:p},children:e.jsx("div",{"data-d-ui-accordion":"",className:P("rounded-lg border border-border-subtle bg-bg font-sans text-fg",h),children:s})})}function a({value:r,disabled:n=!1,className:o,children:t}){const p=X("AccordionItem"),h=A.useId(),s=p.open.includes(r);return e.jsx(J.Provider,{value:{value:r,open:s,disabled:n,triggerId:`${h}-trigger`,panelId:`${h}-panel`,size:p.size},children:e.jsx("div",{className:P("border-b border-border-subtle last:border-b-0",o),children:t})})}function l({className:r,onClick:n,onKeyDown:o,children:t,...p}){const h=X("AccordionTrigger"),s=Y("AccordionTrigger");function f(i){const c=i.closest("[data-d-ui-accordion]");return c?[...c.querySelectorAll("[data-d-ui-accordion-trigger]")].filter(m=>!m.disabled):[]}function C(i){var w;if(o==null||o(i),i.defaultPrevented||s.disabled)return;const c=f(i.currentTarget),m=c.indexOf(i.currentTarget);if(m<0||c.length===0)return;let d=null;i.key==="ArrowDown"&&(d=(m+1)%c.length),i.key==="ArrowUp"&&(d=(m-1+c.length)%c.length),i.key==="Home"&&(d=0),i.key==="End"&&(d=c.length-1),d!==null&&(i.preventDefault(),(w=c[d])==null||w.focus())}return e.jsx(ee,{level:3,size:"body",className:"m-0",children:e.jsxs("button",{...p,type:"button",id:s.triggerId,"data-d-ui-accordion-trigger":"","aria-expanded":s.open,"aria-controls":s.panelId,disabled:s.disabled,onClick:i=>{s.disabled||h.toggle(s.value),n==null||n(i)},onKeyDown:C,className:P("flex w-full items-center justify-between text-start font-medium text-fg","focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",oe[s.size],s.disabled?"cursor-not-allowed opacity-50":"hover:bg-surface-muted",r),children:[e.jsx("span",{className:"min-w-0 flex-1",children:t}),e.jsx(ne,{open:s.open})]})})}function u({className:r,children:n,...o}){const t=Y("AccordionPanel");return e.jsx("div",{...o,id:t.panelId,role:"region","aria-labelledby":t.triggerId,hidden:!t.open,className:P("text-fg",re[t.size],r),children:n})}g.__docgenInfo={description:"Sections dépliables (FAQ, chapitres). Pattern WAI-ARIA accordion :\nbouton natif, `aria-expanded` / `aria-controls`, panneau `region`.\n\nPas de domaine LMS : une liste de chapitres compose `Accordion` + `List`\ndans l’app.",methods:[],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:'`"single"` (défaut) : une section ouverte à la fois, refermable.\n`"multiple"` : plusieurs sections peuvent rester ouvertes.',defaultValue:{value:"'single'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"AccordionPanel"};const S=`import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionTrigger,
} from 'd-ui';`,ie=`import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionTrigger,
    List,
    ListItem,
} from 'd-ui';`,te={title:"Components/Accordion",component:g,args:{children:e.jsx("span",{})},argTypes:K},y={name:"Par défaut",parameters:L(S,`<Accordion defaultValue="what">
    <AccordionItem value="what">
        <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
        <AccordionPanel>Un module de révision pour ancrer les notions du cours.</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="when">
        <AccordionTrigger>Quand commencer ?</AccordionTrigger>
        <AccordionPanel>Dès le premier cours, à votre rythme.</AccordionPanel>
    </AccordionItem>
</Accordion>`),render:(r,{globals:n})=>{const o=b(j(n.locale));return e.jsxs(g,{...r,defaultValue:"what",children:[e.jsxs(a,{value:"what",children:[e.jsx(l,{children:o.what}),e.jsx(u,{children:o.whatBody})]}),e.jsxs(a,{value:"when",children:[e.jsx(l,{children:o.when}),e.jsx(u,{children:o.whenBody})]})]})}},x={name:"Plusieurs sections",parameters:L(S,`<Accordion type="multiple" defaultValue={['what', 'when']}>
    <AccordionItem value="what">
        <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
        <AccordionPanel>Un module de révision pour ancrer les notions du cours.</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="when">
        <AccordionTrigger>Quand commencer ?</AccordionTrigger>
        <AccordionPanel>Dès le premier cours, à votre rythme.</AccordionPanel>
    </AccordionItem>
</Accordion>`),render:(r,{globals:n})=>{const o=b(j(n.locale));return e.jsxs(g,{...r,type:"multiple",defaultValue:["what","when"],children:[e.jsxs(a,{value:"what",children:[e.jsx(l,{children:o.what}),e.jsx(u,{children:o.whatBody})]}),e.jsxs(a,{value:"when",children:[e.jsx(l,{children:o.when}),e.jsx(u,{children:o.whenBody})]}),e.jsxs(a,{value:"why",children:[e.jsx(l,{children:o.why}),e.jsx(u,{children:o.whyBody})]})]})}},I={name:"Sections désactivées",parameters:L(S,`<Accordion defaultValue="what">
    <AccordionItem value="what">
        <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
        <AccordionPanel>Un module de révision pour ancrer les notions du cours.</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="who" disabled>
        <AccordionTrigger>Qui corrige ?</AccordionTrigger>
        <AccordionPanel>Section indisponible pour le moment.</AccordionPanel>
    </AccordionItem>
</Accordion>`),render:(r,{globals:n})=>{const o=b(j(n.locale));return e.jsxs(g,{...r,defaultValue:"what",children:[e.jsxs(a,{value:"what",children:[e.jsx(l,{children:o.what}),e.jsx(u,{children:o.whatBody})]}),e.jsxs(a,{value:"who",disabled:!0,children:[e.jsx(l,{children:o.who}),e.jsx(u,{children:o.whoBody})]})]})}},v={name:"Tailles",parameters:L(S,`<>
    <Accordion size="sm" defaultValue="what">
        <AccordionItem value="what">
            <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
            <AccordionPanel>Un module de révision.</AccordionPanel>
        </AccordionItem>
    </Accordion>
    <Accordion size="lg" defaultValue="what">
        <AccordionItem value="what">
            <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
            <AccordionPanel>Un module de révision.</AccordionPanel>
        </AccordionItem>
    </Accordion>
</>`),render:(r,{globals:n})=>{const o=b(j(n.locale));return e.jsx("div",{className:"flex flex-col gap-6",children:["sm","md","lg"].map(t=>e.jsx(g,{...r,size:t,defaultValue:"what",children:e.jsxs(a,{value:"what",children:[e.jsx(l,{children:o.what}),e.jsx(u,{children:o.whatBody})]})},t))})}},T={name:"Composition",parameters:L(ie,`<Accordion defaultValue="week-1">
    <AccordionItem value="week-1">
        <AccordionTrigger>Semaine 1</AccordionTrigger>
        <AccordionPanel>
            <List>
                <ListItem href="/cours/1">Cours 1</ListItem>
                <ListItem href="/cours/2">Cours 2</ListItem>
            </List>
        </AccordionPanel>
    </AccordionItem>
</Accordion>`),render:(r,{globals:n})=>{const o=b(j(n.locale));return e.jsxs(g,{...r,defaultValue:"week-1",children:[e.jsxs(a,{value:"week-1",children:[e.jsx(l,{children:o.week1}),e.jsx(u,{children:e.jsxs(k,{children:[e.jsx(q,{href:"/cours/1",children:o.lesson1}),e.jsx(q,{href:"/cours/2",children:o.lesson2})]})})]}),e.jsxs(a,{value:"week-2",children:[e.jsx(l,{children:o.week2}),e.jsx(u,{children:e.jsx(k,{children:e.jsx(q,{href:"/cours/3",children:o.lesson3})})})]})]})}};var z,N,B;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importAccordion, \`<Accordion defaultValue="what">
    <AccordionItem value="what">
        <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
        <AccordionPanel>Un module de révision pour ancrer les notions du cours.</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="when">
        <AccordionTrigger>Quand commencer ?</AccordionTrigger>
        <AccordionPanel>Dès le premier cours, à votre rythme.</AccordionPanel>
    </AccordionItem>
</Accordion>\`),
  render: (args, {
    globals
  }) => {
    const copy = accordionCopy(docsLocale(globals.locale));
    return <Accordion {...args} defaultValue="what">
        <AccordionItem value="what">
          <AccordionTrigger>{copy.what}</AccordionTrigger>
          <AccordionPanel>{copy.whatBody}</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="when">
          <AccordionTrigger>{copy.when}</AccordionTrigger>
          <AccordionPanel>{copy.whenBody}</AccordionPanel>
        </AccordionItem>
      </Accordion>;
  }
}`,...(B=(N=y.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var Q,_,U;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Plusieurs sections',
  parameters: componentSource(importAccordion, \`<Accordion type="multiple" defaultValue={['what', 'when']}>
    <AccordionItem value="what">
        <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
        <AccordionPanel>Un module de révision pour ancrer les notions du cours.</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="when">
        <AccordionTrigger>Quand commencer ?</AccordionTrigger>
        <AccordionPanel>Dès le premier cours, à votre rythme.</AccordionPanel>
    </AccordionItem>
</Accordion>\`),
  render: (args, {
    globals
  }) => {
    const copy = accordionCopy(docsLocale(globals.locale));
    return <Accordion {...args} type="multiple" defaultValue={['what', 'when']}>
        <AccordionItem value="what">
          <AccordionTrigger>{copy.what}</AccordionTrigger>
          <AccordionPanel>{copy.whatBody}</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="when">
          <AccordionTrigger>{copy.when}</AccordionTrigger>
          <AccordionPanel>{copy.whenBody}</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="why">
          <AccordionTrigger>{copy.why}</AccordionTrigger>
          <AccordionPanel>{copy.whyBody}</AccordionPanel>
        </AccordionItem>
      </Accordion>;
  }
}`,...(U=(_=x.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var D,E,M;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Sections désactivées',
  parameters: componentSource(importAccordion, \`<Accordion defaultValue="what">
    <AccordionItem value="what">
        <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
        <AccordionPanel>Un module de révision pour ancrer les notions du cours.</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="who" disabled>
        <AccordionTrigger>Qui corrige ?</AccordionTrigger>
        <AccordionPanel>Section indisponible pour le moment.</AccordionPanel>
    </AccordionItem>
</Accordion>\`),
  render: (args, {
    globals
  }) => {
    const copy = accordionCopy(docsLocale(globals.locale));
    return <Accordion {...args} defaultValue="what">
        <AccordionItem value="what">
          <AccordionTrigger>{copy.what}</AccordionTrigger>
          <AccordionPanel>{copy.whatBody}</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="who" disabled>
          <AccordionTrigger>{copy.who}</AccordionTrigger>
          <AccordionPanel>{copy.whoBody}</AccordionPanel>
        </AccordionItem>
      </Accordion>;
  }
}`,...(M=(E=I.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var O,R,$;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importAccordion, \`<>
    <Accordion size="sm" defaultValue="what">
        <AccordionItem value="what">
            <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
            <AccordionPanel>Un module de révision.</AccordionPanel>
        </AccordionItem>
    </Accordion>
    <Accordion size="lg" defaultValue="what">
        <AccordionItem value="what">
            <AccordionTrigger>Qu’est-ce que c’est ?</AccordionTrigger>
            <AccordionPanel>Un module de révision.</AccordionPanel>
        </AccordionItem>
    </Accordion>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = accordionCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-6">
        {(['sm', 'md', 'lg'] as const).map(size => <Accordion key={size} {...args} size={size} defaultValue="what">
            <AccordionItem value="what">
              <AccordionTrigger>{copy.what}</AccordionTrigger>
              <AccordionPanel>{copy.whatBody}</AccordionPanel>
            </AccordionItem>
          </Accordion>)}
      </div>;
  }
}`,...($=(R=v.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var H,W,F;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Composition',
  parameters: componentSource(importComposition, \`<Accordion defaultValue="week-1">
    <AccordionItem value="week-1">
        <AccordionTrigger>Semaine 1</AccordionTrigger>
        <AccordionPanel>
            <List>
                <ListItem href="/cours/1">Cours 1</ListItem>
                <ListItem href="/cours/2">Cours 2</ListItem>
            </List>
        </AccordionPanel>
    </AccordionItem>
</Accordion>\`),
  render: (args, {
    globals
  }) => {
    const copy = accordionCopy(docsLocale(globals.locale));
    return <Accordion {...args} defaultValue="week-1">
        <AccordionItem value="week-1">
          <AccordionTrigger>{copy.week1}</AccordionTrigger>
          <AccordionPanel>
            <List>
              <ListItem href="/cours/1">{copy.lesson1}</ListItem>
              <ListItem href="/cours/2">{copy.lesson2}</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="week-2">
          <AccordionTrigger>{copy.week2}</AccordionTrigger>
          <AccordionPanel>
            <List>
              <ListItem href="/cours/3">{copy.lesson3}</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>;
  }
}`,...(F=(W=T.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const se=["Default","Multiple","DisabledItems","Sizes","Composition"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Composition:T,Default:y,DisabledItems:I,Multiple:x,Sizes:v,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{Ae as A,T as C,y as D,x as M,v as S,I as a};
