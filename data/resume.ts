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
    end: "Present",
    role: "Fullstack Developer Intern",
    company: "TMA Solutions",
    companyUrl: "https://www.tmasolutions.com/",
    description: `Contributed to the development of an R&D AGV Monitoring system using Computer Vision.
                Designed a scalable backend module with FastAPI & SQLModel, applying SOLID principles.
                Built interactive frontend interfaces using React & TypeScript and integrated MLOps services for data visualization.`,
    technologies: [
      "Python",
      "FastAPI",
      "SQLModel",
      "React",
      "TypeScript",
      "Docker",
      "MLOps",
    ],
  },
];