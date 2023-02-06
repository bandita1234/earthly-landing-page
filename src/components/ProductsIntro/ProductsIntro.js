import React from "react";
import "../ProductsIntro/ProductsIntro.css";

import { BsArrowRightCircleFill } from "react-icons/bs";

import st_kit_img from "../../images/st_kit_img.webp";
import st_kit_img0 from "../../images/st_kit_img0.webp";
import st_kit_img1 from "../../images/st_kit_img1.webp";
import st_kit_img2 from "../../images/st_kit_img2.webp";
import st_kit_img3 from "../../images/st_kit_img3.webp";
import st_kit_img4 from "../../images/st_kit_img4.webp";
import st_kit_img5 from "../../images/st_kit_img5.webp";

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import { Autoplay, Pagination, A11y } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/swiper-bundle.min.css";
import { icons } from "react-icons";

const ProductsIntro = () => {
  return (
    <div className="ProductsIntro">
      <div className="kit_intro">
        <h1>Sustainability Starter Kit</h1>
        <h3>This starter kit is all you need to start the revolution!</h3>

        <h2>What it contains ?</h2>
        <div className="kit_items">
          <div className="items_1">
            <div>
              <BsArrowRightCircleFill size={"24px"} />
              <p>2 Bamboo Straws</p>
            </div>
            <div>
              <BsArrowRightCircleFill size={"24px"} />
              <p> 1 Plant Based Reusable Cup with 2 lids</p>
            </div>
            <div>
              <BsArrowRightCircleFill size={"24px"} />
              <p> 1 Natural Loofah</p>
            </div>
          </div>
          <div className="items_2">
            <div>
              <BsArrowRightCircleFill size={"24px"} />
              <p>1 box of 50 Bamboo Cotton Eartips</p>
            </div>
            <div>
              <BsArrowRightCircleFill size={"24px"} />
              <p>1 Bamboo Toothbrush</p>
            </div>
          </div>
        </div>
        <div className="btn">
        <a className="button" href="https://www.earthly.ie/product-page/sustainability-starter-pack">FIND OUT MORE!</a>
        </div>
        </div>

      <div className="kit_img">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          //   grabCursor={true}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={st_kit_img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={st_kit_img0} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={st_kit_img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={st_kit_img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={st_kit_img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={st_kit_img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={st_kit_img5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsIntro;
