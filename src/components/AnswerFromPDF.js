"use client"
// // components/AnswerFromPDF.js

// import React, { useState } from 'react';

// const AnswerFromPDF = () => {
//   const [question, setQuestion] = useState('');
//   const [pdfFile, setPdfFile] = useState(null);
//   const [answer, setAnswer] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [uploadSuccess, setUploadSuccess] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);
//     setUploadSuccess(false);

//     try {
//       const formData = new FormData(e.target);
//       const response = await fetch('/api/answer_question', {
//         method: 'POST',
//         body: formData,
//       });
//       console.log("Testing 1")
//       const data = await response.json();
//       console.log("Testing")
//       setAnswer(data.answer);
//       setUploadSuccess(true);
//     } catch (error) {
//       console.error(error);
//       setError('Error processing PDF_ 1');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className=" bg-white py-3 rounded-md space-y-4 flex-col md:flex-row w-auto px-2">
//       {/* Input fields for question and PDF upload */}
//       <div className="flex flex-row items-center">
//         <label htmlFor="question" className="text-sm text-black font-medium mr-2">
//           Question:
//         </label>
//         <input
//           type="text"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="Enter your question"
//           id="question"
//           className="rounded-md text-black border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
//         />
//       </div>
//       <div className="flex flex-row items-center">
//         <label htmlFor="pdfFile" className="text-sm text-black font-medium mr-2">
//           Upload PDF:
//         </label>
//         <input
//           type="file"
//           onChange={(e) => {
//             setPdfFile(e.target.files[0]);
//             setUploadSuccess(false);
//             }}
//           id="pdfFile"
//           className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={isLoading}
//         className={`rounded-md bg-blue-500  p-2 mt-4 text-center text-white font-medium hover:bg-blue-700 disabled:opacity-50 ${
//           isLoading ? 'cursor-not-allowed' : ''
//         }`}
//       >
//         {isLoading ? 'Processing...' : 'Ask a Question'}
//       </button>
//       {answer && <p className="text-base font-medium">Answer: {answer}</p>}
//       {error && <p className="text-red-500 text-sm">{error}</p>}
//     </form>
//   );
// };

// export default AnswerFromPDF;

import React, { useState } from 'react';
import axios from 'axios';

const AnswerFromPDF = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('question', question);
    formData.append('pdf_file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/answer_question', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
          
        },
        
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error(error);
      setAnswer('An error occurred. Please try again.');
    }
  };

  return (
    <div className=' bg-white text-black rounded-md p-2 m-2 shadow-lg flex-col items-stretch'>
    <h1 className=' text-lg font-bold'>Summarize or ask from policy</h1>
    <div className='items-end w-3/4 px-4 pb-2'>
        <p>
        <span>Upload your policy documents</span>
        <br />
        <span>Summarize the terms & conditions</span>
        <br />
        <span>Ask to explain any claim condition</span>
        <br />
        <span>Get precise and accurate asnwer in seconds</span>
        <br />
        <span className=' text-amber-500 font-semibold'>Make sure that questions are in context of the document you upload !</span></p>
      </div>
     <div className='space-y-2 px-4 pb-2'>
      
      <input className=' border-2 border-black rounded-md' type="text" value={question} onChange={handleChange} placeholder="Ask a question" />
      <br />
      <input className=' ' type="file" onChange={handleFileChange} />
      <br />
      <button className=' bg-blue-500 text-white rounded-md p-1 mt-1 w-14 hover:bg-blue-700' onClick={handleSubmit}> Ask </button>
      {answer && (<p className=' bg-gray-300 p-3 border-solid rounded-md'>{answer}</p>)}
      </div>
      
    </div>
  );
};

export default AnswerFromPDF;

