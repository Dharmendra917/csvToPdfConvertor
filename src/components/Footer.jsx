import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../App.css";

const Footer = () => {
  const email = "dharmendrapatel0200@gmail.com";
  const handleEmailClick = () => {
    window.open(`mailto:${email}`);
  };
  return (
    <>
      <div className="Footer">
        <div className="topFooter">
          <h1>CsvUploader</h1>
          <div className="Social">
            <h3>Media</h3>
            <Router>
              <Link className="link" to="https://github.com/Dharmendra917">
                <p>GitHub</p>{" "}
              </Link>
              <Link className="link">
                {" "}
                <p>Facebook</p>{" "}
              </Link>
              <Link
                className="link"
                to="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BYfkG1nXqQLylOyCwiccy5A%3D%3D"
              >
                {" "}
                <p>LindedIn</p>
              </Link>
              <Link className="link">
                {" "}
                <p> Instagram</p>
              </Link>
            </Router>
          </div>
          <div className="About">
            <h3>About</h3>
            <Router>
              <Link className="link">
                <p> Documents</p>
              </Link>
              <Link className="link">
                <p> Feedback </p>
              </Link>
              <Link className="link">
                <p> Policy </p>
              </Link>
              <Link className="link">
                <p> Help </p>
              </Link>
            </Router>
          </div>
          <div className="Contact">
            <Router>
              <Link className="link">
                {" "}
                <h3>Contact</h3>{" "}
              </Link>
              <Link onClick={handleEmailClick} className="link">
                {" "}
                <p>Email</p>
              </Link>
              <Link className="link">
                {" "}
                <p>Phone</p>
              </Link>
              <Link className="link">
                {" "}
                <p>Telegram</p>
              </Link>
            </Router>
          </div>
        </div>
        <div className="bottomFooter">
          <h2>
            Copyright ©2024 <span>csvConverter</span>. Developed by{" "}
            <span>Dharmendra</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
