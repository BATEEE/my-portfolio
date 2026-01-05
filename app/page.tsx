// src/app/page.tsx (hoặc file Home của bạn)
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
        
        {/* CỘT TRÁI */}
        <Sidebar />

        {/* CỘT PHẢI */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">

          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <About />
          </section>

          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <Experience />
          </section>

          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <Projects />
          </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              Designed in Figma and coded in Visual Studio Code by yours truly. 
              Built with Next.js and Tailwind CSS, deployed with Vercel.
            </p>
          </footer>

        </main>
      </div>
    </div>
  );
}