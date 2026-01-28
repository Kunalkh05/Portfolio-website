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
    { label: "Email", value: "ayush@example.com", icon: "✉" },
    { label: "GitHub", value: "github.com/ayush", icon: "◉" },
    { label: "LinkedIn", value: "linkedin.com/in/ayush", icon: "in" },
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-y-auto">
      <div className="max-w-2xl mx-auto px-6 py-16 w-full my-auto pointer-events-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {contactLinks.map((link, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
              <p className="text-white/60 text-sm mb-1">{link.label}</p>
              <p className="text-white font-medium break-all text-sm">{link.value}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
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
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-300"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  )
}
