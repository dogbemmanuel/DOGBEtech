import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="section-7" id="footer1">
      <a href="#home" className="footer_logo">
        DOGBEtech
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home" id="footer_a">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/emmanuel-dogbe-0bb33a236" target={"_blank"} rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/EMMANUEL-DOGBE" target={"_blank"} rel="noreferrer">
          <FaGithubSquare />
        </a>
        <a href="https://www.facebook.com/zabio.henandez" target={"_blank"} rel="noreferrer">
          <FaFacebookSquare />
        </a>
        <a href="https://twitter.com/elikem_walker?t=9W3vv03ffw4tDLOjeXNJhw&s=03" target={"_blank"} rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>

      <small className="footer_copyriht">
        &copy; DOGBEtech. All rights reserved
      </small>
    </footer>
  );
};

export default Footer;
