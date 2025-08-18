import React from "react";
import { useTranslation } from "react-i18next";

export default function ParticipationVariants() {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col items-center ">
      {/* Hero Section */}
      <div className="relative w-full h-80 lg:h-[30rem] flex items-center justify-center">
        <img
          src="/part-var/hero.avif"
          alt="Participation Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative w-[90vw] md:w-full bg-white px-2 md:px-6 py-6 md:py-10  shadow-md text-center md:max-w-2xl">
          <h1 className="text-3xl md:text-6xl ">{t("partVariants.title")} </h1>
          <p className="mt-2 text-base md:text-lg font-[300]">
            {t("partVariants.subtitle")}{" "}
          </p>
        </div>
      </div>

      {/* On-Site without Accommodation */}
      <div className="container max-w-5xl  px-4 xl:px-0 py-12  gap-8 items-center text-center md:text-start border-b">
        {/* Text */}
        <div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-6 md:mb-10">
            <h2 className="text-3xl md:text-[2.5rem] mt-6 md:mt-0">
              {t("partVariants.onsite")}
            </h2>
            <div className="flex justify-center">
              <img
                src="/part-var/img1.avif"
                alt="On-Site Participation"
                className=" shadow-lg w-full max-w-[26rem]"
              />
            </div>
          </div>
          <p className="leading-relaxed text-lg font-[300]">
            {t("partVariants.para1")}
          </p>
        </div>
        {/* Image */}
      </div>

      {/* Online Participation */}
      <div className="container mt-2 max-w-5xl  px-4 xl:px-0 py-12  gap-8 items-center border-b text-center md:text-start">
        {/* Text */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10">
            <div className="flex justify-center">
              <img
                src="/part-var/img2.avif"
                alt="Online Participation"
                className=" shadow-lg w-full max-w-[26rem]"
              />
            </div>
            <h2 className="text-3xl md:text-[2.5rem]  mt-6 md:mt-0">
              {t("partVariants.online")}
            </h2>
          </div>
          <p className="leading-relaxed text-lg font-[300]">
            {t("partVariants.para2")}
          </p>
        </div>
        {/* Image */}
      </div>
    </div>
  );
}
