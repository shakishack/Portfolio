import React from "react";
import {
  Code,
  Palette,
  Server,
  Database,
  Terminal,
  Wrench,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const iconMap = { Code, Palette, Server, Database, Terminal, Wrench };

export default function Skills() {
  return (
    <>
      <h2 className="section-title text-center mb-10 lg:mb-14">
        Skills & Tools
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.skillCategories.map((cat) => {
          const Icon = iconMap[cat.icon] || Code;
          return (
            <div
              key={cat.id}
              className="group card-shadow card-shadow-hover bg-white rounded-[16px] border border-[#C8DCC8] p-6 flex flex-col gap-4 text-left transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center text-[#3A5A40] group-hover:text-[#38A169] group-hover:drop-shadow-[0_0_8px_rgba(56,161,105,0.5)] group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                  <Icon size={24} />
                </div>
                <h3 className="text-[16.5px] sm:text-[17.5px] font-bold text-[#1a321a] group-hover:text-[#2F6038] transition-colors duration-300 leading-tight">
                  {cat.title}
                </h3>
              </div>

              <p className="text-[14px] text-[#4A7050] leading-relaxed font-normal">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-[5px] rounded-full text-[12.5px] font-semibold bg-[#E6F2E6] text-[#2A4A2A] group-hover:bg-[#DCF0DC] transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
