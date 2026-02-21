import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Project";
import Sidebar from "@/components/SideBar";
import StarBackground from "@/components/StarBackGround";

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 text-slate-400">
      <StarBackground />

      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />

        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          {/* ABOUT */}
          <section
            id="about"
            className="min-h-screen scroll-mt-16 lg:scroll-mt-24 pb-16"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:mb-8 lg:w-full lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                About
              </h2>
            </div>
            <About />
          </section>

          {/* EXPERIENCE */}
          <section
            id="experience"
            className="min-h-screen scroll-mt-16 lg:scroll-mt-24 pb-16"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:mb-8 lg:w-full lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Experience
              </h2>
            </div>
            <Experience />
          </section>

          {/* PROJECTS */}
          <section
            id="projects"
            className="min-h-screen scroll-mt-16 lg:scroll-mt-24 pb-16"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:mb-8 lg:w-full lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Projects
              </h2>
            </div>
            <Projects />
          </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>Built with Next.js and Tailwind CSS, deployed with Vercel.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
