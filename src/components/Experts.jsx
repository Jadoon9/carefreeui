import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import exp1 from "../assets/images/exp1.png";
import { EffectCoverflow, Pagination } from "swiper";

const Experts = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-center">
        <h5>Our Experts are here for you</h5>
        <p>
          Be inspired by our expert practitioners as they explain how to build
          sustainable good mental health
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={exp1} alt="exp" />
            <h5>Dr. Christopher Willard</h5>
            <p>
              A Harvard Medical School professor, a psychologist specializing in
              mindfulness, TEDx speaker and author.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={exp1} alt="exp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={exp1} alt="exp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Experts;
