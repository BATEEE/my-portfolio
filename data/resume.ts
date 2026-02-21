export interface ExperienceItem {
  start: string;
  end: string;
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    start: "Oct 2025",
    end: "Jan 2026",
    role: "Fullstack Engineer Intern",
    company: "TMA Solutions",
    companyUrl: "https://www.tmasolutions.com/",
    description: `Contributed to the R&D AMS (Automatic Monitoring System) utilizing multi-camera inputs for analyzing and reporting operational events.
                Implemented an AI-based workflow integrated with the AMS to reduce reliance on the VSS platform while maintaining detection accuracy.
                Built a management dashboard using React (TypeScript) and TanStack Query; developed backend APIs with FastAPI.`,
    technologies: [
      "FastAPI",
      "React",
      "TypeScript",
      "TanStack Query",
    ],
  },
];