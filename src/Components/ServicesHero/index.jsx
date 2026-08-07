import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="pt-17 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 uppercase tracking-[0.5em] text-blue-400"
        >
          Our Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl md:text-5xl font-bold leading-tight"
        >
          Building Digital Solutions 
          <br />
          That Drive Growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto text-gray-400 text-lg leading-8"
        >
          From stunning websites to scalable e-commerce platforms and
          mobile applications, <br/>we create digital products that help
          businesses grow and stand out.
        </motion.p>

      </div>
    </section>
  );
}