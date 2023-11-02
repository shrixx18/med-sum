import React from 'react';
import { motion } from 'framer-motion';
function FeaturesCard() {
  return (
    <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
    <div className="bg-white rounded-lg shadow-lg p-4 mx-6 my-10 md:p-8 md:mr-8 mb-8">
    
      <h2 className="text-2xl font-semibold mb-4 text-black">Simplify in just 2 steps</h2>
      <span className="list-disc pl-6 text-black">
        <p>Upload the image of text to be simplified</p>
        <br />
        <p>A simplified summary of the uploaded image gets generated</p>
      </span>
    </div>
    </motion.div>
  );
}

export default FeaturesCard;