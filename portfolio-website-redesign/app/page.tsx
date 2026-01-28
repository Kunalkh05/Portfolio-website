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

export type ShapeType = "circle" | "triangle" | "square" | "diamond"

export default function Page() {
  const [mode, setMode] = useState<"about" | "skills" | "projects" | "resume" | "experience" | "contact">("about")
  const [textKey, setTextKey] = useState(0)
  const [shape, setShape] = useState<ShapeType>("circle")
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const shapeAudioRef = useRef<HTMLAudioElement | null>(null)

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
    <div className="relative w-full h-screen">
      <audio ref={audioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/animation-menu-SBSEhsCLzhfXdw8sBI16r613N8tkGr.mp3" preload="auto" />
      <audio ref={shapeAudioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/select-forms-Y6f2sUOHatrkKO1eoSZpRtMTCUUzTD.mp3" preload="auto" />

      {mode === "about" ? (
        <ThinkingAnimation shape={shape} />
      ) : mode === "skills" ? (
        <AbsorptionAnimation shape={shape} />
      ) : mode === "projects" ? (
        <ConnectionAnimation shape={shape} />
      ) : mode === "resume" ? (
        <IntenseAnimation shape={shape} />
      ) : mode === "experience" ? (
        <DeepAnimation shape={shape} />
      ) : (
        <TransferAnimation shape={shape} />
      )}

      {mode === "about" && <AboutSection />}
      {mode === "skills" && <SkillsSection />}
      {mode === "projects" && <ProjectsSection />}
      {mode === "resume" && <ResumeSection />}
      {mode === "experience" && <ExperienceSection />}
      {mode === "contact" && <ContactSection />}

      <div className="absolute top-6 right-6 z-50 pointer-events-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white">
              <Settings2 className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white/10 backdrop-blur-xl border-white/20 text-white">
            <DropdownMenuLabel>Visual Style</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/20" />
            <DropdownMenuItem onClick={() => setShape("circle")} className="focus:bg-white/20 focus:text-white cursor-pointer">
              <Circle className="mr-2 h-4 w-4" /> Circle
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setShape("triangle")} className="focus:bg-white/20 focus:text-white cursor-pointer">
              <Triangle className="mr-2 h-4 w-4" /> Triangle
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setShape("square")} className="focus:bg-white/20 focus:text-white cursor-pointer">
              <Square className="mr-2 h-4 w-4" /> Square
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setShape("diamond")} className="focus:bg-white/20 focus:text-white cursor-pointer">
              <Diamond className="mr-2 h-4 w-4" /> Diamond
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <Tabs
          value={mode}
          onValueChange={(value) => setMode(value as "about" | "skills" | "projects" | "resume" | "experience" | "contact")}
        >
          <TabsList className="backdrop-blur-xl border-white/10 !bg-white/5 border border-solid opacity-80">
            <TabsTrigger
              value="about"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="resume"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Resume
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Contact
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
