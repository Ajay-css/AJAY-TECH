import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-40 pb-32 text-foreground">

      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map(i => (
              <Avatar key={i} className="h-8 w-8 border border-border">
                <AvatarImage src={`https://i.pravatar.cc/100?img=${i}`} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </div>

          <div className="text-sm font-medium text-emerald-500 flex">
            ★★★★★
            <span className="ml-2 text-muted-foreground">
              Trusted by 100+ professionals
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight md:text-6xl"
        >
          We build modern websites that{" "}
          <span className="text-emerald-500">grow your business</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Ajay Technologies helps startups and businesses build scalable,
          high-performance digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center"
        >
          <Button size="lg" className="rounded-full px-8">
            Get your website built →
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8"
          >
            View our work
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
