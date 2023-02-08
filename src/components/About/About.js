import React, { useEffect } from "react";
import AboutImg from "../../images/aboutImg.webp";
import Typewriter from "typewriter-effect";

import "../About/About.css";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 300 });
  }, []);

  return ( 
    <div className="About_container" id="about">
      <div className="About_text">
      <Typewriter
    onInit={(typewriter) => {
      // typewriter.typeString("About Us").pauseFor(1000).deleteAll().start();
      typewriter.typeString("ABOUT US...").start();
    }}
  />
        <div className="first_para"  data-aos="zoom-in">
          <p>
            Enter Earthly, a spot for businesses that need to be a part of the
            green movement.
          </p>
        </div>
        <div className="second_para"  data-aos="zoom-in">
          <p>
            We do an amazing job to give you the information and alternative
            sustainable products for your cafes and food business. It's high
            time for all of us to think about our impression and capacity to
            lessen the waste and its impacts on the climate. This must be
            finished by settling on a responsible choice of utilizing
            eco-friendly products. Earthly Eco-friendly products like bamboo
            toothbrushes, bamboo straws, plant-based coffee cups, and many
            sustainable products are items that are not unsafe to the climate.
            These are items produced using sustainable and organic raw
            materials. Earthly products are of the best quality and in the best
            designs.
          </p>
        </div>
        <div className="btn">
          <a className="button" href="https://www.earthly.ie/">
            FIND OUT MORE!
          </a>
        </div>
      </div>
      <div className="About_img">
        <img src={AboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
