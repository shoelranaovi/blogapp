// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import img3 from "../assets/image/img3.jpg";
import img4 from "../assets/image/img4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-[] ">
        <SwiperSlide>
          <img src={img1} alt="" className=" w-full sm:h-96 lg:h-80 " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className=" w-full sm:h-96 lg:h-80 " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className=" w-full sm:h-96 lg:h-80 " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className=" w-full sm:h-96 lg:h-80 " />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
