import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CompParticipation() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      {/* Hero Section with Overlay Card */}
      <div className="relative w-full max-w-5xl  mx-auto flex flex-col lg:flex-row gap-6  items-center px-4 py-8">
        <img
          src="/comp-part.avif"
          alt="Competitive Participation"
          className="lg:max-w-[40rem] w-full h-80 lg:h-full max-h-[40rem] object-cover  border border-[rgba(40,41,54,0.5)]"
        />
        <div className="lg:absolute bg-white p-6   lg:max-w-lg top-1/2 lg:-translate-y-1/2 right-1/2 lg:translate-x-[96.5%] border border-[rgba(40,41,54,0.5)]">
          <h2 className="text-3xl md:text-5xl">
            {t("compParticipation.title")}
          </h2>
          <p className="text-xl md:text-3xl mt-4">
            {t("compParticipation.subtitle")}
          </p>
          <p className="mt-6  leading-8 font-[300]">
            {t("compParticipation.desc")}
          </p>
        </div>
      </div>

      {/* Criteria Section */}
      <div className="container max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl md:text-5xl mb-4">
          {" "}
          {t("compParticipation.criteria")}
        </h3>
        <h6 className="text-lg md:ml-10">
          {t("compParticipation.criteriaDesc")}
        </h6>
        <ul
          className="list-decimal text-lg font-[300] mt-2 list-inside space-y-2 ml-4 md:ml-14"
          dangerouslySetInnerHTML={{
            __html: t("compParticipation.criteriaList"),
          }}
        ></ul>

        {/* Info Boxes + Buttons */}
        <div className="mt-10 grid md:grid-cols-4 gap-6 text-center">
          <Link to={"/awards"} className="flex items-center justify-center">
            <button className="bg-[#c2274b] border border-[#c2274b] text-white text-2xl px-12 py-4 rounded-3xl whitespace-nowrap hover:bg-white cursor-pointer font-medium  hover:text-[#c2274b] transition-all duration-300">
              {t("navbar.awards")}
            </button>
          </Link>
          <div className="p-6 bg-[#f6ebe4] border  ">
            <p className="font-[300]">{t("compParticipation.box1")}</p>
          </div>

          <div className="p-6 bg-[#f6ebe4] border">
            <p className="font-[300]">{t("compParticipation.box2")}</p>
          </div>

          <Link
            to={"/register-now"}
            className="flex items-center justify-center"
          >
            <button className="bg-[#c2274b] border border-[#c2274b] text-white text-2xl px-12 py-4 rounded-3xl whitespace-nowrap hover:bg-white cursor-pointer font-medium  hover:text-[#c2274b] transition-all duration-300">
              {t("navbar.register")}
            </button>
          </Link>
        </div>
      </div>

      {/* Conditions Section */}
      <div className="container max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl md:text-5xl mb-4">
          {" "}
          {t("compParticipation.conditions")}
        </h3>
        <ul
          className="list-decimal text-lg font-[300] mt-2 list-inside space-y-2 ml-4 md:ml-10"
          dangerouslySetInnerHTML={{
            __html: t("compParticipation.conditionsList"),
          }}
        ></ul>

        <p className="mt-6 text-lg font-[300] leading-relaxed">
          {t("compParticipation.footerText")}
        </p>
      </div>
    </div>
  );
}
