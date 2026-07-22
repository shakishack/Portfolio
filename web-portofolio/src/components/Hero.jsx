import React from "react";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal, heroTags } = portfolioData;

  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center pt-[84px] pb-16 px-6 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[46px] sm:text-[62px] md:text-[74px] font-bold text-[#1a321a] leading-[1.12] mb-8 tracking-[-1px]">
          Hi, Welcome to{" "}
          <span className="font-extrabold text-[#3A5A40]">My Portfolio!</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {heroTags.map((tag, idx) => (
            <span key={idx} className="hero-tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-[16px] sm:text-[17px] text-[#2A4A2A] max-w-xl mx-auto leading-relaxed mb-10 font-normal">
          {personal.tagline.map((line, idx) => (
            <span key={idx}>
              {line}
              {idx < personal.tagline.length - 1 && <br />}
            </span>
          ))}
        </p>

        <a href="#projects" className="btn-cta">
          View Projects
        </a>
      </div>
    </section>
  );
}
