export function ProjectsSection() {
  const projects = [
    {
      title: "NetNest — Campus Exchange Hub",
      description: "A full-stack campus marketplace for students to buy and sell books, notes, and study materials. Features real-time in-app chat, offer system, email/Google authentication, and listing moderation via an admin panel.",
      technologies: ["React", "TypeScript", "Firebase", "Framer Motion", "Vercel"],
      github: "https://github.com/Kunalkh05/campus-exchange-hub-main",
      demo: "https://netnest-campus-exchange.web.app"
    },
    {
      title: "Student Expense & Loan Planner",
      description: "An interactive financial planning tool for students to manage expenses, budget efficiently, and structure education loan payments. Built during a hackathon with Team CodeVengers.",
      technologies: ["Python", "JavaScript", "HTML5", "CSS3", "Git"],
      github: "https://github.com/Kunalkh05/hackathon-project-CodeVengers"
    }
  ]

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-y-auto">
      <div className="min-h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 py-10 sm:py-16 pb-20 w-full pointer-events-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-12 text-center">Projects</h2>
          <div className="space-y-3 sm:space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
              >
                <div className="flex flex-col gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white leading-tight">{project.title}</h3>
                  <div className="flex gap-3 text-xs sm:text-sm">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 hover:underline font-semibold transition-colors">
                        GitHub ↗
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline font-semibold transition-colors">
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-white/80 mb-3 sm:mb-4 text-xs sm:text-base leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-white/20 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
