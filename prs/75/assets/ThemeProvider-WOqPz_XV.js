import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DQxMMF7O.js";import{c as l}from"./cx-BKFaN9jf.js";const o={colorBrand:"--d-ui-color-brand",colorBrandHover:"--d-ui-color-brand-hover",colorOnBrand:"--d-ui-color-on-brand",colorFocus:"--d-ui-color-focus"},s={brand:o.colorBrand,brandHover:o.colorBrandHover,onBrand:o.colorOnBrand,focus:o.colorFocus};function m(e){if(!e)return;const r={};for(const n of Object.keys(s)){const t=e[n];t&&(r[s[n]]=t)}return Object.keys(r).length>0?r:void 0}function p(e){const r=window.matchMedia("(prefers-color-scheme: dark)");return r.addEventListener("change",e),()=>r.removeEventListener("change",e)}function v(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function f(e){return u.useSyncExternalStore(e?p:()=>()=>{},e?v:()=>"light",()=>"light")}function g({mode:e="light",tokens:r,children:n,className:t}){const a=f(e==="system"),i=e==="system"?a:e,d=m(r);return c.jsx("div",{"data-d-ui-theme":i,className:l("d-ui-root",t),style:d,children:n})}g.__docgenInfo={description:"Sets `data-d-ui-theme` on a wrapper. Does not touch `document.documentElement`.",methods:[],displayName:"ThemeProvider",props:{mode:{required:!1,tsType:{name:"union",raw:"ThemeMode | 'system'",elements:[{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},{name:"literal",value:"'system'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},tokens:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  brand: string;
  brandHover: string;
  onBrand: string;
  focus: string;
}`,signature:{properties:[{key:"brand",value:{name:"string",required:!0}},{key:"brandHover",value:{name:"string",required:!0}},{key:"onBrand",value:{name:"string",required:!0}},{key:"focus",value:{name:"string",required:!0}}]}}],raw:`Partial<{
  brand: string;
  brandHover: string;
  onBrand: string;
  focus: string;
}>`},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{g as T};
