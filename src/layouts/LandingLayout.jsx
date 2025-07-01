import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import FeatureCards from '../components/FeatureCards';
import HowToUse from '../components/HowToUse';
import Footer from '../components/Footer';
// import News from '../components/News';


const LandingLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">

      <Navbar />
      <HeroSection />
      <FeatureCards />
      <HowToUse />
      {/* <News /> */}
      <Footer />  
    
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default LandingLayout;
