export function ExperienceSection() {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Machine Learning Fundamentals",
    "Computer Networks",
    "Operating Systems"
  ]

  const softSkills = [
    "Quick Learner",
    "Team Collaboration under pressure",
    "Problem-Solving",
    "Adaptability",
    "Eagerness to contribute"
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-16 w-full my-auto pointer-events-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Education & Coursework</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full">
                2024 — 2028
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">B.E. in Computer Science and Engineering</h3>
              <p className="text-white/80 text-lg">JD College of Engineering and Management, Nagpur</p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-4">
              <p className="text-white/60 text-sm">Academic Standing</p>
              <p className="text-white font-bold text-2xl mt-1">GPA: 7.6 / 10</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
              <h4 className="text-lg font-bold text-white mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <span key={index} className="bg-white/15 text-white/90 px-3 py-1.5 rounded-lg text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
              <h4 className="text-lg font-bold text-white mb-3">Soft Skills & Focus</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span key={index} className="bg-white/15 text-white/90 px-3 py-1.5 rounded-lg text-sm border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
