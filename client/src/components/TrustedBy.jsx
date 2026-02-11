import { motion } from "framer-motion"

const brands = [
  "St.Xaviers Higher Secondary School",
  "Green Trendz",
  "Xaviers IDE",
  "Sitara",
  "Zara AI",
  "Saas Team",
]

const TrustedBy = () => {
  return (
    <section className="relative overflow-hidden bg-background py-6 text-foreground">
      <p className="mb-6 text-center text-sm text-muted-foreground">
        Trusted by teams and creators worldwide
      </p>

      <div className="relative">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex w-max gap-16 px-6"
        >
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-lg font-semibold text-muted-foreground"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBy
