const Header = ({
  theme,
  handleTheme,
  handleLanguage,
  text,
  auth,
  handleAuth,
}) => {
  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
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
