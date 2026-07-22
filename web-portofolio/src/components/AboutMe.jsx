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
            <div className="w-[220px] h-[240px] rounded-2xl overflow-hidden border-4 border-[#C8DCC8] shadow-md bg-[#E6F2E6]">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                }}
              />
            </div>
            <span className="absolute -left-4 -top-4 w-14 h-14 rounded-full bg-[#F5E97A] flex items-center justify-center shadow-md">
              <Star size={24} className="fill-[#1a321a] text-[#1a321a]" />
            </span>
          </div>

          <div className="flex-1 text-left">
            <h3 className="text-[24px] font-bold text-[#1a321a] mb-4">
              I'm {personal.name},
            </h3>

            <p className="text-[16px] text-[#2A4A2A] leading-relaxed mb-6 font-normal">
              {personal.bio}
            </p>

            <span className="inline-flex flex-wrap items-center gap-2 text-[14px] text-[#1a321a] border border-[#3A5A40]/25 bg-[#F1F8ED] rounded-full px-6 py-3 font-normal">
              <span>{personal.opportunitiesPrefix}</span>
              {personal.opportunitiesRoles.map((role, idx) => (
                <React.Fragment key={role}>
                  <span className="font-bold text-[#3A5A40]">{role}</span>
                  {idx < personal.opportunitiesRoles.length - 1 && (
                    <span>|</span>
                  )}
                </React.Fragment>
              ))}
              <span>{personal.opportunitiesSuffix}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
