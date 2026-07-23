import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="experiences-section pt-16 pb-24 lg:pt-20 lg:pb-32 px-6 relative overflow-hidden"
    >
      {/* Left side gradient glow */}
      <div className="experiences-glow-left" aria-hidden="true" />
      {/* Right side gradient glow */}
      <div className="experiences-glow-right" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="section-title text-center mb-10 lg:mb-14">
          Experiences
        </h2>

        <div className="timeline-wrap pl-7 space-y-2.5">
          {portfolioData.experiences.map((exp) => (
            <div key={exp.id} className="relative text-left group scroll-interactive exp-row">
              {/* Timeline dot — turns to bright light green with subtle glow & scale on hover / scroll active */}
              <div className="exp-dot absolute -left-7 top-[24px] w-[15px] h-[15px] rounded-full border-2 border-white z-10 shadow-sm bg-[#4A7A50] group-hover:bg-[#52C46C] group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(82,196,108,0.7)] transition-all duration-300" />

              {/* Row — no card by default, white card on hover / scroll active */}
              <div className="exp-card rounded-[14px] px-6 py-5 border border-transparent transition-all duration-300 group-hover:bg-white/80 group-hover:border-white group-hover:shadow-[0_4px_24px_-6px_rgba(26,50,26,0.12)] backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                  <h3 className="exp-title text-[15.5px] sm:text-[16.5px] font-bold text-[#1a321a] uppercase tracking-[0.03em] leading-snug group-hover:text-[#2E6B38] transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <span className="text-[14px] text-[#1a321a] font-medium whitespace-nowrap flex-shrink-0 sm:ml-6 group-hover:text-[#388E3C] transition-colors duration-300">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[14.5px] font-semibold text-[#4A7050] mb-2 group-hover:text-[#2E6B38] transition-colors duration-300">
                  {exp.organization}
                </p>

                <p className="text-[14.5px] text-[#2A4A2A] leading-relaxed font-normal">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
