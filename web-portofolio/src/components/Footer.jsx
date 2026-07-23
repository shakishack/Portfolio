import React from "react";
import { Mail, FileText, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personal, navLinks } = portfolioData;

  // Footer nav: exclude "Contacts" (it's the footer itself)
  const footerNav = navLinks.filter((l) => l.name !== "Contacts");

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCtaClick = (e, url, label) => {
    if (!url || url === "#") {
      e.preventDefault();
      alert(`Link your ${label} Google Drive URL in portfolioData.js!`);
    }
  };

  return (
    <footer
      id="contacts"
      className="text-white"
      style={{ background: "#2A4A1A" }}
    >
      {/* ── Top block ───────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-9">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">

          {/* LEFT: brand + tagline */}
          <div className="flex flex-col gap-3 max-w-sm">
            <a
              href="#home"
              onClick={handleScrollTop}
              className="text-[20px] font-extrabold tracking-[0.1em] text-white hover:text-[#9EC49E] transition-colors cursor-pointer"
            >
              {personal.name.toUpperCase()}
            </a>
            <p className="text-[13.5px] text-[#8FB88F] leading-relaxed font-normal">
              {personal.subRole}.<br />
              {personal.subTagline}
            </p>
          </div>

          {/* RIGHT: nav links row + social icons + CTA buttons below */}
          <div className="flex flex-col items-start md:items-end gap-4">
            {/* Horizontal nav links */}
            <nav className="flex flex-wrap gap-6 md:gap-8 justify-start md:justify-end">
              {footerNav.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[14.5px] text-white/85 hover:text-white transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social icon buttons */}
            <div className="flex items-center gap-3">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-[#5A8A5A] hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all duration-200"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-[#5A8A5A] hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all duration-200"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={personal.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#5A8A5A] hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all duration-200"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={personal.whatsappUrl || "https://wa.me/"}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-[#5A8A5A] hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all duration-200"
              >
                <WhatsappIcon size={17} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-[#5A8A5A] hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all duration-200"
              >
                <Mail size={17} />
              </a>
            </div>

            {/* GDrive CTA Buttons (CV & Portfolio PDF) */}
            <div className="flex flex-wrap items-center gap-2.5 mt-1">
              <a
                href={personal.cvUrl || "#"}
                target={personal.cvUrl && personal.cvUrl !== "#" ? "_blank" : undefined}
                rel="noreferrer noopener"
                onClick={(e) => handleCtaClick(e, personal.cvUrl, "CV")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold bg-[#3D663B] hover:bg-white hover:text-[#1a321a] text-white border border-[#6A9A6A] shadow-sm transition-all duration-200 cursor-pointer"
              >
                <FileText size={15} />
                <span>CV</span>
              </a>

              <a
                href={personal.portfolioPdfUrl || "#"}
                target={personal.portfolioPdfUrl && personal.portfolioPdfUrl !== "#" ? "_blank" : undefined}
                rel="noreferrer noopener"
                onClick={(e) => handleCtaClick(e, personal.portfolioPdfUrl, "Portfolio (PDF)")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold bg-[#3D663B] hover:bg-white hover:text-[#1a321a] text-white border border-[#6A9A6A] shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Portfolio (PDF)</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 border-t border-white/15 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[13.5px] text-[#8FB88F]">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <a
          href={`mailto:${personal.email}`}
          className="text-[13.5px] text-[#8FB88F] hover:text-white transition-colors"
        >
          {personal.location ? `${personal.location} | ` : ""}{personal.email}
        </a>
      </div>
    </footer>
  );
}
