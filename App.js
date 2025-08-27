import React, { createContext, useState, useContext } from "react";

// 1. Krijo Context
const LanguageContext = createContext();

// 2. Krijo Provider
function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("EN");

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Komponent që konsumon gjuhën
function Greeting() {
  const { language } = useContext(LanguageContext);

  const messages = {
    EN: "Hello, welcome!",
    AL: "Përshëndetje, mirësevini!",
    DE: "Hallo, willkommen!"
  };

  return <h2>{messages[language]}</h2>;
}

// 4. Komponent për butonat
function LanguageButtons() {
  const { switchLanguage } = useContext(LanguageContext);
  return (
    <div>
      <button onClick={() => switchLanguage("EN")}>English</button>
      <button onClick={() => switchLanguage("AL")}>Shqip</button>
      <button onClick={() => switchLanguage("DE")}>Deutsch</button>
    </div>
  );
}

// 5. App kryesor
function App() {
  return (
    <LanguageProvider>
      <Greeting />
      <LanguageButtons />
    </LanguageProvider>
  );
}

export default App;
