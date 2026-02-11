import { motion } from "framer-motion"
import { Code, Rocket, ShieldCheck, Sparkles } from "lucide-react"
import TrustedBy from '../components/TrustedBy'

const services = [
  {
    icon: Code,
    title: "Custom Website Development",
    desc: "Fast, scalable, and secure websites built using modern frameworks."
  },
  {
    icon: Sparkles,
    title: "UI / UX & SaaS Design",
    desc: "Premium interfaces focused on clarity, usability, and conversions."
  },
  {
    icon: Rocket,
    title: "Startup & Product Launch",
    desc: "From idea to deployment — we help you launch faster."
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Scaling",
    desc: "Ongoing support, optimization, and future-proof scaling."
  }
]

export default function Services() {
  return (
    <>
      <TrustedBy />
      <section className="w-full bg-black py-24" id="services">
        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Everything you need to build a{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                modern web presence
              </span>
            </h2>

            <p className="mt-5 text-gray-400">
              From idea to launch, <span className="text-white">Ajay Technologies</span>{" "}
              delivers digital solutions tailored for growth.
            </p>
          </motion.div>

          {/* SERVICES ROW */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-border bg-card p-6 hover:shadow-xl transition" 
                                 >
                  {/* TOP ICON AREA */}
                  <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-400/10 group-hover:bg-emerald-400/20 transition">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>
    </>
  )
}
