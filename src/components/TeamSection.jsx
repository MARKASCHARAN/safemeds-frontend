import workspaceImage from "../assets/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg"; 
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import face1 from '../assets/face11.jpeg';
import face2 from '../assets/face22.jpeg';
import face3 from '../assets/face33.jpeg';
import face4 from '../assets/face444.jpeg';

import faqimg from '../assets/kenny-eliason-1-aA2Fadydc-unsplash.jpg';


const TeamSection = () => {

const teamImages = [face1, face2, face3, face4];

  const faqs = [
    {
      question: "What is SAFEMEDS and how does it work?",
      answer:
        "SAFEMEDS is an AI-powered platform designed to identify, prevent, and eliminate adverse drug reactions before they occur. It uses advanced algorithms to analyze prescriptions and medication histories to ensure patient safety.",
    },
    {
      question: "Can I use SAFEMEDS without a doctor's prescription?",
      answer:
        "While SAFEMEDS provides insights into medication safety, it is not a replacement for professional medical advice. We strongly recommend consulting your healthcare provider before making any medical decisions.",
    },
    {
      question: "What makes SAFEMEDS different from traditional pharmacy apps?",
      answer:
        "Unlike traditional apps, SAFEMEDS is built with AI at its core. It not only manages your prescriptions but also proactively alerts you about adverse reactions, dosage conflicts, and unsafe combinations — all before they happen.",
    },
    {
      question: "How often is SAFEMEDS updated with the latest drug information?",
      answer:
        "SAFEMEDS syncs with verified medical and pharmaceutical databases daily to ensure the most up-to-date information is available regarding drug recalls, newly approved medications, and updated interaction guidelines.",
    },
    {
      question: "Who can benefit most from SAFEMEDS?",
      answer:
        "SAFEMEDS is ideal for patients managing chronic illnesses, elderly individuals on multiple medications, caregivers, and healthcare professionals who want to ensure the utmost safety in medication intake.",
    },
  ];

  return (
    <div className="bg-black min-h-screen relative bg-cover bg-center flex flex-col justify-center items-start text-left px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden ">

  <motion.div 
  className="absolute top-6 left-6 z-50"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <Link to="/" className="flex items-center">
    <motion.div 
      className="text-white text-3xl font-bold tracking-tight flex items-center"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-white">Safe</span>
      <span className="text-rose-500">Meds</span>
    </motion.div>
  </Link>
</motion.div>




<motion.div
  className="z-20 flex items-center justify-center min-h-screen text-center w-full px-4 "
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  <motion.h1
    className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white drop-shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.5 }}
  >
    Our Mission
  </motion.h1>
</motion.div>




      <section className="bg-white text-black py-10 px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-10 lg:mx-20 my-10">
        <div className="px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Our Team</h2>
          <p>
            We're four tech enthusiasts passionate about AI and software. United by this hackathon, we built SafeMeds to solve a real problem in medication safety using ML and full-stack development.
          </p>
        </div>
        <div className="px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Our Story</h2>
          <p>
            During the hackathon, we identified the growing risk of incorrect medication usage. In just two days, we built a tool that verifies prescriptions with AI — making healthcare smarter and safer.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src={workspaceImage} alt="workspace" className="w-full max-w-xs sm:max-w-sm md:max-w-full object-cover shadow-md" />
        </div>
      </section>


      <div className="text-white px-4 sm:px-6 md:px-10 my-10">
        <p className="text-sm sm:text-base">MEET OUR TEAM</p>
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6">BEHIND THIS IDEA</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
         {teamImages.map((imgSrc, i) => (
    <div key={i} className="bg-black">
      <img src={imgSrc} alt={`team-${i}`} className="w-50 h-60 object-cover" />
    </div>
  ))}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-black p-4">
  <h3 className="text-white text-xl font-bold mb-1">MARKA CHARAN</h3>
  <h3 className="text-white font-mono text-base mb-2">Full Stack & Ml Dev </h3>
  <p>Charan combines the best of both worlds—crafting robust full stack applications while integrating intelligent ML models.</p>
  <div className="flex gap-4 mt-3">
  <a
    href="https://github.com/MARKASCHARAN"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black p-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition transform duration-300 ease-in-out"
  >
  <FaGithub size={20} />
  </a>
  <a
    href="https://www.linkedin.com/in/marka-charan-0a4a9727a/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blue-700 p-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition transform duration-300 ease-in-out"
  >
  <FaLinkedin size={20} />
  </a>

  <a
    href="https://x.com/charan_mar68075"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blue-700 p-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition transform duration-300 ease-in-out"
  >
  <FaTwitter size={20} />
  </a>
</div>
</div>

<div className="bg-black p-4">
<h3 className="text-white text-xl font-bold mb-1">NIDHI THAKORE</h3>
<h3 className="text-white font-mono text-base mb-2">DevOps,AWS</h3>
<p>
  Nidhi specializes in continuous integration and deployment pipelines. She automates infrastructure and monitoring systems.
</p>
 <div className="flex gap-4 mt-3">
  <a
    href="https://github.com/tech-nidhi"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black p-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition transform duration-300 ease-in-out"
  >
  <FaGithub size={20} />
  </a>
  <a
    href="https://www.linkedin.com/in/nidhi-thakore-10b9b825b/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blue-700 p-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition transform duration-300 ease-in-out"
  >
  <FaLinkedin size={20} />
  </a>
</div>         
</div>

<div className="bg-black p-4">
<h3 className="text-white text-xl font-bold mb-1">DHRUMIN UPADHYAY</h3>
<h3 className="text-white font-mono text-base mb-2">Machine Learning</h3>
<p>Dhrumin leads the machine learning initiatives—designing predictive models, fine-tuning algorithms, and deriving insights from data.</p>
 <div className="flex gap-4 mt-3">
  <a
    href="https://github.com/your-charan"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black p-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition transform duration-300 ease-in-out"
  >
  <FaGithub size={20} />
  </a>
  <a
    href="https://linkedin.com/in/your-charan"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blue-700 p-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition transform duration-300 ease-in-out"
  >
  <FaLinkedin size={20} />
  </a>
</div>
</div>
        
<div className="bg-black p-4">
<h3 className="text-white text-xl font-bold mb-1">AYUSHI MAJUMDAR</h3>
<h3 className="text-white font-mono text-base mb-2">Full Stack Dev</h3>
<p>Ayushi contributes to both front-end and back-end development with a focus on user experience, performance, and modular architecture.</p>
 <div className="flex gap-4 mt-3">
  <a
    href="https://github.com/Ayushi0512"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black p-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition transform duration-300 ease-in-out"
  >
  <FaGithub size={20} />
  </a>
  <a
    href="https://www.linkedin.com/in/ayushi-majumdar-4318152a1/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blue-700 p-3 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition transform duration-300 ease-in-out"
  >
  <FaLinkedin size={20} />
  </a>
</div>
</div>
</div>


      </div>

<div className=" bg-black text-white py-10 px-4 ">
  <h2 className="text-center text-base sm:text-lg mb-2 uppercase">
    Frequently Asked Questions (FAQ)
  </h2>
  <p className="text-center text-xl sm:text-2xl font-bold max-w-4xl mx-auto mb-10">
    THIS FAQ CONTENT IS DESIGNED TO ADDRESS COMMON CONCERNS AND PROVIDE CONCISE ANSWERS
  </p>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="border-t border-white pt-4">
          <h3 className="font-semibold text-base sm:text-lg mb-1">{faq.question}</h3>
          <p className="text-sm text-gray-300">{faq.answer}</p>
        </div>
      ))}
    </div>
    <div className="hidden lg:block">
      <img src={faqimg} alt="FAQ visual" className="w-full h-auto object-cover" />
    </div>
  </div>
</div>
    </div>
  );
};

export default TeamSection;
