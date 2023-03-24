import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import clickMe from "../assets/clickMe.png";
import providerImg from "../assets/providerImg.png"

const HeaderContext = () => {
  //We can call the const one by one or use destructuration
  //Then we use "useContext" hook and provide the context that we are using
  const { theme, handleTheme } = useContext(ThemeContext);
  const { text, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);

  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <header className={theme}>
      <button className="btnModal" onClick={openModal}>
        <h2>
          {text.headerTitle}{" "}
          <img src={clickMe} alt="Click-Me" className="clickMeImg" />
        </h2>
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>A Dummy Page with context</h3>
          <p style={{ textAlign: "center" }}>
            All the logic is stored in the{" "}
            <a
              href="https://github.com/reche-git/05-React-Context/tree/master/src/context"
              rel="noreferrer"
              target="_blank"
            >
              Context
            </a>{" "}
            folder.
          </p>
          <p>Why is this a good idea?</p>
          <p>
            Every Context object comes with a Provider React component that
            allows consuming components to subscribe to context changes. This
            component can be used to wrap context consuming components, just like JSX tags!
          </p>
          <img src={providerImg} alt="Provider-img" />
          <p>If it's inside the provider, it can use the logic with the hook useContext!</p>
        </div>
      </Modal>
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

        <button onClick={handleAuth} className="buttonPage">
          {auth ? text.buttonLogout : text.buttonLogin}
        </button>
      </div>
    </header>
  );
};

export default HeaderContext;
