import React from "react";
import "../Footer/Footer.css";
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import logo_img from "../../images/Earthly_Logo.webp";

import Container from "react-bootstrap/Container";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

const Footer = () => {
  //   let location = useLocation();
  //   useEffect(() => {
  //       window.scrollTo(0, 0);
  //       // eslint-disable-next-line
  //   }, [location.pathname])
  return (
    <div className="footer-container" id="footer">
      <footer class="footer-sec">
        <Container>
          <div class="main">
            <div class="logo row1 r">
              <div class="footer-header1">
                <img src={logo_img} class="manik" alt="" />
                <div><h2 style={{marginTop:"0"}}>Earthly</h2></div>
              </div>
              <center>
                <hr />
              </center>
              <div className="social-links">
                <a href="">
                  <FaInstagram className="insta icon" />
                </a>
                <a href="">
                  <FaWhatsapp className="tw icon" />
                </a>
                <a href="">
                  <HiLocationMarker className="tw icon" />
                </a>
              </div>
            </div>

            <div class="office row1">
              <div class="footer-header">
                <h3>Contact Us</h3>
              </div>
              <div class="office-des">
                <p>
                  16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78
                  HW50, Ireland<br/> hello@earthly.ie <br/> +353 1552 4908
                </p>
              </div>
            </div>

            <div class="link row1">
              <div class="footer-header">
                <h3>Links</h3>
              </div>

              <div class="link-des">
                <a href="#hero" class="footer-links">
                  Home
                </a>
                <a href="#about" class="footer-links">
                  About
                </a>

             
                <a href="#productsIntro" class="footer-links">
                  Products
                </a>
              </div>
            </div>

            <div class="row1">
            <div class="footer-header">
                <h3>Join The Club</h3>
              </div>
              <p style={{paddingBottom:"30px"}}>Join our email list and get access to specials deals exclusive to our subscribers.</p>
              <div className="join_club">
                <input type="text" name="" id="" />
              </div>
            </div>

            <div class="logo row1 m">
              <div class="footer-header">
                <img src={logo_img} class="manik" alt="" />
              </div>
              <hr className="lhr" />
              <div className="social-links">
                <a href="" target="_blank">
                  <FaInstagram className="insta icon" />
                </a>
                <a href="" target="_blank">
                  <FaWhatsapp className="tw icon" />
                </a>
              </div>
            </div>
          </div>
        </Container>
        <div class="copyright">
          <center>
            <hr />
          </center>

          <p>© Copyright @2022 earthly.ie.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
