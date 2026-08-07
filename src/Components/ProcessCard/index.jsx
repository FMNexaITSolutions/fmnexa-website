import { motion } from "framer-motion";

export default function ProcessCard({
  step,
  title,
  description,
  icon,
  align = "left",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: align === "left" ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
      }}
      className={`
        group
        relative
        w-full
        max-w-md
        rounded-3xl
        border
        border-white/10
        bg-[#111827]
        p-8
        transition-all
        duration-500

        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(37,99,235,.18)]
      `}
    >
       {/* Header */}

<div className="flex items-center gap-4">

  {/* Step Number */}

  <span
    className="
      text-xl
      font-bold
      text-white/30
      tracking-wider
      transition-all
      duration-500

      group-hover:text-blue-400
    "
  >
    {step}
  </span>

  {/* Icon */}

  <div
    className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-lg
      bg-blue-500/10
      text-lg
      text-blue-400

      transition-all
      duration-500

      group-hover:scale-110
      group-hover:rotate-6
    "
  >
    {icon}
  </div>

</div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-semibold">
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4
          leading-8
          text-gray-400
        "
      >
        {description}
      </p>
    </motion.div>
  );
}