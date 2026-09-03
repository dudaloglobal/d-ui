import{r as m,j as r,h as L,d as p,w as b}from"./iframe-CfESPI1b.js";import{G as gn}from"./arg-types-B3Y5nyvA.js";import{c as f}from"./docs-source-C_O40UCi.js";import{B as yn}from"./Badge--fbIunmU.js";import{B as le}from"./Button-CqjvCqG5.js";import{I as hn}from"./IconButton-CBq3bAnF.js";import{M as vn,a as se,b as Tn}from"./Menu-B_vwkDuM.js";import{T as xn,a as Sn,b as jn,c as In}from"./Tabs-Cd7g7yqO.js";import{T as Dn}from"./TextInput-6NzmcRHZ.js";import{V as we}from"./VisuallyHidden-BTua8iSE.js";import{C as ge}from"./Checkbox-WY-khn7n.js";import{P as Cn}from"./Pagination-BvgZu0ab.js";function Rn(e){return e==null}function U(e){return Rn(e)?1:0}function Ln(e,t,n){const a=U(e)-U(t);return a!==0?a:U(e)===1?0:e instanceof Date&&t instanceof Date?e.getTime()-t.getTime():typeof e=="number"&&typeof t=="number"?e-t:typeof e=="boolean"&&typeof t=="boolean"?Number(e)-Number(t):String(e).localeCompare(String(t),n,{numeric:!0,sensitivity:"base"})}function kn(e,t,n,a){if(!t)return[...e];const o=t.direction==="descending"?-1:1;return e.map((l,d)=>({row:l,index:d})).sort((l,d)=>{const y=n(l.row,t.columnId),k=n(d.row,t.columnId),J=U(y)-U(k);if(J!==0)return J;const q=Ln(y,k,a);return q!==0?q*o:l.index-d.index}).map(l=>l.row)}function qn(e,t,n,a){const o=ye(t);return o?e.filter(l=>n.some(d=>{const y=a(l,d);return y==null?!1:ye(Ye(y)).includes(o)})):[...e]}function Ye(e){return e instanceof Date?e.toISOString().slice(0,10):String(e)}function ye(e){return e.trim().toLowerCase().normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"")}function Nn(e,t){return!e||e.columnId!==t?{columnId:t,direction:"ascending"}:e.direction==="ascending"?{columnId:t,direction:"descending"}:null}function Mn(e,t,n){if(n<=0)return[...e];const a=Math.max(0,(t-1)*n);return e.slice(a,a+n)}function En(e,t){return t<=0?1:Math.max(1,Math.ceil(e/t))}const An={selectAll:"Select all rows",selectRow:e=>`Select ${e}`,sortBy:"Sort this column",locked:"Locked row",results:e=>`${e} results`,empty:"No results"};function _n({direction:e}){return r.jsxs("svg",{viewBox:"0 0 12 16",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:L("size-3 shrink-0",e?"text-brand":"text-fg-muted"),"aria-hidden":"true",focusable:"false",children:[e!=="descending"?r.jsx("path",{d:"M3 7l3-3 3 3"}):null,e!=="ascending"?r.jsx("path",{d:"M3 9l3 3 3-3"}):null]})}function Bn(){return r.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"text-fg-muted size-4","aria-hidden":"true",focusable:"false",children:[r.jsx("rect",{x:"3.25",y:"7",width:"9.5",height:"6.5",rx:"1.5"}),r.jsx("path",{d:"M5.75 7V5a2.25 2.25 0 0 1 4.5 0v2"})]})}function u({columns:e,rows:t,rowId:n,caption:a,hideCaption:o=!1,sort:l,defaultSort:d=null,onSortChange:y,search:k,defaultSearch:J="",onSearchChange:q,selectable:Z=!1,selectedIds:Q,defaultSelectedIds:en=[],onSelectedIdsChange:Y,rowLabel:ee,isRowLocked:j,pageSize:N,page:x,defaultPage:nn=1,onPageChange:h,toolbar:K,footer:ce,locale:ie,labels:an,className:rn}){const M={...An,...an},[tn,on]=m.useState(d),[sn,ln]=m.useState(J),[cn,un]=m.useState(en),[ne,ae]=m.useState(nn),I=l!==void 0?l:tn,re=k!==void 0?k:sn,D=Q!==void 0?Q:cn,ue=x!==void 0?x:ne,te=m.useMemo(()=>{const s=new Map(e.map(c=>[c.id,c]));return(c,T)=>{var S;return((S=s.get(T))==null?void 0:S.value(c))??null}},[e]),de=m.useMemo(()=>e.map(s=>s.id),[e]),E=m.useMemo(()=>{const s=qn(t,re,de,te);return kn(s,I,te,ie)},[t,re,de,te,I,ie]),oe=N?En(E.length,N):1,C=Math.min(Math.max(ue,1),oe),X=N?Mn(E,C,N):E,A=m.useMemo(()=>X.filter(s=>!(j!=null&&j(s))),[X,j]),me=m.useMemo(()=>new Set(D),[D]),pe=A.filter(s=>me.has(n(s))).length,be=A.length>0&&pe===A.length;function dn(s){const c=Nn(I,s);l===void 0&&on(c),y==null||y(c)}function fe(s){Q===void 0&&un(s),Y==null||Y(s)}function mn(s,c){const T=c?[...D,s]:D.filter(S=>S!==s);fe(T)}function pn(s){const c=new Set(A.map(n));fe(s?[...new Set([...D,...c])]:D.filter(T=>!c.has(T)))}function bn(s){k===void 0&&ln(s),q==null||q(s),N&&ue!==1&&(x===void 0&&ae(1),h==null||h(1))}function fn(s){x===void 0&&ae(s),h==null||h(s)}m.useEffect(()=>{x!==void 0&&x!==C&&(h==null||h(C)),x===void 0&&ne!==C&&ae(C)},[x,C,ne,h]);const wn=e.length+(Z?1:0);return r.jsxs("div",{className:L("font-sans",rn),children:[K!==void 0?r.jsx("div",{className:"mb-3",children:typeof K=="function"?K({rows:E,search:re,setSearch:bn,selectedIds:D}):K}):null,r.jsx("p",{role:"status",className:"d-ui-visually-hidden",children:M.results(E.length)}),r.jsx("div",{className:"border-border-subtle overflow-x-auto rounded-md border",children:r.jsxs("table",{className:"w-full border-collapse text-sm",children:[r.jsx("caption",{className:L(o?"d-ui-visually-hidden":"text-fg-muted px-4 py-3 text-start"),children:a}),r.jsx("thead",{children:r.jsxs("tr",{className:"border-border-subtle border-b",children:[Z?r.jsx("th",{scope:"col",className:"w-10 px-4 py-2",children:r.jsx(ge,{size:"sm","aria-label":M.selectAll,checked:be,indeterminate:pe>0&&!be,disabled:A.length===0,onChange:s=>pn(s.currentTarget.checked)})}):null,e.map(s=>{const c=(I==null?void 0:I.columnId)===s.id?I:null,T=s.sortable!==!1;return r.jsx("th",{scope:"col","aria-sort":c?c.direction:void 0,className:L("text-fg px-4 py-2 font-medium",s.align==="end"?"text-end":"text-start"),children:T?r.jsxs("button",{type:"button",onClick:()=>dn(s.id),className:L("inline-flex items-center gap-1.5 rounded-sm","focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",s.align==="end"?"flex-row-reverse":null),children:[s.header,r.jsx(_n,{direction:c?c.direction:null}),r.jsx(we,{children:` — ${M.sortBy}`})]}):s.header},s.id)})]})}),r.jsx("tbody",{children:X.length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:wn,className:"text-fg-muted px-4 py-10 text-center",children:M.empty})}):X.map(s=>{const c=n(s),T=(j==null?void 0:j(s))??!1,S=me.has(c);return r.jsxs("tr",{"data-selected":S?"":void 0,className:L("border-border-subtle border-b last:border-b-0",S?"bg-surface-muted":null),children:[Z?r.jsx("td",{className:"px-4 py-2",children:T?r.jsxs("span",{className:"inline-flex items-center",children:[r.jsx(Bn,{}),r.jsx(we,{children:M.locked})]}):r.jsx(ge,{size:"sm","aria-label":M.selectRow((ee==null?void 0:ee(s))??c),checked:S,onChange:R=>mn(c,R.currentTarget.checked)})}):null,e.map(R=>r.jsx("td",{className:L("text-fg px-4 py-2",R.align==="end"?"text-end tabular-nums":"text-start"),children:R.cell?R.cell(s):Ye(R.value(s)??"")},R.id))]},c)})})]})}),ce!==void 0?ce:N&&oe>1?r.jsx("div",{className:"mt-3 flex justify-end",children:r.jsx(Cn,{page:C,pageCount:oe,onPageChange:fn,size:"sm",label:a})}):null]})}u.__docgenInfo={description:`Table de données triable, cherchable, sélectionnable et paginable.

Rend une vraie \`<table>\` : l'association d'une cellule à son en-tête vient
de \`scope="col"\`, pas d'ARIA. Le tri est un \`<button>\` dans le \`<th>\`, et
\`aria-sort\` n'est posé que sur la colonne triée — ARIA le veut sur une
seule à la fois.

Chaque état (tri, recherche, page, sélection) accepte une prop contrôlée et
retombe sinon sur un état interne, comme \`Tabs\` : une table locale marche
sans câblage, une table serveur garde la main.

Le composant **ne fabrique pas de fichier**. \`toolbar\` reçoit les lignes
visibles et vous y mettez votre bouton d'export : l'encodage, le séparateur
et le format des dates sont des règles produit, pas des règles de design
system.`,methods:[],displayName:"DataTable",props:{columns:{required:!0,tsType:{name:"unknown"},description:""},rows:{required:!0,tsType:{name:"unknown"},description:""},rowId:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: Row) => string",signature:{arguments:[{type:{name:"Row"},name:"row"}],return:{name:"string"}}},description:"Clé stable d'une ligne. Jamais l'index : le tri le déplace."},caption:{required:!0,tsType:{name:"string"},description:`Nom accessible de la table, rendu dans une \`<caption>\`.

Obligatoire : une table sans nom laisse le lecteur d'écran annoncer
« tableau, 8 colonnes » sans dire de quoi.`},hideCaption:{required:!1,tsType:{name:"boolean"},description:"Masque la légende à l'écran. Elle reste lue.",defaultValue:{value:"false",computed:!1}},sort:{required:!1,tsType:{name:"union",raw:"TableSort | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"selectAll",value:{name:"string",required:!0}},{key:"selectRow",value:{name:"signature",type:"function",raw:"(label: string) => string",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"string"}},required:!0}},{key:"sortBy",value:{name:"string",required:!0},description:"Indice ajouté au nom du bouton de tri. Ne répète pas l'en-tête."},{key:"locked",value:{name:"string",required:!0}},{key:"results",value:{name:"signature",type:"function",raw:"(count: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"string"}},required:!0}},{key:"empty",value:{name:"string",required:!0}}]}}],raw:"Partial<DataTableLabels>"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const v="import { DataTable } from 'd-ui';",i=[{id:"1",reference:"CMD-1042",client:"Amina Doumbouya",amount:1250,date:"2026-08-02",status:"paid",closed:!0},{id:"2",reference:"CMD-1043",client:"Bruno Kessi",amount:340,date:"2026-08-05",status:"pending"},{id:"3",reference:"CMD-1044",client:"Chloé Adjovi",amount:8900,date:"2026-08-09",status:"late"},{id:"4",reference:"CMD-1045",client:"Élodie Sagbo",amount:76,date:"2026-08-11",status:"draft"},{id:"5",reference:"CMD-1046",client:"Farid Zinsou",amount:2410,date:"2026-08-14",status:"paid"},{id:"6",reference:"CMD-1047",client:"Grace Houngbo",amount:530,date:"2026-08-18",status:"pending"},{id:"7",reference:"CMD-1048",client:"Hervé Noukpo",amount:15300,date:"2026-08-21",status:"late"}],Pn={paid:"success",pending:"warning",late:"danger",draft:"neutral"};function he(e,t){return e[t]}function On(e,t){return new Intl.NumberFormat(t==="en"?"en-GB":"fr-FR",{style:"currency",currency:"XOF",maximumFractionDigits:0}).format(e)}function w(e){return{selectAll:e.selectAll,selectRow:e.selectRow,sortBy:e.sortBy,locked:e.locked,results:e.results,empty:e.empty}}function g(e,t){return[{id:"reference",header:e.reference,value:n=>n.reference},{id:"client",header:e.client,value:n=>n.client},{id:"amount",header:e.amount,align:"end",value:n=>n.amount,cell:n=>On(n.amount,t)},{id:"date",header:e.date,value:n=>new Date(n.date),cell:n=>n.date},{id:"status",header:e.status,value:n=>he(e,n.status),cell:n=>r.jsx(yn,{variant:Pn[n.status],children:he(e,n.status)})}]}const $n={title:"Components/DataTable",component:u,args:{columns:[],rows:[],rowId:e=>e.id,caption:"Commandes"},argTypes:gn,parameters:{controls:{include:["selectable","pageSize","hideCaption"]}}},_={name:"Par défaut",parameters:f(v,`<DataTable
    caption="Commandes du trimestre"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
/>`,`const columns = [
    { id: 'reference', header: 'Référence', value: (row) => row.reference },
    { id: 'amount', header: 'Montant', align: 'end', value: (row) => row.amount },
];`),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n);return r.jsx(u,{...e,columns:g(a,n),rows:i,rowId:o=>o.id,caption:a.caption,labels:w(a)})}},B={name:"Recherche",parameters:f(v,`<DataTable
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
/>`),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n);return r.jsx(u,{columns:g(a,n),rows:i,rowId:o=>o.id,caption:a.caption,labels:w(a),toolbar:({search:o,setSearch:l})=>r.jsx(Dn,{type:"search",label:a.search,placeholder:a.searchPlaceholder,value:o,fullWidth:!1,onChange:d=>l(d.currentTarget.value)})})}},P={name:"Filtres",parameters:f(v,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={onlyLate ? orders.filter((o) => o.status === 'late') : orders}
    rowId={(row) => row.id}
    toolbar={<Button onClick={() => setOnlyLate(!onlyLate)}>En retard seulement</Button>}
/>`),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n);return r.jsx(Vn,{copy:a,locale:n})}};function Vn({copy:e,locale:t}){const[n,a]=m.useState(!1),o=n?i.filter(l=>l.status==="late"):i;return r.jsx(u,{columns:g(e,t),rows:o,rowId:l=>l.id,caption:e.caption,labels:w(e),toolbar:r.jsxs("div",{className:"flex gap-2",children:[r.jsx(le,{variant:"secondary",size:"sm",isSelected:!n,onClick:()=>a(!1),children:e.all}),r.jsx(le,{variant:"secondary",size:"sm",isSelected:n,onClick:()=>a(!0),children:e.onlyLate})]})})}const O={name:"Tri",parameters:f(v,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    defaultSort={{ columnId: 'amount', direction: 'descending' }}
/>`),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n);return r.jsx(u,{columns:g(a,n),rows:i,rowId:o=>o.id,caption:a.caption,labels:w(a),defaultSort:{columnId:"amount",direction:"descending"},locale:n==="en"?"en":"fr"})}},$={name:"Colonne non triable",parameters:f(v,`const columns = [
    ...,
    { id: 'actions', header: 'Actions', value: () => null, sortable: false },
];`),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n);return r.jsx(u,{columns:[...g(a,n),{id:"actions",header:a.actions,value:()=>null,sortable:!1,align:"end",cell:o=>r.jsxs(vn,{label:a.rowActions,trigger:r.jsx(hn,{variant:"ghost",size:"sm","aria-label":`${a.rowActions} — ${o.reference}`,icon:r.jsxs("svg",{viewBox:"0 0 16 16",className:"size-4","aria-hidden":"true",children:[r.jsx("circle",{cx:"8",cy:"3",r:"1.4",fill:"currentColor"}),r.jsx("circle",{cx:"8",cy:"8",r:"1.4",fill:"currentColor"}),r.jsx("circle",{cx:"8",cy:"13",r:"1.4",fill:"currentColor"})]})}),children:[r.jsx(se,{children:a.edit}),r.jsx(se,{children:a.duplicate}),r.jsx(Tn,{}),r.jsx(se,{children:a.archive})]})}],rows:i.slice(0,4),rowId:o=>o.id,caption:a.caption,labels:w(a)})}},V={name:"Sélection de lignes",parameters:f(v,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    rowLabel={(row) => row.reference}
/>`),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n);return r.jsx(u,{columns:g(a,n),rows:i.slice(0,5),rowId:o=>o.id,caption:a.caption,labels:w(a),selectable:!0,rowLabel:o=>`${o.reference} — ${o.client}`,defaultSelectedIds:["2"]})}},F={name:"Lignes verrouillées",parameters:f(v,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    isRowLocked={(row) => row.closed === true}
/>`),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n);return r.jsx(u,{columns:g(a,n),rows:i.slice(0,5),rowId:o=>o.id,caption:a.caption,labels:w(a),selectable:!0,rowLabel:o=>`${o.reference} — ${o.client}`,isRowLocked:o=>o.closed===!0})}},z={name:"Export",parameters:f(v,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    toolbar={({ rows, selectedIds }) => (
        // La table donne les lignes visibles ; le fichier est à vous.
        <Button onClick={() => downloadCsv(rows, selectedIds)}>Exporter</Button>
    )}
/>`),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n);return r.jsx(Fn,{copy:a,locale:n})}};function Fn({copy:e,locale:t}){const[n,a]=m.useState("");return r.jsx(u,{columns:g(e,t),rows:i.slice(0,5),rowId:o=>o.id,caption:e.caption,labels:w(e),selectable:!0,rowLabel:o=>o.reference,toolbar:({rows:o,selectedIds:l})=>r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(le,{variant:"secondary",size:"sm",onClick:()=>a(e.exported(l.length>0?l.length:o.length)),children:e.export}),r.jsx("p",{className:"text-fg-muted m-0 text-sm",children:n})]})})}const W={name:"Pagination",parameters:f(v,`<DataTable
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    pageSize={3}
/>`),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n);return r.jsx(u,{columns:g(a,n),rows:i,rowId:o=>o.id,caption:a.caption,labels:w(a),pageSize:3})}},G={name:"Avec onglets",parameters:f("import { DataTable, Tab, TabList, TabPanel, Tabs } from 'd-ui';",`<Tabs defaultValue="all">
    <TabList>
        <Tab value="all">Toutes</Tab>
        <Tab value="late">En retard</Tab>
    </TabList>
    <TabPanel value="all"><DataTable rows={orders} … /></TabPanel>
    <TabPanel value="late"><DataTable rows={late} … /></TabPanel>
</Tabs>`),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n),o=[{value:"all",label:a.tabAll,rows:i},{value:"late",label:a.tabLate,rows:i.filter(l=>l.status==="late")},{value:"paid",label:a.tabPaid,rows:i.filter(l=>l.status==="paid")}];return r.jsxs(xn,{defaultValue:"all",label:a.caption,children:[r.jsx(Sn,{children:o.map(l=>r.jsx(jn,{value:l.value,children:l.label},l.value))}),o.map(l=>r.jsx(In,{value:l.value,children:r.jsx(u,{className:"mt-4",columns:g(a,n),rows:l.rows,rowId:d=>d.id,caption:`${a.caption} — ${l.label}`,hideCaption:!0,labels:w(a)})},l.value))]})}},H={name:"État vide",parameters:f(v,'<DataTable caption="Commandes" columns={columns} rows={[]} rowId={(row) => row.id} />'),render:(e,{globals:t})=>{const n=p(t.locale),a=b(n);return r.jsx(u,{columns:g(a,n),rows:[],rowId:o=>o.id,caption:a.caption,labels:w(a)})}};var ve,Te,xe;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importTable, \`<DataTable
    caption="Commandes du trimestre"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
/>\`, \`const columns = [
    { id: 'reference', header: 'Référence', value: (row) => row.reference },
    { id: 'amount', header: 'Montant', align: 'end', value: (row) => row.amount },
];\`),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = tableCopy(locale);
    return <DataTable {...args} columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} />;
  }
}`,...(xe=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Se,je,Ie;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
    const copy = tableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} toolbar={({
      search,
      setSearch
    }) => <TextInput type="search" label={copy.search} placeholder={copy.searchPlaceholder} value={search} fullWidth={false} onChange={event => setSearch(event.currentTarget.value)} />} />;
  }
}`,...(Ie=(je=B.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var De,Ce,Re;P.parameters={...P.parameters,docs:{...(De=P.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
    const copy = tableCopy(locale);
    return <FilterDemo copy={copy} locale={locale} />;
  }
}`,...(Re=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var Le,ke,qe;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
    const copy = tableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} defaultSort={{
      columnId: 'amount',
      direction: 'descending'
    }} locale={locale === 'en' ? 'en' : 'fr'} />;
  }
}`,...(qe=(ke=O.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var Ne,Me,Ee;$.parameters={...$.parameters,docs:{...(Ne=$.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Colonne non triable',
  parameters: componentSource(importTable, \`const columns = [
    ...,
    { id: 'actions', header: 'Actions', value: () => null, sortable: false },
];\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = tableCopy(locale);
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
}`,...(Ee=(Me=$.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};var Ae,_e,Be;V.parameters={...V.parameters,docs:{...(Ae=V.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
    const copy = tableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={ORDERS.slice(0, 5)} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} selectable rowLabel={row => \`\${row.reference} — \${row.client}\`} defaultSelectedIds={['2']} />;
  }
}`,...(Be=(_e=V.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};var Pe,Oe,$e;F.parameters={...F.parameters,docs:{...(Pe=F.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
    const copy = tableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={ORDERS.slice(0, 5)} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} selectable rowLabel={row => \`\${row.reference} — \${row.client}\`} isRowLocked={row => row.closed === true} />;
  }
}`,...($e=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source}}};var Ve,Fe,ze;z.parameters={...z.parameters,docs:{...(Ve=z.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
    const copy = tableCopy(locale);
    return <ExportDemo copy={copy} locale={locale} />;
  }
}`,...(ze=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}};var We,Ge,He;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
    const copy = tableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} pageSize={3} />;
  }
}`,...(He=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Ue,Je,Ke;G.parameters={...G.parameters,docs:{...(Ue=G.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
    const copy = tableCopy(locale);
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
}`,...(Ke=(Je=G.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Xe,Ze,Qe;H.parameters={...H.parameters,docs:{...(Xe=H.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: 'État vide',
  parameters: componentSource(importTable, \`<DataTable caption="Commandes" columns={columns} rows={[]} rowId={(row) => row.id} />\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = tableCopy(locale);
    return <DataTable columns={columns(copy, locale)} rows={[]} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} />;
  }
}`,...(Qe=(Ze=H.parameters)==null?void 0:Ze.docs)==null?void 0:Qe.source}}};const zn=["Default","Search","Filtering","Sorting","NonSortable","SelectingRows","LockedRows","Export","TablePagination","WithTabs","EmptyResults"],aa=Object.freeze(Object.defineProperty({__proto__:null,Default:_,EmptyResults:H,Export:z,Filtering:P,LockedRows:F,NonSortable:$,Search:B,SelectingRows:V,Sorting:O,TablePagination:W,WithTabs:G,__namedExportsOrder:zn,default:$n},Symbol.toStringTag,{value:"Module"}));export{aa as D,z as E,P as F,F as L,$ as N,O as S,W as T,G as W,_ as a,B as b,V as c,H as d};
