import { createContext, useState } from "react";

//Context
const ThemeContext = createContext();

const initialTheme = "light";

//Provider: : Has all the logic and Wrap all the components that are going to have
//            access to the logic

///Logic///
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);
  
  const myPageTheme = (theme === "dark") ? "my-page-dark" : "my-page";

  const handleTheme = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const data = { theme, handleTheme, myPageTheme };

///Wrap of components///
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
