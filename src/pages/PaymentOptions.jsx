import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function PaymentOptions() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("outside");

  const bullets = t("paymentOptions.top.bullets", { returnObjects: true });
  const notes = t("paymentOptions.top.notes", { returnObjects: true });

  return (
    <section className="pb-12 lg:py-12 px-4 bg-[#fff0ec] flex  flex-col items-center">
      {/* Top Section */}
      <section className="relative w-full max-w-6xl  mx-auto flex  flex-col-reverse lg:flex-row gap-6  items-center  lg:px-14 py-8">
        <div
          className={`lg:absolute bg-white p-4 md:p-6   ${
            i18n.language === "ru" ? "lg:max-w-[46rem]" : "lg:max-w-[40rem]"
          }  top-1/2 lg:-translate-y-1/2 right-[5%] border border-[rgba(40,41,54,0.5)]`}
        >
          <h2 className="text-3xl md:text-5xl text-center mb-6">
            {t("paymentOptions.top.title")}
          </h2>

          <ul className="list-disc pl-5 space-y-3 font-[300] leading-8">
            {bullets.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>

          <p className="mt-5 font-medium">
            {t("paymentOptions.top.noteTitle")}
          </p>
          <ul className="list-disc pl-5 space-y-3 font-[300] mt-2 leading-8">
            {notes.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
        <img
          src="/payment-options.avif"
          alt={t("paymentOptions.top.imageAlt")}
          className="lg:max-w-[80%] w-full h-60 lg:h-full max-h-[36rem] object-cover  border border-[rgba(40,41,54,0.5)]"
        />
      </section>

      {/* Bottom Tabs */}
      <div className="mt-20 w-full max-w-5xl">
        <div className="flex  flex-col md:flex-row">
          <button
            onClick={() => setActiveTab("outside")}
            className={`px-6 border border-black cursor-pointer py-3 md:py-4 md:w-1/2 font-medium text-left md:text-center ${
              activeTab === "outside" ? "bg-[#c2274b] text-white" : "bg-white "
            }`}
          >
            {t("paymentOptions.tabs.outside")}
          </button>
          <button
            onClick={() => setActiveTab("russia")}
            className={`px-6 py-3 border cursor-pointer border-black md:py-2 md:w-1/2 font-medium text-left md:text-center my-2 md:my-0 ${
              activeTab === "russia" ? "bg-[#c2274b] text-white" : "bg-white "
            }`}
          >
            {t("paymentOptions.tabs.russia")}
          </button>
        </div>

        <div className="border text-xl  font-[300] p-6 bg-white">
          {activeTab === "outside" ? (
            <div className="space-y-2">
              <p>
                <b>Name of Account holder::</b> <br />
                Pasovit Technologies Private Limited
              </p>
              <p>
                <b>Account Type:</b> Current
              </p>
              <p>
                <b>Account Number:</b> 50200058453952
              </p>
              <p>
                <b>IFSC Code:</b> HDFC0000004{" "}
              </p>
              <p>
                <b>SWIFT Code:</b> HDFCINBBCHE
              </p>
              <p>
                <b>Branch:</b> ITC CENTRE ANNA SALAI
              </p>
              <br />
              <p className="mt-4">
                <b>Payment Details:</b> <br />
                Registration Fee: EAFO OncoPath 2024 Moscow - Full Name & Date
                of Birth of Participant
              </p>
              <br />
              <p className="mt-4">
                <b>Address:</b> 715A, 7th Floor, Spencer Plaza Suite No. 718,
                Anna Salai, Chennai, Tamil Nadu - 600002, India
              </p>
              <p>
                <b>Теlephone:</b> +7(985)125-77-88{" "}
              </p>
              <p>
                <b>E-mail:</b>{" "}
                <a
                  className="text-red-600 underline"
                  href="mailto:travel@eafo.info"
                >
                  travel@eafo.info
                </a>
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p>
                <b>Имя владельца счета:</b> <br />
                АНО «ЕАФО»
              </p>
              <p>
                <b>ИНН / КПП:</b> 7715491261 / 774301001
              </p>
              <p>
                <b>ОГРН:</b> 1127799008072
              </p>{" "}
              <br />
              <b className="mt-2 ">Банковские реквизиты:</b>
              <p>
                <b>Р/с:</b> 40703810138000007353
              </p>
              <p>ПАО Сбербанк России г. Москва,</p>
              <p>
                <b>БИК:</b> 044525225
              </p>
              <p>
                <b>К/с:</b> 30101810400000000225
              </p>
              <br />
              <p className="mt-4">
                <b>Наименование платежа:</b> Регистрационный взнос - EAFO
                онкопатология 2024, Москва - полное ФИО и дата рождения
                участника
              </p>
              <br />
              <p className="mt-4">
                <b>Юридический/фактический адрес:</b> г. Москва ул.
                Волоколамское шоссе, д.1, стр. 1, офис 606с{" "}
              </p>
              <p>
                <b>Тел:</b> +7(985)125-77-88{" "}
              </p>
              <p>
                <b>E-mail:</b>{" "}
                <a
                  className="text-red-600 underline"
                  href="mailto:travel@eafo.info"
                >
                  travel@eafo.info
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
