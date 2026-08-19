// import { motion } from "framer-motion";

// import {HiOutlineClipboardList,HiOutlinePencilAlt, HiOutlineCheckCircle, HiOutlineCloudUpload,} from "react-icons/hi";

// const processes = [
//   {
//     number: "01",
//     title: "Planning",
//     description:
//       "Client's Requirement analysis and website planning",
//     icon: <HiOutlineClipboardList />,
//   },
//   {
//     number: "02",
//     title: "Design & Development",
//     description:
//       "Creation of visual design and actual coding of Project",
//     icon: <HiOutlinePencilAlt />,
//   },
//   {
//     number: "03",
//     title: "Testing",
//     description:
//       "Test the quality of the product to meet user requirements",
//     icon: <HiOutlineCheckCircle />,
//   },
//   {
//     number: "04",
//     title: "Deployment",
//     description:
//       "Launching of the product by maintaining quality.",
//     icon: <HiOutlineCloudUpload />,
//   },
// ];

// export default function DevelopmentProcess() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#030712]
//         px-6
//         py-5
//         text-white
//       "
//     >

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-1/2
//           h-[450px]
//           w-[450px]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-blue-600/5
//           blur-[130px]
//         "
//       />

//       <div className="relative z-10 mx-auto max-w-6xl">

//         {/* Section Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <p
//             className="
//               text-sm
//               font-medium
//               uppercase
//               tracking-[0.5em]
//               text-blue-400
//             "
//           >
//             OUR PROCESS
//           </p>

//           <h2
//             className="mt-5  text-4xl font-bold  tracking-tight md:text-4xl ">
//             From Idea to
//             <span className="text-blue-500">
//               {" "}Launch
//             </span>
//           </h2>

//         </motion.div>


//         <div className="relative mt-10">


//           <div
//             className="
//               absolute
//               left-[12.5%]
//               right-[12.5%]
//               top-[34px]
//               hidden
//               h-px
//               bg-white/10
//               md:block
//             "
//           />


//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 2,
//               ease: "easeInOut",
//             }}
//             style={{
//               transformOrigin: "left",
//             }}
//             className="
//               absolute
//               left-[12.5%]
//               right-[12.5%]
//               top-[34px]
//               hidden
//               h-px
//               bg-blue-500
//               md:block
//             "
//           />

//           {/* Process Items */}

//           <div
//             className="
//               grid
//               gap-12
//               md:grid-cols-4
//               md:gap-20
//             "
//           >
//             {processes.map((process, index) => (
//               <motion.div
//                 key={process.number}
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   margin: "-100px",
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.35,
//                 }}
//                 className="
//                   group
//                   relative
//                   text-center
//                 "
//               >

//                 {/* Number */}

//                 <div
//                   className="
//                     relative
//                     z-10
//                     mx-auto
//                     flex
//                     h-[68px]
//                     w-[68px]
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-[#030712]
//                     transition-all
//                     duration-500
//                     group-hover:border-blue-500/50
//                     group-hover:shadow-[0_0_30px_rgba(37,99,235,.25)]
//                   "
//                 >
//                   <span
//                     className="
//                       text-sm
//                       font-semibold
//                       text-blue-400
//                     "
//                   >
//                     {process.number}
//                   </span>
//                 </div>


//                 {/* Icon */}

//                 <motion.div
//                   whileHover={{
//                     scale: 1.1,
//                     rotate: 5,
//                   }}
//                   className="
//                     mx-auto
//                     mt-7
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-blue-500/10
//                     text-xl
//                     text-blue-400
//                     transition-all
//                     duration-500
//                     group-hover:bg-blue-500/15
//                   "
//                 >
//                   {process.icon}
//                 </motion.div>


//                 {/* Title */}

//                 <h3
//                   className="
//                     mt-5
//                     text-xl
//                     font-semibold
//                   "
//                 >
//                   {process.title}
//                 </h3>


//                 {/* Description */}

//                 <p
//                   className="
//                     mx-auto
//                     mt-4
//                     max-w-[240px]
//                     text-sm
//                     leading-7
//                     text-gray-400
//                   "
//                 >
//                   {process.description}
//                 </p>

//               </motion.div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

import {
  HiOutlineClipboardList,
  HiOutlinePencilAlt,
  HiOutlineCheckCircle,
  HiOutlineCloudUpload,
} from "react-icons/hi";

const processes = [
  {
    number: "01",
    title: "Planning",
    description:
      "Client's Requirement analysis and website planning",
    icon: <HiOutlineClipboardList />,
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "Creation of visual design and actual coding of Project",
    icon: <HiOutlinePencilAlt />,
  },
  {
    number: "03",
    title: "Testing",
    description:
      "Test the quality of the product to meet user requirements",
    icon: <HiOutlineCheckCircle />,
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Launching of the product by maintaining quality.",
    icon: <HiOutlineCloudUpload />,
  },
];

export default function DevelopmentProcess() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030712]
        px-4
        py-10
        text-white
        sm:px-6
        sm:py-12
      "
    >

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/5
          blur-[120px]
          sm:h-[450px]
          sm:w-[450px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.35em]
              text-blue-400
              sm:text-sm
              sm:tracking-[0.5em]
            "
          >
            OUR PROCESS
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              sm:mt-5
              sm:text-4xl
            "
          >
            From Idea to{" "}
            <span className="text-blue-500">
              Launch
            </span>
          </h2>
        </motion.div>


        {/* MOBILE PROCESS */}
  

<div className="relative mt-10 md:hidden">

  {/* Vertical Line */}
  <div
    className="
      absolute
      left-[20px]
      top-5
      bottom-5
      w-px
      bg-white/10
    "
  />

  {/* Animated Blue Line */}
  <motion.div
    initial={{ scaleY: 0 }}
    whileInView={{ scaleY: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 2,
      ease: "easeInOut",
    }}
    style={{
      transformOrigin: "top",
    }}
    className="
      absolute
      left-[20px]
      top-5
      bottom-5
      w-px
      bg-blue-500
    "
  />

  <div className="relative space-y-8">

    {processes.map((process, index) => (
      <motion.div
        key={process.number}
        initial={{
          opacity: 0,
          x: -20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          margin: "-50px",
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}
        className="relative flex gap-5"
      >

        {/* Number Circle */}

        <div
          className="
            relative
            z-10
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#030712]
            text-sm
            font-semibold
            text-blue-400
          "
        >
          {process.number}
        </div>


        {/* Content */}

        <div className="min-w-0 flex-1 pb-2">

          {/* Icon + Title */}

          <div className="flex items-center gap-3">

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
                text-lg
                text-blue-400
              "
            >
              {process.icon}
            </div>

            <h3
              className="
                text-base
                font-semibold
                leading-6
                text-white
              "
            >
              {process.title}
            </h3>

          </div>


          {/* Description */}

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-gray-400
            "
          >
            {process.description}
          </p>

        </div>

      </motion.div>
    ))}

  </div>

</div>


        {/* DESKTOP PROCESS */}
        

        <div className="relative mt-10 hidden md:block">

          {/* Timeline Line */}

          <div
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[34px]
              h-px
              bg-white/10
            "
          />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[34px]
              h-px
              bg-blue-500
            "
          />

          {/* Process Items */}

          <div
            className="
              grid
              grid-cols-4
              gap-20
            "
          >

            {processes.map((process, index) => (
              <motion.div
                key={process.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.35,
                }}
                className="
                  group
                  relative
                  text-center
                "
              >

                {/* Number */}

                <div
                  className="
                    relative
                    z-10
                    mx-auto
                    flex
                    h-[68px]
                    w-[68px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-[#030712]
                    transition-all
                    duration-500
                    group-hover:border-blue-500/50
                    group-hover:shadow-[0_0_30px_rgba(37,99,235,.25)]
                  "
                >
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-blue-400
                    "
                  >
                    {process.number}
                  </span>
                </div>


                {/* Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  className="
                    mx-auto
                    mt-7
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-xl
                    text-blue-400
                    transition-all
                    duration-500
                    group-hover:bg-blue-500/15
                  "
                >
                  {process.icon}
                </motion.div>


                {/* Title */}

                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                  "
                >
                  {process.title}
                </h3>


                {/* Description */}

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-[240px]
                    text-sm
                    leading-7
                    text-gray-400
                  "
                >
                  {process.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}