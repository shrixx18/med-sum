"use client"
// import React, { useState } from 'react';
// import axios from 'axios';
// import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

// // Set up worker for pdfjs
// GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${getDocument(
//   ).pdfjsVersion}/pdf.worker.min.js`;

// const DocUpload = () => {
//   const [file, setFile] = useState(null);
//   const [summary, setSummary] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const extractTextFromPDF = async (pdfFile) => {
//     const reader = new FileReader();
//     reader.onload = async (event) => {
//       const buffer = event.target.result;
//       const typedArray = new Uint8Array(buffer);
//       const pdf = await getDocument({ data: typedArray }).promise;
//       const text = await extractText(pdf);
//       summarizeText(text);
//     };
//     reader.readAsArrayBuffer(pdfFile);
//   };

//   const extractText = async (pdf) => {
//     let text = '';
//     for (let i = 1; i <= pdf.numPages; i++) {
//       const page = await pdf.getPage(i);
//       const content = await page.getTextContent();
//       text += content.items.map((item) => item.str).join(' ');
//     }
//     return text;
//   };

//   const summarizeText = async (text) => {
//     setIsLoading(true);

//     try {
//       const apiKey = '6FD22EA977'; // Replace 'YOUR_API_KEY' with your actual Smmry API key
//       const response = await axios.post(
//         'https://api.smmry.com',
//         {
//           sm_api_input: text,
//           sm_length: 20, // Specify the number of sentences in the summary
//         },
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Expect': '',
//             'x-api-key': apiKey,
//           },
//         }
//       );

//       setSummary(response.data.sm_api_content);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSummarize = () => {
//     if (file) {
//       extractTextFromPDF(file);
//     }
//   };

//   const downloadSummary = () => {
//     const element = document.createElement('a');
//     const fileBlob = new Blob([summary], { type: 'text/plain' });
//     element.href = URL.createObjectURL(fileBlob);
//     element.download = 'summary.txt';
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleSummarize} disabled={!file || isLoading}>
//         {isLoading ? 'Summarizing...' : 'Summarize'}
//       </button>
//       {summary && (
//         <div>
//           <div>{summary}</div>
//           <button onClick={downloadSummary}>Download Summary</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocUpload;

import React, { useState } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf';

const SummDocUpload = () => {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onDocumentLoadSuccess = (pdf) => {
    setNumPages(pdf.numPages);
    const promises = [];

    for (let i = 0; i < pdf.numPages; i++) {
      promises.push(pdf.getPage(i + 1));
    }

    Promise.all(promises)
      .then((pages) => {
        const textContent = pages.map((page) => page.getTextContent());
        return Promise.all(textContent);
      })
      .then((textContentArray) => {
        const text = textContentArray.map((content) =>
          content.items.map((item) => item.str).join('\n')
        );
        summarizeText(text.join('\n'));
      });
  };

  const summarizeText = async (text) => {
    setIsLoading(true);

    try {
      const apiKey = '6FD22EA977'; // Replace 'YOUR_API_KEY' with your actual Smmry API key
      const response = await axios.post(
        'https://api.smmry.com',
        {
          sm_api_input: text,
          sm_length: 18, // Specify the number of sentences in the summary
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Expect': '',
            'x-api-key': apiKey,
          },
        }
      );

      setSummary(response.data.sm_api_content);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSummarize = () => {
    if (file) {
      // Reset summary when a new file is uploaded
      setSummary('');
    }
  };

  const downloadSummary = () => {
    const element = document.createElement('a');
    const fileBlob = new Blob([summary], { type: 'text/plain' });
    element.href = URL.createObjectURL(fileBlob);
    element.download = 'summary.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSummarize} disabled={!file || isLoading}>
        {isLoading ? 'Summarizing...' : 'Summarize'}
      </button>
      {file && (
        <div>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
      {summary && (
        <div>
          <div>{summary}</div>
          <button onClick={downloadSummary}>Download Summary</button>
        </div>
      )}
    </div>
  );
};

export default SummDocUpload;
