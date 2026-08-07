import {HiMagnifyingGlass, HiPencilSquare, HiCodeBracket, HiRocketLaunch} from "react-icons/hi2";

import ProcessCard from "../ProcessCard";
import Connector from "../Connector";

export default function ProcessTimeline() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      description:
        "We begin by understanding your business goals, audience, and project requirements to create the perfect strategy.",
      icon: <HiMagnifyingGlass />,
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "We create intuitive UI/UX designs, wireframes, and a detailed roadmap before development begins.",
      icon: <HiPencilSquare />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Using modern technologies, we develop scalable solutions and thoroughly test every feature before launch.",
      icon: <HiCodeBracket />,
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "We deploy your solution with confidence and continue providing maintenance, updates, and ongoing support.",
      icon: <HiRocketLaunch />,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">

      {/* Step 1 */}

      <div className="grid lg:grid-cols-2 items-center">
        <ProcessCard {...steps[0]} align="left" />
        <div />
      </div>

      <Connector direction="right" />

      {/* Step 2 */}

      <div className="grid lg:grid-cols-2 items-center">
        <div />
        <ProcessCard {...steps[1]} align="right" />
      </div>

      <Connector direction="left" />

      {/* Step 3 */}

      <div className="grid lg:grid-cols-2 items-center">
        <ProcessCard {...steps[2]} align="left" />
        <div />
      </div>

      <Connector direction="right" />

      {/* Step 4 */}

      <div className="grid lg:grid-cols-2 items-center">
        <div />
        <ProcessCard {...steps[3]} align="right" />
      </div>

    </div>
  );
}