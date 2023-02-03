import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
} from "swiper";

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
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={1}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
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
        <img src={second_img} alt="second_img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={third_img} alt="third_img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
