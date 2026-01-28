export function ProjectsSection() {
  const projects = [
    {
      title: "Student-Centric Digital Marketplace",
      description: "A platform for students to buy and sell used academic books.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Event Management Website",
      description: "Website for a college tech event with registration forms.",
      technologies: ["HTML", "CSS", "Google Forms"],
    },
    {
      title: "AI Chatbot (Beginner Level)",
      description: "Integrated a basic AI chatbot into a web application.",
      technologies: ["Python", "JavaScript"],
    },
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-16 w-full my-auto pointer-events-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-white/80 mb-4 text-lg">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
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
