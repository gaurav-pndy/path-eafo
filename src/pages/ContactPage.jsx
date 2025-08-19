// src/pages/ContactPage.js
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaPhone,
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
  FaVk,
} from "react-icons/fa";
import { FaRegEnvelope, FaTelegram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center px-4 py-12">
        <h2 className="text-3xl md:text-6xl">{t("contact.title")}</h2>
        <p className="font-[300] text-[1.1rem] leading-relaxed mt-4">
          {t("contact.subtitle")}
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-gray-600 leading-7">
        {/* Left Section */}
        <div className="p-8 lg:px-24 flex flex-col lg:flex-row gap-10 border-b md:border-r md:border-b-0 border-gray-600 font-[300] ">
          {/* Address */}
          <div className="flex flex-col gap-2 lg:w-[55%]">
            <IoLocationOutline className="text-3xl " />
            <h3 className="font-[400] text-xl">{t("contact.addressTitle")}</h3>
            <p>
              <strong>{t("contact.moscow")}:</strong> <br /> ANO EAFO <br />
              Educational & Research Center, <br /> Volokolamskoye Highway 1,
              Building 1, Office 606C, <br /> Moscow, Russia - 125080
            </p>
            <p>
              <strong>{t("contact.techPartner")}:</strong> <br /> Pasovit
              Technologies Private Limited, <br />
              715A, 7th Floor, Spencer Plaza Suite No. 718, Anna Salai, Chennai,
              Tamil Nadu – 600002, India
            </p>
            <p>
              <strong>{t("contact.mumbai")}:</strong> <br /> Eurasian Cancer
              Research Council, B – 1210, Golf Scappe, Diamond Garden, Chembur,
              Mumbai – 400071
            </p>
          </div>

          <div className="lg:w-[45%] ">
            {/* Phone */}
            <div className="flex flex-col gap-2">
              <LuPhone className="text-3xl " />
              <h3 className="font-[400] text-xl">{t("contact.phone")}</h3>
              <p className="">+7-985-125-7788</p>
              <div className="flex gap-3 ">
                <FaTelegram className="text-4xl" />
                <FaWhatsapp className="text-4xl" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 mt-6">
              <FaRegEnvelope className="text-3xl" />
              <h3 className="font-[400] text-xl">{t("contact.email")}</h3>
              <p className="">path@eafo.info</p>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-2 mt-6">
              <h3 className="font-[400] text-xl">{t("contact.social")}</h3>
              <div className="flex gap-3">
                <a href="https://vk.com/eafo_info" target="_blank">
                  <FaVk className="text-4xl" />
                </a>
                <a
                  href="https://www.youtube.com/@eurasianfederationofoncolo4601"
                  target="_blank"
                >
                  <FaYoutube className="text-4xl" />
                </a>
              </div>
            </div>
            <p className="mt-7">
              <strong>{t("contact.airdrie")}:</strong> <br />
              Eurasian Federation of Oncology, 5 Victoria Place, Airdrie,
              Scotland, United Kingdom - ML6 9BU
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-8 lg:px-24 py-16">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t("contact.firstName")}
                className="border p-2 w-full"
              />
              <input
                type="text"
                placeholder={t("contact.lastName")}
                className="border p-2 w-full"
              />
            </div>
            <input
              type="email"
              placeholder={t("contact.emailPlaceholder")}
              className="border p-2 w-full"
            />
            <textarea
              placeholder={t("contact.message")}
              className="border p-2 w-full h-24"
            ></textarea>
            <button
              type="submit"
              className="bg-[#c2274b]  border border-[#c2274b] text-white px-4 py-2  whitespace-nowrap hover:bg-white cursor-pointer font-[300]  hover:text-[#c2274b] transition-all duration-300 w-full"
            >
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-96 mb-10 lg:mb-20">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.0683638618298!2d37.365034576569926!3d55.82677268629156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5464d91c09051%3A0x4fd07c6917382264!2zVm9sb2tvbGFtc2tveWUgU2hvc3NlLCAxINGB0YLRgNC-0LXQvdC40LUgMiwgS3Jhc25vZ29yc2ssIE1vc2tvdnNrYXlhIG9ibGFzdCcsIFJ1c3NpYSwgMTQzNDAx!5e0!3m2!1sen!2sin!4v1755596480190!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
