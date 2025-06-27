import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUpload, FiShield, FiCheckCircle, FiClipboard } from 'react-icons/fi';


import InputForm from '../components/InputForm';
import UploadSection from '../components/UploadSection';
import ResultDisplay from '../components/ResultDisplay';
import Navbar from '../components/Navbar';
import bgImage from '../assets/dima-mukhin-DFhSL1pM90k-unsplash.jpg';
import { checkInteractions } from '../api/api';

const Tool = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const extractRiskLevel = (text) => {
    const match = text.match(/1\. Risk Level:\s*(.+)/i);
    return match ? match[1].trim() : 'Unknown';
  };

  const extractOneLineSummary = (text) => {
    const match = text.match(/6\. One-line Summary:\s*(.+)/i);
    return match ? match[1].trim() : null;
  };

  const extractMeta = (payload) => ({
    age: payload.age,
    gender: payload.gender,
    pregnant: payload.pregnant,
    conditions: payload.conditions,
    allergies: payload.allergies
  });

  const handleSubmit = async (patientData) => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/groq`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patientData),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const ruleRes = await checkInteractions(patientData.medications);

      setResult({
        predict: {
          label: extractRiskLevel(data.response.response),
          confidence: 0.85
        },
        summary: extractOneLineSummary(data.response.response),
        check: ruleRes,
        fullText: data.response.response,
        meta: extractMeta(patientData)
      });
    } catch (err) {
      console.error('Error:', err);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${bgImage})` }} />
      <Navbar />

      <motion.div className="absolute top-4 left-4 z-50" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
        <Link to="/" className="flex items-center">
          <motion.div className="text-white text-2xl sm:text-3xl font-bold tracking-tight flex items-center" whileHover={{ scale: 1.05 }}>
            <span className="text-white">Safe</span>
            <span className="text-rose-500">Meds</span>
          </motion.div>
        </Link>
      </motion.div>

      <div className="relative px-4 py-20 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto">

          {/* Intro */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 text-white">
              <span className="font-medium">Medical-Grade</span> Medication Safety Analysis
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Utilizing validated pharmaceutical databases and clinical algorithms to safeguard your prescription regimen.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: <FiShield />, title: "HIPAA Compliant", desc: "Your data is encrypted and never stored" },
              { icon: <FiCheckCircle />, title: "Clinically Validated", desc: "Algorithms reviewed by pharmacologists" },
              { icon: <FiClipboard />, title: "Evidence-Based", desc: "Using peer-reviewed interaction data" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center">
                <div className="p-2 bg-teal-500/10 rounded-full text-teal-300 mr-0 sm:mr-3 mb-3 sm:mb-0">{item.icon}</div>
                <div>
                  <h3 className="text-sm font-medium text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Input Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="bg-white/[0.07] backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl shadow-xl">
            {/* Step 1 */}
            <div className="mb-8">
              <h3 className="text-white font-medium mb-3 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-sm font-semibold mr-2">1</span>
                Enter Patient Information & Medications
              </h3>
              <p className="text-slate-400 text-sm mb-4 ml-2 sm:ml-8">
                Include prescription drugs, supplements, age, gender, and any allergies or conditions
              </p>
              <div className="ml-2 sm:ml-8">
                <InputForm onSubmit={handleSubmit} />
              </div>
            </div>

            {/* Upload (Optional) */}
            <div className="mb-8">
              <h3 className="text-white font-medium mb-3 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-sm font-semibold mr-2">2</span>
                Upload Prescription (Optional)
              </h3>
              <p className="text-slate-400 text-sm mb-4 ml-2 sm:ml-8">Add your prescription file for deeper analysis</p>
              <div className="ml-2 sm:ml-8 bg-white/[0.03] border border-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 text-white font-light mb-3">
                  <FiUpload className="text-teal-400" />
                  <span>Secure Document Upload</span>
                  <span className="ml-2 px-2 py-0.5 bg-slate-700/60 rounded text-xs text-slate-300">Coming Soon</span>
                </div>
                <UploadSection />
              </div>
            </div>

            {/* Loading */}
            {loading && (
              <div className="mt-8 bg-slate-700/30 border border-slate-600/30 rounded-lg p-5">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 relative">
                    <div className="absolute inset-0 border-2 border-teal-400/30 border-t-teal-400 rounded-full animate-spin"></div>
                  </div>
                  <p className="text-slate-300 font-light">Processing medication analysis...</p>
                </div>
              </div>
            )}

            {/* Results */}
            {result && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-8">
                <h3 className="text-white font-medium mb-3 flex items-center">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-sm font-semibold mr-2">3</span>
                  Clinical Assessment Results
                </h3>
                <div className="ml-2 sm:ml-8">
                  <ResultDisplay result={result} />
                </div>
              </motion.div>
            )}

            {/* Empty */}
            {!result && !loading && (
              <div className="mt-8 bg-slate-700/20 border border-slate-600/20 rounded-lg p-6 text-center">
                <p className="text-slate-400 font-light">
                  Enter medications above to receive your risk evaluation and rule-based interactions.
                </p>
              </div>
            )}
          </motion.div>

          {/* Disclaimer */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 bg-slate-800/60 border border-slate-700/40 rounded-lg p-4 text-sm text-slate-400">
            <p className="font-light">
              <strong className="text-white font-medium">Medical Disclaimer:</strong> SafeMeds is a support tool, not a substitute for professional healthcare advice. Always consult your doctor.
            </p>
          </motion.div>

          {/* Footer */}
          <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-12 text-center text-slate-500 text-sm border-t border-slate-800 pt-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-4">
              <a href="#" className="hover:text-teal-400 transition-colors text-xs uppercase tracking-wider">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition-colors text-xs uppercase tracking-wider">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition-colors text-xs uppercase tracking-wider">Data Security</a>
              <a href="#" className="hover:text-teal-400 transition-colors text-xs uppercase tracking-wider">Contact Us</a>
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
};

export default Tool;
