import React from "react";
import { useTranslation } from "react-i18next";
import VideoGallery from "../components/EAFO/VideoGallery";

const EAFOPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Mission Section */}
      <section className="relative w-full max-w-6xl  mx-auto flex justify-end flex-col-reverse lg:flex-row gap-6  items-center px-4 lg:px-14 py-8">
        <div className="lg:absolute bg-[#fff0ec] p-4 md:p-10   lg:max-w-[34rem] top-1/2 lg:-translate-y-1/2 -left-1/2 lg:translate-x-[116%] border border-[rgba(40,41,54,0.5)]">
          <h2 className="text-3xl md:text-6xl">{t("mission.title")}</h2>
          <p className="font-[300] text-[1.1rem] leading-relaxed mt-4">
            {t("mission.description")}
          </p>
          <button className="bg-[#c2274b] mt-6 border border-[#c2274b] text-white text-sm px-4 py-2  whitespace-nowrap hover:bg-white cursor-pointer font-[300]  hover:text-[#c2274b] transition-all duration-300">
            {t("mission.button")}
          </button>
        </div>
        {/* <div className="flex justify-center"> */}
        <video
          autoPlay
          loop
          muted
          src="/eafo-video.mp4"
          alt="EAFO Logo"
          className="lg:max-w-[88%] w-full h-80 lg:h-full max-h-[40rem] object-cover  border border-[rgba(40,41,54,0.5)]"
        />
        {/* </div> */}
      </section>
      {/* eafo EAFO */}
      <section className="bg-[#fff0ec] py-10 px-6 text-center">
        <h2 className="text-3xl md:text-5xl  mb-6">{t("eafo.title")}</h2>
        <p
          className="text-gray-700 max-w-3xl text-lg leading-relaxed font-[300] mx-auto"
          dangerouslySetInnerHTML={{ __html: t("eafo.description") }}
        ></p>
      </section>
      {/* What We Do */}
      <section className="py-10 md:px-4 max-w-6xl mx-auto ">
        <h2 className="text-3xl md:text-5xl text-center mb-8">
          {t("whatWeDo.title")}
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Box 1 */}
          <div className="bg-[#c2274b] text-white  grid grid-cols-1 md:grid-cols-2 gap-2">
            <ul className=" text-[1.1rem] flex flex-col text-center justify-between p-6">
              <li>{t("whatWeDo.items.multiDisciplinary")}</li>
              <li>{t("whatWeDo.items.oncoPathology")}</li>
              <li>{t("whatWeDo.items.liveSurgery")}</li>
              <li>{t("whatWeDo.items.radiotherapy")}</li>
            </ul>
            <img
              src="/what-we-do/img1.avif"
              alt=""
              className="max-h-96 lg:max-h-full p-6 pt-0 md:p-0 w-full object-cover "
            />
          </div>

          {/* Box 2 */}
          <div className="bg-[#c2274b] text-white  grid grid-cols-1 md:grid-cols-2 gap-2">
            <ul className=" text-[1.1rem] flex flex-col text-center justify-between p-6">
              <li>{t("whatWeDo.items.oncoSurgery")}</li>
              <li>{t("whatWeDo.items.researchMeetings")}</li>
              <li>{t("whatWeDo.items.cancerPrevention")}</li>
              <li>{t("whatWeDo.items.oncologyMeetings")}</li>
              <li>{t("whatWeDo.items.speakerBureau")}</li>
            </ul>
            <img
              src="/what-we-do/img2.avif"
              alt=""
              className="max-h-96 lg:max-h-full p-6 pt-0 md:p-0 w-full object-cover "
            />
          </div>

          {/* Box 3 */}
          <div className="bg-[#c2274b] text-white  grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col text-center justify-center p-6">
              <h3 className="font-semibold text-lg mb-4">
                {t("whatWeDo.items.studyTrials.title")}
              </h3>
              <p className="font-[300] leading-relaxed">
                {t("whatWeDo.items.studyTrials.description")}
              </p>
            </div>
            <img
              src="/what-we-do/img3.avif"
              alt=""
              className="max-h-96 lg:max-h-full p-6 pt-0 md:p-0 w-full object-cover "
            />
          </div>
          <div className="bg-[#c2274b] text-white  grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col text-center justify-center p-6">
              <h3 className="font-semibold text-lg mb-4">
                {t("whatWeDo.items.multiDisciplinaryTeam.title")}
              </h3>
              <p className="font-[300] leading-relaxed">
                {t("whatWeDo.items.multiDisciplinaryTeam.description")}
              </p>
            </div>
            <img
              src="/what-we-do/img4.avif"
              alt=""
              className="max-h-96 lg:max-h-full p-6 pt-0 md:p-0 w-full object-cover "
            />
          </div>
        </div>
      </section>
      {/* Video Section */}
      <VideoGallery />
    </div>
  );
};

export default EAFOPage;
