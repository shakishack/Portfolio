import React, { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const sectionIds = portfolioData.navLinks.map((l) => l.href.replace("#", ""));
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#3A5A40]/10 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(26,50,26,0.1)]"
          : "bg-[#DCEFDC]/85 backdrop-blur-sm shadow-[0_2px_14px_-4px_rgba(26,50,26,0.06)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-[84px]">
        {/* Brand with light olive green star icon (larger size & vertically centered) */}
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 text-[21px] sm:text-[22px] font-extrabold tracking-[0.08em] text-[#1a321a] hover:opacity-70 transition-opacity leading-none"
        >
          <Star size={23} className="fill-[#6A8A50] text-[#6A8A50] flex-shrink-0 self-center" />
          <span className="leading-none">{portfolioData.personal.shortName}</span>
        </a>

        {/* Desktop nav links (visible on lg: 1024px and up) */}
        <nav className="hidden lg:flex items-center gap-9 lg:gap-11">
          {portfolioData.navLinks.map((link) => {
            const isLinkActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${isLinkActive ? "active" : ""}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA button – Desktop ONLY (lg: 1024px and up) */}
        <a
          href={portfolioData.personal.whatsappUrl || "https://wa.me/6287839076250"}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex btn-cta-nav"
        >
          Let's Connect!
        </a>

        {/* Hamburger button – Mobile & Tablet (visible below lg) */}
        <button
          className="lg:hidden text-[#1a321a] p-1 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile & Tablet dropdown menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#C2D9C2] px-8 py-5 space-y-4 shadow-md">
          {portfolioData.navLinks.map((link) => {
            const isLinkActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-[16.5px] py-1.5 transition-colors ${
                  isLinkActive
                    ? "text-[#3A5A40] font-bold"
                    : "text-[#1a321a] font-medium hover:text-[#3A5A40]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          {/* CTA Button placed inside mobile/tablet dropdown menu */}
          <a
            href={portfolioData.personal.whatsappUrl || "https://wa.me/6287839076250"}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-center py-[11px] px-6 rounded-full text-[14px] font-semibold bg-[#3A5A40] text-white hover:bg-[#2e4833] transition-colors mt-3"
          >
            Let's Connect!
          </a>
        </div>
      )}
    </header>
  );
}
