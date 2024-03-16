import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import Btn from "../../Components/Btn";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 200,
    });
  }, []);

  return (
    <>
    
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="font-andika ">
          <div className="hero min-h-screen bg-gradient-to-r from-slate-50 ... to-green-200 ...">
            <div className="hero-content px-5 lg:px-10 xl:px-0 2xl:max-w-screen-2xl flex-col-reverse md:flex-row-reverse">
              <div data-aos="fade-left" className="lg:w-3/6 lg:max-w-lg ">
                <img src="https://i.ibb.co/BV13fHZ/banner-img-2.png" />
              </div>
              <div className="lg:w-3/5 mr-auto">
                <p
                  data-aos="fade-down"
                  className="text-brand-color md:text-xl font-bold mb-3"
                >
                    Empowering Communities for a Cleaner Planet
                </p>
                <h1
                  data-aos="fade-up-right"
                  className="text-4xl lg:text-7xl font-bold text-gray-900"
                >
                  Best waste pickup solutaions
                </h1>
                <p className="py-6 text-lg">
                  We have already made huge strides in our sustainability
                  journey by investing in plastic recycling and energy from
                  waste infrastructure and low carbon collections.
                </p>

                <Link to={"/pickUpReq"}>
                  <Btn className="btn border-0 text-lg bg-gradient-to-r from-brand-color to-green-300 hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color text-white">
                    Pickup Request
                  </Btn>
                </Link>
              </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="font-andika">
          <div className="hero min-h-screen bg-gradient-to-r from-slate-50 ... to-green-200 ...">
            <div className="hero-content px-5 lg:px-10 xl:px-0 2xl:max-w-screen-2xl flex-col-reverse md:flex-row-reverse">
              <div data-aos="fade-left" className="lg:w-3/6 lg:max-w-lg ">
                <img src="https://i.ibb.co/vs6R7RC/banner-img-1.png" />
              </div>
              <div className="lg:w-3/5 mr-auto">
                <p
                  data-aos="fade-down"
                  className="text-brand-color md:text-xl font-bold mb-3"
                >
                  Empowering Communities for a Cleaner Planet
                </p>
                <h1
                  data-aos="fade-up-right"
                  className="text-4xl lg:text-7xl font-bold text-gray-900"
                >
                  Smart waste pickup solutaions
                </h1>
                <p className="py-6 text-lg">
                  We have already made huge strides in our sustainability
                  journey by investing in plastic recycling and energy from
                  waste infrastructure and low carbon collections.
                </p>

                <Link to={"/pickUpReq"}>
                  <Btn>Pickup Request</Btn>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="font-andika">
          <div className="hero min-h-screen bg-gradient-to-r from-slate-50 ... to-green-200 ...">
            <div className="hero-content px-5 lg:px-10 xl:px-0 2xl:max-w-screen-2xl flex-col-reverse md:flex-row-reverse">
              <div data-aos="fade-left" className="lg:w-3/6 lg:max-w-lg ">
                <img src="https://i.ibb.co/8cvLPYm/banner-img-4.png" />
              </div>
              <div className="lg:w-3/5 mr-auto">
                <p
                  data-aos="fade-down"
                  className="text-brand-color md:text-xl font-bold mb-3"
                >
                  Empowering Communities for a Cleaner Planet
                </p>
                <h1
                  data-aos="fade-up-right"
                  className="text-4xl lg:text-7xl font-bold text-gray-900"
                >
                  Best waste pickup solutaions
                </h1>
                <p className="py-6 text-lg">
                  We have already made huge strides in our sustainability
                  journey by investing in plastic recycling and energy from
                  waste infrastructure and low carbon collections.
                </p>
                <Link to={"/pickUpReq"}>
                  <Btn>Pickup Request</Btn>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
