import{d,G as f,o as n,c as i,b as c,g as u,f as A,au as S,av as M,K as k,aw as B,H as y,O as g,h as m,w as _,aa as E,F as O,V as T,ax as W,a2 as z,ay as D,_ as I,ad as L,x as N,I as p,r as P,T as j}from"./app-DSuOaYDB.js";import{i as v,a as w}from"./index-C5okkQwF.js";const F=d({__name:"YunArtalk",setup(r){return v(w)||(void 0)(),(a,t)=>{const s=f("ArtalkClient");return n(),i(s)}}}),R=d({__name:"YunTwikoo",setup(r){return v(w)||(void 0)(),(a,t)=>(n(),c("div",null,t[0]||(t[0]=[u("div",{id:"tcomment",w:"full"},null,-1)])))}}),U=d({__name:"YunWaline",setup(r){if(v(w))throw new Error("Please install valaxy-addon-waline");const a=(void 0)();return(t,s)=>{const e=f("WalineClient");return n(),i(e,{w:"full",options:A(a).options||{serverURL:""}},null,8,["options"])}}}),G={"case-capital":"","op-90":""},H={class:"shadow-lg select-options absolute translate-y-1 left-0 top-full w-full bg-$va-c-bg-light overflow-hidden rounded-1"},K=["onClick"],q=d({__name:"YunSelect",props:S({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const a=M(r,"modelValue"),t=k(!1);B("click",()=>{t.value=!1});function s(e){e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),t.value=!t.value}return(e,o)=>(n(),c("div",{class:"relative h-8 w-30 text-$va-c-text-2 z-$yun-z-select",onMousedown:o[0]||(o[0]=D(()=>{},["stop"]))},[u("button",{class:g(["flex h-full w-full px-2 items-center justify-between rounded transition",t.value?"border-$va-c-primary":""]),border:"~ gray op-30",onClick:s},[u("span",G,y(a.value),1),o[1]||(o[1]=u("div",{"inline-flex":"","i-ri-arrow-down-s-line":""},null,-1))],2),m(z,{persisted:""},{default:_(()=>[E(u("ul",H,[(n(!0),c(O,null,T(e.options,l=>(n(),c("li",{key:l,class:g(["cursor-pointer list-none px-2 hover:bg-$va-c-primary-light hover:text-white case-capital",{"bg-$va-c-primary text-white":a.value===l}]),onClick:x=>a.value=l},y(l),11,K))),128))],512),[[W,t.value]])]),_:1})],32))}}),J=I(q,[["__scopeId","data-v-63887b80"]]),Q={key:0,class:"flex justify-end w-full mb-2"},ee=d({__name:"YunComment",setup(r){const a=L(),t=["valaxy-addon-waline","valaxy-addon-twikoo","valaxy-addon-artalk"],s=N(()=>t.filter(o=>a.value.addons[o]).map(o=>o.split("-")[2])),e=k(s.value[0]);return(o,l)=>{const x=J,C=U,h=R,b=F,$=f("ClientOnly"),V=j;return n(),i(V,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:_(()=>[m($,null,{default:_(()=>[s.value.length>1?(n(),c("div",Q,[m(x,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=Y=>e.value=Y),options:s.value},null,8,["modelValue","options"])])):p("v-if",!0),e.value==="waline"?(n(),i(C,{key:1})):p("v-if",!0),e.value==="twikoo"?(n(),i(h,{key:2})):p("v-if",!0),e.value==="artalk"?(n(),i(b,{key:3})):p("v-if",!0),P(o.$slots,"default")]),_:3})]),_:3})}}});export{ee as _};
