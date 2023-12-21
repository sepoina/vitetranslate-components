import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import * as React$1 from 'react';
import { createContext, useContext, useMemo } from 'react';

var TranslateContext = /*#__PURE__*/createContext(null);
var last = {
  langID: null
};
function TranslateContainer(_ref) {
  var children = _ref.children;
  var _React$useState = React$1.useState("it"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    langID = _React$useState2[0],
    setLangID = _React$useState2[1];
  var _React$useState3 = React$1.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    langOBJ = _React$useState4[0],
    setLangOBJ = _React$useState4[1];
  var handleChangeLanguage = function handleChangeLanguage(newLanguage) {
    setLangID(newLanguage);
  };
  React$1.useEffect(function () {
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
  return /*#__PURE__*/React$1.createElement(TranslateContext.Provider, {
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
  var lang = useContext(TranslateContext);
  //
  // evita il rendering se non cambia lingua o array di dati
  return useMemo(function () {
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

export { Translate, TranslateContainer, TranslateContext };
