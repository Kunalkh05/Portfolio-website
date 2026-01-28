export function AboutSection() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-y-auto">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center my-auto pointer-events-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h2>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold text-white">Ayush Khande</span>.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">
            A passionate Computer Science student who loves building things with code and exploring how AI and software systems work behind the scenes.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            I enjoy turning ideas into real projects using Python, JavaScript, and web technologies. My long-term goal is to become an LLM Engineer, working on intelligent systems that help people.
          </p>
        </div>
      </div>
    </div>
  )
}
