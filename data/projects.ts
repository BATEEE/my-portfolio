// src/data/projects.ts

export interface Project {
  title: string;
  url: string;      // Link demo/deploy (click vào tiêu đề)
  repo?: string;    // Link GitHub (nếu có)
  image: string;    // Đường dẫn ảnh
  description: string;
  technologies: string[];
}

export const projectData: Project[] = [
  {
    title: "Online Admission Consulting System",
    url: "https://admission-consulting-system-client.onrender.com/",
    repo: "https://github.com/BATEEE/admission-consulting-system",
    image: "/static/admission-consulting-system.png",
    description:
      "A full-stack web system helping students choose majors based on academic scores and personality tests (Holland Code). Designed Database and built RESTful APIs using Spring Boot. React Frontend displays intuitive consultation results. Deployed on Render.",
    technologies: ["Java Spring Boot", "React", "MySQL", "Render", "Holland Code"],
  },
  {
    title: "Online Job Finder Application (Mobile)",
    url: "https://github.com/BATEEE/TimViecLamWebAppMobile",
    // repo: "",
    image: "https://placehold.co/200x120/1e293b/cbd5e1?text=Job+Finder+Mobile",
    description:
      "Cross-platform mobile application for job searching and recruitment. Built responsive UI with React Native, integrated Firebase Auth for user authentication and real-time data synchronization.",
    technologies: ["React Native", "Firebase", "Android", "iOS", "REST API"],
  },
];