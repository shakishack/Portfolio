import React from "react";
import { Star } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Achievements() {
  const { achievement } = portfolioData;

  const handleCertificateClick = (e) => {
    // If no real URL set yet, show placeholder alert instead of navigating
    if (!achievement.certificateUrl || achievement.certificateUrl === "#") {
      e.preventDefault();
      alert("Link your certificate here in portfolioData.js!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-[26px] sm:text-[28px] font-bold text-[#1a321a] mb-7">
        Achievements
      </h2>

      <div className="max-w-2xl">
        <div className="card-shadow card-shadow-hover bg-white rounded-[16px] border border-[#C8DCC8] px-6 py-5 flex items-center gap-5">

          {/* Icon badge */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3A5A40] flex items-center justify-center shadow-sm">
            <Star size={19} className="fill-white text-white" />
          </div>

          {/* Text */}
          <div className="flex-1 text-left min-w-0">
            <h3 className="text-[14.5px] font-bold text-[#1a321a] mb-1 leading-snug">
              {achievement.title}
            </h3>
            <p className="text-[12.5px] text-[#2A4A2A] leading-relaxed font-normal">
              {achievement.description}
            </p>
          </div>

          {/* CTA — always visible, uses alert fallback when URL is '#' */}
          <a
            href={achievement.certificateUrl || "#"}
            onClick={handleCertificateClick}
            className="btn-cta-sm flex-shrink-0"
            target={achievement.certificateUrl && achievement.certificateUrl !== "#" ? "_blank" : undefined}
            rel="noreferrer noopener"
          >
            {achievement.buttonLabel}
          </a>

        </div>
      </div>
    </div>
  );
}
