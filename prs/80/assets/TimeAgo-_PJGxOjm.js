import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-AGuS8-Lw.js";import{M as o,C as i,A as a}from"./index-CBbXplzX.js";import{T as l,D as d,L as c,a as u,P as h,S as x}from"./TimeAgo.stories-C3vbcKnp.js";import"./index-DQxMMF7O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BzNBXEAK.js";import"./index-DTrdMgma.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./docs-locale-C57-gmqy.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(s.h1,{id:"timeago",children:"TimeAgo"}),`
`,e.jsxs(s.p,{children:["TimeAgo affiche un horodatage ",e.jsx(s.strong,{children:"relatif"})," (",e.jsx(s.code,{children:"il y a 3 minutes"}),") tout en gardant l’instant ",e.jsx(s.strong,{children:"absolu"})," disponible pour les personnes et les machines. Le texte est formaté avec ",e.jsx(s.code,{children:"Intl"})," — il n’y a pas de bundle ",e.jsx(s.code,{children:"date-fns"}),". Survolez l’horodatage pour l’heure absolue ; les lecteurs d’écran reçoivent la phrase relative ",e.jsx(s.strong,{children:"et"})," la date absolue."]}),`
`,e.jsxs(s.p,{children:["Les exemples suivent la ",e.jsx(s.strong,{children:"langue"})," de la barre d’outils Storybook (",e.jsx(s.strong,{children:"Français"})," par défaut)."]}),`
`,e.jsx(i,{of:d,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"locale",children:"Locale"}),`
`,e.jsxs(s.p,{children:["Passez une chaîne BCP 47 ",e.jsx(s.code,{children:"locale"})," pour contrôler le libellé relatif et le formatage absolu. Les locales en 24 h (ex. ",e.jsx(s.code,{children:"fr"}),") formatent l’infobulle sans suffixe AM/PM. ",e.jsx(s.code,{children:"locale"})," pose aussi l’attribut ",e.jsx(s.code,{children:"lang"})," pour que les technologies d’assistance utilisent la bonne voix (WCAG 3.1.2)."]}),`
`,e.jsxs(s.p,{children:["Sans ",e.jsx(s.code,{children:"locale"}),", c’est la locale d’exécution. Injectez la langue de l’app (",e.jsx(s.code,{children:"locale={i18n.language}"}),") plutôt que de figer une valeur dans le design system."]}),`
`,e.jsx(i,{of:c,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"live-updates",children:"Live updates"}),`
`,e.jsxs(s.p,{children:["La prop ",e.jsx(s.code,{children:"live"})," rafraîchit le texte relatif visible sur un intervalle ",e.jsx(s.strong,{children:"grossier"})," pour que le libellé reste pertinent tant que la vue est ouverte :"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"moins d’1 minute — toutes les 10 secondes"}),`
`,e.jsx(s.li,{children:"moins d’1 heure — toutes les 30 secondes"}),`
`,e.jsx(s.li,{children:"moins d’1 jour — toutes les minutes"}),`
`,e.jsx(s.li,{children:"plus ancien — toutes les heures"}),`
`]}),`
`,e.jsxs(s.p,{children:["Les mises à jour sont visuelles uniquement. ",e.jsx(s.code,{children:"live"})," ne pose ",e.jsx(s.strong,{children:"pas"})," ",e.jsx(s.code,{children:"aria-live"}),", donc les lecteurs d’écran ne sont pas saturés. Passez ",e.jsx(s.code,{children:'aria-live="polite"'})," pour opt-in des annonces (à éviter sur les longues listes)."]}),`
`,e.jsxs(s.p,{children:["Laissez ",e.jsx(s.code,{children:"live"})," désactivé dans les fils de discussion, les tableaux, et toute liste qui peut contenir beaucoup d’horodatages."]}),`
`,e.jsx(i,{of:u,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"past-and-future",children:"Past and future"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Intl.RelativeTimeFormat"})," avec ",e.jsx(s.code,{children:'numeric: "auto"'})," produit une formulation naturelle (",e.jsx(s.code,{children:"hier"}),", ",e.jsx(s.code,{children:"maintenant"}),", ",e.jsx(s.code,{children:"dans 3 heures"}),") dans les deux directions."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h2,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," ajuste l’échelle du texte. Composez TimeAgo dans ",e.jsx(s.code,{children:"Text"})," / ",e.jsx(s.code,{children:"Heading"})," lorsque ces primitifs existent ; les tailles intégrées couvrent l’usage autonome."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'"sm"'})," — métadonnées compactes (cartes, commentaires)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'"md"'})," (défaut) — horodatage au corps de texte"]}),`
`]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h2,{id:"date-values",children:"Date values"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"date"})," accepte un ",e.jsx(s.code,{children:"Date"}),", une chaîne ISO-8601, ou des millisecondes epoch. Le composant écrit toujours un datetime global valide sur ",e.jsx(s.code,{children:"<time datetime>"}),"."]}),`
`,e.jsxs(s.p,{children:["Une valeur invalide ne rend pas de ",e.jsx(s.code,{children:"<time>"})," : un ",e.jsx(s.code,{children:"<span>"})," avec un tiret cadratin est utilisé à la place, pour que le markup reste sémantiquement honnête."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<TimeAgo date={submission.createdAt} locale="fr" />
<TimeAgo date="2026-08-26T12:00:00.000Z" locale="en" />
<TimeAgo date={1_724_673_600_000} locale="en" />
`})}),`
`,e.jsx(s.h2,{id:"accessibility-concerns",children:"Accessibility concerns"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"TimeAgo"})," est un élément natif ",e.jsx(s.code,{children:"<time>"}),". Il n’a pas de rôle ARIA supplémentaire."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Passez toujours un ",e.jsx(s.code,{children:"date"})," valide pour que ",e.jsx(s.code,{children:"datetime"})," soit un instant ISO-8601 lisible par une machine."]}),`
`,e.jsxs(s.li,{children:["Passez ",e.jsx(s.code,{children:"locale"})," dès que le texte n’est pas dans la langue du document. Le ",e.jsx(s.code,{children:"lang"})," de l’élément suit ",e.jsx(s.code,{children:"locale"}),"."]}),`
`,e.jsxs(s.li,{children:["Le texte visible est relatif. L’instant absolu est dans ",e.jsx(s.code,{children:"title"})," (infobulle pointeur) ",e.jsx(s.strong,{children:"et"})," dans une phrase masquée visuellement (technologies d’assistance — ",e.jsx(s.code,{children:"title"})," n’est pas un nom accessible fiable)."]}),`
`,e.jsxs(s.li,{children:["Ne placez pas TimeAgo dans une région live qui ré-annonce chaque tick. ",e.jsx(s.code,{children:"live"})," est silencieux par défaut."]}),`
`,e.jsxs(s.li,{children:["Annonces en opt-in : ",e.jsx(s.code,{children:'aria-live="polite"'})," sur le composant. Gardez l’intervalle grossier."]}),`
`,e.jsxs(s.li,{children:["Le texte relatif dépend de « maintenant » : l’élément pose ",e.jsx(s.code,{children:"suppressHydrationWarning"})," pour que SSR et client puissent différer d’une unité sans casser l’hydratation."]}),`
`]}),`
`,e.jsx(s.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(s.h3,{id:"timeago-1",children:"TimeAgo"}),`
`,e.jsxs(s.p,{children:["Les attributs natifs ",e.jsx(s.code,{children:"<time>"})," (",e.jsx(s.code,{children:"className"}),", ",e.jsx(s.code,{children:"aria-live"}),", …) sont transmis. ",e.jsx(s.code,{children:"dateTime"})," et ",e.jsx(s.code,{children:"children"})," sont gérés par le composant."]}),`
`,e.jsx(a,{of:l,include:["date","locale","live","size","title"]})]})}function z(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{z as default};
