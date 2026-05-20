export function AboutSection() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-y-auto">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center my-auto pointer-events-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h2>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold text-white">Kunal Vinod Khande</span>.
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6 font-medium">
            Computer Science student with hands-on experience building and deploying full-stack web applications and AI-integrated products.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            I enjoy turning ideas into real projects using React, Next.js, and Firebase. Currently pursuing B.E. in Computer Science and Engineering, I am seeking a summer internship in AI/ML or Full-Stack Web Development to contribute to real-world projects and deepen my expertise.
          </p>
        </div>
      </div>
    </div>
  )
}
