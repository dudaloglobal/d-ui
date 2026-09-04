import{r as m,j as r,h as _,d as p,x as b}from"./iframe-CSDJ8R1k.js";import{O as Ia}from"./arg-types-B_nef0fB.js";import{c as w}from"./docs-source-C_O40UCi.js";import{T as ja}from"./Tag-DAanEdjS.js";import{B as ie}from"./Button-DCvfpArC.js";import{I as Ca}from"./IconButton-Bu6_OKkE.js";import{M as Ra,a as ce,b as La}from"./Menu-DzshgG0Q.js";import{T as ka,a as qa,b as Ma,c as Na}from"./Tabs-Dgh6GEcW.js";import{T as Ea}from"./TextInput-QKPl02rH.js";import{V as ye}from"./VisuallyHidden-D3lTWNeG.js";import{C as Te}from"./Checkbox-DxrmgqZT.js";import{P as _a}from"./Pagination-EFYscwC9.js";import{T as Aa,f as za,a as Ba,b as ve,c as he,i as Oa,d as $a,g as Pa,e as xe,t as Se}from"./Table-CcXgLLi3.js";function Va(e){return e==null}function J(e){return Va(e)?1:0}function Fa(e,o,a){const n=J(e)-J(o);return n!==0?n:J(e)===1?0:e instanceof Date&&o instanceof Date?e.getTime()-o.getTime():typeof e=="number"&&typeof o=="number"?e-o:typeof e=="boolean"&&typeof o=="boolean"?Number(e)-Number(o):String(e).localeCompare(String(o),a,{numeric:!0,sensitivity:"base"})}function Ha(e,o,a,n){if(!o)return[...e];const t=o.direction==="descending"?-1:1;return e.map((l,i)=>({row:l,index:i})).sort((l,i)=>{const x=a(l.row,o.columnId),L=a(i.row,o.columnId),k=J(x)-J(L);if(k!==0)return k;const K=Fa(x,L,n);return K!==0?K*t:l.index-i.index}).map(l=>l.row)}function Wa(e,o,a,n){const t=De(o);return t?e.filter(l=>a.some(i=>{const x=n(l,i);return x==null?!1:De(ca(x)).includes(t)})):[...e]}function ca(e){return e instanceof Date?e.toISOString().slice(0,10):String(e)}function De(e){return e.trim().toLowerCase().normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"")}function Ga(e,o){return!e||e.columnId!==o?{columnId:o,direction:"ascending"}:e.direction==="ascending"?{columnId:o,direction:"descending"}:null}function Ua(e,o,a){if(a<=0)return[...e];const n=Math.max(0,(o-1)*a);return e.slice(n,n+a)}function Ja(e,o){return o<=0?1:Math.max(1,Math.ceil(e/o))}const Ka={selectAll:"Select all rows",selectRow:e=>`Select ${e}`,sortBy:"Sort this column",locked:"Locked row",results:e=>`${e} results`,empty:"No results"};function Xa({direction:e}){return r.jsxs("svg",{viewBox:"0 0 12 16",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:_("size-3 shrink-0",e?"text-brand":"text-fg-muted"),"aria-hidden":"true",focusable:"false",children:[e!=="descending"?r.jsx("path",{d:"M3 7l3-3 3 3"}):null,e!=="ascending"?r.jsx("path",{d:"M3 9l3 3 3-3"}):null]})}function Za(){return r.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"text-fg-muted size-4","aria-hidden":"true",focusable:"false",children:[r.jsx("rect",{x:"3.25",y:"7",width:"9.5",height:"6.5",rx:"1.5"}),r.jsx("path",{d:"M5.75 7V5a2.25 2.25 0 0 1 4.5 0v2"})]})}function d({columns:e,rows:o,rowId:a,caption:n,hideCaption:t=!1,size:l="md",sort:i,defaultSort:x=null,onSortChange:L,search:k,defaultSearch:K="",onSearchChange:Q,selectable:Y=!1,selectedIds:ee,defaultSelectedIds:ia=[],onSelectedIdsChange:ae,rowLabel:ne,isRowLocked:I,pageSize:q,page:S,defaultPage:ua=1,onPageChange:T,toolbar:X,footer:ue,locale:de,labels:da,className:ma}){const M={...Ka,...da},[pa,ba]=m.useState(x),[wa,fa]=m.useState(K),[ga,ya]=m.useState(ia),[re,oe]=m.useState(ua),j=i!==void 0?i:pa,te=k!==void 0?k:wa,C=ee!==void 0?ee:ga,me=S!==void 0?S:re,se=m.useMemo(()=>{const s=new Map(e.map(c=>[c.id,c]));return(c,h)=>{var v;return((v=s.get(h))==null?void 0:v.value(c))??null}},[e]),pe=m.useMemo(()=>e.map(s=>s.id),[e]),N=m.useMemo(()=>{const s=Wa(o,te,pe,se);return Ha(s,j,se,de)},[o,te,pe,se,j,de]),le=q?Ja(N.length,q):1,R=Math.min(Math.max(me,1),le),Z=q?Ua(N,R,q):N,E=m.useMemo(()=>Z.filter(s=>!(I!=null&&I(s))),[Z,I]),be=m.useMemo(()=>new Set(C),[C]),we=E.filter(s=>be.has(a(s))).length,fe=E.length>0&&we===E.length;function Ta(s){const c=Ga(j,s);i===void 0&&ba(c),L==null||L(c)}function ge(s){ee===void 0&&ya(s),ae==null||ae(s)}function va(s,c){const h=c?[...C,s]:C.filter(v=>v!==s);ge(h)}function ha(s){const c=new Set(E.map(a));ge(s?[...new Set([...C,...c])]:C.filter(h=>!c.has(h)))}function xa(s){k===void 0&&fa(s),Q==null||Q(s),q&&me!==1&&(S===void 0&&oe(1),T==null||T(1))}function Sa(s){S===void 0&&oe(s),T==null||T(s)}m.useEffect(()=>{S!==void 0&&S!==R&&(T==null||T(R)),S===void 0&&re!==R&&oe(R)},[S,R,re,T]);const Da=e.length+(Y?1:0);return r.jsxs("div",{className:_("font-sans",ma),children:[X!==void 0?r.jsx("div",{className:"mb-3",children:typeof X=="function"?X({rows:N,search:te,setSearch:xa,selectedIds:C}):X}):null,r.jsx("p",{role:"status",className:"d-ui-visually-hidden",children:M.results(N.length)}),r.jsxs(Aa,{size:l,className:"border-border-subtle rounded-md border",children:[r.jsx(za,{className:t?"d-ui-visually-hidden":_("mb-0 font-normal text-fg-muted",Se[l]),children:n}),r.jsx(Ba,{children:r.jsxs(ve,{children:[Y?r.jsx(he,{children:r.jsx(Te,{size:"sm","aria-label":M.selectAll,checked:fe,indeterminate:we>0&&!fe,disabled:E.length===0,onChange:s=>ha(s.currentTarget.checked)})}):null,e.map(s=>{const c=(j==null?void 0:j.columnId)===s.id?j:null,h=s.sortable!==!1,v=Oa(s.align,s.numeric??!1)==="end";return r.jsx(he,{align:s.align,numeric:s.numeric,"aria-sort":c?c.direction:void 0,children:h?r.jsxs("button",{type:"button",onClick:()=>Ta(s.id),className:_("inline-flex min-h-6 items-center gap-1.5 rounded-sm","focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",v?"flex-row-reverse":null),children:[s.header,r.jsx(Xa,{direction:c?c.direction:null}),r.jsx(ye,{children:` — ${M.sortBy}`})]}):s.header},s.id)})]})}),r.jsx($a,{children:Z.length===0?r.jsx(Pa,{colSpan:Da,children:r.jsx("p",{className:_("text-fg-muted py-10 text-center",Se[l]),children:M.empty})}):Z.map(s=>{const c=a(s),h=(I==null?void 0:I(s))??!1,v=be.has(c);return r.jsxs(ve,{"data-selected":v?"":void 0,className:v?"bg-surface-hover shadow-[inset_3px_0_0_var(--d-ui-color-brand)]":void 0,children:[Y?r.jsx(xe,{children:h?r.jsxs("span",{className:"inline-flex items-center",children:[r.jsx(Za,{}),r.jsx(ye,{children:M.locked})]}):r.jsx(Te,{size:"sm","aria-label":M.selectRow((ne==null?void 0:ne(s))??c),checked:v,onChange:D=>va(c,D.currentTarget.checked)})}):null,e.map(D=>r.jsx(xe,{align:D.align,numeric:D.numeric,children:D.cell?D.cell(s):ca(D.value(s)??"")},D.id))]},c)})})]}),ue!==void 0?ue:q&&le>1?r.jsx("div",{className:"mt-3 flex justify-end",children:r.jsx(_a,{page:R,pageCount:le,onPageChange:Sa,size:"sm",label:n})}):null]})}d.__docgenInfo={description:"Table de données triable, cherchable, sélectionnable et paginable.\n\nLe balisage est celui de `Table` : `DataTable` ne dessine pas son propre\ntableau, il pose un comportement dessus. La frontière est celle qu'annonce\nla doc de `Table` — tri, filtre et sélection de lignes vivent ici. Ce qui\nen découle vient gratuitement : la zone défilable devient atteignable au\nclavier quand elle déborde vraiment (2.1.1), `size` et `stickyHeader`\nsuivent l'échelle du composant, et une seule table de paddings existe.\n\nL'association d'une cellule à son en-tête vient de `scope=\"col\"`, posé par\n`TableHead`, pas d'ARIA. Le tri est un `<button>` dans le `<th>`, et\n`aria-sort` n'est posé que sur la colonne triée — ARIA le veut sur une\nseule à la fois.\n\nChaque état (tri, recherche, page, sélection) accepte une prop contrôlée et\nretombe sinon sur un état interne, comme `Tabs` : une table locale marche\nsans câblage, une table serveur garde la main.\n\nLe composant **ne fabrique pas de fichier**. `toolbar` reçoit les lignes\nvisibles et vous y mettez votre bouton d'export : l'encodage, le séparateur\net le format des dates sont des règles produit, pas des règles de design\nsystem.",methods:[],displayName:"DataTable",props:{columns:{required:!0,tsType:{name:"unknown"},description:""},rows:{required:!0,tsType:{name:"unknown"},description:""},rowId:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: Row) => string",signature:{arguments:[{type:{name:"Row"},name:"row"}],return:{name:"string"}}},description:"Clé stable d'une ligne. Jamais l'index : le tri le déplace."},caption:{required:!0,tsType:{name:"string"},description:`Nom accessible de la table, rendu dans une \`<caption>\`.

Obligatoire : une table sans nom laisse le lecteur d'écran annoncer
« tableau, 8 colonnes » sans dire de quoi.`},hideCaption:{required:!1,tsType:{name:"boolean"},description:"Masque la légende à l'écran. Elle reste lue, et nomme la zone défilable.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Densité des cellules, transmise à `Table`. Défaut : `md`.",defaultValue:{value:"'md'",computed:!1}},sort:{required:!1,tsType:{name:"union",raw:"TableSort | null",elements:[{name:"signature",type:"object",raw:`{
  /** \`id\` de la colonne triée. */
  columnId: string;
  direction: SortDirection;
}`,signature:{properties:[{key:"columnId",value:{name:"string",required:!0},description:"`id` de la colonne triée."},{key:"direction",value:{name:"union",raw:"'ascending' | 'descending'",elements:[{name:"literal",value:"'ascending'"},{name:"literal",value:"'descending'"}],required:!0}}]}},{name:"null"}]},description:"Tri contrôlé. Sans lui, la table gère son propre tri."},defaultSort:{required:!1,tsType:{name:"union",raw:"TableSort | null",elements:[{name:"signature",type:"object",raw:`{
  /** \`id\` de la colonne triée. */
  columnId: string;
  direction: SortDirection;
}`,signature:{properties:[{key:"columnId",value:{name:"string",required:!0},description:"`id` de la colonne triée."},{key:"direction",value:{name:"union",raw:"'ascending' | 'descending'",elements:[{name:"literal",value:"'ascending'"},{name:"literal",value:"'descending'"}],required:!0}}]}},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(sort: TableSort | null) => void",signature:{arguments:[{type:{name:"union",raw:"TableSort | null",elements:[{name:"signature",type:"object",raw:`{
  /** \`id\` de la colonne triée. */
  columnId: string;
  direction: SortDirection;
}`,signature:{properties:[{key:"columnId",value:{name:"string",required:!0},description:"`id` de la colonne triée."},{key:"direction",value:{name:"union",raw:"'ascending' | 'descending'",elements:[{name:"literal",value:"'ascending'"},{name:"literal",value:"'descending'"}],required:!0}}]}},{name:"null"}]},name:"sort"}],return:{name:"void"}}},description:""},search:{required:!1,tsType:{name:"string"},description:"Recherche contrôlée. Sans elle, `toolbar` peut piloter `defaultSearch`."},defaultSearch:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(search: string) => void",signature:{arguments:[{type:{name:"string"},name:"search"}],return:{name:"void"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"Active la colonne de cases à cocher.",defaultValue:{value:"false",computed:!1}},selectedIds:{required:!1,tsType:{name:"unknown"},description:""},defaultSelectedIds:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},onSelectedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"ids"}],return:{name:"void"}}},description:""},rowLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: Row) => string",signature:{arguments:[{type:{name:"Row"},name:"row"}],return:{name:"string"}}},description:"Nom lisible d'une ligne, pour nommer sa case à cocher."},isRowLocked:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: Row) => boolean",signature:{arguments:[{type:{name:"Row"},name:"row"}],return:{name:"boolean"}}},description:"Ligne verrouillée : ni sélectionnable, ni comptée dans « tout cocher »."},pageSize:{required:!1,tsType:{name:"number"},description:"Pagine la table. Omis, toutes les lignes sont rendues."},page:{required:!1,tsType:{name:"number"},description:""},defaultPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},toolbar:{required:!1,tsType:{name:"union",raw:"ReactNode | ((api: DataTableToolbarApi<Row>) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:`Barre au-dessus de la table : recherche, filtres, actions groupées, export.

En fonction, elle reçoit de quoi tout faire sans que le composant s'en
mêle : les lignes **visibles** (filtrées et triées) pour l'export, la
recherche et son setter, les lignes cochées pour une action groupée. Même
forme que le slot \`progress\` de \`FileUpload\`.`},footer:{required:!1,tsType:{name:"ReactNode"},description:"Contenu sous la table, à la place de la pagination automatique."},locale:{required:!1,tsType:{name:"string"},description:"Locale de comparaison pour le tri. Défaut : celle de l'exécution."},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  selectAll: string;
  selectRow: (label: string) => string;
  /** Indice ajouté au nom du bouton de tri. Ne répète pas l'en-tête. */
  sortBy: string;
  locked: string;
  results: (count: number) => string;
  empty: string;
}`,signature:{properties:[{key:"selectAll",value:{name:"string",required:!0}},{key:"selectRow",value:{name:"signature",type:"function",raw:"(label: string) => string",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"string"}},required:!0}},{key:"sortBy",value:{name:"string",required:!0},description:"Indice ajouté au nom du bouton de tri. Ne répète pas l'en-tête."},{key:"locked",value:{name:"string",required:!0}},{key:"results",value:{name:"signature",type:"function",raw:"(count: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"string"}},required:!0}},{key:"empty",value:{name:"string",required:!0}}]}}],raw:"Partial<DataTableLabels>"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const y="import { DataTable } from 'd-ui';",u=[{id:"1",reference:"CMD-1042",client:"Amina Doumbouya",amount:1250,date:"2026-08-02",status:"paid",closed:!0},{id:"2",reference:"CMD-1043",client:"Bruno Kessi",amount:340,date:"2026-08-05",status:"pending"},{id:"3",reference:"CMD-1044",client:"Chloé Adjovi",amount:8900,date:"2026-08-09",status:"late"},{id:"4",reference:"CMD-1045",client:"Élodie Sagbo",amount:76,date:"2026-08-11",status:"draft"},{id:"5",reference:"CMD-1046",client:"Farid Zinsou",amount:2410,date:"2026-08-14",status:"paid"},{id:"6",reference:"CMD-1047",client:"Grace Houngbo",amount:530,date:"2026-08-18",status:"pending"},{id:"7",reference:"CMD-1048",client:"Hervé Noukpo",amount:15300,date:"2026-08-21",status:"late"}],Qa={paid:"success",pending:"warning",late:"danger",draft:"neutral"};function Ie(e,o){return e[o]}function Ya(e,o){return new Intl.NumberFormat(o==="en"?"en-GB":"fr-FR",{style:"currency",currency:"XOF",maximumFractionDigits:0}).format(e)}function f(e){return{selectAll:e.selectAll,selectRow:e.selectRow,sortBy:e.sortBy,locked:e.locked,results:e.results,empty:e.empty}}function g(e,o){return[{id:"reference",header:e.reference,value:a=>a.reference},{id:"client",header:e.client,value:a=>a.client},{id:"amount",header:e.amount,numeric:!0,value:a=>a.amount,cell:a=>Ya(a.amount,o)},{id:"date",header:e.date,value:a=>new Date(a.date),cell:a=>a.date},{id:"status",header:e.status,value:a=>Ie(e,a.status),cell:a=>r.jsx(ja,{variant:Qa[a.status],children:Ie(e,a.status)})}]}const en={title:"Components/DataTable",component:d,args:{columns:[],rows:[],rowId:e=>e.id,caption:"Commandes"},argTypes:Ia,parameters:{controls:{include:["selectable","pageSize","hideCaption","size"]}}},A={name:"Tailles",parameters:w(y,`<>
    <DataTable size="sm" caption="Commandes" columns={columns} rows={orders} rowId={(row) => row.id} />
    <DataTable size="lg" caption="Commandes" columns={columns} rows={orders} rowId={(row) => row.id} />
</>`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx("div",{className:"flex flex-col gap-8",children:["sm","md","lg"].map(t=>r.jsx(d,{size:t,columns:g(n,a),rows:u.slice(0,3),rowId:l=>l.id,caption:`${n.caption} (${t})`,labels:f(n)},t))})}},z={name:"Par défaut",parameters:w(y,`<DataTable
    caption="Commandes du trimestre"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
/>`,`const columns = [
    { id: 'reference', header: 'Référence', value: (row) => row.reference },
    { id: 'amount', header: 'Montant', numeric: true, value: (row) => row.amount },
];`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx(d,{...e,columns:g(n,a),rows:u,rowId:t=>t.id,caption:n.caption,labels:f(n)})}},B={name:"Recherche",parameters:w(y,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    toolbar={({ search, setSearch }) => (
        <TextInput
            type="search"
            label="Rechercher une commande"
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
        />
    )}
/>`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx(d,{columns:g(n,a),rows:u,rowId:t=>t.id,caption:n.caption,labels:f(n),toolbar:({search:t,setSearch:l})=>r.jsx(Ea,{type:"search",label:n.search,placeholder:n.searchPlaceholder,value:t,fullWidth:!1,onChange:i=>l(i.currentTarget.value)})})}},O={name:"Filtres",parameters:w(y,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={onlyLate ? orders.filter((o) => o.status === 'late') : orders}
    rowId={(row) => row.id}
    toolbar={<Button onClick={() => setOnlyLate(!onlyLate)}>En retard seulement</Button>}
/>`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx(an,{copy:n,locale:a})}};function an({copy:e,locale:o}){const[a,n]=m.useState(!1),t=a?u.filter(l=>l.status==="late"):u;return r.jsx(d,{columns:g(e,o),rows:t,rowId:l=>l.id,caption:e.caption,labels:f(e),toolbar:r.jsxs("div",{className:"flex gap-2",children:[r.jsx(ie,{variant:"secondary",size:"sm",isSelected:!a,onClick:()=>n(!1),children:e.all}),r.jsx(ie,{variant:"secondary",size:"sm",isSelected:a,onClick:()=>n(!0),children:e.onlyLate})]})})}const $={name:"Tri",parameters:w(y,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    defaultSort={{ columnId: 'amount', direction: 'descending' }}
/>`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx(d,{columns:g(n,a),rows:u,rowId:t=>t.id,caption:n.caption,labels:f(n),defaultSort:{columnId:"amount",direction:"descending"},locale:a==="en"?"en":"fr"})}},P={name:"Colonne non triable",parameters:w(y,`const columns = [
    ...,
    { id: 'actions', header: 'Actions', value: () => null, sortable: false },
];`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx(d,{columns:[...g(n,a),{id:"actions",header:n.actions,value:()=>null,sortable:!1,align:"end",cell:t=>r.jsxs(Ra,{label:n.rowActions,trigger:r.jsx(Ca,{variant:"ghost",size:"sm","aria-label":`${n.rowActions} — ${t.reference}`,icon:r.jsxs("svg",{viewBox:"0 0 16 16",className:"size-4","aria-hidden":"true",children:[r.jsx("circle",{cx:"8",cy:"3",r:"1.4",fill:"currentColor"}),r.jsx("circle",{cx:"8",cy:"8",r:"1.4",fill:"currentColor"}),r.jsx("circle",{cx:"8",cy:"13",r:"1.4",fill:"currentColor"})]})}),children:[r.jsx(ce,{children:n.edit}),r.jsx(ce,{children:n.duplicate}),r.jsx(La,{}),r.jsx(ce,{children:n.archive})]})}],rows:u.slice(0,4),rowId:t=>t.id,caption:n.caption,labels:f(n)})}},V={name:"Sélection de lignes",parameters:w(y,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    rowLabel={(row) => row.reference}
/>`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx(d,{columns:g(n,a),rows:u.slice(0,5),rowId:t=>t.id,caption:n.caption,labels:f(n),selectable:!0,rowLabel:t=>`${t.reference} — ${t.client}`,defaultSelectedIds:["2"]})}},F={name:"Lignes verrouillées",parameters:w(y,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    isRowLocked={(row) => row.closed === true}
/>`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx(d,{columns:g(n,a),rows:u.slice(0,5),rowId:t=>t.id,caption:n.caption,labels:f(n),selectable:!0,rowLabel:t=>`${t.reference} — ${t.client}`,isRowLocked:t=>t.closed===!0})}},H={name:"Export",parameters:w(y,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    toolbar={({ rows, selectedIds }) => (
        // La table donne les lignes visibles ; le fichier est à vous.
        <Button onClick={() => downloadCsv(rows, selectedIds)}>Exporter</Button>
    )}
/>`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx(nn,{copy:n,locale:a})}};function nn({copy:e,locale:o}){const[a,n]=m.useState("");return r.jsx(d,{columns:g(e,o),rows:u.slice(0,5),rowId:t=>t.id,caption:e.caption,labels:f(e),selectable:!0,rowLabel:t=>t.reference,toolbar:({rows:t,selectedIds:l})=>r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(ie,{variant:"secondary",size:"sm",onClick:()=>n(e.exported(l.length>0?l.length:t.length)),children:e.export}),r.jsx("p",{className:"text-fg-muted m-0 text-sm",children:a})]})})}const W={name:"Pagination",parameters:w(y,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    pageSize={3}
/>`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx(d,{columns:g(n,a),rows:u,rowId:t=>t.id,caption:n.caption,labels:f(n),pageSize:3})}},G={name:"Avec onglets",parameters:w("import { DataTable, Tab, TabList, TabPanel, Tabs } from 'd-ui';",`<Tabs defaultValue="all">
    <TabList>
        <Tab value="all">Toutes</Tab>
        <Tab value="late">En retard</Tab>
    </TabList>
    <TabPanel value="all"><DataTable rows={orders} … /></TabPanel>
    <TabPanel value="late"><DataTable rows={late} … /></TabPanel>
</Tabs>`),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a),t=[{value:"all",label:n.tabAll,rows:u},{value:"late",label:n.tabLate,rows:u.filter(l=>l.status==="late")},{value:"paid",label:n.tabPaid,rows:u.filter(l=>l.status==="paid")}];return r.jsxs(ka,{defaultValue:"all",label:n.caption,children:[r.jsx(qa,{children:t.map(l=>r.jsx(Ma,{value:l.value,children:l.label},l.value))}),t.map(l=>r.jsx(Na,{value:l.value,children:r.jsx(d,{className:"mt-4",columns:g(n,a),rows:l.rows,rowId:i=>i.id,caption:`${n.caption} — ${l.label}`,hideCaption:!0,labels:f(n)})},l.value))]})}},U={name:"État vide",parameters:w(y,'<DataTable caption="Commandes" columns={columns} rows={[]} rowId={(row) => row.id} />'),render:(e,{globals:o})=>{const a=p(o.locale),n=b(a);return r.jsx(d,{columns:g(n,a),rows:[],rowId:t=>t.id,caption:n.caption,labels:f(n)})}};var je,Ce,Re;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importTable, \`<>
    <DataTable size="sm" caption="Commandes" columns={columns} rows={orders} rowId={(row) => row.id} />
    <DataTable size="lg" caption="Commandes" columns={columns} rows={orders} rowId={(row) => row.id} />
</>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <div className="flex flex-col gap-8">
        {(['sm', 'md', 'lg'] as const).map(size => <DataTable key={size} size={size} columns={columns(copy, locale)} rows={ORDERS.slice(0, 3)} rowId={row => row.id} caption={\`\${copy.caption} (\${size})\`} labels={labels(copy)} />)}
      </div>;
  }
}`,...(Re=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var Le,ke,qe;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importTable, \`<DataTable
    caption="Commandes du trimestre"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
/>\`, \`const columns = [
    { id: 'reference', header: 'Référence', value: (row) => row.reference },
    { id: 'amount', header: 'Montant', numeric: true, value: (row) => row.amount },
];\`),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <DataTable {...args} columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} />;
  }
}`,...(qe=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var Me,Ne,Ee;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Recherche',
  parameters: componentSource(importTable, \`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    toolbar={({ search, setSearch }) => (
        <TextInput
            type="search"
            label="Rechercher une commande"
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
        />
    )}
/>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} toolbar={({
      search,
      setSearch
    }) => <TextInput type="search" label={copy.search} placeholder={copy.searchPlaceholder} value={search} fullWidth={false} onChange={event => setSearch(event.currentTarget.value)} />} />;
  }
}`,...(Ee=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var _e,Ae,ze;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Filtres',
  parameters: componentSource(importTable, \`<DataTable
    caption="Commandes"
    columns={columns}
    rows={onlyLate ? orders.filter((o) => o.status === 'late') : orders}
    rowId={(row) => row.id}
    toolbar={<Button onClick={() => setOnlyLate(!onlyLate)}>En retard seulement</Button>}
/>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <FilterDemo copy={copy} locale={locale} />;
  }
}`,...(ze=(Ae=O.parameters)==null?void 0:Ae.docs)==null?void 0:ze.source}}};var Be,Oe,$e;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Tri',
  parameters: componentSource(importTable, \`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    defaultSort={{ columnId: 'amount', direction: 'descending' }}
/>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} defaultSort={{
      columnId: 'amount',
      direction: 'descending'
    }} locale={locale === 'en' ? 'en' : 'fr'} />;
  }
}`,...($e=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source}}};var Pe,Ve,Fe;P.parameters={...P.parameters,docs:{...(Pe=P.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Colonne non triable',
  parameters: componentSource(importTable, \`const columns = [
    ...,
    { id: 'actions', header: 'Actions', value: () => null, sortable: false },
];\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <DataTable columns={[...columns(copy, locale), {
      id: 'actions',
      header: copy.actions,
      // Rien à trier : l'en-tête reste un \`th\`, sans bouton ni aria-sort.
      value: () => null,
      sortable: false,
      align: 'end',
      cell: row => <Menu label={copy.rowActions} trigger={<IconButton variant="ghost" size="sm" aria-label={\`\${copy.rowActions} — \${row.reference}\`} icon={<svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                        <circle cx="8" cy="3" r="1.4" fill="currentColor" />
                        <circle cx="8" cy="8" r="1.4" fill="currentColor" />
                        <circle cx="8" cy="13" r="1.4" fill="currentColor" />
                      </svg>} />}>
                <MenuItem>{copy.edit}</MenuItem>
                <MenuItem>{copy.duplicate}</MenuItem>
                <MenuSeparator />
                <MenuItem>{copy.archive}</MenuItem>
              </Menu>
    }]} rows={ORDERS.slice(0, 4)} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} />;
  }
}`,...(Fe=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.source}}};var He,We,Ge;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'Sélection de lignes',
  parameters: componentSource(importTable, \`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    rowLabel={(row) => row.reference}
/>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={ORDERS.slice(0, 5)} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} selectable rowLabel={row => \`\${row.reference} — \${row.client}\`} defaultSelectedIds={['2']} />;
  }
}`,...(Ge=(We=V.parameters)==null?void 0:We.docs)==null?void 0:Ge.source}}};var Ue,Je,Ke;F.parameters={...F.parameters,docs:{...(Ue=F.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'Lignes verrouillées',
  parameters: componentSource(importTable, \`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    isRowLocked={(row) => row.closed === true}
/>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={ORDERS.slice(0, 5)} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} selectable rowLabel={row => \`\${row.reference} — \${row.client}\`} isRowLocked={row => row.closed === true} />;
  }
}`,...(Ke=(Je=F.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Xe,Ze,Qe;H.parameters={...H.parameters,docs:{...(Xe=H.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: 'Export',
  parameters: componentSource(importTable, \`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    toolbar={({ rows, selectedIds }) => (
        // La table donne les lignes visibles ; le fichier est à vous.
        <Button onClick={() => downloadCsv(rows, selectedIds)}>Exporter</Button>
    )}
/>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <ExportDemo copy={copy} locale={locale} />;
  }
}`,...(Qe=(Ze=H.parameters)==null?void 0:Ze.docs)==null?void 0:Qe.source}}};var Ye,ea,aa;W.parameters={...W.parameters,docs:{...(Ye=W.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Pagination',
  parameters: componentSource(importTable, \`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    pageSize={3}
/>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} pageSize={3} />;
  }
}`,...(aa=(ea=W.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var na,ra,oa;G.parameters={...G.parameters,docs:{...(na=G.parameters)==null?void 0:na.docs,source:{originalSource:`{
  name: 'Avec onglets',
  parameters: componentSource("import { DataTable, Tab, TabList, TabPanel, Tabs } from 'd-ui';", \`<Tabs defaultValue="all">
    <TabList>
        <Tab value="all">Toutes</Tab>
        <Tab value="late">En retard</Tab>
    </TabList>
    <TabPanel value="all"><DataTable rows={orders} … /></TabPanel>
    <TabPanel value="late"><DataTable rows={late} … /></TabPanel>
</Tabs>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    const groups = [{
      value: 'all',
      label: copy.tabAll,
      rows: ORDERS
    }, {
      value: 'late',
      label: copy.tabLate,
      rows: ORDERS.filter(o => o.status === 'late')
    }, {
      value: 'paid',
      label: copy.tabPaid,
      rows: ORDERS.filter(o => o.status === 'paid')
    }];
    return <Tabs defaultValue="all" label={copy.caption}>
        <TabList>
          {groups.map(group => <Tab key={group.value} value={group.value}>
              {group.label}
            </Tab>)}
        </TabList>
        {groups.map(group => <TabPanel key={group.value} value={group.value}>
            <DataTable className="mt-4" columns={columns(copy, locale)} rows={group.rows} rowId={row => row.id} caption={\`\${copy.caption} — \${group.label}\`} hideCaption labels={labels(copy)} />
          </TabPanel>)}
      </Tabs>;
  }
}`,...(oa=(ra=G.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var ta,sa,la;U.parameters={...U.parameters,docs:{...(ta=U.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  name: 'État vide',
  parameters: componentSource(importTable, \`<DataTable caption="Commandes" columns={columns} rows={[]} rowId={(row) => row.id} />\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = dataTableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={[]} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} />;
  }
}`,...(la=(sa=U.parameters)==null?void 0:sa.docs)==null?void 0:la.source}}};const rn=["Sizes","Default","Search","Filtering","Sorting","NonSortable","SelectingRows","LockedRows","Export","TablePagination","WithTabs","EmptyResults"],yn=Object.freeze(Object.defineProperty({__proto__:null,Default:z,EmptyResults:U,Export:H,Filtering:O,LockedRows:F,NonSortable:P,Search:B,SelectingRows:V,Sizes:A,Sorting:$,TablePagination:W,WithTabs:G,__namedExportsOrder:rn,default:en},Symbol.toStringTag,{value:"Module"}));export{yn as D,H as E,O as F,F as L,P as N,$ as S,W as T,G as W,z as a,B as b,V as c,U as d};
