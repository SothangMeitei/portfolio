const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Engineered in React with Vite</p>
      <div className="social-links">
        <a 
          href="https://github.com/SothangMeitei" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/sothang-meitei" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:sothangmeitei@gmail.com" 
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;