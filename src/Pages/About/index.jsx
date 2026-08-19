import { motion } from "framer-motion";

import { HiOutlineLightBulb,HiOutlineSparkles,HiOutlineShieldCheck,HiOutlineUserGroup,HiOutlineArrowTrendingUp, HiOutlineRocketLaunch,
} from "react-icons/hi2";

import Navbar from "../../Components/Navbar";

export default function About() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden bg-[#030712]">

      <Navbar />

      <section className="px-6 pb-24 pt-28 md:pt-15">

        <div className="mx-auto max-w-7xl text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-sm
              uppercase
              tracking-[0.5em]
              text-blue-400
            "
          >
            ABOUT FM NEXA
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className=" mx-auto mt-6 max-w-5xl text-5xl font-bold  leading-tight md:text-4xl" >
            Technology That
            <span className="text-blue-500">
              {" "}Moves Businesses Forward.
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            We combine technology, creativity, and digital strategy
            to help businesses turn ideas into meaningful digital
            experiences.
          </motion.p>

        </div>

      </section>

      <section className="px-6 py-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.5em]
                  text-blue-400
                "
              >
                OUR STORY
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-4xl">
                Built Around a<br/>
                <span className="text-blue-500">
                  {" "}Shared Vision
                </span>
              </h2>

              <div className="mt-8 h-px w-24 bg-blue-500/50" />

            </motion.div>


            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg leading-8 text-gray-400"
            >

              <p>
               Founded with a vision to bridge technology, creativity, and business strategy, FM Nexa Solutions is a digital solutions company focused on helping businesses build, strengthen, and transform their digital presence.
              </p>

              <p>
                Our foundation combines expertise in
                <span className="text-gray-200">
                  {" "}Computer Science
                  and Digital Marketing
                </span>
                , bringing together technical capabilities and
                strategic digital thinking. This multidisciplinary
                approach enables us to develop solutions that are
                not only technically sound, but also purposeful and
                aligned with business objectives.
              </p>

              <p>
                From
                <span className="text-gray-200">
                  {" "}web and e-commerce development to mobile applications and digital solutions
                </span>
                , we work with businesses to transform ideas into reliable, engaging, and scalable digital experiences. Our approach focuses on understanding each client's unique requirements and delivering solutions aligned with their goals.
              </p>

              <p className="text-gray-300">
               At FM Nexa Solutions, we aim to be more than a technology provider — we strive to be a trusted digital partner for businesses navigating their next stage of growth.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      <section className="px-6 py-15">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            label="OUR VALUES"
            title={
              <>
                Principles That
                <span className="text-blue-500">
                  {" "}Guide Our Work
                </span>
              </>
            }
            description="Our values shape how we approach technology, collaborate with clients, and build solutions for long-term impact."
          />


          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <ValueCard
              icon={<HiOutlineShieldCheck />}
              number="01"
              title="Quality"
              description="We believe digital solutions should be thoughtfully designed, reliable, scalable, and built to deliver lasting value."
            />

            <ValueCard
              icon={<HiOutlineLightBulb />}
              number="02"
              title="Innovation"
              description="We continuously explore new ideas and technologies to create solutions that help businesses move forward."
            />

            <ValueCard
              icon={<HiOutlineSparkles />}
              number="03"
              title="Transparency"
              description="Clear communication and honest collaboration are at the foundation of every relationship we build."
            />

            <ValueCard
              icon={<HiOutlineUserGroup />}
              number="04"
              title="Partnership"
              description="We work alongside our clients to understand their challenges and develop solutions around their actual business needs."
            />

            <ValueCard
              icon={<HiOutlineArrowTrendingUp />}
              number="05"
              title="Growth"
              description="We design solutions with the future in mind, helping businesses build a digital foundation that can evolve with them."
            />

            <ValueCard
              icon={<HiOutlineRocketLaunch />}
              number="06"
              title="Purpose"
              description="Technology should solve real problems. Every solution we create is driven by a clear business objective."
            />

          </div>

        </div>

      </section>

      <section className="px-6 py-10">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            label="WHERE WE ARE HEADED"
          
          />


          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            {/* Mission */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#111827]
                p-10
                transition-all
                duration-500
                hover:border-blue-500/40
                hover:shadow-[0_0_40px_rgba(37,99,235,.12)]
              "
            >



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
                "
              >
                <HiOutlineRocketLaunch />
              </div>


              <p className="mt-8 text-sm uppercase tracking-[0.3em] text-blue-400">
                Our Mission
              </p>


              <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
                Empowering Businesses Through Digital Solutions
              </h3>


              <p className="mt-6 leading-8 text-gray-400">
                To empower businesses with thoughtful digital solutions
                that combine technology, creativity, and strategy —
                helping them build a stronger online presence and
                achieve meaningful growth.
              </p>

            </motion.div>


            {/* Vision */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#111827]
                p-10
                transition-all
                duration-500
                hover:border-blue-500/40
                hover:shadow-[0_0_40px_rgba(37,99,235,.12)]
              "
            >




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
                "
              >
                <HiOutlineLightBulb />
              </div>


              <p className="mt-8 text-sm uppercase tracking-[0.3em] text-blue-400">
                Our Vision
              </p>


              <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
                A Future Built Through Technology
              </h3>


              <p className="mt-6 leading-8 text-gray-400">
                To build a trusted digital solutions company where
                technology and creativity come together to help
                businesses turn ideas into lasting digital
                experiences. We believe our success is dependent on our client's success.
              </p>

            </motion.div>

          </div>

        </div>

      </section>



      <section className="px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >

          <div className="mx-auto mb-8 h-px w-20 bg-blue-500/60" />

          <p
            className="
              text-2xl
              font-medium
              leading-relaxed
              text-gray-300
              md:text-3xl
            "
          >
            “We believe the right technology doesn't simply
            <span className="text-blue-400">
              {" "}support a business — it helps shape its future.
            </span>
            ”
          </p>

        </motion.div>

      </section>



    </div>
  );
}


function SectionHeading({
  label,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >

      <p className="text-sm uppercase tracking-[0.5em] text-blue-400">
        {label}
      </p>

      <h2 className="mt-5 text-4xl font-bold md:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        {description}
      </p>

    </motion.div>
  );
}


function ValueCard({
  icon,
  number,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.5 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#111827]
        p-8
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:shadow-[0_0_35px_rgba(37,99,235,.12)]
      "
    >

      {/* Background Number */}

      <span
        className="
          absolute
          right-6
          top-2
          text-7xl
          font-bold
          text-white/[0.025]
          transition-all
          duration-500
          group-hover:text-blue-500/[0.05]
        "
      >
        {number}
      </span>


      {/* Icon */}

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-blue-500/10
          text-2xl
          text-blue-400
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        {icon}
      </div>


      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>


      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>

    </motion.div>
  );
}