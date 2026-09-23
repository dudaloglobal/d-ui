import{r as C,j as e,d,al as c}from"./iframe-BTNaxqGu.js";import{H as Q}from"./Heading-CIPfOqfd.js";import{L as ue}from"./Link-_E_HUw5G.js";import{T as D}from"./Text-Djd8TKif.js";import{C as ee}from"./Calendar-CuRA7p5V.js";import{c as te}from"./calendarDate-jCkUcsyL.js";import{U as pe}from"./arg-types-CcAGxubR.js";import{b as ae,c as u}from"./docs-source-C_O40UCi.js";const ye=["lecture","tutorial","lab","exam","other"],ve={lecture:"Lecture",tutorial:"Tutorial",lab:"Lab",exam:"Exam",other:"Event"};function i({title:t,course:r,location:a,type:n="lecture",typeLabel:s,start:l,end:o,size:E="md",className:T,...ce}){const k=C.useId(),me=["d-ui-edu-event",`d-ui-edu-event--${E}`,T].filter(Boolean).join(" ");return e.jsxs("article",{...ce,"aria-labelledby":k,"data-type":n,className:me,children:[e.jsxs("p",{className:"d-ui-edu-event__meta",children:[l?e.jsxs("span",{className:"d-ui-edu-event__time",children:[e.jsx("time",{dateTime:l,children:l}),o?e.jsxs(e.Fragment,{children:[" – ",e.jsx("time",{dateTime:o,children:o})]}):null]}):null,e.jsxs("span",{className:"d-ui-edu-event__type",children:[e.jsx("span",{className:"d-ui-edu-event__dot","aria-hidden":"true"}),s??ve[n]]})]}),e.jsx("p",{id:k,className:"d-ui-edu-event__title",children:t}),r?e.jsx("p",{className:"d-ui-edu-event__detail",children:r}):null,a?e.jsx("p",{className:"d-ui-edu-event__detail",children:a}):null]})}i.__docgenInfo={description:`Séance d’emploi du temps : intitulé, cours, lieu, horaire et type.

Un élément d’affichage, pas un agenda : il ne se positionne pas sur une
grille horaire et ne gère ni glisser-déposer ni récurrence. L’app compose
\`Calendar\` (choix du jour) et une liste de \`CalendarEvent\` pour la vue jour
ou semaine.`,methods:[],displayName:"CalendarEvent",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"Intitulé de la séance. Nom accessible de l’`<article>`."},course:{required:!1,tsType:{name:"ReactNode"},description:"Cours ou matière (code, intitulé)."},location:{required:!1,tsType:{name:"ReactNode"},description:"Salle, amphi ou lien de visio."},type:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CALENDAR_EVENT_TYPES)[number]"},description:'Nature de la séance. Choisit la couleur (jeton `--d-ui-edu-event-<type>`).\n`"lecture"` par défaut.',defaultValue:{value:"'lecture'",computed:!1}},typeLabel:{required:!1,tsType:{name:"string"},description:"Libellé visible du type : c’est lui qui porte le sens, pas la couleur\n(WCAG 1.4.1). Fallback anglais : `Lecture`, `Tutorial`, `Lab`, `Exam`, `Event`."},start:{required:!1,tsType:{name:"string"},description:"Début, heure civile `HH:mm`. Rendue dans un `<time>`."},end:{required:!1,tsType:{name:"string"},description:"Fin, heure civile `HH:mm`. Ignorée sans `start`."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:'`"sm"` pour une colonne de semaine, `"md"` (défaut) pour une vue jour.',defaultValue:{value:"'md'",computed:!1}}}};function m(t,r){return{display:"flex",flexDirection:"column",gap:t,...r}}const re={listStyle:"none",margin:0,padding:0},L="import { CalendarEvent } from 'd-ui-education';",ne=`import { Calendar, calendarDateToIso } from 'd-ui';
import { CalendarEvent } from 'd-ui-education';`,S=864e5,j={year:2026,month:3,day:18},se={year:2026,month:3,day:1};function le(t){return Date.UTC(t.year,t.month-1,t.day)}function ge(t){const r=new Date(t);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate()}}function he(t){const r=le(t),a=r-(new Date(r).getUTCDay()+6)%7*S;return Array.from({length:5},(n,s)=>ge(a+s*S))}function oe(t,r){return new Intl.DateTimeFormat(r,{weekday:"long",day:"numeric",month:"long",timeZone:"UTC"}).format(new Date(le(t)))}function be(t){return t.charAt(0).toLocaleUpperCase()+t.slice(1)}function ie(t,r){const a=te(t);return r.sessions.filter(n=>n.date===a).sort((n,s)=>n.start.localeCompare(s.start))}function de({sessions:t,copy:r,size:a}){return t.length===0?e.jsx(D,{size:"body-sm",tone:"muted",children:r.noSession}):e.jsx("ol",{style:m("0.5rem",re),children:t.map(n=>e.jsx("li",{children:e.jsx(i,{size:a,type:n.type,typeLabel:r.typeLabels[n.type],title:n.title,course:n.course,location:n.location,start:n.start,end:n.end})},`${n.date}-${n.start}`))})}const fe={title:"Education/CalendarEvent",component:i,argTypes:pe,args:{title:"Algorithmique",type:"lecture",start:"08:00",end:"10:00",size:"md"},parameters:{controls:{include:["title","course","location","type","typeLabel","start","end","size"]}}},p={name:"Par défaut",parameters:u(L,`<CalendarEvent
    title="Algorithmique"
    course="INF-201 · L2 Informatique"
    location="Amphi A"
    type="lecture"
    typeLabel="Cours magistral"
    start="08:00"
    end="10:00"
/>`),render:(t,{globals:r})=>{const a=c(d(r.locale)),n=t.type??"lecture";return e.jsx("div",{style:{maxWidth:"20rem"},children:e.jsx(i,{...t,title:a.title,course:a.course,location:a.location,typeLabel:t.typeLabel??a.typeLabels[n]})})}},y={name:"Types de séance",parameters:u(L,`<CalendarEvent type="lecture" typeLabel="Cours magistral" title="Algorithmique" start="08:00" end="10:00" />
<CalendarEvent type="tutorial" typeLabel="TD" title="Algorithmique — TD groupe 2" start="10:15" end="12:15" />
<CalendarEvent type="lab" typeLabel="TP" title="Programmation web" start="14:00" end="17:00" />
<CalendarEvent type="exam" typeLabel="Examen" title="Partiel d’algorithmique" start="09:00" end="11:00" />
<CalendarEvent type="other" typeLabel="Autre" title="Permanence de tutorat" start="14:00" end="16:00" />`),render:(t,{globals:r})=>{const a=c(d(r.locale));return e.jsx("ul",{style:{...re,display:"grid",gap:"0.75rem",gridTemplateColumns:"repeat(auto-fill, minmax(16rem, 1fr))",maxWidth:"48rem"},children:ye.map(n=>{const s=a.sessions.find(l=>l.type===n);return e.jsx("li",{children:e.jsx(i,{...t,type:n,typeLabel:a.typeLabels[n],title:s.title,course:s.course,location:s.location,start:s.start,end:s.end})},n)})})}},v={name:"Couleur par jeton",parameters:u(L,`<div style={{ '--d-ui-edu-event-exam': 'var(--d-ui-color-link-visited)' }}>
    <CalendarEvent type="exam" typeLabel="Examen" title="Partiel d’algorithmique" start="09:00" end="11:00" />
</div>`),render:(t,{globals:r})=>{const a=c(d(r.locale)),n=a.sessions.find(l=>l.type==="exam"),s={"--d-ui-edu-event-exam":"var(--d-ui-color-link-visited)"};return e.jsxs("div",{style:m("0.5rem",{...s,maxWidth:"20rem"}),children:[e.jsx(D,{size:"body-sm",tone:"muted",children:a.customised}),e.jsx("div",{children:e.jsx(i,{...t,type:"exam",typeLabel:a.typeLabels.exam,title:n.title,course:n.course,location:n.location,start:n.start,end:n.end})})]})}},g={name:"Contenu minimal",parameters:u(L,`<CalendarEvent title="Algorithmique" />
<CalendarEvent title="Algorithmique" start="08:00" />`),render:(t,{globals:r})=>{const a=c(d(r.locale));return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",gap:"1rem"},children:[e.jsx("div",{style:{width:"14rem"},children:e.jsx(i,{title:a.title})}),e.jsx("div",{style:{width:"14rem"},children:e.jsx(i,{title:a.title,start:"08:00"})})]})}},h={name:"Avec lien",parameters:u(`import { Link } from 'd-ui';
import { CalendarEvent } from 'd-ui-education';`,`<CalendarEvent
    title={<Link href="/seances/inf-201-2026-03-18">Algorithmique</Link>}
    course="INF-201 · L2 Informatique"
    location="Amphi A"
    typeLabel="Cours magistral"
    start="08:00"
    end="10:00"
/>`),render:(t,{globals:r})=>{const a=c(d(r.locale));return e.jsx("div",{style:{maxWidth:"20rem"},children:e.jsx(i,{...t,title:e.jsx(ue,{href:"#seance-inf-201",children:a.openDetails}),course:a.course,location:a.location,typeLabel:a.typeLabels.lecture})})}},b={name:"Tailles",parameters:u(L,`<CalendarEvent size="sm" title="Algorithmique" start="08:00" end="10:00" />
<CalendarEvent size="md" title="Algorithmique" start="08:00" end="10:00" />`),render:(t,{globals:r})=>{const a=c(d(r.locale));return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",gap:"1rem"},children:["sm","md"].map(n=>e.jsxs("div",{style:m("0.25rem",{width:"14rem"}),children:[e.jsx(D,{size:"caption",tone:"muted",children:n==="sm"?a.small:a.medium}),e.jsx(i,{...t,size:n,typeLabel:a.typeLabels.lecture,title:a.title,course:a.course,location:a.location})]},n))})}};function xe({locale:t}){const r=c(t),[a,n]=C.useState(j),s=C.useId();return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",gap:"1.5rem"},children:[e.jsx(ee,{value:a,onValueChange:l=>{"year"in l&&n(l)},defaultMonth:se,today:j,locale:t,weekStartsOn:1,size:"sm"}),e.jsxs("section",{"aria-labelledby":s,style:m("0.75rem",{width:"18rem"}),children:[e.jsx(Q,{level:3,size:"body",bold:!0,id:s,children:r.sessionsOf(oe(a,t))}),e.jsx(de,{sessions:ie(a,r),copy:r,size:"md"})]})]})}const f={name:"Vue jour",parameters:ae(ne,`const [day, setDay] = useState(today);
const sessions = timetable
    .filter((session) => session.date === calendarDateToIso(day))
    .sort((a, b) => a.start.localeCompare(b.start));

return (
    <>
        <Calendar
            value={day}
            // \`onValueChange\` reçoit aussi une plage \`{ start, end }\` : on ne garde qu’une date.
            onValueChange={(value) => {
                if ('year' in value) setDay(value);
            }}
            locale="fr"
            weekStartsOn={1}
            size="sm"
        />
        <section aria-labelledby="day-title">
            <h3 id="day-title">Séances du mercredi 18 mars</h3>
            <ol>
                {sessions.map((session) => (
                    <li key={session.id}>
                        <CalendarEvent {...session} typeLabel={typeLabels[session.type]} />
                    </li>
                ))}
            </ol>
        </section>
    </>
);`),render:(t,{globals:r})=>e.jsx(xe,{locale:d(r.locale)})};function Ce({locale:t}){const r=c(t),[a,n]=C.useState(j),s=C.useId(),l=he(a);return e.jsxs("div",{style:m("1.5rem"),children:[e.jsx(ee,{value:a,onValueChange:o=>{"year"in o&&n(o)},defaultMonth:se,today:j,locale:t,weekStartsOn:1,size:"sm"}),e.jsx("div",{style:{display:"grid",gap:"0.75rem",gridTemplateColumns:"repeat(5, minmax(8.5rem, 1fr))",overflowX:"auto"},children:l.map(o=>{const E=te(o),T=`${s}-${E}`;return e.jsxs("section",{"aria-labelledby":T,style:m("0.5rem",{minWidth:0}),children:[e.jsx(Q,{level:3,size:"body",bold:!0,id:T,children:be(oe(o,t))}),e.jsx(de,{sessions:ie(o,r),copy:r,size:"sm"})]},E)})})]})}const x={name:"Vue semaine",parameters:ae(ne,`const [day, setDay] = useState(today);
const week = weekdaysOf(day); // lundi → vendredi, calculé par l’app

return (
    <>
        <Calendar
            value={day}
            // \`onValueChange\` reçoit aussi une plage \`{ start, end }\` : on ne garde qu’une date.
            onValueChange={(value) => {
                if ('year' in value) setDay(value);
            }}
            locale="fr"
            weekStartsOn={1}
            size="sm"
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem' }}>
            {week.map((date) => (
                <section key={calendarDateToIso(date)} aria-labelledby={\`day-\${calendarDateToIso(date)}\`}>
                    <h3 id={\`day-\${calendarDateToIso(date)}\`}>{formatDay(date)}</h3>
                    <ol>
                        {sessionsOn(date).map((session) => (
                            <li key={session.id}>
                                <CalendarEvent size="sm" {...session} typeLabel={typeLabels[session.type]} />
                            </li>
                        ))}
                    </ol>
                </section>
            ))}
        </div>
    </>
);`),render:(t,{globals:r})=>e.jsx(Ce,{locale:d(r.locale)})};var w,A,q;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importEvent, \`<CalendarEvent
    title="Algorithmique"
    course="INF-201 · L2 Informatique"
    location="Amphi A"
    type="lecture"
    typeLabel="Cours magistral"
    start="08:00"
    end="10:00"
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = calendarEventCopy(docsLocale(globals.locale));
    const type = args.type ?? 'lecture';
    return <div style={{
      maxWidth: '20rem'
    }}>
        <CalendarEvent {...args} title={copy.title} course={copy.course} location={copy.location} typeLabel={args.typeLabel ?? copy.typeLabels[type]} />
      </div>;
  }
}`,...(q=(A=p.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var _,I,z;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Types de séance',
  parameters: componentSource(importEvent, \`<CalendarEvent type="lecture" typeLabel="Cours magistral" title="Algorithmique" start="08:00" end="10:00" />
<CalendarEvent type="tutorial" typeLabel="TD" title="Algorithmique — TD groupe 2" start="10:15" end="12:15" />
<CalendarEvent type="lab" typeLabel="TP" title="Programmation web" start="14:00" end="17:00" />
<CalendarEvent type="exam" typeLabel="Examen" title="Partiel d’algorithmique" start="09:00" end="11:00" />
<CalendarEvent type="other" typeLabel="Autre" title="Permanence de tutorat" start="14:00" end="16:00" />\`),
  render: (args, {
    globals
  }) => {
    const copy = calendarEventCopy(docsLocale(globals.locale));
    return <ul style={{
      ...bareList,
      display: 'grid',
      gap: '0.75rem',
      gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
      maxWidth: '48rem'
    }}>
        {CALENDAR_EVENT_TYPES.map(type => {
        const session = copy.sessions.find(item => item.type === type)!;
        return <li key={type}>
              <CalendarEvent {...args} type={type} typeLabel={copy.typeLabels[type]} title={session.title} course={session.course} location={session.location} start={session.start} end={session.end} />
            </li>;
      })}
      </ul>;
  }
}`,...(z=(I=y.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var V,N,W;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Couleur par jeton',
  parameters: componentSource(importEvent, \`<div style={{ '--d-ui-edu-event-exam': 'var(--d-ui-color-link-visited)' }}>
    <CalendarEvent type="exam" typeLabel="Examen" title="Partiel d’algorithmique" start="09:00" end="11:00" />
</div>\`),
  render: (args, {
    globals
  }) => {
    const copy = calendarEventCopy(docsLocale(globals.locale));
    const exam = copy.sessions.find(item => item.type === 'exam')!;
    const override = {
      '--d-ui-edu-event-exam': 'var(--d-ui-color-link-visited)'
    } as CSSProperties;
    return <div style={stack('0.5rem', {
      ...override,
      maxWidth: '20rem'
    })}>
        <Text size="body-sm" tone="muted">
          {copy.customised}
        </Text>
        <div>
          <CalendarEvent {...args} type="exam" typeLabel={copy.typeLabels.exam} title={exam.title} course={exam.course} location={exam.location} start={exam.start} end={exam.end} />
        </div>
      </div>;
  }
}`,...(W=(N=v.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var O,P,F;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Contenu minimal',
  parameters: componentSource(importEvent, \`<CalendarEvent title="Algorithmique" />
<CalendarEvent title="Algorithmique" start="08:00" />\`),
  render: (_args, {
    globals
  }) => {
    const copy = calendarEventCopy(docsLocale(globals.locale));
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      gap: '1rem'
    }}>
        <div style={{
        width: '14rem'
      }}>
          <CalendarEvent title={copy.title} />
        </div>
        <div style={{
        width: '14rem'
      }}>
          <CalendarEvent title={copy.title} start="08:00" />
        </div>
      </div>;
  }
}`,...(F=(P=g.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var U,$,M;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Avec lien',
  parameters: componentSource("import { Link } from 'd-ui';\\nimport { CalendarEvent } from 'd-ui-education';", \`<CalendarEvent
    title={<Link href="/seances/inf-201-2026-03-18">Algorithmique</Link>}
    course="INF-201 · L2 Informatique"
    location="Amphi A"
    typeLabel="Cours magistral"
    start="08:00"
    end="10:00"
/>\`),
  render: (args, {
    globals
  }) => {
    const copy = calendarEventCopy(docsLocale(globals.locale));
    return <div style={{
      maxWidth: '20rem'
    }}>
        <CalendarEvent {...args} title={<Link href="#seance-inf-201">{copy.openDetails}</Link>} course={copy.course} location={copy.location} typeLabel={copy.typeLabels.lecture} />
      </div>;
  }
}`,...(M=($=h.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var R,H,Y;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importEvent, \`<CalendarEvent size="sm" title="Algorithmique" start="08:00" end="10:00" />
<CalendarEvent size="md" title="Algorithmique" start="08:00" end="10:00" />\`),
  render: (args, {
    globals
  }) => {
    const copy = calendarEventCopy(docsLocale(globals.locale));
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      gap: '1rem'
    }}>
        {(['sm', 'md'] as const).map(size => <div key={size} style={stack('0.25rem', {
        width: '14rem'
      })}>
            <Text size="caption" tone="muted">
              {size === 'sm' ? copy.small : copy.medium}
            </Text>
            <CalendarEvent {...args} size={size} typeLabel={copy.typeLabels.lecture} title={copy.title} course={copy.course} location={copy.location} />
          </div>)}
      </div>;
  }
}`,...(Y=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var B,G,X;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Vue jour',
  parameters: componentSourceFn(importComposition, \`const [day, setDay] = useState(today);
const sessions = timetable
    .filter((session) => session.date === calendarDateToIso(day))
    .sort((a, b) => a.start.localeCompare(b.start));

return (
    <>
        <Calendar
            value={day}
            // \\\`onValueChange\\\` reçoit aussi une plage \\\`{ start, end }\\\` : on ne garde qu’une date.
            onValueChange={(value) => {
                if ('year' in value) setDay(value);
            }}
            locale="fr"
            weekStartsOn={1}
            size="sm"
        />
        <section aria-labelledby="day-title">
            <h3 id="day-title">Séances du mercredi 18 mars</h3>
            <ol>
                {sessions.map((session) => (
                    <li key={session.id}>
                        <CalendarEvent {...session} typeLabel={typeLabels[session.type]} />
                    </li>
                ))}
            </ol>
        </section>
    </>
);\`),
  render: (_args, {
    globals
  }) => <DayViewDemo locale={docsLocale(globals.locale)} />
}`,...(X=(G=f.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Z,J,K;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Vue semaine',
  parameters: componentSourceFn(importComposition, \`const [day, setDay] = useState(today);
const week = weekdaysOf(day); // lundi → vendredi, calculé par l’app

return (
    <>
        <Calendar
            value={day}
            // \\\`onValueChange\\\` reçoit aussi une plage \\\`{ start, end }\\\` : on ne garde qu’une date.
            onValueChange={(value) => {
                if ('year' in value) setDay(value);
            }}
            locale="fr"
            weekStartsOn={1}
            size="sm"
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem' }}>
            {week.map((date) => (
                <section key={calendarDateToIso(date)} aria-labelledby={\\\`day-\\\${calendarDateToIso(date)}\\\`}>
                    <h3 id={\\\`day-\\\${calendarDateToIso(date)}\\\`}>{formatDay(date)}</h3>
                    <ol>
                        {sessionsOn(date).map((session) => (
                            <li key={session.id}>
                                <CalendarEvent size="sm" {...session} typeLabel={typeLabels[session.type]} />
                            </li>
                        ))}
                    </ol>
                </section>
            ))}
        </div>
    </>
);\`),
  render: (_args, {
    globals
  }) => <WeekViewDemo locale={docsLocale(globals.locale)} />
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Le=["Default","Types","TokenOverride","Minimal","WithLink","Sizes","DayView","WeekView"],qe=Object.freeze(Object.defineProperty({__proto__:null,DayView:f,Default:p,Minimal:g,Sizes:b,TokenOverride:v,Types:y,WeekView:x,WithLink:h,__namedExportsOrder:Le,default:fe},Symbol.toStringTag,{value:"Module"}));export{qe as C,p as D,g as M,b as S,y as T,h as W,v as a,f as b,x as c};
