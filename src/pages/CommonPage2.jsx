import i18next from "i18next";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // or next/link if using Next.js

const CommonPage2 = ({ link1, link2, buttonText }) => {
  const { i18n, t } = useTranslation();

  // Define images for each language
  const courseSets = {
    en: [
      {
        id: 1,
        title: t("commonPage.title1"),
        subtitle: t("commonPage.subtitle"),

        image: "/hero-images/image3.avif",
        link: link1,
      },
      {
        id: 2,
        title: t("commonPage.title2"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/image1.avif",
        link: link2,
      },
    ],
    ru: [
      {
        id: 1,
        title: t("commonPage.title1"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/ru/image3.avif",
        link: link1,
      },
      {
        id: 2,
        title: t("commonPage.title2"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/ru/image1.avif",
        link: link2,
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
                target="_blank"
                to={course.link}
                className="bg-[#c2274b] text-center border border-[#c2274b] text-white min-w-50 text-lg px-6 py-2 rounded-full whitespace-nowrap hover:bg-white cursor-pointer font-medium  hover:text-[#c2274b] transition-all duration-300"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommonPage2;
