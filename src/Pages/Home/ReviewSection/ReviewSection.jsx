import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {BsQuote} from "react-icons/bs"
// import required modules
import "swiper/css/navigation";
import { Navigation } from "swiper";
import userOne from "../../../assets/Home/Testimonial/userOne.png"
import userTwo from "../../../assets/Home/Testimonial/userTwo.png"
const ReviewSection = () => {
  const sectionTitle = {
    title: "What Our Patients Says",
    pera: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  };
  return (
    <section className="st">
      <div className="container">
        <SectionTitle sectionTitle={sectionTitle}></SectionTitle>

        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            navigation={true} 
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="p-[50px] relative border rounded-lg">
                <div className="flex items-center mb-7 gap-5">
                  <div className="avatar">
                    <div className="w-14 border-2 border-[#F7A582] rounded-full ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={userOne} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">Awlad Hossain</h3>
                    <p className="text-sm">Product Designer</p>
                  </div>
                </div>
                <p className="text-base font-thin">
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknow printer tool a galley of type
                  and scrambled it to make type specimen book has survived not
                  only five centurines.
                </p>
                <div className="absolute top-16 right-16">
                    <BsQuote className="text-6xl text-[#F7A582]"></BsQuote>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-[50px] relative border rounded-lg">
                <div className="flex items-center mb-7 gap-5">
                  <div className="avatar">
                    <div className="w-14 border-2 border-[#F7A582] rounded-full ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={userTwo} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">Farhana Hossain</h3>
                    <p className="text-sm">Brand Designer</p>
                  </div>
                </div>
                <p className="text-base font-thin">
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknow printer tool a galley of type
                  and scrambled it to make type specimen book has survived not
                  only five centurines.
                </p>
                <div className="absolute top-16 right-16">
                    <BsQuote className="text-6xl text-[#F7A582]"></BsQuote>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-[50px] relative border rounded-lg">
                <div className="flex items-center mb-7 gap-5">
                  <div className="avatar">
                    <div className="w-14 border-2 border-[#F7A582] rounded-full ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={userOne} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">Awlad Hossain</h3>
                    <p className="text-sm">Product Designer</p>
                  </div>
                </div>
                <p className="text-base font-thin">
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknow printer tool a galley of type
                  and scrambled it to make type specimen book has survived not
                  only five centurines.
                </p>
                <div className="absolute top-16 right-16">
                    <BsQuote className="text-6xl text-[#F7A582]"></BsQuote>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-[50px] relative border rounded-lg">
                <div className="flex items-center mb-7 gap-5">
                  <div className="avatar">
                    <div className="w-14 border-2 border-[#F7A582] rounded-full ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={userTwo} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">Farhana Hossain</h3>
                    <p className="text-sm">Brand Designer</p>
                  </div>
                </div>
                <p className="text-base font-thin">
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknow printer tool a galley of type
                  and scrambled it to make type specimen book has survived not
                  only five centurines.
                </p>
                <div className="absolute top-16 right-16">
                    <BsQuote className="text-6xl text-[#F7A582]"></BsQuote>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-[50px] relative border rounded-lg">
                <div className="flex items-center mb-7 gap-5">
                  <div className="avatar">
                    <div className="w-14 border-2 border-[#F7A582] rounded-full ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={userOne} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">Awlad Hossain</h3>
                    <p className="text-sm">Product Designer</p>
                  </div>
                </div>
                <p className="text-base font-thin">
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknow printer tool a galley of type
                  and scrambled it to make type specimen book has survived not
                  only five centurines.
                </p>
                <div className="absolute top-16 right-16">
                    <BsQuote className="text-6xl text-[#F7A582]"></BsQuote>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-[50px] relative border rounded-lg">
                <div className="flex items-center mb-7 gap-5">
                  <div className="avatar">
                    <div className="w-14 border-2 border-[#F7A582] rounded-full ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={userTwo} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">Farhana Hossain</h3>
                    <p className="text-sm">Brand Designer</p>
                  </div>
                </div>
                <p className="text-base font-thin">
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknow printer tool a galley of type
                  and scrambled it to make type specimen book has survived not
                  only five centurines.
                </p>
                <div className="absolute top-16 right-16">
                    <BsQuote className="text-6xl text-[#F7A582]"></BsQuote>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
