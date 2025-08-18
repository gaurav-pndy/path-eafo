import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";

const VideoGallery = () => {
  const videos = [
    {
      id: "1",
      title:
        "Somasundaram Subramanian, Founder & CEO, Eurasian Federation of Oncology",
      url: "https://www.youtube.com/embed/qZo1EijVMxY",
      thumb: "https://i.ytimg.com/vi/qZo1EijVMxY/maxresdefault.jpg",
    },
    {
      id: "2",
      title: "EAFO Oncology Conference Highlights",
      url: "https://www.youtube.com/embed/UoHnhj7Gzf4",
      thumb: "https://i.ytimg.com/vi/UoHnhj7Gzf4/maxresdefault.jpg",
    },
    {
      id: "3",
      title: "Advances in Cancer Treatment",
      url: "https://www.youtube.com/embed/hwZi2iLTlu0",
      thumb: "https://i.ytimg.com/vi/hwZi2iLTlu0/maxresdefault.jpg",
    },
    {
      id: "4",
      title: "International Research Collaboration",
      url: "https://www.youtube.com/embed/c_4SK4thQ3w",
      thumb: "https://i.ytimg.com/vi/c_4SK4thQ3w/sddefault.jpg",
    },
    {
      id: "5",
      title: "Multidisciplinary Approaches in Oncology",
      url: "https://www.youtube.com/embed/o1AHhQyC-0A",
      thumb: "https://i.ytimg.com/vi/o1AHhQyC-0A/hqdefault.jpg",
    },
    {
      id: "6",
      title: "Multidisciplinary Approaches in Oncology",
      url: "https://www.youtube.com/embed/wQe390RRLMs",
      thumb: "https://i.ytimg.com/vi/wQe390RRLMs/maxresdefault.jpg",
    },
    {
      id: "7",
      title: "Multidisciplinary Approaches in Oncology",
      url: "https://www.youtube.com/embed/9xktoufX6dU",
      thumb: "https://i.ytimg.com/vi/9xktoufX6dU/maxresdefault.jpg",
    },
    {
      id: "8",
      title: "Multidisciplinary Approaches in Oncology",
      url: "https://www.youtube.com/embed/mKx9XNUW2wY",
      thumb: "https://i.ytimg.com/vi/mKx9XNUW2wY/maxresdefault.jpg",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <section className="py-10 px-4 flex flex-col items-center">
      {/* Main Video Player */}
      <div className="w-full max-w-[52rem]">
        <iframe
          className="w-full h-64 md:h-[30rem]"
          src={currentVideo.url}
          title={currentVideo.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Swiper Thumbnails */}
      <div className="mt-6 w-full max-w-[52rem] relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={2}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                key={video.id}
                className="relative group cursor-pointer w-full h-38"
                onClick={() => setCurrentVideo(video)}
              >
                {/* Thumbnail Image */}
                <img
                  src={video.thumb}
                  alt={video.title}
                  className={`h-38 w-full object-cover  `}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 flex flex-col  opacity-0  group-hover:opacity-100 transition-opacity duration-300">
                  {/* Play Button */}
                  <p className="text-white text-sm font-[300] p-2">
                    {video.title}
                  </p>
                  <div className=" absolute flex h-full w-full justify-center items-center text-white text-3xl rounded-full p-3 mb-2">
                    <BsPlayCircle />
                  </div>
                  {/* Video Title */}
                </div>

                {currentVideo.id === video.id && (
                  <div className="absolute inset-0 bg-black/60  flex items-center justify-center transition-opacity duration-300">
                    {/* Play Button */}
                    <p className="text-white text-sm font-[300] p-2">
                      Now Playing
                    </p>

                    {/* Video Title */}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="flex justify-between mt-4 items-center">
          <button className="prev-btn cursor-pointer disabled:opacity-50">
            <CgArrowLongLeft className="text-4xl" />
          </button>
          <button className="next-btn cursor-pointer disabled:opacity-50">
            <CgArrowLongRight className="text-4xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
