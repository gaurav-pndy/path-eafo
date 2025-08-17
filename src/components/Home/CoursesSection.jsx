import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CoursesSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#fff0ec] py-16 px-4">
      <div className="max-w-5xl mx-auto text-left">
        {/* Heading */}
        <h2 className="text-3xl md:text-[2.5rem]  mb-8 ">
          {t("courses.title")}
        </h2>

        {/* Courses list */}
        <ul
          className="space-y-3 text-lg  mb-8"
          dangerouslySetInnerHTML={{ __html: t("courses.list") }}
        ></ul>

        {/* Description */}
        <p className="text-lg  mb-6 leading-relaxed font-[300]">
          {t("courses.para1")}
        </p>
        <p className="text-lg  mb-10 leading-relaxed font-[300]">
          {t("courses.para2")}
        </p>

        {/* Divider + Button */}
        <div className="flex flex-col items-start w-fit">
          <div className="w-24 mx-auto border-t border-gray-900 mb-6"></div>
          <Link
            to={"register"}
            className="bg-[#282936] hover:bg-white border border-[#282936] text-white hover:text-[#282936] px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300 uppercase"
          >
            {t("courses.registerNow")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
