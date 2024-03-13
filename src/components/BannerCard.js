import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const BannerCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-4 md:p-8 md:flex items-center my-16"
    >
      <div className="md:w-1/2 w-auto h-auto">
        <Image
        src="/proimage.jpg"
        width={300}
        height={300}
        alt="mediclaim"
    />
      </div>
      <div className="md:w-1/2 md:ml-4">
        <h2 className="text-2xl font-semibold mb-4 text-black">Understanding Mediclaim Policies</h2>
        <p className="text-gray-600 mb-4">
          Mediclaim policies are often difficult to comprehend due to complex language and jargon. This tool simplifies the process by summarizing policy documents, making it easier for you to understand your coverage.
        </p>
        <h3 className="text-lg font-semibold text-green-600 mb-2">Benefits:</h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Quick and accurate mediclaim document summarization.</li>
          <li>Easy-to-use document upload feature.</li>
          <li>Powered by huggingface 🤗 LLM model.</li>
          <li>Simplified text in just one click!</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BannerCard;