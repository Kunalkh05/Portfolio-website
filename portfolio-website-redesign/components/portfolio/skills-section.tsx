export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend & UI",
      skills: ["React.js", "Next.js", "HTML5 & CSS3", "Tailwind CSS", "shadcn/ui", "Radix UI", "Framer Motion"],
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "Firebase (Auth)", "Firestore", "Cloud Storage"],
    },
    {
      title: "AI/ML & Tools",
      skills: ["ML Concepts", "Supervised Learning", "Neural Networks", "Git & GitHub", "Vite", "Vercel", "VS Code"],
    },
  ]

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-y-auto">
      <div className="min-h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-10 sm:py-16 pb-20 w-full pointer-events-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-12 text-center">Skills</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-white/90 border-b border-white/20 pb-1.5 sm:pb-2">
                  {category.title}
                </h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-1.5 sm:p-3 text-center hover:bg-white/20 transition-all duration-300"
                    >
                      <p className="text-white font-medium text-[11px] sm:text-sm">{skill}</p>
                    </div>
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
