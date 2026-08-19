import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import techHero from "../../assets/homebanner.png";

export default function HomeIntro() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-80px)]
        overflow-hidden
        bg-[#030712]
        px-6
        py-15
        text-white
        lg:py-16
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
          flex
          min-h-[calc(100vh-160px)]
          max-w-7xl
          items-center
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-2
          "
        >

          <div className="text-center lg:text-left">

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
                mt-6
                text-5xl
                font-bold
                leading-[1.08]
                tracking-tight
                md:text-6xl
                lg:text-6xl
                xl:text-6xl
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
                mt-7
                max-w-xl
                text-base
                leading-8
                text-gray-400
                md:text-lg
                lg:mx-0
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
                mt-9
                flex
                justify-center
                lg:justify-start
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

     <motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1,
    delay: 0.25,
    ease: "easeOut",
  }}
  className="
    relative
    flex
    items-center
    justify-center
  "
>
  {/* Animated Glow */}

  <motion.div
    animate={{
      opacity: [0.25, 0.45, 0.25],
      scale: [0.95, 1.05, 0.95],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      h-[420px]
      w-[420px]
      rounded-full
      bg-blue-600/20
      blur-[100px]
    "
  />

  {/* Hero Image */}

<motion.img
  src={techHero}
  alt="Digital technology solutions"
  className="
    relative
    z-10
    mx-auto
    block
    w-full
    max-w-[700px]
    object-contain
    drop-shadow-[0_0_45px_rgba(37,99,235,.18)]
    lg:-translate-x-12
  "
/>
</motion.div>

        </div>

      </div>

    </section>
  );
}

