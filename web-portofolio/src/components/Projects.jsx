import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="pt-16 pb-24 lg:pt-20 lg:pb-32 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-10">Featured Projects</h2>

        {/* Category filter buttons */}
        <div className="flex justify-center items-center gap-3 mb-12">
          {portfolioData.projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[14.5px] font-semibold tracking-wide cursor-pointer transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#3A5A40] text-white shadow-sm"
                  : "bg-white text-[#2A4A2A] border border-[#B0CAB0] hover:border-[#3A5A40]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="card-shadow card-shadow-hover bg-white rounded-[16px] border border-[#C8DCC8] overflow-hidden flex flex-col group cursor-pointer transition-all duration-300"
            >
              {/* Project Image Container */}
              <div className="relative w-full h-[195px] bg-[#D4E8D4] overflow-hidden flex-shrink-0">
                {/* Category Chip Badge */}
                <span className="absolute left-3.5 top-3.5 z-10 inline-flex items-center justify-center h-[26px] px-3.5 rounded-full text-[12px] font-bold leading-none bg-[#3A5A40] text-white shadow-[0_4px_12px_rgba(0,0,0,0.28)] border border-white/20">
                  {project.category}
                </span>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 text-left">
                <h3 className="text-[18px] font-bold text-[#1a321a] leading-tight mb-1 group-hover:text-[#2E6B38] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[14px] text-[#4A7050] font-semibold mb-3">
                  {project.subtitle}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-[5px] rounded-full text-[12px] font-semibold bg-[#E6F2E6] text-[#2A4A2A] border border-[#C8DCC8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Row: See Details text & Arrow Button */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#E0EEE0]">
                  <span className="text-[13px] font-semibold text-[#3A5A40] group-hover:text-[#2E4833] transition-colors">
                    See Details
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="w-9 h-9 rounded-full bg-[#3A5A40] text-white flex items-center justify-center group-hover:bg-[#2E4833] group-hover:scale-105 shadow-sm transition-all duration-200 cursor-pointer"
                    aria-label="See Project Details"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
