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
    "Team Collaboration",
    "Problem-Solving",
    "Adaptability",
    "Eagerness to contribute"
  ]

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-y-auto">
      <div className="min-h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 py-10 sm:py-16 pb-20 w-full pointer-events-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-12 text-center">Education & Coursework</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
            {/* Education card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-400/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                  2024 — 2028
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white mt-2.5 sm:mt-4 mb-1.5 sm:mb-2">B.E. in Computer Science and Engineering</h3>
                <p className="text-white/80 text-xs sm:text-lg">JD College of Engineering and Management, Nagpur</p>
              </div>
              <div className="mt-4 sm:mt-8 border-t border-white/10 pt-3 sm:pt-4">
                <p className="text-white/60 text-[10px] sm:text-sm">Academic Standing</p>
                <p className="text-white font-bold text-lg sm:text-2xl mt-0.5 sm:mt-1">GPA: 7.6 / 10</p>
              </div>
            </div>

            {/* Coursework + Soft Skills */}
            <div className="space-y-3 sm:space-y-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3.5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                <h4 className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {coursework.map((course, index) => (
                    <span key={index} className="bg-white/15 text-white/90 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3.5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                <h4 className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-3">Soft Skills & Focus</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {softSkills.map((skill, index) => (
                    <span key={index} className="bg-white/15 text-white/90 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-sm border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
