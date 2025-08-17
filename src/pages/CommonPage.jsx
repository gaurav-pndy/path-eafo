import i18next from "i18next";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // or next/link if using Next.js

const CommonPage = ({ buttonText, buttonLink, totalCards }) => {
  const { i18n, t } = useTranslation();

  // Define images for each language
  const courseSets = {
    en: [
      {
        id: 1,
        title: t("commonPage.title1"),
        subtitle: t("commonPage.subtitle"),

        image: "/hero-images/image3.avif",
        link: `/45-and-46-course-${buttonLink}`,
      },
      {
        id: 2,
        title: t("commonPage.title2"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/image1.avif",
        link: `/45-and-46-course-${buttonLink}`,
      },
      {
        id: 3,
        title: t("commonPage.title3"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/image2.avif",
      },
    ],
    ru: [
      {
        id: 1,
        title: t("commonPage.title1"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/ru/image3.avif",
        link: `/45-and-46-course-${buttonLink}`,
      },
      {
        id: 2,
        title: t("commonPage.title2"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/ru/image1.avif",
        link: `/45-and-46-course-${buttonLink}`,
      },
      {
        id: 3,
        title: t("commonPage.title3"),
        subtitle: t("commonPage.subtitle"),
        image: "/hero-images/ru/image2.avif",
      },
    ],
  };

  // Pick images for current language
  const courses = useMemo(() => {
    return courseSets[i18next.language] || courseSets["en"]; // fallback to English
  }, [i18n.language]);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {courses.slice(0, 2).map((course) => (
        <div
          key={course.id}
          className="flex flex-col md:flex-row h-68 items-center md:items-start gap-6 md:gap-16 border-b pb-12"
        >
          {/* Image */}
          <img
            src={course.image}
            alt={course.subtitle}
            className="w-full md:w-96 h-full object-cover"
          />

          {/* Text */}
          <div className="flex-1 flex flex-col justify-between h-full  text-center md:text-left">
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
            <div className="mt-4 w-full flex justify-center md:justify-start">
              <Link
                to={course.link}
                className="bg-[#c2274b] text-center border border-[#c2274b] text-white min-w-50 text-lg px-4 py-2 rounded-full whitespace-nowrap hover:bg-white cursor-pointer font-medium  hover:text-[#c2274b] transition-all duration-300"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {totalCards === 3 && (
        <div className="flex flex-col md:flex-row h-68 items-center md:items-start gap-6 md:gap-16 border-b pb-12">
          {/* Image */}
          <img
            src={courses[2].image}
            alt={courses[2].subtitle}
            className="w-full md:w-96 h-full object-cover"
          />

          {/* Text */}
          <div className="flex-1 flex flex-col justify-between h-full  text-center md:text-left">
            <div>
              <h3
                className="text-3xl font-[300] mb-2 text-[#2751a3]"
                dangerouslySetInnerHTML={{ __html: courses[2].title }}
              ></h3>

              <p className="text-gray-900 text-xl font-[300]">
                {courses[2].subtitle}
              </p>
            </div>

            {/* Button */}
            <div className="mt-4 w-full flex justify-center md:justify-start">
              <a
                href={`https://breast.eafo.info/${buttonLink}`}
                target="_blank"
                className="bg-[#c2274b] text-center border border-[#c2274b] text-white min-w-50 text-lg px-4 py-2 rounded-full whitespace-nowrap hover:bg-white cursor-pointer font-medium  hover:text-[#c2274b] transition-all duration-300"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommonPage;
