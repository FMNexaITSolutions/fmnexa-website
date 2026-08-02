import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mb-6 uppercase tracking-[0.5em] text-blue-400"
        >
          Get In Touch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .2,
            duration: .8,
          }}
          className="text-5xl font-bold leading-tight md:text-7xl"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Let's Build Your
          <br />
          Next Digital
          <br />
          Experience.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .4,
            duration: .8,
          }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400"
        >
          We'd love to hear about your ideas.
          Whether you're launching a startup,
          redesigning your brand,
          or building custom software,
          FM Nexa is here to help.

        </motion.p>

      </div>

    </section>
  );
}