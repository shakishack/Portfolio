import React from "react";
import { Star } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function AboutMe() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="pt-16 pb-28 lg:pt-20 lg:pb-40 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center mb-10 lg:mb-14">About Me</h2>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="flex-shrink-0 relative">
            <div className="w-[230px] h-[250px] sm:w-[240px] sm:h-[260px] rounded-[20px] border-4 border-[#C8DCC8] shadow-md bg-[#E6F2E6] p-3.5 flex items-center justify-center">
              <div className="w-full h-full rounded-[14px] overflow-hidden">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
            <span className="absolute -left-4 -top-4 w-14 h-14 rounded-full bg-[#F5E97A] flex items-center justify-center shadow-md">
              <Star size={24} className="fill-[#B8860B] text-[#B8860B]" />
            </span>
          </div>

          <div className="flex-1 text-left">
            <h3 className="text-[26px] sm:text-[28px] font-bold text-[#1a321a] mb-4">
              I'm {personal.name},
            </h3>

            <p className="text-[17px] sm:text-[18px] text-[#2A4A2A] leading-relaxed mb-6 font-normal">
              {personal.bio}
            </p>

            <div className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-x-1.5 sm:gap-x-2 gap-y-1 text-[13.5px] sm:text-[15px] text-[#1a321a] border border-[#3A5A40]/25 bg-[#F1F8ED] rounded-[18px] sm:rounded-full px-4 py-2.5 sm:px-6 sm:py-3 font-normal leading-snug">
              <span>{personal.opportunitiesPrefix}</span>
              {personal.opportunitiesRoles.map((role, idx) => (
                <React.Fragment key={role}>
                  <span className="font-bold text-[#3A5A40] whitespace-nowrap">{role}</span>
                  {idx < personal.opportunitiesRoles.length - 1 && (
                    <span className="text-[#3A5A40]/40 font-light">|</span>
                  )}
                </React.Fragment>
              ))}
              <span>{personal.opportunitiesSuffix}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
