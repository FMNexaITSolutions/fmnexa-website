import {
  HiGlobeAlt,
  HiShoppingBag,
  HiDevicePhoneMobile,
} from "react-icons/hi2";

import { FaShopify } from "react-icons/fa";

import ServiceCard from "../ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="px-6 pb-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2">

          <ServiceCard
            icon={<HiGlobeAlt />}
            title="Website Development"
            description="Modern, responsive websites designed to elevate your online presence and drive business growth. Built for speed, SEO, security, and seamless user experiences across every device."
             link="/services/website-development"
          />

          <ServiceCard
            icon={<FaShopify />}
            title="Shopify Development"
            description="Custom Shopify stores designed to deliver seamless shopping experiences and maximize conversions. From custom themes to secure payment integration and performance optimization, we build stores that scale with your business."
            link="/services/shopify-development"
          />

          <ServiceCard
            icon={<HiShoppingBag />}
            title="Custom E-Commerce"
            description="Transform your business into an online store with custom e-commerce solutions tailored to your unique requirements. We build secure, scalable, and high-performance platforms that keep your business running 24/7 and ready for growth."
            link="/services/ecommerce-development"
          />

          <ServiceCard
            icon={<HiDevicePhoneMobile />}
            title="Mobile App Development"
            description="From concept to launch, we develop high-performance mobile applications for iOS and Android that combine intuitive design, seamless functionality, and scalable architecture to help your business reach more customers."
            link="/services/mobile-app-development"
          />

        </div>

      </div>
    </section>
  );
}