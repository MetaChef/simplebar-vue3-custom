import { provide as b, inject as S, defineComponent as g, ref as p, toRefs as k, onMounted as h, onActivated as w, onDeactivated as O, openBlock as y, createBlock as B, resolveDynamicComponent as _, withCtx as j, renderSlot as E, reactive as x } from "vue";
import C from "simplebar";
function H(e) {
  return Object.keys(e).reduce((n, t) => {
    const r = e[t];
    return r ? { ...n, [t]: r } : n;
  }, {});
}
const v = Symbol("simplebar");
function M(e) {
  b(v, e);
}
function F() {
  return S(v);
}
const L = /* @__PURE__ */ g({
  __name: "ScrollView",
  props: {
    tag: { default: "div" },
    autoHide: null,
    classNames: null,
    clickOnTrack: null,
    direction: null,
    forceVisible: null,
    scrollbarMaxSize: null,
    scrollbarMinSize: null,
    timeout: null
  },
  emits: ["created", "scroll", "wheel"],
  setup(e, { expose: n, emit: t }) {
    const r = e, l = p(null), o = p(null), { tag: V, ...f } = k(r);
    n({ value: l }), M(l);
    function c(a) {
      if (!o.value || a === "activated" && l.value)
        return;
      const u = { ...x(f) }, d = H(u), i = new C(
        o.value,
        Object.keys(d).length > 0 ? d : void 0
      );
      l.value = i;
      const m = i.getScrollElement();
      m.addEventListener("scroll", (s) => {
        t("scroll", s);
      }, { passive: !0 }), m.addEventListener("wheel", (s) => {
        t("wheel", s);
      }, { passive: !0 }), t("created", i);
    }
    return h(() => c("mounted")), w(() => c("activated")), O(() => {
      l.value = null;
    }), (a, u) => (y(), B(_(e.tag), {
      ref_key: "element",
      ref: o
    }, {
      default: j(() => [
        E(a.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
export {
  L as SimpleBar,
  F as useSimplebar
};
