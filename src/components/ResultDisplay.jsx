import { useState } from 'react';
import { motion } from 'framer-motion';



const ResultDisplay = ({ result }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!result) return null;

  // const riskColor = {
  //   'High Risk': 'text-red-500',
  //   'Moderate Risk': 'text-yellow-400',
  //   'Safe': 'text-green-400',
  //   'Unknown': 'text-white'
  // };

  // const riskBg = {
  //   'High Risk': 'bg-red-800/20 border-red-500',
  //   'Moderate Risk': 'bg-yellow-800/20 border-yellow-500',
  //   'Safe': 'bg-green-800/20 border-green-500',
  //   'Unknown': 'bg-white/10 border-white/20'
  // };

  // const confidence = Math.round((result.predict.confidence || 0.8) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-10 space-y-10"
    >
      
      {result.summary && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-4 rounded-xl bg-black/70 border border-lime-400 text-lime-300 text-sm sm:text-base font-semibold mb-2 shadow-md animate-pulse-fast"
        >
          ⚠️ <span className="text-white">One-Line Summary:</span> {result.summary}
        </motion.div>
      )}

      
      {result.meta && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="p-4 rounded-xl border border-white/20 bg-white/5 text-white text-sm"
        >
          <h3 className="text-base font-semibold mb-2 text-lime-300">👤 Patient Profile</h3>
          <ul className="space-y-1">
            <li><strong>Age:</strong> {result.meta.age}</li>
            <li><strong>Gender:</strong> {result.meta.gender}</li>
            <li><strong>Pregnancy/Lactating:</strong> {result.meta.pregnant}</li>
            <li><strong>Conditions:</strong> {result.meta.conditions?.join(', ') || 'None'}</li>
            <li><strong>Allergies:</strong> {result.meta.allergies?.join(', ') || 'None'}</li>
          </ul>
        </motion.div>
      )}

    

      
      {result.fullText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="p-6 rounded-xl border border-blue-500 bg-blue-900/10 text-white"
        >
          <h3 className="text-xl font-bold mb-4 text-blue-300">📋 Clinical Reasoning Output</h3>
          <pre className="whitespace-pre-wrap text-sm text-blue-100">{result.fullText}</pre>
        </motion.div>
      )}

      
      <div className="p-6 rounded-xl border border-white/20 bg-white/10 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-yellow-300">📚 Rule-Based Interactions</h3>
        {result.check?.interactions?.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {result.check.interactions.map((item, idx) => (
              <div
                key={idx}
                className="p-4 border border-yellow-400 rounded-lg bg-yellow-900/20 text-yellow-100 space-y-2"
              >
                <p className="text-lg font-semibold">{item.drugs.join(' + ')}</p>
                <p className="text-sm">⚠️ <span className="font-semibold">{item.risk}</span></p>
                <p className="text-xs italic text-gray-200">📝 {item.note}</p>

                {item.type && (
                  <>
                    <p className="text-sm">🔍 <span className="font-semibold">Type:</span> {item.type}</p>
                    <p className="text-sm">🛡 <span className="font-semibold">Action:</span> {item.action}</p>
                  </>
                )}

                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  className="text-lime-300 text-sm mt-2 hover:underline"
                >
                  {expandedIndex === idx ? 'Hide Details ▲' : 'More Details ▸'}
                </button>

                {expandedIndex === idx && (
                  <div className="mt-2 text-sm bg-white/10 p-3 rounded border border-white/20">
                    <p><span className="font-semibold">💊 Side Effects:</span> Nausea, dizziness, rash (example)</p>
                    <p><span className="font-semibold">🔄 Alternatives:</span> Ask your doctor about safer substitutes</p>
                    <p><span className="font-semibold">📖 Source:</span> Internal Drug Interaction DB</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-green-400 text-sm">
            ✅ No known drug interactions found.
          </p>
        )}
      </div>

      
      <div className="text-center">
        <button className="text-lime-400 hover:underline text-sm">
          View Suggested Alternatives ▸
        </button>
      </div>
    </motion.div>
  );
};

export default ResultDisplay;
