import{o as n,d as a,j as e}from"./iframe-B4opKa0M.js";import{m as K}from"./arg-types-YWT4-6z-.js";import{c as m}from"./docs-source-C_O40UCi.js";import{B as x}from"./Button-CaWfpgXi.js";import{I as h}from"./Icon-BoTpqilB.js";import{L as o,a as s}from"./List-DCVDaiCe.js";import{F as f}from"./BookOpenIcon-BuQlKET8.js";const c="import { List, ListItem } from '@dudaloglobal/d-ui';",Q=`import { BookOpenIcon } from '@heroicons/react/24/outline';
import { Button, Icon, List, ListItem } from '@dudaloglobal/d-ui';`,U={title:"Components/List",component:o,args:{children:e.jsx("span",{})},argTypes:K},l={name:"Par défaut",parameters:m(c,`<List>
    <ListItem>Algèbre</ListItem>
    <ListItem>Géométrie</ListItem>
    <ListItem>Analyse</ListItem>
</List>`),render:(r,{globals:i})=>{const t=n(a(i.locale));return e.jsxs(o,{...r,children:[e.jsx(s,{children:t.algebra}),e.jsx(s,{children:t.geometry}),e.jsx(s,{children:t.analysis})]})}},L={name:"Ordonnée",parameters:m(c,`<List as="ol">
    <ListItem>Lire l’énoncé</ListItem>
    <ListItem>Rédiger la preuve</ListItem>
</List>`),render:(r,{globals:i})=>{const t=n(a(i.locale));return e.jsxs(o,{...r,as:"ol",children:[e.jsx(s,{children:t.stepOne}),e.jsx(s,{children:t.stepTwo}),e.jsx(s,{children:t.stepThree})]})}},p={name:"Filets",parameters:m(c,`<List divided>
    <ListItem>Algèbre</ListItem>
    <ListItem>Géométrie</ListItem>
    <ListItem>Analyse</ListItem>
</List>`),render:(r,{globals:i})=>{const t=n(a(i.locale));return e.jsxs(o,{...r,divided:!0,children:[e.jsx(s,{children:t.algebra}),e.jsx(s,{children:t.geometry}),e.jsx(s,{children:t.analysis})]})}},d={name:"Emplacements",parameters:m(Q,`<List>
    <ListItem leading={<Icon as={BookOpenIcon} />} trailing={<Button size="sm">Ouvrir</Button>}>
        Algèbre
    </ListItem>
</List>`),render:(r,{globals:i})=>{const t=n(a(i.locale));return e.jsxs(o,{...r,children:[e.jsx(s,{leading:e.jsx(h,{as:f}),trailing:e.jsx(x,{size:"sm",variant:"secondary",children:t.open}),children:t.algebra}),e.jsx(s,{leading:e.jsx(h,{as:f}),trailing:e.jsx(x,{size:"sm",variant:"secondary",children:t.open}),children:t.geometry})]})}},g={name:"Avec description",parameters:m(c,`<List>
    <ListItem description="Chapitre 2 — espaces vectoriels">Algèbre</ListItem>
    <ListItem description="Chapitre 3 — figures du plan">Géométrie</ListItem>
</List>`),render:(r,{globals:i})=>{const t=n(a(i.locale));return e.jsxs(o,{...r,children:[e.jsx(s,{description:t.algebraDesc,children:t.algebra}),e.jsx(s,{description:t.geometryDesc,children:t.geometry})]})}},I={name:"Lien",parameters:m(c,`<List>
    <ListItem href="/cours/algebre">Algèbre</ListItem>
    <ListItem href="/cours/geometrie">Géométrie</ListItem>
</List>`),render:(r,{globals:i})=>{const t=n(a(i.locale));return e.jsxs(o,{...r,children:[e.jsx(s,{href:"/cours/algebre",children:t.algebra}),e.jsx(s,{href:"/cours/geometrie",children:t.geometry})]})}},u={name:"Tailles",parameters:m(c,`<>
    <List size="sm">
        <ListItem>Algèbre</ListItem>
    </List>
    <List size="lg">
        <ListItem>Algèbre</ListItem>
    </List>
</>`),render:(r,{globals:i})=>{const t=n(a(i.locale));return e.jsx("div",{className:"flex flex-col gap-6",children:["sm","md","lg"].map(b=>e.jsxs(o,{...r,size:b,divided:!0,children:[e.jsx(s,{children:t.algebra}),e.jsx(s,{children:t.geometry})]},b))})}},y={name:"Désactivé",parameters:m(c,`<List>
    <ListItem href="/cours/algebre">Algèbre</ListItem>
    <ListItem href="/cours/geometrie" disabled>
        Géométrie
    </ListItem>
</List>`),render:(r,{globals:i})=>{const t=n(a(i.locale));return e.jsxs(o,{...r,children:[e.jsx(s,{href:"/cours/algebre",children:t.algebra}),e.jsx(s,{href:"/cours/geometrie",disabled:!0,children:t.geometry})]})}},V=["Default","Ordered","Divided","WithSlots","WithDescription","AsLink","Sizes","Disabled"];var j,E,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importList, \`<List>
    <ListItem>Algèbre</ListItem>
    <ListItem>Géométrie</ListItem>
    <ListItem>Analyse</ListItem>
</List>\`),
  render: (args, {
    globals
  }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return <List {...args}>
        <ListItem>{copy.algebra}</ListItem>
        <ListItem>{copy.geometry}</ListItem>
        <ListItem>{copy.analysis}</ListItem>
      </List>;
  }
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var v,A,O;L.parameters={...L.parameters,docs:{...(v=L.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Ordonnée',
  parameters: componentSource(importList, \`<List as="ol">
    <ListItem>Lire l’énoncé</ListItem>
    <ListItem>Rédiger la preuve</ListItem>
</List>\`),
  render: (args, {
    globals
  }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return <List {...args} as="ol">
        <ListItem>{copy.stepOne}</ListItem>
        <ListItem>{copy.stepTwo}</ListItem>
        <ListItem>{copy.stepThree}</ListItem>
      </List>;
  }
}`,...(O=(A=L.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var z,B,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Filets',
  parameters: componentSource(importList, \`<List divided>
    <ListItem>Algèbre</ListItem>
    <ListItem>Géométrie</ListItem>
    <ListItem>Analyse</ListItem>
</List>\`),
  render: (args, {
    globals
  }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return <List {...args} divided>
        <ListItem>{copy.algebra}</ListItem>
        <ListItem>{copy.geometry}</ListItem>
        <ListItem>{copy.analysis}</ListItem>
      </List>;
  }
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var C,G,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Emplacements',
  parameters: componentSource(importSlots, \`<List>
    <ListItem leading={<Icon as={BookOpenIcon} />} trailing={<Button size="sm">Ouvrir</Button>}>
        Algèbre
    </ListItem>
</List>\`),
  render: (args, {
    globals
  }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return <List {...args}>
        <ListItem leading={<Icon as={BookOpenIcon} />} trailing={<Button size="sm" variant="secondary">
              {copy.open}
            </Button>}>
          {copy.algebra}
        </ListItem>
        <ListItem leading={<Icon as={BookOpenIcon} />} trailing={<Button size="sm" variant="secondary">
              {copy.open}
            </Button>}>
          {copy.geometry}
        </ListItem>
      </List>;
  }
}`,...(T=(G=d.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var k,_,W;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Avec description',
  parameters: componentSource(importList, \`<List>
    <ListItem description="Chapitre 2 — espaces vectoriels">Algèbre</ListItem>
    <ListItem description="Chapitre 3 — figures du plan">Géométrie</ListItem>
</List>\`),
  render: (args, {
    globals
  }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return <List {...args}>
        <ListItem description={copy.algebraDesc}>{copy.algebra}</ListItem>
        <ListItem description={copy.geometryDesc}>{copy.geometry}</ListItem>
      </List>;
  }
}`,...(W=(_=g.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var F,R,w;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Lien',
  parameters: componentSource(importList, \`<List>
    <ListItem href="/cours/algebre">Algèbre</ListItem>
    <ListItem href="/cours/geometrie">Géométrie</ListItem>
</List>\`),
  render: (args, {
    globals
  }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return <List {...args}>
        <ListItem href="/cours/algebre">{copy.algebra}</ListItem>
        <ListItem href="/cours/geometrie">{copy.geometry}</ListItem>
      </List>;
  }
}`,...(w=(R=I.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var P,N,M;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importList, \`<>
    <List size="sm">
        <ListItem>Algèbre</ListItem>
    </List>
    <List size="lg">
        <ListItem>Algèbre</ListItem>
    </List>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-6">
        {(['sm', 'md', 'lg'] as const).map(size => <List key={size} {...args} size={size} divided>
            <ListItem>{copy.algebra}</ListItem>
            <ListItem>{copy.geometry}</ListItem>
          </List>)}
      </div>;
  }
}`,...(M=(N=u.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var q,H,J;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importList, \`<List>
    <ListItem href="/cours/algebre">Algèbre</ListItem>
    <ListItem href="/cours/geometrie" disabled>
        Géométrie
    </ListItem>
</List>\`),
  render: (args, {
    globals
  }) => {
    const copy = listCopy(docsLocale(globals.locale));
    return <List {...args}>
        <ListItem href="/cours/algebre">{copy.algebra}</ListItem>
        <ListItem href="/cours/geometrie" disabled>
          {copy.geometry}
        </ListItem>
      </List>;
  }
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const re=Object.freeze(Object.defineProperty({__proto__:null,AsLink:I,Default:l,Disabled:y,Divided:p,Ordered:L,Sizes:u,WithDescription:g,WithSlots:d,__namedExportsOrder:V,default:U},Symbol.toStringTag,{value:"Module"}));export{I as A,l as D,re as L,L as O,u as S,d as W,p as a,g as b,y as c};
