export function ExperienceSection() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-y-auto">
      <div className="max-w-3xl mx-auto px-6 py-16 w-full my-auto pointer-events-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Experience</h2>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Student Developer</h3>
          <p className="text-white/60 text-lg mb-6">Academic & Self-Directed Projects</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-white text-xl mt-1">•</span>
              <p className="text-white/80 text-lg">Built and maintained websites for college events</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-white text-xl mt-1">•</span>
              <p className="text-white/80 text-lg">Collaborated with team members on various projects</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-white text-xl mt-1">•</span>
              <p className="text-white/80 text-lg">Participated in coding clubs and tech activities</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
