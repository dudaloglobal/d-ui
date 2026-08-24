import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as b}from"./cx-2dOUpm6k.js";const k="Skip to main content";function s({href:t="#main",className:m,children:p=k,onClick:i,...u}){function f(a){if(i==null||i(a),a.defaultPrevented)return;const o=t.startsWith("#")?t.slice(1):"";if(!o)return;const r=document.getElementById(o);r&&(a.preventDefault(),r.focus())}return e.jsx("a",{...u,href:t,className:b("d-ui-skip-link",m),onClick:f,children:p})}s.__docgenInfo={description:'First focusable control in an app shell. Visible on keyboard focus only.\nPoint `href` at a landmark that is already focusable, e.g.\n`<main id="main" tabIndex={-1}>`.',methods:[],displayName:"SkipLink",props:{href:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:"",defaultValue:{value:"'#main'",computed:!1}},children:{defaultValue:{value:"'Skip to main content'",computed:!1},required:!1}}};const v={title:"Accessibility/SkipLink",component:s,tags:["autodocs"]},n={render:()=>e.jsxs("div",{children:[e.jsx(s,{}),e.jsx("p",{children:"Tab once — the skip link becomes visible, then Enter moves focus to main."}),e.jsx("main",{id:"main",tabIndex:-1,children:"Main content"})]})};var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div>
      <SkipLink />
      <p>Tab once — the skip link becomes visible, then Enter moves focus to main.</p>
      <main id="main" tabIndex={-1}>
        Main content
      </main>
    </div>
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const y=["Keyboard"];export{n as Keyboard,y as __namedExportsOrder,v as default};
