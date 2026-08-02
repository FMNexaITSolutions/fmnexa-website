import { motion } from "framer-motion";
import {FaWhatsapp,FaEnvelope, FaPhoneAlt, FaInstagram,  FaLinkedin,  FaGithub,} from "react-icons/fa";
import ContactCard from "../ContactCard";


export default function ContactInfo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 1.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
    >
      <h2
        className="text-4xl font-bold leading-tight"
        style={{ fontFamily: "Space Grotesk" }}
      >
        Ready to Start
        <br />
        Your Project?
      </h2>

      <p className="mt-6 text-gray-400 leading-8">
        Let's transform your vision into reality.
        Get in touch today and let's build
        something extraordinary together.
      </p>

      <div className="mt-10 space-y-5">
        <ContactCard
    icon={<FaWhatsapp />}
    title="Chat on WhatsApp"
    subtitle="Typically replies in a few minutes"
    href="https://wa.me/14376675501"
/>

<ContactCard
    icon={<FaEnvelope />}
    title="Send an Email"
    subtitle="fmnexasolutions@gmail.com"
    href="mailto:fmnexasolutions@gmail.com"
/>

<ContactCard
    icon={<FaPhoneAlt />}
    title="Call Us"
    subtitle="+14376675501 "
    href="tel:+14376675501"
/>
      </div>
    </motion.div>
  );
}