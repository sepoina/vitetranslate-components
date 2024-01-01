import c, { createContext as m, useContext as p, useMemo as D } from "react";
const g = m(null), u = { langID: null };
function C({ predefined: e, children: r }) {
  const [t, n] = c.useState(e), [i, o] = c.useState(null), a = (s) => {
    n(s);
  };
  return c.useEffect(() => {
    if (!t || u.langID === t)
      return;
    u.langID = t, (async () => {
      try {
        const h = await (await fetch(`./locale/${t}.json`)).json();
        o({
          id: t,
          table: h,
          setNewLanguage: a
        });
      } catch {
        console.log(`Errore nel file locale/${t}.json `), n(e);
        return;
      }
    })().catch(console.error);
  }, [t]), /* @__PURE__ */ c.createElement(g.Provider, { value: i }, r);
}
function E({ "data-translate": e, t: r, c: t, a: n, children: i }) {
  const o = p(g);
  return D(() => {
    var s;
    let a = t || r || i;
    if (!e) {
      const l = a.match(/_<_(.*?)_\/_(.*?)_>_/);
      if (l)
        e = l[1], a = l[2];
      else
        throw "errore nel servizio di traduzione, manca translate";
    }
    return (s = o == null ? void 0 : o.table) != null && s[e] ? /* @__PURE__ */ c.createElement("span", { "data-from-translate": e }, n ? f(o.table[e], n) : o.table[e]) : /* @__PURE__ */ c.createElement("span", { "data-not-translate": e }, n ? f(a, n) : a);
  }, [o, n]);
}
function f(e, r) {
  if (r === void 0)
    return e;
  const t = Array.isArray(r) ? r : [r];
  let n = 0;
  return e.replace(/%s/g, () => t[n++]);
}
export {
  E as Translate,
  C as TranslateContainer,
  g as TranslateContext
};
//# sourceMappingURL=index.js.map
