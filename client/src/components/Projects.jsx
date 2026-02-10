import { motion } from "framer-motion"
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
    },
    {
        title: "Food Delivery Website",
        image: heroImg2,
        liveUrl: "https://tomato-ajay.onrender.com",
    },
    {
        title: "Streamify Website",
        image: heroImg3,
        liveUrl: "https://streamify-ajay.vercel.app",
    },
    {
        title: "Student Management System",
        image: heroImg4,
        liveUrl: "https://loyola-tracker.onrender.com",
    },
    {
        title: "Green Trendz Ecommerce Store", 
        image: heroImg5,
        liveUrl: "https://greentrendz.store",
    },
    {
        title: "MERN Notes Application",
        image: heroImg6,
        liveUrl: "https://ajay-notes.onrender.com",
    },
    {
        title: "Sitara Personal Assistant",
        image: heroImg7,
        liveUrl: "https://ajay-ai.netlify.app",
    },
    {
        title: "Job Portal Application",
        image: heroImg8,
        liveUrl: "https://ajay-job.onrender.com",
    },
    {
        title: "Snake Game Website",
        image: heroImg9,
        liveUrl: "https://snake-ajay.netlify.app",
    },
    {
        title: "Online Multi Code Editor",
        image: heroImg,
        liveUrl: "https://xavierside.vercel.app",
    },
]

export default function Projects() {
    return (
        <section className="relative w-full bg-black py-28 overflow-hidden">

            {/* GRID BACKGROUND */}
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Web Developed{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Real-world websites and products built for performance, scale, and impact.
                    </p>
                </motion.div>

                {/* PROJECTS GRID */}
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, i) => (
                        <motion.a
                            key={i}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className="group block"
                        >
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 hover:border-emerald-400/40 transition">

                                {/* IMAGE */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-[200px] object-cover transform group-hover:scale-105 transition duration-500"
                                />

                                {/* HOVER OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                            </div>

                            {/* TITLE */}
                            <h3 className="mt-4 text-sm font-medium text-gray-300 group-hover:text-white transition">
                                {project.title}
                            </h3>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
