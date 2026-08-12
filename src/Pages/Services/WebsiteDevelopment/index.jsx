import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar";

import {
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineDevicePhoneMobile,
  HiOutlineShoppingCart,
  HiOutlineSquares2X2,
  HiOutlineMegaphone,
  HiOutlineUserCircle,
  HiOutlineCodeBracket,
  HiOutlineMagnifyingGlass,
  HiOutlineLightBulb,
  HiOutlinePaintBrush,
  HiOutlineWrenchScrewdriver,
  HiOutlineBugAnt,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";



export default function WebsiteDevelopment() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">

      <Navbar />

      <section className="pt-17 pb-20 px-6 md:pt-15">
        <div className="mx-auto max-w-7xl text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl font-bold leading-tight md:text-4xl"
          >
            Websites Built to
            <span className="text-blue-500">
              {" "}Grow Your Business
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
            We design and develop modern, responsive websites that help
            businesses establish a strong online presence, connect with
            their audience, and turn visitors into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10"
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
              Start Your Project →
            </Link>
          </motion.div>

        </div>
      </section>


      <section className="px-6 py-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-sm uppercase tracking-[0.5em] text-blue-400">
                WHY A WEBSITE?
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-4xl">
                Your Business
                <br />
                Deserves a
                <span className="text-blue-500">
                  {" "}Digital Home.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-lg leading-8 text-gray-400">
                Your website is often the first interaction a potential
                customer has with your business. A professional online
                presence helps you build credibility, showcase what you
                offer, and make it easier for customers to discover and
                connect with you.
              </p>

              <div
                className="
                  mt-8
                  border-l-2
                  border-blue-500
                  pl-5
                  text-xl
                  font-medium
                  leading-8
                  text-white
                "
              >
                Your customers are already online.
                <br />
                Can they find you?
              </div>

            </motion.div>


            {/* Right - Benefits */}

            <div className="grid gap-5 sm:grid-cols-2">

              <Box
                icon={<HiOutlineGlobeAlt />}
                title="Be Found Online"
                description="Give customers a place to discover your business, services, products, and information anytime, anywhere."
              />

              <Box
                icon={<HiOutlineShieldCheck />}
                title="Build Credibility"
                description="A professional website establishes trust and gives your business a stronger digital presence."
              />

              <Box
                icon={<HiOutlineChartBar />}
                title="Reach More Customers"
                description="Expand beyond your local audience and connect with potential customers across different markets."
              />

              <Box
                icon={<HiOutlineClock />}
                title="Stay Available 24/7"
                description="Your website works around the clock, allowing customers to explore your business outside operating hours."
              />

            </div>

          </div>

        </div>

      </section>

      <section className="px-6 py-13">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >

            <p className="text-sm uppercase tracking-[0.5em] text-blue-400">
              WHAT WE BUILD
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-4xl">
              Websites Built Around
              <span className="text-blue-500">
                {" "}Your Business
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              From a simple business website to a complex digital platform,
              we create tailored web solutions based on your goals, audience,
              and business requirements.
            </p>

          </motion.div>


          {/* Service Cards */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <WebsiteServiceCard
              number="01"
              icon={<HiOutlineDevicePhoneMobile />}
              title="Responsive Business Websites"
              description="Professional websites designed to showcase your company, services, team, and brand across every device."
              ideal="Businesses • Startups • Professionals • Agencies"
            />

            <WebsiteServiceCard
              number="02"
              icon={<HiOutlineShoppingCart />}
              title="E-commerce Websites"
              description="Feature-rich online stores designed to help you sell products, manage orders, and provide a seamless shopping experience."
              ideal="Retailers • Product Brands • Online Businesses"
            />

            <WebsiteServiceCard
              number="03"
              icon={<HiOutlineSquares2X2 />}
              title="Portal & Platform Development"
              description="Custom web portals that connect users, businesses, administrators, and services through powerful digital platforms."
              ideal="Organizations • Membership Platforms "
            />

            <WebsiteServiceCard
              number="04"
              icon={<HiOutlineMegaphone />}
              title="Landing Pages"
              description="High-converting landing pages designed for marketing campaigns, product launches, lead generation, and promotions."
              ideal="Campaigns • Ads • Product Launches"
            />

            <WebsiteServiceCard
              number="05"
              icon={<HiOutlineUserCircle />}
              title="Portfolio & Personal Websites"
              description="Unique websites that showcase your work, portfolio, achievements, and personal brand."
              ideal="Professionals • Creators • Freelancers • Artists"
            />

            <WebsiteServiceCard
              number="06"
              icon={<HiOutlineCodeBracket />}
              title="Custom Web Applications"
              description="Tailored web applications built around specific business workflows, functionality, and operational requirements."
              ideal="Businesses with specialized requirements"
            />

          </div>

        </div>

      </section>


      <section className="px-6 py-5">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-4xl">
              Our Web Development
              <span className="text-blue-500">
                {" "}Process
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              From the first idea to a fully functional website, we follow
              a structured process designed to keep your project clear,
              efficient, and aligned with your goals.
            </p>

          </motion.div>


          {/* Process */}

          <div className="relative mx-auto mt-20 max-w-5xl">

            {/* Vertical Line */}

            <div
              className="
                absolute
                left-6
                top-0
                h-full
                w-px
                bg-gradient-to-b
                from-blue-500/60
                via-blue-500/20
                to-transparent
                md:left-1/2
              "
            />

            <ProcessStep
              number="01"
              icon={<HiOutlineMagnifyingGlass />}
              title="Discovery"
              description="We understand your business, audience, goals, competitors, and website requirements."
              align="left"
            />

            <ProcessStep
              number="02"
              icon={<HiOutlineLightBulb />}
              title="Planning & UX"
              description="We define the website structure, user journey, features, and content requirements."
              align="right"
            />

            <ProcessStep
              number="03"
              icon={<HiOutlinePaintBrush />}
              title="UI Design"
              description="We create the visual experience, including layouts, typography, colors, and responsive designs."
              align="left"
            />

            <ProcessStep
              number="04"
              icon={<HiOutlineWrenchScrewdriver />}
              title="Development"
              description="Our developers transform the designs into a fast, responsive, and functional website."
              align="right"
            />

            <ProcessStep
              number="05"
              icon={<HiOutlineBugAnt />}
              title="Testing"
              description="We test functionality, responsiveness, performance, compatibility, and user experience across all devices."
              align="left"
            />

            <ProcessStep
              number="06"
              icon={<HiOutlineRocketLaunch />}
              title="Launch & Support"
              description="Once everything is ready, we deploy your website and provide ongoing support and maintenance."
              align="right"
            />

          </div>

        </div>

      </section>


    </div>
  );
}

function Box({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-[#111827]
        p-7
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:shadow-[0_0_35px_rgba(37,99,235,.12)]
      "
    >
      <div className="flex items-center gap-4">
      <div
        className="
          flex
          h-8
          w-8
          
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

      <h3 className="text-xl font-semibold  items-center  justify-center">
        {title}
      </h3></div>

      <p className="mt-3 leading-7 text-gray-400">
        {description}
      </p>

    </motion.div>
  );
}


function WebsiteServiceCard({
  number,
  icon,
  title,
  description,
  ideal,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#111827]
        p-7
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(37,99,235,.15)]
      "
    >

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>

      <div className="mt-6 border-t border-white/10 pt-5">

        <p className="text-xs uppercase tracking-wider text-gray-500">
          Ideal For
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-300">
          {ideal}
        </p>

      </div>

    </motion.div>
  );
}


/* =========================================================
   PROCESS STEP
========================================================= */

function ProcessStep({
  number,
  icon,
  title,
  description,
  align,
}) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`
        relative
        mb-16
        flex
        items-center
        md:mb-20
        ${isLeft ? "md:justify-start" : "md:justify-end"}
      `}
    >

      {/* Center Number */}

      <div
        className="
          absolute
          left-0
          z-10
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-blue-500/30
          bg-[#030712]
          text-sm
          font-bold
          text-blue-400
          md:left-1/2
          md:-translate-x-1/2
        "
      >
        {number}
      </div>


      {/* Card */}

      <div
        className={`
          ml-16
          w-full
          rounded-3xl
          border
          border-white/10
          bg-[#111827]
          p-7
          transition-all
          duration-500
          hover:border-blue-500/40
          hover:shadow-[0_0_35px_rgba(37,99,235,.12)]
          md:ml-0
          md:w-[43%]
          ${isLeft ? "md:mr-auto" : "md:ml-auto"}
        `}
      >

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-blue-500/10
              text-xl
              text-blue-400
            "
          >
            {icon}
          </div>

          <h3 className="text-xl font-semibold">
            {title}
          </h3>

        </div>

        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>

      </div>

    </motion.div>
  );
}