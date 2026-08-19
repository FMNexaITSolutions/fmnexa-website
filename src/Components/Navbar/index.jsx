import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiChevronDown,
  HiX,
} from "react-icons/hi";

import logo from "../../assets/logo/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -50,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="relative z-50 w-full px-4 sm:px-6 lg:px-8"
    >
      <div
        className={`
          mx-auto
          flex
          h-20
          sm:h-24
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          px-4
          sm:px-6
          lg:px-8
          transition-all
          duration-500

          ${
            scrolled
              ? "border border-white/10 bg-[#030712]/80 shadow-2xl backdrop-blur-2xl"
              : "bg-transparent"
          }
        `}
      >

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex-shrink-0"
        >
          <img
            src={logo}
            alt="FM Nexa"
            className="
              w-28
              sm:w-32
              md:w-36
              h-auto
              object-contain
            "
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">

          {/* Home */}
          <Link
            to="/"
            className="text-lg xl:text-xl text-white transition hover:text-blue-400"
          >
            Home
          </Link>

          {/* Work */}
          <Link
            to="/portfolio"
            className="text-lg xl:text-xl text-white transition hover:text-blue-400"
          >
            Work
          </Link>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center gap-1">

              <Link
                to="/services"
                className="text-lg xl:text-xl text-white transition hover:text-blue-400"
              >
                Services
              </Link>

              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="p-1 text-white transition hover:text-blue-400"
                aria-label="Toggle services menu"
              >
                <HiChevronDown
                  size={20}
                  className={`
                    transition-transform
                    duration-300
                    ${servicesOpen ? "rotate-180" : ""}
                  `}
                />
              </button>
            </div>

            {/* Desktop Services Dropdown */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
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
                      className="
                        block
                        rounded-xl
                        px-4
                        py-3
                        text-gray-300
                        transition
                        hover:bg-white/5
                        hover:text-blue-400
                      "
                    >
                      Website Development
                    </Link>

                    <Link
                      to="/services/shopify-development"
                      className="
                        block
                        rounded-xl
                        px-4
                        py-3
                        text-gray-300
                        transition
                        hover:bg-white/5
                        hover:text-blue-400
                      "
                    >
                      Shopify Development
                    </Link>

                    <Link
                      to="/services/ecommerce-development"
                      className="
                        block
                        rounded-xl
                        px-4
                        py-3
                        text-gray-300
                        transition
                        hover:bg-white/5
                        hover:text-blue-400
                      "
                    >
                      E-commerce Development
                    </Link>

                    <Link
                      to="/services/mobile-app-development"
                      className="
                        block
                        rounded-xl
                        px-4
                        py-3
                        text-gray-300
                        transition
                        hover:bg-white/5
                        hover:text-blue-400
                      "
                    >
                      Mobile App Development
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About */}
          <Link
            to="/about"
            className="text-lg xl:text-xl text-white transition hover:text-blue-400"
          >
            About
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="text-lg xl:text-xl text-white transition hover:text-blue-400"
          >
            Contact
          </Link>
        </nav>


        <Link
          to="/contact"
          className="
            hidden
            lg:flex
            items-center
            rounded-full
            bg-white
            px-5
            xl:px-6
            py-3
            font-medium
            text-black
            transition
            hover:scale-105
          "
        >
          Let's Talk →
        </Link>

        <button
          type="button"
          onClick={() =>
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
          className="
            flex
            lg:hidden
            items-center
            justify-center
            rounded-lg
            p-2
            text-white
            transition
            hover:bg-white/10
          "
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <HiX size={30} />
          ) : (
            <HiOutlineMenuAlt3 size={30} />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              height: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              y: -15,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              lg:hidden
              mx-auto
              mt-2
              max-w-7xl
              overflow-hidden
            "
          >
            <nav
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#030712]/95
                p-5
                shadow-2xl
                backdrop-blur-2xl
              "
            >
              <div className="flex flex-col">

                {/* Home */}
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="
                    border-b
                    border-white/10
                    py-4
                    text-lg
                    text-white
                    transition
                    hover:text-blue-400
                  "
                >
                  Home
                </Link>

                {/* Work */}
                <Link
                  to="/portfolio"
                  onClick={closeMobileMenu}
                  className="
                    border-b
                    border-white/10
                    py-4
                    text-lg
                    text-white
                    transition
                    hover:text-blue-400
                  "
                >
                  Work
                </Link>

                {/* Mobile Services */}
                <div className="border-b border-white/10">

                  <div className="flex items-center justify-between">

                    <Link
                      to="/services"
                      onClick={closeMobileMenu}
                      className="
                        py-4
                        text-lg
                        text-white
                        transition
                        hover:text-blue-400
                      "
                    >
                      Services
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        setMobileServicesOpen(
                          !mobileServicesOpen
                        )
                      }
                      className="p-3 text-white"
                      aria-label="Toggle services"
                    >
                      <HiChevronDown
                        size={22}
                        className={`
                          transition-transform
                          duration-300
                          ${
                            mobileServicesOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>
                  </div>

                  {/* Mobile Services Dropdown */}
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mb-3 ml-3 flex flex-col gap-1">

                          <Link
                            to="/services/website-development"
                            onClick={closeMobileMenu}
                            className="
                              rounded-lg
                              px-3
                              py-3
                              text-gray-400
                              transition
                              hover:bg-white/5
                              hover:text-blue-400
                            "
                          >
                            Website Development
                          </Link>

                          <Link
                            to="/services/shopify-development"
                            onClick={closeMobileMenu}
                            className="
                              rounded-lg
                              px-3
                              py-3
                              text-gray-400
                              transition
                              hover:bg-white/5
                              hover:text-blue-400
                            "
                          >
                            Shopify Development
                          </Link>

                          <Link
                            to="/services/ecommerce-development"
                            onClick={closeMobileMenu}
                            className="
                              rounded-lg
                              px-3
                              py-3
                              text-gray-400
                              transition
                              hover:bg-white/5
                              hover:text-blue-400
                            "
                          >
                            E-commerce Development
                          </Link>

                          <Link
                            to="/services/mobile-app-development"
                            onClick={closeMobileMenu}
                            className="
                              rounded-lg
                              px-3
                              py-3
                              text-gray-400
                              transition
                              hover:bg-white/5
                              hover:text-blue-400
                            "
                          >
                            Mobile App Development
                          </Link>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About */}
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="
                    border-b
                    border-white/10
                    py-4
                    text-lg
                    text-white
                    transition
                    hover:text-blue-400
                  "
                >
                  About
                </Link>

                {/* Contact */}
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="
                    border-b
                    border-white/10
                    py-4
                    text-lg
                    text-white
                    transition
                    hover:text-blue-400
                  "
                >
                  Contact
                </Link>

                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="
                    mt-5
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    px-6
                    py-3
                    font-medium
                    text-black
                    transition
                    hover:scale-[1.02]
                  "
                >
                  Let's Talk →
                </Link>

              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}