import{k as n,d as o,j as r}from"./iframe-CfESPI1b.js";import{f as cr}from"./arg-types-B3Y5nyvA.js";import{c as t}from"./docs-source-C_O40UCi.js";import{U as lr,a as Cr}from"./uiScale-NJWaMcMk.js";import{A as pr}from"./Avatar-BBWXk0gf.js";import{B as mr}from"./Badge--fbIunmU.js";import{B as D}from"./Button-CqjvCqG5.js";import{C as s,a as i,b as c,c as C,d as m,e as or,f as tr}from"./Card-Dk-KSvvd.js";const l=`import {
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
} from 'd-ui';`;function ir(){return`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect fill="#0f5c4c" width="640" height="360"/><rect fill="#0c4a3e" x="40" y="40" width="240" height="280" rx="12"/></svg>')}`}function ur(){return`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect fill="#0f5c4c" width="96" height="96"/><text x="50%" y="54%" fill="#fff" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="36">A</text></svg>')}`}const gr={title:"Components/Card",component:s,argTypes:cr},u={name:"Par défaut",parameters:t(l,`<Card>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale));return r.jsxs(s,{...e,className:"max-w-sm",children:[r.jsxs(i,{children:[r.jsx(c,{children:a.title}),r.jsx(C,{children:a.subtitle})]}),r.jsx(m,{children:a.body})]})}},g={name:"Avec média",parameters:t(l,`<Card>
    <CardMedia>
        <img src="/cover.png" alt="" />
    </CardMedia>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale));return r.jsxs(s,{...e,className:"max-w-sm",children:[r.jsx(tr,{children:r.jsx("img",{src:ir(),alt:""})}),r.jsxs(i,{children:[r.jsx(c,{children:a.title}),r.jsx(C,{children:a.subtitle})]}),r.jsx(m,{children:a.body})]})}},x={name:"En-tête et pied",parameters:t(l,`<Card>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
    <CardBody>Introduction aux espaces vectoriels.</CardBody>
    <CardFooter>
        <Button>Ouvrir</Button>
        <Button variant="secondary">Partager</Button>
    </CardFooter>
</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale));return r.jsxs(s,{...e,className:"max-w-sm",children:[r.jsxs(i,{children:[r.jsx(c,{children:a.title}),r.jsx(C,{children:a.subtitle})]}),r.jsx(m,{children:a.body}),r.jsxs(or,{children:[r.jsx(D,{children:a.open}),r.jsx(D,{variant:"secondary",children:a.share})]})]})}},y={name:"Horizontale",parameters:t(l,`<Card orientation="horizontal">
    <CardMedia>
        <img src="/cover.png" alt="" />
    </CardMedia>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale));return r.jsxs(s,{...e,orientation:"horizontal",className:"max-w-lg",children:[r.jsx(tr,{children:r.jsx("img",{src:ir(),alt:""})}),r.jsxs("div",{className:"flex min-w-0 flex-1 flex-col",children:[r.jsxs(i,{children:[r.jsx(c,{children:a.title}),r.jsx(C,{children:a.subtitle})]}),r.jsx(m,{children:a.body})]})]})}},h={name:"Lien",parameters:t(l,`<Card href="/fiches/algebre">
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
        <CardDescription>Chapitre 2</CardDescription>
    </CardHeader>
</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale));return r.jsxs(s,{...e,href:"#card-link",className:"max-w-sm",children:[r.jsxs(i,{children:[r.jsx(c,{children:a.title}),r.jsx(C,{children:a.subtitle})]}),r.jsx(m,{children:a.body})]})}},b={name:"Bouton",parameters:t(l,`<Card as="button" onClick={() => {}}>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
    </CardHeader>
</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale));return r.jsx(s,{...e,as:"button",className:"max-w-sm",children:r.jsxs(i,{children:[r.jsx(c,{children:a.title}),r.jsx(C,{children:a.subtitle})]})})}},v={name:"Bouton désactivé",args:{disabled:!0},parameters:t(l,`<Card as="button" disabled onClick={() => {}}>
    <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
    </CardHeader>
</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale));return r.jsx(s,{...e,as:"button",disabled:!0,className:"max-w-sm",children:r.jsxs(i,{children:[r.jsx(c,{children:a.title}),r.jsx(C,{children:a.subtitle})]})})}},j={name:"Arrondi",parameters:t(l,`<Card radius="sm">…</Card>
<Card radius="lg">…</Card>
<Card radius="xl">…</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale)),p=["sm","lg","xl"];return r.jsx("div",{className:"flex flex-col gap-4",children:p.map(T=>r.jsx(s,{...e,radius:T,className:"max-w-sm",children:r.jsx(i,{children:r.jsxs(c,{children:[a.title," (",T,")"]})})},T))})}},B={name:"Tailles",parameters:t(l,`<Card size="s">…</Card>
<Card size="m">…</Card>
<Card size="l">…</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale));return r.jsx("div",{className:"flex flex-col gap-4",children:Cr.map(p=>r.jsx(s,{...e,size:p,className:"max-w-sm",children:r.jsxs(i,{children:[r.jsxs(c,{children:[a.title," (",p,")"]}),r.jsx(C,{children:a.subtitle})]})},p))})}},f={name:"Couleurs",parameters:t(l,`<Card color="brand">…</Card>
<Card color="success">…</Card>
<Card color="neutral">…</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale));return r.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:lr.map(p=>r.jsx(s,{...e,color:p,className:"max-w-sm",children:r.jsxs(i,{children:[r.jsxs(c,{children:[a.title," (",p,")"]}),r.jsx(C,{children:a.subtitle})]})},p))})}},H={name:"Composition",parameters:t(l,`<Card>
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
</Card>`),render:(e,{globals:d})=>{const a=n(o(d.locale));return r.jsxs(s,{...e,className:"max-w-sm",children:[r.jsx(i,{children:r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx(pr,{name:a.person,src:ur()}),r.jsxs("div",{className:"min-w-0 flex-1",children:[r.jsx(c,{children:a.person}),r.jsx(C,{children:a.role})]}),r.jsx(mr,{variant:"success",children:a.status})]})}),r.jsx(m,{children:a.personBody}),r.jsx(or,{children:r.jsx(D,{children:a.message})})]})}};var w,A,N;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(A=u.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var S,L,z;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(L=g.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var M,F,I;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(F=x.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var k,U,_;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(U=y.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var O,R,E;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(R=h.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var P,W,q;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var Z,$,G;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(G=($=v.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=j.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,X,Y;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var rr,ar,er;f.parameters={...f.parameters,docs:{...(rr=f.parameters)==null?void 0:rr.docs,source:{originalSource:`{
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
}`,...(er=(ar=f.parameters)==null?void 0:ar.docs)==null?void 0:er.source}}};var dr,sr,nr;H.parameters={...H.parameters,docs:{...(dr=H.parameters)==null?void 0:dr.docs,source:{originalSource:`{
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
}`,...(nr=(sr=H.parameters)==null?void 0:sr.docs)==null?void 0:nr.source}}};const xr=["Default","WithMedia","HeaderAndFooter","Horizontal","AsLink","AsButton","AsButtonDisabled","Radius","Sizes","Colors","Composition"],Tr=Object.freeze(Object.defineProperty({__proto__:null,AsButton:b,AsButtonDisabled:v,AsLink:h,Colors:f,Composition:H,Default:u,HeaderAndFooter:x,Horizontal:y,Radius:j,Sizes:B,WithMedia:g,__namedExportsOrder:xr,default:gr},Symbol.toStringTag,{value:"Module"}));export{h as A,Tr as C,u as D,x as H,j as R,B as S,g as W,y as a,b,v as c,f as d,H as e};
