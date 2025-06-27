
import { motion } from "framer-motion";
import logoss from "../assets/logos.jpeg"; 

const Footer = () => (
  <footer className="bg-gradient-to-r from-[#f9f8fd] to-[#e0e6fa] border-t-2 border-[#bcb8f7] font-sans text-[#23244c]">
    
    <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 flex-wrap">
        
        <div className="flex justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0">
          <img
            src={logoss}
            alt="SafeMeds Logo"
            className="w-32 h-auto"
          />
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          <FooterColumn title="Features">
            <FooterLink href="#">Interaction Checker</FooterLink>
            <FooterLink href="#">Upload Prescription</FooterLink>
            <FooterLink href="#">Real-Time Alerts</FooterLink>
            <FooterLink href="#">Risk Analysis</FooterLink>
          </FooterColumn>

          <FooterColumn title="Use Cases">
            <FooterLink href="#">Doctors</FooterLink>
            <FooterLink href="#">Patients</FooterLink>
            <FooterLink href="#">Pharmacies</FooterLink>
            <FooterLink href="#">Caregivers</FooterLink>
          </FooterColumn>

          <FooterColumn title="Impact">
            <FooterLink href="#">Prevent ADRs</FooterLink>
            <FooterLink href="#">Rural Health</FooterLink>
            <FooterLink href="#">Elderly Safety</FooterLink>
          </FooterColumn>

          <FooterColumn title="About">
            <FooterLink href="#">What is SafeMeds?</FooterLink>
            <FooterLink href="#">Our AI Model</FooterLink>
            <FooterLink href="#">Why It Matters</FooterLink>
          </FooterColumn>
        </div>
      </div>

      
      <div className="mt-10 flex gap-6 justify-center">
        <FooterIconLink href="https://github.com/" icon="fab fa-github" label="Github" />
        <FooterIconLink href="https://linkedin.com/" icon="fab fa-linkedin" label="LinkedIn" />
        <FooterIconLink href="https://huggingface.co/" icon="fas fa-robot" label="Hugging Face" />
      </div>
    </div>

   
<div className="relative overflow-hidden py-16 mt-10">
  <div className="absolute w-full h-full flex overflow-hidden pointer-events-none select-none z-10">
    <motion.div
      className="flex whitespace-nowrap text-[9vw] sm:text-[8vw] md:text-[3.5vw] font-extrabold text-[#94a3b8] gap-5"
      style={{ fontFamily: "inherit" }}
      animate={{ x: ["1%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
    >
      {Array(3).fill(
        <>
          · TRUSTWORTHY AI · SafeMeds · EMPOWERED · 
        </>
      )}
    </motion.div>
  </div>
</div>




    
    <p className="text-center text-sm text-[#888] mt-10">
      SafeMeds &copy; {new Date().getFullYear()} • All Rights Reserved 
    </p>
  </footer>
);


function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      {children}
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a href={href} className="block text-[#7d7fa1] text-sm mb-1 hover:text-[#5b5ddc] transition">
      {children}
    </a>
  );
}

function FooterIconLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#1b1b1b] text-base hover:text-[#5b5ddc] transition"
    >
      <i className={`${icon} text-xl`}></i>
      <span className="text-sm">{label}</span>
    </a>
  );
}

export default Footer;
