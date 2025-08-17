import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();
  return (
    <section
      style={{
        backgroundImage: "url('/illustrations/buildings.svg')",
      }}
      className="relative bg-[#fff0ec] text-[rgb(40,41,54)] py-6 bg-repeat-x bg-[length:63%] bg-bottom border-t  border-[rgb(40,41,54)]"
    >
      <div className="container mx-auto max-w-5xl px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-[2.5rem]  mb-6">
          {t("welcome.heading")}
        </h2>

        <div className="md:pl-8 text-lg font-[300]">
          {/* Intro */}
          <p className="mb-4 leading-relaxed text-[rgb(40,41,54)]">
            {t("welcome.para1")}
          </p>

          <p className="mb-6 leading-relaxed text-[rgb(40,41,54)]">
            {t("welcome.para2")}
          </p>

          {/* Target Audience */}
          <h3 className="font-semibold mb-2">{t("welcome.targetAudience")}</h3>
          <ul className="list-decimal list-inside space-y-1 mb-6 md:ml-4 text-[rgb(40,41,54)]">
            <li>{t("welcome.pathologists")}</li>
            <li>{t("welcome.molecularBiologists")}</li>
            <li> {t("welcome.students")} </li>
            <li> {t("welcome.postDoc")}</li>
          </ul>

          <p className="mb-6 leading-relaxed">{t("welcome.para3")}</p>

          {/* Courses List */}
          <p className="mb-4">{t("welcome.para4")}</p>
          <ul className="list-decimal list-inside space-y-1 mb-6">
            <li>{t("welcome.li1")}</li>
            <li>{t("welcome.li2")}</li>
            <li>{t("welcome.li3")}</li>
          </ul>

          {/* Closing */}
          <p className="mb-1">{t("welcome.bestWishes")}</p>
          <p className="font-semibold">{t("welcome.eafoTeam")} </p>
        </div>
      </div>

      {/* Bottom SVG illustration */}
      {/* <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/illustrations/buildings.svg" // <-- place your svg in public/illustrations
          alt="Buildings Illustration"
          width={1920}
          height={200}
          className="w-full object-cover"
        />
      </div> */}
    </section>
  );
};

export default WelcomeSection;
