export function ResumeSection() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-y-auto">
      <div className="min-h-full flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-20 text-center pointer-events-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">Resume</h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 sm:p-8">
            <p className="text-sm sm:text-lg text-white/80 mb-6 sm:mb-10">
              Download my complete resume to learn more about my education, experience, and qualifications.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm sm:text-lg active:scale-[0.98]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
