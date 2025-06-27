import { useState } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import  {motion}  from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  { name: "Home", path: "/" },
  { name: "Tool", path: "/tool" },
  { name: "Docs", path: "/docs" },
  { name: "About us", path: "/about" },
  { name: "Latest News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

  const contactItems = [
  "+91 (0) 7281 737838",
  "+91 (0) 7742 583200",
  "contact@safemeds.com",
];
   

return (
  <header className="font-monoreg fixed top-0 left-0 w-full z-50 bg-transparent text-white pt-0 flex justify-between items-center">
  <div className="text-xl font-bold mt-6 mr-3">
  {/* <Link
          to="/"
          className="ml-17 w-12 h-12 flex items-center justify-center text-white font-bold"
        >
          SafeMeds
        </Link> */}
  </div>

  <div className="flex items-center mt-4 mr-3">
        
  <button className="border cursor-not-allowed border-gray-500 border-[0.01px] px-3 sm:px-4 md:px-6 py-1 rounded flex items-center space-x-1 md:space-x-2 w-20 sm:w-20 md:w-35 h-9 sm:h-10 md:h-15 mr-2 mt-3 text-xs sm:text-sm md:text-xl text-white ">
  <span class="material-symbols-outlined">account_circle</span>
  <span className="text-right">Login</span>
  </button>

        
  <button
  onClick={() => setMenuOpen(true)}
  className="bg-white w-8 sm:w-10 md:w-15 h-8 sm:h-10 md:h-15 flex mr-2 sm:mr-4 md:mr-10 mt-3 flex-col justify-center items-center space-y-1 rounded">
  <span className="w-3.5 sm:w-4.5 h-0.5 bg-black"></span>
  <span className="w-3.5 sm:w-4.5 h-0.5 bg-black"></span>
  </button>
  
  </div>

  {menuOpen && (
    <div className="fixed inset-0 z-50 flex items-start justify-end mr-2 sm:mr-10 mt-3">
    <div
     className="fixed inset-0 bg-transparent bg-opacity-70 z-40"
    onClick={() => setMenuOpen(false)}/>
    <div className="fixed top-0 right-0 w-11/12 sm:w-140 h-full sm:h-175 mt-6 mr-2 sm:mr-12 rounded-md bg-slate-300 z-50 p-1.5 flex flex-col space-y-6 shadow-lg overflow-y-auto">
    <div className="flex justify-between items-center ms-10 sm:ms-80 mb-1 pl-5">
              
    <button className="border border-light px-3 sm:px-4 md:px-6 py-1 rounded flex items-center space-x-1 md:space-x-2 w-20 sm:w-24 md:w-35 h-9 sm:h-10 md:h-15 mr-2 text-xs sm:text-sm md:text-xl text-black">
    <span class="material-symbols-outlined">account_circle</span>
    <span>Login</span>
    </button>

    <button className="bg-black w-8 sm:w-10 md:w-15 h-8 sm:h-10 md:h-15 flex justify-center items-center rounded" onClick={() => setMenuOpen(false)}>
    <FiX className="text-white text-base sm:text-lg md:text-xl" />
    </button>
    </div>
    <div>
      

  <motion.nav
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="text-black font-light space-y-1.5 text-xl sm:text-xl md:text-[40px] flex flex-col p-16 font-['Monasans',_sans-serif]"
      >
        {navItems.map((item, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            whileHover={{
              scale: 1.05,
              x: 6,
              color: "#000000", 
            }}
          >
            <Link to={item.path}>{item.name}</Link>

          </motion.div>
        ))}
  </motion.nav>

      
  <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.4 },
          },
        }}
        className="mt-0 text-xs sm:text-sm md:text-xs text-black space-y-2 flex flex-col pb-0 px-16"
      >
        {contactItems.map((item, idx) => (
          <motion.p
            key={idx}
            className="underline"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02, color: "#000000" }} 
          >
            {item}
          </motion.p>
        ))}
  </motion.div>
  </div>
  </div>
  </div>)}
  </header>
  );
}
