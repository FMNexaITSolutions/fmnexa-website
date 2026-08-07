import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ServiceCard({
  icon,
  title,
  description,
  link ,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        h-full
      "
    >
      <Link
        to={link}
        className="
          flex
          h-full
          flex-col
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-8
          transition-all
          duration-500

          hover:border-blue-500/40
          hover:bg-white/[0.06]
          hover:shadow-[0_0_40px_rgba(37,99,235,.12)]
        "
      >
        {/* Icon */}

        <div
          className="
            mb-10
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-white/5
            text-3xl
            text-blue-400

            transition-transform
            duration-500

            group-hover:rotate-6
            group-hover:scale-110
          "
        >
          {icon}
        </div>

        {/* Title */}

        <h3 className="text-3xl font-semibold">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-5 leading-8 text-gray-400">
          {description}
        </p>

        {/* Bottom */}

        <div className="mt-auto flex items-center justify-between pt-10">

          <span
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-blue-400
            "
          >
            Learn More
          </span>

          <HiArrowUpRight
            className="
              text-2xl
              transition-transform
              duration-300

              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />

        </div>

      </Link>
    </motion.div>
  );
}