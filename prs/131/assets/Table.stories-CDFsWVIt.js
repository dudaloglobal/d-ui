import{j as e,h as f,r as T,ao as N,d as m,y as C}from"./iframe-DuUAVHwV.js";import{W as Bl}from"./arg-types-CGfSQUbN.js";import{c as p}from"./docs-source-C_O40UCi.js";import{B as Ee}from"./Button-2tN7Wiju.js";import{I as Il}from"./IconButton-BFkWcZFM.js";import{E as cl}from"./EmptyState-BW4k6wCQ.js";import{M as Al,a as Me,b as Ml}from"./Menu-kp6_6DTR.js";import{T as El,a as ql,b as kl,c as Dl}from"./Tabs-v5Ejeqjo.js";import{T as _l}from"./Tag-1JNwHn6F.js";import{T as zl}from"./TextInput-79fywqhW.js";import{V as We}from"./VisuallyHidden-Ke44Yr13.js";import{C as Je}from"./Checkbox-KPZSkdA2.js";import{P as Pl}from"./Pagination-FcvRWltu.js";import{S as Fl}from"./Skeleton-zLT-NDwr.js";import{u as il}from"./useIsomorphicLayoutEffect-D0E5TQxU.js";const Ce=T.createContext(null);function q(l){const n=T.useContext(Ce);if(!n)throw new Error(`<${l}> doit être rendu à l’intérieur de <Table>.`);return n}const fe={sm:"px-2 py-1.5 text-sm",md:"px-3 py-2.5 text-base",lg:"px-4 py-3 text-lg"},dl={start:"text-start",center:"text-center",end:"text-end"};function qe(l,n){return l??(n?"end":"start")}function Ol(l){return l.scrollWidth>l.clientWidth+1||l.scrollHeight>l.clientHeight+1}function ke({caption:l,stickyHeader:n=!1,size:a="md",className:r,children:o,"aria-label":s,...y}){const g=T.useId(),B=T.useRef(null),[w,A]=T.useState(!!l),[xe,J]=T.useState(!1);il(()=>{const k=B.current;if(!k)return;const V=()=>{J(Ol(k))};if(V(),typeof ResizeObserver>"u")return window.addEventListener("resize",V),()=>window.removeEventListener("resize",V);const $=new ResizeObserver(V);return $.observe(k),()=>$.disconnect()},[o,l,a,n]);const K=w||!!s;return e.jsx(Ce.Provider,{value:{size:a,stickyHeader:n,captionId:g,section:"table",setHasCaption:A},children:e.jsx("div",{ref:B,className:f("w-full max-w-full overflow-auto",xe&&"focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",r),...xe?{tabIndex:0,...K?{role:"region","aria-labelledby":w?g:void 0,"aria-label":w?void 0:s}:{}}:{},children:e.jsxs("table",{...y,"aria-label":w?void 0:s,className:"w-full min-w-full border-collapse font-sans text-fg",children:[l?e.jsx(Re,{children:l}):null,o]})})})}function Re({className:l,children:n,...a}){const r=q("TableCaption"),{setHasCaption:o,captionId:s}=r;return il(()=>(o(!0),()=>o(!1)),[o]),e.jsx("caption",{...a,id:s,className:f("caption-top mb-2 text-start text-sm font-medium text-fg",l),children:n})}function j({className:l,children:n,...a}){const r=q("TableHeader");return e.jsx(Ce.Provider,{value:{...r,section:"head"},children:e.jsx("thead",{...a,className:f(l),children:n})})}function x({className:l,children:n,...a}){const r=q("TableBody");return e.jsx(Ce.Provider,{value:{...r,section:"body"},children:e.jsx("tbody",{...a,className:f("[&>tr:last-child>td]:border-b-0",l),children:n})})}function bl({className:l,children:n,...a}){const r=q("TableFooter");return e.jsx(Ce.Provider,{value:{...r,section:"foot"},children:e.jsx("tfoot",{...a,className:f("border-border border-t font-medium",l),children:n})})}function d({className:l,...n}){const{section:a}=q("TableRow");return e.jsx("tr",{...n,className:f(a==="body"&&"hover:bg-surface-muted",l)})}function i({align:l,numeric:n=!1,scope:a,className:r,...o}){const{size:s,stickyHeader:y,section:g}=q("TableHead"),B=qe(l,n),w=g==="head";return e.jsx("th",{...o,scope:a??(w?"col":"row"),className:f("border-border text-fg",w?"border-b font-medium":"border-border-subtle border-b",fe[s],dl[B],n&&"tabular-nums whitespace-nowrap",w&&"whitespace-nowrap",y&&w&&"bg-bg sticky top-0 z-10",r)})}function t({align:l,numeric:n=!1,className:a,...r}){const{size:o}=q("TableCell"),s=qe(l,n);return e.jsx("td",{...r,className:f("border-border-subtle border-b text-fg",fe[o],dl[s],n&&"tabular-nums whitespace-nowrap",a)})}function je({colSpan:l,className:n,children:a,...r}){return q("TableEmpty"),e.jsx("tr",{children:e.jsx("td",{...r,colSpan:l,className:f("border-border-subtle p-0",n),children:a})})}ke.__docgenInfo={description:"Conteneur sémantique (`<table>`) et zone de défilement.",methods:[],displayName:"TableFrame",props:{caption:{required:!1,tsType:{name:"ReactNode"},description:"Légende visible (`<caption>`). Nomme le tableau et, en cas de débordement,\nla région défilable (clavier)."},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Garde l’en-tête visible au défilement vertical du conteneur.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},columns:{required:!1,tsType:{name:"never"},description:""},rows:{required:!1,tsType:{name:"never"},description:""},rowId:{required:!1,tsType:{name:"never"},description:""}}};Re.__docgenInfo={description:"Légende native. Premier enfant du `<table>` ; porte le nom accessible.",methods:[],displayName:"TableCaption"};j.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};x.__docgenInfo={description:"",methods:[],displayName:"TableBody"};bl.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};d.__docgenInfo={description:"",methods:[],displayName:"TableRow"};i.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"Alignement. `numeric` aligne à `end` s’il est omis."},numeric:{required:!1,tsType:{name:"boolean"},description:"Chiffres tabulaires, sans retour à la ligne, alignés à la fin par défaut.",defaultValue:{value:"false",computed:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:""},numeric:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};je.__docgenInfo={description:"Ligne unique pour un état vide. Composer `EmptyState` (ou `ErrorState`)\nen enfant : `Table` ne couple pas le métier du vide.",methods:[],displayName:"TableEmpty",props:{colSpan:{required:!0,tsType:{name:"number"},description:"Nombre de colonnes à couvrir. Obligatoire : le slot n’invente pas la grille."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function Vl(l){return l==null}function he(l){return Vl(l)?1:0}function $l(l,n,a){const r=he(l)-he(n);return r!==0?r:he(l)===1?0:l instanceof Date&&n instanceof Date?l.getTime()-n.getTime():typeof l=="number"&&typeof n=="number"?l-n:typeof l=="boolean"&&typeof n=="boolean"?Number(l)-Number(n):String(l).localeCompare(String(n),a,{numeric:!0,sensitivity:"base"})}function Gl(l,n,a,r){if(!n)return[...l];const o=n.direction==="descending"?-1:1;return l.map((s,y)=>({row:s,index:y})).sort((s,y)=>{const g=a(s.row,n.columnId),B=a(y.row,n.columnId),w=he(g)-he(B);if(w!==0)return w;const A=$l(g,B,r);return A!==0?A*o:s.index-y.index}).map(s=>s.row)}function Wl(l,n,a,r){const o=Ke(n);return o?l.filter(s=>a.some(y=>{const g=r(s,y);return g==null?!1:Ke(ul(g)).includes(o)})):[...l]}function ul(l){return l instanceof Date?l.toISOString().slice(0,10):String(l)}function Ke(l){return l.trim().toLowerCase().normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"")}function Jl(l,n){return!l||l.columnId!==n?{columnId:n,direction:"ascending"}:l.direction==="ascending"?{columnId:n,direction:"descending"}:null}function Kl(l,n,a){if(a<=0)return[...l];const r=Math.max(0,(n-1)*a);return l.slice(r,r+a)}function Ul(l,n){return n<=0?1:Math.max(1,Math.ceil(l/n))}const Xl={selectAll:"Select all rows",selectRow:l=>`Select ${l}`,sortBy:"Sort this column",locked:"Locked row",results:l=>`${l} results`,empty:"No results"};function Zl({direction:l}){return e.jsxs("svg",{viewBox:"0 0 12 16",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",className:f("size-3 shrink-0",l?"text-brand":"text-fg-muted"),"aria-hidden":"true",focusable:"false",children:[l!=="descending"?e.jsx("path",{d:"M3 7l3-3 3 3"}):null,l!=="ascending"?e.jsx("path",{d:"M3 9l3 3 3-3"}):null]})}function Ql(){return e.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"text-fg-muted size-4","aria-hidden":"true",focusable:"false",children:[e.jsx("rect",{x:"3.25",y:"7",width:"9.5",height:"6.5",rx:"1.5"}),e.jsx("path",{d:"M5.75 7V5a2.25 2.25 0 0 1 4.5 0v2"})]})}function ml({columns:l,rows:n,rowId:a,caption:r,hideCaption:o=!1,size:s="md",stickyHeader:y=!1,sort:g,defaultSort:B=null,onSortChange:w,search:A,defaultSearch:xe="",onSearchChange:J,selectable:K=!1,selectedIds:k,defaultSelectedIds:V=[],onSelectedIdsChange:$,rowLabel:Se,isRowLocked:D,pageSize:G,page:M,defaultPage:pl=1,onPageChange:R,toolbar:ve,footer:De,loading:_=!1,empty:Tl,locale:_e,labels:yl,className:wl}){const W={...Xl,...yl},[gl,fl]=T.useState(B),[hl,Cl]=T.useState(xe),[xl,vl]=T.useState(V),[Ne,Le]=T.useState(pl),z=g!==void 0?g:gl,Be=A!==void 0?A:hl,P=k!==void 0?k:xl,ze=M!==void 0?M:Ne,Ie=T.useMemo(()=>{const c=new Map(l.map(u=>[u.id,u]));return(u,I)=>{var S;return((S=c.get(I))==null?void 0:S.value(u))??null}},[l]),Pe=T.useMemo(()=>l.map(c=>c.id),[l]),U=T.useMemo(()=>{const c=Wl(n,Be,Pe,Ie);return Gl(c,z,Ie,_e)},[n,Be,Pe,Ie,z,_e]),Ae=G?Ul(U.length,G):1,F=Math.min(Math.max(ze,1),Ae),He=G?Kl(U,F,G):U,X=T.useMemo(()=>He.filter(c=>!(D!=null&&D(c))),[He,D]),Fe=T.useMemo(()=>new Set(P),[P]),Oe=X.filter(c=>Fe.has(a(c))).length,Ve=X.length>0&&Oe===X.length;function Hl(c){const u=Jl(z,c);g===void 0&&fl(u),w==null||w(u)}function $e(c){k===void 0&&vl(c),$==null||$(c)}function jl(c,u){const I=u?[...P,c]:P.filter(S=>S!==c);$e(I)}function Rl(c){const u=new Set(X.map(a));$e(c?[...new Set([...P,...u])]:P.filter(I=>!u.has(I)))}function Sl(c){A===void 0&&Cl(c),J==null||J(c),G&&ze!==1&&(M===void 0&&Le(1),R==null||R(1))}function Nl(c){M===void 0&&Le(c),R==null||R(c)}T.useEffect(()=>{M!==void 0&&M!==F&&(R==null||R(F)),M===void 0&&Ne!==F&&Le(F)},[M,F,Ne,R]);const Ge=l.length+(K?1:0),Ll=!_&&He.length===0;return e.jsxs("div",{className:"font-sans",children:[ve!==void 0?e.jsx("div",{className:"mb-3",children:typeof ve=="function"?ve({rows:U,search:Be,setSearch:Sl,selectedIds:P}):ve}):null,_?null:e.jsx("p",{role:"status",className:"d-ui-visually-hidden",children:W.results(U.length)}),e.jsxs(ke,{size:s,stickyHeader:y,"aria-busy":_||void 0,className:f("border-border-subtle rounded-md border",wl),children:[e.jsx(Re,{className:o?"d-ui-visually-hidden":f("mb-0 font-normal text-fg-muted",fe[s]),children:r}),e.jsx(j,{children:e.jsxs(d,{children:[K?e.jsx(i,{children:e.jsx(Je,{size:"sm","aria-label":W.selectAll,checked:Ve,indeterminate:Oe>0&&!Ve,disabled:_||X.length===0,onChange:c=>Rl(c.currentTarget.checked)})}):null,l.map(c=>{const u=(z==null?void 0:z.columnId)===c.id?z:null,I=c.sortable!==!1,S=qe(c.align,c.numeric??!1)==="end";return e.jsx(i,{align:c.align,numeric:c.numeric,"aria-sort":u?u.direction:void 0,children:I?e.jsxs("button",{type:"button",disabled:_,onClick:()=>Hl(c.id),className:f("inline-flex min-h-6 items-center gap-1.5 rounded-sm","focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",S?"flex-row-reverse":null),children:[c.header,e.jsx(Zl,{direction:u?u.direction:null}),e.jsx(We,{children:` — ${W.sortBy}`})]}):c.header},c.id)})]})}),e.jsx(x,{children:_?e.jsx(je,{colSpan:Ge,children:e.jsx("div",{className:f("py-8",fe[s]),children:e.jsx(Fl,{lines:3})})}):Ll?e.jsx(je,{colSpan:Ge,children:Tl??e.jsx("p",{className:f("text-fg-muted py-10 text-center",fe[s]),children:W.empty})}):He.map(c=>{const u=a(c),I=(D==null?void 0:D(c))??!1,S=Fe.has(u);return e.jsxs(d,{"data-selected":S?"":void 0,className:S?"bg-surface-hover shadow-[inset_3px_0_0_var(--d-ui-color-brand)]":void 0,children:[K?e.jsx(t,{children:I?e.jsxs("span",{className:"inline-flex items-center",children:[e.jsx(Ql,{}),e.jsx(We,{children:W.locked})]}):e.jsx(Je,{size:"sm","aria-label":W.selectRow((Se==null?void 0:Se(c))??u),checked:S,onChange:E=>jl(u,E.currentTarget.checked)})}):null,l.map(E=>e.jsx(t,{align:E.align,numeric:E.numeric,children:E.cell?E.cell(c):ul(E.value(c)??"")},E.id))]},u)})})]}),De!==void 0?De:!_&&G&&Ae>1?e.jsx("div",{className:"mt-3 flex justify-end",children:e.jsx(Pl,{page:F,pageCount:Ae,onPageChange:Nl,size:"sm",label:r})}):null]})}ml.__docgenInfo={description:"Mode données de `Table` : tri, recherche, sélection et pagination.\n\nLe balisage reste celui de `TableFrame` : ce module pose un comportement\ndessus, sans second tableau. La zone défilable devient atteignable au\nclavier quand elle déborde vraiment (2.1.1), `size` et `stickyHeader`\nsuivent l'échelle du composant, et une seule table de paddings existe.\n\nL'association d'une cellule à son en-tête vient de `scope=\"col\"`, posé par\n`TableHead`, pas d'ARIA. Le tri est un `<button>` dans le `<th>`, et\n`aria-sort` n'est posé que sur la colonne triée — ARIA le veut sur une\nseule à la fois.\n\nChaque état (tri, recherche, page, sélection) accepte une prop contrôlée et\nretombe sinon sur un état interne, comme `Tabs` : une table locale marche\nsans câblage, une table serveur garde la main.\n\nLe composant **ne fabrique pas de fichier**. `toolbar` reçoit les lignes\nvisibles et vous y mettez votre bouton d'export : l'encodage, le séparateur\net le format des dates sont des règles produit, pas des règles de design\nsystem.",methods:[],displayName:"TableData",props:{columns:{required:!0,tsType:{name:"unknown"},description:""},rows:{required:!0,tsType:{name:"unknown"},description:""},rowId:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: Row) => string",signature:{arguments:[{type:{name:"Row"},name:"row"}],return:{name:"string"}}},description:"Clé stable d'une ligne. Jamais l'index : le tri le déplace."},caption:{required:!0,tsType:{name:"string"},description:`Nom accessible de la table, rendu dans une \`<caption>\`.

Obligatoire : une table sans nom laisse le lecteur d'écran annoncer
« tableau, 8 colonnes » sans dire de quoi.`},hideCaption:{required:!1,tsType:{name:"boolean"},description:"Masque la légende à l'écran. Elle reste lue, et nomme la zone défilable.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Densité des cellules. Défaut : `md`.",defaultValue:{value:"'md'",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sort:{required:!1,tsType:{name:"union",raw:"TableSort | null",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"columnId",value:{name:"string",required:!0},description:"`id` de la colonne triée."},{key:"direction",value:{name:"union",raw:"'ascending' | 'descending'",elements:[{name:"literal",value:"'ascending'"},{name:"literal",value:"'descending'"}],required:!0}}]}},{name:"null"}]},name:"sort"}],return:{name:"void"}}},description:""},search:{required:!1,tsType:{name:"string"},description:"Recherche contrôlée. Sans elle, `toolbar` peut piloter `defaultSearch`."},defaultSearch:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(search: string) => void",signature:{arguments:[{type:{name:"string"},name:"search"}],return:{name:"void"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"Active la colonne de cases à cocher.",defaultValue:{value:"false",computed:!1}},selectedIds:{required:!1,tsType:{name:"unknown"},description:""},defaultSelectedIds:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"[]",computed:!1}},onSelectedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"ids"}],return:{name:"void"}}},description:""},rowLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: Row) => string",signature:{arguments:[{type:{name:"Row"},name:"row"}],return:{name:"string"}}},description:"Nom lisible d'une ligne, pour nommer sa case à cocher."},isRowLocked:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: Row) => boolean",signature:{arguments:[{type:{name:"Row"},name:"row"}],return:{name:"boolean"}}},description:"Ligne verrouillée : ni sélectionnable, ni comptée dans « tout cocher »."},pageSize:{required:!1,tsType:{name:"number"},description:"Pagine la table. Omis, toutes les lignes sont rendues."},page:{required:!1,tsType:{name:"number"},description:""},defaultPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},toolbar:{required:!1,tsType:{name:"union",raw:"ReactNode | ((api: TableToolbarApi<Row>) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:`Barre au-dessus de la table : recherche, filtres, actions groupées, export.

En fonction, elle reçoit de quoi tout faire sans que le composant s'en
mêle : les lignes **visibles** (filtrées et triées) pour l'export, la
recherche et son setter, les lignes cochées pour une action groupée. Même
forme que le slot \`progress\` de \`FileUpload\`.`},footer:{required:!1,tsType:{name:"ReactNode"},description:"Contenu sous la table, à la place de la pagination automatique."},loading:{required:!1,tsType:{name:"boolean"},description:"Remplace le corps par un squelette. Le `<table>` porte `aria-busy` ;\nle squelette reste hors de l’arbre d’accessibilité.",defaultValue:{value:"false",computed:!1}},empty:{required:!1,tsType:{name:"ReactNode"},description:"Corps vide. Composez `EmptyState` ou `ErrorState` — le mode données\nn’importe pas le métier du vide. Omis : `labels.empty` en paragraphe."},locale:{required:!1,tsType:{name:"string"},description:"Locale de comparaison pour le tri. Défaut : celle de l'exécution."},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  selectAll: string;
  selectRow: (label: string) => string;
  /** Indice ajouté au nom du bouton de tri. Ne répète pas l'en-tête. */
  sortBy: string;
  locked: string;
  results: (count: number) => string;
  empty: string;
}`,signature:{properties:[{key:"selectAll",value:{name:"string",required:!0}},{key:"selectRow",value:{name:"signature",type:"function",raw:"(label: string) => string",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"string"}},required:!0}},{key:"sortBy",value:{name:"string",required:!0},description:"Indice ajouté au nom du bouton de tri. Ne répète pas l'en-tête."},{key:"locked",value:{name:"string",required:!0}},{key:"results",value:{name:"signature",type:"function",raw:"(count: number) => string",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"string"}},required:!0}},{key:"empty",value:{name:"string",required:!0}}]}}],raw:"Partial<TableLabels>"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"never"},description:"Incompatible avec le mode parties : passez `columns` / `rows`, pas des enfants."}}};function Yl(l){return"columns"in l&&l.columns!=null}function b(l){return Yl(l)?e.jsx(ml,{...l}):e.jsx(ke,{...l})}b.__docgenInfo={description:"",methods:[],displayName:"Table"};const O=`import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,en=`import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,an=`import {
    EmptyState,
    Table,
    TableBody,
    TableCell,
    TableEmpty,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,ln=`import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,nn={title:"Components/Table",component:b,args:{children:e.jsx("span",{})},argTypes:Bl},Z={name:"Par défaut",parameters:p(O,`<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead>Moyenne</TableHead>
            <TableHead>Statut</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell>18,5</TableCell>
            <TableCell>Admise</TableCell>
        </TableRow>
    </TableBody>
</Table>`),render:(l,{globals:n})=>{const a=N(m(n.locale));return e.jsxs(b,{...l,caption:a.caption,children:[e.jsx(j,{children:e.jsxs(d,{children:[e.jsx(i,{children:a.student}),e.jsx(i,{children:a.average}),e.jsx(i,{children:a.status})]})}),e.jsxs(x,{children:[e.jsxs(d,{children:[e.jsx(t,{children:a.ada}),e.jsx(t,{children:a.averageAda}),e.jsx(t,{children:a.admitted})]}),e.jsxs(d,{children:[e.jsx(t,{children:a.grace}),e.jsx(t,{children:a.averageGrace}),e.jsx(t,{children:a.admitted})]}),e.jsxs(d,{children:[e.jsx(t,{children:a.katherine}),e.jsx(t,{children:a.averageKatherine}),e.jsx(t,{children:a.admitted})]})]})]})}},Q={name:"Alignement numérique",parameters:p(O,`<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
</Table>`),render:(l,{globals:n})=>{const a=N(m(n.locale));return e.jsxs(b,{...l,caption:a.caption,children:[e.jsx(j,{children:e.jsxs(d,{children:[e.jsx(i,{children:a.student}),e.jsx(i,{numeric:!0,children:a.average}),e.jsx(i,{numeric:!0,children:a.hours})]})}),e.jsxs(x,{children:[e.jsxs(d,{children:[e.jsx(t,{children:a.ada}),e.jsx(t,{numeric:!0,children:a.averageAda}),e.jsx(t,{numeric:!0,children:a.hoursAda})]}),e.jsxs(d,{children:[e.jsx(t,{children:a.grace}),e.jsx(t,{numeric:!0,children:a.averageGrace}),e.jsx(t,{numeric:!0,children:a.hoursGrace})]})]})]})}},Y={name:"Alignements",parameters:p(O,`<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead align="center">Statut</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell align="center">Admise</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
</Table>`),render:(l,{globals:n})=>{const a=N(m(n.locale));return e.jsxs(b,{...l,caption:a.caption,children:[e.jsx(j,{children:e.jsxs(d,{children:[e.jsx(i,{children:a.student}),e.jsx(i,{align:"center",children:a.status}),e.jsx(i,{numeric:!0,children:a.average})]})}),e.jsxs(x,{children:[e.jsxs(d,{children:[e.jsx(t,{children:a.ada}),e.jsx(t,{align:"center",children:a.admitted}),e.jsx(t,{numeric:!0,children:a.averageAda})]}),e.jsxs(d,{children:[e.jsx(t,{children:a.grace}),e.jsx(t,{align:"center",children:a.admitted}),e.jsx(t,{numeric:!0,children:a.averageGrace})]})]})]})}},ee={name:"Légende",parameters:p(en,`<Table>
    <TableCaption>Notes du trimestre</TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead>Statut</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell>Admise</TableCell>
        </TableRow>
    </TableBody>
</Table>`),render:(l,{globals:n})=>{const a=N(m(n.locale)),{caption:r,...o}=l;return e.jsxs(b,{...o,children:[e.jsx(Re,{children:a.caption}),e.jsx(j,{children:e.jsxs(d,{children:[e.jsx(i,{children:a.student}),e.jsx(i,{children:a.status})]})}),e.jsx(x,{children:e.jsxs(d,{children:[e.jsx(t,{children:a.ada}),e.jsx(t,{children:a.admitted})]})})]})}},ae={name:"Débordement",parameters:p(O,`<Table caption="Planning de la semaine" className="max-w-md">
    <TableHeader>
        <TableRow>
            <TableHead>Module</TableHead>
            <TableHead>Lundi</TableHead>
            <TableHead>Mardi</TableHead>
            <TableHead>Mercredi</TableHead>
            <TableHead>Jeudi</TableHead>
            <TableHead>Vendredi</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Algèbre linéaire — espaces vectoriels</TableCell>
            <TableCell>08:00</TableCell>
            <TableCell>10:00</TableCell>
            <TableCell>08:00</TableCell>
            <TableCell>14:00</TableCell>
            <TableCell>09:00</TableCell>
        </TableRow>
    </TableBody>
</Table>`),render:(l,{globals:n})=>{const a=N(m(n.locale));return e.jsxs(b,{...l,caption:a.scheduleCaption,className:"max-w-md",children:[e.jsx(j,{children:e.jsxs(d,{children:[e.jsx(i,{children:a.module}),e.jsx(i,{children:a.monday}),e.jsx(i,{children:a.tuesday}),e.jsx(i,{children:a.wednesday}),e.jsx(i,{children:a.thursday}),e.jsx(i,{children:a.friday})]})}),e.jsxs(x,{children:[e.jsxs(d,{children:[e.jsx(t,{className:"whitespace-nowrap",children:a.longModule}),e.jsx(t,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(t,{className:"whitespace-nowrap",children:a.slotLate}),e.jsx(t,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(t,{className:"whitespace-nowrap",children:a.slotAfternoon}),e.jsx(t,{className:"whitespace-nowrap",children:a.slotMid})]}),e.jsxs(d,{children:[e.jsx(t,{className:"whitespace-nowrap",children:a.longModuleTwo}),e.jsx(t,{className:"whitespace-nowrap",children:a.slotAfternoon}),e.jsx(t,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(t,{className:"whitespace-nowrap",children:a.slotLate}),e.jsx(t,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(t,{className:"whitespace-nowrap",children:a.slotAfternoon})]})]})]})}},le={name:"État vide",parameters:p(an,`<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead>Moyenne</TableHead>
            <TableHead>Statut</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableEmpty colSpan={3}>
            <EmptyState
                title="Aucune note"
                description="Les notes apparaîtront après le premier devoir."
            />
        </TableEmpty>
    </TableBody>
</Table>`),render:(l,{globals:n})=>{const a=N(m(n.locale));return e.jsxs(b,{...l,caption:a.caption,children:[e.jsx(j,{children:e.jsxs(d,{children:[e.jsx(i,{children:a.student}),e.jsx(i,{children:a.average}),e.jsx(i,{children:a.status})]})}),e.jsx(x,{children:e.jsx(je,{colSpan:3,children:e.jsx(cl,{title:a.emptyTitle,description:a.emptyDescription})})})]})}},ne={name:"En-tête collant",parameters:p(O,`<Table caption="Notes du trimestre" stickyHeader className="max-h-56">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
</Table>`),render:(l,{globals:n})=>{const a=N(m(n.locale)),r=[a.ada,a.grace,a.katherine,a.annie,a.hypatia,a.emmy,a.sofia,a.maryam];return e.jsxs(b,{...l,caption:a.caption,stickyHeader:!0,className:"max-h-56",children:[e.jsx(j,{children:e.jsxs(d,{children:[e.jsx(i,{children:a.student}),e.jsx(i,{numeric:!0,children:a.average}),e.jsx(i,{children:a.status})]})}),e.jsx(x,{children:r.map((o,s)=>e.jsxs(d,{children:[e.jsx(t,{children:o}),e.jsx(t,{numeric:!0,children:a.stickyAverages[s]}),e.jsx(t,{children:a.admitted})]},o))})]})}},re={name:"Pied de tableau",parameters:p(ln,`<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
    <TableFooter>
        <TableRow>
            <TableCell>Moyenne de classe</TableCell>
            <TableCell numeric>17,2</TableCell>
        </TableRow>
    </TableFooter>
</Table>`),render:(l,{globals:n})=>{const a=N(m(n.locale));return e.jsxs(b,{...l,caption:a.caption,children:[e.jsx(j,{children:e.jsxs(d,{children:[e.jsx(i,{children:a.student}),e.jsx(i,{numeric:!0,children:a.average})]})}),e.jsxs(x,{children:[e.jsxs(d,{children:[e.jsx(t,{children:a.ada}),e.jsx(t,{numeric:!0,children:a.averageAda})]}),e.jsxs(d,{children:[e.jsx(t,{children:a.grace}),e.jsx(t,{numeric:!0,children:a.averageGrace})]})]}),e.jsx(bl,{children:e.jsxs(d,{children:[e.jsx(t,{children:a.classAverage}),e.jsx(t,{numeric:!0,children:a.classAverageValue})]})})]})}},oe={name:"En-tête de ligne",parameters:p(O,`<Table caption="Planning de la semaine">
    <TableBody>
        <TableRow>
            <TableHead>Lundi</TableHead>
            <TableCell>08:00</TableCell>
            <TableCell>Algèbre linéaire — espaces vectoriels</TableCell>
        </TableRow>
    </TableBody>
</Table>`),render:(l,{globals:n})=>{const a=N(m(n.locale));return e.jsx(b,{...l,caption:a.scheduleCaption,children:e.jsxs(x,{children:[e.jsxs(d,{children:[e.jsx(i,{children:a.monday}),e.jsx(t,{children:a.slotMorning}),e.jsx(t,{children:a.longModule})]}),e.jsxs(d,{children:[e.jsx(i,{children:a.tuesday}),e.jsx(t,{children:a.slotLate}),e.jsx(t,{children:a.longModuleTwo})]})]})})}},te={name:"Tailles",parameters:p(O,`<>
    <Table caption="Notes du trimestre" size="sm">
        <TableHeader>
            <TableRow>
                <TableHead>Élève</TableHead>
                <TableHead numeric>Moyenne</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>Ada Lovelace</TableCell>
                <TableCell numeric>18,5</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    <Table caption="Notes du trimestre" size="lg">
        <TableHeader>
            <TableRow>
                <TableHead>Élève</TableHead>
                <TableHead numeric>Moyenne</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>Ada Lovelace</TableCell>
                <TableCell numeric>18,5</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</>`),render:(l,{globals:n})=>{const a=N(m(n.locale));return e.jsx("div",{className:"flex flex-col gap-8",children:["sm","md","lg"].map(r=>e.jsxs(b,{...l,caption:a.caption,size:r,children:[e.jsx(j,{children:e.jsxs(d,{children:[e.jsx(i,{children:a.student}),e.jsx(i,{numeric:!0,children:a.average})]})}),e.jsx(x,{children:e.jsxs(d,{children:[e.jsx(t,{children:a.ada}),e.jsx(t,{numeric:!0,children:a.averageAda})]})})]},r))})}},L="import { Table } from 'd-ui';",se={name:"Colonnes et lignes",parameters:p(L,`<Table
    caption="Commandes du trimestre"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
/>`,`const columns = [
    { id: 'reference', header: 'Référence', value: (row) => row.reference },
    { id: 'amount', header: 'Montant', numeric: true, value: (row) => row.amount },
];`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(b,{columns:H(r,a),rows:h,rowId:o=>o.id,caption:r.caption,labels:v(r)})}},h=[{id:"1",reference:"CMD-1042",client:"Amina Doumbouya",amount:1250,date:"2026-08-02",status:"paid",closed:!0},{id:"2",reference:"CMD-1043",client:"Bruno Kessi",amount:340,date:"2026-08-05",status:"pending"},{id:"3",reference:"CMD-1044",client:"Chloé Adjovi",amount:8900,date:"2026-08-09",status:"late"},{id:"4",reference:"CMD-1045",client:"Élodie Sagbo",amount:76,date:"2026-08-11",status:"draft"},{id:"5",reference:"CMD-1046",client:"Farid Zinsou",amount:2410,date:"2026-08-14",status:"paid"},{id:"6",reference:"CMD-1047",client:"Grace Houngbo",amount:530,date:"2026-08-18",status:"pending"},{id:"7",reference:"CMD-1048",client:"Hervé Noukpo",amount:15300,date:"2026-08-21",status:"late"}],rn={paid:"success",pending:"warning",late:"danger",draft:"neutral"};function Ue(l,n){return l[n]}function on(l,n){return new Intl.NumberFormat(n==="en"?"en-GB":"fr-FR",{style:"currency",currency:"XOF",maximumFractionDigits:0}).format(l)}function v(l){return{selectAll:l.selectAll,selectRow:l.selectRow,sortBy:l.sortBy,locked:l.locked,results:l.results,empty:l.empty}}function H(l,n){return[{id:"reference",header:l.reference,value:a=>a.reference},{id:"client",header:l.client,value:a=>a.client},{id:"amount",header:l.amount,numeric:!0,value:a=>a.amount,cell:a=>on(a.amount,n)},{id:"date",header:l.date,value:a=>new Date(a.date),cell:a=>a.date},{id:"status",header:l.status,value:a=>Ue(l,a.status),cell:a=>e.jsx(_l,{variant:rn[a.status],children:Ue(l,a.status)})}]}const ce={name:"Recherche",parameters:p(L,`<Table
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
/>`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(b,{columns:H(r,a),rows:h,rowId:o=>o.id,caption:r.caption,labels:v(r),toolbar:({search:o,setSearch:s})=>e.jsx(zl,{type:"search",label:r.search,placeholder:r.searchPlaceholder,value:o,fullWidth:!1,onChange:y=>s(y.currentTarget.value)})})}},ie={name:"Filtres",parameters:p(L,`<Table
    caption="Commandes"
    columns={columns}
    rows={onlyLate ? orders.filter((o) => o.status === 'late') : orders}
    rowId={(row) => row.id}
    toolbar={<Button onClick={() => setOnlyLate(!onlyLate)}>En retard seulement</Button>}
/>`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(tn,{copy:r,locale:a})}};function tn({copy:l,locale:n}){const[a,r]=T.useState(!1),o=a?h.filter(s=>s.status==="late"):h;return e.jsx(b,{columns:H(l,n),rows:o,rowId:s=>s.id,caption:l.caption,labels:v(l),toolbar:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(Ee,{variant:"secondary",size:"sm",isSelected:!a,onClick:()=>r(!1),children:l.all}),e.jsx(Ee,{variant:"secondary",size:"sm",isSelected:a,onClick:()=>r(!0),children:l.onlyLate})]})})}const de={name:"Tri",parameters:p(L,`<Table
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    defaultSort={{ columnId: 'amount', direction: 'descending' }}
/>`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(b,{columns:H(r,a),rows:h,rowId:o=>o.id,caption:r.caption,labels:v(r),defaultSort:{columnId:"amount",direction:"descending"},locale:a==="en"?"en":"fr"})}},be={name:"Colonne non triable",parameters:p(L,`const columns = [
    ...,
    { id: 'actions', header: 'Actions', value: () => null, sortable: false },
];`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(b,{columns:[...H(r,a),{id:"actions",header:r.actions,value:()=>null,sortable:!1,align:"end",cell:o=>e.jsxs(Al,{label:r.rowActions,trigger:e.jsx(Il,{variant:"ghost",size:"sm","aria-label":`${r.rowActions} — ${o.reference}`,icon:e.jsxs("svg",{viewBox:"0 0 16 16",className:"size-4","aria-hidden":"true",children:[e.jsx("circle",{cx:"8",cy:"3",r:"1.4",fill:"currentColor"}),e.jsx("circle",{cx:"8",cy:"8",r:"1.4",fill:"currentColor"}),e.jsx("circle",{cx:"8",cy:"13",r:"1.4",fill:"currentColor"})]})}),children:[e.jsx(Me,{children:r.edit}),e.jsx(Me,{children:r.duplicate}),e.jsx(Ml,{}),e.jsx(Me,{children:r.archive})]})}],rows:h.slice(0,4),rowId:o=>o.id,caption:r.caption,labels:v(r)})}},ue={name:"Sélection de lignes",parameters:p(L,`<Table
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    rowLabel={(row) => row.reference}
/>`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(b,{columns:H(r,a),rows:h.slice(0,5),rowId:o=>o.id,caption:r.caption,labels:v(r),selectable:!0,rowLabel:o=>`${o.reference} — ${o.client}`,defaultSelectedIds:["2"]})}},me={name:"Lignes verrouillées",parameters:p(L,`<Table
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    isRowLocked={(row) => row.closed === true}
/>`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(b,{columns:H(r,a),rows:h.slice(0,5),rowId:o=>o.id,caption:r.caption,labels:v(r),selectable:!0,rowLabel:o=>`${o.reference} — ${o.client}`,isRowLocked:o=>o.closed===!0})}},pe={name:"Export",parameters:p(L,`<Table
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    selectable
    toolbar={({ rows, selectedIds }) => (
        // La table donne les lignes visibles ; le fichier est à vous.
        <Button onClick={() => downloadCsv(rows, selectedIds)}>Exporter</Button>
    )}
/>`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(sn,{copy:r,locale:a})}};function sn({copy:l,locale:n}){const[a,r]=T.useState("");return e.jsx(b,{columns:H(l,n),rows:h.slice(0,5),rowId:o=>o.id,caption:l.caption,labels:v(l),selectable:!0,rowLabel:o=>o.reference,toolbar:({rows:o,selectedIds:s})=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(Ee,{variant:"secondary",size:"sm",onClick:()=>r(l.exported(s.length>0?s.length:o.length)),children:l.export}),e.jsx("p",{className:"text-fg-muted m-0 text-sm",children:a})]})})}const Te={name:"Pagination",parameters:p(L,`<Table
    caption="Commandes"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    pageSize={3}
/>`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(b,{columns:H(r,a),rows:h,rowId:o=>o.id,caption:r.caption,labels:v(r),pageSize:3})}},ye={name:"Avec onglets",parameters:p("import { Tab, TabList, TabPanel, Table, Tabs } from 'd-ui';",`<Tabs defaultValue="all">
    <TabList>
        <Tab value="all">Toutes</Tab>
        <Tab value="late">En retard</Tab>
    </TabList>
    <TabPanel value="all"><Table rows={orders} … /></TabPanel>
    <TabPanel value="late"><Table rows={late} … /></TabPanel>
</Tabs>`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a),o=[{value:"all",label:r.tabAll,rows:h},{value:"late",label:r.tabLate,rows:h.filter(s=>s.status==="late")},{value:"paid",label:r.tabPaid,rows:h.filter(s=>s.status==="paid")}];return e.jsxs(El,{defaultValue:"all",label:r.caption,children:[e.jsx(ql,{children:o.map(s=>e.jsx(kl,{value:s.value,children:s.label},s.value))}),o.map(s=>e.jsx(Dl,{value:s.value,children:e.jsx(b,{className:"mt-4",columns:H(r,a),rows:s.rows,rowId:y=>y.id,caption:`${r.caption} — ${s.label}`,hideCaption:!0,labels:v(r)})},s.value))]})}},we={name:"Aucun résultat",parameters:p("import { EmptyState, Table } from 'd-ui';",`<Table
    caption="Commandes"
    columns={columns}
    rows={[]}
    rowId={(row) => row.id}
    empty={<EmptyState title="Aucune commande" description="Élargissez la recherche." />}
/>`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(b,{columns:H(r,a),rows:[],rowId:o=>o.id,caption:r.caption,labels:v(r),empty:e.jsx(cl,{title:r.emptyTitle,description:r.emptyDescription})})}},ge={name:"Chargement",parameters:p(L,`<Table
    caption="Commandes du trimestre"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    loading
    pageSize={3}
/>`),render:(l,{globals:n})=>{const a=m(n.locale),r=C(a);return e.jsx(b,{columns:H(r,a),rows:h,rowId:o=>o.id,caption:r.caption,labels:v(r),loading:!0,pageSize:3})}};var Xe,Ze,Qe;Z.parameters={...Z.parameters,docs:{...(Xe=Z.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importTable, \`<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead>Moyenne</TableHead>
            <TableHead>Statut</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell>18,5</TableCell>
            <TableCell>Admise</TableCell>
        </TableRow>
    </TableBody>
</Table>\`),
  render: (args, {
    globals
  }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return <Table {...args} caption={copy.caption}>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead>{copy.average}</TableHead>
            <TableHead>{copy.status}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{copy.ada}</TableCell>
            <TableCell>{copy.averageAda}</TableCell>
            <TableCell>{copy.admitted}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{copy.grace}</TableCell>
            <TableCell>{copy.averageGrace}</TableCell>
            <TableCell>{copy.admitted}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{copy.katherine}</TableCell>
            <TableCell>{copy.averageKatherine}</TableCell>
            <TableCell>{copy.admitted}</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(Qe=(Ze=Z.parameters)==null?void 0:Ze.docs)==null?void 0:Qe.source}}};var Ye,ea,aa;Q.parameters={...Q.parameters,docs:{...(Ye=Q.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Alignement numérique',
  parameters: componentSource(importTable, \`<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
</Table>\`),
  render: (args, {
    globals
  }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return <Table {...args} caption={copy.caption}>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead numeric>{copy.average}</TableHead>
            <TableHead numeric>{copy.hours}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{copy.ada}</TableCell>
            <TableCell numeric>{copy.averageAda}</TableCell>
            <TableCell numeric>{copy.hoursAda}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{copy.grace}</TableCell>
            <TableCell numeric>{copy.averageGrace}</TableCell>
            <TableCell numeric>{copy.hoursGrace}</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(aa=(ea=Q.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var la,na,ra;Y.parameters={...Y.parameters,docs:{...(la=Y.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: 'Alignements',
  parameters: componentSource(importTable, \`<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead align="center">Statut</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell align="center">Admise</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
</Table>\`),
  render: (args, {
    globals
  }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return <Table {...args} caption={copy.caption}>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead align="center">{copy.status}</TableHead>
            <TableHead numeric>{copy.average}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{copy.ada}</TableCell>
            <TableCell align="center">{copy.admitted}</TableCell>
            <TableCell numeric>{copy.averageAda}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{copy.grace}</TableCell>
            <TableCell align="center">{copy.admitted}</TableCell>
            <TableCell numeric>{copy.averageGrace}</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(ra=(na=Y.parameters)==null?void 0:na.docs)==null?void 0:ra.source}}};var oa,ta,sa;ee.parameters={...ee.parameters,docs:{...(oa=ee.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  name: 'Légende',
  parameters: componentSource(importCaption, \`<Table>
    <TableCaption>Notes du trimestre</TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead>Statut</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell>Admise</TableCell>
        </TableRow>
    </TableBody>
</Table>\`),
  render: (args, {
    globals
  }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    const {
      caption: _caption,
      ...rest
    } = args;
    return <Table {...rest}>
        <TableCaption>{copy.caption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead>{copy.status}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{copy.ada}</TableCell>
            <TableCell>{copy.admitted}</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(sa=(ta=ee.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};var ca,ia,da;ae.parameters={...ae.parameters,docs:{...(ca=ae.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  name: 'Débordement',
  parameters: componentSource(importTable, \`<Table caption="Planning de la semaine" className="max-w-md">
    <TableHeader>
        <TableRow>
            <TableHead>Module</TableHead>
            <TableHead>Lundi</TableHead>
            <TableHead>Mardi</TableHead>
            <TableHead>Mercredi</TableHead>
            <TableHead>Jeudi</TableHead>
            <TableHead>Vendredi</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Algèbre linéaire — espaces vectoriels</TableCell>
            <TableCell>08:00</TableCell>
            <TableCell>10:00</TableCell>
            <TableCell>08:00</TableCell>
            <TableCell>14:00</TableCell>
            <TableCell>09:00</TableCell>
        </TableRow>
    </TableBody>
</Table>\`),
  render: (args, {
    globals
  }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return <Table {...args} caption={copy.scheduleCaption} className="max-w-md">
        <TableHeader>
          <TableRow>
            <TableHead>{copy.module}</TableHead>
            <TableHead>{copy.monday}</TableHead>
            <TableHead>{copy.tuesday}</TableHead>
            <TableHead>{copy.wednesday}</TableHead>
            <TableHead>{copy.thursday}</TableHead>
            <TableHead>{copy.friday}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="whitespace-nowrap">{copy.longModule}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotMorning}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotLate}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotMorning}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotAfternoon}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotMid}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="whitespace-nowrap">{copy.longModuleTwo}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotAfternoon}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotMorning}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotLate}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotMorning}</TableCell>
            <TableCell className="whitespace-nowrap">{copy.slotAfternoon}</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(da=(ia=ae.parameters)==null?void 0:ia.docs)==null?void 0:da.source}}};var ba,ua,ma;le.parameters={...le.parameters,docs:{...(ba=le.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  name: 'État vide',
  parameters: componentSource(importEmpty, \`<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead>Moyenne</TableHead>
            <TableHead>Statut</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableEmpty colSpan={3}>
            <EmptyState
                title="Aucune note"
                description="Les notes apparaîtront après le premier devoir."
            />
        </TableEmpty>
    </TableBody>
</Table>\`),
  render: (args, {
    globals
  }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return <Table {...args} caption={copy.caption}>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead>{copy.average}</TableHead>
            <TableHead>{copy.status}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableEmpty colSpan={3}>
            <EmptyState title={copy.emptyTitle} description={copy.emptyDescription} />
          </TableEmpty>
        </TableBody>
      </Table>;
  }
}`,...(ma=(ua=le.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var pa,Ta,ya;ne.parameters={...ne.parameters,docs:{...(pa=ne.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  name: 'En-tête collant',
  parameters: componentSource(importTable, \`<Table caption="Notes du trimestre" stickyHeader className="max-h-56">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
</Table>\`),
  render: (args, {
    globals
  }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    const rows = [copy.ada, copy.grace, copy.katherine, copy.annie, copy.hypatia, copy.emmy, copy.sofia, copy.maryam];
    return <Table {...args} caption={copy.caption} stickyHeader className="max-h-56">
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead numeric>{copy.average}</TableHead>
            <TableHead>{copy.status}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((name, index) => <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell numeric>{copy.stickyAverages[index]}</TableCell>
              <TableCell>{copy.admitted}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...(ya=(Ta=ne.parameters)==null?void 0:Ta.docs)==null?void 0:ya.source}}};var wa,ga,fa;re.parameters={...re.parameters,docs:{...(wa=re.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  name: 'Pied de tableau',
  parameters: componentSource(importFooter, \`<Table caption="Notes du trimestre">
    <TableHeader>
        <TableRow>
            <TableHead>Élève</TableHead>
            <TableHead numeric>Moyenne</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>Ada Lovelace</TableCell>
            <TableCell numeric>18,5</TableCell>
        </TableRow>
    </TableBody>
    <TableFooter>
        <TableRow>
            <TableCell>Moyenne de classe</TableCell>
            <TableCell numeric>17,2</TableCell>
        </TableRow>
    </TableFooter>
</Table>\`),
  render: (args, {
    globals
  }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return <Table {...args} caption={copy.caption}>
        <TableHeader>
          <TableRow>
            <TableHead>{copy.student}</TableHead>
            <TableHead numeric>{copy.average}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{copy.ada}</TableCell>
            <TableCell numeric>{copy.averageAda}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{copy.grace}</TableCell>
            <TableCell numeric>{copy.averageGrace}</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>{copy.classAverage}</TableCell>
            <TableCell numeric>{copy.classAverageValue}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>;
  }
}`,...(fa=(ga=re.parameters)==null?void 0:ga.docs)==null?void 0:fa.source}}};var ha,Ca,xa;oe.parameters={...oe.parameters,docs:{...(ha=oe.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  name: 'En-tête de ligne',
  parameters: componentSource(importTable, \`<Table caption="Planning de la semaine">
    <TableBody>
        <TableRow>
            <TableHead>Lundi</TableHead>
            <TableCell>08:00</TableCell>
            <TableCell>Algèbre linéaire — espaces vectoriels</TableCell>
        </TableRow>
    </TableBody>
</Table>\`),
  render: (args, {
    globals
  }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return <Table {...args} caption={copy.scheduleCaption}>
        <TableBody>
          <TableRow>
            <TableHead>{copy.monday}</TableHead>
            <TableCell>{copy.slotMorning}</TableCell>
            <TableCell>{copy.longModule}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead>{copy.tuesday}</TableHead>
            <TableCell>{copy.slotLate}</TableCell>
            <TableCell>{copy.longModuleTwo}</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(xa=(Ca=oe.parameters)==null?void 0:Ca.docs)==null?void 0:xa.source}}};var va,Ha,ja;te.parameters={...te.parameters,docs:{...(va=te.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importTable, \`<>
    <Table caption="Notes du trimestre" size="sm">
        <TableHeader>
            <TableRow>
                <TableHead>Élève</TableHead>
                <TableHead numeric>Moyenne</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>Ada Lovelace</TableCell>
                <TableCell numeric>18,5</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    <Table caption="Notes du trimestre" size="lg">
        <TableHeader>
            <TableRow>
                <TableHead>Élève</TableHead>
                <TableHead numeric>Moyenne</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>Ada Lovelace</TableCell>
                <TableCell numeric>18,5</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</>\`),
  render: (args, {
    globals
  }) => {
    const copy = tableCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-8">
        {(['sm', 'md', 'lg'] as const).map(size => <Table key={size} {...args} caption={copy.caption} size={size}>
            <TableHeader>
              <TableRow>
                <TableHead>{copy.student}</TableHead>
                <TableHead numeric>{copy.average}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{copy.ada}</TableCell>
                <TableCell numeric>{copy.averageAda}</TableCell>
              </TableRow>
            </TableBody>
          </Table>)}
      </div>;
  }
}`,...(ja=(Ha=te.parameters)==null?void 0:Ha.docs)==null?void 0:ja.source}}};var Ra,Sa,Na;se.parameters={...se.parameters,docs:{...(Ra=se.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  name: 'Colonnes et lignes',
  parameters: componentSource(importColumns, \`<Table
    caption="Commandes du trimestre"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
/>\`, \`const columns = [
    { id: 'reference', header: 'Référence', value: (row) => row.reference },
    { id: 'amount', header: 'Montant', numeric: true, value: (row) => row.amount },
];\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = tableDataCopy(locale);
    return <Table columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} />;
  }
}`,...(Na=(Sa=se.parameters)==null?void 0:Sa.docs)==null?void 0:Na.source}}};var La,Ba,Ia;ce.parameters={...ce.parameters,docs:{...(La=ce.parameters)==null?void 0:La.docs,source:{originalSource:`{
  name: 'Recherche',
  parameters: componentSource(importColumns, \`<Table
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
    const copy = tableDataCopy(locale);
    return <Table columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} toolbar={({
      search,
      setSearch
    }) => <TextInput type="search" label={copy.search} placeholder={copy.searchPlaceholder} value={search} fullWidth={false} onChange={event => setSearch(event.currentTarget.value)} />} />;
  }
}`,...(Ia=(Ba=ce.parameters)==null?void 0:Ba.docs)==null?void 0:Ia.source}}};var Aa,Ma,Ea;ie.parameters={...ie.parameters,docs:{...(Aa=ie.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  name: 'Filtres',
  parameters: componentSource(importColumns, \`<Table
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
    const copy = tableDataCopy(locale);
    return <FilterDemo copy={copy} locale={locale} />;
  }
}`,...(Ea=(Ma=ie.parameters)==null?void 0:Ma.docs)==null?void 0:Ea.source}}};var qa,ka,Da;de.parameters={...de.parameters,docs:{...(qa=de.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  name: 'Tri',
  parameters: componentSource(importColumns, \`<Table
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
    const copy = tableDataCopy(locale);
    return <Table columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} defaultSort={{
      columnId: 'amount',
      direction: 'descending'
    }} locale={locale === 'en' ? 'en' : 'fr'} />;
  }
}`,...(Da=(ka=de.parameters)==null?void 0:ka.docs)==null?void 0:Da.source}}};var _a,za,Pa;be.parameters={...be.parameters,docs:{...(_a=be.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  name: 'Colonne non triable',
  parameters: componentSource(importColumns, \`const columns = [
    ...,
    { id: 'actions', header: 'Actions', value: () => null, sortable: false },
];\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = tableDataCopy(locale);
    return <Table columns={[...columns(copy, locale), {
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
}`,...(Pa=(za=be.parameters)==null?void 0:za.docs)==null?void 0:Pa.source}}};var Fa,Oa,Va;ue.parameters={...ue.parameters,docs:{...(Fa=ue.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  name: 'Sélection de lignes',
  parameters: componentSource(importColumns, \`<Table
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
    const copy = tableDataCopy(locale);
    return <Table columns={columns(copy, locale)} rows={ORDERS.slice(0, 5)} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} selectable rowLabel={row => \`\${row.reference} — \${row.client}\`} defaultSelectedIds={['2']} />;
  }
}`,...(Va=(Oa=ue.parameters)==null?void 0:Oa.docs)==null?void 0:Va.source}}};var $a,Ga,Wa;me.parameters={...me.parameters,docs:{...($a=me.parameters)==null?void 0:$a.docs,source:{originalSource:`{
  name: 'Lignes verrouillées',
  parameters: componentSource(importColumns, \`<Table
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
    const copy = tableDataCopy(locale);
    return <Table columns={columns(copy, locale)} rows={ORDERS.slice(0, 5)} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} selectable rowLabel={row => \`\${row.reference} — \${row.client}\`} isRowLocked={row => row.closed === true} />;
  }
}`,...(Wa=(Ga=me.parameters)==null?void 0:Ga.docs)==null?void 0:Wa.source}}};var Ja,Ka,Ua;pe.parameters={...pe.parameters,docs:{...(Ja=pe.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  name: 'Export',
  parameters: componentSource(importColumns, \`<Table
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
    const copy = tableDataCopy(locale);
    return <ExportDemo copy={copy} locale={locale} />;
  }
}`,...(Ua=(Ka=pe.parameters)==null?void 0:Ka.docs)==null?void 0:Ua.source}}};var Xa,Za,Qa;Te.parameters={...Te.parameters,docs:{...(Xa=Te.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  name: 'Pagination',
  parameters: componentSource(importColumns, \`<Table
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
    const copy = tableDataCopy(locale);
    return <Table columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} pageSize={3} />;
  }
}`,...(Qa=(Za=Te.parameters)==null?void 0:Za.docs)==null?void 0:Qa.source}}};var Ya,el,al;ye.parameters={...ye.parameters,docs:{...(Ya=ye.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  name: 'Avec onglets',
  parameters: componentSource("import { Tab, TabList, TabPanel, Table, Tabs } from 'd-ui';", \`<Tabs defaultValue="all">
    <TabList>
        <Tab value="all">Toutes</Tab>
        <Tab value="late">En retard</Tab>
    </TabList>
    <TabPanel value="all"><Table rows={orders} … /></TabPanel>
    <TabPanel value="late"><Table rows={late} … /></TabPanel>
</Tabs>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = tableDataCopy(locale);
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
            <Table className="mt-4" columns={columns(copy, locale)} rows={group.rows} rowId={row => row.id} caption={\`\${copy.caption} — \${group.label}\`} hideCaption labels={labels(copy)} />
          </TabPanel>)}
      </Tabs>;
  }
}`,...(al=(el=ye.parameters)==null?void 0:el.docs)==null?void 0:al.source}}};var ll,nl,rl;we.parameters={...we.parameters,docs:{...(ll=we.parameters)==null?void 0:ll.docs,source:{originalSource:`{
  name: 'Aucun résultat',
  parameters: componentSource("import { EmptyState, Table } from 'd-ui';", \`<Table
    caption="Commandes"
    columns={columns}
    rows={[]}
    rowId={(row) => row.id}
    empty={<EmptyState title="Aucune commande" description="Élargissez la recherche." />}
/>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = tableDataCopy(locale);
    return <Table columns={columns(copy, locale)} rows={[]} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} empty={<EmptyState title={copy.emptyTitle} description={copy.emptyDescription} />} />;
  }
}`,...(rl=(nl=we.parameters)==null?void 0:nl.docs)==null?void 0:rl.source}}};var ol,tl,sl;ge.parameters={...ge.parameters,docs:{...(ol=ge.parameters)==null?void 0:ol.docs,source:{originalSource:`{
  name: 'Chargement',
  parameters: componentSource(importColumns, \`<Table
    caption="Commandes du trimestre"
    columns={columns}
    rows={orders}
    rowId={(row) => row.id}
    loading
    pageSize={3}
/>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = tableDataCopy(locale);
    return <Table columns={columns(copy, locale)} rows={ORDERS} rowId={row => row.id} caption={copy.caption} labels={labels(copy)} loading pageSize={3} />;
  }
}`,...(sl=(tl=ge.parameters)==null?void 0:tl.docs)==null?void 0:sl.source}}};const cn=["Default","Numeric","Align","Caption","Overflow","Empty","StickyHeader","Footer","RowHeader","Sizes","DataColumns","Search","Filtering","Sorting","NonSortable","SelectingRows","LockedRows","Export","TablePagination","WithTabs","EmptyResults","Loading"],jn=Object.freeze(Object.defineProperty({__proto__:null,Align:Y,Caption:ee,DataColumns:se,Default:Z,Empty:le,EmptyResults:we,Export:pe,Filtering:ie,Footer:re,Loading:ge,LockedRows:me,NonSortable:be,Numeric:Q,Overflow:ae,RowHeader:oe,Search:ce,SelectingRows:ue,Sizes:te,Sorting:de,StickyHeader:ne,TablePagination:Te,WithTabs:ye,__namedExportsOrder:cn,default:nn},Symbol.toStringTag,{value:"Module"}));export{Y as A,ee as C,Z as D,le as E,re as F,me as L,Q as N,ae as O,oe as R,ne as S,jn as T,ye as W,te as a,se as b,de as c,be as d,ce as e,ie as f,ue as g,pe as h,Te as i,ge as j,we as k};
