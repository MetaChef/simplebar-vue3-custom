(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("simplebar")):typeof define=="function"&&define.amd?define(["exports","vue","simplebar"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n["simplebar-vue3"]={},n.vue,n.SimpleBar))})(this,function(n,e,S){"use strict";const v=(t=>t&&typeof t=="object"&&"default"in t?t:{default:t})(S);function y(t){return Object.keys(t).reduce((r,l)=>{const o=t[l];return o?{...r,[l]:o}:r},{})}const d=Symbol("simplebar");function _(t){e.provide(d,t)}function g(){return e.inject(d)}const h=e.defineComponent({__name:"ScrollView",props:{tag:{default:"div"},autoHide:null,classNames:null,clickOnTrack:null,direction:null,forceVisible:null,scrollbarMaxSize:null,scrollbarMinSize:null,timeout:null},emits:["created","scroll","wheel"],setup(t,{expose:r,emit:l}){const o=t,i=e.ref(null),a=e.ref(null),{tag:O,...j}=e.toRefs(o);r({value:i}),_(i);function f(s){if(!a.value||s==="activated"&&i.value)return;const p={...e.reactive(j)},m=y(p),c=new v.default(a.value,Object.keys(m).length>0?m:void 0);i.value=c;const b=c.getScrollElement();b.addEventListener("scroll",u=>{l("scroll",u)},{passive:!0}),b.addEventListener("wheel",u=>{l("wheel",u)},{passive:!0}),l("created",c)}return e.onMounted(()=>f("mounted")),e.onActivated(()=>f("activated")),e.onDeactivated(()=>{i.value=null}),(s,p)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.tag),{ref_key:"element",ref:a},{default:e.withCtx(()=>[e.renderSlot(s.$slots,"default")]),_:3},512))}});n.SimpleBar=h,n.useSimplebar=g,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
