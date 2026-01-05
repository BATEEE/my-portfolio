"use client"; // Bắt buộc phải có dòng này vì dùng useState/useEffect

import React, { useState, useEffect } from "react";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/BATEEE", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tran-tuan-thang-9628b0391/", icon: Linkedin },
  { name: "Email", href: "mailto:thangtran081204@gmail.com", icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      
      {/* --- Personal Info --- */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Tran Tuan Thang</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Fullstack Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build end-to-end web applications from database to user interface.
        </p>

        {/* --- CV BUTTON --- */}
        <a 
          href="/static/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-400 hover:bg-slate-800/50 hover:text-slate-100"
        >
          <FileText className="h-4 w-4" />
          View My Resume
        </a>

        {/* --- NAVBAR MENU --- */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              
              return (
                <li key={link.name}>
                  <a className="group flex items-center py-3" href={link.href}>
                    {/* Line Indicator */}
                    <span
                      className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive 
                          ? "w-16 bg-slate-200"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                      }`}
                    />
                    {/* Text Label */}
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest motion-reduce:transition-none ${
                        isActive
                          ? "text-slate-200"
                          : "text-slate-500 group-hover:text-slate-200"
                      }`}
                    >
                      {link.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* --- SOCIAL ICONS --- */}
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socialLinks.map((item) => (
          <li key={item.name} className="mr-5 text-xs">
            <a href={item.href} className="block hover:text-slate-200" aria-label={item.name} target="_blank" rel="noopener noreferrer">
              <item.icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}