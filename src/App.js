import { CrudApi } from "./components/CrudApi";
import Modal from "./components/Modal";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import { CrudProvider } from "./context/CrudContext";
import { useModal } from "./hooks/useModal";
import ContextExample from "./assets/ContextExample.png";

function App() {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div>
      <button className="btnModal" onClick={openModal}>
        <h1>React Context</h1>
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>React Context</h3>
          <p style={{ textAlign: "center" }}>
            Is a way to manage state globally!
          </p>
          <p>
            It can be used together with the useState Hook to share state
            between deeply nested components more easily than with useState
            alone.
          </p>
          <p>
            Instead of cascating props seven times to reach the necessary
            component, we can wrap the application with a provider tag that
            allow us to make use of the logic inside of it thanks to the
            useContext hook, like this:
          </p>
          <img src={ContextExample} alt="CodeExample" />
          <p>
            Bellow you have an example of the previous project "Crud Api" with
            Context, and two examples of a code with and without Context as
            well!
          </p>
        </div>
      </Modal>
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
