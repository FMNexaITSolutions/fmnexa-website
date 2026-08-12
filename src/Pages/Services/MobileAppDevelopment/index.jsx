import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineDevicePhoneMobile,  HiOutlineUserGroup,  HiOutlineArrowTrendingUp,
  HiOutlineBell,  HiOutlineShoppingBag,  HiOutlineBuildingStorefront,  HiOutlineCreditCard,
  HiOutlineMapPin,  HiOutlineChatBubbleLeftRight,  HiOutlineCloud,  HiOutlineCodeBracket,
  HiOutlineShieldCheck,  HiOutlineMagnifyingGlass,  HiOutlineLightBulb,  HiOutlinePaintBrush,  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import Navbar from "../../../Components/Navbar";


export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">

      <Navbar />

      <section className="px-6 pb-24 pt-28 md:pt-15">

        <div className="mx-auto max-w-7xl text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl font-bold leading-tight md:text-4xl"
          >
            Build Experiences
            <span className="text-blue-500">
              {" "}That Live in Your Customers' Hands.
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            We build high-performance, feature-rich mobile applications
            designed to help businesses connect with customers, streamline
            operations, and create meaningful digital experiences.
          </motion.p>

        </div>

      </section>


      <section className="px-6">

        <div className="mx-auto max-w-7xl">
          <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <BenefitCard
              icon={<HiOutlineDevicePhoneMobile />}
              title="Always Accessible"
              description="Give customers direct access to your products, services, and business from their mobile devices."
            />

            <BenefitCard
              icon={<HiOutlineBell />}
              title="Stay Connected"
              description="Use push notifications and personalized experiences to keep customers engaged with your business."
            />

            <BenefitCard
              icon={<HiOutlineUserGroup />}
              title="Build Engagement"
              description="Create convenient experiences that encourage customers to interact with your brand more frequently."
            />

            <BenefitCard
              icon={<HiOutlineArrowTrendingUp />}
              title="Drive Growth"
              description="Reach a wider mobile audience and create new opportunities for customer acquisition and retention."
            />

          </div>

        </div>

      </section>


         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex justify-center"
          >
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                rounded-full
                bg-white
                px-7
                py-3.5
                font-medium
                text-black
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Build your Mobile App →
            </Link>
          </motion.div>

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            label="WHAT WE BUILD"
            title={
              <>
                Mobile Solutions
                <span className="text-blue-500">
                  {" "}Built Around Your Needs
                </span>
              </>
            }
            description="From customer-facing applications to business tools, we create mobile solutions tailored to your goals and users."
          />


          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <AppTypeCard
              icon={<HiOutlineShoppingBag />}
              title="E-commerce Apps"
              description="Mobile shopping experiences that allow customers to browse products, place orders, and manage purchases."
            />

            <AppTypeCard
              icon={<HiOutlineBuildingStorefront />}
              title="Business Apps"
              description="Custom applications designed to streamline internal processes and improve business operations."
            />

            <AppTypeCard
              icon={<HiOutlineUserGroup />}
              title="Customer Apps"
              description="Engaging mobile experiences that help businesses connect with and serve their customers."
            />

            <AppTypeCard
              icon={<HiOutlineCreditCard />}
              title="On-Demand Apps"
              description="Convenient platforms connecting customers with services, providers, and real-time solutions."
            />

            <AppTypeCard
              icon={<HiOutlineMapPin />}
              title="Location-Based Apps"
              description="Applications using maps, location services, and real-time information to deliver useful experiences."
            />

            <AppTypeCard
              icon={<HiOutlineChatBubbleLeftRight />}
              title="Communication Apps"
              description="Mobile platforms designed for messaging, notifications, communication, and customer interaction."
            />

          </div>

        </div>

      </section>


      <section className="px-6 ">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            label="PLATFORMS & TECHNOLOGY"
            title={
              <>
                Built for
                <span className="text-blue-500">
                  {" "}Modern Devices
                </span>
              </>
            }
           
          />


          <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">

            <TechnologyItem
              title="iOS"
              subtitle="Apple Devices"
            />

            <TechnologyItem
              title="Android"
              subtitle="Android Devices"
            />

            <TechnologyItem
              title="Cross-Platform"
              subtitle="iOS & Android"
            />

          </div>

        </div><br/><br/>

      </section>


 
 


    </div>
  );
}


function SectionHeading({
  label,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >

      <p className="text-sm uppercase tracking-[0.5em] text-blue-400">
        {label}
      </p>

      <h2 className="text-5xl font-bold leading-17 md:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        {description}
      </p>

    </motion.div>
  );
}


function BenefitCard({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-[#111827]
        p-7
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:shadow-[0_0_35px_rgba(37,99,235,.12)]
      "
    >

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-blue-500/10
            text-2xl
            text-blue-400
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
          "
        >
          {icon}
        </div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

      </div>

      <p className="mt-5 leading-7 text-gray-400">
        {description}
      </p>

    </motion.div>
  );
}


function AppTypeCard({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.5 }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-[#111827]
        p-7
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:shadow-[0_0_35px_rgba(37,99,235,.12)]
      "
    >

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-blue-500/10
          text-2xl
          text-blue-400
          transition-all
          duration-500
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-400">
        {description}
      </p>

    </motion.div>
  );
}




function TechnologyItem({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-[#111827]
        px-6
        py-7
        text-center
        transition-all
        duration-300
        hover:border-blue-500/40
      "
    >

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {subtitle}
      </p>

    </motion.div>
  );
}


