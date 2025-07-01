
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgImage from '../assets/kurt-wang-acZWNwWv_zU-unsplash.jpg';

const HeroSection = () => {
  return (
    <div
      className=" relative min-h-screen bg-cover  bg-center flex flex-col justify-center items-start text-left px-6 md:px-20 overflow-clip "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
 <motion.div 
  className="absolute top-6 left-6 "
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <Link to="/" className="flex items-center ">
    <motion.div 
      className="text-white text-3xl font-bold tracking-tight flex items-center"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-white">Safe</span>
      <span className="text-rose-500">Meds</span>
    </motion.div>
  </Link>
</motion.div>

  

      <div className="absolute top-30 right-50 hidden md:block animate-float z-10">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white p-5 rounded-xl w-64 shadow-lg">
      <p className="text-sm  leading-relaxed ">
        ⚠️ Adverse drug reactions (ADRs) cause over{' '}<span className="text-xl font-semibold text-red-600">100,000 Deaths </span> annually worldwide most are preventable with early detection.
      </p>
      </div>
      </div>

      <div className="absolute bottom-14 left-8 hidden md:block animate-floatSlow z-10">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white p-4 rounded-xl w-56 shadow-lg">
      <p className="text-xl font-semibold text-lime-400">
      ⚠️ 8% of hospitalizations are ADR-related
      </p>
      <p className="text-xs mt-1">
        SafeMeds helps avoid them early 
      </p>
      </div>
      </div>

      <div className="absolute right-10 bottom-30 transform -translate-y-1/2 hidden md:block animate-floatAlt z-10">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white p-4 rounded-xl w-64 shadow-lg">
      <p className="text-xs"><span className="text-xl font-semibold text-lime-400"> 🔍 Instantly</span> analyze uploaded prescriptions with AI and get risk feedback in{' '}<span className="text-xl font-semibold text-lime-400"> Seconds.</span>
      </p>
      </div>
      </div>

      
      <motion.div
        className="z-20 pt-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.span
          className="bg-lime-300 text-sm px-3 py-1 rounded-full text-black font-medium mb-4 inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          AI-Powered Healthcare
        </motion.span>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Instantly Check Dangerous Drug Interactions with AI
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-100 max-w-xl drop-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          SafeMeds empowers patients, caregivers, and doctors by flagging high-risk drug combinations using AI + verified medical data.
        </motion.p>

        <motion.div
          className="mt-8 flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >


        </motion.div>
      </motion.div>

      
   <a
  href="#features"
  className="absolute bottom-6 right-6 border border-gray-400 px-4 py-2 rounded flex items-center text-white text-sm md:text-base hover:bg-white hover:text-black transition"
>
  <span>Explore</span>
  <span className="material-symbols-outlined ml-2">arrow_downward</span>
</a>


     
      <style>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-floatSlow {
          animation: floatSlow 9s ease-in-out infinite;
        }
        .animate-floatAlt {
          animation: floatAlt 7s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(18px); }
        }
        @keyframes floatAlt {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
