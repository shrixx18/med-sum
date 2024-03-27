"use client"
import React, { useState } from 'react';
import axios from 'axios'; // Example using Axios for API calls

const SummaryFromPDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setSummary(null); // Reset summary on new file selection
    setError(null); // Reset error state
  };

  const handleSubmit = async () => {
    if (!selectedFile) return; // Prevent submission without a file

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(); // Optional if backend accepts raw files
      formData.append('pdf_file', selectedFile);

      const response = await axios.post('http://127.0.0.1:8000/summary', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
        },
      });

      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error generating summary:', error);
      setError(error.message || 'Error generating summary'); // User-friendly error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-white text-black rounded-md p-2 m-2 shadow-lg flex-col items-stretch'>
      <h1 className='items-end w-3/4 px-4 pb-2 font-bold text-lg '>Generate Summary from PDF</h1>
      <div className='items-end w-3/4 px-4 pb-2'>
        <p>
        <span>Upload your policy documents</span>
        <br />
        <span>Summarize the terms & conditions</span>
        <br />
        <span>Get precise and accurate asnwer in seconds</span>
        <br />
        </p>
      </div>
      <input type="file" onChange={handleFileChange} />
      {isLoading && <p>Generating summary...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {summary && (
        <div className=' bg-gray-300 p-3 border-solid rounded-md'>
          <h2>Summary</h2>
          <p className='py-2 mt-3 px-2 mx-2'>{summary}</p>
        </div>
      )}
      <button className=' bg-blue-500 text-white rounded-md p-1 mt-1 w-auto hover:bg-blue-700' onClick={handleSubmit} disabled={isLoading}>
        Generate Summary
      </button>
    </div>
  );
};

export default SummaryFromPDF;
