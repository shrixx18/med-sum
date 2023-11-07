import React, { useState, useEffect } from "react";
import { account, database } from "./appwrite/auth";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
  
    async function fetchUserData() {
      try {
        const user = await account.get();
        setUser(user);
      } catch (error) {
      }
    }

    fetchUserData();
  }, []);

  useEffect(() => {
    async function fetchFeedback() {
      try {
        const response = await database.listDocuments("feedbackCollection");
        setFeedbackList(response.documents);
      } catch (error) {

        console.log(error)
      }
    }

    fetchFeedback();
  }, []);

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    if (feedback) {
      try {
        
        const document = await database.createDocument("feedbackCollection", {
          feedback,
          username: user.name || "Anonymous",
        });
        setFeedbackList([document, ...feedbackList]);
        setFeedback("");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <div className="p-4 md:p-8 lg:px-16 py-8">
      <h1 className="text-2xl font-semibold mb-4">Feedback</h1>
      <form onSubmit={handleSubmitFeedback} className="mb-8">
        <textarea
          rows="4"
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Write your feedback here"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 mt-4"
        >
          Submit Feedback
        </button>
      </form>
      <div>
        <h2 className="text-xl font-semibold mb-4">Feedback from Users</h2>
        <ul>
          {feedbackList.map((item) => (
            <li
              key={item["$id"]}
              className="bg-white p-4 rounded shadow mb-4"
            >
              <strong>{item.username}:</strong> {item.feedback}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;