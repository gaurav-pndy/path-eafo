import i18next from "i18next";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // or next/link if using Next.js

const CourseDesc = () => {
  const { i18n, t } = useTranslation();

  // Define images for each language
  const courseSets = {
    en: [
      {
        id: 1,
        title: t("commonPage.title1"),
        subtitle: t("commonPage.subtitle"),

        image: "/hero-images/image3.avif",
        link: `/45-course-description`,
      },
      {
        id: 2,
        title: t("commonPage.title2"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/image1.avif",
        link: `/46-course-description`,
      },
      {
        id: 3,
        title: t("commonPage.title3"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/image2.avif",
        link: `https://breast.eafo.info/course-description`,
      },
    ],
    ru: [
      {
        id: 1,
        title: t("commonPage.title1"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/ru/image3.avif",
        link: `/45-course-description`,
      },
      {
        id: 2,
        title: t("commonPage.title2"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/ru/image1.avif",
        link: `/46-course-description`,
      },
      {
        id: 3,
        title: t("commonPage.title3"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/ru/image2.avif",
        link: `https://breast.eafo.info/course-description`,
      },
    ],
  };

  // Pick images for current language
  const courses = useMemo(() => {
    return courseSets[i18next.language] || courseSets["en"]; // fallback to English
  }, [i18n.language]);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {courses.map((course) => (
        <div
          key={course.id}
          className="flex flex-col lg:flex-row lg:h-68 items-center lg:items-start gap-6 lg:gap-16 border-b pb-12"
        >
          {/* Image */}
          <img
            src={course.image}
            alt={course.subtitle}
            className="w-full lg:w-96 h-full object-cover"
          />

          {/* Text */}
          <div className="flex-1 flex flex-col justify-between h-full  text-center lg:text-left">
            <div>
              <h3
                className="text-3xl font-[300] mb-2 text-[#2751a3]"
                dangerouslySetInnerHTML={{ __html: course.title }}
              ></h3>

              <p className="text-gray-900 text-xl font-[300]">
                {course.subtitle}
              </p>
            </div>

            {/* Button */}
            <div className="mt-4 w-full flex justify-center lg:justify-start">
              <Link
                to={course.link}
                target="_blank"
                className="bg-[#c2274b] text-center border border-[#c2274b] text-white min-w-50 text-lg px-6 py-2 rounded-full whitespace-nowrap hover:bg-white cursor-pointer font-medium  hover:text-[#c2274b] transition-all duration-300"
              >
                {t("buttons.courseDesc")}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CourseDesc;
