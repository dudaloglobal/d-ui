import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as h}from"./cx-2dOUpm6k.js";const k="Skip to main content";function o({href:t="#main",className:m,children:u=k,onClick:a,...p}){function f(i){if(a==null||a(i),i.defaultPrevented)return;const r=t.startsWith("#")?t.slice(1):"";if(!r)return;const s=document.getElementById(r);s&&(s.focus(),document.activeElement===s&&i.preventDefault())}return e.jsx("a",{...p,href:t,className:h("d-ui-skip-link",m),onClick:f,children:u})}o.__docgenInfo={description:`First focusable control in an app shell. Visible on keyboard focus only.
Point \`href\` at a landmark that is already focusable, e.g.
\`<main id="main" tabIndex={-1}>\`.

If the target cannot take focus, the component falls back to the browser's
native hash navigation rather than swallowing the click.`,methods:[],displayName:"SkipLink",props:{href:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:"",defaultValue:{value:"'#main'",computed:!1}},children:{defaultValue:{value:"'Skip to main content'",computed:!1},required:!1}}};const x={title:"Accessibility/SkipLink",component:o,tags:["autodocs"]},n={render:()=>e.jsxs("div",{children:[e.jsx(o,{}),e.jsx("p",{children:"Tab once — the skip link becomes visible, then Enter moves focus to main."}),e.jsx("main",{id:"main",tabIndex:-1,children:"Main content"})]})};var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div>
      <SkipLink />
      <p>Tab once — the skip link becomes visible, then Enter moves focus to main.</p>
      <main id="main" tabIndex={-1}>
        Main content
      </main>
    </div>
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const g=["Keyboard"];export{n as Keyboard,g as __namedExportsOrder,x as default};
