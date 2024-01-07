import l, { createContext as m, useContext as D, useMemo as _ } from "react";
const g = m(null), u = { langID: null };
function S({ predefined: n, children: r }) {
  const [e, t] = l.useState({ lang: n }), [c, o] = l.useState(null), a = (i) => {
    t(i);
  };
  return l.useEffect(() => {
    if (!e.lang || u.langID === e.lang)
      return;
    u.langID = e.lang, e.onStart && e.onStart(!0), (async () => {
      try {
        const p = await (await fetch(`./locale/${e.lang}.json`)).json();
        e.onDone && e.onDone(!0), o({
          id: e.lang,
          table: p,
          proposeNewLanguage: a
        });
      } catch (s) {
        e.onError ? e.onError({ error: s, inexistID: e.lang }) : console.error(`Inexistant or error in language file ./locale/${e.lang}.json `), e.onDone && e.onDone(!1);
        return;
      }
    })();
  }, [e.lang]), /* @__PURE__ */ l.createElement(g.Provider, { value: c }, r);
}
function E({ "data-translate": n, t: r, c: e, a: t, children: c }) {
  const o = D(g);
  return _(() => {
    var i;
    let a = e || r || c;
    if (!n || a.startsWith("_<_") && a.endsWith("_>_")) {
      const s = a.match(/_<_(.*?)_\/_(.*?)_>_/);
      if (s)
        n = s[1], a = s[2];
      else
        throw "errore nel servizio di traduzione, manca translate";
    }
    return (i = o == null ? void 0 : o.table) != null && i[n] ? /* @__PURE__ */ l.createElement("span", { "data-from-translate": n }, t ? f(o.table[n], t) : o.table[n]) : /* @__PURE__ */ l.createElement("span", { "data-not-translate": n }, t ? f(a, t) : a);
  }, [o, t]);
}
function f(n, r) {
  if (r === void 0)
    return n;
  const e = Array.isArray(r) ? r : [r];
  let t = 0;
  return n.replace(/%s/g, () => e[t++]);
}
export {
  E as Translate,
  S as TranslateContainer,
  g as TranslateContext
};
//# sourceMappingURL=index.js.map
