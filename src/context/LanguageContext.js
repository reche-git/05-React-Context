import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";

const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context",
    headerSubtitle: "Mi cabecera",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenido Invitado",
    mainHello: "Hola Usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página ©",
  },
  en: {
    headerTitle: "My application WITHOUT Context",
    headerSubtitle: "My header",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer ©",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLenguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);

  const handleLanguage = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "es") {
      setLenguage("es");
      setText(translations.es);
    } else {
      setLenguage("en");
      setText(translations.en);
    }
  };

  const data = {text, handleLanguage};

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
