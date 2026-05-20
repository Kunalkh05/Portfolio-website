"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    return (
        <motion.div
            className="fixed pointer-events-none z-10 mix-blend-screen"
            animate={{
                x: mousePosition.x - 200,
                y: mousePosition.y - 200,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
            }}
            style={{
                width: 400,
                height: 400,
                background: 'radial-gradient(circle, rgba(100, 149, 237, 0.15) 0%, rgba(138, 43, 226, 0.08) 40%, transparent 70%)',
                filter: 'blur(20px)',
            }}
        />
    )
}
