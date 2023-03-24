import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import clickMe from "../assets/clickMe.png";

const Header = ({
  theme,
  handleTheme,
  handleLanguage,
  text,
  auth,
  handleAuth,
}) => {
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
          <h3>A Dummy Page without context</h3>
          <p style={{ textAlign: "center" }}>
            All the logic is dumped in the{" "}
            <a
              href="https://github.com/reche-git/05-React-Context/blob/master/src/components/MyPage.js"
              rel="noreferrer"
              target="_blank"
            >
              MyPage
            </a>{" "}
            component.
          </p>
          <p>Why is this a bad idea?</p>
          <p>
            Imagine a project with an intricate tree of components, at one point
            you will need to use state that was defined in a non-related
            component; in this case you would be forced to rewrite the code to use
            the same state that you ones wrote.
          </p>
          <p>
            Another thing would be passing too many props between components
            which makes the code too verbose and difficult to read. Check the{" "}
            <a
              href="https://github.com/reche-git/05-React-Context/blob/master/src/components/MyPage.js"
              rel="noreferrer"
              target="_blank"
            >
              MyPage
            </a>{" "}
            component and see how copious amounts of time I had to destructure
            the same props in all three child components.
          </p>
        </div>
      </Modal>

      <div className="header-container">
        <h3>{text.headerSubtitle}:</h3>
        <select name="languje" onChange={handleLanguage}>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
        <div>
          <label htmlFor="light">🌞</label>
          <input
            type="radio"
            name="theme"
            id="light"
            value="light"
            onClick={handleTheme}
          />
        </div>
        <div>
          <label htmlFor="dark">🌚</label>
          <input
            type="radio"
            name="theme"
            id="dark"
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

export default Header;
