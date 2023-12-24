// export * from './components/Rating'
import React from "react";
import TranslateContainer from "./components/TranslateContainer.jsx";
import Translate from "./components/Translate.jsx";
import { TranslateContext } from "./components/TranslateContext";
import babelTranslate from "./dev/babel/babelTranslate";
import rollupTranslate from "./dev/rollup/rollupTranslate";

export {
  babelTranslate, rollupTranslate,
  TranslateContainer, TranslateContext, Translate
};

