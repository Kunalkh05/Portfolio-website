"use client"

import { useState, useEffect, useRef } from "react"
import { ThinkingAnimation } from "@/components/analyze-animation"
import { AbsorptionAnimation } from "@/components/think-animation"
import { ConnectionAnimation } from "@/components/connect-animation"
import { IntenseAnimation } from "@/components/intense-animation"
import { DeepAnimation } from "@/components/deep-animation"
import { TransferAnimation } from "@/components/transfer-animation"
import { AnimatedText } from "@/components/animated-text"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { CustomCursor } from "@/components/custom-cursor"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Settings2, Circle, Triangle, Square, Diamond } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export type ShapeType = "circle" | "triangle" | "square" | "diamond"

export default function Page() {
  const [mode, setMode] = useState<"about" | "skills" | "projects" | "resume" | "experience" | "contact">("about")
  const [textKey, setTextKey] = useState(0)
  const [shape, setShape] = useState<ShapeType>("circle")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const shapeAudioRef = useRef<HTMLAudioElement | null>(null)

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }
  }

  const playShapeSound = () => {
    if (shapeAudioRef.current) {
      shapeAudioRef.current.currentTime = 0
      shapeAudioRef.current.play().catch(() => {})
    }
  }

  // Detect user's motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
    }
    if (shapeAudioRef.current) {
      shapeAudioRef.current.volume = 0.5
    }
  }, [])

  useEffect(() => {
    setTextKey((prev) => prev + 1)
  }, [mode])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
      })
    }
  }, [mode])

  useEffect(() => {
    if (shapeAudioRef.current) {
      shapeAudioRef.current.currentTime = 0
      shapeAudioRef.current.play().catch(() => {
        // Handle autoplay restrictions
      })
    }
  }, [shape])

  const getModeName = () => {
    switch (mode) {
      case "about":
        return "About"
      case "skills":
        return "Skills"
      case "projects":
        return "Projects"
      case "resume":
        return "Resume"
      case "experience":
        return "Experience"
      case "contact":
        return "Contact"
    }
  }

  return (
    <div className="relative w-full h-screen bg-black">
      <CustomCursor />
      <audio ref={audioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/animation-menu-SBSEhsCLzhfXdw8sBI16r613N8tkGr.mp3" preload="auto" />
      <audio ref={shapeAudioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/select-forms-Y6f2sUOHatrkKO1eoSZpRtMTCUUzTD.mp3" preload="auto" />

      <AnimatePresence mode="sync">
        {mode === "about" ? (
          <motion.div
            key="about-anim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
          >
            <ThinkingAnimation shape={shape} />
          </motion.div>
        ) : mode === "skills" ? (
          <motion.div
            key="skills-anim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
          >
            <AbsorptionAnimation shape={shape} />
          </motion.div>
        ) : mode === "projects" ? (
          <motion.div
            key="projects-anim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
          >
            <ConnectionAnimation shape={shape} />
          </motion.div>
        ) : mode === "resume" ? (
          <motion.div
            key="resume-anim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
          >
            <IntenseAnimation shape={shape} />
          </motion.div>
        ) : mode === "experience" ? (
          <motion.div
            key="experience-anim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
          >
            <DeepAnimation shape={shape} />
          </motion.div>
        ) : (
          <motion.div
            key="contact-anim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
          >
            <TransferAnimation shape={shape} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="sync">
        {mode === "about" && (
          <motion.div
            key="about-content"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: "easeInOut" }}
          >
            <AboutSection />
          </motion.div>
        )}
        {mode === "skills" && (
          <motion.div
            key="skills-content"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: "easeInOut" }}
          >
            <SkillsSection />
          </motion.div>
        )}
        {mode === "projects" && (
          <motion.div
            key="projects-content"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: "easeInOut" }}
          >
            <ProjectsSection />
          </motion.div>
        )}
        {mode === "resume" && (
          <motion.div
            key="resume-content"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: "easeInOut" }}
          >
            <ResumeSection />
          </motion.div>
        )}
        {mode === "experience" && (
          <motion.div
            key="experience-content"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: "easeInOut" }}
          >
            <ExperienceSection />
          </motion.div>
        )}
        {mode === "contact" && (
          <motion.div
            key="contact-content"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: "easeInOut" }}
          >
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-6 right-6 z-50 pointer-events-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-black/20 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="Visual style settings"
              onClick={() => playShapeSound()}
            >
              <Settings2 className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-black/30 backdrop-blur-2xl border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] min-w-[160px]"
          >
            <DropdownMenuLabel className="text-white/60 text-xs uppercase tracking-wider">Visual Style</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem
              onClick={() => setShape("circle")}
              className="focus:bg-white/10 focus:text-white cursor-pointer transition-colors duration-150 data-[highlighted]:bg-white/10"
            >
              <Circle className={`mr-2 h-4 w-4 ${shape === "circle" ? "text-white" : "text-white/60"}`} />
              <span className={shape === "circle" ? "font-medium" : ""}>Circle</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setShape("triangle")}
              className="focus:bg-white/10 focus:text-white cursor-pointer transition-colors duration-150 data-[highlighted]:bg-white/10"
            >
              <Triangle className={`mr-2 h-4 w-4 ${shape === "triangle" ? "text-white" : "text-white/60"}`} />
              <span className={shape === "triangle" ? "font-medium" : ""}>Triangle</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setShape("square")}
              className="focus:bg-white/10 focus:text-white cursor-pointer transition-colors duration-150 data-[highlighted]:bg-white/10"
            >
              <Square className={`mr-2 h-4 w-4 ${shape === "square" ? "text-white" : "text-white/60"}`} />
              <span className={shape === "square" ? "font-medium" : ""}>Square</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setShape("diamond")}
              className="focus:bg-white/10 focus:text-white cursor-pointer transition-colors duration-150 data-[highlighted]:bg-white/10"
            >
              <Diamond className={`mr-2 h-4 w-4 ${shape === "diamond" ? "text-white" : "text-white/60"}`} />
              <span className={shape === "diamond" ? "font-medium" : ""}>Diamond</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <Tabs
          value={mode}
          onValueChange={(value) => {
            setMode(value as "about" | "skills" | "projects" | "resume" | "experience" | "contact")
            playSound()
          }}
        >
          <TabsList
            className="backdrop-blur-2xl bg-black/30 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37),inset_0_1px_0_rgba(255,255,255,0.1)] rounded-2xl p-1.5 gap-1"
            role="navigation"
            aria-label="Portfolio sections"
          >
            <TabsTrigger
              value="about"
              className={`text-white/80 data-[state=active]:bg-white/90 data-[state=active]:text-black data-[state=active]:shadow-lg hover:text-white hover:bg-white/10 transition-all duration-200 ${!prefersReducedMotion && 'hover:scale-105 active:scale-95'} focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl px-4 py-2`}
              aria-label="Navigate to About section"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className={`text-white/80 data-[state=active]:bg-white/90 data-[state=active]:text-black data-[state=active]:shadow-lg hover:text-white hover:bg-white/10 transition-all duration-200 ${!prefersReducedMotion && 'hover:scale-105 active:scale-95'} focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl px-4 py-2`}
              aria-label="Navigate to Skills section"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className={`text-white/80 data-[state=active]:bg-white/90 data-[state=active]:text-black data-[state=active]:shadow-lg hover:text-white hover:bg-white/10 transition-all duration-200 ${!prefersReducedMotion && 'hover:scale-105 active:scale-95'} focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl px-4 py-2`}
              aria-label="Navigate to Projects section"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="resume"
              className={`text-white/80 data-[state=active]:bg-white/90 data-[state=active]:text-black data-[state=active]:shadow-lg hover:text-white hover:bg-white/10 transition-all duration-200 ${!prefersReducedMotion && 'hover:scale-105 active:scale-95'} focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl px-4 py-2`}
              aria-label="Navigate to Resume section"
            >
              Resume
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className={`text-white/80 data-[state=active]:bg-white/90 data-[state=active]:text-black data-[state=active]:shadow-lg hover:text-white hover:bg-white/10 transition-all duration-200 ${!prefersReducedMotion && 'hover:scale-105 active:scale-95'} focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl px-4 py-2`}
              aria-label="Navigate to Experience section"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className={`text-white/80 data-[state=active]:bg-white/90 data-[state=active]:text-black data-[state=active]:shadow-lg hover:text-white hover:bg-white/10 transition-all duration-200 ${!prefersReducedMotion && 'hover:scale-105 active:scale-95'} focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl px-4 py-2`}
              aria-label="Navigate to Contact section"
            >
              Contact
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
