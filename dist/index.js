import u, { createContext as T, useContext as p, useMemo as x } from "react";
import E from "path";
import d from "fs";
const b = T(null), m = { langID: null };
function I({ predefined: e, children: a }) {
  const [t, n] = u.useState(e), [r, o] = u.useState(null), l = (s) => {
    n(s);
  };
  return u.useEffect(() => {
    if (!t || m.langID === t)
      return;
    m.langID = t, (async () => {
      try {
        const i = await (await fetch(`./locale/${t}.json`)).json();
        o({
          id: t,
          table: i,
          setNewLanguage: l
        });
      } catch {
        console.log(`Errore nel file locale/${t}.json `), n(e);
        return;
      }
    })().catch(console.error);
  }, [t]), /* @__PURE__ */ u.createElement(b.Provider, { value: r }, a);
}
function O({ "data-translate": e, t: a, c: t, a: n, children: r }) {
  const o = p(b);
  return x(() => {
    var s;
    let l = t || a || r;
    if (!e) {
      const c = l.match(/_<_(.*?)_\/_(.*?)_>_/);
      if (c)
        e = c[1], l = c[2];
      else
        throw "errore nel servizio di traduzione, manca translate";
    }
    return (s = o == null ? void 0 : o.table) != null && s[e] ? /* @__PURE__ */ u.createElement("span", { "data-from-translate": e }, n ? S(o.table[e], n) : o.table[e]) : /* @__PURE__ */ u.createElement("span", { "data-not-translate": e }, n ? S(l, n) : l);
  }, [o, n]);
}
function S(e, a) {
  if (a === void 0)
    return e;
  const t = Array.isArray(a) ? a : [a];
  let n = 0;
  return e.replace(/%s/g, () => t[n++]);
}
function w(e) {
  var a, t, n;
  if (((t = (a = e == null ? void 0 : e.container) == null ? void 0 : a.children) == null ? void 0 : t.length) === 1) {
    const r = e.container.children[0];
    return r.type === "JSXText" ? r.value : r.type === "JSXExpressionContainer" && ((n = r == null ? void 0 : r.expression) != null && n.value) ? r.expression.value : !1;
  }
  return !1;
}
function y(e, a) {
  var n, r, o, l;
  const t = a.node.attributes.find(
    (s) => {
      var c;
      return ((c = s == null ? void 0 : s.name) == null ? void 0 : c.name) === e;
    }
  );
  return t ? ((n = t == null ? void 0 : t.value) == null ? void 0 : n.type) === "StringLiteral" ? t.value.value : ((r = t == null ? void 0 : t.value) == null ? void 0 : r.type) === "JSXExpressionContainer" && ((l = (o = t == null ? void 0 : t.value) == null ? void 0 : o.expression) == null ? void 0 : l.type) === "StringLiteral" ? t.value.expression.value : !1 : !1;
}
function L(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var v = { exports: {} };
(function(e, a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), t.BASE = 2166136261;
  function t(n, r = t.BASE) {
    const o = n.length;
    for (let l = 0; l < o; l++)
      r ^= n.charCodeAt(l), r += (r << 1) + (r << 4) + (r << 7) + (r << 8) + (r << 24);
    return r >>> 0;
  }
  a.default = t, e.exports = t;
})(v, v.exports);
var A = v.exports;
const C = /* @__PURE__ */ L(A);
function g(e, a) {
  var r, o;
  if (!((r = e == null ? void 0 : e.node) != null && r.value) || !/_%_(.*?)_%_/.test(e.node.value))
    return;
  const t = (o = /_%_(.*?)_%_/.exec(e.node.value)) == null ? void 0 : o[1];
  if (!t)
    return;
  const n = h(t, a);
  e.node.value = _(
    e.node.value,
    n,
    t
  ), e.node.extra.rawValue && (e.node.extra.rawValue = _(
    e.node.extra.rawValue,
    n,
    t
  )), e.node.extra.raw && (e.node.extra.raw = _(
    e.node.extra.raw,
    n,
    t
  ));
}
function _(e, a, t) {
  const n = `_<_${a}_/_${t}_>_`;
  return e.replace(/_%_(.*?)_%_/, n);
}
function h(e, a) {
  const t = E.parse(a.filename).name, n = C(e).toString(36), r = `${t}_${n}`;
  return globalThis.TranslateService.baseLng[r] = e, r;
}
const V = (e) => {
  const { types: a } = e;
  return {
    visitor: {
      // Aggiungi il tuo visitor per le stringhe costanti
      StringLiteral: g,
      JSXText: g,
      TemplateElement: g,
      JSXOpeningElement(t, n) {
        if (t.node.name.name !== "Translate" || t.node.attributes.find(
          (i) => {
            var f;
            return ((f = i == null ? void 0 : i.name) == null ? void 0 : f.name) === "data-translate";
          }
        ) || t.node.attributes.find((i) => (i == null ? void 0 : i.name.name) === "c"))
          return;
        const l = t.node.attributes.find(
          (i) => {
            var f;
            return ((f = i == null ? void 0 : i.name) == null ? void 0 : f.name) === "t";
          }
        ) ? y("t", t) : w(t);
        if (l === !1)
          throw "Errore, Translate deve contenere solo stringhe";
        const s = h(l, n), c = a.jSXAttribute(
          a.jSXIdentifier("data-translate"),
          a.stringLiteral(s)
        );
        t.node.attributes.push(c);
      }
    }
  };
};
function F(e) {
  return {
    name: "onRollupTranslate",
    buildStart: {
      sequential: !0,
      order: "pre",
      handler: () => {
        globalThis.TranslateService = e, globalThis.TranslateService.baseLng = {
          __lngVersion__: N()
        }, console.log("Preparo il servizio traduzioni.");
      }
    },
    buildEnd: {
      sequential: !0,
      order: "post",
      handler: () => {
        D();
      }
    }
  };
}
function D() {
  const e = globalThis.TranslateService.file, a = globalThis.TranslateService.dist;
  console.log("TRANSLATE ---------------------------------------------"), console.log("Carico traduzione base.");
  try {
    d.readFile(e, "utf8", (t, n) => {
      let r = { newest: !0, changed: !0 }, o = null;
      if (t)
        console.log(`Non esiste ancora il file ${e}, tento di crearlo`), o = globalThis.TranslateService.baseLng;
      else {
        o = JSON.parse(n);
        const l = globalThis.TranslateService.baseLng;
        r = $(o, l);
      }
      if (r.changed) {
        const l = r.newest ? "Nuovo file," : `(${r.added} agginte, ${r.deleted} rimosse)`;
        console.log(`Update avvenuto: ${l} salvo.`), d.writeFile(
          e,
          JSON.stringify(o, null, 2),
          "utf8",
          (s) => {
            s ? console.error(`Errore durante la scrittura su ${e}`, s) : (console.log(`Dati scritti con successo su ${e}`), d.copyFile(e, a, (c) => {
              c || console.log(`Copiato con successo su ${a}`), console.log(
                "END TRANSLATE ---------------------------------------------"
              );
            }));
          }
        );
      } else
        console.log("Nessun cambiamento."), console.log(
          "END TRANSLATE ---------------------------------------------"
        );
    });
  } catch (t) {
    console.error(`Errore l'elaborazione di ${e}, cancellalo`, t);
    return;
  }
}
function $(e, a) {
  const t = { changed: !1, deleted: 0, added: 0 };
  for (const n in e)
    n in a || (delete e[n], t.changed = !0, t.deleted += 1);
  for (const n in a)
    n in e || (e[n] = a[n], t.changed = !0, t.added += 1);
  return t.changed && (e.__lngVersion__ = a.__lngVersion__), t;
}
function N() {
  return Date.now();
}
export {
  O as Translate,
  I as TranslateContainer,
  b as TranslateContext,
  V as babelTranslate,
  F as rollupTranslate
};
//# sourceMappingURL=index.js.map
