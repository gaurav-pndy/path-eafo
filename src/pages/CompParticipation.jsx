import React from "react";
import { Link } from "react-router-dom";

export default function CompParticipation() {
  return (
    <div className="w-full">
      {/* Hero Section with Overlay Card */}
      <div className="relative w-full max-w-5xl  mx-auto flex flex-col lg:flex-row gap-6  items-center px-4 py-8">
        <img
          src="/comp-part.avif"
          alt="Competitive Participation"
          className="lg:max-w-[40rem] w-full h-80 lg:h-full max-h-[40rem] object-cover  border border-[rgba(40,41,54,0.5)]"
        />
        <div className="lg:absolute bg-white p-6   lg:max-w-lg top-1/2 lg:-translate-y-1/2 right-1/2 lg:translate-x-[96.5%] border border-[rgba(40,41,54,0.5)]">
          <h2 className="text-3xl md:text-5xl">
            Extra Subsidized Participation
          </h2>
          <p className="text-xl md:text-3xl mt-4">
            (Competitive Participation)
          </p>
          <p className="mt-6  leading-8 font-[300]">
            Extra Subsidized participation for the EAFO OncoPathology Courses on
            Hematolymphoid Tumors offers a unique opportunity for eligible
            individuals to attend this event at reduced cost. This special
            initiative aims to make the courses more accessible to a wider
            audience, including students, U40 IPS Members, PhD Scholars,
            researchers, and healthcare professionals (under 40 years of age)
            with limited financial resources.
          </p>
        </div>
      </div>

      {/* Criteria Section */}
      <div className="container max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl md:text-5xl mb-4">Criteria</h3>
        <h6 className="text-lg md:ml-10">
          Criteria for extra subsidized participation in the course:
        </h6>
        <ul className="list-decimal text-lg font-[300] mt-2 list-inside space-y-2 ml-4 md:ml-14">
          <li>Age: not more than 40 years (as of 31 October 2024)</li>
          <li>Motivation Letter</li>
          <li>Resume/CV</li>
          <li>Letter of recommendation (Optional)</li>
          <li>
            Take part in the online test - The link for the online test will be
            sent to you separately by email
          </li>
        </ul>

        {/* Info Boxes + Buttons */}
        <div className="mt-10 grid md:grid-cols-4 gap-6 text-center">
          <Link to={"/awards"} className="flex items-center justify-center">
            <button className="bg-[#c2274b] border border-[#c2274b] text-white text-2xl px-12 py-4 rounded-3xl whitespace-nowrap hover:bg-white cursor-pointer font-medium  hover:text-[#c2274b] transition-all duration-300">
              Awards
            </button>
          </Link>
          <div className="p-6 bg-[#f6ebe4] border  ">
            <p className="font-[300]">
              To qualify for the Extra Subsidized Participation Category, you
              have to be under the age of 40 and take part in the online test.
            </p>
          </div>

          <div className="p-6 bg-[#f6ebe4] border">
            <p className="font-[300]">
              You will also be required to fill in an additional form along with
              the application form in order to take part in the selection.
            </p>
          </div>

          <Link
            to={"/register-now"}
            className="flex items-center justify-center"
          >
            <button className="bg-[#c2274b] border border-[#c2274b] text-white text-2xl px-12 py-4 rounded-3xl whitespace-nowrap hover:bg-white cursor-pointer font-medium  hover:text-[#c2274b] transition-all duration-300">
              Register
            </button>
          </Link>
        </div>
      </div>

      {/* Conditions Section */}
      <div className="container max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl md:text-5xl mb-4">Conditions</h3>
        <ul className="list-decimal text-lg font-[300] mt-2 list-inside space-y-2 ml-4 md:ml-10">
          <li>
            Priority will be given to those whose Abstract (or) Pathology Case
            has been Submitted/Accepted
          </li>
          <li>No Travel Support will be given</li>
          <li>
            Priority will be given to the applicants residing in Low & Middle
            Income Countries (as per World Bank data)
          </li>
          <li>Provide Maximum Information in the Application</li>
        </ul>

        <p className="mt-6 text-lg font-[300] leading-relaxed">
          Participants who qualify for extra subsidized participation will
          benefit from full access to entire program, including lectures,
          interactive panel discussions and other planned activities including
          catering.
        </p>
      </div>
    </div>
  );
}
