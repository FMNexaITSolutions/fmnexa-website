import { motion } from "framer-motion";

import {FaPlane,FaGraduationCap,FaStore,FaUsers,FaHouse,FaLightbulb, FaHeartPulse, FaTruck,
} from "react-icons/fa6";

const industries = [
  {
    title: "Travel & Hospitality",
    icon: <FaPlane />,
  },
  {
    title: "Education & E-learning",
    icon: <FaGraduationCap />,
  },
  {
    title: "Retail & E-commerce",
    icon: <FaStore />,
  },
  {
    title: "Social Networking",
    icon: <FaUsers />,
  },
  {
    title: "Real Estate",
    icon: <FaHouse />,
  },
  {
    title: "Professional Services",
    icon: <FaLightbulb />,
  },
  {
    title: "Healthcare & Fitness",
    icon: <FaHeartPulse />,
  },
  {
    title: "Logistics & Distribution",
    icon: <FaTruck />,
  },
];

export default function Industries() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030712]
        px-6
        py-28
        text-white
      "
    >

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/5
          blur-[130px]
        "
      />


      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.35em]
              text-blue-400
            "
          >
            INDUSTRIES WE SERVE
          </p>


          <h2
            className="mt-5  text-4xl font-bold  tracking-tight md:text-4xl">
            Solutions Built for
            <span className="text-blue-500">
              {" "}Different Industries
            </span>
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-gray-400
              md:text-lg
            "
          >
            We help businesses across industries build meaningful
            digital experiences and grow their online presence.
          </p>

        </motion.div>


        {/* Industry Cards */}

        <div
          className="
            mt-16
            grid
            grid-cols-2
            gap-4
            md:grid-cols-3
            lg:grid-cols-4
          "
        >

          {industries.map((industry, index) => (

            <motion.div
              key={industry.title}

              initial={{
                opacity: 0,
                y: 25,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                margin: "-60px",
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}

              whileHover={{
                y: -6,
              }}

              className="
                group
                flex
                min-h-[170px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-[#0b1120]
                px-5
                py-8
                text-center
                transition-all
                duration-500
                hover:border-blue-500/40
                hover:bg-[#0d1628]
                hover:shadow-[0_0_35px_rgba(37,99,235,.12)]
              "
            >

              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-500/10
                  text-2xl
                  text-blue-400
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-blue-500/15
                "
              >
                {industry.icon}
              </div>


              {/* Industry Name */}

              <h3
                className="
                  mt-5
                  text-sm
                  font-medium
                  leading-6
                  text-gray-200
                  transition-colors
                  duration-300
                  group-hover:text-white
                  md:text-base
                "
              >
                {industry.title}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}