import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3,HiChevronDown  } from "react-icons/hi";


import logo from "../../assets/logo/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
            initial={{
            opacity:0,
            y:-50,
            scale:.95
        }}

        animate={{
            opacity:1,
            y:0,
            scale:1
        }}

        transition={{
            duration:.9,
            ease:"easeOut"
        }}
      className=" top-6 left-0 z-40 w-full"
    >
      <div
        className={`
        mx-auto
        flex h-24
        max-w-7xl
        items-center
        justify-between
        rounded-2xl
        px-8   lg:px-8 
        transition-all
        duration-500

        ${
          scrolled
            ? "border border-white/10 bg-[#030712]/70 shadow-2xl backdrop-blur-2xl"
            : "bg-transparent"
        }
        `}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="FM Nexa"
            className="w-36"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">

          <Link className="hover:text-blue-400 text-xl transition" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-400 text-xl transition" to="/portfolio">
            Work
          </Link>

         <div
  className="relative"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  <div className="flex items-center gap-1">

    {/* Services Link */}
    <Link
      to="/services"
      className="
        text-xl
        transition
        hover:text-blue-400
      "
    >
      Services
    </Link>

    {/* Dropdown Arrow */}
    <button
      onClick={() => setServicesOpen(!servicesOpen)}
      className="
        p-1
        text-xl
        transition
        hover:text-blue-400
      "
      aria-label="Toggle services menu"
    >
      <HiChevronDown
        className={`transition-transform duration-300 ${
          servicesOpen ? "rotate-180" : ""
        }`}
      />
    </button>

  </div>

  {/* Dropdown */}
  {servicesOpen && (
    <div
      className="
        absolute
        left-1/2
        top-full
        z-50
        w-64
        -translate-x-1/2
        pt-4
      "
    >
      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-[#0f172a]/95
          p-2
          shadow-2xl
          backdrop-blur-xl
        "
      >

        <Link
          to="/services/website-development"
          className="block rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-blue-400"
        >
          Website Development
        </Link>

        <Link
          to="/services/shopify-development"
          className="block rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-blue-400"
        >
          Shopify Development
        </Link>

        <Link
          to="/services/ecommerce-development"
          className="block rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-blue-400"
        >
          E-commerce Development
        </Link>

        <Link
          to="/services/mobile-app-development"
          className="block rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-blue-400"
        >
          Mobile App Development
        </Link>

      </div>
    </div>
  )}
</div>

          <Link className="hover:text-blue-400 text-xl transition" to="/about">
            About
          </Link>

          <Link className="hover:text-blue-400 text-xl transition" to="/contact">
            Contact
          </Link>

        </nav>

        {/* CTA */}

        <Link
          to="/contact"
          className="
          hidden
          lg:flex
          items-center
          rounded-full
          bg-white
          px-6
          py-3
          font-medium
          text-black
          transition
          hover:scale-105
          "
        >
          Let's Talk →
        </Link>

        {/* Mobile */}

        <button className="lg:hidden text-white">
  <HiOutlineMenuAlt3
    size={28}
    className="transition-transform duration-300 hover:scale-110"
  />
</button>

      </div>
    </motion.header>
  );
}
