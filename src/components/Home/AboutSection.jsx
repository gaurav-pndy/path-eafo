import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full  flex items-center justify-center overflow-hidden">
      {/* Background Parallax */}
      <Parallax
        bgImage="/about-bg.avif"
        bgImageAlt="EAFO Background"
        strength={300} // adjust strength for more/less parallax effect
        className="absolute inset-0"
      >
        <div className="py-16 lg:py-20 w-screen flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center text-white">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl md:text-5xl  mb-6">{t("about.title")}</h2>
              <p className="text-[1.25rem] font-[300] md:ml-6 md:leading-11">
                {t("about.content")}
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center">
              <img
                src="/about-drsoma.avif"
                alt="EAFO"
                className=" lg:shadow-[-20px_20px__rgb(256,256,256,12)]  lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
