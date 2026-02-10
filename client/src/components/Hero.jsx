import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black pt-40 pb-32 text-white">

      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Avatar key={i} className="h-8 w-8 border border-white/10">
                <AvatarImage src={`https://i.pravatar.cc/100?img=${i}`} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </div>

          <div className="text-sm font-medium text-green-400 flex flex-row">
            <div>★★★★★</div>
            <div className="ml-2 text-white/70">
              Trusted by 100+ professionals
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl font-extrabold leading-tight md:text-6xl"
        >
          We build modern websites that{" "}
          <span className="text-green-400">grow your business</span>.
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
        >
          Ajay Technologies helps startups, businesses and creators design and
          develop high-performance websites with clean UI, modern tech and
          scalable architecture.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="rounded-full bg-green-500 px-8 text-black hover:bg-green-400"
          >
            Get your website built →
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 px-8 text-white backdrop-blur hover:bg-white/10"
          >
            View our work
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
