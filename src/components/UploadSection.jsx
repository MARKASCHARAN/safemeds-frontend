const UploadSection = () => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`🔒 Upload support coming soon for: ${file.name}`);
    }
  };

  return (
    <div className="bg-white/5 border border-white/20 rounded-xl p-6 shadow-inner">
      <label className="block text-lime-300 text-sm font-medium mb-2">
        📄 Upload a prescription (coming soon)
      </label>
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        disabled
        onChange={handleFileChange}
        className="block w-full text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-lime-400 file:text-black hover:file:bg-lime-300 cursor-not-allowed opacity-50"
      />
      <p className="text-gray-400 text-xs mt-2">
        * Feature not yet enabled in this demo version
      </p>
    </div>
  );
};

export default UploadSection;
