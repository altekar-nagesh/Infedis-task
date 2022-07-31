import React from "react";
import logo1 from "../Images/logo1.jpg";
import "../CSS/Header.css";
const Header = () => {
  return (
    <header id="header">
      <div className="logo">
        <img src={logo1} alt="logo" width="150" className="img-fluid" />
      </div>
      <div className="mt-3">
        <ul>
          <li>Social Network&nbsp;&nbsp;|</li>
          <li>Drug Database&nbsp;&nbsp;|</li>
          <li>Medical Calculator&nbsp;&nbsp;|</li>
          <li>Article&nbsp;&nbsp;|</li>
          <li>News&nbsp;&nbsp;|</li>
          <li>Quizzes&nbsp;&nbsp;|</li>
          <li>Surveys&nbsp;&nbsp;|</li>
          <li>Drug Interaction&nbsp;&nbsp;|</li>
          <li>Disease Database&nbsp;</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
