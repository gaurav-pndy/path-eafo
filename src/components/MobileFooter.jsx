import { useTranslation } from "react-i18next";
import { FaCheckSquare, FaBolt, FaTags, FaCalendarAlt } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

import { Link } from "react-router-dom";

const MobileFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-0 left-0 w-full  text-white shadow-md z-50 lg:hidden">
      <div className="grid grid-cols-4  px-px">
        {/* Register */}
        <Link
          to="/register"
          className="flex flex-col items-center border-r border-gray-400 bg-[#c2274b] py-3"
        >
          <FiCheckSquare className="text-lg mb-1" />
          <span className="text-sm">{t("navbar.register")} </span>
        </Link>

        {/* Submission */}
        <Link
          to="/submission"
          className="flex flex-col items-center bg-[#c2274b] py-3 border-r border-gray-400"
        >
          <FaBolt className="text-lg mb-1" />
          <span className="text-sm">{t("navbar.submission")}</span>
        </Link>

        {/* Pricing */}
        <Link
          to="/pricing"
          className="flex flex-col items-center bg-[#c2274b] py-3 border-r border-gray-400"
        >
          <FaTags className="text-lg mb-1" />
          <span className="text-sm">{t("navbar.pricing")}</span>
        </Link>

        {/* Program */}
        <Link
          to="/schedule"
          className="flex flex-col items-center bg-[#c2274b] py-3"
        >
          <FaCalendarAlt className="text-lg mb-1" />
          <span className="text-sm">{t("navbar.program")}</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter;
