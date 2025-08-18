import React from "react";
import { useTranslation } from "react-i18next";

export default function AwardsPage() {
  const { t } = useTranslation();

  const awards = t("awards.list", { returnObjects: true });

  return (
    <div className="container max-w-5xl lg:flex gap-16 mx-auto px-4 py-6">
      <div className="lg:w-[40%] text-center lg:text-left">
        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl mb-4">{t("awards.title")}</h2>
        <p className="mb-10 max-w-2xl text-lg font-[300]">
          {t("awards.description")}
        </p>
      </div>

      {/* Awards List */}
      <div className="grid gap-10 lg:w-[60%]">
        {awards.map((award, index) => (
          <div key={index} className="flex flex-col gap-6 ">
            {/* Text Section */}
            <div>
              <h3 className="text-2xl ">{award.title}</h3>
              <p
                className="mt-2  md:text-lg font-[300] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: award.description }}
              ></p>
            </div>

            {/* Image */}
            <div>
              <img
                src={award.image}
                alt={award.title}
                className="w-full  object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
