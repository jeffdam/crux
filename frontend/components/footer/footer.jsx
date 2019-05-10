import React from "react";

const Footer = () => (
  <footer className="footer-main">
    <section className="footer-container main-width">
      <div className="flex-row">
        <a href="https://www.linkedin.com/in/jeffdam" target="_blank"><img src={window.images.linkedin_logo} alt="LinkedIn Logo" ></img></a>
        <a href="https://github.com/jeffdam" target="_blank"><img src={window.images.github_logo} alt="GitHub Logo" ></img></a>
      </div>
      <a href="https://www.rei.com/" target="_blank"><img src={window.images.rei_logo} alt="Rei Logo" ></img></a>
    </section>
  </footer>
);

export default Footer;