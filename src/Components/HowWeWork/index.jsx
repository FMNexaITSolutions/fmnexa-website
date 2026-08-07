import { motion } from "framer-motion";

import ProcessTimeline from "../ProcessTimeline";

export default function ProcessSection() {
  return (
    <section className="px-6 py-1 bg-[#030712] overflow-hidden">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.5em] text-blue-400 text-sm">
            HOW WE WORK
          </p>

          <h2
            className="mt-6 text-5xl md:text-5xl font-bold leading-tight"
          >
            Turning Ideas Into
            <br />
            Digital Success
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            Every successful project follows a proven process.
            From understanding your vision to launching your
            digital solution, our workflow ensures quality,
            transparency, and long-term success.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="mt-13">
          <ProcessTimeline />
        </div>

      </div>

    </section>
  );
}