import React from "react";

export default function ParticipationVariants() {
  return (
    <div className="w-full flex flex-col items-center ">
      {/* Hero Section */}
      <div className="relative w-full h-80 lg:h-[30rem] flex items-center justify-center">
        <img
          src="/part-var/hero.avif"
          alt="Participation Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative w-[90vw] md:w-full bg-white px-2 md:px-6 py-6 md:py-10  shadow-md text-center md:max-w-2xl">
          <h1 className="text-3xl md:text-6xl ">Participation Variants</h1>
          <p className="mt-2 text-base md:text-lg font-[300]">
            EAFO offers you residential, non-residential and online options.
          </p>
        </div>
      </div>

      {/* On-Site without Accommodation */}
      <div className="container max-w-5xl  px-4 xl:px-0 py-12  gap-8 items-center text-center md:text-start border-b">
        {/* Text */}
        <div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-6 md:mb-10">
            <h2 className="text-3xl md:text-[2.5rem] mt-6 md:mt-0">
              On-Site without Accommodation
            </h2>
            <div className="flex justify-center">
              <img
                src="/part-var/img1.avif"
                alt="On-Site Participation"
                className=" shadow-lg w-full max-w-[26rem]"
              />
            </div>
          </div>
          <p className="leading-relaxed text-lg font-[300]">
            Opt for the on-site without accommodation participation option at
            the EAFO OncoPathology Courses for a flexible and enriching learning
            journey. Attend all course sessions, workshops, and interactive
            activities on campus while having the flexibility to commute from
            your preferred accommodation outside the campus. Benefit from the
            proximity to the course venue without the need for overnight stays,
            allowing you to customize your schedule according to your personal
            preferences and commitments. Connect with leading experts, faculty
            members, and peers during breaks, networking opportunities, and
            social events, fostering professional relationships and knowledge
            sharing.
          </p>
        </div>
        {/* Image */}
      </div>

      {/* Online Participation */}
      <div className="container mt-2 max-w-5xl  px-4 xl:px-0 py-12  gap-8 items-center border-b text-center md:text-start">
        {/* Text */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10">
            <div className="flex justify-center">
              <img
                src="/part-var/img2.avif"
                alt="Online Participation"
                className=" shadow-lg w-full max-w-[26rem]"
              />
            </div>
            <h2 className="text-3xl md:text-[2.5rem]  mt-6 md:mt-0">
              Online Participation
            </h2>
          </div>
          <p className="leading-relaxed text-lg font-[300]">
            Opt for the on-site without accommodation participation option at
            the EAFO OncoPathology Courses for a flexible and enriching learning
            journey. Attend all course sessions, workshops, and interactive
            activities on campus while having the flexibility to commute from
            your preferred accommodation outside the campus. Benefit from the
            proximity to the course venue without the need for overnight stays,
            allowing you to customize your schedule according to your personal
            preferences and commitments. Connect with leading experts, faculty
            members, and peers during breaks, networking opportunities, and
            social events, fostering professional relationships and knowledge
            sharing.
          </p>
        </div>
        {/* Image */}
      </div>
    </div>
  );
}
