import{B as d,d as s,j as e}from"./iframe-CSDJ8R1k.js";import{t as ne}from"./arg-types-B_nef0fB.js";import{c}from"./docs-source-C_O40UCi.js";import{E as oe}from"./EmptyState-C7sHga_F.js";import{T,a as i,b as o,c as n,d as t,e as l,f as re,g as be,h as Te}from"./Table-CcXgLLi3.js";const p=`import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,de=`import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,se=`import {
    EmptyState,
    Table,
    TableBody,
    TableCell,
    TableEmpty,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,ce=`import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from 'd-ui';`,te={title:"Components/Table",component:T,args:{children:e.jsx("span",{})},argTypes:ne},y={name:"Par défaut",parameters:c(p,`<Table caption="Notes du trimestre">
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
</Table>`),render:(r,{globals:b})=>{const a=d(s(b.locale));return e.jsxs(T,{...r,caption:a.caption,children:[e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(n,{children:a.student}),e.jsx(n,{children:a.average}),e.jsx(n,{children:a.status})]})}),e.jsxs(t,{children:[e.jsxs(o,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{children:a.averageAda}),e.jsx(l,{children:a.admitted})]}),e.jsxs(o,{children:[e.jsx(l,{children:a.grace}),e.jsx(l,{children:a.averageGrace}),e.jsx(l,{children:a.admitted})]}),e.jsxs(o,{children:[e.jsx(l,{children:a.katherine}),e.jsx(l,{children:a.averageKatherine}),e.jsx(l,{children:a.admitted})]})]})]})}},u={name:"Alignement numérique",parameters:c(p,`<Table caption="Notes du trimestre">
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
</Table>`),render:(r,{globals:b})=>{const a=d(s(b.locale));return e.jsxs(T,{...r,caption:a.caption,children:[e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(n,{children:a.student}),e.jsx(n,{numeric:!0,children:a.average}),e.jsx(n,{numeric:!0,children:a.hours})]})}),e.jsxs(t,{children:[e.jsxs(o,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{numeric:!0,children:a.averageAda}),e.jsx(l,{numeric:!0,children:a.hoursAda})]}),e.jsxs(o,{children:[e.jsx(l,{children:a.grace}),e.jsx(l,{numeric:!0,children:a.averageGrace}),e.jsx(l,{numeric:!0,children:a.hoursGrace})]})]})]})}},C={name:"Alignements",parameters:c(p,`<Table caption="Notes du trimestre">
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
</Table>`),render:(r,{globals:b})=>{const a=d(s(b.locale));return e.jsxs(T,{...r,caption:a.caption,children:[e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(n,{children:a.student}),e.jsx(n,{align:"center",children:a.status}),e.jsx(n,{numeric:!0,children:a.average})]})}),e.jsxs(t,{children:[e.jsxs(o,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{align:"center",children:a.admitted}),e.jsx(l,{numeric:!0,children:a.averageAda})]}),e.jsxs(o,{children:[e.jsx(l,{children:a.grace}),e.jsx(l,{align:"center",children:a.admitted}),e.jsx(l,{numeric:!0,children:a.averageGrace})]})]})]})}},H={name:"Légende",parameters:c(de,`<Table>
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
</Table>`),render:(r,{globals:b})=>{const a=d(s(b.locale)),{caption:m,...v}=r;return e.jsxs(T,{...v,children:[e.jsx(re,{children:a.caption}),e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(n,{children:a.student}),e.jsx(n,{children:a.status})]})}),e.jsx(t,{children:e.jsxs(o,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{children:a.admitted})]})})]})}},w={name:"Débordement",parameters:c(p,`<Table caption="Planning de la semaine" className="max-w-md">
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
</Table>`),render:(r,{globals:b})=>{const a=d(s(b.locale));return e.jsxs(T,{...r,caption:a.scheduleCaption,className:"max-w-md",children:[e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(n,{children:a.module}),e.jsx(n,{children:a.monday}),e.jsx(n,{children:a.tuesday}),e.jsx(n,{children:a.wednesday}),e.jsx(n,{children:a.thursday}),e.jsx(n,{children:a.friday})]})}),e.jsxs(t,{children:[e.jsxs(o,{children:[e.jsx(l,{className:"whitespace-nowrap",children:a.longModule}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotLate}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotAfternoon}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotMid})]}),e.jsxs(o,{children:[e.jsx(l,{className:"whitespace-nowrap",children:a.longModuleTwo}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotAfternoon}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotLate}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotMorning}),e.jsx(l,{className:"whitespace-nowrap",children:a.slotAfternoon})]})]})]})}},h={name:"État vide",parameters:c(se,`<Table caption="Notes du trimestre">
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
</Table>`),render:(r,{globals:b})=>{const a=d(s(b.locale));return e.jsxs(T,{...r,caption:a.caption,children:[e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(n,{children:a.student}),e.jsx(n,{children:a.average}),e.jsx(n,{children:a.status})]})}),e.jsx(t,{children:e.jsx(be,{colSpan:3,children:e.jsx(oe,{title:a.emptyTitle,description:a.emptyDescription})})})]})}},g={name:"En-tête collant",parameters:c(p,`<Table caption="Notes du trimestre" stickyHeader className="max-h-56">
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
</Table>`),render:(r,{globals:b})=>{const a=d(s(b.locale)),m=[a.ada,a.grace,a.katherine,a.annie,a.hypatia,a.emmy,a.sofia,a.maryam];return e.jsxs(T,{...r,caption:a.caption,stickyHeader:!0,className:"max-h-56",children:[e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(n,{children:a.student}),e.jsx(n,{numeric:!0,children:a.average}),e.jsx(n,{children:a.status})]})}),e.jsx(t,{children:m.map((v,le)=>e.jsxs(o,{children:[e.jsx(l,{children:v}),e.jsx(l,{numeric:!0,children:a.stickyAverages[le]}),e.jsx(l,{children:a.admitted})]},v))})]})}},x={name:"Pied de tableau",parameters:c(ce,`<Table caption="Notes du trimestre">
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
</Table>`),render:(r,{globals:b})=>{const a=d(s(b.locale));return e.jsxs(T,{...r,caption:a.caption,children:[e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(n,{children:a.student}),e.jsx(n,{numeric:!0,children:a.average})]})}),e.jsxs(t,{children:[e.jsxs(o,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{numeric:!0,children:a.averageAda})]}),e.jsxs(o,{children:[e.jsx(l,{children:a.grace}),e.jsx(l,{numeric:!0,children:a.averageGrace})]})]}),e.jsx(Te,{children:e.jsxs(o,{children:[e.jsx(l,{children:a.classAverage}),e.jsx(l,{numeric:!0,children:a.classAverageValue})]})})]})}},R={name:"En-tête de ligne",parameters:c(p,`<Table caption="Planning de la semaine">
    <TableBody>
        <TableRow>
            <TableHead>Lundi</TableHead>
            <TableCell>08:00</TableCell>
            <TableCell>Algèbre linéaire — espaces vectoriels</TableCell>
        </TableRow>
    </TableBody>
</Table>`),render:(r,{globals:b})=>{const a=d(s(b.locale));return e.jsx(T,{...r,caption:a.scheduleCaption,children:e.jsxs(t,{children:[e.jsxs(o,{children:[e.jsx(n,{children:a.monday}),e.jsx(l,{children:a.slotMorning}),e.jsx(l,{children:a.longModule})]}),e.jsxs(o,{children:[e.jsx(n,{children:a.tuesday}),e.jsx(l,{children:a.slotLate}),e.jsx(l,{children:a.longModuleTwo})]})]})})}},j={name:"Tailles",parameters:c(p,`<>
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
</>`),render:(r,{globals:b})=>{const a=d(s(b.locale));return e.jsx("div",{className:"flex flex-col gap-8",children:["sm","md","lg"].map(m=>e.jsxs(T,{...r,caption:a.caption,size:m,children:[e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(n,{children:a.student}),e.jsx(n,{numeric:!0,children:a.average})]})}),e.jsx(t,{children:e.jsxs(o,{children:[e.jsx(l,{children:a.ada}),e.jsx(l,{numeric:!0,children:a.averageAda})]})})]},m))})}};var B,A,N;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(N=(A=y.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var S,M,L;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var f,E,k;C.parameters={...C.parameters,docs:{...(f=C.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(E=C.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var F,z,G;H.parameters={...H.parameters,docs:{...(F=H.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(z=H.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var P,_,D;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(_=w.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var O,V,q;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(V=h.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var J,K,I;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(I=(K=g.parameters)==null?void 0:K.docs)==null?void 0:I.source}}};var Q,U,W;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(U=x.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const ie=["Default","Numeric","Align","Caption","Overflow","Empty","StickyHeader","Footer","RowHeader","Sizes"],He=Object.freeze(Object.defineProperty({__proto__:null,Align:C,Caption:H,Default:y,Empty:h,Footer:x,Numeric:u,Overflow:w,RowHeader:R,Sizes:j,StickyHeader:g,__namedExportsOrder:ie,default:te},Symbol.toStringTag,{value:"Module"}));export{C as A,H as C,y as D,h as E,x as F,u as N,w as O,R,g as S,He as T,j as a};
