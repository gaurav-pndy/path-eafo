import Slider from "react-slick";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import i18n from "../../utils/i18n";
import { use, useEffect, useMemo } from "react";
import { i } from "framer-motion/client";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { i18n } = useTranslation();

  // Define images for each language
  const imageSets = {
    en: [
      "/hero-images/image1.avif",
      "/hero-images/image2.avif",
      "/hero-images/image3.avif",
    ],
    ru: [
      "/hero-images/ru/image1.avif",
      "/hero-images/ru/image2.avif",
      "/hero-images/ru/image3.avif",
    ],
  };

  // Pick images for current language
  const images = useMemo(() => {
    return imageSets[i18n.language] || imageSets["en"]; // fallback to English
  }, [i18n.language]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="relative w-full xl:h-[90vh] overflow-hidden">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="xl:h-[90vh]">
            <motion.img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

// Custom Arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 cursor-pointer  -translate-y-1/2 "
    >
      <SlArrowRight className="text-2xl md:text-5xl" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 z-10 top-1/2 cursor-pointer -translate-y-1/2 "
    >
      <SlArrowLeft className="text-2xl md:text-5xl " />
    </button>
  );
}

export default HeroSection;
