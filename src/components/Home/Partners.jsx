"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

export default function Partners() {
  const { t } = useTranslation();
  const partners = [
    { name: "FIRMST", logo: "/partners/FIRMST.png" },
    { name: "HealthDirect", logo: "/partners/HD.png" },
    { name: "Pathologica", logo: "/partners/Pathologica.png" },
    { name: "Pasovit", logo: "/partners/Pasovit.png" },
    { name: "RemesloDobra", logo: "/partners/remeslo.jpg" },
    { name: "ECRC", logo: "/partners/ECRC.png" },
    // add more logos here
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl  text-[rgb(40,41,54)] ">
          {t("partners")}
        </h2>
        <div className="mt-2 w-12 h-1 bg-[rgb(40,41,54)] mx-auto "></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className="flex items-center"
        >
          {partners.map((partner, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-28 object-contain mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
