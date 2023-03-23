import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const HeaderContext = () => {
  //We can call the const one by one or use destructuration
  //Then we use "useContext" hook and provide the context that we are using
  const { theme, handleTheme } = useContext(ThemeContext);
  const { text, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <header className={theme} style={{}}>
      <h2>{text.headerTitle}</h2>
      <div className="header-container">
        <h3>{text.headerSubtitle}</h3>
        <select name="languje" onChange={handleLanguage}>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
        <div>
          <label htmlFor="light-context">🌞</label>
          <input
            type="radio"
            name="theme"
            id="light-context"
            value="light"
            onClick={handleTheme}
          />
        </div>
        <div>
          <label htmlFor="dark-context">🌚</label>
          <input
            type="radio"
            name="theme"
            id="dark-context"
            value="dark"
            onClick={handleTheme}
          />
        </div>

        <button onClick={handleAuth}>
          {auth ? text.buttonLogout : text.buttonLogin}
        </button>
      </div>
    </header>
  );
};

export default HeaderContext;
