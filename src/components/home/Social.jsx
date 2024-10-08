const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://x.com/saumya2000_"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer" // Add this
      >
        <i className="bx bxl-twitter"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/saumya0512"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer" // Add this
      >
        <i className="bx bxl-linkedin"></i>
      </a>

      <a
        href="https://github.com/saumya673"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer" // Add this
      >
        <i className="bx bxl-github"></i>
      </a>
    </div>
  );
};

export default Social;
