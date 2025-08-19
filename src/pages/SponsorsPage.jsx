import { useTranslation } from "react-i18next";

export default function SponsorsPage() {
  const { t, i18n } = useTranslation();
  return (
    <div className="py-12 px-4 text-center">
      {/* Title */}
      <h1 className="text-4xl lg:text-6xl text-[#5e5f68] mb-8">
        {" "}
        {t("sponsors.title")}
      </h1>

      {/* Platinum Sponsors */}

      <div className="text-center py-2">
        <h1
          className="text-4xl lg:text-7xl font-extrabold uppercase"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/nsplsh_80fae4e0731444e3bf8179ca080cd2d0~mv2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("sponsors.platinum")}
        </h1>
      </div>
      <p className=" text-3xl mt-2">{t("sponsors.platHead")}</p>
      <p
        className="font-[300] max-w-3xl text-lg mx-auto mt-2"
        dangerouslySetInnerHTML={{ __html: t("sponsors.platDesc") }}
      ></p>

      {/* Gold Sponsors */}
      <div className="text-center py-2 mt-10">
        <h1
          className="text-4xl lg:text-7xl font-extrabold uppercase"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/nsplsh_6413f67ba5fb45eebbd0c2658c2f0f3e~mv2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("sponsors.gold")}
        </h1>
      </div>
      <p
        className="font-[300] max-w-3xl text-lg mx-auto mt-2"
        dangerouslySetInnerHTML={{ __html: t("sponsors.goldDesc") }}
      ></p>

      {/* Silver Sponsors */}
      <div className="text-center py-2 mt-10">
        <h1
          className="text-4xl lg:text-7xl font-extrabold uppercase"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/nsplsh_01d3dff639e34257ac25499dedac2580~mv2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("sponsors.silver")}
        </h1>
      </div>
      <p
        className="font-[300] max-w-3xl text-lg mx-auto mt-2"
        dangerouslySetInnerHTML={{ __html: t("sponsors.silverDesc") }}
      ></p>

      {/* Bronze Sponsors */}
      <div className="text-center py-2 mt-10">
        <h1
          className="text-4xl lg:text-7xl font-extrabold uppercase"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/nsplsh_3bc40662da2c4487a10926c2c45379ee~mv2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("sponsors.bronze")}
        </h1>
      </div>
      <p
        className="font-[300] max-w-3xl text-lg mx-auto mt-2 mb-10"
        dangerouslySetInnerHTML={{ __html: t("sponsors.bronzeDesc") }}
      ></p>

      <div className="lg:fixed bottom-32 right-10 flex flex-col gap-4">
        <a
          href={
            i18n.language === "ru"
              ? "https://forms.eafo.info/EAFO/form/44EAFO4/formperma/yWyCdS4KEf_q2T7GdplGAkuEDk5-r_KRjnf2JFtvC9Q"
              : "https://forms.eafo.info/EAFO/form/44thEAFOOncopathologyCourseHematolymphoidTumorsSpo/formperma/-sXaZ83-sxc3hLMso1MqPYu9QDz1vUvIOhqysjrfZFg"
          }
          target="_blank"
        >
          <button className="bg-[#c2274b] border border-[#c2274b] text-white text-lg px-4 py-2 rounded-full whitespace-nowrap hover:bg-white cursor-pointer font-[300]  hover:text-[#c2274b] transition-all duration-300 w-full">
            {t("sponsors.btn1")}
          </button>
        </a>
        <a
          href={
            i18n.language === "ru"
              ? "https://forms.eafo.info/EAFO/form/46EAFO5/formperma/iwxfd5huW3yQ4MdstQ62ZM2wCFoSpjT_1LG8ai7lCQU"
              : "https://forms.eafo.info/EAFO/form/46thEAFOOncoPathologyCourseHematoLymphoidTumors3/formperma/1aDNegI5FCdC3Iv0eHoH7z-PIqyBcirO0m-NFjnG7xA"
          }
          target="_blank"
        >
          <button className="bg-[#c2274b] border border-[#c2274b] text-white text-lg px-4 py-2 rounded-full whitespace-nowrap hover:bg-white cursor-pointer font-[300] hover:text-[#c2274b] transition-all duration-300 w-full">
            {t("sponsors.btn2")}
          </button>
        </a>
      </div>
    </div>
  );
}
