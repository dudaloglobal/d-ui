import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as f}from"./cx-2dOUpm6k.js";const b="Skip to main content";function k(n){const e=document.getElementById(n);e&&(e.hasAttribute("tabindex")||e.setAttribute("tabindex","-1"),e.focus())}function o({href:n="#main",className:e,children:m=b,onClick:a,...u}){function p(s){if(a==null||a(s),s.defaultPrevented)return;const r=n.startsWith("#")?n.slice(1):"";r&&(s.preventDefault(),k(r))}return t.jsx("a",{href:n,className:f("d-ui-skip-link",e),onClick:p,...u,children:m})}o.__docgenInfo={description:'First focusable control in an app shell. Visible on keyboard focus only.\nPoint `href` at a `main` landmark (`id="main"`).',methods:[],displayName:"SkipLink",props:{href:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:"",defaultValue:{value:"'#main'",computed:!1}},children:{defaultValue:{value:"'Skip to main content'",computed:!1},required:!1}}};const v={title:"Accessibility/SkipLink",component:o,tags:["autodocs"]},i={render:()=>t.jsxs("div",{children:[t.jsx(o,{}),t.jsx("p",{children:"Tab once — the skip link becomes visible, then Enter moves focus to main."}),t.jsx("main",{id:"main",tabIndex:-1,children:"Main content"})]})};var c,d,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div>
      <SkipLink />
      <p>Tab once — the skip link becomes visible, then Enter moves focus to main.</p>
      <main id="main" tabIndex={-1}>
        Main content
      </main>
    </div>
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const y=["Keyboard"];export{i as Keyboard,y as __namedExportsOrder,v as default};
