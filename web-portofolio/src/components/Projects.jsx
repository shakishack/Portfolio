import React, { useState } from "react";
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="card-shadow card-shadow-hover bg-white rounded-[16px] border border-[#C8DCC8] overflow-hidden flex flex-col group"
            >
              <div className="relative w-full h-[190px] bg-[#D4E8D4] overflow-hidden flex-shrink-0">
                {/* Category Chip Badge: centered text + interactive white hover */}
                <span className="absolute left-3.5 top-3.5 z-10 inline-flex items-center justify-center h-[26px] px-3.5 rounded-full text-[12px] font-bold leading-none bg-[#3A5A40] text-white hover:bg-white hover:text-[#3A5A40] border border-transparent hover:border-[#3A5A40]/30 shadow-sm transition-all duration-300 cursor-pointer">
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

              <div className="p-6 flex flex-col flex-1 text-left">
                <h3 className="text-[18px] font-bold text-[#1a321a] leading-tight mb-1">
                  {project.title}
                </h3>

                <p className="text-[14px] text-[#4A7050] font-semibold mb-3">
                  {project.subtitle}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-[5px] rounded-full text-[12px] font-semibold bg-[#E6F2E6] text-[#2A4A2A] border border-[#C8DCC8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[14px] text-[#2A4A2A] leading-relaxed font-normal flex-1 mb-5">
                  {project.description}
                </p>

                <div className="flex items-center gap-2.5 mt-auto">
                  {project.buttons.map((btn, idx) => (
                    <button
                      key={idx}
                      onClick={() => onSelectProject(project)}
                      className={`flex-1 py-[10px] px-3.5 rounded-full text-[13.5px] font-semibold cursor-pointer transition-all duration-200 text-center ${
                        btn.primary
                          ? "bg-[#3A5A40] hover:bg-[#2E4833] text-white shadow-sm hover:shadow-md"
                          : "bg-[#E6F2E6] hover:bg-[#D0E8D0] text-[#1a321a] border border-[#C0D8C0]"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
