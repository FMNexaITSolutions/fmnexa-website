import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiOutlineShoppingBag,  HiOutlineChartBar,  HiOutlineShieldCheck,  HiOutlineGlobeAlt,
  HiOutlinePaintBrush,  HiOutlineArrowPath,  HiOutlineCodeBracket,  HiOutlineCube,
  HiOutlineWrenchScrewdriver,  HiOutlineMagnifyingGlass,  HiOutlineLightBulb,  HiOutlineRocketLaunch,} from "react-icons/hi2";

import Navbar from "../../../Components/Navbar";


export default function ShopifyDevelopment() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">

      <Navbar />


      <section className="px-6 pb-24 pt-17 md:pt-15">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl font-bold leading-tight md:text-4xl">
            Build a Shopify Store
            <span className="text-blue-500">
              {" "}That Sells
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
            We design and develop high-performing Shopify stores that
            combine beautiful storefronts, seamless shopping experiences,
            and powerful e-commerce functionality to help your business
            grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10"
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
              Start Your Shopify Project →
            </Link>
          </motion.div>

        </div>
      </section>


      <section className="px-6">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold leading-tight md:text-4xl">
              Why Choose
              <span className="text-blue-500">
                {" "}Shopify?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-400">
              Shopify gives businesses a powerful, secure, and flexible
              platform to launch, manage, and grow an online store without
              the complexity of building an e-commerce platform from scratch.
            </p>

          </motion.div>


          {/* Benefits */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <BenefitCard
              icon={<HiOutlineShoppingBag />}
              title="Easy to Manage"
              description="Manage products, inventory, orders, customers, and payments from one intuitive platform."
            />

            <BenefitCard
              icon={<HiOutlineChartBar />}
              title="Built to Scale"
              description="Start with what your business needs today and expand your store as your products and customer base grow."
            />

            <BenefitCard
              icon={<HiOutlineShieldCheck />}
              title="Secure & Reliable"
              description="Shopify provides secure hosting, infrastructure, and payment capabilities so you can focus on your business."
            />

            <BenefitCard
              icon={<HiOutlineGlobeAlt />}
              title="Sell Everywhere"
              description="Create a seamless shopping experience across mobile, desktop, and multiple sales channels."
            />

          </div>

        </div>

      </section>

<section className="px-6 py-20">

  <div className="mx-auto max-w-6xl">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >

      <p className="text-sm uppercase tracking-[0.5em] text-blue-400">
        OUR SERVICES
      </p>

      <h2 className="mt-5 text-4xl font-bold md:text-5xl">
        Shopify Development
        <span className="text-blue-500">
          {" "}Services
        </span>
      </h2>


    </motion.div>


    {/* Services List */}

    <div className="mx-auto mt-14 grid max-w-5xl gap-x-16 gap-y-8 md:grid-cols-2">

      <ShopifyServiceItem
        title="Shopify Store Development"
        description="Complete Shopify stores designed around your brand, products, customers, and business goals."
      />

      <ShopifyServiceItem
        title="Shopify Theme Customization"
        description="Customize your Shopify theme to create a unique and responsive storefront that reflects your brand."
      />

      <ShopifyServiceItem
        title="Shopify Store Redesign"
        description="Transform an outdated store into a modern, user-friendly, and conversion-focused shopping experience."
      />

      <ShopifyServiceItem
        title="App & API Integration"
        description="Connect your store with payment gateways, shipping tools, CRM, marketing platforms, and other third-party services."
      />

      <ShopifyServiceItem
        title="Product & Store Setup"
        description="Configure products, collections, navigation, payments, shipping, filters, and essential store settings."
      />

      <ShopifyServiceItem
        title="Maintenance & Support"
        description="Keep your Shopify store updated, optimized, and running smoothly with ongoing technical support."
      />

    </div>

  </div>

</section>

    </div>
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

      {/* Icon + Title */}

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


function ShopifyServiceItem({
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        group
        flex
        gap-4
        border-b
        border-white/10
        pb-7
      "
    >

      {/* Bullet */}

      <div className="mt-1.5 shrink-0">
        <div
          className="
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-blue-500/10
            text-xs
            text-blue-400
            transition-all
            duration-300
            group-hover:bg-blue-500
            group-hover:text-white
          "
        >
          ✓
        </div>
      </div>


      {/* Content */}

      <div>

        <h3
          className="
            text-lg
            font-semibold
            transition-colors
            duration-300
            group-hover:text-blue-400
          "
        >
          {title}
        </h3>

        <p className="mt-2 leading-7 text-gray-400">
          {description}
        </p>

      </div>

    </motion.div>
  );
}


function ShopifyProcessStep({
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

      {/* Timeline Number */}

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


      {/* Process Card */}

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