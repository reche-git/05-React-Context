import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";
import githubIcon from "../assets/githubIcon.png";

export const CrudApi = () => {
  const { loading, error, db } = useContext(CrudContext);
  return (
    <div>
      <h2>
        <img
          src={githubIcon}
          alt="github-icon"
          style={{ width: "20px", height: "20px", margin: "auto" }}
        />{" "}
        <a
          href="https://github.com/reche-git/05-React-Context/tree/master/src/components"
          rel="noreferrer"
          target="_blank"
        >
          CRUD API whit Context API
        </a>{" "}
        <img
          src={githubIcon}
          alt="github-icon"
          style={{ width: "20px", height: "20px", margin: "auto" }}
        />
      </h2>

      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable />}
      </article>
    </div>
  );
};
