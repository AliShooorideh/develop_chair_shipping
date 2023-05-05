import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Id() {
  const [like, setLike] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;
  const data = [
    {
      id: 1,
      srcPic: "/images/chair02.jpg",
    },
    {
      id: 2,
      srcPic: "/images/chair01.jpg",
    },
    {
      id: 3,
      srcPic: "/images/chair01.jpg",
    },
    {
      id: 4,
      srcPic: "/images/chair02.jpg",
    },

    {
      id: 5,
      srcPic: "/images/sofa02.jpg",
    },
    {
      id: 6,
      srcPic: "/images/sofa03.jpg",
    },
    {
      id: 7,
      srcPic: "/images/sofa01.jpg",
    },
    {
      id: 8,
      srcPic: "/images/sofa02.jpg",
    },
    {
      id: 9,
      srcPic: "/images/table02.jpg",
    },
    {
      id: 10,
      srcPic: "/images/table03.jpg",
    },
    {
      id: 11,
      srcPic: "/images/table01.jpg",
    },
    {
      id: 12,
      srcPic: "/images/table02.jpg",
    },
  ];
  const pageData = data.find((item) => {
    return item.id === parseInt(id as string);
  });
  return (
    <>
      <div className="px-6 pt-10">
        <div className="flex justify-between ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
            onClick={() => router.back()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={like ? "red" : "grey"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="h-6 w-6"
            onClick={() => setLike(!like)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <Image
          className="mt-5 h-40 w-full rounded-2xl bg-[#3E736F] object-contain"
          loading="lazy"
          src={`${pageData?.srcPic}`}
          alt={""}
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="mt-5 flex justify-between">
          <div className="w-1/2 space-y-1 whitespace-nowrap">
            <span className="text-xl font-semibold">Lorem Ipsum</span>
            <p className="whitespace-normal opacity-60">
              Lorem ipsum dolor ametconsectetur
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                fill="#F7AB40"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                fill="#F7AB40"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                fill="#F7AB40"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                fill="#F7AB40"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                fill="grey"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <span className="ml-2 text-sm font-bold">4</span>
            </div>
          </div>
          <span className="text-2xl font-bold text-[#F7AB40]">$ 30</span>
        </div>
        <div className="mt-3 flex items-center space-x-5">
          <span className="font-bold ">Color : </span>
          <div className="flex space-x-2">
            <div className="h-5 w-5 rounded-full bg-orange-600" />
            <div className="h-5 w-5 rounded-full bg-green-600" />
            <div className="h-5 w-5 rounded-full bg-yellow-600" />
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <button className="rounded-full bg-[#F7AB40] px-10 py-2 font-bold text-white">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-5 h-96 space-y-6 bg-[#3E736F] py-6 pl-6">
        <span className="text-2xl font-bold text-white">Recently View</span>
        <Swiper slidesPerView={1.5} spaceBetween={15} className="mySwiper">
          <SwiperSlide>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                className="h-40 w-full  bg-white object-contain"
                loading="lazy"
                src={"/images/chair01.jpg"}
                alt={""}
                width="0"
                height="0"
                sizes="100vw"
              />
              <div className="absolute h-9 items-center inset-x-0 bottom-0 flex justify-center bg-black bg-opacity-50 backdrop-blur-md">
                <span className="text-white font-bold">Lorem Ipsum</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative overflow-hidden rounded-2xl">
              <Image
                className="h-40 w-full  bg-white object-contain"
                loading="lazy"
                src={"/images/sofa01.jpg"}
                alt={""}
                width="0"
                height="0"
                sizes="100vw"
              />
              <div className="absolute h-9 items-center inset-x-0 bottom-0 flex justify-center bg-black bg-opacity-50 backdrop-blur-md">
                <span className="text-white font-bold">Lorem Ipsum</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative overflow-hidden rounded-2xl">
              <Image
                className="h-40 w-full  bg-white object-contain"
                loading="lazy"
                src={"/images/table01.jpg"}
                alt={""}
                width="0"
                height="0"
                sizes="100vw"
              />
              <div className="absolute h-9 items-center inset-x-0 bottom-0  flex justify-center bg-black bg-opacity-50 backdrop-blur-md">
                <span className="text-white font-bold">Lorem Ipsum</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative overflow-hidden rounded-2xl">
              <Image
                className="h-40 w-full  bg-white object-contain"
                loading="lazy"
                src={"/images/chair02.jpg"}
                alt={""}
                width="0"
                height="0"
                sizes="100vw"
              />
              <div className="absolute h-9 items-center inset-x-0 bottom-0  flex justify-center bg-black bg-opacity-50 backdrop-blur-md">
                <span className="text-white font-bold">Lorem Ipsum</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
