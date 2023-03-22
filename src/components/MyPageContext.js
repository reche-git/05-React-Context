import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import { MyPageApp } from "./MyPageApp";


const MyPageContext = () => {
  return (
    <>
      {/* The provider created "ThemeProvider" will wrap all the components that will use
          his logic */}
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <MyPageApp />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
};

export default MyPageContext;
