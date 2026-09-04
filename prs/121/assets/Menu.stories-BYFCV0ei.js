import{r as u,ak as s,d as i,j as n}from"./iframe-CSDJ8R1k.js";import{c as l}from"./docs-source-C_O40UCi.js";import{R as U}from"./arg-types-B_nef0fB.js";import{B as c}from"./Button-DCvfpArC.js";import{I as X}from"./IconButton-Bu6_OKkE.js";import{I as d}from"./Icon-CtovchWW.js";import{L as Y}from"./Link-CZ7luwiD.js";import{M as a,a as t,b as M,C as ee,c as ne}from"./Menu-DzshgG0Q.js";import{F as te}from"./ArrowTopRightOnSquareIcon-C0Bc_SnO.js";import{F as re,a as oe}from"./TrashIcon-DHHidqro.js";function ae({title:r,titleId:o,...e},m){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:m,"aria-labelledby":o},e),r?u.createElement("title",{id:o},r):null,u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"}))}const ue=u.forwardRef(ae);function ce({title:r,titleId:o,...e},m){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:m,"aria-labelledby":o},e),r?u.createElement("title",{id:o},r):null,u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"}))}const se=u.forwardRef(ce);function ie({title:r,titleId:o,...e},m){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:m,"aria-labelledby":o},e),r?u.createElement("title",{id:o},r):null,u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"}))}const le=u.forwardRef(ie),p="import { Button, Menu, MenuItem, MenuSeparator, MenuSub } from 'd-ui';",me=`import { ChevronDownIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Button, Icon, IconButton, Link, Menu, MenuItem } from 'd-ui';`,de=`import {
    ArrowTopRightOnSquareIcon,
    DocumentDuplicateIcon,
    PencilSquareIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';
import { Button, Icon, Menu, MenuItem, MenuSeparator } from 'd-ui';`,Me="import { Button, ContextMenu, Menu, MenuItem, MenuSeparator } from 'd-ui';",pe={title:"Components/Menu",component:a,argTypes:U,args:{trigger:n.jsx("span",{}),children:n.jsx("span",{})}},I={name:"Par défaut",parameters:l(p,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem>Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>`),render:(r,{globals:o})=>{const e=s(i(o.locale));return n.jsxs(a,{...r,label:e.label,trigger:n.jsx(c,{variant:"secondary",children:e.actions}),children:[n.jsx(t,{children:e.rename}),n.jsx(t,{children:e.duplicate}),n.jsx(M,{}),n.jsx(t,{children:e.delete})]})}},g={name:"Variantes de déclencheur",parameters:l(me,`<>
    <Menu
        label="Actions du devoir"
        trigger={
            <Button variant="secondary" icon={<Icon as={ChevronDownIcon} />} iconPosition="end">
                Actions
            </Button>
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu
        label="Actions du devoir"
        trigger={
            <IconButton icon={<Icon as={EllipsisVerticalIcon} />} aria-label="Plus d’actions" />
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu label="Actions du devoir" trigger={<Link href="#actions">Actions</Link>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu
        label="Actions du devoir"
        trigger={
            <Button variant="secondary" size="sm" className="rounded-full">
                Actions
            </Button>
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>`),render:(r,{globals:o})=>{const e=s(i(o.locale)),m=n.jsxs(n.Fragment,{children:[n.jsx(t,{children:e.rename}),n.jsx(t,{children:e.duplicate})]});return n.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[n.jsx(a,{...r,label:e.label,trigger:n.jsx(c,{variant:"secondary",icon:n.jsx(d,{as:oe}),iconPosition:"end",children:e.actions}),children:m}),n.jsxs(a,{label:e.label,trigger:n.jsx(X,{icon:n.jsx(d,{as:se}),"aria-label":e.moreActions}),children:[n.jsx(t,{children:e.rename}),n.jsx(t,{children:e.duplicate})]}),n.jsxs(a,{label:e.label,trigger:n.jsx(Y,{href:"#actions",children:e.actions}),children:[n.jsx(t,{children:e.rename}),n.jsx(t,{children:e.duplicate})]}),n.jsxs(a,{label:e.label,trigger:n.jsx(c,{variant:"secondary",size:"sm",className:"rounded-full",children:e.actions}),children:[n.jsx(t,{children:e.rename}),n.jsx(t,{children:e.duplicate})]})]})}},b={name:"Éléments du menu",parameters:l(de,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem icon={<Icon as={PencilSquareIcon} />}>Renommer</MenuItem>
    <MenuItem icon={<Icon as={DocumentDuplicateIcon} />} shortcut="⌘⇧D">
        Dupliquer
    </MenuItem>
    <MenuItem
        href="/devoirs/12"
        iconEnd={<Icon as={ArrowTopRightOnSquareIcon} />}
    >
        Ouvrir le devoir
    </MenuItem>
    <MenuSeparator />
    <MenuItem icon={<Icon as={TrashIcon} />}>Supprimer</MenuItem>
</Menu>`),render:(r,{globals:o})=>{const e=s(i(o.locale));return n.jsxs(a,{...r,label:e.label,trigger:n.jsx(c,{variant:"secondary",children:e.actions}),children:[n.jsx(t,{icon:n.jsx(d,{as:le}),children:e.rename}),n.jsx(t,{icon:n.jsx(d,{as:ue}),shortcut:e.duplicateShortcut,children:e.duplicate}),n.jsx(t,{href:"/devoirs/12",iconEnd:n.jsx(d,{as:te}),children:e.openAssignment}),n.jsx(M,{}),n.jsx(t,{icon:n.jsx(d,{as:re}),children:e.delete})]})}},y={name:"Raccourcis",parameters:l(p,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem shortcut="⌘S">Enregistrer</MenuItem>
    <MenuItem shortcut="⌘⇧D">Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem shortcut="⌘⌫">Supprimer</MenuItem>
</Menu>`),render:(r,{globals:o})=>{const e=s(i(o.locale));return n.jsxs(a,{...r,label:e.label,trigger:n.jsx(c,{variant:"secondary",children:e.actions}),children:[n.jsx(t,{shortcut:e.saveShortcut,children:e.save}),n.jsx(t,{shortcut:e.duplicateShortcut,children:e.duplicate}),n.jsx(M,{}),n.jsx(t,{shortcut:e.deleteShortcut,children:e.delete})]})}},h={name:"Éléments désactivés",parameters:l(p,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem disabled>Archiver</MenuItem>
    <MenuItem>Supprimer</MenuItem>
</Menu>`),render:(r,{globals:o})=>{const e=s(i(o.locale));return n.jsxs(a,{...r,label:e.label,trigger:n.jsx(c,{variant:"secondary",children:e.actions}),children:[n.jsx(t,{children:e.rename}),n.jsx(t,{disabled:!0,children:e.archive}),n.jsx(t,{children:e.delete})]})}},x={name:"Sous-menu",parameters:l(p,`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuSub label="Partager">
        <MenuItem>Copier le lien</MenuItem>
        <MenuItem>E-mail</MenuItem>
    </MenuSub>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>`),render:(r,{globals:o})=>{const e=s(i(o.locale));return n.jsxs(a,{...r,label:e.label,trigger:n.jsx(c,{variant:"secondary",children:e.actions}),children:[n.jsx(t,{children:e.rename}),n.jsxs(ne,{label:e.share,children:[n.jsx(t,{children:e.copyLink}),n.jsx(t,{children:e.email})]}),n.jsx(M,{}),n.jsx(t,{children:e.delete})]})}},v={name:"Menu contextuel",parameters:l(Me,`<>
    <Menu label="Actions du fichier" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
    </Menu>
    <ContextMenu
        label="Actions du fichier"
        trigger={
            <button type="button" className="rounded-md border border-border px-4 py-8">
                Fiche devoir
            </button>
        }
    >
        <MenuItem>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
    </ContextMenu>
</>`),render:(r,{globals:o})=>{const e=s(i(o.locale));return n.jsxs("div",{className:"flex flex-col items-start gap-4",children:[n.jsxs(a,{...r,label:e.fileLabel,trigger:n.jsx(c,{variant:"secondary",children:e.actions}),children:[n.jsx(t,{children:e.open}),n.jsx(t,{children:e.download}),n.jsx(M,{}),n.jsx(t,{children:e.delete})]}),n.jsxs(ee,{label:e.fileLabel,trigger:n.jsx("button",{type:"button",className:"rounded-md border border-border bg-bg px-4 py-8 text-start text-fg",children:e.card}),children:[n.jsx(t,{children:e.open}),n.jsx(t,{children:e.download}),n.jsx(M,{}),n.jsx(t,{children:e.delete})]})]})}},j={name:"Tailles",parameters:l(p,`<>
    <Menu size="sm" label="Actions du devoir" trigger={<Button size="sm" variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu size="md" label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>`),render:(r,{globals:o})=>{const e=s(i(o.locale));return n.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[n.jsxs(a,{...r,size:"sm",label:`${e.label} (${e.small})`,trigger:n.jsx(c,{size:"sm",variant:"secondary",children:e.actions}),children:[n.jsx(t,{children:e.rename}),n.jsx(t,{children:e.duplicate})]}),n.jsxs(a,{...r,size:"md",label:`${e.label} (${e.medium})`,trigger:n.jsx(c,{variant:"secondary",children:e.actions}),children:[n.jsx(t,{children:e.rename}),n.jsx(t,{children:e.duplicate})]}),n.jsxs(a,{...r,size:"lg",label:`${e.label} (${e.large})`,trigger:n.jsx(c,{size:"lg",variant:"secondary",children:e.actions}),children:[n.jsx(t,{children:e.rename}),n.jsx(t,{children:e.duplicate})]})]})}},S={name:"Désactivé",parameters:l(p,`<Menu disabled label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
</Menu>`),render:(r,{globals:o})=>{const e=s(i(o.locale));return n.jsx(a,{...r,disabled:!0,label:e.label,trigger:n.jsx(c,{variant:"secondary",children:e.actions}),children:n.jsx(t,{children:e.rename})})}};var B,f,A;I.parameters={...I.parameters,docs:{...(B=I.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importMenu, \`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem>Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem>{copy.rename}</MenuItem>
        <MenuItem>{copy.duplicate}</MenuItem>
        <MenuSeparator />
        <MenuItem>{copy.delete}</MenuItem>
      </Menu>;
  }
}`,...(A=(f=I.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var D,w,R;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Variantes de déclencheur',
  parameters: componentSource(importTriggers, \`<>
    <Menu
        label="Actions du devoir"
        trigger={
            <Button variant="secondary" icon={<Icon as={ChevronDownIcon} />} iconPosition="end">
                Actions
            </Button>
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu
        label="Actions du devoir"
        trigger={
            <IconButton icon={<Icon as={EllipsisVerticalIcon} />} aria-label="Plus d’actions" />
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu label="Actions du devoir" trigger={<Link href="#actions">Actions</Link>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu
        label="Actions du devoir"
        trigger={
            <Button variant="secondary" size="sm" className="rounded-full">
                Actions
            </Button>
        }
    >
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    const items = <>
        <MenuItem>{copy.rename}</MenuItem>
        <MenuItem>{copy.duplicate}</MenuItem>
      </>;
    return <div className="flex flex-wrap items-center gap-4">
        <Menu {...args} label={copy.label} trigger={<Button variant="secondary" icon={<Icon as={ChevronDownIcon} />} iconPosition="end">
              {copy.actions}
            </Button>}>
          {items}
        </Menu>
        <Menu label={copy.label} trigger={<IconButton icon={<Icon as={EllipsisVerticalIcon} />} aria-label={copy.moreActions} />}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu label={copy.label} trigger={<Link href="#actions">{copy.actions}</Link>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu label={copy.label} trigger={<Button variant="secondary" size="sm" className="rounded-full">
              {copy.actions}
            </Button>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
      </div>;
  }
}`,...(R=(w=g.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var C,L,q;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Éléments du menu',
  parameters: componentSource(importItems, \`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem icon={<Icon as={PencilSquareIcon} />}>Renommer</MenuItem>
    <MenuItem icon={<Icon as={DocumentDuplicateIcon} />} shortcut="⌘⇧D">
        Dupliquer
    </MenuItem>
    <MenuItem
        href="/devoirs/12"
        iconEnd={<Icon as={ArrowTopRightOnSquareIcon} />}
    >
        Ouvrir le devoir
    </MenuItem>
    <MenuSeparator />
    <MenuItem icon={<Icon as={TrashIcon} />}>Supprimer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem icon={<Icon as={PencilSquareIcon} />}>{copy.rename}</MenuItem>
        <MenuItem icon={<Icon as={DocumentDuplicateIcon} />} shortcut={copy.duplicateShortcut}>
          {copy.duplicate}
        </MenuItem>
        <MenuItem href="/devoirs/12" iconEnd={<Icon as={ArrowTopRightOnSquareIcon} />}>
          {copy.openAssignment}
        </MenuItem>
        <MenuSeparator />
        <MenuItem icon={<Icon as={TrashIcon} />}>{copy.delete}</MenuItem>
      </Menu>;
  }
}`,...(q=(L=b.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var E,k,z;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Raccourcis',
  parameters: componentSource(importMenu, \`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem shortcut="⌘S">Enregistrer</MenuItem>
    <MenuItem shortcut="⌘⇧D">Dupliquer</MenuItem>
    <MenuSeparator />
    <MenuItem shortcut="⌘⌫">Supprimer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem shortcut={copy.saveShortcut}>{copy.save}</MenuItem>
        <MenuItem shortcut={copy.duplicateShortcut}>{copy.duplicate}</MenuItem>
        <MenuSeparator />
        <MenuItem shortcut={copy.deleteShortcut}>{copy.delete}</MenuItem>
      </Menu>;
  }
}`,...(z=(k=y.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var T,$,O;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Éléments désactivés',
  parameters: componentSource(importMenu, \`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuItem disabled>Archiver</MenuItem>
    <MenuItem>Supprimer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem>{copy.rename}</MenuItem>
        <MenuItem disabled>{copy.archive}</MenuItem>
        <MenuItem>{copy.delete}</MenuItem>
      </Menu>;
  }
}`,...(O=($=h.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var P,N,V;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Sous-menu',
  parameters: componentSource(importMenu, \`<Menu label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
    <MenuSub label="Partager">
        <MenuItem>Copier le lien</MenuItem>
        <MenuItem>E-mail</MenuItem>
    </MenuSub>
    <MenuSeparator />
    <MenuItem>Supprimer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem>{copy.rename}</MenuItem>
        <MenuSub label={copy.share}>
          <MenuItem>{copy.copyLink}</MenuItem>
          <MenuItem>{copy.email}</MenuItem>
        </MenuSub>
        <MenuSeparator />
        <MenuItem>{copy.delete}</MenuItem>
      </Menu>;
  }
}`,...(V=(N=x.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var F,H,_;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Menu contextuel',
  parameters: componentSource(importContext, \`<>
    <Menu label="Actions du fichier" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
    </Menu>
    <ContextMenu
        label="Actions du fichier"
        trigger={
            <button type="button" className="rounded-md border border-border px-4 py-8">
                Fiche devoir
            </button>
        }
    >
        <MenuItem>Ouvrir</MenuItem>
        <MenuItem>Télécharger</MenuItem>
        <MenuSeparator />
        <MenuItem>Supprimer</MenuItem>
    </ContextMenu>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <div className="flex flex-col items-start gap-4">
        <Menu {...args} label={copy.fileLabel} trigger={<Button variant="secondary">{copy.actions}</Button>}>
          <MenuItem>{copy.open}</MenuItem>
          <MenuItem>{copy.download}</MenuItem>
          <MenuSeparator />
          <MenuItem>{copy.delete}</MenuItem>
        </Menu>
        <ContextMenu label={copy.fileLabel} trigger={<button type="button" className="rounded-md border border-border bg-bg px-4 py-8 text-start text-fg">
              {copy.card}
            </button>}>
          <MenuItem>{copy.open}</MenuItem>
          <MenuItem>{copy.download}</MenuItem>
          <MenuSeparator />
          <MenuItem>{copy.delete}</MenuItem>
        </ContextMenu>
      </div>;
  }
}`,...(_=(H=v.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var Z,W,G;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importMenu, \`<>
    <Menu size="sm" label="Actions du devoir" trigger={<Button size="sm" variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
    <Menu size="md" label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
        <MenuItem>Renommer</MenuItem>
        <MenuItem>Dupliquer</MenuItem>
    </Menu>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-center gap-4">
        <Menu {...args} size="sm" label={\`\${copy.label} (\${copy.small})\`} trigger={<Button size="sm" variant="secondary">
              {copy.actions}
            </Button>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu {...args} size="md" label={\`\${copy.label} (\${copy.medium})\`} trigger={<Button variant="secondary">{copy.actions}</Button>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
        <Menu {...args} size="lg" label={\`\${copy.label} (\${copy.large})\`} trigger={<Button size="lg" variant="secondary">
              {copy.actions}
            </Button>}>
          <MenuItem>{copy.rename}</MenuItem>
          <MenuItem>{copy.duplicate}</MenuItem>
        </Menu>
      </div>;
  }
}`,...(G=(W=j.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importMenu, \`<Menu disabled label="Actions du devoir" trigger={<Button variant="secondary">Actions</Button>}>
    <MenuItem>Renommer</MenuItem>
</Menu>\`),
  render: (args, {
    globals
  }) => {
    const copy = menuCopy(docsLocale(globals.locale));
    return <Menu {...args} disabled label={copy.label} trigger={<Button variant="secondary">{copy.actions}</Button>}>
        <MenuItem>{copy.rename}</MenuItem>
      </Menu>;
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ie=["Default","TriggerVariants","Items","Shortcuts","DisabledItems","Submenu","Context","Sizes","Disabled"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Context:v,Default:I,Disabled:S,DisabledItems:h,Items:b,Shortcuts:y,Sizes:j,Submenu:x,TriggerVariants:g,__namedExportsOrder:Ie,default:pe},Symbol.toStringTag,{value:"Module"}));export{v as C,I as D,b as I,Ae as M,y as S,g as T,h as a,x as b,j as c,S as d};
