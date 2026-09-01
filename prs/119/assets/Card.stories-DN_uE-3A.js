import{h as p,j as e,r as de,Y as s,d as i}from"./iframe-C__29WIa.js";import{m as ue}from"./arg-types-DvfBQmdr.js";import{c as l}from"./docs-source-C_O40UCi.js";import{A as ge}from"./Avatar-6XuwCaCJ.js";import{B as xe}from"./Badge-C9IYwQjj.js";import{B as A}from"./Button-Cx3ZuIKt.js";import{c as ye}from"./cornerRadius-B4XFh-_5.js";import{H as be}from"./Heading-cFWpBT35.js";import{T as fe}from"./Text-C0ZpCx7n.js";const oe=de.createContext({orientation:"vertical"});function he(){return de.useContext(oe)}const ve="transition-colors hover:border-border hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg";function t({href:a,as:n="article",radius:r="lg",orientation:T="vertical",disabled:u=!1,className:ie,children:le,...H}){const ce=!!a||n==="button",w=n==="button"&&u,D=p("flex overflow-hidden border border-border-subtle bg-bg text-start text-fg no-underline",T==="horizontal"?"flex-col sm:flex-row sm:items-stretch":"flex-col",ye[r],ce&&ve,n==="button"&&!w&&"cursor-pointer",w&&"cursor-not-allowed opacity-50",ie),N=e.jsx(oe.Provider,{value:{orientation:T},children:le});if(a)return e.jsx("a",{...H,href:a,className:D,children:N});if(n==="button"){const{type:me="button",...pe}=H;return e.jsx("button",{...pe,type:me,disabled:w,className:D,children:N})}const Ce=n;return e.jsx(Ce,{...H,className:D,children:N})}function S({className:a,...n}){const{orientation:r}=he();return e.jsx("div",{...n,className:p("relative overflow-hidden bg-surface-muted [&_img]:size-full [&_img]:object-cover",r==="horizontal"?"aspect-video sm:aspect-auto sm:w-44 sm:shrink-0":"aspect-video w-full",a)})}function d({className:a,...n}){return e.jsx("header",{...n,className:p("flex flex-col gap-1 px-4 pt-4 pb-2",a)})}function m({className:a,...n}){return e.jsx("div",{...n,className:p("min-w-0 flex-1 px-4 py-2",a)})}function M({className:a,...n}){return e.jsx("footer",{...n,className:p("mt-auto flex flex-wrap items-center gap-2 border-t border-border-subtle px-4 pt-3 pb-4",a)})}function o({level:a=3,className:n,...r}){return e.jsx(be,{...r,level:a,size:"body",bold:!0,className:n})}function c({className:a,...n}){return e.jsx(fe,{...n,size:"body-sm",tone:"muted",className:p("mt-0.5",a)})}t.__docgenInfo={description:'Surface de composition (Tailwind Plus Card) : média, en-tête, corps, pied.\n\nStatique (`article`) ou interactive (`href` → lien, `as="button"` → bouton).\nPas de domaine LMS : une Course Card compose ces slots dans l’app.',methods:[],displayName:"Card",props:{href:{required:!1,tsType:{name:"string"},description:"Rend un vrai `<a>`. Toute la carte est la cible : pas de bouton ni de\nlien à l’intérieur (HTML + WCAG 4.1.2)."},as:{required:!1,tsType:{name:"union",raw:"'article' | 'div' | 'button'",elements:[{name:"literal",value:"'article'"},{name:"literal",value:"'div'"},{name:"literal",value:"'button'"}]},description:'Élément racine si `href` est absent. `"article"` par défaut.\n`"button"` : carte-action, `type="button"`.',defaultValue:{value:"'article'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:'`"horizontal"` : média à gauche dès `sm` (Tailwind Plus media object).',defaultValue:{value:"'vertical'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:'Désactive la carte-bouton (`as="button"`). Ignoré sinon.',defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};S.__docgenInfo={description:"Zone média (image, illustration). Les `img` filles couvrent la zone.",methods:[],displayName:"CardMedia"};d.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};m.__docgenInfo={description:"",methods:[],displayName:"CardBody"};M.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};o.__docgenInfo={description:"Titre de la carte. `h3` par défaut : la carte vit sous le titre de page.",methods:[],displayName:"CardTitle",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"",defaultValue:{value:"3",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};const C=`import {
    Avatar,
    Badge,
    Button,
    Card,
    CardBody,
    CardDescription,
    CardFooter,
    CardHeader,
    CardMedia,
    CardTitle,
} from 'd-ui';`;function se(){return`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect fill="#0f5c4c" width="640" height="360"/><rect fill="#0c4a3e" x="40" y="40" width="240" height="280" rx="12"/></svg>')}`}function je(){return`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect fill="#0f5c4c" width="96" height="96"/><text x="50%" y="54%" fill="#fff" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="36">A</text></svg>')}`}const Be={title:"Components/Card",component:t,argTypes:ue},g={name:"Par défaut",parameters:l(C,`<Card>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
</Card>`),render:(a,{globals:n})=>{const r=s(i(n.locale));return e.jsxs(t,{...a,className:"max-w-sm",children:[e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(c,{children:r.subtitle})]}),e.jsx(m,{children:r.body})]})}},x={name:"Avec média",parameters:l(C,`<Card>
    <CardMedia>
        <img src="/cover.png" alt="" />
    </CardMedia>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
</Card>`),render:(a,{globals:n})=>{const r=s(i(n.locale));return e.jsxs(t,{...a,className:"max-w-sm",children:[e.jsx(S,{children:e.jsx("img",{src:se(),alt:""})}),e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(c,{children:r.subtitle})]}),e.jsx(m,{children:r.body})]})}},y={name:"En-tête et pied",parameters:l(C,`<Card>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
    <CardFooter>
        <Button>Ouvrir</Button>
        <Button variant="secondary">Partager</Button>
    </CardFooter>
</Card>`),render:(a,{globals:n})=>{const r=s(i(n.locale));return e.jsxs(t,{...a,className:"max-w-sm",children:[e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(c,{children:r.subtitle})]}),e.jsx(m,{children:r.body}),e.jsxs(M,{children:[e.jsx(A,{children:r.open}),e.jsx(A,{variant:"secondary",children:r.share})]})]})}},b={name:"Horizontale",parameters:l(C,`<Card orientation="horizontal">
    <CardMedia>
        <img src="/cover.png" alt="" />
    </CardMedia>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
</Card>`),render:(a,{globals:n})=>{const r=s(i(n.locale));return e.jsxs(t,{...a,orientation:"horizontal",className:"max-w-lg",children:[e.jsx(S,{children:e.jsx("img",{src:se(),alt:""})}),e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col",children:[e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(c,{children:r.subtitle})]}),e.jsx(m,{children:r.body})]})]})}},f={name:"Lien",parameters:l(C,`<Card href="/fiches/algebre">
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
</Card>`),render:(a,{globals:n})=>{const r=s(i(n.locale));return e.jsxs(t,{...a,href:"#card-link",className:"max-w-sm",children:[e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(c,{children:r.subtitle})]}),e.jsx(m,{children:r.body})]})}},h={name:"Bouton",parameters:l(C,`<Card as="button" onClick={() => {}}>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
    </CardHeader>
</Card>`),render:(a,{globals:n})=>{const r=s(i(n.locale));return e.jsx(t,{...a,as:"button",className:"max-w-sm",children:e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(c,{children:r.subtitle})]})})}},v={name:"Bouton désactivé",args:{disabled:!0},parameters:l(C,`<Card as="button" disabled onClick={() => {}}>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
    </CardHeader>
</Card>`),render:(a,{globals:n})=>{const r=s(i(n.locale));return e.jsx(t,{...a,as:"button",disabled:!0,className:"max-w-sm",children:e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(c,{children:r.subtitle})]})})}},j={name:"Arrondi",parameters:l(C,`<Card radius="sm">…</Card>
<Card radius="lg">…</Card>
<Card radius="xl">…</Card>`),render:(a,{globals:n})=>{const r=s(i(n.locale)),T=["sm","lg","xl"];return e.jsx("div",{className:"flex flex-col gap-4",children:T.map(u=>e.jsx(t,{...a,radius:u,className:"max-w-sm",children:e.jsx(d,{children:e.jsxs(o,{children:[r.title," (",u,")"]})})},u))})}},B={name:"Composition",parameters:l(C,`<Card>
    <CardHeader>
        <div className="flex items-start gap-3">
            <Avatar name="Ada Lovelace" src="/portrait.png" />
            <div className="min-w-0 flex-1">
                <CardTitle>Ada Lovelace</CardTitle>
                <CardDescription>Mathématicienne</CardDescription>
            </div>
            <Badge variant="success">Actif</Badge>
        </div>
    </CardHeader>
    <CardBody>Notes de lecture sur le moteur analytique.</CardBody>
    <CardFooter>
        <Button>Message</Button>
    </CardFooter>
</Card>`),render:(a,{globals:n})=>{const r=s(i(n.locale));return e.jsxs(t,{...a,className:"max-w-sm",children:[e.jsx(d,{children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(ge,{name:r.person,src:je()}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(o,{children:r.person}),e.jsx(c,{children:r.role})]}),e.jsx(xe,{variant:"success",children:r.status})]})}),e.jsx(m,{children:r.personBody}),e.jsx(M,{children:e.jsx(A,{children:r.message})})]})}};var _,L,z;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Par défaut',
  parameters: componentSource(importCard, \`<Card>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return <Card {...args} className="max-w-sm">
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
        <CardBody>{copy.body}</CardBody>
      </Card>;
  }
}`,...(z=(L=g.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var F,I,R;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Avec média',
  parameters: componentSource(importCard, \`<Card>
    <CardMedia>
        <img src="/cover.png" alt="" />
    </CardMedia>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return <Card {...args} className="max-w-sm">
        <CardMedia>
          <img src={coverUri()} alt="" />
        </CardMedia>
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
        <CardBody>{copy.body}</CardBody>
      </Card>;
  }
}`,...(R=(I=x.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var k,q,P;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'En-tête et pied',
  parameters: componentSource(importCard, \`<Card>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
    <CardFooter>
        <Button>Ouvrir</Button>
        <Button variant="secondary">Partager</Button>
    </CardFooter>
</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return <Card {...args} className="max-w-sm">
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
        <CardBody>{copy.body}</CardBody>
        <CardFooter>
          <Button>{copy.open}</Button>
          <Button variant="secondary">{copy.share}</Button>
        </CardFooter>
      </Card>;
  }
}`,...(P=(q=y.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var U,E,O;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Horizontale',
  parameters: componentSource(importCard, \`<Card orientation="horizontal">
    <CardMedia>
        <img src="/cover.png" alt="" />
    </CardMedia>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return <Card {...args} orientation="horizontal" className="max-w-lg">
        <CardMedia>
          <img src={coverUri()} alt="" />
        </CardMedia>
        <div className="flex min-w-0 flex-1 flex-col">
          <CardHeader>
            <CardTitle>{copy.title}</CardTitle>
            <CardDescription>{copy.subtitle}</CardDescription>
          </CardHeader>
          <CardBody>{copy.body}</CardBody>
        </div>
      </Card>;
  }
}`,...(O=(E=b.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var V,W,$;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Lien',
  parameters: componentSource(importCard, \`<Card href="/fiches/algebre">
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return <Card {...args} href="#card-link" className="max-w-sm">
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
        <CardBody>{copy.body}</CardBody>
      </Card>;
  }
}`,...($=(W=f.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var G,Y,Z;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Bouton',
  parameters: componentSource(importCard, \`<Card as="button" onClick={() => {}}>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
    </CardHeader>
</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return <Card {...args} as="button" className="max-w-sm">
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
      </Card>;
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Bouton désactivé',
  args: {
    disabled: true
  },
  parameters: componentSource(importCard, \`<Card as="button" disabled onClick={() => {}}>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
    </CardHeader>
</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return <Card {...args} as="button" disabled className="max-w-sm">
        <CardHeader>
          <CardTitle>{copy.title}</CardTitle>
          <CardDescription>{copy.subtitle}</CardDescription>
        </CardHeader>
      </Card>;
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,ee,re;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Arrondi',
  parameters: componentSource(importCard, \`<Card radius="sm">…</Card>
<Card radius="lg">…</Card>
<Card radius="xl">…</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    const radii: CardRadius[] = ['sm', 'lg', 'xl'];
    return <div className="flex flex-col gap-4">
        {radii.map(radius => <Card key={radius} {...args} radius={radius} className="max-w-sm">
            <CardHeader>
              <CardTitle>
                {copy.title} ({radius})
              </CardTitle>
            </CardHeader>
          </Card>)}
      </div>;
  }
}`,...(re=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,te;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Composition',
  parameters: componentSource(importCard, \`<Card>
    <CardHeader>
        <div className="flex items-start gap-3">
            <Avatar name="Ada Lovelace" src="/portrait.png" />
            <div className="min-w-0 flex-1">
                <CardTitle>Ada Lovelace</CardTitle>
                <CardDescription>Mathématicienne</CardDescription>
            </div>
            <Badge variant="success">Actif</Badge>
        </div>
    </CardHeader>
    <CardBody>Notes de lecture sur le moteur analytique.</CardBody>
    <CardFooter>
        <Button>Message</Button>
    </CardFooter>
</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return <Card {...args} className="max-w-sm">
        <CardHeader>
          <div className="flex items-start gap-3">
            <Avatar name={copy.person} src={portraitUri()} />
            <div className="min-w-0 flex-1">
              <CardTitle>{copy.person}</CardTitle>
              <CardDescription>{copy.role}</CardDescription>
            </div>
            <Badge variant="success">{copy.status}</Badge>
          </div>
        </CardHeader>
        <CardBody>{copy.personBody}</CardBody>
        <CardFooter>
          <Button>{copy.message}</Button>
        </CardFooter>
      </Card>;
  }
}`,...(te=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Te=["Default","WithMedia","HeaderAndFooter","Horizontal","AsLink","AsButton","AsButtonDisabled","Radius","Composition"],ze=Object.freeze(Object.defineProperty({__proto__:null,AsButton:h,AsButtonDisabled:v,AsLink:f,Composition:B,Default:g,HeaderAndFooter:y,Horizontal:b,Radius:j,WithMedia:x,__namedExportsOrder:Te,default:Be},Symbol.toStringTag,{value:"Module"}));export{f as A,ze as C,g as D,y as H,j as R,x as W,b as a,h as b,v as c,B as d};
