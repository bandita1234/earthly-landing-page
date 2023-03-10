import React, { useEffect } from "react";
import "../Products/Products.css";
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {

  useEffect(() => {
    AOS.init({duration:2000,offset:300})
  }, [])
  
  const products = [
    {
      id: 1,
      p_image:
        "https://static.wixstatic.com/media/ead566_ea60d9df9d794e5295383cb7773b9b23~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_ea60d9df9d794e5295383cb7773b9b23~mv2.webp",
      p_name: "PLANT BASED REUSABLE CUPS",
      p_desc:
        "<div><p>Barista's love it!<br>Easy to clean,&nbsp;hassle free and Plant Based.<br/>Sourced from local farmers, plant residue from <strong>Bamboo, Wheat, Rice, and Barley</strong> is processed and molded into reusable cups which can be used hundreds of times.<br/><strong>So, every batch is unique, Just. Like. You.</strong><br>&nbsp;</br>&nbsp;</div>"
    },
    {
      id: 2,
      p_image:
        "https://static.wixstatic.com/media/ead566_9cbaa34eb7e94b8e8ebba3580880d70d~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_9cbaa34eb7e94b8e8ebba3580880d70d~mv2.webp",
      p_name: "REUSABLE BAMBOO STRAWS",
      p_desc:
        "<div><p>We collaborated with artisans in Veitnam, Earthly Organic Bamboo Straws are 100% Compostable, Vegan and BPA free. They can be reused, thrown in a compost bin, or even in your backyard. Serve with cold beverages like ice tea, cold coffee and many more. </p></div>"
    },
    {
      id: 3,
      p_image:
        "https://static.wixstatic.com/media/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.webp",
      p_name: "NATURAL BAMBOO LOOFAH",
      p_desc:
      "<div><p>Natural loofah sponges actually come from the fruits of vine-growing Luffa plants.<br/> These plants are part of the gourd family (Cucurbitaceae) making them relatives of watermelons, cucumbers and pumpkins.<br/>It is biodegradable and is an organic, eco-friendly exfoliating body scrubber. Both men and women can use it, suitable for shower and bathtub</p></div>"
    },
    {
      id: 4,
      p_image:"https://static.wixstatic.com/media/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.webp",
      p_name: "BAMBOO TOOTHBRUSH",
      p_desc:
        "<div><p>Earthly Bamboo Toothbrush are BPA free, Biodegradable and have charcoal infused bristles that help remove stains effectively. We guarantee your satisfaction. See for yourself!</p></div>"
    },
    {
      id: 5,
      p_image:
        "https://static.wixstatic.com/media/ead566_53f4426d550441a19ffaa69e7f03dafd~mv2.jpg/v1/fill/w_1000,h_562,al_c,q_85/ead566_53f4426d550441a19ffaa69e7f03dafd~mv2.webp" ,
      p_name: "PLANT BASED REUSABLE CONTAINERS",
      p_desc:
        "<div><p>Sourced from local farmers, plant residue from <strong>Bamboo, Wheat, Rice, and Barley</strong> is processed and molded into reusable containers which can be used hundreds of times.<br>Microwave safe, seal proof, and sturdy, they are perfect to store snacks or lunch.<br>Designed inUSA. Tested in Germany.</p></div>"
    },
  ];

  // dangerouslySetInnerHTML for html present in p_desc
  const createMarkup = (index) => {
    return { __html: products[index].p_desc };
  };

  return (
    <div className="container" id="products">
      <h1 className="heading">STARTER KIT PRODUCTS</h1>
      {products.map((item, index) => (
        <div className="products_div" key={item.id}>
          <div className="products_img" data-aos = "fade-right">
            <img src={item.p_image} alt="" />
          </div>
          <div className="products_details" data-aos = "fade-left">
            <div className="details_container">
              <h1  style={{color:"#85CDFD"}}>{item.p_name}</h1>
              <div dangerouslySetInnerHTML={createMarkup(index)} style={{paddingLeft:"0px"}}/>
              {/*<button className="button">Shop Now</button>*/}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

// https://www.earthly.ie/product-page/reusable-bamboo-straws
// https://www.earthly.ie/product-page/natural-bamboo-loofah
