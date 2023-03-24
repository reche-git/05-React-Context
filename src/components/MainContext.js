import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import clickMe from "../assets/clickMe.png"
import Logo from "../assets/Logo.png"

const MainContext = () => {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);

  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <main className={theme}>
      <div className="main-container">
        {auth ? <p>🦊{text.mainHello}🦊</p> : <p>👋{text.mainWelcome}👋</p>}
<button className="btnModal" onClick={openModal}>
        <h2>
          {text.headerTitle}{" "}
          <img src={clickMe} alt="Click-Me" className="clickMeImg" />
        </h2>
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>...</h3>
          <p style={{ textAlign: "center" }}>
            ...
          </p>
          <p>Why is this a good idea?</p>
          <p>
            ...
          </p>
          <p>...</p>
        </div>
      </Modal>
        <p>{text.mainContent}</p>
      </div>
    </main>
  );
};

export default MainContext;
