import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Intro from "../../Components/Intro";
import Navbar from "../../Components/Navbar";
import HomeIntro from "../../Components/HomeIntro";
import WhyNexa from "../../Components/WhyNexa";
import DevelopmentProcess from "../../Components/DevelopmentProcess";
import Industries from "../../Components/Industries";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const introPlayed = sessionStorage.getItem("introPlayed");

    if (introPlayed) {
      setShowIntro(false);
      setShowNavbar(true);
      setShowHero(true);
    } else {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introPlayed", "true");

    setShowIntro(false);

    setTimeout(() => {
      setShowNavbar(true);
    }, 100);

    setTimeout(() => {
      setShowHero(true);
    }, 500);
  };

  return (
    <>
      {showIntro && (
        <Intro onComplete={handleIntroComplete} />
      )}

      {showNavbar && <Navbar />}

      {showHero && (<><HomeIntro /><WhyNexa/><DevelopmentProcess/><Industries/>
       <section
      className="relative overflow-hidden bg-[#030712] px-6  text-white" >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/10
          blur-[140px]
        "
      />


      <div className="relative z-10 mx-auto max-w-4xl text-center">



        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            text-4xl
            font-bold
            tracking-tight
            md:text-4xl
          "
        >
          Ready to Build
          <span className="text-blue-500">
            {" "}Something Great?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
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
          Let's turn your idea into a digital solution that
          moves your business forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="mt-10"
        >
          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              rounded-full
              bg-white
              px-8
              py-4
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-blue-500
              hover:text-white
              hover:shadow-[0_0_30px_rgba(37,99,235,.25)]
            "
          >
            Start Your Project
            <span className="ml-2 text-base">
              →
            </span>
          </Link>
        </motion.div>

      </div><br/><br/>

    </section>
      
      </>)}
    </>
  );
}