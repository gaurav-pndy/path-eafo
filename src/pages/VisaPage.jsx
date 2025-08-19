import { Mail, Phone } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const VisaPage = () => {
  const { t } = useTranslation();

  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // margin from top (in px)
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="  py-10  mx-auto">
      {/* Header Section */}
      <section className="relative w-full  max-w-5xl  mx-auto flex  flex-col-reverse lg:flex-row gap-6  items-center px-4  ">
        <div className="lg:absolute bg-white p-4 md:p-6    top-1/3  -left-1/2 lg:translate-x-[106.5%] border border-[rgba(40,41,54,0.5)]  lg:max-w-[46rem] w-full h-full  max-h-[44rem]">
          <h2 className="text-3xl md:text-6xl">Visa Information</h2>
          <div className="font-[300]  leading-relaxed mt-4">
            <p>
              {" "}
              Each participant traveling to the Russian Federation, who{" "}
              <b>does not hold </b> a Russian Passport, is required to
              thoroughly go through the contents of this page and check the
              immigration rules of Russian Federation.{" "}
            </p>
            <p>
              {" "}
              There are three options for a foreigner based on which he/she can
              travel to Russian Federation:
            </p>
            <ol className="list-decimal list-inside ml-6">
              {" "}
              <li
                onClick={() => handleNavigate("visa-free-travel")}
                className="underline cursor-pointer"
              >
                {" "}
                Visa-Free Travel
              </li>{" "}
              <li
                onClick={() => handleNavigate("e-visa")}
                className="underline cursor-pointer"
              >
                {" "}
                E-Visa Provision
              </li>{" "}
              <li
                onClick={() => handleNavigate("physical-visa")}
                className="underline cursor-pointer"
              >
                Mandatory Physical-Paper Visa to be affixed in the passport
              </li>
            </ol>{" "}
            <br />
            It is essential to apply for the appropriate visa category based on
            the purpose of your visit and the duration of your stay.
          </div>
        </div>
        {/* <div className="flex justify-center"> */}
        <img
          src="/visa.avif"
          alt="EAFO Logo"
          className="lg:max-w-[44rem] w-full h-full  max-h-[46rem] object-cover  border border-[rgba(40,41,54,0.5)]"
        />
        {/* </div> */}
      </section>

      <section
        id="visa-free-travel"
        className="mt-10 px-4 text-lg max-w-5xl mx-auto lg:mt-48 leading-relaxed font-[300]"
      >
        <h2 className="text-2xl md:text-3xl mb-4">
          1. Visa-Free/Visa on Arrival:
        </h2>
        <p className=" mb-4">
          Certain nationalities may be eligible for visa-free entry or visa on
          arrival in Russia. Participants are advised to check if their country
          is included in the list of nations with agreements allowing for
          visa-free or visa on arrival entry.
        </p>
        <p className=" mb-4">
          There may be restrictions in terms of <b>Port of Entry</b> into the
          Russian Federation for certain nationalities. For example, Ukrainian
          Passport Holders can enter the Russian Federation exclusively through
          Sheremetyevo International Airport (SVO, Moscow).
        </p>
        <span
          onClick={() => handleNavigate("visa-free-list")}
          className="text-red-600 underline cursor-pointer"
        >
          Click here
        </span>{" "}
        to know about your eligibility.
      </section>

      <section
        id="e-visa"
        className="mt-10  px-4 max-w-5xl mx-auto text-lg leading-relaxed font-[300]"
      >
        <h2 className="text-2xl md:text-3xl mb-4">2. E-Visa:</h2>
        <p className=" mb-4">
          Participants can opt for an electronic visa (e-visa) to facilitate
          their entry into Russian Federation specifically for attending the
          course. The e-visa application is processed online, and participants
          will receive their e-visa electronically, which they can present upon
          arrival at the <b>Port of Entry</b> into Russian Federation. An e-visa
          is only issued for visits to one of the following three regions of the
          Russian Federation: the Far-Eastern Federal District, or Kaliningrad
          Oblast, or Saint-Petersburg and Leningrad Oblast. An e-visa issued for
          a visit to one of the three above-listed regions is not valid for
          visits to other regions of the Russian Federation.
        </p>
        <span
          onClick={() => handleNavigate("e-visa-list")}
          className="text-red-600 underline cursor-pointer"
        >
          Click here
        </span>{" "}
        to find out if you are eligible to obtain an E-Visa.
      </section>

      <section
        id="physical-visa"
        className="mt-10 px-4 text-lg  max-w-5xl mx-auto leading-relaxed font-[300]"
      >
        <h2 className="text-2xl md:text-3xl mb-4">3. Physical Visa:</h2>
        <p className=" mb-4">
          Participants who do not qualify for Visa-Free/Visa on Arrival or
          E-Visa can apply for a traditional physical visa at the Russian
          Embassy or Consulate in their home country. To get the physical visa
          stamped in the passport, one should submit the{" "}
          <b>following documents</b> to the nearest Russian Embassy or Consulate
          either in person or through a visa processing agency
        </p>
      </section>

      <section
        id="visa-documents"
        className="mt-10  px-4 max-w-5xl mx-auto border-t text-lg pt-10 leading-relaxed font-[300]"
      >
        <h2 className="text-2xl md:text-3xl mb-4">
          To apply for a Russian visa, you will need have the following
          documents:
        </h2>
        <ul className="list-decimal ml-6 list-inside space-y-2">
          <li>
            A valid <b>Passport</b> with at least six months validity beyond the
            intended date of departure from Russia and has at least 2 blank
            pages which do not need to be consecutive.
          </li>
          <li>
            A completed <b>Visa Application Form</b>. Visa application form
            filled in and printed out from the following website:{" "}
            <a
              href="https://visa.kdmid.ru/"
              target="_blank"
              className="underline"
            >
              {" "}
              visa.kdmid.ru.
            </a>{" "}
            Kindly ensure that the dates of your entry and exit, as entered in
            the application form, match with or fall within the period specified
            in the supporting documents.
          </li>
          <li>
            A recent <b>Passport-sized colored photograph </b> with a white
            background (35 mm width x 45 mm height). Photograph should be taken
            no less than 6 months.
          </li>
          <li>
            <b> Letter of Invitation:</b> This letter will be sent to you after
            payment confirmation and submission of passport copy. <br />
            <b>It is necessary</b> to carry physical copy of this letter and
            produce it at the Port of Entry into Russian Federation.
          </li>
          <li>
            <b>Travel Insurance Coverage</b> during the duration of your stay in
            Russia.
          </li>
        </ul>

        <p className="mt-4">
          Please note that visa processing times may vary, so it is advisable to
          apply for your visa well in advance of your planned travel dates.
        </p>
      </section>

      <section
        id="russian-embassies"
        className="mt-10 px-4  max-w-5xl mx-auto border-t text-lg pt-10 leading-relaxed font-[300]"
      >
        <h2 className="text-2xl md:text-3xl mb-4">
          Russian Embassies & Consulates
        </h2>
        <p className="">
          Participants of the{" "}
          <b> EAFO OncoPathology Courses in Russian Federation</b> can find
          further information on the Russian visa application process on the
          official website of the Russian Embassy or Consulate in their
          respective countries. Here are some general links to the official
          websites where participants can access information on Russian visa
          requirements for all countries:
        </p>
        <ul className="list-decimal mt-4 ml-6 list-inside space-y-2">
          <li>
            <b> Russian Embassy and Consulates Worldwide:</b>{" "}
            <a
              href="https://www.embassy-worldwide.com/country/russia/"
              target="_blank"
              className="underline"
            >
              {" "}
              https://www.embassy-worldwide.com/country/russia/
            </a>
          </li>
          <li>
            <b>Ministry of Foreign Affairs of the Russian Federation: </b>
            <a
              href="https://www.mid.ru/en/"
              target="_blank"
              className="underline"
            >
              {" "}
              https://www.mid.ru/en/
            </a>{" "}
          </li>
        </ul>

        <p className="mt-4">
          Participants are strongly advised to visit these official websites to
          obtain specific information on visa requirements, application
          procedures, and guidelines for their respective countries when
          planning their trip to Russia for the course. It is crucial to
          carefully review the instructions provided by the Russian authorities
          to ensure a smooth and successful visa application process.
        </p>
      </section>

      <section
        id="visa-free-list"
        className="mt-10 px-4 max-w-5xl mx-auto border-t text-lg pt-10 leading-relaxed font-[300]"
      >
        <h2 className="text-2xl md:text-3xl mb-4">
          List of Visa-Free Countries to enter Russian Federation
        </h2>
        <p className="">
          Under the Russian Federation visa-free regime, foreign citizens who
          fall within the following categories do not require a visa for visits
          of the length and nature outlined below:
        </p>
        <ul className="list-disc mt-4 ml-10 list-outside  space-y-2">
          <li>
            <b> Abkhazia — </b> Visa not required for period of stay up to 90
            days.
          </li>
          <li>
            <b>Argentina </b> (for visits of up to 90 days in any 180-day period
            (starting from the day of first entry)). Applicants planning to stay
            for more than 90 days in any 180-day period require a visa if they
            are going to Russia to conduct commercial or work-related
            activities. Diplomatic or Official passport holders require a visa
            for the whole period of their stay.
          </li>

          <li>
            <b>Armenia —</b> Visa not required for period of stay up to 90 days.
          </li>
          <li>
            <b>Azerbaijan</b>
          </li>
          <li>
            <b>Belarus</b>
          </li>
          <li>
            <b>Bolivia —</b> Visa not required for visits up to 90 days.
          </li>
          <li>
            <b>Bosnia and Herzegovina —</b> Up to 30 days for tourists and up to
            90 days for other visitors. Tourist documents or the original
            invitation, as appropriate, must be presented to the Russian
            Immigration authorities.
          </li>
          <li>
            <b>Brazil —</b> Up to 90 days in any 180-day period for tourists,
            private visits, or transit purposes only. In all other cases, a visa
            is required.
          </li>
          <li>
            <b>Brunei —</b> Up to 14 days. Diplomatic, Service, and ordinary
            passport holders (except work, profit activities, and study).
          </li>
          <li>
            <b>Chile —</b> Up to 90 days in any 180-day period. The visa-free
            regime does not apply to work- and business-related visits and
            Diplomatic and Service passport holders.
          </li>
          <li>
            <b>Colombia —</b> Up to 90 days in any 180-day period.
          </li>
          <li>
            <b>Cuba </b>
          </li>
          <li>
            <b>Ecuador —</b> Up to 90 days in 180-day period. Except work,
            study, and commercial business.
          </li>
          <li>
            <b>El Salvador —</b> Up to 90 days. Except work, study, and
            commercial business.
          </li>
          <li>
            <b>Fiji —</b> Up to 90 days in 180-day period except work, study,
            and residence.
          </li>
          <li>
            <b>Guatemala —</b> Up to 90 days in 180-day period except work,
            study, and residence.
          </li>
          <li>
            <b>Honduras —</b> Up to 90 days in 180-day period. Except work,
            study, and commercial business.
          </li>
          <li>
            <b>Hong Kong —</b> Up to 14 days.
          </li>
          <li>
            <b>Israel —</b> Up to 90 days. Tourist documents or the original
            invitation, as appropriate, must be presented to the Russian
            Immigration authorities. The visa-free regime does not apply to
            Diplomatic and Service passport holders.
          </li>
          <li>
            <b>Kazakhstan </b>
          </li>
          <li>
            <b>Kirghiz Republic </b>
          </li>
          <li>
            <b>Republic of Korea —</b> Diplomatic passport holders up to 90
            days. Holders of ordinary passports up to 60 days, except for work,
            study, and residence.
          </li>
          <li>
            <b>Democratic Republic of Laos —</b> Up to 90 days in 180-day period
            except work, study, and residence.
          </li>
          <li>
            <b>Macedonia —</b> Up to 30 days for tourists and up to 90 days for
            other visitors. Tourist documents or the original invitation, as
            appropriate, must be presented to the Russian Immigration
            authorities.
          </li>
          <li>
            <b>Macao —</b> Up to 30 days of stay. Except work, study, and
            commercial business.
          </li>
          <li>
            <b>Mauritius —</b> Up to 60 days. Except work and study.
          </li>
          <li>
            <b>Moldova </b>
          </li>
          <li>
            <b>Mongolia —</b> Up to 30 days for holders of diplomatic, official,
            and foreign passports. In case of consequent trips, total days spent
            in Russia cannot exceed 90 days in a 180-day period from the date of
            first entrance. Except work, study, and commercial business.
          </li>
          <li>
            <b>Montenegro —</b> Up to 30 days. The visa-free regime does not
            apply to Diplomatic and Service passport holders.
          </li>
          <li>
            <b>Nauru —</b> Up to 14 days.
          </li>
          <li>
            <b>Nicaragua —</b> Up to 90 days.
          </li>
          <li>
            <b>Panama —</b> Up to 90 days in 180-day period except work, study,
            and residence.
          </li>
          <li>
            <b>Paraguay —</b> Up to 90 days in 180-day period except work,
            study, and residence.
          </li>
          <li>
            <b>Peru —</b> Up to 90 days in any 180-day period. The visa-free
            regime does not apply to work- and business-related visits and
            Diplomatic and Service passport holders.
          </li>
          <li>
            <b>Seychelles —</b> Up to 30 days. Except work, study, and
            commercial business.
          </li>
          <li>
            <b>Serbia —</b> Citizens with biometric passports obtained after 9
            April 2008 can stay in Russia for up to 30 days. Diplomatic or
            Official passport holders without accreditation in Russia can stay
            up to 90 days. Serbian nationals with temporary and permanent
            resident permits can stay without time limits. In all other cases, a
            visa is required. The visa-free regime does not apply to Yugoslavian
            passport holders.
          </li>
          <li>
            <b>Republic of South Africa —</b> Up to 90 days.
          </li>
          <li>
            <b>Tajikistan </b>
          </li>
          <li>
            <b>Ukraine —</b> Citizens may only enter either through the border
            point at "Ludonka" near City of Pskov, or at Sheremetyevo
            International Airport (SVO, Moscow).
          </li>
          <li>
            <b>United Arab Emirates —</b> Up to 90 days.
          </li>
          <li>
            <b>Uruguay —</b> Up to 90 days in any 180-day period.
          </li>
          <li>
            <b>Uzbekistan </b>
          </li>
          <li>
            <b>Vanuatu —</b> Up to 90 days. Except work, study, and commercial
            business.
          </li>
          <li>
            <b>Venezuela —</b> Up to 90 days. The visa-free regime does not
            apply to Diplomatic and Service passport holders.
          </li>
        </ul>

        <p className="mt-4">
          Participants are strongly advised to visit these official websites to
          obtain specific information on visa requirements, application
          procedures, and guidelines for their respective countries when
          planning their trip to Russia for the course. It is crucial to
          carefully review the instructions provided by the Russian authorities
          to ensure a smooth and successful visa application process.
        </p>
      </section>

      <section
        id="e-visa-list"
        className="mt-10 px-4  max-w-5xl mx-auto border-t text-lg pt-10 leading-relaxed font-[300]"
      >
        <h2 className="text-2xl md:text-3xl mb-4">
          List of Countries, where it's Citizens can visit Russian Federation
          with an E-Visa
        </h2>
        <p className="">
          Austria, Andorra, Bahrain, Belgium, Bulgaria, Vatican City, Hungary,
          Germany, Greece, Denmark, India, Indonesia, Iran, Ireland, Iceland,
          Spain, Italy, Cyprus, China (including Taiwan), Democratic People's
          Republic of Korea, Kuwait, Latvia, Lithuania, Liechtenstein,
          Luxembourg, Malaysia, Malta, Mexico, Monaco, Netherlands, Norway,
          Oman, Poland, Portugal, Romania, San Marino, Saudi Arabia, North
          Macedonia, Serbia, Singapore, Slovakia, Slovenia, Turkey, Philippines,
          Finland, France, Croatia, Czech Republic, Switzerland, Sweden,
          Estonia, Japan.
        </p>
      </section>

      <section
        className="relative bg-cover bg-center py-12 mt-10 mx-4 lg:mx-20"
        style={{ backgroundImage: "url('/visa-footer.avif')" }} // replace with your uploaded bg image path
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-white shadow-lg max-w-5xl mx-auto  p-6  flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {/* Left side: Title & text */}
            <div className="md:w-[55%] border-b pb-6 md:pb-0 md:pr-4 md:border-b-0 md:border-r">
              <h2 className="text-4xl  mb-4">Contact Us</h2>
              <p className="font-[300] leading-relaxed">
                If you have any queries in regards to the visa availability for
                your country, please don't hesitate to contact us and we assure
                you that we would get back to you as soon as possible.
              </p>
            </div>

            {/* Divider line (for desktop) */}

            {/* Right side: Call & Email */}
            <div className="md:w-[45%] font-[300] flex justify-center gap-12 h-full items-center md:pl-6 ">
              <div className="flex flex-col items-center">
                <h3 className="font-semibold  flex items-center gap-2 text-lg">
                  Call
                </h3>
                <p className=" mt-2 ">+7-985-125-7788</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold  flex items-center gap-2 text-lg">
                  Email
                </h3>
                <a href="mailto:travel@eafo.info" className=" mt-2 underline ">
                  travel@eafo.info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaPage;
