import React from "react";
import { X, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[20px] max-w-xl w-full max-h-[88vh] overflow-y-auto shadow-2xl text-left border border-[#C8DCC8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image Header */}
        <div className="relative w-full h-60 bg-[#D4E8D4] overflow-hidden rounded-t-[20px] flex-shrink-0">
          {/* Top-Left Category Chip Badge */}
          <span className="absolute left-4 top-4 z-10 inline-flex items-center justify-center h-[26px] px-3.5 rounded-full text-[12px] font-bold leading-none bg-[#3A5A40] text-white shadow-[0_4px_12px_rgba(0,0,0,0.28)] border border-white/20">
            {project.category}
          </span>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
            }}
          />

          {/* Top-Right Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1a321a] flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:scale-105 z-10"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-7">
          {/* Tech Tags Row */}
          <div className="flex flex-wrap gap-1.5 mb-3.5 items-center">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-[5px] rounded-full text-[12px] font-semibold bg-[#E6F2E6] text-[#2A4A2A] border border-[#C8DCC8]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-[22px] font-bold text-[#1a321a] mb-1 leading-tight">
            {project.title}
          </h3>
          <p className="text-[14.5px] font-semibold text-[#4A7050] mb-4">
            {project.subtitle}
          </p>

          {/* Full Project Description */}
          <p className="text-[14.5px] text-[#2A4A2A] leading-relaxed font-normal mb-6">
            {project.description}
          </p>

          {/* Interactive Project Links / Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#E0EEE0]">
            {project.buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.link || "#"}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (!btn.link || btn.link === "#") {
                    e.preventDefault();
                    alert(
                      `Link placeholder - update in portfolioData.js: ${btn.label}`
                    );
                  }
                }}
                className={`inline-flex items-center justify-center gap-2 text-[13.5px] font-semibold px-5 py-2.5 rounded-full cursor-pointer transition-all duration-200 ${
                  btn.primary
                    ? "bg-[#3A5A40] hover:bg-[#2E4833] text-white shadow-sm hover:shadow-md"
                    : "bg-[#E6F2E6] hover:bg-[#D0E8D0] text-[#1a321a] border border-[#C0D8C0]"
                }`}
              >
                <span>{btn.label}</span>
                <ExternalLink size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
