import{i as u,j as e,r as be,a0 as i,d as l}from"./iframe-CVN8O8y4.js";import{u as De}from"./arg-types-D5LRc10N.js";import{c}from"./docs-source-C_O40UCi.js";import{b as Se,U as Ae,a as ze}from"./uiScale-XvgKbea-.js";import{A as _e}from"./Avatar-DWpvq3ea.js";import{B as Le}from"./Badge-DZyzrvWz.js";import{B as I}from"./Button-ZDdT4YL0.js";import{c as Ie}from"./cornerRadius-B4XFh-_5.js";import{H as Me}from"./Heading-COdHKCme.js";import{T as Fe}from"./Text-B2-FHRi5.js";const fe=be.createContext({orientation:"vertical",size:"m"});function N(){return be.useContext(fe)}const ke="transition-colors hover:border-border hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg",Re={xxs:"gap-0.5 px-2 pt-2 pb-1",xs:"gap-0.5 px-2.5 pt-2.5 pb-1",s:"gap-1 px-3 pt-3 pb-1.5",m:"gap-1 px-4 pt-4 pb-2",l:"gap-1.5 px-5 pt-5 pb-2.5",xl:"gap-1.5 px-6 pt-6 pb-3",xxl:"gap-2 px-8 pt-8 pb-4"},Ue={xxs:"px-2 py-1",xs:"px-2.5 py-1.5",s:"px-3 py-1.5",m:"px-4 py-2",l:"px-5 py-2.5",xl:"px-6 py-3",xxl:"px-8 py-4"},qe={xxs:"gap-1 px-2 pt-1.5 pb-2",xs:"gap-1.5 px-2.5 pt-2 pb-2.5",s:"gap-2 px-3 pt-2.5 pb-3",m:"gap-2 px-4 pt-3 pb-4",l:"gap-2.5 px-5 pt-3.5 pb-5",xl:"gap-2.5 px-6 pt-4 pb-6",xxl:"gap-3 px-8 pt-5 pb-8"};function s({href:a,as:n="article",radius:r="lg",orientation:t="vertical",disabled:x=!1,size:ve="m",color:k="neutral",className:je,style:D,children:Te,...S}){const Be=!!a||n==="button",A=n==="button"&&x,R=k==="neutral"?void 0:Se(k),z=u("flex overflow-hidden border border-border-subtle bg-bg text-start text-fg no-underline",t==="horizontal"?"flex-col sm:flex-row sm:items-stretch":"flex-col",Ie[r],Be&&ke,n==="button"&&!A&&"cursor-pointer",A&&"cursor-not-allowed opacity-50",je),_=e.jsx(fe.Provider,{value:{orientation:t,size:ve},children:Te}),L=R||D?{...R,...D}:D;if(a)return e.jsx("a",{...S,href:a,className:z,style:L,children:_});if(n==="button"){const{type:we="button",...Ne}=S;return e.jsx("button",{...Ne,type:we,disabled:A,className:z,style:L,children:_})}const He=n;return e.jsx(He,{...S,className:z,style:L,children:_})}function M({className:a,...n}){const{orientation:r}=N();return e.jsx("div",{...n,className:u("relative overflow-hidden bg-surface-muted [&_img]:size-full [&_img]:object-cover",r==="horizontal"?"aspect-video sm:aspect-auto sm:w-44 sm:shrink-0":"aspect-video w-full",a)})}function d({className:a,...n}){const{size:r}=N();return e.jsx("header",{...n,className:u("flex flex-col",Re[r],a)})}function m({className:a,...n}){const{size:r}=N();return e.jsx("div",{...n,className:u("min-w-0 flex-1",Ue[r],a)})}function F({className:a,...n}){const{size:r}=N();return e.jsx("footer",{...n,className:u("mt-auto flex flex-wrap items-center border-t border-border-subtle",qe[r],a)})}function o({level:a=3,className:n,...r}){return e.jsx(Me,{...r,level:a,size:"body",bold:!0,className:n})}function p({className:a,...n}){return e.jsx(Fe,{...n,size:"body-sm",tone:"muted",className:u("mt-0.5",a)})}s.__docgenInfo={description:'Surface de composition (Tailwind Plus Card) : média, en-tête, corps, pied.\n\nStatique (`article`) ou interactive (`href` → lien, `as="button"` → bouton).\nPas de domaine LMS : une Course Card compose ces slots dans l’app.',methods:[],displayName:"Card",props:{href:{required:!1,tsType:{name:"string"},description:"Rend un vrai `<a>`. Toute la carte est la cible : pas de bouton ni de\nlien à l’intérieur (HTML + WCAG 4.1.2)."},as:{required:!1,tsType:{name:"union",raw:"'article' | 'div' | 'button'",elements:[{name:"literal",value:"'article'"},{name:"literal",value:"'div'"},{name:"literal",value:"'button'"}]},description:'Élément racine si `href` est absent. `"article"` par défaut.\n`"button"` : carte-action, `type="button"`.',defaultValue:{value:"'article'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:'`"horizontal"` : média à gauche dès `sm` (Tailwind Plus media object).',defaultValue:{value:"'vertical'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:'Désactive la carte-bouton (`as="button"`). Ignoré sinon.',defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof UI_SIZES)[number]"},description:"Densité des slots. `m` par défaut.",defaultValue:{value:"'m'",computed:!1}},color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof UI_COLORS)[number]"},description:"Teinte de surface. `neutral` = fond par défaut.",defaultValue:{value:"'neutral'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};M.__docgenInfo={description:"Zone média (image, illustration). Les `img` filles couvrent la zone.",methods:[],displayName:"CardMedia"};d.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};m.__docgenInfo={description:"",methods:[],displayName:"CardBody"};F.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};o.__docgenInfo={description:"Titre de la carte. `h3` par défaut : la carte vit sous le titre de page.",methods:[],displayName:"CardTitle",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"",defaultValue:{value:"3",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};const C=`import {
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
} from 'd-ui';`;function he(){return`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect fill="#0f5c4c" width="640" height="360"/><rect fill="#0c4a3e" x="40" y="40" width="240" height="280" rx="12"/></svg>')}`}function Pe(){return`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect fill="#0f5c4c" width="96" height="96"/><text x="50%" y="54%" fill="#fff" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="36">A</text></svg>')}`}const Oe={title:"Components/Card",component:s,argTypes:De},g={name:"Par défaut",parameters:c(C,`<Card>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale));return e.jsxs(s,{...a,className:"max-w-sm",children:[e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(p,{children:r.subtitle})]}),e.jsx(m,{children:r.body})]})}},y={name:"Avec média",parameters:c(C,`<Card>
    <CardMedia>
        <img src="/cover.png" alt="" />
    </CardMedia>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale));return e.jsxs(s,{...a,className:"max-w-sm",children:[e.jsx(M,{children:e.jsx("img",{src:he(),alt:""})}),e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(p,{children:r.subtitle})]}),e.jsx(m,{children:r.body})]})}},b={name:"En-tête et pied",parameters:c(C,`<Card>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
    <CardFooter>
        <Button>Ouvrir</Button>
        <Button variant="secondary">Partager</Button>
    </CardFooter>
</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale));return e.jsxs(s,{...a,className:"max-w-sm",children:[e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(p,{children:r.subtitle})]}),e.jsx(m,{children:r.body}),e.jsxs(F,{children:[e.jsx(I,{children:r.open}),e.jsx(I,{variant:"secondary",children:r.share})]})]})}},f={name:"Horizontale",parameters:c(C,`<Card orientation="horizontal">
    <CardMedia>
        <img src="/cover.png" alt="" />
    </CardMedia>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale));return e.jsxs(s,{...a,orientation:"horizontal",className:"max-w-lg",children:[e.jsx(M,{children:e.jsx("img",{src:he(),alt:""})}),e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col",children:[e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(p,{children:r.subtitle})]}),e.jsx(m,{children:r.body})]})]})}},h={name:"Lien",parameters:c(C,`<Card href="/fiches/algebre">
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale));return e.jsxs(s,{...a,href:"#card-link",className:"max-w-sm",children:[e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(p,{children:r.subtitle})]}),e.jsx(m,{children:r.body})]})}},v={name:"Bouton",parameters:c(C,`<Card as="button" onClick={() => {}}>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
    </CardHeader>
</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale));return e.jsx(s,{...a,as:"button",className:"max-w-sm",children:e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(p,{children:r.subtitle})]})})}},j={name:"Bouton désactivé",args:{disabled:!0},parameters:c(C,`<Card as="button" disabled onClick={() => {}}>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
    </CardHeader>
</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale));return e.jsx(s,{...a,as:"button",disabled:!0,className:"max-w-sm",children:e.jsxs(d,{children:[e.jsx(o,{children:r.title}),e.jsx(p,{children:r.subtitle})]})})}},T={name:"Arrondi",parameters:c(C,`<Card radius="sm">…</Card>
<Card radius="lg">…</Card>
<Card radius="xl">…</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale)),t=["sm","lg","xl"];return e.jsx("div",{className:"flex flex-col gap-4",children:t.map(x=>e.jsx(s,{...a,radius:x,className:"max-w-sm",children:e.jsx(d,{children:e.jsxs(o,{children:[r.title," (",x,")"]})})},x))})}},B={name:"Tailles",parameters:c(C,`<Card size="s">…</Card>
<Card size="m">…</Card>
<Card size="l">…</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale));return e.jsx("div",{className:"flex flex-col gap-4",children:ze.map(t=>e.jsx(s,{...a,size:t,className:"max-w-sm",children:e.jsxs(d,{children:[e.jsxs(o,{children:[r.title," (",t,")"]}),e.jsx(p,{children:r.subtitle})]})},t))})}},H={name:"Couleurs",parameters:c(C,`<Card color="brand">…</Card>
<Card color="success">…</Card>
<Card color="neutral">…</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale));return e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:Ae.map(t=>e.jsx(s,{...a,color:t,className:"max-w-sm",children:e.jsxs(d,{children:[e.jsxs(o,{children:[r.title," (",t,")"]}),e.jsx(p,{children:r.subtitle})]})},t))})}},w={name:"Composition",parameters:c(C,`<Card>
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
</Card>`),render:(a,{globals:n})=>{const r=i(l(n.locale));return e.jsxs(s,{...a,className:"max-w-sm",children:[e.jsx(d,{children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(_e,{name:r.person,src:Pe()}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx(o,{children:r.person}),e.jsx(p,{children:r.role})]}),e.jsx(Le,{variant:"success",children:r.status})]})}),e.jsx(m,{children:r.personBody}),e.jsx(F,{children:e.jsx(I,{children:r.message})})]})}};var U,q,P;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(P=(q=g.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var O,E,V;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(E=y.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var W,Z,$;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,se,te;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(se=j.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var de,oe,ie;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ie=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,pe;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Tailles',
  parameters: componentSource(importCard, \`<Card size="s">…</Card>
<Card size="m">…</Card>
<Card size="l">…</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return <div className="flex flex-col gap-4">
        {UI_SIZES.map(size => <Card key={size} {...args} size={size} className="max-w-sm">
            <CardHeader>
              <CardTitle>
                {copy.title} ({size})
              </CardTitle>
              <CardDescription>{copy.subtitle}</CardDescription>
            </CardHeader>
          </Card>)}
      </div>;
  }
}`,...(pe=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var Ce,me,ue;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Couleurs',
  parameters: componentSource(importCard, \`<Card color="brand">…</Card>
<Card color="success">…</Card>
<Card color="neutral">…</Card>\`),
  render: (args, {
    globals
  }) => {
    const copy = cardCopy(docsLocale(globals.locale));
    return <div className="grid gap-4 sm:grid-cols-2">
        {UI_COLORS.map(color => <Card key={color} {...args} color={color} className="max-w-sm">
            <CardHeader>
              <CardTitle>
                {copy.title} ({color})
              </CardTitle>
              <CardDescription>{copy.subtitle}</CardDescription>
            </CardHeader>
          </Card>)}
      </div>;
  }
}`,...(ue=(me=H.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var xe,ge,ye;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ye=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const Ee=["Default","WithMedia","HeaderAndFooter","Horizontal","AsLink","AsButton","AsButtonDisabled","Radius","Sizes","Colors","Composition"],er=Object.freeze(Object.defineProperty({__proto__:null,AsButton:v,AsButtonDisabled:j,AsLink:h,Colors:H,Composition:w,Default:g,HeaderAndFooter:b,Horizontal:f,Radius:T,Sizes:B,WithMedia:y,__namedExportsOrder:Ee,default:Oe},Symbol.toStringTag,{value:"Module"}));export{h as A,er as C,g as D,b as H,T as R,B as S,y as W,f as a,v as b,j as c,H as d,w as e};
