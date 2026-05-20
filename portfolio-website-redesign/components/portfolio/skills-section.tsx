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
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-y-auto">
      <div className="max-w-5xl mx-auto px-6 py-16 w-full my-auto pointer-events-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-white/90 border-b border-white/20 pb-2">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center hover:bg-white/20 transition-all duration-300"
                  >
                    <p className="text-white font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
