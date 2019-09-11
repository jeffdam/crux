import React from "react";

const Footer = () => (
  <footer className="footer-main">
    <section className="footer-container main-width">
      <div className="flex-row">
        <a href="https://jeffdam.com/" target="_blank"><img src={window.images.portfolio_logo} alt="portfolio" title="Personal Website"></img></a>
        <a href="https://github.com/jeffdam" target="_blank"><img src={window.images.github_logo} alt="GitHub Logo" title="GitHub"></img></a>
        <a href="https://www.linkedin.com/in/jeffdam" target="_blank"><img src={window.images.linkedin_logo} alt="LinkedIn Logo" title="LinkedIn"></img></a>
        <a href="https://angel.co/jeff-dam/" target="_blank"><img src={window.images.angellist_logo} alt="angellist_logo" title="AngelList"></img></a>
      </div>
    </section>
  </footer>
);

export default Footer;