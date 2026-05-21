"use client"

import React from "react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 2000)
  }

  const contactLinks = [
    { label: "Email", value: "khandekunal85@gmail.com" },
    { label: "GitHub", value: "github.com/Kunalkh05" },
    { label: "LinkedIn", value: "linkedin.com/in/kunal-khande" },
    { label: "Phone", value: "+91 77099 80370" },
    { label: "Location", value: "Nagpur, Maharashtra" },
  ]

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-y-auto">
      <div className="min-h-full flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-3 sm:px-6 py-10 sm:py-16 pb-20 w-full pointer-events-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-12 text-center">Contact</h2>

          {/* Contact cards — 2 cols on mobile, 3 on sm, all 5 on md+ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1.5 sm:gap-3 mb-4 sm:mb-10">
            {contactLinks.map((link, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2.5 sm:p-4 text-center hover:bg-white/20 transition-all duration-300">
                <p className="text-white/60 text-[10px] sm:text-sm mb-0.5">{link.label}</p>
                <p className="text-white font-medium break-all text-[10px] sm:text-sm leading-tight">{link.value}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3.5 sm:p-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm hover:bg-white/90 transition-all duration-300 active:scale-[0.98]"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
