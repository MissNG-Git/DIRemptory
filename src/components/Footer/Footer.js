import React from "react";
import "../../index.css";

function Footer() {
  return (
    <footer className="footer text-muted">
      <a href="https://github.com/MissNG-Git" className="footer-ref">
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/jessie-n-9302b962/"
        className="footer-ref"
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>{" "}
      <br />
      <span>
        Made with love by{" "}
        <strong>
          {" "}
          <em className="handle">MissNG</em>
        </strong>{" "}
        © 2021
        <br />
        Employee data acquired from{" "}
        <a href="https://randomuser.me/">Randomuser.Me</a>
      </span>
    </footer>
  );
}

export default Footer;
