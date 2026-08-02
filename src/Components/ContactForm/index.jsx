import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    
     <motion.div
        initial={{
            opacity: 0,
            x: -100,
            filter: "blur(12px)",
        }}
        whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
        }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
            duration: 1.2,
            ease: [0.2, 1.3, 0.5, 1.2],
        }}
      className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
    >

      <h2
        className="text-3xl font-bold"
        style={{ fontFamily: "Space Grotesk" }}
      >
        Send us a Message
      </h2>

      <p className="mt-3 text-gray-400">
        Fill out the form below and we'll get back to you shortly.
      </p>

      <form className="mt-10 space-y-6">

        {/* Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-2xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-2xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-2xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Message
          </label>

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-500"
          />
        </div>

        <button
          className="
          w-full
          rounded-full
          bg-white
          py-4
          font-semibold
          text-black
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]
          "
        >
          Let's Build Together →
        </button>

      </form>
    </motion.div>
  );
}
