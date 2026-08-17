import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
 
const validateEmail = (email = "") => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!email.trim()) {
    return "Email address is required.";
  }

  if (!emailRegex.test(email.trim())) {
    return "Please enter a valid email address.";
  }

  return "";
};
  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  if (name === "email") {
    const error = validateEmail(value);

    setErrors((prev) => ({
      ...prev,
      email: error,
    }));
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  const isValid = validateEmail();

  if (!isValid) {
    return;
  }

  try {
    const response = await fetch(
      "https://fmnexa-website.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    console.log("Success:", data);

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setErrors({});

   setShowSuccess(true);

  } catch (error) {
    console.error("Error submitting form:", error);

    alert(
      error.message ||
      "Unable to send your message. Please try again."
    );
  }
};



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

      <form className="mt-10 space-y-6" onSubmit={handleSubmit}>

        {/* Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            type="text" name="name"
            placeholder="John Doe"
            className="w-full rounded-2xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-500"
            value={formData.name} onChange={handleChange}
          />
        </div>

        {/* Email */}

     <div>
  <label className="mb-2 block text-sm font-medium">
    Email Address
  </label>

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="john@example.com"
    className={`
      w-full
      rounded-2xl
      border
      bg-transparent
      px-5
      py-4
      outline-none
      transition
      ${
        errors.email
          ? "border-red-500 focus:border-red-500"
          : "border-white/10 focus:border-blue-500"
      }
    `}
  />

  {errors.email && (
    <p className="mt-2 text-sm text-red-400">
      {errors.email}
    </p>
  )}
</div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone Number
          </label>

          <input
            type="tel" name="phone" value={formData.phone} onChange={handleChange}
            placeholder="+1 XXX XXX-XXXX"
           className={`
              w-full
              rounded-2xl
              border
              bg-transparent
              px-5
              py-4
              outline-none
              transition
              ${
                errors.phone
                  ? "border-red-500 focus:border-red-500"
                  : "border-white/10 focus:border-blue-500"
              }
            `}
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-400">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Message
          </label>

          <textarea
            rows="6" name="message" value={formData.message} onChange={handleChange}
            placeholder="Tell us about your project..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-transparent px-5 py-4 outline-none transition focus:border-blue-500"
          />
        </div>

        <button type="submit"
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
      <AnimatePresence>
  {showSuccess && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        px-6
        backdrop-blur-md
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 20,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          relative
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-[#0b1120]
          p-8
          text-center
          shadow-[0_0_60px_rgba(37,99,235,0.15)]
        "
      >

        {/* Success Icon */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.15,
            type: "spring",
            stiffness: 200,
          }}
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-blue-500/10
            text-3xl
            text-blue-400
          "
        >
          ✓
        </motion.div>


        {/* Heading */}

        <h3
          className="
            mt-6
            text-2xl
            font-bold
            text-white
          "
        >
          Thank You!
        </h3>


        {/* Message */}

        <p
          className="
            mt-3
            text-sm
            leading-7
            text-gray-400
          "
        >
          Thank you for submitting your inquiry.
          Our team has received your details and
          will get back to you shortly.
        </p>


        {/* Button */}

        <button
          onClick={() => setShowSuccess(false)}
          className="
            mt-7
            w-full
            rounded-full
            bg-white
            py-3.5
            font-medium
            text-black
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
          "
        >
          Done
        </button>

      </motion.div>

    </motion.div>
  )}
</AnimatePresence>
    </motion.div>
  );
}
