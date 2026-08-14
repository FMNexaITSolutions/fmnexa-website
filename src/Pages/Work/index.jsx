import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../../Components/Navbar";
import runnerSpikes from "../../assets/runnerspikes.png";

export default function Work() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <section className="px-6 pb-20 pt-32 md:pt-15">

        <div className="mx-auto max-w-7xl text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-sm
              uppercase
              tracking-[0.5em]
              text-blue-400
            "
          >
            OUR PORTFOLIO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className=" mx-auto mt-6 max-w-5xl text-5xl font-bold  leading-tight md:text-4xl">
            Turning Ideas Into
            <span className="text-blue-500">
              {" "}Digital Experiences.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            A glimpse into the digital experiences we've built to
            help businesses establish, grow, and strengthen their
            online presence.
          </motion.p>

        </div>

      </section>

      <section className="px-6">

        <div className="mx-auto max-w-6xl">

          {/* Section heading */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >

      

            <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-bold  leading-tight md:text-4xl">
              Runner Spikes
            </h2>

          </motion.div>


          {/* Project */}

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
    group
    relative
    mx-auto
    w-full
    max-w-4xl
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-[#111827]
    transition-all
    duration-500
    hover:border-blue-500/40
    hover:shadow-[0_0_50px_rgba(37,99,235,.15)]
  "
>
  {/* Background Image */}

  <div
    className="
      absolute
      inset-0
      bg-cover
      bg-center
      transition-transform
      duration-700
      group-hover:scale-105
    "
    style={{
      backgroundImage: `url(${runnerSpikes})`,
    }}
  />

  {/* Dark Overlay */}

  <div
    className="
      absolute
      inset-0
      bg-black/65
      transition-all
      duration-500
      group-hover:bg-black/55
    "
  />

  {/* Content */}

  <div
    className="
      relative
      flex
      min-h-[420px]
      flex-col
      justify-end
      p-7
      md:min-h-[480px]
      md:p-10
    "
  >
    {/* Project Category */}

    <p
      className="
        text-sm
        font-medium
        uppercase
        tracking-[0.25em]
        text-blue-400
      "
    >
      E-Commerce Development
    </p>

    {/* Project Name */}

    <h3
      className="
        mt-3
        text-4xl
        font-bold
        text-white
        md:text-5xl
      "
    >
      Runner Spikes
    </h3>

    {/* Description */}

    <p
      className="
        mt-4
        max-w-xl
        text-base
        leading-7
        text-gray-300
        md:text-lg
      "
    >
      A modern e-commerce platform designed for a growing
      footwear brand, delivering a seamless shopping
      experience across devices.
    </p>

    {/* Technologies */}

    <div
      className="
        mt-6
        flex
        flex-wrap
        gap-2
      "
    >
      {[
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ].map((tech) => (
        <span
          key={tech}
          className="
            rounded-full
            border
            border-white/15
            bg-black/30
            px-3
            py-1.5
            text-xs
            text-gray-200
            backdrop-blur-sm
          "
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Button */}

    <div className="mt-7">
      <a
        href="https://www.runnerspikes.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          rounded-full
          bg-white
          px-6
          py-3
          font-medium
          text-black
          transition-all
          duration-300
          hover:scale-105
        "
      >
        View Live Project →
      </a>
    </div>
  </div>
</motion.div>

        </div>

      </section>


      <section className="px-6 py-28">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mx-auto
            max-w-4xl
            text-center
          "
        >

          <div className="
            mx-auto
            mb-8
            h-px
            w-20
            bg-blue-500/60
          " />

          <p className="
            text-sm
            uppercase
            tracking-[0.5em]
            text-blue-400
          ">
            LET'S BUILD SOMETHING
          </p>

          <h2 className="
            mt-5
            text-4xl
            font-bold
            md:text-4xl
          ">
            Ready to Start
            <span className="text-blue-500">
              {" "}Your Project?
            </span>
          </h2>

          <p className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-gray-400
          ">
            Let's collaborate and bring your vision to life with
            cutting-edge technology.
          </p>


          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex justify-center"
          >

            <Link
              to="/contact"
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
              "
            >
              Let's Talk →
            </Link>

          </motion.div>

        </motion.div>

      </section>


    </div>
  );
}