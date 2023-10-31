"use client"
import React, { useState } from 'react';

function DocumentUpload() {
  const [uploadedDocument, setUploadedDocument] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const buffer = e.target.result;
        setUploadedDocument(buffer);
      };
      reader.readAsArrayBuffer(file);
    } else {
      setUploadedDocument(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:ml-4 mb-4">
     <h3 className=' text-black m-1 justify-center text-center'>Upload your file here </h3>
     <br />
      <input className=' bg-blue-600 text-white rounded-lg'
        type="file"
        accept=".pdf, .png, .jpg, .jpeg"
        onChange={handleFileChange}
      />
      {uploadedDocument && (
        <div>
          <p className=' text-green-600'>Document uploaded succesfully</p>
          {/* <pre>{JSON.stringify(uploadedDocument, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
}

export default DocumentUpload;