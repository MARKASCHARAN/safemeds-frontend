  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Landing from './pages/Landing';
  import About from './pages/About';
  import NotFound from './pages/NotFound';
  import { useEffect, useState } from 'react';
  import Tool from './pages/Tool';
  import './index.css'; 

  function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
        <h1 className="text-white text-6xl font-bold animate-ping">
          Safe<span className="text-rose-600">Meds</span>
        </h1>
      </div>
      );
    }

    return (
      <Router>

        <Routes>

          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Tool" element={<Tool />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        
      </Router>
    );
  }

  export default App;
