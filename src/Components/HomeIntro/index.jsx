import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeIntro() {
  return (
    <section
      className="
        relative
        flex
        min-h--[calc(100vh-80px)]
        items-center
        overflow-hidden
        bg-[#030712]
        px-6 pt-14
        text-white
      "
    >

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/10
          blur-[120px]
        "
      />


      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          text-center
        "
      >

        {/* Small Label */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.5em]
            text-blue-400
          "
        >
          FM NEXA SOLUTIONS
        </motion.p>


        {/* Main Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            mx-auto
            mt-7
            max-w-5xl
            text-5xl
            font-bold
            leading-[1.1]
            tracking-tight
            md:text-6xl
            lg:text-6xl
          "
        >
          One-Stop IT Solutions
          <br />

          <span className="text-blue-500">
            for Your Digital Journey
          </span>
        </motion.h1>


        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-base
            leading-8
            text-gray-400
            md:text-lg
          "
        >
          We help businesses transform ideas into impactful
          digital experiences through technology, creativity,
          and strategic thinking.
        </motion.p>


       


        {/* Button */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="
            mt-10
            flex
            justify-center
          "
        >
          <Link
            to="/about"
            className="
              inline-flex
              items-center
              rounded-full
              bg-white
              px-7
              py-3.5
              font-medium
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-gray-100
            "
          >
            Discover Our Story →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}