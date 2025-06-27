import { motion } from "framer-motion";
import img1 from "../assets/4045.jpg";
import img2 from "../assets/dima-mukhin-DFhSL1pM90k-unsplash.jpg";
import img3 from "../assets/the-blowup-cItcSJS1sRA-unsplash.jpg";

const steps = [
  {
    title: "Enter Medications",
    description: "Type in your medications or upload a prescription. We'll handle the rest.",
    image: img1,
  },
  {
    title: "AI Interaction Check",
    description: "Our AI checks for potential interactions using medical-grade logic.",
    image: img2,
  },
  {
    title: "View Results",
    description: "Instant results show if your meds are safe, risky, or need attention.",
    image: img3,
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
      type: "tween",
    },
  }),
};

const HowToUse = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#0b1e1d] via-[#142d28] to-[#0b1e1d] py-40 px-6 sm:px-10"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          How to Use SafeMeds
        </h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto mb-14">
          Simple steps to check drug safety instantly — powered by AI and verified databases.
        </p>

        
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-1 py-5">
          {steps.map((step, index) => (
  <motion.div
    key={index}
    custom={index}
    initial={typeof window !== 'undefined' && window.innerWidth < 768 ? false : 'hidden'} 
    whileInView={typeof window !== 'undefined' && window.innerWidth < 768 ? false : 'visible'} 
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
    className="snap-start min-w-[280px] md:min-w-0 bg-[#1a2b28]/60 border border-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl hover:ring-1 hover:ring-green-400/30 transition duration-300 flex flex-col items-center text-center"
  >
    <div className="w-11 h-11 rounded-full border-2 border-green-400 text-green-300 text-base flex items-center justify-center font-bold mb-5 bg-white/5">
      {index + 1}
    </div>
    <img
      src={step.image}
      alt={step.title}
      loading="lazy"
      className="rounded-xl shadow-md mb-5 h-44 w-full object-cover"
    />
    <h3 className="text-white text-lg font-semibold mb-2">{step.title}</h3>
    <p className="text-gray-300 text-sm">{step.description}</p>
  </motion.div>
))}

        </div>
      </div>
    </section>
  );
};


export default HowToUse;
