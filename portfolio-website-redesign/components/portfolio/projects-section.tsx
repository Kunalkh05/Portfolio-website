export function ProjectsSection() {
  const projects = [
    {
      title: "NetNest — Campus Exchange Hub",
      description: "A full-stack campus marketplace for students to buy and sell books, notes, and study materials. Features real-time in-app chat, offer system, email/Google authentication, and listing moderation via an admin panel. Integrated Framer Motion for rich animations and spring physics.",
      technologies: ["React", "TypeScript", "Firebase (Auth, Firestore, Storage)", "Framer Motion", "Vercel"],
      github: "https://github.com/Kunalkh05/campus-exchange-hub-main",
      demo: "https://netnest-campus-exchange.web.app"
    },
    {
      title: "Student Expense & Education Loan Planner",
      description: "Collaborated in a team to build an interactive financial planning tool for students to manage expenses, budget efficiently, and structure education loan payments. Delivered as a working prototype under time-constrained hackathon conditions (Team CodeVengers).",
      technologies: ["Python", "JavaScript", "HTML5", "CSS3", "Git"],
      github: "https://github.com/Kunalkh05/hackathon-project-CodeVengers"
    }
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-16 w-full my-auto pointer-events-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <div className="flex gap-3 text-sm">
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
              <p className="text-white/80 mb-4 text-base leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
