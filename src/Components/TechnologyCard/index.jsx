import { motion } from "framer-motion";

export default function TechnologyCard({
  icon,
  title,
  description,
  technologies,
  color,
  delay = 0,
}) {

  const glow = {
    blue: "hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,.18)]",
    purple: "hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,.18)]",
    emerald: "hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,.18)]",
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,.18)]",
    orange: "hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,.18)]",
    pink: "hover:border-pink-500/40 hover:shadow-[0_0_40px_rgba(236,72,153,.18)]",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: .6,
        delay,
      }}
      whileHover={{
        y: -8,
      }}
      className={`
        group
        rounded-3xl
        border
        border-white/10
        bg-[#111827]
        p-5
        transition-all
        duration-500

        ${glow[color]}
      `}
    >

      

      <h3 className="mt-2 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-gray-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        {technologies.map((tech, index) => (

          <motion.span
            key={tech}
            whileHover={{
              y: -4,
            }}
            transition={{
              delay: index * .05,
            }}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-gray-300

              transition-all
              duration-300

              hover:border-blue-500/40
              hover:bg-blue-500/10
              hover:text-white
            "
          >
            {tech}
          </motion.span>

        ))}

      </div>

    </motion.div>
  );
}