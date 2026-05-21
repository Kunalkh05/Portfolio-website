"use client"

import { useState, useEffect, useRef } from "react"
import { ThinkingAnimation } from "@/components/analyze-animation"
import { AbsorptionAnimation } from "@/components/think-animation"
import { ConnectionAnimation } from "@/components/connect-animation"
import { IntenseAnimation } from "@/components/intense-animation"
import { DeepAnimation } from "@/components/deep-animation"
import { TransferAnimation } from "@/components/transfer-animation"
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

type SectionMode = "about" | "skills" | "projects" | "resume" | "experience" | "contact"

const NAV_ITEMS: { value: SectionMode; label: string }[] = [
  { value: "about",      label: "About"      },
  { value: "skills",     label: "Skills"     },
  { value: "projects",   label: "Projects"   },
  { value: "resume",     label: "Resume"     },
  { value: "experience", label: "Experience" },
  { value: "contact",    label: "Contact"    },
]

export default function Page() {
  const [mode, setMode] = useState<SectionMode>("about")
  const [shape, setShape] = useState<ShapeType>("circle")
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.5
    if (shapeAudioRef.current) shapeAudioRef.current.volume = 0.5
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }
  }, [mode])

  useEffect(() => {
    if (shapeAudioRef.current) {
      shapeAudioRef.current.currentTime = 0
      shapeAudioRef.current.play().catch(() => {})
    }
  }, [shape])

  const animationMap: Record<SectionMode, React.ReactNode> = {
    about:      <ThinkingAnimation shape={shape} />,
    skills:     <AbsorptionAnimation shape={shape} />,
    projects:   <ConnectionAnimation shape={shape} />,
    resume:     <IntenseAnimation shape={shape} />,
    experience: <DeepAnimation shape={shape} />,
    contact:    <TransferAnimation shape={shape} />,
  }

  const contentMap: Record<SectionMode, React.ReactNode> = {
    about:      <AboutSection />,
    skills:     <SkillsSection />,
    projects:   <ProjectsSection />,
    resume:     <ResumeSection />,
    experience: <ExperienceSection />,
    contact:    <ContactSection />,
  }

  const transition = { duration: prefersReducedMotion ? 0.01 : 0.3 }
  const contentTransition = { duration: prefersReducedMotion ? 0.01 : 0.3, ease: "easeInOut" }
  const yOffset = prefersReducedMotion ? 0 : 10

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Custom cursor — hidden on touch devices */}
      {!isTouchDevice && <CustomCursor />}

      <audio ref={audioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/animation-menu-SBSEhsCLzhfXdw8sBI16r613N8tkGr.mp3" preload="auto" />
      <audio ref={shapeAudioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/select-forms-Y6f2sUOHatrkKO1eoSZpRtMTCUUzTD.mp3" preload="auto" />

      {/* Background animation */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`anim-${mode}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
        >
          {animationMap[mode]}
        </motion.div>
      </AnimatePresence>

      {/* Page content */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`content-${mode}`}
          initial={{ opacity: 0, y: yOffset }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -yOffset }}
          transition={contentTransition}
        >
          {contentMap[mode]}
        </motion.div>
      </AnimatePresence>

      {/* Settings button — top-right, not overlapping nav on mobile */}
      <div className="absolute top-4 right-4 z-50 pointer-events-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="bg-black/20 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent w-9 h-9 md:w-10 md:h-10"
              aria-label="Visual style settings"
              onClick={() => playShapeSound()}
            >
              <Settings2 className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-black/30 backdrop-blur-2xl border-white/20 text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] min-w-[140px]"
          >
            <DropdownMenuLabel className="text-white/60 text-xs uppercase tracking-wider">Visual Style</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/10" />
            {(["circle","triangle","square","diamond"] as ShapeType[]).map((s) => {
              const Icon = s === "circle" ? Circle : s === "triangle" ? Triangle : s === "square" ? Square : Diamond
              return (
                <DropdownMenuItem
                  key={s}
                  onClick={() => setShape(s)}
                  className="focus:bg-white/10 focus:text-white cursor-pointer transition-colors duration-150 data-[highlighted]:bg-white/10"
                >
                  <Icon className={`mr-2 h-4 w-4 ${shape === s ? "text-white" : "text-white/60"}`} />
                  <span className={shape === s ? "font-medium capitalize" : "capitalize"}>{s}</span>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Bottom navigation — compact single row on mobile */}
      <nav
        className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-xl"
        aria-label="Portfolio sections"
      >
        <div className="backdrop-blur-2xl bg-black/40 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37),inset_0_1px_0_rgba(255,255,255,0.1)] rounded-2xl p-1 sm:p-1.5 flex justify-center gap-0.5 sm:gap-1">
          {NAV_ITEMS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => { setMode(value); playSound() }}
              aria-label={`Navigate to ${label} section`}
              aria-current={mode === value ? "page" : undefined}
              className={`
                rounded-lg sm:rounded-xl px-2 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-sm font-medium transition-all duration-200 whitespace-nowrap
                focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-transparent
                ${!prefersReducedMotion ? "sm:hover:scale-105 active:scale-95" : ""}
                ${mode === value
                  ? "bg-white/90 text-black shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"}
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
