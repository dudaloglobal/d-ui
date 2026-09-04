import{r as h,j as e,i as C,a7 as i,d as p}from"./iframe-PigAhWKn.js";import{H as ve}from"./arg-types-BX1P8EmD.js";import{c as m}from"./docs-source-C_O40UCi.js";import{E as fe}from"./EmptyState-Ba1PporB.js";import{u as ye}from"./useIsomorphicLayoutEffect-wxJ8LM9u.js";const L=h.createContext(null);function H(n){const o=h.useContext(L);if(!o)throw new Error(`<${n}> doit être rendu à l’intérieur de <Table>.`);return o}const Ce={sm:"px-2 py-1.5 text-sm",md:"px-3 py-2.5 text-base",lg:"px-4 py-3 text-lg"},He={start:"text-start",center:"text-center",end:"text-end"};function we(n,o){return n??(o?"end":"start")}function Ne(n){return n.scrollWidth>n.clientWidth+1||n.scrollHeight>n.clientHeight+1}function d({caption:n,stickyHeader:o=!1,size:a="md",className:t,children:b,"aria-label":c,...z}){const M=h.useId(),E=h.useRef(null),[y,xe]=h.useState(!!n),[q,je]=h.useState(!1);ye(()=>{const k=E.current;if(!k)return;const _=()=>{je(Ne(k))};if(_(),typeof ResizeObserver>"u")return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_);const I=new ResizeObserver(_);return I.observe(k),()=>I.disconnect()},[b,n,a,o]);const Re=y||!!c;return e.jsx(L.Provider,{value:{size:a,stickyHeader:o,captionId:M,section:"table",setHasCaption:xe},children:e.jsx("div",{ref:E,className:C("w-full max-w-full overflow-auto",q&&"focus-visible:ring-focus focus-visible:ring-offset-bg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",t),...q?{tabIndex:0,...Re?{role:"region","aria-labelledby":y?M:void 0,"aria-label":y?void 0:c}:{}}:{},children:e.jsxs("table",{...z,"aria-label":y?void 0:c,className:"w-full min-w-full border-collapse font-sans text-fg",children:[n?e.jsx(F,{children:n}):null,b]})})})}function F({className:n,children:o,...a}){const t=H("TableCaption"),{setHasCaption:b,captionId:c}=t;return ye(()=>(b(!0),()=>b(!1)),[b]),e.jsx("caption",{...a,id:c,className:C("caption-top mb-2 text-start text-sm font-medium text-fg",n),children:o})}function u({className:n,children:o,...a}){const t=H("TableHeader");return e.jsx(L.Provider,{value:{...t,section:"head"},children:e.jsx("thead",{...a,className:C(n),children:o})})}function T({className:n,children:o,...a}){const t=H("TableBody");return e.jsx(L.Provider,{value:{...t,section:"body"},children:e.jsx("tbody",{...a,className:n,children:o})})}function he({className:n,children:o,...a}){const t=H("TableFooter");return e.jsx(L.Provider,{value:{...t,section:"foot"},children:e.jsx("tfoot",{...a,className:C("border-border border-t font-medium",n),children:o})})}function s({className:n,...o}){const{section:a}=H("TableRow");return e.jsx("tr",{...o,className:C(a==="body"&&"hover:bg-surface-muted",n)})}function r({align:n,numeric:o=!1,scope:a,className:t,...b}){const{size:c,stickyHeader:z,section:M}=H("TableHead"),E=we(n,o),y=M==="head";return e.jsx("th",{...b,scope:a??(y?"col":"row"),className:C("border-border text-fg",y?"border-b font-medium":"border-border-subtle border-b",Ce[c],He[E],o&&"tabular-nums whitespace-nowrap",y&&"whitespace-nowrap",z&&y&&"bg-bg sticky top-0 z-10",t)})}function l({align:n,numeric:o=!1,className:a,...t}){const{size:b}=H("TableCell"),c=we(n,o);return e.jsx("td",{...t,className:C("border-border-subtle border-b text-fg",Ce[b],He[c],o&&"tabular-nums whitespace-nowrap",a)})}function ge({colSpan:n,className:o,children:a,...t}){return H("TableEmpty"),e.jsx("tr",{children:e.jsx("td",{...t,colSpan:n,className:C("border-border-subtle p-0",o),children:a})})}d.__docgenInfo={description:"Tableau sémantique (`<table>`) pour des données simples.\n\nLes parties (`TableHeader`, `TableBody`, `TableRow`, `TableHead`,\n`TableCell`, …) partagent densité, alignement numérique et en-tête collant.\nUn débordement réel rend le conteneur tabulable (flèches), nommé par la\nlégende. Tri, filtre et sélection : `DataTable` (DS-042).",methods:[],displayName:"Table",props:{caption:{required:!1,tsType:{name:"ReactNode"},description:"Légende visible (`<caption>`). Nomme le tableau et, en cas de débordement,\nla région défilable (clavier)."},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Garde l’en-tête visible au défilement vertical du conteneur.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};F.__docgenInfo={description:"Légende native. Premier enfant du `<table>` ; porte le nom accessible.",methods:[],displayName:"TableCaption"};u.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};T.__docgenInfo={description:"",methods:[],displayName:"TableBody"};he.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};s.__docgenInfo={description:"",methods:[],displayName:"TableRow"};r.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"Alignement. `numeric` aligne à `end` s’il est omis."},numeric:{required:!1,tsType:{name:"boolean"},description:"Chiffres tabulaires, sans retour à la ligne, alignés à la fin par défaut.",defaultValue:{value:"false",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:""},numeric:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};ge.__docgenInfo={description:"Ligne unique pour un état vide. Composer `EmptyState` (ou `ErrorState`)\nen enfant : `Table` ne couple pas le métier du vide.",methods:[],displayName:"TableEmpty",props:{colSpan:{required:!0,tsType:{name:"number"},description:"Nombre de colonnes à couvrir. Obligatoire : le slot n’invente pas la grille."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const w=`import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,Be=`import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,Ae=`import {
    EmptyState,
    Table,
    TableBody,
    TableCell,
    TableEmpty,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,Se=`import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,Le={title:"Components/Table",component:d,args:{children:e.jsx("span",{})},argTypes:ve},g={name:"Par défaut",parameters:m(w,`<Table caption="Notes du trimestre">
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
</Table>`),render:(n,{globals:o})=>{const a=i(p(o.locale));return e.jsxs(d,{...n,caption:a.caption,children:[e.jsx(u,{children:e.jsxs(s,{children:[e.jsx(r,{children:a.student}),e.jsx(r,{children:a.average}),e.jsx(r,{children:a.status})]})}),e.jsxs(T,{children:[e.jsxs(s,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{children:a.averageAda}),e.jsx(l,{children:a.admitted})]}),e.jsxs(s,{children:[e.jsx(l,{children:a.grace}),e.jsx(l,{children:a.averageGrace}),e.jsx(l,{children:a.admitted})]}),e.jsxs(s,{children:[e.jsx(l,{children:a.katherine}),e.jsx(l,{children:a.averageKatherine}),e.jsx(l,{children:a.admitted})]})]})]})}},x={name:"Alignement numérique",parameters:m(w,`<Table caption="Notes du trimestre">
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
</Table>`),render:(n,{globals:o})=>{const a=i(p(o.locale));return e.jsxs(d,{...n,caption:a.caption,children:[e.jsx(u,{children:e.jsxs(s,{children:[e.jsx(r,{children:a.student}),e.jsx(r,{numeric:!0,children:a.average}),e.jsx(r,{numeric:!0,children:a.hours})]})}),e.jsxs(T,{children:[e.jsxs(s,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{numeric:!0,children:a.averageAda}),e.jsx(l,{numeric:!0,children:a.hoursAda})]}),e.jsxs(s,{children:[e.jsx(l,{children:a.grace}),e.jsx(l,{numeric:!0,children:a.averageGrace}),e.jsx(l,{numeric:!0,children:a.hoursGrace})]})]})]})}},j={name:"Alignements",parameters:m(w,`<Table caption="Notes du trimestre">
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
</Table>`),render:(n,{globals:o})=>{const a=i(p(o.locale));return e.jsxs(d,{...n,caption:a.caption,children:[e.jsx(u,{children:e.jsxs(s,{children:[e.jsx(r,{children:a.student}),e.jsx(r,{align:"center",children:a.status}),e.jsx(r,{numeric:!0,children:a.average})]})}),e.jsxs(T,{children:[e.jsxs(s,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{align:"center",children:a.admitted}),e.jsx(l,{numeric:!0,children:a.averageAda})]}),e.jsxs(s,{children:[e.jsx(l,{children:a.grace}),e.jsx(l,{align:"center",children:a.admitted}),e.jsx(l,{numeric:!0,children:a.averageGrace})]})]})]})}},R={name:"Légende",parameters:m(Be,`<Table>
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
</Table>`),render:(n,{globals:o})=>{const a=i(p(o.locale)),{caption:t,...b}=n;return e.jsxs(d,{...b,children:[e.jsx(F,{children:a.caption}),e.jsx(u,{children:e.jsxs(s,{children:[e.jsx(r,{children:a.student}),e.jsx(r,{children:a.status})]})}),e.jsx(T,{children:e.jsxs(s,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{children:a.admitted})]})})]})}},v={name:"Débordement",parameters:m(w,`<Table caption="Planning de la semaine" className="max-w-md">
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
</Table>`),render:(n,{globals:o})=>{const a=i(p(o.locale));return e.jsxs(d,{...n,caption:a.scheduleCaption,className:"max-w-md",children:[e.jsx(u,{children:e.jsxs(s,{children:[e.jsx(r,{children:a.module}),e.jsx(r,{children:a.monday}),e.jsx(r,{children:a.tuesday}),e.jsx(r,{children:a.wednesday}),e.jsx(r,{children:a.thursday}),e.jsx(r,{children:a.friday})]})}),e.jsxs(T,{children:[e.jsxs(s,{children:[e.jsx(l,{className:"whitespace-nowrap",children:a.longModule}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotLate}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotAfternoon}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotMid})]}),e.jsxs(s,{children:[e.jsx(l,{className:"whitespace-nowrap",children:a.longModuleTwo}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotAfternoon}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotLate}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotAfternoon})]})]})]})}},f={name:"État vide",parameters:m(Ae,`<Table caption="Notes du trimestre">
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
</Table>`),render:(n,{globals:o})=>{const a=i(p(o.locale));return e.jsxs(d,{...n,caption:a.caption,children:[e.jsx(u,{children:e.jsxs(s,{children:[e.jsx(r,{children:a.student}),e.jsx(r,{children:a.average}),e.jsx(r,{children:a.status})]})}),e.jsx(T,{children:e.jsx(ge,{colSpan:3,children:e.jsx(fe,{title:a.emptyTitle,description:a.emptyDescription})})})]})}},N={name:"En-tête collant",parameters:m(w,`<Table caption="Notes du trimestre" stickyHeader className="max-h-56">
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
</Table>`),render:(n,{globals:o})=>{const a=i(p(o.locale)),t=[a.ada,a.grace,a.katherine,a.annie,a.hypatia,a.emmy,a.sofia,a.maryam];return e.jsxs(d,{...n,caption:a.caption,stickyHeader:!0,className:"max-h-56",children:[e.jsx(u,{children:e.jsxs(s,{children:[e.jsx(r,{children:a.student}),e.jsx(r,{numeric:!0,children:a.average}),e.jsx(r,{children:a.status})]})}),e.jsx(T,{children:t.map((b,c)=>e.jsxs(s,{children:[e.jsx(l,{children:b}),e.jsx(l,{numeric:!0,children:a.stickyAverages[c]}),e.jsx(l,{children:a.admitted})]},b))})]})}},B={name:"Pied de tableau",parameters:m(Se,`<Table caption="Notes du trimestre">
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
</Table>`),render:(n,{globals:o})=>{const a=i(p(o.locale));return e.jsxs(d,{...n,caption:a.caption,children:[e.jsx(u,{children:e.jsxs(s,{children:[e.jsx(r,{children:a.student}),e.jsx(r,{numeric:!0,children:a.average})]})}),e.jsxs(T,{children:[e.jsxs(s,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{numeric:!0,children:a.averageAda})]}),e.jsxs(s,{children:[e.jsx(l,{children:a.grace}),e.jsx(l,{numeric:!0,children:a.averageGrace})]})]}),e.jsx(he,{children:e.jsxs(s,{children:[e.jsx(l,{children:a.classAverage}),e.jsx(l,{numeric:!0,children:a.classAverageValue})]})})]})}},A={name:"En-tête de ligne",parameters:m(w,`<Table caption="Planning de la semaine">
    <TableBody>
        <TableRow>
            <TableHead>Lundi</TableHead>
            <TableCell>08:00</TableCell>
            <TableCell>Algèbre linéaire — espaces vectoriels</TableCell>
        </TableRow>
    </TableBody>
</Table>`),render:(n,{globals:o})=>{const a=i(p(o.locale));return e.jsx(d,{...n,caption:a.scheduleCaption,children:e.jsxs(T,{children:[e.jsxs(s,{children:[e.jsx(r,{children:a.monday}),e.jsx(l,{children:a.slotMorning}),e.jsx(l,{children:a.longModule})]}),e.jsxs(s,{children:[e.jsx(r,{children:a.tuesday}),e.jsx(l,{children:a.slotLate}),e.jsx(l,{children:a.longModuleTwo})]})]})})}},S={name:"Tailles",parameters:m(w,`<>
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
</>`),render:(n,{globals:o})=>{const a=i(p(o.locale));return e.jsx("div",{className:"flex flex-col gap-8",children:["sm","md","lg"].map(t=>e.jsxs(d,{...n,caption:a.caption,size:t,children:[e.jsx(u,{children:e.jsxs(s,{children:[e.jsx(r,{children:a.student}),e.jsx(r,{numeric:!0,children:a.average})]})}),e.jsx(T,{children:e.jsxs(s,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{numeric:!0,children:a.averageAda})]})})]},t))})}};var P,G,O;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(G=g.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var D,V,J;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(J=(V=x.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var K,W,U;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(W=j.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var $,Q,X;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,ne;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var oe,re,se;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=N.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,be,de;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(de=(be=B.parameters)==null?void 0:be.docs)==null?void 0:de.source}}};var ce,Te,ie;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ie=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:ie.source}}};var pe,me,ue;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(me=S.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};const Me=["Default","Numeric","Align","Caption","Overflow","Empty","StickyHeader","Footer","RowHeader","Sizes"],qe=Object.freeze(Object.defineProperty({__proto__:null,Align:j,Caption:R,Default:g,Empty:f,Footer:B,Numeric:x,Overflow:v,RowHeader:A,Sizes:S,StickyHeader:N,__namedExportsOrder:Me,default:Le},Symbol.toStringTag,{value:"Module"}));export{j as A,R as C,g as D,f as E,B as F,x as N,v as O,A as R,N as S,qe as T,S as a};
