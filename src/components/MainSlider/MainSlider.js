import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y, EffectCube } from "swiper";

import first_img from "../../images/img1.webp";
import second_img from "../../images/img2.webp";
import third_img from "../../images/img3.webp";

import "../MainSlider/MainSlider.css";

// import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/swiper-bundle.min.css";

const MainSlider = () => {
  return (
    <div className="heroSlide" id="hero">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y, EffectCube]}
        spaceBetween={50}
        slidesPerView={1}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        navigation
        loop
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        effect={"cube"}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        <SwiperSlide>
          <div className="slide_body">
            <img src={first_img} alt="first_img" />
            <div className="slide_text">
              <h1>
                LIVING <br />
                SUSTAINABLY
              </h1>
              <h3>Shouldn't Be Expensive</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_body">
            <img src={second_img} alt="second_img" />
            <div className="slide_text">
              <h1>
                Join the Revolution.
                <br />
                Make it possible.
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_body">
            <img src={third_img} alt="third_img" />
            <div className="slide_text">
              <h1>
                BECOME
                <br />
                Sustainable
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
