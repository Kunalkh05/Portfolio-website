export function ResumeSection() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-y-auto">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center my-auto pointer-events-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Resume</h2>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8">
          <p className="text-lg text-white/80 mb-10">
            Download my complete resume to learn more about my education, experience, and qualifications.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-300 text-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}
