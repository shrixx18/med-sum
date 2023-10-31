import React from 'react';

function FeaturesCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4 md:p-8 md:mr-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-black">Key Features</h2>
      <ul className="list-disc pl-6 text-black">
        <li>Quick and accurate mediclaim document summarization.</li>
        <li>Easy-to-use document upload feature.</li>
        <li>Secure and reliable processing using state-of-the-art AI.</li>
        <li>Effortlessly summarize complex terms and conditions.</li>
      </ul>
    </div>
  );
}

export default FeaturesCard;