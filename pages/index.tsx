import ProductBox from "@/components/ProductBox";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Home() {
  const [tab, setTab] = useState<number>(1);
  function ProductShow() {
    switch (tab) {
      case 1:
        return (
          <div className="my-5 space-y-4 overflow-y-scroll">
            <ProductBox id={1} price={20} imgSrc={"/images/chair02.jpg"} />
            <ProductBox id={2} price={10} imgSrc={"/images/chair01.jpg"} />
            <ProductBox id={3} price={40} imgSrc={"/images/chair01.jpg"} />
            <ProductBox id={4} price={50} imgSrc={"/images/chair02.jpg"} />
          </div>
        );
        break;
      case 2:
        return (
          <div className="my-5 space-y-4 overflow-y-scroll">
            <ProductBox id={5} price={5} imgSrc={"/images/sofa02.jpg"} />
            <ProductBox id={6} price={10} imgSrc={"/images/sofa03.jpg"} />
            <ProductBox id={7} price={25} imgSrc={"/images/sofa01.jpg"} />
            <ProductBox id={8} price={38} imgSrc={"/images/sofa02.jpg"} />
          </div>
        );
        break;
      case 3:
        return (
          <div className="my-5 space-y-4 overflow-y-scroll">
            <ProductBox id={9} price={10} imgSrc={"/images/table02.jpg"} />
            <ProductBox id={10} price={24} imgSrc={"/images/table03.jpg"} />
            <ProductBox id={11} price={28} imgSrc={"/images/table01.jpg"} />
            <ProductBox id={12} price={40} imgSrc={"/images/table02.jpg"} />
          </div>
        );
        break;
    }
  }
  return (
    <div>
      <div className="bg-[#3E736F]">
        <div className="mb-4 flex justify-between px-7 pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <span className=" px-6 text-2xl font-bold text-white">Explore</span>
        <div className="py-6 pl-5">
          <Swiper slidesPerView={2.5} spaceBetween={15} className="mySwiper">
            <SwiperSlide>
              <Image
                className="h-40 w-full rounded-2xl bg-white object-contain"
                loading="lazy"
                src={"/images/chair01.jpg"}
                alt={""}
                width="0"
                height="0"
                sizes="100vw"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="h-40 w-full rounded-2xl bg-white object-contain"
                loading="lazy"
                src={"/images/sofa01.jpg"}
                alt={""}
                width="0"
                height="0"
                sizes="100vw"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="h-40 w-full rounded-2xl bg-white object-contain"
                loading="lazy"
                src={"/images/table01.jpg"}
                alt={""}
                width="0"
                height="0"
                sizes="100vw"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="h-40 w-full rounded-2xl bg-white object-contain"
                loading="lazy"
                src={"/images/chair02.jpg"}
                alt={""}
                width="0"
                height="0"
                sizes="100vw"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between px-8 text-center font-bold">
        <span
          className={`w-1/4 ${
            tab === 1
              ? "rounded-full bg-[#F7AB40] px-3 py-1 text-white"
              : "opacity-70"
          }`}
          onClick={() => setTab(1)}
        >
          Chairs
        </span>
        <span
          className={`w-1/4 ${
            tab === 2
              ? "rounded-full bg-[#F7AB40] px-3 py-1 text-white"
              : "opacity-70"
          }`}
          onClick={() => setTab(2)}
        >
          Sofa
        </span>
        <span
          className={`w-1/4 ${
            tab === 3
              ? "rounded-full bg-[#F7AB40] px-3 py-1 text-white"
              : "opacity-70"
          }`}
          onClick={() => setTab(3)}
        >
          Table
        </span>
      </div>
      <div>{ProductShow()}</div>
    </div>
  );
}
