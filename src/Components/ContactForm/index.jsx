import { motion, AnimatePresence } from "framer-motion";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const emailError = validateEmail(formData.email);

    if (emailError) {
      setErrors({
        email: emailError,
      });
      return;
    }
     setIsSubmitting(true);
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
    <>

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          box-border
          block
          w-full
          max-w-full
          min-w-0
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-4
          sm:p-6
          lg:p-10
          backdrop-blur-xl
        "
      >
        {/* Heading */}

        <h2
          className="
            m-0
            w-full
            max-w-full
            break-words
            text-2xl
            font-bold
            leading-tight
            sm:text-3xl
          "
          style={{ fontFamily: "Space Grotesk" }}
        >
          Send us a Message
        </h2>

        <p
          className="
            mt-3
            w-full
            max-w-full
            break-words
            text-sm
            leading-6
            text-gray-400
            sm:text-base
          "
        >
          Fill out the form below and we'll get back to you
          shortly.
        </p>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="
            mt-7
            block
            w-full
            max-w-full
            min-w-0
            space-y-5
            sm:mt-8
            sm:space-y-6
          "
        >
          {/* NAME */}

          <div className="block w-full max-w-full min-w-0">
            <label className="mb-2 block text-sm font-medium text-white">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="
                box-border
                block
                h-[52px]
                w-full
                max-w-full
                min-w-0
                appearance-none
                rounded-xl
                border
                border-white/10
                bg-transparent
                px-4
                text-sm
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-blue-500
                sm:h-[56px]
                sm:rounded-2xl
                sm:px-5
                sm:text-base
              "
            />
          </div>

          {/* EMAIL */}

          <div className="block w-full max-w-full min-w-0">
            <label className="mb-2 block text-sm font-medium text-white">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`
                box-border
                block
                h-[52px]
                w-full
                max-w-full
                min-w-0
                appearance-none
                rounded-xl
                border
                bg-transparent
                px-4
                text-sm
                text-white
                placeholder:text-gray-500
                outline-none
                sm:h-[56px]
                sm:rounded-2xl
                sm:px-5
                sm:text-base

                ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-white/10 focus:border-blue-500"
                }
              `}
            />

            {errors.email && (
              <p className="mt-2 break-words text-xs text-red-400 sm:text-sm">
                {errors.email}
              </p>
            )}
          </div>

          {/* PHONE */}

          <div className="block w-full max-w-full min-w-0">
            <label className="mb-2 block text-sm font-medium text-white">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 XXX XXX-XXXX"
              className={`
                box-border
                block
                h-[52px]
                w-full
                max-w-full
                min-w-0
                appearance-none
                rounded-xl
                border
                bg-transparent
                px-4
                text-sm
                text-white
                placeholder:text-gray-500
                outline-none
                sm:h-[56px]
                sm:rounded-2xl
                sm:px-5
                sm:text-base

                ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500"
                    : "border-white/10 focus:border-blue-500"
                }
              `}
            />

            {errors.phone && (
              <p className="mt-2 break-words text-xs text-red-400 sm:text-sm">
                {errors.phone}
              </p>
            )}
          </div>

          {/* MESSAGE */}

          <div className="block w-full max-w-full min-w-0">
            <label className="mb-2 block text-sm font-medium text-white">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              className="
                box-border
                block
                w-full
                max-w-full
                min-w-0
                resize-none
                rounded-xl
                border
                border-white/10
                bg-transparent
                px-4
                py-3.5
                text-sm
                leading-6
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-blue-500
                sm:rounded-2xl
                sm:px-5
                sm:text-base
              "
            />
          </div>

          {/* BUTTON */}

          <button
            type="submit" disabled={isSubmitting}
            className="
              box-border
              flex
              min-h-[52px]
              w-full
              max-w-full
              items-center
              justify-center
              rounded-full
              bg-white
              px-4
              py-3
              text-sm
              font-semibold
              text-black
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]
              active:scale-[0.98]
              sm:text-base
            "
          >
              {isSubmitting ? "Sending..." : "Let's Build Together →"}
          </button>
        </form>
      </motion.div>


      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-black/70
              px-4
              py-6
              backdrop-blur-md
              sm:px-6
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
              }}
              className="
                box-border
                w-full
                max-w-md
                min-w-0
                rounded-2xl
                border
                border-white/10
                bg-[#0b1120]
                p-5
                text-center
                sm:rounded-3xl
                sm:p-8
              "
            >
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
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-500/10
                  text-2xl
                  text-blue-400
                  sm:h-16
                  sm:w-16
                  sm:text-3xl
                "
              >
                ✓
              </motion.div>

              <h3 className="mt-5 text-xl font-bold text-white sm:mt-6 sm:text-2xl">
                Thank You!
              </h3>

              <p className="mx-auto mt-3 max-w-sm break-words text-sm leading-6 text-gray-400 sm:leading-7">
                Thank you for submitting your inquiry.
                Our team has received your details and
                will get back to you shortly.
              </p>

              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="
                  mt-6
                  min-h-[48px]
                  w-full
                  rounded-full
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:-translate-y-1
                  sm:mt-7
                  sm:text-base
                "
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}