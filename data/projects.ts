export interface Project {
  title: string;
  url: string;
  repo?: string;
  image: string;
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
      "A full-stack web platform helping high school students select majors based on academic scores and personality tests. Architected the database schema and developed RESTful APIs with Spring Boot. Implemented scoring logic for Holland Codes and designed a user-friendly React interface for score visualization.",
    technologies: ["Java Spring Boot", "React", "MySQL", "Render"],
  },
  {
    title: "Online Job Finder Application (Mobile)",
    url: "https://github.com/BATEEE/TimViecLamWebAppMobile",
    repo: "https://github.com/BATEEE/TimViecLamWebAppMobile",
    image: "https://placehold.co/200x120/1e293b/cbd5e1?text=Job+Finder+Mobile",
    description:
      "A cross-platform mobile application facilitating job search and recruitment processes. Built responsive UI with React Native and integrated Firebase for user authentication and real-time data synchronization. Integrated RESTful APIs to retrieve and visualize dynamic company and job data.",
    technologies: ["React Native", "JavaScript", "Firebase Auth", "REST API"],
  },
];