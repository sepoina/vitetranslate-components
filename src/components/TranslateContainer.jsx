import React from "react";
import { TranslateContext } from "./TranslateContext";

const last = { langID: null };

export default function TranslateContainer({ predefined, children }) {
  const [propose, setPropose] = React.useState({ lang: predefined });
  const [langOBJ, setLangOBJ] = React.useState(null);

  // struttura funzione proposeNewLanguage({
  //   lang:'it',
  //   onStart: () => {},      // a inizio caricamento
  //   onDone: (isOk) => {},   // a fine caricamento isOk - true o false
  //   onError: (error) => {}, // in caso di errore, struttura error
  //  })
  const proposeNewLanguage = propObj => {
    setPropose(propObj);
  };

  React.useEffect(() => {
    if (!propose.lang) return;
    if (last.langID === propose.lang) return; // già in caricamento
    last.langID = propose.lang; // evita doppie interazioni
    if (propose.onStart) propose.onStart(true);
    // declare the async data fetching function
    const fetchData = async () => {
      try {
        // get the data from the api
        // console.log("Carico:", propose.lang);
        const response = await fetch(`./locale/${propose.lang}.json`);
        // convert the data to json
        const json = await response.json();
        // set state with the result
        // console.log("Fatto.");
        if (propose.onDone) propose.onDone(true);
        setLangOBJ({
          id: propose.lang,
          table: json,
          proposeNewLanguage: proposeNewLanguage,
        });
      } catch (error) {
        if (propose.onError) propose.onError({error:error, inexistID:propose.lang});
        else console.error(`Inexistant or error in language file ./locale/${propose.lang}.json `);
        if (propose.onDone) propose.onDone(false);
        // setPropose({ lang: predefined });
        return;
      }
    };

    // call the function
    fetchData();
  }, [propose.lang]);

  return (
    <TranslateContext.Provider value={langOBJ}>
      {children}
    </TranslateContext.Provider>
  );
}
