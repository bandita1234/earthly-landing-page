import React, { useEffect, useState } from "react";
import "../Navbar/Nav.css";
import logo_img from "../../images/Earthly_Logo.webp";
import {FaBars, FaTimes} from 'react-icons/fa';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const setNavbar = ()=>{
    if(window.scrollY>86){
      setNavBackground(true)
    }else{
      setNavBackground(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', setNavbar);
    // eslint-disable-next-line
  }, [])
console.log(showMenu);
  return (
    <div className={`n_wrapper ${navBackground?"solid": "trans"}`}>
      <div className="n_left">
        <div className="n_icon">
          <img src={logo_img} alt="icon_img" width="50px" height="50px" />
        </div>
        <h2 className="n_name">Earthly</h2>
        <p className="tag_name">
        Sustainable products at affordable prices</p>
      </div>
      <div className="n_right">
        <div className={`n_lists ${showMenu && "show_list"}`}>
          <ul style={{ listStyleType: "none" }}>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#productsIntro">Our Product</a>
            <a href="#contact">Contact Us</a>
          </ul>
        </div>
      </div>
      <div className="n_menu" onClick={()=>{setShowMenu(!showMenu)}}>
        {!showMenu?<FaBars size={'30px'}/>:<FaTimes size={'30px'} />}
      </div>
    </div>
 
  );
};

export default Nav;
