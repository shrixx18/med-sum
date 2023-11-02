import React from 'react';
import { motion } from 'framer-motion';
function FeaturesCard() {
  return (
    <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
    <div className="bg-white rounded-lg shadow-lg p-4 mx-6 my-10 md:p-8 md:mr-8 mb-8">
    
      <h2 className="text-2xl font-semibold mb-4 text-black">Key Features</h2>
      <ul className="list-disc pl-6 text-black">
        <li>Quick and accurate mediclaim document summarization.</li>
        <li>Easy-to-use document upload feature.</li>
        <li>Powered by huggingface 🤗 LLM model.</li>
        <li>Simplified text in just one click !</li>
      </ul>
    </div>
    </motion.div>
  );
}

export default FeaturesCard;