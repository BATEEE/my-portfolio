"use client";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="text-slate-400 leading-relaxed space-y-4">
        <p>
          Hello! I'm <strong className="text-slate-200">Tran Tuan Thang</strong>, 
          currently a final-year Information Technology student at{" "}
          <span className="text-teal-300">Ho Chi Minh City Open University (OU)</span>. 
          My coding journey began in 2022, and I have always been passionate about building 
          efficient, highly applicable software systems.
        </p>

        <p>
          Fast-forward to today, I’ve had the privilege of working as a{" "}
          <strong className="text-slate-200">Fullstack Developer Intern</strong> at{" "}
          <a
            href="https://www.tmasolutions.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          >
            TMA Solutions
          </a>
          . My main focus here is developing a monitoring system for Autonomous Guided Vehicles (R&D AGV), 
          utilizing <span className="text-teal-300">FastAPI, SQLModel</span> for the Backend 
          and <span className="text-teal-300">React, TypeScript</span> for the Frontend.
        </p>

        <p>
          Outside of work, I enjoy working on personal projects to sharpen my system design thinking, 
          such as an Enrollment Counseling System or a Job Finding Application. 
          I strictly adhere to <strong className="text-slate-200">SOLID principles</strong> and strive for clean code in every line I write.
        </p>
        
        <p>
          When I'm not at the computer, I usually spend time updating myself on the latest 
          Backend technologies and system architecture trends to best prepare for my journey 
          of becoming a professional Software Engineer.
        </p>
      </div>
    </section>
  );
}