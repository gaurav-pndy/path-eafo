import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  const navItemsSets = {
    en: [
      {
        id: "about",
        label: t("navbar.about"),
        type: "page",
        path: "/about",
        dropdown: [
          {
            id: "courseDesc",
            label: t("navbar.courseDesc"),
            type: "page",
            path: "/course-description",
          },
          {
            id: "venue",
            label: t("navbar.venue"),
            type: "page",
            path: "/venue",
          },
          {
            id: "participationVariants",
            label: t("navbar.participationVariants"),
            type: "page",
            path: "/participation-variants",
          },
          {
            id: "compParticipation",
            label: t("navbar.compParticipation"),
            type: "page",
            path: "/competitive-participation",
          },
          {
            id: "awards",
            label: t("navbar.awards"),
            type: "section",
            path: "/about#awards",
          },
          {
            id: "gallery",
            label: t("navbar.gallery"),
            type: "section",
            path: "/about#gallery",
          },
          {
            id: "oncoArchive",
            label: t("navbar.oncoArchive"),
            type: "section",
            path: "/about#oncoArchive",
          },
          {
            id: "organizations",
            label: t("navbar.organizations"),
            type: "page",
            path: "/organizations",
          },
          {
            id: "eafo",
            label: t("navbar.eafo"),
            type: "section",
            path: "/about#eafo",
          },
          {
            id: "pricing",
            label: t("navbar.pricing"),
            type: "page",
            path: "/pricing",
          },
          {
            id: "paymentOptions",
            label: t("navbar.paymentOptions"),
            type: "section",
            path: "/about#paymentOptions",
          },
          {
            id: "contact",
            label: t("navbar.contact"),
            type: "section",
            path: "/about#contact",
          },
        ],
      },
      {
        id: "registerNow",
        label: t("navbar.registerNow"),
        type: "page",
        path: "/register",
        dropdown: [
          {
            id: "pricing",
            label: t("navbar.pricing"),
            type: "page",
            path: "/pricing",
          },
          {
            id: "registerNow",
            label: t("navbar.registerNow"),
            type: "page",
            path: "/register-now",
          },
          {
            id: "paymentOptions",
            label: t("navbar.paymentOptions"),
            type: "section",
            path: "/register#paymentOptions",
          },
          {
            id: "awards",
            label: t("navbar.awards"),
            type: "section",
            path: "/register#awards",
          },
        ],
      },
      {
        id: "submission",
        label: t("navbar.submission"),
        type: "page",
        path: "/submission",
        dropdown: [
          {
            id: "submitAbstract",
            label: t("navbar.submitAbstract"),
            type: "page",
            path: "/submit-abstract",
          },
          {
            id: "submitPathology",
            label: t("navbar.submitPathology"),
            type: "page",
            path: "/submit-pathology-case",
          },
          {
            id: "submitResearch",
            label: t("navbar.submitResearch"),
            type: "page",
            path: "/submit-research-proposal",
          },
          {
            id: "awards",
            label: t("navbar.awards"),
            type: "section",
            path: "/submission#awards",
          },
        ],
      },
      {
        id: "experts",
        label: t("navbar.experts"),
        type: "page",
        path: "/experts-and-committees",
      },
      {
        id: "schedule",
        label: t("navbar.schedule"),
        type: "page",
        path: "/schedule-and-program",
      },
      {
        id: "visa",
        label: t("navbar.visa"),
        type: "page",
        path: "/visa",
        dropdown: [
          {
            id: "visaTypes",
            label: t("navbar.visaTypes"),
            type: "section",
            path: "/visa#visaTypes",
          },
          {
            id: "visaFree",
            label: t("navbar.visaFree"),
            type: "section",
            path: "/visa#visaFree",
          },
          {
            id: "eVisa",
            label: t("navbar.eVisa"),
            type: "section",
            path: "/visa#eVisa",
          },
          {
            id: "visaDocs",
            label: t("navbar.visaDocs"),
            type: "section",
            path: "/visa#visaDocs",
          },
          {
            id: "russianEmb",
            label: t("navbar.russianEmb"),
            type: "section",
            path: "/visa#russianEmb",
          },
        ],
      },
      {
        id: "sponsors",
        label: t("navbar.sponsors"),
        type: "page",
        path: "/sponsors",
      },
    ],
    ru: [
      {
        id: "about",
        label: t("navbar.about"),
        type: "page",
        path: "/about",
        dropdown: [
          {
            id: "courseDesc",
            label: t("navbar.courseDesc"),
            type: "page",
            path: "/course-description",
          },
          {
            id: "venue",
            label: t("navbar.venue"),
            type: "page",
            path: "/venue",
          },
          {
            id: "participationVariants",
            label: t("navbar.participationVariants"),
            type: "page",
            path: "/participation-variants",
          },
          {
            id: "compParticipation",
            label: t("navbar.compParticipation"),
            type: "page",
            path: "/competitive-participation",
          },
          {
            id: "awards",
            label: t("navbar.awards"),
            type: "section",
            path: "/about#awards",
          },
          {
            id: "gallery",
            label: t("navbar.gallery"),
            type: "section",
            path: "/about#gallery",
          },
          {
            id: "oncoArchive",
            label: t("navbar.oncoArchive"),
            type: "section",
            path: "/about#oncoArchive",
          },
          {
            id: "organizations",
            label: t("navbar.organizations"),
            type: "page",
            path: "/organizations",
          },
          {
            id: "eafo",
            label: t("navbar.eafo"),
            type: "section",
            path: "/about#eafo",
          },
          {
            id: "pricing",
            label: t("navbar.pricing"),
            type: "page",
            path: "/pricing",
          },
          {
            id: "paymentOptions",
            label: t("navbar.paymentOptions"),
            type: "section",
            path: "/about#paymentOptions",
          },
          {
            id: "contact",
            label: t("navbar.contact"),
            type: "section",
            path: "/about#contact",
          },
        ],
      },
      {
        id: "registerNow",
        label: t("navbar.registerNow"),
        type: "page",
        path: "/register",
        dropdown: [
          {
            id: "pricing",
            label: t("navbar.pricing"),
            type: "page",
            path: "/pricing",
          },
          {
            id: "registerNow",
            label: t("navbar.registerNow"),
            type: "page",
            path: "/register",
          },
          {
            id: "paymentOptions",
            label: t("navbar.paymentOptions"),
            type: "section",
            path: "/register#paymentOptions",
          },
          {
            id: "awards",
            label: t("navbar.awards"),
            type: "section",
            path: "/register#awards",
          },
        ],
      },
      {
        id: "submission",
        label: t("navbar.submission"),
        type: "page",
        path: "/submission",
        dropdown: [
          {
            id: "submitAbstract",
            label: t("navbar.submitAbstract"),
            type: "page",
            path: "/submit-abstract",
          },
          {
            id: "submitPathology",
            label: t("navbar.submitPathology"),
            type: "page",
            path: "/submit-pathology-case",
          },
          {
            id: "submitResearch",
            label: t("navbar.submitResearch"),
            type: "page",
            path: "/submit-research-proposal",
          },
          {
            id: "awards",
            label: t("navbar.awards"),
            type: "section",
            path: "/submission#awards",
          },
        ],
      },
      {
        id: "experts",
        label: t("navbar.experts"),
        type: "page",
        path: "/experts-and-committees",
      },
      {
        id: "schedule",
        label: t("navbar.schedule"),
        type: "page",
        path: "/schedule-and-program",
      },

      {
        id: "sponsors",
        label: t("navbar.sponsors"),
        type: "page",
        path: "/sponsors",
      },
    ],
  };

  const navItems = useMemo(() => {
    return navItemsSets[i18n.language] || navItemsSets["en"]; // fallback to English
  }, [i18n.language]);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (item) => {
    console.log("Navigating to:", item);

    if (item.type === "page") {
      navigate(item.path || `/${item.id}`);
    } else if (item.type === "section") {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: item.id } });
      } else {
        const el = document.getElementById(item.id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };
  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4  flex items-center justify-between h-22">
        {/* Logo + Title */}
        <Link to={"/"} className="flex items-center gap-4">
          <img
            src="/logo.avif"
            alt="EAFO logo"
            className="h-9 md:h-10 xl:h-14"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-10 text-[0.8rem] xl:text-sm text-gray-700">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => handleNavigate(item)}
                className="hover:text-blue-700 cursor-pointer"
              >
                {item.label}
              </button>

              {/* Dropdown */}
              {item.dropdown && (
                <AnimatePresence>
                  {openDropdown === idx && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg text-center rounded-md py-2 w-52"
                    >
                      {item.dropdown.map((sub, i) => (
                        <li
                          key={i}
                          className="px-4 py-2 text-[0.8rem] hover:bg-blue-50 cursor-pointer"
                          onClick={() => handleNavigate(sub)}
                        >
                          {sub.label}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}

          {/* Language Switcher */}
          <li>
            {selectedLang === "en" ? (
              <button
                onClick={() => changeLanguage("ru")}
                className="flex items-center gap-2 z-10  text-base cursor-pointer border px-2 py-1 rounded-sm"
              >
                Русский
                <img src="/ru.png" alt="" className="w-5" />
              </button>
            ) : (
              <button
                onClick={() => changeLanguage("en")}
                className="flex items-center gap-2 border text-base px-2 py-1 rounded-sm"
              >
                English
                <img src="/en.png" alt="" className="w-5" />
              </button>
            )}
          </li>
        </ul>

        <div className="lg:hidden">
          {selectedLang === "en" ? (
            <button
              onClick={() => changeLanguage("ru")}
              className="flex items-center gap-2 z-10 cursor-pointer border px-2 py-1 rounded-sm"
            >
              Русский
              <img src="/ru.png" alt="" className="w-4" />
            </button>
          ) : (
            <button
              onClick={() => changeLanguage("en")}
              className="flex items-center gap-2 border px-2 py-1 rounded-sm"
            >
              English
              <img src="/ru.png" alt="" className="w-4" />
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <RxCross1 size={32} className="text-gray-700" />
          ) : (
            <TfiMenu size={32} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col gap-2 p-4  max-h-[calc(85vh)] overflow-y-auto">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  {!item.dropdown ? (
                    <button
                      onClick={() => handleNavigate(item)}
                      className="cursor-pointer py-2 text-gray-700 font-medium"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <details>
                      <summary className="cursor-pointer py-2 text-gray-700 font-medium">
                        {item.label}
                      </summary>
                      {item.dropdown && (
                        <ul className="ml-4 mt-1 flex flex-col gap-1">
                          {item.dropdown.map((sub, i) => (
                            <li
                              key={i}
                              onClick={() => handleNavigate(sub)}
                              className="px-2 py-1 hover:bg-blue-50 cursor-pointer"
                            >
                              {sub.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </details>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
