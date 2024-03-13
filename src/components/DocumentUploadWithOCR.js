"use client"
import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const DocumentUploadWithOCR = () => {
  const [text, setText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      
      Tesseract.recognize(file, 'eng', { logger: (info) => console.log(info) })
        .then(({ data: { text } }) => {
          setText(text);
        })
        .catch((error) => {
          console.error('Error during OCR:', error);
        });
    }
  };

  const callAPI = (extractedText) => {
    const data = {
      inputs: text, 
    };

    fetch("https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6", {
      method: "POST",
      headers: {
        Authorization: "Bearer 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", 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        //console.log(result)
        setApiResponse(result[0].summary_text);
      })
      .catch((error) => {
        console.error('Error :', error);
      });

  };

  return (
    <section className="flex flex-col md:flex-row md:justify-between my-10">
    <div className="justify-end">
  
     <div className=" mx-auto p-4 bg-white rounded-lg shadow-lg text-black">
      <h1 className="text-2xl font-semibold mb-4">Upload Image</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 mb-4 border rounded shadow"
      />

      {imageFile && (
        <div className="mb-4">
          <img src={URL.createObjectURL(imageFile)} alt="Uploaded Image" className=" w-10 rounded shadow" />
        </div>
      )}

      {text && (
        <div className="p-2 max-w-fit max-h-80 overflow-y-auto bg-gray-100 rounded shadow justify-items-center">
          <h2 className=" text-base font-semibold mb-2 text-green-600 text-center">Uploaded successfully !</h2>
          {/* <pre>{text}</pre> */}
        </div>
      )}

      <button
        onClick={callAPI}
        className=" bg-green-500 text-white rounded p-2 mt-4 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Summarize
      </button>


    </div>
    </div>
    
   
    <div className='p-2'>
  {apiResponse && (
    <div className="max-w-xl p-4 mx-2 bg-white rounded-lg shadow-lg text-black">
      <h2 className="text-lg font-semibold mb-2">Simplified terms and conditions:</h2>
      <div className="p-4 max-h-80 overflow-y-auto bg-gray-100 rounded shadow">
        <p>{JSON.stringify(apiResponse, null, 2)}</p>
      </div>
    </div>
  )}
 </div>
</section>
  );
};

export default DocumentUploadWithOCR;