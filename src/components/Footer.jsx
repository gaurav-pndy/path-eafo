import { useTranslation } from "react-i18next";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const footerLinks = [
    { label: t("navbar.registration"), path: "/register-now" },
    { label: t("navbar.compParticipation"), path: "/participation" },
    { label: t("navbar.submitAbstract"), path: "/submit-abstract" },
    { label: t("navbar.submitPathology"), path: "/submit-pathology-case" },
    { label: t("navbar.submitResearch"), path: "/submit-research-proposal" },
    { label: t("navbar.schedule"), path: "/schedule-and-program" },
    { label: t("navbar.awards"), path: "/awards" },
    { label: t("navbar.home"), path: "/" },
  ];

  return (
    <footer className="hidden lg:block fixed bottom-0 left-0 w-full bg-white shadow-inner border-t z-50">
      <div className="flex items-center justify-center gap-1  overflow-x-auto overflow-y-hidden">
        {/* Left arrows */}
        <MdKeyboardDoubleArrowRight className="text-red-700 text-5xl" />

        {footerLinks.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.path)}
            className="bg-[#c2274b] border border-[#c2274b] text-white text-sm px-4 py-2 rounded-full whitespace-nowrap hover:bg-white cursor-pointer font-medium  hover:text-[#c2274b] transition-all duration-300"
          >
            {item.label}
          </button>
        ))}

        {/* Right arrows */}
        <MdKeyboardDoubleArrowLeft className="text-red-700 text-5xl" />
      </div>

      {/* Bottom text */}
      <div
        className="text-center  text-gray-800 font-[300]  py-2"
        dangerouslySetInnerHTML={{ __html: t("footer.text") }}
      ></div>
    </footer>
  );
};

export default Footer;
