"use client"

import { Download } from "lucide-react"

export function ResumeSection() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-y-auto">
      <div className="min-h-full flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-3 sm:px-6 py-8 sm:py-12 pb-20 text-center pointer-events-auto w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 gap-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Resume</h2>
            <a
              href="/resume.pdf"
              download="Kunal_Vinod_Khande_Resume.pdf"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm sm:text-base active:scale-[0.98] shadow-lg"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </a>
          </div>

          {/* Embedded PDF viewer */}
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
            <iframe
              src="/resume.pdf"
              title="Kunal Vinod Khande - Resume"
              className="w-full h-[60vh] sm:h-[70vh] md:h-[75vh] border-0"
            />
          </div>

          {/* Fallback for mobile browsers that can't render PDF inline */}
          <p className="text-white/50 text-xs mt-3">
            Can&apos;t see the resume? <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">Open in new tab</a>
          </p>
        </div>
      </div>
    </div>
  )
}
