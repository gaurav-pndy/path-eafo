import React, { useEffect, useRef, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="mt-[5.5rem] mb-60">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
