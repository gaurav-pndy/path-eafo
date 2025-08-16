import React from "react";
import HeroSection from "../components/Home/HeroSection";
import WelcomeSection from "../components/Home/WelcomeSection";
import { useTranslation } from "react-i18next";
import Specialties from "../components/Home/Specialities";
import CourseFigures from "../components/Home/CourseFigures";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <HeroSection />
      <section className="w-full">
        {/* Top Border */}
        <div className="h-6 bg-[#00086b]" />

        {/* Target Audience Section */}
        <div className="bg-[#c2274b] text-white py-3 md:py-6 px-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
          <div className="text-4xl  md:border-r-6 md:pr-6 border-white md:text-7xl font-medium leading-tight text-center md:text-right">
            <p
              dangerouslySetInnerHTML={{ __html: t("audience.targetAudience") }}
            ></p>
          </div>
          <div className="border-t-4 pt-2 md:border-none md:pt-0  border-white text-lg md:text-4xl text-center md:leading-12 font-[300] md:text-left">
            <p>{t("audience.pathologists")} </p>
            <p>{t("audience.histopathologists")}</p>
            <p>{t("audience.molecularBiologists")} </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="h-6 bg-[#00086b]" />

        {/* The Wait is Over Section */}
        <div className="py-6 px-6 text-center">
          <h2 className="text-4xl md:text-5xl  text-gray-800 mb-2">
            {t("audience.waitOver")} 🎉
          </h2>
          <p className="text-lg md:text-xl bold text-[#00086b] mb-2">
            {t("audience.timeLeft")}
          </p>
          <p
            className="text-lg font-[300] text-[#00086b]"
            dangerouslySetInnerHTML={{ __html: t("audience.timer") }}
          ></p>
        </div>
      </section>
      <WelcomeSection />

      <Specialties />

      <CourseFigures />
    </div>
  );
};

export default Home;
