import { useTranslation } from "react-i18next";

export default function Specialties() {
  const { t } = useTranslation();

  const specialties = [
    {
      title: t("specialities.item1"),
      img: "/spec/img1.avif",
    },
    {
      title: t("specialities.item2"),
      img: "/spec/img2.avif",
    },
    {
      title: t("specialities.item3"),
      img: "/spec/img3.avif",
    },
    {
      title: t("specialities.item4"),
      img: "/spec/img4.avif",
    },
    {
      title: t("specialities.item5"),
      img: "/spec/img5.avif",
    },
  ];
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-4xl md:text-6xl  text-[rgb(40,41,54)] mb-10 md:mb-14">
        {t("specialities.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {specialties.map((item, index) => (
          <div key={index} className="w-40 md:w-44 flex flex-col items-center">
            <div className="w-40 md:w-44 h-40 md:h-44 rounded-full overflow-hidden shadow-md">
              <img
                src={item.img}
                alt={item.title}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-3 text-lg md:text-xl font-[350]">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
