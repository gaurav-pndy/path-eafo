import { Infinity } from "lucide-react"; // for the ∞ symbol
import { useTranslation } from "react-i18next";
import { FaInfinity } from "react-icons/fa6";

export default function CourseFigures() {
  const { t } = useTranslation();
  const stats = [
    { value: "5", label: t("figures.days") },
    { value: ">10", label: t("figures.experts") },
    { value: ">25", label: t("figures.participants") },
    {
      value: <FaInfinity className=" text-7xl md:text-[7rem]" />,
      label: t("figures.online"),
    },
  ];

  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/course-bg.avif')" }} // replace with your image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Card */}
      <div className="relative z-10 bg-white/60 rounded-2xl shadow-lg px-8 py-12 max-w-5xl w-[90%] text-center">
        <h2 className="text-3xl md:text-5xl  mb-6">{t("figures.title")}</h2>

        <div className="grid grid-cols-2  lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex  flex-col items-center justify-end"
            >
              <div className="text-7xl md:text-[7rem] ">{item.value}</div>
              <div className="mt-1 text-sm uppercase md:text-lg">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
