import { motion } from "framer-motion";

import TechnologyCard from "../TechnologyCard";

export default function TechnologyStack() {
  const stack = [
    {
      title: "Frontend",
      description:
        "Crafting fast, responsive, and engaging user interfaces for seamless digital experiences.",
      technologies: ["React", "Next.js", "JavaScript", "TypeScript"],
      color: "blue",
    },
    {
      title: "Backend",
      description:
        "Building secure, scalable APIs and server-side applications that power your business.",
      technologies: ["Node.js", "Express.js","Python"],
      color: "purple",
    },
    {
      title: "Database",
      description:
        "Reliable and scalable data management solutions designed for performance and growth.",
      technologies: ["MongoDB", "PostgreSQL"],
      color: "emerald",
    },
    {
      title: "Mobile App Development",
      description:
        "Our apps connect your business and customers directly and help them achieve a personal experience.",
      technologies: ["React Native", "Flutter"],
      color: "orange",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Automated deployments, cloud infrastructure, and streamlined development workflows.",
      technologies: ["Docker", "AWS", "Kubernetes", "GitHub"],
      color: "cyan",
    },
    {
      title: "UI / UX Design",
      description:
        "Designing intuitive, user-centered interfaces that combine aesthetics with usability.",
      technologies: ["Figma"],
      color: "pink",
    },
  ];

  return (
    <section className="bg-[#030712] px-6 py-18">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-blue-400">
            TECHNOLOGY STACK
          </p>

          <h2 className="mt-6 text-5xl md:text-5xl font-bold leading-tight">
            Powered by Modern Technologies
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            We leverage industry-leading technologies to build secure,
            scalable, and high-performance digital solutions that help
            businesses innovate, grow, and succeed.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {stack.map((item, index) => (
            <TechnologyCard
              key={item.title}
              {...item}
              delay={index * 0.1}
            />
          ))}
        </div>

      </div>

    </section>
  );
}