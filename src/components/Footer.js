const Footer = ({theme, text}) => {
  return (
    <footer className={theme}>
      <h4 style={{marginLeft: "78%"}}>{text.footerTitle}</h4>
    </footer>
  );
};

export default Footer;
