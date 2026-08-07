import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";

export default function CTAServices() {
  return (
    <section className="bg-[#030712] px-6 py-10">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#111827]
          via-[#0f172a]
          to-[#111827]
          px-8
          py-20
          text-center
          md:px-20
        "
      >

        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-blue-500/20
            blur-[120px]
          "
        />

        {/* Content */}

        <div className="relative z-10">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              text-sm
              uppercase
              tracking-[0.5em]
              text-blue-400
            "
          >
            LET'S BUILD TOGETHER
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-5xl md:text-5xl font-bold leading-tight"
          >
            Ready to Build
            <br />
            Something Amazing?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            Whether you're launching a new website, building a mobile
            application, or scaling your online business, FM Nexa is
            ready to turn your vision into powerful digital experiences.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="
              mt-14
              flex
              flex-col
              items-center
              justify-center
              gap-5
              sm:flex-row
            "
          >

            <a
              href="https://calendly.com/fmnexasolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-blue-600
                px-8
                py-4
                font-medium
                transition-all
                duration-300

                hover:scale-105
                hover:bg-blue-500
              "
            >
              <FaCalendarAlt />
              Book an Inquiry call
            </a>

            <Link
              to="/contact"
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                px-8
                py-4
                font-medium
                transition-all
                duration-300

                hover:border-blue-500/40
                hover:bg-white/5
                hover:scale-105
              "
            >
              Start Your Project
              <HiArrowRight />
            </Link>

          </motion.div>

          {/* Bottom Text */}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
              mt-10
              text-sm
              text-gray-500
            "
          >
            No commitment • Free consultation • Fast response
          </motion.p>

        </div>

      </motion.div>

    </section>
  );
}