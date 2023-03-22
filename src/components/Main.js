const Main = ({ theme, text, auth }) => {
  return (
    <main className={theme}>
      <div className="main-container">
        {auth ? <p>🦊{text.mainHello}🦊</p> : <p>👋{text.mainWelcome}👋</p>}
        <p>{text.mainContent}</p>
      </div>
    </main>
  );
};

export default Main;
