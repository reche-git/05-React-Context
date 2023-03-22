import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "en";
const initialAuth = null;

const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenido Invitado",
    mainHello: "Hola Usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My aplication WITHOUT Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLenguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

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

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  const myPageTheme = (theme === "dark") ? "my-page-dark" : "my-page";

  return (
    <div className={myPageTheme}>
      <Header
        theme={theme}
        handleTheme={handleTheme}
        text={text}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} text={text} auth={auth} />
      <Footer theme={theme} text={text} />
    </div>
  );
};

export default MyPage;
