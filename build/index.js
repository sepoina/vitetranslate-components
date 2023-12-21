(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Example = {}, global.React));
})(this, (function (exports, React$1) { 'use strict';

  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React$1);

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var regeneratorRuntime$1 = {exports: {}};

  var _typeof = {exports: {}};

  (function (module) {
  	function _typeof(o) {
  	  "@babel/helpers - typeof";

  	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
  	    return typeof o;
  	  } : function (o) {
  	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
  	}
  	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  } (_typeof));

  var _typeofExports = _typeof.exports;

  (function (module) {
  	var _typeof = _typeofExports["default"];
  	function _regeneratorRuntime() {
  	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
  	    return e;
  	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  	  var t,
  	    e = {},
  	    r = Object.prototype,
  	    n = r.hasOwnProperty,
  	    o = Object.defineProperty || function (t, e, r) {
  	      t[e] = r.value;
  	    },
  	    i = "function" == typeof Symbol ? Symbol : {},
  	    a = i.iterator || "@@iterator",
  	    c = i.asyncIterator || "@@asyncIterator",
  	    u = i.toStringTag || "@@toStringTag";
  	  function define(t, e, r) {
  	    return Object.defineProperty(t, e, {
  	      value: r,
  	      enumerable: !0,
  	      configurable: !0,
  	      writable: !0
  	    }), t[e];
  	  }
  	  try {
  	    define({}, "");
  	  } catch (t) {
  	    define = function define(t, e, r) {
  	      return t[e] = r;
  	    };
  	  }
  	  function wrap(t, e, r, n) {
  	    var i = e && e.prototype instanceof Generator ? e : Generator,
  	      a = Object.create(i.prototype),
  	      c = new Context(n || []);
  	    return o(a, "_invoke", {
  	      value: makeInvokeMethod(t, r, c)
  	    }), a;
  	  }
  	  function tryCatch(t, e, r) {
  	    try {
  	      return {
  	        type: "normal",
  	        arg: t.call(e, r)
  	      };
  	    } catch (t) {
  	      return {
  	        type: "throw",
  	        arg: t
  	      };
  	    }
  	  }
  	  e.wrap = wrap;
  	  var h = "suspendedStart",
  	    l = "suspendedYield",
  	    f = "executing",
  	    s = "completed",
  	    y = {};
  	  function Generator() {}
  	  function GeneratorFunction() {}
  	  function GeneratorFunctionPrototype() {}
  	  var p = {};
  	  define(p, a, function () {
  	    return this;
  	  });
  	  var d = Object.getPrototypeOf,
  	    v = d && d(d(values([])));
  	  v && v !== r && n.call(v, a) && (p = v);
  	  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  	  function defineIteratorMethods(t) {
  	    ["next", "throw", "return"].forEach(function (e) {
  	      define(t, e, function (t) {
  	        return this._invoke(e, t);
  	      });
  	    });
  	  }
  	  function AsyncIterator(t, e) {
  	    function invoke(r, o, i, a) {
  	      var c = tryCatch(t[r], t, o);
  	      if ("throw" !== c.type) {
  	        var u = c.arg,
  	          h = u.value;
  	        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
  	          invoke("next", t, i, a);
  	        }, function (t) {
  	          invoke("throw", t, i, a);
  	        }) : e.resolve(h).then(function (t) {
  	          u.value = t, i(u);
  	        }, function (t) {
  	          return invoke("throw", t, i, a);
  	        });
  	      }
  	      a(c.arg);
  	    }
  	    var r;
  	    o(this, "_invoke", {
  	      value: function value(t, n) {
  	        function callInvokeWithMethodAndArg() {
  	          return new e(function (e, r) {
  	            invoke(t, n, e, r);
  	          });
  	        }
  	        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
  	      }
  	    });
  	  }
  	  function makeInvokeMethod(e, r, n) {
  	    var o = h;
  	    return function (i, a) {
  	      if (o === f) throw new Error("Generator is already running");
  	      if (o === s) {
  	        if ("throw" === i) throw a;
  	        return {
  	          value: t,
  	          done: !0
  	        };
  	      }
  	      for (n.method = i, n.arg = a;;) {
  	        var c = n.delegate;
  	        if (c) {
  	          var u = maybeInvokeDelegate(c, n);
  	          if (u) {
  	            if (u === y) continue;
  	            return u;
  	          }
  	        }
  	        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
  	          if (o === h) throw o = s, n.arg;
  	          n.dispatchException(n.arg);
  	        } else "return" === n.method && n.abrupt("return", n.arg);
  	        o = f;
  	        var p = tryCatch(e, r, n);
  	        if ("normal" === p.type) {
  	          if (o = n.done ? s : l, p.arg === y) continue;
  	          return {
  	            value: p.arg,
  	            done: n.done
  	          };
  	        }
  	        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
  	      }
  	    };
  	  }
  	  function maybeInvokeDelegate(e, r) {
  	    var n = r.method,
  	      o = e.iterator[n];
  	    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
  	    var i = tryCatch(o, e.iterator, r.arg);
  	    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
  	    var a = i.arg;
  	    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  	  }
  	  function pushTryEntry(t) {
  	    var e = {
  	      tryLoc: t[0]
  	    };
  	    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  	  }
  	  function resetTryEntry(t) {
  	    var e = t.completion || {};
  	    e.type = "normal", delete e.arg, t.completion = e;
  	  }
  	  function Context(t) {
  	    this.tryEntries = [{
  	      tryLoc: "root"
  	    }], t.forEach(pushTryEntry, this), this.reset(!0);
  	  }
  	  function values(e) {
  	    if (e || "" === e) {
  	      var r = e[a];
  	      if (r) return r.call(e);
  	      if ("function" == typeof e.next) return e;
  	      if (!isNaN(e.length)) {
  	        var o = -1,
  	          i = function next() {
  	            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
  	            return next.value = t, next.done = !0, next;
  	          };
  	        return i.next = i;
  	      }
  	    }
  	    throw new TypeError(_typeof(e) + " is not iterable");
  	  }
  	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
  	    value: GeneratorFunctionPrototype,
  	    configurable: !0
  	  }), o(GeneratorFunctionPrototype, "constructor", {
  	    value: GeneratorFunction,
  	    configurable: !0
  	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
  	    var e = "function" == typeof t && t.constructor;
  	    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  	  }, e.mark = function (t) {
  	    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  	  }, e.awrap = function (t) {
  	    return {
  	      __await: t
  	    };
  	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
  	    return this;
  	  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
  	    void 0 === i && (i = Promise);
  	    var a = new AsyncIterator(wrap(t, r, n, o), i);
  	    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
  	      return t.done ? t.value : a.next();
  	    });
  	  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
  	    return this;
  	  }), define(g, "toString", function () {
  	    return "[object Generator]";
  	  }), e.keys = function (t) {
  	    var e = Object(t),
  	      r = [];
  	    for (var n in e) r.push(n);
  	    return r.reverse(), function next() {
  	      for (; r.length;) {
  	        var t = r.pop();
  	        if (t in e) return next.value = t, next.done = !1, next;
  	      }
  	      return next.done = !0, next;
  	    };
  	  }, e.values = values, Context.prototype = {
  	    constructor: Context,
  	    reset: function reset(e) {
  	      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
  	    },
  	    stop: function stop() {
  	      this.done = !0;
  	      var t = this.tryEntries[0].completion;
  	      if ("throw" === t.type) throw t.arg;
  	      return this.rval;
  	    },
  	    dispatchException: function dispatchException(e) {
  	      if (this.done) throw e;
  	      var r = this;
  	      function handle(n, o) {
  	        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
  	      }
  	      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
  	        var i = this.tryEntries[o],
  	          a = i.completion;
  	        if ("root" === i.tryLoc) return handle("end");
  	        if (i.tryLoc <= this.prev) {
  	          var c = n.call(i, "catchLoc"),
  	            u = n.call(i, "finallyLoc");
  	          if (c && u) {
  	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
  	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
  	          } else if (c) {
  	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
  	          } else {
  	            if (!u) throw new Error("try statement without catch or finally");
  	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
  	          }
  	        }
  	      }
  	    },
  	    abrupt: function abrupt(t, e) {
  	      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
  	        var o = this.tryEntries[r];
  	        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
  	          var i = o;
  	          break;
  	        }
  	      }
  	      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
  	      var a = i ? i.completion : {};
  	      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
  	    },
  	    complete: function complete(t, e) {
  	      if ("throw" === t.type) throw t.arg;
  	      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
  	    },
  	    finish: function finish(t) {
  	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
  	        var r = this.tryEntries[e];
  	        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
  	      }
  	    },
  	    "catch": function _catch(t) {
  	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
  	        var r = this.tryEntries[e];
  	        if (r.tryLoc === t) {
  	          var n = r.completion;
  	          if ("throw" === n.type) {
  	            var o = n.arg;
  	            resetTryEntry(r);
  	          }
  	          return o;
  	        }
  	      }
  	      throw new Error("illegal catch attempt");
  	    },
  	    delegateYield: function delegateYield(e, r, n) {
  	      return this.delegate = {
  	        iterator: values(e),
  	        resultName: r,
  	        nextLoc: n
  	      }, "next" === this.method && (this.arg = t), y;
  	    }
  	  }, e;
  	}
  	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  } (regeneratorRuntime$1));

  var regeneratorRuntimeExports = regeneratorRuntime$1.exports;

  // TODO(Babel 8): Remove this file.

  var runtime = regeneratorRuntimeExports();
  var regenerator = runtime;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }

  var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator);

  var TranslateContext = /*#__PURE__*/React$1.createContext(null);
  var last = {
    langID: null
  };
  function TranslateContainer(_ref) {
    var children = _ref.children;
    var _React$useState = React__namespace.useState("it"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      langID = _React$useState2[0],
      setLangID = _React$useState2[1];
    var _React$useState3 = React__namespace.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      langOBJ = _React$useState4[0],
      setLangOBJ = _React$useState4[1];
    var handleChangeLanguage = function handleChangeLanguage(newLanguage) {
      setLangID(newLanguage);
    };
    React__namespace.useEffect(function () {
      if (!langID) return;
      if (last.langID === langID) return; // già in caricamento
      last.langID = langID;

      // declare the async data fetching function
      var fetchData = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
          var response, json;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("./locale/".concat(langID, ".json"));
              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();
              case 6:
                json = _context.sent;
                // set state with the result
                // console.log("Fatto.");
                setLangOBJ({
                  id: langID,
                  table: json,
                  setNewLanguage: handleChangeLanguage
                });
                _context.next = 14;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log("Errore nel file locale/".concat(langID, ".json "));
                return _context.abrupt("return");
              case 14:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 10]]);
        }));
        return function fetchData() {
          return _ref2.apply(this, arguments);
        };
      }();

      // call the function
      fetchData()
      // make sure to catch any error
      ["catch"](console.error);
    }, [langID]);
    return /*#__PURE__*/React__namespace.createElement(TranslateContext.Provider, {
      value: langOBJ
    }, children);
  }

  /**
   * t -> testo da mostrare
   * a -> array di campi che iniettano il testo da mostrare
   * c -> testo da costante javascript iniettata
   * children -> eventuali figli
   */
  function Translate(_ref) {
    var dataTranslate = _ref["data-translate"],
      t = _ref.t,
      c = _ref.c,
      a = _ref.a,
      children = _ref.children;
    var lang = React$1.useContext(TranslateContext);
    //
    // evita il rendering se non cambia lingua o array di dati
    return React$1.useMemo(function () {
      var _lang$table;
      var inputString = c || t || children;
      // console.log("rerender:", inputString);
      //
      // non c'è dataTranslate, può essere che sia inlinea, se lo è è nel parametro c
      if (!dataTranslate) {
        var matches = inputString.match(/_<_(.*?)_\/_(.*?)_>_/);
        if (matches) {
          dataTranslate = matches[1]; // Contenuto tra "_<_" e "_/_"
          inputString = matches[2]; // Contenuto tra "_/_" e "_>_"
        } else {
          throw "errore nel servizio di traduzione, manca translate";
        }
      }
      //
      // c'è traduzione
      if (lang !== null && lang !== void 0 && (_lang$table = lang.table) !== null && _lang$table !== void 0 && _lang$table[dataTranslate]) return /*#__PURE__*/React.createElement("span", {
        "data-from-translate": dataTranslate
      }, a ? sostitui(lang.table[dataTranslate], a) : lang.table[dataTranslate]);
      //
      // non c'è traduzione
      return /*#__PURE__*/React.createElement("span", {
        "data-not-translate": dataTranslate
      }, a ? sostitui(inputString, a) : inputString);
    }, [lang, a]); // solo il cambio di lingua e di array obbliga il re-rendering
  }

  //
  // filla le variabili nel template
  //     es: text='Siamo al:%0/%1' e ['20%','100%']
  //              'Siamo al:%0' e '20%'
  //
  function sostitui(text, args) {
    // se non ci sono argomenti torna sè stesso
    if (args === undefined) return text;
    // definisce il contenitore
    var list = Array.isArray(args) ? args : [args]; // se args[0] è un array è lui la lista sennò lo mette in un array monoelemento

    var counter = 0;
    var replacedString = text.replace(/%s/g, function () {
      return list[counter++];
    });
    return replacedString;
    /*
      // log(text, args);
      // https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format#
      // var args = Array.prototype.slice.call(arguments, 1);
      return text.replace(/%(\d+)/g, function (match, number) {
          return typeof list[number] != 'undefined'
              ? list[number]
              : match
              ;
      });*/
  }

  exports.Translate = Translate;
  exports.TranslateContainer = TranslateContainer;
  exports.TranslateContext = TranslateContext;

}));
