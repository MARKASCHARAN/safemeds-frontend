import { useState } from 'react';

const MED_SUGGESTIONS = [
  'Paracetamol', 'Ibuprofen', 'Aspirin', 'Warfarin', 'Metformin',
  'Amoxicillin', 'Atorvastatin', 'Losartan', 'Omeprazole', 'Ciprofloxacin'
];

const InputForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState('');
  const [isListening, setIsListening] = useState(false);

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [reason, setReason] = useState('');
  const [conditions, setConditions] = useState('');
  const [pregnant, setPregnant] = useState('Unknown');
  const [allergies, setAllergies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const meds = inputValue
      .split(',')
      .map((m) => m.trim())
      .filter(Boolean);

    const condList = conditions.split(',').map((c) => c.trim()).filter(Boolean);
    const allergyList = allergies.split(',').map((a) => a.trim()).filter(Boolean);

    if (meds.length < 2) {
      setError('Enter at least 2 medications');
      return;
    }
    if (!age || !gender) {
      setError('Age and gender are required');
      return;
    }

    setError('');

    const payload = {
      medications: meds,
      age: parseInt(age, 10),
      gender,
      reason,
      conditions: condList,
      pregnant,
      allergies: allergyList
    };

    onSubmit(payload);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);

    const lastEntry = val.split(',').pop().trim().toLowerCase();
    const suggestions = MED_SUGGESTIONS.filter((med) =>
      med.toLowerCase().startsWith(lastEntry)
    );
    setFiltered(lastEntry ? suggestions : []);
  };

  const handleSuggestionClick = (med) => {
    const parts = inputValue.split(',');
    parts[parts.length - 1] = ` ${med}`;
    const newInput = parts.join(',').replace(/^,/, '');
    setInputValue(newInput);
    setFiltered([]);
  };

  const startVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice input not supported.');
      return;
    }
    const rec = new window.webkitSpeechRecognition();
    rec.lang = 'en-US';
    rec.continuous = false;
    rec.interimResults = false;
    setIsListening(true);
    rec.start();

    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInputValue((prev) => (prev ? `${prev}, ${transcript}` : transcript));
      setIsListening(false);
    };
    rec.onerror = () => setIsListening(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/20 rounded-xl p-6 mb-4 shadow-inner relative space-y-4"
    >
      <label className="block text-lime-300 text-sm font-medium">
        💊 Medications (comma-separated)
      </label>

      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="e.g., Paracetamol, Ibuprofen"
          className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        <button
          type="button"
          onClick={startVoiceInput}
          className={`absolute right-2 top-2 px-3 py-1 rounded-md border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition ${
            isListening ? 'animate-pulse bg-lime-500 text-black' : ''
          }`}
        >
          🎤
        </button>

        {filtered.length > 0 && (
          <ul className="absolute z-10 bg-black/90 border border-white/20 text-white w-full mt-2 rounded-lg max-h-48 overflow-y-auto">
            {filtered.map((med, idx) => (
              <li
                key={idx}
                onClick={() => handleSuggestionClick(med)}
                className="px-4 py-2 hover:bg-lime-500 hover:text-black cursor-pointer transition"
              >
                {med}
              </li>
            ))}
          </ul>
        )}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="px-4 py-2 rounded-md bg-white/10 text-white"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="px-4 py-2 rounded-md bg-white/10 text-white"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Reason for taking medications (optional)"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-white/10 text-white"
      />

      <input
        type="text"
        placeholder="Existing conditions (comma-separated)"
        value={conditions}
        onChange={(e) => setConditions(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-white/10 text-white"
      />

      <select
        value={pregnant}
        onChange={(e) => setPregnant(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-white/10 text-white"
      >
        <option value="Unknown">Pregnant/Lactating?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <input
        type="text"
        placeholder="Known allergies (comma-separated)"
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-white/10 text-white"
      />

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full mt-2 bg-lime-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-lime-300 transition"
      >
        Check Interactions
      </button>
    </form>
  );
};

export default InputForm;
