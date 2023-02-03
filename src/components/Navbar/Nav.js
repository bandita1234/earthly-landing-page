import React from "react";
import "../Navbar/Nav.css";
import logo_img from "../../images/Earthly_Logo.webp";

const Nav = () => {
  return (
    <div className="n_wrapper">
      <div className="n_left">
        <div className="n_icon">
          <img src={logo_img} alt="icon_img" width="50px" height="50px" />

        </div>
        <h2 className="n_name">Earthly</h2>
        <p className="tag_name">
        Sustainable products at affordable prices</p>
      </div>
      <div className="n_right">
        <div className="n_lists">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart img</li>
          </ul>
        </div>
      </div>
    </div>
 
  );
};

export default Nav;
