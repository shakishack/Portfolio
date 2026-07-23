import React from "react";
import { Star } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Achievements() {
  const achievementsList =
    portfolioData.achievements || [portfolioData.achievement];

  const handleCertificateClick = (e, url) => {
    // If no real URL set yet, show placeholder alert instead of navigating
    if (!url || url === "#") {
      e.preventDefault();
      alert("Link your certificate here in portfolioData.js!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-[28px] sm:text-[32px] font-bold text-[#1a321a] mb-7">
        Achievements
      </h2>

      <div className="max-w-2xl space-y-4">
        {achievementsList.map((item) => (
          <div
            key={item.id || item.title}
            className="group card-shadow card-shadow-hover bg-white rounded-[16px] border border-[#C8DCC8] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 transition-all duration-300 scroll-interactive achievement-card"
          >
            {/* Icon badge — transitions to lighter green frame with subtle glow & 5% scale on hover / scroll active */}
            <div className="achievement-star-badge flex-shrink-0 w-12 h-12 rounded-full bg-[#3A5A40] group-hover:bg-[#52C46C] group-hover:scale-105 group-hover:shadow-[0_0_10px_rgba(82,196,108,0.6)] flex items-center justify-center shadow-sm transition-all duration-300">
              <Star size={21} className="fill-white text-white" />
            </div>

            {/* Text */}
            <div className="flex-1 text-left min-w-0">
              <h3 className="achievement-title text-[16.5px] font-bold text-[#1a321a] group-hover:text-[#2E6B38] transition-colors duration-300 mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-[14px] text-[#2A4A2A] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            {/* CTA — always visible, uses alert fallback when URL is '#' */}
            <a
              href={item.certificateUrl || "#"}
              onClick={(e) => handleCertificateClick(e, item.certificateUrl)}
              className="btn-cta-sm flex-shrink-0 self-start sm:self-center mt-1 sm:mt-0"
              target={
                item.certificateUrl && item.certificateUrl !== "#"
                  ? "_blank"
                  : undefined
              }
              rel="noreferrer noopener"
            >
              {item.buttonLabel}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
