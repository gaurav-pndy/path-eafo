import React, { useEffect, useRef, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import { useTranslation } from "react-i18next";

function AppLayout() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="mt-[5.5rem] lg:mb-16">
        <Outlet />
      </div>
      <Footer />
      <div
        className="text-center mb-20 text-sm lg:hidden text-gray-800 font-[300]  py-2 px-4"
        dangerouslySetInnerHTML={{ __html: t("footer.text") }}
      ></div>
      <MobileFooter />
    </div>
  );
}

export default AppLayout;
