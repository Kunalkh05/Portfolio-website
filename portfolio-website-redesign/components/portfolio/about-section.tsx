export function AboutSection() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-y-auto">
      <div className="min-h-full flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-20 text-center pointer-events-auto w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">About Me</h1>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-4 sm:mb-6">
              Hi, I'm <span className="font-semibold text-white">Kunal Vinod Khande</span>.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mb-4 sm:mb-6 font-medium">
              Computer Science student with hands-on experience building and deploying full-stack web applications and AI-integrated products.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              I enjoy turning ideas into real projects using React, Next.js, and Firebase. Currently pursuing B.E. in Computer Science and Engineering, I am seeking a summer internship in AI/ML or Full-Stack Web Development to contribute to real-world projects and deepen my expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
