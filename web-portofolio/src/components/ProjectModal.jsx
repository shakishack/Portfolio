import React from "react";
import { X, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[16px] max-w-xl w-full max-h-[88vh] overflow-y-auto shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-56 bg-[#D4E8D4] overflow-hidden rounded-t-[16px] flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
            }}
          />
        </div>

        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#E6F2E6] hover:bg-[#C8DCC8] flex items-center justify-center text-[#1a321a] cursor-pointer transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="inline-flex items-center justify-center h-[26px] px-3.5 rounded-full text-[12px] font-bold leading-none bg-[#3A5A40] text-white hover:bg-white hover:text-[#3A5A40] border border-transparent hover:border-[#3A5A40]/30 transition-all duration-300 cursor-pointer">
              {project.category}
            </span>
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-0.5 rounded-full text-[11.5px] font-semibold bg-[#E6F2E6] text-[#2A4A2A]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-[20px] font-bold text-[#1a321a] mb-0.5">
            {project.title}
          </h3>
          <p className="text-[14px] font-semibold text-[#4A7050] mb-4">
            {project.subtitle}
          </p>

          <p className="text-[14px] text-[#2A4A2A] leading-relaxed font-normal mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E0EEE0]">
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
                      `Link placeholder - update in portfolioData.js: ${btn.label}`,
                    );
                  }
                }}
                className="inline-flex items-center gap-1.5 bg-[#3A5A40] hover:bg-[#2E4833] text-white text-[13px] font-semibold px-4 py-2.5 rounded-full cursor-pointer transition-all duration-200"
              >
                {btn.label}
                <ExternalLink size={14} />
              </a>
            ))}

            <button
              onClick={onClose}
              className="ml-auto text-[13px] font-medium text-[#4A7050] hover:text-[#1a321a] cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
