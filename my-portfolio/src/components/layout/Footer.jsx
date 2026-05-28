const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Engineered in React with Vite</p>
    </footer>
  );
};

export default Footer;