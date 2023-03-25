import { CrudApi } from "./components/CrudApi";
import Modal from "./components/Modal";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import { CrudProvider } from "./context/CrudContext";
import { useModal } from "./hooks/useModal";
import ContextExample from "./assets/ContextExample.png";
import clickMe from "./assets/clickMe.png";

function App() {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div>
      {/* Modal */}
      <button className="btnModal" onClick={openModal}>
        <h1>
          React Context{" "}
          <img src={clickMe} alt="Click-Me" className="clickMeImg" />
        </h1>
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>React Context</h3>
          <p style={{ textAlign: "center" }}>
            It's a way to manage state globally!
          </p>
          <p>
            It can be used together with the useState Hook to share state
            between deeply nested components more easily than with useState
            alone.
          </p>
          <p>
            Instead of cascading props multiple times to reach the necessary
            component, we can wrap the application with a provider tag that
            allows us to make use of the logic inside of it thanks to the
            useContext hook, like this:
          </p>
          <img src={ContextExample} alt="CodeExample" />
          <p>
            Bellow you have an example of the previous project "Crud API" with
            Context, and two examples of a code with and without Context as
            well!
          </p>
          <p style={{ textAlign: "center" }}>
            <a
              href="https://github.com/reche-git/05-React-Context"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>
      </Modal>
      {/* Modal */}

      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />
      <MyPage />
      <hr />
      <MyPageContext />
    </div>
  );
}

export default App;
