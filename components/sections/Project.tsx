"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { projectData } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      <ul className="group/list">
        {projectData.map((project, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              {/* Hover Background */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              {/* Project Image */}
              <div className="z-10 sm:col-span-2">
                <img
                  alt={project.title}
                  src={project.image}
                  width="200"
                  height="48"
                  loading="lazy"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="z-10 sm:col-span-6">
                <h3>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {project.title}
                      <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </span>
                  </a>
                </h3>

                <p className="mt-2 text-sm leading-normal">
                  {project.description}
                </p>

                {/* Optional GitHub Source Link */}
                {project.repo && (
                  <div className="mt-2 relative z-10">
                    {" "}
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-300"
                    >
                      <Github className="mr-1 h-3 w-3" /> Source Code
                    </a>
                  </div>
                )}

                {/* Tech Stack Chips */}
                <ul className="mt-2 flex flex-wrap">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Link xem tất cả dự án */}
      {/* <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Project Archive
            </span>
            <span className="whitespace-nowrap">
              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
            </span>
          </a>
        </div> */}
    </div>
  );
}
