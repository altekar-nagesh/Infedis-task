import React from "react";
import logo2 from "../Images/logo2.jpg";
import "../CSS/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container-fluid g-0">
          <div class="row">
            <div class="col-md-3 footer-info">
              <h3 className="mt-3">
                <a href="">
                  <img src={logo2} alt="logo" width="150" class="img-fluid" />
                </a>
              </h3>
              <p>Fastest growing medical platform for doctors</p>
              <div class="social-links">
                <a href="" className="me-2">
                  <i class="fa fa-facebook">
                    <FaFacebookF />
                  </i>
                </a>
                <a href="" className="me-2">
                  <i class="fa fa-linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
                <a href="" className="me-2">
                  <i class="fa fa-instagram">
                    <FaInstagram />
                  </i>
                </a>

                <a href="">
                  <i class="fa fa-youtube">
                    <FaYoutube />
                  </i>
                </a>
              </div>
            </div>

            <div class="col-md-3 footer-contact p-0">
              <h4 className="mt-3">Reach Us</h4>

              <p>
                <strong>
                  Please contact below details for any other information
                </strong>
              </p>
              <p>
                <strong>Email:</strong>
                <br /> varun@hidoc.co
              </p>
              <p>
                <strong>Address:</strong>
                <br />
                <strong>
                  Hidoc Dr.Inc, 2055 Limestone Rd, STE 200-C,Wilmington,DE,
                  19808, United States
                </strong>
              </p>
            </div>
            <div class="col-md-6 footer-box">
              <h4 className="mt-3">HIDOC DR. FEATURES</h4>
              <Icons />
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid g-0">
        <div class="copyright">
          &copy; Copyright 2022&nbsp;<strong>Hedoc Dr.Inc.</strong>
          <br />
          Terms &amp; Conditions | Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
