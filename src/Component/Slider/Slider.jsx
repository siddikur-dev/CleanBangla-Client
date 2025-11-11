import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router";

export default function HeroSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const navigate = useNavigate();
  const handleReport = () => {
    navigate("/add-issue");
  };
  return (
    <div className="w-full h-[90vh] text-[#c8e5d5]">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-full"
      >
        {/* Slide 1 - Garbage Issue */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/yBsr1F4M/image.webp"
              alt="Garbage Issue"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center  px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Report Local Cleanliness Issues
              </h1>
              <p className="max-w-xl text-lg">
                Spot garbage buildup, broken footpaths, or illegal dumping in
                your area and report instantly.
              </p>

              <button onClick={handleReport} className="btn btn-primary mt-5">Report an issues</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Community Cleaning */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co.com/Df3Xnz3b/image-1.webp"
              alt="Community Cleaning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center  px-6 ">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Join Community Cleanup Drives
              </h1>
              <p className="max-w-xl text-lg">
                Take part in organized cleanup programs and make your city a
                cleaner, healthier place.
              </p>
              <button onClick={handleReport} className="btn btn-primary mt-5">
                Report an issues
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Sustainability Action */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1503264116251-35a269479413"
              alt="Sustainability Action"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center  px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Act for a Sustainable Future
              </h1>
              <p className="max-w-xl text-lg">
                Encourage recycling, reduce waste, and support eco-friendly
                community actions.
              </p>
              <button onClick={handleReport} className="btn btn-primary mt-5">
                Report an issues
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*  Slide 4 - Recycling & Awareness */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115"
              alt="Recycling Awareness"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center  px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Promote Recycling & Awareness
              </h1>
              <p className="max-w-xl text-lg">
                Spread awareness about recycling and inspire others to adopt
                sustainable habits.
              </p>
              <button onClick={handleReport} className="btn btn-primary mt-5">
                Report an issues
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Progress Circle */}
        <div
          className="autoplay-progress absolute bottom-10 right-10 z-10 flex items-center space-x-2 text-white"
          slot="container-end"
        >
          <svg viewBox="0 0 48 48" ref={progressCircle} className="w-8 h-8">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} className="text-sm font-medium"></span>
        </div>
      </Swiper>
    </div>
  );
}
