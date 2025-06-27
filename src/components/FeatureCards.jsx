import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaPrescriptionBottle,
  FaHeartbeat,
  FaShieldAlt,
  FaStethoscope,
} from "react-icons/fa";
import "../index.css";
import { Link } from "react-router-dom";

const features = [
  {
    title: "AI-Powered Interaction Check",
    icon: <FaBrain className="text-3xl text-green-300" />,
    description:
      "Instantly detects high-risk drug combinations using transformer-based AI.",
  },
  {
    title: "Prescription Upload",
    icon: <FaPrescriptionBottle className="text-3xl text-blue-300" />,
    description:
      "Upload or paste your prescription — SafeMeds handles the safety checks.",
  },
  {
    title: "ADR Risk Prevention",
    icon: <FaHeartbeat className="text-3xl text-pink-400" />,
    description:
      "Helps avoid dangerous Adverse Drug Reactions (ADRs) that hospitalize thousands.",
  },
  {
    title: "Private & Secure",
    icon: <FaShieldAlt className="text-3xl text-yellow-300" />,
    description:
      "Data never leaves the secure pipeline. Privacy-first design at every step.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
      type: "tween",
    },
  }),
};

const SafeMedsInfoCards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      className="bg-[#0b1e1d] py-40 px-4 sm:px-6 md:px-20 overflow-x-hidden h-full"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Why <span className="text-green-400">SafeMeds</span> is Essential
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            AI + Medical-grade logic to prevent harmful drug interactions — before they happen.
          </p>
        </div>

        
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 pt-10 py-5 px-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
          {features.map((feature, i) => {
            const CardWrapper = isMobile ? "div" : motion.div;

            return (
              <CardWrapper
                key={i}
                {...(!isMobile && {
                  custom: i,
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: true, amount: 0.3 },
                  variants: cardVariants,
                })}
                className="min-w-[280px] md:min-w-0 snap-start bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-300 hover:ring-1 hover:ring-green-400/40 relative group"
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-green-300 blur-xl transition duration-500 pointer-events-none" />
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </CardWrapper>
            );
          })}
        </div>

       
        <div className="text-center mt-16 space-y-4 sm:space-y-0 sm:space-x-6 sm:px-20 flex flex-col sm:flex-row justify-center">
          <Link
  to="/tool"
  onClick={() => window.scrollTo(0, 0)} 
  className="inline-block bg-white text-black px-8 py-4 rounded font-medium shadow hover:bg-gray-200 transition"
>
  Try It Now
</Link>

<Link
  to="/about"
  onClick={() => window.scrollTo(0, 0)} 
  className="inline-block border border-white text-white px-8 py-4 rounded font-medium hover:bg-white hover:text-black transition"
>
  Learn More
</Link>


        </div>
      </div>
    </section>
  );
};

export default SafeMedsInfoCards;
