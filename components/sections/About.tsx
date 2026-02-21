"use client";

export default function About() {
  return (
    <div className="text-slate-400 leading-relaxed space-y-4">
      <p>
        Hi, I'm <strong className="text-slate-200">Tran Tuan Thang</strong>, a
        final-year IT student at
        <span className="text-teal-300"> Ho Chi Minh City Open University</span>
        . I started coding in 2022 and enjoy building efficient, real-world
        software systems.
      </p>

      <p>
        I worked as a{" "}
        <strong className="text-slate-200">Fullstack Engineer Intern</strong> at
        <a
          href="https://www.tmasolutions.com/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          {" "}
          TMA Solutions
        </a>
        , contributing to an R&D Automatic Monitoring System. I developed
        backend APIs with <span className="text-teal-300">FastAPI</span> and
        built dashboards using{" "}
        <span className="text-teal-300">
          React, TypeScript, and TanStack Query
        </span>
        .
      </p>

      <p>
        I enjoy designing scalable systems, building personal projects, and
        writing clean, maintainable code following SOLID principles. My goal is
        to become a professional Software Engineer specializing in backend and
        fullstack development.
      </p>
    </div>
  );
}
