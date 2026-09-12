import{m as l,d as c,j as t}from"./iframe-av9DYt01.js";import{k as O}from"./arg-types-D35aY_Cn.js";import{c as n}from"./docs-source-C_O40UCi.js";import{T as v}from"./Text-DPxa9K6l.js";import{I as o}from"./Image-C1FdokfZ.js";const m="import { Image } from 'd-ui';";function E(i,a,e,r){const p=`<svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="${e}" viewBox="0 0 ${a} ${e}">
    <rect width="${a}" height="${e}" fill="hsl(${r} 45% 72%)"/>
    <circle cx="${a*.3}" cy="${e*.32}" r="${Math.min(a,e)*.12}" fill="hsl(${r} 60% 88%)"/>
    <path d="M0 ${e} L${a*.4} ${e*.45} L${a*.68} ${e} Z" fill="hsl(${r} 40% 55%)"/>
    <path d="M${a*.5} ${e} L${a*.82} ${e*.58} L${a} ${e} Z" fill="hsl(${r} 38% 46%)"/>
    <text x="${a/2}" y="${e-10}" font-family="sans-serif" font-size="12" fill="hsl(${r} 30% 20%)" text-anchor="middle">${i}</text>
  </svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(p)}`}const s=E("16:9",480,270,200),y=E("3:4",270,360,150),U={title:"Components/Image",component:o,argTypes:O,parameters:{controls:{include:["ratio","fit","radius","loading"]}}},d={name:"Par défaut",args:{src:s,alt:""},parameters:n(m,`{/* width et height ensemble : la place est réservée, la page ne saute pas. */}
<Image src={photo} alt="Amphithéâtre pendant un cours" width={320} height={180} />`),render:(i,{globals:a})=>{const e=l(c(a.locale));return t.jsx("div",{className:"p-6",children:t.jsx(o,{...i,src:s,alt:e.alt,width:320,height:180})})}},g={name:"Miniature",args:{src:s,alt:""},parameters:n(m,`{/* La « miniature » du ticket : Image à une petite taille, pas un composant de plus. */}
<Image src={photo} alt="" ratio="square" width={40} radius="sm" />`),render:(i,{globals:a})=>{const e=l(c(a.locale));return t.jsxs("div",{className:"flex items-center gap-3 p-6",children:[[32,40,64,96].map(r=>t.jsx(o,{src:s,alt:e.alt,ratio:"square",width:r,radius:"sm"},r)),t.jsx(o,{src:s,alt:e.alt,ratio:"square",width:64,radius:"full"})]})}},u={name:"Rapports",args:{src:s,alt:""},parameters:n(m,`<>
    <Image src={photo} alt="…" ratio="square" width={140} />
    <Image src={photo} alt="…" ratio="video" width={200} />
    <Image src={photo} alt="…" ratio="portrait" width={140} />
</>`),render:(i,{globals:a})=>{const e=l(c(a.locale));return t.jsx("div",{className:"flex flex-wrap items-start gap-6 p-6",children:[["square",e.square,140],["video",e.video,220],["portrait",e.portrait,140],["wide",e.wide,260]].map(([r,p,M])=>t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx(v,{size:"body-sm",tone:"muted",children:p}),t.jsx(o,{src:s,alt:e.alt,ratio:r,width:M})]},r))})}},h={name:"Cadrage",args:{src:y,alt:""},parameters:n(m,`<>
    <Image src={portrait} alt="…" ratio="video" fit="cover" width={220} />
    <Image src={portrait} alt="…" ratio="video" fit="contain" width={220} />
</>`),render:(i,{globals:a})=>{const e=l(c(a.locale));return t.jsx("div",{className:"flex flex-wrap items-start gap-6 p-6",children:[["cover",e.cover],["contain",e.contain]].map(([r,p])=>t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx(v,{size:"body-sm",tone:"muted",children:p}),t.jsx(o,{src:y,alt:e.alt,ratio:"video",fit:r,width:220,className:"bg-surface-muted"})]},r))})}},f={name:"Image indisponible",args:{src:"",alt:""},parameters:n(m,`<Image
    src={urlCassee}
    alt="Amphithéâtre pendant un cours"
    ratio="video"
    width={260}
    fallback={<Text size="body-sm">Image indisponible</Text>}
/>`),render:(i,{globals:a})=>{const e=l(c(a.locale));return t.jsxs("div",{className:"flex flex-wrap items-start gap-6 p-6",children:[t.jsx(o,{src:"/d-ui-image-introuvable.png",alt:e.alt,ratio:"video",width:260}),t.jsx(o,{src:"/d-ui-image-introuvable.png",alt:e.alt,ratio:"video",width:260,fallback:t.jsx(v,{size:"body-sm",children:e.broken})})]})}},x={name:"Décorative",args:{src:s,alt:""},parameters:n(m,`<figure>
    {/* La légende porte déjà le sens : l'image n'a rien à ajouter. */}
    <Image src={photo} alt="" ratio="video" width={280} />
    <figcaption>Rentrée 2026</figcaption>
</figure>`),render:(i,{globals:a})=>{const e=l(c(a.locale));return t.jsxs("figure",{className:"m-0 flex w-70 flex-col gap-2 p-6",children:[t.jsx(o,{src:s,alt:"",ratio:"video"}),t.jsx("figcaption",{children:t.jsx(v,{size:"body-sm",tone:"muted",children:e.caption})})]})}};var b,I,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Par défaut',
  args: {
    src: LANDSCAPE,
    alt: ''
  },
  parameters: componentSource(importImage, \`{/* width et height ensemble : la place est réservée, la page ne saute pas. */}
<Image src={photo} alt="Amphithéâtre pendant un cours" width={320} height={180} />\`),
  render: (args, {
    globals
  }) => {
    const copy = imageCopy(docsLocale(globals.locale));
    return <div className="p-6">
        <Image {...args} src={LANDSCAPE} alt={copy.alt} width={320} height={180} />
      </div>;
  }
}`,...(w=(I=d.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var j,$,A;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Miniature',
  args: {
    src: LANDSCAPE,
    alt: ''
  },
  parameters: componentSource(importImage, \`{/* La « miniature » du ticket : Image à une petite taille, pas un composant de plus. */}
<Image src={photo} alt="" ratio="square" width={40} radius="sm" />\`),
  render: (_, {
    globals
  }) => {
    const copy = imageCopy(docsLocale(globals.locale));
    return <div className="flex items-center gap-3 p-6">
        {([32, 40, 64, 96] as const).map(size => <Image key={size} src={LANDSCAPE} alt={copy.alt} ratio="square" width={size} radius="sm" />)}
        <Image src={LANDSCAPE} alt={copy.alt} ratio="square" width={64} radius="full" />
      </div>;
  }
}`,...(A=($=g.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var N,L,S;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Rapports',
  args: {
    src: LANDSCAPE,
    alt: ''
  },
  parameters: componentSource(importImage, \`<>
    <Image src={photo} alt="…" ratio="square" width={140} />
    <Image src={photo} alt="…" ratio="video" width={200} />
    <Image src={photo} alt="…" ratio="portrait" width={140} />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = imageCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-start gap-6 p-6">
        {([['square', copy.square, 140], ['video', copy.video, 220], ['portrait', copy.portrait, 140], ['wide', copy.wide, 260]] as const).map(([ratio, label, width]) => <div key={ratio} className="flex flex-col gap-2">
            <Text size="body-sm" tone="muted">
              {label}
            </Text>
            <Image src={LANDSCAPE} alt={copy.alt} ratio={ratio} width={width} />
          </div>)}
      </div>;
  }
}`,...(S=(L=u.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var T,C,D;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Cadrage',
  args: {
    src: PORTRAIT,
    alt: ''
  },
  parameters: componentSource(importImage, \`<>
    <Image src={portrait} alt="…" ratio="video" fit="cover" width={220} />
    <Image src={portrait} alt="…" ratio="video" fit="contain" width={220} />
</>\`),
  render: (_, {
    globals
  }) => {
    const copy = imageCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-start gap-6 p-6">
        {/* Un portrait dans un cadre paysage : \`cover\` rogne, \`contain\` laisse du vide. */}
        {([['cover', copy.cover], ['contain', copy.contain]] as const).map(([fit, label]) => <div key={fit} className="flex flex-col gap-2">
            <Text size="body-sm" tone="muted">
              {label}
            </Text>
            <Image src={PORTRAIT} alt={copy.alt} ratio="video" fit={fit} width={220} className="bg-surface-muted" />
          </div>)}
      </div>;
  }
}`,...(D=(C=h.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var P,_,R;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Image indisponible',
  args: {
    src: '',
    alt: ''
  },
  parameters: componentSource(importImage, \`<Image
    src={urlCassee}
    alt="Amphithéâtre pendant un cours"
    ratio="video"
    width={260}
    fallback={<Text size="body-sm">Image indisponible</Text>}
/>\`),
  render: (_, {
    globals
  }) => {
    const copy = imageCopy(docsLocale(globals.locale));
    return <div className="flex flex-wrap items-start gap-6 p-6">
        {/*
          Le repli garde la place réservée et le nom accessible : une image
          cassée reste une information, pas un trou dans la page.
         */}
        <Image src="/d-ui-image-introuvable.png" alt={copy.alt} ratio="video" width={260} />
        <Image src="/d-ui-image-introuvable.png" alt={copy.alt} ratio="video" width={260} fallback={<Text size="body-sm">{copy.broken}</Text>} />
      </div>;
  }
}`,...(R=(_=f.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var z,k,q;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Décorative',
  args: {
    src: LANDSCAPE,
    alt: ''
  },
  parameters: componentSource(importImage, \`<figure>
    {/* La légende porte déjà le sens : l'image n'a rien à ajouter. */}
    <Image src={photo} alt="" ratio="video" width={280} />
    <figcaption>Rentrée 2026</figcaption>
</figure>\`),
  render: (_, {
    globals
  }) => {
    const copy = imageCopy(docsLocale(globals.locale));
    return <figure className="m-0 flex w-70 flex-col gap-2 p-6">
        <Image src={LANDSCAPE} alt="" ratio="video" />
        <figcaption>
          <Text size="body-sm" tone="muted">
            {copy.caption}
          </Text>
        </figcaption>
      </figure>;
  }
}`,...(q=(k=x.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const F=["Default","Thumbnail","Ratios","Fit","Unavailable","Decorative"],K=Object.freeze(Object.defineProperty({__proto__:null,Decorative:x,Default:d,Fit:h,Ratios:u,Thumbnail:g,Unavailable:f,__namedExportsOrder:F,default:U},Symbol.toStringTag,{value:"Module"}));export{d as D,h as F,K as I,u as R,g as T,f as U,x as a};
