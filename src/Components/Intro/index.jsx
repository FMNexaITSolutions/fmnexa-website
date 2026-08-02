import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";

export default function Intro({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
        <motion.section
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1.2,
            },
          }}
        >
          {/* Animated Glow */}
          <motion.div
            className="absolute h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1.5,
              opacity: 1,
            }}
            transition={{
              duration: 1.9,
              ease: "easeOut",
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* Logo */}
           <motion.img
            src={logo}
            alt="FM Nexa"
            className="w-64 select-none lg:w-72"
            initial={{
                opacity: 0,
                scale: 0.85,
                filter: "blur(12px)",
                y: 20,
            }}
            animate={{
                opacity: 1,
                scale: [1, 1.03, 1],
                filter: "blur(0px)",
                y: 0,
            }}
            transition={{
                opacity: {
                delay: 0.5,
                duration: 1,
                },
                y: {
                delay: 0.5,
                duration: 1,
                ease: "easeOut",
                },
                filter: {
                delay: 0.5,
                duration: 1,
                },
                scale: {
                delay: 0.5,
                duration: 2.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                },
            }}
            />

            {/* Tagline */}
            <motion.p
              className="mt-8 text-lg uppercase tracking-[0.45em] text-gray-400"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.8,
                duration: 1.0,
              }}
            >
              Building Digital Experiences
            </motion.p>

            {/* Animated Line */}
            <div className="mt-8 h-px w-44 overflow-hidden rounded-full bg-gray-700">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 1.5,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.section>
      
    </AnimatePresence>
  );
}