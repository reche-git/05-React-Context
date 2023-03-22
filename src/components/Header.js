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
      <h3>{text.headerSubtitle}</h3>
      <select name="languje" onChange={handleLanguage}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        value="light"
        onClick={handleTheme}
      />
      <label htmlFor="light">{text.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        value="dark"
        onClick={handleTheme}
      />
      <label htmlFor="dark">{text.headerDark}</label>
      <button onClick={handleAuth}>{auth ? text.buttonLogout : text.buttonLogin}</button>
    </header>
  );
};

export default Header;
