import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPageContext = () => {
  return (
    <>
      {/* The provider created "ThemeProvider" will wrap all the components that will use
          his logic */}
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
          </AuthProvider>
          <FooterContext />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
};

export default MyPageContext;
