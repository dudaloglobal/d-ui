import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{n as $a,c as b}from"./docs-source-piSvsba_.js";import{c as R,d as v,e as be}from"./cx-Dd7xZVq4.js";import{r as j}from"./index-DQxMMF7O.js";import{V as Ga}from"./VisuallyHidden-DCNItxJF.js";import{I as Oe}from"./IconButton-DGfHSrWF.js";function W(e,a){return!e||!a?e===a:e.year===a.year&&e.month===a.month&&e.day===a.day}function Q(e,a){return e.year!==a.year?e.year-a.year:e.month!==a.month?e.month-a.month:e.day-a.day}function A(e){const a=String(e.year).padStart(4,"0"),t=String(e.month).padStart(2,"0"),o=String(e.day).padStart(2,"0");return`${a}-${t}-${o}`}function ca(e,a){return new Date(Date.UTC(e,a,0)).getUTCDate()}function C(e){return{year:e.year,month:e.month,day:1}}function S(e,a){const t=new Date(Date.UTC(e.year,e.month-1,e.day+a));return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate()}}function p(e,a){const t=e.year*12+(e.month-1)+a,o=Math.floor(t/12),u=t%12+1,f=Math.min(e.day,ca(o,u));return{year:o,month:u,day:f}}function Ne(e,a){return p(e,a*12)}function ve(e){return new Date(Date.UTC(e.year,e.month-1,e.day)).getUTCDay()}function Ha(e,a="local"){return a==="utc"?{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate()}:{year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()}}function Ja(e=new Date,a="local"){return Ha(e,a)}function Qa(e){try{const a=new Intl.Locale(e??"fr"),t=typeof a.getWeekInfo=="function"?a.getWeekInfo():a.weekInfo,o=t==null?void 0:t.firstDay;if(typeof o=="number")return o===7?0:o}catch{}return 1}function Xa(e,a){const t=C(e),o=(ve(t)-a+7)%7;let u=S(t,-o);const f=[];for(let D=0;D<6;D+=1){const N=[];for(let y=0;y<7;y+=1)N.push({date:u,inMonth:u.year===e.year&&u.month===e.month}),u=S(u,1);f.push(N)}return f}function en(e,a){const t=[];for(let o=0;o<7;o+=1){const u=(a+o)%7,f=new Date(Date.UTC(2026,0,4+u));t.push({short:new Intl.DateTimeFormat(e,{weekday:"short",timeZone:"UTC"}).format(f),long:new Intl.DateTimeFormat(e,{weekday:"long",timeZone:"UTC"}).format(f)})}return t}function se(e,a){return new Intl.DateTimeFormat(a,{month:"long",year:"numeric",timeZone:"UTC"}).format(Date.UTC(e.year,e.month-1,1))}function an(e,a){return new Intl.DateTimeFormat(a,{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(Date.UTC(e.year,e.month-1,e.day))}function ya(e,a){const t=(ve(e)-a+7)%7;return S(e,-t)}function nn(e,a){return S(ya(e,a),6)}function rn(e,a){var t;return a.minValue&&Q(e,a.minValue)<0||a.maxValue&&Q(e,a.maxValue)>0?!0:!!((t=a.isDateUnavailable)!=null&&t.call(a,e))}function fa(e){return!!e&&typeof e=="object"&&"start"in e&&"end"in e&&!("year"in e)}function pa(e,a){return Q(e,a)<=0?{start:e,end:a}:{start:a,end:e}}function tn(e,a,t){if(!a||!t)return!1;const{start:o,end:u}=pa(a,t);return Q(e,o)>=0&&Q(e,u)<=0}function on(e,a){return new Intl.DateTimeFormat(a,{month:"long",timeZone:"UTC"}).format(Date.UTC(2026,e-1,1))}const Le=50;function ln(e,a,t){const o=(a==null?void 0:a.year)??e-Le,u=(t==null?void 0:t.year)??e+Le,f=Math.min(o,e),D=Math.max(u,e),N=[];for(let y=f;y<=D;y+=1)N.push(y);return N}const sn={sm:{day:"h-8 w-8 text-sm",weekday:"h-8 w-8 text-xs",title:"text-sm"},md:{day:"h-10 w-10 text-base",weekday:"h-10 w-10 text-sm",title:"text-base"},lg:{day:"h-12 w-12 text-lg",weekday:"h-12 w-12 text-base",title:"text-lg"}};function un(){return n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M10 4L6 8l4 4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function dn(){return n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M6 4l4 4-4 4",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})}function mn(e){return Number.isNaN(e)?1:Math.min(3,Math.max(1,Math.trunc(e)))}function cn(e){const a=(e??"fr").toLowerCase();return a==="en"||a.startsWith("en-")?{prev:"Previous month",next:"Next month",month:"Month",year:"Year"}:{prev:"Mois précédent",next:"Mois suivant",month:"Mois",year:"Année"}}function ge(e){return A(e)}function U(e,a){return e.year!==a.year?e.year-a.year:e.month-a.month}function Ue(e){return e?fa(e)?e.start:e:null}function Ve(e){return fa(e)?e:e?{start:e,end:null}:{start:null,end:null}}function yn(e){return{year:e.year,month:e.month,day:Math.min(e.day,ca(e.year,e.month))}}function Ie(e,a){return R("cursor-pointer rounded-md border-0 bg-transparent px-1 font-medium capitalize text-fg","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus","disabled:cursor-not-allowed disabled:opacity-50",e,a)}function m({selectionMode:e="single",value:a,defaultValue:t=null,onValueChange:o,month:u,defaultMonth:f,onMonthChange:D,today:N,minValue:y,maxValue:V,isDateUnavailable:ha,weekStartsOn:ga,locale:h="fr",numberOfMonths:ba,size:ue="md",disabled:x=!1,previousMonthLabel:va,nextMonthLabel:ka,monthSelectLabel:xa,yearSelectLabel:wa,name:ke,nameEnd:xe,className:Ca,lang:Da,...Ma}){const de=N??Ja(),X=ga??Qa(h),w=e==="range",g=mn(ba??(w?2:1)),ee=cn(h),ja=va??ee.prev,Sa=ka??ee.next,qa=xa??ee.month,Ta=wa??ee.year,z=sn[ue],we=j.useId(),ae=a!==void 0,[Oa,Na]=j.useState(()=>Ue(t)),[La,Ua]=j.useState(()=>Ve(t)),I=ae?Ue(a):Oa,L=ae?Ve(a):La,ne=w?L.start:I,Ce=w?L.end:null,De=u!==void 0,[Va,Ia]=j.useState(()=>C(f??ne??I??de)),d=C(De?u:Va),[c,ie]=j.useState(()=>ne??I??de),me=j.useRef(!1),ce=j.useRef(new Map),re=Array.from({length:g},(r,l)=>p(d,l)),Ra=ln(d.year,y,V),Me=p(d,-1),je=p(d,1),za=x||!!(y&&U(Me,C(y))<0),Pa=x||!!(V&&U(je,C(p(V,1-g)))>0);function P(r){const l=C(r);De||Ia(l),D==null||D(l)}function _a(r){ae||Na(r),o==null||o(r)}function Wa(r){ae||Ua(r),o==null||o(r)}function Se(r){if(!(x||qe(r))){if(ie(r),w){const l=L,s=l.start&&!l.end;Wa(s&&l.start?pa(l.start,r):{start:r,end:null})}else _a(r);r.year!==d.year||r.month<d.month?P(r):U(r,p(d,g-1))>0&&P(p(r,1-g))}}function qe(r){return rn(r,{minValue:y,maxValue:V,isDateUnavailable:ha})}function Aa(r){ie(r);const l=p(d,g-1);U(r,d)<0?P(r):U(r,l)>0&&P(p(r,1-g)),me.current=!0}function te(r){P(r),ie(yn({...c,year:r.year,month:r.month}))}j.useLayoutEffect(()=>{var r;me.current&&(me.current=!1,(r=ce.current.get(ge(c)))==null||r.focus())},[c,d,g]);function Fa(r){if(x)return;const l=r.key;let s;if(l==="ArrowLeft")s=S(c,-1);else if(l==="ArrowRight")s=S(c,1);else if(l==="ArrowUp")s=S(c,-7);else if(l==="ArrowDown")s=S(c,7);else if(l==="Home")s=ya(c,X);else if(l==="End")s=nn(c,X);else if(l==="PageUp")s=r.shiftKey?Ne(c,-1):p(c,-1);else if(l==="PageDown")s=r.shiftKey?Ne(c,1):p(c,1);else if(l==="Enter"||l===" "){r.preventDefault(),Se(c);return}s&&(r.preventDefault(),Aa(s))}const Ea=g===1?se(d,h):`${se(d,h)} – ${se(re[re.length-1],h)}`,Ya=w?L.start?A(L.start):"":I?A(I):"",Ba=L.end?A(L.end):"";return n.jsxs("div",{...Ma,lang:Da??h,className:R("inline-flex flex-col gap-3 font-sans text-fg",x&&"opacity-60",Ca),children:[ke?n.jsx("input",{type:"hidden",name:ke,value:Ya}):null,w&&xe?n.jsx("input",{type:"hidden",name:xe,value:Ba}):null,n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsx(Oe,{variant:"ghost",size:ue,icon:n.jsx(un,{}),"aria-label":ja,disabled:za,onClick:()=>te(Me)}),n.jsx("h2",{id:we,className:"d-ui-visually-hidden",children:Ea}),n.jsxs("div",{className:"flex min-w-0 flex-1 items-center justify-center gap-1",children:[n.jsx("select",{"aria-label":qa,disabled:x,value:d.month,className:Ie(z.title,"max-w-[9.5rem]"),onChange:r=>{te({year:d.year,month:Number(r.target.value)})},children:Array.from({length:12},(r,l)=>{const s=l+1,oe={year:d.year,month:s},M=!!(y&&U(oe,C(y))<0),i=!!(V&&U(oe,C(V))>0);return n.jsx("option",{value:s,disabled:M||i,children:on(s,h)},s)})}),n.jsx("select",{"aria-label":Ta,disabled:x,value:d.year,className:Ie(z.title),onChange:r=>{te({year:Number(r.target.value),month:d.month})},children:Ra.map(r=>n.jsx("option",{value:r,children:r},r))})]}),n.jsx(Oe,{variant:"ghost",size:ue,icon:n.jsx(dn,{}),"aria-label":Sa,disabled:Pa,onClick:()=>te(je)})]}),n.jsx("div",{className:"flex flex-wrap gap-8",children:re.map(r=>{const l=Xa(r,X),s=en(h,X),oe=se(r,h);return n.jsxs("table",{role:"grid","aria-labelledby":g===1?we:void 0,"aria-label":g===1?void 0:oe,"aria-disabled":x||void 0,"aria-multiselectable":w||void 0,className:"border-collapse",onKeyDown:Fa,children:[n.jsx("thead",{children:n.jsx("tr",{children:s.map(M=>n.jsxs("th",{scope:"col",className:R("p-0 font-medium text-fg/70",z.weekday),children:[n.jsx("span",{"aria-hidden":"true",children:M.short}),n.jsx(Ga,{children:M.long})]},M.long))})}),n.jsx("tbody",{children:l.map(M=>n.jsx("tr",{role:"row",children:M.map(i=>{const le=ge(i.date);if(!i.inMonth&&re.some(_=>_.year===i.date.year&&_.month===i.date.month))return n.jsx("td",{role:"gridcell",className:"p-0.5",children:n.jsx("span",{className:R("inline-block",z.day)})},le);const ye=W(i.date,ne),fe=W(i.date,Ce),pe=w?ye||fe:W(i.date,I),Ka=w&&tn(i.date,ne,Ce),Te=W(i.date,de),Za=W(i.date,c),he=qe(i.date);return n.jsx("td",{role:"gridcell","aria-selected":pe||void 0,className:R("p-0.5",Ka&&"bg-brand/20",ye&&"rounded-l-full",fe&&"rounded-r-full",ye&&fe&&"rounded-full"),children:n.jsx("button",{ref:_=>{_?ce.current.set(le,_):ce.current.delete(le)},type:"button",tabIndex:Za?0:-1,disabled:x,"aria-label":an(i.date,h),"aria-current":Te?"date":void 0,"aria-disabled":he||void 0,onClick:()=>Se(i.date),className:R("inline-flex items-center justify-center rounded-full font-sans","transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg","disabled:pointer-events-none disabled:opacity-50",z.day,i.inMonth?"text-fg":"text-fg/50",he&&"cursor-default opacity-50 line-through",pe?"bg-brand text-on-brand hover:bg-brand-hover":!he&&"hover:bg-surface-hover",Te&&!pe&&"ring-2 ring-brand ring-inset"),children:i.date.day})},le)})},ge(M[0].date)))})]},A(C(r)))})})]})}m.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{selectionMode:{required:!1,tsType:{name:"union",raw:"'single' | 'range'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'range'"}]},description:"`'single'` (défaut) ou `'range'` (début + fin).",defaultValue:{value:"'single'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"CalendarDate | CalendarRangeValue | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  start: CalendarDate | null;
  end: CalendarDate | null;
}`,signature:{properties:[{key:"start",value:{name:"union",raw:"CalendarDate | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"end",value:{name:"union",raw:"CalendarDate | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]}},{name:"null"}]},description:"Date ou plage sélectionnée (contrôlé). `null` = aucune."},defaultValue:{required:!1,tsType:{name:"union",raw:"CalendarDate | CalendarRangeValue | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  start: CalendarDate | null;
  end: CalendarDate | null;
}`,signature:{properties:[{key:"start",value:{name:"union",raw:"CalendarDate | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"end",value:{name:"union",raw:"CalendarDate | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]}},{name:"null"}]},description:"Date ou plage au montage (non contrôlé).",defaultValue:{value:"null",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: CalendarDate | CalendarRangeValue) => void",signature:{arguments:[{type:{name:"union",raw:"CalendarDate | CalendarRangeValue",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:`{
  start: CalendarDate | null;
  end: CalendarDate | null;
}`,signature:{properties:[{key:"start",value:{name:"union",raw:"CalendarDate | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}},{key:"end",value:{name:"union",raw:"CalendarDate | null",elements:[{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]}}]},name:"value"}],return:{name:"void"}}},description:"Appelé lorsqu’un jour disponible est choisi (date ou plage)."},month:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},description:"Premier mois affiché (contrôlé). Le jour est ignoré."},defaultMonth:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},description:"Premier mois affiché au montage."},onMonthChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(month: CalendarDate) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},name:"month"}],return:{name:"void"}}},description:"Appelé lorsque l’utilisateur change de mois."},today:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},description:`« Aujourd’hui » (pastille). Défaut : date civile locale.
Passez-le dans les tests et les stories pour un rendu stable.`},minValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},description:"Première date sélectionnable (incluse)."},maxValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},description:"Dernière date sélectionnable (incluse)."},isDateUnavailable:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: CalendarDate) => boolean",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  readonly year: number;
  readonly month: number;
  readonly day: number;
}`,signature:{properties:[{key:"year",value:{name:"number",required:!0}},{key:"month",value:{name:"number",required:!0}},{key:"day",value:{name:"number",required:!0}}]}},name:"date"}],return:{name:"boolean"}}},description:"Dates individuelles non sélectionnables (week-ends, jours fériés, …)."},weekStartsOn:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Premier jour de la semaine (0 = dimanche). Défaut : `weekStartFromLocale(locale)`."},locale:{required:!1,tsType:{name:"string"},description:"Locale BCP 47 pour les libellés. Pose aussi `lang`. Défaut : `fr`.",defaultValue:{value:"'fr'",computed:!1}},numberOfMonths:{required:!1,tsType:{name:"number"},description:'Nombre de mois côte à côte (1–3). Défaut : 1, ou 2 si `selectionMode="range"`.'},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'`"sm"` si l’espace est contraint. `"md"` par défaut. `"lg"` pour les vues aérées.',defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Désactive la grille et la navigation.",defaultValue:{value:"false",computed:!1}},previousMonthLabel:{required:!1,tsType:{name:"string"},description:"Nom accessible du bouton mois précédent. Défaut : « Mois précédent »."},nextMonthLabel:{required:!1,tsType:{name:"string"},description:"Nom accessible du bouton mois suivant. Défaut : « Mois suivant »."},monthSelectLabel:{required:!1,tsType:{name:"string"},description:"Nom accessible du sélecteur de mois. Défaut : « Mois »."},yearSelectLabel:{required:!1,tsType:{name:"string"},description:"Nom accessible du sélecteur d’année. Défaut : « Année »."},name:{required:!1,tsType:{name:"string"},description:"Nom du champ masqué `YYYY-MM-DD` (date unique, ou début de plage)."},nameEnd:{required:!1,tsType:{name:"string"},description:'Nom du champ masqué de fin de plage (`selectionMode="range"`).'}}};const k="import { Calendar } from 'd-ui';",q={year:2026,month:3,day:18},T={year:2026,month:3,day:12},O={year:2026,month:3,day:1};function fn(e){const a=ve(e);return a===0||a===6}const pn={title:"Components/Calendar",component:m,args:{today:q,defaultValue:T,defaultMonth:O,locale:"fr",weekStartsOn:1},argTypes:$a,parameters:{controls:{include:["size","locale","weekStartsOn","numberOfMonths","disabled","selectionMode","previousMonthLabel","nextMonthLabel"]}}},F={name:"Par défaut",parameters:b(k,`<Calendar
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    locale="fr"
    weekStartsOn={1}
/>`),render:(e,{globals:a})=>{const t=v(a.locale);return n.jsx(m,{...e,locale:e.locale??t})}},E={name:"Dates restreintes",parameters:b(k,`<Calendar
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    minValue={{ year: 2026, month: 3, day: 5 }}
    maxValue={{ year: 2026, month: 3, day: 25 }}
    isDateUnavailable={(date) => date.day === 13}
    locale="fr"
    weekStartsOn={1}
/>`),args:{minValue:{year:2026,month:3,day:5},maxValue:{year:2026,month:3,day:25},isDateUnavailable:e=>e.day===13},render:(e,{globals:a})=>n.jsx(m,{...e,locale:e.locale??v(a.locale)})},Y={name:"Début de semaine",parameters:b(k,`<>
    <Calendar weekStartsOn={1} locale="fr" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar weekStartsOn={0} locale="en" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>`),render:(e,{globals:a})=>{const t=be(v(a.locale));return n.jsxs("div",{className:"flex flex-wrap gap-8",children:[n.jsxs("div",{children:[n.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:t.weekMonday}),n.jsx(m,{today:q,defaultValue:T,defaultMonth:O,locale:"fr",weekStartsOn:1})]}),n.jsxs("div",{children:[n.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:t.weekSunday}),n.jsx(m,{today:q,defaultValue:T,defaultMonth:O,locale:"en",weekStartsOn:0})]})]})}},B={name:"Langue",parameters:b(k,`<>
    <Calendar locale="fr" weekStartsOn={1} defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar locale="en" weekStartsOn={0} defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>`),render:(e,{globals:a})=>{const t=be(v(a.locale));return n.jsxs("div",{className:"flex flex-wrap gap-8",children:[n.jsxs("div",{children:[n.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:t.french}),n.jsx(m,{today:q,defaultValue:T,defaultMonth:O,locale:"fr",weekStartsOn:1})]}),n.jsxs("div",{children:[n.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:t.english}),n.jsx(m,{today:q,defaultValue:T,defaultMonth:O,locale:"en",weekStartsOn:0})]})]})}},K={name:"Plusieurs mois",parameters:b(k,`<Calendar
    numberOfMonths={2}
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    locale="fr"
    weekStartsOn={1}
/>`),args:{numberOfMonths:2},render:(e,{globals:a})=>n.jsx(m,{...e,locale:e.locale??v(a.locale)})},Z={name:"Tailles",parameters:b(k,`<>
    <Calendar size="sm" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar size="md" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar size="lg" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>`),render:(e,{globals:a})=>{const t=v(a.locale),o=be(t);return n.jsxs("div",{className:"flex flex-col gap-8",children:[n.jsxs("div",{children:[n.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:o.small}),n.jsx(m,{size:"sm",today:q,defaultValue:T,defaultMonth:O,locale:t,weekStartsOn:1})]}),n.jsxs("div",{children:[n.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:o.medium}),n.jsx(m,{size:"md",today:q,defaultValue:T,defaultMonth:O,locale:t,weekStartsOn:1})]}),n.jsxs("div",{children:[n.jsx("p",{className:"mb-2 font-sans text-sm text-fg",children:o.large}),n.jsx(m,{size:"lg",today:q,defaultValue:T,defaultMonth:O,locale:t,weekStartsOn:1})]})]})}},$={name:"Désactivé",parameters:b(k,"<Calendar disabled defaultValue={{ year: 2026, month: 3, day: 12 }} />"),args:{disabled:!0},render:(e,{globals:a})=>n.jsx(m,{...e,locale:e.locale??v(a.locale)})},G={name:"Week-ends indisponibles",parameters:b(k,`<Calendar
    isDateUnavailable={(date) => {
        const weekday = new Date(Date.UTC(date.year, date.month - 1, date.day)).getUTCDay();
        return weekday === 0 || weekday === 6;
    }}
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    locale="fr"
/>`),args:{isDateUnavailable:fn},render:(e,{globals:a})=>n.jsx(m,{...e,locale:e.locale??v(a.locale)})},H={name:"Année",parameters:b(k,`<Calendar
    defaultMonth={{ year: 2026, month: 3, day: 1 }}
    minValue={{ year: 2020, month: 1, day: 1 }}
    maxValue={{ year: 2030, month: 12, day: 31 }}
    locale="fr"
/>`),args:{minValue:{year:2020,month:1,day:1},maxValue:{year:2030,month:12,day:31}},render:(e,{globals:a})=>n.jsx(m,{...e,locale:e.locale??v(a.locale)})},J={name:"Plage de dates",parameters:b(k,`<Calendar
    selectionMode="range"
    numberOfMonths={2}
    defaultValue={{
        start: { year: 2026, month: 3, day: 25 },
        end: { year: 2026, month: 4, day: 8 },
    }}
    locale="fr"
/>`),args:{selectionMode:"range",numberOfMonths:2,defaultValue:{start:{year:2026,month:3,day:25},end:{year:2026,month:4,day:8}}},render:(e,{globals:a})=>n.jsx(m,{...e,locale:e.locale??v(a.locale)})};var Re,ze,Pe;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importCalendar, \`<Calendar
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    locale="fr"
    weekStartsOn={1}
/>\`),
  render: (args, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    return <Calendar {...args} locale={args.locale ?? locale} />;
  }
}`,...(Pe=(ze=F.parameters)==null?void 0:ze.docs)==null?void 0:Pe.source}}};var _e,We,Ae;E.parameters={...E.parameters,docs:{...(_e=E.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Dates restreintes',
  parameters: componentSource(importCalendar, \`<Calendar
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    minValue={{ year: 2026, month: 3, day: 5 }}
    maxValue={{ year: 2026, month: 3, day: 25 }}
    isDateUnavailable={(date) => date.day === 13}
    locale="fr"
    weekStartsOn={1}
/>\`),
  args: {
    minValue: {
      year: 2026,
      month: 3,
      day: 5
    },
    maxValue: {
      year: 2026,
      month: 3,
      day: 25
    },
    isDateUnavailable: date => date.day === 13
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(Ae=(We=E.parameters)==null?void 0:We.docs)==null?void 0:Ae.source}}};var Fe,Ee,Ye;Y.parameters={...Y.parameters,docs:{...(Fe=Y.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Début de semaine',
  parameters: componentSource(importCalendar, \`<>
    <Calendar weekStartsOn={1} locale="fr" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar weekStartsOn={0} locale="en" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = calendarCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap gap-8">
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.weekMonday}</p>
          <Calendar today={today} defaultValue={selected} defaultMonth={march} locale="fr" weekStartsOn={1} />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.weekSunday}</p>
          <Calendar today={today} defaultValue={selected} defaultMonth={march} locale="en" weekStartsOn={0} />
        </div>
      </div>;
  }
}`,...(Ye=(Ee=Y.parameters)==null?void 0:Ee.docs)==null?void 0:Ye.source}}};var Be,Ke,Ze;B.parameters={...B.parameters,docs:{...(Be=B.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Langue',
  parameters: componentSource(importCalendar, \`<>
    <Calendar locale="fr" weekStartsOn={1} defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar locale="en" weekStartsOn={0} defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = calendarCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap gap-8">
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.french}</p>
          <Calendar today={today} defaultValue={selected} defaultMonth={march} locale="fr" weekStartsOn={1} />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.english}</p>
          <Calendar today={today} defaultValue={selected} defaultMonth={march} locale="en" weekStartsOn={0} />
        </div>
      </div>;
  }
}`,...(Ze=(Ke=B.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source}}};var $e,Ge,He;K.parameters={...K.parameters,docs:{...($e=K.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'Plusieurs mois',
  parameters: componentSource(importCalendar, \`<Calendar
    numberOfMonths={2}
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    today={{ year: 2026, month: 3, day: 18 }}
    locale="fr"
    weekStartsOn={1}
/>\`),
  args: {
    numberOfMonths: 2
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(He=(Ge=K.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Je,Qe,Xe;Z.parameters={...Z.parameters,docs:{...(Je=Z.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importCalendar, \`<>
    <Calendar size="sm" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar size="md" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
    <Calendar size="lg" defaultMonth={{ year: 2026, month: 3, day: 1 }} />
</>\`),
  render: (_, {
    globals
  }) => {
    const locale = docsLocale(globals.locale);
    const copy = calendarCopy(locale);
    return <div className="flex flex-col gap-8">
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.small}</p>
          <Calendar size="sm" today={today} defaultValue={selected} defaultMonth={march} locale={locale} weekStartsOn={1} />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.medium}</p>
          <Calendar size="md" today={today} defaultValue={selected} defaultMonth={march} locale={locale} weekStartsOn={1} />
        </div>
        <div>
          <p className="mb-2 font-sans text-sm text-fg">{copy.large}</p>
          <Calendar size="lg" today={today} defaultValue={selected} defaultMonth={march} locale={locale} weekStartsOn={1} />
        </div>
      </div>;
  }
}`,...(Xe=(Qe=Z.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var ea,aa,na;$.parameters={...$.parameters,docs:{...(ea=$.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: 'Désactivé',
  parameters: componentSource(importCalendar, \`<Calendar disabled defaultValue={{ year: 2026, month: 3, day: 12 }} />\`),
  args: {
    disabled: true
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(na=(aa=$.parameters)==null?void 0:aa.docs)==null?void 0:na.source}}};var ra,ta,oa;G.parameters={...G.parameters,docs:{...(ra=G.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: 'Week-ends indisponibles',
  parameters: componentSource(importCalendar, \`<Calendar
    isDateUnavailable={(date) => {
        const weekday = new Date(Date.UTC(date.year, date.month - 1, date.day)).getUTCDay();
        return weekday === 0 || weekday === 6;
    }}
    defaultValue={{ year: 2026, month: 3, day: 12 }}
    locale="fr"
/>\`),
  args: {
    isDateUnavailable: weekend
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(oa=(ta=G.parameters)==null?void 0:ta.docs)==null?void 0:oa.source}}};var la,sa,ua;H.parameters={...H.parameters,docs:{...(la=H.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: 'Année',
  parameters: componentSource(importCalendar, \`<Calendar
    defaultMonth={{ year: 2026, month: 3, day: 1 }}
    minValue={{ year: 2020, month: 1, day: 1 }}
    maxValue={{ year: 2030, month: 12, day: 31 }}
    locale="fr"
/>\`),
  args: {
    minValue: {
      year: 2020,
      month: 1,
      day: 1
    },
    maxValue: {
      year: 2030,
      month: 12,
      day: 31
    }
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(ua=(sa=H.parameters)==null?void 0:sa.docs)==null?void 0:ua.source}}};var da,ia,ma;J.parameters={...J.parameters,docs:{...(da=J.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: 'Plage de dates',
  parameters: componentSource(importCalendar, \`<Calendar
    selectionMode="range"
    numberOfMonths={2}
    defaultValue={{
        start: { year: 2026, month: 3, day: 25 },
        end: { year: 2026, month: 4, day: 8 },
    }}
    locale="fr"
/>\`),
  args: {
    selectionMode: 'range',
    numberOfMonths: 2,
    defaultValue: {
      start: {
        year: 2026,
        month: 3,
        day: 25
      },
      end: {
        year: 2026,
        month: 4,
        day: 8
      }
    }
  },
  render: (args, {
    globals
  }) => <Calendar {...args} locale={args.locale ?? docsLocale(globals.locale)} />
}`,...(ma=(ia=J.parameters)==null?void 0:ia.docs)==null?void 0:ma.source}}};const hn=["Default","Restricted","WeekStart","Locale","MultipleMonths","Sizes","Disabled","WeekendsUnavailable","Year","Range"],Dn=Object.freeze(Object.defineProperty({__proto__:null,Default:F,Disabled:$,Locale:B,MultipleMonths:K,Range:J,Restricted:E,Sizes:Z,WeekStart:Y,WeekendsUnavailable:G,Year:H,__namedExportsOrder:hn,default:pn},Symbol.toStringTag,{value:"Module"}));export{Dn as C,F as D,B as L,K as M,E as R,Z as S,G as W,H as Y,J as a,Y as b,$ as c};
