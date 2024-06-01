import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../Styles/SwiperSlide.css';
import 'animate.css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import bg from "../../../public/bg1.gif";
import bg1 from "../../../public/bg2.gif";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PlateSwap | Home</title>
      </Helmet>
      <div className='relative font-Poppins'>
        <Swiper
          spaceBetween={0} 
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='bg-gradient-to-r from-slate-900 to-black '>
            <div
              className="bg-cover mr-0 bg-center hero w-full h-[580px] bg-gradient-to-r from-slate-900 to-black"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            >
              <div className="hero-content text-center text-neutral-content animate__animated animate__fadeInUp animate__slower">
                <div className="lg:max-w-lg md:max-w-md w-[100%] lg:w-[100%]">
                  <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-[#fff] font-Prata">
                    Discover Your Food
                  </h1>
                  <p className="mb-5 text-[#fff] font-semibold">
                    Welcome to <a className="ml-2 text-2xl font-bold italic text-[#48cf8e]">PlateSwap</a>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='bg-gradient-to-r from-slate-900 to-black '>
            <div
              className="bg-cover mr-0 bg-center hero w-full h-[580px] bg-gradient-to-r from-slate-900 to-black"
              style={{
                backgroundImage: `url(${bg1})`,
              }}
            >
              <div className="hero-content text-center text-neutral-content animate__animated animate__fadeInUp animate__slower">
                <div className="lg:max-w-lg md:max-w-md w-[100%] lg:w-[100%]">
                  <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-[#fff] font-Prata">
                    Discover Your Food
                  </h1>
                  <p className="mb-5 text-[#fff] font-semibold">
                    Welcome to <a className="ml-2 text-2xl font-bold italic text-[#48cf8e]">PlateSwap</a>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  );
};

export default Home;
