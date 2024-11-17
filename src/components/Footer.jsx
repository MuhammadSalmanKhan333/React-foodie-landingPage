import React from "react";
import Logo from "../assets/Logo.svg";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer-icons">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsGithub />
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testemonials</span>
          <span>Work</span>
        </div>

        <div className="footer-section-columns">
          <span>244-53332-7789</span>
          <span>hello@food.com</span>
          <span>pressfodd@edu.com</span>
          <span>03452997322</span>
        </div>

        <div className="footer-section-columns">
          <span>Privacy and Policy</span> <span>Terms and Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
