import{n as u,s as h}from"./scheduler.D-KrruXr.js";const n=[];function q(e,r){return{subscribe:p(e,r).subscribe}}function p(e,r=u){let i;const b=new Set;function o(t){if(h(e,t)&&(e=t,i)){const c=!n.length;for(const s of b)s[1](),n.push(s,e);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(t){o(t(e))}function _(t,c=u){const s=[t,c];return b.add(s),b.size===1&&(i=r(o,a)||u),t(e),()=>{b.delete(s),b.size===0&&i&&(i(),i=null)}}return{set:o,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_17b191b)==null?void 0:f.base)??"";var l;const k=((l=globalThis.__sveltekit_17b191b)==null?void 0:l.assets)??d;export{k as a,d as b,q as r,p as w};
