import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] px-6 pt-20 pb-4">
      <div className="mx-auto grid max-w-7xl gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

        {/* Brand */}
        <div className="text-center sm:text-left">
          <img
            src={logo}
            alt="FM Nexa"
            className="mx-auto w-40 sm:mx-0 md:w-44"
          />

          <p className="mt-5 max-w-xs text-gray-400 leading-7 mx-auto sm:mx-0 text-center sm:text-left">
            Building Digital Experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 font-semibold text-center sm:text-left text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-center sm:text-left text-gray-400">
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="transition-colors duration-300 hover:text-white">Home</Link></li>
            <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="transition-colors duration-300 hover:text-white">About</Link></li>
            <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="transition-colors duration-300 hover:text-white">Services</Link></li>
            <li><Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="transition-colors duration-300 hover:text-white">Portfolio</Link></li>
            <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="transition-colors duration-300 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="mb-5 text-center sm:text-left font-semibold text-white">
            Policies
          </h3>

          <ul className="space-y-3 text-gray-400 text-center sm:text-left">
            <li> <Link to="/privacypolicy" className="transition-colors duration-300 hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="transition-colors duration-300 hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 font-semibold text-white text-center sm:text-left">
            Get in Touch
          </h3>

          <ul className="space-y-3 text-gray-400 text-center sm:text-left">
            <li><a href="mailto:fmnexasolutions@gmail.com" className="transition-colors duration-300 hover:text-white">
      fmnexasolutions@gmail.com </a></li>
            <li>+14376675501</li>
            <li>Ontario, Canada</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between py-8 gap-4  text-sm text-gray-500 md:flex-row">

        <p>
          © 2026 FM Nexa Solutions. All rights reserved.
        </p>

      </div>
    </footer>
  );
}