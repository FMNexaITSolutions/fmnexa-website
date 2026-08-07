import { motion } from "framer-motion";

export default function Connector({ direction = "right" }) {
  const isRight = direction === "right";

  return (
    <div className="hidden lg:flex justify-center py-6">

      <svg
        width="420"
        height="140"
        viewBox="0 0 420 140"
        fill="none"
      >
        

        <path
          d={
            isRight
              ? "M40 20 C160 20 260 120 380 120"
              : "M380 20 C260 20 160 120 40 120"
          }
          stroke="rgba(255,255,255,.08)"
          strokeWidth="4"
          strokeLinecap="round"
        />

     

        <motion.path
          d={
            isRight
              ? "M40 20 C160 20 260 120 380 120"
              : "M380 20 C260 20 160 120 40 120"
          }
          stroke="#2563EB"
          strokeWidth="4"
          strokeLinecap="round"
          fill="transparent"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />

     

        <motion.circle
          r="7"
          fill="#3B82F6"
          initial={{
            offsetDistance: "0%",
          }}
          whileInView={{
            offsetDistance: "100%",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          style={{
            offsetPath: `path("${
              isRight
                ? "M40 20 C160 20 260 120 380 120"
                : "M380 20 C260 20 160 120 40 120"
            }")`,
          }}
        />

      </svg>

    </div>
  );
}