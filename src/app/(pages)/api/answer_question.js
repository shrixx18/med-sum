// pages/api/answer.js

import axios from 'axios';

export default async function handler(req, res) {
  const { question, pdfFile } = req.body;

  // Prepare form data for the FastAPI request
  const formData = new FormData();
  console.log("testing1A")
  formData.append('question', question);
  console.log("testing1B")
  if (pdfFile) {
    console.log("testing1")
    formData.append('pdf_file', pdfFile);
    
  }
  console.log("testing2")
  try {
    const response = await axios.post(
      // `${process.env.API_URL}/answer_question`,
      "http://127.0.0.1:8000/answer_question",
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    console.log(response.data)

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing PDF' });
  }
}
