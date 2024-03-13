import React from 'react';

function About() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-yellow-200 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 mx-6 my-10 md:p-8 md:mr-8 mb-8 text-black">
        <h1 className="text-2xl font-semibold">About Us</h1>
        <p className="my-4">
          We are a team of students from CSIT-3, and we have developed a solution to one of the most common problems.
        </p>
        <p className="my-4">
          Reading and understanding mediclaim policies and their terms and conditions can be a hectic task. Through this tool, you can easily understand complex conditions in just a few seconds.
        </p>
        <p className="my-4">
          This is our hand crafted submission to minor project lab
        </p>
      </div>
    </div>
  );
}

export default About;