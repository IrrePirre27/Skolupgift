import{s as R,n as T}from"../chunks/scheduler.B7_pnvhY.js";import{S as U,i as W,e as w,t as L,s as V,c as z,a as E,b as N,d as u,f as C,k as X,l as D,g as v,h as y,u as Y,v as Z,j,w as O,x as q,y as I}from"../chunks/index.DlG3bBMN.js";import{e as F}from"../chunks/each.D6YF6ztN.js";function A(i,l,t){const r=i.slice();return r[11]=l[t],r[13]=t,r}function K(i,l,t){const r=i.slice();return r[14]=l[t],r[16]=t,r}function x(i){let l,t=i[14].letter+"",r;return{c(){l=w("div"),r=L(t),this.h()},l(s){l=z(s,"DIV",{class:!0,style:!0});var e=E(l);r=N(e,t),e.forEach(u),this.h()},h(){D(l,"class","pixel svelte-1bsdzzc"),I(l,"background",i[14].color),I(l,"width",H+"px"),I(l,"height",H+"px")},m(s,e){v(s,l,e),y(l,r)},p(s,e){e&1&&t!==(t=s[14].letter+"")&&j(r,t),e&1&&I(l,"background",s[14].color)},d(s){s&&u(l)}}}function $(i){let l,t,r=Math.abs(i[4])==1?i[4]==1?">":"<":i[5]==1?"v":"^",s,e=i[14].letter!=""&&B(i);return{c(){e&&e.c(),l=V(),t=w("div"),s=L(r),this.h()},l(o){e&&e.l(o),l=C(o),t=z(o,"DIV",{class:!0,style:!0});var c=E(t);s=N(c,r),c.forEach(u),this.h()},h(){D(t,"class","pixel svelte-1bsdzzc"),I(t,"background",te),I(t,"width",H+"px"),I(t,"height",H+"px")},m(o,c){e&&e.m(o,c),v(o,l,c),v(o,t,c),y(t,s)},p(o,c){o[14].letter!=""?e?e.p(o,c):(e=B(o),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null),c&48&&r!==(r=Math.abs(o[4])==1?o[4]==1?">":"<":o[5]==1?"v":"^")&&j(s,r)},d(o){o&&(u(l),u(t)),e&&e.d(o)}}}function B(i){let l=i[7](i[14])+"",t;return{c(){t=L(l)},l(r){t=N(r,l)},m(r,s){v(r,t,s)},p(r,s){s&1&&l!==(l=r[7](r[14])+"")&&j(t,l)},d(r){r&&u(t)}}}function G(i){let l;function t(e,o){return e[13]==e[3]&&e[16]==e[2]?$:x}let r=t(i),s=r(i);return{c(){s.c(),l=q()},l(e){s.l(e),l=q()},m(e,o){s.m(e,o),v(e,l,o)},p(e,o){r===(r=t(e))&&s?s.p(e,o):(s.d(1),s=r(e),s&&(s.c(),s.m(l.parentNode,l)))},d(e){e&&u(l),s.d(e)}}}function J(i){let l,t,r=F(i[11]),s=[];for(let e=0;e<r.length;e+=1)s[e]=G(K(i,r,e));return{c(){l=w("div");for(let e=0;e<s.length;e+=1)s[e].c();t=V(),this.h()},l(e){l=z(e,"DIV",{class:!0});var o=E(l);for(let c=0;c<s.length;c+=1)s[c].l(o);t=C(o),o.forEach(u),this.h()},h(){D(l,"class","row svelte-1bsdzzc")},m(e,o){v(e,l,o);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(l,null);y(l,t)},p(e,o){if(o&189){r=F(e[11]);let c;for(c=0;c<r.length;c+=1){const _=K(e,r,c);s[c]?s[c].p(_,o):(s[c]=G(_),s[c].c(),s[c].m(l,t))}for(;c<s.length;c+=1)s[c].d(1);s.length=r.length}},d(e){e&&u(l),O(s,e)}}}function ee(i){let l,t,r,s,e,o,c,_,p="",d,M,g=F(i[0]),a=[];for(let n=0;n<g.length;n+=1)a[n]=J(A(i,g,n));return{c(){l=w("main"),t=w("h1"),r=L(i[1]),s=V(),e=w("div"),o=w("div");for(let n=0;n<a.length;n+=1)a[n].c();c=V(),_=w("div"),_.innerHTML=p,this.h()},l(n){l=z(n,"MAIN",{class:!0});var h=E(l);t=z(h,"H1",{});var f=E(t);r=N(f,i[1]),f.forEach(u),s=C(h),e=z(h,"DIV",{class:!0});var m=E(e);o=z(m,"DIV",{class:!0});var b=E(o);for(let k=0;k<a.length;k+=1)a[k].l(b);b.forEach(u),m.forEach(u),h.forEach(u),c=C(n),_=z(n,"DIV",{class:!0,"data-svelte-h":!0}),X(_)!=="svelte-2h5371"&&(_.innerHTML=p),this.h()},h(){D(o,"class","grid svelte-1bsdzzc"),D(e,"class","the_maze svelte-1bsdzzc"),D(l,"class","svelte-1bsdzzc"),D(_,"class","backdrop svelte-1bsdzzc")},m(n,h){v(n,l,h),y(l,t),y(t,r),y(l,s),y(l,e),y(e,o);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(o,null);v(n,c,h),v(n,_,h),d||(M=Y(window,"keydown",Z(i[6])),d=!0)},p(n,[h]){if(h&2&&j(r,n[1]),h&189){g=F(n[0]);let f;for(f=0;f<g.length;f+=1){const m=A(n,g,f);a[f]?a[f].p(m,h):(a[f]=J(m),a[f].c(),a[f].m(o,null))}for(;f<a.length;f+=1)a[f].d(1);a.length=g.length}},i:T,o:T,d(n){n&&(u(l),u(c),u(_)),O(a,n),d=!1,M()}}}let P="transparent",te="#0E784D",le="#000000",se="#FFFF00",S=24,H=20;function re(i,l,t){let r=".............o..................o....................o........................................o...............................o........................................o....................o..........".split(""),s,e=3;function o(a){let n=[];r.forEach(m=>{let b;do b=Math.floor(Math.random()*a*a);while(n.length>0&&n.filter(k=>k.id==b).length!=0);n.push({l:m,id:b})}),t(0,s=[]);let h,f=0;for(let m=0;m<a;m++){h=[];for(let b=0;b<a;b++){let k=n.filter(Q=>Q.id==f);h.push(k.length>0?{color:k[0].l=="."?le:se,letter:k[0].l}:{color:P,letter:""}),f++}s.push(h)}}o(S);let c=0,_=0,p=0,d=0;function M(a){let n=!0;switch(a.keyCode){case 38:t(5,d=-1),t(4,p=0);break;case 40:t(5,d=1),t(4,p=0);break;case 37:t(4,p=-1),t(5,d=0);break;case 39:t(4,p=1),t(5,d=0);break;case 32:if(e>=1){let h=c+p,f=_+d,m=s[f][h];m.color=P,m.letter="",n=!1,t(1,e=e-1)}t(0,s);break}if(n){let h=c+p,f=_+d;f>-1&&f<S&&h>-1&&h<S?(t(2,c=h),t(3,_=f)):(t(5,d=-d),t(4,p=-p))}}function g(a){a.letter=="."?(t(2,c-=p),t(3,_-=d)):(a.letter="",a.color=P,t(0,s),t(1,e=e+1))}return[s,e,c,_,p,d,M,g]}class ie extends U{constructor(l){super(),W(this,l,re,ee,R,{})}}export{ie as component};
