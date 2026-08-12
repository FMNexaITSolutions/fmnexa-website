import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineGlobeAlt,HiOutlineClock, HiOutlineChartBar, HiOutlineArrowTrendingUp, HiOutlineShoppingBag,
  HiOutlineBuildingStorefront, HiOutlineCube, HiOutlineCreditCard,  HiOutlineTruck,
  HiOutlineUserGroup, HiOutlineClipboardDocumentList,  HiOutlineMagnifyingGlass,  HiOutlineLightBulb,
  HiOutlineCodeBracket,  HiOutlineShieldCheck,  HiOutlineRocketLaunch,} from "react-icons/hi2";

import Navbar from "../../../Components/Navbar";

export default function EcommerceDevelopment() {
  return (
    <>
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
            Take Your Business Online.
            <span className="text-blue-500">
              {" "}Keep It Growing 24/7.
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            Transform your traditional business into a powerful online
            commerce platform designed around your products, customers,
            and business processes.
          </motion.p>

        </div>

      </section>

      <section className="px-6">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <BenefitCard
              icon={<HiOutlineGlobeAlt />}
              title="Reach Beyond Location"
              description="Expand your customer base beyond your physical location and reach customers wherever they are."
            />

            <BenefitCard
              icon={<HiOutlineClock />}
              title="Sell 24/7"
              description="Give customers the ability to browse products and place orders at any time of the day."
            />

            <BenefitCard
              icon={<HiOutlineChartBar />}
              title="Understand Customers"
              description="Use digital insights to understand customer behavior, popular products, and purchasing patterns."
            />

            <BenefitCard
              icon={<HiOutlineArrowTrendingUp />}
              title="Scale Your Business"
              description="Build an online presence that can grow alongside your products, customers, and operations."
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
              Start building your online store →
            </Link>
          </motion.div>
      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            label="E-COMMERCE SOLUTIONS"
            title={
              <>
                Built for Your
                <span className="text-blue-500">
                  {" "}Business Model
                </span>
              </>
            }
            description="Whether you sell directly to customers or work with other businesses, we build e-commerce solutions around the way your business operates."
          />


          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {/* B2C */}

            <CommerceModel
              icon={<HiOutlineShoppingBag />}
              label="B2C E-COMMERCE"
              title="Sell Directly to Your Customers"
              description="Create engaging online shopping experiences that make it easy for customers to discover products, place orders, and purchase from your business."
              features={[
                "Product catalogs",
                "Shopping cart & checkout",
                "Customer accounts",
                "Payment integration",
                "Discounts & promotions",
                "Order tracking",
              ]}
            />


            {/* B2B */}

            <CommerceModel
              icon={<HiOutlineBuildingStorefront />}
              label="B2B E-COMMERCE"
              title="Build Better Business Commerce"
              description="Give your business customers a streamlined way to browse products, request quotes, place bulk orders, and manage their purchases online."
              features={[
                "Business accounts",
                "Bulk ordering",
                "Custom pricing",
                "Quote requests",
                "Customer-specific catalogs",
                "Order management",
              ]}
            />

          </div>

        </div>

      </section>


      <section className="px-6">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            label="INDUSTRIES WE SERVE"
            title={
              <>
                E-commerce Across
                <span className="text-blue-500">
                  {" "}Industries
                </span>
              </>
            }
            description="Our e-commerce solutions can be adapted to different products, industries, business models, and customer experiences."
          />


          <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <IndustryItem
              icon={<HiOutlineBuildingStorefront />}
              title="Retail"
            />

            <IndustryItem
              icon={<HiOutlineShoppingBag />}
              title="Footwear"
            />

            <IndustryItem
              icon={<HiOutlineShoppingBag />}
              title="Fashion & Apparel"
            />

            <IndustryItem
              icon={<HiOutlineCube />}
              title="Electronics"
            />

            <IndustryItem
              icon={<HiOutlineGlobeAlt />}
              title="Beauty & Cosmetics"
            />

            <IndustryItem
              icon={<HiOutlineArrowTrendingUp />}
              title="Sports & Fitness"
            />

            <IndustryItem
              icon={<HiOutlineCube />}
              title="Home & Furniture"
            />

            <IndustryItem
              icon={<HiOutlineBuildingStorefront />}
              title="Wholesale & Distribution"
            />

            <IndustryItem
              icon={<HiOutlineShoppingBag />}
              title="Food & Grocery"
            />

          </div>

        </div>

      </section>



      <section className="px-6 py-18">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            label="OUR CAPABILITIES"
            title={
              <>
                Everything Your
                <span className="text-blue-500">
                  {" "}Online Business Needs
                </span>
              </>
            }
            description="From the storefront to the backend, we build the essential functionality required to run and grow your online business."
          />


          <div className="mx-auto mt-16 grid max-w-5xl gap-x-16 gap-y-6 md:grid-cols-2">

            <CapabilityItem
              icon={<HiOutlineShoppingBag />}
              text="Custom storefront development"
            />

            <CapabilityItem
              icon={<HiOutlineCube />}
              text="Product & category management"
            />

            <CapabilityItem
              icon={<HiOutlineClipboardDocumentList />}
              text="Product variants & inventory"
            />

            <CapabilityItem
              icon={<HiOutlineCreditCard />}
              text="Payment gateway integration"
            />

            <CapabilityItem
              icon={<HiOutlineTruck />}
              text="Shipping & delivery integration"
            />

            <CapabilityItem
              icon={<HiOutlineUserGroup />}
              text="Customer account management"
            />

            <CapabilityItem
              icon={<HiOutlineClipboardDocumentList />}
              text="Order management"
            />

            <CapabilityItem
              icon={<HiOutlineChartBar />}
              text="Analytics & reporting"
            />

            <CapabilityItem
              icon={<HiOutlineCodeBracket />}
              text="Third-party API integrations"
            />

            <CapabilityItem
              icon={<HiOutlineBuildingStorefront />}
              text="Custom business dashboards"
            />

          </div>

        </div>

      </section>

      <section className="px-6 py-3">

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            label="OUR PROCESS"
            title={
              <>
                From Traditional Business
                <span className="text-blue-500">
                  {" "}to Digital Storefront
                </span>
              </>
            }
            description="We follow a structured development process to understand your business, build the right solution, and launch an e-commerce platform ready to grow with you."
          />


          <div className="relative mx-auto mt-20 max-w-5xl">

            {/* Timeline */}

            <div
              className="
                absolute
                left-6
                top-0
                h-full
                w-px
                bg-gradient-to-b
                from-blue-500/60
                via-blue-500/20
                to-transparent
                md:left-1/2
              "
            />


            <ProcessStep
              number="01"
              icon={<HiOutlineMagnifyingGlass />}
              title="Understand"
              description="We understand your existing business process, products, customers, and goals."
              align="left"
            />

            <ProcessStep
              number="02"
              icon={<HiOutlineLightBulb />}
              title="Plan"
              description="We define the store structure, features, customer journey, integrations, and technical requirements."
              align="right"
            />

            <ProcessStep
              number="03"
              icon={<HiOutlineShoppingBag />}
              title="Design"
              description="We create a modern, responsive shopping experience aligned with your brand and customers."
              align="left"
            />

            <ProcessStep
              number="04"
              icon={<HiOutlineCodeBracket />}
              title="Develop"
              description="We build the storefront, backend, database, product management, payments, orders, and required functionality."
              align="right"
            />

            <ProcessStep
              number="05"
              icon={<HiOutlineShieldCheck />}
              title="Test & Optimize"
              description="We test the complete shopping journey across devices, browsers, payments, and different scenarios."
              align="left"
            />

            <ProcessStep
              number="06"
              icon={<HiOutlineRocketLaunch />}
              title="Launch & Support"
              description="We deploy your e-commerce platform and continue supporting your business as it grows."
              align="right"
            />

          </div>

        </div>
          
      </section>
     

    </div> 
</>
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

      <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-400">
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


  

function CommerceModel({
  icon,
  label,
  title,
  description,
  features,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6 }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-[#111827]
        p-8
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(37,99,235,.14)]
      "
    >

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-2xl
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

        <div>

          <p className="text-xs tracking-[0.2em] text-blue-400">
            {label}
          </p>

          <h3 className="mt-1 text-2xl font-semibold">
            {title}
          </h3>

        </div>

      </div>


      <p className="mt-7 leading-8 text-gray-400">
        {description}
      </p>


      <div className="mt-7 grid gap-3 sm:grid-cols-2">

        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-gray-300"
          >
            <span className="text-blue-400">
              ✓
            </span>

            {feature}
          </div>
        ))}

      </div>

    </motion.div>
  );
}




function IndustryItem({
  icon,
  title,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-[#111827]/70
        px-6
        py-5
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-[#111827]
      "
    >

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-blue-500/10
          text-xl
          text-blue-400
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      <span className="font-medium text-gray-200">
        {title}
      </span>

    </motion.div>
  );
}



function CapabilityItem({
  icon,
  text,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="
        group
        flex
        items-center
        gap-4
        border-b
        border-white/10
        pb-5
      "
    >

      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-blue-500/10
          text-blue-400
          transition-all
          duration-300
          group-hover:bg-blue-500
          group-hover:text-white
        "
      >
        {icon}
      </div>

      <span className="text-gray-300">
        {text}
      </span>

    </motion.div>

    
  );
}


/* =========================================================
   PROCESS STEP
========================================================= */

function ProcessStep({
  number,
  icon,
  title,
  description,
  align,
}) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`
        relative
        mb-16
        flex
        items-center
        md:mb-20
        ${isLeft ? "md:justify-start" : "md:justify-end"}
      `}
    >

      {/* Number */}

      <div
        className="
          absolute
          left-0
          z-10
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-blue-500/30
          bg-[#030712]
          text-sm
          font-bold
          text-blue-400
          md:left-1/2
          md:-translate-x-1/2
        "
      >
        {number}
      </div>


      {/* Card */}

      <div
        className={`
          ml-16
          w-full
          rounded-3xl
          border
          border-white/10
          bg-[#111827]
          p-7
          transition-all
          duration-500
          hover:border-blue-500/40
          hover:shadow-[0_0_35px_rgba(37,99,235,.12)]
          md:ml-0
          md:w-[43%]
          ${isLeft ? "md:mr-auto" : "md:ml-auto"}
        `}
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
              text-xl
              text-blue-400
            "
          >
            {icon}
          </div>

          <h3 className="text-xl font-semibold">
            {title}
          </h3>

        </div>

        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>

      </div>

    </motion.div>
  );
}