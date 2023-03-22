import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

export const MyPageApp = () => {
  const { myPageTheme } = useContext(ThemeContext);

  return (
    <div className={myPageTheme}>
      <HeaderContext />
      <MainContext />
      <FooterContext />
    </div>
  );
};
