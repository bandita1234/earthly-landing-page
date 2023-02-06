import React from "react";
import AboutImg from "../../images/aboutImg.webp";
import "../About/About.css";

const About = () => {
  return (
    <div className="About_container">
      <div className="About_text">
        <h3>About Us</h3>
        <div className="first_para">
        <p>
        Enter Earthly, a spot for businesses that need to be a part of the
        green movement.
        </p>
        </div>
        <div>
        <p>
        We do an amazing job to give you the information and
        alternative sustainable products for your cafes and food business.
        It's high time for all of us to think about our impression and
        capacity to lessen the waste and its impacts on the climate. This must
        be finished by settling on a responsible choice of utilizing
        eco-friendly products. Earthly Eco-friendly products like bamboo
        toothbrushes, bamboo straws, plant-based coffee cups, and many
        sustainable products are items that are not unsafe to the climate.
        These are items produced using sustainable and organic raw materials.
        Earthly products are of the best quality and in the best designs.
        </p>
        </div>
        <div className="btn">
        <a className="button" href="https://www.earthly.ie/">FIND OUT MORE!</a>
        </div>
      </div>
      <div className="About_img">
        <img src={AboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
