import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

import heroImg from "../assets/hero.png"
import heroImg1 from "../assets/p-1.png"
import heroImg2 from "../assets/p-2.png"
import heroImg3 from "../assets/p-3.png"
import heroImg4 from "../assets/p-4.png"
import heroImg5 from "../assets/p-5.png"
import heroImg6 from "../assets/p-6.png"
import heroImg7 from "../assets/p-7.png"
import heroImg8 from "../assets/p-8.png"
import heroImg9 from "../assets/p-9.png"

const projects = [
  {
    title: "MERN ECOMMERCE WEBSITE DEMO",
    image: heroImg1,
    liveUrl: "https://ajay-cart.onrender.com",
    category: "mern",
  },
  {
    title: "Food Delivery Website",
    image: heroImg2,
    liveUrl: "https://tomato-ajay.onrender.com",
    category: "react",
  },
  {
    title: "Streamify Website",
    image: heroImg3,
    liveUrl: "https://streamify-ajay.vercel.app",
    category: "mern",
  },
  {
    title: "Student Management System",
    image: heroImg4,
    liveUrl: "https://loyola-tracker.onrender.com",
    category: "mern",
  },
  {
    title: "Green Trendz Ecommerce Store",
    image: heroImg5,
    liveUrl: "https://greentrendz.store",
    category: "mern",
  },
  {
    title: "MERN Notes Application",
    image: heroImg6,
    liveUrl: "https://ajay-notes.onrender.com",
    category: "mern",
  },
  {
    title: "Sitara Personal Assistant",
    image: heroImg7,
    liveUrl: "https://ajay-ai.netlify.app",
    category: "html",
  },
  {
    title: "Job Portal Application",
    image: heroImg8,
    liveUrl: "https://ajay-job.onrender.com",
    category: "react",
  },
  {
    title: "Snake Game Website",
    image: heroImg9,
    liveUrl: "https://snake-ajay.netlify.app",
    category: "html",
  },
  {
    title: "Online Multi Code Editor",
    image: heroImg,
    liveUrl: "https://xavierside.vercel.app",
    category: "mern",
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "MERN Stack", value: "mern" },
    { label: "React", value: "react" },
    { label: "HTML / CSS / JS", value: "html" },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="relative w-full bg-black py-28 overflow-hidden">

      {/* 🔥 CLEAN NORMAL GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground">
            Real-world applications built using scalable architecture and modern stack.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="mt-10 flex gap-4 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeFilter === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.a
                layout
                key={project.title}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card hover:-translate-y-2 transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-[210px] object-cover transform group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                <h3 className="mt-4 text-sm font-medium text-muted-foreground group-hover:text-foreground transition">
                  {project.title}
                </h3>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
