import{d as Y,J as w,e as L,x as h,G as z,f as c,a1 as N,o,c as $,b as l,w as u,g as p,H as b,I as x,F as k,u as U,K as I,B as W,h as n,V as B,a2 as K,y as j,C as D,a3 as H,Q as G,W as J,X as M,Y as O,Z as Q,T as X,a0 as Z,$ as ee,i as te}from"./app-DSuOaYDB.js";import{_ as ae}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-321NMgxJ.js";import{u as oe,a as ne}from"./animation-D5PBAU1A.js";import{_ as re}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-D5eMFbyh.js";import"./index-x8TNrC4q.js";const se={font:"serif black"},le=Y({__name:"YunCategoryChildItem",props:{i:{},categoryItem:{},parentKey:{}},setup(C){const{locale:s}=w();function m(e){const a=s.value==="zh-CN"?"zh":s.value;return e[`title_${a}`]?e[`title_${a}`]:e.title}const t=L(),y=h(()=>{const e=t.query.category||"";return Array.isArray(e)?[e]:e.split("/")});return(e,a)=>{const g=A,f=z("RouterLink");return c(N)(e.categoryItem)?(o(),$(g,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${e.categoryItem.name}`:e.categoryItem.name,category:e.categoryItem,collapsable:!y.value.includes(e.categoryItem.name)},null,8,["parent-key","category","collapsable"])):(o(),l(k,{key:1},[e.categoryItem.title?(o(),$(f,{key:0,to:e.categoryItem.path||"",class:"inline-flex items-center gap-2 px-3 py-2 w-full rounded",hover:"bg-black/5"},{default:u(()=>[a[0]||(a[0]=p("div",{"i-ri-file-text-line":""},null,-1)),p("span",se,b(m(e.categoryItem)),1)]),_:1},8,["to"])):x("v-if",!0)],64))}}}),ie={key:0,"i-ri-folder-add-line":""},ce={key:1,class:"text-$va-c-primary dark:text-$va-c-primary-lighter","i-ri-folder-reduce-line":""},ue={class:"rounded-full px-1.5 bg-black/5 shadow-sm",text:"xs black/55"},pe={key:0},A=Y({__name:"YunCategory",props:{i:{},parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(C){const s=C,m=U(),t=I(s.collapsable),{t:y}=w(),e=I(),{show:a}=oe(e);function g(r){t.value=!1,m.push({query:{category:r}}),a()}W(()=>{const r=document.querySelector(".post-collapse-container");r&&(e.value=r)});const f=I();return s.level===1&&ne(f,{i:s.i||0,y:20,duration:200}),(r,_)=>{const i=le;return o(),l(k,null,[p("li",{ref_key:"categoryRef",ref:f,class:"category-list-item inline-flex items-center cursor-pointer w-full gap-2 px-3 py-2 rounded",hover:"bg-black/5"},[p("span",{class:"folder-action inline-flex",hover:"text-$va-c-primary-lighter",onClick:_[0]||(_[0]=d=>t.value=!t.value)},[t.value?(o(),l("div",ie)):(o(),l("div",ce))]),p("span",{class:"category-name inline-flex items-center gap-2 w-full",onClick:_[1]||(_[1]=d=>g(r.parentKey))},[p("span",null,b(r.category.name==="Uncategorized"?c(y)("category.uncategorized"):r.category.name),1),p("span",ue,b(r.category.total),1)])],512),n(K,{"enter-active-class":"v-enter-active","enter-from-class":"v-enter-from","leave-active-class":"v-leave-active","leave-to-class":"v-leave-to",duration:{enter:200,leave:0}},{default:u(()=>[t.value?x("v-if",!0):(o(),l("ul",pe,[(o(!0),l(k,null,B(r.category.children.values(),(d,v)=>(o(),l("li",{key:v,class:"post-list-item text-$va-c-text",m:"l-4",hover:"text-$va-c-primary-lighter"},[n(i,{i:v,"category-item":d,"parent-key":r.parentKey},null,8,["i","category-item","parent-key"])]))),128))]))]),_:1})],64)}}}),me={flex:"~ col"},ge=Y({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(C){const s=L(),m=h(()=>{const t=s.query.category||"";return Array.isArray(t)?[t]:t.split("/")});return(t,y)=>{const e=A;return o(),l("div",me,[(o(!0),l(k,null,B(t.categories.values(),(a,g)=>(o(),l("ul",{key:a.name,class:"category-list"},[n(e,{i:g,"parent-key":a.name,category:a,level:t.level+1,collapsable:!m.value.includes(a.name)},null,8,["i","parent-key","category","level","collapsable"])]))),128))])}}}),ye={text:"center",class:"yun-text-light",p:"2"},ke=Y({__name:"categories",setup(C){const{t:s}=w(),m=j(),t=D(),y=L(),e=h(()=>y.query.category||""),a=H(),g=h(()=>(t.value.icon||(t.value.icon="i-ri-folder-2-line"),t.value.icon)),f=h(()=>m.postList.filter(i=>i.categories&&e.value!=="Uncategorized"?typeof i.categories=="string"?i.categories===e.value:i.categories.join("/").startsWith(e.value)&&i.categories[0]===e.value.split("/")[0]:!i.categories&&e.value==="Uncategorized"?i.categories===void 0:!1)),r=G(t);return J([M({"@type":"CollectionPage"})]),(_,i)=>{const d=Q,v=re,S=ge,R=z("RouterView"),T=ae,V=X,q=Z,P=ee,E=te;return o(),l(k,null,[n(P,null,{default:u(()=>[n(d),n(R,null,{default:u(({Component:F})=>[(o(),$(O(F),null,{"main-header":u(()=>[n(v,{title:c(r)||c(s)("menu.categories"),icon:g.value,color:c(t).color,"page-title-class":c(t).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":u(()=>[n(K,{"enter-active-class":"animate-fade-in animate-duration-400",appear:""},{default:u(()=>[p("div",ye,b(c(s)("counter.categories",Array.from(c(a).children).length)),1)]),_:1}),n(S,{categories:c(a).children},null,8,["categories"]),n(R)]),"main-nav-before":u(()=>[e.value?(o(),$(V,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:u(()=>[n(v,{m:"t-10",title:e.value==="Uncategorized"?c(s)("category.uncategorized"):e.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),n(T,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:f.value},null,8,["posts"])]),_:1})):x("v-if",!0)]),_:2},1024))]),_:1}),n(q)]),_:1}),n(E)],64)}}});export{ke as default};
