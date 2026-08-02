import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactCard({
  icon,
  title,
  subtitle,
  href,
}) {
  return (
    <motion.a
      href={href}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      group
      flex
      items-center
      justify-between
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-5
      transition-all
      duration-300
      hover:border-blue-500/40
      hover:bg-white/10
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-blue-500/15
          text-xl
          text-blue-400
          "
        >
          {icon}
        </div>

        <div>
          <h3 className="font-semibold">{title}</h3>

          <p className="text-sm text-gray-400">
            {subtitle}
          </p>
        </div>
      </div>

      <FiArrowUpRight
        className="
        text-xl
        transition-transform
        duration-300
        group-hover:rotate-45
        "
      />
    </motion.a>
  );
}