function a(t,o,r=""){const e=o.trim(),s=e.includes(`
`)&&!e.startsWith("<>")?`<>
${n(e,4)}
</>`:e,c=r?`${r}

`:"";return{docs:{source:{language:"tsx",code:`${t}

${c}export default () => (
${n(s,4)}
);
`}}}}function u(t,o){return{docs:{source:{language:"tsx",code:`${t}

export default () => {
${n(o.trim(),4)}
};
`}}}}const d=`const plus = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
);`,h=`const chevron = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);`,p=`const search = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="4.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);`;function n(t,o){const r=" ".repeat(o);return t.split(`
`).map(e=>e.length?r+e:e).join(`
`)}export{h as a,u as b,a as c,d as p,p as s};
