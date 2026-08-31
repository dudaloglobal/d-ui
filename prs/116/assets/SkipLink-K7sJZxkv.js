import{j as c,f as u}from"./iframe-D5579FTu.js";const d="Skip to main content";function f({href:e="#main",className:s,children:l=d,onClick:t,...o}){function r(a){if(t==null||t(a),a.defaultPrevented)return;const i=e.startsWith("#")?e.slice(1):"";if(!i)return;const n=document.getElementById(i);n&&(n.focus(),document.activeElement===n&&a.preventDefault())}return c.jsx("a",{...o,href:e,className:u("d-ui-skip-link",s),onClick:r,children:l})}f.__docgenInfo={description:`First focusable control in an app shell. Visible on keyboard focus only.
Point \`href\` at a landmark that is already focusable, e.g.
\`<main id="main" tabIndex={-1}>\`.

If the target cannot take focus, the click is not cancelled so the browser
can still follow the hash.`,methods:[],displayName:"SkipLink",props:{href:{required:!1,tsType:{name:"literal",value:"`#${string}`"},description:"",defaultValue:{value:"'#main'",computed:!1}},children:{defaultValue:{value:"'Skip to main content'",computed:!1},required:!1}}};export{f as S};
