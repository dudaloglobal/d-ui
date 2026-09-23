import{r as o,j as e,h as H,aa as d,d as p,p as oe}from"./iframe-BTNaxqGu.js";import{H as je}from"./arg-types-CcAGxubR.js";import{b as m}from"./docs-source-C_O40UCi.js";import{B as c}from"./Button-CjHht5f9.js";import{a as Ce,C as Le}from"./Checkbox-BKnDZK0w.js";import{L as ze,a as Ie}from"./List-CxJRrcU8.js";import{N as Ae}from"./Navbar-CxM0xgq8.js";import{S as le}from"./Select-DwQkz9a3.js";import{T as Ne}from"./Textarea-CIGUDybK.js";import{T as C}from"./TextInput-Cp9mjk0K.js";import{u as ke,a as Fe,b as Ve,c as _e,d as He,e as Pe,F as qe,f as Me,g as Re,o as Ee}from"./floating-Cify4Q6n.js";import{D as Ge,a as f,b as I,f as S,e as ce,c as A}from"./DialogFrame-CxDnUTWD.js";const Ue={left:"inset-y-0 left-0 w-full",right:"inset-y-0 right-0 w-full",top:"inset-x-0 top-0 h-full",bottom:"inset-x-0 bottom-0 h-full"},We={tiny:"max-w-[400px]",regular:"max-w-[600px]",big:"max-w-[800px]",huge:"max-w-[calc(100vw-4rem)]"},Ze={tiny:"max-h-[400px]",regular:"max-h-[600px]",big:"max-h-[800px]",huge:"max-h-[calc(100dvh-4rem)]"},Ye={left:"d-ui-drawer-panel-left",right:"d-ui-drawer-panel-right",top:"d-ui-drawer-panel-top",bottom:"d-ui-drawer-panel-bottom"};function Je(){}function u({open:a,onOpenChange:t,side:r="right",size:s="regular",dismissible:i=!0,dismissLabel:l="Fermer",initialFocus:B,id:me,children:fe,className:De,"aria-label":be}){const O=o.useId(),[we,ge]=o.useState(null),[k,ye]=o.useState(!1),[he,ve]=o.useState(!1),{refs:xe,context:$}=ke({open:a,onOpenChange:t}),Te=Fe($),Se=Ve($,{role:"dialog"}),{getFloatingProps:$e}=_e([Te,Se]),Be=He(we),F=Ee(Be),V=Pe(),_=o.useCallback(()=>t(!1),[t]),j=o.useMemo(()=>({titleId:`${O}-title`,descriptionId:`${O}-description`,alert:!1,radius:"none",showDismiss:i,dismissLabel:l,close:_,setHasTitle:ye,setHasDescription:ve,registerFirstAction:Je}),[O,i,l,_]),Oe=r==="left"||r==="right";return e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:ge,hidden:!0,"aria-hidden":"true"}),a?e.jsx(qe,{children:e.jsx(Me,{lockScroll:!0,"data-d-ui-theme":F["data-d-ui-theme"],style:{overflow:"clip"},className:H(F.className,"bg-black/70",V?null:"d-ui-dialog-overlay"),children:e.jsx(Re,{context:$,modal:!0,returnFocus:!0,initialFocus:B,children:e.jsx("div",{ref:xe.setFloating,...$e(),id:me??$.floatingId,"data-side":r,"aria-label":k?void 0:be,"aria-labelledby":k?j.titleId:void 0,"aria-describedby":he?j.descriptionId:void 0,className:H("bg-bg text-fg absolute flex flex-col shadow-[0_8px_32px_rgb(0_0_0/0.2)] outline-none",Ue[r],Oe?We[s]:Ze[s],V?null:Ye[r],De),children:e.jsx(Ge,{value:j,children:fe})})})})}):null]})}u.__docgenInfo={description:"`Dialog` posé sur un bord de l'écran : filtres, navigation mobile, fiche de\ndétail — tout ce qui se consulte sans quitter la page.\n\nMême mécanique que `Dialog` (`@floating-ui/react` : piège de focus, page\ninerte, défilement bloqué, retour du focus) et même intérieur\n(`DialogFrame`) : seuls la position, la taille et l'animation changent.\n\nL'empilement n'est pas supporté, ni le geste de balayage : la croix, le\nfond et `Escape` ferment.",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},side:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Bord d'ancrage. Défaut : `right`.",defaultValue:{value:"'right'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'tiny' | 'regular' | 'big' | 'huge'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'big'"},{name:"literal",value:"'huge'"}]},description:"Taille du panneau sur l'axe perpendiculaire au bord. Sur petit écran, tout le bord.",defaultValue:{value:"'regular'",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Croix de fermeture en haut à droite. Défaut : `true`.\n\nUn panneau latéral n'a souvent pas d'actions : la croix est sa sortie\nvisible à la souris et au toucher. `Escape` et le clic sur le fond restent\nactifs dans tous les cas.",defaultValue:{value:"true",computed:!1}},dismissLabel:{required:!1,tsType:{name:"string"},description:"Nom accessible de la croix.",defaultValue:{value:"'Fermer'",computed:!1}},initialFocus:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLElement | null>"},description:"Élément qui prend le focus à l'ouverture. Par défaut, le premier focusable."},id:{required:!1,tsType:{name:"string"},description:"`id` du panneau, pour `aria-controls` sur le déclencheur (`Navbar` `menuControls`)."},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Requis si aucun `DrawerTitle` n'est rendu."}}};const n=d("fr"),Ke=oe("fr"),L=["left","right","top","bottom"],z=["tiny","regular","big","huge"],ue=["cours","devoirs","evaluations","ressources","annonces","messages"],de=["accueil","cours","devoirs","messages"],b="import { useState } from 'react';",Qe={title:"Components/Drawer",component:u,argTypes:je,parameters:{controls:{include:["side","size","dismissible"]}}},D={open:!1,onOpenChange:()=>{},children:null};function N({label:a,children:t}){const[r,s]=o.useState(!1);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(c,{variant:"secondary",onClick:()=>s(!0),children:a}),t(r,s)]})}function pe(a,t,r){return a.map((s,i)=>`<Button variant="secondary" onClick={() => ${r}('${s}')}>${t[i]}</Button>`).join(`
        `)}const w={name:"Par défaut",args:D,parameters:m(`${b}
import { Button, Drawer, DrawerBody, DrawerDescription, DrawerTitle } from 'd-ui';`,`const [open, setOpen] = useState(false);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>${n.open}</Button>
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTitle>${n.detailTitle}</DrawerTitle>
            <DrawerDescription>${n.detailBody}</DrawerDescription>
            <DrawerBody>
                <p>${n.detailParagraph}</p>
            </DrawerBody>
        </Drawer>
    </>
);`),render:(a,{globals:t})=>{const r=d(p(t.locale));return e.jsx(N,{label:r.open,children:(s,i)=>e.jsxs(u,{open:s,onOpenChange:i,children:[e.jsx(f,{children:r.detailTitle}),e.jsx(I,{children:r.detailBody}),e.jsx(S,{children:e.jsx("p",{children:r.detailParagraph})})]})})}};function Xe({copy:a}){const[t,r]=o.useState(null);return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[L.map(s=>e.jsx(c,{variant:"secondary",onClick:()=>r(s),children:a[s]},s)),e.jsxs(u,{open:t!==null,onOpenChange:s=>r(s?t:null),side:t??"right",children:[e.jsx(f,{children:`${a.sideTitle} — ${t??"right"}`}),e.jsx(I,{children:a.sideBody})]})]})}const g={name:"Bord d’ancrage",args:D,parameters:m(`${b}
import { Button, Drawer, DrawerDescription, DrawerTitle, type DrawerSide } from 'd-ui';`,`const [side, setSide] = useState<DrawerSide | null>(null);

return (
    <>
        ${pe(L,L.map(a=>n[a]),"setSide")}
        <Drawer
            open={side !== null}
            onOpenChange={(next) => setSide(next ? side : null)}
            side={side ?? 'right'}
        >
            <DrawerTitle>{\`${n.sideTitle} — \${side ?? 'right'}\`}</DrawerTitle>
            <DrawerDescription>${n.sideBody}</DrawerDescription>
        </Drawer>
    </>
);`),render:(a,{globals:t})=>e.jsx(Xe,{copy:d(p(t.locale))})};function er({copy:a}){const[t,r]=o.useState(null);return e.jsxs("div",{className:"flex flex-wrap justify-center gap-3 p-6",children:[z.map(s=>e.jsx(c,{variant:"secondary",onClick:()=>r(s),children:a[s]},s)),e.jsxs(u,{open:t!==null,onOpenChange:s=>r(s?t:null),size:t??"regular",children:[e.jsx(f,{children:`${a.sizeTitle} — ${t??"regular"}`}),e.jsx(I,{children:a.sizeBody})]})]})}const y={name:"Tailles",args:D,parameters:m(`${b}
import { Button, Drawer, DrawerDescription, DrawerTitle, type DrawerSize } from 'd-ui';`,`const [size, setSize] = useState<DrawerSize | null>(null);

return (
    <>
        ${pe(z,z.map(a=>n[a]),"setSize")}
        <Drawer
            open={size !== null}
            onOpenChange={(next) => setSize(next ? size : null)}
            size={size ?? 'regular'}
        >
            <DrawerTitle>{\`${n.sizeTitle} — \${size ?? 'regular'}\`}</DrawerTitle>
            <DrawerDescription>${n.sizeBody}</DrawerDescription>
        </Drawer>
    </>
);`),render:(a,{globals:t})=>e.jsx(er,{copy:d(p(t.locale))})};function rr(a){return ue.map((t,r)=>`<Checkbox value="${t}" label="${a[r]}" />`).join(`
                        `)}const h={name:"Panneau de filtres",args:D,parameters:m(`${b}
import {
    Button,
    Checkbox,
    CheckboxGroup,
    Drawer,
    DrawerActions,
    DrawerBody,
    DrawerHeader,
    DrawerTitle,
    Select,
    TextInput,
} from 'd-ui';`,`const [open, setOpen] = useState(false);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>${n.filtersOpen}</Button>
        <Drawer open={open} onOpenChange={setOpen} size="tiny">
            <DrawerHeader>
                <DrawerTitle>${n.filtersTitle}</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <form id="filters" onSubmit={onSubmit} className="grid gap-4">
                    <TextInput type="search" name="q" label="${n.searchLabel}" placeholder="${n.searchPlaceholder}" />
                    <Select
                        name="status"
                        label="${n.statusLabel}"
                        defaultValue="all"
                        options={[
                            { value: 'all', label: '${n.statusAll}' },
                            { value: 'active', label: '${n.statusActive}' },
                            { value: 'archived', label: '${n.statusArchived}' },
                        ]}
                    />
                    <CheckboxGroup label="${n.categoriesLabel}" name="categories">
                        ${rr(n.categories)}
                    </CheckboxGroup>
                </form>
            </DrawerBody>
            <DrawerActions surface>
                <Button variant="secondary" type="reset" form="filters">${n.reset}</Button>
                <Button variant="primary" type="submit" form="filters">${n.apply}</Button>
            </DrawerActions>
        </Drawer>
    </>
);`),render:(a,{globals:t})=>{const r=d(p(t.locale));return e.jsx(N,{label:r.filtersOpen,children:(s,i)=>e.jsxs(u,{open:s,onOpenChange:i,size:"tiny",children:[e.jsx(ce,{children:e.jsx(f,{children:r.filtersTitle})}),e.jsx(S,{children:e.jsxs("form",{id:"d-ui-filters",className:"grid gap-4",onSubmit:l=>{l.preventDefault(),i(!1)},children:[e.jsx(C,{type:"search",name:"q",label:r.searchLabel,placeholder:r.searchPlaceholder}),e.jsx(le,{name:"status",label:r.statusLabel,defaultValue:"all",options:[{value:"all",label:r.statusAll},{value:"active",label:r.statusActive},{value:"archived",label:r.statusArchived}]}),e.jsx(Ce,{label:r.categoriesLabel,name:"categories",children:ue.map((l,B)=>e.jsx(Le,{value:l,label:r.categories[B]},l))})]})}),e.jsxs(A,{surface:!0,children:[e.jsx(c,{variant:"secondary",type:"reset",form:"d-ui-filters",children:r.reset}),e.jsx(c,{variant:"primary",type:"submit",form:"d-ui-filters",children:r.apply})]})]})})}},v={name:"Sans croix de fermeture",args:D,parameters:m(`${b}
import { Button, Drawer, DrawerActions, DrawerBody, DrawerTitle, TextInput } from 'd-ui';`,`const [open, setOpen] = useState(false);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>${n.addressOpen}</Button>
        <Drawer open={open} onOpenChange={setOpen} size="tiny" dismissible={false}>
            <DrawerTitle>${n.addressTitle}</DrawerTitle>
            <DrawerBody>
                <form id="address" onSubmit={onSubmit} className="grid gap-4">
                    <TextInput name="street" label="${n.streetLabel}" defaultValue="${n.streetValue}" />
                    <TextInput name="city" label="${n.cityLabel}" defaultValue="${n.cityValue}" />
                </form>
            </DrawerBody>
            <DrawerActions surface>
                <Button variant="secondary" onClick={() => setOpen(false)}>${n.cancel}</Button>
                <Button variant="primary" type="submit" form="address">${n.save}</Button>
            </DrawerActions>
        </Drawer>
    </>
);`),render:(a,{globals:t})=>{const r=d(p(t.locale));return e.jsx(N,{label:r.addressOpen,children:(s,i)=>e.jsxs(u,{open:s,onOpenChange:i,size:"tiny",dismissible:!1,children:[e.jsx(f,{children:r.addressTitle}),e.jsx(S,{children:e.jsxs("form",{id:"d-ui-address",className:"grid gap-4",onSubmit:l=>{l.preventDefault(),i(!1)},children:[e.jsx(C,{name:"street",label:r.streetLabel,defaultValue:r.streetValue}),e.jsx(C,{name:"city",label:r.cityLabel,defaultValue:r.cityValue})]})}),e.jsxs(A,{surface:!0,children:[e.jsx(c,{variant:"secondary",onClick:()=>i(!1),children:r.cancel}),e.jsx(c,{variant:"primary",type:"submit",form:"d-ui-address",children:r.save})]})]})})}};function ar({copy:a}){const[t,r]=o.useState(!1),s=o.useRef(null);return e.jsxs("div",{className:"flex justify-center p-6",children:[e.jsx(c,{variant:"secondary",onClick:()=>r(!0),children:a.noteOpen}),e.jsxs(u,{open:t,onOpenChange:r,size:"tiny",initialFocus:s,children:[e.jsx(f,{children:a.noteTitle}),e.jsx(S,{children:e.jsxs("form",{id:"d-ui-note",className:"grid gap-4",onSubmit:i=>{i.preventDefault(),r(!1)},children:[e.jsx(le,{name:"visibility",label:a.visibilityLabel,defaultValue:"team",options:[{value:"team",label:a.visibilityTeam},{value:"private",label:a.visibilityPrivate}]}),e.jsx(Ne,{ref:s,name:"note",label:a.noteLabel,placeholder:a.notePlaceholder,helper:a.noteHelper,rows:4})]})}),e.jsxs(A,{surface:!0,children:[e.jsx(c,{variant:"secondary",onClick:()=>r(!1),children:a.cancel}),e.jsx(c,{variant:"primary",type:"submit",form:"d-ui-note",children:a.publish})]})]})]})}const x={name:"Focus initial",args:D,parameters:m(`import { useRef, useState } from 'react';
import { Button, Drawer, DrawerActions, DrawerBody, DrawerTitle, Select, Textarea } from 'd-ui';`,`const [open, setOpen] = useState(false);
const noteRef = useRef<HTMLTextAreaElement | null>(null);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>${n.noteOpen}</Button>
        <Drawer open={open} onOpenChange={setOpen} size="tiny" initialFocus={noteRef}>
            <DrawerTitle>${n.noteTitle}</DrawerTitle>
            <DrawerBody>
                <form id="note" onSubmit={onSubmit} className="grid gap-4">
                    <Select
                        name="visibility"
                        label="${n.visibilityLabel}"
                        defaultValue="team"
                        options={[
                            { value: 'team', label: '${n.visibilityTeam}' },
                            { value: 'private', label: '${n.visibilityPrivate}' },
                        ]}
                    />
                    <Textarea
                        ref={noteRef}
                        name="note"
                        label="${n.noteLabel}"
                        placeholder="${n.notePlaceholder}"
                        helper="${n.noteHelper}"
                        rows={4}
                    />
                </form>
            </DrawerBody>
            <DrawerActions surface>
                <Button variant="secondary" onClick={() => setOpen(false)}>${n.cancel}</Button>
                <Button variant="primary" type="submit" form="note">${n.publish}</Button>
            </DrawerActions>
        </Drawer>
    </>
);`),render:(a,{globals:t})=>e.jsx(ar,{copy:d(p(t.locale))})};function nr(a){return de.map((t,r)=>`<ListItem href="/${t}">${a[r]}</ListItem>`).join(`
                        `)}function tr({copy:a,brand:t}){const[r,s]=o.useState(!1);return e.jsxs("div",{className:"border-border overflow-hidden rounded-md border",children:[e.jsx(Ae,{brand:e.jsx("a",{href:"/",children:t}),menuLabel:a.openNav,menuOpen:r,menuControls:"nav-mobile",onMenuOpenChange:s}),e.jsxs(u,{id:"nav-mobile",open:r,onOpenChange:s,side:"left",size:"tiny",dismissLabel:a.closeNav,children:[e.jsx(ce,{children:e.jsx(f,{children:a.menu})}),e.jsx(S,{children:e.jsx("nav",{"aria-label":a.navLabel,children:e.jsx(ze,{size:"sm",children:de.map((i,l)=>e.jsx(Ie,{href:`#${i}`,children:a.navLinks[l]},i))})})})]}),e.jsx("main",{id:"main",tabIndex:-1,className:"bg-bg text-fg p-4",children:a.main})]})}const T={name:"Navigation mobile",args:D,parameters:m(`${b}
import { Drawer, DrawerBody, DrawerHeader, DrawerTitle, List, ListItem, Navbar } from 'd-ui';`,`const [open, setOpen] = useState(false);

return (
    <>
        <Navbar
            brand={<a href="/">${Ke.brand}</a>}
            menuLabel="${n.openNav}"
            menuOpen={open}
            menuControls="nav-mobile"
            onMenuOpenChange={setOpen}
        />
        <Drawer
            id="nav-mobile"
            open={open}
            onOpenChange={setOpen}
            side="left"
            size="tiny"
            dismissLabel="${n.closeNav}"
        >
            <DrawerHeader>
                <DrawerTitle>${n.menu}</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <nav aria-label="${n.navLabel}">
                    <List size="sm">
                        ${nr(n.navLinks)}
                    </List>
                </nav>
            </DrawerBody>
        </Drawer>
        <main id="main" tabIndex={-1}>
            ${n.main}
        </main>
    </>
);`),render:(a,{globals:t})=>{const r=p(t.locale);return e.jsx(tr,{copy:d(r),brand:oe(r).brand})}};var P,q,M;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: closed,
  parameters: componentSourceFn(\`\${reactImport}\\nimport { Button, Drawer, DrawerBody, DrawerDescription, DrawerTitle } from 'd-ui';\`, \`const [open, setOpen] = useState(false);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>\${fr.open}</Button>
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTitle>\${fr.detailTitle}</DrawerTitle>
            <DrawerDescription>\${fr.detailBody}</DrawerDescription>
            <DrawerBody>
                <p>\${fr.detailParagraph}</p>
            </DrawerBody>
        </Drawer>
    </>
);\`),
  render: (_, {
    globals
  }) => {
    const copy = drawerCopy(docsLocale(globals.locale));
    return <Trigger label={copy.open}>
        {(open, setOpen) => <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTitle>{copy.detailTitle}</DrawerTitle>
            <DrawerDescription>{copy.detailBody}</DrawerDescription>
            <DrawerBody>
              <p>{copy.detailParagraph}</p>
            </DrawerBody>
          </Drawer>}
      </Trigger>;
  }
}`,...(M=(q=w.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var R,E,G;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Bord d’ancrage',
  args: closed,
  parameters: componentSourceFn(\`\${reactImport}\\nimport { Button, Drawer, DrawerDescription, DrawerTitle, type DrawerSide } from 'd-ui';\`, \`const [side, setSide] = useState<DrawerSide | null>(null);

return (
    <>
        \${triggersSource(SIDES, SIDES.map(value => fr[value]), 'setSide')}
        <Drawer
            open={side !== null}
            onOpenChange={(next) => setSide(next ? side : null)}
            side={side ?? 'right'}
        >
            <DrawerTitle>{\\\`\${fr.sideTitle} — \\\${side ?? 'right'}\\\`}</DrawerTitle>
            <DrawerDescription>\${fr.sideBody}</DrawerDescription>
        </Drawer>
    </>
);\`),
  render: (_, {
    globals
  }) => <SidesDemo copy={drawerCopy(docsLocale(globals.locale))} />
}`,...(G=(E=g.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var U,W,Z;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Tailles',
  args: closed,
  parameters: componentSourceFn(\`\${reactImport}\\nimport { Button, Drawer, DrawerDescription, DrawerTitle, type DrawerSize } from 'd-ui';\`, \`const [size, setSize] = useState<DrawerSize | null>(null);

return (
    <>
        \${triggersSource(SIZES, SIZES.map(value => fr[value]), 'setSize')}
        <Drawer
            open={size !== null}
            onOpenChange={(next) => setSize(next ? size : null)}
            size={size ?? 'regular'}
        >
            <DrawerTitle>{\\\`\${fr.sizeTitle} — \\\${size ?? 'regular'}\\\`}</DrawerTitle>
            <DrawerDescription>\${fr.sizeBody}</DrawerDescription>
        </Drawer>
    </>
);\`),
  render: (_, {
    globals
  }) => <SizesDemo copy={drawerCopy(docsLocale(globals.locale))} />
}`,...(Z=(W=y.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var Y,J,K;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Panneau de filtres',
  args: closed,
  parameters: componentSourceFn(\`\${reactImport}
import {
    Button,
    Checkbox,
    CheckboxGroup,
    Drawer,
    DrawerActions,
    DrawerBody,
    DrawerHeader,
    DrawerTitle,
    Select,
    TextInput,
} from 'd-ui';\`, \`const [open, setOpen] = useState(false);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>\${fr.filtersOpen}</Button>
        <Drawer open={open} onOpenChange={setOpen} size="tiny">
            <DrawerHeader>
                <DrawerTitle>\${fr.filtersTitle}</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <form id="filters" onSubmit={onSubmit} className="grid gap-4">
                    <TextInput type="search" name="q" label="\${fr.searchLabel}" placeholder="\${fr.searchPlaceholder}" />
                    <Select
                        name="status"
                        label="\${fr.statusLabel}"
                        defaultValue="all"
                        options={[
                            { value: 'all', label: '\${fr.statusAll}' },
                            { value: 'active', label: '\${fr.statusActive}' },
                            { value: 'archived', label: '\${fr.statusArchived}' },
                        ]}
                    />
                    <CheckboxGroup label="\${fr.categoriesLabel}" name="categories">
                        \${categoriesSource(fr.categories)}
                    </CheckboxGroup>
                </form>
            </DrawerBody>
            <DrawerActions surface>
                <Button variant="secondary" type="reset" form="filters">\${fr.reset}</Button>
                <Button variant="primary" type="submit" form="filters">\${fr.apply}</Button>
            </DrawerActions>
        </Drawer>
    </>
);\`),
  render: (_, {
    globals
  }) => {
    const copy = drawerCopy(docsLocale(globals.locale));
    return <Trigger label={copy.filtersOpen}>
        {(open, setOpen) => <Drawer open={open} onOpenChange={setOpen} size="tiny">
            <DrawerHeader>
              <DrawerTitle>{copy.filtersTitle}</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <form id="d-ui-filters" className="grid gap-4" onSubmit={event => {
            event.preventDefault();
            setOpen(false);
          }}>
                <TextInput type="search" name="q" label={copy.searchLabel} placeholder={copy.searchPlaceholder} />
                <Select name="status" label={copy.statusLabel} defaultValue="all" options={[{
              value: 'all',
              label: copy.statusAll
            }, {
              value: 'active',
              label: copy.statusActive
            }, {
              value: 'archived',
              label: copy.statusArchived
            }]} />
                <CheckboxGroup label={copy.categoriesLabel} name="categories">
                  {CATEGORY_VALUES.map((value, index) => <Checkbox key={value} value={value} label={copy.categories[index]} />)}
                </CheckboxGroup>
              </form>
            </DrawerBody>
            <DrawerActions surface>
              <Button variant="secondary" type="reset" form="d-ui-filters">
                {copy.reset}
              </Button>
              <Button variant="primary" type="submit" form="d-ui-filters">
                {copy.apply}
              </Button>
            </DrawerActions>
          </Drawer>}
      </Trigger>;
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Sans croix de fermeture',
  args: closed,
  parameters: componentSourceFn(\`\${reactImport}\\nimport { Button, Drawer, DrawerActions, DrawerBody, DrawerTitle, TextInput } from 'd-ui';\`, \`const [open, setOpen] = useState(false);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>\${fr.addressOpen}</Button>
        <Drawer open={open} onOpenChange={setOpen} size="tiny" dismissible={false}>
            <DrawerTitle>\${fr.addressTitle}</DrawerTitle>
            <DrawerBody>
                <form id="address" onSubmit={onSubmit} className="grid gap-4">
                    <TextInput name="street" label="\${fr.streetLabel}" defaultValue="\${fr.streetValue}" />
                    <TextInput name="city" label="\${fr.cityLabel}" defaultValue="\${fr.cityValue}" />
                </form>
            </DrawerBody>
            <DrawerActions surface>
                <Button variant="secondary" onClick={() => setOpen(false)}>\${fr.cancel}</Button>
                <Button variant="primary" type="submit" form="address">\${fr.save}</Button>
            </DrawerActions>
        </Drawer>
    </>
);\`),
  render: (_, {
    globals
  }) => {
    const copy = drawerCopy(docsLocale(globals.locale));
    return <Trigger label={copy.addressOpen}>
        {(open, setOpen) => <Drawer open={open} onOpenChange={setOpen} size="tiny" dismissible={false}>
            <DrawerTitle>{copy.addressTitle}</DrawerTitle>
            <DrawerBody>
              <form id="d-ui-address" className="grid gap-4" onSubmit={event => {
            event.preventDefault();
            setOpen(false);
          }}>
                <TextInput name="street" label={copy.streetLabel} defaultValue={copy.streetValue} />
                <TextInput name="city" label={copy.cityLabel} defaultValue={copy.cityValue} />
              </form>
            </DrawerBody>
            <DrawerActions surface>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" type="submit" form="d-ui-address">
                {copy.save}
              </Button>
            </DrawerActions>
          </Drawer>}
      </Trigger>;
  }
}`,...(ee=(X=v.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var re,ae,ne;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Focus initial',
  args: closed,
  parameters: componentSourceFn(\`import { useRef, useState } from 'react';
import { Button, Drawer, DrawerActions, DrawerBody, DrawerTitle, Select, Textarea } from 'd-ui';\`, \`const [open, setOpen] = useState(false);
const noteRef = useRef<HTMLTextAreaElement | null>(null);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>\${fr.noteOpen}</Button>
        <Drawer open={open} onOpenChange={setOpen} size="tiny" initialFocus={noteRef}>
            <DrawerTitle>\${fr.noteTitle}</DrawerTitle>
            <DrawerBody>
                <form id="note" onSubmit={onSubmit} className="grid gap-4">
                    <Select
                        name="visibility"
                        label="\${fr.visibilityLabel}"
                        defaultValue="team"
                        options={[
                            { value: 'team', label: '\${fr.visibilityTeam}' },
                            { value: 'private', label: '\${fr.visibilityPrivate}' },
                        ]}
                    />
                    <Textarea
                        ref={noteRef}
                        name="note"
                        label="\${fr.noteLabel}"
                        placeholder="\${fr.notePlaceholder}"
                        helper="\${fr.noteHelper}"
                        rows={4}
                    />
                </form>
            </DrawerBody>
            <DrawerActions surface>
                <Button variant="secondary" onClick={() => setOpen(false)}>\${fr.cancel}</Button>
                <Button variant="primary" type="submit" form="note">\${fr.publish}</Button>
            </DrawerActions>
        </Drawer>
    </>
);\`),
  render: (_, {
    globals
  }) => <InitialFocusDemo copy={drawerCopy(docsLocale(globals.locale))} />
}`,...(ne=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,ie;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Navigation mobile',
  args: closed,
  parameters: componentSourceFn(\`\${reactImport}
import { Drawer, DrawerBody, DrawerHeader, DrawerTitle, List, ListItem, Navbar } from 'd-ui';\`, \`const [open, setOpen] = useState(false);

return (
    <>
        <Navbar
            brand={<a href="/">\${navbarFr.brand}</a>}
            menuLabel="\${fr.openNav}"
            menuOpen={open}
            menuControls="nav-mobile"
            onMenuOpenChange={setOpen}
        />
        <Drawer
            id="nav-mobile"
            open={open}
            onOpenChange={setOpen}
            side="left"
            size="tiny"
            dismissLabel="\${fr.closeNav}"
        >
            <DrawerHeader>
                <DrawerTitle>\${fr.menu}</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
                <nav aria-label="\${fr.navLabel}">
                    <List size="sm">
                        \${navSource(fr.navLinks)}
                    </List>
                </nav>
            </DrawerBody>
        </Drawer>
        <main id="main" tabIndex={-1}>
            \${fr.main}
        </main>
    </>
);\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    return <MobileNavigationDemo copy={drawerCopy(locale)} brand={navbarCopy(locale).brand} />;
  }
}`,...(ie=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const sr=["Default","Sides","Sizes","Filters","WithoutDismiss","InitialFocus","MobileNavigation"],gr=Object.freeze(Object.defineProperty({__proto__:null,Default:w,Filters:h,InitialFocus:x,MobileNavigation:T,Sides:g,Sizes:y,WithoutDismiss:v,__namedExportsOrder:sr,default:Qe},Symbol.toStringTag,{value:"Module"}));export{gr as D,h as F,x as I,T as M,g as S,v as W,w as a,y as b};
