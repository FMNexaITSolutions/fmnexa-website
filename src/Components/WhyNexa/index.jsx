import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiOutlineBriefcase,HiOutlineChip,HiOutlineViewGrid, HiOutlineTrendingUp,} from "react-icons/hi";

const benefits = [
  {
    number: "01",
    icon: <HiOutlineBriefcase />,
    title: "Business-Focused",
    description:
      "We understand your requirements first and build solutions around your business goals.",
  },
  {
    number: "02",
    icon: <HiOutlineChip />,
    title: "Modern Technology",
    description:
      "We use modern and reliable technologies to create fast, secure, and scalable digital experiences.",
  },
  {
    number: "03",
    icon: <HiOutlineViewGrid />,
    title: "End-to-End Solutions",
    description:
      "From websites and e-commerce to Shopify and mobile applications, we support your digital journey.",
  },
  {
    number: "04",
    icon: <HiOutlineTrendingUp />,
    title: "Built for Growth",
    description:
      "Our solutions are designed to adapt as your business grows and your digital needs evolve.",
  },
];

const services = [
  "Website Development",
  "Shopify",
  "E-commerce",
  "Mobile Apps",
];

export default function WhyNexa() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030712]
        px-6
        py-18
        text-white
      "
    >

      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-1/3
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-600/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-[-150px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-500/5
          blur-[120px]
        "
      />

      {/* Main Container */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}

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
              tracking-[0.5em]
              text-blue-400
            "
          >
            WHY FM NEXA
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              tracking-tight
              md:text-4xl
            "
          >
            Technology That Works
            <span className="text-blue-500">
              {" "}for Your Business
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
            We combine technology, creativity, and business
            understanding to create digital solutions that are
            practical, scalable, and built around your goals.
          </p>
        </motion.div>


        {/* Benefit Cards */}

        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
          "
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#0b1120]
                p-7
                transition-all
                duration-500
                hover:border-blue-500/30
                hover:shadow-[0_0_35px_rgba(37,99,235,.10)]
              "
            >

              {/* Number */}

                          <span
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-3
                  z-0
                  text-5xl
                  font-bold
                  leading-none
                  text-white/[0.035]
                  transition-all
                  duration-500
                  group-hover:text-blue-500/[0.07]
                "
              >
                {benefit.number}
              </span>


              {/* Icon + Title */}

              <div className="relative z-10 flex min-w-0 items-center gap-4">
  
  <div
    className="
      flex
      h-11
      w-11
      shrink-0
      items-center
      justify-center
      rounded-xl
      bg-blue-500/10
      text-xl
      text-blue-400
      transition-all
      duration-500
      group-hover:scale-105
      group-hover:bg-blue-500/15
    "
  >
    {benefit.icon}
  </div>

  <h3
    className="
      min-w-0
      text-lg
      font-semibold
      leading-7
      text-white
      sm:text-xl
    "
  >
    {benefit.title}
  </h3>

</div>

{/* Description */}
<p
  className="
    relative
    z-10
    mt-5
    max-w-lg
    text-sm
    leading-7
    text-gray-400
  "
>
  {benefit.description}
</p>

            </motion.div>
          ))}
        </div>


        {/* Services Row */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-16 text-center"
        >

          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-gray-500
            "
          >
            Our Core Services
          </p>


          <div
            className="
              mx-auto
              mt-6
              flex
              max-w-4xl
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >

            {services.map((service, index) => (
              <div
                key={service}
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-2.5
                    text-sm
                    text-gray-300
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    hover:text-blue-400
                  "
                >
                  {service}
                </span>

                {index !== services.length - 1 && (
                  <span className="text-gray-700">
                    •
                  </span>
                )}

              </div>
            ))}

          </div>


          {/* Explore Services */}

          <Link
            to="/services"
            className="
              mt-8
              inline-flex
              items-center
              text-sm
              font-medium
              text-blue-400
              transition-all
              duration-300
              hover:gap-2
              hover:text-blue-300
            "
          >
            Explore Our Services
            <span className="ml-1">
              →
            </span>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}