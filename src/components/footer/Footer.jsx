import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Saumya</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://x.com/saumya2000_"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer" // Add this
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/saumya0512"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer" // Add this
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/saumya673"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer" // Add this
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Appreciate you scoping out my work display. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
